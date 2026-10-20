import type { Lesson } from '../../types/learning.ts';

export const B2_LESSONS: Lesson[] = [
  {
    id: 'lesson-b2-1-past-perfect-and-narratives',
    level: 'B2',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أزمنة الماضي التام والسرد المتقدم',
    chapterTitleEn: 'Chapter 1: Past Perfect & Advanced Narrative Tenses',
    titleAr: 'الدرس 1: الماضي التام (Past Perfect) وأسبقية الأحداث',
    titleEn: 'Lesson 1: The Past Perfect Tense: The Story Before the Story',
    category: 'قواعد متقدمة (B2)',
    iconName: 'History',
    estimatedMinutes: 18,
    objectivesAr: [
      'فهم وظيفة الماضي التام كـ (ماضٍ أسبق من الماضي البسيط).',
      'صياغة التراكيب بدقة: had + التصريف الثالث (Past Participle - V3).',
      'ربط الأحداث التاريخية والقصصية بتسلسل منطقي دقيق مع: by the time, before, after, already.',
      'التفرقة بين الماضي البسيط المتوالي والماضي التام الذي يفسر النتيجة.',
    ],
    explanationMarkdownAr: `### زمن الماضي التام (The Past Perfect): ما قبل الماضي

#### 1. ما هو الماضي التام؟
إذا كان لديك **حدثان وقعا كلاهما في الماضي**، لكن أحدهما وقع **قبل الآخر**، نضع الحدث الأسبق في **الماضي التام (had + V3)** والحدث الأحدث في **الماضي البسيط (V2)**:
- *When I arrived at the station, the train **had already left**.*
  - الحدث الأسبق رقم 1: مغادرة القطار (الماضي التام: *had left*).
  - الحدث اللاحق رقم 2: وصولي إلى المحطة (الماضي البسيط: *arrived*).
  - النتيجة: فاتني القطار لأن تحركه كان أسبق من وصولي!

#### 2. التكوين النحوي:
\`\`\`
Subject + [ had ] + [ التصريف الثالث للفعل - Past Participle (V3) ]
\`\`\`
- مع جميع الضمائر بلا استثناء (I, You, He, She, We, They):
  - *I had finished* (مختصرة: *I'd finished*)
  - *They had deployed* (مختصرة: *They'd deployed*)

#### 3. أدوات الربط الزمنية الرئيسية:
1. **By the time (بحلول الوقت الذي...)**:
   - *By the time the ambulance arrived, the doctor **had stabilized** the patient.*
2. **After (بعدما - يتبعها الحدث الأسبق في الماضي التام)**:
   - *After we **had completed** the security audit, we launched the platform.*
3. **Before (قبل أن - يتبعها الحدث الأحدث في الماضي البسيط)**:
   - *She **had worked** at IBM before she joined our engineering department.*

#### 4. الماضي التام التفسيري (إعطاء سبب ما حدث):
- *He was exhausted because he **had worked** for sixteen hours without a break.*`,
    rulesAndStructuresAr: `الصيغة: had + V3. النفي: hadn't + V3. السؤال: Had + Subject + V3? قاعدة By the time: By the time + Past Simple, Past Perfect (had + V3). بعد After نضع الماضي التام الأسبق.`,
    summaryAr: 'الماضي التام هو الحدث الأسبق في سلسلة أحداث الماضي. معادلته: had + V3، ويستخدم لتوضيح أسبقية الأحداث وتفسير النتائج السابقة.',
    arabicContrastPoint: {
      titleAr: 'سرد الأحداث في الماضي البسيط المتوالي دون ترتيب زمني',
      descriptionAr: 'في العربية نعتمد على أدوات العطف مثل "ثم / بعد ذلك" ولا نغير صيغة الفعل، فيميل المتعلم لقول: "When I arrived, the train left" مما يعني أن القطار تحرك لحظة وصولك وركبته! استخدام had left يوضح أنه غادر قبلك وفاتك.',
      badArabicHabit: 'When I arrived, the movie started (missed the beginning).',
      correctEnglishWay: 'When I arrived, the movie had already started.',
    },
    examples: [
      { en: 'By the time the emergency response team arrived, the volunteers had contained the fire.', ar: 'بحلول وقت وصول فريق الاستجابة للطوارئ، كان المتطوعون قد احتووا الحريق بالفعل.', phoneticAr: 'بَاي ذَا تَايْم ذي إِيمِيرْجِنْسِي رِيسْبُونس تِيم أَرَايْڤد' },
      { en: 'She had already submitted her doctoral thesis before the deadline expired.', ar: 'كانت قد قدمت أطروحتها للدكتوراه بالفعل قبل انقضاء الموعد النهائي.', phoneticAr: 'شِي هَاد أُولْرِيدِي سَابْمِيتِد هِير دُوكتُورَال ثِيسِس' },
      { en: 'He was confident during the technical interview because he had prepared meticulously.', ar: 'كان واثقاً من نفسه خلال المقابلة الفنية لأنه كان قد استعد بدقة متناهية.', phoneticAr: 'هِي وَاز كُونْفِيدِنْت دْيُورِينْج ذَا تِكْنِيكَل إِنْتَرْڤْيُو' },
    ],
    vocabulary: [
      { word: 'Meticulously', ipa: '/məˈtɪk.jə.ləs.li/', partOfSpeech: 'adverb', meaningAr: 'بدقة متناهية وعناية بالغة بالتفاصيل', exampleEn: 'The code was meticulously documented.', exampleAr: 'تم توثيق الشفرة البرمجية بدقة متناهية.' },
      { word: 'Contain', ipa: '/kənˈteɪn/', partOfSpeech: 'verb', meaningAr: 'يحتوي أزمة أو يسيطر على انتشار', exampleEn: 'The medical staff contained the virus.', exampleAr: 'احتوى الطاقم الطبي الفيروس.' },
      { word: 'Thesis', ipa: '/ˈθiː.sɪs/', partOfSpeech: 'noun', meaningAr: 'أطروحة علمية أو نظرية رئيسية', exampleEn: 'She defended her doctoral thesis.', exampleAr: 'دافعت عن أطروحة الدكتوراه الخاصة بها.' },
      { word: 'Expire', ipa: '/ɪkˈspaɪr/', partOfSpeech: 'verb', meaningAr: 'تنتهي صلاحيته أو مدته المحددة', exampleEn: 'My passport expires next month.', exampleAr: 'تنتهي صلاحية جواز سفري الشهر القادم.' },
    ],
    commonMistakes: [
      { wrong: 'When I arrived the train left already.', correct: 'When I arrived the train had already left.', reasonAr: 'الحدث الأسبق الذي وقع قبل وصولك يتطلب الماضي التام had left.' },
      { wrong: 'After he finished the report, he sent it (ambiguous).', correct: 'After he had finished the report, he sent it.', reasonAr: 'استخدام had finished يبرز الاكتمال التام للتقرير قبل الشروع في إرساله.' },
    ],
    realWorldChallengeAr: 'صف موقفاً في عملك أو دراستك حدث فيه أمران في الماضي موضحاً أسبقية الحدث بـ had + V3.',
    exercises: [
      {
        id: 'b2-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب الزمني الصحيح للحدث الذي وقع قبل وصولك إلى المطار:',
        instructionEn: 'Choose the correct tense for the earlier past event:',
        question: 'When we arrived at the airport, the flight _____ already departed.',
        options: ['had', 'has', 'was', 'did'],
        correctAnswer: 0,
        explanationAr: 'الحدث الأسبق (إقلاع الطائرة قبل وصولنا) يتطلب الماضي التام had departed.',
      },
      {
        id: 'b2-1-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة بعد أداة الربط "By the time":',
        instructionEn: 'Select the correct tense combination with "By the time":',
        question: 'By the time the manager joined the call, we _____ the presentation.',
        options: [
          'had already finished',
          'have already finished',
          'already finish',
          'was already finishing',
        ],
        correctAnswer: 0,
        explanationAr: 'مع By the time + past simple، يأتي الحدث الأسبق في الماضي التام had already finished.',
      },
      {
        id: 'b2-1-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المساعد للماضي التام (had):',
        instructionEn: 'Fill in the past perfect auxiliary verb:',
        question: 'She felt confident because she ______ practiced her speech many times.',
        correctAnswer: ['had', 'Had'],
        explanationAr: 'صيغة الماضي التام التفسيري تتكون من had + التصريف الثالث practiced.',
      },
      {
        id: 'b2-1-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما الفرق في المعنى بين الجملتين: (1) When he called, I ate. مقابل (2) When he called, I had eaten؟',
        instructionEn: 'What is the precise semantic difference?',
        question: 'In sentence (2) "When he called, I had eaten", it means:',
        options: [
          'كنت قد انتهيت تماماً من تناول الطعام قبل أن يتصل بي',
          'بدأت في تناول الطعام فور اتصاله بي مباشرة',
          'كنت في منتصف تناول الطعام أثناء رنين الهاتف',
          'لم آكل أي شيء طوال اليوم',
        ],
        correctAnswer: 0,
        explanationAr: 'الماضي التام had eaten يعني أن الطعام انتهى قبل وقوع المكالمة الهاتفية.',
      },
      {
        id: 'b2-1-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة ماضٍ تام تصف سبباً:',
        instructionEn: 'Arrange the words into a correct explanatory past perfect sentence:',
        question: 'he / tired / because / He / had / worked / all / was / night',
        correctAnswer: 'He was tired because he had worked all night',
        explanationAr: 'الترتيب: He was tired because he had worked all night.',
      },
      {
        id: 'b2-1-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الفعل المساعد الخاطئ (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the auxiliary verb in the past narrative:',
        question: 'By 2024, the tech startup has expanded to six countries.',
        correctAnswer: ['had', 'Had'],
        explanationAr: 'الإشارة إلى نقطة زمنية ماضية منتهية (By 2024) تتطلب had expanded وليس has.',
      },
      {
        id: 'b2-1-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة للجملة بعد أداة الربط After:',
        instructionEn: 'Choose the correct tense following After:',
        question: 'After the engineering team _____ the patch, the vulnerability vanished.',
        options: ['had deployed', 'has deployed', 'deploying', 'was deploy'],
        correctAnswer: 0,
        explanationAr: 'الحدث الأول الأسبق بعد After يوضع في الماضي التام had deployed.',
      },
      {
        id: 'b2-1-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "عندما وصلنا، كان الاجتماع قد بدأ بالفعل":',
        instructionEn: 'Translate: "عندما وصلنا، كان الاجتماع قد بدأ بالفعل":',
        question: 'Translate: "عندما وصلنا، كان الاجتماع قد بدأ بالفعل"',
        correctAnswer: ['When we arrived the meeting had already started', 'When we arrived, the meeting had already started.', 'when we arrived, the meeting had already started'],
        explanationAr: 'الترجمة الصحيحة: When we arrived, the meeting had already started.',
      },
    ],
  },
  {
    id: 'lesson-b2-2-third-conditional-regrets',
    level: 'B2',
    order: 2,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أزمنة الماضي التام والسرد المتقدم',
    chapterTitleEn: 'Chapter 1: Past Perfect & Advanced Narrative Tenses',
    titleAr: 'الدرس 2: الشرطية الثالثة والتعبير عن الندم في الماضي (The Third Conditional)',
    titleEn: 'Lesson 2: The Third Conditional: Regrets & Alternative Pasts',
    category: 'قواعد متقدمة (B2)',
    iconName: 'RotateCcw',
    estimatedMinutes: 18,
    objectivesAr: [
      'التعبير عن مواقف ماضية مستحيلة التغيير والندم على ما فات (Alternative Realities).',
      'إتقان معادلة الشرطية الثالثة: If + had + V3, would have + V3.',
      'صياغة بدائل التفضيل والندم باستخدام: could have + V3 و should have + V3.',
      'تجنب التراكيب الركيكة الشائعة عند المتحدثين بالإنجليزية في مقابلات العمل.',
    ],
    explanationMarkdownAr: `### الحالة الشرطية الثالثة (The Third Conditional)

#### 1. ما هي الشرطية الثالثة؟
هي آلة السفر عبر الزمن الافتراضية في اللغة الإنجليزية! نستخدمها لتخيل **سيناريو بديل لحدث وقع وانتهى في الماضي، ونستحيل تغييره الآن**.
- **الواقع الحقيقي**: لم ندرس بجد، ورسبنا في الاختبار.
- **التخيل الافتراضي (الشرطية الثالثة)**:
  - *If we **had studied** harder, we **would have passed** the exam.*
  - (لو كنا قد درسنا بجد، لكنا قد اجتزنا الاختبار).

#### 2. المعادلة الرياضية الصارمة للشرطية الثالثة:
\`\`\`
If + [ Past Perfect: had + V3 ], [ would have + Past Participle (V3) ]
\`\`\`
- **في النفي**:
  - *If we **had left** earlier, we **would not have missed** the flight.* (لو كنا خرجنا مبكراً، لما كان قد فاتنا الطيران).
  - *If you **had not warned** me, I **would have made** a costly mistake.*

#### 3. استخدام Could have و Might have في جواب الشرط:
- **Would have**: تفيد التأكيد في السيناريو البديل (لكان حدث كذا حتماً).
- **Could have**: تفيد القدرة أو الإمكانية (لكان بإمكاننا فعل كذا):
  - *If I had known about the conference, I **could have attended**.*
- **Might have**: تفيد الاحتمال الضعيف (لربما كان حدث كذا):
  - *If we had negotiated harder, they **might have lowered** the price.*

#### 4. لوم النفس وإسداء اللوم (Should have + V3):
- *You **should have told** me about the problem earlier.* (كان ينبغي عليك إخباري مبكراً).`,
    rulesAndStructuresAr: `المعادلة: If + had + V3, would have + V3. نفي جواب الشرط: wouldn't have + V3. البدائل: could have + V3 (للقدرة)، might have + V3 (للاحتمال). اختصار النطق السريع لمتحدثي الإنجليزية: would've /wʊdəv/ و had left /hæd left/.`,
    summaryAr: 'الشرطية الثالثة للخيال في الماضي والندم المستحيل تغييره. شق If يأخذ had + V3، والجواب يأخذ would have + V3.',
    arabicContrastPoint: {
      titleAr: 'صياغة جواب الشرط الثالث بـ would بدون have',
      descriptionAr: 'من أكثر الأخطاء تكراراً قول: "If we had prepared, we would pass" بالخلط بين الشرط الثاني والثالث. إذا كان الحدث في الماضي، فالجواب حتماً يتطلب would HAVE + V3: "we would have passed".',
      badArabicHabit: 'If I had known, I would tell you.',
      correctEnglishWay: 'If I had known, I would have told you.',
    },
    examples: [
      { en: 'If the software team had conducted automated tests, they would have caught the critical bug.', ar: 'لو كان الفريق البرمجي قد أجرى اختبارات مؤتمتة، لكانوا قد اكتشفوا الخلل الحرج قبل الإطلاق.', phoneticAr: 'إِف ذَا سُوفتْوَيْر تِيم هَاد كُونْدَاكْتِد' },
      { en: 'If we had known about the budget constraints, we would not have hired external consultants.', ar: 'لو كنا على علم بالقيود المفروضة على الميزانية، لما كنا قد استعنا بمستشارين خارجيين.', phoneticAr: 'إِف وِي هَاد نُون أَبَاوْت ذَا بَادْجِت' },
      { en: 'She could have secured the executive role if she had refined her technical presentation.', ar: 'كان بإمكانها تأمين ذلك المنصب التنفيذي لو كانت قد صقلت عرضها التقديمي الفني.', phoneticAr: 'شِي كُود هَاف سِكْيُورد ذي إِجْزِكْيُوتِڤ رُول' },
    ],
    vocabulary: [
      { word: 'Constraint', ipa: '/kənˈstreɪnt/', partOfSpeech: 'noun', meaningAr: 'قيد أو محدد مالي أو تشغيلي', exampleEn: 'Time constraints forced us to adapt.', exampleAr: 'أجبرتنا قيود الوقت على التكيف.' },
      { word: 'Secure', ipa: '/səˈkjʊr/', partOfSpeech: 'verb', meaningAr: 'يضمن ويؤمن صفقة أو منصباً بنجاح', exampleEn: 'We secured funding for the project.', exampleAr: 'أمّنا التمويل اللازم للمشروع.' },
      { word: 'Refine', ipa: '/rɪˈfaɪn/', partOfSpeech: 'verb', meaningAr: 'يصقل ويحسن جودة الشيء بدقة', exampleEn: 'Refine your pitch before meeting investors.', exampleAr: 'اصقل عرضك قبل لقاء المستثمرين.' },
      { word: 'Automated', ipa: '/ˈɑː.t̬ə.meɪ.t̬ɪd/', partOfSpeech: 'adjective', meaningAr: 'مؤتمت ويعمل آلياً', exampleEn: 'Automated testing saves hundreds of hours.', exampleAr: 'توفر الاختبارات المؤتمتة مئات الساعات.' },
    ],
    commonMistakes: [
      { wrong: 'If I had known, I will tell you.', correct: 'If I had known, I would have told you.', reasonAr: 'الماضي التام had known في الشرط يتطلب would have + V3 في الجواب.' },
      { wrong: 'If I would have known, I would have come.', correct: 'If I had known, I would have come.', reasonAr: 'ممنوع وضع would have داخل شق If إطلاقاً.' },
      { wrong: 'You should tell me yesterday.', correct: 'You should have told me yesterday.', reasonAr: 'الندم واللوم على أمر ماضٍ منتهٍ يتطلب should have + V3.' },
    ],
    realWorldChallengeAr: 'عبر عن ندم أو سيناريو بديل لقرار اتخذته في الماضي مستخدماً: "If I had..., I would have...".',
    exercises: [
      {
        id: 'b2-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر التركيب الصحيح لجواب الشرط الثالث للتعبير عما كان سيحدث في الماضي:',
        instructionEn: 'Choose the correct main clause in the Third Conditional:',
        question: 'If the engineering team had verified the architecture, the crash _____.',
        options: [
          'would not have happened',
          'will not happen',
          'would not happen',
          'did not happen',
        ],
        correctAnswer: 0,
        explanationAr: 'الشرطية الثالثة تتكون من If + had + V3 يقابلها في الجواب would not have happened.',
      },
      {
        id: 'b2-2-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة لشق If في الشرطية الثالثة:',
        instructionEn: 'Choose the correct if-clause in the Third Conditional:',
        question: 'If they _____ earlier, they would not have missed the international flight.',
        options: ['had left', 'would have left', 'left', 'have left'],
        correctAnswer: 0,
        explanationAr: 'في شق If نضع الماضي التام had left، ولا يجوز وضع would have داخل جملة If.',
      },
      {
        id: 'b2-2-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالكلمة الناقصة في تركيبة جواب الشرط الثالث (would ______ gone):',
        instructionEn: 'Fill in the missing auxiliary in the third conditional result:',
        question: 'If I had received the invitation, I would ______ attended the conference.',
        correctAnswer: ['have', 'Have'],
        explanationAr: 'التركيبة الإلزامية: would + have + التصريف الثالث attended.',
      },
      {
        id: 'b2-2-ex-4',
        type: 'multiple_choice',
        instructionAr: 'كيف تعبر عن لوم شخص على عدم إبلاغك بمعلومة بالأمس؟',
        instructionEn: 'How do you express reproach for a past failure?',
        question: 'Choose the correct sentence expressing past reproach:',
        options: [
          'You should have informed me about the delay yesterday.',
          'You should inform me about the delay yesterday.',
          'You must to inform me yesterday.',
          'You had informed me yesterday.',
        ],
        correctAnswer: 0,
        explanationAr: 'للتعبير عن اللوم والنصيحة بأثر رجعي في الماضي نستخدم should have + V3: should have informed me.',
      },
      {
        id: 'b2-2-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة شرطية ثالثة تصف سيناريو بديلاً:',
        instructionEn: 'Arrange the words into a correct Third Conditional sentence:',
        question: 'have / won / prepared / we / had / We / would / If',
        correctAnswer: 'If we had prepared we would have won',
        explanationAr: 'الترتيب: If we had prepared we would have won.',
      },
      {
        id: 'b2-2-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ الجسيم بوضع would داخل If (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the invalid modal inside the if-clause:',
        question: 'If you would have called me, I would have helped you.',
        correctAnswer: ['had', 'Had'],
        explanationAr: 'داخل شق If نستخدم الماضي التام had called وليس would have called.',
      },
      {
        id: 'b2-2-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى الضمني لجملة: "If we had signed the agreement, we would have expanded"؟',
        instructionEn: 'What is the real fact implied by this Third Conditional statement?',
        question: 'The actual reality in the past was:',
        options: [
          'لم نوقع الاتفاقية، وبالتالي لم نتوسع في الواقع',
          'وقعنا الاتفاقية وتوسعنا بنجاح',
          'سوف نوقع الاتفاقية الأسبوع القادم',
          'نحن نتفاوض على التوقيع الآن',
        ],
        correctAnswer: 0,
        explanationAr: 'الشرطية الثالثة تعبر عن واقع لم يحدث: لم نوقع ولم نتوسع، ونتخيل لو كان ذلك قد حدث.',
      },
      {
        id: 'b2-2-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "لو كنت أعلم، لساعدتك":',
        instructionEn: 'Translate: "لو كنت أعلم، لساعدتك":',
        question: 'Translate: "لو كنت أعلم، لساعدتك"',
        correctAnswer: ['If I had known I would have helped you', 'If I had known, I would have helped you.', 'if i had known, i would have helped you'],
        explanationAr: 'الترجمة الصحيحة: If I had known, I would have helped you.',
      },
    ],
  },
  {
    id: 'lesson-b2-3-reported-speech',
    level: 'B2',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: التواصل المهني والكلام المنقول',
    chapterTitleEn: 'Chapter 2: Reported Speech & Advanced Relative Clauses',
    titleAr: 'الدرس 3: الكلام المنقول (Reported Speech) وأفعال التقارير المهنية',
    titleEn: 'Lesson 3: Reported Speech & Advanced Reporting Verbs',
    category: 'قواعد ومراسلات (B2)',
    iconName: 'MessageCircle',
    estimatedMinutes: 18,
    objectivesAr: [
      'نقل أقوال وتصريحات الآخرين بأسلوب مهني محترف (Reported Statements).',
      'إتقان قاعدة الرجوع بالزمن خطوة للوراء (Backshift of Tenses).',
      'نقل الأسئلة والطلبات دون الحفاظ على صيغة الاستفهام (Indirect Questions).',
      'استخدام أفعال نقل متقدمة بدلاً من say/tell مثل: insist, admit, deny, explain, recommend.',
    ],
    explanationMarkdownAr: `### الكلام المنقول (Reported Speech) وقاعدة الرجوع بالزمن

#### 1. ما هو الكلام المنقول؟
عندما تنقل كلام شخص آخر في محادثة أو بريد عمل رسمي، فإنك لا تنقله حرفياً بين علامات تنصيص، بل تعيد صياغته.
وبما أن الكلام قيل في الماضي، فإن القاعدة الذهبية هي: **الرجوع بالزمن خطوة كاملة إلى الوراء (Backshift)**.

#### 2. جدول تحويل الأزمنة خطوة إلى الوراء:
\`\`\`
الكلام المباشر (Direct Speech)     -> الكلام المنقول (Reported Speech)
Present Simple (I work)          -> Past Simple (He worked)
Present Continuous (I am working)-> Past Continuous (He was working)
Past Simple (I worked)           -> Past Perfect (He had worked)
Present Perfect (I have worked)  -> Past Perfect (He had worked)
Will (I will finish)             -> Would (He would finish)
Can (I can do it)                -> Could (He could do it)
\`\`\`

#### 3. تحويل الضمائر والظروف الزمنية والمكانية:
- *now* -> *then* / *today* -> *that day* / *tomorrow* -> *the next day* / *yesterday* -> *the day before*.
- *here* -> *there* / *this* -> *that*.

#### 4. نقل الأسئلة (Reported Questions):
في الكلام المنقول، **يزول طابع السؤال ويعود الترتيب إلى جملة خبرية عادية** (فاعل ثم فعل)، وتختفي الأفعال المساعدة do/does/did:
- مباشر: *"Where do you live?"*
- منقول: *He asked me **where I lived**.* (وليس: where did I live!).
- للأسئلة بـ نعم/لا: نستخدم **if** أو **whether**:
  - *"Are you ready?"* -> *She asked me **if I was ready**.*

#### 5. أفعال النقل المتقدمة لبيئة العمل (Reporting Verbs):
بدلاً من تكرار *He said* و *She said*، استخدم أفعالاً تصف نبرة المتحدث بدقة:
- **Insist on (+ ing)**: *He insisted on reviewing the code.* (أصر على).
- **Admit (+ ing / that)**: *The company admitted that there was a security breach.* (اعترف).
- **Deny (+ ing)**: *He denied leaking the confidential data.* (أنكر).
- **Recommend (+ that / ing)**: *The consultant recommended updating the infrastructure.* (أوصى).`,
    rulesAndStructuresAr: `قاعدة Backshift: المضارع يتحول لماضٍ، والماضي والمضارع التام يتحولان لماضٍ تام (had + V3). will تصبح would و can تصبح could. في نقل السؤال يعود الترتيب فاعلاً ثم فعلاً دون do/does/did: He asked where I worked.`,
    summaryAr: 'عند نقل الكلام، ارجع بالزمن خطوة للوراء، وغير الضمائر وظروف الزمان. وفي الأسئلة المنقولة، ألغِ صيغة الاستفهام وحولها لجملة خبرية.',
    arabicContrastPoint: {
      titleAr: 'الحفاظ على صيغة السؤال في الكلام المنقول',
      descriptionAr: 'من أكبر أخطاء الناطقين بالعربية الاحتفاظ بالفعل المساعد do/did عند نقل السؤال: "He asked me where did I go". الصواب الإنجليزي: يعود الترتيب لجملة خبرية فاعل ثم فعل: "He asked me where I went".',
      badArabicHabit: 'She asked me what was my name. / He asked where did I live.',
      correctEnglishWay: 'She asked me what my name was. / He asked where I lived.',
    },
    examples: [
      { en: 'The lead architect explained that the backend system had been fully optimized.', ar: 'أوضح كبير المعماريين أن النظام الخلفي كان قد تم تحسينه بالكامل.', phoneticAr: 'ذَا لِيد آرْكِيتِكْت إِكْسْبْلَيْنْد ذَات' },
      { en: 'The auditor asked whether we had retained complete audit logs for the previous year.', ar: 'استفسر المدقق عما إذا كنا قد احتفظنا بسجلات التدقيق الكاملة للعام المنصرم.', phoneticAr: 'ذي أُودِيتَر آسْكْد وِذَر وِي هَاد رِيتَيْنْد' },
      { en: 'The spokesperson denied that the company was negotiating an acquisition.', ar: 'أنكر المتحدث الرسمي أن تكون الشركة تتفاوض بشأن صفقة استحواذ.', phoneticAr: 'ذَا سْبُوكسْبِيرْسَن دِينَايْد ذَات ذَا كَامْبَنِي' },
    ],
    vocabulary: [
      { word: 'Acquisition', ipa: '/ˌæk.wəˈzɪʃ.ən/', partOfSpeech: 'noun', meaningAr: 'استحواذ وشراء شركة لأخرى', exampleEn: 'The tech acquisition made headlines.', exampleAr: 'تصدرت صفقة الاستحواذ التقني عناوين الأخبار.' },
      { word: 'Spokesperson', ipa: '/ˈspoʊksˌpɝː.sən/', partOfSpeech: 'noun', meaningAr: 'متحدث رسمي ومفوض إعلامي', exampleEn: 'The spokesperson released a formal statement.', exampleAr: 'أصدر المتحدث الرسمي بياناً رسمياً.' },
      { word: 'Retain', ipa: '/rɪˈteɪn/', partOfSpeech: 'verb', meaningAr: 'يحتفظ بالبيانات أو السجلات بأمان', exampleEn: 'Retain client records for seven years.', exampleAr: 'احتفظ بسجلات العملاء لسبع سنوات.' },
      { word: 'Deny', ipa: '/dɪˈnaɪ/', partOfSpeech: 'verb', meaningAr: 'ينكر تماماً صحة ادعاء', exampleEn: 'He denied all allegations.', exampleAr: 'أنكر جميع المزاعم المنسوبة إليه.' },
    ],
    commonMistakes: [
      { wrong: 'She asked me where do I work.', correct: 'She asked me where I worked.', reasonAr: 'في السؤال المنقول يرجع الزمن للماضي worked وتحذف أداة do.' },
      { wrong: 'He said me that he was tired.', correct: 'He told me that he was tired. (or: He said that he was tired)', reasonAr: 'الفعل say لا يأخذ مفعولاً مباشراً دون to؛ نستخدم tell me أو said that.' },
      { wrong: 'She asked if was I ready.', correct: 'She asked if I was ready.', reasonAr: 'في السؤال المنقول نضع الفاعل I أولاً ثم الفعل was.' },
    ],
    realWorldChallengeAr: 'انقل حواراً قصيراً دار بينك وبين مديرك أو عميلك مستخدماً أفعال النقل: explained و asked if.',
    exercises: [
      {
        id: 'b2-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المنقولة الصحيحة للجملة المباشرة: "I will sign the contract tomorrow":',
        instructionEn: 'Choose the correct reported speech form of: "I will sign the contract tomorrow":',
        question: 'He said that he _____ the contract the following day.',
        options: ['would sign', 'will sign', 'signed', 'has signed'],
        correctAnswer: 0,
        explanationAr: 'في الكلام المنقول تتحول will إلى would كخطوة إلى الوراء.',
      },
      {
        id: 'b2-3-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب النحوي السليم للسؤال المنقول: "Where do you live?":',
        instructionEn: 'Select the correct indirect question structure for: "Where do you live?":',
        question: 'She asked me _____ .',
        options: [
          'where I lived',
          'where did I live',
          'where do I live',
          'where I do live',
        ],
        correctAnswer: 0,
        explanationAr: 'في السؤال المنقول يعود الترتيب لجملة خبرية (فاعل ثم ماضٍ بسيط): where I lived.',
      },
      {
        id: 'b2-3-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالأداة المناسبة لنقل الأسئلة بنعم/لا (if أو whether):',
        instructionEn: 'Fill in with if or whether for yes/no reported question:',
        question: 'The interviewer asked ______ I had any questions about the role.',
        correctAnswer: ['if', 'whether', 'If', 'Whether'],
        explanationAr: 'نستخدم if أو whether لنقل الأسئلة التي تبدأ بفعل مساعد.',
      },
      {
        id: 'b2-3-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما هو التحويل الصحيح للماضي البسيط المباشر "I saw the report" عند نقله؟',
        instructionEn: 'What is the past simple backshifted to in reported speech?',
        question: 'He said that he _____ the report.',
        options: ['had seen', 'has seen', 'sawed', 'would see'],
        correctAnswer: 0,
        explanationAr: 'الماضي البسيط saw يرجع خطوة للوراء إلى الماضي التام had seen.',
      },
      {
        id: 'b2-3-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة منقولة صحيحة:',
        instructionEn: 'Arrange the words into a correct reported sentence:',
        question: 'said / was / that / ready / He / he',
        correctAnswer: 'He said that he was ready',
        explanationAr: 'الترتيب: He said that he was ready.',
      },
      {
        id: 'b2-3-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في استخدام say مع مفعول به مباشر (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the reporting verb error before a direct object:',
        question: 'She said me that the server was down.',
        correctAnswer: ['told', 'Told'],
        explanationAr: 'عند وجود مفعول به مباشر (me) نستخدم told me وليس said me.',
      },
      {
        id: 'b2-3-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي فعل نقل مهني يعني "أصر بقوة على موقفه"؟',
        instructionEn: 'Which advanced reporting verb means to demand forcefully?',
        question: 'The client _____ on seeing the security compliance certificate.',
        options: ['insisted', 'denied', 'admitted', 'asked'],
        correctAnswer: 0,
        explanationAr: 'الفعل insist on يعني يصر بإلحاح على موقف أو شرط.',
      },
      {
        id: 'b2-3-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "سألتني سارة عما إذا كنت جاهزاً":',
        instructionEn: 'Translate: "سألتني سارة عما إذا كنت جاهزاً":',
        question: 'Translate: "سألتني سارة عما إذا كنت جاهزاً"',
        correctAnswer: ['Sara asked me if I was ready', 'Sara asked me whether I was ready', 'sara asked me if i was ready'],
        explanationAr: 'الترجمة الصحيحة: Sara asked me if I was ready.',
      },
    ],
  },
  {
    id: 'lesson-b2-4-relative-clauses-resumptive-pronoun',
    level: 'B2',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: التواصل المهني والكلام المنقول',
    chapterTitleEn: 'Chapter 2: Reported Speech & Advanced Relative Clauses',
    titleAr: 'الدرس 4: جمل الوصل وتجنب فخ الضمير العائد (Relative Clauses Trap)',
    titleEn: 'Lesson 4: Relative Clauses & Eliminating the Resumptive Pronoun Trap',
    category: 'قواعد متقدمة (B2)',
    iconName: 'Link',
    estimatedMinutes: 16,
    objectivesAr: [
      'استخدام ضمائر الوصل بدقة: who (للعاقل)، which (لغير العاقل)، that (لكليهما)، whose (للملكية)، where (للمكان).',
      'التفرقة الجوهرية بين الجمل المحددة (Defining - بدون فواصل) وغير المحددة (Non-defining - بين فاصلتين).',
      'القضاء التام والنهائي على "فخ الضمير العائد" (Resumptive Pronoun Trap) الأشهر بين العرب.',
      'ربط جملتين منفصلتين في جملة واحدة راقية وبليغة.',
    ],
    explanationMarkdownAr: `### جمل الوصل (Relative Clauses) وفخ الضمير العائد

#### 1. ضمائر الوصل واستخداماتها:
- **Who**: للأشخاص والفاعلين العاقلين -> *The software engineer **who** designed this system won an award.*
- **Which**: لغير العاقل (جماد، حيوان، مؤسسات) في الجمل التفسيرية -> *The report, **which** was 50 pages long, contained valuable data.*
- **That**: للعاقل وغير العاقل في الجمل المحددة الأساسية -> *The laptop **that** I bought yesterday is very fast.*
- **Whose**: للملكية (بديلة لـ his/her/their) -> *I met a founder **whose** startup raised $10M.*
- **Where**: للأماكن -> *The campus **where** we studied is modern.*

#### 2. الخطر الأكبر عند الناطقين بالعربية: فخ الضمير العائد (Resumptive Pronoun)
في اللغة العربية الفصحى واللهجات، **نكرر ضميراً عائداً** في جملة الصلة فنقول:
- "هذا هو الكتاب الذي قرأتـ**ـه**" (الهاء تعود على الكتاب).
- "المهندس الذي قابلتـ**ـه** أمس" (الهاء تعود على المهندس).
- "المشروع الذي أنهينا**ه** بنجاح" (الهاء تعود على المشروع).

**في الإنجليزية، تكرار هذا الضمير خطأ نحوي فادح!**
لأن ضمير الوصل (*that / which / who*) يحل محل المفعول به بالكامل، لذا **يجب حذف (it / him / them)** تماماً:
- خطأ فادح: *This is the book that I read **it**.*
- **الصواب الخالص**: *This is the book that I **read**.*
- خطأ فادح: *The engineer who I met **him** yesterday.*
- **الصواب الخالص**: *The engineer who I **met** yesterday.*
- خطأ فادح: *The report which you requested **it** is attached.*
- **الصواب الخالص**: *The report which you **requested** is attached.*

#### 3. الفارق بين الجمل المحددة وغير المحددة:
1. **Defining Clauses (محددة ومعلومة جوهرية - بدون فواصل)**:
   - *Engineers **who write clean code** are valuable.* (المعنى يحدد فقط المهندسين الذين يكتبون شفرة نظيفة، وليس كل المهندسين).
2. **Non-defining Clauses (معلومة إضافية تكميلية - بين فاصلتين ولا نستخدم that)**:
   - *My brother, **who lives in Dubai**, is a consultant.* (أخي معروف، وسكنه في دبي معلومة إضافية؛ نضع فاصلتين ونمتنع عن استخدام that).`,
    rulesAndStructuresAr: `قاعدة حذف الضمير العائد: احذف it و him و them بعد that و which و who إذا كان ضمير الوصل مفعولاً به. قاعدة الفواصل: الجمل غير المحددة (Non-defining) توضع بين فاصلتين وتستخدم which/who حصراً (ممنوع استخدام that بين الفواصل). whose تعبر عن الملكية ويليها اسم مباشرة.`,
    summaryAr: 'ضمائر الوصل تربط الجمل بسلاسة. تذكر القاعدة الذهبية: احذف الضمير العائد الزائد (it/him) نهائياً عند استخدام that أو which أو who.',
    arabicContrastPoint: {
      titleAr: 'فخ الضمير العائد (The Resumptive Pronoun Trap)',
      descriptionAr: 'العقل العربي مبرمج على وضع الهاء العائدة "قرأته / رأيته"، فيترجم: "The film that I watched it". في الإنجليزية يجب حذف it لأن that امتصت المفعول به: "The film that I watched".',
      badArabicHabit: 'The document that you sent it is corrupted.',
      correctEnglishWay: 'The document that you sent is corrupted.',
    },
    examples: [
      { en: 'The software architecture that we developed handles ten thousand requests per second.', ar: 'معمارية البرمجيات التي طورناها تعالج عشرة آلاف طلب في الثانية (بدون it).', phoneticAr: 'ذَا سُوفتْوَيْر آرْكِيتِكْتْشَر ذَات وِي دِڤِيلُوبْد' },
      { en: 'The senior architect whom we interviewed yesterday demonstrated profound algorithmic insight.', ar: 'كبير المعماريين الذي أجرينا معه المقابلة بالأمس أظهر إدراكاً خوارزمياً عميقاً (بدون him).', phoneticAr: 'ذَا سِينْيَر آرْكِيتِكْت هُوم وِي إِنْتَرْڤْيُود' },
      { en: 'Our Riyadh office, which was renovated recently, accommodates two hundred engineers.', ar: 'مكتبنا بالرياض، والذي تم تجديده مؤخراً، يستوعب مائتي مهندس (بين فاصلتين).', phoneticAr: 'آوَر رِيَاض أُوفِيس، وِيتش وَاز رِينُوڤَيْتِد' },
    ],
    vocabulary: [
      { word: 'Renovate', ipa: '/ˈren.ə.veɪt/', partOfSpeech: 'verb', meaningAr: 'يجدد ويرمم مبنى', exampleEn: 'The company renovated the historic building.', exampleAr: 'جددت الشركة المبنى التاريخي.' },
      { word: 'Accommodate', ipa: '/əˈkɑː.mə.deɪt/', partOfSpeech: 'verb', meaningAr: 'يتسع لعدد معين من الأشخاص', exampleEn: 'The conference hall accommodates 500 guests.', exampleAr: 'تتسع قاعة المؤتمرات لـ 500 ضيف.' },
      { word: 'Insight', ipa: '/ˈɪn.saɪt/', partOfSpeech: 'noun', meaningAr: 'بصيرة وإدراك متعمق', exampleEn: 'Her research provides valuable insight.', exampleAr: 'يقدم بحثها بصيرة ورؤية قيمة.' },
      { word: 'Algorithmic', ipa: '/ˌæl.ɡəˈrɪð.mɪk/', partOfSpeech: 'adjective', meaningAr: 'خوارزمي حوسبي', exampleEn: 'Algorithmic efficiency is critical.', exampleAr: 'الكفاءة الخوارزمية أمر حاسم.' },
    ],
    commonMistakes: [
      { wrong: 'The book that I read it was useful.', correct: 'The book that I read was useful.', reasonAr: 'يجب حذف الضمير it الزائد في جملة الوصل.' },
      { wrong: 'The colleague who I met him yesterday is helpful.', correct: 'The colleague who I met yesterday is helpful.', reasonAr: 'يجب حذف him لأن who حلت محل المفعول به.' },
      { wrong: 'My father, that lives in Cairo, is a doctor.', correct: 'My father, who lives in Cairo, is a doctor.', reasonAr: 'لا نستخدم that بين الفواصل في الجمل غير المحددة، بل نستخدم who للعاقل.' },
    ],
    realWorldChallengeAr: 'اكتب جملتين احترافيتين تصفان أدوات أو مشاريع في عملك مع حذف الضمير العائد تماماً (that we built / that you approved).',
    exercises: [
      {
        id: 'b2-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من فخ الضمير العائد (بدون it/him):',
        instructionEn: 'Choose the sentence without a redundant resumptive pronoun:',
        question: 'Which sentence is grammatically flawless?',
        options: [
          'The document that you requested is attached to this email.',
          'The document that you requested it is attached to this email.',
          'The document which you requested it is attached to this email.',
          'The document that you requested him is attached to this email.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة تماماً لحذف الضمير العائد it الزائد بعد that.',
      },
      {
        id: 'b2-4-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر ضمير الوصل الصحيح للملكية (بديل لـ their/his):',
        instructionEn: 'Choose the relative pronoun indicating possession:',
        question: 'We partnered with an enterprise _____ security systems are top-tier.',
        options: ['whose', 'who', 'which', 'that its'],
        correctAnswer: 0,
        explanationAr: 'نستخدم whose للدلالة على الملكية: whose security systems (التي أنظمتها الأمنية).',
      },
      {
        id: 'b2-4-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بضمير الوصل المناسب للعاقل في الجملة غير المحددة بين فاصلتين (who):',
        instructionEn: 'Fill in the non-defining relative pronoun for a person:',
        question: 'Dr. Sarah, ______ authored the breakthrough study, gave the keynote speech.',
        correctAnswer: ['who', 'Who'],
        explanationAr: 'بين الفواصل مع الأشخاص نستخدم who حصراً (ممنوع استخدام that).',
      },
      {
        id: 'b2-4-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي ضمير وصل لا يجوز استخدامه إطلاقاً في الجمل غير المحددة المحاطة بفواصل؟',
        instructionEn: 'Which relative pronoun is forbidden in non-defining clauses with commas?',
        question: 'You cannot use _____ in non-defining relative clauses:',
        options: ['that', 'which', 'who', 'whose'],
        correctAnswer: 0,
        explanationAr: 'ضمير الوصل that ممنوع استخدامه في الجمل الاعتراضية بين الفواصل.',
      },
      {
        id: 'b2-4-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة وصل صحيحة بدون ضمير عائد:',
        instructionEn: 'Arrange the words into a correct relative clause sentence:',
        question: 'designed / car / fast / The / they / is / that',
        correctAnswer: 'The car that they designed is fast',
        explanationAr: 'الترتيب: The car that they designed is fast (بدون it).',
      },
      {
        id: 'b2-4-ex-6',
        type: 'error_hunt',
        instructionAr: 'احذف الضمير العائد الزائد الخاطئ في الجملة (اكتب الكلمة الزائدة فقط):',
        instructionEn: 'Identify the redundant resumptive pronoun to delete:',
        question: 'The new feature that we tested it yesterday is stable.',
        correctAnswer: ['it', 'It'],
        explanationAr: 'الضمير it زائد وخاطئ نحوياً لأن that تحل محله ويجب حذفه.',
      },
      {
        id: 'b2-4-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر ضمير الوصل المناسب للإشارة إلى مكان الحدث:',
        instructionEn: 'Select the relative pronoun referring to place:',
        question: 'This is the state-of-the-art laboratory _____ the vaccine was developed.',
        options: ['where', 'which in it', 'when', 'whose'],
        correctAnswer: 0,
        explanationAr: 'نستخدم where للإشارة إلى المكان الذي وقع فيه الفعل.',
      },
      {
        id: 'b2-4-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "التقرير الذي أرسلته ممتاز (احذف it)":',
        instructionEn: 'Translate: "التقرير الذي أرسلته ممتاز":',
        question: 'Translate: "التقرير الذي أرسلته ممتاز"',
        correctAnswer: ['The report that you sent is excellent', 'The report you sent is excellent', 'The report which you sent is excellent', 'the report that you sent is excellent'],
        explanationAr: 'الترجمة الصحيحة: The report that you sent is excellent (بدون it).',
      },
    ],
  },
  {
    id: 'lesson-b2-5-advanced-modals-of-deduction',
    level: 'B2',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التفكير النقدي وأدوات الربط والاختبار',
    chapterTitleEn: 'Chapter 3: Deduction, Discourse Markers & Assessment',
    titleAr: 'الدرس 5: أفعال الاستنتاج والترجيح في الماضي (Modals of Past Deduction)',
    titleEn: 'Lesson 5: Modals of Deduction & Speculation in the Past',
    category: 'قواعد متقدمة (B2)',
    iconName: 'HelpCircle',
    estimatedMinutes: 18,
    objectivesAr: [
      'التعبير عن الاستنتاج المنطقي المؤكد في الماضي (Must have been/done).',
      'التعبير عن الاستحالة المطلقة في الماضي (Can\'t have been / Couldn\'t have been).',
      'التعبير عن الاحتمال والشك المعقول (Might have / May have / Could have).',
      'صياغة تحليلات مهنية للمشكلات والأعطال التقنية المعقدة بدقة.',
    ],
    explanationMarkdownAr: `### أفعال الاستنتاج والترجيح في الماضي (Past Modals of Deduction)

#### 1. ما هو الاستنتاج في الماضي؟
عندما ترى دليلاً حاسماً الآن، وتبدأ في **استنتاج ما حدث في الماضي بناءً على الأدلة والمنطق**.
في الحاضر نقول: *He must be at home* (استنتاج حالي).
أما في الماضي، فالقاعدة الموحدة هي: **Modal + have + V3**.

#### 2. درجات الاستنتاج الثلاث في الماضي:
1. **اليقين شبه التام بالإثبات (95% - 99% تأكد): MUST HAVE + V3**:
   - الدليل: الأرض مبللة والأشجار تتساقط منها المياه.
   - الاستنتاج: *It **must have rained** heavily last night.* (لابد أنها أمطرت بغزارة الليلة الماضية).
   - *The servers are down and the error logs are empty; the power **must have failed**.*
2. **الاستحالة القاطعة (99% مستحيل أن يكون قد حدث): CAN'T HAVE / COULDN'T HAVE + V3**:
   - الدليل: رأيت أحمد في الرياض قبل 10 دقائق، ويقول أحدهم أنه قابله في لندن!
   - الاستنتاج: *You **can\'t have seen** Ahmed in London; I just had lunch with him here!* (مستحيل أنك رأيته في لندن!).
   - *He **couldn\'t have stolen** the data because he didn\'t have administrative access.*
3. **الاحتمال والشك المنطقي (40% - 50% ربما): MIGHT HAVE / MAY HAVE / COULD HAVE + V3**:
   - الدليل: زميلك لم يحضر الاجتماع وهاتفه مغلق.
   - الاستنتاج: *He **might have missed** his flight.* (ربما فاتته الرحلة).
   - *They **could have encountered** technical difficulties on the road.*`,
    rulesAndStructuresAr: `المعادلة العامة: Subject + Modal + have + Past Participle (V3). اليقين الإيجابي: must have + V3. الاستحالة: can't have + V3 أو couldn't have + V3 (انتبه: لا نستخدم mustn't have للاستنتاج!). الاحتمال: might/may/could have + V3.`,
    summaryAr: 'للاستنتاج في الماضي استخدم: must have + V3 (أكيد حدث)، can\'t have + V3 (مستحيل حدث)، might have + V3 (ربما حدث).',
    arabicContrastPoint: {
      titleAr: 'استخدام Mustn\'t have للاستنتاج السلبي',
      descriptionAr: 'كثير من المتعلمين يظنون أن عكس Must have في الاستنتاج هو Mustn\'t have. هذا خطأ فادح! في الاستنتاج، عكس اليقين بالإثبات هو الاستحالة بـ Can\'t have + V3: "He can\'t have said that" (مستحيل أن يكون قد قال ذلك).',
      badArabicHabit: 'He mustn\'t have stolen the car because he was with me.',
      correctEnglishWay: 'He can\'t have stolen the car because he was with me.',
    },
    examples: [
      { en: 'The confidential database must have been breached from an internal network IP.', ar: 'لابد أن قاعدة البيانات السرية قد اختُرقت من عنوان IP في الشبكة الداخلية (استنتاج مؤكد بالأدلة).', phoneticAr: 'ذَا كُونْفِيدِنْشَل دَاتَابَيْس مَاسْت هَاف بِين بْرِيتْشْت' },
      { en: 'She can\'t have deleted the production database accidentally; there are four confirmation safeguards.', ar: 'مستحيل أن تكون قد حذفت قاعدة بيانات الإنتاج بطريق الخطأ، فهناك أربعة حواجز أمان وتأكيد.', phoneticAr: 'شِي كَانْت هَاف دِلِيتِد ذَا بْرُودَاكْشَن' },
      { en: 'The delivery driver might have taken an alternative route to avoid city congestion.', ar: 'ربما سلك سائق التوصيل طريقاً بديلاً لتفادي الازدحام المروري في المدينة.', phoneticAr: 'ذَا دِلِيڤَرِي دْرَايڤَر مَايْت هَاف تَيْكِن' },
    ],
    vocabulary: [
      { word: 'Safeguard', ipa: '/ˈseɪf.ɡɑːrd/', partOfSpeech: 'noun & verb', meaningAr: 'إجراء وقائي وحاجز أمان', exampleEn: 'The system has automated safeguards.', exampleAr: 'يحتوي النظام على حواجز أمان مؤتمتة.' },
      { word: 'Breach', ipa: '/briːtʃ/', partOfSpeech: 'noun & verb', meaningAr: 'اختراق أمني أو خرق للعقد', exampleEn: 'We detected a security breach.', exampleAr: 'رصدنا اختراقاً أمنياً.' },
      { word: 'Congestion', ipa: '/kənˈdʒes.tʃən/', partOfSpeech: 'noun', meaningAr: 'ازدحام مروري خانق', exampleEn: 'Traffic congestion delayed our arrival.', exampleAr: 'أخر الازدحام المروري وصولنا.' },
      { word: 'Accidentally', ipa: '/ˌæk.səˈden.t̬əl.i/', partOfSpeech: 'adverb', meaningAr: 'عرضاً وبطريق الخطأ غير المتعمد', exampleEn: 'The file was deleted accidentally.', exampleAr: 'حُذف الملف بطريق الخطأ.' },
    ],
    commonMistakes: [
      { wrong: 'He mustn\'t have done it (meaning impossible).', correct: 'He can\'t have done it.', reasonAr: 'للاستنتاج المنطقي المستحيل في الماضي نستخدم can\'t have وليس mustn\'t have.' },
      { wrong: 'She must be arrived yesterday.', correct: 'She must have arrived yesterday.', reasonAr: 'الاستنتاج في الماضي يتطلب must have + V3 وليس must be.' },
    ],
    realWorldChallengeAr: 'حلل مشكلة تقنية أو موقفاً غامضاً حدث بالأمس في جملتين مستخدماً: "must have" و "can\'t have".',
    exercises: [
      {
        id: 'b2-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة الاستنتاج المؤكد بالأدلة في الماضي:',
        instructionEn: 'Choose the modal expressing strong logical deduction in the past:',
        question: 'The streets are completely soaked with puddles. It _____ rained last night.',
        options: ['must have', 'can\'t have', 'should to', 'might to'],
        correctAnswer: 0,
        explanationAr: 'الأدلة الحسية الواضحة (الشوارع غارقة بالمياه) تدل على استنتاج مؤكد: must have rained.',
      },
      {
        id: 'b2-5-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المعبرة عن الاستحالة القاطعة في الماضي:',
        instructionEn: 'Choose the modal of impossibility in the past:',
        question: 'Omar _____ committed the security violation; he was on annual leave abroad.',
        options: ['can\'t have', 'mustn\'t have', 'should have', 'must have'],
        correctAnswer: 0,
        explanationAr: 'للتعبير عن الاستحالة القاطعة في الماضي نستخدم can\'t have + V3.',
      },
      {
        id: 'b2-5-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المساعد للاحتمال والشك في الماضي (might ______ lost):',
        instructionEn: 'Fill in the auxiliary for past possibility:',
        question: 'He is not answering his phone; he might ______ run out of battery.',
        correctAnswer: ['have', 'Have'],
        explanationAr: 'تتكون صيغة استنتاج الاحتمال في الماضي من might + have + التصريف الثالث run out.',
      },
      {
        id: 'b2-5-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي من الجمل التالية تعبر عن استنتاج خاطئ نحوياً لاستخدام mustn\'t؟',
        instructionEn: 'Which sentence incorrectly uses mustn\'t for deduction?',
        question: 'Identify the grammatically incorrect sentence for deduction:',
        options: [
          'He mustn\'t have known the confidential password.',
          'He can\'t have known the confidential password.',
          'He might have known the confidential password.',
          'He must have known the confidential password.',
        ],
        correctAnswer: 0,
        explanationAr: 'استخدام mustn\'t have في الاستنتاج خاطئ تماماً؛ الصواب هو can\'t have.',
      },
      {
        id: 'b2-5-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة استنتاج مؤكد في الماضي:',
        instructionEn: 'Arrange the words into a correct past deduction sentence:',
        question: 'the / have / missed / flight / must / They',
        correctAnswer: 'They must have missed the flight',
        explanationAr: 'الترتيب: They + must have + missed + the flight.',
      },
      {
        id: 'b2-5-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح صيغة الاستحالة في الماضي (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the invalid deduction modal:',
        question: 'She mustn\'t have sent that email because she was offline.',
        correctAnswer: ["can't", "couldn't", 'cant', 'couldnt'],
        explanationAr: 'للاستحالة نستخدم can\'t have أو couldn\'t have وليس mustn\'t.',
      },
      {
        id: 'b2-5-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما درجة التأكد المعبر عنها بـ "might have taken"؟',
        instructionEn: 'What level of certainty is expressed by "might have"?',
        question: '"Might have" indicates approximately:',
        options: [
          'احتمال وشك معقول بنسبة حوالي 40% - 50%',
          'يقين وتأكيد قطعي بنسبة 100%',
          'استحالة تامة بنسبة 0%',
          'أمر وإلزام قانوني',
        ],
        correctAnswer: 0,
        explanationAr: 'تعبر might have عن احتمال معقول ولكن مع وجود شك وعدم يقين.',
      },
      {
        id: 'b2-5-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "لابد أنه نسي مفاتيحه في المكتب":',
        instructionEn: 'Translate: "لابد أنه نسي مفاتيحه في المكتب":',
        question: 'Translate: "لابد أنه نسي مفاتيحه في المكتب"',
        correctAnswer: ['He must have forgotten his keys at the office', 'He must have forgotten his keys in the office', 'he must have forgotten his keys at the office'],
        explanationAr: 'الترجمة الصحيحة: He must have forgotten his keys at the office.',
      },
    ],
  },
  {
    id: 'lesson-b2-6-discourse-markers-connectors',
    level: 'B2',
    order: 6,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التفكير النقدي وأدوات الربط والاختبار',
    chapterTitleEn: 'Chapter 3: Deduction, Discourse Markers & Assessment',
    titleAr: 'الدرس 6: روابط التناقض والاستدراك المتقدمة (Despite, Although, Whereas)',
    titleEn: 'Lesson 6: Advanced Connectors of Contrast & Concession (Despite vs. Although)',
    category: 'كتابة وأسلوب (B2)',
    iconName: 'Shuffle',
    estimatedMinutes: 16,
    objectivesAr: [
      'التفرقة النحوية الحاسمة بين الأدوات التي يليها اسم (Despite / In spite of) والتي يليها جملة كاملة (Although / Even though).',
      'استخدام Whereas و While للمقارنة والمقابلة بين فكرتين أو اتجاهين متعارضين.',
      'توظيف روابط النتيجة والتعليل المتقدمة: Consequently, Furthermore, Nevertheless.',
      'كتابة فقرات أكاديمية ونقاشات عمل رفيعة المستوى وخالية من التكرار.',
    ],
    explanationMarkdownAr: `### روابط التناقض والاستدراك (Contrast & Concession)

#### 1. الصراع الكلاسيكي: DESPITE مقابل ALTHOUGH
كلاهما يعني **"بالرغم من / على الرغم من"**، لكن الفارق النحوي حاسم تماماً:

1. **ALTHOUGH / EVEN THOUGH / THOUGH (يتبعها جملة كاملة: فاعل + فعل)**:
   - \`Although + Subject + Verb\`
   - *Although the deadline **was** very tight, the engineering team delivered on time.*
   - *Even though she **lacked** prior experience, she excelled in the technical interview.*

2. **DESPITE / IN SPITE OF (يتبعها اسم صريح Noun أو اسم مشتق Gerund منتهٍ بـ -ing)**:
   - \`Despite / In spite of + Noun Phrase / Verb-ing\`
   - *Despite **the tight deadline**, the team delivered on time.* (اسم صريح).
   - *Despite **lacking** prior experience, she excelled.* (فعل منتهٍ بـ -ing).
   - **حيلة ذكية**: يمكنك استخدام جملة كاملة مع Despite إذا أضفت العبارة السحرية:
     - *Despite **the fact that** the deadline was tight, we delivered on time.*
   - > **تحذير**: لا تضع **of** بعد Despite أبداً! نقول *Despite* أو *In spite of*.

#### 2. أدوات المقابلة بين أمرين (WHEREAS & WHILE):
نستخدمهما لبيان التباين الواضح بين طرفين:
- *Some executives prefer remote work, **whereas** others favor physical office collaboration.*
- *React is widely used for frontend web, **while** Swift is preferred for native iOS development.*

#### 3. الروابط الانتقالية بين الجمل (Sentence Transition Markers):
تأتي عادة في بداية الجملة الثانية متبوعة بفاصلة (Comma):
- **However** (ومع ذلك / إلا أن): *The plan was ambitious. However, budget cuts forced us to scale down.*
- **Nevertheless / Nonetheless** (ورغم كل ما سبق): *Risks were high; nevertheless, the board approved the investment.*
- **Consequently / Therefore** (ونتيجة لذلك): *Sales surged; consequently, revenue doubled.*
- **Furthermore / Moreover** (وعلاوة على ذلك): *The tool is free; furthermore, it is open-source.*`,
    rulesAndStructuresAr: `قاعدة Although: يتبعها جملة كاملة (فاعل + فعل). قاعدة Despite: يتبعها اسم صريح أو Verb-ing (ممنوع Despite of!). قاعدة Whereas: للمقارنة والمقابلة بين أمرين. الروابط المستقلة (However, Consequently, Furthermore) تتبع بفاصلة في بداية الجملة.`,
    summaryAr: 'Although لجملة فاعل وفعل، و Despite لاسم صريح أو ing. تذكر أن Despite لا تأخذ of، وأن However يتبعها فاصلة.',
    arabicContrastPoint: {
      titleAr: 'إضافة of بعد كلمة Despite',
      descriptionAr: 'من الأخطاء شديدة الشهرة الخلط بين In spite of و Despite فيقول المتعلم: "Despite of the rain". احفظها كقاعدة صلبة: إما ثلاث كلمات: "In spite of" وإما كلمة واحدة فقط: "Despite" بدون of نهائياً.',
      badArabicHabit: 'Despite of the high price, I bought it.',
      correctEnglishWay: 'Despite the high price, I bought it. (or: In spite of the high price).',
    },
    examples: [
      { en: 'Despite facing severe supply chain bottlenecks, the factory met its production quota.', ar: 'على الرغم من مواجهة اختناقات حادة في سلاسل التوريد، حقق المصنع حصته الإنتاجية المستهدفة.', phoneticAr: 'دِسْبَايْت فَيْسِينْج سِڤِير سَابْلَاي تْشَيْن' },
      { en: 'Although the initial budget was limited, the founders built an exceptional MVP.', ar: 'على الرغم من أن الميزانية الأولية كانت محدودة، بنى المؤسسون نموذجاً أولياً استثنائياً.', phoneticAr: 'أُولْذُو ذي إِنِيشَل بَادْجِت وَاز لِيمِيتِد' },
      { en: 'Cloud adoption accelerated rapidly; consequently, cybersecurity became our top priority.', ar: 'تسارع تبني الحلول السحابية بسرعة فائقة؛ ونتيجة لذلك، أصبح الأمن السيبراني أولويتنا القصوى.', phoneticAr: 'كْلَاوْد أَدُوبْشَن أَكْسِلِيرَيْتِد رَابِيدْلِي' },
    ],
    vocabulary: [
      { word: 'Bottleneck', ipa: '/ˈbɑː.t̬əl.nek/', partOfSpeech: 'noun', meaningAr: 'عنق زجاجة / نقطة اختناق تعطل العمل', exampleEn: 'Identify the bottlenecks in the pipeline.', exampleAr: 'حدد نقاط الاختناق في مسار العمل.' },
      { word: 'Consequently', ipa: '/ˈkɑːn.sə.kwənt.li/', partOfSpeech: 'adverb', meaningAr: 'ونتيجة لذلك وبناءً عليه', exampleEn: 'He worked hard; consequently, he was promoted.', exampleAr: 'عمل بجد، ونتيجة لذلك تم ترقيته.' },
      { word: 'Adoption', ipa: '/əˈdɑːp.ʃən/', partOfSpeech: 'noun', meaningAr: 'تبني واعتماد تقنية جديدة', exampleEn: 'User adoption exceeded expectations.', exampleAr: 'فاق تبني المستخدمين التوقعات.' },
      { word: 'Quota', ipa: '/ˈkwoʊ.t̬ə/', partOfSpeech: 'noun', meaningAr: 'حصة أو كمية مستهدفة محددة', exampleEn: 'The sales team surpassed their monthly quota.', exampleAr: 'تجاوز فريق المبيعات حصتهم الشهرية.' },
    ],
    commonMistakes: [
      { wrong: 'Despite of the rain, we went out.', correct: 'Despite the rain, we went out.', reasonAr: 'كلمة Despite لا يتبعها حرف of نهائياً.' },
      { wrong: 'Although the rain, we went out.', correct: 'Although it was raining, we went out. (or: Despite the rain)', reasonAr: 'بعد Although لا بد من جملة كاملة فيها فاعل وفعل.' },
      { wrong: 'However it rained, we went out.', correct: 'Although it rained, we went out.', reasonAr: 'كلمة However لا تربط شقي جملة واحدة بنفس طريقة Although.' },
    ],
    realWorldChallengeAr: 'اكتب فقرة من 3 جمل تناقش فيها مزايا وعيوب العمل عن بعد مستخدماً: Despite و Whereas و Consequently.',
    exercises: [
      {
        id: 'b2-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الرابط الصحيح الذي يليه اسم صريح (the tight deadline):',
        instructionEn: 'Choose the connector followed by a noun phrase:',
        question: '_____ the tight deadline, the engineering team delivered a stable product.',
        options: ['Despite', 'Although', 'Even though', 'Whereas'],
        correctAnswer: 0,
        explanationAr: 'الاسم الصريح the tight deadline يأخذ Despite، بينما Although و Even though تتطلب جملة كاملة.',
      },
      {
        id: 'b2-6-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الرابط الذي يليه جملة كاملة من فاعل وفعل (it was raining):',
        instructionEn: 'Choose the connector followed by a complete clause:',
        question: '_____ it was raining heavily, the outdoor conference proceeded as planned.',
        options: ['Although', 'Despite', 'In spite of', 'Because of'],
        correctAnswer: 0,
        explanationAr: 'الجملة المكتملة (it was raining) تسبق بـ Although أو Even though.',
      },
      {
        id: 'b2-6-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة المقابلة والمقارنة بين أمرين متضادين (whereas):',
        instructionEn: 'Fill in the connector for contrast between two groups:',
        question: 'Some developers prefer Python, ______ others advocate strongly for Rust.',
        correctAnswer: ['whereas', 'while', 'Whereas', 'While'],
        explanationAr: 'نستخدم whereas أو while للمقابلة والتناقض بين فريقين أو رأيين.',
      },
      {
        id: 'b2-6-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي من الجمل التالية تحتوي على خطأ إقحام of الممنوعة بعد Despite؟',
        instructionEn: 'Which sentence contains the forbidden "Despite of" error?',
        question: 'Identify the incorrect sentence:',
        options: [
          'Despite of the market volatility, our investments grew.',
          'Despite the market volatility, our investments grew.',
          'In spite of the market volatility, our investments grew.',
          'Although the market was volatile, our investments grew.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى خاطئة لأن Despite لا تقبل حرف of إطلاقاً.',
      },
      {
        id: 'b2-6-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة استدراك سليمة مع Despite:',
        instructionEn: 'Arrange the words into a correct concession sentence:',
        question: 'Despite / team / won / fatigue / the / game / the',
        correctAnswer: 'Despite the fatigue the team won the game',
        explanationAr: 'الترتيب: Despite the fatigue the team won the game.',
      },
      {
        id: 'b2-6-ex-6',
        type: 'error_hunt',
        instructionAr: 'احذف الكلمة الزائدة الخاطئة بعد Despite (اكتب الكلمة الزائدة فقط):',
        instructionEn: 'Identify the redundant word after Despite:',
        question: 'Despite of his busy schedule, he mentors young founders.',
        correctAnswer: ['of', 'Of'],
        explanationAr: 'كلمة of زائدة وخاطئة بعد Despite ويجب حذفها.',
      },
      {
        id: 'b2-6-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر الرابط السببي النتيجي المناسب في بداية الجملة الرسمية:',
        instructionEn: 'Select the formal transition marker expressing result:',
        question: 'Customer acquisition costs rose; _____, the marketing strategy was revised.',
        options: ['consequently', 'whereas', 'despite', 'although'],
        correctAnswer: 0,
        explanationAr: 'الرابط consequently يعني "وبناءً على ذلك / ونتيجة لذلك" ويتبعه فاصلة.',
      },
      {
        id: 'b2-6-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "على الرغم من الصعوبات، حققنا هدفنا":',
        instructionEn: 'Translate: "على الرغم من الصعوبات، حققنا هدفنا":',
        question: 'Translate: "على الرغم من الصعوبات، حققنا هدفنا"',
        correctAnswer: ['Despite the difficulties we achieved our goal', 'Despite the difficulties, we achieved our goal.', 'In spite of the difficulties, we achieved our goal', 'despite the difficulties, we achieved our goal'],
        explanationAr: 'الترجمة الصحيحة: Despite the difficulties, we achieved our goal.',
      },
    ],
  },
  {
    id: 'lesson-b2-7-level-b2-assessment',
    level: 'B2',
    order: 7,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التفكير النقدي وأدوات الربط والاختبار',
    chapterTitleEn: 'Chapter 3: Deduction, Discourse Markers & Assessment',
    titleAr: 'الدرس 7: اختبار واجتياز المستوى فوق المتوسط B2 الشامل',
    titleEn: 'Lesson 7: Level B2 Comprehensive Mastery Assessment',
    category: 'المراجعة والاختبار (B2)',
    iconName: 'Award',
    estimatedMinutes: 20,
    objectivesAr: [
      'مراجعة شاملة لجميع مخرجات المستوى B2 (Past Perfect, Third Conditional, Reported Speech, Relative Clauses, Modals of Deduction, Connectors).',
      'التأكد التام من القضاء على فخ الضمير العائد وحروف الجر بعد despite و discuss.',
      'تقييم الدقة الأسلوبية في صياغة الفرضيات المعقدة والتقارير التنفيذية.',
      'اجتياز الاختبار النهائي بنجاح للتأهل إلى المستوى المتقدم C1 (Advanced).',
    ],
    explanationMarkdownAr: `### المراجعة الشاملة لمستوى B2 (Upper Intermediate)

#### المعايير الاحترافية التي حققتها في هذا المستوى:
1. **الماضي التام وتتابع الأحداث**:
   - إتقان أسبقية الأحداث بـ *had + V3* مع *by the time* و *before*.
2. **الشرطية الثالثة وسيناريوهات الندم**:
   - التعبير عن الماضي الافتراضي: *If we had known, we would have acted*.
3. **الكلام المنقول (Reported Speech)**:
   - الرجوع بالزمن خطوة للوراء (*Backshift*).
   - تحويل الأسئلة إلى جمل خبرية بدون *do/did*.
4. **جمل الوصل وحذف الضمير العائد**:
   - حذف *it/him* نهائياً بعد *that* و *which* (*The deal that we signed*).
   - التمييز بين الجمل المحددة وغير المحددة بين الفواصل.
5. **الاستنتاج في الماضي**:
   - *must have been* (يقين إيجابي)، و *can't have been* (استحالة)، و *might have been* (احتمال).
6. **روابط التناقض والاستدراك**:
   - *Despite + Noun/ing* مقابل *Although + Subject + Verb*.

> **تعليمات الاختبار الشامل**:
> أجب عن الأسئلة العشرة التالية بدقة فائقة لاختبار تمكنك التام وفتح بوابة المستوى المتقدم **C1 (Advanced)**!`,
    rulesAndStructuresAr: `خلاصة قواعد B2: Had + V3 للحدث الأسبق. If had V3, would have V3 للشرط الثالث. Reported questions: فاعل ثم فعل. جمل الوصل: احذف الضمير العائد it. الاستنتاج: can't have للاستحالة. Despite بدون of متبوعة باسم صريح.`,
    summaryAr: 'أنت الآن تتحدث وتكتب بمستوى احترافي عالي الجودة يؤهلك للعمل في كبرى الشركات العالمية واجتياز اختبارات الآيلتس بدرجات تفوق 6.5 - 7.0.',
    arabicContrastPoint: {
      titleAr: 'تصفية الفروق الدقيقة قبل دخول المستوى المتقدم C1',
      descriptionAr: 'المستوى B2 يفصل بين المتحدث المتوسط والمتحدث المحترف الذي يتجنب بدقة عثرات الضمير العائد وترتيب الأسئلة المنقولة.',
      badArabicHabit: 'Retaining Arabic syntax in complex sentences.',
      correctEnglishWay: 'Flawless execution of advanced English syntax and discourse markers.',
    },
    examples: [
      { en: 'If the board had approved the acquisition, our international market share would have doubled.', ar: 'لو كان مجلس الإدارة قد وافق على صفقة الاستحواذ، لتضاعفت حصتنا في السوق الدولية.', phoneticAr: 'إِف ذَا بُورد هَاد أَبْرُوڤد' },
      { en: 'The client whom we met yesterday confirmed that the contract had been approved.', ar: 'العميل الذي قابلناه بالأمس أكد أن العقد كان قد تم اعتماده (بدون him).', phoneticAr: 'ذَا كْلَايَنْت هُوم وِي مِت يِسْتَرْدَاي' },
      { en: 'Despite facing fierce competition, the startup secured a substantial Series A investment.', ar: 'على الرغم من مواجهة منافسة شرسة، أمّنت الشركة الناشئة استثماراً ضخماً في الجولة أ.', phoneticAr: 'دِسْبَايْت فَيْسِينْج فِيرس كُومْبِيتِيشَن' },
    ],
    vocabulary: [
      { word: 'Acquisition', ipa: '/ˌæk.wəˈzɪʃ.ən/', partOfSpeech: 'noun', meaningAr: 'استحواذ وشراء شركات', exampleEn: 'The corporate acquisition succeeded.', exampleAr: 'نجحت صفقة استحواذ الشركات.' },
      { word: 'Substantial', ipa: '/səbˈstæn.ʃəl/', partOfSpeech: 'adjective', meaningAr: 'جوهري وضخم وملحوظ', exampleEn: 'A substantial increase in profits.', exampleAr: 'زيادة جوهرية في الأرباح.' },
      { word: 'Fierce', ipa: '/fɪrs/', partOfSpeech: 'adjective', meaningAr: 'شديد وضارٍ ومحتدم', exampleEn: 'Fierce global market competition.', exampleAr: 'منافسة سوقية عالمية محتدمة.' },
    ],
    commonMistakes: [
      { wrong: 'The contract which we signed it yesterday.', correct: 'The contract which we signed yesterday.', reasonAr: 'حذف الضمير العائد it إلزامي.' },
      { wrong: 'Despite of the rain, we won.', correct: 'Despite the rain, we won.', reasonAr: 'حذف of بعد Despite إلزامي.' },
    ],
    realWorldChallengeAr: 'اكتب تقريراً موجزاً من 4 جمل عن مشروعك الأخير مستخدماً الشرطية الثالثة والماضي التام ورابط Despite.',
    exercises: [
      {
        id: 'b2-7-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من فخ الضمير العائد:',
        instructionEn: 'Choose the sentence without a resumptive pronoun error:',
        question: 'Select the grammatically flawless sentence:',
        options: [
          'The client who we met yesterday signed the deal.',
          'The client who we met him yesterday signed the deal.',
          'The deal which we signed it yesterday is profitable.',
          'The office where we work in it is modern.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة تماماً لحذف him الزائدة بعد who.',
      },
      {
        id: 'b2-7-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف الشرطية الثالثة للندم على حدث في الماضي:',
        instructionEn: 'Choose the Third Conditional form expressing past regret:',
        question: 'If they had prepared thoroughly, they _____ the presentation.',
        options: [
          'would not have failed',
          'would not fail',
          'will not fail',
          'did not fail',
        ],
        correctAnswer: 0,
        explanationAr: 'الشرطية الثالثة: If + had + V3 يقابلها في الجواب would not have failed.',
      },
      {
        id: 'b2-7-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالرابط المناسب لاسم صريح بدون of (Despite):',
        instructionEn: 'Fill in the connector for contrast followed by a noun phrase:',
        question: '______ the turbulent economic climate, the enterprise maintained profitability.',
        correctAnswer: ['Despite', 'despite'],
        explanationAr: 'الاسم الصريح the turbulent economic climate يأخذ Despite بدون of.',
      },
      {
        id: 'b2-7-ex-4',
        type: 'multiple_choice',
        instructionAr: 'تجنب حرف الجر الزائد الشائع مع الفعل "discuss":',
        instructionEn: 'Choose the correct sentence without a redundant preposition with "discuss":',
        question: 'Choose the correct professional sentence:',
        options: [
          'We discussed the quarterly budget during the meeting.',
          'We discussed about the quarterly budget during the meeting.',
          'We discussed on the quarterly budget during the meeting.',
          'We discussed to the quarterly budget during the meeting.',
        ],
        correctAnswer: 0,
        explanationAr: 'الفعل discuss يتعدى لمفعوله مباشرة ولا يأخذ حرف الجر about.',
      },
      {
        id: 'b2-7-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة استنتاج مؤكد في الماضي:',
        instructionEn: 'Arrange the words into a correct past deduction sentence:',
        question: 'must / report / sent / have / the / He / already',
        correctAnswer: 'He must have already sent the report',
        explanationAr: 'الترتيب: He must have already sent the report.',
      },
      {
        id: 'b2-7-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في السؤال المنقول بحذف do أو تحويل الفعل (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the verb in the indirect reported question:',
        question: 'She asked me where did I worked.',
        correctAnswer: ['worked', 'Worked'],
        explanationAr: 'الصيغة السليمة للسؤال المنقول: where I worked (تحذف did ويوضع الفعل في الماضي).',
      },
      {
        id: 'b2-7-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة لما قبل الماضي مع By the time:',
        instructionEn: 'Choose the past perfect form with By the time:',
        question: 'By the time the auditors arrived, the CFO _____ the financial statements.',
        options: ['had audited', 'has audited', 'audits', 'was audit'],
        correctAnswer: 0,
        explanationAr: 'الحدث الأسبق قبل وصول المدققين يأخذ الماضي التام had audited.',
      },
      {
        id: 'b2-7-ex-8',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة الاستحالة المنطقية القاطعة في الماضي:',
        instructionEn: 'Choose the modal of impossibility in the past:',
        question: 'He _____ leaked the code; he was not granted repository permissions.',
        options: ['can\'t have', 'mustn\'t have', 'should have', 'must have'],
        correctAnswer: 0,
        explanationAr: 'للاستحالة القاطعة نستخدم can\'t have + V3.',
      },
      {
        id: 'b2-7-ex-9',
        type: 'multiple_choice',
        instructionAr: 'أي من الجمل التالية تستخدم ضمير الوصل بين الفواصل بشكل صحيح؟',
        instructionEn: 'Which sentence correctly uses non-defining relative clause with commas?',
        question: 'Identify the correct non-defining relative sentence:',
        options: [
          'My flagship project, which launched last year, is expanding.',
          'My flagship project, that launched last year, is expanding.',
          'My flagship project which launched it last year is expanding.',
          'My flagship project that launched it is expanding.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة: تستخدم which بين فاصلتين وبدون ضمير عائد it.',
      },
      {
        id: 'b2-7-ex-10',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "على الرغم من الصعوبات، أكملنا المشروع في الوقت المحدد":',
        instructionEn: 'Translate: "على الرغم من الصعوبات، أكملنا المشروع في الوقت المحدد":',
        question: 'Translate: "على الرغم من الصعوبات، أكملنا المشروع في الوقت المحدد"',
        correctAnswer: ['Despite the difficulties we completed the project on time', 'Despite the difficulties, we completed the project on time.', 'In spite of the difficulties, we completed the project on time', 'despite the difficulties, we completed the project on time'],
        explanationAr: 'الترجمة الصحيحة: Despite the difficulties, we completed the project on time.',
      },
    ],
  },
];
