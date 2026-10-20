import type { ReadingPassage } from '../types/learning.ts';

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'reading-a0-1',
    level: 'A0',
    titleAr: 'المحادثة الأولى: لقاء في المقهى',
    titleEn: 'First Conversation: Meeting at the Café',
    topic: 'التعارف البسيط',
    textEn:
      'Hello! Good morning. My name is Ali. What is your name? Nice to meet you, Adam. I am from Cairo. Where are you from? I want a cup of tea, please. Thank you very much!',
    translationAr:
      'مرحباً! صباح الخير. اسمي علي. ما اسمك؟ سعدت بلقائك يا آدم. أنا من القاهرة. من أين أنت؟ أريد كوباً من الشاي، من فضلك. شكراً جزيلاً لك!',
    sentencePairs: [
      {
        en: 'Hello! Good morning. My name is Ali.',
        ar: 'مرحباً! صباح الخير. اسمي علي.',
      },
      {
        en: 'What is your name? Nice to meet you, Adam.',
        ar: 'ما اسمك؟ سعدت بلقائك يا آدم.',
      },
      {
        en: 'I am from Cairo. Where are you from?',
        ar: 'أنا من القاهرة. من أين أنت؟',
      },
      {
        en: 'I want a cup of tea, please. Thank you very much!',
        ar: 'أريد كوباً من الشاي، من فضلك. شكراً جزيلاً لك!',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'من أي مدينة جاء المتحدث علي؟',
        questionEn: 'Which city is Ali from?',
        options: [
          'He is from Cairo.',
          'He is from London.',
          'He is from Dubai.',
          'He is from Riyadh.',
        ],
        correctIndex: 0,
        explanationAr: 'في النص صراحة: "I am from Cairo" (أنا من القاهرة).',
      },
      {
        questionAr: 'ماذا طلب علي أن يشرب؟',
        questionEn: 'What did Ali order to drink?',
        options: [
          'A cup of tea (كوب شاي).',
          'Cold water (ماء بارد).',
          'Orange juice (عصير برتقال).',
          'Nothing (لا شيء).',
        ],
        correctIndex: 0,
        explanationAr: 'طلب علي: "I want a cup of tea, please".',
      },
    ],
  },
  {
    id: 'reading-a1-routine',
    level: 'A1',
    titleAr: 'الروتين اليومي المنظم لعمر',
    titleEn: 'A Balanced Daily Routine',
    topic: 'الروتين والأنشطة اليومية',
    textEn:
      'Omar wakes up at six thirty every morning. First, he drinks a glass of warm water and goes for a twenty-minute walk in the park. At eight o clock, he has breakfast with his family and checks his daily schedule. He works as a graphic designer from nine to five. In the evening, he practices English for fifteen minutes and reads a short story before sleeping.',
    translationAr:
      'يستيقظ عمر في السادسة والنصف كل صباح. أولاً، يشرب كوباً من الماء الدافئ ويمشي لمدة عشرين دقيقة في الحديقة. في الثامنة تماماً، يتناول الفطور مع عائلته ويتحقق من جدول مواعيده اليومي. يعمل كمصمم جرافيك من التاسعة حتى الخامسة. في المساء، يمارس الإنجليزية لمدة 15 دقيقة ويقرأ قصة قصيرة قبل النوم.',
    sentencePairs: [
      {
        en: 'Omar wakes up at six thirty every morning.',
        ar: 'يستيقظ عمر في السادسة والنصف كل صباح.',
      },
      {
        en: 'First, he drinks a glass of warm water and goes for a twenty-minute walk in the park.',
        ar: 'أولاً، يشرب كوباً من الماء الدافئ ويمشي لمدة عشرين دقيقة في الحديقة.',
      },
      {
        en: 'At eight o clock, he has breakfast with his family and checks his daily schedule.',
        ar: 'في الثامنة تماماً، يتناول الفطور مع عائلته ويتحقق من جدول مواعيده اليومي.',
      },
      {
        en: 'He works as a graphic designer from nine to five.',
        ar: 'يعمل كمصمم جرافيك من التاسعة حتى الخامسة.',
      },
      {
        en: 'In the evening, he practices English for fifteen minutes and reads a short story before sleeping.',
        ar: 'في المساء، يمارس الإنجليزية لمدة 15 دقيقة ويقرأ قصة قصيرة قبل النوم.',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'ما هي مهنة عمر حسب النص؟',
        questionEn: "What is Omar's profession?",
        options: [
          'He is a graphic designer.',
          'He is a doctor.',
          'He is a pilot.',
          'He is a chef.',
        ],
        correctIndex: 0,
        explanationAr: 'ورد في النص: "He works as a graphic designer".',
      },
      {
        questionAr: 'كم من الوقت يخصص عمر لممارسة الإنجليزية مساءً؟',
        questionEn: 'How long does Omar practice English in the evening?',
        options: [
          'Fifteen minutes (15 دقيقة).',
          'Two hours (ساعتان).',
          'Fifty minutes (50 دقيقة).',
          'Five minutes (5 دقائق).',
        ],
        correctIndex: 0,
        explanationAr: 'في النص: "he practices English for fifteen minutes".',
      },
    ],
  },
  {
    id: 'reading-a2-tech-firm',
    level: 'A2',
    titleAr: 'اليوم الأول في شركة التقنية الدولية',
    titleEn: 'First Day at an International Tech Firm',
    topic: 'بيئة العمل الأولى والتواصل',
    textEn:
      'Zaid arrived at the modern office building at nine o clock. He felt both excited and slightly nervous about speaking English all day. The team lead, Sarah, welcomed him warmly with a smile and introduced him to his colleagues. During the morning orientation, Zaid listened attentively and took detailed notes. By lunchtime, he realized that clear communication is much more important than using complicated words.',
    translationAr:
      'وصل زيد إلى مبنى المكاتب الحديث في التاسعة تماماً. شعر بالحماس والتوتر الطفيف في آن واحد بشأن التحدث بالإنجليزية طوال اليوم. رحبت به قائدة الفريق سارة بحرارة وابتسامة وقدمته لزملائه. وخلال اللقاء التعريفي الصباحي، استمع زيد باهتمام ودوّن ملاحظات مفصلة. وبحلول وقت الغداء، أدرك أن التواصل الواضح أهم بكثير من استخدام الكلمات المعقدة.',
    sentencePairs: [
      {
        en: 'Zaid arrived at the modern office building at nine o clock.',
        ar: 'وصل زيد إلى مبنى المكاتب الحديث في التاسعة تماماً.',
      },
      {
        en: 'He felt both excited and slightly nervous about speaking English all day.',
        ar: 'شعر بالحماس والتوتر الطفيف في آن واحد بشأن التحدث بالإنجليزية طوال اليوم.',
      },
      {
        en: 'The team lead, Sarah, welcomed him warmly with a smile and introduced him to his colleagues.',
        ar: 'رحبت به قائدة الفريق سارة بحرارة وابتسامة وقدمته لزملائه.',
      },
      {
        en: 'During the morning orientation, Zaid listened attentively and took detailed notes.',
        ar: 'وخلال اللقاء التعريفي الصباحي، استمع زيد باهتمام ودوّن ملاحظات مفصلة.',
      },
      {
        en: 'By lunchtime, he realized that clear communication is much more important than using complicated words.',
        ar: 'وبحلول وقت الغداء، أدرك أن التواصل الواضح أهم بكثير من استخدام الكلمات المعقدة.',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'ما الدرس الهام الذي استخلصه زيد بحلول وقت الغداء؟',
        questionEn: 'What crucial lesson did Zaid realize by lunchtime?',
        options: [
          'Using sophisticated vocabulary is mandatory.',
          'Clear communication is far more important than complex words.',
          'He should avoid talking to international colleagues.',
          'Speaking English requires a British accent.',
        ],
        correctIndex: 1,
        explanationAr: 'أدرك زيد أن التواصل الواضح البسيط أهم وأفضل بكثير من استخدام كلمات معقدة.',
      },
    ],
  },
  {
    id: 'reading-b1-perfection',
    level: 'B1',
    titleAr: 'تجاوز الخوف من ارتكاب الأخطاء',
    titleEn: 'Overcoming the Fear of Making Mistakes',
    topic: 'سيكولوجيا تعلم اللغات والطلاقة',
    textEn:
      'Many adult language learners suffer from a psychological barrier known as perfection paralysis. They mistakenly believe that they must formulate every sentence flawlessly before speaking. In reality, language acquisition relies on active feedback loops. When you produce an imperfect sentence and receive a gentle correction, your brain strengthens neural pathways. Native speakers do not evaluate you on perfection; they care about mutual understanding and authentic connection.',
    translationAr:
      'يعاني العديد من متعلمي اللغة البالغين من حاجز نفسي يُعرف بشلل الرغبة في الكمال. يعتقدون خطأً أن عليهم صياغة كل جملة بلا شائبة قبل النطق بها. في الواقع، يعتمد اكتساب اللغة على حلقات التغذية الراجعة النشطة. حينما تنطق جملة غير كاملة وتتلقى تصحيحاً لطيفاً، يقوي دماغك مساراته العصبية. المتحدثون الأصليون لا يقيمونك على المثالية، بل يهمهم التفاهم المتبادل والتواصل الصادق.',
    sentencePairs: [
      {
        en: 'Many adult language learners suffer from a psychological barrier known as perfection paralysis.',
        ar: 'يعاني العديد من متعلمي اللغة البالغين من حاجز نفسي يُعرف بشلل الرغبة في الكمال.',
      },
      {
        en: 'They mistakenly believe that they must formulate every sentence flawlessly before speaking.',
        ar: 'يعتقدون خطأً أن عليهم صياغة كل جملة بلا شائبة قبل النطق بها.',
      },
      {
        en: 'In reality, language acquisition relies on active feedback loops.',
        ar: 'في الواقع، يعتمد اكتساب اللغة على حلقات التغذية الراجعة النشطة.',
      },
      {
        en: 'When you produce an imperfect sentence and receive a gentle correction, your brain strengthens neural pathways.',
        ar: 'حينما تنطق جملة غير كاملة وتتلقى تصحيحاً لطيفاً، يقوي دماغك مساراته العصبية.',
      },
      {
        en: 'Native speakers do not evaluate you on perfection; they care about mutual understanding and authentic connection.',
        ar: 'المتحدثون الأصليون لا يقيمونك على المثالية، بل يهمهم التفاهم المتبادل والتواصل الصادق.',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'ما هو "شلل الرغبة في الكمال" كما عرفه النص؟',
        questionEn: 'What is "perfection paralysis" according to the passage?',
        options: [
          'A physical disability that prevents vocalization.',
          'The false belief that one must speak without any mistakes.',
          'The ability to memorize entire dictionaries quickly.',
          'A grammar rule used exclusively in academic writing.',
        ],
        correctIndex: 1,
        explanationAr: 'شلل الكمال هو الاعتقاد الزائف بوجوب صياغة جمل مثالية دون أخطاء قبل التحدث.',
      },
    ],
  },
  {
    id: 'reading-b2-remote-work',
    level: 'B2',
    titleAr: 'تطور العمل عن بُعد والتعاون العالمي',
    titleEn: 'The Evolution of Remote Work & Global Collaboration',
    topic: 'العمل المستقبلي والمهارات الرقمية',
    textEn:
      'Over the past decade, remote work has transitioned from a rare perk into a fundamental pillar of modern corporate culture. While flexible arrangements empower employees to achieve a healthier work-life balance, they also demand exceptional self-discipline and asynchronous communication skills. Organizations that thrive in this distributed environment evaluate staff based on measurable outcomes rather than hours spent at a desk.',
    translationAr:
      'على مدى العقد الماضي، تحول العمل عن بعد من ميزة نادرة إلى ركيزة أساسية في ثقافة الشركات الحديثة. وبينما تمنح الترتيبات المرنة الموظفين توازناً أفضل بين العمل والحياة، فإنها تتطلب أيضاً انضباطاً ذاتياً استثنائياً ومهارات تواصل غير متزامن واضحة. الشركات التي تزدهر في هذه البيئة الموزعة تقيم موظفيها بناءً على النتائج القابلة للقياس وليس ساعات الجلوس أمام المكتب.',
    sentencePairs: [
      {
        en: 'Over the past decade, remote work has transitioned from a rare perk into a fundamental pillar of modern corporate culture.',
        ar: 'على مدى العقد الماضي، تحول العمل عن بعد من ميزة نادرة إلى ركيزة أساسية في ثقافة الشركات الحديثة.',
      },
      {
        en: 'While flexible arrangements empower employees to achieve a healthier work-life balance, they also demand exceptional self-discipline and asynchronous communication skills.',
        ar: 'وبينما تمنح الترتيبات المرنة الموظفين توازناً أفضل بين العمل والحياة، فإنها تتطلب أيضاً انضباطاً ذاتياً استثنائياً ومهارات تواصل غير متزامن واضحة.',
      },
      {
        en: 'Organizations that thrive in this distributed environment evaluate staff based on measurable outcomes rather than hours spent at a desk.',
        ar: 'الشركات التي تزدهر في هذه البيئة الموزعة تقيم موظفيها بناءً على النتائج القابلة للقياس وليس ساعات الجلوس أمام المكتب.',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'كيف تقيم الشركات الناجحة عن بعد أداء موظفيها؟',
        questionEn: 'How do thriving remote organizations evaluate their staff?',
        options: [
          'Based on measurable outcomes and results.',
          'Based strictly on hours spent sitting at a desk.',
          'Based on how many emails they send per hour.',
          'Based on office attendance.',
        ],
        correctIndex: 0,
        explanationAr: 'تقيم الشركات موظفيها بناءً على النتائج القابلة للقياس (measurable outcomes).',
      },
    ],
  },
  {
    id: 'reading-c1-rhetoric',
    level: 'C1',
    titleAr: 'فن البلاغة والإقناع في الخطاب الأكاديمي',
    titleEn: 'The Architecture of Academic Rhetoric and Nuance',
    topic: 'البلاغة والأسلوب الرفيع',
    textEn:
      'Scholarly discourse necessitates a meticulous calibration of register, tone, and epistemic modality. Rather than advancing uncorroborated assertions, proficient researchers hedge claims with calibrated precision—employing modals like "tends to elucidate" or "warrants further scrutiny." Such stylistic discipline preserves objectivity while inviting constructive peer critique.',
    translationAr:
      'يقتضي الخطاب العلمي تدقيقاً وضبطاً فائقاً للمستوى الأسلوبي والنبرة وتدرج درجة اليقين. وبدلاً من إطلاق مزاعم غير مدعومة بالقرائن، يقوم الباحثون المتمكنون بصياغة أطروحاتهم بتحفظ علمي مدروس ودقيق، مستخدمين صياغات مثل "يميل لتوضيح" أو "يستحق مزيداً من الفحص". هذا الانضباط الأسلوبي يحفظ الموضوعية ويدعو إلى نقد الأقران البناء.',
    sentencePairs: [
      {
        en: 'Scholarly discourse necessitates a meticulous calibration of register, tone, and epistemic modality.',
        ar: 'يقتضي الخطاب العلمي تدقيقاً وضبطاً فائقاً للمستوى الأسلوبي والنبرة وتدرج درجة اليقين.',
      },
      {
        en: 'Rather than advancing uncorroborated assertions, proficient researchers hedge claims with calibrated precision—employing modals like "tends to elucidate" or "warrants further scrutiny."',
        ar: 'وبدلاً من إطلاق مزاعم غير مدعومة بالقرائن، يقوم الباحثون المتمكنون بصياغة أطروحاتهم بتحفظ علمي مدروس ودقيق، مستخدمين صياغات مثل "يميل لتوضيح" أو "يستحق مزيداً من الفحص".',
      },
      {
        en: 'Such stylistic discipline preserves objectivity while inviting constructive peer critique.',
        ar: 'هذا الانضباط الأسلوبي يحفظ الموضوعية ويدعو إلى نقد الأقران البناء.',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'لماذا يستخدم الباحثون صيغ التحفظ العلمي (Hedging) في أبحاثهم؟',
        questionEn: 'Why do proficient researchers hedge their academic claims?',
        options: [
          'To preserve objectivity with calibrated precision.',
          'To confuse the reader and disguise weak evidence.',
          'Because they are not confident in English grammar.',
          'To make their articles significantly longer.',
        ],
        correctIndex: 0,
        explanationAr: 'يستخدمون التحفظ العلمي للحفاظ على الموضوعية والحياد بدقة محسوبة.',
      },
    ],
  },
  {
    id: 'reading-c2-polysemy',
    level: 'C2',
    titleAr: 'تعدد المعاني والإيحاء الدلالي في الأدب الرفيع',
    titleEn: 'Polysemy, Connotation, and Ambiguity in Literary Syntax',
    topic: 'فقه اللغة والأدب المقارن',
    textEn:
      'At the highest echelon of linguistic mastery, prose transcends rudimentary semantic transfer and becomes an intricate interplay of subtext, historical resonance, and rhythmic cadence. Words are no longer discrete communicative tokens; they are evocative vessels bearing centuries of etymological nuance. Navigating such texts demands not merely grammatical literacy, but a profound hermeneutic sensitivity.',
    translationAr:
      'في الذروة العليا للإتقان اللغوي، يتجاوز النثر مجرد النقل الدلالي الأولي ليغدو تضافراً بديعاً بين المعاني الضمنية، والصدى التاريخي، والإيقاع النغمي المتدفق. لا تعود الكلمات مجرد أدوات تواصلية مجردة، بل تصبح أوعية إيحائية مفعمة بقرون من الفروق الدلالية والاشتقاقية الدقيقة. وإن سبر أغوار هذه النصوص لا يتطلب مجرد إلمام بالقواعد النحوية، بل حساسية تأويلية وفكرية عميقة.',
    sentencePairs: [
      {
        en: 'At the highest echelon of linguistic mastery, prose transcends rudimentary semantic transfer and becomes an intricate interplay of subtext, historical resonance, and rhythmic cadence.',
        ar: 'في الذروة العليا للإتقان اللغوي، يتجاوز النثر مجرد النقل الدلالي الأولي ليغدو تضافراً بديعاً بين المعاني الضمنية، والصدى التاريخي، والإيقاع النغمي المتدفق.',
      },
      {
        en: 'Words are no longer discrete communicative tokens; they are evocative vessels bearing centuries of etymological nuance.',
        ar: 'لا تعود الكلمات مجرد أدوات تواصلية مجردة، بل تصبح أوعية إيحائية مفعمة بقرون من الفروق الدلالية والاشتقاقية الدقيقة.',
      },
      {
        en: 'Navigating such texts demands not merely grammatical literacy, but a profound hermeneutic sensitivity.',
        ar: 'وإن سبر أغوار هذه النصوص لا يتطلب مجرد إلمام بالقواعد النحوية، بل حساسية تأويلية وفكرية عميقة.',
      },
    ],
    comprehensionQuestions: [
      {
        questionAr: 'ما الذي يتطلبه فهم النصوص الأدبية الرفيعة في مستوى C2 حسب النص؟',
        questionEn: 'What does navigating advanced C2 prose demand beyond basic grammatical literacy?',
        options: [
          'A profound hermeneutic sensitivity and awareness of etymological nuance.',
          'Simply translating word by word using a bilingual dictionary.',
          'Memorizing fixed conversational phrases without context.',
          'Ignoring the historical and stylistic resonance of words.',
        ],
        correctIndex: 0,
        explanationAr: 'يتطلب فهماً تأويلياً عميقاً وإدراكاً للفروق الدلالية والاشتقاقية للكلمات.',
      },
    ],
  },
];
