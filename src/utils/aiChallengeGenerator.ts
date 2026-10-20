import type { CEFRLevel } from '../types/learning.ts';
import type { SentenceBuilderChallenge } from '../data/sentenceBuilderData.ts';

export async function generateSentenceBuilderChallenges(
  level: CEFRLevel | 'ALL' = 'A1',
  count: number = 4
): Promise<SentenceBuilderChallenge[]> {
  const targetLevel = level === 'ALL' ? 'A1' : level;
  try {
    const res = await fetch('/api/gemini/generate-challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'sentence_builder',
        level: targetLevel,
        count,
      }),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data?.challenges) && data.challenges.length > 0) {
      return data.challenges;
    }
  } catch (err) {
    console.warn('AI sentence challenge generator failed, using fallback:', err);
  }
  return [
    {
      id: `ai-sb-local-${Date.now()}-1`,
      level: targetLevel,
      promptAr: 'نحن نستمتع بتعلم اللغة الإنجليزية كل يوم.',
      correctSentence: 'We enjoy learning English every day.',
      wordTiles: ['We', 'enjoy', 'learning', 'English', 'every', 'day.', 'likes', 'speaks', 'the'],
      explanationAr: 'الفاعل We يليه فعل enjoy متبوعاً باسم الفاعل (Gerund) learning.',
      grammarFocusAr: 'الأفعال المتبوعة بـ Gerund',
    },
    {
      id: `ai-sb-local-${Date.now()}-2`,
      level: targetLevel,
      promptAr: 'يمكنك التحدث بطلاقة مع الممارسة اليومية المستمرة.',
      correctSentence: 'You can speak fluently with continuous daily practice.',
      wordTiles: ['You', 'can', 'speak', 'fluently', 'with', 'continuous', 'daily', 'practice.', 'speaks', 'are', 'in'],
      explanationAr: 'الفعل المساعد can يليه المصدر speak، والظرف fluently يصف طريقة التحدث.',
      grammarFocusAr: 'الأفعال المساعدة وظروف الحال',
    },
  ];
}

export async function generateListeningChallenges(
  level: CEFRLevel = 'A1',
  count: number = 3
): Promise<any[]> {
  try {
    const res = await fetch('/api/gemini/generate-challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'listening',
        level,
        count,
      }),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data?.challenges) && data.challenges.length > 0) {
      return data.challenges;
    }
  } catch (err) {
    console.warn('AI listening challenge generator error:', err);
  }
  return [
    {
      id: `ai-list-local-${Date.now()}`,
      level,
      sentenceEn: 'Consistent daily effort builds unstoppable fluency.',
      translationAr: 'الجهد اليومي المستمر يبني طلاقة لغوية لا تُقهر.',
      phoneticAr: 'كُونْسِسْتَنْت دَيْلِي إِفُورْت بِلْدْز أَنْسْتُوبَابِل فْلُوِّنْسِي',
      hintAr: 'الفاعل هو المركب Consistent daily effort ثم الفعل builds مع s المفرد الغائب',
      wordsBank: ['Consistent', 'daily', 'effort', 'builds', 'unstoppable', 'fluency.', 'build', 'an', 'effortless'],
    },
  ];
}

export async function generateVocabularyCards(
  level: CEFRLevel = 'A1',
  count: number = 6
): Promise<any[]> {
  try {
    const res = await fetch('/api/gemini/generate-challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'vocabulary',
        level,
        count,
      }),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data?.cards) && data.cards.length > 0) {
      return data.cards;
    }
  } catch (err) {
    console.warn('AI vocabulary generator error:', err);
  }
  return [
    {
      id: `ai-voc-local-${Date.now()}-1`,
      word: 'Determination',
      ipa: '/dɪˌtɜː.mɪˈneɪ.ʃən/',
      arabicMeaning: 'العزيمة والإصرار الصلب',
      arabicPhonetic: 'دِيتِيرْمِينَيْشَن',
      exampleEn: 'With determination and daily practice, nothing is impossible.',
      level,
      arabicMistakeWarning: 'اسم مجرد، لا تقل with determinations بل with determination.',
    },
  ];
}

export async function generateReadingPassage(
  level: CEFRLevel = 'B1',
  topic: string = 'النجاح والتعلم'
): Promise<any | null> {
  try {
    const res = await fetch('/api/gemini/generate-challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'reading',
        level,
        topic,
      }),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (data?.passage) {
      return data.passage;
    }
  } catch (err) {
    console.warn('AI reading passage generator error:', err);
  }
  return null;
}

export async function generateLessonExercises(
  lessonTitle: string,
  level: CEFRLevel = 'A1',
  count: number = 3
): Promise<any[]> {
  try {
    const res = await fetch('/api/gemini/generate-challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'lesson_exercises',
        topic: lessonTitle,
        level,
        count,
      }),
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data?.exercises) && data.exercises.length > 0) {
      return data.exercises;
    }
  } catch (err) {
    console.warn('AI lesson exercises generator error:', err);
  }
  return [];
}
