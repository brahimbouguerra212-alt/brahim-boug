import type { Lesson } from '../../types/learning.ts';

export const C2_LESSONS: Lesson[] = [
  {
    id: 'lesson-c2-1-lexical-nuance-confusables',
    level: 'C2',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: الفروق الدلالية الدقيقة وبلاغة النخبة',
    chapterTitleEn: 'Chapter 1: Lexical Precision & Semantic Nuance',
    titleAr: 'الدرس 1: الفروق الدلالية الدقيقة بين الكلمات المربكة (Lexical Nuance)',
    titleEn: 'Lesson 1: Subtle Lexical Distinctions & High-Level Semantic Traps',
    category: 'فقه اللغة وبلاغة (C2)',
    iconName: 'Sparkles',
    estimatedMinutes: 20,
    objectivesAr: [
      'التفرقة الدقيقة بين الكلمات التي يخلط بينها حتى المتعلمون المتقدمون في مستوى C1.',
      'التمييز الصارم بين: Disinterested (محايد ومنصف) و Uninterested (غير مبالٍ وغير مهتم).',
      'التمييز بين: Ambiguous (يحتمل أكثر من تأويل) و Equivocal (مضلل ومراوغ متعمداً).',
      'التمييز بين: Continual (متكرر مع فواصل) و Continuous (مستمر دون أي انقطاع).',
      'إتقان الفارق بين Historic (تاريخي عظيم الأثر) و Historical (متعلق بالتاريخ عموماً).',
    ],
    explanationMarkdownAr: `### فقه اللغة الإنجليزية: الفروق الدلالية بالغة الدقة (C2 Nuance)

في مستوى الإتقان التام C2 (Proficiency)، لا يكفي أن تكون جملتك صحيحة نحوياً؛ بل يجب أن تكون **المفردة المختارة هي الكلمة الوحيدة الحصرية** التي تنقل الظلال الدلالية المقصودة بدقة متناهية.

#### 1. DISINTERESTED مقابل UNINTERESTED:
- **Disinterested**: تعني **محايد، موضوعي، وغير ذي مصلحة شخصية في النزاع** (صفة القاضي العادل النزيه):
  - *We need a **disinterested** arbitrator to resolve the corporate dispute.*
  - (نحتاج محكّماً محايداً لا مصلحة له مع أي من الطرفين).
- **Uninterested**: تعني **غير مهتم، غير مبالٍ، وضجران**:
  - *The student seemed completely **uninterested** in theoretical physics.*

#### 2. AMBIGUOUS مقابل EQUIVOCAL:
- **Ambiguous**: نص أو كلام **يحتمل أكثر من معنى وتأويل** (قد يكون ذلك غير مقصود بسبب صياغة عامة):
  - *The phrasing in the contract was **ambiguous**, leading to multiple interpretations.*
- **Equivocal**: كلام **مراوغ ومضلل عمداً** للتهرب من إعطاء إجابة واضحة:
  - *The politician gave an **equivocal** answer to evade accountability.* (إجابة مراوغة خبيثة).

#### 3. CONTINUAL مقابل CONTINUOUS:
- **Continuous**: مستمر **دون أي توقف أو انقطاع على الإطلاق** (مثل تدفق النهر أو التيار):
  - *The heartbeat monitor recorded a **continuous** signal.*
- **Continual**: متكرر الحدوث بانتظام على فترات **تتخللها فترات توقف قصيرة**:
  - *His **continual** interruptions disrupted the meeting.* (مقاطعات متكررة كل بضع دقائق).

#### 4. HISTORIC مقابل HISTORICAL:
- **Historic**: حدث أو مكان **عظيم الأهمية ويصنع التاريخ**:
  - *Landing on Mars will be a **historic** milestone for humanity.*
- **Historical**: أي شيء **له علاقة بالتاريخ والماضي عموماً** دون شرط العظمة:
  - *She enjoys reading **historical** novels set in the 18th century.*`,
    rulesAndStructuresAr: `الفروق الدلالية: Disinterested = محايد نزيه / Uninterested = غير مكترث. Ambiguous = غامض محتمل للتأويل / Equivocal = مراوغ عمداً. Continuous = مستمر بلا توقف / Continual = متكرر بفواصل. Historic = تاريخي فارق / Historical = متعلق بعلم التاريخ.`,
    summaryAr: 'مستوى C2 يتطلب دقة جراحية في انتقاء الألفاظ. اختر Disinterested للقاضي النزيه، و Continual للمقاطعات المتكررة، و Historic للإنجاز الفارق.',
    arabicContrastPoint: {
      titleAr: 'استخدام Disinterested بمعنى "غير مهتم"',
      descriptionAr: 'من أشهر الأخطاء حتى بين بعض المتحدثين بالإنجليزية استخدام Disinterested بمعنى ضجران أو غير مهتم. في السياق الرفيع C2، هذا خطأ فادح؛ القاضي يجب أن يكون disinterested (محايداً منصفاً) وليس uninterested (غير مبالٍ بالقضية!).',
      badArabicHabit: 'The judge was uninterested in the outcome, so he was fair.',
      correctEnglishWay: 'The judge was disinterested in the outcome, ensuring impartiality.',
    },
    examples: [
      { en: 'An effective legal mediator must remain strictly disinterested throughout arbitration.', ar: 'يجب أن يظل الوسيط القانوني الفعال محايداً تماماً وبلا مصلحة شخصية طوال جلسات التحكيم.', phoneticAr: 'أَن إِفِكْتِڤ لِيجَل مِيدِييْتَر' },
      { en: 'The spokesperson\'s equivocal remarks heightened media speculation about imminent layoffs.', ar: 'أدت تصريحات المتحدث الرسمي المراوغة عمداً إلى تأجيج تكهنات وسائل الإعلام بشأن تسريحات وشيكة.', phoneticAr: 'ذَا سْبُوكسْبِيرْسَنز إِكْوِيڤُوكَل' },
      { en: 'The launch of the first commercial fusion reactor marked a truly historic turning point.', ar: 'شكل إطلاق أول مفاعل اندماج تجاري نقطة تحول تاريخية وفارقة بحق في مسيرة البشرية.', phoneticAr: 'ذَا لُونْش أُوڤ ذَا فِيرست' },
    ],
    vocabulary: [
      { word: 'Arbitrator', ipa: '/ˈɑːr.bə.treɪ.t̬ɚ/', partOfSpeech: 'noun (legal)', meaningAr: 'محكّم قانوني مستقل لفض النزاعات', exampleEn: 'The arbitrator issued a binding ruling.', exampleAr: 'أصدر المحكم حكماً ملزماً.' },
      { word: 'Equivocal', ipa: '/ɪˈkwɪv.ə.kəl/', partOfSpeech: 'adjective', meaningAr: 'مراوغ ومبهم عمداً لتفادي الالتزام', exampleEn: 'His equivocal stance raised doubts.', exampleAr: 'أثار موقفه المراوغ الشكوك.' },
      { word: 'Impartiality', ipa: '/ˌɪm.pɑːr.ʃiˈæl.ə.t̬i/', partOfSpeech: 'noun', meaningAr: 'نزاهة وحياد تام', exampleEn: 'Impartiality is the cornerstone of justice.', exampleAr: 'الحياد هو حجر الزاوية للعدالة.' },
      { word: 'Speculation', ipa: '/ˌspek.jəˈleɪ.ʃən/', partOfSpeech: 'noun', meaningAr: 'تكهن وتخمين دون أدلة قطعية', exampleEn: 'Rampant speculation filled the press.', exampleAr: 'ملأت التكهنات المتسارعة الصحافة.' },
    ],
    commonMistakes: [
      { wrong: 'I was disinterested in the movie so I slept.', correct: 'I was uninterested in the movie so I slept.', reasonAr: 'عدم الاكتراث بالفيلم هو uninterested، أما disinterested فتعني محايد بلا مصلحة.' },
      { wrong: 'It was a historical victory.', correct: 'It was a historic victory.', reasonAr: 'الانتصار العظيم الفارغ في التاريخ يوصف بـ historic.' },
      { wrong: 'The rain was continual for 24 hours without a single second pause.', correct: 'The rain was continuous for 24 hours.', reasonAr: 'الاستمرار المطلق دون ثانية انقطاع واحدة هو continuous.' },
    ],
    realWorldChallengeAr: 'اكتب تحليلاً من سطرين لقرار تجاري أو قانوني موظفاً فيه كلمتي "disinterested" و "equivocal" بمعانيهما الدقيقة.',
    exercises: [
      {
        id: 'c2-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الكلمة الدقيقة التي تصف المحكّم القضائي "المحايد والنزيه الذي لا مصلحة شخصية له":',
        instructionEn: 'Choose the word meaning impartial and without personal bias:',
        question: 'To ensure a fair verdict, we appointed a completely _____ international arbitrator.',
        options: ['disinterested', 'uninterested', 'interesting', 'interested'],
        correctAnswer: 0,
        explanationAr: 'كلمة disinterested تعني محايد ونزيه وبلا مصلحة شخصية في النزاع، بينما uninterested تعني غير مبالٍ.',
      },
      {
        id: 'c2-1-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الكلمة التي تصف التصريحات "المراوغة والمضللة عمداً للتهرب من الحقيقة":',
        instructionEn: 'Select the adjective describing deliberately evasive and misleading language:',
        question: 'When pressed by journalists regarding the deficit, the minister offered an _____ reply.',
        options: ['equivocal', 'ambiguous', 'articulate', 'disinterested'],
        correctAnswer: 0,
        explanationAr: 'كلمة equivocal تعني مراوغ ومضلل عمداً لتفادي الإقرار بالحقيقة.',
      },
      {
        id: 'c2-1-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالصفة التي تصف الحدث "التاريخي العظيم والفارق" (historic):',
        instructionEn: 'Fill in the adjective for a momentous, history-making event:',
        question: 'The signing of the international climate treaty represented a ______ breakthrough.',
        correctAnswer: ['historic', 'Historic'],
        explanationAr: 'الحدث العظيم الذي يصنع التاريخ يوصف بـ historic (أما historical فتعني متعلق بأحداث الماضي).',
      },
      {
        id: 'c2-1-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما الفرق بين التدفق "continuous" والمقاطعات "continual"؟',
        instructionEn: 'What is the precise distinction between continuous and continual?',
        question: 'The term "continual" specifically denotes:',
        options: [
          'أحداثاً متكررة الحدوث بانتظام تتخللها فترات توقف متقطعة',
          'استمراراً مطلقاً دون ثانية توقف واحدة',
          'حدثاً وقع في الماضي وانتهى',
          'أمراً خيالياً مستحيل الحدوث',
        ],
        correctAnswer: 0,
        explanationAr: 'كلمة continual تعني تكراراً متواصلاً تتخلله فترات انقطاع قصيرة (مثل المقاطعات المتكررة).',
      },
      {
        id: 'c2-1-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة دقة دلالية C2:',
        instructionEn: 'Arrange the words into a semantically precise sentence:',
        question: 'disinterested / arbitrator / The / was / completely',
        correctAnswer: 'The arbitrator was completely disinterested',
        explanationAr: 'الترتيب: The arbitrator was completely disinterested.',
      },
      {
        id: 'c2-1-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في استخدام uninterested بدلاً من النزاهة والحياد (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the misuse of uninterested for impartiality:',
        question: 'A judge must be entirely uninterested in the financial outcome of the trial.',
        correctAnswer: ['disinterested', 'Disinterested'],
        explanationAr: 'القاضي يجب أن يكون محايداً وبلا مصلحة شخصية: disinterested.',
      },
      {
        id: 'c2-1-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي من الجمل التالية تستخدم كلمة "historical" بدقة لغوية واصطلاحية تامة؟',
        instructionEn: 'Which sentence correctly uses "historical"?',
        question: 'Identify the correct use of "historical":',
        options: [
          'The research library preserves thousands of historical archives from the Middle Ages.',
          'The moon landing was a historical event that changed all physics forever.',
          'Winning the championship was a historical milestone for the player.',
          'The invention of the wheel was a historical turning point.',
        ],
        correctAnswer: 0,
        explanationAr: 'الوثائق والأرشيفات المتعلقة بعلم التاريخ والماضي تأخذ historical، أما الإنجازات العظيمة فتأخذ historic.',
      },
      {
        id: 'c2-1-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم العبارة بدقة C2: "أعطى الوزير إجابة مراوغة عمداً":',
        instructionEn: 'Translate: "أعطى الوزير إجابة مراوغة عمداً":',
        question: 'Translate: "أعطى الوزير إجابة مراوغة عمداً"',
        correctAnswer: ['The minister gave an equivocal answer', 'The minister gave an equivocal reply', 'the minister gave an equivocal answer'],
        explanationAr: 'الترجمة الدقيقة: The minister gave an equivocal answer/reply.',
      },
    ],
  },
  {
    id: 'lesson-c2-2-rhetorical-devices-parallelism',
    level: 'C2',
    order: 2,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: الفروق الدلالية الدقيقة وبلاغة النخبة',
    chapterTitleEn: 'Chapter 1: Lexical Precision & Semantic Nuance',
    titleAr: 'الدرس 2: التوازي البلاغي والأسلوب الرخيم (Parallelism & Chiasmus)',
    titleEn: 'Lesson 2: Rhetorical Architecture: Parallelism, Chiasmus & Litotes in Masterful Prose',
    category: 'بلاغة وأسلوب متقدم (C2)',
    iconName: 'Layout',
    estimatedMinutes: 20,
    objectivesAr: [
      'هندسة الجمل بالتوازي النحوي المتقن (Syntactic Parallelism) لتعزيز الإيقاع الرخيم في الخطب والمقالات.',
      'إتقان فن القلب البلاغي المتقاطع (Chiasmus: ABBA Structure).',
      'استخدام فن نفي النقيض للتأكيد المهذب والوقار الأدبي (Litotes).',
      'تحويل المقالات والتقارير التنفيذية إلى نصوص أدبية بليغة تأسرك موسيقاها اللغوية.',
    ],
    explanationMarkdownAr: `### الهندسة البلاغية الرفيعة: التوازي والمقابلة والتهوين

في ذروة الإتقان C2، تصبح الجملة مقطوعة موسيقية وهيكلاً معمارياً متناسقاً.

#### 1. التوازي النحوي الصارم (Syntactic Parallelism):
هو تكرار نفس البنية النحوية في نسق متوازن يعطي النص قوة إقناعية وإيقاعاً متدفقاً:
- غير متوازن وركيك: *The CEO values innovation, working hard, and to be transparent.*
- **بتوازي C2 البلاغي المتقن (جميعها أسماء متوازية)**:
  - *The CEO values **innovation**, **diligence**, and **transparency**.*
- **توازي العبارات والجمل**:
  - *Not by words, but by deeds; not by promises, but by execution.*

#### 2. القلب البلاغي المتقاطع (Chiasmus: بنية A-B-B-A):
هو أسلوب خطابي بالغ الأثر يعكس فيه الكاتب ترتيب الكلمات في الشطر الثاني لترسيخ حكمة خالدة:
- مقولة كينيدي الشهيرة:
  - *"Ask not what **your country [A]** can do for **you [B]**; ask what **you [B]** can do for **your country [A]**."*
- في بيئة الأعمال والتقنية:
  - *"We do not build software to make money; we make money to build software."*

#### 3. أسلوب نفي النقيض (Litotes - الإيجاب عبر نفي الضد):
هو أسلوب دبلوماسي أدبي بريطاني رفيع يؤكد فيه المتحدث المعنى الإيجابي من خلال نفي عكسه، مما يضفي وقاراً وتحفظاً نبيلاً:
- بدلاً من قول *It was very easy*:
  - **It was no small achievement.** (لم يكن إنجازاً يسيراً = كان إنجازاً عظيماً جداً!).
- بدلاً من قول *I agree with you*:
  - **I am not unmindful of your concerns.** (لست غير مدرك لمخاوفك = أنا مدرك لها تماماً).
- بدلاً من *She is intelligent*:
  - **She is not without talent.** (هي ليست مجردة من الموهبة = هي موهوبة بامتياز).`,
    rulesAndStructuresAr: `قواعد التوازي: الأفعال في العطف يجب أن تتطابق في الصيغة (كلها gerunds أو كلها مصدر). بنية Chiasmus: ABBA معكوسة الترتيب. قاعدة Litotes: نفي النقيض (not + un-adjective / no small feat) لإبراز التوكيد الراقي واللباقة الدبلوماسية.`,
    summaryAr: 'التوازي النحوي يصنع إيقاع النص وقوة الحجة. استخدم Chiasmus لعكس العبارات في الحكمة، واستخدم Litotes (مثل no small feat) للتوكيد الدبلوماسي الرفيع.',
    arabicContrastPoint: {
      titleAr: 'كسر التوازي النحوي في العطف (Faulty Parallelism)',
      descriptionAr: 'من أكثر الأخطاء التي تفسد المقالات المتقدمة عطف اسم على فعل مضاف له -ing على مصدر في قائمة واحدة: "He likes reading, to swim, and tennis". الصواب التام: توحيد النمط النحوي: "He enjoys reading, swimming, and playing tennis".',
      badArabicHabit: 'The company aims at expanding, to hire talent, and profit.',
      correctEnglishWay: 'The company aims to expand operations, hire talent, and maximize profit.',
    },
    examples: [
      { en: 'Securing consensus among twenty sovereign nations was no mean feat.', ar: 'لم يكن تأمين الإجماع بين عشرين دولة ذات سيادة إنجازاً هيناً (Litotes: أي كان إنجازاً هائلاً استثنائياً).', phoneticAr: 'سِكْيُورِينْج كُونْسِنْسَس أَمَانْج' },
      { en: 'We must not let what we cannot do interfere with what we can do.', ar: 'يجب ألا ندع ما لا نستطيع فعله يعرقل ويعيق ما نحن قادرون على فعله (Chiasmus).', phoneticAr: 'وِي مَاسْت نُوت لِت وَات وِي كَانُوت دُو' },
      { en: 'The algorithm excelled in precision, speed, and reliability.', ar: 'تفوق النموذج الخوارزمي في الدقة، والسرعة، والموثوقية (توازي نحوي متناسق).', phoneticAr: 'ذي أَلْغُورِيذِم إِكْسِلْد إِن بْرِسِيژَن' },
    ],
    vocabulary: [
      { word: 'Consensus', ipa: '/kənˈsen.səs/', partOfSpeech: 'noun', meaningAr: 'إجماع عام وتوافق جماعي صلب', exampleEn: 'The board reached a consensus.', exampleAr: 'توصل مجلس الإدارة إلى إجماع.' },
      { word: 'Litotes', ipa: '/laɪˈtoʊ.tiːz/', partOfSpeech: 'noun (rhetoric)', meaningAr: 'أسلوب نفي النقيض لإبراز التوكيد البلاغي', exampleEn: 'Litotes lends subtle irony to prose.', exampleAr: 'يضفي نفي النقيض تهكماً دقيقاً وأناقة على النثر.' },
      { word: 'Feat', ipa: '/fiːt/', partOfSpeech: 'noun', meaningAr: 'إنجاز بطولي خارق يتطلب مهارة وشجاعة', exampleEn: 'The architectural structure was an engineering feat.', exampleAr: 'كان ذلك الصرح المعماري إنجازاً هندسياً فذاً.' },
      { word: 'Chiasmus', ipa: '/kaɪˈæz.məs/', partOfSpeech: 'noun (rhetoric)', meaningAr: 'القلب المتقاطع المتوازي في البلاغة (ABBA)', exampleEn: 'Chiasmus makes memorable maxims.', exampleAr: 'يصنع أسلوب القلب المتقاطع حكماً خالدة.' },
    ],
    commonMistakes: [
      { wrong: 'She likes singing, to dance, and music.', correct: 'She likes singing, dancing, and listening to music.', reasonAr: 'كسر التوازي النحوي، ويجب توحيد صيغة الأفعال المعطوفة.' },
      { wrong: 'It was not unuseful.', correct: 'It was not unhelpful. / It was not useless.', reasonAr: 'استخدام أسلوب Litotes بكلمات طبيعية مألوفة أدبياً مثل not unhelpful.' },
    ],
    realWorldChallengeAr: 'صغ حكمة أو شعاراً تنفيذياً لشركتك أو رؤيتك الشخصية مستخدماً أسلوب Chiasmus أو التوازي النحوي الصارم.',
    exercises: [
      {
        id: 'c2-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'أي من الجمل التالية تتبع التوازي النحوي الصارم (Syntactic Parallelism) بشكل متناسق؟',
        instructionEn: 'Which sentence demonstrates flawless parallel structure?',
        question: 'Identify the sentence with consistent parallelism:',
        options: [
          'The roadmap requires optimizing the database, securing the API, and refactoring the legacy code.',
          'The roadmap requires optimizing the database, to secure the API, and legacy code refactor.',
          'The roadmap requires optimizing the database, security for API, and to refactor code.',
          'The roadmap requires to optimize the database, securing API, and refactored code.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى متوازنة تماماً: جميع العناصر أفعال متبوعة بـ -ing في نفس النسق النحوي.',
      },
      {
        id: 'c2-2-ex-2',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى البلاغي المتضمن في التعبير الأدبي "no small achievement" (Litotes)؟',
        instructionEn: 'What is the rhetorical meaning of the litotes "no small achievement"?',
        question: '"It was no small achievement" literally emphasizes that:',
        options: [
          'It was a truly monumental and extraordinary accomplishment.',
          'It was an insignificant, minor event.',
          'It was an utter failure.',
          'It was completely easy and required no effort.',
        ],
        correctAnswer: 0,
        explanationAr: 'أسلوب Litotes يؤكد العظمة الاستثنائية بنفي الصغر: "لم يكن إنجازاً صغيراً" = كان إنجازاً ضخماً وتاريخياً.',
      },
      {
        id: 'c2-2-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل التعبير البلاغي المتوازي الشهير (deeds): "Not by words, but by ______":',
        instructionEn: 'Complete the parallel rhetorical contrast:',
        question: 'Leadership is demonstrated not by words, but by ______.',
        correctAnswer: ['deeds', 'Deeds', 'actions', 'Actions'],
        explanationAr: 'المقابلة البلاغية الشهيرة: not by words, but by deeds (بالأفعال لا بالأقوال).',
      },
      {
        id: 'c2-2-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي من المقولات التالية تمثل أسلوب القلب المتقاطع (Chiasmus: ABBA)؟',
        instructionEn: 'Which famous quote is a prime example of chiasmus?',
        question: 'Identify the chiasmus structure:',
        options: [
          'We do not build software to make money; we make money to build software.',
          'We built software, deployed code, and tested systems.',
          'The system is fast, secure, and reliable.',
          'Although it rained, the game continued.',
        ],
        correctAnswer: 0,
        explanationAr: 'المقولة الأولى تعكس الترتيب (build software -> make money / make money -> build software) في بنية ABBA الكلاسيكية.',
      },
      {
        id: 'c2-2-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة Litotes بلاغية رفيعة:',
        instructionEn: 'Arrange the words into a sophisticated litotes expression:',
        question: 'mean / It / was / feat / no / negotiations / the / in',
        correctAnswer: 'It was no mean feat in the negotiations',
        explanationAr: 'الترتيب: It was no mean feat in the negotiations.',
      },
      {
        id: 'c2-2-ex-6',
        type: 'error_hunt',
        instructionAr: 'أصلح الخلل في التوازي النحوي (اكتب الفعل المصحح بصيغة ing المتناسقة):',
        instructionEn: 'Fix the faulty parallelism to match the other gerunds:',
        question: 'She excels at analyzing data, drafting proposals, and to present findings.',
        correctAnswer: ['presenting', 'Presenting'],
        explanationAr: 'للتوازي النحوي الصارم يجب تحويل to present إلى presenting مثل analyzing و drafting.',
      },
      {
        id: 'c2-2-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما التعبير البلاغي الدبلوماسي الذي يعني "أنا لست غافلاً عن مصاعبكم":',
        instructionEn: 'Which litotes phrase expresses "I am fully aware of your difficulties"?',
        question: 'Choose the refined diplomatic litotes:',
        options: [
          'I am not unmindful of the challenges you confront.',
          'I know your problems completely.',
          'I do not care about your difficulties.',
          'Your problems are very big.',
        ],
        correctAnswer: 0,
        explanationAr: 'التعبير الدبلوماسي الرفيع: I am not unmindful of... (لست غير مدرك = أنا مدرك تماماً).',
      },
      {
        id: 'c2-2-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب نفي النقيض الأدبي: "لم يكن إنجازاً هيناً":',
        instructionEn: 'Translate using litotes: "لم يكن إنجازاً هيناً":',
        question: 'Translate: "لم يكن إنجازاً هيناً"',
        correctAnswer: ['It was no small feat', 'It was no mean feat', 'it was no small feat', 'it was no mean feat'],
        explanationAr: 'الترجمة الأدبية الفصيحة: It was no small feat أو It was no mean feat.',
      },
    ],
  },
  {
    id: 'lesson-c2-3-connotation-and-idiomatic-mastery',
    level: 'C2',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الإيحاء الدلالي والتراكيب المعقدة',
    chapterTitleEn: 'Chapter 2: Connotation, Idioms & Complex Syntax',
    titleAr: 'الدرس 3: الإيحاء الدلالي والتعابير الاصطلاحية الفائقة (Connotation & Idioms)',
    titleEn: 'Lesson 3: Connotation, Tone Calibration & High-Level Idiomatic Expressions',
    category: 'بلاغة ومفردات رفيعة (C2)',
    iconName: 'Compass',
    estimatedMinutes: 20,
    objectivesAr: [
      'فهم الإيحاء الدلالي (Connotation) والشحنة العاطفية المرافقة للكلمات المترادفة ظاهرياً.',
      'التفرقة بين الظلال الإيجابية والمحايدة والقدحية: Confident vs Arrogant, Meticulous vs Nitpicking.',
      'استخدام التعبيرات الاصطلاحية الاستعارية الرفيعة: A double-edged sword, Steer clear, Cut corners.',
      'معايرة نبرة الخطاب (Tone Calibration) لتلائم الحوار الدبلوماسي أو النقد الأكاديمي الحصيف.',
    ],
    explanationMarkdownAr: `### الإيحاء الدلالي (Connotation) والتعبيرات الاصطلاحية الرفيعة

#### 1. ما هو الإيحاء الدلالي (Connotation)؟
الكلمات ليست مجرد تعريفات في القاموس (Denotation)؛ بل تحمل **شحنة إيحائية وعاطفية وثقافية خفية (Connotation)**.
استخدام كلمة ذات إيحاء سلبي بدلاً من الإيجابي قد يدمر صفقة تجارية أو يفسد علاقة دبلوماسية دون أن تدري!

- انظر لهذه المقارنات المذهلة:
  1. **التوفير والحرص المالي**:
     - إيحاء إيجابي راقٍ: **Frugal / Economical** (مدبر حكيم للمال).
     - إيحاء سلبي مذموم: **Stingy / Cheap / Miserly** (بخيل مقتر).
  2. **الثقة بالنفس**:
     - إيحاء إيجابي: **Confident / Self-assured** (واثق من قدراته).
     - إيحاء سلبي متغطرس: **Arrogant / Presumptuous** (متعجرف ومغرور).
  3. **التدقيق في التفاصيل**:
     - إيحاء إيجابي رفيع: **Meticulous / Scrupulous** (دقيق ومتحرٍّ للإتقان).
     - إيحاء سلبي مزعج: **Nitpicking / Pedantic** (مهووس بسفاسف الأمور ويتصيد الهفوات).
  4. **العناد والإصرار**:
     - إيحاء إيجابي محمود: **Resolute / Tenacious / Steadfast** (صامد وثابت على المبدأ).
     - إيحاء سلبي أعمى: **Stubborn / Obstinate / Pig-headed** (عنيد متصلب الرأي).

#### 2. التعبيرات الاصطلاحية الاستعارية الرفيعة (Idiomatic Mastery):
في مستوى C2، تستخدم الاستعارات المتمكنة لتلخيص مواقف استراتيجية معقدة في كلمات معدودة:
1. **A double-edged sword** (سلاح ذو حدين):
   - *AI adoption is a double-edged sword; it boosts productivity but introduces cybersecurity vectors.*
2. **Cut corners** (يسلك مسارات ملتوية مختصرة على حساب الجودة والأمان):
   - *When architecting critical infrastructure, engineers must never cut corners.*
3. **The elephant in the room** (القضية الكبرى المحرجة التي يتجاهل الجميع الحديث عنها عمداً):
   - *Budgetary insolvency remained the elephant in the room during the board meeting.*
4. **Steer clear of** (يتجنب بحكمة وكياسة الابتعاد عن منزلق خطير):
   - *Prudent investors steer clear of volatile and unregulated speculative assets.*`,
    rulesAndStructuresAr: `قاعدة Connotation: اختر الألفاظ بناءً على الشحنة العاطفية والموقف (Frugal بدلاً من Cheap، و Meticulous بدلاً من Pedantic). استخدام الاستعارات المتمكنة (Double-edged sword, Steer clear) في مقالات الرأي والمفاوضات يمنح لغتك طلاقة المتحدث الأصلي المتمكن.`,
    summaryAr: 'الكلمات تحمل مشاعر خفية. احرص على اختيار الكلمات ذات الإيحاء المحمود (Frugal, Resolute) في مدح النفس والفريق، ووظف التعبيرات الاصطلاحية الراقية لإيصال الرسالة بدهاء وبلاغة.',
    arabicContrastPoint: {
      titleAr: 'اختيار كلمة ذات إيحاء سلبي في سياق المدح',
      descriptionAr: 'المتعلم قد يريد أن يمدح زميله بأنه حريص ومدبر فيقول: "He is very stingy with money"! كلمة stingy تعني بخيل وجشع. الصواب البليغ: "He is remarkably frugal and financially prudent".',
      badArabicHabit: 'My manager is very stubborn and cheap.',
      correctEnglishWay: 'My manager is remarkably resolute and economically prudent.',
    },
    examples: [
      { en: 'The enterprise demonstrated steadfast resilience throughout the macroeconomic downturn.', ar: 'أظهرت المنشأة صموداً وثباتاً راسخاً (إيحاء إيجابي رفيع) طوال فترة الانكماش الاقتصادي الكلي.', phoneticAr: 'ذي إِنْتَرْبْرَايْز دِيمُونْسْتْرَيْتِد' },
      { en: 'Short-term profitability is appealing, but we cannot afford to cut corners on user privacy.', ar: 'الربحية قصيرة الأجل مغرية، لكننا لا نستطيع المساومة واختصار المعايير على حساب خصوصية المستخدمين.', phoneticAr: 'شُورت تِيرم بْرُوفِيتَابِيلِيتِي' },
      { en: 'Prudent central bankers steer clear of hasty monetary policy interventions.', ar: 'يتجنب محافظو البنوك المركزية الحكماء بحصافة التدخلات المتسرعة في السياسة النقدية.', phoneticAr: 'بْرُودَنْت سِينْتْرَال بَانْكَرْز' },
    ],
    vocabulary: [
      { word: 'Prudent', ipa: '/ˈpruː.dənt/', partOfSpeech: 'adjective', meaningAr: 'حصيف وحكيم ومتبصر في عواقب الأمور', exampleEn: 'A prudent fiscal policy protected reserves.', exampleAr: 'حمت السياسة المالية الحصيفة الاحتياطيات.' },
      { word: 'Steadfast', ipa: '/ˈsted.fæst/', partOfSpeech: 'adjective', meaningAr: 'صامد وراسخ لا يتزعزع في وجه الشدائد', exampleEn: 'Steadfast commitment to core values.', exampleAr: 'التزام راسخ لا يتزعزع بالقيم الجوهرية.' },
      { word: 'Macroeconomic', ipa: '/ˌmæk.roʊˌiː.kəˈnɑː.mɪk/', partOfSpeech: 'adjective', meaningAr: 'متعلق بالاقتصاد الكلي والسياسات العامة', exampleEn: 'Macroeconomic indicators show recovery.', exampleAr: 'تظهر مؤشرات الاقتصاد الكلي تعافياً.' },
      { word: 'Insolvency', ipa: '/ɪnˈsɑːl.vən.si/', partOfSpeech: 'noun (finance)', meaningAr: 'إعسار مالي وعجز عن سداد الديون', exampleEn: 'The firm faced impending insolvency.', exampleAr: 'واجهت الشركة إعساراً مالياً وشيكاً.' },
    ],
    commonMistakes: [
      { wrong: 'He is very cheap with budgets.', correct: 'He is very frugal with budgets.', reasonAr: 'كلمة cheap إيحاؤها مهين وسلبي، والبديل الراقي للمدح هو frugal.' },
      { wrong: 'They cutted corners.', correct: 'They cut corners.', reasonAr: 'فعل cut شاذ وتصريفه cut في الماضي أيضاً.' },
    ],
    realWorldChallengeAr: 'صف قراراً تقنياً أو إدارياً معقداً في جملتين مستخدماً التعبير الاصطلاحي: "a double-edged sword".',
    exercises: [
      {
        id: 'c2-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصفة ذات الإيحاء الإيجابي الراقي لوصف الشخص الحريص على التدقيق في التفاصيل بإتقان:',
        instructionEn: 'Choose the positive connotation adjective for paying great attention to detail:',
        question: 'The research team commended the lead scientist for her _____ methodology.',
        options: ['meticulous', 'nitpicking', 'pedantic', 'fussy'],
        correctAnswer: 0,
        explanationAr: 'الصفة meticulous تحمل إيحاءً إيجابياً رفيعاً بالدقة والإتقان، بينما البقية تحمل إيحاءات سلبية مذمومة.',
      },
      {
        id: 'c2-3-ex-2',
        type: 'multiple_choice',
        instructionAr: 'ما التعبير الاصطلاحي الذي يعني "التساهل واختصار المعايير على حساب الجودة والأمان"؟',
        instructionEn: 'Which idiom means to do something poorly or cheaply to save time/money?',
        question: 'When engineering medical devices, manufacturers must never _____.',
        options: ['cut corners', 'bite the bullet', 'break the ice', 'call it a day'],
        correctAnswer: 0,
        explanationAr: 'التعبير cut corners يعني التهاون واختصار الإجراءات على حساب الجودة والمطابقة.',
      },
      {
        id: 'c2-3-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل التعبير الاصطلاحي الاستعاري الشهير: "a double-edged ______" (sword):',
        instructionEn: 'Fill in the word to complete "a double-edged sword":',
        question: 'Rapid automation is a double-edged ______, displacing labor while expanding productivity.',
        correctAnswer: ['sword', 'Sword'],
        explanationAr: 'التعبير الاصطلاحي هو a double-edged sword (سلاح ذو حدين).',
      },
      {
        id: 'c2-3-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي من الكلمات التالية تحمل إيحاءً إيجابياً (Positive Connotation) للإصرار والشجاعة؟',
        instructionEn: 'Which word has a distinctly positive connotation for determination?',
        question: 'Select the word with a positive connotation for being firmly determined:',
        options: ['resolute', 'obstinate', 'stubborn', 'pig-headed'],
        correctAnswer: 0,
        explanationAr: 'الصفة resolute تعني صامد وحازم وثابت على المبدأ بإيحاء بطولي محمود.',
      },
      {
        id: 'c2-3-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة استعارة اصطلاحية بليغة:',
        instructionEn: 'Arrange the words into a correct idiomatic sentence:',
        question: 'sword / edged / double / is / a / Technology',
        correctAnswer: 'Technology is a double edged sword',
        explanationAr: 'الترتيب: Technology is a double edged sword.',
      },
      {
        id: 'c2-3-ex-6',
        type: 'error_hunt',
        instructionAr: 'استبدل الكلمة المهينة السلبية بكلمة المدح الراقية frugal (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Replace the derogatory word "stingy" with the positive "frugal":',
        question: 'Our founder was remarkably stingy with early capital, ensuring long runway.',
        correctAnswer: ['frugal', 'Frugal', 'prudent', 'Prudent'],
        explanationAr: 'الكلمة ذات الإيحاء الإيجابي الراقي للمدح هي frugal أو prudent.',
      },
      {
        id: 'c2-3-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى المقصود بعبارة "the elephant in the room"؟',
        instructionEn: 'What does "the elephant in the room" mean?',
        question: '"The elephant in the room" denotes:',
        options: [
          'قضية كبرى وواضحة للجميع ولكن يتجنب الحاضرون نقاشها لإحراجها',
          'حيوان ضخم هرب من حديقة الحيوان',
          'مشكلة تافهة لا قيمة لها',
          'حل هندسي سريع وبسيط',
        ],
        correctAnswer: 0,
        explanationAr: 'المعنى الاصطلاحي هو المشكلة الكبرى الواضحة التي يتجنب الجميع الخوض فيها لإحراجها.',
      },
      {
        id: 'c2-3-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم العبارة الاستعارية: "الذكاء الاصطناعي سلاح ذو حدين":',
        instructionEn: 'Translate: "الذكاء الاصطناعي سلاح ذو حدين":',
        question: 'Translate: "الذكاء الاصطناعي سلاح ذو حدين"',
        correctAnswer: ['Artificial intelligence is a double-edged sword', 'AI is a double-edged sword', 'Artificial intelligence is a double edged sword', 'artificial intelligence is a double-edged sword'],
        explanationAr: 'الترجمة الصحيحة: Artificial intelligence is a double-edged sword.',
      },
    ],
  },
  {
    id: 'lesson-c2-4-complex-syntax-fronting',
    level: 'C2',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الإيحاء الدلالي والتراكيب المعقدة',
    chapterTitleEn: 'Chapter 2: Connotation, Idioms & Complex Syntax',
    titleAr: 'الدرس 4: التقديم والتأخير البلاغي والجمل الدورية (Fronting & Periodic Sentences)',
    titleEn: 'Lesson 4: Complex Syntactic Modulation, Fronting & Rhythmic Cadence',
    category: 'قواعد متقدمة وبلاغة (C2)',
    iconName: 'Layout',
    estimatedMinutes: 20,
    objectivesAr: [
      'استخدام تقنية التقديم والتأخير (Fronting / Topicalization) لربط الجمل بانسيابية ساحرة.',
      'صياغة الجمل الدورية (Periodic Sentences) التي تؤجل الفكرة الرئيسية إلى ختام الجملة لخلق التشويق.',
      'التحكم في الإيقاع النغمي المتدفق (Rhythmic Cadence) للنثر الإنجليزي الرفيع.',
      'تجاوز الأنماط التعبيرية الرتيبة في التقارير الإستراتيجية والمقالات النقدية.',
    ],
    explanationMarkdownAr: `### التقديم والتأخير والجمل الدورية (Fronting & Periodic Sentences)

#### 1. تقنية التقديم والتأخير (Fronting / Topicalization):
في الإنجليزية العادية، يبدأ الكلام دائماً بالفاعل. ولكن في الأسلوب الأدبي والصحفي الرفيع C2، نقوم **بتقديم شبه الجملة الظرفية، أو الصفة، أو حتى المفعول به** إلى صدارة الجملة لربطها بالجملة السابقة كخيط حريري متصل:
- عادي: *The company's expansion plans were hidden behind these corporate acquisitions.*
- **بأسلوب C2 بالتقديم المكاني**:
  - **Behind these corporate acquisitions lay** the company's ambitious expansion plans.
- **تقديم الصفة أو شبه الجملة الحالية**:
  - *Equally compelling is the argument for decentralized renewable energy.*
  - *(بنفس القدر من الإقناع تأتي الحجة الداعية لـ...)*

#### 2. الجمل الدورية (Periodic Sentences - ذروة التشويق البلاغي):
الجملة الدورية تؤجل المعنى الرئيسي والفاعل والفعل الأساسي إلى **نهاية الجملة تماماً**، بعد سلسلة من أشباه الجمل التمهيدية، مما يحبس أنفاس القارئ حتى آخر كلمة:
- جملة عادية متراخية (Loose sentence):
  - *The startup secured sovereign backing after months of arduous technical trials and relentless negotiations.*
- **بصيغة دورية مشوقة (Periodic Sentence)**:
  - *After months of arduous technical trials, amidst relentless investor negotiations, and against prevailing macroeconomic headwinds, **the startup secured sovereign backing**.*
  - (بنيت الجملة في تصاعد درامي حتى بلغت ذروتها في كلماتها الأخيرة!).

#### 3. تقديم المفعول به لغرض المقابلة (Object Fronting):
- *Most proposals we rejected outright; **this one**, however, we examined with meticulous care.*
- (قدمنا *this one* للمقابلة المباشرة مع *most proposals*).`,
    rulesAndStructuresAr: `قواعد Fronting: تقديم الظرف المكاني مع قلب الفاعل والفعل (Behind the acquisitions lay the plans). تقديم الصفة: (Equally significant is...). الجملة الدورية (Periodic Sentence): تأجيل الجملة الرئيسية المستقلة إلى ما بعد التمهيدات والظروف لتعظيم الأثر الدرامي والتشويق الأكاديمي.`,
    summaryAr: 'التقديم والتأخير يعطي لغتك نغماً ساحراً ويربط الجمل بسلاسة. الجمل الدورية تؤجل النتيجة للنهاية لتصنع تشويقاً بلاغياً في المقالات والخطب.',
    arabicContrastPoint: {
      titleAr: 'الرتابة النمطية للجملة الإنجليزية المبتدئة',
      descriptionAr: 'المتعلم العربي قد يلتزم بالنمط الكلاسيكي (Subject + Verb) في كل جملة يكتبها، مما يجعل نصه رتيباً مملاً كأنه تقرير آلي. استخدام Fronting و Periodic Sentences يمنح النص روحاً بشرية نابضة وإيقاعاً يضاهي كبار كتاب الأدب والصحافة العالمية.',
      badArabicHabit: 'Starting every single sentence with "The company...", "It...", "We...".',
      correctEnglishWay: 'Varying sentence openings dynamically using adverbial and adjectival fronting.',
    },
    examples: [
      { en: 'Equally significant is the role of continuous automated testing in modern continuous delivery pipelines.', ar: 'وبنفس القدر من الأهمية والوزن يأتي دور الاختبارات المؤتمتة المستمرة في مسارات التسليم الحديثة (تقديم الصفة).', phoneticAr: 'إِيكْوَالِي سِيجْنِيفِيكَانْت إِز ذَا رُول' },
      { en: 'Beneath the superficial simplicity of the user interface lies an intricate distributed architecture.', ar: 'تحت البساطة الظاهرية لواجهة المستخدم، تكمن معمارية موزعة بالغة التعقيد والإحكام (تقديم الظرف المكاني).', phoneticAr: 'بِينِيث ذَا سُوبَرْفِيشَل سِيمْبْلِيسِيتِي' },
      { en: 'Driven by intense competitive pressure, empowered by abundant venture capital, and anchored in deep technical moats, the enterprise achieved global ubiquity.', ar: 'مدفوعةً بضغط تنافسي محتدم، ومدعومةً برأس مال استثماري وفير، ومرتكزةً على خنادق حماية تقنية عميقة، حققت المنشأة انتشاراً عالمياً شاملاً (جملة دورية).', phoneticAr: 'دْرِيڤِن بَاي إِنْتِنس' },
    ],
    vocabulary: [
      { word: 'Superficial', ipa: '/ˌsuː.pɚˈfɪʃ.əl/', partOfSpeech: 'adjective', meaningAr: 'سطحي وظاهري غير متعمق', exampleEn: 'Superficial analysis missed core risks.', exampleAr: 'أغفل التحليل السطحي المخاطر الجوهرية.' },
      { word: 'Ubiquity', ipa: '/juːˈbɪk.wə.t̬i/', partOfSpeech: 'noun (elevated)', meaningAr: 'الوجود والانتشار الشامل في كل مكان', exampleEn: 'The ubiquity of mobile connectivity.', exampleAr: 'الانتشار الشامل للاتصال بالهاتف المحمول.' },
      { word: 'Cadence', ipa: '/ˈkeɪ.dəns/', partOfSpeech: 'noun (literature)', meaningAr: 'الإيقاع النغمي المتدفق في النثر والشعر', exampleEn: 'The orator spoke with rhythmic cadence.', exampleAr: 'تحدث الخطيب بإيقاع نغمي متدفق.' },
      { word: 'Moat', ipa: '/moʊt/', partOfSpeech: 'noun (business)', meaningAr: 'خندق حماية تنافسي يحمي الشركة من المنافسين', exampleEn: 'Proprietary IP creates a strong moat.', exampleAr: 'الملكية الفكرية الاحتكارية تصنع خندق حماية قوياً.' },
    ],
    commonMistakes: [
      { wrong: 'Behind the door stood he.', correct: 'Behind the door he stood. (or: Behind the door stood the guard)', reasonAr: 'إذا كان الفاعل ضميراً (he) لا نطبق القلب الكامل بل نقول Behind the door he stood؛ أما إذا كان اسماً صريحاً فنقلب: stood the guard.' },
    ],
    realWorldChallengeAr: 'أعد صياغة جملة افتتاحية لعرضك التقديمي مستخدماً أسلوب Fronting لتبدأ بـ: "Equally crucial is...".',
    exercises: [
      {
        id: 'c2-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة لتقديم الصفة والتوكيد (Adjectival Fronting):',
        instructionEn: 'Choose the correct adjectival fronting inversion:',
        question: '_____ the contribution of behavioral economics to public health policy.',
        options: [
          'Equally significant is',
          'Equally significant it is',
          'Equally significant are',
          'Equally is significant',
        ],
        correctAnswer: 0,
        explanationAr: 'التركيبة القياسية لتقديم الصفة: Equally significant is the contribution...',
      },
      {
        id: 'c2-4-ex-2',
        type: 'multiple_choice',
        instructionAr: 'ما الميزة الأسلوبية الكبرى للجملة الدورية (Periodic Sentence)؟',
        instructionEn: 'What is the stylistic advantage of a periodic sentence?',
        question: 'A periodic sentence creates dramatic tension by:',
        options: [
          'holding the main independent clause until the very end',
          'using only three-letter words',
          'eliminating all verbs from the predicate',
          'repeating the subject fifteen times',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الدورية تؤجل الفكرة والجملة المستقلة الرئيسية حتى النهاية تماماً لصنع التشويق والوقع الدرامي.',
      },
      {
        id: 'c2-4-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المناسب في التقديم المكاني (Behind the screen ______ the master controls):',
        instructionEn: 'Fill in the verb in locative fronting (lay / lie):',
        question: 'Beneath the tranquil surface ______ complex geothermal currents.',
        correctAnswer: ['lie', 'lay', 'Lie', 'Lay'],
        explanationAr: 'في التقديم المكاني يتقدم الفعل lie/lay على الفاعل الجمع complex currents.',
      },
      {
        id: 'c2-4-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب الصحيح عند تقديم شبه الجملة المكانية مع الفاعل الاسم الصريح:',
        instructionEn: 'Select the correct locative inversion with a full noun subject:',
        question: 'At the center of the financial district _____ the headquarters of the central bank.',
        options: ['stands', 'it stands', 'standing is', 'is standing it'],
        correctAnswer: 0,
        explanationAr: 'في التقديم المكاني يتقدم الفعل stands مباشرة على الفاعل the headquarters.',
      },
      {
        id: 'c2-4-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة fronting بليغة:',
        instructionEn: 'Arrange the words into an elegant fronted sentence:',
        question: 'crucial / is / innovation / Equally / continuous',
        correctAnswer: 'Equally crucial is continuous innovation',
        explanationAr: 'الترتيب: Equally crucial is continuous innovation.',
      },
      {
        id: 'c2-4-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخلل النحوي في تقديم الصفة (اكتب الكلمتين المصححتين):',
        instructionEn: 'Correct the order in adjectival fronting:',
        question: 'Equally vital the role is of cybersecurity.',
        correctAnswer: ['vital is the role', 'is the role', 'vital is'],
        explanationAr: 'الترتيب البلاغي الصحيح هو: Equally vital is the role of cybersecurity.',
      },
      {
        id: 'c2-4-ex-7',
        type: 'multiple_choice',
        instructionAr: 'كيف تصف النثر الأدبي الذي يمتلك إيقاعاً نغمياً وتدفقاً موسيقياً عذباً؟',
        instructionEn: 'Which literary term describes harmonious rhythmic flow in prose?',
        question: 'Prose characterized by harmonious rhythmic flow possesses admirable:',
        options: ['cadence', 'redundancy', 'ambiguity', 'dissonance'],
        correctAnswer: 0,
        explanationAr: 'كلمة cadence تعني الإيقاع النغمي المتدفق المتناسق في النثر والكلام.',
      },
      {
        id: 'c2-4-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب التقديم البلاغي: "وبنفس القدر من الأهمية تأتي الشفافية":',
        instructionEn: 'Translate using adjectival fronting: "وبنفس القدر من الأهمية تأتي الشفافية":',
        question: 'Translate: "وبنفس القدر من الأهمية تأتي الشفافية"',
        correctAnswer: ['Equally important is transparency', 'Equally crucial is transparency', 'equally important is transparency', 'Equally significant is transparency'],
        explanationAr: 'الترجمة البلاغية الرفيعة: Equally important/crucial is transparency.',
      },
    ],
  },
  {
    id: 'lesson-c2-5-level-c2-mastery-assessment',
    level: 'C2',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: الاختبار التتويجي وقمة الإتقان C2',
    chapterTitleEn: 'Chapter 3: Capstone Mastery Assessment & Linguistic Virtuosity',
    titleAr: 'الدرس 5: الامتحان التتويجي الشامل لإتقان اللغة الإنجليزية (C2 Mastery Capstone)',
    titleEn: 'Lesson 5: Level C2 Capstone Examination & The Summit of Fluency',
    category: 'الامتحان التتويجي النهائي (C2)',
    iconName: 'Crown',
    estimatedMinutes: 25,
    objectivesAr: [
      'اجتياز الامتحان النهائي التتويجي لمنهج فارس الشامل من الصفر A0 حتى الاحتراف C2.',
      'إثبات التمكن التام من أدق الفروق الدلالية (Disinterested vs Uninterested, Ambiguous vs Equivocal).',
      'إثبات البراعة في الهندسة البلاغية: Inversion, Cleft Sentences, Parallelism, Litotes, Periodic Syntax.',
      'التأهل لنيل شهادة الإتقان اللغوي التام والجاهزية لمخاطبة المحافل الدولية والمجلات الأكاديمية العالمية.',
    ],
    explanationMarkdownAr: `### الامتحان التتويجي النهائي: قمة الاحتراف والإتقان اللغوي (Level C2 Capstone)

أهلاً بك في قمة الإتقان اللغوي لمنصة فارس التعليمية!
لقد ارتقيت عبر المستويات السبعة:
- من **A0**: حيث ضبطت أصوات الحروف والأبجدية ومخارج P و B و V و TH وحرف E السحري.
- إلى **A1**: حيث بنيت أولى الجمل الاسمية بفعل الكينونة To Be والمضارع البسيط.
- إلى **A2**: حيث صقلت الماضي البسيط والمقارنات وحروف الجر بدقة متناهية.
- إلى **B1**: حيث أتقنت المضارع التام والشروط والأفعال المركبة والمبني للمجهول.
- إلى **B2**: حيث قضيت على فخ الضمير العائد واستوعبت الماضي التام والشرطية الثالثة والكلام المنقول.
- إلى **C1**: حيث وظفت القلب النحوي البلاغي والـ Subjunctive والجمل المشقوقة والتحفظ العلمي.
- وها أنت في **C2**: سيد الفروق الدلالية الدقيقة، مهندس التوازي النحوي، والناثر البليغ.

> **تعليمات الامتحان النهائي**:
> أجب عن الأسئلة العشرة المعيارية التالية لإثبات جدارتك بقمة الإتقان اللغوي (C2 Proficiency)!`,
    rulesAndStructuresAr: `ميثاق C2: الدقة المطلقة في اللفظ والدلالة. التوازن الموسيقي في الجملة. نفي النقيض (Litotes) في اللباقة. القلب النحوي والشرطي في الخطابة. التحفظ والموضوعية في الاستنتاج العلمي.`,
    summaryAr: 'أنت الآن في مصاف النخبة العالمية لمتحدثي وكتّاب اللغة الإنجليزية. أتم هذا الاختبار النهائي لتتويج مسيرتك التعليمية الملهمة!',
    arabicContrastPoint: {
      titleAr: 'الوصول إلى الملكة اللغوية التلقائية',
      descriptionAr: 'في C2، لم تعد تفكر في القواعد كقيود، بل أصبحت لغتك الإنجليزية طيعة بين يديك تعبر بها عن أعقد الأفكار الفلسفية والتنفيذية بأسلوب ساحر ومقنع.',
      badArabicHabit: 'Hesitating or translating in thought.',
      correctEnglishWay: 'Effortless, nuanced, culturally resonant mastery of global English.',
    },
    examples: [
      { en: 'An effective judicial mediator must be strictly disinterested, scrupulously objective, and profoundly articulate.', ar: 'يجب أن يكون الوسيط القضائي الفعال محايداً تماماً، وموضوعياً باحتراس، وفصيحاً بليغاً بعمق.', phoneticAr: 'أَن إِفِكْتِڤ دْجُودِيشَل مِيدِييْتَر' },
      { en: 'Seldom has the synthesis of rigorous scientific inquiry and bold strategic vision yielded such momentous societal dividends.', ar: 'نادراً ما أثمر التوليف بين التقصي العلمي الصارم والرؤية الاستراتيجية الجريئة مثل هذه العوائد المجتمعية التاريخية الفارقة.', phoneticAr: 'سِلْدَم هَاز ذَا سِينْثِسِس' },
      { en: 'It was not through hasty compromise, but through relentless architectural discipline, that the engineering team averted catastrophic latency.', ar: 'لم يكن التنازل المتسرع هو ما جنب الفريق الهندسي البطء الكارثي، بل كان الانضباط المعماري الدؤوب (It-cleft مع Chiasmus).', phoneticAr: 'إِت وَاز نُوت ثْرُو هَيْسْتِي' },
    ],
    vocabulary: [
      { word: 'Momentous', ipa: '/moʊˈmen.təs/', partOfSpeech: 'adjective (elevated)', meaningAr: 'عظيم الشأن وبالغ الأثر التاريخي', exampleEn: 'A momentous geopolitical shift.', exampleAr: 'تحول جيوسياسي عظيم الشأن.' },
      { word: 'Dividend', ipa: '/ˈdɪv.ə.dend/', partOfSpeech: 'noun', meaningAr: 'عائد ومكسب استثماري أو مجتمعي', exampleEn: 'Education pays long-term dividends.', exampleAr: 'يؤتي التعليم عوائد مستدامة على المدى الطويل.' },
      { word: 'Virtuosity', ipa: '/ˌvɝː.tʃuˈɑː.sə.t̬i/', partOfSpeech: 'noun (elevated)', meaningAr: 'براعة وإتقان استثنائي فائق النظير', exampleEn: 'Linguistic virtuosity in rhetoric.', exampleAr: 'براعة لغوية فائقة في الخطابة.' },
      { word: 'Synthesis', ipa: '/ˈsɪn.θə.sɪs/', partOfSpeech: 'noun', meaningAr: 'توليف وتضافر متناغم بين أفكار مختلفة', exampleEn: 'A creative synthesis of art and tech.', exampleAr: 'توليف إبداعي متناغم بين الفن والتقنية.' },
    ],
    commonMistakes: [
      { wrong: 'The arbitrator was uninterested in the case.', correct: 'The arbitrator was disinterested in the case.', reasonAr: 'المحكم القضائي العادل يوصف بـ disinterested (محايد بلا مصلحة شخصية).' },
      { wrong: 'The invention was a historical milestone.', correct: 'The invention was a historic milestone.', reasonAr: 'الإنجاز الفارق العظيم يوصف بـ historic.' },
    ],
    realWorldChallengeAr: 'اكتب بياناً ختامياً من 5 جمل تلخص فيه رؤيتك المهنية للعشر سنوات القادمة مستخدماً أرقى تراكيب المستويين C1 و C2.',
    exercises: [
      {
        id: 'c2-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الكلمة الدقيقة التي تصف المحكّم النزيه الذي لا مصلحة شخصية له في القضية:',
        instructionEn: 'Choose the word meaning impartial, unbiased, and free from personal interest:',
        question: 'A fair judicial ruling requires an entirely _____ arbitrator.',
        options: ['disinterested', 'uninterested', 'interesting', 'interested'],
        correctAnswer: 0,
        explanationAr: 'كلمة disinterested تعني نزيهاً ومحايداً بلا مصلحة شخصية، بينما uninterested تعني غير مبالٍ.',
      },
      {
        id: 'c2-5-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصفة التي تصف التصريحات "المراوغة والمبهمة عمداً لتفادي الإقرار بالحقيقة":',
        instructionEn: 'Select the adjective describing deliberately evasive and ambiguous speech:',
        question: 'Under intense investigative cross-examination, the CFO offered an _____ statement.',
        options: ['equivocal', 'articulate', 'unambiguous', 'disinterested'],
        correctAnswer: 0,
        explanationAr: 'كلمة equivocal تعني مراوغ ومبهم عمداً للتهرب من المساءلة.',
      },
      {
        id: 'c2-5-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالصفة التي تصف الإنجاز "التاريخي العظيم والفارق" (historic):',
        instructionEn: 'Fill in the word meaning of great and lasting historical importance:',
        question: 'The commercial deployment of nuclear fusion represents a truly ______ breakthrough.',
        correctAnswer: ['historic', 'Historic'],
        explanationAr: 'الحدث العظيم الذي يصنع التاريخ يوصف بـ historic.',
      },
      {
        id: 'c2-5-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى المقصود بأسلوب نفي النقيض في عبارة "It was no mean feat"؟',
        instructionEn: 'What is the precise meaning of the litotes "It was no mean feat"?',
        question: '"It was no mean feat" denotes that the achievement was:',
        options: [
          'an extraordinary, monumental, and admirable accomplishment',
          'a cruel, mean, and aggressive act',
          'a minor, insignificant, and trivial outcome',
          'an utter failure and financial disaster',
        ],
        correctAnswer: 0,
        explanationAr: 'أسلوب Litotes يؤكد العظمة الاستثنائية بنفي الصغر: كان إنجازاً هائلاً استثنائياً.',
      },
      {
        id: 'c2-5-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة chiasmus بلاغية متقاطعة:',
        instructionEn: 'Arrange the words into a memorable chiasmus sentence:',
        question: 'built / software / software / money / makes / Money',
        correctAnswer: 'Money makes software software makes money',
        explanationAr: 'الترتيب: Money makes software software makes money (توازي معكوس).',
      },
      {
        id: 'c2-5-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخلل في التوازي النحوي لعطف الأفعال (اكتب الفعل بصيغة ing):',
        instructionEn: 'Correct the faulty parallelism in the list of gerunds:',
        question: 'Her leadership philosophy centers on mentoring juniors, fostering innovation, and to lead with empathy.',
        correctAnswer: ['leading', 'Leading'],
        explanationAr: 'للتوازي النحوي الصارم يجب أن تتطابق جميع الأفعال المعطوفة: leading.',
      },
      {
        id: 'c2-5-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة لتقديم الصفة والتوكيد البلاغي (Adjectival Fronting):',
        instructionEn: 'Choose the correct adjectival fronting inversion:',
        question: '_____ the contribution of foundational basic research to economic resilience.',
        options: [
          'Equally vital is',
          'Equally vital it is',
          'Equally is vital',
          'Equally vital are',
        ],
        correctAnswer: 0,
        explanationAr: 'التركيبة البلاغية القياسية: Equally vital is the contribution...',
      },
      {
        id: 'c2-5-ex-8',
        type: 'multiple_choice',
        instructionAr: 'اختر الاستعارة التي تعبر عن تجنب مسارات مختصرة ملتوية على حساب الأمان والجودة:',
        instructionEn: 'Select the idiom meaning to avoid compromising standards for speed/money:',
        question: 'In aerospace software engineering, teams must never _____.',
        options: ['cut corners', 'spill the beans', 'bite the dust', 'break a leg'],
        correctAnswer: 0,
        explanationAr: 'التعبير cut corners يعني التهاون واختصار الإجراءات على حساب الجودة والسلامة.',
      },
      {
        id: 'c2-5-ex-9',
        type: 'multiple_choice',
        instructionAr: 'أي من الكلمات التالية تحمل إيحاءً إيجابياً رفيعاً (Positive Connotation) للمدح بحكمة الإنفاق؟',
        instructionEn: 'Which word carries a distinctly positive connotation for careful spending?',
        question: 'To praise an executive for wise and responsible spending, you describe them as:',
        options: ['frugal', 'stingy', 'cheap', 'miserly'],
        correctAnswer: 0,
        explanationAr: 'الصفة frugal تحمل إيحاءً إيجابياً نبيلاً بحكمة التدبير المالي وحسن إدارة الموارد.',
      },
      {
        id: 'c2-5-ex-10',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب إنجليزي فصيح وبليغ: "لم يكن هذا إنجازاً يسيراً":',
        instructionEn: 'Translate using litotes: "لم يكن هذا إنجازاً يسيراً":',
        question: 'Translate: "لم يكن هذا إنجازاً يسيراً"',
        correctAnswer: ['This was no small feat', 'This was no mean feat', 'It was no small feat', 'It was no mean feat', 'this was no small feat'],
        explanationAr: 'الترجمة البلاغية الرفيعة: This was no small feat أو This was no mean feat.',
      },
    ],
  },
];
