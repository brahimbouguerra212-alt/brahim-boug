import type { EnglishAccent } from '../types/learning.ts';

let synth: SpeechSynthesis | null = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

let cachedVoices: SpeechSynthesisVoice[] = [];
let activeHtmlAudio: HTMLAudioElement | null = null;
let activeAudioCtx: AudioContext | null = null;
let activeBufferSource: AudioBufferSourceNode | null = null;
let currentSpeechRequestId = 0;

interface CachedTtsAudio {
  base64: string;
  mimeType: string;
  sampleRate?: number;
}

const ttsAudioCache = new Map<string, CachedTtsAudio>();
let clientTtsCooldownUntil = 0;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!activeAudioCtx || activeAudioCtx.state === 'closed') {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return null;
    activeAudioCtx = new AudioContextClass();
  }
  if (activeAudioCtx && activeAudioCtx.state === 'suspended') {
    activeAudioCtx.resume().catch(() => {});
  }
  return activeAudioCtx;
}

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (!synth) return resolve([]);
    const existing = synth.getVoices();
    if (existing.length > 0) {
      cachedVoices = existing;
      return resolve(existing);
    }
    synth.onvoiceschanged = () => {
      cachedVoices = synth!.getVoices();
      resolve(cachedVoices);
    };
    setTimeout(() => resolve(synth ? synth.getVoices() : []), 500);
  });
}

if (typeof window !== 'undefined') {
  loadVoices();
}

async function speakBrowserFallback(
  text: string,
  accent: EnglishAccent = 'US',
  rate = 1.0,
  onEnd?: () => void
): Promise<void> {
  if (!synth) {
    onEnd?.();
    return;
  }
  synth.cancel();
  const voices = cachedVoices.length > 0 ? cachedVoices : await loadVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = 1.0;
  const langPrefix = accent === 'UK' ? 'en-GB' : 'en-US';
  const matchingVoice =
    voices.find(
      (v) =>
        v.lang.replace('_', '-').startsWith(langPrefix) &&
        (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Siri'))
    ) ||
    voices.find((v) => v.lang.replace('_', '-').startsWith(langPrefix)) ||
    voices.find((v) => v.lang.startsWith('en')) ||
    voices[0];
  if (matchingVoice) {
    utterance.voice = matchingVoice;
    utterance.lang = matchingVoice.lang;
  } else {
    utterance.lang = langPrefix;
  }
  utterance.onend = () => {
    onEnd?.();
  };
  utterance.onerror = () => {
    onEnd?.();
  };
  synth.speak(utterance);
}

async function playTtsPayload(
  payload: CachedTtsAudio,
  rate: number,
  reqId: number,
  onEnd?: () => void
): Promise<boolean> {
  try {
    const binary = atob(payload.base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }

    const mimeLower = (payload.mimeType || '').toLowerCase();
    const isRawPcm =
      mimeLower.includes('l16') ||
      mimeLower.includes('pcm') ||
      (len > 4 &&
        !(bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) &&
        !(bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0) &&
        !(bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33));

    if (isRawPcm) {
      const ctx = getAudioContext();
      if (!ctx) return false;
      let sampleRate = payload.sampleRate || 24000;
      const rateMatch = mimeLower.match(/rate=(\d+)/);
      if (rateMatch) {
        sampleRate = parseInt(rateMatch[1], 10) || 24000;
      }
      const sampleCount = Math.floor(bytes.byteLength / 2);
      if (sampleCount <= 0) return false;
      const audioBuffer = ctx.createBuffer(1, sampleCount, sampleRate);
      const channelData = audioBuffer.getChannelData(0);
      const dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
      for (let i = 0; i < sampleCount; i++) {
        const int16 = dataView.getInt16(i * 2, true);
        channelData[i] = int16 / 32768;
      }
      if (reqId !== currentSpeechRequestId) return true;
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.playbackRate.value = Math.max(0.65, Math.min(1.4, rate));
      source.connect(ctx.destination);
      activeBufferSource = source;
      source.onended = () => {
        if (activeBufferSource === source) {
          activeBufferSource = null;
        }
        onEnd?.();
      };
      source.start(0);
      return true;
    }

    const blob = new Blob([bytes], { type: payload.mimeType || 'audio/wav' });
    const audioUrl = URL.createObjectURL(blob);
    const audio = new Audio(audioUrl);
    audio.playbackRate = Math.max(0.65, Math.min(1.4, rate));
    activeHtmlAudio = audio;
    return await new Promise<boolean>((resolve) => {
      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        if (activeHtmlAudio === audio) activeHtmlAudio = null;
        onEnd?.();
      };
      audio.onerror = () => {
        URL.revokeObjectURL(audioUrl);
        if (activeHtmlAudio === audio) activeHtmlAudio = null;
        resolve(false);
      };
      audio
        .play()
        .then(() => resolve(true))
        .catch(() => {
          URL.revokeObjectURL(audioUrl);
          if (activeHtmlAudio === audio) activeHtmlAudio = null;
          resolve(false);
        });
    });
  } catch {
    return false;
  }
}

export async function speakEnglish(
  text: string,
  accent: EnglishAccent = 'US',
  rate = 1.0,
  onEnd?: () => void
): Promise<void> {
  stopSpeaking();
  const reqId = ++currentSpeechRequestId;
  const cleanText = text.replace(/[#*`]/g, '').trim();
  if (!cleanText) {
    onEnd?.();
    return;
  }
  const cacheKey = `${accent}:${cleanText}`;
  try {
    let cachedPayload = ttsAudioCache.get(cacheKey);
    if (!cachedPayload && Date.now() >= clientTtsCooldownUntil) {
      const response = await fetch('/api/gemini/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: cleanText, accent }),
      });
      if (reqId !== currentSpeechRequestId) return;
      if (response.ok) {
        const data = await response.json();
        if (data.audioBase64) {
          cachedPayload = {
            base64: data.audioBase64,
            mimeType: data.mimeType || 'audio/L16;rate=24000',
          };
          ttsAudioCache.set(cacheKey, cachedPayload);
        } else if (data.quotaCoolingDown || data.fallback) {
          clientTtsCooldownUntil = Date.now() + 15 * 60 * 1000;
        }
      }
    }
    if (reqId !== currentSpeechRequestId) return;
    if (cachedPayload) {
      const played = await playTtsPayload(cachedPayload, rate, reqId, onEnd);
      if (played) return;
    }
  } catch {
    // Fallback to browser synthesis
  }
  if (reqId === currentSpeechRequestId) {
    await speakBrowserFallback(cleanText, accent, rate, onEnd);
  }
}

export function stopSpeaking(): void {
  currentSpeechRequestId++;
  if (activeBufferSource) {
    try {
      activeBufferSource.onended = null;
      activeBufferSource.stop();
    } catch {
      // Ignore if already stopped
    }
    activeBufferSource = null;
  }
  if (activeHtmlAudio) {
    activeHtmlAudio.pause();
    activeHtmlAudio.currentTime = 0;
    activeHtmlAudio = null;
  }
  if (synth) {
    synth.cancel();
  }
}

export interface VoiceRecorderSession {
  stop: () => void;
  cancel: () => void;
}

export async function startUniversalVoiceCapture(
  onTranscribed: (transcript: string) => void,
  onError: (messageAr: string) => void,
  onStateChange?: (state: 'recording' | 'transcribing' | 'idle') => void,
  onLiveTranscript?: (liveText: string) => void,
  preferredLang: 'en-US' | 'ar-SA' = 'en-US'
): Promise<VoiceRecorderSession | null> {
  stopSpeaking();
  const SpeechRecognitionAPI =
    typeof window !== 'undefined'
      ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      : null;
  let recognition: any = null;
  let liveAccumulated = '';
  let latestInterim = '';
  let isCancelled = false;
  let hasFinished = false;

  if (SpeechRecognitionAPI) {
    try {
      recognition = new SpeechRecognitionAPI();
      recognition.lang = preferredLang;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (event: any) => {
        let finalPart = '';
        let interimPart = '';
        for (let i = 0; i < event.results.length; i++) {
          const res = event.results[i];
          if (res.isFinal) {
            finalPart += res[0].transcript + ' ';
          } else {
            interimPart += res[0].transcript;
          }
        }
        if (finalPart.trim()) {
          liveAccumulated = finalPart.trim();
        }
        latestInterim = interimPart.trim();
        const combined = [liveAccumulated, latestInterim].filter(Boolean).join(' ').trim();
        if (combined) {
          onLiveTranscript?.(combined);
        }
      };
      recognition.onerror = () => {};
      recognition.start();
    } catch {
      recognition = null;
    }
  }

  if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
    if (recognition) {
      onStateChange?.('recording');
      return {
        stop: () => {
          try {
            recognition.stop();
          } catch {}
          const finalTxt = [liveAccumulated, latestInterim].filter(Boolean).join(' ').trim();
          onStateChange?.('idle');
          if (finalTxt) {
            onTranscribed(finalTxt);
          } else {
            onError('لم يتم التقاط أي صوت واضح.');
          }
        },
        cancel: () => {
          isCancelled = true;
          try {
            recognition.stop();
          } catch {}
          onStateChange?.('idle');
        },
      };
    }
    onError('الميكروفون غير مدعوم في متصفحك.');
    return null;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const chunks: Blob[] = [];
    const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
      ? 'audio/webm;codecs=opus'
      : MediaRecorder.isTypeSupported('audio/webm')
      ? 'audio/webm'
      : MediaRecorder.isTypeSupported('audio/mp4')
      ? 'audio/mp4'
      : '';
    const recorder = mimeType
      ? new MediaRecorder(stream, { mimeType })
      : new MediaRecorder(stream);
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        chunks.push(e.data);
      }
    };
    recorder.onstop = async () => {
      if (hasFinished) return;
      hasFinished = true;
      if (recognition) {
        try {
          recognition.stop();
        } catch {}
      }
      stream.getTracks().forEach((t) => t.stop());
      if (isCancelled) {
        onStateChange?.('idle');
        return;
      }
      const liveCapturedText = [liveAccumulated, latestInterim].filter(Boolean).join(' ').trim();
      if (chunks.length === 0) {
        onStateChange?.('idle');
        if (liveCapturedText) {
          onTranscribed(liveCapturedText);
        } else {
          onError('لم يتم تسجيل أي صوت.');
        }
        return;
      }
      onStateChange?.('transcribing');
      const blob = new Blob(chunks, { type: recorder.mimeType || 'audio/webm' });
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        if (!base64) {
          onStateChange?.('idle');
          if (liveCapturedText) {
            onTranscribed(liveCapturedText);
          } else {
            onError('تعذر قراءة الصوت المسجل.');
          }
          return;
        }
        try {
          const res = await fetch('/api/gemini/transcribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              audioBase64: base64,
              mimeType: blob.type || 'audio/webm',
            }),
          });
          if (res.ok) {
            const data = await res.json();
            const serverTranscript = (data.transcript || '').trim();
            onStateChange?.('idle');
            if (serverTranscript) {
              onLiveTranscript?.(serverTranscript);
              onTranscribed(serverTranscript);
              return;
            }
          }
        } catch {
          // Fallback to liveCapturedText
        }
        onStateChange?.('idle');
        if (liveCapturedText) {
          onTranscribed(liveCapturedText);
        } else {
          onError('تعذر تحويل الصوت إلى نص.');
        }
      };
      reader.readAsDataURL(blob);
    };
    recorder.start(250);
    onStateChange?.('recording');
    return {
      stop: () => {
        if (recorder.state !== 'inactive') {
          try {
            recorder.requestData();
          } catch {}
          recorder.stop();
        }
      },
      cancel: () => {
        isCancelled = true;
        if (recognition) {
          try {
            recognition.stop();
          } catch {}
        }
        if (recorder.state !== 'inactive') {
          recorder.stop();
        } else {
          stream.getTracks().forEach((t) => t.stop());
          onStateChange?.('idle');
        }
      },
    };
  } catch {
    if (recognition) {
      try {
        recognition.stop();
      } catch {}
    }
    onError('يرجى منح إذن الميكروفون للمتابعة.');
    onStateChange?.('idle');
    return null;
  }
}
