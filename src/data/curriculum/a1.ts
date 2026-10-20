import type { Lesson } from '../../types/learning.ts';

export const A1_LESSONS: Lesson[] = [
  {
    id: 'lesson-a1-1-subject-pronouns-and-tobe',
    level: 'A1',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أركان الجملة الإنجليزية وفعل الكينونة',
    chapterTitleEn: 'Chapter 1: Sentence Foundations & Verb To Be',
    titleAr: 'الدرس 1: ضمائر الفاعل وفعل الكينونة (Am, Is, Are)',
    titleEn: 'Lesson 1: Subject Pronouns & The Verb "To Be"',
    category: 'قواعد وتراكيب (A1)',
    iconName: 'User',
    estimatedMinutes: 14,
    objectivesAr: [
      'الاستخدام التلقائي لضمائر الفاعل السبعة (I, You, He, She, It, We, They).',
      'تصريف فعل الكينونة To Be في الإثبات، النفي، والسؤال.',
      'القضاء التام على خطأ حذف فعل الكينونة الشائع عند المتحدثين بالعربية.',
      'صياغة جمل تعريفية ووصفية كاملة بالإنجليزية.',
    ],
    explanationMarkdownAr: `### فعل الكينونة (Verb To Be) وأساس تكوين الجملة

#### 1. لماذا يعتبر فعل الكينونة أهم فعل في الإنجليزية؟
في اللغة العربية يمكننا تكوين جملة اسمية بدون أي فعل فنقول: **"أحمد ذكي"** أو **"أنا طالب"**.
أما في اللغة الإنجليزية، **فلا توجد جملة بدون فعل على الإطلاق!** إذا لم تجد فعلاً حركياً، ففعل الكينونة (يكون) إلزامي لا غنى عنه.

#### 2. تصريف فعل الكينونة في المضارع (Present Simple):
- **I -> am** (أنا أكون) -> *I am a doctor.* (مختصرة: *I'm*)
- **He -> is** (هو يكون) -> *He is an engineer.* (مختصرة: *He's*)
- **She -> is** (هي تكون) -> *She is happy.* (مختصرة: *She's*)
- **It -> is** (هو/هي لغير العاقل) -> *It is cold today.* (مختصرة: *It's*)
- **You -> are** (أنتَ / أنتِ / أنتم) -> *You are my friend.* (مختصرة: *You're*)
- **We -> are** (نحن نكون) -> *We are ready.* (مختصرة: *We're*)
- **They -> are** (هم يكونون) -> *They are teachers.* (مختصرة: *They're*)

#### 3. النفي (Negative)
نضيف كلمة **not** بعد فعل الكينونة مباشرة:
- *I am not tired.* (لست متعباً.)
- *He is not (isn't) at home.* (هو ليس في البيت.)
- *We are not (aren't) late.* (لسنا متأخرين.)

#### 4. صياغة السؤال (Yes / No Questions)
نعكس موضع الفاعل وفعل الكينونة فقط:
- *You are ready.* -> **Are you ready?** (هل أنت جاهز؟)
- *He is a doctor.* -> **Is he a doctor?** (هل هو طبيب؟)`,
    rulesAndStructuresAr: `صيغة الإثبات: Subject + am/is/are + Complement. النفي: Subject + am/is/are + not. السؤال: Am/Is/Are + Subject + Complement? لا تنسَ أن ضمير المتكلم I يكتب دائماً كبيراً (Capital) في أي موضع من الجملة.`,
    summaryAr: 'كل جملة إنجليزية تحتاج إلى فعل. استخدم am مع I، و is مع المفرد، و are مع الجمع والمخاطب. انفي بـ not واعكس الترتيب في السؤال.',
    arabicContrastPoint: {
      titleAr: 'حذف فعل الكينونة (The Omission Trap)',
      descriptionAr: 'المتعلم العربي يترجم في عقله: "هو طبيب" فيكتب مباشرة "He doctor" دون فعل. الصواب الإنجليزي: "He is a doctor".',
      badArabicHabit: 'He doctor in hospital. / The car fast.',
      correctEnglishWay: 'He is a doctor in the hospital. / The car is fast.',
    },
    examples: [
      { en: 'I am proud of your continuous progress.', ar: 'أنا فخور بتقدمك المستمر.', phoneticAr: 'آيْ آمْ بْرَاوْد أُوڤ يُور كُونْتِينْيُوُوسْ بْرُوجْرِس' },
      { en: 'The project is very important to us.', ar: 'المشروع مهم جداً بالنسبة لنا.', phoneticAr: 'ذَا بْرُوجِكْت إِز ڤِيرِي إِمْبُورْتَانْت تُو أَس' },
      { en: 'Are they ready for the final exam?', ar: 'هل هم جاهزون للاختبار النهائي؟', phoneticAr: 'آر ذَي رِيدِي فُور ذَا فَايْنَل إِجْزَام؟' },
      { en: 'She is not at the office today.', ar: 'هي ليست في المكتب اليوم.', phoneticAr: 'شِي إِز نُوت أَت ذي أُوفِيس تُودَاي' },
    ],
    vocabulary: [
      { word: 'Student', ipa: '/ˈstuː.dənt/', partOfSpeech: 'noun', meaningAr: 'طالب / متعلم', exampleEn: 'I am a diligent student.', exampleAr: 'أنا طالب مجتهد.' },
      { word: 'Ready', ipa: '/ˈred.i/', partOfSpeech: 'adjective', meaningAr: 'جاهز / مستعد', exampleEn: 'We are ready to begin.', exampleAr: 'نحن مستعدون للبدء.' },
      { word: 'Tired', ipa: '/taɪərd/', partOfSpeech: 'adjective', meaningAr: 'متعب / مرهق', exampleEn: 'He is not tired today.', exampleAr: 'هو ليس متعباً اليوم.' },
      { word: 'Teacher', ipa: '/ˈtiː.tʃər/', partOfSpeech: 'noun', meaningAr: 'معلم / أستاذ', exampleEn: 'She is an excellent teacher.', exampleAr: 'هي معلمة ممتازة.' },
      { word: 'Happy', ipa: '/ˈhæp.i/', partOfSpeech: 'adjective', meaningAr: 'سعيد / مسرور', exampleEn: 'They are very happy together.', exampleAr: 'هم سعداء جداً معاً.' },
    ],
    commonMistakes: [
      { wrong: 'I student.', correct: 'I am a student.', reasonAr: 'لا توجد جملة اسمية بدون فعل كينونة am وأداة تنكير a.' },
      { wrong: 'I am agree with you.', correct: 'I agree with you.', reasonAr: 'كلمة agree فعل وليس صفة، فلا تضع قبلها am.' },
      { wrong: 'I have 25 years old.', correct: 'I am 25 years old.', reasonAr: 'في الإنجليزية نعبر عن العمر بفعل الكينونة (am/is/are) وليس فعل التملك (have).' },
    ],
    realWorldChallengeAr: 'كون 3 جمل تصف بها نفسك ووظيفتك وحالتك الآن باستخدام فعل الكينونة (I am...).',
    exercises: [
      {
        id: 'a1-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف فعل الكينونة الصحيح مع الفاعل الجمع:',
        instructionEn: 'Choose the correct form of the verb to be:',
        question: 'My brother and I _____ very proud of you.',
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 2,
        explanationAr: 'الفاعل هنا مركب (My brother and I) وهو يعادل الضمير We (نحن)، لذلك يأخذ are وليس am.',
      },
      {
        id: 'a1-1-ex-2',
        type: 'error_hunt',
        instructionAr: 'أي الجمل التالية صحيحة نحوياً ومكتملة الأركان؟',
        instructionEn: 'Which sentence is completely correct?',
        question: 'Choose the grammatically complete sentence:',
        options: [
          'She very happy today.',
          'She is very happy today.',
          'She has very happy today.',
          'She are very happy today.',
        ],
        correctAnswer: 1,
        explanationAr: 'الجملة الصحيحة هي "She is very happy today" لوجود فعل الكينونة is المناسب للمفرد المؤنث.',
      },
      {
        id: 'a1-1-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بتصريف فعل الكينونة المناسب:',
        instructionEn: 'Fill in the blank with the correct form of to be:',
        question: 'The weather ______ very cold this evening.',
        correctAnswer: ['is', 'Is'],
        explanationAr: 'الطقس (The weather) مفرد غير عاقل يأخذ فعل الكينونة is.',
      },
      {
        id: 'a1-1-ex-4',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين سؤال صحيح:',
        instructionEn: 'Arrange the words to form a correct question:',
        question: 'ready / Are / meeting / the / for / you / ?',
        correctAnswer: 'Are you ready for the meeting?',
        explanationAr: 'في السؤال نبدأ بـ Are ثم الفاعل you ثم الصفة ready ثم شبه الجملة for the meeting.',
      },
      {
        id: 'a1-1-ex-5',
        type: 'multiple_choice',
        instructionAr: 'كيف تعبر عن عمرك بالإنجليزية بشكل صحيح؟',
        instructionEn: 'How do you correctly state your age in English?',
        question: 'To state your age, you say:',
        options: [
          'I am 24 years old.',
          'I have 24 years old.',
          'I with 24 years old.',
          'My age has 24 years.',
        ],
        correctAnswer: 0,
        explanationAr: 'في الإنجليزية نستخدم فعل الكينونة للتعبير عن السن: I am 24 years old.',
      },
      {
        id: 'a1-1-ex-6',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة النفي الصحيحة لجملة "He is at home":',
        instructionEn: 'Choose the correct negative form:',
        question: 'Negative of "He is at home":',
        options: [
          'He is not at home.',
          'He not is at home.',
          'He does not at home.',
          'He isn\'t not at home.',
        ],
        correctAnswer: 0,
        explanationAr: 'النفي يكون بوضع not مباشرة بعد فعل الكينونة: He is not at home.',
      },
      {
        id: 'a1-1-ex-7',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة التالية: "نحن مستعدون الآن":',
        instructionEn: 'Translate: "نحن مستعدون الآن":',
        question: 'Translate: "نحن مستعدون الآن"',
        correctAnswer: ['We are ready now', 'We are ready now.', 'we are ready now'],
        explanationAr: 'الترجمة الصحيحة: We are ready now مع استخدام فعل الكينونة are.',
      },
      {
        id: 'a1-1-ex-8',
        type: 'multiple_choice',
        instructionAr: 'أي ضمير يحل محل الاسم غير العاقل (The car)؟',
        instructionEn: 'Which pronoun replaces "The car"?',
        question: 'The car is fast. _____ is very expensive.',
        options: ['It', 'He', 'She', 'They'],
        correctAnswer: 0,
        explanationAr: 'الضمير It يُستخدم للمفرد غير العاقل (جماد أو حيوان).',
      },
    ],
  },
  {
    id: 'lesson-a1-2-articles-and-nouns',
    level: 'A1',
    order: 2,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أركان الجملة الإنجليزية وفعل الكينونة',
    chapterTitleEn: 'Chapter 1: Sentence Foundations & Verb To Be',
    titleAr: 'الدرس 2: أدوات النكرة والمعرفة (A, An, The) والجموع الشاذة',
    titleEn: 'Lesson 2: Articles (A, An, The) & Singular and Plural Nouns',
    category: 'قواعد ومفردات (A1)',
    iconName: 'Layout',
    estimatedMinutes: 15,
    objectivesAr: [
      'التفرقة الحاسمة بين أداة التنكير A وأداة An بناءً على الصوت وليس الحرف المكتوب.',
      'معرفة متى نستخدم أداة التعريف The ومتى نمتنع عن استخدامها.',
      'تحويل الأسماء من مفرد إلى جمع بإضافة s / es / ies.',
      'حفظ الجموع الشاذة الشائعة: child -> children, man -> men, person -> people.',
    ],
    explanationMarkdownAr: `### أدوات النكرة والمعرفة وقواعد الجمع

#### 1. أداة النكرة (A مقابل AN)
توضع أدوات النكرة قبل الاسم المفرد المعدود فقط، والفيصل هو **الصوت الأول** الذي تنطقه:
- **نستخدم A**: قبل الأسماء التي تبدأ بصوت ساكن (Consonant Sound):
  - *a book* (كتاب)، *a car* (سيارة)، *a university* (انتبه: كلمة university تبدأ بصوت /j/ شبه الساكن مثل "يو"، لذا تأخذ a!).
- **نستخدم AN**: قبل الأسماء التي تبدأ بصوت علة متحرك (Vowel Sound: أ / إ / أو):
  - *an apple* (تفاحة)، *an engineer* (مهندس)، *an umbrella* (مظلة).
  - *an hour* (انتبه: حرف h صامت تماماً، والصوت الأول المنطوق هو صوت علة "آوَر"، لذا تأخذ an!).

#### 2. أداة التعريف (THE)
تستخدم عند الحديث عن شيء محدد ومعروف لدى السامع والمتكلم، أو شيء فريد في الكون:
- *I saw a car. **The car** was red.* (ذكرت سيارة أول مرة نكرة، ثم عرفتها بـ The في المرة الثانية).
- *The sun, the moon, the sky.* (أشياء فريدة).
> **تنبيه**: لا نستخدم The قبل أسماء العلم أو الدول المفردة: نقول *Egypt* وليس *The Egypt*، ونقول *English* وليس *The English language* عند الحديث عن المادة عامة.

#### 3. جمع الأسماء (Plurals)
1. **الجمع القياسي**: بإضافة **-s**:
   - *book -> books* / *pen -> pens*.
2. **الجمع بإضافة -es**: إذا انتهى الاسم بـ (s, sh, ch, x, z):
   - *box -> boxes* / *watch -> watches* / *bus -> buses*.
3. **الجمع الشاذ (Irregular Plurals - حفظ إلزامي)**:
   - *child -> children* (طفل -> أطفال)
   - *man -> men* (رجل -> رجال)
   - *woman -> women* (امرأة -> نساء)
   - *person -> people* (شخص -> أشخاص)
   - *tooth -> teeth* (سن -> أسنان)
   - *foot -> feet* (قدم -> أقدام)`,
    rulesAndStructuresAr: `القاعدة الصوتية لـ A/An: الصوت هو المعيار: a university مقابل an umbrella؛ و a hospital مقابل an hour. الجمع الشاذ لا يضاف له s أبداً (لا تقل childrens أو persons في السياق المعتاد).`,
    summaryAr: 'ضع an قبل الأصوات المتحركة و a قبل الساكنة. استخدم The للشيء المحدد أو المذكور مسبقاً. احفظ الجموع الشاذة: children, men, women, people.',
    arabicContrastPoint: {
      titleAr: 'فخ الجمع بإضافة s للجموع الشاذة',
      descriptionAr: 'كثير من المبتدئين يضيفون s إلى الكلمات التي هي أصلاً جمع شاذ، فيقولون "peoples" أو "childrens".',
      badArabicHabit: 'I saw many childrens in the park.',
      correctEnglishWay: 'I saw many children in the park.',
    },
    examples: [
      { en: 'She is an experienced engineer.', ar: 'هي مهندسة ذات خبرة.', phoneticAr: 'شِي إِز أَن إِكْسْبِيرِيَنست إِنْجِينِير' },
      { en: 'We will meet in an hour.', ar: 'سنلتقي خلال ساعة واحدة.', phoneticAr: 'وِي وِيل مِيت إِن أَن آوَر' },
      { en: 'Many people visited the museum.', ar: 'زار العديد من الناس المتحف.', phoneticAr: 'مِينِي بِيبل ڤِيزِيتِد ذَا مْيُوزِيَم' },
      { en: 'He studies at a European university.', ar: 'هو يدرس في جامعة أوروبية.', phoneticAr: 'هِي سْتَادِيز أَت أَيُورُوبِيَان يُونِڤِيرْسِيتِي' },
    ],
    vocabulary: [
      { word: 'University', ipa: '/ˌjuː.nəˈvɝː.sə.t̬i/', partOfSpeech: 'noun', meaningAr: 'جامعة', exampleEn: 'Oxford is a famous university.', exampleAr: 'أكسفورد جامعة شهيرة.' },
      { word: 'Hour', ipa: '/aʊər/', partOfSpeech: 'noun', meaningAr: 'ساعة زمنية (60 دقيقة)', exampleEn: 'Wait here for an hour.', exampleAr: 'انتظر هنا لمدة ساعة.' },
      { word: 'Child', ipa: '/tʃaɪld/', partOfSpeech: 'noun', meaningAr: 'طفل', exampleEn: 'The child plays happily.', exampleAr: 'يلعب الطفل بسعادة.' },
      { word: 'Children', ipa: '/ˈtʃɪl.drən/', partOfSpeech: 'noun (plural)', meaningAr: 'أطفال', exampleEn: 'The children are playing outside.', exampleAr: 'الأطفال يلعبون بالخارج.' },
      { word: 'Person', ipa: '/ˈpɝː.sən/', partOfSpeech: 'noun', meaningAr: 'شخص واحد', exampleEn: 'Only one person can enter.', exampleAr: 'يمكن لشخص واحد فقط الدخول.' },
      { word: 'People', ipa: '/ˈpiː.pəl/', partOfSpeech: 'noun (plural)', meaningAr: 'ناس / أشخاص', exampleEn: 'Many people live in this city.', exampleAr: 'يعيش الكثير من الناس في هذه المدينة.' },
    ],
    commonMistakes: [
      { wrong: 'I waited for a hour.', correct: 'I waited for an hour.', reasonAr: 'حرف h صامت في كلمة hour، والصوت الأول علة فيأخذ an.' },
      { wrong: 'She goes to an university.', correct: 'She goes to a university.', reasonAr: 'كلمة university تبدأ بصوت يو /j/ وهو صوت ساكن فيأخذ a.' },
      { wrong: 'The childrens are in class.', correct: 'The children are in class.', reasonAr: 'كلمة children هي جمع جاهز ولا يضاف لها s.' },
    ],
    realWorldChallengeAr: 'انظر حولك واذكر 3 أشياء مفردة بأدواتها الصحيحة (a/an) وثلاثة أشياء في صيغة الجمع.',
    exercises: [
      {
        id: 'a1-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة التنكير الصحيحة لكلمة "hour" (ساعة):',
        instructionEn: 'Choose the correct article for "hour":',
        question: 'I will finish this report in _____ hour.',
        options: ['an', 'a', 'the', 'no article'],
        correctAnswer: 0,
        explanationAr: 'كلمة hour تبدأ بصوت علة متحرك لأن حرف h صامت، لذا تأخذ an.',
      },
      {
        id: 'a1-2-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة التنكير الصحيحة لكلمة "university" (جامعة):',
        instructionEn: 'Choose the correct article for "university":',
        question: 'She wants to study at _____ university in London.',
        options: ['a', 'an', 'the', 'some'],
        correctAnswer: 0,
        explanationAr: 'كلمة university تبدأ بصوت شبه ساكن /j/ (يو)، لذا تأخذ a وليس an.',
      },
      {
        id: 'a1-2-ex-3',
        type: 'fill_blank',
        instructionAr: 'اكتب جمع كلمة "child" (طفل):',
        instructionEn: 'Type the plural form of "child":',
        question: 'One child, but three ______ are playing in the garden.',
        correctAnswer: ['children', 'Children'],
        explanationAr: 'جمع child هو جمع شاذ يكتب children بدون s.',
      },
      {
        id: 'a1-2-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما هو جمع كلمة "box" (صندوق)؟',
        instructionEn: 'What is the plural of "box"?',
        question: 'Choose the correct plural form of "box":',
        options: ['boxes', 'boxs', 'boxies', 'boxen'],
        correctAnswer: 0,
        explanationAr: 'الكلمات التي تنتهي بـ x يضاف لها es في الجمع: boxes.',
      },
      {
        id: 'a1-2-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات التالية لتكوين جملة إنجليزية سليمة:',
        instructionEn: 'Arrange the words to form a correct sentence:',
        question: 'museum / visited / people / Many / the',
        correctAnswer: 'Many people visited the museum',
        explanationAr: 'الترتيب: Many people (الفاعل) ثم visited (الفعل) ثم the museum (المفعول به).',
      },
      {
        id: 'a1-2-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في جمع كلمة person (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the incorrect plural:',
        question: 'There are five persons in the waiting room.',
        correctAnswer: ['people', 'People'],
        explanationAr: 'الجمع الطبيعي والشائع لكلمة person هو people.',
      },
      {
        id: 'a1-2-ex-7',
        type: 'multiple_choice',
        instructionAr: 'متى نستخدم أداة التعريف "The"؟',
        instructionEn: 'When do we use the definite article "The"?',
        question: 'We use "The" when:',
        options: [
          'الشيء محدد ومعروف للمستمع أو مكرر ذكره',
          'قبل أي اسم مفرد نكرة للمرة الأولى',
          'قبل أسماء الأشخاص مثل The Ahmed',
          'قبل الأرقام دائماً',
        ],
        correctAnswer: 0,
        explanationAr: 'نستخدم The للتعريف والتحديد لشيء يعلمه السامع أو شيء فريد في الكون.',
      },
      {
        id: 'a1-2-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم العبارة: "تفاحة وموزة":',
        instructionEn: 'Translate: "تفاحة وموزة":',
        question: 'Translate: "تفاحة وموزة"',
        correctAnswer: ['An apple and a banana', 'an apple and a banana'],
        explanationAr: 'نستخدم an مع apple لأنها تبدأ بعلة، و a مع banana لأنها تبدأ بساكن.',
      },
    ],
  },
  {
    id: 'lesson-a1-3-present-simple',
    level: 'A1',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الأفعال والأزمنة اليومية',
    chapterTitleEn: 'Chapter 2: Daily Verbs & Core Tenses',
    titleAr: 'الدرس 3: زمن المضارع البسيط والعادات اليومية (Present Simple)',
    titleEn: 'Lesson 3: The Present Simple Tense & Daily Routines',
    category: 'قواعد وأزمنة (A1)',
    iconName: 'Clock',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن الحقائق الثابتة والروتين اليومي باستخدام المضارع البسيط.',
      'إتقان إضافة -s / -es / -ies مع ضمائر المفرد الغائب (He, She, It).',
      'صياغة النفي بدقة تامة باستخدام don\'t و doesn\'t.',
      'تكوين الأسئلة باستخدام الأفعال المساعدة Do و Does.',
    ],
    explanationMarkdownAr: `### زمن المضارع البسيط (The Present Simple)

#### 1. متى نستخدم المضارع البسيط؟
نستخدمه للتعبير عن:
1. **الروتين والعادات اليومية**: *I wake up at 7:00 AM every day.*
2. **الحقائق العلمية الثابتة**: *The earth revolves around the sun.*
3. **الأوضاع الدائمة**: *She lives in Riyadh and works as a doctor.*

#### 2. التكوين في الإثبات (Affirmative)
- مع ضمائر الجمع والمتكلم (**I, You, We, They**): نضع **مصدر الفعل المجرد** دون أي إضافة:
  - *I work in an office.*
  - *They speak English fluently.*
- مع ضمائر المفرد الغائب (**He, She, It** أو أي فاعل مفرد مثل Omar / My father): نضيف **-s** أو **-es** للفعل:
  - *He work**s** in a bank.*
  - *She watch**es** educational videos.*
  - *He stud**ies** hard.* (إذا انتهى بحرف y قبله ساكن يتحول إلى -ies).

#### 3. النفي (Negative)
نستخدم الفعلين المساعدين **don't** و **doesn't** ثم **مصدر الفعل مجرداً**:
- *I **don't** drink coffee at night.*
- *He **doesn't** like spicy food.* *(انتبه: بعد doesn't نحذف الـ s من الفعل!).*

#### 4. السؤال (Questions with Do / Does)
\`\`\`
Do    + (I / you / we / they) + Base Verb ... ? -> Do you speak English?
Does  + (he / she / it)       + Base Verb ... ? -> Does he live here?
\`\`\``,
    rulesAndStructuresAr: `قاعدة الإثبات: I/You/We/They + Verb. He/She/It + Verb-s. النفي: I/You/We/They + don't + Verb. He/She/It + doesn't + Verb (يعود مجرداً). السؤال: Do/Does + Subject + Base Verb? كلمات دالة: always, usually, often, sometimes, never, every day.`,
    summaryAr: 'المضارع البسيط للعادات والحقائق. أضف -s فقط مع He, She, It. انفي بـ don\'t أو doesn\'t، وتذكر أن s الفعل تحذف بعد doesn\'t و does.',
    arabicContrastPoint: {
      titleAr: 'نسيان حرف S مع المفرد الغائب',
      descriptionAr: 'في العربية الفعل يتغير ببادئة مثل "يعمل / تعمل"، بينما في الإنجليزية الخطأ الأكثر شيوعاً هو نسيان s مع He و She فيقول المتعلم: "He work" والصواب: "He works".',
      badArabicHabit: 'My brother live in Dubai. / He speak English.',
      correctEnglishWay: 'My brother lives in Dubai. / He speaks English.',
    },
    examples: [
      { en: 'My sister works at a technology firm.', ar: 'أختي تعمل في شركة تقنية.', phoneticAr: 'مَاي سِيستَر وِيركْس أَت أَ تِكْنُولُوجِي فِيرم' },
      { en: 'They do not drink coffee in the evening.', ar: 'هم لا يشربون القهوة في المساء.', phoneticAr: 'ذَي دُو نُوت دْرِينك كُوفِي إِن ذي إِيڤْنِينْج' },
      { en: 'Does he commute to work by train?', ar: 'هل يتنقل إلى العمل بالقطار؟', phoneticAr: 'دَاز هِي كُومْيُوت تُو وِيرك بَاي تْرَيْن؟' },
      { en: 'Water boils at 100 degrees Celsius.', ar: 'يغلي الماء عند 100 درجة مئوية.', phoneticAr: 'وَاتَر بُويْلز أَت وَان هَانْدْرِد دِيجْرِيز' },
    ],
    vocabulary: [
      { word: 'Commute', ipa: '/kəˈmjuːt/', partOfSpeech: 'verb', meaningAr: 'يسافر يومياً للعمل / يتنقل', exampleEn: 'He commutes to work by car.', exampleAr: 'يتنقل إلى عمله بالسيارة.' },
      { word: 'Usually', ipa: '/ˈjuː.ʒu.ə.li/', partOfSpeech: 'adverb', meaningAr: 'عادةً', exampleEn: 'I usually wake up early.', exampleAr: 'أنا أستيقظ مبكراً عادةً.' },
      { word: 'Always', ipa: '/ˈɔːl.weɪz/', partOfSpeech: 'adverb', meaningAr: 'دائماً', exampleEn: 'She always arrives on time.', exampleAr: 'هي تصل دائماً في الموعد.' },
      { word: 'Live', ipa: '/lɪv/', partOfSpeech: 'verb', meaningAr: 'يعيش / يقيم', exampleEn: 'Where do you live?', exampleAr: 'أين تعيش؟' },
      { word: 'Work', ipa: '/wɝːk/', partOfSpeech: 'verb & noun', meaningAr: 'يعمل / عمل', exampleEn: 'They work diligently.', exampleAr: 'هم يعملون بجد واجتهاد.' },
    ],
    commonMistakes: [
      { wrong: 'He live in Cairo.', correct: 'He lives in Cairo.', reasonAr: 'الفاعل المفرد He يتطلب إضافة s للفعل في المضارع البسيط.' },
      { wrong: 'She doesn\'t likes tea.', correct: 'She doesn\'t like tea.', reasonAr: 'بعد doesn\'t يعود الفعل إلى أصله المجرد بدون s.' },
      { wrong: 'Do he speak English?', correct: 'Does he speak English?', reasonAr: 'مع المفرد الغائب he نستخدم الفعل المساعد Does وليس Do.' },
    ],
    realWorldChallengeAr: 'اكتب أو قل بصوت مسموع 3 جمل تصف بها روتينك الصباحي اليومي مستخدماً المضارع البسيط.',
    exercises: [
      {
        id: 'a1-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر التصريف الصحيح للفعل مع الفاعل المفرد الغائب:',
        instructionEn: 'Choose the correct verb form for the third-person singular:',
        question: 'My father _____ to work by car every morning.',
        options: ['goes', 'go', 'is go', 'going'],
        correctAnswer: 0,
        explanationAr: 'الفاعل My father مفرد غائب، فنضيف es للفعل go ليصبح goes.',
      },
      {
        id: 'a1-3-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة النفي الصحيحة لجملة "He works in a hospital":',
        instructionEn: 'Choose the correct negative form:',
        question: 'He _____ in a hospital.',
        options: ['doesn\'t work', 'doesn\'t works', 'don\'t work', 'not works'],
        correctAnswer: 0,
        explanationAr: 'نستخدم doesn\'t مع الفاعل He ويتبعها الفعل في المصدر المجرد work بدون s.',
      },
      {
        id: 'a1-3-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل السؤال باستخدام الفعل المساعد الصحيح (Do أو Does):',
        instructionEn: 'Fill in the correct auxiliary verb (Do or Does):',
        question: '______ you drink green tea in the morning?',
        correctAnswer: ['Do', 'do'],
        explanationAr: 'مع ضمير المخاطب you نستخدم الفعل المساعد Do للسؤال.',
      },
      {
        id: 'a1-3-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من الأخطاء النحوية:',
        instructionEn: 'Choose the grammatically correct sentence:',
        question: 'Which sentence is completely correct?',
        options: [
          'She speaks three languages fluently.',
          'She speak three languages fluently.',
          'She is speak three languages fluently.',
          'She doesn\'t speaks three languages fluently.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة تماماً لوجود s المفرد الغائب مع الفعل speaks.',
      },
      {
        id: 'a1-3-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة روتين صحيحة:',
        instructionEn: 'Arrange the words to form a correct sentence:',
        question: 'every / walk / We / park / in / the / morning',
        correctAnswer: 'We walk in the park every morning',
        explanationAr: 'الترتيب: We (الفاعل) ثم walk (الفعل) ثم in the park (المكان) ثم every morning (الزمان).',
      },
      {
        id: 'a1-3-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ النحوي (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the verb mistake:',
        question: 'He doesn\'t likes watching television.',
        correctAnswer: ['like', 'Like'],
        explanationAr: 'بعد doesn\'t يجب تجريد الفعل من حرف الـ s ليصبح like.',
      },
      {
        id: 'a1-3-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما الفعل المساعد المناسب مع "Sara" في السؤال؟',
        instructionEn: 'Which auxiliary verb is used with "Sara"?',
        question: '_____ Sara study computer science?',
        options: ['Does', 'Do', 'Is', 'Are'],
        correctAnswer: 0,
        explanationAr: 'سارة مفرد غائب، لذا نستخدم معها Does في السؤال.',
      },
      {
        id: 'a1-3-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "أنا لا أحب القهوة الساخنة":',
        instructionEn: 'Translate: "أنا لا أحب القهوة الساخنة":',
        question: 'Translate: "أنا لا أحب القهوة الساخنة"',
        correctAnswer: ['I do not like hot coffee', 'I don\'t like hot coffee', 'i do not like hot coffee', 'i don\'t like hot coffee'],
        explanationAr: 'الترجمة الصحيحة: I do not like (أو don\'t like) hot coffee.',
      },
    ],
  },
  {
    id: 'lesson-a1-4-wh-questions',
    level: 'A1',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الأفعال والأزمنة اليومية',
    chapterTitleEn: 'Chapter 2: Daily Verbs & Core Tenses',
    titleAr: 'الدرس 4: أدوات الاستفهام وتكوين الأسئلة (Wh- Questions)',
    titleEn: 'Lesson 4: Wh- Question Words & Sentence Inversion',
    category: 'قواعد ومحادثة (A1)',
    iconName: 'HelpCircle',
    estimatedMinutes: 15,
    objectivesAr: [
      'حفظ واستخدام أدوات الاستفهام: Who, What, Where, When, Why, How.',
      'إتقان معادلة بناء السؤال الإنجليزي (أداة الاستفهام + فعل مساعد + فاعل + فعل أساسي).',
      'السؤال عن الأماكن، الأسعار، والمواعيد في المحادثات الواقعية.',
      'تجنب الترتيب الخاطئ لكلمات السؤال الشائع عند المبتدئين.',
    ],
    explanationMarkdownAr: `### أدوات الاستفهام وتكوين السؤال الإنجليزي

#### 1. أدوات الاستفهام الرئيسية (The Wh- Words)
- **What** (ماذا / ما): للأشياء والمعلومات -> *What is your name?*
- **Where** (أين): للأماكن والاتجاهات -> *Where do you live?*
- **When** (متى): للأوقات والتواريخ -> *When does the train arrive?*
- **Why** (لماذا): للأسباب -> *Why do you learn English?*
- **Who** (مَن): للأشخاص والفاعلين -> *Who is that man?*
- **How** (كيف): للكيفية والحال -> *How do you go to work?*
- **How much** (كم السعر / كم الكمية) -> *How much is this bag?*
- **How many** (كم العدد) -> *How many brothers do you have?*

#### 2. المعادلة الذهبية لبناء أي سؤال إنجليزي
\`\`\`
[أداة الاستفهام] + [فعل مساعد] + [الفاعل] + [الفعل الأساسي] + [التكملة] ؟
  Wh- Word     +  Auxiliary   + Subject  +   Base Verb   +    Rest    ?
\`\`\`
- **أمثلة على المعادلة**:
  - *Where* (أداة) + *do* (مساعد) + *you* (فاعل) + *work* (أساسي) ؟ -> **Where do you work?**
  - *When* (أداة) + *does* (مساعد) + *the store* (فاعل) + *open* (أساسي) ؟ -> **When does the store open?**

#### 3. السؤال مع فعل الكينونة To Be
إذا كان الفعل الرئيسي في الجملة هو am/is/are، فلا نحتاج لفعل مساعد إضافي؛ نعكس فقط:
- *Where is the airport?* (أين يقع المطار؟)
- *Why are they late?* (لماذا هم متأخرون؟)`,
    rulesAndStructuresAr: `معادلة السؤال: Wh- + (do/does/is/are) + Subject + Verb? بعد do و does يعود الفعل الأساسي للمصدر المجرد. للسؤال عن غير العاقل What، والمكان Where، والزمان When، والشخص Who، والسبب Why، والكيفية How.`,
    summaryAr: 'لبناء سؤال إنجليزي صحيح، ضع أداة الاستفهام أولاً، ثم الفعل المساعد (do/does/is/are)، ثم الفاعل، ثم الفعل المجرد.',
    arabicContrastPoint: {
      titleAr: 'فخ ترتيب السؤال بدون فعل مساعد',
      descriptionAr: 'في العربية نسأل: "أين أنت تسكن؟" فيترجم المتعلم حرفياً: "Where you live?" بدون الفعل المساعد do. المعادلة الإنجليزية تفرض: "Where DO you live?".',
      badArabicHabit: 'Where you go? / What she want?',
      correctEnglishWay: 'Where do you go? / What does she want?',
    },
    examples: [
      { en: 'Where do you work during the week?', ar: 'أين تعمل خلال أيام الأسبوع؟', phoneticAr: 'وَيْر دُو يُو وِيرك دْيُورِينْج ذَا وِيك؟' },
      { en: 'What does this English word mean?', ar: 'ماذا تعني هذه الكلمة الإنجليزية؟', phoneticAr: 'وَات دَاز ذِس إِنْجْلِش وِيرد مِين؟' },
      { en: 'How much does this hotel room cost?', ar: 'كم تكلفة هذه الغرفة الفندقية؟', phoneticAr: 'هَاوْ مَاتْش دَاز ذِس هُوتِل رُوم كُوسْت؟' },
      { en: 'Why are you learning English now?', ar: 'لماذا تتعلم اللغة الإنجليزية الآن؟', phoneticAr: 'وَايْ آر يُو لِيرْنِينْج إِنْجْلِش نَاوْ؟' },
    ],
    vocabulary: [
      { word: 'Where', ipa: '/wer/', partOfSpeech: 'adverb', meaningAr: 'أين (للمكان)', exampleEn: 'Where is the exit?', exampleAr: 'أين المخرج؟' },
      { word: 'When', ipa: '/wen/', partOfSpeech: 'adverb', meaningAr: 'متى (للزمان)', exampleEn: 'When does the class start?', exampleAr: 'متى يبدأ الدرس؟' },
      { word: 'Why', ipa: '/waɪ/', partOfSpeech: 'adverb', meaningAr: 'لماذا (للسبب)', exampleEn: 'Why are you smiling?', exampleAr: 'لماذا تبتسم؟' },
      { word: 'Airport', ipa: '/ˈer.pɔːrt/', partOfSpeech: 'noun', meaningAr: 'مطار', exampleEn: 'How do I reach the airport?', exampleAr: 'كيف أصل إلى المطار؟' },
      { word: 'Cost', ipa: '/kɑːst/', partOfSpeech: 'verb & noun', meaningAr: 'يكلف / تكلفة', exampleEn: 'How much does it cost?', exampleAr: 'كم يكلف هذا؟' },
    ],
    commonMistakes: [
      { wrong: 'Where you work?', correct: 'Where do you work?', reasonAr: 'لا يمكن تكوين سؤال في المضارع البسيط دون الفعل المساعد do.' },
      { wrong: 'What does she wants?', correct: 'What does she want?', reasonAr: 'بعد الفعل المساعد does، يعود الفعل الأساسي للمصدر want بدون s.' },
      { wrong: 'How many cost this ticket?', correct: 'How much does this ticket cost?', reasonAr: 'للسؤال عن السعر نستخدم How much وليس How many.' },
    ],
    realWorldChallengeAr: 'اطرح 3 أسئلة مختلفة على زميلك أو صديقك باستخدام Where و When و Why.',
    exercises: [
      {
        id: 'a1-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة نحوياً للسؤال عن مكان السكن:',
        instructionEn: 'Choose the grammatically correct question:',
        question: 'Which question follows correct English word order?',
        options: [
          'Where do you live?',
          'Where you live?',
          'Where you do live?',
          'Where live you?',
        ],
        correctAnswer: 0,
        explanationAr: 'المعادلة الإنجليزية الصحيحة: Wh-word (Where) + Auxiliary (do) + Subject (you) + Verb (live)?',
      },
      {
        id: 'a1-4-ex-2',
        type: 'multiple_choice',
        instructionAr: 'أي أداة استفهام نستخدمها للسؤال عن سبب حدوث شيء؟',
        instructionEn: 'Which question word asks about the reason?',
        question: '_____ are you late for the meeting today?',
        options: ['Why', 'Where', 'Who', 'What'],
        correctAnswer: 0,
        explanationAr: 'الأداة Why تسأل عن السبب والتعليل.',
      },
      {
        id: 'a1-4-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة السؤال عن السعر والتكلفة:',
        instructionEn: 'Fill in the question word for price:',
        question: 'How ______ does this cup of coffee cost?',
        correctAnswer: ['much', 'Much'],
        explanationAr: 'للسؤال عن الأسعار نستخدم العبارة: How much.',
      },
      {
        id: 'a1-4-ex-4',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين سؤال عن موعد وصول الطائرة:',
        instructionEn: 'Arrange the words to form a correct question:',
        question: 'the / arrive / does / plane / When / ?',
        correctAnswer: 'When does the plane arrive?',
        explanationAr: 'الترتيب: When + does + the plane + arrive?',
      },
      {
        id: 'a1-4-ex-5',
        type: 'multiple_choice',
        instructionAr: 'اختر التكملة الصحيحة للسؤال مع المفرد الغائب (he):',
        instructionEn: 'Choose the correct verb form in the question:',
        question: 'What does he _____ in his free time?',
        options: ['do', 'does', 'doing', 'did'],
        correctAnswer: 0,
        explanationAr: 'بعد الفعل المساعد does، يأتي الفعل الأساسي في المصدر المجرد do.',
      },
      {
        id: 'a1-4-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في السؤال (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the verb in the question:',
        question: 'Where does your brother works?',
        correctAnswer: ['work', 'Work'],
        explanationAr: 'بعد does يحذف حرف s من الفعل ويعود للمصدر work.',
      },
      {
        id: 'a1-4-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي سؤال يُستخدم لمعرفة هوية شخص ما؟',
        instructionEn: 'Which question asks about identity?',
        question: '_____ is that new manager standing over there?',
        options: ['Who', 'What', 'Where', 'When'],
        correctAnswer: 0,
        explanationAr: 'الأداة Who تسأل عن الأشخاص والهويات.',
      },
      {
        id: 'a1-4-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم السؤال: "أين يقع المطار من فضلك؟":',
        instructionEn: 'Translate: "أين يقع المطار من فضلك؟":',
        question: 'Translate: "أين يقع المطار من فضلك؟"',
        correctAnswer: ['Where is the airport please?', 'Where is the airport, please?', 'where is the airport please'],
        explanationAr: 'الترجمة الصحيحة: Where is the airport, please?',
      },
    ],
  },
  {
    id: 'lesson-a1-5-present-continuous-basics',
    level: 'A1',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: الأفعال المستمرة والمراجعة',
    chapterTitleEn: 'Chapter 3: Continuous Actions & Assessment',
    titleAr: 'الدرس 5: زمن المضارع المستمر للأحداث الحالية (Present Continuous)',
    titleEn: 'Lesson 5: The Present Continuous for Actions Happening Now',
    category: 'قواعد وأزمنة (A1)',
    iconName: 'Activity',
    estimatedMinutes: 15,
    objectivesAr: [
      'التعبير عن الأفعال التي تقع في لحظة التحدث بالذات.',
      'تطبيق تركيبة المضارع المستمر بدقة: am / is / are + verb-ing.',
      'معرفة القواعد الإملائية لإضافة -ing (حذف e الصامتة ومضاعفة الساكن).',
      'التمييز السريع بين العادة اليومية (Simple) والحدث الحالي (Continuous).',
    ],
    explanationMarkdownAr: `### زمن المضارع المستمر (The Present Continuous)

#### 1. متى نستخدم المضارع المستمر؟
نستخدمه عندما يقع الحدث **الآن، في هذه اللحظة بالذات**، أثناء كلامك:
- *I am reading an English lesson right now.* (أنا أقرأ درساً في الإنجليزية الآن.)
- *Look! It is raining outside.* (انظر! إنها تمطر بالخارج.)

#### 2. معادلة التكوين الإلزامية:
\`\`\`
Subject + [am / is / are] + [Verb-ing]
\`\`\`
- **I** -> **am** studying.
- **He / She / It** -> **is** sleeping.
- **You / We / They** -> **are** listening.
> **تحذير**: لا تنسَ فعل الكينونة قبل الـ -ing! جملة "I studying" خاطئة تماماً؛ الصواب هو: **I am studying**.

#### 3. القواعد الإملائية لإضافة -ing:
1. **القاعدة العامة**: نضيف -ing مباشرة: *read -> reading* / *learn -> learning*.
2. **حذف e الصامتة في النهاية**: *write -> writ**ing*** / *make -> mak**ing*** / *drive -> driv**ing***.
3. **مضاعفة الحرف الأخير**: إذا انتهى الفعل بـ (حرف ساكن قبله حرف متحرك واحد في مقطع صوتي قصير)، نضاعف الساكن:
   - *run -> runn**ing*** / *swim -> swimm**ing*** / *sit -> sitt**ing***.

#### 4. الكلمات الدالة الشائعة (Time Keywords):
- **now** (الآن)
- **right now** (في هذه اللحظة تحديداً)
- **at the moment** (في هذا الوقت)
- **Look!** (انظر!) / **Listen!** (استمع!)`,
    rulesAndStructuresAr: `التكوين: Subject + (am/is/are) + Verb-ing. النفي: Subject + (am/is/are) + not + Verb-ing. السؤال: (Am/Is/Are) + Subject + Verb-ing? احذف e الصامتة قبل -ing (writing). ضاعف الحرف الأخير في الأفعال القصيرة (running).`,
    summaryAr: 'المضارع المستمر للأحداث الجارية الآن. يتكون دائماً من جزءين متلازمين: فعل كينونة (am/is/are) متبوعاً بالفعل مضافاً له -ing.',
    arabicContrastPoint: {
      titleAr: 'نسيان فعل الكينونة قبل الـ -ing',
      descriptionAr: 'من أكثر الأخطاء تكراراً عند العرب قول: "I waiting for you" دون am. في الإنجليزية الـ -ing لا تقف بمفردها كفعل، بل تحتاج دائماً لـ am/is/are.',
      badArabicHabit: 'I studying now. / She watching TV.',
      correctEnglishWay: 'I am studying now. / She is watching TV.',
    },
    examples: [
      { en: 'I am preparing my presentation right now.', ar: 'أنا أجهز عرضي التقديمي في هذه اللحظة.', phoneticAr: 'آيْ آمْ بْرِيبِيرِينْج مَاي بْرِيزِنْتَيْشَن رَايْت نَاوْ' },
      { en: 'Listen! Someone is knocking on the door.', ar: 'استمع! هناك شخص يطرق على الباب.', phoneticAr: 'لِيسِن! سَامْوَان إِز نُوكِينْج أُون ذَا دُور' },
      { en: 'Are you working on the new website today?', ar: 'هل تعمل على الموقع الجديد اليوم؟', phoneticAr: 'آر يُو وِيركِينْج أُون ذَا نْيُو وِيبْسَايْت تُودَاي؟' },
      { en: 'They are not sleeping; they are studying.', ar: 'هم لا ينامون؛ بل يدرسون.', phoneticAr: 'ذَي آر نُوت سْلِيبِينْج، ذَي آر سْتَادِيِينْج' },
    ],
    vocabulary: [
      { word: 'Knock', ipa: '/nɑːk/', partOfSpeech: 'verb', meaningAr: 'يطرق الباب (حرف K صامت)', exampleEn: 'Someone is knocking on the door.', exampleAr: 'أحدهم يطرق الباب.' },
      { word: 'Listen', ipa: '/ˈlɪs.ən/', partOfSpeech: 'verb', meaningAr: 'يستمع (حرف T صامت)', exampleEn: 'Listen carefully to the teacher.', exampleAr: 'استمع باهتمام للمعلم.' },
      { word: 'Prepare', ipa: '/prɪˈper/', partOfSpeech: 'verb', meaningAr: 'يعد / يجهز', exampleEn: 'I am preparing breakfast.', exampleAr: 'أنا أعد الفطور.' },
      { word: 'Now', ipa: '/naʊ/', partOfSpeech: 'adverb', meaningAr: 'الآن', exampleEn: 'What are you doing now?', exampleAr: 'ماذا تفعل الآن؟' },
      { word: 'Moment', ipa: '/ˈmoʊ.mənt/', partOfSpeech: 'noun', meaningAr: 'لحظة زمنية', exampleEn: 'He is busy at the moment.', exampleAr: 'هو مشغول في هذه اللحظة.' },
    ],
    commonMistakes: [
      { wrong: 'I waiting for the train.', correct: 'I am waiting for the train.', reasonAr: 'لا يمكن استخدام -ing دون فعل الكينونة am قبله.' },
      { wrong: 'She is writeing an email.', correct: 'She is writing an email.', reasonAr: 'تحذف حرف e الصامتة في نهاية write قبل إضافة -ing.' },
      { wrong: 'He is runing in the park.', correct: 'He is running in the park.', reasonAr: 'يضاعف حرف n في الفعل run لأنه مقطع قصير مسبوق بمتحرك.' },
    ],
    realWorldChallengeAr: 'صف بالإنجليزية ما تفعله أنت أو من حولك في هذه اللحظة مستخدماً جملتين بالمضارع المستمر.',
    exercises: [
      {
        id: 'a1-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة للتعبير عن حدث يقع في هذه اللحظة (right now):',
        instructionEn: 'Choose the correct continuous form:',
        question: 'Please be quiet. The baby _____ right now.',
        options: ['is sleeping', 'sleeps', 'sleeping', 'is sleep'],
        correctAnswer: 0,
        explanationAr: 'الحدث يقع الآن والفاعل The baby مفرد فيأخذ is sleeping.',
      },
      {
        id: 'a1-5-ex-2',
        type: 'multiple_choice',
        instructionAr: 'ما هو الهجاء الصحيح للفعل "write" بعد إضافة -ing؟',
        instructionEn: 'What is the correct spelling of "write + ing"?',
        question: 'He is _____ an urgent report.',
        options: ['writing', 'writeing', 'writting', 'writeng'],
        correctAnswer: 0,
        explanationAr: 'تحذف الـ e الصامتة في نهاية write قبل إضافة ing: writing.',
      },
      {
        id: 'a1-5-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل الجملة بفعل الكينونة المناسب الناقص:',
        instructionEn: 'Fill in the missing auxiliary verb to be:',
        question: 'We ______ learning English together at the moment.',
        correctAnswer: ['are', 'Are'],
        explanationAr: 'الفاعل We يأخذ فعل الكينونة are قبل الفعل المنتهي بـ -ing.',
      },
      {
        id: 'a1-5-ex-4',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة مضارع مستمر سليمة:',
        instructionEn: 'Arrange the words into a correct sentence:',
        question: 'now / a / is / novel / reading / She',
        correctAnswer: 'She is reading a novel now',
        explanationAr: 'الترتيب: She + is + reading + a novel + now.',
      },
      {
        id: 'a1-5-ex-5',
        type: 'multiple_choice',
        instructionAr: 'ما هو الهجاء الصحيح للفعل "run" مع صيغة -ing؟',
        instructionEn: 'What is the correct spelling of "run + ing"?',
        question: 'The athlete is _____ very fast.',
        options: ['running', 'runing', 'runneing', 'run'],
        correctAnswer: 0,
        explanationAr: 'يضاعف حرف n الأخير لأنه حرف ساكن مسبوق بحرف متحرك قصير: running.',
      },
      {
        id: 'a1-5-ex-6',
        type: 'error_hunt',
        instructionAr: 'أصلح النقص في الجملة (اكتب الكلمة الناقصة فقط):',
        instructionEn: 'Supply the missing word:',
        question: 'I waiting for the manager at reception.',
        correctAnswer: ['am', 'Am', "'m"],
        explanationAr: 'ينقص الجملة فعل الكينونة am لتصبح: I am waiting.',
      },
      {
        id: 'a1-5-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر السؤال الصحيح بالمضارع المستمر:',
        instructionEn: 'Choose the correct question in the present continuous:',
        question: 'Which question is grammatically flawless?',
        options: [
          'What are you doing at the moment?',
          'What you are doing at the moment?',
          'What do you doing at the moment?',
          'What are you do at the moment?',
        ],
        correctAnswer: 0,
        explanationAr: 'ترتيب السؤال: أداة الاستشهاد What + فعل الكينونة are + الفاعل you + الفعل المنتهي بـ ing.',
      },
      {
        id: 'a1-5-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "إنها تمطر بالخارج الآن":',
        instructionEn: 'Translate: "إنها تمطر بالخارج الآن":',
        question: 'Translate: "إنها تمطر بالخارج الآن"',
        correctAnswer: ['It is raining outside now', 'It is raining outside now.', "It's raining outside now"],
        explanationAr: 'الترجمة الصحيحة: It is raining outside now.',
      },
    ],
  },
  {
    id: 'lesson-a1-6-level-a1-assessment',
    level: 'A1',
    order: 6,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: الأفعال المستمرة والمراجعة',
    chapterTitleEn: 'Chapter 3: Continuous Actions & Assessment',
    titleAr: 'الدرس 6: اختبار واجتياز المستوى A1 الشامل',
    titleEn: 'Lesson 6: Level A1 Comprehensive Mastery Assessment',
    category: 'المراجعة والاختبار (A1)',
    iconName: 'Award',
    estimatedMinutes: 20,
    objectivesAr: [
      'مراجعة شاملة لجميع مخرجات المستوى A1 (To Be, Articles, Simple, Wh- Questions, Continuous).',
      'التأكد من التفرقة الدقيقة بين الفعلين المضارع البسيط والمضارع المستمر.',
      'التأكد من خلو الجمل من أخطاء حذف أفعال الكينونة وحروف الجمع الشاذة.',
      'اجتياز اختبار المستوى بنسبة تفوق 80% للتأهل للمستوى الابتدائي A2.',
    ],
    explanationMarkdownAr: `### المراجعة الشاملة لمستوى المبتدئين A1

#### خلاصة المفاهيم الجوهرية لمستوى A1:
1. **فعل الكينونة (To Be)**:
   - *I am, He/She/It is, You/We/They are*.
   - لا جملة إنجليزية بدون فعل!
2. **أدوات النكرة والتعريف (A, An, The)**:
   - *an* قبل أصوات العلة (*an hour, an apple*).
   - *a* قبل الأصوات الساكنة (*a university, a book*).
   - الجموع الشاذة: *children, people, men, women*.
3. **المضارع البسيط مقابل المضارع المستمر**:
   - **المضارع البسيط**: للعادات والحقائق (*He works every day*).
   - **المضارع المستمر**: للأحداث الجارية الآن (*He is working right now*).
4. **تكوين الأسئلة**:
   - *Wh- word + auxiliary (do/does/is/are) + subject + main verb?*

> **تعليمات الاختبار النهائي**:
> أجب عن الأسئلة العشرة التالية لتقييم تمكنك التام والانتقال رسمياً إلى المستوى **A2 (Elementary)**!`,
    rulesAndStructuresAr: `خلاصة قواعد A1: لا تحذف فعل الكينونة. اضف -s مع He/She/It في المضارع البسيط. استخدم don't/doesn't للنفي. في السؤال قدم الفعل المساعد على الفاعل.`,
    summaryAr: 'بإتقانك لمستوى A1، أصبحت قادراً على تكوين جمل سليمة نحوياً، والسؤال عن المعلومات، والتعبير عن عاداتك وأفعالك الجارية.',
    arabicContrastPoint: {
      titleAr: 'التماسك النحوي والتخلص من الأخطاء التأسيسية',
      descriptionAr: 'المستوى A1 هو الجسر الحقيقي بين معرفة الكلمات المنفصلة وبناء الجمل المركبة المتماسكة.',
      badArabicHabit: 'Leaving out verbs and articles in English sentences.',
      correctEnglishWay: 'Using complete SVO structures with proper auxiliary verbs and articles.',
    },
    examples: [
      { en: 'She is an architect and she designs beautiful houses.', ar: 'هي مهندسة معمارية وهي تصمم منازل جميلة.', phoneticAr: 'شِي إِز أَن آرْكِيتِكْت' },
      { en: 'Where does your father work every day?', ar: 'أين يعمل والدك كل يوم؟', phoneticAr: 'وَيْر دَاز يُور فَاذَر وِيرك؟' },
      { en: 'Look! The children are playing in the garden.', ar: 'انظر! الأطفال يلعبون في الحديقة.', phoneticAr: 'لُوك! ذَا تْشِيلْدْرِن آر بْلَيِينْج' },
    ],
    vocabulary: [
      { word: 'Progress', ipa: '/ˈprɑː.ɡres/', partOfSpeech: 'noun', meaningAr: 'تقدم وتطور', exampleEn: 'You have made great progress.', exampleAr: 'لقد أحرزت تقدماً رائعاً.' },
      { word: 'Confident', ipa: '/ˈkɑːn.fə.dənt/', partOfSpeech: 'adjective', meaningAr: 'واثق من نفسه', exampleEn: 'I feel confident in English now.', exampleAr: 'أشعر بالثقة في الإنجليزية الآن.' },
      { word: 'Foundation', ipa: '/faʊnˈdeɪ.ʃən/', partOfSpeech: 'noun', meaningAr: 'أساس متين', exampleEn: 'A solid grammar foundation is key.', exampleAr: 'الأساس القواعدي المتين هو المفتاح.' },
    ],
    commonMistakes: [
      { wrong: 'Where you going?', correct: 'Where are you going?', reasonAr: 'في السؤال بالمضارع المستمر نحتاج إلى are قبل you.' },
      { wrong: 'He doesn\'t plays football.', correct: 'He doesn\'t play football.', reasonAr: 'يعود الفعل للمصدر المجرد بعد doesn\'t.' },
    ],
    realWorldChallengeAr: 'اكتب فقرة من 4 جمل تعرف فيها بنفسك وعملك وروتينك وما تفعله اليوم.',
    exercises: [
      {
        id: 'a1-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من الأخطاء النحوية والإملائية:',
        instructionEn: 'Choose the grammatically flawless sentence:',
        question: 'Which sentence is completely correct?',
        options: [
          'My brother is an engineer in Riyadh.',
          'My brother engineer in Riyadh.',
          'My brother is a engineer in Riyadh.',
          'My brother are an engineer in Riyadh.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة تماماً: فاعل مفرد + فعل الكينونة is + أداة an قبل engineer المبدوءة بصوت علة.',
      },
      {
        id: 'a1-6-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر زمن الفعل الصحيح مع الدلالة الزمنية "every Friday":',
        instructionEn: 'Choose the correct tense for a recurring routine:',
        question: 'Omar _____ football with his friends every Friday.',
        options: ['plays', 'is playing', 'play', 'playing'],
        correctAnswer: 0,
        explanationAr: 'الحدث روتين متكرر (every Friday) والفاعل مفرد (Omar)، فنستخدم المضارع البسيط plays.',
      },
      {
        id: 'a1-6-ex-3',
        type: 'multiple_choice',
        instructionAr: 'اختر زمن الفعل المناسب مع الدلالة "at the moment":',
        instructionEn: 'Choose the correct tense for an action happening now:',
        question: 'Look! The students _____ an exam at the moment.',
        options: ['are taking', 'take', 'takes', 'taking'],
        correctAnswer: 0,
        explanationAr: 'الدلالة at the moment تشير للمضارع المستمر، والفاعل جمع students فيأخذ are taking.',
      },
      {
        id: 'a1-6-ex-4',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة السؤال الناقصة للسؤال عن المكان:',
        instructionEn: 'Fill in the missing question word for location:',
        question: '______ do you buy your groceries from?',
        correctAnswer: ['Where', 'where'],
        explanationAr: 'نستخدم Where للسؤال عن الأماكن.',
      },
      {
        id: 'a1-6-ex-5',
        type: 'multiple_choice',
        instructionAr: 'أي من الأسماء التالية يعتبر جمعاً شاذاً صحيحاً؟',
        instructionEn: 'Which is a correct irregular plural noun?',
        question: 'Select the correct plural form:',
        options: ['children', 'childs', 'childrens', 'childes'],
        correctAnswer: 0,
        explanationAr: 'جمع child هو children بدون أي إضافات.',
      },
      {
        id: 'a1-6-ex-6',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة نفي سليمة:',
        instructionEn: 'Arrange the words into a correct negative sentence:',
        question: 'coffee / drink / not / in / evening / I / do / the',
        correctAnswer: 'I do not drink coffee in the evening',
        explanationAr: 'الترتيب: I + do not + drink + coffee + in the evening.',
      },
      {
        id: 'a1-6-ex-7',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ الإملائي في أداة التنكير (اكتب الأداة المصححة فقط):',
        instructionEn: 'Correct the article mistake:',
        question: 'We need a umbrella because it is raining.',
        correctAnswer: ['an', 'An'],
        explanationAr: 'كلمة umbrella تبدأ بصوت علة متحرك /ʌ/ فتأخذ an وليس a.',
      },
      {
        id: 'a1-6-ex-8',
        type: 'multiple_choice',
        instructionAr: 'ما هو السؤال الصحيح لسؤال شخص عن موعد استيقاظه؟',
        instructionEn: 'Choose the correct question about waking up time:',
        question: 'Which question follows correct grammar?',
        options: [
          'What time do you wake up in the morning?',
          'What time you wake up in the morning?',
          'What time are you wake up in the morning?',
          'What time does you wake up in the morning?',
        ],
        correctAnswer: 0,
        explanationAr: 'صيغة السؤال الصحيحة: What time + do + you + wake up?',
      },
      {
        id: 'a1-6-ex-9',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف الفعل بعد أداة النفي "doesn\'t":',
        instructionEn: 'Choose the verb form following "doesn\'t":',
        question: 'She doesn\'t _____ spicy food.',
        options: ['like', 'likes', 'liking', 'is like'],
        correctAnswer: 0,
        explanationAr: 'بعد doesn\'t يعود الفعل إلى أصله المجرد like.',
      },
      {
        id: 'a1-6-ex-10',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "هم يعيشون في منزل كبير":',
        instructionEn: 'Translate: "هم يعيشون في منزل كبير":',
        question: 'Translate: "هم يعيشون في منزل كبير"',
        correctAnswer: ['They live in a big house', 'They live in a big house.', 'they live in a big house'],
        explanationAr: 'الترجمة الصحيحة: They live in a big house مع تقديم الصفة big على house.',
      },
    ],
  },
];
