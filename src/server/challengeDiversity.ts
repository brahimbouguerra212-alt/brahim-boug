// Dynamic scenarios and rich diversified challenge banks for AI studios
export const DIVERSE_TOPICS = [
  'ordering artisanal coffee, croissants, and fresh juice at a bustling train station cafe',
  'packing luggage, navigating ticket gates, and boarding an express bullet train',
  'exploring a vibrant night food market with neon lights and exotic flavors',
  'troubleshooting a strange bug in a smartphone application with a friendly colleague',
  'adopting an energetic rescue puppy and teaching it simple commands in the garden',
  'cooking an ambitious homemade pasta recipe from an old handwritten family notebook',
  'planning an unexpected weekend camping trip under starlit mountains and setting up tents',
  'celebrating a close friend winning a major promotion at a creative design studio',
  'discussing favorite science fiction movies, unexpected plot twists, and time travel',
  'browsing vintage vinyl records and rare novels in a cozy rainy-day bookstore',
  'training for a city 10k run and tracking pace with an encouraging running club',
  'visiting an interactive contemporary art exhibition and discussing abstract paintings',
  'remodeling a small sunlit balcony with green plants, fairy lights, and wooden chairs',
  'negotiating flexible remote work schedules and project milestones with a manager',
  'learning how to play the acoustic guitar and practicing fingerpicking patterns',
  'shopping for organic honey, crisp apples, and fresh bread at a weekend farmer market',
  'fixing a bicycle flat tire on a scenic coastal path just before a golden sunset',
  'attending an open-air summer music festival with vibrant food trucks and acoustic sets',
  'organizing a surprise birthday party on a breezy rooftop terrace with old classmates',
  'discovering a quiet hidden cove while road-tripping along the Mediterranean coast',
  'checking into an eco-friendly wooden cabin during the first light snowfall of the season',
  'preparing an inspiring pitch deck for an international startup competition',
  'volunteering at a wildlife rescue sanctuary and helping rehabilitate sea turtles',
  'waking up at dawn to photograph the city skyline blanketed in misty morning light',
];

export function getRandomScenario(existingTopic?: string): string {
  if (existingTopic && existingTopic.trim().length > 3) {
    return existingTopic.trim();
  }
  const idx = Math.floor(Math.random() * DIVERSE_TOPICS.length);
  return DIVERSE_TOPICS[idx];
}

export interface SentenceBuilderFallbackItem {
  ar: string;
  en: string;
  tiles: string[];
  exp: string;
  focus: string;
}

export const RICH_SENTENCE_BUILDER_FALLBACKS: Record<string, SentenceBuilderFallbackItem[]> = {
  A0: [
    { ar: 'أنا أعيش في شقة جميلة ومريحة.', en: 'I live in a nice and cozy apartment.', tiles: ['I', 'live', 'in', 'a', 'nice', 'and', 'cozy', 'apartment.', 'lives', 'at', 'the', 'big'], exp: 'فاعل (I) + فعل في المصدر (live) + حرف جر (in).', focus: 'المضارع البسيط وحروف الجر المكانية' },
    { ar: 'هذا صديقي المفضل من الجامعة.', en: 'This is my best friend from university.', tiles: ['This', 'is', 'my', 'best', 'friend', 'from', 'university.', 'are', 'these', 'to', 'for'], exp: 'اسم الإشارة للمفرد القريب (This is) مع صفة التفضيل.', focus: 'أسماء الإشارة والصفات' },
    { ar: 'هو يملك دراجة زرقاء سريعة.', en: 'He has a fast blue bicycle.', tiles: ['He', 'has', 'a', 'fast', 'blue', 'bicycle.', 'have', 'is', 'the', 'bike'], exp: 'مع المفرد الغائب He نستخدم has، وترتيب الصفات قبل الاسم.', focus: 'فعل الملكية وترتيب الصفات' },
    { ar: 'نحن نشرب القهوة مع الحليب كل صباح.', en: 'We drink coffee with milk every morning.', tiles: ['We', 'drink', 'coffee', 'with', 'milk', 'every', 'morning.', 'drinks', 'tea', 'at', 'in'], exp: 'فاعل جمع We مع فعل مجرد drink وظرف التكرار every morning.', focus: 'العادات اليومية في المضارع البسيط' },
    { ar: 'أختي طالبة ذكية في مدرسة الفنون.', en: 'My sister is a smart student at art school.', tiles: ['My', 'sister', 'is', 'a', 'smart', 'student', 'at', 'art', 'school.', 'are', 'has', 'the'], exp: 'صفة الملكية (My sister) مع فعل to be ووصف المهنة.', focus: 'الوصف والمهن مع to be' },
    { ar: 'القطة البيضاء تنام تحت الطاولة الكبيرة.', en: 'The white cat sleeps under the big wooden table.', tiles: ['The', 'white', 'cat', 'sleeps', 'under', 'the', 'big', 'wooden', 'table.', 'sleep', 'on', 'small'], exp: 'مفرد غائب يأخذ s في المضارع مع حرف الجر under.', focus: 'حروف الجر المكانية والمفرد الغائب' },
    { ar: 'أين محطة الحافلات المركزية من فضلك؟', en: 'Where is the central bus station please?', tiles: ['Where', 'is', 'the', 'central', 'bus', 'station', 'please?', 'are', 'train', 'when'], exp: 'سؤال بسيط عن مكان باستخدام Where is + الاسم.', focus: 'السؤال عن الأماكن والاتجاهات' },
    { ar: 'هذا الطعام ساخن ولذيذ جداً اليوم.', en: 'This food is very hot and delicious today.', tiles: ['This', 'food', 'is', 'very', 'hot', 'and', 'delicious', 'today.', 'are', 'these', 'cold'], exp: 'المفرد القريب This مع صفات العطف.', focus: 'أسماء الإشارة والصفات الحسية' },
    { ar: 'هل تحب الموسيقى الهادئة أثناء الدراسة؟', en: 'Do you like quiet music while studying?', tiles: ['Do', 'you', 'like', 'quiet', 'music', 'while', 'studying?', 'Does', 'likes', 'listen'], exp: 'السؤال في المضارع البسيط بـ Do you + المصدر المجرد.', focus: 'تكوين الأسئلة بـ Do' },
  ],
  A1: [
    { ar: 'نحن نلتقي كل يوم جمعة في المركز الرياضي.', en: 'We meet every Friday at the sports center.', tiles: ['We', 'meet', 'every', 'Friday', 'at', 'the', 'sports', 'center.', 'meets', 'in', 'on', 'gym'], exp: 'فاعل جمع We + فعل مجرد + ظرف الزمان والمكان.', focus: 'المضارع البسيط وحروف الجر المكانية' },
    { ar: 'هي تفضل قراءة الروايات في هدوء المساء.', en: 'She prefers reading novels in the quiet evening.', tiles: ['She', 'prefers', 'reading', 'novels', 'in', 'the', 'quiet', 'evening.', 'prefer', 'read', 'at', 'night'], exp: 'الفعل prefer يأخذ s مع المفرد الغائب متبوعاً بصيغة gerund (reading).', focus: 'أفعال التفضيل والمفرد الغائب' },
    { ar: 'هل يمكنك مساعدتي في حمل هذه الحقيبة الثقيلة؟', en: 'Can you help me carry this heavy bag?', tiles: ['Can', 'you', 'help', 'me', 'carry', 'this', 'heavy', 'bag?', 'could', 'to', 'helps', 'carries'], exp: 'استخدام الفعل المساعد Can في صيغة السؤال متبوعاً بالمصدر المجرد.', focus: 'الأفعال الناقصة في طلب المساعدة' },
    { ar: 'أنا لا أتناول السكر في قهوتي الصباحية.', en: 'I do not take sugar in my morning coffee.', tiles: ['I', 'do', 'not', 'take', 'sugar', 'in', 'my', 'morning', 'coffee.', 'does', 'takes', 'milk', 'no'], exp: 'نفي المضارع البسيط لضمير المتكلم I باستخدام do not + المصدر.', focus: 'نفي المضارع البسيط' },
    { ar: 'كم تكلف هذه السترة الزرقاء الصوفية؟', en: 'How much does this blue wool sweater cost?', tiles: ['How', 'much', 'does', 'this', 'blue', 'wool', 'sweater', 'cost?', 'many', 'do', 'costs', 'is'], exp: 'السؤال عن السعر باستخدام How much does + المفرد + cost.', focus: 'السؤال عن الأسعار والتسوق' },
    { ar: 'هم يسافرون إلى إسبانيا بالقطار السريع.', en: 'They travel to Spain by high speed train.', tiles: ['They', 'travel', 'to', 'Spain', 'by', 'high', 'speed', 'train.', 'travels', 'with', 'on', 'in'], exp: 'وسائل المواصلات تأخذ حرف الجر by.', focus: 'حروف جر وسائل النقل' },
    { ar: 'ماذا تفعل في عطلة نهاية الأسبوع عادة؟', en: 'What do you usually do on the weekend?', tiles: ['What', 'do', 'you', 'usually', 'do', 'on', 'the', 'weekend?', 'does', 'doing', 'at', 'in'], exp: 'ظرف التكرار usually يأتي بين الفاعل والفعل الرئيسي.', focus: 'ظروف التكرار وترتيب الأسئلة' },
    { ar: 'أنا أستيقظ مبكراً لأمارس رياضة الجري.', en: 'I wake up early to practice running.', tiles: ['I', 'wake', 'up', 'early', 'to', 'practice', 'running.', 'wakes', 'at', 'run', 'for'], exp: 'استخدام المصدر المسبوق بـ to للتعبير عن الغرض والسبب.', focus: 'لام التعليل والغرض (Infinitive of Purpose)' },
  ],
  A2: [
    { ar: 'عندما وصلت إلى المحطة، كان القطار قد غادر بالفعل.', en: 'When I arrived at the station, the train had already left.', tiles: ['When', 'I', 'arrived', 'at', 'the', 'station,', 'the', 'train', 'had', 'already', 'left.', 'has', 'leaves', 'in', 'was'], exp: 'الربط بين الماضي البسيط (arrived) والماضي التام (had left) للحدث الأسبق.', focus: 'الماضي البسيط والماضي التام' },
    { ar: 'إذا أمطرت غداً، سنؤجل الرحلة إلى الأسبوع القادم.', en: 'If it rains tomorrow, we will postpone the trip to next week.', tiles: ['If', 'it', 'rains', 'tomorrow,', 'we', 'will', 'postpone', 'the', 'trip', 'to', 'next', 'week.', 'rained', 'would', 'at', 'shall'], exp: 'الشرطية الأولى: If + مضارع بسيط (rains)، جواب الشرط: will + المصدر (postpone).', focus: 'الجملة الشرطية الأولى (First Conditional)' },
    { ar: 'بينما كان يسير على الشاطئ، وجد رسالة قديمة في زجاجة.', en: 'While he was walking on the beach, he found an old message in a bottle.', tiles: ['While', 'he', 'was', 'walking', 'on', 'the', 'beach,', 'he', 'found', 'an', 'old', 'message', 'in', 'a', 'bottle.', 'is', 'finds', 'when', 'walked'], exp: 'الماضي المستمر للحدث المستغرق والماضي البسيط للحدث المفاجئ.', focus: 'الماضي المستمر والماضي البسيط مع While' },
    { ar: 'هذا الفندق أكثر هدوءاً وراحة من الفندق القديم.', en: 'This hotel is quieter and more comfortable than the old one.', tiles: ['This', 'hotel', 'is', 'quieter', 'and', 'more', 'comfortable', 'than', 'the', 'old', 'one.', 'as', 'most', 'quiet', 'then'], exp: 'المقارنة بين الصفات القصيرة (-er) والصفات الطويلة (more ... than).', focus: 'درجات المقارنة في الصفات' },
    { ar: 'هل سبق لك أن جربت تسلق الجبال في الشتاء؟', en: 'Have you ever tried mountain climbing in winter?', tiles: ['Have', 'you', 'ever', 'tried', 'mountain', 'climbing', 'in', 'winter?', 'did', 'try', 'never', 'at'], exp: 'السؤال عن التجارب الحياتية باستخدام Have you ever + V3.', focus: 'المضارع التام وتجارب الحياة' },
    { ar: 'كان الجو بارداً جداً، لذا قررنا البقاء في المنزل.', en: 'The weather was so cold, so we decided to stay at home.', tiles: ['The', 'weather', 'was', 'so', 'cold,', 'so', 'we', 'decided', 'to', 'stay', 'at', 'home.', 'is', 'because', 'staying'], exp: 'استخدام أداة النتيجة so لربط السبب بالنتيجة.', focus: 'أدوات الربط السببية والنتائج' },
  ],
  B1: [
    { ar: 'لقد كنت أعمل على هذا المشروع منذ ثلاثة أشهر.', en: 'I have been working on this project for three months.', tiles: ['I', 'have', 'been', 'working', 'on', 'this', 'project', 'for', 'three', 'months.', 'has', 'since', 'worked', 'in'], exp: 'المضارع التام المستمر (have been working) مع for للتركيز على استمرار الفعل.', focus: 'المضارع التام المستمر' },
    { ar: 'على الرغم من صعوبة الاختبار، إلا أن الجميع استطاعوا اجتيازه بنجاح.', en: 'Although the exam was difficult, everyone managed to pass it successfully.', tiles: ['Although', 'the', 'exam', 'was', 'difficult,', 'everyone', 'managed', 'to', 'pass', 'it', 'successfully.', 'despite', 'can', 'passed', 'however'], exp: 'أداة التناقض Although يتبعها جملة كاملة (فاعل + فعل).', focus: 'أدوات التناقض والربط المتقدمة' },
    { ar: 'لو كنت مكانك، لبدأت في تعلم لغة جديدة الآن.', en: 'If I were you, I would start learning a new language now.', tiles: ['If', 'I', 'were', 'you,', 'I', 'would', 'start', 'learning', 'a', 'new', 'language', 'now.', 'was', 'will', 'started', 'am'], exp: 'الشرطية الثانية للنصيحة: If I were you + would + المصدر.', focus: 'الشرطية الثانية وإعطاء النصيحة' },
    { ar: 'تم تصميم هذا التطبيق لمساعدة الطلاب على إدارة وقتهم بكفاءة.', en: 'This application was designed to help students manage their time efficiently.', tiles: ['This', 'application', 'was', 'designed', 'to', 'help', 'students', 'manage', 'their', 'time', 'efficiently.', 'is', 'design', 'its', 'managing'], exp: 'المبني للمجهول في الماضي البسيط (was designed).', focus: 'المبني للمجهول (Passive Voice)' },
    { ar: 'كلما تدربت أكثر كل يوم، أصبحت محادثتك أكثر طلاقة وثقة.', en: 'The more you practice every day, the more fluent and confident your speaking becomes.', tiles: ['The', 'more', 'you', 'practice', 'every', 'day,', 'the', 'more', 'fluent', 'and', 'confident', 'your', 'speaking', 'becomes.', 'much', 'as', 'became', 'fluent'], exp: 'صيغة التناسب الطردي (The more ..., the more ...).', focus: 'صيغ التناسب والمقارنة المزدوجة' },
  ],
  B2: [
    { ar: 'كان ينبغي علينا مراجعة العقد بعناية قبل التوقيع عليه.', en: 'We should have reviewed the contract carefully before signing it.', tiles: ['We', 'should', 'have', 'reviewed', 'the', 'contract', 'carefully', 'before', 'signing', 'it.', 'must', 'had', 'sign', 'would'], exp: 'صيغة should have + V3 للتعبير عن اللوم أو الندم على تصرف في الماضي.', focus: 'الأفعال الناقصة في صيغة الماضي (Modal Perfects)' },
    { ar: 'لم يكن بإمكاننا تحقيق هذه النتيجة المذهلة لولا دعمكم المستمر.', en: 'We could not have achieved this remarkable outcome without your constant support.', tiles: ['We', 'could', 'not', 'have', 'achieved', 'this', 'remarkable', 'outcome', 'without', 'your', 'constant', 'support.', 'can', 'achieve', 'had', 'with'], exp: 'صيغة could not have + V3 للتعبير عن استحالة حدوث النتيجة لولا عامل معين.', focus: 'الاستحالة الماضية والامتنان المشروط' },
    { ar: 'يقال إن التكنولوجيا الحيوية ستحدث ثورة جذرية في الرعاية الصحية.', en: 'Biotechnology is said to revolutionize modern healthcare completely in the coming decade.', tiles: ['Biotechnology', 'is', 'said', 'to', 'revolutionize', 'modern', 'healthcare', 'completely', 'in', 'the', 'coming', 'decade.', 'says', 'has', 'revolutionized'], exp: 'أسلوب نقل الكلام والمبني للمجهول غير الشخصي (is said to + inf).', focus: 'الكلام المنقول والمبني للمجهول التقريري' },
  ],
  C1: [
    { ar: 'لم يكد ينتهي الاجتماع حتى أعلن المدير القرار الحاسم.', en: 'Hardly had the meeting ended when the director announced the crucial decision.', tiles: ['Hardly', 'had', 'the', 'meeting', 'ended', 'when', 'the', 'director', 'announced', 'the', 'crucial', 'decision.', 'no', 'sooner', 'did', 'than'], exp: 'القلب النحوي البلاغي (Inversion) بعد ظرف النفي Hardly مع had + الفاعل.', focus: 'القلب النحوي البلاغي (Rhetorical Inversion)' },
    { ar: 'ما أثار دهشتنا حقاً لم يكن السعر، بل الجودة الاستثنائية للخدمة.', en: 'What genuinely astonished us was not the price, but the exceptional caliber of the service.', tiles: ['What', 'genuinely', 'astonished', 'us', 'was', 'not', 'the', 'price,', 'but', 'the', 'exceptional', 'caliber', 'of', 'the', 'service.', 'which', 'astonishing', 'are'], exp: 'الجملة المشقوقة (Pseudo-cleft sentence) للتأكيد والتركيز البلاغي.', focus: 'الجمل المشقوقة للتأكيد البلاغي' },
  ],
  C2: [
    { ar: 'إن ما نحتاجه الآن ليس التردد، بل العمل المتضافر والجرأة المطلقة.', en: 'What we require now is not hesitation, but concerted action and resolute audacity.', tiles: ['What', 'we', 'require', 'now', 'is', 'not', 'hesitation,', 'but', 'concerted', 'action', 'and', 'resolute', 'audacity.', 'which', 'hesitate', 'boldness', 'act'], exp: 'الجملة المشقوقة البلاغية (Pseudo-cleft sentence) لتسليط الضوء على جوهر المطلب.', focus: 'الجمل المشقوقة والبلاغة التعبيرية الرفيعة' },
    { ar: 'نادرًا ما شهد التاريخ مثل هذا التحول الثقافي العميق والمتسارع.', en: 'Seldom has history witnessed such a profound and accelerated cultural metamorphosis.', tiles: ['Seldom', 'has', 'history', 'witnessed', 'such', 'a', 'profound', 'and', 'accelerated', 'cultural', 'metamorphosis.', 'never', 'did', 'witness', 'transformation'], exp: 'القلب النحوي الأكاديمي الرفيع بعد Seldom مع الفعل المساعد has والفاعل history.', focus: 'الأسلوب البلاغي المتقدم (Stylistic Inversion)' },
  ],
};

export function getDiverseSentenceFallbacks(
  level: string,
  excludePhrases: string[] = []
): SentenceBuilderFallbackItem[] {
  const pool = RICH_SENTENCE_BUILDER_FALLBACKS[level] || RICH_SENTENCE_BUILDER_FALLBACKS.A1;
  const filtered = pool.filter((item) => {
    return !excludePhrases.some((exc) => {
      const clean = exc.toLowerCase().trim();
      return item.en.toLowerCase().includes(clean) || item.ar.includes(clean);
    });
  });

  const source = filtered.length >= 3 ? filtered : pool;
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// -------------------------------------------------------------
// LISTENING FALLBACKS
// -------------------------------------------------------------
export interface ListeningFallbackItem {
  en: string;
  ar: string;
  ph: string;
  hint: string;
  bank: string[];
}

export const RICH_LISTENING_FALLBACKS: Record<string, ListeningFallbackItem[]> = {
  A0: [
    { en: 'Please open the green door.', ar: 'من فضلك افتح الباب الأخضر.', ph: 'بْلِيز أُوبِن ذَا غْرِين دُور', hint: 'فعل أمر مهذب يبدأ بـ Please', bank: ['Please', 'open', 'the', 'green', 'door.', 'opens', 'close', 'a', 'blue'] },
    { en: 'I have two younger brothers.', ar: 'لدي أخوان اثنان أصغر مني.', ph: 'آي هَاڤ تُو يَانْغَر بْرَاذَرْز', hint: 'العدد two مع صيغة الجمع brothers', bank: ['I', 'have', 'two', 'younger', 'brothers.', 'has', 'three', 'sister', 'old'] },
    { en: 'She drinks fresh orange juice.', ar: 'هي تشرب عصير البرتقال الطازج.', ph: 'شِي دْرِينْكْس فْرِيش أُورَانْج جُوس', hint: 'مفرد غائب مع فعل يأخذ s', bank: ['She', 'drinks', 'fresh', 'orange', 'juice.', 'drink', 'apple', 'water'] },
    { en: 'We live near the park.', ar: 'نحن نعيش بالقرب من الحديقة.', ph: 'وِي لِيڤ نِير ذَا بَارْك', hint: 'حرف الجر المكاني near', bank: ['We', 'live', 'near', 'the', 'park.', 'lives', 'at', 'in', 'school'] },
  ],
  A1: [
    { en: 'We play football in the park.', ar: 'نحن نلعب كرة القدم في الحديقة.', ph: 'وِي بْلَاي فُوتْبُول إِن ذَا بَارْك', hint: 'مضارع بسيط مع حرف الجر المكاني in', bank: ['We', 'play', 'football', 'in', 'the', 'park.', 'plays', 'at', 'tennis', 'on'] },
    { en: 'She is reading an interesting story.', ar: 'هي تقرأ قصة مشوقة ومثيرة.', ph: 'شِي إِز رِيدِينْغ أَنْ إِنْتِرِسْتِنْغ سْتُورِي', hint: 'مضارع مستمر مع أداة النكرة an قبل حرف العلة', bank: ['She', 'is', 'reading', 'an', 'interesting', 'story.', 'reads', 'a', 'book', 'the'] },
    { en: 'Can you call me back later?', ar: 'هل يمكنك الاتصال بي لاحقاً؟', ph: 'كَان يُو كُول مِي بَاك لَيْتَر', hint: 'طلب مهذب باستخدام can you', bank: ['Can', 'you', 'call', 'me', 'back', 'later?', 'could', 'calls', 'now', 'soon'] },
    { en: 'They travel to work by train.', ar: 'هم يسافرون إلى العمل بالقطار.', ph: 'ذَاي تْرَاڤِل تُو وِيرْك بَاي تْرَيْن', hint: 'وسيلة المواصلات يسبقها by', bank: ['They', 'travel', 'to', 'work', 'by', 'train.', 'travels', 'with', 'bus', 'car'] },
  ],
  A2: [
    { en: 'I forgot to lock the front door.', ar: 'نسيت أن أقفل الباب الأمامي.', ph: 'آي فُورْغَات تُو لُوك ذَا فْرَانْت دُور', hint: 'الماضي البسيط للفعل غير المنتظم forgot', bank: ['I', 'forgot', 'to', 'lock', 'the', 'front', 'door.', 'forget', 'locked', 'back', 'a'] },
    { en: 'While we were driving, it started raining.', ar: 'بينما كنا نقود، بدأت السماء تمطر.', ph: 'وَايل وِي وِير دْرَايڤِينْغ إِتْ سْتَارْتِد رَيْنِينْغ', hint: 'الماضي المستمر مع while والماضي البسيط', bank: ['While', 'we', 'were', 'driving,', 'it', 'started', 'raining.', 'was', 'drove', 'rain', 'when'] },
    { en: 'Have you seen my car keys anywhere?', ar: 'هل رأيت مفاتيح سيارتي في أي مكان؟', ph: 'هَاڤ يُو سِين مَاي كَار كِيز أَنِيوِير', hint: 'مضارع تام للسؤال عن شيء مفقود', bank: ['Have', 'you', 'seen', 'my', 'car', 'keys', 'anywhere?', 'did', 'see', 'house', 'the'] },
  ],
  B1: [
    { en: 'Technology has transformed our daily lives.', ar: 'لقد غيرت التكنولوجيا حياتنا اليومية بالكامل.', ph: 'تِكْنُولُوجِي هَاز تْرَانْسْفُورْمْد آوَر دَيْلِي لايڤْز', hint: 'مضارع تام يعبر عن أثر مستمر في الحاضر', bank: ['Technology', 'has', 'transformed', 'our', 'daily', 'lives.', 'have', 'changes', 'world', 'life'] },
    { en: 'I would rather stay home tonight.', ar: 'أفضل البقاء في المنزل الليلة.', ph: 'آي وُود رَاذَر سْتَاي هُوم تُونَايت', hint: 'صيغة التفضيل would rather + المصدر المجرد', bank: ['I', 'would', 'rather', 'stay', 'home', 'tonight.', 'had', 'to', 'staying', 'out'] },
    { en: 'She managed to overcome all the obstacles.', ar: 'تمكنت من التغلب على جميع العقبات.', ph: 'شِي مَانِيجْد تُو أُوڤَرْكَام أُول ذِي أُوبْسْتَاكِلْز', hint: 'الفعل manage to + المصدر يعبر عن النجاح بعد جهد', bank: ['She', 'managed', 'to', 'overcome', 'all', 'the', 'obstacles.', 'can', 'could', 'problems'] },
  ],
  B2: [
    { en: 'We ought to examine every detail thoroughly.', ar: 'ينبغي علينا فحص كل التفاصيل بدقة تامة.', ph: 'وِي أُوت تُو إِغْزَامِن إِڤْرِي دِيتَيْل ثُرُولِي', hint: 'صيغة الواجب الأخلاقي ought to + المصدر', bank: ['We', 'ought', 'to', 'examine', 'every', 'detail', 'thoroughly.', 'should', 'must', 'careful'] },
    { en: 'Had we known earlier, we would have helped.', ar: 'لو كنا نعلم مسبقاً، لكنا قد قدمنا المساعدة.', ph: 'هَاد وِي نُون أِيرْلِيَر وِي وُود هَاڤ هِلْبْت', hint: 'الشرطية الثالثة بصيغة القلب النحوي Had we known', bank: ['Had', 'we', 'known', 'earlier,', 'we', 'would', 'have', 'helped.', 'if', 'know', 'had'] },
  ],
  C1: [
    { en: 'Under no circumstances should you disclose this information.', ar: 'تحت أي ظرف من الظروف لا ينبغي لك كشف هذه المعلومات.', ph: 'أَنْدَر نُو سِيرْكَمْسْتَانْسِز شُود يُو دِسْكْلُوز ذِسْ إِنْفُورْمَيْشَن', hint: 'أسلوب القلب النحوي بعد عبارات النفي التام Under no circumstances', bank: ['Under', 'no', 'circumstances', 'should', 'you', 'disclose', 'this', 'information.', 'must', 'tell', 'never'] },
  ],
  C2: [
    { en: 'His eloquent discourse captivated the distinguished assembly.', ar: 'أسر خطابه البليغ هذا الجمع المرموق من الحاضرين.', ph: 'هِزْ إِلُوكْوَنْت دِسْكُورْس كَابْتِيڤَيْتِد ذَا دِسْتِينْغْوِيشْد أَسِمْبْلِي', hint: 'مفردات أدبية رفيعة ومجاز بليغ', bank: ['His', 'eloquent', 'discourse', 'captivated', 'the', 'distinguished', 'assembly.', 'speech', 'crowd', 'amazed'] },
  ],
};

export function getDiverseListeningFallbacks(
  level: string,
  excludePhrases: string[] = []
): ListeningFallbackItem[] {
  const pool = RICH_LISTENING_FALLBACKS[level] || RICH_LISTENING_FALLBACKS.A1;
  const filtered = pool.filter((item) => {
    return !excludePhrases.some((exc) => {
      const clean = exc.toLowerCase().trim();
      return item.en.toLowerCase().includes(clean) || item.ar.includes(clean);
    });
  });

  const source = filtered.length >= 3 ? filtered : pool;
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// -------------------------------------------------------------
// VOCABULARY FALLBACKS
// -------------------------------------------------------------
export const RICH_VOCABULARY_FALLBACKS: Record<string, any[]> = {
  A0: [
    { word: 'neighborhood', ipa: '/ˈneɪ.bə.hʊd/', arabicPhonetic: 'نَيْبَرْهُود', partOfSpeech: 'noun', arabicMeaning: 'الحي السكني أو الجوار', englishDefinition: 'An area where people live together in a town or city.', exampleEn: 'We live in a very safe and quiet neighborhood.', exampleAr: 'نحن نعيش في حي سكني آمن وهادئ للغاية.', collocations: ['quiet neighborhood', 'friendly neighborhood'], arabicMistakeWarning: 'حرف gh صامت تماماً في هذه الكلمة ولا يلفظ.' },
    { word: 'calendar', ipa: '/ˈkæl.ən.dər/', arabicPhonetic: 'كَالِنْدَر', partOfSpeech: 'noun', arabicMeaning: 'تقويم، روزنامة', englishDefinition: 'A system or chart showing the days, weeks, and months of a year.', exampleEn: 'Mark the interview date on your wall calendar.', exampleAr: 'ضع علامة على تاريخ المقابلة في تقويمك الجداري.', collocations: ['wall calendar', 'check the calendar'], arabicMistakeWarning: 'انتبه لنطق حرف L الخفيف وحرف A غير المشدد.' },
    { word: 'celebrate', ipa: '/ˈsel.ə.breɪt/', arabicPhonetic: 'سِلِبْرَيْت', partOfSpeech: 'verb', arabicMeaning: 'يحتفل، يبتهج بمناسبة', englishDefinition: 'To do something special for an important event or holiday.', exampleEn: 'We celebrate our grandmother birthday every spring.', exampleAr: 'نحتفل بعيد ميلاد جدتنا في كل ربيع.', collocations: ['celebrate success', 'celebrate a birthday'], arabicMistakeWarning: 'حرف C يلفظ كصوت S لأنه متبوع بحرف E.' },
  ],
  A1: [
    { word: 'schedule', ipa: '/ˈskedʒ.uːl/', arabicPhonetic: 'سْكِيجُول', partOfSpeech: 'noun', arabicMeaning: 'جدول مواعيد، جدول زمني', englishDefinition: 'A plan of things that will happen and the times they will happen.', exampleEn: 'I have a very busy schedule this morning.', exampleAr: 'لدي جدول مواعيد مزدحم للغاية هذا الصباح.', collocations: ['tight schedule', 'ahead of schedule'], arabicMistakeWarning: 'باللهجة الأمريكية تلفظ /skedʒ.uːl/ وبالبريطانية /ˈʃedʒ.uːl/.' },
    { word: 'convenient', ipa: '/kənˈviː.ni.ənt/', arabicPhonetic: 'كَنْڤِينِيَنْت', partOfSpeech: 'adjective', arabicMeaning: 'ملائم، مريح ومناسب', englishDefinition: 'Useful, easy, or suitable for doing something without difficulty.', exampleEn: 'Online shopping is extremely convenient for busy workers.', exampleAr: 'التسوق عبر الإنترنت مريح وملائم للغاية للموظفين المشغولين.', collocations: ['convenient time', 'convenient location'], arabicMistakeWarning: 'احرص على نطق صوت /v/ بملامسة الأسنان العلوية للشفة السفلية وليس /f/.' },
    { word: 'appetite', ipa: '/ˈæp.ə.taɪt/', arabicPhonetic: 'أَبِيتَايت', partOfSpeech: 'noun', arabicMeaning: 'شهية لتناول الطعام', englishDefinition: 'The natural desire to eat food.', exampleEn: 'Walking in the fresh air gave me a huge appetite.', exampleAr: 'المشي في الهواء العليل فتح شهيتي للطعام بشكل كبير.', collocations: ['healthy appetite', 'lose one appetite'], arabicMistakeWarning: 'صوت P انفجاري وليس B.' },
  ],
  A2: [
    { word: 'opportunity', ipa: '/ˌɒp.əˈtʃuː.nə.ti/', arabicPhonetic: 'أُوبُورْتْيُونِيتِي', partOfSpeech: 'noun', arabicMeaning: 'فرصة سانحة للنجاح أو التعلم', englishDefinition: 'A time or set of circumstances that makes it possible to do something.', exampleEn: 'Studying abroad is an incredible opportunity to grow.', exampleAr: 'الدراسة في الخارج فرصة لا تصدق لتطوير الذات.', collocations: ['golden opportunity', 'seize an opportunity'], arabicMistakeWarning: 'انتبه للتشديد على المقطع الثالث op-por-TU-ni-ty.' },
    { word: 'recommend', ipa: '/ˌrek.əˈmend/', arabicPhonetic: 'رِيكُومِينْد', partOfSpeech: 'verb', arabicMeaning: 'يوصي، يزكي شيئاً لشخص', englishDefinition: 'To suggest that someone or something would be good or suitable.', exampleEn: 'Can you recommend a good local restaurant nearby?', exampleAr: 'هل يمكنك أن توصي بمطعم محلي جيد بالجوار؟', collocations: ['highly recommend', 'recommend strongly'], arabicMistakeWarning: 'لا تضاعف حرف C، الكلمة تحتوي على c واحدة و mm مضاعفة.' },
  ],
  B1: [
    { word: 'resilient', ipa: '/rɪˈzɪl.jənt/', arabicPhonetic: 'رِيزِلْيَنْت', partOfSpeech: 'adjective', arabicMeaning: 'مرن، قادر على التعافي السريع من الأزمات', englishDefinition: 'Able to recover quickly from difficult conditions or shocks.', exampleEn: 'Children are remarkably resilient when adapting to new cultures.', exampleAr: 'الأطفال مرنون بشكل مدهش عند التكيف مع ثقافات جديدة.', collocations: ['resilient economy', 'resilient personality'], arabicMistakeWarning: 'حرف S يلفظ كصوت /z/ لوقوعه بين متحركين.' },
    { word: 'accomplish', ipa: '/əˈkʌm.plɪʃ/', arabicPhonetic: 'أَكَامْبْلِيش', partOfSpeech: 'verb', arabicMeaning: 'ينجز، يحقق هدفاً بنجاح', englishDefinition: 'To succeed in doing or completing something.', exampleEn: 'You can accomplish great goals with daily persistence.', exampleAr: 'يمكنك إنجاز أهداف عظيمة من خلال الإصرار اليومي.', collocations: ['accomplish a mission', 'accomplish a task'], arabicMistakeWarning: 'صوت O يلفظ كـ Schwa خفيفة وليس أو صريحة.' },
  ],
  B2: [
    { word: 'perspective', ipa: '/pəˈspek.tɪv/', arabicPhonetic: 'بِرْسْبِكْتِيڤ', partOfSpeech: 'noun', arabicMeaning: 'منظور، زاوية رؤية للأمور', englishDefinition: 'A particular attitude toward or way of regarding something.', exampleEn: 'Living in another country gave him a broader perspective on life.', exampleAr: 'منحه العيش في بلد آخر منظوراً أوسع وأشمل للحياة.', collocations: ['broad perspective', 'fresh perspective', 'gain perspective'], arabicMistakeWarning: 'احرص على التفريق بين صوت /p/ وصوت /b/.' },
    { word: 'scrutinize', ipa: '/ˈskruː.tɪ.naɪz/', arabicPhonetic: 'سْكْرُوتِنَايز', partOfSpeech: 'verb', arabicMeaning: 'يدقق بعناية وتمحيص شديد', englishDefinition: 'To examine or inspect someone or something very closely and thoroughly.', exampleEn: 'The auditors scrutinized every financial transaction in the report.', exampleAr: 'دقق المحاسبون في كل معاملة مالية بالتقرير بعناية فائقة.', collocations: ['closely scrutinize', 'scrutinize data'], arabicMistakeWarning: 'النهاية -ize تلفظ بصوت z الصريح.' },
  ],
  C1: [
    { word: 'ubiquitous', ipa: '/juːˈbɪk.wɪ.təs/', arabicPhonetic: 'يُوبِيكْوِيتَس', partOfSpeech: 'adjective', arabicMeaning: 'شائع وموجود في كل مكان في آن واحد', englishDefinition: 'Present, appearing, or found everywhere at the same time.', exampleEn: 'Smartphones have become ubiquitous in modern metropolitan cities.', exampleAr: 'أصبحت الهواتف الذكية موجودة وشائعة في كل مكان بالمدن الكبرى.', collocations: ['ubiquitous presence', 'ubiquitous technology'], arabicMistakeWarning: 'حرف U الأول يلفظ /juː/ مثل كلمة you.' },
  ],
  C2: [
    { word: 'ephemeral', ipa: '/ɪˈfem.ər.əl/', arabicPhonetic: 'إِفِيمِرَال', partOfSpeech: 'adjective', arabicMeaning: 'سريع الزوال، عابر وقصير الأجل', englishDefinition: 'Lasting for a very short time; fleeting and transient.', exampleEn: 'Fame on social media is often ephemeral and unpredictable.', exampleAr: 'الشهرة على وسائل التواصل الاجتماعي غالباً ما تكون سريعة الزوال ولا يمكن التنبؤ بها.', collocations: ['ephemeral beauty', 'ephemeral nature'], arabicMistakeWarning: 'المقطع ph يلفظ كصوت /f/ والتشديد على المقطع الثاني.' },
  ],
};

export function getDiverseVocabularyFallbacks(
  level: string,
  excludeWords: string[] = []
): any[] {
  const pool = RICH_VOCABULARY_FALLBACKS[level] || RICH_VOCABULARY_FALLBACKS.A1;
  const filtered = pool.filter((item) => {
    return !excludeWords.some((w) => w.toLowerCase().trim() === item.word.toLowerCase().trim());
  });

  const source = filtered.length > 0 ? filtered : pool;
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}
