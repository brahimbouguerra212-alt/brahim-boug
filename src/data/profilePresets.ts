import type { CEFRLevel, EnglishAccent, LearningGoal, LearningMode, SkillLevels } from '../types/learning.ts';

export interface ProfilePreset {
  id: string;
  titleAr: string;
  titleEn: string;
  badgeAr: string;
  descriptionAr: string;
  estimatedLevel: CEFRLevel;
  skills: SkillLevels;
  primaryGoal: LearningGoal;
  dailyGoalMinutes: number;
  learningMode: LearningMode;
  preferredAccent: EnglishAccent;
  activeFocusAreas: string[];
  arabicDialect: 'fusha' | 'gulf' | 'egyptian' | 'levantine' | 'maghrebi';
  industryInterests: string[];
  speechPace: number;
}

export const PROFILE_PRESETS: ProfilePreset[] = [
  {
    id: 'preset-beginner-zero',
    titleAr: 'تأسيس من الصفر المطلق (A0 - A1)',
    titleEn: 'Zero to Foundation (A0 - A1)',
    badgeAr: 'مبتدئ تماماً',
    descriptionAr: 'من نطق الحروف الأبجدية، مخارج الأصوات، والتمييز الصوتي الدقيق بين P و B، حتى تكوين أولى الجمل.',
    estimatedLevel: 'A0',
    skills: {
      grammar: 'A0',
      vocabulary: 'A0',
      reading: 'A0',
      listening: 'A0',
      speaking: 'A0',
      writing: 'A0',
    },
    primaryGoal: 'fluent_speaking',
    dailyGoalMinutes: 15,
    learningMode: 'arabic_assisted',
    preferredAccent: 'US',
    activeFocusAreas: ['p_vs_b', 'verb_to_be_omission', 'word_order', 'the_schwa'],
    arabicDialect: 'fusha',
    industryInterests: ['daily'],
    speechPace: 0.85,
  },
  {
    id: 'preset-elementary-a2',
    titleAr: 'المستوى الأساسي وتطوير الطلاقة (A2)',
    titleEn: 'Elementary Real-World Communication (A2)',
    badgeAr: 'مستوى أساسي',
    descriptionAr: 'بناء الجمل اليومية، الماضي البسيط، حروف الجر، والمقارنات في المواقف الحياتية والعملية.',
    estimatedLevel: 'A2',
    skills: {
      grammar: 'A2',
      vocabulary: 'A2',
      reading: 'A2',
      listening: 'A2',
      speaking: 'A1',
      writing: 'A2',
    },
    primaryGoal: 'travel',
    dailyGoalMinutes: 20,
    learningMode: 'bilingual',
    preferredAccent: 'US',
    activeFocusAreas: ['past_simple', 'prepositions', 'stative_verbs', 'comparatives'],
    arabicDialect: 'fusha',
    industryInterests: ['daily', 'travel'],
    speechPace: 0.95,
  },
  {
    id: 'preset-tech-engineer',
    titleAr: 'مهندس برمجيات وتقنية (B2)',
    titleEn: 'Software Engineer & Tech Specialist (B2)',
    badgeAr: 'تقني ومبرمج',
    descriptionAr: 'مصطلحات هندسة البرمجيات، اجتماعات الـ Standup، كتابة التوثيق الفني، ونقاش المعماريات بطلاقة.',
    estimatedLevel: 'B2',
    skills: {
      grammar: 'B2',
      vocabulary: 'B2',
      reading: 'C1',
      listening: 'B2',
      speaking: 'B1',
      writing: 'B2',
    },
    primaryGoal: 'tech',
    dailyGoalMinutes: 20,
    learningMode: 'bilingual',
    preferredAccent: 'US',
    activeFocusAreas: ['phrasal_verbs', 'prepositions', 'present_perfect', 'consonant_clusters'],
    arabicDialect: 'fusha',
    industryInterests: ['tech', 'business'],
    speechPace: 1.0,
  },
  {
    id: 'preset-business-leader',
    titleAr: 'قيادة الأعمال والتفاوض الدولي (B2 - C1)',
    titleEn: 'Business Leader & Corporate Executive (B2 - C1)',
    badgeAr: 'أعمال وإدارة',
    descriptionAr: 'المفاوضات بالإنجليزية، عروض الاستثمار (Pitching)، والبريد التنفيذي عالي الإقناع.',
    estimatedLevel: 'B2',
    skills: {
      grammar: 'B2',
      vocabulary: 'C1',
      reading: 'B2',
      listening: 'B2',
      speaking: 'B2',
      writing: 'C1',
    },
    primaryGoal: 'career',
    dailyGoalMinutes: 25,
    learningMode: 'immersion',
    preferredAccent: 'UK',
    activeFocusAreas: ['phrasal_verbs', 'present_perfect', 'word_order', 'v_vs_f'],
    arabicDialect: 'gulf',
    industryInterests: ['business', 'tech'],
    speechPace: 1.0,
  },
  {
    id: 'preset-ielts-academic',
    titleAr: 'التحضير الأكاديمي وآيلتس (Target: 7.5+)',
    titleEn: 'IELTS / TOEFL Academic Aspirant',
    badgeAr: 'أكاديمي وآيلتس',
    descriptionAr: 'المقال الأكاديمي المعقد، تنوع المفردات، وتجنب التكرار والترجمة الحرفية مع روابط الجمل المتقدمة.',
    estimatedLevel: 'B2',
    skills: {
      grammar: 'B2',
      vocabulary: 'C1',
      reading: 'C1',
      listening: 'B2',
      speaking: 'B1',
      writing: 'B2',
    },
    primaryGoal: 'ielts_toefl',
    dailyGoalMinutes: 30,
    learningMode: 'bilingual',
    preferredAccent: 'UK',
    activeFocusAreas: ['prepositions', 'present_perfect', 'the_schwa', 'phrasal_verbs'],
    arabicDialect: 'fusha',
    industryInterests: ['academic', 'business'],
    speechPace: 0.95,
  },
];
