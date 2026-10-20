import type { Lesson } from '../../types/learning.ts';

export const A2_LESSONS: Lesson[] = [
  {
    id: 'lesson-a2-1-past-simple-verbs',
    level: 'A2',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أزمنة الماضي والأفعال الشاذة',
    chapterTitleEn: 'Chapter 1: Past Tenses & Irregular Verbs',
    titleAr: 'الدرس 1: الماضي البسيط، الأفعال الشاذة، ونطق -ed',
    titleEn: 'Lesson 1: The Past Simple Tense, Irregular Verbs & -ed Pronunciation',
    category: 'قواعد وأزمنة (A2)',
    iconName: 'History',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن أحداث بدأت وانتهت تماماً في الماضي مع كلمات زمنية محددة.',
      'إتقان نطق اللاحقة -ed بثلاثة أصوات صوتية دقيقة: /t/ و /d/ و /ɪd/.',
      'حفظ وتطبيق أشهر الأفعال الشاذة: went, saw, had, bought, spoke.',
      'صياغة النفي والسؤال باستخدام الفعل المساعد did و didn\'t دون تكرار الماضي.',
    ],
    explanationMarkdownAr: `### زمن الماضي البسيط (The Past Simple)

#### 1. متى نستخدم الماضي البسيط؟
نستخدمه لحدث وقع **وانتهى تماماً في نقطة زمنية محددة في الماضي**:
- *I visited London last summer.* (زرت لندن الصيف الماضي.)
- *We signed the contract yesterday.* (وقعنا العقد بالأمس.)
- **الكلمات الدالة**: *yesterday* (أمس)، *last week/month* (الماضي)، *ago* (مضت مثل: two days ago)، *in 2020*.

#### 2. الأفعال المنتظمة وقواعد نطق -ed الثلاثة:
نضيف **-ed** للفعل المنتظم (*work -> worked*). لكن انتبه! لا تنطق -ed دائماً "إِد":
1. **صوت /t/**: بعد الأصوات المهموسة (p, k, f, s, sh, ch):
   - *watched* (وُوتْشْتْ) / *worked* (وِيركْتْ) / *helped* (هِلْبْتْ).
2. **صوت /d/**: بعد باقي الأصوات المجهورة والمتحركة:
   - *played* (بْلَيْد) / *cleaned* (كْلِينْد) / *lived* (لِيڤْد).
3. **صوت /ɪd/** (إِدْ واضحة): **فقط** إذا انتهى الفعل بصوت **t** أو **d**:
   - *wanted* (وَانْتِد) / *needed* (نِيدِد) / *decided* (دِسَايْدِد).

#### 3. الأفعال الشاذة (Irregular Verbs - شائعة جداً)
لا تقبل -ed، بل يتغير شكلها بالكامل:
- *go -> **went*** (ذهب)
- *see -> **saw*** (رأى)
- *buy -> **bought*** (اشترى)
- *have -> **had*** (ملك / تناول)
- *make -> **made*** (صنع)
- *meet -> **met*** (التقى)

#### 4. النفي والسؤال مع Didn't و Did
\`\`\`
النفي: Subject + didn't + [مصدر الفعل المجرد]
السؤال: Did + Subject + [مصدر الفعل المجرد] ... ?
\`\`\`
> **قاعدة ذهبية**: بعد **didn't** و **did**، يعود الفعل إلى أصله المجرد فوراً!
- *I **went** to work.* -> *I **didn't go** to work.* (وليس didn't went!).
- *Did you **see** the email?* (وليس Did you saw?).`,
    rulesAndStructuresAr: `صيغة الإثبات: Subject + V2 (Verb-ed أو فعل شاذ). النفي: Subject + didn't + Base Verb. السؤال: Did + Subject + Base Verb? قاعدة نطق ed: تنطق /ɪd/ فقط بعد أفعال تنتهي بـ t أو d. الكلمات الدالة: yesterday, ago, last.`,
    summaryAr: 'الماضي البسيط للأحداث المنتهية. الأفعال المنتظمة تأخذ -ed والأفعال الشاذة تحفظ. تذكر أن did و didn\'t تلغي علامة الماضي من الفعل الأساسي.',
    arabicContrastPoint: {
      titleAr: 'تكرار الماضي بعد didn\'t',
      descriptionAr: 'من أكبر الأخطاء العربية قول: "I didn\'t saw him" لأن العقل العربي يفكر في صياغة الماضي مرتين. الصواب هو تجريد الفعل: "I didn\'t see him".',
      badArabicHabit: 'Yesterday I didn\'t went to work. / Did you saw the news?',
      correctEnglishWay: 'Yesterday I didn\'t go to work. / Did you see the news?',
    },
    examples: [
      { en: 'We bought a new apartment two months ago.', ar: 'اشترينا شقة جديدة منذ شهرين.', phoneticAr: 'وِي بُوت أَ نْيُو أَبَارْتْمَنْت تُو مَانْثْس أَجُو' },
      { en: 'She didn\'t attend the meeting yesterday.', ar: 'هي لم تحضر الاجتماع بالأمس.', phoneticAr: 'شِي دِيدْنْت أَتِينْد ذَا مِيتِينْج يِسْتَرْدَاي' },
      { en: 'Did you speak with the client this morning?', ar: 'هل تحدثت مع العميل هذا الصباح؟', phoneticAr: 'دِيد يُو سْبِيك وِذ ذَا كْلَايَنْت ذِس مُورْنِينْج؟' },
      { en: 'He decided to accept the scholarship.', ar: 'هو قرر قبول المنحة الدراسية.', phoneticAr: 'هِي دِسَايْدِد تُو أَكْسِبْت ذَا سْكُولَارْشِيب' },
    ],
    vocabulary: [
      { word: 'Decide', ipa: '/dɪˈsaɪd/', partOfSpeech: 'verb', meaningAr: 'يقرر', exampleEn: 'We decided to move to London.', exampleAr: 'قررنا الانتقال إلى لندن.' },
      { word: 'Bought', ipa: '/bɑːt/', partOfSpeech: 'verb (past of buy)', meaningAr: 'اشترى', exampleEn: 'He bought a fast computer.', exampleAr: 'هو اشترى حاسوباً سريعاً.' },
      { word: 'Yesterday', ipa: '/ˈjes.tɚ.deɪ/', partOfSpeech: 'adverb', meaningAr: 'أمس / البارحة', exampleEn: 'I called you yesterday.', exampleAr: 'اتصلت بك بالأمس.' },
      { word: 'Ago', ipa: '/əˈɡoʊ/', partOfSpeech: 'adverb', meaningAr: 'مضت / منذ', exampleEn: 'They left three hours ago.', exampleAr: 'غادروا منذ ثلاث ساعات.' },
      { word: 'Attend', ipa: '/əˈtend/', partOfSpeech: 'verb', meaningAr: 'يحضر مناسبة أو اجتماعاً', exampleEn: 'Did you attend the conference?', exampleAr: 'هل حضرت المؤتمر؟' },
    ],
    commonMistakes: [
      { wrong: 'I didn\'t saw the email.', correct: 'I didn\'t see the email.', reasonAr: 'بعد didn\'t يعود الفعل للمصدر المجرد see.' },
      { wrong: 'Did you went to the office?', correct: 'Did you go to the office?', reasonAr: 'في السؤال بـ Did يعود الفعل للمصدر go.' },
      { wrong: 'I have seen him two days ago.', correct: 'I saw him two days ago.', reasonAr: 'وجود ago يتطلب ماضياً بسيطاً صريحاً saw وليس مضارعاً تاماً.' },
    ],
    realWorldChallengeAr: 'اكتب أو اذكر بصوتك 3 أحداث قمت بها أمس مستخدماً أفعالاً شاذة مثل went و had و bought.',
    exercises: [
      {
        id: 'a2-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المنفية الصحيحة في الماضي البسيط:',
        instructionEn: 'Choose the correct negative past form:',
        question: 'She _____ to the meeting yesterday because she was unwell.',
        options: ['didn\'t go', 'didn\'t went', 'not went', 'wasn\'t go'],
        correctAnswer: 0,
        explanationAr: 'في الماضي ننفي بـ didn\'t متبوعة بمصدر الفعل المجرد go.',
      },
      {
        id: 'a2-1-ex-2',
        type: 'multiple_choice',
        instructionAr: 'ما هو التصريف الثاني لماضي الفعل الشاذ "buy" (يشتري)؟',
        instructionEn: 'What is the past tense of "buy"?',
        question: 'Yesterday I _____ a brand new laptop.',
        options: ['bought', 'buyed', 'buying', 'buys'],
        correctAnswer: 0,
        explanationAr: 'فعل buy فعل شاذ ماضيه bought.',
      },
      {
        id: 'a2-1-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المساعد الصحيح للسؤال في الماضي:',
        instructionEn: 'Fill in the correct auxiliary for past questions:',
        question: '______ you receive the confirmation email last night?',
        correctAnswer: ['Did', 'did'],
        explanationAr: 'نبدأ السؤال في الماضي البسيط بالفعل المساعد Did.',
      },
      {
        id: 'a2-1-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي من الأفعال التالية يُنطق فيه الختام -ed كصوت /ɪd/ (إِد) كاملة؟',
        instructionEn: 'In which word is -ed pronounced as /ɪd/?',
        question: 'Which word ends with the /ɪd/ pronunciation?',
        options: ['wanted', 'worked', 'played', 'watched'],
        correctAnswer: 0,
        explanationAr: 'ينطق -ed كـ /ɪd/ فقط إذا كان الفعل ينتهي بـ t أو d كما في wanted و needed.',
      },
      {
        id: 'a2-1-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة ماضٍ صحيحة:',
        instructionEn: 'Arrange the words to form a correct past sentence:',
        question: 'new / We / months / a / bought / house / two / ago',
        correctAnswer: 'We bought a new house two months ago',
        explanationAr: 'الترتيب: We + bought + a new house + two months ago.',
      },
      {
        id: 'a2-1-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الفعل الخاطئ بعد didn\'t (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the verb form after didn\'t:',
        question: 'I didn\'t understood the explanation.',
        correctAnswer: ['understand', 'Understand'],
        explanationAr: 'بعد didn\'t يجب أن يعود الفعل إلى أصله المجرد: understand.',
      },
      {
        id: 'a2-1-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما هو ماضي الفعل الشاذ "see" (يرى)؟',
        instructionEn: 'What is the past form of "see"?',
        question: 'We _____ an interesting documentary yesterday evening.',
        options: ['saw', 'seed', 'seen', 'sawed'],
        correctAnswer: 0,
        explanationAr: 'ماضي الفعل see هو saw.',
      },
      {
        id: 'a2-1-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "هل اتصلت بي أمس؟":',
        instructionEn: 'Translate: "هل اتصلت بي أمس؟":',
        question: 'Translate: "هل اتصلت بي أمس؟"',
        correctAnswer: ['Did you call me yesterday?', 'Did you call me yesterday', 'did you call me yesterday?'],
        explanationAr: 'الترجمة الصحيحة: Did you call me yesterday?',
      },
    ],
  },
  {
    id: 'lesson-a2-2-present-simple-vs-continuous',
    level: 'A2',
    order: 2,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أزمنة الماضي والأفعال الشاذة',
    chapterTitleEn: 'Chapter 1: Past Tenses & Irregular Verbs',
    titleAr: 'الدرس 2: المضارع البسيط مقابل المضارع المستمر وأفعال الحالة (Stative Verbs)',
    titleEn: 'Lesson 2: Present Simple vs. Present Continuous & Stative Verbs',
    category: 'قواعد وأزمنة (A2)',
    iconName: 'GitCommit',
    estimatedMinutes: 16,
    objectivesAr: [
      'التفرقة بين العادات الدائمة (Simple) والأنشطة المؤقتة أو الجارية (Continuous).',
      'حفظ أفعال الحالة (Stative Verbs) التي لا تقبل صيغة -ing مطلقاً.',
      'القضاء على أخطاء مثل: "I am wanting", "I am knowing", "I am agreeing".',
      'صياغة جمل مقارنة بين الروتين المعتاد والوضع الاستثنائي الحالي.',
    ],
    explanationMarkdownAr: `### المضارع البسيط مقابل المستمر وأفعال الحالة

#### 1. الفارق الزمني والوظيفي:
- **المضارع البسيط (Simple)**:
  - للروتين، العادات الدائمة، والحقائق العامة.
  - *I usually drink coffee every morning.* (عادة دائمة).
- **المضارع المستمر (Continuous)**:
  - للأحداث الجارية الآن أو التغيرات المؤقتة.
  - *...but today I **am drinking** green tea.* (استثناء مؤقت اليوم).

#### 2. لغز أفعال الحالة (Stative Verbs - خط أحمر أمام -ing)
هناك أفعال تعبر عن **حالة ذهنية، شعور، ملكية، أو إدراك حسي** وليست نشاطاً حركياً. هذه الأفعال **لا تضاف لها -ing إطلاقاً** حتى لو كان المعنى يحدث الآن:
1. **أفعال التفكير والإدراك**:
   - *know* (يعرف) -> *I know the answer.* (خطأ: I am knowing).
   - *understand* (يفهم) -> *I understand you now.* (خطأ: I am understanding).
   - *believe* (يعتقد / يصدق) -> *I believe you.*
2. **أفعال المشاعر والرغبة**:
   - *want* (يريد) -> *I want water.* (خطأ فادح: I am wanting).
   - *need* (يحتاج) -> *I need help.*
   - *like / love* (يحب) -> *She likes music.*
3. **أفعال الرأي والملكية**:
   - *agree* (يوافق / يتفق) -> *I agree with you.* (خطأ: I am agreeing أو I am agree).
   - *belong to* (ينتمي لـ) -> *This belongs to me.*`,
    rulesAndStructuresAr: `القاعدة: أفعال الحالة (know, want, need, understand, like, agree) تستخدم دائماً في المضارع البسيط حتى مع وجود كلمة now! التركيب: Usually/Always + Simple Present؛ لكن Right now/Today + Present Continuous.`,
    summaryAr: 'المضارع البسيط للروتين والمستمر للحدث الآني. أفعال الشعور والإدراك (want, know, understand, agree) محرم عليها الـ -ing وتأتي في البسيط دائماً.',
    arabicContrastPoint: {
      titleAr: 'إضافة -ing لأفعال الحالة الشائعة',
      descriptionAr: 'المتعلم العربي يشعر أنه يفهم أو يريد "الآن"، فيترجم: "I am wanting" أو "I am understanding now". الصواب الإنجليزي الحتمي: "I want" و "I understand".',
      badArabicHabit: 'I am wanting a cup of coffee right now. / I am knowing the rule.',
      correctEnglishWay: 'I want a cup of coffee right now. / I know the rule.',
    },
    examples: [
      { en: 'I usually drive to work, but today I am taking the train.', ar: 'أنا أقود إلى العمل عادةً، لكنني اليوم أستقل القطار.', phoneticAr: 'آيْ يُوژُوَالِي دْرَايْڤ تُو وِيرك، بَات تُودَاي آيْ آمْ تَيْكِينْج ذَا تْرَيْن' },
      { en: 'Do you understand what the lecturer is explaining?', ar: 'هل تفهم ما يشرحه المحاضر الآن؟', phoneticAr: 'دُو يُو أَنْدَرْسْتَانْد وَات ذَا لِكْتْشَرَر إِز إِكْسْبْلَيْنِينْج؟' },
      { en: 'I know this software very well.', ar: 'أنا أعرف هذا البرنامج جيداً جداً.', phoneticAr: 'آيْ نُو ذِس سُوفتْوَيْر ڤِيرِي وِل' },
      { en: 'He needs some time to review the contract.', ar: 'هو يحتاج بعض الوقت لمراجعة العقد.', phoneticAr: 'هِي نِيدْز سَام تَايْم تُو رِيڤْيُو ذَا كُونْتْرَاكْت' },
    ],
    vocabulary: [
      { word: 'Understand', ipa: '/ˌʌn.dɚˈstænd/', partOfSpeech: 'verb (stative)', meaningAr: 'يفهم / يستوعب', exampleEn: 'I understand the problem now.', exampleAr: 'أنا أفهم المشكلة الآن.' },
      { word: 'Believe', ipa: '/bɪˈliːv/', partOfSpeech: 'verb (stative)', meaningAr: 'يصدق / يعتقد', exampleEn: 'I believe your statement.', exampleAr: 'أنا أصدق كلامك.' },
      { word: 'Lecturer', ipa: '/ˈlek.tʃɚ.ɚ/', partOfSpeech: 'noun', meaningAr: 'محاضر جامعي', exampleEn: 'The lecturer explained the concept clearly.', exampleAr: 'شرح المحاضر المفهوم بوضوح.' },
      { word: 'Temporary', ipa: '/ˈtem.pə.rer.i/', partOfSpeech: 'adjective', meaningAr: 'مؤقت / غير دائم', exampleEn: 'This is a temporary solution.', exampleAr: 'هذا حل مؤقت.' },
      { word: 'Permanent', ipa: '/ˈpɝː.mə.nənt/', partOfSpeech: 'adjective', meaningAr: 'دائم ومستمر', exampleEn: 'He has a permanent job.', exampleAr: 'لديه وظيفة دائمة.' },
    ],
    commonMistakes: [
      { wrong: 'I am wanting to ask a question.', correct: 'I want to ask a question.', reasonAr: 'الفعل want فعل حالة لا يقبل صيغة -ing إطلاقاً.' },
      { wrong: 'Are you knowing him?', correct: 'Do you know him?', reasonAr: 'الفعل know لا يأتي في الاستمرار، ونسأل عنه بـ Do.' },
      { wrong: 'I am agree with your opinion.', correct: 'I agree with your opinion.', reasonAr: 'الفعل agree فعل حالة صريح ولا نضع قبله am.' },
    ],
    realWorldChallengeAr: 'كون جملة مقارنة تصف فيها ما تفعله عادة في نهاية الأسبوع وما تفعله اليوم تحديداً.',
    exercises: [
      {
        id: 'a2-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الصحيحة مع فعل الحالة "want":',
        instructionEn: 'Choose the correct sentence with the stative verb "want":',
        question: 'Which sentence is grammatically correct?',
        options: [
          'I want a glass of cold water now.',
          'I am wanting a glass of cold water now.',
          'I wanting a glass of cold water now.',
          'I am want a glass of cold water now.',
        ],
        correctAnswer: 0,
        explanationAr: 'الفعل want فعل حالة لا يقبل -ing إطلاقاً، ويستخدم في المضارع البسيط حتى مع وجود now.',
      },
      {
        id: 'a2-2-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر التناقض الزمني الصحيح بين العادة والاستثناء:',
        instructionEn: 'Select the correct tense contrast:',
        question: 'I usually _____ coffee, but today I _____ tea.',
        options: [
          'drink / am drinking',
          'am drinking / drink',
          'drink / drink',
          'am drinking / am drinking',
        ],
        correctAnswer: 0,
        explanationAr: 'العادة (usually) تأخذ مضارعاً بسيطاً drink، والحدث المؤقت لليوم (today) يأخذ مضارعاً مستمراً am drinking.',
      },
      {
        id: 'a2-2-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل الصحيح (know أو am knowing):',
        instructionEn: 'Fill in the blank with know or am knowing:',
        question: 'Do you ______ the answer to this question?',
        correctAnswer: ['know', 'Know'],
        explanationAr: 'الفعل know فعل حالة يسأل عنه بـ Do you know ولا يقبل الاستمرار.',
      },
      {
        id: 'a2-2-ex-4',
        type: 'multiple_choice',
        instructionAr: 'كيف تقول بالإنجليزية السليمة "أنا أتفق معك تماماً"؟',
        instructionEn: 'How do you say "أنا متفق معك تماماً" correctly?',
        question: 'Choose the correct expression of agreement:',
        options: [
          'I completely agree with you.',
          'I am completely agree with you.',
          'I am completely agreeing with you.',
          'Me agree completely with you.',
        ],
        correctAnswer: 0,
        explanationAr: 'agree فعل، فلا يأخذ am قبله ولا يضاف له ing للتعبير عن الرأي: I agree.',
      },
      {
        id: 'a2-2-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة استيعاب وإدراك صحيحة:',
        instructionEn: 'Arrange the words into a correct sentence:',
        question: 'now / perfectly / I / the / lesson / understand',
        correctAnswer: 'I understand the lesson perfectly now',
        explanationAr: 'الترتيب: I + understand + the lesson + perfectly + now.',
      },
      {
        id: 'a2-2-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في استخدام -ing مع فعل الإدراك (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the stative verb error:',
        question: 'I am believing what you said.',
        correctAnswer: ['believe', 'Believe'],
        explanationAr: 'الفعل believe فعل حالة يعبر عن الاعتقاد ولا يقبل -ing، والصواب: I believe.',
      },
      {
        id: 'a2-2-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي من الأفعال التالية يعتبر فعل حالة (Stative Verb) لا يضاف له -ing؟',
        instructionEn: 'Which of the following is a stative verb?',
        question: 'Identify the stative verb:',
        options: ['need', 'run', 'eat', 'write'],
        correctAnswer: 0,
        explanationAr: 'الفعل need يعبر عن الحاجة والضرورة وهو فعل حالة، بينما البقية أفعال حركية تقبل الاستمرار.',
      },
      {
        id: 'a2-2-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "هل تفهم ما أعنيه؟":',
        instructionEn: 'Translate: "هل تفهم ما أعنيه؟":',
        question: 'Translate: "هل تفهم ما أعنيه؟"',
        correctAnswer: ['Do you understand what I mean?', 'Do you understand what I mean', 'do you understand what i mean?'],
        explanationAr: 'الترجمة الصحيحة: Do you understand what I mean? لأن understand لا يقبل -ing.',
      },
    ],
  },
  {
    id: 'lesson-a2-3-prepositions-in-on-at',
    level: 'A2',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: حروف الجر والمقارنات والمقادير',
    chapterTitleEn: 'Chapter 2: Prepositions, Comparisons & Quantifiers',
    titleAr: 'الدرس 3: حروف الجر للزمان والمكان (In, On, At) وهندسة الهرم',
    titleEn: 'Lesson 3: Prepositions of Time and Place (In, On, At)',
    category: 'قواعد واستخدام (A2)',
    iconName: 'Compass',
    estimatedMinutes: 15,
    objectivesAr: [
      'فهم نموذج الهرم المقلوب لحروف الجر: من الأعم والأشمل (In) إلى الأكثر دقة وتحديداً (At).',
      'إتقان حروف الجر الزمنية مع السنين، الشهور، الأيام، والساعات المحددة.',
      'التفرقة المكانية بين وسائط النقل العامة (on the bus/train) والخاصة (in the car/taxi).',
      'تجنب الأخطاء الشائعة في مواعيد العمل وحجوزات السفر.',
    ],
    explanationMarkdownAr: `### قاعدة الهرم المقلوب لحروف الجر (IN - ON - AT)

\`\`\`
▲  IN  : عام وكبير وواسع (قرون، سنوات، شهور، فصول، مدن ودول)
▲  ON  : متوسط التحديد (أيام الأسبوع، التواريخ المكتملة، الشوارع)
▲  AT  : شديد الدقة والتحديد (ساعات محددة، عناوين كاملة، نقاط محددة)
\`\`\`

#### 1. حروف الجر مع الزمان (Time):
- **IN (الفترات الطويلة والشهور والسنوات)**:
  - *in 2026* (في عام 2026)، *in summer* (في الصيف)، *in July* (في يوليو).
  - *in the morning / in the afternoon / in the evening* (فترات اليوم العامة).
- **ON (الأيام والتواريخ المحددة بدقة)**:
  - *on Monday* (يوم الاثنين)، *on Friday morning* (صباح الجمعة).
  - *on May 15th* (تاريخ محدد باليوم والشهر).
- **AT (الساعات الدقيقة واللحظات المحددة)**:
  - *at 5:30 PM* (في الخامسة والنصف)، *at noon* (عند الظهيرة)، *at night* (في الليل).

#### 2. حروف الجر مع المكان (Place) ووسائط النقل:
- **IN (مساحة مغلقة أو مدينة/دولة)**:
  - *in Saudi Arabia, in Cairo, in the room, in the box*.
  - **وسائط النقل الخاصة الصغيرة**: *in the car* (في السيارة)، *in a taxi* (في التاكسي).
- **ON (سطح أو وسيلة نقل عامة يمكنك المشي والوقوف بداخلها)**:
  - *on the table* (على الطاولة)، *on the wall* (على الحائط).
  - **وسائط النقل الكبيرة**: *on the bus* (على الحافلة)، *on the train* (على القطار)، *on the plane* (على الطائرة).
- **AT (نقطة محددة أو موقع ومؤسسة)**:
  - *at the airport* (في المطار)، *at home* (في المنزل)، *at work* (في العمل)، *at the door* (عند الباب).`,
    rulesAndStructuresAr: `قاعدة الزمان: in للسنوات والشهور والفصول؛ on للأيام والتواريخ المحددة؛ at للساعات وكلمة night. قاعدة المواصلات: on للحافلات والقطارات والطائرات؛ in للسيارة والتاكسي.`,
    summaryAr: 'تذكر هرم الدقة: IN للمدد الطويلة والدول، ON للأيام ووسائط النقل الكبيرة، AT للساعات الدقيقة والنقاط المحددة.',
    arabicContrastPoint: {
      titleAr: 'حرف الجر "في" باللغة العربية',
      descriptionAr: 'في العربية نستخدم كلمة واحدة "في" لكل شيء (في الصيف، في الجمعة، في الخامسة). في الإنجليزية تتوزع إلى: In summer, On Friday, At 5:00. لا تقل "in Friday"!',
      badArabicHabit: 'I will meet you in Friday in 8 o\'clock.',
      correctEnglishWay: 'I will meet you on Friday at 8 o\'clock.',
    },
    examples: [
      { en: 'The international flight lands at 7:30 PM on Monday.', ar: 'تهبط الرحلة الدولية في الساعة 7:30 مساءً يوم الاثنين.', phoneticAr: 'ذَا إِنْتَرْنَاشُنَال فْلَايْت لَانْدز أَت سِيڤِن ثِيرْتِي أُون مَانْدَاي' },
      { en: 'I am reading an interesting article on the train.', ar: 'أنا أقرأ مقالاً ممتعاً في القطار.', phoneticAr: 'آيْ آمْ رِيدِينْج أَن إِنْتْرِسْتِينْج آرْتِيكِل أُون ذَا تْرَيْن' },
      { en: 'He forgot his leather wallet in the taxi.', ar: 'نسي محفظته الجلدية في سيارة الأجرة.', phoneticAr: 'هِي فُورْجَات هِيز لِيذَر وَالِت إِن ذَا تَاكْسِي' },
      { en: 'She was born in 2002 in Dubai.', ar: 'ولدت عام 2002 في دبي.', phoneticAr: 'شِي وَاز بُورن إِن تُو ثَاوْزَنْد آند تُو إِن دُوبَاي' },
    ],
    vocabulary: [
      { word: 'Flight', ipa: '/flaɪt/', partOfSpeech: 'noun', meaningAr: 'رحلة طيران', exampleEn: 'Our flight leaves at midnight.', exampleAr: 'تغادر رحلتنا في منتصف الليل.' },
      { word: 'Airport', ipa: '/ˈer.pɔːrt/', partOfSpeech: 'noun', meaningAr: 'مطار', exampleEn: 'I will meet you at the airport.', exampleAr: 'سأقابلك في المطار.' },
      { word: 'Wallet', ipa: '/ˈwɑː.lɪt/', partOfSpeech: 'noun', meaningAr: 'محفظة نقود', exampleEn: 'I left my wallet in the car.', exampleAr: 'تركت محفظتي في السيارة.' },
      { word: 'Midnight', ipa: '/ˈmɪd.naɪt/', partOfSpeech: 'noun', meaningAr: 'منتصف الليل', exampleEn: 'The train arrives at midnight.', exampleAr: 'يصل القطار في منتصف الليل.' },
      { word: 'Summer', ipa: '/ˈsʌm.ɚ/', partOfSpeech: 'noun', meaningAr: 'فصل الصيف', exampleEn: 'We travel to Europe in summer.', exampleAr: 'نسافر إلى أوروبا في الصيف.' },
    ],
    commonMistakes: [
      { wrong: 'I was on the taxi when you called.', correct: 'I was in the taxi when you called.', reasonAr: 'التاكسي والسيارة وسائط نقل خاصة صغيرة تأخذ in وليس on.' },
      { wrong: 'See you in Monday morning.', correct: 'See you on Monday morning.', reasonAr: 'أيام الأسبوع وفتراتها تأخذ on وليس in.' },
      { wrong: 'The lecture begins in 10:00 AM.', correct: 'The lecture begins at 10:00 AM.', reasonAr: 'الساعات المحددة تأخذ دائماً حرف الجر at.' },
    ],
    realWorldChallengeAr: 'حدد موعد اجتماعك القادم واذكر الوقت واليوم والمكان مستخدماً حروف الجر الثلاثة: at و on و in.',
    exercises: [
      {
        id: 'a2-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر حرفي الجر الصحيحين للوقت المحدد ويوم الأسبوع:',
        instructionEn: 'Choose the correct prepositions for time and day:',
        question: 'The executive committee meets _____ 10:00 AM _____ Tuesday.',
        options: ['at / on', 'in / on', 'on / at', 'at / in'],
        correctAnswer: 0,
        explanationAr: 'الساعات المحددة تأخذ at وأيام الأسبوع تأخذ on: at 10:00 AM on Tuesday.',
      },
      {
        id: 'a2-3-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر حرف الجر المناسب لوسيلة النقل "the train":',
        instructionEn: 'Choose the correct preposition for public transit:',
        question: 'I met an old colleague while I was _____ the train.',
        options: ['on', 'in', 'at', 'by'],
        correctAnswer: 0,
        explanationAr: 'وسائل النقل العامة التي يمكنك المشي بداخلها تأخذ on: on the train, on the bus.',
      },
      {
        id: 'a2-3-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بحرف الجر المناسب مع السنة (2025):',
        instructionEn: 'Fill in the correct preposition with years:',
        question: 'Our company was founded ______ 2025.',
        correctAnswer: ['in', 'In'],
        explanationAr: 'السنوات تأخذ حرف الجر in دائماً.',
      },
      {
        id: 'a2-3-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي حرف جر نستخدمه مع كلمة "night"؟',
        instructionEn: 'Which preposition is used with "night"?',
        question: 'I prefer studying English _____ night when it is quiet.',
        options: ['at', 'in', 'on', 'to'],
        correctAnswer: 0,
        explanationAr: 'نقول at night، بينما نقول in the morning و in the evening.',
      },
      {
        id: 'a2-3-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة مواعيد صحيحة:',
        instructionEn: 'Arrange the words to form a correct sentence:',
        question: 'Sunday / arrives / plane / at / on / The / 8:00',
        correctAnswer: 'The plane arrives at 8:00 on Sunday',
        explanationAr: 'الترتيب: The plane arrives at 8:00 on Sunday.',
      },
      {
        id: 'a2-3-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح حرف الجر الخاطئ مع التاكسي (اكتب الحرف الصحيح فقط):',
        instructionEn: 'Correct the preposition error for taxi:',
        question: 'He left his briefcase on the taxi.',
        correctAnswer: ['in', 'In'],
        explanationAr: 'السيارة والتاكسي تأخذ in وليس on: in the taxi.',
      },
      {
        id: 'a2-3-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر حرف الجر المناسب للمدن والعواصم:',
        instructionEn: 'Choose the preposition for cities:',
        question: 'They have opened three branch offices _____ Riyadh.',
        options: ['in', 'on', 'at', 'to'],
        correctAnswer: 0,
        explanationAr: 'المدن والدول تأخذ دائماً حرف الجر in.',
      },
      {
        id: 'a2-3-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "سأراك يوم الاثنين في العاشرة صباحاً":',
        instructionEn: 'Translate: "سأراك يوم الاثنين في العاشرة صباحاً":',
        question: 'Translate: "سأراك يوم الاثنين في العاشرة صباحاً"',
        correctAnswer: ['I will see you on Monday at 10:00 AM', 'I will see you on Monday at 10 AM', 'I will see you on Monday at 10:00 am'],
        explanationAr: 'الترجمة الصحيحة: on Monday at 10:00 AM.',
      },
    ],
  },
  {
    id: 'lesson-a2-4-comparatives-and-superlatives',
    level: 'A2',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: حروف الجر والمقارنات والمقادير',
    chapterTitleEn: 'Chapter 2: Prepositions, Comparisons & Quantifiers',
    titleAr: 'الدرس 4: المقارنة والتفضيل بين الأشياء (Comparatives & Superlatives)',
    titleEn: 'Lesson 4: Comparatives and Superlatives (Better, Faster, The Best)',
    category: 'قواعد وصفات (A2)',
    iconName: 'TrendingUp',
    estimatedMinutes: 15,
    objectivesAr: [
      'مقارنة الصفات القصيرة بإضافة -er than والتفضيل بـ the -est.',
      'مقارنة الصفات الطويلة بـ more ... than والتفضيل بـ the most.',
      'إتقان المقارنات الشاذة الحاسمة: good -> better -> the best، و bad -> worse -> the worst.',
      'تجنب الجمع الخاطئ بين more و er (مثل خطأ: more easier).',
    ],
    explanationMarkdownAr: `### المقارنة (Comparatives) والتفضيل (Superlatives)

#### 1. الصفات القصيرة (مقطع صوتي واحد مثل: fast, tall, cheap):
- **المقارنة بين اثنين (Comparative)**: نضيف **-er + than**:
  - *This car is **faster than** that one.* (هذه السيارة أسرع من تلك.)
  - *Trains are **cheaper than** planes.* (القطارات أرخص من الطائرات.)
- **التفضيل على الجميع (Superlative)**: نضع **the + الصفة + -est**:
  - *The cheetah is **the fastest** animal.* (الفهد أسرع حيوان.)
  - *This is **the cheapest** hotel in town.* (هذا أرخص فندق.)

#### 2. الصفات المنتهية بـ Y (مثل: easy, happy, busy):
تتحول y إلى i ونضيف er / est:
- *easier than* (أسهل من) -> *the easiest* (الأسهل إطلاقاً).
- *busier than* (أكثر انشغالاً من) -> *the busiest*.
> **تحذير صارم**: لا تجمع بين more و er أبداً! لا تقل: *more easier*؛ الصواب: **easier**.

#### 3. الصفات الطويلة (مقطعان أو أكثر مثل: expensive, important, difficult):
لا نضيف لها er لأنها طويلة، بل نضع قبلها **more** أو **the most**:
- **المقارنة**: *more + الصفة + than*:
  - *Gold is **more expensive than** silver.* (الذهب أغلى من الفضة.)
  - *Health is **more important than** wealth.* (الصحة أهم من الثروة.)
- **التفضيل**: *the most + الصفة*:
  - *This was **the most difficult** exam.* (كان هذا أصعب امتحان.)

#### 4. المقارنات الشاذة الكبرى (حفظ متقن):
\`\`\`
الصفة الأصلية       المقارنة (بين اثنين)          التفضيل (على الكل)
Good (جيد)      -> Better than (أفضل من)   -> The best (الأفضل إطلاقاً)
Bad (سيئ)       -> Worse than (أسوأ من)    -> The worst (الأسوأ إطلاقاً)
Far (بعيد)      -> Farther / Further than  -> The farthest / furthest
\`\`\``,
    rulesAndStructuresAr: `قاعدة الصفة القصيرة: Adjective-er + than ؛ والتفضيل: the + Adjective-est. قاعدة الصفة الطويلة: more + Adjective + than ؛ والتفضيل: the most + Adjective. الشواذ: good -> better -> the best ؛ bad -> worse -> the worst.`,
    summaryAr: 'أضف er للصغير و more للطويل، ولا تجمعهما معاً. تذكر أن good تصبح better than و bad تصبح worse than.',
    arabicContrastPoint: {
      titleAr: 'الجمع الممنوع بين more و er',
      descriptionAr: 'من أكثر الأخطاء شيوعاً عند المبتدئين قول: "more faster" أو "more easier". إما أن تضيف er وإما أن تضع more، ولا يجتمعان في كلمة واحدة أبداً.',
      badArabicHabit: 'Speaking English is more easier than writing.',
      correctEnglishWay: 'Speaking English is easier than writing.',
    },
    examples: [
      { en: 'Consistent daily practice is better than studying once a week.', ar: 'الممارسة اليومية المستمرة أفضل من الدراسة مرة واحدة أسبوعياً.', phoneticAr: 'كَنْسِيسْتَنْت دَيْلِي بْرَاكْتِيس إِز بَيْتَر ذَان سْتَادِيِينْج' },
      { en: 'This laptop is more powerful than my previous one.', ar: 'هذا الحاسوب المحمول أقوى من حاسوبي السابق.', phoneticAr: 'ذِس لَابْتُوب إِز مُور بَاوَرْفُل ذَان مَاي بْرِيڤْيُوس وَان' },
      { en: 'Mount Everest is the highest mountain in the world.', ar: 'جبل إيفرست هو أعلى جبل في العالم.', phoneticAr: 'مَاوْنْت إِيڤْرِسْت إِز ذَا هَايِسْت مَاوْنْتِن' },
      { en: 'That was the worst customer service experience I have ever had.', ar: 'كانت تلك أسوأ تجربة خدمة عملاء مررت بها.', phoneticAr: 'ذَات وَاز ذَا وِيرسْت كَاسْتُمَر سِيرڤِس' },
    ],
    vocabulary: [
      { word: 'Powerful', ipa: '/ˈpaʊ.ɚ.fəl/', partOfSpeech: 'adjective', meaningAr: 'قوي / ذو كفاءة عالية', exampleEn: 'A powerful processor handles heavy tasks.', exampleAr: 'المعالج القوي يعالج المهام الثقيلة.' },
      { word: 'Previous', ipa: '/ˈpriː.vi.əs/', partOfSpeech: 'adjective', meaningAr: 'سابق / ماضٍ', exampleEn: 'My previous manager was very helpful.', exampleAr: 'كان مديري السابق متعاوناً جداً.' },
      { word: 'Service', ipa: '/ˈsɝː.vɪs/', partOfSpeech: 'noun', meaningAr: 'خدمة', exampleEn: 'The hotel provides exceptional service.', exampleAr: 'يقدم الفندق خدمة استثنائية.' },
      { word: 'Cheaper', ipa: '/ˈtʃiː.pɚ/', partOfSpeech: 'adjective (comparative)', meaningAr: 'أرخص سعراً', exampleEn: 'Public transit is cheaper than driving.', exampleAr: 'المواصلات العامة أرخص من القيادة.' },
      { word: 'Expensive', ipa: '/ɪkˈspen.sɪv/', partOfSpeech: 'adjective', meaningAr: 'باهظ الثمن / مكلف', exampleEn: 'Luxury watches are very expensive.', exampleAr: 'الساعات الفاخرة باهظة الثمن جداً.' },
    ],
    commonMistakes: [
      { wrong: 'This phone is more better than mine.', correct: 'This phone is better than mine.', reasonAr: 'كلمة better صيغة مقارنة جاهزة لا تسبق بـ more.' },
      { wrong: 'It is more colder today than yesterday.', correct: 'It is colder today than yesterday.', reasonAr: 'الصفة cold قصيرة فنضيف لها er فقط: colder.' },
      { wrong: 'He is the most good teacher.', correct: 'He is the best teacher.', reasonAr: 'التفضيل من good هو the best وليس the most good.' },
    ],
    realWorldChallengeAr: 'قارن بين شيئين في غرفتك أو هاتفك مستخدماً صفة قصيرة وصفة طويلة (مثل: faster than و more expensive than).',
    exercises: [
      {
        id: 'a2-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة المقارنة الصحيحة للصفة "easy":',
        instructionEn: 'Choose the correct comparative form of "easy":',
        question: 'Learning vocabulary with spaced repetition is _____ than cramming.',
        options: ['easier', 'more easier', 'easiest', 'more easy'],
        correctAnswer: 0,
        explanationAr: 'الصفة easy تنتهي بـ y فتتحول إلى easier ولا نجمع بين more و er.',
      },
      {
        id: 'a2-4-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة المقارنة الشاذة الصحيحة من "good":',
        instructionEn: 'Choose the comparative form of "good":',
        question: 'Cloud storage is _____ than carrying physical drives.',
        options: ['better', 'more good', 'gooder', 'best'],
        correctAnswer: 0,
        explanationAr: 'مقارنة good هي better than.',
      },
      {
        id: 'a2-4-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل صيغة التفضيل العليا للصفة الطويلة "important":',
        instructionEn: 'Fill in the superlative marker for long adjectives:',
        question: 'Health is the ______ important asset in human life.',
        correctAnswer: ['most', 'Most'],
        explanationAr: 'التفضيل للصفات الطويلة يكون بـ the most important.',
      },
      {
        id: 'a2-4-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة المقارنة الصحيحة للصفة الطويلة "expensive":',
        instructionEn: 'Choose the comparative form of "expensive":',
        question: 'A private jet is _____ than a commercial airplane ticket.',
        options: [
          'more expensive',
          'expensiver',
          'most expensive',
          'more expensiver',
        ],
        correctAnswer: 0,
        explanationAr: 'الصفة expensive طويلة فتأخذ more expensive than.',
      },
      {
        id: 'a2-4-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة مقارنة صحيحة:',
        instructionEn: 'Arrange the words to form a correct comparison:',
        question: 'car / faster / His / my / than / is / bicycle',
        correctAnswer: 'His car is faster than my bicycle',
        explanationAr: 'الترتيب: His car is faster than my bicycle.',
      },
      {
        id: 'a2-4-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح صيغة التفضيل الخاطئة لكلمة bad (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the superlative form of bad:',
        question: 'This was the baddest movie I have seen.',
        correctAnswer: ['worst', 'Worst'],
        explanationAr: 'صيغة التفضيل الشاذة من bad هي the worst (الأسوأ).',
      },
      {
        id: 'a2-4-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي جملة تمثل صياغة مقارنة إنجليزية سليمة تماماً؟',
        instructionEn: 'Which sentence has flawless comparative grammar?',
        question: 'Identify the correct sentence:',
        options: [
          'Traveling by train is cheaper than flying.',
          'Traveling by train is more cheaper than flying.',
          'Traveling by train is cheapest than flying.',
          'Traveling by train is more cheap than flying.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة: cheaper than بدون more وبدون تكرار.',
      },
      {
        id: 'a2-4-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "الذهب أغلى من الفضة":',
        instructionEn: 'Translate: "الذهب أغلى من الفضة":',
        question: 'Translate: "الذهب أغلى من الفضة"',
        correctAnswer: ['Gold is more expensive than silver', 'Gold is more expensive than silver.', 'gold is more expensive than silver'],
        explanationAr: 'الترجمة الصحيحة: Gold is more expensive than silver.',
      },
    ],
  },
  {
    id: 'lesson-a2-5-countable-uncountable-quantifiers',
    level: 'A2',
    order: 5,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: حروف الجر والمقارنات والمقادير',
    chapterTitleEn: 'Chapter 2: Prepositions, Comparisons & Quantifiers',
    titleAr: 'الدرس 5: الأسماء المعدودة وغير المعدودة وأدوات الكمية (Much, Many, A lot of)',
    titleEn: 'Lesson 5: Countable vs. Uncountable Nouns & Quantifiers',
    category: 'قواعد ومفردات (A2)',
    iconName: 'Layers',
    estimatedMinutes: 16,
    objectivesAr: [
      'التمييز الصارم بين الأسماء المعدودة (Countable) والأسماء غير المعدودة (Uncountable).',
      'التعرف على أشهر الأسماء غير المعدودة الخادعة: information, advice, furniture, luggage, money.',
      'استخدام Much مع غير المعدود في النفي والسؤال، و Many مع المعدود الجمع.',
      'استخدام A lot of في الإثبات، و Some في الجمل الإيجابية والطلبات، و Any في النفي والاستفهام.',
    ],
    explanationMarkdownAr: `### الأسماء المعدودة وغير المعدودة وأدوات المقادير

#### 1. الفارق الأساسي:
- **الأسماء المعدودة (Countable)**: أشياء مفردة يمكن عدها بالأرقام وتأخذ صيغة جمع بـ -s:
  - *one apple, two apples* / *one car, three cars*.
- **الأسماء غير المعدودة (Uncountable)**: سوائل، غازات، مواد خام، أو مفاهيم مجردة تُعامل **دائماً كمعاملة المفرد** ولا تضاف لها -s:
  - *water, coffee, sugar, bread*.

#### 2. الأسماء غير المعدودة الخادعة للناطقين بالعربية (False Friends):
في العربية هذه الكلمات تعد وتجمع، لكن في الإنجليزية **ممنوع جمعها بـ s وممنوع وضع a/an قبلها**:
- **Information** (معلومات) -> تعامل كمفرد! (لا تقل informations!).
- **Advice** (نصائح) -> تعامل كمفرد! (لا تقل advices!). لعدها نقول: *a piece of advice*.
- **Luggage / Baggage** (حقائب السفر) -> تعامل كمفرد.
- **Furniture** (أثاث) -> تعامل كمفرد.
- **Money** (أموال) -> تعامل كمفرد (كلمة Dollars تعد، لكن كلمة Money لا تعد).

#### 3. أدوات الكمية (Quantifiers):
1. **MANY (للجمع المعدود)**:
   - *How **many** books did you read?* / *I don't have **many** friends here.*
2. **MUCH (لغير المعدود في النفي والسؤال)**:
   - *How **much** water do you drink?* / *I don't have **much** time.*
3. **A LOT OF (للمعدود وغير المعدود في الجمل المثبتة)**:
   - *She has **a lot of** books.* / *We drank **a lot of** water.*
4. **SOME مقابل ANY**:
   - **Some** (بعض): في الجمل المثبتة وعروض الضيافة: *I have some questions.* / *Would you like some tea?*
   - **Any** (أي): في النفي والأسئلة العامة: *I don't have any money.* / *Do you have any questions?*`,
    rulesAndStructuresAr: `المعدود: many, a few, several. غير المعدود: much, a little. كلاهما: a lot of, some, any. الأسماء غير المعدودة تعامل كالمفرد دائماً وتأخذ is / was ولا يضاف لها s (advice, information, furniture).`,
    summaryAr: 'Much لغير المعدود و Many للمعدود. الكلمات (advice, information, luggage) لا تجمع بـ s في الإنجليزية. استخدم some في الإثبات و any في النفي والسؤال.',
    arabicContrastPoint: {
      titleAr: 'جمع كلمتي Advice و Information',
      descriptionAr: 'في العربية نقول: "أعطاني نصائح ومعلومات كثيرة". في الإنجليزية Advice و Information غير معدودة ولا تجمع أبداً بـ s، ولا تقل: "He gave me many advices".',
      badArabicHabit: 'He gave me many advices and informations.',
      correctEnglishWay: 'He gave me a lot of advice and information.',
    },
    examples: [
      { en: 'Could you give me a useful piece of advice?', ar: 'هل يمكنك أن تسدي لي نصيحة مفيدة؟', phoneticAr: 'كُود يُو جِيڤ مِي أَ يُوسْفُل بِيس أُوڤ أَدْڤَايْس؟' },
      { en: 'How much water do you drink every day?', ar: 'كم كمية الماء التي تشربها كل يوم؟', phoneticAr: 'هَاوْ مَاتْش وَاتَر دُو يُو دْرِينك إِڤْرِي دَاي؟' },
      { en: 'We do not have any extra chairs in this office.', ar: 'ليس لدينا أي كراسٍ إضافية في هذا المكتب.', phoneticAr: 'وِي دُو نُوت هَاف إِنِي إِكْسْتْرَا تْشِيرز' },
      { en: 'The website provides a lot of accurate information.', ar: 'يقدم الموقع الكثير من المعلومات الدقيقة.', phoneticAr: 'ذَا وِيبْسَايْت بْرُوڤَايْدز أَ لُوت أُوڤ أَكْيُورِت إِنْفُورْمَيْشَن' },
    ],
    vocabulary: [
      { word: 'Advice', ipa: '/ədˈvaɪs/', partOfSpeech: 'noun (uncountable)', meaningAr: 'نصيحة / توجيه', exampleEn: 'Take my advice and study daily.', exampleAr: 'خذ بنصيحتي وادرس يومياً.' },
      { word: 'Information', ipa: '/ˌɪn.fɚˈmeɪ.ʃən/', partOfSpeech: 'noun (uncountable)', meaningAr: 'معلومات / بيانات', exampleEn: 'The brochure contains helpful information.', exampleAr: 'يحتوي الكتيب على معلومات مفيدة.' },
      { word: 'Furniture', ipa: '/ˈfɝː.nɪ.tʃɚ/', partOfSpeech: 'noun (uncountable)', meaningAr: 'أثاث منزلي ومكتبي', exampleEn: 'We bought modern furniture.', exampleAr: 'اشترينا أثاثاً حديثاً.' },
      { word: 'Accurate', ipa: '/ˈæk.jɚ.ət/', partOfSpeech: 'adjective', meaningAr: 'دقيق وصحيح', exampleEn: 'We need accurate statistics.', exampleAr: 'نحتاج إلى إحصاءات دقيقة.' },
      { word: 'Luggage', ipa: '/ˈlʌɡ.ɪdʒ/', partOfSpeech: 'noun (uncountable)', meaningAr: 'أمتعة وحقائب السفر', exampleEn: 'How many pieces of luggage do you have?', exampleAr: 'كم حقيبة سفر لديك؟' },
    ],
    commonMistakes: [
      { wrong: 'He gave me two advices.', correct: 'He gave me two pieces of advice.', reasonAr: 'كلمة advice لا تجمع بـ s ولعدها نستخدم pieces of advice.' },
      { wrong: 'I have many works today.', correct: 'I have a lot of work today.', reasonAr: 'العمل بمعنى المهام work غير معدود ولا يجمع بـ s.' },
      { wrong: 'Do you have some questions?', correct: 'Do you have any questions?', reasonAr: 'في السؤال العام المفتوح نستخدم any وليس some.' },
    ],
    realWorldChallengeAr: 'اطلب نصيحة من شخص بالإنجليزية مستخدماً العبارة السليمة: "Could you give me a piece of advice?".',
    exercises: [
      {
        id: 'a2-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من الأخطاء في التعامل مع كلمة Advice:',
        instructionEn: 'Choose the correct sentence regarding "advice":',
        question: 'Which sentence correctly handles the noun "advice"?',
        options: [
          'My manager gave me a valuable piece of advice.',
          'My manager gave me many advices.',
          'My manager gave me an advice.',
          'My manager gave me three advices.',
        ],
        correctAnswer: 0,
        explanationAr: 'كلمة advice غير معدودة لا تأخذ an ولا تجمع بـ s، ولعدها نستخدم a piece of advice.',
      },
      {
        id: 'a2-5-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة الكمية المناسبة مع الاسم غير المعدود "time" في السؤال:',
        instructionEn: 'Choose the correct quantifier for uncountable "time":',
        question: 'How _____ time do we need to finalize the project?',
        options: ['much', 'many', 'few', 'several'],
        correctAnswer: 0,
        explanationAr: 'الوقت (time) غير معدود فنستخدم معه How much للسؤال.',
      },
      {
        id: 'a2-5-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل الجملة المنفية باستخدام (some أو any):',
        instructionEn: 'Fill in the blank with some or any in negative sentence:',
        question: 'We do not have ______ extra tickets left for tonight.',
        correctAnswer: ['any', 'Any'],
        explanationAr: 'في الجمل المنفية نستخدم any بمعنى أي.',
      },
      {
        id: 'a2-5-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر التعبير السليم عن أمتعة السفر:',
        instructionEn: 'Choose the correct form for travel bags:',
        question: 'The airline lost all my _____.',
        options: ['luggage', 'luggages', 'a luggage', 'many luggages'],
        correctAnswer: 0,
        explanationAr: 'كلمة luggage غير معدودة وتعني جميع الحقائب والأمتعة ولا تجمع بـ s.',
      },
      {
        id: 'a2-5-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين سؤال عن العدد:',
        instructionEn: 'Arrange the words to form a correct count question:',
        question: 'books / did / How / read / many / you / ?',
        correctAnswer: 'How many books did you read?',
        explanationAr: 'الترتيب: How many books + did + you + read?',
      },
      {
        id: 'a2-5-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الجمع الخاطئ لكلمة information (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the plural error:',
        question: 'The website provided valuable informations.',
        correctAnswer: ['information', 'Information'],
        explanationAr: 'كلمة information غير معدودة في الإنجليزية ولا تجمع بـ s أبداً.',
      },
      {
        id: 'a2-5-ex-7',
        type: 'multiple_choice',
        instructionAr: 'متى نستخدم "a few" مقارنة بـ "a little"؟',
        instructionEn: 'When do we use "a few" vs "a little"?',
        question: 'We use "a few" with:',
        options: [
          'الأسماء المعدودة في صيغة الجمع',
          'الأسماء غير المعدودة فقط',
          'مع الأفعال فقط',
          'مع النفي فقط',
        ],
        correctAnswer: 0,
        explanationAr: 'نستخدم a few مع الأسماء المعدودة الجمع (a few books)، بينما a little مع غير المعدود (a little water).',
      },
      {
        id: 'a2-5-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "ليس لدي أي مال في محفظتي":',
        instructionEn: 'Translate: "ليس لدي أي مال في محفظتي":',
        question: 'Translate: "ليس لدي أي مال في محفظتي"',
        correctAnswer: ['I do not have any money in my wallet', "I don't have any money in my wallet", "I don't have any money in my wallet."],
        explanationAr: 'الترجمة الصحيحة: I do not have any money in my wallet مع استخدام any في النفي.',
      },
    ],
  },
  {
    id: 'lesson-a2-6-future-forms',
    level: 'A2',
    order: 6,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: المستقبل والأفعال المساعدة والاختبار',
    chapterTitleEn: 'Chapter 3: Future Forms, Modals & Assessment',
    titleAr: 'الدرس 6: صيغ المستقبل الثلاث (Will مقابل Be Going To والمستمر)',
    titleEn: 'Lesson 6: Future Forms (Will vs. Be Going To vs. Present Continuous)',
    category: 'قواعد وأزمنة (A2)',
    iconName: 'FastForward',
    estimatedMinutes: 15,
    objectivesAr: [
      'التفرقة بين القرارات اللحظية والتوقعات العامة (Will).',
      'التعبير عن النوايا والخطط المسبقة والدلائل الحالية (Be Going To).',
      'استخدام المضارع المستمر للمواعيد الثابتة والترتيبات المؤكدة مع الآخرين.',
      'تجنب استخدام will في كل جملة مستقبلية دون تمييز.',
    ],
    explanationMarkdownAr: `### صيغ المستقبل الإنجليزية الثلاث

#### 1. متى نستخدم WILL (+ المصدر)؟
نستخدم **will** في 3 حالات رئيسية:
1. **القرار اللحظي الفوري** (اتخذت القرار أثناء الكلام دون تخطيط مسبق):
   - *The phone is ringing. I **will answer** it.* (الهاتف يرن، سأرد عليه فوراً).
2. **التوقعات الشخصية والآراء العامة** بدون دليل حسي مباشر:
   - *I think artificial intelligence **will change** our lives.* (أعتقد أن الذكاء الاصطناعي سيغير حياتنا).
3. **الوعود والعروض والتهديدات**:
   - *I promise I **will call** you tonight.* (أعدك أنني سأتصل بك الليلة).

#### 2. متى نستخدم BE GOING TO (+ المصدر)؟
نستخدم **am / is / are going to + Base Verb** في حالتين:
1. **النية والخطة المسبقة** (فكرت وقررت قبل لحظة التحدث):
   - *I **am going to buy** a new car next month.* (خططت ونويت مسبقاً).
2. **توقع مؤكد مبني على دليل حسي واضح أمام عينيك الآن**:
   - *Look at those dark clouds! It **is going to rain**.* (انظر للسحب السوداء! إنها ستمطر حتماً).

#### 3. متى نستخدم المضارع المستمر للمستقبل (Arrangements)؟
عند وجود **ترتيبات وتنسيقات مؤكدة مع أشخاص آخرين أو تذاكر محجوزة**:
- *I **am flying** to London on Friday; I have my ticket.* (حجزت التذكرة والرحلة مؤكدة).
- *We **are meeting** the client at 2:00 PM tomorrow.* (اتفقنا على الموعد وحددنا الساعة).`,
    rulesAndStructuresAr: `صيغ المستقبل: 1. Will + Base Verb (قرارات لحظية، وعود، توقعات غير مؤكدة). 2. am/is/are going to + Base Verb (خطط ونوايا مسبقة، دلائل واضحة). 3. am/is/are + Verb-ing (مواعيد وترتيبات محجوزة ومؤكدة).`,
    summaryAr: 'استخدم will للقرار الفوري والوعد، واستخدم going to للخطة المسبقة والدليل الحسي، واستخدم المستمر للمواعيد المحجوزة والمؤكدة.',
    arabicContrastPoint: {
      titleAr: 'استخدام Will في كل شيء',
      descriptionAr: 'المتعلم العربي يترجم حرف السين أو سوف بـ Will في كل موضع فيقول: "I will travel tomorrow" حتى لو كان حجز الفندق والتذكرة في جيبه. في الإنجليزية التخطيط المؤكد يتطلب going to أو المضارع المستمر.',
      badArabicHabit: 'I have the tickets, I will fly tomorrow.',
      correctEnglishWay: 'I have the tickets, I am flying tomorrow. (or: I am going to fly).',
    },
    examples: [
      { en: 'I am going to start an English speaking course next week.', ar: 'أنا أنوي وأخطط لبدء دورة محادثة إنجليزية الأسبوع القادم.', phoneticAr: 'آيْ آمْ جُويِينْج تُو سْتَارْت أَن إِنْجْلِش سْبِيكِينْج كُورس' },
      { en: 'Look at the traffic! We are going to be late.', ar: 'انظر إلى ازدحام السير! سوف نتأخر بالتأكيد.', phoneticAr: 'لُوك أَت ذَا تْرَافِيك! وِي آر جُويِينْج تُو بِي لَيْت' },
      { en: 'Don\'t worry, I will help you with this task.', ar: 'لا تقلق، سأساعدك في هذه المهمة (قرار فوري وعرض).', phoneticAr: 'دُونْت وُورِي، آيْ وِيل هِلْب يُو' },
      { en: 'We are having dinner with the director on Thursday.', ar: 'سنتناول العشاء مع المدير يوم الخميس (موعد متفق عليه).', phoneticAr: 'وِي آر هَاڤِينْج دِينَر وِذ ذَا دَايْرِكْتَر' },
    ],
    vocabulary: [
      { word: 'Promise', ipa: '/ˈprɑː.mɪs/', partOfSpeech: 'verb & noun', meaningAr: 'يعد / وعد', exampleEn: 'I promise to arrive on time.', exampleAr: 'أعدك بالحضور في الموعد.' },
      { word: 'Intend', ipa: '/ɪnˈtend/', partOfSpeech: 'verb', meaningAr: 'ينوي ويعتزم', exampleEn: 'We intend to launch the service soon.', exampleAr: 'نعتزم إطلاق الخدمة قريباً.' },
      { word: 'Arrangement', ipa: '/əˈreɪndʒ.mənt/', partOfSpeech: 'noun', meaningAr: 'ترتيب وتنسيق مسبق', exampleEn: 'We have made travel arrangements.', exampleAr: 'أجرينا ترتيبات السفر.' },
      { word: 'Traffic', ipa: '/ˈtræf.ɪk/', partOfSpeech: 'noun', meaningAr: 'حركة المرور والسيارات', exampleEn: 'Traffic was heavy this morning.', exampleAr: 'كانت حركة المرور مزدحمة هذا الصباح.' },
      { word: 'Director', ipa: '/daɪˈrek.tɚ/', partOfSpeech: 'noun', meaningAr: 'مدير تنفيذي / مخرج', exampleEn: 'The managing director approved the plan.', exampleAr: 'وافق المدير التنفيذي على الخطة.' },
    ],
    commonMistakes: [
      { wrong: 'I will buy a car, I saved the money for months.', correct: 'I am going to buy a car, I saved the money for months.', reasonAr: 'وجود نية وتوفير مسبق للمال يتطلب صيغة going to.' },
      { wrong: 'The doorbell rings. I am going to open it.', correct: 'The doorbell rings. I will open it.', reasonAr: 'رنين الجرس قرار فوري لحظي يتطلب استخدام will.' },
      { wrong: 'She will meeting us tomorrow.', correct: 'She is meeting us tomorrow.', reasonAr: 'بعد will يأتي مصدر مجرد meet، أو نستخدم المضارع المستمر is meeting للمواعيد.' },
    ],
    realWorldChallengeAr: 'حدد خطتك المؤكدة لعطلة نهاية الأسبوع القادمة وصغها بجملة مستخدماً صيغة "I am going to...".',
    exercises: [
      {
        id: 'a2-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'الهاتف يرن في هذه اللحظة، ما الصيغة السليمة للقرار اللحظي؟',
        instructionEn: 'The phone is ringing right now. Choose the immediate decision:',
        question: 'The phone is ringing. I _____ it.',
        options: ['will answer', 'am going to answer', 'am answer', 'answering'],
        correctAnswer: 0,
        explanationAr: 'القرارات اللحظية الفورية التي تتخذ وقت الكلام تأخذ will + المصدر: will answer.',
      },
      {
        id: 'a2-6-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة لوجود دليل حسي واضح (غيوم سوداء كثيفة):',
        instructionEn: 'Choose the correct form based on present sensory evidence:',
        question: 'Look at those dense black clouds! It _____ rain.',
        options: ['is going to', 'will', 'is raining to', 'going to'],
        correctAnswer: 0,
        explanationAr: 'عند وجود دليل حسي ملموس ومباشر نستخدم صيغة is going to.',
      },
      {
        id: 'a2-6-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل صيغة النية المستقبلية بفعل الكينونة المناسب:',
        instructionEn: 'Fill in the correct auxiliary for future intention:',
        question: 'We ______ going to visit our grandparents this weekend.',
        correctAnswer: ['are', 'Are'],
        explanationAr: 'مع الفاعل We نستخدم فعل الكينونة are قبل going to.',
      },
      {
        id: 'a2-6-ex-4',
        type: 'multiple_choice',
        instructionAr: 'حجزت التذاكر والفندق لمؤتمر دبي، ما الصيغة الأكثر دقة للموعد المؤكد؟',
        instructionEn: 'Tickets and hotel are booked. Which form expresses fixed arrangement?',
        question: 'I have my ticket. I _____ to Dubai on Thursday.',
        options: ['am flying', 'will flying', 'flyed', 'am fly'],
        correctAnswer: 0,
        explanationAr: 'الترتيبات والمواعيد المحجوزة المؤكدة مع الآخرين تصاغ بالمضارع المستمر: am flying.',
      },
      {
        id: 'a2-6-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة خطة مستقبلية مسبقة:',
        instructionEn: 'Arrange the words to form a future plan sentence:',
        question: 'learn / to / is / going / He / programming',
        correctAnswer: 'He is going to learn programming',
        explanationAr: 'الترتيب: He + is going to + learn + programming.',
      },
      {
        id: 'a2-6-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ النحوي بعد will (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the verb after will:',
        question: 'I promise I will calling you tonight.',
        correctAnswer: ['call', 'Call'],
        explanationAr: 'بعد will يأتي مصدر الفعل مجرداً دون أي إضافة: call.',
      },
      {
        id: 'a2-6-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي جملة تعبر عن وعد صريح للمستقبل؟',
        instructionEn: 'Which sentence represents an explicit promise?',
        question: 'Select the promise:',
        options: [
          'I will never reveal your secret password.',
          'I am going to rain.',
          'I am eating lunch yesterday.',
          'I was sleeping tomorrow.',
        ],
        correctAnswer: 0,
        explanationAr: 'الوعود تصاغ دائماً باستخدام will: I will never reveal...',
      },
      {
        id: 'a2-6-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "نحن سنشتري منزلاً جديداً الشهر القادم (خطة مسبقة)":',
        instructionEn: 'Translate: "نحن سنشتري منزلاً جديداً الشهر القادم":',
        question: 'Translate: "نحن سنشتري منزلاً جديداً الشهر القادم"',
        correctAnswer: ['We are going to buy a new house next month', 'we are going to buy a new house next month', 'We are going to buy a new house next month.'],
        explanationAr: 'الترجمة الصحيحة للخطة المسبقة: We are going to buy a new house next month.',
      },
    ],
  },
  {
    id: 'lesson-a2-7-modal-verbs-advice-obligation',
    level: 'A2',
    order: 7,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: المستقبل والأفعال المساعدة والاختبار',
    chapterTitleEn: 'Chapter 3: Future Forms, Modals & Assessment',
    titleAr: 'الدرس 7: الأفعال الناقصة (Can, Could, Should, Must, Have to)',
    titleEn: 'Lesson 7: Modal Verbs for Ability, Advice & Obligation',
    category: 'قواعد واستخدام (A2)',
    iconName: 'Shield',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن القدرة والاستطاعة في الحاضر بـ Can والماضي بـ Could.',
      'تقديم النصائح والاقتراحات اللبقة باستخدام Should و Shouldn\'t.',
      'التفرقة بين الإلزام والقانون الخارجي (Have to) والإلزام الشخصي أو الضرورة القصوى (Must).',
      'تطبيق القاعدة الذهبية: الأفعال الناقصة يتبعها مصدر مجرد بدون to وبدون أي إضافة.',
    ],
    explanationMarkdownAr: `### الأفعال الناقصة (Modal Verbs) في الحياة اليومية

#### 1. القاعدة الذهبية لجميع الأفعال الناقصة:
\`\`\`
Modal Verb + [مصدر الفعل المجرد تماماً بدون to وبدون أي إضافات]
\`\`\`
- نقول: *You should **go*** (خطأ: You should to go، وخطأ: You should goes).
- الأفعال الناقصة لا يضاف لها s مع المفرد الغائب أبداً (خطأ: He cans).

#### 2. استخدامات الأفعال الناقصة الأساسية:
1. **القدرة والاستطاعة (Ability)**:
   - **Can** (يستطيع في الحاضر): *She can speak three languages.*
   - **Could** (استطاع في الماضي أو طلب فائق الأدب): *When I was young, I could run fast.* / *Could you help me, please?*
2. **إسداء النصيحة (Advice & Recommendation)**:
   - **Should** (ينبغي عليك - نصيحة إيجابية): *You should get eight hours of sleep.*
   - **Shouldn't** (لا ينبغي - تحذير من عادة سيئة): *You shouldn't drink too much soda.*
3. **الإلزام والضرورة (Obligation & Necessity)**:
   - **Have to / Has to** (يجب - قانون أو قاعدة خارجية تفرضها جهة أخرى):
     - *You have to show your passport at the border.* (قانون رسمي).
   - **Must** (يجب بشدة - إلزام شخصي أو أمر مصيري):
     - *I must call my mother today; it is her birthday.*
   - **Mustn't (تحريم وممنوع منعاً باتاً)**:
     - *You mustn't smoke in the hospital.* (ممنوع قانوناً وصحياً).`,
    rulesAndStructuresAr: `قاعدة الأفعال الناقصة: Subject + Modal (can/could/should/must) + Base Verb. نفيها بإضافة not مباشرة (cannot/can't, shouldn't, mustn't). بعد Have to يأتي مصدر أيضاً (have to + verb).`,
    summaryAr: 'Can للقدرة، Could للماضي والطلب المهذب، Should للنصيحة، و Must و Have to للإلزام. تذكر: لا تضع to بعد can أو should أو must.',
    arabicContrastPoint: {
      titleAr: 'إقحام حرف to بعد الأفعال الناقصة',
      descriptionAr: 'كثير من المتعلمين يترجمون من العربية: "يجب أن تذهب" فيضعون to بعد should أو can فيقولون: "You should to go". الأفعال الناقصة في الإنجليزية تأخذ المصدر مجرداً مباشرة: "You should go".',
      badArabicHabit: 'You must to attend the meeting. / He can to speak English.',
      correctEnglishWay: 'You must attend the meeting. / He can speak English.',
    },
    examples: [
      { en: 'You should drink more water during intense exercise.', ar: 'ينبغي عليك شرب المزيد من الماء أثناء التمارين الشديدة.', phoneticAr: 'يُو شُود دْرِينك مُور وَاتَر دْيُورِينْج إِنْتِنس إِكْسَرْسَايْز' },
      { en: 'Could you please email me the updated spreadsheet?', ar: 'هل يمكنك من فضلك إرسال جدول البيانات المحدث بالبريد؟', phoneticAr: 'كُود يُو بْلِيز إِيمَيْل مِي ذي أَبْدَيْتِد سْبْرِدْشِيت؟' },
      { en: 'Passengers have to wear seatbelts during takeoff.', ar: 'يتعين على الركاب ارتداء أحزمة الأمان أثناء الإقلاع.', phoneticAr: 'بَاسِنْجَرز هَاف تُو وِير سِيتْبِيلْتْس' },
      { en: 'You mustn\'t park your vehicle in front of the emergency exit.', ar: 'ممنوع منعاً باتاً إيقاف مركبتك أمام مخرج الطوارئ.', phoneticAr: 'يُو مَاسْنْت بَارك يُور ڤِيهِيكِل' },
    ],
    vocabulary: [
      { word: 'Obligation', ipa: '/ˌɑː.bləˈɡeɪ.ʃən/', partOfSpeech: 'noun', meaningAr: 'إلزام وواجب', exampleEn: 'Fulfilling the contract is a legal obligation.', exampleAr: 'الوفاء بالعقد واجب قانوني.' },
      { word: 'Spreadsheet', ipa: '/ˈspred.ʃiːt/', partOfSpeech: 'noun', meaningAr: 'جدول بيانات إلكتروني (إكسل)', exampleEn: 'Please fill in the financial spreadsheet.', exampleAr: 'يرجى ملء جدول البيانات المالي.' },
      { word: 'Emergency', ipa: '/ɪˈmɝː.dʒən.si/', partOfSpeech: 'noun', meaningAr: 'طوارئ / حالة عاجلة', exampleEn: 'In case of emergency, call 911.', exampleAr: 'في حالات الطوارئ، اتصل بـ 911.' },
      { word: 'Vehicle', ipa: '/ˈviː.ə.kəl/', partOfSpeech: 'noun', meaningAr: 'مركبة / سيارة', exampleEn: 'Park your vehicle in the lot.', exampleAr: 'أوقف مركبتك في الموقف.' },
      { word: 'Intense', ipa: '/ɪnˈtens/', partOfSpeech: 'adjective', meaningAr: 'مكثف وشديد', exampleEn: 'The team underwent intense training.', exampleAr: 'خضع الفريق لتدريب مكثف.' },
    ],
    commonMistakes: [
      { wrong: 'You should to see a doctor.', correct: 'You should see a doctor.', reasonAr: 'الفعل الناقص should يتبعه المصدر مباشرة دون to.' },
      { wrong: 'He cans drive a truck.', correct: 'He can drive a truck.', reasonAr: 'الأفعال الناقصة لا يضاف لها s أبداً حتى مع المفرد He.' },
      { wrong: 'You don\'t have to smoke here (when prohibited).', correct: 'You mustn\'t smoke here.', reasonAr: 'للتحريم والمنع القانوني نستخدم mustn\'t، أما don\'t have to فتعني لست مضطراً لكن يمكنك ذلك.' },
    ],
    realWorldChallengeAr: 'قدم نصيحة مهذبة لصديقك بالإنجليزية مستخدماً "You should..." واطلب طلباً مهذباً بـ "Could you please...".',
    exercises: [
      {
        id: 'a2-7-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة النحوية الصحيحة بعد الفعل الناقص "should":',
        instructionEn: 'Choose the correct verb form following "should":',
        question: 'If you feel exhausted, you should _____ a break.',
        options: ['take', 'to take', 'taking', 'takes'],
        correctAnswer: 0,
        explanationAr: 'الأفعال الناقصة مثل should يتبعها مصدر الفعل المجرد take دون to ودون إضافات.',
      },
      {
        id: 'a2-7-ex-2',
        type: 'multiple_choice',
        instructionAr: 'أي فعل ناقص نستخدمه لتقديم طلب غاية في اللباقة والأدب؟',
        instructionEn: 'Which modal expresses a polite request?',
        question: '_____ you please review my resume when you have time?',
        options: ['Could', 'Must', 'Should to', 'Are'],
        correctAnswer: 0,
        explanationAr: 'نستخدم Could للطلبات المهذبة الراقية: Could you please...?',
      },
      {
        id: 'a2-7-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل الناقص المناسب للنصيحة الإيجابية:',
        instructionEn: 'Fill in the modal verb for recommendations:',
        question: 'You ______ practice English listening every single day.',
        correctAnswer: ['should', 'Should'],
        explanationAr: 'نستخدم should لإسداء النصيحة والتوصية الإيجابية.',
      },
      {
        id: 'a2-7-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل المعبر عن المنع والتحريم القانوني الصارم:',
        instructionEn: 'Choose the modal expressing strict prohibition:',
        question: 'Passengers _____ open the emergency doors during the flight.',
        options: ['mustn\'t', 'don\'t have to', 'should', 'could'],
        correctAnswer: 0,
        explanationAr: 'نستخدم mustn\'t للتعبير عن التحريم والمنع التام والقانوني.',
      },
      {
        id: 'a2-7-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة نصيحة طبية صحيحة:',
        instructionEn: 'Arrange the words into a correct medical advice sentence:',
        question: 'doctor / consult / You / a / should / immediately',
        correctAnswer: 'You should consult a doctor immediately',
        explanationAr: 'الترتيب: You + should + consult + a doctor + immediately.',
      },
      {
        id: 'a2-7-ex-6',
        type: 'error_hunt',
        instructionAr: 'احذف الكلمة الزائدة الخاطئة بعد can (اكتب الكلمة الزائدة فقط):',
        instructionEn: 'Identify the redundant word after can:',
        question: 'She can to speak Arabic fluently.',
        correctAnswer: ['to', 'To'],
        explanationAr: 'كلمة to زائدة وخاطئة لأن can يتبعها المصدر speak مباشرة.',
      },
      {
        id: 'a2-7-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المعبرة عن الالتزام بالقوانين الرسمية مع المفرد (He):',
        instructionEn: 'Choose the obligation form for singular subject (He):',
        question: 'A commercial pilot _____ have 20/20 vision.',
        options: ['has to', 'have to', 'must to', 'should to'],
        correctAnswer: 0,
        explanationAr: 'مع الفاعل المفرد (A pilot) نستخدم has to للتعبير عن الشروط والإلزام الخارجي.',
      },
      {
        id: 'a2-7-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "هل يمكنك مساعدتي من فضلك؟":',
        instructionEn: 'Translate: "هل يمكنك مساعدتي من فضلك؟":',
        question: 'Translate: "هل يمكنك مساعدتي من فضلك؟"',
        correctAnswer: ['Could you help me please?', 'Could you please help me?', 'Can you help me please?', 'could you please help me?'],
        explanationAr: 'الترجمة الصحيحة: Could you please help me? أو Can you help me please?',
      },
    ],
  },
  {
    id: 'lesson-a2-8-level-a2-assessment',
    level: 'A2',
    order: 8,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: المستقبل والأفعال المساعدة والاختبار',
    chapterTitleEn: 'Chapter 3: Future Forms, Modals & Assessment',
    titleAr: 'الدرس 8: اختبار واجتياز المستوى الابتدائي A2 الشامل',
    titleEn: 'Lesson 8: Level A2 Comprehensive Mastery Assessment',
    category: 'المراجعة والاختبار (A2)',
    iconName: 'Award',
    estimatedMinutes: 20,
    objectivesAr: [
      'مراجعة شاملة لجميع مخرجات المستوى A2 (Past Simple, Prepositions in/on/at, Comparatives, Quantifiers, Future, Modals).',
      'التأكد من التخلص النهائي من أخطاء أفعال الحالة وحروف الجر الزائدة.',
      'تقييم القدرة على صياغة فقرة مترابطة بالماضي والمستقبل.',
      'اجتياز الاختبار النهائي بنسبة تفوق 80% للتأهل للمستوى المتوسط B1.',
    ],
    explanationMarkdownAr: `### المراجعة الشاملة لمستوى A2 (Elementary)

#### أبرز ما أتقنته في هذا المستوى:
1. **الماضي البسيط والأفعال الشاذة**:
   - استخدام *went, bought, saw, had*.
   - النفي والسؤال بـ *didn't / did + المصدر*.
   - أصوات -ed الثلاثة (/t/, /d/, /ɪd/).
2. **أفعال الحالة والمضارع البسيط**:
   - أفعال الإدراك والشعور (*want, need, know, understand, agree*) ترفض صيغة -ing.
3. **حروف الجر (IN, ON, AT)**:
   - هرم الدقة الزمني والمكاني.
   - *on the bus / in the taxi*.
4. **المقارنات والمقادير**:
   - *easier than*, *more expensive than*, *the best*, *the worst*.
   - *much* لغير المعدود، و *many* للمعدود، وحفظ الأسماء الشاذة غير المعدودة (*advice, information*).
5. **المستقبل والأفعال الناقصة**:
   - الفارق بين *will* و *be going to*.
   - استخدام *should* للنصيحة و *can/could* للقدرة والأدب دون وضع to بعدها.

> **تعليمات الاختبار التراكمي النهائي**:
> أجب عن الأسئلة العشرة التالية بدقة لتتويج رحلتك في مستوى A2 والانتقال رسمياً إلى المستوى المتوسط المتقدم **B1 (Intermediate)**!`,
    rulesAndStructuresAr: `خلاصة قواعد A2: لا تكرر صيغة الماضي بعد didn't. لا تضف ing لأفعال الحالة. استخدم at للساعات و on للأيام و in للشهور والسنوات. لا تجمع more مع صفة تنتهي بـ er. الأفعال الناقصة تتبع بالمصدر مباشرة.`,
    summaryAr: 'تهانينا! لقد بنيت الترسانة القواعدية واللغوية الأساسية بالكامل. أنت الآن مستعد للمحادثات الحقيقية والسرد القصصي في مستوى B1.',
    arabicContrastPoint: {
      titleAr: 'الانتقال إلى الطلاقة والاستقلالية اللغوية',
      descriptionAr: 'المستوى A2 يمنحك الاستقلالية في السفر والمواقف اليومية والعملية دون الاعتماد على الترجمة الحرفية.',
      badArabicHabit: 'Relying on literal word-for-word translation.',
      correctEnglishWay: 'Thinking in natural English grammatical structures.',
    },
    examples: [
      { en: 'We had an important meeting at 9:00 AM on Monday.', ar: 'كان لدينا اجتماع مهم في التاسعة صباحاً يوم الاثنين.', phoneticAr: 'وِي هَاد أَن إِمْبُورْتَانْت مِيتِينْج' },
      { en: 'Speaking English is much easier than you initially thought.', ar: 'التحدث بالإنجليزية أسهل بكثير مما ظننت في البداية.', phoneticAr: 'سْبِيكِينْج إِنْجْلِش إِز مَاتْش إِيزِيَر' },
      { en: 'If you want to achieve fluency, you should practice consistently.', ar: 'إذا أردت تحقيق الطلاقة، ينبغي عليك أن تمارس باستمرار.', phoneticAr: 'إِف يُو وَانْت تُو أَRoute' },
    ],
    vocabulary: [
      { word: 'Achievement', ipa: '/əˈtʃiːv.mənt/', partOfSpeech: 'noun', meaningAr: 'إنجاز وتحقيق هدف', exampleEn: 'Completing Level A2 is a great achievement.', exampleAr: 'إتمام المستوى A2 إنجاز رائع.' },
      { word: 'Fluency', ipa: '/ˈfluː.ən.si/', partOfSpeech: 'noun', meaningAr: 'طلاقة في التحدث', exampleEn: 'Daily practice builds natural fluency.', exampleAr: 'الممارسة اليومية تبني الطلاقة الطبيعية.' },
      { word: 'Initially', ipa: '/ɪˈnɪʃ.əl.i/', partOfSpeech: 'adverb', meaningAr: 'في البداية / مبدئياً', exampleEn: 'It was initially difficult, but it became easy.', exampleAr: 'كان صعباً في البداية، ولكنه أصبح سهلاً.' },
    ],
    commonMistakes: [
      { wrong: 'I didn\'t went to the office on 9:00 AM.', correct: 'I didn\'t go to the office at 9:00 AM.', reasonAr: 'بعد didn\'t نضع المصدر go، والساعات تأخذ at وليس on.' },
      { wrong: 'She gave me many good advices.', correct: 'She gave me a lot of good advice.', reasonAr: 'كلمة advice غير معدودة ولا تجمع بـ s.' },
    ],
    realWorldChallengeAr: 'اكتب فقرة من 5 جمل تتحدث فيها عن رحلة قمت بها في الماضي، وما تنوي فعله في رحلتك القادمة.',
    exercises: [
      {
        id: 'a2-8-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من الأخطاء النحوية في الماضي والوقت:',
        instructionEn: 'Choose the grammatically flawless sentence:',
        question: 'Which sentence is completely correct?',
        options: [
          'We arrived at the airport at 6:00 AM on Friday.',
          'We arrived in the airport on 6:00 AM in Friday.',
          'We didn\'t arrived at the airport at 6:00 AM.',
          'We was arrived at the airport on Friday.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى دقيقة تماماً: arrived فعل ماضٍ + at the airport + at 6:00 AM للساعة + on Friday لليوم.',
      },
      {
        id: 'a2-8-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة مع فعل الحالة "understand":',
        instructionEn: 'Choose the correct form with the stative verb "understand":',
        question: 'I _____ the technical instructions clearly now.',
        options: ['understand', 'am understanding', 'understanding', 'understands'],
        correctAnswer: 0,
        explanationAr: 'الفعل understand فعل حالة لا يقبل -ing حتى مع وجود كلمة now.',
      },
      {
        id: 'a2-8-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل صيغة المقارنة الصحيحة للصفة easy:',
        instructionEn: 'Fill in the comparative form of easy:',
        question: 'Practicing speaking is ______ than memorizing grammar rules.',
        correctAnswer: ['easier', 'Easier'],
        explanationAr: 'صيغة المقارنة من easy هي easier than.',
      },
      {
        id: 'a2-8-ex-4',
        type: 'multiple_choice',
        instructionAr: 'كيف نتعامل مع الاسم غير المعدود "information"؟',
        instructionEn: 'How do we handle the uncountable noun "information"?',
        question: 'The consultant gave us a lot of useful _____.',
        options: ['information', 'informations', 'an information', 'many informations'],
        correctAnswer: 0,
        explanationAr: 'كلمة information غير معدودة ولا يضاف لها s أبداً.',
      },
      {
        id: 'a2-8-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة نصيحة صحيحة:',
        instructionEn: 'Arrange the words to form a correct recommendation:',
        question: 'sleep / hours / get / You / should / eight / of',
        correctAnswer: 'You should get eight hours of sleep',
        explanationAr: 'الترتيب: You + should + get + eight hours of sleep.',
      },
      {
        id: 'a2-8-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ النحوي بعد didn\'t (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the verb after didn\'t:',
        question: 'She didn\'t bought the expensive shoes.',
        correctAnswer: ['buy', 'Buy'],
        explanationAr: 'بعد didn\'t يجب أن يعود الفعل لمصدره المجرد buy.',
      },
      {
        id: 'a2-8-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة التفضيل الشاذة العليا لكلمة "good":',
        instructionEn: 'Choose the superlative of "good":',
        question: 'This is the _____ decision we have made all year.',
        options: ['best', 'goodest', 'most good', 'better'],
        correctAnswer: 0,
        explanationAr: 'صيغة التفضيل العليا من good هي the best.',
      },
      {
        id: 'a2-8-ex-8',
        type: 'multiple_choice',
        instructionAr: 'أي حرف جر نستخدمه مع وسيلة النقل العامة "the bus"؟',
        instructionEn: 'Which preposition is used with "the bus"?',
        question: 'I left my umbrella _____ the bus this morning.',
        options: ['on', 'in', 'at', 'to'],
        correctAnswer: 0,
        explanationAr: 'وسائل النقل الكبيرة تأخذ حرف الجر on: on the bus.',
      },
      {
        id: 'a2-8-ex-9',
        type: 'multiple_choice',
        instructionAr: 'أي صيغة مستقبلية تدل على خطة ونية مسبقة؟',
        instructionEn: 'Which future form expresses a prior plan/intention?',
        question: 'I have saved up. I _____ start my own business next year.',
        options: ['am going to', 'will to', 'am will', 'going'],
        correctAnswer: 0,
        explanationAr: 'الخطط والنوايا المسبقة تصاغ بـ am/is/are going to + المصدر.',
      },
      {
        id: 'a2-8-ex-10',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "أنا أتفق معك تماماً في هذه النقطة":',
        instructionEn: 'Translate: "أنا أتفق معك تماماً في هذه النقطة":',
        question: 'Translate: "أنا أتفق معك تماماً في هذه النقطة"',
        correctAnswer: ['I completely agree with you on this point', 'I agree with you completely on this point', 'i completely agree with you on this point'],
        explanationAr: 'الترجمة الصحيحة: I completely agree with you on this point (بدون am قبل agree).',
      },
    ],
  },
];
