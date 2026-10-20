import { useState, useCallback, useEffect } from 'react';
import { speakEnglish, stopSpeaking } from '../utils/speech.ts';
import { useLearning } from '../context/LearningContext.tsx';

export function useAudioSpeaker() {
  const { progress } = useLearning();
  const [playingId, setPlayingId] = useState<string | null>(null);

  const playSpeech = useCallback(
    (text: string, id: string, customPace?: number) => {
      if (playingId === id) {
        stopSpeaking();
        setPlayingId(null);
        return;
      }
      setPlayingId(id);
      const pace = customPace ?? progress.speechPace ?? 0.95;
      speakEnglish(text, progress.preferredAccent, pace, () => {
        setPlayingId(null);
      });
    },
    [playingId, progress.speechPace, progress.preferredAccent]
  );

  const stop = useCallback(() => {
    stopSpeaking();
    setPlayingId(null);
  }, []);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  return {
    playingId,
    isPlaying: (id: string) => playingId === id,
    playSpeech,
    stop,
  };
}
