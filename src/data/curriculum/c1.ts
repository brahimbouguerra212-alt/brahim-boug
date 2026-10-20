import type { Lesson } from '../../types/learning.ts';

export const C1_LESSONS: Lesson[] = [
  {
    id: 'lesson-c1-1-negative-inversion',
    level: 'C1',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: التراكيب البلاغية والقلب النحوي المتقدم',
    chapterTitleEn: 'Chapter 1: Rhetorical Inversion & Syntactic Mastery',
    titleAr: 'الدرس 1: القلب النحوي بعد عبارات النفي والحصر (Negative Inversion)',
    titleEn: 'Lesson 1: Negative Inversion & Rhetorical Emphasis',
    category: 'قواعد متقدمة وبلاغة (C1)',
    iconName: 'Zap',
    estimatedMinutes: 20,
    objectivesAr: [
      'فهم الغرض البلاغي من القلب النحوي (Inversion) لإضفاء نبرة الخطابة والوقار الأكاديمي.',
      'تطبيق قاعدة تقديم الفعل المساعد على الفاعل بعد: Not only, Seldom, Rarely, Never, Scarcely.',
      'إتقان عبارات الحصر والتحذير القانوني الصارم: Under no circumstances, On no account, At no time.',
      'صياغة خطب عروض استثمارية ومقالات افتتاحية بليغة تأسر القارئ والمستمع.',
    ],
    explanationMarkdownAr: `### القلب النحوي البلاغي (Negative Inversion)

#### 1. ما هو القلب النحوي (Inversion)؟
في اللغة الإنجليزية الاعتيادية، تبدأ الجملة بالفاعل ثم الفعل: *We rarely see such innovation.*
ولكن في الخطاب الأكاديمي والسياسي والتنفيذي الرفيع، عندما نريد **توكيد المعنى وإضفاء جرس بلاغي مؤثر**، نبدأ بعبارة نفي أو حصر.
وعندما تبدأ الجملة بعبارة نفي، يحدث **انقلاب نحوي يشبه تركيب السؤال تماماً**:
\`\`\`
[عبارة النفي] + [فعل مساعد Auxiliary] + [الفاعل Subject] + [الفعل الأساسي]
\`\`\`

#### 2. أشهر عبارات القلب النحوي:
1. **NOT ONLY ... BUT ALSO (ليس فقط... بل أيضاً)**:
   - عادي: *The team not only delivered on time, but they also cut costs.*
   - **بأسلوب C1 المقلوب**:
     - *Not only **did the team deliver** on time, but they also cut costs.*
2. **SELDOM / RARELY (نادراً ما...)**:
   - عادي: *We seldom witness such technological breakthroughs.*
   - **بأسلوب C1 المقلوب**:
     - *Seldom **do we witness** such profound technological breakthroughs.*
3. **NEVER / NEVER BEFORE (لم يحدث قط...)**:
   - *Never before **have international markets experienced** such rapid disruption.*
4. **NO SOONER ... THAN (ما إن... حتى...)**:
   - *No sooner **had the update been deployed** than user engagement doubled.*
5. **UNDER NO CIRCUMSTANCES (تحت أي ظرف من الظروف لا يجوز...)**:
   - صيغة قانونية وأمنية صارمة:
     - *Under no circumstances **should administrative credentials be shared**.*

#### 3. كيف تختار الفعل المساعد؟
- إذا كانت الجملة في الماضي البسيط: نستخدم **did** متبوعاً بالمصدر.
- إذا كانت في المضارع التام: نستخدم **have / has** متبوعاً بالتصريف الثالث.
- إذا كان هناك فعل ناقص (should / must / can): نضعه مباشرة قبل الفاعل.`,
    rulesAndStructuresAr: `المعادلة الصارمة: Negative Adverb + Auxiliary Verb + Subject + Main Verb. العبارات الموجبة للقلب: Not only, Seldom, Rarely, Never, Scarcely, Hardly, Under no circumstances, On no account. يعود الفعل لمصدره بعد did.`,
    summaryAr: 'القلب النحوي يبدأ بعبارة نفي ويقلب ترتيب الفاعل والمساعد كصيغة السؤال لإبراز القوة البلاغية والتوكيد الأكاديمي.',
    arabicContrastPoint: {
      titleAr: 'الحفاظ على الترتيب العادي بعد عبارات النفي المتقدمة',
      descriptionAr: 'المتعلم قد يبدأ بـ Not only لكنه ينسى قلب الترتيب النحوي فيكتب: "Not only the company expanded" وهذا خطأ فادح في C1. الصواب الحتمي: "Not only DID the company expand".',
      badArabicHabit: 'Not only they finished the project, but they won an award.',
      correctEnglishWay: 'Not only did they finish the project, but they also won an award.',
    },
    examples: [
      { en: 'Seldom has a technological breakthrough transformed global commerce so profoundly.', ar: 'نادراً ما أحدث اختراق تقني تحولاً في التجارة العالمية بمثل هذا العمق البالغ.', phoneticAr: 'سِلْدَم هَاز أَ تِكْنُولُوجِيكَل بْرَيْكثْرُو' },
      { en: 'Under no circumstances should proprietary algorithms be exposed to unverified endpoints.', ar: 'تحت أي ظرف من الظروف لا ينبغي كشف الخوارزميات الاحتكارية لواجهات برمجية غير موثقة.', phoneticAr: 'أَنْدَر نُو سِيركَمْسْتَانْسِز شُود' },
      { en: 'No sooner had the keynote concluded than institutional investors requested private briefings.', ar: 'ما إن اختتمت الكلمة الرئيسية حتى طلب المستثمرون المؤسسيون جلسات إحاطة خاصة.', phoneticAr: 'نُو سُونَار هَاد ذَا كِينُوت كُونْكْلُودِد' },
    ],
    vocabulary: [
      { word: 'Profoundly', ipa: '/prəˈfaʊnd.li/', partOfSpeech: 'adverb', meaningAr: 'بعمق بالغ وتأثير جوهري', exampleEn: 'The policy profoundly affected industry.', exampleAr: 'أثرت السياسة في الصناعة بعمق بالغ.' },
      { word: 'Proprietary', ipa: '/prəˈpraɪə.ter.i/', partOfSpeech: 'adjective', meaningAr: 'احتكاري ومملوك ملكية خاصة', exampleEn: 'Proprietary software protected by patent.', exampleAr: 'برمجيات احتكارية محمية ببراءة اختراع.' },
      { word: 'Briefing', ipa: '/ˈbriː.fɪŋ/', partOfSpeech: 'noun', meaningAr: 'جلسة إحاطة وإيجاز رسمي', exampleEn: 'The executive attended a security briefing.', exampleAr: 'حضر المدير التنفيذي جلسة إحاطة أمنية.' },
      { word: 'Disruption', ipa: '/dɪsˈrʌp.ʃən/', partOfSpeech: 'noun', meaningAr: 'زعزعة جذرية وتحول هيكلي في السوق', exampleEn: 'Digital disruption changed finance.', exampleAr: 'أحدث التحول الرقمي زعزعة هيكلية في المالية.' },
    ],
    commonMistakes: [
      { wrong: 'Not only they improved, but they also won.', correct: 'Not only did they improve, but they also won.', reasonAr: 'البدء بـ Not only يفرض القلب النحوي بتقديم did على الفاعل.' },
      { wrong: 'Under no circumstances you should sign.', correct: 'Under no circumstances should you sign.', reasonAr: 'يجب تقديم الفعل الناقص should على الفاعل you.' },
    ],
    realWorldChallengeAr: 'اكتب جملة افتتاحية لمقال تحليلي تبدأ فيها بـ "Seldom have we witnessed..." تصف بها تطوراً علمياً كبيراً.',
    exercises: [
      {
        id: 'c1-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة للقلب النحوي بعد عبارة النفي "Not only" في الماضي البسيط:',
        instructionEn: 'Choose the correct inverted auxiliary and subject after "Not only":',
        question: 'Not only _____ the revenue expectations, but they also expanded into three new markets.',
        options: ['did the founders exceed', 'the founders exceeded', 'the founders did exceed', 'exceeded the founders'],
        correctAnswer: 0,
        explanationAr: 'بعد Not only نطبق القلب النحوي بتقديم did على الفاعل the founders متبوعاً بالمصدر exceed.',
      },
      {
        id: 'c1-1-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الترتيب الصحيح بعد التحذير الأمني الصارم "Under no circumstances":',
        instructionEn: 'Choose the correct word order following "Under no circumstances":',
        question: 'Under no circumstances _____ confidential encryption keys to external contractors.',
        options: [
          'should employees disclose',
          'employees should disclose',
          'employees must disclose',
          'employees disclose should',
        ],
        correctAnswer: 0,
        explanationAr: 'يجب تقديم الفعل المساعد should على الفاعل employees: should employees disclose.',
      },
      {
        id: 'c1-1-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المساعد المناسب للقلب النحوي بعد Seldom في المضارع البسيط (do / does):',
        instructionEn: 'Fill in the inverted auxiliary after Seldom for plural subject (we):',
        question: 'Seldom ______ we encounter such visionary leadership in early-stage startups.',
        correctAnswer: ['do', 'Do'],
        explanationAr: 'مع الفاعل we في المضارع البسيط نستخدم الفعل المساعد do للقلب النحوي.',
      },
      {
        id: 'c1-1-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما التركيب الزمني المقترن بـ "No sooner ... than"؟',
        instructionEn: 'Which tense structure accompanies "No sooner had ... than"?',
        question: 'No sooner _____ the contract than unexpected legal challenges emerged.',
        options: [
          'had the parties signed',
          'the parties had signed',
          'did the parties signed',
          'have the parties signed',
        ],
        correctAnswer: 0,
        explanationAr: 'التركيبة القياسية: No sooner had the parties signed ... than.',
      },
      {
        id: 'c1-1-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة قلب نحوي بلاغية مع Rarely:',
        instructionEn: 'Arrange the words into a correct inverted sentence:',
        question: 'Rarely / witnessed / such / dedication / have / we',
        correctAnswer: 'Rarely have we witnessed such dedication',
        explanationAr: 'الترتيب: Rarely + have + we + witnessed + such dedication.',
      },
      {
        id: 'c1-1-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في الترتيب غير المقلوب بعد Never (اكتب أول 3 كلمات مصححة):',
        instructionEn: 'Correct the uninverted order after Never before:',
        question: 'Never before I have seen such an ambitious architectural vision.',
        correctAnswer: ['have I seen', 'Have I seen', 'have i seen'],
        explanationAr: 'يجب قلب الترتيب لتقديم الفعل المساعد have على الضمير: have I seen.',
      },
      {
        id: 'c1-1-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما هو الأثر الأسلوبي الأساسي لاستخدام Negative Inversion في الإنجليزية المتقدمة؟',
        instructionEn: 'What is the stylistic primary purpose of negative inversion?',
        question: 'Negative inversion is utilized primarily to:',
        options: [
          'create rhetorical emphasis and formal stylistic gravitas',
          'confuse foreign speakers in everyday casual chatter',
          'simplify grammar rules for elementary students',
          'avoid using past tenses entirely',
        ],
        correctAnswer: 0,
        explanationAr: 'تُستخدم لإضفاء التوكيد البلاغي والرصانة الأسلوبية الرفيعة على الخطاب.',
      },
      {
        id: 'c1-1-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب القلب النحوي: "نادراً ما نشهد مثل هذا التقدم المذهل":',
        instructionEn: 'Translate using negative inversion: "نادراً ما نشهد مثل هذا التقدم المذهل":',
        question: 'Translate: "نادراً ما نشهد مثل هذا التقدم المذهل"',
        correctAnswer: ['Rarely do we witness such remarkable progress', 'Seldom do we witness such remarkable progress', 'rarely do we witness such remarkable progress'],
        explanationAr: 'الترجمة البلاغية الرفيعة: Rarely / Seldom do we witness such remarkable progress.',
      },
    ],
  },
  {
    id: 'lesson-c1-2-conditional-inversion',
    level: 'C1',
    order: 2,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: التراكيب البلاغية والقلب النحوي المتقدم',
    chapterTitleEn: 'Chapter 1: Rhetorical Inversion & Syntactic Mastery',
    titleAr: 'الدرس 2: القلب الشرطي المتقدم بدون استخدام "If"',
    titleEn: 'Lesson 2: Inverted Conditionals: Eliminating "If" with Style',
    category: 'قواعد متقدمة وبلاغة (C1)',
    iconName: 'GitFork',
    estimatedMinutes: 18,
    objectivesAr: [
      'حذف أداة الشرط "If" والاستعاضة عنها بالقلب النحوي الأنيق في المخاطبات الرسمية.',
      'إتقان صيغ القلب الشرطي الثلاث: Should (للأولى)، Were (للثانية)، Had (للثالثة).',
      'صياغة خاتمة المراسلات المهنية الأكثر شهرة: "Should you require further information...".',
      'الارتقاء بالأسلوب من المقبول (B1/B2) إلى الفصيح البليغ (C1).',
    ],
    explanationMarkdownAr: `### القلب الشرطي (Inverted Conditionals) بدون كلمة If

#### 1. لماذا يحذف كبار الكتاب والمدراء كلمة "If"؟
في المقالات الدبلوماسية وعقود الأعمال الدولية، يعتبر حذف كلمة "If" واستبدالها بالقلب النحوي دلالة قاطعة على **التمكن اللغوي الرفيع والرقي الأسلوبي**.

#### 2. صيغ القلب الشرطي الثلاث:

1. **الشرطية الأولى: استبدال If بـ SHOULD**:
   - صيغة عادية: *If you require any further assistance, please contact me.*
   - **صيغة C1 المقلوبة**:
     - **Should you require** any further assistance, please contact me.
   - *If the system encounters an anomaly, alert the DevOps team.*
   - -> **Should the system encounter** an anomaly, alert the DevOps team.

2. **الشرطية الثانية: استبدال If بـ WERE**:
   - أ) إذا كان الفعل الأصلي هو فعل الكينونة were:
     - صيغة عادية: *If I were in your position, I would negotiate.*
     - **صيغة C1 المقلوبة**: **Were I in your position**, I would negotiate.
   - ب) إذا كان هناك فعل حركي عادي: نستخدم تركيب \`Were + Subject + to + Base Verb\`:
     - صيغة عادية: *If the client canceled the contract, we would lose millions.*
     - **صيغة C1 المقلوبة**: **Were the client to cancel** the contract, we would lose millions.

3. **الشرطية الثالثة: استبدال If بـ HAD**:
   - صيغة عادية: *If we had anticipated these supply chain bottlenecks, we would have stockpiled components.*
   - **صيغة C1 المقلوبة**:
     - **Had we anticipated** these supply chain bottlenecks, we would have stockpiled components.
   - **في النفي (انتبه: نضع not بعد الفاعل مباشرة دون اختصار)**:
     - *If they had not intervened...* -> **Had they not intervened**, catastrophe would have ensued.`,
    rulesAndStructuresAr: `صيغة 1: Should + Subject + Base Verb (بديلة لـ If + Present). صيغة 2: Were + Subject + (to + Base Verb) (بديلة لـ If + Past). صيغة 3: Had + Subject + Past Participle (بديلة لـ If + had + V3). في النفي: Had + Subject + not + V3 (لا تختصر hadn't في القلب الشرطي الرسمي).`,
    summaryAr: 'احذف If وضع الفعل المساعد في البداية: Should للطلب والمستقبل، Were للافتراض، و Had للندم والماضي. لا تختصر النفي بل قل Had we not.',
    arabicContrastPoint: {
      titleAr: 'اختصار النفي مع القلب الشرطي',
      descriptionAr: 'في الإنجليزية الرسمية، عند نفي القلب الشرطي الثالث، لا يجوز اختصار "Hadn\'t we" في بداية الجملة! الصواب الرسمي البليغ هو فصل النفي: "Had we NOT known...".',
      badArabicHabit: 'Hadn\'t we known about the defect, we would have failed.',
      correctEnglishWay: 'Had we not known about the defect, we would have failed.',
    },
    examples: [
      { en: 'Should you require any supplementary documentation, do not hesitate to contact our legal department.', ar: 'إن تطلبت أي وثائق تكميلية إضافية، فلا تتردد في الاتصال بقسمنا القانوني.', phoneticAr: 'شُود يُو رِيكْوَايَر إِنِي سَابْلِمِنْتَرِي' },
      { en: 'Were the regulatory authorities to mandate strict emissions caps, automotive manufacturers would adapt.', ar: 'لو فرضت السلطات التنظيمية حدوداً صارمة للانبعاثات، لتكيفت شركات تصنيع السيارات.', phoneticAr: 'وِير ذَا رِيجْيُولَاتُورِي أُوثُورِتِيز' },
      { en: 'Had the engineering team not implemented redundant failover clusters, the banking platform would have collapsed.', ar: 'لولا أن الفريق الهندسي قد طبق مصفوفات تجاوز الفشل الاحتياطية، لانهارت المنصة المصرفية.', phoneticAr: 'هَاد ذي إِنْجِينِيرِينْج تِيم نُوت' },
    ],
    vocabulary: [
      { word: 'Supplementary', ipa: '/ˌsʌp.ləˈmen.tər.i/', partOfSpeech: 'adjective', meaningAr: 'تكميلي وإضافي داعم', exampleEn: 'Review the supplementary materials.', exampleAr: 'راجع المواد التكميلية.' },
      { word: 'Mandate', ipa: '/ˈmæn.deɪt/', partOfSpeech: 'verb & noun', meaningAr: 'يفرض قانوناً أو تكليفاً إلزامياً', exampleEn: 'The government mandated new audits.', exampleAr: 'فرضت الحكومة تدقيقات جديدة.' },
      { word: 'Redundant', ipa: '/rɪˈdʌn.dənt/', partOfSpeech: 'adjective', meaningAr: 'احتياطي بديل لضمان الأمان في الهندسة', exampleEn: 'We designed redundant power systems.', exampleAr: 'صممنا أنظمة طاقة احتياطية بديلة.' },
      { word: 'Failover', ipa: '/ˈfeɪlˌoʊ.vɚ/', partOfSpeech: 'noun (tech)', meaningAr: 'التحويل التلقائي للنظام الاحتياطي عند العطل', exampleEn: 'Automatic failover ensured uptime.', exampleAr: 'ضمن التحويل التلقائي استمرار الخدمة دون توقف.' },
    ],
    commonMistakes: [
      { wrong: 'Should you will have questions, call me.', correct: 'Should you have questions, call me.', reasonAr: 'بعد Should نضع مصدر الفعل المجرد have مباشرة.' },
      { wrong: 'Hadn\'t we intervened, the deal would collapse.', correct: 'Had we not intervened, the deal would have collapsed.', reasonAr: 'لا نختصر النفي في القلب الشرطي، وجواب الشرط الثالث يتطلب would have + V3.' },
    ],
    realWorldChallengeAr: 'أعد صياغة خاتمة إيميلك المهني مستخدماً: "Should you require further clarification...".',
    exercises: [
      {
        id: 'c1-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الشرطية الراقية بدون استخدام كلمة "If" في خاتمة المراسلات المهنية:',
        instructionEn: 'Choose the sophisticated conditional inversion without "If":',
        question: '_____ you require any further technical assistance, please do not hesitate to contact our desk.',
        options: ['Should', 'Had', 'Were', 'Would'],
        correctAnswer: 0,
        explanationAr: 'نستخدم Should في القلب الشرطي للبدائل الواقعية والطلبات المهنية الرسمية: Should you require...',
      },
      {
        id: 'c1-2-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة القلب الشرطي الثالث المنفية بدون اختصار:',
        instructionEn: 'Choose the correct formal negative inversion in third conditional:',
        question: '_____ our team intervened decisively, the transaction would have fallen through.',
        options: ['Had not', 'Hadn\'t', 'If had not', 'Should not'],
        correctAnswer: 0,
        explanationAr: 'في الإنجليزية الرسمية المنفية نضع Had ثم الفاعل ثم not: Had our team not intervened (أو Had not our team في بعض التراكيب القديمة).',
      },
      {
        id: 'c1-2-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المساعد المناسب للقلب الشرطي الثاني الافتراضي (Were):',
        instructionEn: 'Fill in the inverted conditional verb for hypothetical scenarios:',
        question: '______ I in your executive position, I would greenlight the capital expenditure.',
        correctAnswer: ['Were', 'were'],
        explanationAr: 'صيغة القلب الشرطي الثاني بديلة لـ If I were هي: Were I in your position.',
      },
      {
        id: 'c1-2-ex-4',
        type: 'multiple_choice',
        instructionAr: 'كيف نعيد صياغة جملة: "If we had known about the latency, we would have upgraded"؟',
        instructionEn: 'Rewrite the sentence using conditional inversion:',
        question: 'Choose the equivalent inverted sentence:',
        options: [
          'Had we known about the latency, we would have upgraded.',
          'Should we had known about the latency, we would have upgraded.',
          'Were we known about the latency, we would have upgraded.',
          'Had we know about the latency, we will upgrade.',
        ],
        correctAnswer: 0,
        explanationAr: 'القلب الشرطي الثالث يحول If we had known إلى: Had we known.',
      },
      {
        id: 'c1-2-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة قلب شرطي رسمية:',
        instructionEn: 'Arrange the words into a correct inverted conditional sentence:',
        question: 'require / you / Should / call / us / help',
        correctAnswer: 'Should you require help call us',
        explanationAr: 'الترتيب: Should you require help call us.',
      },
      {
        id: 'c1-2-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في اختصار النفي مع القلب الشرطي (اكتب الكلمتين منفصلتين):',
        instructionEn: 'Fix the contracted negative in formal inversion:',
        question: 'Hadn\'t we conducted the stress test, the servers would have crashed.',
        correctAnswer: ['Had we not', 'had we not', 'Had we not conducted'],
        explanationAr: 'في القلب الشرطي الرسمي نفصل النفي: Had we not conducted.',
      },
      {
        id: 'c1-2-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما التركيب النحوي الدقيق للقلب الشرطي الثاني مع فعل حركي (to accept)؟',
        instructionEn: 'Identify the correct Second Conditional inversion with an active verb:',
        question: '_____ the company to accept the merger offer, shareholder value would appreciate.',
        options: ['Were', 'Should', 'Had', 'Was'],
        correctAnswer: 0,
        explanationAr: 'مع الأفعال الحركية نستخدم: Were the company to accept (لو قُدّر للشركة أن تقبل).',
      },
      {
        id: 'c1-2-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب القلب الشرطي الأنيق: "إن احتجتم أي مساعدة، تواصلوا معنا":',
        instructionEn: 'Translate using conditional inversion: "إن احتجتم أي مساعدة، تواصلوا معنا":',
        question: 'Translate: "إن احتجتم أي مساعدة، تواصلوا معنا"',
        correctAnswer: ['Should you require any assistance contact us', 'Should you require any assistance, please contact us.', 'Should you need any help, contact us', 'should you require any assistance contact us'],
        explanationAr: 'الترجمة الرسمية الرفيعة: Should you require any assistance, please contact us.',
      },
    ],
  },
  {
    id: 'lesson-c1-3-subjunctive-mood',
    level: 'C1',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الدقة الأكاديمية وصيغ التأكيد الرفيعة',
    chapterTitleEn: 'Chapter 2: Subjunctive Precision, Clefts & Participles',
    titleAr: 'الدرس 3: صيغة الشرط المنصوب الرسمية (The Subjunctive Mood)',
    titleEn: 'Lesson 3: The Formal Mandative Subjunctive in Legal & Academic Contexts',
    category: 'قواعد متقدمة (C1)',
    iconName: 'Award',
    estimatedMinutes: 18,
    objectivesAr: [
      'فهم صيغة المنصوب الشرطي (Subjunctive Mood) المستخدمة في القرارات الإدارية والتوصيات الرسمية.',
      'تطبيق قاعدة المصدر المجرد (Bare Infinitive) مع جميع الضمائر بما فيها الغائب المفرد.',
      'معرفة الأفعال والصفات التي تستدعي صيغة Subjunctive: demand, recommend, insist, vital, essential.',
      'التمييز بين الأسلوب البريطاني المعاصر والأسلوب الأمريكي الرسمي الدولي.',
    ],
    explanationMarkdownAr: `### صيغة الشرط المنصوب (The Subjunctive Mood)

#### 1. ما هو الـ Subjunctive؟
في اللغة الإنجليزية الرفيعة، عندما تصدر أمراً، أو توصية رسمية، أو تشترط شرطاً حتمياً، فإن الفعل في جملة *that* **لا يتصرف أبداً ولا يضاف له s المفرد الغائب**، بل يظل في **المصدر المجرد (Base Form)** تماماً!
- انظر لهذا التباين المدهش:
  - جملة عادية: *He **submits** the report on time.* (يوجد s المفرد).
  - **بصيغة Subjunctive**: *The board insisted that he **submit** the report on time.* (حُذفت الـ s عمداً لأنها رغبة وإلزام!).
  - مع فعل الكينونة: *It is essential that she **be** present.* (نستخدم be نفسها وليس is!).

#### 2. الأفعال التي تفرض صيغة الـ Mandative Subjunctive:
عندما يلي هذه الأفعال كلمة **that**، يأتي الفعل التالي في المصدر المجرد:
- **Recommend that**: *I recommend that the developer **refactor** the codebase.*
- **Demand that**: *The union demanded that management **increase** compensation.*
- **Insist that**: *The compliance officer insisted that the audit **take** place immediately.*
- **Propose that / Suggest that**: *She proposed that the committee **adjourn**.*

#### 3. الصفات الحتمية (Impersonal Adjectives of Necessity):
عندما تبدأ الجملة بـ *It is + صفة حتمية + that*:
- **It is essential that** ... (من الضروري أن)
- **It is vital that** ... (من الحيوي أن)
- **It is imperative that** ... (من الإلزامي الحتمي أن)
- **It is crucial that** ... (من الجوهري الحاسم أن)
- **أمثلة**:
  - *It is imperative that every engineer **understand** zero-trust protocols.* (وليس understands!).
  - *It is vital that all user passwords **be** hashed with bcrypt.* (وليس are hashed!).

#### 4. النفي في صيغة Subjunctive:
نضع كلمة **not** مباشرة قبل المصدر المجرد دون استخدام do أو does:
- *We recommend that she **not accept** the counteroffer.* (وليس doesn't accept!).`,
    rulesAndStructuresAr: `المعادلة: Subject + (demand/insist/recommend) + that + Subject + Bare Infinitive (مصدر مجرد بدون s). النفي: Subject + not + Bare Infinitive. مع فعل الكينونة نستخدم كلمة be دائماً (that he be, that she be).`,
    summaryAr: 'صيغة Subjunctive الرسمية تلغي s المفرد الغائب وتفرض المصدر المجرد دائماً (he submit / she be). انفي بوضع not قبل الفعل مباشرة.',
    arabicContrastPoint: {
      titleAr: 'إضافة s المفرد الغائب بعد أفعال التوصية الرسمية',
      descriptionAr: 'المتعلم المعتاد على قواعد A1 يضع s مع المفرد فيقول: "I recommend that he submits the file". في الإنجليزية الأكاديمية والمهنية C1، وضع s يعتبر خطأً فادحاً في الـ Subjunctive؛ الصواب هو تجريد الفعل: "I recommend that he SUBMIT the file".',
      badArabicHabit: 'The doctor advised that he takes medicine and is quiet.',
      correctEnglishWay: 'The doctor advised that he take medicine and be quiet.',
    },
    examples: [
      { en: 'The cybersecurity council demanded that the enterprise revoke all compromised credentials.', ar: 'طالب مجلس الأمن السيبراني بأن تسحب المنشأة جميع بيانات الاعتماد المخترقة فوراً (بدون s).', phoneticAr: 'ذَا سَايْبَرْسِكْيُورِتِي كَاوْنْسِل دِيمَانْدِد' },
      { en: 'It is imperative that the lead architect be present during the infrastructure migration.', ar: 'من الضروري الحتمي أن يكون كبير المعماريين حاضراً أثناء ترحيل البنية التحتية (استخدام be).', phoneticAr: 'إِت إِز إِمْبِيرَاتِڤ ذَات ذَا لِيد آرْكِيتِكْت بِي' },
      { en: 'We recommend that the research fellow not publish the preliminary dataset prematurely.', ar: 'نوصي بألا ينشر الزميل الباحث مجموعة البيانات الأولية قبل الأوان (نفي بـ not بدون doesn\'t).', phoneticAr: 'وِي رِيكُومِينْد ذَات ذَا رِيسِيرتش' },
    ],
    vocabulary: [
      { word: 'Imperative', ipa: '/ɪmˈper.ə.t̬ɪv/', partOfSpeech: 'adjective', meaningAr: 'إلزامي وحتمي ولا يحتمل التأخير', exampleEn: 'Immediate action is imperative.', exampleAr: 'التحرك الفوري أمر حتمي وإلزامي.' },
      { word: 'Revoke', ipa: '/rɪˈvoʊk/', partOfSpeech: 'verb', meaningAr: 'يسحب ترخيصاً أو يلغي إذناً رسمياً', exampleEn: 'The admin revoked user access.', exampleAr: 'سحب المشرف صلاحية الوصول عن المستخدم.' },
      { word: 'Prematurely', ipa: '/ˌpriː.məˈtʊr.li/', partOfSpeech: 'adverb', meaningAr: 'قبل أوانه وبشكل مبتسر متسرع', exampleEn: 'Do not announce the deal prematurely.', exampleAr: 'لا تعلن عن الصفقة قبل أوانها.' },
      { word: 'Refactor', ipa: '/riːˈfæk.tɚ/', partOfSpeech: 'verb (tech)', meaningAr: 'إعادة هيكلة وتطوير الشفرة دون تغيير سلوكها', exampleEn: 'Refactor the legacy codebase.', exampleAr: 'أعد هيكلة الشفرة البرمجية القديمة.' },
    ],
    commonMistakes: [
      { wrong: 'I insist that he goes immediately.', correct: 'I insist that he go immediately.', reasonAr: 'في صيغة Subjunctive يظل الفعل في المصدر المجرد go بدون s.' },
      { wrong: 'It is vital that she is here.', correct: 'It is vital that she be here.', reasonAr: 'مع فعل الكينونة نستخدم صيغة be الأصلية في الـ Subjunctive.' },
      { wrong: 'We suggest that he doesn\'t join.', correct: 'We suggest that he not join.', reasonAr: 'نفي Subjunctive يكون بوضع not قبل المصدر مباشرة.' },
    ],
    realWorldChallengeAr: 'اكتب توصية رسمية لإدارة شركتك أو كليتك تبدأ بـ: "It is imperative that we..." مستخدماً صيغة Subjunctive.',
    exercises: [
      {
        id: 'c1-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف الفعل الصحيح في صيغة Subjunctive الرسمية بعد الفعل recommend:',
        instructionEn: 'Choose the correct subjunctive verb form after recommend that:',
        question: 'The oversight committee recommended that the lead architect _____ the security audit report immediately.',
        options: ['submit', 'submits', 'submitted', 'will submit'],
        correctAnswer: 0,
        explanationAr: 'في صيغة Subjunctive الرسمية، يظل الفعل في المصدر المجرد submit بدون s حتى مع الفاعل المفرد.',
      },
      {
        id: 'c1-3-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف فعل الكينونة السليم بعد الصفة الحتمية "It is vital that":',
        instructionEn: 'Select the correct subjunctive form of the verb to be:',
        question: 'It is vital that every confidential backup _____ encrypted offsite.',
        options: ['be', 'is', 'was', 'should being'],
        correctAnswer: 0,
        explanationAr: 'فعل الكينونة في صيغة Subjunctive يكون دائماً be.',
      },
      {
        id: 'c1-3-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المجرد بدون s بعد insist that (sign):',
        instructionEn: 'Fill in the bare infinitive for the subjunctive mood:',
        question: 'The legal counsel insisted that the client ______ the non-disclosure agreement.',
        correctAnswer: ['sign', 'Sign'],
        explanationAr: 'صيغة Subjunctive تلغي s وتلزم المصدر sign.',
      },
      {
        id: 'c1-3-ex-4',
        type: 'multiple_choice',
        instructionAr: 'كيف نصوغ النفي الصحيح في الـ Subjunctive؟',
        instructionEn: 'How is negation formulated in the mandative subjunctive?',
        question: 'Choose the correct negative subjunctive sentence:',
        options: [
          'We propose that the organization not deploy the unverified update.',
          'We propose that the organization does not deploy the unverified update.',
          'We propose that the organization not to deploy the unverified update.',
          'We propose that the organization won\'t deploy the unverified update.',
        ],
        correctAnswer: 0,
        explanationAr: 'النفي في Subjunctive يكون بوضع not مباشرة قبل المصدر المجرد: not deploy.',
      },
      {
        id: 'c1-3-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة Subjunctive حتمية:',
        instructionEn: 'Arrange the words into a correct subjunctive sentence:',
        question: 'be / It / he / is / present / essential / that',
        correctAnswer: 'It is essential that he be present',
        explanationAr: 'الترتيب: It is essential that he be present.',
      },
      {
        id: 'c1-3-ex-6',
        type: 'error_hunt',
        instructionAr: 'احذف حرف الـ s الخاطئ في صيغة Subjunctive (اكتب الفعل مجرداً فقط):',
        instructionEn: 'Correct the verb by removing the non-subjunctive third-person s:',
        question: 'The regulations demand that every passenger complies with safety rules.',
        correctAnswer: ['comply', 'Comply'],
        explanationAr: 'الفعل الصحيح مجرداً هو comply بدون s.',
      },
      {
        id: 'c1-3-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي من الصفات التالية تستدعي استخدام صيغة Subjunctive Mood بعدها؟',
        instructionEn: 'Which adjective triggers the mandative subjunctive?',
        question: 'All of the following trigger the subjunctive EXCEPT:',
        options: ['probable', 'imperative', 'essential', 'crucial'],
        correctAnswer: 0,
        explanationAr: 'الصفة probable تعبر عن احتمال عادي وليس إلزاماً أو ضرورة حتمية، فلا تفرض Subjunctive.',
      },
      {
        id: 'c1-3-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب Subjunctive رسمي: "من الضروري أن يكون مستعداً":',
        instructionEn: 'Translate using the subjunctive mood: "من الضروري أن يكون مستعداً":',
        question: 'Translate: "من الضروري أن يكون مستعداً"',
        correctAnswer: ['It is essential that he be ready', 'It is vital that he be ready', 'it is essential that he be ready', 'It is imperative that he be ready'],
        explanationAr: 'الترجمة الصحيحة: It is essential that he be ready مع استخدام be.',
      },
    ],
  },
  {
    id: 'lesson-c1-4-cleft-sentences',
    level: 'C1',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الدقة الأكاديمية وصيغ التأكيد الرفيعة',
    chapterTitleEn: 'Chapter 2: Subjunctive Precision, Clefts & Participles',
    titleAr: 'الدرس 4: الجمل المشقوقة لتسليط الضوء والتوكيد (Cleft Sentences)',
    titleEn: 'Lesson 4: Cleft Sentences: Mastering Focus, Emphasis & Rhetoric',
    category: 'قواعد متقدمة وبلاغة (C1)',
    iconName: 'Focus',
    estimatedMinutes: 16,
    objectivesAr: [
      'استخدام الجمل المشقوقة (Cleft Sentences) لإعادة توجيه تركيز السامع بدقة متناهية.',
      'إتقان صيغة it-cleft: It is / It was [العنصر المراد إبرازه] that / who...',
      'إتقان صيغة wh-cleft: What we need most is / What surprised the board was...',
      'الرد على الادعاءات وتصحيح سوء الفهم في المفاوضات الدولية بنبرة قاطعة ولبقة.',
    ],
    explanationMarkdownAr: `### الجمل المشقوقة (Cleft Sentences): إضاءة المسرح البلاغي

#### 1. ما هي الجملة المشقوقة؟
كلمة *Cleft* تعني "مشقوق" أو "مقسوم إلى نصفين". نقوم بشق الجملة العادية لنسلط كشاف الضوء البلاغي على **عنصر محدد بذاته** (الفاعل، المفعول، الزمان، أو السبب):
- جملة عادية: *Zaid solved the security architecture problem.*
- **بصيغة It-Cleft المركزة**:
  - **It was Zaid who** solved the security architecture problem. (زيد هو بالذات من حل المشكلة، وليس شخصاً آخر!).

#### 2. النوع الأول: صيغة IT-CLEFT
\`\`\`
It + [ is / was ] + [العنصر المراد توكيده] + [ that / who ] + [باقي الجملة]
\`\`\`
1. **التركيز على الفاعل**:
   - *It was our junior engineer **who** discovered the vulnerability.*
2. **التركيز على الوقت**:
   - *It was only in 2024 **that** the enterprise achieved profitability.*
3. **التركيز على السبب**:
   - *It is because of customer obsession **that** the startup scaled so fast.*

#### 3. النوع الثاني: صيغة WH-CLEFT (Pseudo-cleft)
تبدأ الجملة بـ **What** وتعني "الشيء الذي... هو...":
\`\`\`
What + [جملة] + is/was + [العنصر المراد إبرازه]
\`\`\`
- جملة عادية: *We need higher team collaboration.*
- **بأسلوب C1**:
  - **What we need most is** genuine cross-functional collaboration.
- جملة عادية: *The latency issue surprised the engineers.*
- **بأسلوب C1**:
  - **What surprised the engineers was** the sudden database latency.

#### 4. استخدام The reason why و All:
- **The reason why we succeeded was** our relentless focus on execution.
- **All I want is** a fair and transparent contract review.`,
    rulesAndStructuresAr: `صيغة It-cleft: It + is/was + Focus Item + that/who + Clause. صيغة Wh-cleft: What + Clause + is/was + Focus Item. نستخدم who مع الأشخاص و that مع الأشياء والأوقات والأسباب. Cleft sentences تستخدم للرد الحاسم على سوء الفهم أو إبراز الأولويات في الاجتماعات.`,
    summaryAr: 'الجمل المشقوقة تسلط الضوء على فكرة معينة. استخدم It was [X] that... للتركيز على شيء محدد، أو What we need is... للتركيز على الهدف الأساسي.',
    arabicContrastPoint: {
      titleAr: 'تكرار الجمل البسيطة دون تلوين نبرة التأكيد',
      descriptionAr: 'المتعلم قد يعتمد على نبرة الصوت فقط لإبراز التأكيد، لكن في الكتابة الإنجليزية الرسمية الأداة الأقوى هي إعادة صياغة الجملة نحوياً بواسطة Cleft Sentences.',
      badArabicHabit: 'Saying "We really really need time" instead of structured emphasis.',
      correctEnglishWay: 'Using clefting: "What we require above all else is time."',
    },
    examples: [
      { en: 'It was the chief architect who originally designed the fault-tolerant microservices cluster.', ar: 'كبير المعماريين هو بالذات من صمم في الأصل مصفوفة الخدمات المصغرة المقاومة للأعطال.', phoneticAr: 'إِت وَاز ذَا تْشِيف آرْكِيتِكْت هُو' },
      { en: 'What concerns institutional investors most is regulatory uncertainty in foreign markets.', ar: 'الشيء الذي يقلق المستثمرين المؤسسيين أكثر من أي شيء آخر هو الغموض التنظيمي في الأسواق الأجنبية.', phoneticAr: 'وَات كُونْسِيرْنْز إِنْسْتِيتْيُوشَنَال' },
      { en: 'It was only after extensive benchmarking that the engineering team opted for PostgreSQL.', ar: 'لم يقع اختيار الفريق الهندسي على بوستجريس إلا بعد إجراء مقارنات معيارية مكثفة.', phoneticAr: 'إِت وَاز أُونْلِي آفْتَر إِكْسْتِنْسِڤ' },
    ],
    vocabulary: [
      { word: 'Fault-tolerant', ipa: '/ˌfɑːlt ˈtɑːl.ɚ.ənt/', partOfSpeech: 'adjective (tech)', meaningAr: 'مقاوم للأعطال ومصمم للاستمرار رغم الخلل', exampleEn: 'Fault-tolerant architecture avoids downtime.', exampleAr: 'تتفادى المعمارية المقاومة للأعطال توقف الخدمة.' },
      { word: 'Uncertainty', ipa: '/ʌnˈsɝː.tən.ti/', partOfSpeech: 'noun', meaningAr: 'حالة عدم اليقين والغموض', exampleEn: 'Economic uncertainty delayed investment.', exampleAr: 'أخر عدم اليقين الاقتصادي الاستثمارات.' },
      { word: 'Benchmarking', ipa: '/ˈbentʃ.mɑːr.kɪŋ/', partOfSpeech: 'noun', meaningAr: 'مقارنة معيارية دقيقة للأداء', exampleEn: 'Performance benchmarking revealed bottlenecks.', exampleAr: 'كشفت المقارنة المعيارية للأداء عن نقاط الاختناق.' },
      { word: 'Relentless', ipa: '/rɪˈlent.ləs/', partOfSpeech: 'adjective', meaningAr: 'دؤوب بلا هوادة ولا انقطاع', exampleEn: 'Relentless effort yields excellence.', exampleAr: 'الجهد الدؤوب يثمر التميز والريادة.' },
    ],
    commonMistakes: [
      { wrong: 'It was Zaid which designed the app.', correct: 'It was Zaid who designed the app.', reasonAr: 'مع الأشخاص في it-cleft نستخدم who أو that وليس which.' },
      { wrong: 'What we need are a solution.', correct: 'What we need is a solution.', reasonAr: 'جملة What تعامل ككتلة واحدة مفردة وتأخذ is.' },
    ],
    realWorldChallengeAr: 'أعد صياغة جملة عادية من مشروعك إلى جملة It-cleft وجملة Wh-cleft لتسليط الضوء على الإنجاز الأهم.',
    exercises: [
      {
        id: 'c1-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة التوكيدية السليمة بجملة It-cleft لإبراز دور المدير التنفيذي:',
        instructionEn: 'Choose the correct it-cleft focusing on the CEO:',
        question: 'Which sentence correctly emphasizes that the CEO made the final call?',
        options: [
          'It was the CEO who made the decisive call.',
          'It was the CEO which made the decisive call.',
          'What was the CEO who made the decisive call.',
          'It the CEO made the decisive call.',
        ],
        correctAnswer: 0,
        explanationAr: 'التركيبة السليمة لـ it-cleft مع الأشخاص: It was + the CEO + who + made the call.',
      },
      {
        id: 'c1-4-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة لـ Wh-cleft للتركيز على الحاجة الأساسية:',
        instructionEn: 'Choose the correct wh-cleft focusing on the primary need:',
        question: '_____ is a comprehensive audit of our cloud expenses.',
        options: [
          'What we urgently require',
          'That we urgently require',
          'Which we urgently require',
          'It we urgently require',
        ],
        correctAnswer: 0,
        explanationAr: 'جمل الـ Wh-cleft تبدأ بـ What: What we urgently require is...',
      },
      {
        id: 'c1-4-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بضمير الوصل المناسب في جملة it-cleft لشخص (who):',
        instructionEn: 'Fill in the pronoun for a person in it-cleft:',
        question: 'It was our senior security researcher ______ detected the vulnerability.',
        correctAnswer: ['who', 'that', 'Who', 'That'],
        explanationAr: 'في جمل it-cleft مع الأشخاص نستخدم who أو that.',
      },
      {
        id: 'c1-4-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما الغرض البلاغي الأساسي من استخدام Cleft Sentences؟',
        instructionEn: 'What is the primary rhetorical function of a cleft sentence?',
        question: 'Cleft sentences are primarily used to:',
        options: [
          'highlight a specific element and contrast it against misconceptions',
          'shorten sentences as much as possible for social media',
          'avoid using subject pronouns entirely',
          'indicate past continuous actions',
        ],
        correctAnswer: 0,
        explanationAr: 'تسليط الضوء على عنصر محدد وتوكيده في مواجهة أي التباس أو سوء فهم.',
      },
      {
        id: 'c1-4-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة Wh-cleft صحيحة:',
        instructionEn: 'Arrange the words into a correct wh-cleft sentence:',
        question: 'need / is / What / time / we / more',
        correctAnswer: 'What we need is more time',
        explanationAr: 'الترتيب: What we need is more time.',
      },
      {
        id: 'c1-4-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الضمير الخاطئ المستخدم مع الشخص في it-cleft (اكتب الضمير المصحح فقط):',
        instructionEn: 'Correct the relative pronoun for person in it-cleft:',
        question: 'It was Dr. Miller which discovered the new compound.',
        correctAnswer: ['who', 'that', 'Who', 'That'],
        explanationAr: 'مع الأشخاص نستخدم who أو that وليس which.',
      },
      {
        id: 'c1-4-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة المشقوقة للتوكيد على التوقيت التاريخي:',
        instructionEn: 'Select the cleft sentence emphasizing the historical time:',
        question: '_____ that the two tech conglomerates finalized the merger.',
        options: [
          'It was in 2023',
          'What was in 2023',
          'Which was in 2023',
          'There was in 2023',
        ],
        correctAnswer: 0,
        explanationAr: 'التوكيد الزمني: It was in 2023 that the two conglomerates finalized...',
      },
      {
        id: 'c1-4-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب Wh-cleft التوكيدي: "ما نحتاجه هو الصدق":',
        instructionEn: 'Translate using a wh-cleft: "ما نحتاجه هو الصدق":',
        question: 'Translate: "ما نحتاجه هو الصدق"',
        correctAnswer: ['What we need is honesty', 'What we need is honesty.', 'what we need is honesty'],
        explanationAr: 'الترجمة الصحيحة: What we need is honesty.',
      },
    ],
  },
  {
    id: 'lesson-c1-5-participle-clauses',
    level: 'C1',
    order: 5,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الدقة الأكاديمية وصيغ التأكيد الرفيعة',
    chapterTitleEn: 'Chapter 2: Subjunctive Precision, Clefts & Participles',
    titleAr: 'الدرس 5: أشباه الجمل الوصفية الإيجازية (Participle Clauses)',
    titleEn: 'Lesson 5: Participle Clauses for Executive & Academic Conciseness',
    category: 'قواعد متقدمة وكتابة (C1)',
    iconName: 'FileText',
    estimatedMinutes: 18,
    objectivesAr: [
      'استبدال الجمل الطويلة والروابط المكررة (Because, When, After) بأشباه جمل اسم الفاعل والمفعول.',
      'صياغة Present Participle (-ing) للأحداث المتزامنة أو الأسباب.',
      'صياغة Perfect Participle (Having + V3) للأحداث المكتملة مسبقاً قبل الحدث الرئيسي.',
      'تجنب خطأ الفاعل المعلق التائه (Dangling Participle Trap) الفادح في الكتابة الأكاديمية.',
    ],
    explanationMarkdownAr: `### أشباه الجمل الوصفية (Participle Clauses): فن الإيجاز الراقي

#### 1. ما هي أشباه الجمل الوصفية؟
في الإنجليزية المتقدمة C1 ومقالات The Economist والأوراق البحثية، يتميز الأسلوب بـ **الكثافة الإيجازية**.
بدلاً من استخدام جمل فرعية طويلة تبدأ بـ *Because* أو *After* أو *While*، نحذف أداة الربط والفاعل، ونبدأ مباشرة بـ **اسم الفاعل (-ing)** أو **اسم المفعول (-ed)**:
- طويل ومكرر: *Because she felt exhausted after the flight, she went straight to sleep.*
- **بأسلوب C1 الإيجازي**:
  - **Feeling exhausted after the flight**, she went straight to sleep.

#### 2. الأنواع الثلاثة لأشباه الجمل الوصفية:
1. **Present Participle (-ing) (للسبب أو التزامن في الحاضر/الماضي)**:
   - بديلة لـ *While / Because*:
     - *Realizing that time was running out, the engineers focused on core features.*
     - *(لإدراكهم أن الوقت ينفد... ركز المهندسون).*
2. **Past Participle (-ed / V3) (للمعنى المبني للمجهول)**:
   - بديلة لـ *Because it was...*:
     - *Faced with unprecedented supply chain challenges, the factory adapted.*
     - *(إذ واجه المصنع تحديات غير مسبوقة... تكيف).*
3. **Perfect Participle (HAVING + V3) (لحدث اكتمل وانتهى تماماً قبل الحدث الثاني)**:
   - بديلة لـ *After we had finished...*:
     - **Having completed** the security audit, the developers released the update.
     - *(بعد أن كانوا قد أتموا التدقيق الأمني... أطلق المطورون التحديث).*

#### 3. الخطر القاتل: الفاعل المعلق التائه (The Dangling Participle Trap)
يجب حتماً أن يكون **فاعل شبه الجملة الأولى هو نفسه فاعل الجملة الرئيسية بعد الفاصلة مباشرة**!
- خطأ مضحك وفادح:
  - *Walking into the server room, the temperature was very cold.*
  - (المعنى الكارثي هنا أن "درجة الحرارة" هي التي كانت تمشي على قدميها وتدخل الغرفة!).
- **الصواب الأكاديمي الصارم**:
  - *Walking into the server room, **the engineer** noticed the cold temperature.*`,
    rulesAndStructuresAr: `القاعدة: فاعل Participle clause يجب أن يطابق فاعل الجملة الرئيسية بعد الفاصلة تماماً. Present participle (-ing) للتزامن والسبب. Past participle (V3) للمعنى المجهول. Perfect participle (Having + V3) للاكتمال الأسبق. تجنب Dangling Modifiers.`,
    summaryAr: 'أشباه الجمل الوصفية تحول الجمل الطويلة إلى صياغات مكثفة رفيعة: Having done (بعد إتمام كذا)، Feeling (بسبب شعور كذا). تأكد دائماً أن الفاعل بعد الفاصلة هو من قام بالفعل.',
    arabicContrastPoint: {
      titleAr: 'الفاعل المعلق (Dangling Modifier)',
      descriptionAr: 'من أكثر الأخطاء التي تخصم درجات في اختبارات الكتابة لـ IELTS و TOEFL: البدء بـ Having finished دون وضع الشخص الفاعل بعد الفاصلة. "Having analyzed the data, the report was written" خطأ لأن التقرير لم يحلل نفسه! الصواب: "Having analyzed the data, WE wrote the report".',
      badArabicHabit: 'Having finished the meeting, the decision was announced.',
      correctEnglishWay: 'Having finished the meeting, the board announced the decision.',
    },
    examples: [
      { en: 'Having analyzed five years of longitudinal healthcare data, the research team identified a breakthrough biomarker.', ar: 'بعد أن كان الفريق البحثي قد حلل بيانات رعاية صحية طولية تمتد لخمس سنوات، حدد علامة حيوية فارقة.', phoneticAr: 'هَـاڤِينْج أَنَالَايْزد فَايْف يِيرز' },
      { en: 'Recognizing the strategic necessity of digital transformation, the enterprise overhauled its legacy ERP.', ar: 'إدراكاً منها للضرورة الاستراتيجية للتحول الرقمي، قامت المنشأة بتطوير نظامها الشامل القديم.', phoneticAr: 'رِيكُوجْنَاايْزِينْج ذَا سْتْرَاتِيجِيك' },
      { en: 'Backed by leading sovereign wealth funds, the renewable energy venture commenced construction.', ar: 'بدعم مدعوم من صناديق ثروة سيادية رائدة، بدأت مبادرة الطاقة المتجددة أعمال البناء.', phoneticAr: 'بَاكْت بَاي لِيدِينْج سُوڤْرِين' },
    ],
    vocabulary: [
      { word: 'Longitudinal', ipa: '/ˌlɑːn.dʒəˈtuː.dɪ.nəl/', partOfSpeech: 'adjective (research)', meaningAr: 'طولي مستمر وممتد عبر سنوات طويلة من المتابعة', exampleEn: 'A longitudinal cohort study.', exampleAr: 'دراسة طولية أترابية متتابعة.' },
      { word: 'Biomarker', ipa: '/ˈbaɪ.oʊˌmɑːr.kɚ/', partOfSpeech: 'noun (science)', meaningAr: 'علامة ومؤشر حيوي دقيق', exampleEn: 'The biomarker indicates disease onset.', exampleAr: 'يشير المؤشر الحيوي إلى بدء المرض.' },
      { word: 'Overhaul', ipa: '/ˈoʊ.vɚ.hɑːl/', partOfSpeech: 'verb & noun', meaningAr: 'يفحص فحصاً شاملاً ويعيد بناء المنظومة', exampleEn: 'The company overhauled its infrastructure.', exampleAr: 'أعادت الشركة بناء بنيتها التحتية بالكامل.' },
      { word: 'Sovereign', ipa: '/ˈsɑːv.rən/', partOfSpeech: 'adjective & noun', meaningAr: 'سيادي ومستقل', exampleEn: 'Sovereign wealth funds invest globally.', exampleAr: 'تستثمر صناديق الثروة السيادية عالمياً.' },
    ],
    commonMistakes: [
      { wrong: 'After having finished, he left.', correct: 'Having finished, he left.', reasonAr: 'كلمة After زائدة ومكررة مع Having finished.' },
      { wrong: 'Driving down the road, a deer hit the car.', correct: 'Driving down the road, we hit a deer.', reasonAr: 'الفاعل المعلق: الغزال لم يكن يقود السيارة، بل نحن!' },
    ],
    realWorldChallengeAr: 'اختصر جملتين طويلتين من سيرتك الذاتية في جملة واحدة تبدأ بـ: "Having managed..." أو "Faced with...".',
    exercises: [
      {
        id: 'c1-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة الإيجازية السليمة لحدث اكتمل وانتهى قبل الحدث الرئيسي (Perfect Participle):',
        instructionEn: 'Choose the correct perfect participle clause for completed prior action:',
        question: '_____ the comprehensive market analysis, the executive committee approved the expansion.',
        options: [
          'Having completed',
          'After having completed',
          'Completed having',
          'To have completing',
        ],
        correctAnswer: 0,
        explanationAr: 'الصيغة الأكاديمية القياسية هي Having completed بدون كلمة After المكررة.',
      },
      {
        id: 'c1-5-ex-2',
        type: 'multiple_choice',
        instructionAr: 'أي جملة تتفادى خطأ "الفاعل المعلق التائه" (Dangling Participle) بشكل سليم؟',
        instructionEn: 'Which sentence correctly avoids a dangling modifier?',
        question: 'Identify the sentence with flawless subject agreement:',
        options: [
          'Walking into the laboratory, the scientist noticed an unsealed vial.',
          'Walking into the laboratory, an unsealed vial was noticed.',
          'Walking into the laboratory, the vial was on the desk.',
          'Walking into the laboratory, the temperature felt cold to the vial.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة لأن الفاعل بعد الفاصلة هو العالم the scientist وهو من كان يمشي ويدخل المعمل.',
      },
      {
        id: 'c1-5-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ باسم الفاعل (-ing) من الفعل realize للتعبير عن الإدراك والسبب:',
        instructionEn: 'Fill in the present participle of realize:',
        question: '______ that the deadline was non-negotiable, the team mobilized extra engineers.',
        correctAnswer: ['Realizing', 'realizing'],
        explanationAr: 'نبدأ باسم الفاعل Realizing للتعبير عن السبب والإدراك.',
      },
      {
        id: 'c1-5-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة المبنية للمجهول (Past Participle) لبدء الجملة التفسيرية:',
        instructionEn: 'Choose the passive past participle to begin the clause:',
        question: '_____ by venture capital leaders, the biotechnology enterprise went public.',
        options: ['Backed', 'Backing', 'Having backing', 'To back'],
        correctAnswer: 0,
        explanationAr: 'الصيغة المبنية للمجهول تبدأ باسم المفعول Backed (مدعومةً بـ...).',
      },
      {
        id: 'c1-5-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة participle clause متقدمة:',
        instructionEn: 'Arrange the words into a correct participle sentence:',
        question: 'exam / the / passed / studied / Having / hard / she',
        correctAnswer: 'Having studied hard she passed the exam',
        explanationAr: 'الترتيب: Having studied hard she passed the exam.',
      },
      {
        id: 'c1-5-ex-6',
        type: 'error_hunt',
        instructionAr: 'احذف الكلمة الزائدة المكررة قبل Having (اكتب الكلمة الزائدة فقط):',
        instructionEn: 'Remove the redundant preposition before the perfect participle:',
        question: 'After having evaluated the bids, the board awarded the contract.',
        correctAnswer: ['After', 'after'],
        explanationAr: 'كلمة After زائدة ومستنكرة بلاغياً مع صيغة Having evaluated.',
      },
      {
        id: 'c1-5-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى المكافئ لجملة: "Faced with inflation, companies raised prices"؟',
        instructionEn: 'What is the full equivalent clause of "Faced with inflation"?',
        question: '"Faced with inflation" is grammatically equivalent to:',
        options: [
          'Because companies were faced with inflation',
          'While companies are facing inflation tomorrow',
          'If companies will face inflation',
          'Although companies avoided inflation',
        ],
        correctAnswer: 0,
        explanationAr: 'شبه الجملة الوصفية هنا تختصر: Because companies were faced with...',
      },
      {
        id: 'c1-5-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب إيجازي راقٍ: "بعد أن أتم التدريب، انضم للفريق":',
        instructionEn: 'Translate using a perfect participle clause: "بعد أن أتم التدريب، انضم للفريق":',
        question: 'Translate: "بعد أن أتم التدريب، انضم للفريق"',
        correctAnswer: ['Having completed the training he joined the team', 'Having completed the training, he joined the team.', 'having completed the training, he joined the team'],
        explanationAr: 'الترجمة الصحيحة: Having completed the training, he joined the team.',
      },
    ],
  },
  {
    id: 'lesson-c1-6-academic-hedging-register',
    level: 'C1',
    order: 6,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التفكير النقدي والدقة الأكاديمية والاختبار',
    chapterTitleEn: 'Chapter 3: Academic Register, Discourse & Assessment',
    titleAr: 'الدرس 6: التحفظ العلمي والتعبير الاحترافي الرصين (Academic Hedging & Register)',
    titleEn: 'Lesson 6: Academic Hedging, Tone & High-Level Register',
    category: 'كتابة وأسلوب وبلاغة (C1)',
    iconName: 'GraduationCap',
    estimatedMinutes: 18,
    objectivesAr: [
      'إتقان تقنية التحفظ العلمي (Hedging) لتفادي التعميمات الجازمة والادعاءات غير المثبتة.',
      'استخدام الأفعال الملطفة والظروف الاحتمالية: tends to, warrants, allegedly, plausible.',
      'التحكم في المستوى الأسلوبي (Register) والتفرقة بين اللفظ العامي والرسمي والأكاديمي.',
      'صياغة خلاصات بحثية وتقارير استشارية رفيعة المستوى تليق بمجلات النخبة.',
    ],
    explanationMarkdownAr: `### التحفظ العلمي وضبط النبرة الأكاديمية (Hedging & Register)

#### 1. ما هو التحفظ العلمي (Academic Hedging)؟
في اللغة اليومية قد تقول بكل ثقة: *"This proves that technology makes people lonely."*
أما في الأوساط الأكاديمية والاستشارية الرفيعة C1، **فالتعميم الجازم علامة على التسرع وضعف المنهجية**.
الباحثون والمستشارون المرموقون **يلطفون ادعاءاتهم بحذر مدروس (Hedging)** ليعكسوا دقة نسبية وموضوعية منيعة ضد النقد:
- **الصياغة الأكاديمية الرصينة**:
  - *The empirical data **tends to suggest** that prolonged screen exposure **may contribute to** feelings of social isolation among certain demographics.*

#### 2. ترسانة أدوات التحفظ الأكاديمي (Hedging Arsenal):
1. **أفعال التلطيف والتلميح (Introductory Verbs)**:
   - *tends to indicate / tends to suggest* (يميل إلى إظهار / الإيحاء بـ)
   - *appears to elucidate* (يبدو أنه يوضح)
   - *warrants further scrutiny* (يستحق مزيداً من الفحص والتمحيص)
2. **الظروف الاحتمالية الدقيقة (Probability Adverbs)**:
   - *plausibly* (بشكل معقول ومنطقي)
   - *predominantly* (في الغالب الأعم)
   - *seemingly / arguably* (كما يبدو / كما يمكن المحاجة به)
3. **التحديد النسبي (Limiting Phrases)**:
   - *In many respects* (في جوانب عدة)
   - *To a certain extent* (إلى حد معين)

#### 3. معيار المستوى الأسلوبي (Register Shift):
ارتقِ بمفرداتك من العامي اليومي إلى الأكاديمي التنفيذي:
\`\`\`
مستوى عامي بسيط (A2/B1)      -> مستوى أكاديمي وتنفيذي رفيع (C1)
Big / Huge                   -> Substantial / Exponential
Get / Find out               -> Ascertain / Discern
Fix a problem                -> Rectify / Mitigate an issue
Look into                    -> Investigate / Scrutinize
A lot of                     -> A myriad of / Substantial volume of
\`\`\``,
    rulesAndStructuresAr: `قواعد Hedging: تجنب التعميمات المطلقة (always, never, proves, completely). استبدلها بـ: tends to suggest, may indicate, arguably, plausible. معيار Register: استخدم مفردات لاتينية الأصل (mitigate, ascertain, elucidate) بدلاً من phrasal verbs في الأوراق البحثية والعقود الرسمية.`,
    summaryAr: 'التحفظ العلمي يميز المتحدث المحترف عن الهاوي. لا تجزم بما لم يثبت قطعاً، واستخدم صياغات مثل tends to indicate و warrants investigation.',
    arabicContrastPoint: {
      titleAr: 'الجزم المطلق في كتابة المقالات الأكاديمية',
      descriptionAr: 'كثير من الطلاب يكتبون في اختبارات الكتابة: "This proves 100% that social media is bad". المصحح الدولي يخصم درجات فوراً للتعميم غير العلمي. الصواب: "The findings suggest that excessive use may adversely affect well-being".',
      badArabicHabit: 'This study completely proves that our strategy is perfect.',
      correctEnglishWay: 'The empirical evidence tends to indicate that our strategy is sound.',
    },
    examples: [
      { en: 'The preliminary clinical trial results appear to corroborate our initial epidemiological hypothesis.', ar: 'يبدو أن النتائج الأولية للتجربة السريرية تعزز وتؤيد فرضيتنا الوبائية المبدئية (تحفظ علمي متقن).', phoneticAr: 'ذَا بْرِلِيمِنَرِي كْلِينِيكَل تْرَايَل' },
      { en: 'These anomalous metrics warrant comprehensive forensic scrutiny by independent specialists.', ar: 'تستحق هذه المقاييس الشاذة فحصاً وتدقيقاً جنائياً شاملاً من قبل متخصصين مستقلين.', phoneticAr: 'ذِيز أَنُومَالَاس مِتْرِيكْس وُورَانْت' },
      { en: 'Arguably, proactive risk mitigation represents the single most crucial factor in enterprise stability.', ar: 'يمكن المحاجة القوية بأن التخفيف الاستباقي للمخاطر يمثل العامل الأشد حساسية في استقرار المنشأة.', phoneticAr: 'آرْجْيُوآبْلِي، بْرُوآكْتِڤ رِيسْك' },
    ],
    vocabulary: [
      { word: 'Corroborate', ipa: '/kəˈrɑː.bə.reɪt/', partOfSpeech: 'verb (academic)', meaningAr: 'يعزز ويدعم فرضية بأدلة وقرائن جديدة', exampleEn: 'Fresh data corroborated the theory.', exampleAr: 'عززت البيانات الحديثة النظرية.' },
      { word: 'Mitigate', ipa: '/ˈmɪt̬.ə.ɡeɪt/', partOfSpeech: 'verb', meaningAr: 'يخفف من حدة خطر أو أثر سلبي', exampleEn: 'Mitigate cybersecurity threats.', exampleAr: 'خفف من حدة التهديدات السيبرانية.' },
      { word: 'Anomalous', ipa: '/əˈnɑː.mə.ləs/', partOfSpeech: 'adjective', meaningAr: 'شاذ وخارج عن النمط الطبيعي المتوقع', exampleEn: 'We detected anomalous network traffic.', exampleAr: 'رصدنا حركة مرور شبكية شاذة.' },
      { word: 'Plausible', ipa: '/ˈplɑː.zə.bəl/', partOfSpeech: 'adjective', meaningAr: 'معقول ومقبول منطقياً وقابل للتصديق', exampleEn: 'A plausible hypothesis was formulated.', exampleAr: 'تمت صياغة فرضية معقولة منطقياً.' },
    ],
    commonMistakes: [
      { wrong: 'This research proves that all people are stressed.', correct: 'This research suggests that many individuals may experience stress.', reasonAr: 'التعميم المطلق بـ proves و all غير مقبول في الكتابة الأكاديمية الرصينة.' },
      { wrong: 'We must fix this thing right now (in formal memo).', correct: 'It is imperative that we rectify this deficiency immediately.', reasonAr: 'ترقية المستوى الأسلوبي Register إلى الألفاظ الرسمية.' },
    ],
    realWorldChallengeAr: 'أعد صياغة جملة قطعية عامية من مجالك لتصبح جملة أكاديمية متحفظة ومحصنة علمياً بـ "tends to suggest".',
    exercises: [
      {
        id: 'c1-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة الأكاديمية المتحفظة (Hedging) الأنسب لورقة بحثية علمية:',
        instructionEn: 'Choose the sentence demonstrating appropriate academic hedging:',
        question: 'Which statement exhibits professional academic hedging?',
        options: [
          'The findings tend to suggest a correlation between sleep quality and cognitive retention.',
          'The findings prove 100% that everyone without sleep will fail cognitive tests.',
          'The findings completely prove that sleep is the only thing that matters.',
          'The findings definitely show all students need eight hours.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى نموذجية للتحفظ العلمي: tend to suggest a correlation (تميل لإظهار ارتباط) دون تعميم جازم.',
      },
      {
        id: 'c1-6-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل الأكاديمي الرفيع المرادف لـ "Fix / Reduce the negative impact":',
        instructionEn: 'Choose the formal C1 verb meaning to reduce risk severity:',
        question: 'Proactive measures were enacted to _____ operational exposure to currency fluctuations.',
        options: ['mitigate', 'fix up', 'make better', 'push away'],
        correctAnswer: 0,
        explanationAr: 'الفعل mitigate هو المصطلح المهني والأكاديمي الدقيق لتخفيف حدة المخاطر والآثار السلبية.',
      },
      {
        id: 'c1-6-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل الأكاديمي الذي يعني يستحق ويستوجب فحصاً (warrants):',
        instructionEn: 'Fill in the verb meaning justifies or requires investigation:',
        question: 'These unexpected survey anomalies ______ further scientific scrutiny.',
        correctAnswer: ['warrant', 'warrants', 'Warrant', 'Warrants'],
        explanationAr: 'الفعل الأكاديمي هو warrant (يستوجب / يستحق التحقيق).',
      },
      {
        id: 'c1-6-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما التعبير الأكاديمي الأكثر رصانة بدلاً من الكلمة البسيطة "huge":',
        instructionEn: 'Select the high-register replacement for the informal "huge":',
        question: 'The initiative yielded a _____ expansion in our international subscriber base.',
        options: ['substantial', 'huge', 'super big', 'monstrous'],
        correctAnswer: 0,
        explanationAr: 'الصفة الأكاديمية الرفيعة هي substantial (ملحوظ وكبير وجوهري).',
      },
      {
        id: 'c1-6-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين استنتاج أكاديمي متحفظ ورصين:',
        instructionEn: 'Arrange the words into a properly hedged academic sentence:',
        question: 'suggest / data / to / The / correlation / a / tends',
        correctAnswer: 'The data tends to suggest a correlation',
        explanationAr: 'الترتيب: The data tends to suggest a correlation.',
      },
      {
        id: 'c1-6-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح التعميم الجازم غير العلمي في الجملة (اكتب الفعل الملطف البديل المصحح):',
        instructionEn: 'Replace the unhedged verb "proves" with an appropriate C1 hedging verb:',
        question: 'This preliminary survey proves that customer behavior is changing.',
        correctAnswer: ['suggests', 'indicates', 'Suggests', 'Indicates'],
        explanationAr: 'في الأبحاث المبدئية نستخدم suggests أو indicates بدلاً من proves الجازمة.',
      },
      {
        id: 'c1-6-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما معنى كلمة "plausible" في تقييم الفرضيات العلمية؟',
        instructionEn: 'What does "plausible" mean in scientific evaluation?',
        question: 'A "plausible explanation" is one that is:',
        options: [
          'reasonable, logical, and believable based on evidence',
          'completely impossible and absurd',
          'proven with 100% mathematical certainty',
          'written in informal slang',
        ],
        correctAnswer: 0,
        explanationAr: 'كلمة plausible تعني فرضية معقولة ومنطقية وقابلة للتصديق.',
      },
      {
        id: 'c1-6-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب أكاديمي متحفظ: "تميل النتائج إلى إظهار تحسن ملحوظ":',
        instructionEn: 'Translate with academic hedging: "تميل النتائج إلى إظهار تحسن ملحوظ":',
        question: 'Translate: "تميل النتائج إلى إظهار تحسن ملحوظ"',
        correctAnswer: ['The results tend to show a substantial improvement', 'The findings tend to indicate a substantial improvement', 'The results tend to suggest a significant improvement', 'the results tend to show a substantial improvement'],
        explanationAr: 'الترجمة الأكاديمية الرفيعة: The findings tend to indicate a substantial improvement.',
      },
    ],
  },
  {
    id: 'lesson-c1-7-level-c1-assessment',
    level: 'C1',
    order: 7,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: التفكير النقدي والدقة الأكاديمية والاختبار',
    chapterTitleEn: 'Chapter 3: Academic Register, Discourse & Assessment',
    titleAr: 'الدرس 7: اختبار واجتياز المستوى المتقدم C1 الشامل',
    titleEn: 'Lesson 7: Level C1 Comprehensive Mastery Assessment',
    category: 'المراجعة والاختبار (C1)',
    iconName: 'Award',
    estimatedMinutes: 22,
    objectivesAr: [
      'مراجعة شاملة لجميع مخرجات المستوى المتقدم C1 (Negative Inversion, Inverted Conditionals, Subjunctive, Clefts, Participles, Hedging).',
      'التأكد من التمكن البلاغي التام في الخطاب الرسمي والأوراق البحثية والمفاوضات.',
      'تقييم الدقة النحوية في أصعب التراكيب اللغوية وأدقها.',
      'اجتياز التقييم النهائي بنجاح للتأهل إلى قمة الهرم اللغوي: مستوى الإتقان التام C2 (Proficiency).',
    ],
    explanationMarkdownAr: `### المراجعة الشاملة لمستوى المتقدمين C1 (Advanced)

#### علامات التمكن الاحترافي المكتسبة في C1:
1. **القلب النحوي البلاغي (Negative Inversion)**:
   - *Not only did they exceed targets, but they also expanded...*
   - *Seldom do we witness...* / *Under no circumstances should you...*
2. **القلب الشرطي بدون If (Inverted Conditionals)**:
   - *Should you require further information...*
   - *Were I in your position...* / *Had we not intervened...*
3. **صيغة الشرط المنصوب (Subjunctive Mood)**:
   - المصدر المجرد الإلزامي: *The board demanded that he submit the report*.
   - استخدام *be*: *It is vital that she be present*.
4. **الجمل المشقوقة (Cleft Sentences)**:
   - *It was the lead architect who solved the crisis*.
   - *What we need most is transparency*.
5. **أشباه الجمل الوصفية الإيجازية (Participle Clauses)**:
   - *Having analyzed the metrics, the committee approved the grant*.
   - تجنب خطأ الفاعل المعلق *Dangling Participle*.
6. **التحفظ العلمي وضبط المستوى الأسلوبي (Hedging & Register)**:
   - استبدال الجزم بـ *tends to indicate* و *warrants scrutiny*.
   - الارتقاء بالمفردات إلى أرقى المستويات الأكاديمية.

> **تعليمات الاختبار الشامل للمستوى المتقدم**:
> أجب عن الأسئلة العشرة التالية بدقة متناهية لتتويج مسيرتك في المستوى C1 وفتح بوابة الإتقان اللغوي المطلق **C2 (Proficiency)**!`,
    rulesAndStructuresAr: `خلاصة C1: القلب النحوي بعد النفي (Negative + Aux + Subj + Verb). القلب الشرطي (Should/Were/Had). صيغة Subjunctive (المصدر المجرد بدون s ومع be). الجمل المشقوقة It was ... that. أشباه الجمل Having + V3 مع تطابق الفاعل. التحفظ العلمي بـ tends to و may.`,
    summaryAr: 'مبارك وصولك لقمة الفصاحة الإنجليزية. أنت الآن قادر على كتابة أوراق بحثية منيعة ومخاطبة مجالس الإدارة العالمية بأعلى درجات البلاغة.',
    arabicContrastPoint: {
      titleAr: 'تكامل الفصاحة والنبرة الخطابية',
      descriptionAr: 'المستوى C1 لا يقيس مجرد صحة القواعد، بل يقيس الذوق اللغوي، والقدرة على التوكيد البلاغي، والتحفظ الموضوعي الرصين.',
      badArabicHabit: 'Using flat predictable sentence structures throughout complex arguments.',
      correctEnglishWay: 'Masterfully weaving inversion, clefting, and participle clauses to create rhythmic compelling discourse.',
    },
    examples: [
      { en: 'Not only did the startup achieve operational break-even, but it also secured substantial intellectual property protections.', ar: 'لم يقتصر إنجاز الشركة الناشئة على الوصول لنقطة التعادل التشغيلي، بل أمّنت أيضاً حماية مكثفة لملكيتها الفكرية.', phoneticAr: 'نُوت أُونْلِي دِيد ذَا سْتَارْتَاب' },
      { en: 'Should regulatory compliance mandate an architectural overhaul, our modular codebase is prepared.', ar: 'إن فرض الامتثال التنظيمي إعادة بناء شاملة للمنظومة، فشفرتنا البرمجية المعيارية مهيأة تماماً.', phoneticAr: 'شُود رِيجْيُولَاتُورِي كُومْبْلَايَانْس' },
      { en: 'Having validated the longitudinal empirical models, the research institute recommended that governments implement precautionary guidelines.', ar: 'بعد أن كان المعهد البحثي قد تحقق من صحة النماذج التجريبية الطولية، أوصى بأن تطبق الحكومات إرشادات احترازية (Subjunctive: implement).', phoneticAr: 'هَـاڤِينْج ڤَالِيدَيْتِد' },
    ],
    vocabulary: [
      { word: 'Precautionary', ipa: '/prɪˈkɑː.ʃən.er.i/', partOfSpeech: 'adjective', meaningAr: 'احترازي ووقائي', exampleEn: 'Take precautionary measures.', exampleAr: 'اتخذ تدابير احترازية.' },
      { word: 'Break-even', ipa: '/ˈbreɪkˌiː.vən/', partOfSpeech: 'noun (finance)', meaningAr: 'نقطة التعادل المالي (تساوي الإيرادات والتكاليف)', exampleEn: 'The project reached break-even.', exampleAr: 'وصل المشروع لنقطة التعادل المالي.' },
      { word: 'Intellectual property', ipa: '/ˌɪn.təlˈek.tʃu.əl ˈprɑː.pɚ.t̬i/', partOfSpeech: 'noun', meaningAr: 'ملكية فكرية وبراءات اختراع', exampleEn: 'Protect corporate intellectual property.', exampleAr: 'احمِ الملكية الفكرية للشركة.' },
    ],
    commonMistakes: [
      { wrong: 'Not only they were late, but they forgot the files.', correct: 'Not only were they late, but they also forgot the files.', reasonAr: 'القلب النحوي إلزامي بتقديم were على they.' },
      { wrong: 'The board recommended that he is fired.', correct: 'The board recommended that he be fired.', reasonAr: 'صيغة Subjunctive تتطلب be وليس is.' },
    ],
    realWorldChallengeAr: 'اكتب خطاباً تقديمياً من 4 جمل لمنحة أو ترقية وظيفية دولية تدمج فيه: جملة Negative Inversion، وجملة Subjunctive، وجملة Participle clause.',
    exercises: [
      {
        id: 'c1-7-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة القلب النحوي البلاغية بعد العبارة السلبية "Not only":',
        instructionEn: 'Choose the inverted auxiliary and subject after "Not only":',
        question: 'Not only _____ exceed quarterly projections, but they also filed two international patents.',
        options: ['did the engineering team', 'the engineering team did', 'has the team', 'the team had'],
        correctAnswer: 0,
        explanationAr: 'بعد Not only نطبق القلب النحوي بتقديم did على الفاعل the engineering team.',
      },
      {
        id: 'c1-7-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الشرطية الراقية بدون استخدام كلمة "If":',
        instructionEn: 'Choose the sophisticated conditional inversion without "If":',
        question: '_____ you require any further clarification, please do not hesitate to contact our department.',
        options: ['Should', 'Had', 'Were', 'Would'],
        correctAnswer: 0,
        explanationAr: 'صيغة القلب الشرطي الرسمية في المخاطبات المهنية: Should you require...',
      },
      {
        id: 'c1-7-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المجرد بدون s في صيغة Subjunctive الرسمية (adopt):',
        instructionEn: 'Fill in the bare infinitive for the mandative subjunctive:',
        question: 'The oversight committee demanded that management ______ the cybersecurity protocols.',
        correctAnswer: ['adopt', 'Adopt'],
        explanationAr: 'صيغة Subjunctive الرسمية تفرض المصدر المجرد adopt بدون s.',
      },
      {
        id: 'c1-7-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة الربط الدقيقة للتعبير عن التناقض والمقابلة المنهجية المباشرة:',
        instructionEn: 'Choose the precise discourse connector expressing direct contrast:',
        question: 'The initial prototype exhibited high latency; _____, the second iteration achieved sub-millisecond response times.',
        options: ['conversely', 'moreover', 'subsequently', 'likewise'],
        correctAnswer: 0,
        explanationAr: 'الرابط conversely يفيد المقابلة والعكس المباشر بدقة أكاديمية.',
      },
      {
        id: 'c1-7-ex-5',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة التحفظ العلمي الأكاديمية السليمة:',
        instructionEn: 'Choose the sentence exhibiting appropriate academic hedging:',
        question: 'Which statement demonstrates proper scientific hedging?',
        options: [
          'The epidemiological data tends to suggest an emergent trend.',
          'The epidemiological data proves 100% that everyone is sick.',
          'The epidemiological data completely proves the hypothesis.',
          'The epidemiological data definitely says so.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى نموذجية للتحفظ العلمي: tends to suggest an emergent trend.',
      },
      {
        id: 'c1-7-ex-6',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة participle clause متقدمة بدون أخطاء:',
        instructionEn: 'Arrange the words into a correct participle sentence:',
        question: 'the / data / Having / published / analyzed / they / paper / the',
        correctAnswer: 'Having analyzed the data they published the paper',
        explanationAr: 'الترتيب: Having analyzed the data they published the paper.',
      },
      {
        id: 'c1-7-ex-7',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ في اختصار النفي مع القلب الشرطي (اكتب الكلمتين منفصلتين):',
        instructionEn: 'Correct the contracted negative in conditional inversion:',
        question: 'Hadn\'t the founders persevered, the company would have folded.',
        correctAnswer: ['Had the founders not', 'had the founders not', 'Had the founders not persevered'],
        explanationAr: 'في الإنجليزية الرسمية نفصل النفي: Had the founders not persevered.',
      },
      {
        id: 'c1-7-ex-8',
        type: 'multiple_choice',
        instructionAr: 'اختر الصياغة المشقوقة (It-cleft) السليمة للتوكيد على دور المهندسة سارة:',
        instructionEn: 'Select the correct it-cleft emphasizing Sarah:',
        question: '_____ architected the distributed ledger protocol.',
        options: [
          'It was Sarah who',
          'It was Sarah which',
          'What was Sarah who',
          'There was Sarah who',
        ],
        correctAnswer: 0,
        explanationAr: 'التركيبة السليمة: It was Sarah who...',
      },
      {
        id: 'c1-7-ex-9',
        type: 'multiple_choice',
        instructionAr: 'ما التركيب النحوي المناسب لفعل الكينونة بعد "It is imperative that":',
        instructionEn: 'Choose the subjunctive form of to be after "It is imperative that":',
        question: 'It is imperative that every remote employee _____ connected via encrypted VPN.',
        options: ['be', 'is', 'was', 'should being'],
        correctAnswer: 0,
        explanationAr: 'فعل الكينونة في صيغة Subjunctive يظل دائماً be.',
      },
      {
        id: 'c1-7-ex-10',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة بأسلوب القلب النحوي البليغ: "لم يحدث قط أن رأينا مثل هذا الابتكار":',
        instructionEn: 'Translate using negative inversion: "لم يحدث قط أن رأينا مثل هذا الابتكار":',
        question: 'Translate: "لم يحدث قط أن رأينا مثل هذا الابتكار"',
        correctAnswer: ['Never have we seen such innovation', 'Never before have we seen such innovation', 'never have we seen such innovation'],
        explanationAr: 'الترجمة البلاغية الرفيعة: Never (before) have we seen such innovation.',
      },
    ],
  },
];
