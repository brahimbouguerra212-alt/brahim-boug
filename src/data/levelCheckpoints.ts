import type { CEFRLevel } from '../types/learning.ts';

export interface LevelCheckpointQuestion {
  id: string;
  questionAr: string;
  questionEn: string;
  options: string[];
  correctIndex: number;
  explanationAr: string;
}

export interface LevelCheckpointExam {
  fromLevel: CEFRLevel;
  toLevel: CEFRLevel;
  titleAr: string;
  descriptionAr: string;
  passingScore: number;
  questions: LevelCheckpointQuestion[];
}

export const LEVEL_CHECKPOINT_EXAMS: Record<string, LevelCheckpointExam> = {
  A0: {
    fromLevel: 'A0',
    toLevel: 'A1',
    titleAr: 'اختبار اجتياز المستوى A0 إلى A1',
    descriptionAr: 'تحقق من إتقان الحروف، الأصوات، الأرقام، وجمل البداية الأساسية للتأهل إلى A1.',
    passingScore: 4,
    questions: [
      {
        id: 'cp-a0-1',
        questionAr: 'ما الحروف في كلمة "Station" التي تنتج صوت /ʃən/ (شن)؟',
        questionEn: 'Which letters in "Station" make the /ʃən/ sound?',
        options: ['St-', '-tion', '-ta-', '-on'],
        correctIndex: 1,
        explanationAr: 'المقطع -tion يُنطق دائماً كـ (شن/ʃən).',
      },
      {
        id: 'cp-a0-2',
        questionAr: 'أي حرف صامت لا يُنطق في كلمتي "Know" و "Knife"؟',
        questionEn: 'Which letter is silent in "Know" and "Knife"?',
        options: ['K', 'N', 'W', 'F'],
        correctIndex: 0,
        explanationAr: 'حرف K صامت تماماً إذا جاء بعده حرف N في بداية الكلمة.',
      },
      {
        id: 'cp-a0-3',
        questionAr: 'اختر الجملة الإنجليزية الصحيحة تماماً للتعريف بالنفس:',
        questionEn: 'Choose the correct English sentence:',
        options: [
          'My name is Ali and I am from Egypt.',
          'Me name Ali and I from Egypt.',
          'His name is Ali and he from Egypt.',
          'I name is Ali and am from Egypt.',
        ],
        correctIndex: 0,
        explanationAr: 'نستخدم صفة الملكية My واسم الكينونة is مع الاسم، و am مع الضمير I.',
      },
      {
        id: 'cp-a0-4',
        questionAr: 'اختر ضمير الملكية المناسب للمؤنث (Sara):',
        questionEn: 'Sara is a doctor. _____ hospital is in the city center.',
        options: ['She', 'Her', 'His', 'Your'],
        correctIndex: 1,
        explanationAr: 'صفة الملكية للمفرد المؤنث الغائب هي Her (مستشفاها).',
      },
      {
        id: 'cp-a0-5',
        questionAr: 'كيف ترد بلباقة عندما يقول لك شخص "Nice to meet you"؟',
        questionEn: 'How do you reply to "Nice to meet you"?',
        options: [
          'Nice to meet you too!',
          'I am 25 years old.',
          'See you yesterday.',
          'No, thank you.',
        ],
        correctIndex: 0,
        explanationAr: 'الرد القياسي المهذب هو "Nice to meet you too" (سعدت بلقائك أيضاً).',
      },
    ],
  },
  A1: {
    fromLevel: 'A1',
    toLevel: 'A2',
    titleAr: 'اختبار اجتياز المستوى A1 إلى A2',
    descriptionAr: 'اختبار تمكنك من تركيب الجمل الإنجليزية البسيطة، زمن المضارع البسيط، وترتيب الصفات للتأهل إلى A2.',
    passingScore: 4,
    questions: [
      {
        id: 'cp-a1-1',
        questionAr: 'اختر الجملة المكتملة نحوياً (انتبه لفعل الكينونة):',
        questionEn: 'Choose the grammatically complete sentence:',
        options: [
          'The weather very cold today.',
          'The weather is very cold today.',
          'The weather are very cold today.',
          'The weather be very cold today.',
        ],
        correctIndex: 1,
        explanationAr: 'اللغة الإنجليزية لا تسمح بجملة اسمية بدون فعل، والفاعل (The weather) مفرد فيأخذ is.',
      },
      {
        id: 'cp-a1-2',
        questionAr: 'أي عبارة تتبع الترتيب الصحيح للصفة والموصوف؟',
        questionEn: 'Which phrase has the correct English word order?',
        options: [
          'an important meeting',
          'a meeting important',
          'important a meeting',
          'meetings importants',
        ],
        correctIndex: 0,
        explanationAr: 'في الإنجليزية تسبق الصفة (important) الاسم الموصوف (meeting)، مع أداة التنكير an لأن الصفة تبدأ بصوت متحرك.',
      },
      {
        id: 'cp-a1-3',
        questionAr: 'اختر تصريف الفعل المناسب مع الغائب المفرد (He):',
        questionEn: 'My brother _____ in a bank in Riyadh.',
        options: ['work', 'works', 'working', 'is work'],
        correctIndex: 1,
        explanationAr: 'في المضارع البسيط مع الفاعل المفرد الغائب نضيف s للفعل (works).',
      },
      {
        id: 'cp-a1-4',
        questionAr: 'كيف نصيغ النفي في الماضي البسيط مع didn\'t؟',
        questionEn: "I didn't _____ the email yesterday.",
        options: ['saw', 'see', 'seen', 'seeing'],
        correctIndex: 1,
        explanationAr: 'بعد didn\'t يعود الفعل إلى أصله المجرد المصدر (see) دون أي تصريف.',
      },
      {
        id: 'cp-a1-5',
        questionAr: 'اختر الشكل الصحيح للفعل بعد الفعل المساعد Can في الطلب المهذب:',
        questionEn: 'Can you _____ me with this project?',
        options: ['to help', 'help', 'helps', 'helping'],
        correctIndex: 1,
        explanationAr: 'الأفعال الناقصة مثل Can يتبعها مصدر الفعل المجرد مباشرة بدون to وبدون إضافات.',
      },
    ],
  },
  A2: {
    fromLevel: 'A2',
    toLevel: 'B1',
    titleAr: 'اختبار اجتياز المستوى A2 إلى B1',
    descriptionAr: 'اختبار إتقان حروف الجر الزمنية والمكانية، المقارنة، والتمييز بين المضارع البسيط والمستمر للتأهل للمستوى المتوسط (B1).',
    passingScore: 4,
    questions: [
      {
        id: 'cp-a2-1',
        questionAr: 'اختر حرف الجر الصحيح مع الأيام والأوقات المحددة:',
        questionEn: 'Our team meeting is _____ Monday morning.',
        options: ['in', 'on', 'at', 'to'],
        correctIndex: 1,
        explanationAr: 'نستخدم دائماً on مع أيام الأسبوع وفتراتها المحددة (on Monday morning).',
      },
      {
        id: 'cp-a2-2',
        questionAr: 'اختر صيغة المقارنة الصحيحة للصفة القصيرة easy:',
        questionEn: 'Speaking English is _____ than you think.',
        options: ['more easier', 'easier', 'easiest', 'most easy'],
        correctIndex: 1,
        explanationAr: 'الصفة easy تنتهي بحرف y فتتحول إلى easier، ولا نجمع بين more و er أبداً.',
      },
      {
        id: 'cp-a2-3',
        questionAr: 'كيف تعبر عن "أنا أتفق معك" بالإنجليزية الطبيعية؟',
        questionEn: 'How do you say "أنا متفق معك" naturally?',
        options: [
          'I am agree with you.',
          'I agree with you.',
          'I agreeing with you.',
          'Me agree with you.',
        ],
        correctIndex: 1,
        explanationAr: 'كلمة agree فعل وليست صفة، فلا تحتاج لفعل الكينونة am قبلها.',
      },
      {
        id: 'cp-a2-4',
        questionAr: 'اختر صيغة التعبير عن خطة مستقبلية مؤكدة مع التذاكر المحجوزة:',
        questionEn: 'We bought the tickets. We _____ fly to Cairo tomorrow.',
        options: ['are going to', 'will be to', 'going', 'can to'],
        correctIndex: 0,
        explanationAr: 'عند وجود خطة مسبقة أو ترتيبات مؤكدة نستخدم صيغة am/is/are going to + المصدر.',
      },
      {
        id: 'cp-a2-5',
        questionAr: 'كيف نتعامل مع الاسم غير المعدود Advice (نصيحة)؟',
        questionEn: 'Choose the correct sentence:',
        options: [
          'He gave me a great piece of advice.',
          'He gave me many advices.',
          'He gave me an advice.',
          'His advices are good.',
        ],
        correctIndex: 0,
        explanationAr: 'كلمة advice غير معدودة في الإنجليزية، لا تجمع بـ s ولا تأخذ an، ولعدها نقول a piece of advice.',
      },
    ],
  },
  B1: {
    fromLevel: 'B1',
    toLevel: 'B2',
    titleAr: 'اختبار اجتياز المستوى B1 إلى B2',
    descriptionAr: 'اختبار التمكن من زمن المضارع التام، المبني للمجهول، والأفعال المركبة الأساسية للتأهل إلى المستوى فوق المتوسط B2.',
    passingScore: 4,
    questions: [
      {
        id: 'cp-b1-1',
        questionAr: 'اختر الزمن المناسب لحدث بدأ في الماضي وما زال مستمراً (for 5 years):',
        questionEn: 'She _____ at this tech company for five years.',
        options: ['works', 'worked', 'has worked', 'is working'],
        correctIndex: 2,
        explanationAr: 'نستخدم المضارع التام (has worked) للتعبير عن فعل بدأ في الماضي ومستمر حتى الحاضر.',
      },
      {
        id: 'cp-b1-2',
        questionAr: 'اختر الفعل المركب المناسب لتأجيل موعد الاجتماع:',
        questionEn: 'We need to _____ the meeting until Thursday.',
        options: ['put off', 'turn off', 'look after', 'wake up'],
        correctIndex: 0,
        explanationAr: 'الفعل المركب Put off يعني تأجيل (postpone)، بينما Turn off يعني إطفاء جهاز.',
      },
      {
        id: 'cp-b1-3',
        questionAr: 'اختر صيغة المبني للمجهول الصحيحة في الماضي البسيط:',
        questionEn: 'The final report _____ by the manager yesterday.',
        options: ['approved', 'was approved', 'is approve', 'has approve'],
        correctIndex: 1,
        explanationAr: 'المبني للمجهول في الماضي يتكون من was/were + التصريف الثالث (was approved).',
      },
      {
        id: 'cp-b1-4',
        questionAr: 'اختر المتلازمة اللفظية الصحيحة مع كلمة mistakes:',
        questionEn: 'Everyone _____ mistakes when learning a new language.',
        options: ['does', 'makes', 'takes', 'gets'],
        correctIndex: 1,
        explanationAr: 'المتلازمة اللفظية الطبيعية هي make a mistake وليس do a mistake.',
      },
      {
        id: 'cp-b1-5',
        questionAr: 'ما التركيب النحوي الدقيق بعد العبارة المهنية "look forward to":',
        questionEn: 'I look forward to _____ from you soon.',
        options: ['hear', 'hearing', 'heard', 'be hear'],
        correctIndex: 1,
        explanationAr: 'حرف to هنا جزء من تعبير اصطلاحي يليه اسم أو فعل مضاف له -ing (hearing).',
      },
    ],
  },
  B2: {
    fromLevel: 'B2',
    toLevel: 'C1',
    titleAr: 'اختبار اجتياز المستوى B2 إلى C1',
    descriptionAr: 'اختبار متقدم يشمل الجمل الشرطية الافتراضية، التضمين المعقد، وتجنب الضمير العائد للتأهل إلى المستوى المتقدم C1.',
    passingScore: 4,
    questions: [
      {
        id: 'cp-b2-1',
        questionAr: 'اختر التركيب الشرطي الثاني الافتراضي المناسب لإعطاء النصيحة المهنية:',
        questionEn: 'If I _____ in your position, I would negotiate a better contract.',
        options: ['am', 'will be', 'were', 'had been'],
        correctIndex: 2,
        explanationAr: 'في الحالة الشرطية الثانية الافتراضية نستخدم If I were... حتى مع ضمير المفرد.',
      },
      {
        id: 'cp-b2-2',
        questionAr: 'تجنب فخ الضمير العائد الزائد (Resumptive Pronoun):',
        questionEn: 'Select the grammatically flawless sentence:',
        options: [
          'The client who we met him yesterday signed the deal.',
          'The client who we met yesterday signed the deal.',
          'The deal which we signed it yesterday is profitable.',
          'The office where we work in it is modern.',
        ],
        correctIndex: 1,
        explanationAr: 'في الإنجليزية يُحذف الضمير العائد (him/it) عند استخدام ضمير الوصل who أو which.',
      },
      {
        id: 'cp-b2-3',
        questionAr: 'اختر أداة الربط المناسبة التي يليها اسم صريح (the tight deadline):',
        questionEn: '_____ the tight deadline, the engineering team delivered a stable product.',
        options: ['Although', 'Even though', 'Despite', 'However'],
        correctIndex: 2,
        explanationAr: 'نستخدم Despite متبوعة باسم أو شبه جملة اسمية، بينما Although تتطلب جملة كاملة من فاعل وفعل.',
      },
      {
        id: 'cp-b2-4',
        questionAr: 'تجنب حرف الجر الزائد الشائع مع الفعل "discuss":',
        questionEn: 'Choose the correct professional sentence:',
        options: [
          'We discussed about the quarterly budget.',
          'We discussed the quarterly budget.',
          'We discussed on the quarterly budget.',
          'We discussed to the quarterly budget.',
        ],
        correctIndex: 1,
        explanationAr: 'الفعل discuss يتعدى لمفعوله مباشرة ولا يأخذ about على عكس التفكير باللغة العربية.',
      },
      {
        id: 'cp-b2-5',
        questionAr: 'اختر تصريف الشرطية الثالثة للندم على حدث في الماضي:',
        questionEn: 'If they had prepared thoroughly, they _____ the presentation.',
        options: [
          'would not fail',
          'will not fail',
          'would not have failed',
          'did not fail',
        ],
        correctIndex: 2,
        explanationAr: 'قاعدة الشرطية الثالثة: If + had + V3 يقابلها في جواب الشرط would have + V3.',
      },
    ],
  },
  C1: {
    fromLevel: 'C1',
    toLevel: 'C2',
    titleAr: 'اختبار اجتياز المستوى C1 إلى C2',
    descriptionAr: 'اختبار البراعة الأكاديمية والمهنية الفائقة: القلب النحوي (Inversion)، التراكيب الشرطية المتقدمة، والدقة البلاغية.',
    passingScore: 4,
    questions: [
      {
        id: 'cp-c1-1',
        questionAr: 'اختر صيغة القلب النحوي (Negative Inversion) بعد العبارة السلبية "Not only":',
        questionEn: 'Not only _____ exceed the quarterly targets, but they also expanded into new markets.',
        options: [
          'did the team',
          'the team did',
          'has the team',
          'the team had',
        ],
        correctIndex: 0,
        explanationAr: 'عند بدء الجملة بعبارة نفي مثل Not only نطبق القلب النحوي (Inversion) بتقديم الفعل المساعد did على الفاعل.',
      },
      {
        id: 'cp-c1-2',
        questionAr: 'اختر الصيغة الشرطية الراقية بدون استخدام كلمة "If":',
        questionEn: '_____ you require any further clarification, please do not hesitate to contact our department.',
        options: ['Should', 'Had', 'Were', 'Would'],
        correctIndex: 0,
        explanationAr: 'صيغة القلب الشرطي الرسمية في المخاطبات المهنية: Should you require... = If you require...',
      },
      {
        id: 'cp-c1-3',
        questionAr: 'اختر أداة الربط الدقيقة للتعبير عن التناقض المنهجي:',
        questionEn: 'The initial prototype exhibited high latency; _____, the second iteration achieved sub-millisecond response times.',
        options: ['conversely', 'moreover', 'subsequently', 'likewise'],
        correctIndex: 0,
        explanationAr: 'نستخدم conversely للتعبير عن نقيض مباشر أو مقارنة عكسية متقابلة بدقة أكاديمية.',
      },
      {
        id: 'cp-c1-4',
        questionAr: 'اختر صيغة المضارع الشرطي المنصوب (Subjunctive Mood) في السياق الرسمي:',
        questionEn: 'The committee recommended that the lead architect _____ the security audit report immediately.',
        options: ['submit', 'submits', 'submitted', 'will submit'],
        correctIndex: 0,
        explanationAr: 'مع أفعال التوصية الرسمية (recommend, suggest, insist) يُستخدم صيغة Subjunctive بالمصدر المجرد دون s حتى مع الفاعل المفرد.',
      },
      {
        id: 'cp-c1-5',
        questionAr: 'اختر التعبير الاصطلاحي الأكثر دقة وفصاحة للتعبير عن التوافق التام مع الرؤية:',
        questionEn: 'The board member\'s remarks were completely _____ with the company\'s long-term environmental roadmap.',
        options: ['in alignment', 'in combination', 'under arrangement', 'at connection'],
        correctIndex: 0,
        explanationAr: 'التعبير الاصطلاحي الدقيق هو "in alignment with" أي في توافق وانسجام تام مع الرؤية الاستراتيجية.',
      },
    ],
  },
  C2: {
    fromLevel: 'C2',
    toLevel: 'C2',
    titleAr: 'اختبار التخرج والبراعة المطلقة C2 Mastery',
    descriptionAr: 'اختبار الكفاءة الشاملة للتأكد من الوصول إلى مرتبة المتحدث الأصلي المتمكن والبلاغة الرفيعة.',
    passingScore: 4,
    questions: [
      {
        id: 'cp-c2-1',
        questionAr: 'ما المعنى الدقيق للتعبير البلاغي "No mean feat" في السياق الاحترافي؟',
        questionEn: 'Securing unanimous board approval was no mean feat.',
        options: [
          'إنجاز عظيم وغير هين إطلاقاً (A great achievement)',
          'محاولة فاشلة وغير مقبولة',
          'عمل متوسط وسهل المنال',
          'تصرف غير لائق أخلاقياً',
        ],
        correctIndex: 0,
        explanationAr: 'أسلوب Litotes البلاغي لنفي النقيض: "no mean feat" تعني إنجازاً مبهراً وصعباً جداً.',
      },
      {
        id: 'cp-c2-2',
        questionAr: 'اختر التركيب المتوازي والقلب المتقاطع (Chiasmus) الفصيح:',
        questionEn: 'Which sentence demonstrates mastery of rhetorical chiasmus?',
        options: [
          'We must not build bridges to burn them; rather, bridge our differences to build trust.',
          'We must build bridges and also construct pathways.',
          'Building bridges is very good for everyone.',
          'They built the bridge yesterday morning.',
        ],
        correctIndex: 0,
        explanationAr: 'القلب المتقاطع (Chiasmus) تكرار الألفاظ بنظام تعاكسي بديع يعكس بلاغة C2.',
      },
      {
        id: 'cp-c2-3',
        questionAr: 'اختر الصيغة المنصوبة الشرطية المتقدمة (Subjunctive Inversion) بدون if:',
        questionEn: '_____ the economic sanctions be lifted, consumer spending would rebound instantly.',
        options: ['Were', 'Should', 'Had', 'Would'],
        correctIndex: 0,
        explanationAr: 'الصيغة الشرطية الافتراضية مع المصدر: Were the sanctions to be / Were they lifted.',
      },
      {
        id: 'cp-c2-4',
        questionAr: 'اختر الكلمة الأكثر بلاغة ودقة للتعبير عن التوافق والانسجام الجوهري التام:',
        questionEn: "The candidate's stance was completely _____ with our corporate ethos.",
        options: ['consonant', 'adjacent', 'approximate', 'contiguous'],
        correctIndex: 0,
        explanationAr: 'كلمة consonant with تعني متناغماً ومنسجماً تماماً مع المبادئ والأخلاقيات.',
      },
      {
        id: 'cp-c2-5',
        questionAr: 'اختر التعبير الأنسب للدلالة على المعرفة الواسعة والمحيطة بأدق التفاصيل:',
        questionEn: 'The professor possessed an _____ knowledge of Elizabethan literature.',
        options: ['encyclopedic', 'average', 'exterior', 'incidental'],
        correctIndex: 0,
        explanationAr: 'المتلازمة اللفظية الرفيعة هي encyclopedic knowledge (معرفة موسوعية شاملة).',
      },
    ],
  },
};

export interface LevelCheckpointItem {
  level: CEFRLevel;
  nextLevel: CEFRLevel;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  passingScore: number;
  questions: LevelCheckpointQuestion[];
}

export const LEVEL_CHECKPOINTS: LevelCheckpointItem[] = Object.entries(LEVEL_CHECKPOINT_EXAMS).map(
  ([lvl, exam]) => ({
    level: lvl as CEFRLevel,
    nextLevel: exam.toLevel,
    titleAr: exam.titleAr,
    titleEn: `CEFR Level ${lvl} -> ${exam.toLevel} Checkpoint`,
    descriptionAr: exam.descriptionAr,
    passingScore: exam.passingScore,
    questions: exam.questions,
  })
);
