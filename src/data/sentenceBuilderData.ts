import type { CEFRLevel } from '../types/learning.ts';

export interface SentenceBuilderChallenge {
  id: string;
  level: CEFRLevel;
  promptAr: string;
  correctSentence: string;
  wordTiles: string[];
  explanationAr: string;
  grammarFocusAr: string;
}

export const SENTENCE_BUILDER_CHALLENGES: SentenceBuilderChallenge[] = [
  // A0 Level
  {
    id: 'sb-a0-1',
    level: 'A0',
    promptAr: 'اسمي هو سارة وأنا طالبة.',
    correctSentence: 'My name is Sarah and I am a student.',
    wordTiles: ['My', 'name', 'is', 'Sarah', 'and', 'I', 'am', 'a', 'student.', 'are', 'your', 'the'],
    explanationAr: 'ترتيب الجملة الإنجليزية: صفة الملكية (My name) + فعل to be (is) + الاسم، ثم الربط بـ and مع الفاعل (I am a student).',
    grammarFocusAr: 'فعل الكينونة To Be والضمائر الشخصية',
  },
  {
    id: 'sb-a0-2',
    level: 'A0',
    promptAr: 'هذا كتابي الجديد.',
    correctSentence: 'This is my new book.',
    wordTiles: ['This', 'is', 'my', 'new', 'book.', 'these', 'are', 'book', 'new'],
    explanationAr: 'اسم الإشارة للمفرد القريب (This is) + صفة الملكية (my) + الصفة تأتي قبل الموصوف (new book).',
    grammarFocusAr: 'أسماء الإشارة وترتيب الصفات قبل الأسماء',
  },

  // A1 Level
  {
    id: 'sb-a1-1',
    level: 'A1',
    promptAr: 'أخي لا يشرب الشاي في المساء.',
    correctSentence: 'My brother does not drink tea in the evening.',
    wordTiles: ['My', 'brother', 'does', 'not', 'drink', 'tea', 'in', 'the', 'evening.', 'do', 'drinks', 'at'],
    explanationAr: 'نفي المضارع البسيط مع المفرد الغائب (My brother) يستخدم does not متبوعة بالفعل في المصدر المجرد (drink).',
    grammarFocusAr: 'نفي المضارع البسيط وحروف جر الوقت',
  },
  {
    id: 'sb-a1-2',
    level: 'A1',
    promptAr: 'أين تعمل أختك كل يوم؟',
    correctSentence: 'Where does your sister work every day?',
    wordTiles: ['Where', 'does', 'your', 'sister', 'work', 'every', 'day?', 'do', 'works', 'is'],
    explanationAr: 'ترتيب السؤال: أداة الاستفهام (Where) + الفعل المساعد (does) + الفاعل (your sister) + الفعل في المصدر (work).',
    grammarFocusAr: 'تكوين الأسئلة في المضارع البسيط (Wh- Questions)',
  },

  // A2 Level
  {
    id: 'sb-a2-1',
    level: 'A2',
    promptAr: 'هي سافرت إلى لندن الأسبوع الماضي.',
    correctSentence: 'She traveled to London last week.',
    wordTiles: ['She', 'traveled', 'to', 'London', 'last', 'week.', 'travel', 'did', 'in'],
    explanationAr: 'الماضي البسيط: الفاعل (She) + التصريف الثاني للفعل (traveled) + حرف الجر إلى (to) + الظرف الزمني (last week).',
    grammarFocusAr: 'الماضي البسيط للأفعال المنتظمة',
  },
  {
    id: 'sb-a2-2',
    level: 'A2',
    promptAr: 'بينما كنت نائماً، اتصل بي صديقي.',
    correctSentence: 'While I was sleeping, my friend called me.',
    wordTiles: ['While', 'I', 'was', 'sleeping,', 'my', 'friend', 'called', 'me.', 'am', 'calls', 'when'],
    explanationAr: 'الماضي المستمر مع While للحدث الطويل (was sleeping)، والماضي البسيط للحدث القاطع (called me).',
    grammarFocusAr: 'الماضي المستمر والماضي البسيط مع While',
  },

  // B1 Level
  {
    id: 'sb-b1-1',
    level: 'B1',
    promptAr: 'لقد عشت في هذه المدينة منذ عام 2018.',
    correctSentence: 'I have lived in this city since 2018.',
    wordTiles: ['I', 'have', 'lived', 'in', 'this', 'city', 'since', '2018.', 'for', 'am', 'living'],
    explanationAr: 'المضارع التام (have lived) مع since لتحديد نقطة بداية زمنية في الماضي ما زالت مستمرة.',
    grammarFocusAr: 'المضارع التام مع since و for',
  },
  {
    id: 'sb-b1-2',
    level: 'B1',
    promptAr: 'لو كان لدي وقت كافٍ، لسافرت حول العالم.',
    correctSentence: 'If I had enough time, I would travel around the world.',
    wordTiles: ['If', 'I', 'had', 'enough', 'time,', 'I', 'would', 'travel', 'around', 'the', 'world.', 'will', 'have'],
    explanationAr: 'الشرطية الثانية (Second Conditional): If + ماضي بسيط (had) متبوعة بـ would + المصدر (would travel) لمواقف افتراضية خيالية.',
    grammarFocusAr: 'الجملة الشرطية الثانية للتعبير عن الافتراض',
  },

  // B2 Level
  {
    id: 'sb-b2-1',
    level: 'B2',
    promptAr: 'كان المشروع قد اكتمل قبل أن يصل المدير.',
    correctSentence: 'The project had been completed before the manager arrived.',
    wordTiles: ['The', 'project', 'had', 'been', 'completed', 'before', 'the', 'manager', 'arrived.', 'has', 'was', 'arrive'],
    explanationAr: 'الماضي التام المبني للمجهول (had been completed) للحدث الأقدم قبل حدث آخر في الماضي البسيط (arrived).',
    grammarFocusAr: 'الماضي التام في صيغة المبني للمجهول',
  },
  {
    id: 'sb-b2-2',
    level: 'B2',
    promptAr: 'بالرغم من المطر الغزير، قررنا الذهاب للتخييم.',
    correctSentence: 'Despite the heavy rain, we decided to go camping.',
    wordTiles: ['Despite', 'the', 'heavy', 'rain,', 'we', 'decided', 'to', 'go', 'camping.', 'Although', 'in', 'spite'],
    explanationAr: 'حرف الجر Despite يليه اسم (noun phrase) وليس جملة كاملة (Despite the heavy rain).',
    grammarFocusAr: 'روابط التناقض: Despite مقابل Although',
  },

  // C1 Level
  {
    id: 'sb-c1-1',
    level: 'C1',
    promptAr: 'نادراً ما شهد مجتمعنا مثل هذا التحول السريع.',
    correctSentence: 'Seldom has our society witnessed such rapid transformation.',
    wordTiles: ['Seldom', 'has', 'our', 'society', 'witnessed', 'such', 'rapid', 'transformation.', 'did', 'witness', 'is'],
    explanationAr: 'القلب النحوي البلاغي (Inversion) بعد ظرف النفي Seldom: تقديم الفعل المساعد (has) على الفاعل (our society).',
    grammarFocusAr: 'القلب النحوي التوكيدي (Negative Inversion)',
  },
  {
    id: 'sb-c1-2',
    level: 'C1',
    promptAr: 'ما يحتاجه الفريق في هذه اللحظة هو قيادة حاسمة.',
    correctSentence: 'What the team needs at this moment is decisive leadership.',
    wordTiles: ['What', 'the', 'team', 'needs', 'at', 'this', 'moment', 'is', 'decisive', 'leadership.', 'are', 'that', 'which'],
    explanationAr: 'الجملة المشقوقة البلاغية (Wh-cleft sentence) لتسليط الضوء والتوكيد على المفعول به الحاسم.',
    grammarFocusAr: 'الجمل المشقوقة التوكيدية (Cleft Sentences)',
  },

  // C2 Level
  {
    id: 'sb-c2-1',
    level: 'C2',
    promptAr: 'لو لم يكن لتدخله في الوقت المناسب، لكانت المفاوضات قد انهارت تماماً.',
    correctSentence: 'Had it not been for his timely intervention, the negotiations would have collapsed entirely.',
    wordTiles: ['Had', 'it', 'not', 'been', 'for', 'his', 'timely', 'intervention,', 'the', 'negotiations', 'would', 'have', 'collapsed', 'entirely.', 'If', 'was'],
    explanationAr: 'الصيغة الشرطية البلاغية الرفيعة البديلة عن If: حذف If وبدء الجملة بـ (Had it not been for...).',
    grammarFocusAr: 'حذف أداة الشرط والتقديم البلاغي (Inverted Conditionals)',
  },
];
