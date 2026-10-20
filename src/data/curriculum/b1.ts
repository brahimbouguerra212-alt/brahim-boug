import type { Lesson } from '../../types/learning.ts';

export const B1_LESSONS: Lesson[] = [
  {
    id: 'lesson-b1-1-present-perfect',
    level: 'B1',
    order: 1,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أزمنة الربط والسرد المتوسط',
    chapterTitleEn: 'Chapter 1: Bridge Tenses & Narrative Flow',
    titleAr: 'الدرس 1: المضارع التام (Present Perfect) والربط بين الماضي والحاضر',
    titleEn: 'Lesson 1: The Present Perfect Tense (Have/Has + V3)',
    category: 'قواعد وأزمنة (B1)',
    iconName: 'GitCommit',
    estimatedMinutes: 18,
    objectivesAr: [
      'التفرقة الجوهرية بين المضارع التام (أثر حاضر) والماضي البسيط (وقت محدد منتهٍ).',
      'صياغة التراكيب بدقة: have / has + التصريف الثالث للفعل (Past Participle - V3).',
      'إتقان الفارق الدقيق بين Since (نقطة البداية) و For (طول المدة الزمنية).',
      'استخدام الكلمات الدالة المحورية: ever, never, already, yet, just.',
    ],
    explanationMarkdownAr: `### لغز المضارع التام: الجسر بين الماضي والحاضر

#### 1. لماذا لا يوجد نظير مباشر للمضارع التام في العربية؟
في العربية نقول: "عشت في الرياض 5 سنوات" ونفهم المعنى من السياق إن كان مستمراً أو منتهياً.
في الإنجليزية:
- إذا انتهى الحدث وانتقلت لمدينة أخرى، تستخدم **الماضي البسيط**: *I lived in Riyadh for 5 years (and then I moved).*
- إذا كنت **ما زلت تعيش هناك حتى هذه اللحظة**، تستخدم **المضارع التام**: *I **have lived** in Riyadh for 5 years.*

#### 2. التكوين الرياضي للمضارع التام:
\`\`\`
Subject + [ have / has ] + [ التصريف الثالث للفعل - Past Participle (V3) ]
\`\`\`
- **I / You / We / They** -> **have** worked / seen / finished. (مختصرة: *I've, They've*)
- **He / She / It** -> **has** worked / seen / finished. (مختصرة: *He's, She's*)

#### 3. الحالات الأربع الكبرى للمضارع التام:
1. **خبرات وتجارب الحياة العامة دون تحديد وقت**:
   - *I **have visited** Japan twice.* (زرت اليابان مرتين في حياتي).
   - السؤال عن التجارب: *Have you **ever** tried sushi?* / النفي: *I have **never** seen him.*
2. **حدث وقع في الماضي وله أثر مباشر ملموس في الحاضر**:
   - *I **have lost** my keys.* (فقدت مفاتيحي = والنتيجة أنني الآن أقف عاجزاً أمام الباب).
   - قارن: *I lost my keys yesterday, but I found them this morning.*
3. **أحداث وقعت للتو واللحظة (مع Just)**:
   - *The train **has just arrived** at the station.* (القطار وصل للتو).
4. **حدث بدأ في الماضي ومستمر حتى الآن (مع Since و For)**:
   - **Since (منذ - نقطة البداية المحددة)**: *since 2018, since Monday, since 9:00 AM, since childhood*.
   - **For (لمدة - مقدار الزمن الكلي)**: *for ten years, for five days, for two hours, for a long time*.

#### 4. موقع Already و Yet:
- **Already** (بالفعل - قبل الموعد المتوقع): *I have **already** submitted the report.*
- **Yet** (حتى الآن - في نهاية السؤال والنفي): *Have you received the email **yet**?* / *No, I haven't received it **yet**.*`,
    rulesAndStructuresAr: `الصيغة: have/has + V3. النفي: haven't/hasn't + V3. السؤال: Have/Has + Subject + V3? قاعدة Since: نقطة زمنية محددة في الماضي (since 2020). قاعدة For: إجمالي المدة الزمنية (for 4 years). ممنوع استخدام كلمات الماضي المنتهي (yesterday, ago, last) مع المضارع التام!`,
    summaryAr: 'المضارع التام يربط الماضي بالحاضر. استخدم have/has + V3. استخدم since للبداية و for للمدة. تجنب كلمات الماضي المحدد مع هذا الزمن.',
    arabicContrastPoint: {
      titleAr: 'الجمع الممنوع بين المضارع التام وكلمات الماضي المحدد',
      descriptionAr: 'من أكبر الأخطاء العربية قول: "I have seen him yesterday" لأن yesterday وقت ماضٍ مغلق ومحدد. القاعدة الصارمة: إذا ذكرت yesterday أو ago أو last، يجب استخدام الماضي البسيط الصريح: "I saw him yesterday".',
      badArabicHabit: 'I have arrived two hours ago. / I have seen him yesterday.',
      correctEnglishWay: 'I arrived two hours ago. / I saw him yesterday.',
    },
    examples: [
      { en: 'She has worked as a data engineer at this tech firm since 2021.', ar: 'هي تعمل كمهندسة بيانات في هذه الشركة التقنية منذ عام 2021 (وما زالت مستمرة).', phoneticAr: 'شِي هَاز وِيركْت أَز أَ دَاتَا إِنْجِينِير سِينْس تُو ثَاوْزَنْد تْوِينْتِي وَان' },
      { en: 'Have you ever managed a remote engineering team before?', ar: 'هل سبق لك أن أدرت فريقاً هندسياً عن بُعد من قبل؟', phoneticAr: 'هَاف يُو إِڤَر مَانِيجْد أَ رِيمُوت إِنْجِينِيرِينْج تِيم؟' },
      { en: 'I have already reviewed the pull request on GitHub.', ar: 'لقد راجعت طلب الدمج بالفعل على جيت هب.', phoneticAr: 'آيْ هَاف أُولْرِيدِي رِيڤْيُود ذَا بُول رِيكْوِيسْت' },
      { en: 'They have not confirmed the product launch date yet.', ar: 'هم لم يؤكدوا موعد إطلاق المنتج حتى الآن.', phoneticAr: 'ذَي هَاف نُوت كُونْفِيرْمد ذَا بْرُودَاكْت لُونْش دَيْت يِت' },
    ],
    vocabulary: [
      { word: 'Confirm', ipa: '/kənˈfɝːm/', partOfSpeech: 'verb', meaningAr: 'يؤكد ويثبت رسمياً', exampleEn: 'Please confirm your attendance.', exampleAr: 'يرجى تأكيد حضورك.' },
      { word: 'Review', ipa: '/rɪˈvjuː/', partOfSpeech: 'verb & noun', meaningAr: 'يراجع / مراجعة نقدية', exampleEn: 'I will review your code tonight.', exampleAr: 'سأراجع شفرتك البرمجية الليلة.' },
      { word: 'Manage', ipa: '/ˈmæn.ədʒ/', partOfSpeech: 'verb', meaningAr: 'يدير وينظم', exampleEn: 'She manages thirty developers.', exampleAr: 'هي تدير ثلاثين مطوراً.' },
      { word: 'Launch', ipa: '/lɑːntʃ/', partOfSpeech: 'verb & noun', meaningAr: 'يطلق مشروعاً أو منتجاً', exampleEn: 'The startup will launch next month.', exampleAr: 'ستطلق الشركة الناشئة الشهر القادم.' },
      { word: 'Experience', ipa: '/ɪkˈspɪr.i.əns/', partOfSpeech: 'noun & verb', meaningAr: 'خبرة / تجربة عملية', exampleEn: 'He has seven years of experience.', exampleAr: 'لديه سبع سنوات من الخبرة.' },
    ],
    commonMistakes: [
      { wrong: 'I have graduated in 2021.', correct: 'I graduated in 2021.', reasonAr: 'وجود تاريخ ماضٍ محدد (in 2021) يفرض استخدام الماضي البسيط graduated.' },
      { wrong: 'I am living here since five years.', correct: 'I have lived here for five years.', reasonAr: 'للمدة الإجمالية نستخدم for، وللحدث الممتد نستخدم المضارع التام have lived.' },
      { wrong: 'Did you finish the task yet?', correct: 'Have you finished the task yet?', reasonAr: 'كلمة yet في نهاية السؤال تتطلب استخدام زمن المضارع التام Have you finished.' },
    ],
    realWorldChallengeAr: 'تحدث عن إنجازين قمت بهما في مسيرتك المهنية مستخدماً المضارع التام (I have built... / I have worked...).',
    exercises: [
      {
        id: 'b1-1-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الزمن المناسب مع الدلالة الزمنية الماضية المحددة "last Tuesday":',
        instructionEn: 'Choose the correct tense with a specific past time marker:',
        question: 'Our engineering team _____ the final deployment last Tuesday.',
        options: ['finished', 'has finished', 'have finished', 'are finishing'],
        correctAnswer: 0,
        explanationAr: 'وجود وقت ماضٍ محدد (last Tuesday) يفرض استخدام الماضي البسيط finished وليس المضارع التام.',
      },
      {
        id: 'b1-1-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر بين Since و For مع المدة الإجمالية (five years):',
        instructionEn: 'Choose between Since and For for duration:',
        question: 'She has been a senior consultant at this firm _____ five years.',
        options: ['for', 'since', 'from', 'in'],
        correctAnswer: 0,
        explanationAr: 'المدة الإجمالية للزمن (five years) تأخذ حرف For، بينما Since تأتي مع نقطة البداية.',
      },
      {
        id: 'b1-1-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالكلمة الدالة على التجارب السابقة في السؤال:',
        instructionEn: 'Fill in the keyword used for asking about life experiences:',
        question: 'Have you ______ visited the Silicon Valley tech hub?',
        correctAnswer: ['ever', 'Ever'],
        explanationAr: 'نستخدم ever في أسئلة المضارع التام للسؤال عن التجارب الحياتية السابقة.',
      },
      {
        id: 'b1-1-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما موضع واستخدام كلمة "yet" في الجمل الإنجليزية؟',
        instructionEn: 'Where and when is "yet" used?',
        question: 'The keyword "yet" is typically placed:',
        options: [
          'في نهاية الجمل المنفية والأسئلة بالمضارع التام',
          'بين الفعل والفاعل في الجمل المثبتة',
          'في بداية الجملة فقط',
          'مع الماضي البسيط فقط',
        ],
        correctAnswer: 0,
        explanationAr: 'تأتي yet في نهاية الأسئلة والجمل المنفية بالمضارع التام: haven\'t received it yet.',
      },
      {
        id: 'b1-1-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة مضارع تام صحيحة مع already:',
        instructionEn: 'Arrange the words into a correct present perfect sentence:',
        question: 'report / already / submitted / have / the / We',
        correctAnswer: 'We have already submitted the report',
        explanationAr: 'الترتيب: We + have already + submitted + the report.',
      },
      {
        id: 'b1-1-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ الزمني مع ago (اكتب الفعل المصحح بالماضي البسيط فقط):',
        instructionEn: 'Correct the tense error caused by ago:',
        question: 'The client has signed the agreement two hours ago.',
        correctAnswer: ['signed', 'Signed'],
        explanationAr: 'وجود ago يمنع استخدام has ويفرض الماضي البسيط signed.',
      },
      {
        id: 'b1-1-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة الربط المناسبة مع نقطة البداية الصريحة (2020):',
        instructionEn: 'Choose the correct marker for a starting point in time:',
        question: 'Omar has lived in Riyadh _____ 2020.',
        options: ['since', 'for', 'ago', 'during'],
        correctAnswer: 0,
        explanationAr: 'السنوات ونقاط البداية المحددة تأخذ since: since 2020.',
      },
      {
        id: 'b1-1-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "لم أنتهِ من واجبي حتى الآن":',
        instructionEn: 'Translate: "لم أنتهِ من واجبي حتى الآن":',
        question: 'Translate: "لم أنتهِ من واجبي حتى الآن"',
        correctAnswer: ['I have not finished my homework yet', "I haven't finished my homework yet", "I haven't finished my homework yet."],
        explanationAr: 'الترجمة الصحيحة: I have not finished my homework yet.',
      },
    ],
  },
  {
    id: 'lesson-b1-2-past-continuous-when-while',
    level: 'B1',
    order: 2,
    chapterOrder: 1,
    chapterTitleAr: 'الوحدة 1: أزمنة الربط والسرد المتوسط',
    chapterTitleEn: 'Chapter 1: Bridge Tenses & Narrative Flow',
    titleAr: 'الدرس 2: الماضي المستمر وأدوات الربط للسرد (When & While)',
    titleEn: 'Lesson 2: The Past Continuous & Narrative Interruption (When & While)',
    category: 'قواعد وأزمنة (B1)',
    iconName: 'Film',
    estimatedMinutes: 16,
    objectivesAr: [
      'التعبير عن فعل كان مستمراً في الماضي وقطعه حدث ماضٍ آخر مفاجئ.',
      'إتقان صياغة الماضي المستمر: was / were + verb-ing.',
      'التفرقة بين استخدام While (يليها حدث مستمر طويل) و When (يليها حدث قاطع قصير).',
      'سرد القصص والتجارب الحياتية بتتابع زمني جذاب وسليم لغوياً.',
    ],
    explanationMarkdownAr: `### الماضي المستمر (Past Continuous) وتقنية مقاطعة الأحداث

#### 1. ما هو الماضي المستمر؟
يعبر عن فعل كان **في طور الحدوث والاستمرار لفترة في نقطة محددة في الماضي**:
- *At 8:00 PM last night, I **was coding**.* (كنت مندمجاً في البرمجة في ذلك الوقت تحديداً).

#### 2. التكوين:
\`\`\`
Subject + [ was / were ] + [ Verb-ing ]
\`\`\`
- **I / He / She / It** -> **was** working / was sleeping.
- **You / We / They** -> **were** working / were sleeping.

#### 3. المعادلة السحرية: مقاطعة الأحداث (Interruption)
غالباً ما يجتمع **حدث طويل مستمر** (Past Continuous) مع **حدث قصير مفاجئ قطعه** (Past Simple)، ونربط بينهما بـ **While** أو **When**:
1. **مع أداة WHILE (بينما - يتبعها الحدث الطويل المستمر)**:
   - *While I **was driving** home, it **started** to rain heavily.*
   - (الحدث الطويل: القيادة was driving / الحدث القاطع المفاجئ: هطول المطر started).
2. **مع أداة WHEN (عندما - يتبعها الحدث القاطع القصير في الماضي البسيط)**:
   - *I **was sleeping** when the fire alarm **went off**.*
   - (كنت نائماً was sleeping عندما انطلق جرس الإنذار went off).

#### 4. حدثان متوازيان في نفس الوقت:
إذا كان الفعلان مستمرين معاً في الماضي دون أن يقطع أحدهما الآخر، نستخدم الماضي المستمر في كلا الطرفين مع While:
- *While Omar **was studying**, his brother **was playing** video games.*`,
    rulesAndStructuresAr: `الصيغة: was/were + Verb-ing. قاعدة While: يليها غالباً Past Continuous (While + was/were + V-ing). قاعدة When: يليها غالباً Past Simple (When + V2). النفي: wasn't / weren't + V-ing. السؤال: Was/Were + Subject + V-ing?`,
    summaryAr: 'الماضي المستمر (was/were + ing) للحدث الطويل الذي استغرق وقتاً. استخدم While للحدث المستمر، و When للحدث القصير الذي قاطعه.',
    arabicContrastPoint: {
      titleAr: 'الخلط بين الحدث الطويل والقاطع',
      descriptionAr: 'المتعلم قد يخلط فيضع الحدث المستمر بعد when والحدث القصير بعد while. تذكر دائماً: While تعني بينما ويتبعها استمرار طويل (-ing)، و when تعني عندما ويتبعها قاطع قصير (ماضي بسيط).',
      badArabicHabit: 'While the phone rang, I cooked.',
      correctEnglishWay: 'While I was cooking, the phone rang.',
    },
    examples: [
      { en: 'While the engineering team was testing the servers, a power outage occurred.', ar: 'بينما كان الفريق الهندسي يختبر الخوادم، حدث انقطاع مفاجئ في التيار الكهربائي.', phoneticAr: 'وَايْل ذي إِنْجِينِيرِينْج تِيم وَاز تِسْتِينْج' },
      { en: 'I was reviewing the financial report when the CEO entered the room.', ar: 'كنت أراجع التقرير المالي عندما دخل الرئيس التنفيذي الغرفة.', phoneticAr: 'آيْ وَاز رِيڤْيُوِينْج ذَا رِيبُورت وَن ذَا سِي إِي أُو إِنْتَرد' },
      { en: 'What were you doing at ten o\'clock yesterday morning?', ar: 'ماذا كنت تفعل في الساعة العاشرة من صباح أمس تحديداً؟', phoneticAr: 'وَات وِير يُو دُوِينْج أَت تِين أُو كْلُوك؟' },
    ],
    vocabulary: [
      { word: 'Outage', ipa: '/ˈaʊ.t̬ɪdʒ/', partOfSpeech: 'noun', meaningAr: 'انقطاع الخدمة أو الكهرباء', exampleEn: 'The sudden power outage stopped our work.', exampleAr: 'أوقف انقطاع الكهرباء المفاجئ عملنا.' },
      { word: 'Occur', ipa: '/əˈkɝː/', partOfSpeech: 'verb', meaningAr: 'يحدث / يقع فجأة', exampleEn: 'The incident occurred late at night.', exampleAr: 'وقع الحادث في وقت متأخر من الليل.' },
      { word: 'Interrupt', ipa: '/ˌɪn.t̬əˈrʌpt/', partOfSpeech: 'verb', meaningAr: 'يقاطع حديثاً أو عملاً مستمراً', exampleEn: 'Please do not interrupt the speaker.', exampleAr: 'من فضلك لا تقاطع المتحدث.' },
      { word: 'Simultaneously', ipa: '/ˌsaɪ.məlˈteɪ.ni.əs.li/', partOfSpeech: 'adverb', meaningAr: 'في الوقت ذاته بالتزامن', exampleEn: 'Both events occurred simultaneously.', exampleAr: 'وقع كلا الحدثين بالتزامن في الوقت نفسه.' },
    ],
    commonMistakes: [
      { wrong: 'While I was walk, I saw him.', correct: 'While I was walking, I saw him.', reasonAr: 'بعد was لا بد من إضافة -ing للفعل المستمر: walking.' },
      { wrong: 'When I was driving, the tire burst.', correct: 'While I was driving, the tire burst. (or: I was driving when the tire burst)', reasonAr: 'الحدث المستمر الطويل يسبق عادة بـ While أو نضع when قبل الحدث المفاجئ burst.' },
    ],
    realWorldChallengeAr: 'احكِ موقفاً طريفاً أو مفاجئاً حدث لك في جملة واحدة مستخدماً: "While I was..., something happened".',
    exercises: [
      {
        id: 'b1-2-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف الفعلين المناسب للحدث المستمر والحدث القاطع:',
        instructionEn: 'Choose the correct tense combination for long action and interruption:',
        question: 'While I _____ on the highway, my phone suddenly _____.',
        options: [
          'was driving / rang',
          'drove / was ringing',
          'was driving / was ringing',
          'drove / rang',
        ],
        correctAnswer: 0,
        explanationAr: 'الحدث الطويل المستمر (was driving) قاطعه حدث ماضٍ بسيط مفاجئ (rang).',
      },
      {
        id: 'b1-2-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر تصريف الماضي المستمر المناسب مع الفاعل الجمع (They):',
        instructionEn: 'Choose the past continuous form for plural subject (They):',
        question: 'They _____ for the bus when the heavy storm began.',
        options: ['were waiting', 'was waiting', 'are waiting', 'waited'],
        correctAnswer: 0,
        explanationAr: 'الفاعل They يأخذ were في الماضي المستمر: were waiting.',
      },
      {
        id: 'b1-2-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل أداة الربط المناسبة للحدث القاطع المفاجئ (When أو While):',
        instructionEn: 'Fill in the blank with When or While before the short action:',
        question: 'She was preparing dinner ______ the power went out.',
        correctAnswer: ['when', 'When'],
        explanationAr: 'نستخدم when قبل الحدث الماضي البسيط القاطع (the power went out).',
      },
      {
        id: 'b1-2-ex-4',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة سردية صحيحة مع While:',
        instructionEn: 'Arrange the words to form a correct narrative sentence:',
        question: 'was / I / reading / While / slept / cat / the',
        correctAnswer: 'While I was reading the cat slept',
        explanationAr: 'الترتيب: While I was reading the cat slept.',
      },
      {
        id: 'b1-2-ex-5',
        type: 'multiple_choice',
        instructionAr: 'ماذا يعبر زمن الماضي المستمر في جملة: "At 10:00 PM, he was studying"؟',
        instructionEn: 'What does the past continuous express in this sentence?',
        question: 'The sentence expresses:',
        options: [
          'حدث كان في طور الاستمرار في وقت محدد في الماضي',
          'حقيقة علمية عامة وثابتة',
          'خطة مستقبلية مؤكدة',
          'أمر وطلب رسمي',
        ],
        correctAnswer: 0,
        explanationAr: 'الماضي المستمر يصف فعلاً كان جارياً ومستمراً في لحظة معينة من الماضي.',
      },
      {
        id: 'b1-2-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ النحوي في تصريف فعل الكينونة في الماضي (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the auxiliary verb in past continuous:',
        question: 'We was discussing the project budget all morning.',
        correctAnswer: ['were', 'Were'],
        explanationAr: 'الفاعل الجمع We يأخذ were في الماضي وليس was.',
      },
      {
        id: 'b1-2-ex-7',
        type: 'multiple_choice',
        instructionAr: 'اختر السؤال الصحيح نحوياً في الماضي المستمر:',
        instructionEn: 'Choose the correct question in past continuous:',
        question: 'Which question follows correct word order?',
        options: [
          'What were you doing when the alarm sounded?',
          'What was you doing when the alarm sounded?',
          'What did you doing when the alarm sounded?',
          'What you were doing when the alarm sounded?',
        ],
        correctAnswer: 0,
        explanationAr: 'الترتيب الصحيح: What + were + you + doing?',
      },
      {
        id: 'b1-2-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "بينما كنت نائماً، اتصل بي المدير":',
        instructionEn: 'Translate: "بينما كنت نائماً، اتصل بي المدير":',
        question: 'Translate: "بينما كنت نائماً، اتصل بي المدير"',
        correctAnswer: ['While I was sleeping the manager called me', 'While I was sleeping, the manager called me.', 'while i was sleeping, the manager called me'],
        explanationAr: 'الترجمة الصحيحة: While I was sleeping, the manager called me.',
      },
    ],
  },
  {
    id: 'lesson-b1-3-first-and-second-conditionals',
    level: 'B1',
    order: 3,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الشروط والاحتمالات والتأثير',
    chapterTitleEn: 'Chapter 2: Conditionals, Deduction & Passive Structures',
    titleAr: 'الدرس 3: الجمل الشرطية الأولى والثانية (First & Second Conditionals)',
    titleEn: 'Lesson 3: Conditionals: Real Future vs. Hypothetical Scenarios',
    category: 'قواعد وتراكيب (B1)',
    iconName: 'GitFork',
    estimatedMinutes: 18,
    objectivesAr: [
      'صياغة الحالة الشرطية الأولى (First Conditional) للمواقف المستقبلية المحتملة الحدوث.',
      'صياغة الحالة الشرطية الثانية (Second Conditional) للمواقف الخيالية والافتراضية وإسداء النصيحة.',
      'التخلص من الخطأ الشائع بوضع will في جملة شرط If.',
      'إتقان العبارة الإنجليزية الشهيرة لتقديم النصيحة الدبلوماسية: "If I were you, I would...".',
    ],
    explanationMarkdownAr: `### الجمل الشرطية: الواقعية (الأولى) مقابل الخيالية (الثانية)

#### 1. الحالة الشرطية الأولى (The First Conditional - واقعي وممكن في المستقبل):
تستخدم عندما يكون الشرط **حقيقياً وممكناً جداً أن يحدث في المستقبل**:
\`\`\`
If + [ Present Simple ], [ will + Base Verb ]
\`\`\`
- *If it **rains** tomorrow, we **will cancel** the match.* (إذا أمطرت غداً، سنلغي المباراة).
- *If you **study** consistently, you **will achieve** an exceptional score.* (إذا درست بانتظام، ستحقق درجة استثنائية).
> **تحذير خطير**: لا تضع **will** في جملة If أبداً! (خطأ فادح: If it will rain؛ الصواب: **If it rains**).

#### 2. الحالة الشرطية الثانية (The Second Conditional - خيالي أو غير محتمل أو نصيحة):
تستخدم للتعبير عن **أمنية خيالية غير واقعية الآن** أو **افتراض مستحيل حالياً**:
\`\`\`
If + [ Past Simple ], [ would + Base Verb ]
\`\`\`
- *If I **had** a million dollars, I **would travel** around the world.* (لو كان معي مليون دولار - لكن الواقع الآن أنني لا أملكها!).
- *If he **exercised** more, he **would feel** healthier.*

#### 3. العبارة الذهبية لإسداء النصيحة (If I were you):
في الشرط الافتراضي، نستخدم **were** مع جميع الضمائر (بما فيها I و He و She) لإبراز الطابع الخيالي:
- **If I were you, I would accept the job offer.** (لو كنت مكانك، لوافقت على العرض الوظيفي).
- *If she were here, she would help us.*`,
    rulesAndStructuresAr: `الشرطية الأولى: If + Present Simple, will + base verb. الشرطية الثانية: If + Past Simple, would + base verb. قاعدة النصيحة: If I were you, I would + verb. لا تضع will أو would في شق الجملة الذي يحتوي على If.`,
    summaryAr: 'الشرطية الأولى (مضارع + will) للأمر الواقعي الممكن. الشرطية الثانية (ماضي + would) للخيال والنصيحة (If I were you, I would).',
    arabicContrastPoint: {
      titleAr: 'وضع will داخل جملة If',
      descriptionAr: 'المتعلم العربي يفكر: "إذا سوف أراه سوف أخبره" فيكتب: "If I will see him, I will tell him". في الإنجليزية لا يجتمع حرف will مع If في نفس الشق إطلاقاً: "If I see him, I will tell him".',
      badArabicHabit: 'If I will have time tomorrow, I will help you.',
      correctEnglishWay: 'If I have time tomorrow, I will help you.',
    },
    examples: [
      { en: 'If we invest in high-quality training, productivity will rise.', ar: 'إذا استثمرنا في تدريب عالي الجودة، سترتفع الإنتاجية بالتأكيد.', phoneticAr: 'إِف وِي إِنْڤِسْت إِن هَاي كْوَالِيتِي تْرَيْنِينْج' },
      { en: 'If I were in your position, I would negotiate the starting salary.', ar: 'لو كنت في مكانك، لفاوضت على الراتب الأساسي.', phoneticAr: 'إِف آيْ وِير إِن يُور بُوزِيشَن، آيْ وُود نِيجُوشِيَيْت' },
      { en: 'What would you do if you won the prestigious international scholarship?', ar: 'ماذا كنت ستفعل لو فزت بتلك المنحة الدولية المرموقة؟', phoneticAr: 'وَات وُود يُو دُو إِف يُو وَان ذَا بْرِسْتِيجَس سْكُولَارْشِيب؟' },
    ],
    vocabulary: [
      { word: 'Negotiate', ipa: '/nəˈɡoʊ.ʃi.eɪt/', partOfSpeech: 'verb', meaningAr: 'يتفاوض على شروط أو سعر', exampleEn: 'We negotiated the contract terms.', exampleAr: 'تفاوضنا على شروط العقد.' },
      { word: 'Prestigious', ipa: '/presˈtɪdʒ.əs/', partOfSpeech: 'adjective', meaningAr: 'مرموق وذو مكانة رفيعة', exampleEn: 'He won a prestigious award.', exampleAr: 'فاز بجائزة مرموقة.' },
      { word: 'Productivity', ipa: '/ˌproʊ.dʌkˈtɪv.ə.t̬i/', partOfSpeech: 'noun', meaningAr: 'إنتاجية وكفاءة الأداء', exampleEn: 'Clear goals improve productivity.', exampleAr: 'الأهداف الواضحة ترفع الإنتاجية.' },
      { word: 'Scholarship', ipa: '/ˈskɑː.lɚ.ʃɪp/', partOfSpeech: 'noun', meaningAr: 'منحة دراسية جامعية', exampleEn: 'She applied for a research scholarship.', exampleAr: 'تقدمت للحصول على منحة بحثية.' },
    ],
    commonMistakes: [
      { wrong: 'If I will see Ahmed, I will invite him.', correct: 'If I see Ahmed, I will invite him.', reasonAr: 'في جملة If نستخدم المضارع البسيط see وليس will see.' },
      { wrong: 'If I am you, I will resign.', correct: 'If I were you, I would resign.', reasonAr: 'صيغة النصيحة الافتراضية الصحيحة هي: If I were you, I would...' },
      { wrong: 'If he had time, he will come.', correct: 'If he had time, he would come.', reasonAr: 'الماضي had يتطلب في جواب الشرط would وليس will.' },
    ],
    realWorldChallengeAr: 'قدم نصيحة مهنية لزميلك تبدأ بـ: "If I were you, I would...".',
    exercises: [
      {
        id: 'b1-3-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الصحيحة لفعل الشرط في الحالة الشرطية الأولى:',
        instructionEn: 'Choose the correct verb in the if-clause (First Conditional):',
        question: 'If you _____ hard every day, you will achieve your career goals.',
        options: ['practice', 'will practice', 'practiced', 'would practice'],
        correctAnswer: 0,
        explanationAr: 'في الشرطية الأولى، شق If يأخذ مضارعاً بسيطاً practice دون will.',
      },
      {
        id: 'b1-3-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة الافتراضية السليمة لإسداء النصيحة:',
        instructionEn: 'Choose the correct form for giving hypothetical advice:',
        question: 'If I _____ you, I would sign up for the advanced course.',
        options: ['were', 'am', 'was to', 'will be'],
        correctAnswer: 0,
        explanationAr: 'في الحالة الشرطية الثانية الافتراضية نستخدم If I were you.',
      },
      {
        id: 'b1-3-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالفعل المساعد لجواب الشرط الثاني الخيالي (would أو will):',
        instructionEn: 'Fill in with would or will for hypothetical condition:',
        question: 'If they lived in London, they ______ speak English every day.',
        correctAnswer: ['would', 'Would'],
        explanationAr: 'فعل الشرط في الماضي lived، إذاً جواب الشرط يأخذ would.',
      },
      {
        id: 'b1-3-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي جملة تمثل شرطية ثانية (Second Conditional) سليمة تماماً؟',
        instructionEn: 'Which sentence correctly represents the Second Conditional?',
        question: 'Identify the correct Second Conditional sentence:',
        options: [
          'If I had more free time, I would learn a third language.',
          'If I will have more free time, I would learn a third language.',
          'If I had more free time, I will learn a third language.',
          'If I have more free time, I would learned a third language.',
        ],
        correctAnswer: 0,
        explanationAr: 'التركيب السليم: If + had (ماضي) ثم would learn (المصدر).',
      },
      {
        id: 'b1-3-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة شرطية أولى صحيحة:',
        instructionEn: 'Arrange the words to form a First Conditional sentence:',
        question: 'late / miss / the / will / arrive / you / train / you / If',
        correctAnswer: 'If you arrive late you will miss the train',
        explanationAr: 'الترتيب: If you arrive late you will miss the train.',
      },
      {
        id: 'b1-3-ex-6',
        type: 'error_hunt',
        instructionAr: 'احذف الفعل الزائد الخاطئ في جملة If (اكتب الفعل الزائد فقط):',
        instructionEn: 'Identify the redundant verb inside the if-clause:',
        question: 'If they will offer me the position, I will accept it.',
        correctAnswer: ['will', 'Will'],
        explanationAr: 'كلمة will الأولى خاطئة ويجب حذفها لتصبح: If they offer me...',
      },
      {
        id: 'b1-3-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى الذي تدل عليه جملة: "If I won the lottery, I would buy an island"؟',
        instructionEn: 'What does this Second Conditional sentence express?',
        question: 'This sentence describes:',
        options: [
          'موقف افتراضي خيالي غير محتمل الحدوث حالياً',
          'حقيقة علمية مؤكدة بنسبة 100%',
          'حدث وقع وانتهى في الماضي البسيط',
          'أمر وطلب مباشر',
        ],
        correctAnswer: 0,
        explanationAr: 'تعبر الشرطية الثانية عن سيناريو افتراضي خيالي بعيد الاحتمال.',
      },
      {
        id: 'b1-3-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "لو كنت مكانك، لرفضت هذا العرض":',
        instructionEn: 'Translate: "لو كنت مكانك، لرفضت هذا العرض":',
        question: 'Translate: "لو كنت مكانك، لرفضت هذا العرض"',
        correctAnswer: ['If I were you I would decline this offer', 'If I were you, I would reject this offer.', 'If I were you, I would refuse this offer', 'if i were you, i would decline this offer'],
        explanationAr: 'الترجمة الصحيحة: If I were you, I would decline/reject this offer.',
      },
    ],
  },
  {
    id: 'lesson-b1-4-passive-voice-essentials',
    level: 'B1',
    order: 4,
    chapterOrder: 2,
    chapterTitleAr: 'الوحدة 2: الشروط والاحتمالات والتأثير',
    chapterTitleEn: 'Chapter 2: Conditionals, Deduction & Passive Structures',
    titleAr: 'الدرس 4: المبني للمجهول (The Passive Voice) في سياق العمل والأخبار',
    titleEn: 'Lesson 4: The Passive Voice in Daily & Professional English',
    category: 'قواعد وتراكيب (B1)',
    iconName: 'Layers',
    estimatedMinutes: 16,
    objectivesAr: [
      'فهم الغرض من المبني للمجهول: التركيز على الحدث والنتيجة بدلاً من فاعل الفعل.',
      'صياغة المبني للمجهول في المضارع البسيط والماضي البسيط والمضارع التام.',
      'تطبيق الصيغة: be + التصريف الثالث (V3) في التقارير والإيميلات المهنية.',
      'معرفة متى نذكر الفاعل مسبوقاً بـ by ومتى نحذفه لعدم أهميته.',
    ],
    explanationMarkdownAr: `### المبني للمجهول (The Passive Voice)

#### 1. لماذا نستخدم المبني للمجهول في الإنجليزية؟
في الإنجليزية نستخدم المبني للمجهول ليس لإخفاء الفاعل فقط، بل **للتركيز على الشيء الذي تأثر أو النتيجة المهمة**:
- المعلوم (Active): *The software engineer wrote the code.* (التركيز على المهندس).
- المجهول (Passive): *The code **was written** in Python.* (التركيز على الشفرة ولغة البرمجة).
- نستخدمه بكثرة في: **التقارير الإخبارية، التعليمات التقنية، والمراسلات الرسمية**.

#### 2. القاعدة الهندسية الموحدة للمبني للمجهول:
\`\`\`
[المفعول به أصبح فاعلاً] + [فعل الكينونة BE في نفس زمن الجملة] + [التصريف الثالث للفعل - V3]
\`\`\`

#### 3. تصريف المبني للمجهول في الأزمنة الأكثر شيوعاً:
1. **المضارع البسيط (Present Simple Passive)**:
   - صيغته: \`am / is / are + V3\`
   - *English **is spoken** worldwide.* (الإنجليزية يتم التحدث بها عالمياً).
   - *These smartphones **are manufactured** in Korea.*
2. **الماضي البسيط (Past Simple Passive)**:
   - صيغته: \`was / were + V3\`
   - *The contract **was signed** yesterday.* (تم توقيع العقد بالأمس).
   - *The servers **were upgraded** over the weekend.*
3. **المضارع التام (Present Perfect Passive)**:
   - صيغته: \`has been / have been + V3\`
   - *The problem **has been resolved**.* (تم حل المشكلة بنجاح).

#### 4. متى نذكر الفاعل بـ (by)؟
نذكر الفاعل فقط إذا كانت هويته تضيف معلومة حيوية جديدة وغير بديهية:
- *Hamlet was written **by Shakespeare**.* (مهم معرفة الكاتب العظيم).
- أما إذا كان الفاعل مجهولاً أو بديهياً فلا نذكره: *My car was stolen.* (لا داعي لقول by a thief!).`,
    rulesAndStructuresAr: `المعادلة العامة: Subject + appropriate form of BE + Past Participle (V3). المضارع البسيط: is/are + V3. الماضي البسيط: was/were + V3. المضارع التام: has been / have been + V3. إذا أردنا ذكر الفاعل نستخدم حرف الجر by في نهاية الجملة.`,
    summaryAr: 'المبني للمجهول يركز على الفعل والمفعول بدلاً من الفاعل. معادلته الدائمة: فعل كينونة BE في زمن الجملة + التصريف الثالث V3.',
    arabicContrastPoint: {
      titleAr: 'تجنب المبني للمجهول ظناً أنه غير مرغوب',
      descriptionAr: 'في بعض مناهج العربية يفضل المعلوم دائماً، لكن في الإنجليزية الرسمية والمهنية المبني للمجهول ضرورة لباقة وأسلوب راقٍ: "Your application has been received" أكثر رسمية من "We received your application".',
      badArabicHabit: 'Always forcing active sentences in formal business emails.',
      correctEnglishWay: 'Using passive constructions to sound objective and diplomatic.',
    },
    examples: [
      { en: 'The confidential documents were delivered by courier.', ar: 'تم تسليم الوثائق السرية بواسطة ناقل البريد الخاص.', phoneticAr: 'ذَا كُونْفِيدِنْشَل دُوكْيُومَنْتْس وِير دِلِيڤِرد' },
      { en: 'Thousands of high-tech jobs are created every year in this sector.', ar: 'يتم استحداث آلاف الوظائف التقنية الرفيعة كل عام في هذا القطاع.', phoneticAr: 'ثَاوْزَنْدز أُوڤ هَاي تِك دْجُوبْس آر كْرِييْتِد' },
      { en: 'All critical security vulnerabilities have been patched.', ar: 'تم ترقيع وإصلاح جميع الثغرات الأمنية الحرجة.', phoneticAr: 'أُول كْرِيتِيكَل سِكْيُورِتِي ڤَالْنَرَابِيلِيتِيز هَاف بِين بَاتْشْت' },
    ],
    vocabulary: [
      { word: 'Confidential', ipa: '/ˌkɑːn.fəˈden.ʃəl/', partOfSpeech: 'adjective', meaningAr: 'سري للغاية', exampleEn: 'Keep this confidential information safe.', exampleAr: 'حافظ على سرية هذه المعلومات.' },
      { word: 'Vulnerability', ipa: '/ˌvʌl.nɚ.əˈbɪl.ə.t̬i/', partOfSpeech: 'noun', meaningAr: 'ثغرة أمنية أو نقطة ضعف', exampleEn: 'The patch fixes a security vulnerability.', exampleAr: 'التحديث يعالج ثغرة أمنية.' },
      { word: 'Manufacture', ipa: '/ˌmæn.jəˈfæk.tʃɚ/', partOfSpeech: 'verb', meaningAr: 'يصنع على نطاق واسع بالآلات', exampleEn: 'These processors are manufactured locally.', exampleAr: 'تُصنّع هذه المعالجات محلياً.' },
      { word: 'Resolve', ipa: '/rɪˈzɑːlv/', partOfSpeech: 'verb', meaningAr: 'يحل مشكلة أو نزاعاً', exampleEn: 'The dispute was resolved peacefully.', exampleAr: 'تمت تسوية النزاع سلمياً.' },
    ],
    commonMistakes: [
      { wrong: 'The email was send yesterday.', correct: 'The email was sent yesterday.', reasonAr: 'في المبني للمجهول يجب استخدام التصريف الثالث V3 (sent وليس send).' },
      { wrong: 'English speaks all over the world.', correct: 'English is spoken all over the world.', reasonAr: 'اللغة الإنجليزية مفعول به لا تتحدث بنفسها، بل يُتحدث بها: is spoken.' },
      { wrong: 'The task has finished by Omar.', correct: 'The task has been finished by Omar.', reasonAr: 'في المضارع التام المبني للمجهول لا بد من been قبل التصريف الثالث.' },
    ],
    realWorldChallengeAr: 'حول جملة معلومة من عملك اليومي إلى جملة مبنية للمجهول تركز على النتيجة المنجزة.',
    exercises: [
      {
        id: 'b1-4-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة المبني للمجهول الصحيحة في الماضي البسيط:',
        instructionEn: 'Choose the correct passive form in past simple:',
        question: 'The partnership contract _____ by both CEOs yesterday afternoon.',
        options: ['was signed', 'signed', 'was signing', 'is signed'],
        correctAnswer: 0,
        explanationAr: 'في الماضي البسيط المبني للمجهول نستخدم was + التصريف الثالث: was signed.',
      },
      {
        id: 'b1-4-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة المبني للمجهول في المضارع البسيط للجمع:',
        instructionEn: 'Choose the present simple passive for plural subject:',
        question: 'These electric vehicles _____ in our newest manufacturing facility.',
        options: ['are assembled', 'are assemble', 'is assembled', 'assembled'],
        correctAnswer: 0,
        explanationAr: 'الفاعل الجمع electric vehicles يأخذ are متبوعة بالتصريف الثالث assembled.',
      },
      {
        id: 'b1-4-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل صيغة المبني للمجهول في المضارع التام (has ______ resolved):',
        instructionEn: 'Fill in the missing passive auxiliary in present perfect:',
        question: 'The critical bug has ______ resolved by our engineers.',
        correctAnswer: ['been', 'Been'],
        explanationAr: 'صيغة المبني للمجهول في المضارع التام تتطلب been: has been resolved.',
      },
      {
        id: 'b1-4-ex-4',
        type: 'multiple_choice',
        instructionAr: 'أي من الجمل التالية تمثل مبنياً للمجهول بصياغة صحيحة تماماً؟',
        instructionEn: 'Which sentence is a correct passive construction?',
        question: 'Select the grammatically correct passive sentence:',
        options: [
          'Arabic is spoken by more than 400 million people.',
          'Arabic speaks by more than 400 million people.',
          'Arabic is speak by more than 400 million people.',
          'Arabic was speak by more than 400 million people.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة: is + spoken (التصريف الثالث) + by + الفاعل.',
      },
      {
        id: 'b1-4-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة مبنية للمجهول صحيحة:',
        instructionEn: 'Arrange the words to form a correct passive sentence:',
        question: 'yesterday / canceled / flight / The / was / morning',
        correctAnswer: 'The flight was canceled yesterday morning',
        explanationAr: 'الترتيب: The flight + was canceled + yesterday morning.',
      },
      {
        id: 'b1-4-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح التصريف الثالث الخاطئ للفعل build (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the past participle of build:',
        question: 'The tower was builded in 2015.',
        correctAnswer: ['built', 'Built'],
        explanationAr: 'التصريف الثالث للفعل الشاذ build هو built وليس builded.',
      },
      {
        id: 'b1-4-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما حرف الجر المستخدم لذكر الفاعل في المبني للمجهول؟',
        instructionEn: 'Which preposition introduces the agent in a passive sentence?',
        question: 'The Mona Lisa was painted _____ Leonardo da Vinci.',
        options: ['by', 'with', 'from', 'at'],
        correctAnswer: 0,
        explanationAr: 'نستخدم حرف الجر by لذكر الفاعل الذي قام بالفعل: painted by.',
      },
      {
        id: 'b1-4-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "تم إرسال التقرير النهائي هذا الصباح":',
        instructionEn: 'Translate: "تم إرسال التقرير النهائي هذا الصباح":',
        question: 'Translate: "تم إرسال التقرير النهائي هذا الصباح"',
        correctAnswer: ['The final report was sent this morning', 'The final report was sent this morning.', 'the final report was sent this morning'],
        explanationAr: 'الترجمة الصحيحة: The final report was sent this morning مع استخدام was sent.',
      },
    ],
  },
  {
    id: 'lesson-b1-5-phrasal-verbs-mastery',
    level: 'B1',
    order: 5,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: المفردات المتقدمة والتأهيل للاختبار',
    chapterTitleEn: 'Chapter 3: Advanced Lexis, Collocations & Assessment',
    titleAr: 'الدرس 5: الأفعال المركبة الحيوية للحياة والعمل (Essential Phrasal Verbs)',
    titleEn: 'Lesson 5: Essential Everyday & Workplace Phrasal Verbs',
    category: 'مفردات وقواعد (B1)',
    iconName: 'Zap',
    estimatedMinutes: 16,
    objectivesAr: [
      'فهم طبيعة الفعل المركب: فعل أساسي + حرف جر يغير المعنى بالكامل.',
      'إتقان أهم الأفعال المركبة للمكتب والمحادثة: put off, call off, figure out, look forward to.',
      'التفرقة بين الأفعال القابلة للفصل (Separable) وغير القابلة للفصل.',
      'تجنب ترجمة أحرف الجر حرفياً من العربية.',
    ],
    explanationMarkdownAr: `### الأفعال المركبة (Phrasal Verbs): سر التحدث كالمتحدث الأصلي

#### 1. ما هو الفعل المركب؟
هو تركيب يتكون من **فعل + حرف جر أو ظرف**، وينتج عنه **معنى اصطلاحي جديد تماماً** لا يمكن تخمينه بمجرد ترجمة الفعل منفرداً!
- *Look* = ينظر
- *Look **at*** = ينظر إلى
- *Look **for*** = يبحث عن
- *Look **into*** = يحقق في أمر أو يفحص مشكلة
- *Look **forward to*** = يتطلع بشوق وحماس إلى

#### 2. أهم 6 أفعال مركبة للمكتب وبيئة العمل:
1. **Put off** = يؤجل موعداً أو عملاً (Postpone):
   - *Don't **put off** until tomorrow what you can do today.*
2. **Call off** = يلغي موعداً أو حدثاً تماماً (Cancel):
   - *They had to **call off** the outdoor ceremony due to rain.*
3. **Figure out** = يتوصل إلى حل / يفهم لغزاً بعد تفكير (Solve / Understand):
   - *We need to **figure out** why the app is crashing.*
4. **Carry out** = ينفذ خطة أو يجري بحثاً أو فحصاً (Execute):
   - *The engineering team **carried out** a comprehensive security audit.*
5. **Turn on / Turn off** = يشغل / يطفئ جهازاً كهربائياً:
   - *Please **turn on** the projector.* (خطأ فادح: Open the projector!).
   - *Remember to **turn off** the lights.* (خطأ: Close the lights!).
6. **Look forward to (+ ing)** = يتطلع بشوق:
   - *I **look forward to working** with your talented team.*
   - *(تنبيه متكرر: حرف to هنا جزء من التعبير الاصطلاحي ويليه اسم أو فعل منتهٍ بـ -ing).*`,
    rulesAndStructuresAr: `قاعدة Turn on/off: مع الأجهزة الكهربائية والإلكترونية حصراً (لا تستخدم Open/Close). قاعدة Look forward to: يتبعها دائماً اسم أو فعل مضاف له -ing. الضمير (it/them) يوضع دائماً في المنتصف مع الأفعال القابلة للفصل: Turn it off وليس Turn off it.`,
    summaryAr: 'الأفعال المركبة تعطي لغتك طابعاً طبيعياً. احفظ معناها ككتلة واحدة، وتذكر دائماً: Turn on للأجهزة، و Look forward to يتبعها -ing.',
    arabicContrastPoint: {
      titleAr: 'فتح وإغلاق الأجهزة الكهربائية (Open/Close)',
      descriptionAr: 'في العربية نقول: "افتح النور واقفل المكيف". إذا ترجمتها حرفياً وقلت "Open the light and close the AC" سيبدو كلامك غريباً ومضحكاً لمتحدث الإنجليزية. الأجهزة الكهربائية تأخذ دائماً: Turn on و Turn off.',
      badArabicHabit: 'Please open the TV and close the air conditioner.',
      correctEnglishWay: 'Please turn on the TV and turn off the air conditioner.',
    },
    examples: [
      { en: 'We had to put off our team meeting until Thursday morning.', ar: 'اضطررنا إلى تأجيل اجتماع فريقنا حتى صباح الخميس.', phoneticAr: 'وِي هَاد تُو بُوت أُوف أstore' },
      { en: 'I am really looking forward to meeting you in person.', ar: 'أنا حقاً أتطلع بشوق إلى لقائك شخصياً.', phoneticAr: 'آيْ آمْ رِيلِي لُوكِينْج فُورْوَارْد تُو مِيتِينْج يُو' },
      { en: 'Can you help us figure out how to configure this database?', ar: 'هل يمكنك مساعدتنا في معرفة كيفية ضبط قاعدة البيانات هذه؟', phoneticAr: 'كَان يُو هِلْب أَس فِيجْيَر آوْت' },
      { en: 'Please turn off your mobile phone during the exam.', ar: 'يرجى إطفاء هاتفك المحمول أثناء الاختبار.', phoneticAr: 'بْلِيز تِيرن أُوف يُور مُوبَايْل فُون' },
    ],
    vocabulary: [
      { word: 'Postpone', ipa: '/poʊstˈpoʊn/', partOfSpeech: 'verb', meaningAr: 'يؤجل موعداً (المرادف الرسمي لـ put off)', exampleEn: 'The match was postponed.', exampleAr: 'تأجلت المباراة.' },
      { word: 'Configure', ipa: '/kənˈfɪɡ.jɚ/', partOfSpeech: 'verb', meaningAr: 'يضبط إعدادات تقنية', exampleEn: 'Configure the server settings.', exampleAr: 'اضبط إعدادات الخادم.' },
      { word: 'Audit', ipa: '/ˈɑː.dɪt/', partOfSpeech: 'noun & verb', meaningAr: 'تدقيق ومراجعة شاملة', exampleEn: 'We conducted an internal security audit.', exampleAr: 'أجرينا تدقيقاً أمنياً داخلياً.' },
      { word: 'Crash', ipa: '/kræʃ/', partOfSpeech: 'verb', meaningAr: 'يتعطل البرنامج فجأة', exampleEn: 'The system crashed under heavy load.', exampleAr: 'تعطل النظام تحت وطأة الضغط العالي.' },
    ],
    commonMistakes: [
      { wrong: 'Please open the computer.', correct: 'Please turn on the computer.', reasonAr: 'الأجهزة الإلكترونية تأخذ turn on وليس open.' },
      { wrong: 'I look forward to meet you.', correct: 'I look forward to meeting you.', reasonAr: 'العبارة الاصطلاحية look forward to يتبعها فعل منتهٍ بـ -ing.' },
      { wrong: 'They called off it.', correct: 'They called it off.', reasonAr: 'الضمائر تأتي في المنتصف بين الفعل وحرف الجر مع الأفعال القابلة للفصل.' },
    ],
    realWorldChallengeAr: 'اكتب إيميل متابعة من سطرين تختمه بعبارة: "I look forward to hearing from you soon".',
    exercises: [
      {
        id: 'b1-5-ex-1',
        type: 'multiple_choice',
        instructionAr: 'ما الفعل المركب الذي يعني "تأجيل" (postpone) موعد الاجتماع؟',
        instructionEn: 'Which phrasal verb means to delay or postpone?',
        question: 'We need to _____ the quarterly review until next week.',
        options: ['put off', 'call off', 'look after', 'take off'],
        correctAnswer: 0,
        explanationAr: 'الفعل المركب Put off يعني يؤجل، أما Call off فيعني يلغي تماماً.',
      },
      {
        id: 'b1-5-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الصيغة السليمة للفعل بعد العبارة المهنية "look forward to":',
        instructionEn: 'Choose the correct form after "look forward to":',
        question: 'Our team looks forward to _____ with you on this initiative.',
        options: ['collaborating', 'collaborate', 'collaborated', 'be collaborate'],
        correctAnswer: 0,
        explanationAr: 'العبارة look forward to يتبعها اسم أو فعل مضاف له -ing: collaborating.',
      },
      {
        id: 'b1-5-ex-3',
        type: 'fill_blank',
        instructionAr: 'أكمل حرف الجر الناقص للفعل المركب الذي يعني التوصل إلى حل (figure ______):',
        instructionEn: 'Fill in the particle for "figure out":',
        question: 'We spent hours trying to figure ______ the root cause of the error.',
        correctAnswer: ['out', 'Out'],
        explanationAr: 'الفعل المركب هو Figure out ويعني يفهم أو يحل المسألة بعد تفكير.',
      },
      {
        id: 'b1-5-ex-4',
        type: 'multiple_choice',
        instructionAr: 'كيف تطلب من شخص إطفاء جهاز التكييف بالإنجليزية الصحيحة؟',
        instructionEn: 'How do you ask someone to switch off the air conditioner?',
        question: 'Choose the natural English sentence:',
        options: [
          'Could you please turn off the air conditioner?',
          'Could you please close the air conditioner?',
          'Could you please shut down the air conditioner with key?',
          'Could you please put out the air conditioner?',
        ],
        correctAnswer: 0,
        explanationAr: 'مع الأجهزة الكهربائية نستخدم turn off وليس close.',
      },
      {
        id: 'b1-5-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة إلغاء حدث صحيحة:',
        instructionEn: 'Arrange the words to form a correct cancellation sentence:',
        question: 'due / event / called / They / rain / to / the / off',
        correctAnswer: 'They called off the event due to rain',
        explanationAr: 'الترتيب: They + called off + the event + due to rain.',
      },
      {
        id: 'b1-5-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ بعد look forward to (اكتب الكلمة المصححة فقط):',
        instructionEn: 'Correct the verb following look forward to:',
        question: 'I look forward to hear your insightful thoughts.',
        correctAnswer: ['hearing', 'Hearing'],
        explanationAr: 'بعد look forward to نضيف -ing للفعل ليصبح hearing.',
      },
      {
        id: 'b1-5-ex-7',
        type: 'multiple_choice',
        instructionAr: 'ما معنى الفعل المركب "carry out" في سياق العمل والبحث؟',
        instructionEn: 'What does "carry out" mean in professional context?',
        question: 'In "carry out a research study", the verb means:',
        options: [
          'ينفذ ويجري بحثاً (conduct / execute)',
          'يحمل بيده إلى الخارج',
          'يلغي الدراسة',
          'يؤجل إلى الغد',
        ],
        correctAnswer: 0,
        explanationAr: 'الفعل المركب carry out يعني ينفذ أو يجري مهمة/بحثاً رسمياً.',
      },
      {
        id: 'b1-5-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "من فضلك شغل الإضاءة":',
        instructionEn: 'Translate: "من فضلك شغل الإضاءة":',
        question: 'Translate: "من فضلك شغل الإضاءة"',
        correctAnswer: ['Please turn on the lights', 'Please turn on the light', 'please turn on the light'],
        explanationAr: 'الترجمة الصحيحة: Please turn on the lights.',
      },
    ],
  },
  {
    id: 'lesson-b1-6-collocations-and-word-formation',
    level: 'B1',
    order: 6,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: المفردات المتقدمة والتأهيل للاختبار',
    chapterTitleEn: 'Chapter 3: Advanced Lexis, Collocations & Assessment',
    titleAr: 'الدرس 6: المتلازمات اللفظية والاشتقاق اللغوي (Collocations & Word Formation)',
    titleEn: 'Lesson 6: Natural Collocations (Make vs. Do) & Word Formation',
    category: 'مفردات متقدمة (B1)',
    iconName: 'BookMarked',
    estimatedMinutes: 16,
    objectivesAr: [
      'حسم الصراع الأبدي بين الفعلين Make (يصنع/ينشئ) و Do (يؤدي عملاً أو واجباً).',
      'حفظ أهم المتلازمات الطبيعية: make a mistake, do homework, take a risk, have a look.',
      'توليد كلمات جديدة باستخدام البادئات (un-, dis-, mis-) لتغيير المعنى أو النفي.',
      'تحويل الأفعال والصفات إلى أسماء باستخدام اللواحق (-ment, -tion, -ness, -ity).',
    ],
    explanationMarkdownAr: `### المتلازمات اللفظية وقوة اشتقاق الكلمات

#### 1. ما هي المتلازمة اللفظية (Collocation)؟
هي كلمات تأتي معاً دائماً بشكل عفوي وطبيعي في أذن المتحدث الأصلي، وإذا استبدلت إحداها بمرادف يبدو التعبير ركيكاً وغير طبيعي.
- نقول: *heavy rain* (مطر غزير) ولا نقول: *strong rain*.
- نقول: *fast food* (وجبات سريعة) ولا نقول: *quick food*.

#### 2. الفارق الحاسم بين MAKE و DO:
1. **استخدامات DO (للمهمات، الواجبات، الأنشطة العامة، والأعمال غير المحددة)**:
   - *do business* (يقوم بأعمال تجارية)
   - *do homework / do research* (يقوم ببحث/واجب)
   - *do the dishes / do your best* (يبذل قصارى جهده)
2. **استخدامات MAKE (للصنع، الإنشاء، القرارات، والنتائج)**:
   - *make a mistake* (يرتكب خطأ - خطأ شائع: do a mistake!)
   - *make a decision* (يتخذ قراراً)
   - *make money / make profit* (يجني أرباحاً)
   - *make an appointment* (يحدد موعداً)
   - *make an effort* (يبذل مجهوداً)

#### 3. الاشتقاق بالبادئات واللواحق (Prefixes & Suffixes):
1. **البادئات السلبية (Prefixes of Negation)**:
   - **un-**: *happy -> unhappy* / *reliable -> unreliable*.
   - **dis-**: *agree -> disagree* / *connect -> disconnect*.
   - **mis-**: *understand -> misunderstand* (يسيء الفهم).
2. **لواحق الأسماء (Noun Suffixes)**:
   - **-ment**: *develop -> development* / *achieve -> achievement*.
   - **-tion**: *educate -> education* / *inform -> information*.
   - **-ness**: *dark -> darkness* / *fluent -> fluency (fluency)*.`,
    rulesAndStructuresAr: `قاعدة Make مقابل Do: Make للإنشاء والقرارات والنتائج (make a mistake, make a decision). Do للمهام الروتينية والواجبات (do homework, do business, do your best). البادئات un-, dis- تعكس المعنى. اللاحقة -ment تحول الفعل إلى اسم.`,
    summaryAr: 'المتلازمات اللفظية تجعل لغتك فصيحة ومقنعة. احفظ: make a mistake و make a decision، وقابلها بـ do research و do business.',
    arabicContrastPoint: {
      titleAr: 'فعل "يعمل" في اللهجات العربية وتعميمه الخاطئ',
      descriptionAr: 'في كثير من اللهجات نستخدم كلمة "يعمل" لكل شيء: "يعمل واجب، يعمل غلط، يعمل فلوس". في الإنجليزية لا يجوز خلط make مع do، ولا تقل: "He did a mistake" بل قل: "He made a mistake".',
      badArabicHabit: 'I did a big mistake in the exam.',
      correctEnglishWay: 'I made a big mistake in the exam.',
    },
    examples: [
      { en: 'Everyone makes mistakes when learning a foreign language.', ar: 'الجميع يرتكبون أخطاءً عند تعلم لغة أجنبية.', phoneticAr: 'إِڤْرِي وَان مَيْكْس مِسْتَيْكْس' },
      { en: 'We need to make a strategic decision before the end of the quarter.', ar: 'يتعين علينا اتخاذ قرار استراتيجي قبل نهاية الربع الحالي.', phoneticAr: 'وِي نِيد تُو مَيْك أَ سْتْرَاتِيجِيك دِسِيژَن' },
      { en: 'Our team did extensive research into user behavior.', ar: 'أجرى فريقنا بحثاً مكثفاً وموسعاً حول سلوك المستخدمين.', phoneticAr: 'آوَر تِيم دِيد إِكْسْتِنْسِڤ رِيسِيرتش' },
    ],
    vocabulary: [
      { word: 'Extensive', ipa: '/ɪkˈsten.sɪv/', partOfSpeech: 'adjective', meaningAr: 'واسع وشامل ومكثف', exampleEn: 'The project required extensive research.', exampleAr: 'تطلب المشروع بحثاً مكثفاً.' },
      { word: 'Behavior', ipa: '/bɪˈheɪ.vjɚ/', partOfSpeech: 'noun', meaningAr: 'سلوك وتصرف', exampleEn: 'Customer behavior changes rapidly.', exampleAr: 'يتغير سلوك العملاء بسرعة.' },
      { word: 'Strategic', ipa: '/strəˈtiː.dʒɪk/', partOfSpeech: 'adjective', meaningAr: 'استراتيجي ومدروس بعناية', exampleEn: 'We formed a strategic alliance.', exampleAr: 'شكلنا تحالفاً استراتيجياً.' },
      { word: 'Development', ipa: '/dɪˈvel.əp.mənt/', partOfSpeech: 'noun', meaningAr: 'تطوير وتنمية', exampleEn: 'Continuous personal development is crucial.', exampleAr: 'التطوير الشخصي المستمر أمر جوهري.' },
    ],
    commonMistakes: [
      { wrong: 'I did a mistake.', correct: 'I made a mistake.', reasonAr: 'الخطأ يتلازم مع الفعل make وليس do.' },
      { wrong: 'We will do an appointment.', correct: 'We will make an appointment.', reasonAr: 'تحديد الموعد يأخذ make an appointment.' },
      { wrong: 'He is very unpatient.', correct: 'He is very impatient.', reasonAr: 'عكس patient هو impatient بالبادئة im- وليس un-.' },
    ],
    realWorldChallengeAr: 'استخدم كلمتي "make a decision" و "do my best" في جملتين تعبران عن خطتك العملية.',
    exercises: [
      {
        id: 'b1-6-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل المتلازم الصحيح مع كلمة "mistakes":',
        instructionEn: 'Choose the correct verb that collocates with "mistakes":',
        question: 'Smart language learners are not afraid to _____ mistakes.',
        options: ['make', 'do', 'take', 'give'],
        correctAnswer: 0,
        explanationAr: 'المتلازمة اللفظية الصحيحة هي make a mistake وليس do a mistake.',
      },
      {
        id: 'b1-6-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل المتلازم مع إجراء الأبحاث (research):',
        instructionEn: 'Choose the correct collocation for "research":',
        question: 'Scientists _____ rigorous research before publishing findings.',
        options: ['do', 'make', 'create', 'build'],
        correctAnswer: 0,
        explanationAr: 'الأبحاث والواجبات تأخذ الفعل do: do research.',
      },
      {
        id: 'b1-6-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالبادئة السلبية التي تعكس معنى الفعل agree:',
        instructionEn: 'Fill in the negative prefix for agree (dis / un):',
        question: 'Although I respect your view, I ______agree with your conclusion.',
        correctAnswer: ['dis', 'Dis'],
        explanationAr: 'عكس الفعل agree هو disagree بالبادئة dis-.',
      },
      {
        id: 'b1-6-ex-4',
        type: 'multiple_choice',
        instructionAr: 'ما الاسم المشتق من الفعل "achieve" بإضافة اللاحقة المناسبة؟',
        instructionEn: 'What is the noun derived from "achieve"?',
        question: 'The noun form of "achieve" is:',
        options: ['achievement', 'achievetion', 'achieveness', 'achievity'],
        correctAnswer: 0,
        explanationAr: 'يشتق الاسم بإضافة اللاحقة -ment ليصبح achievement (إنجاز).',
      },
      {
        id: 'b1-6-ex-5',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة متلازمة اتخاذ القرار:',
        instructionEn: 'Arrange the words to form a correct decision sentence:',
        question: 'to / decision / need / We / make / a / bold',
        correctAnswer: 'We need to make a bold decision',
        explanationAr: 'الترتيب: We need to make a bold decision.',
      },
      {
        id: 'b1-6-ex-6',
        type: 'error_hunt',
        instructionAr: 'صحح الفعل الخاطئ في المتلازمة (اكتب الفعل المصحح فقط):',
        instructionEn: 'Correct the collocated verb:',
        question: 'He did an effort to arrive early.',
        correctAnswer: ['made', 'Made'],
        explanationAr: 'بذل الجهد يتلازم مع make في الماضي: made an effort وليس did.',
      },
      {
        id: 'b1-6-ex-7',
        type: 'multiple_choice',
        instructionAr: 'أي متلازمة مما يلي تمثل صياغة إنجليزية طبيعية وغير ركيكة؟',
        instructionEn: 'Which phrase is a natural English collocation?',
        question: 'Identify the natural collocation:',
        options: ['heavy rain', 'strong rain', 'big rain', 'deep rain'],
        correctAnswer: 0,
        explanationAr: 'في الإنجليزية المطر الغزير هو heavy rain ولا يوصف بـ strong.',
      },
      {
        id: 'b1-6-ex-8',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "الجميع يرتكب أخطاءً عند التعلم":',
        instructionEn: 'Translate: "الجميع يرتكب أخطاءً عند التعلم":',
        question: 'Translate: "الجميع يرتكب أخطاءً عند التعلم"',
        correctAnswer: ['Everyone makes mistakes when learning', 'Everyone makes mistakes when learning.', 'everyone makes mistakes when learning'],
        explanationAr: 'الترجمة الصحيحة: Everyone makes mistakes when learning.',
      },
    ],
  },
  {
    id: 'lesson-b1-7-level-b1-assessment',
    level: 'B1',
    order: 7,
    chapterOrder: 3,
    chapterTitleAr: 'الوحدة 3: المفردات المتقدمة والتأهيل للاختبار',
    chapterTitleEn: 'Chapter 3: Advanced Lexis, Collocations & Assessment',
    titleAr: 'الدرس 7: اختبار واجتياز المستوى المتوسط B1 الشامل',
    titleEn: 'Lesson 7: Level B1 Comprehensive Mastery Assessment',
    category: 'المراجعة والاختبار (B1)',
    iconName: 'Award',
    estimatedMinutes: 20,
    objectivesAr: [
      'مراجعة شاملة لجميع مخرجات المستوى B1 (Present Perfect, Past Continuous, Conditionals, Passive, Phrasal Verbs, Collocations).',
      'التأكد من الدقة في اختيار الزمن الصحيح في السياقات المهنية المتقاطعة.',
      'التأكد التام من القضاء على أخطاء ترجمة حروف الجر واستخدام -ing مع look forward to.',
      'اجتياز أسئلة التقييم التراكمي للتأهل رسمياً إلى المستوى فوق المتوسط B2.',
    ],
    explanationMarkdownAr: `### المراجعة الشاملة لمستوى B1 (Intermediate)

#### حصاد المهارات المتطورة في هذا المستوى:
1. **المضارع التام (Present Perfect)**:
   - الربط بين الماضي والحاضر (*have/has + V3*).
   - الفارق الحاسم بين *Since* (البداية) و *For* (المدة).
   - التخلص من خلط المضارع التام مع كلمات الماضي المحدد مثل *yesterday* و *ago*.
2. **الماضي المستمر والسرد (Past Continuous with When/While)**:
   - مقاطعة الأحداث: *While I was driving, it started to rain*.
3. **الجمل الشرطية (First & Second Conditionals)**:
   - الممكن الواقعي: *If it rains, we will...*
   - الخيالي والنصيحة: *If I were you, I would...*
4. **المبني للمجهول (The Passive Voice)**:
   - التركيز على النتيجة والمفعول: *The contract was signed yesterday*.
5. **الأفعال المركبة والمتلازمات**:
   - إتقان *put off, call off, figure out, look forward to + -ing*.
   - التفريق الحاسم بين *make a mistake* و *do research*.

> **تعليمات الاختبار الشامل**:
> أجب عن الأسئلة العشرة التالية لتقييم تمكنك التام والانطلاق بثقة إلى آفاق المستوى فوق المتوسط **B2 (Upper Intermediate)**!`,
    rulesAndStructuresAr: `خلاصة قواعد B1: المضارع التام have/has + V3. الماضي المستمر was/were + ing مع while/when. الشرط الأول If + present, will. الشرط الثاني If + past, would. المبني للمجهول be + V3. المتلازمات: make a mistake, do research. الأفعال المركبة: look forward to + -ing.`,
    summaryAr: 'المستوى B1 هو نقطة التحول الكبرى نحو الطلاقة والاستقلالية التامة في العمل والسفر. تهانينا على وصولك لهذه المرحلة المتقدمة!',
    arabicContrastPoint: {
      titleAr: 'الانتقال من التراكيب البسيطة إلى الجمل المركبة المتماسكة',
      descriptionAr: 'في B1 تتجاوز مرحلة الجمل القصيرة المنفصلة لتنتقل إلى ربط الأفكار، وصياغة الشروط، والتقارير المبنية للمجهول بدقة لغوية عالية.',
      badArabicHabit: 'Writing short disconnected sentences without cohesive markers.',
      correctEnglishWay: 'Using cohesive devices, conditionals, and passive voice naturally.',
    },
    examples: [
      { en: 'She has worked here for five years and she has already been promoted.', ar: 'هي تعمل هنا منذ خمس سنوات وقد تمت ترقيتها بالفعل.', phoneticAr: 'شِي هَاز وِيركْت هِير فُور فَايْف يِيرز' },
      { en: 'If we put off this project again, our competitors will gain an advantage.', ar: 'إذا أجلنا هذا المشروع مجدداً، سيكتسب منافسونا أفضلية.', phoneticAr: 'إِف وِي بُوت أُوف ذِس بْرُوجِكْت' },
      { en: 'While the system was being updated, no data was lost.', ar: 'بينما كان النظام يخضع للتحديث، لم يُفقد أي من البيانات.', phoneticAr: 'وَايْل ذَا سِيسْتِم وَاز' },
    ],
    vocabulary: [
      { word: 'Advantage', ipa: '/ədˈvæn.t̬ɪdʒ/', partOfSpeech: 'noun', meaningAr: 'ميزة وأفضلية تنافسية', exampleEn: 'First-mover advantage is crucial.', exampleAr: 'أفضلية البداية المبكرة حاسمة.' },
      { word: 'Promote', ipa: '/prəˈmoʊt/', partOfSpeech: 'verb', meaningAr: 'يرقي موظفاً / يروج لمنتج', exampleEn: 'He was promoted to team lead.', exampleAr: 'تمت ترقيته إلى قائد فريق.' },
      { word: 'Competitor', ipa: '/kəmˈpet̬.ə.t̬ɚ/', partOfSpeech: 'noun', meaningAr: 'منافس في السوق أو المسابقة', exampleEn: 'Analyze the competitor strategies.', exampleAr: 'حلل استراتيجيات المنافسين.' },
    ],
    commonMistakes: [
      { wrong: 'I have seen the new software yesterday.', correct: 'I saw the new software yesterday.', reasonAr: 'وجود yesterday يفرض الماضي البسيط saw.' },
      { wrong: 'I look forward to collaborate with you.', correct: 'I look forward to collaborating with you.', reasonAr: 'العبارة look forward to يتبعها فعل منتهٍ بـ -ing.' },
    ],
    realWorldChallengeAr: 'اكتب إيميل عمل من 4 جمل تستخدم فيه: جملة مضارع تام مع already، وجملة شرطية، وخاتمة بـ look forward to.',
    exercises: [
      {
        id: 'b1-7-ex-1',
        type: 'multiple_choice',
        instructionAr: 'اختر الجملة الخالية تماماً من الأخطاء في المضارع التام:',
        instructionEn: 'Choose the grammatically correct present perfect sentence:',
        question: 'Which sentence correctly connects past and present?',
        options: [
          'She has worked at this international firm for five years.',
          'She worked at this international firm since five years.',
          'She has worked at this firm two years ago.',
          'She has been work at this firm for five years.',
        ],
        correctAnswer: 0,
        explanationAr: 'الجملة الأولى صحيحة تماماً: has worked مع For للدلالة على مدة مستمرة حتى الحاضر.',
      },
      {
        id: 'b1-7-ex-2',
        type: 'multiple_choice',
        instructionAr: 'اختر الفعل المركب المناسب لتأجيل موعد الاجتماع:',
        instructionEn: 'Select the phrasal verb meaning to postpone:',
        question: 'We need to _____ the meeting until Thursday.',
        options: ['put off', 'turn off', 'look after', 'wake up'],
        correctAnswer: 0,
        explanationAr: 'الفعل المركب Put off يعني تأجيل (postpone).',
      },
      {
        id: 'b1-7-ex-3',
        type: 'fill_blank',
        instructionAr: 'املأ الفراغ بالصيغة الصحيحة بعد look forward to (listen / listening):',
        instructionEn: 'Fill in the correct form after look forward to:',
        question: 'I look forward to ______ to your podcast episode.',
        correctAnswer: ['listening', 'Listening'],
        explanationAr: 'بعد look forward to نضيف -ing للفعل: listening.',
      },
      {
        id: 'b1-7-ex-4',
        type: 'multiple_choice',
        instructionAr: 'اختر صيغة المبني للمجهول الصحيحة للتقرير المالي:',
        instructionEn: 'Choose the correct passive structure in past simple:',
        question: 'The final report _____ by the manager yesterday.',
        options: ['was approved', 'approved', 'is approve', 'has approve'],
        correctAnswer: 0,
        explanationAr: 'في الماضي البسيط المبني للمجهول نستخدم was + التصريف الثالث approved.',
      },
      {
        id: 'b1-7-ex-5',
        type: 'multiple_choice',
        instructionAr: 'اختر المتلازمة اللفظية الصحيحة مع كلمة "mistakes":',
        instructionEn: 'Choose the collocation for mistakes:',
        question: 'Everyone _____ mistakes when learning a new language.',
        options: ['makes', 'does', 'takes', 'gets'],
        correctAnswer: 0,
        explanationAr: 'المتلازمة اللفظية هي make a mistake وليس do a mistake.',
      },
      {
        id: 'b1-7-ex-6',
        type: 'sentence_scramble',
        instructionAr: 'رتب الكلمات لتكوين جملة شرطية ثانية صحيحة:',
        instructionEn: 'Arrange the words to form a correct Second Conditional sentence:',
        question: 'negotiate / were / I / you / would / If / I',
        correctAnswer: 'If I were you I would negotiate',
        explanationAr: 'الترتيب: If I were you I would negotiate.',
      },
      {
        id: 'b1-7-ex-7',
        type: 'error_hunt',
        instructionAr: 'صحح الخطأ الزمني مع yesterday (اكتب الفعل المصحح بالماضي البسيط فقط):',
        instructionEn: 'Correct the tense error caused by yesterday:',
        question: 'I have called the client yesterday.',
        correctAnswer: ['called', 'Called'],
        explanationAr: 'مع وجود yesterday نستخدم الماضي البسيط الصريح called وليس have called.',
      },
      {
        id: 'b1-7-ex-8',
        type: 'multiple_choice',
        instructionAr: 'اختر أداة الربط المناسبة للحدث القاطع المفاجئ في الماضي:',
        instructionEn: 'Choose the connector preceding the past simple event:',
        question: 'I was driving on the highway _____ the heavy rain started.',
        options: ['when', 'while', 'during', 'since'],
        correctAnswer: 0,
        explanationAr: 'نستخدم when قبل الحدث الماضي البسيط المفاجئ الذي قاطع الاستمرار.',
      },
      {
        id: 'b1-7-ex-9',
        type: 'multiple_choice',
        instructionAr: 'ما المعنى الاصطلاحي للفعل المركب "figure out"؟',
        instructionEn: 'What is the meaning of "figure out"?',
        question: 'To "figure out a problem" means to:',
        options: [
          'solve or understand it after thinking',
          'cancel it permanently',
          'postpone it to tomorrow',
          'ignore it completely',
        ],
        correctAnswer: 0,
        explanationAr: 'الفعل المركب figure out يعني التوصل لحل المشكلة أو فهمها بعد التفكير.',
      },
      {
        id: 'b1-7-ex-10',
        type: 'arabic_to_english',
        instructionAr: 'ترجم الجملة: "أتطلع إلى العمل معكم قريباً":',
        instructionEn: 'Translate: "أتطلع إلى العمل معكم قريباً":',
        question: 'Translate: "أتطلع إلى العمل معكم قريباً"',
        correctAnswer: ['I look forward to working with you soon', 'I look forward to working with you soon.', 'i look forward to working with you soon'],
        explanationAr: 'الترجمة الصحيحة: I look forward to working with you soon مع استخدام working.',
      },
    ],
  },
];
