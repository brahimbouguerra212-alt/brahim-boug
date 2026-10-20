export type CEFRLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const CEFR_LEVELS_ORDER: CEFRLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const LEVEL_PACE_MAP: Record<CEFRLevel, number> = {
  A0: 0.85,
  A1: 0.9,
  A2: 0.95,
  B1: 1.0,
  B2: 1.0,
  C1: 1.0,
  C2: 1.0,
};

export type LearningGoal =
  | 'fluent_speaking'
  | 'career'
  | 'travel'
  | 'ielts_toefl'
  | 'academic'
  | 'tech';

export type LearningMode = 'arabic_assisted' | 'bilingual' | 'immersion';

export type EnglishAccent = 'US' | 'UK';

export interface SkillLevels {
  grammar: CEFRLevel;
  vocabulary: CEFRLevel;
  reading: CEFRLevel;
  listening: CEFRLevel;
  speaking: CEFRLevel;
  writing: CEFRLevel;
}

export interface VocabularyItem {
  id: string;
  word: string;
  ipa: string;
  arabicPhonetic?: string;
  partOfSpeech: string;
  arabicMeaning: string;
  englishDefinition: string;
  exampleEn: string;
  exampleAr: string;
  collocations?: string[];
  arabicMistakeWarning?: string;
  level: CEFRLevel;
  category: string;
  repetitions: number;
  intervalDays: number;
  easeFactor: number;
  nextReviewDate: string;
  lastReviewed?: string;
  mastered: boolean;
}

export interface ExerciseItem {
  id: string;
  type:
    | 'multiple_choice'
    | 'sentence_scramble'
    | 'fill_blank'
    | 'arabic_to_english'
    | 'error_hunt'
    | 'matching'
    | 'reading_comprehension';
  instructionAr: string;
  instructionEn: string;
  question: string;
  arabicContext?: string;
  passageEn?: string;
  options?: string[];
  pairs?: { left: string; right: string }[];
  correctAnswer: string | number | string[];
  explanationAr: string;
  hintAr?: string;
}

export type Exercise = ExerciseItem;

export interface Lesson {
  id: string;
  level: CEFRLevel;
  order: number;
  chapterTitleAr?: string;
  chapterTitleEn?: string;
  chapterOrder?: number;
  titleAr: string;
  titleEn: string;
  category: string;
  iconName: string;
  estimatedMinutes: number;
  objectivesAr: string[];
  explanationMarkdownAr: string;
  rulesAndStructuresAr?: string;
  summaryAr?: string;
  arabicContrastPoint: {
    titleAr: string;
    descriptionAr: string;
    badArabicHabit: string;
    correctEnglishWay: string;
  };
  examples: {
    en: string;
    ar: string;
    phoneticAr?: string;
    noteAr?: string;
  }[];
  commonMistakes: {
    wrong: string;
    correct: string;
    reasonAr: string;
  }[];
  vocabulary?: {
    word: string;
    ipa?: string;
    partOfSpeech?: string;
    meaningAr: string;
    exampleEn: string;
    exampleAr: string;
  }[];
  exercises: ExerciseItem[];
  realWorldChallengeAr: string;
}

export interface PronunciationTopic {
  id: string;
  titleAr: string;
  titleEn: string;
  phonemePair: string;
  summaryAr: string;
  mouthPositionAr: string;
  arabicTransferWarningAr: string;
  minimalPairs: {
    wordA: string;
    ipaA: string;
    meaningArA: string;
    wordB: string;
    ipaB: string;
    meaningArB: string;
  }[];
  practiceSentences: {
    en: string;
    ar: string;
    focusWords: string[];
  }[];
}

export interface ReadingPassage {
  id: string;
  titleAr: string;
  titleEn: string;
  level: CEFRLevel;
  topic: string;
  textEn: string;
  translationAr: string;
  sentencePairs: {
    en: string;
    ar: string;
  }[];
  comprehensionQuestions: {
    questionAr: string;
    questionEn: string;
    options: string[];
    correctIndex: number;
    explanationAr: string;
  }[];
}

export interface MistakeRecord {
  id: string;
  original: string;
  corrected: string;
  naturalAlternative: string;
  errorTypeAr: string;
  explanationAr: string;
  source: string;
  createdAt: string;
}

export interface UserProgress {
  hasCompletedOnboarding: boolean;
  name: string;
  estimatedLevel: CEFRLevel;
  skills: SkillLevels;
  primaryGoal: LearningGoal;
  dailyGoalMinutes: number;
  learningMode: LearningMode;
  preferredAccent: EnglishAccent;
  activeFocusAreas: string[];
  arabicDialect: 'fusha' | 'gulf' | 'egyptian' | 'levantine' | 'maghrebi';
  industryInterests: string[];
  soundEffectsEnabled: boolean;
  theme: 'light' | 'dark';
  speechPace: number;
  xp?: number;
  streakDays: number;
  lastActiveDate: string;
  completedLessonIds: string[];
  savedVocabulary: VocabularyItem[];
  todayMinutesSpent: number;
  personalMistakes: MistakeRecord[];
  completedWorkoutsCount: number;
  customLessons?: Lesson[];
  badges: {
    id: string;
    titleAr: string;
    descriptionAr: string;
    unlockedAt?: string;
  }[];
}
