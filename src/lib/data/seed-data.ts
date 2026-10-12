import type { LearningPath, Course, Module, Lesson, QuizQuestion, Project, FAQ } from '@/types';

// =========================================================================
// Free Tissue Camp — Complete Curriculum
// المنهاج الهندسي الكامل: علوم وتكنولوجيا تصنيع ورق المناديل والتشيو (Tissue Papermaking & Converting)
// من المبتدئ إلى مهندس التشغيل وضبط الجودة المحترف
// =========================================================================

// ── 1. Learning Paths (المسارات التخصصية لصناعة التيشيو) ──────────────────────────

export const learningPaths: LearningPath[] = [
  {
    id: 'path-tissue-fundamentals',
    title: 'أساسيات ومواد خام ورق التيشيو',
    title_en: 'Tissue Fundamentals & Fiber Furnish',
    description: 'مدخل هندسي شامل لأنواع منتجات المناديل الصحية، مواصفات الجودة القياسية، ودراسة ألياف الخشب الصلب واللين وعجائن التدوير.',
    description_en: 'Comprehensive introduction to tissue grades, quality parameters, hardwood vs softwood fiber furnish, and deinked pulp.',
    icon: 'BookOpen',
    color: '#2e7d32',
    order: 1,
    courses: [],
    total_courses: 2,
    total_lessons: 8,
    estimated_hours: 18,
  },
  {
    id: 'path-tissue-chemistry',
    title: 'تحضير العجينة والكيمياء الرطبة للتيشيو',
    title_en: 'Stock Preparation & Wet End Chemistry',
    description: 'أسرار التكرير منخفض التركيز للألياف الطويلة دون تكسيرها، والتحكم في إضافات القوة الجافة، ومقاومات البلل الدائمة والمؤقتة، والمطريات.',
    description_en: 'Low-consistency refining for tissue, freeness control, wet strength resins (PAE), dry strength agents, and chemical debonders.',
    icon: 'TestTube',
    color: '#15803d',
    order: 2,
    courses: [],
    total_courses: 2,
    total_lessons: 8,
    estimated_hours: 20,
  },
  {
    id: 'path-tissue-machine',
    title: 'ماكينات التيشيو الفائقة، التوين واير وهندسة طلاء اليانكي',
    title_en: 'Tissue Machine, Twin Wire Formers & Yankee Coating Engineering',
    description: 'تشغيل ماكينات التشكيل الهلالي وتوين واير (Twin Wire Formers)، هندسة رشاشات الماكينة والفواني، أسطوانة اليانكي واستواء كيمياء الطلاء، وعلاج عيوب الاستواء المبكر والمتأخر وسكاكين الكريب.',
    description_en: 'Crescent former & twin wire operations, shower spray engineering, high-velocity Yankee hoods, Yankee coating leveling & curing dynamics, and creping mechanics.',
    icon: 'Factory',
    color: '#1b5e20',
    order: 3,
    courses: [],
    total_courses: 5,
    total_lessons: 20,
    estimated_hours: 60,
  },
  {
    id: 'path-tissue-converting-qa',
    title: 'تحويل المناديل، النقش وضبط الجودة المعملية',
    title_en: 'Tissue Converting, Embossing & Quality Assurance',
    description: 'خطوط تحويل مناديل الوجه والرولات، تكنولوجيا النقش ولصق الطبقات، الفحوصات المعملية القياسية (ISO 12625)، ودليل استكشاف الأعطال وحلها.',
    description_en: 'Tissue converting lines, embossing, ply-bonding, standard lab testing methods (ISO 12625), and comprehensive industrial troubleshooting.',
    icon: 'ShieldCheck',
    color: '#c8a87a',
    order: 4,
    courses: [],
    total_courses: 2,
    total_lessons: 8,
    estimated_hours: 22,
  },
];

// ── 2. Courses (الدورات التدريبية المتقدمة) ──────────────────────────────────

export const courses: Course[] = [
  // ── COURSE 1: مدخل إلى عالم ورق التيشيو ──
  {
    id: 'course-tissue-101',
    learning_path_id: 'path-tissue-fundamentals',
    title: 'مدخل إلى عالم ورق التيشيو والمنتجات الصحية',
    title_en: 'Introduction to Tissue Paper Grades & Quality Standards',
    description: 'دورة تأسيسية متعمقة تشرح الخصائص الفريدة لورق التيشيو (مناديل الوجه، ورق التواليت، مناديل المطبخ، ومسحات الورش)، معايير الجودة الأربعة (النعومة، المتانة، الامتصاص، والسماكة)، وحسابات الوزن القياسي.',
    short_description: 'تصنيفات منتجات التيشيو، الجراماج، وتوازن النعومة والمتانة والامتصاص',
    difficulty: 'beginner',
    estimated_hours: 8,
    total_lessons: 4,
    total_modules: 2,
    skills: ['تصنيف منتجات التيشيو', 'حساب الوزن القياسي (GSM)', 'مبادئ النعومة والمتانة', 'فهم الامتصاص الشعري'],
    requirements: ['لا توجد متطلبات مسبقة، موجه للطلاب والفنيين والمهندسين الجدد'],
    objectives: [
      'فهم الفروق التصنيعية بين مناديل الوجه، ورق الحمام، ومناديل المطبخ شديدة الامتصاص',
      'إتقان قياسات الوزن الأساسي (Basis Weight / Grammage) التي تتراوح بين 13 إلى 24 جم/م²',
      'فهم المعضلة الفيزيائية الكبرى في التيشيو: توازن النعومة مقابل المتانة (Softness-Strength Trade-off)',
      'التعرف على متطلبات الاستهلاك المنزلي (At-Home) والاستهلاك التجاري الخارجي (Away-From-Home)',
    ],
    order: 1,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 2: هندسة ألياف وعجائن التيشيو ──
  {
    id: 'course-tissue-102',
    learning_path_id: 'path-tissue-fundamentals',
    title: 'هندسة ألياف وعجائن التيشيو (Furnish Engineering)',
    title_en: 'Tissue Fiber Morphology & Furnish Engineering',
    description: 'دراسة كيميائية وفيزيائية وتشغيلية متكاملة للألياف السليلوزية ومنظومة تحضير العجائن. تشمل الفروق الجوهرية بين اللب القصير (Eucalyptus) واللب الطويل (NBSK/SBSK)، رقم الخشونة (Coarseness)، خلطات الألياف والطبقات المتعددة، بجانب التشغيل الميداني لأحواض البالبر (Pulper)، مصافي التنقية ومصافي الضغط، حلقات التحكم في التركيز (Consistency Control)، والفحوصات المعملية اليومية (°SR, FQA).',
    short_description: 'المورفولوجيا، خلطات الألياف، تشغيل البالبر والتنقية، ضبط التركيز، والفحوصات المعملية الميدانية',
    difficulty: 'intermediate',
    estimated_hours: 18,
    total_lessons: 8,
    total_modules: 4,
    skills: [
      'مورفولوجيا ألياف السليلوز',
      'فهم رقم الخشونة (Coarseness)',
      'المقارنة بين اللب الشمالي والجنوبي',
      'تحديد نسب الخلط (Furnish Blend)',
      'تقييم عجائن البكر والتدوير',
      'تشغيل أحواض البالبر والتفكيك الهيدروديناميكي',
      'تشغيل مصافي HD Cleaners ومصافي الضغط',
      'التحكم في حلقات التركيز المغلقة ومعايرة الحساسات',
      'الفحوصات المعملية اليومية (°SR, CSF, FQA)',
    ],
    requirements: ['إتمام دورة مدخل إلى عالم ورق التيشيو أو معرفة أساسية بالسليلوز'],
    objectives: [
      'استيعاب الفروق المورفولوجية بين اللب القصير (BHKP) واللب الطويل (BSKP) وأثرها على النعومة والمتانة',
      'فهم رقم الخشونة (Fiber Coarseness Number) وتأثيره الحاسم على سمك جدار الليفة وملمس الورقة وتعداد الألياف في الجرام',
      'المقارنة المتعمقة بين اللب الشمالي (NBSK) واللب الجنوبي (SBSK) ولماذا يُعد الشمالي المعيار الذهبي للتيشيو الفاخر',
      'تصميم خلطة ألياف متوازنة (70-85% لب قصير + 15-30% لب طويل) وفق الصنف المستهدف وتوزيع الطبقات',
      'التشغيل الميداني لأحواض البالبر (Pulper) وضبط التركيز والحرارة وزمن التفكيك لمنع إجهاد الألياف',
      'إدارة منظومة تنقية الشوائب (HD Cleaners) ومصافي الضغط (Pressure Screens) وحساب نسبة الرفض',
      'معايرة حساسات قياس التركيز الميدانية وضبط حلقات التحكم الآلي (PID) وصمامات ماء التخفيف',
      'إجراء الفحوصات المعملية اليومية لدرجة الإنضاج (°SR) وتحليل أبعاد الألياف (FQA) لتوجيه قرارات التشغيل',
    ],
    order: 2,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 3: تكرير ألياف التيشيو وتحضير العجينة ──
  {
    id: 'course-tissue-201',
    learning_path_id: 'path-tissue-chemistry',
    title: 'تكرير ألياف التيشيو وعمليات تحضير العجينة',
    title_en: 'Stock Preparation & Low-Consistency Refining for Tissue',
    description: 'التحكم الدقيق في التكرير منخفض التركيز (LCR) لألياف التيشيو. كيف يتم تكرير الألياف الطويلة دون تقطيعها، قياس الحمل الحافي الخاص (SEL)، والتحكم في درجة الإنضاج (CSF و °SR) للحفاظ على النعومة.',
    short_description: 'التكرير منخفض التركيز، قياس الفريتنس (°SR)، واستهلاك الطاقة الصافي (kWh/t)',
    difficulty: 'intermediate',
    estimated_hours: 10,
    total_lessons: 4,
    total_modules: 2,
    skills: ['تشغيل مكررات الأقراص (Disc Refiners)', 'حساب Specific Edge Load (SEL)', 'فحص درجة الإنضاج Schopper-Riegler', 'منع تفتيت وقص الألياف'],
    requirements: ['هندسة ألياف وعجائن التيشيو'],
    objectives: [
      'فهم لماذا لا نكرر ألياف اللب القصير (اليوكاليبتوس) ونكتفي بتكرير ألياف اللب الطويل فقط',
      'حساب الحمل الحافي الخاص (SEL J/m) واختيار أشكال حشوات أسطوانات التكرير (Refiner Plates)',
      'التحكم في درجة الإنضاج (°SR) في نطاق 24-30 درجة لمنع انسداد سلك التشكيل وتصلب الورقة',
      'إدارة أنظمة التشتيت والخلط وتوزيع التدفق نحو خزان الخلط وماكينة التيشيو',
    ],
    order: 1,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 4: الكيمياء الرطبة والمضافات المتخصصة للتيشيو ──
  {
    id: 'course-tissue-202',
    learning_path_id: 'path-tissue-chemistry',
    title: 'الكيمياء الرطبة والمضافات المتخصصة للتيشيو',
    title_en: 'Wet End Chemistry & Specialty Additives for Tissue',
    description: 'شرح مفصل لكيمياء نهاية الماكينة الرطبة: راتنجات مقاومة البلل الدائمة (PAE) لمناديل المطبخ، المؤقتة (GPAM) لمناديل التواليت، ومواد تعزيز الشد الجاف (CMC والنشا الكاتيوني)، والمطريات السطحية (Debonders & Softeners).',
    short_description: 'راتنجات PAE، النشا الكاتيوني، والمطريات الكيميائية لزيادة النعومة',
    difficulty: 'advanced',
    estimated_hours: 10,
    total_lessons: 4,
    total_modules: 2,
    skills: ['تطبيق راتنجات مقاومة البلل PAE', 'استخدام المطريات والمفككات (Debonders)', 'إدارة الشحنة الكهروستاتيكية (Zeta Potential)', 'منع الرغوة والترسبات البيولوجية'],
    requirements: ['تكرير ألياف التيشيو وعمليات تحضير العجينة'],
    objectives: [
      'فهم آلية عمل روابط PAE التساهمية لتحقيق مقاومة بلل تفوق 25-30% من الشد الجاف',
      'التحكم في راتنجات مقاومة البلل المؤقتة لضمان التحلل السريع لمناديل التواليت في شبكات الصرف',
      'معرفة عمل مركبات الأمونيوم الرباعية كمطريات ومفككات للروابط الهيدروجينية السطحية',
      'موازنة كيمياء الدائرة البيضاء، التحكم في الرغوة، ومثبتات الشحنة البوليمرية',
    ],
    order: 2,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 5: ماكينات التيشيو الهلالية وتكنولوجيا التشكيل ──
  {
    id: 'course-tissue-301',
    learning_path_id: 'path-tissue-machine',
    title: 'تكنولوجيا التشكيل وماكينات التيشيو الهلالية (Crescent Former)',
    title_en: 'Crescent Former Technology & Forming Section Mechanics',
    description: 'تشغيل وصيانة قسم التشكيل في ماكينات التيشيو الحديثة فائقة السرعة. هندسة صندوق التدفق الهيدروليكي (Headbox)، ضبط نسبة سرعة التدفق إلى السلك (Jet-to-Wire Ratio)، ونزح المياه بالطرد المركزي بين السلك واللباد.',
    short_description: 'صندوق التدفق، نزح المياه بالطرد المركزي، وضبط نسبة MD/CD على سرعات 2000 م/د',
    difficulty: 'advanced',
    estimated_hours: 12,
    total_lessons: 4,
    total_modules: 2,
    skills: ['تشغيل صندوق التدفق الهيدروليكي', 'ضبط نسبة Jet-to-Wire', 'إدارة أقمشة التشكيل واللبادات', 'التحكم في اتجاه الألياف MD/CD'],
    requirements: ['الكيمياء الرطبة والمضافات المتخصصة للتيشيو'],
    objectives: [
      'فهم التفوق التقني لماكينات Crescent Former على ماكينات Fourdrinier و SBR في سرعات التيشيو',
      'التحكم في صندوق التدفق الهيدروليكي متعدد القنوات (Multi-layer Headbox) لطبقات النعومة والمتانة',
      'ضبط زاوية التدفق وسرعته للتحكم في نسبة قوة الشد بالاتجاه الطولي/العرضي (MD/CD Ratio)',
      'اختيار لبادات الكبس (Press Felts) وإدارتها لتقليل استهلاك الطاقة في التجفيف اللاحق',
    ],
    order: 1,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 6: أسطوانة اليانكي وكيمياء الطلاء وعلم الكرمشة ──
  {
    id: 'course-tissue-302',
    learning_path_id: 'path-tissue-machine',
    title: 'أسطوانة اليانكي وعلم الكرمشة (Yankee Dryer & Creping Science)',
    title_en: 'Yankee Cylinder, High-Velocity Hood & Creping Mechanics',
    description: 'قلب مصنع التيشيو: التشغيل الحراري لأسطوانة اليانكي الصلب أو الزهر، كابينة الهواء الساخن (Hood) بدرجة 450°م، الكيمياء الثلاثية لطلاء السطح (Adhesive, Release, Modifier)، وهندسة سكاكين الكريب لتكوين التجاعيد الدقيقة.',
    short_description: 'أسطوانة اليانكي، الكابينة الغازية، كيمياء الطلاء، وسكاكين الكريب والنعومة',
    difficulty: 'advanced',
    estimated_hours: 12,
    total_lessons: 4,
    total_modules: 2,
    skills: ['إدارة طلاء أسطوانة اليانكي (Coating Package)', 'هندسة سكاكين الكريب (Creping Geometry)', 'حساب نسبة الكرمشة (Crepe Ratio %)', 'الوقاية من اهتزاز السكين (Chatter Marks)'],
    requirements: ['تكنولوجيا التشكيل وماكينات التيشيو الهلالية'],
    objectives: [
      'فهم الديناميكا الحرارية لتجفيف التيشيو المشترك بين ضغط بخار اليانكي وهواء الكابينة الفائق',
      'إتقان إدارة مرشات طلاء اليانكي (Spray Boom) وتوازن البوليمر اللاصق والعازل والمعدل',
      'اختيار زوايا شفرات الكريب (Blade Bevel) والفرق بين شفرات الصلب وشفرات الكاربيد السيراميكية',
      'التحكم في نسبة الكرمشة (Crepe Ratio) وتأثيرها على استطالة الورقة (Stretch) ونعومتها الحريرية',
    ],
    order: 2,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  // ── COURSE 9: هندسة وتكنولوجيا ماكينات التوين واير ──
  {
    id: 'course-tissue-303',
    learning_path_id: 'path-tissue-machine',
    title: 'هندسة وتكنولوجيا ماكينات التوين واير (Twin Wire Formers)',
    title_en: 'Twin Wire & Gap Former Engineering in Tissue Making',
    description: 'دورة تخصصية متعمقة في هندسة وتشغيل ماكينات التيشيو ذات السلكين (Twin Wire Formers). تشمل التطور التاريخي من Fourdrinier و SBR إلى ماكينات الفجوة الحديثة (Crescent Former, C-Former, S-Wrap)، فيزياء النزح بالطرد المركزي وضغط شد السلك، هيدروديناميكا فجوة التشكيل ونسبة Jet-to-Wire على سرعات 2200 م/د، ودليل استكشاف وحل مشكلات التشكيل الميدانية.',
    short_description: 'هندسة التوين واير، Crescent و C-Former، هيدروديناميكا النزح بالطرد المركزي، وضبط فجوة التشكيل',
    difficulty: 'advanced',
    estimated_hours: 14,
    total_lessons: 4,
    total_modules: 2,
    skills: [
      'تشغيل ماكينات التوين واير',
      'حساب ضغط النزح الهيدروديناميكي P = T/R',
      'ضبط زاوية اصطدام التدفق ونسبة J/W',
      'إدارة أقمشة وأسلاك التشكيل المزدوجة',
      'حل مشاكل Pinholes وتموج الحواف واستقرار الشيت',
    ],
    requirements: ['تكنولوجيا التشكيل وماكينات التيشيو الهلالية'],
    objectives: [
      'استيعاب الفروق الهندسية بين أنظمة التشكيل: Fourdrinier و SBR و Crescent و C-Former و S-Wrap',
      'حساب قوى النزح الهيدروديناميكي الناتجة عن شد السلك (P = T/R) وقوى الطرد المركزي',
      'ضبط نقطة التقاء التدفق (Jet Impingement) ونسبة Jet-to-Wire للتحكم في نسبة MD/CD على سرعات تفوق 2200 م/د',
      'تشخيص وعلاج مشاكل التوين واير الشائعة: اهتزاز الأسلاك، ثقوب الشيت، وتآكل الأقمشة غير المتساوي',
    ],
    order: 3,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 10: هندسة رشاشات ماكينات التيشيو والفواني ──
  {
    id: 'course-tissue-304',
    learning_path_id: 'path-tissue-machine',
    title: 'هندسة رشاشات ماكينات التيشيو والفواني وحسابات التداخل (Showers & Spray Engineering)',
    title_en: 'Tissue Machine Showers, Spray Nozzles & Overlap Engineering',
    description: 'دورة متكاملة لمهندسي ومشاغلي التيشيو حول منظومة الرشاشات والفواني الميدانية: تصنيف الرشاشات من السلك إلى اليانكي (HP Oscillating, LP Fan, Chemical Spray Boom, Edge Trims, Knock-off)، مورفولوجيا الفواني (الإبرية النفاثة، المروحة المسطحة، الذاتية التنظيف)، الحسابات الهندسية لزوايا الفواني ومسافة الرش ونسبة الأوفرلاب (Overlap %)، وهندسة التذبذب ومزامنة الشوط وصيانة الفلاتر.',
    short_description: 'أنواع الرشاشات والفواني، حسابات الأوفرلاب والتداخل، زوايا الرش، ومزامنة شوط التذبذب',
    difficulty: 'advanced',
    estimated_hours: 12,
    total_lessons: 4,
    total_modules: 2,
    skills: [
      'تصنيف رشاشات ماكينة التيشيو من السلك إلى اليانكي',
      'اختيار أنواع الفواني المناسبة (Needle, Flat Fan, Atomizing)',
      'حساب عرض التغطية ونسبة الأوفرلاب (Overlap %)',
      'ضبط زاوية ميلان الفواني (Offset Angle) لمنع تصادم الرذاذ',
      'مزامنة سرعة وشوط التذبذب الميكانيكي لحماية اللبادات',
      'صيانة الفلاتر وتشخيص تآكل وانسداد الفواني الميداني',
    ],
    requirements: ['تكنولوجيا التشكيل وماكينات التيشيو الهلالية'],
    objectives: [
      'التعرف على كافة منظومات الرش عبر ماكينة التيشيو وضغوط تشغيلها من 2 بار إلى 70 بار',
      'فهم الفروق الوظيفية بين فواني الإبرة النفاثة وفواني المروحة المسطحة والفواني ذاتية التنظيف',
      'إجراء الحسابات الهندسية لزوايا الرش (15° إلى 110°)، المسافة الرأسية، ومسافة التباعد لحساب نسبة الأوفرلاب',
      'مزامنة سرعة التذبذب الميكانيكي مع سرعة اللباد لمنع خطوط الغسيل الناقصة وتآكل اللبادات',
      'تطبيق بروتوكول فحص ومعايرة الفواني واكتشاف مشاكل انسداد الرشاشات والخطوط المائية',
    ],
    order: 4,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
  // ── COURSE 11: هندسة استواء طلاء اليانكي والتحكم في عيوب الاستواء ──
  {
    id: 'course-tissue-305',
    learning_path_id: 'path-tissue-machine',
    title: 'هندسة استواء طلاء اليانكي والتحكم في عيوب الاستواء المبكر والمتأخر',
    title_en: 'Yankee Coating Film Leveling, Curing Dynamics & Troubleshooting',
    description: 'دورة هندسية تخصصية متقدمة في ديناميكا استواء وطهي فيلم طلاء أسطوانة اليانكي (Yankee Coating Leveling & Curing). تشمل فيزياء الاستواء والنافذة اللزجة المرنة (Viscoelastic Window)، المثلث الكيميائي للطلاء، مظاهر وأسباب وعلاج الاستواء المبكر (Premature Curing / Glazed Hard Coating)، ومظاهر وأسباب وعلاج الاستواء المتأخر (Delayed Curing / Sticky Gummy Coating)، ومصفوفة المراقبة والتشخيص الميداني لمهندس التشغيل.',
    short_description: 'استواء طلاء اليانكي، النافذة اللزجة المرنة، عيوب الاستواء المبكر والمتأخر، وحماية سطح الأسطوانة',
    difficulty: 'advanced',
    estimated_hours: 12,
    total_lessons: 4,
    total_modules: 2,
    skills: [
      'فهم ميكانيزم استواء فيلم الكوتنج (Film Leveling Kinetics)',
      'التحكم في النافذة اللزجة المرنة (Viscoelastic Window)',
      'تشخيص وعلاج الاستواء المبكر وتفحم الطلاء (Early Leveling)',
      'تشخيص وعلاج الاستواء المتأخر والالتصاق المفرط (Late Leveling)',
      'موازنة المثلث الكيميائي (Adhesive, Release, Modifier)',
      'المراقبة البصرية والاهتزازية لسطح أسطوانة اليانكي',
    ],
    requirements: ['أسطوانة اليانكي وعلم الكرمشة (Yankee Dryer & Creping Science)'],
    objectives: [
      'استيعاب المراحل الخمس لدورة حياة الكوتنج خلال لفة أسطوانة اليانكي الواحدة',
      "فهم الخصائص اللزجة المرنة (Storage Modulus G' vs Loss Modulus G'') والتحكم في حرارة التحول الزجاجي Tg",
      'التعرف على المظاهر التشغيلية للاستواء المبكر (كوتنج صلب مزجج، اهتزاز السكين Chatter Marks، وتآكل الشفرات) وكيفية علاجه',
      'التعرف على المظاهر التشغيلية للاستواء المتأخر (كوتنج صمغي طري، انقطاعات الورقة، ونتف الألياف والغبار) وكيفية علاجه',
      'تطبيق مصفوفة المراقبة والقرارات الفورية للتحكم في الكيماويات والبخار وسكاكين الكريب',
    ],
    order: 5,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },



  // ── COURSE 7: خطوط تحويل المناديل، النقش ولصق الطبقات ──
  {
    id: 'course-tissue-401',
    learning_path_id: 'path-tissue-converting-qa',
    title: 'عمليات تحويل المناديل والطباعة والنقش (Converting Lines)',
    title_en: 'Tissue Converting, Embossing & Ply-Bonding Systems',
    description: 'من الرولات الجامبو (Jumbo Rolls) إلى المنتج النهائي الجاهز للرف. تكنولوجيا إعادة اللف، درفلة النقش (Point-to-Point و Nested)، لصق الطبقات بالغراء المائي، ماكينات طي مناديل الوجه، ومناشير الرولات الآلية.',
    short_description: 'إعادة اللف، درافيل النقش (Embossing)، لصق الطبقات، ومناشير Log Saws',
    difficulty: 'intermediate',
    estimated_hours: 10,
    total_lessons: 4,
    total_modules: 2,
    skills: ['تشغيل خطوط إعادة اللف (Rewinders)', 'ضبط ضغط درافيل النقش (Embossing Rollers)', 'تطبيق غراء لصق الطبقات (Ply-bonding Glue)', 'معايرة مناشير الرولات والتغليف'],
    requirements: ['أسطوانة اليانكي وعلم الكرمشة'],
    objectives: [
      'معرفة مراحل خط التحويل: الفك، النقش، لصق الطبقات، التخريم (Perforation)، وإعادة اللف',
      'فهم هندسة النقش (Point to Point و Micro-embossing) وتأثيرها على زيادة سمك الرول وامتصاصه',
      'إتقان عملية ربط الطبقات بالغراء المائي أو الميكانيكي (Knurling) لمنع انفصال المناديل',
      'التعرف على ماكينات الطي التبادلي (Interfolders) لمناديل العلب وسرعات التقطيع الآلية',
    ],
    order: 1,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },

  // ── COURSE 8: الفحوصات المعملية القياسية ودليل حل المشكلات ──
  {
    id: 'course-tissue-402',
    learning_path_id: 'path-tissue-converting-qa',
    title: 'الفحوصات المعملية القياسية واستكشاف أخطاء التشغيل',
    title_en: 'Tissue Quality Testing (ISO 12625) & Industrial Troubleshooting',
    description: 'دليل مهندس الجودة والتشغيل الشامل: إجراء الاختبارات القياسية الدولية لورق التيشيو وفق ISO 12625 و TAPPI (الجراماج، الشد الجاف والرطب، النعومة TSA، وسرعة الامتصاص)، مع دليل استكشاف وحل المشكلات التشغيلية الأكثر تعقيداً.',
    short_description: 'اختبارات ISO 12625، قياس النعومة TSA، وحل مشاكل Chatter Marks والوبر وانقطاع الورق',
    difficulty: 'advanced',
    estimated_hours: 12,
    total_lessons: 4,
    total_modules: 2,
    skills: ['فحوصات التيشيو القياسية ISO 12625', 'تشغيل جهاز فحص النعومة TSA', 'حل مشكلة اهتزاز السكين Chatter Marks', 'التخلص من الغبار والوبر وانقطاعات الورق'],
    requirements: ['عمليات تحويل المناديل والطباعة والنقش'],
    objectives: [
      'إجراء اختبارات الشد الجاف والرطب (MD/CD Tensile) وحساب نسبة مقاومة البلل بدقة معملية',
      'قياس النعومة الموضوعية باستخدام أجهزة Tissue Softness Analyzer (TSA) ومقارنتها بلجان التقييم الحسي',
      'فحص السعة والسرعة الامتصاسية للماء (Water Absorption Capacity & Time) لسلال التيشيو',
      'تشخيص وعلاج مشاكل الماكينة الكبرى: علامات اهتزاز السكين (Chatter Marks)، عدم استقرار فيلم الطلاء، وتطاير الغبار في خطوط التحويل',
    ],
    order: 2,
    is_published: true,
    is_free: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  },
];

// ── 3. Modules (الوحدات التعليمية) ──────────────────────────────────────────

export const modules: Module[] = [
  // Course 101: مدخل إلى التيشيو
  {
    id: 'mod-t101-1',
    course_id: 'course-tissue-101',
    title: 'عائلة منتجات التيشيو ومواصفاتها القياسية',
    title_en: 'Tissue Products Family & Physical Specifications',
    description: 'التعرف على خصائص مناديل الوجه، ورق التواليت، مناديل المطبخ، ومناديل المائدة',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t101-2',
    course_id: 'course-tissue-101',
    title: 'الخصائص الفيزيائية ومثلث جودة التيشيو',
    title_en: 'Physical Properties & Tissue Quality Triangle',
    description: 'مثلث النعومة والمتانة والامتصاص، وحسابات الوزن القياسي والسمك',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },

  // Course 102: هندسة الألياف
  {
    id: 'mod-t102-1',
    course_id: 'course-tissue-102',
    title: 'اللب القصير واللب الطويل في التيشيو ورقم الخشونة (Coarseness)',
    title_en: 'Short vs Long Fibers & Fiber Coarseness Science',
    description: 'الفروق المورفولوجية بين اللب القصير (اليوكاليبتوس) واللب الطويل، كشف أسرار رقم الخشونة (Coarseness)، والمقارنة بين اللب الشمالي والجنوبي',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t102-2',
    course_id: 'course-tissue-102',
    title: 'تصميم خلطات اللب (Furnish Blend) وعجائن التدوير (DIP)',
    title_en: 'Furnish Blend Formulation & Recycled DIP Pulp',
    description: 'استراتيجيات نسب خلط اللب القصير والطويل، صناديق التدفق متعددة الطبقات، وتحديات استخدام العجائن منزوعة الحبر',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t102-3',
    course_id: 'course-tissue-102',
    title: 'التشغيل الميداني لأحواض البالبر ومنظومة تنقية الشوائب',
    title_en: 'Pulper Operations, Deflaking & Centrifugal Cleaning',
    description: 'التشغيل العملي لأحواض إذابة البالات (Batch vs Continuous Pulpers)، اختبار نسبة التفكيك، وتشغيل مصافي الطرد المركزي HD Cleaners ومصافي الضغط Slotted Screens',
    order: 3,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t102-4',
    course_id: 'course-tissue-102',
    title: 'التحكم الآلي في التركيز والخزانات والفحوصات المعملية',
    title_en: 'Consistency Control Loops, Chest Agitation & Furnish Lab QA',
    description: 'حلقات ضبط التركيز المغلقة، إدارة خزانات الخلط والماكينة، وإجراء الفحوصات المعملية اليومية (°SR و FQA واختبار الرقائق Flakes)',
    order: 4,
    lessons: [],
    total_lessons: 2,
  },

  // Course 201: التكرير
  {
    id: 'mod-t201-1',
    course_id: 'course-tissue-201',
    title: 'مبادئ التكرير منخفض التركيز لألياف التيشيو',
    title_en: 'Low-Consistency Refining Principles',
    description: 'تكرير الألياف الطويلة دون تقطيعها، والتحكم في حمل الحافة الخاص SEL',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t201-2',
    course_id: 'course-tissue-201',
    title: 'التحكم في درجة الإنضاج واستهلاك الطاقة',
    title_en: 'Freeness Control & Specific Energy',
    description: 'قياس درجات CSF و °SR ومنع التكرير الزائد لحماية نعومة الورقة',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },

  // Course 202: الكيمياء الرطبة
  {
    id: 'mod-t202-1',
    course_id: 'course-tissue-202',
    title: 'كيمياء راتنجات مقاومة البلل الدائمة والمؤقتة',
    title_en: 'Permanent & Temporary Wet Strength Chemistry',
    description: 'راتنجات PAE لمناديل المطبخ وراتنجات GPAM القابلة للتفتت لمناديل التواليت',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t202-2',
    course_id: 'course-tissue-202',
    title: 'المطريات الكيميائية ومحسنات الشد الجاف',
    title_en: 'Debonders, Softeners & Dry Strength Agents',
    description: 'آلية عمل مركبات الأمونيوم لتقليل الروابط السطحية والنشا الكاتيوني لتعزيز القوة',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },

  // Course 301: ماكينات التشكيل الهلالي
  {
    id: 'mod-t301-1',
    course_id: 'course-tissue-301',
    title: 'صندوق التدفق الهيدروليكي ونزح المياه في Crescent Former',
    title_en: 'Headbox Hydraulics & Crescent Former Drainage',
    description: 'تصميم صندوق التدفق، نسبة Jet-to-Wire، وتشكيل الورقة بين السلك واللباد',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t301-2',
    course_id: 'course-tissue-301',
    title: 'أقمشة التشكيل ولَبّادات الكبس فائقة السرعة',
    title_en: 'Forming Fabrics & Tissue Press Felts',
    description: 'اختيار أسلاك التشكيل، تنظيف اللبادات المستمر، والكبس قبل أسطوانة اليانكي',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },

  // Course 302: أسطوانة اليانكي والكرمشة
  {
    id: 'mod-t302-1',
    course_id: 'course-tissue-302',
    title: 'أسطوانة اليانكي والكابينة الهوائية فائقة السرعة',
    title_en: 'Yankee Cylinder & High-Velocity Air Hood',
    description: 'انتقال الحرارة من البخار، الكابينة الغازية بدرجة 450°م، ونظام التجفيف المزدوج',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t302-2',
    course_id: 'course-tissue-302',
    title: 'كيمياء طلاء اليانكي وهندسة سكاكين الكريب',
    title_en: 'Yankee Coating Chemistry & Creping Blade Geometry',
    description: 'خلطة الرش الكيميائي الثلاثية، زوايا سكين الكريب، ونسبة الكرمشة لتوليد النعومة',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },
  // Course 303: هندسة ماكينات التوين واير
  {
    id: 'mod-t303-1',
    course_id: 'course-tissue-303',
    title: 'تطور وهندسة ماكينات التوين واير وأنواعها',
    title_en: 'Twin Wire Geometries & Classifications',
    description: 'التحول من Fourdrinier و SBR إلى Crescent Former و C-Former و S-Wrap وميكانيكا التشكيل',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t303-2',
    course_id: 'course-tissue-303',
    title: 'هيدروديناميكا النزح والتشغيل وحل مشكلات التوين واير',
    title_en: 'Twin Wire Hydrodynamics & Troubleshooting',
    description: 'ضغط شد السلك P=T/R، ضبط فجوة التشكيل ونسبة J/W، ودليل علاج مشاكل التوين واير',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },

  // Course 304: هندسة رشاشات وفواني الماكينة
  {
    id: 'mod-t304-1',
    course_id: 'course-tissue-304',
    title: 'خريطة وتصنيف منظومات الرش وأنواع الفواني',
    title_en: 'Showers & Nozzle Classifications',
    description: 'رشاشات الضغط العالي والمنخفض، رشاش طلاء اليانكي، وفواني الإبرة والمروحة والذاتية التنظيف',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t304-2',
    course_id: 'course-tissue-304',
    title: 'حسابات الأوفرلاب، هندسة التذبذب، ومشاكل الرش الميدانية',
    title_en: 'Spray Geometry, Overlap & Maintenance',
    description: 'حسابات زوايا الرش والتغطية والأوفرلاب %، زاوية الميلان Offset، ومزامنة سرعة شوط التذبذب',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },
  // Course 305: هندسة استواء طلاء اليانكي
  {
    id: 'mod-t305-1',
    course_id: 'course-tissue-305',
    title: 'كيمياء وفيزياء استواء طلاء اليانكي والنافذة اللزجة المرنة',
    title_en: 'Yankee Coating Chemistry & Viscoelastic Leveling Physics',
    description: 'مراحل دورة حياة الكوتنج، حرارة التحول الزجاجي Tg، والتحكم في المثلث الكيميائي للطلاء',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t305-2',
    course_id: 'course-tissue-305',
    title: 'تشخيص وعلاج عيوب الاستواء المبكر والمتأخر ومصفوفة التحكم الميداني',
    title_en: 'Early vs Late Leveling Diagnostics & Master Control Matrix',
    description: 'أسباب ومظاهر وعلاج الكوتنج الصلب المزجج والكوتنج الصمغي الطري، ومصفوفة القرارات الفورية',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },



  // Course 401: خطوط التحويل والنقش
  {
    id: 'mod-t401-1',
    course_id: 'course-tissue-401',
    title: 'تكنولوجيا إعادة اللف وهندسة النقش',
    title_en: 'Rewinding Mechanics & Embossing Patterns',
    description: 'ماكينات اللف الأوتوماتيكية، درافيل النقش Point-to-Point، وتكبير حجم الرول',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t401-2',
    course_id: 'course-tissue-401',
    title: 'لصق الطبقات وخطوط طي المناديل والتغليف',
    title_en: 'Ply-Bonding, Interfolding & Packaging',
    description: 'الغراء المائي لربط الطبقات، ماكينات طي مناديل العلب، ومناشير Log Saws',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },

  // Course 402: الفحوصات المعملية واستكشاف الأخطاء
  {
    id: 'mod-t402-1',
    course_id: 'course-tissue-402',
    title: 'الاختبارات المعملية القياسية لورق التيشيو (ISO 12625)',
    title_en: 'Standard Lab Testing for Tissue Products',
    description: 'فحص الجراماج، الشد الجاف والرطب، النعومة TSA، وسرعة وسعة الامتصاص',
    order: 1,
    lessons: [],
    total_lessons: 2,
  },
  {
    id: 'mod-t402-2',
    course_id: 'course-tissue-402',
    title: 'الدليل الهندسي لحل مشكلات إنتاج التيشيو الشائعة',
    title_en: 'Tissue Machine Troubleshooting Guide',
    description: 'علاج علامات اهتزاز السكين Chatter Marks، انقطاع الورقة، وتطاير الغبار والوبر',
    order: 2,
    lessons: [],
    total_lessons: 2,
  },
];

// ── 4. Complete In-depth Lessons (الدروس الكاملة مع الجداول والمعادلات والتفاصيل الصناعية) ──

export const lessons: Lesson[] = [
// ── COURSE 101: LESSON 1 ──
  {
    id: 'les-t101-1',
    module_id: 'mod-t101-1',
    title: 'عائلة منتجات التيشيو والمواصفات القياسية لكل صنف',
    title_en: 'Tissue Product Categories & Market Specifications',
    type: 'lesson',
    content: `
### ما هو ورق التيشيو (Tissue Paper)؟
ورق التيشيو هو صنف هندسي فائق التخصص من الورق خفيف الوزن القياسي (يتراوح عادة بين **13.0 إلى 24.0 جم/م²** لكل طبقة). يتميز بمسامية شبكية هائلة، وقدرة استثنائية على احتجاز السوائل بالخاصية الشعرية، وملمس سطحي شديد النعومة ناتج عن عملية تكسير ميكانيكي مجهري للألياف تُعرف باسم **الكرمشة (Creping)** على أسطوانة تجفيف عملاقة تسمى **أسطوانة اليانكي (Yankee Dryer)**.

---

### النظرية العلمية: فيزياء الامتصاص والخاصية الشعرية (Capillary Action):
تعتمد قدرة ورق التيشيو على امتصاص وتخزين السوائل على البنية المسامية ثلاثية الأبعاد المتكونة بين تقاطعات ألياف السليلوز، والتي تحكمها **معادلة لوكاس-واشبورن (Lucas-Washburn Equation)**:

$$\\frac{dh}{dt} = \\frac{r \\cdot \\gamma \\cdot \\cos\\theta}{4 \\cdot \\eta \\cdot h}$$

- **حيث:**
  - $r$: متوسط نصف قطر المسام الشعري بين الألياف (Pore Radius).
  - $\\gamma$: التوتر السطحي للسائل الممتص (Surface Tension).
  - $\\theta$: زاوية التلامس بين قطرة السائل وسطح ألياف السليلوز (Contact Angle).
  - $\\eta$: لزوجة السائل الديناميكية (Liquid Viscosity).
  - $h$: مسافة اختراق وصعود السائل داخل الشيت.

> 🔬 **المفهوم الفيزيائي لمهندس التيشيو:**
> تفرض المعادلة تحدياً تصميمياً: المسام الشعرية الضيقة جداً ($r$ صغير) ترفع السائل بقوة صعود شعرية عالية لكن بمعدل تدفق حجمي بطيء، بينما الفجوات الواسعة تحتجز حجماً هائلاً من السائل لكنها ضعيفة الشد الشعري. لذا يعتمد تصميم التيشيو الذكي على مزيج هجين من الألياف يوفر شبكة من المسام المتدرجة السعة.

---

### المقارنة الهندسية الشاملة بين الأصناف الستة لمنتجات التيشيو:

| الصنف التجاري | الوزن القياسي (GSM) | عدد الطبقات | مؤشر النعومة TSA | متطلب الشد المبلل (Wet Tensile) | سعة الامتصاص (جم ماء/جم ورق) | التطبيق النموذجي الميداني |
|---|---|---|---|---|---|---|
| **مناديل الوجه (Facial)** | 13.0 - 15.0 جم/م² | 2 - 3 طبقات | **فائق (90 - 95)** | **ضعيف جداً (< 5%)** | 6.0 - 8.0 | علب المناديل، إزالة المكياج، حماية البشرة الحساسة |
| **ورق التواليت المنزلي (Bath Tissue)** | 15.0 - 17.5 جم/م² | 2 - 4 طبقات | **مرتفع (80 - 88)** | **محظور (تحلل سريع < 60 ثانية)** | 7.0 - 9.0 | الاستخدام المنزلي والفندقي، شبكات الصرف الصحي |
| **مناديل المطبخ (Kitchen Towels)** | 20.0 - 24.0 جم/م² | طبقتان | متوسط (50 - 65) | **فائق (25% - 35% من الشد الجاف)**| **10.0 - 13.0** | امتصاص الزيوت والشحوم، مسح الأسطح الرطبة |
| **مناديل السفرة والمائدة (Napkins)** | 17.0 - 20.0 جم/م² | 1 - 3 طبقات | معتدل (60 - 70) | منخفض إلى معتدل (8% - 15%) | 5.5 - 7.5 | المطاعم، صالات الطعام، الطباعة الملونة |
| **المناديل الجيبية (Pocket Handkerchiefs)** | 15.0 - 17.0 جم/م² | 3 - 4 طبقات | ممتاز (85 - 90) | معتدل (10% - 15%) | 7.5 - 9.0 | الاستخدام الخارجي المتكرر ومقاومة العطاس والبلل |
| **مناشف اليد التجارية (AFH Roll Towels)** | 28.0 - 38.0 جم/م² | طبقة واحدة | منخفض (40 - 55) | **مرتفع جداً (> 20%)** | 8.0 - 10.0 | موزعات المطارات والمستشفيات، تجفيف الأيدي السريع |

---

> 💡 **القاعدة الهندسية الذهبية في التيشيو:**
> «كلما انخفض وزن الجراماج (GSM)، زادت حساسية إدارة الماكينة وصعوبة سحب الورقة دون انقطاع على السرعات العالية، وتطلب ذلك تحكماً ميكروياً في طبقة الطلاء البوليمري لأسطوانة اليانكي وتجانساً فائقاً في تدفق صندوق التدفق».
`,
    estimated_minutes: 20,
    order: 1,
    is_free: true,
  },

  // ── COURSE 101: LESSON 2 ──
  {
    id: 'les-t101-1b',
    module_id: 'mod-t101-1',
    title: 'سوق الاستهلاك المنزلي (At-Home) مقابل التجاري (AFH)',
    title_en: 'Consumer At-Home vs Away-From-Home (AFH) Markets',
    type: 'lesson',
    content: `
### التباين الاستراتيجي بين سوقي التيشيو عالمياً:
ينقسم قطاع صناعة وتحويل التيشيو إلى عالمين صناعيين مختلفين جذرياً من حيث استراتيجيات خلط الألياف، نوعية الماكينات، وتكلفة دورة الإنتاج:

---

### 1. سوق الاستهلاك المنزلي (Consumer / At-Home):
- **المحرك الحاسم للشراء:** التقييم الحسي للمستهلك (الملمس المخملي، البياض البصري الفائق $> 88\\%\\text{ ISO}$، والنقوش الزخرفية الناعمة).
- **المواد الخام:** يُعتمد بنسبة **100% على ألياف السليلوز البكر (Virgin Pulp)** مع هيمنة اللب القصير (اليوكاليبتوس) بنسبة تصل إلى $80\\%$ لإنتاج النعومة المطلقة.
- **مواصفات الرول النهائي:** قطر الرول محكوم بحوامل المناديل المنزلية ($100 - 125\\text{ mm}$)، ويحتوي على $150$ إلى $350$ منديل، مع التركيز على الكثافة المنخفضة لتعظيم الحجم (Bulky Feel).
- **هيكل التكلفة:** تكلفة خامات عالية واستثمار ضخم في خطوط التحويل والتغليف الفاخر المطبوع، لكن بهوامش ربحية تجارية مرتفعة.

---

### 2. سوق الاستهلاك التجاري والمؤسسي (Away-From-Home - AFH):
- **العملاء المستهدفون:** الفنادق، المطارات، المستشفيات، المجمعات التجارية، والمصانع.
- **المحرك الحاسم للشراء:** التكلفة لكل متر طولي أو لكل مسحة، المتانة وقوة الشد، وتقليل فترات إعادة تعبئة الموزعات (Dispensers).
- **المواد الخام:** اعتماد واسع على العجائن منزوعة الحبر المعاد تدويرها (**Deinked Pulp - DIP**) بنسب تتراوح بين $50\\%$ إلى $100\\%$، أو استخدام اللب الطويل الجنوبي (SBSK) لرفع قوة الشد بأقل تكلفة.
- **مواصفات الرول النهائي:** رولات جامبو عملاقة (Jumbo Roll Tissue - JRT) بأطوال تصل إلى $300 - 500\\text{ m}$ وقطر خارجي يتراوح بين $190 - 250\\text{ mm}$، أو مناشف ملفوفة بدون كور (Coreless Towels).
- **الأداء الوظيفي:** متانة ميكانيكية تتحمل السحب بقوة دون انقطاع، مع بياض تجاري مقبول ($75 - 82\\%\\text{ ISO}$).
`,
    estimated_minutes: 18,
    order: 2,
    is_free: true,
  },

  // ── COURSE 101: LESSON 3 ──
  {
    id: 'les-t101-2',
    module_id: 'mod-t101-2',
    title: 'مثلث جودة التيشيو: النعومة، المتانة، والامتصاص',
    title_en: 'The Tissue Quality Triangle: Softness, Strength & Absorbency',
    type: 'lesson',
    content: `
### معضلة النعومة مقابل المتانة (The Softness-Strength Conflict):
في فيزياء تصنيع الورق، تمثل العلاقة بين المتانة والنعومة تناقضاً علمياً حتمياً:
- **لرفع قوة الشد والمتانة:** نحتاج إلى زيادة كثافة الروابط الهيدروجينية بين ألياف السليلوز، وتكثيف الشيت بالضغط والتكرير. النتيجة الحتمية: شيت متماسك وقاسٍ يشبه ورق الطباعة وتختفي منه النعومة تماماً!
- **لرفع النعومة:** نحتاج إلى تقليل الروابط السطحية، وإرخاء الشبكة السليلوزية لزيادة مرونتها وانحنائها. النتيجة: شيت مخملي ناعم لكنه ضعيف جداً وعرضة للانقطاع على ماكينة الورق وخطوط التحويل!

---

### النظرية العلمية: نظرية كامبل لروابط السليلوز (Campbell's Theory):
تفسر نظرية كامبل كيفية نشأة الروابط الهيدروجينية أثناء تصنيع الورق:
1. عند نزح المياه وتبخيرها بين الألياف المبللة، تنشأ قوى شد شعري هائلة ناتجة عن التوتر السطحي لمينا المياه المتبقية (Menisci).
2. تقترب سلاسل السليلوز في جدران الألياف المتجاورة إلى مسافات مجهرية تقل عن **$0.3\\text{ nm}$**.
3. عند هذه المسافة الحرجة، تتشكل الروابط الهيدروجينية التساهمية المستقرة بين مجموعات الهيدروكسيل ($-OH$).
- **في التيشيو:** نعمل عبر الكيمياء والميكانيكا على **إعاقة نظرية كامبل جزئياً** لمنع تصلب الشيت، وذلك عبر الكرمشة الميكانيكية وإضافة المواد المفككة للروابط (Debonders).

---

### المكونان الفيزيائيان للنعومة (Tactile vs Bulk Softness):
1. **النعومة السطحية (Surface / Tactile Softness):**
   - تُعرف بأنها غياب الاحتكاك والخشونة المجهرية عند تمرير أطراف الأصابع على سطح المنديل.
   - تتحكم فيها: أبعاد ألياف اللب القصير، جودة الكرمشة، ونعومة طبقة الطلاء البوليمري.

2. **النعومة الحجمية (Bulk Softness / Flexibility):**
   - تُعرف بقابلية الشيت للانثناء والطي بسهولة في راحة اليد، وترتبط عكسياً بجساءة الانثناء (Bending Stiffness $S_b$):
   $$S_b = \\frac{E \\cdot t^3}{12}$$
   - حيث $E$ هو معامل المرونة (Elastic Modulus)، و $t$ هو سمك الشيت (Thickness).
   - توضح المعادلة أن زيادة سمك الورقة $t$ ترفع جساءتها وصلابتها بتناسب تكعيبي ($t^3$) ما لم تكن المادة هشة ومرنة وبنيتها مفككة عبر الكرمشة الدقيقة.
`,
    estimated_minutes: 22,
    order: 3,
    is_free: true,
  },

  // ── COURSE 101: LESSON 4 ──
  {
    id: 'les-t101-2b',
    module_id: 'mod-t101-2',
    title: 'حسابات الجراماج، السمك والحجم النوعي (Bulk & Caliper)',
    title_en: 'Grammage, Caliper and Bulk Calculations for Tissue',
    type: 'lesson',
    content: `
### المعادلات الرياضية الأساسية في هندسة التيشيو:

#### 1. معادلة الوزن القياسي (Grammage / Basis Weight):
تُقاس وفق المواصفة القياسية الدولية **ISO 12625-6**:
$$\\text{Grammage } (\\text{g/m}^2) = \\frac{\\text{Mass of conditioned test pieces (g)}}{\\text{Total area of test pieces } (\\text{m}^2)}$$
- يتم وزن عينات مساحتها معلومة بدقة ($100 \\times 100\\text{ mm}$) داخل غرفة مكيفة معملياً ($23^\\circ\\text{C}$ ورطوبة نسبية $50\\%$) لتجنب تذبذب وزن الورق بامتصاص الرطوبة الجوية.

---

#### 2. معادلة الحجم النوعي (Specific Bulk):
الـ Bulk هو المقياس الأكثر دلالة على هندسة ورفاهية شيت التيشيو، ويُقاس بالسنتيمتر المكعب لكل جرام (**cm³/g**):
$$\\text{Bulk } (\\text{cm}^3/\\text{g}) = \\frac{\\text{Caliper } (\\mu\\text{m})}{\\text{Grammage } (\\text{g/m}^2)}$$

- **مقارنة الـ Bulk بين الأصناف الورقية:**
  - ورق الطباعة والتصوير المكتبي: **$1.1 - 1.3\\text{ cm}^3/\\text{g}$** (كثيف ومكتنز).
  - كرتون التعبئة والتغليف: **$1.4 - 1.8\\text{ cm}^3/\\text{g}$**.
  - **ورق التيشيو الفاخر:** **$8.5 - 12.5\\text{ cm}^3/\\text{g}$** (أكثر من 8 أضعاف ورق الطباعة!).

> 💎 **الأهمية الاقتصادية للـ Bulk:**
> يسمح الحجم النوعي المرتفع بصناعة رولات مناديل تبدو ممتلئة وسميكة وفاخرة للمستهلك، باستخدام كمية ألياف سليلوزية أقل، مما يخفض تكلفة الخامات المباشرة بنسبة تصل إلى **12%** للمصنع!

---

#### 3. معادلة الكثافة الظاهرية (Apparent Density):
هي مقلوب الحجم النوعي تماماً، وتُقاس بالجرام لكل سنتيمتر مكعب (**g/cm³**):
$$\\text{Apparent Density} = \\frac{1}{\\text{Bulk}} = \\frac{\\text{Grammage } (\\text{g/m}^2)}{\\text{Caliper } (\\mu\\text{m})}$$
- في ورق التيشيو الفاخر، تكون الكثافة الظاهرية منخفضة للغاية (بين **$0.08 - 0.12\\text{ g/cm}^3$**)، مما يعكس وجود شبكة فراغات هوائية هائلة مسؤولة عن الامتصاص والشعور الهش المرن.
`,
    estimated_minutes: 20,
    order: 4,
    is_free: true,
  },

// ── COURSE 102: LESSON 5 ──
  {
    id: 'les-t102-1',
    module_id: 'mod-t102-1',
    title: 'مورفولوجيا ألياف السليلوز: الفروق الجوهرية بين اللب القصير واللب الطويل',
    title_en: 'Cellulose Fiber Morphology: Hardwood (BHKP) vs Softwood (BSKP) Deep Dive',
    type: 'lesson',
    content: `
### التشبيه البصري الميداني: كيف تفهم شيت التيشيو في دقيقة واحدة؟
تخيل أن شيت التيشيو الرقيق الذي تمسكه بيدك ليس مجرد ورقة بسيطة، بل هو بناء هندسي مركب يشبه تماماً **"سقف الخرسانة المسلحة المغطى بسجاد مخملي وثير"**:
- **ألياف اللب الطويل (Long Fiber / BSKP):** هي **أسياخ حديد التسليح**. ألياف طويلة ومتشابكة وقوية جداً، تمتد عبر مسافات شاسعة داخل الورقة لتعطيها القوة الهيكلية وتمنع تمزقها عند سحب المنديل أو عند جريان الورق بسرعة تفوق 2000 م/دقيقة على الماكينة.
- **ألياف اللب القصير (Short Fiber / BHKP):** هي **وبر السجاد الحريري المخملي**. ملايين الشعيرات القصيرة والرقيقة جداً التي تملأ الفراغات بين أسياخ الحديد وتغطي السطح بالكامل، فتمنع أصابعك من ملامسة الهيكل الخشن وتمنحك الإحساس القطني الحريري الفاخر.

---

### لماذا نستخدم في مصانع التيشيو مصطلحي "اللب القصير" و"اللب الطويل"؟
في مصانع وشركات التيشيو الاحترافية عالمياً وفي المنطقة العربية، استقر العرف الهندسي على استخدام مصطلحي:
- **اللب القصير (Short Fiber Pulp / Hardwood / BHKP)**
- **اللب الطويل (Long Fiber Pulp / Softwood / BSKP)**

بدلاً من الترجمات الحرفية التراثية مثل "خشب صلب ولين"؛ والسبب الهندسي حاسم: في صناعة التيشيو، الخواص الميكانيكية والحسية للمنتج لا تتأثر بصلابة جذع الشجرة في الغابة، بل بما تُقدمه **أبعاد الليفة المورفولوجية الدقيقة (طولها، قطرها، وسماكة جدارها)** داخل شبكة الورقة الرقيقة.

---

### التشريح الميكروسكوبي الدقيق للألياف (Microscopic Fiber Anatomy):

#### 1. أنسجة الخشب اللين (Softwood Anatomy):
- يتكون خشب الصنوبريات بنسبة تفوق **$90\% - 95\%$** من نوع واحد من الخلايا يُسمى **القصيبات (Tracheids)**.
- القصيبات هي أنابيب ليفية طويلة ذات نهايات مدببة، وظيفتها المزدوجة في الشجرة هي نقل الماء وتوفير الدعم الميكانيكي.
- تتميز بوجود **نقاط وحفر حوافية (Bordered Pits)** على جدرانها؛ هذه الحفر تمثل نقاط ضعف موضعية تسهل انثناء الليفة عند تعرضها لقوى التكرير وتساعد في تكوين شبكة تشابك متينة.

#### 2. أنسجة الخشب الصلب (Hardwood Anatomy):
- خشب الأشجار عريضة الأوراق (مثل اليوكاليبتوس والبتولا) أكثر تعقيداً وتنوعاً، ويتكون من:
  1. **الألياف الليفية الحقيقية (Libriform Fibers):** تشكل $60\% - 75\%$ من حجم الخشب، وهي الألياف التي نبحث عنها في التيشيو (قصيرة، مرنة، رقيقة الجدار).
  2. **عناصر الأوعية الخشبية (Vessel Elements):** خلايا أسطوانية قصيرة وعريضة تشبه البراميل المجهرية ($150 - 350\ \\mu\\text{m}$ عرضاً).
  3. **الخلايا البرانشيمية (Parenchyma Cells):** خلايا حية تخزينية دقيقة تمثل النواعم الأولية (Primary Fines).

> ⚠️ **المعضلة التشغيلية لعناصر الأوعية (Vessel Picking Problem):**
> خلايا الأوعية في بعض أصناف اللب القصير (مثل الأكاسيا واليوكاليبتوس المداري) عريضة جداً ومسطحة وقليلة الروابط الهيدروجينية. عند دخول الورقة في خطوط التحويل أو درافيل الطباعة (Printing Presses)، قد تقتلع أحبار الطباعة هذه الخلايا من سطح المنديل وتلتصق بالبليتة، وهي ظاهرة تُعرف بـ **(Vessel Picking)**، وتُعالج بضبط الطلاء البوليمري لليانكي أو اختيار أصناف يوكاليبتوس ذات أوعية دقيقة.

---

### النسب والمعايير البيومترية لجدار الخلية (Biometric Cell Wall Ratios):

في الأبحاث المورفولوجية المتقدمة لورق التيشيو، لا نكتفي بقياس الطول والعرض، بل نعتمد على نسب رياضية حاسمة تحكم سلوك الليفة:

#### 1. نسبة رانكل (Runkel Ratio):
تحدد هذه النسبة مدى قابلية الليفة للانهيار والتسطح (Collapsibility):

$$\\text{Runkel Ratio} = \\frac{2 \\times w}{l}$$

- **حيث:**
  - $w$: سماكة جدار الليفة (Cell Wall Thickness بالـ $\\mu\\text{m}$).
  - $l$: قطر التجويف الداخلي لليفة (Lumen Diameter بالـ $\\mu\\text{m}$).

- **القواعد التفسيرية لمهندس التيشيو:**
  - **إذا كانت نسبة رانكل $< 1$ (مثال: اليوكاليبتوس الإيبيري $\\approx 0.5 - 0.7$، وخشب الربيع في NBSK $\\approx 0.45$):**
    - الجدار رقيق والتجويف واسع. عند الكبس والتجفيف على أسطوانة اليانكي، ينهار الجدار الخلوي فوراً ويتسطح ليتحول إلى **شريط حريري منبسط فائق المرونة (Flat Ribbon)**.
    - النتيجة: مساحة تلامس هيدروجينية واسعة، تشتت ضوئي ممتاز، وملمس حريري مخملي ناعم جداً.
  - **إذا كانت نسبة رانكل $> 1$ (مثال: ألياف خشب الصيف في اللب الجنوبي SBSK $\\approx 1.3 - 1.8$):**
    - الجدار سميك جداً والتجويف ضيق. تقاوم الليفة قوى الضغط وترفض الانهيار، فتبقى أنبوباً أسطوانياً صلباً (**Rigid Cylinder**).
    - النتيجة: تبرز نهايات الليفة على سطح المنديل كأشواك مجهرية خشنة تسبب حكة وخربشة حسية قاسية (Harsh Handfeel).

#### 2. معامل المرونة والمطواعية (Flexibility Coefficient):

$$\\text{Flexibility Coefficient} = \\left( \\frac{l}{D} \\right) \\times 100$$

- **حيث:**
  - $D$: القطر الخارجي الإجمالي لليفة بالـ $\\mu\\text{m}$.
  - $l$: قطر التجويف الداخلي لليفة بالـ $\\mu\\text{m}$.
- الألياف التي يتجاوز معامل مرونتها **75%** (High Flexibility Fibers) هي الأنسب لمناديل الوجه وورق التواليت الفاخر؛ لأنها تمنح المنديل قابلية طي وهبوط انسيابي (Drape & Limpness).

#### 3. نسبة النحافة (Aspect / Slenderness Ratio):

$$\\text{Aspect Ratio} = \\frac{L}{D}$$

- **حيث:**
  - $L$: طول الليفة بالـ $\\mu\\text{m}$.
  - $D$: قطر الليفة بالـ $\\mu\\text{m}$.
- في اللب الطويل تتراوح النسبة بين **70 إلى 100**، مما يعزز قدرتها على بناء شبكة تسليح قوية، بينما في اللب القصير تتراوح بين **45 إلى 60**، مما يمنع تشكل كتل تلييفية وتكتلات معقدة (Flocculation) ويضمن تشكيلاً بصرياً فائق النقاء (Formation Uniformity).

---

### الكيمياء الجزيئية لبوليمرات الألياف (Polymer Chemistry):

| المكون الكيميائي | اللب القصير (Hardwood BHKP) | اللب الطويل (Softwood BSKP) | الأهمية التشغيلية في مصنع التيشيو |
|---|---|---|---|
| **السليلوز النقي ($\\alpha$-Cellulose)** | $78\% - 82\%$ | $82\% - 86\%$ | يوفر الهيكل البلوري الميكانيكي وقوة الشد الجافة |
| **الهيميسليلوز المهيمن** | **الزايلان (Glucuronoxylan) بنسبة $15\% - 20\%$** | **الجلوكومانان (Galactoglucomannan) بنسبة $7\% - 10\%$** | الزايلان بوليمر شديد الألفة للماء، يعمل كملدن داخلي يلين جدران الليفة ويحفز الروابط بدون تكرير |
| **اللجنين المتبقي (Residual Lignin)** | $< 0.1\%$ (رقم كابا $< 1.0$) | $< 0.15\%$ (رقم كابا $< 1.5$) | التبييض الكامل يزيل اللجنين الكاره للماء ليفتح مسام الامتصاص الفوري |
| **اللزوجة السليلوزية (Intrinsic Viscosity)** | $750 - 900\\text{ ml/g}$ | $850 - 1050\\text{ ml/g}$ | مؤشر على طول سلاسل السليلوز وعدم احتراقها كيميائياً في التبييض |
| **المستخلصات الراتنجية (Extractives)** | $< 0.15\%$ | $< 0.10\%$ | المستخلصات الزائدة قد تسبب رغوة كيميائية أو خللاً في طلاء اليانكي |

---

### قيمة احتجاز الماء (Water Retention Value - WRV):
تُعد خاصية **احتجاز الماء (WRV)** وفق المواصفة القياسية **ISO 23714** مقياساً لقدرة جدران الليفة على الانتفاخ بالماء الداخلي (Intra-fiber Swelling):
- يُقاس بطرد عينة العجينة مركزياً عند عجلة تسارع $3000\\text{ g}$ لمدة 15 دقيقة ثم حساب نسبة الماء المحتجز داخل الجدران مقارنة بالوزن الجاف.
- **في العجائن البكر غير المكررة:** يتراوح الـ WRV بين **$1.15$ إلى $1.40\\text{ g/g}$** (انتفاخ ممتاز يساعد على مرونة الكرمشة ونعومة المنديل).
- **في عجائن التدوير المقرنة (Hornified DIP):** يهبط الـ WRV إلى **$0.75 - 0.95\\text{ g/g}$**، دليلاً على تصلب الجدار وفقدان المسامية الداخلية.

---

### أسرار اللب القصير: لماذا يتربع اليوكاليبتوس على عرش النعومة العالمي؟

1. **كثافة هائلة وتعداد ألياف أسطوري في الجرام الواحد:**
   - يحتوي الجرام الواحد من لب اليوكاليبتوس على ما بين **$18$ إلى $25\\text{ مليون ليفة}$**!
   - للمقارنة: الجرام الواحد من اللب الطويل يحتوي فقط على **$1.5$ إلى $3.5\\text{ مليون ليفة}$**.

> 💡 **حساب هندسي تطبيقي: كم ليفة في منديل الوجه القياسي؟**
> - منديل الوجه ذو الطبقتين بمقاس $20 \\times 20\\text{ cm}$ يزن تقريباً **$0.55\\text{ جم}$**.
> - إذا كانت الخلطة تحتوي على $80\%$ لب قصير و $20\%$ لب طويل:
>   $$\\text{ألياف اللب القصير} = 0.55 \\times 0.80 \\times 22,000,000 \\approx 9,680,000\\text{ ليفة}!$$
>   $$\\text{ألياف اللب الطويل} = 0.55 \\times 0.20 \\times 3,000,000 \\approx 330,000\\text{ ليفة}.$$
> - إجمالي الألياف في المنديل الواحد يتجاوز **10 ملايين ليفة**، تشكل فيها ألياف اليوكاليبتوس أكثر من **$96\%$ من التعداد الكلي للجسيمات**!

2. **ظاهرة النسيج المخملي الدقيق (Velvet Micro-pile Effect):**
   - عند اصطدام الشيت بسكين الكرمشة (Creping Blade) بسرعة 2000 م/دقيقة، تنفصل نهايات ألياف اليوكاليبتوس القصيرة والمرنة وتنتصب عمودياً نحو الخارج مشكلة طبقة وبرية مجهرية تلامس أطراف الأصابع بنعومة فائقة.

---

### دراسة مقارنة معمقة بين عائلات اللب القصير عالمياً (Hardwoods Deep Dive):

1. **Eucalyptus Globulus (شبه جزيرة أيبيريا - إسبانيا والبرتغال):**
   - **التقييم:** *المعيار الأسمى للنعومة الفاخرة عالمياً*.
   - كورسنيس فائق الانخفاض ($6.5 - 7.5\\text{ mg/100m}$)، تجويف واسع وجدار رقيق جداً، وتعداد ألياف يصل إلى 26 مليون/جم.
   - مخصص لمنتجات Ultra-Premium Facial Tissue.
2. **Eucalyptus Grandis / Urograndis (البرازيل وأمريكا اللاتينية):**
   - **التقييم:** *العمود الفقري لصناعة التيشيو عالمياً (أكثر من 70% من المعروض الدولي)*.
   - كورسنيس متزن ($7.5 - 8.5\\text{ mg/100m}$)، متانة ممتازة مع نعومة عالية جداً، ونمو سريع متجدد في غابات سوزانو وكلابين.
3. **Acacia Mangium / Crassicarpa (إندونيسيا وجنوب شرق آسيا):**
   - ألياف متناهية القصر ($0.65 - 0.75\\text{ mm}$) وكورسنيس منخفض ($6.0 - 7.0\\text{ mg/100m}$).
   - تعطي نعومة سطحية فائقة ولكنها تحتوي على نسبة خلايا أوعية (Vessels) أعلى، وقوة شد متواضعة تتطلب دعماً بلب طويل شمالي.
4. **Birch - خشب البتولا (الدول الإسكندنافية - فنلندا والسويد):**
   - ألياف أطول قليلاً ($0.90 - 1.15\\text{ mm}$) وكورسنيس أعلى ($9.5 - 11.5\\text{ mg/100m}$).
   - تتميز بأعلى نسبة زايلان طبيعية، مما يمنحها قوة شد ذاتية متفوقة مع نعومة جيدة؛ ممتازة للماكينات فائقة السرعة التي تتطلب شداً أعلى للشيت.
5. **لب البامبو وتفل القصب (Non-wood Fibers):**
   - **البامبو:** ألياف متوسطة الطول ($1.5 - 2.0\\text{ mm}$)، خيار بيئي ممتاز لمناديل التواليت المستدامة.
   - **تفل القصب (Bagasse):** ألياف قصيرة ذات جدران سميكة ونواعم مرتفعة، مخصصة فقط للأصناف الاقتصادية ومناشف اليد التجارية (AFH).

---

### جدول المقارنة المورفولوجية والهندسية الشامل:

| الخاصية المورفولوجية والهندسية | اللب القصير (BHKP - ألياف اليوكاليبتوس) | اللب الطويل (BSKP - ألياف الصنوبر والتنوب) |
|---|---|---|
| **الاسم التجاري الشائع** | Bleached Hardwood Kraft Pulp (BHKP) | Bleached Softwood Kraft Pulp (BSKP) |
| **متوسط طول الليفة (Fiber Length)** | **$0.75 - 1.05\\text{ ملم}$** (قصيرة جداً) | **$2.50 - 3.80\\text{ ملم}$** (طويلة بأكثر من 3 أضعاف) |
| **عرض وقطر الليفة (Fiber Width)** | $14 - 19\ \\mu\\text{m}$ (نحيفة ورفيعة) | $25 - 45\ \\mu\\text{m}$ (عريضة ومكتنزة) |
| **سماكة جدار الخلية (Cell Wall)** | **رقيقة ومرنة ($2.5 - 3.5\ \\mu\\text{m}$)** | **سميكة وقوية ($4.0 - 9.0\ \\mu\\text{m}$)** |
| **نسبة رانكل (Runkel Ratio)** | **$< 0.75$ (تنهار وتتسطح كلياً)** | **$> 1.0$ في خشب الصيف (مقاومة للتسطح)** |
| **تعداد الألياف في الجرام الواحد** | ضخم هائل (**~18 - 26 مليون ليفة/جم**) | منخفض نسبياً (**~1.5 - 4.2 مليون ليفة/جم**) |
| **تشتت الضوء والعتمة (Opacity)** | عالي جداً (مظهر معتم ناصع البياض) | منخفض (مظهر شبه شفاف شمعي) |
| **الوظيفة الأساسية في شيت التيشيو** | **النعومة المخملية، سعة الحجم (Bulk)، وتجانس التشكيل** | **الشبكة الحاملة، المتانة وقوة الشد، وقابلية التشغيل** |
| **سياسة التكرير (Refining Policy)** | **ممنوع تكريره نهائياً ($0\\text{ kWh/t}$)** لحماية النعومة | **يُكرر بلطف شديد ($30 - 60\\text{ kWh/t}$)** لتنشيط الروابط |
`,
    estimated_minutes: 26,
    order: 1,
    is_free: true,
  },

  // ── COURSE 102: LESSON 6 ──
  {
    id: 'les-t102-1b',
    module_id: 'mod-t102-1',
    title: 'اللب الشمالي (NBSK) والجنوبي (SBSK) وعلم رقم الخشونة (Coarseness) ودرجة الإنضاج المبدئية (Initial °SR)',
    title_en: 'NBSK vs SBSK, Fiber Coarseness Science & Initial Schopper-Riegler (°SR) in Tissue',
    type: 'lesson',
    content: `
### ما هو رقم الخشونة (Fiber Coarseness Number) بطريقة مبسطة؟
كثيراً ما يسمع مهندسو ومشاغلو التيشيو مصطلح **"الكورسنيس" (Coarseness)** في تقارير شهادات فحص العجائن (Pulp Quality Certificates)، فما معناه الفيزيائي ببساطة؟

> 📌 **التعريف المبسط للكورسنيس:**
> الكورسنيس هو ببساطة **"الوزن الخطي لليفة السليلوزية"** — أي كم يزن طول معين من الليفة!
> تماماً كما نقول في عالم الخيوط والغزل إن خيط الحرير رفيع وخفيف الوزن، بينما خيط الصوف الغليظ أو سلك النحاس سميك وثقيل لنفس الطول المحدد.

- **وحدات قياس الكورسنيس في المختبرات:**
  - تُقاس بوحدة **مليجرام لكل 100 متر ($\\text{mg} / 100\\text{m}$)** من الألياف، أو **ميكروجرام لكل متر ($\\mu\\text{g/m}$)**، وتسمى أحياناً في بعض المراجع **الديسيغريكس (Decigrex)**.

---

### كيف يحدد الكورسنيس مصير نعومة المنديل؟ (العلاقة الفيزيائية والرياضية)

$$\\text{Fiber Population (تعداد الألياف في الجرام)} = \\frac{10^5}{\\text{Length (mm)} \\times \\text{Coarseness (mg/100m)}}$$

#### 1. معنى الكورسنيس المنخفض (Low Coarseness = 6.5 - 16 mg/100m):
- جدار الخلية السليلوزية **رقيق جداً**.
- بما أن الليفة خفيفة الوزن، فإن الجرام الواحد يحتوي على **عدد هائل من الألياف**.
- **ظاهرة الانهيار الخلوي (Fiber Collapse):** لأن جدار الليفة رقيق وتجويفها الداخلي واسع، فإن الليفة عندما تجف تحت ضغط بكرات الكبس وأسطوانة اليانكي تنهار وتتسطح تماماً لتتحول إلى **شريط حريري منبسط ومرن (Flat Ribbon)** يندمج بسلاسة دون نتوءات.
- **النتيجة:** ملمس حريري مخملي ناعم، ومرونة فائقة للمنديل عند الثني، وقيم متفوقة على جهاز محلل النعومة EMTEC TSA ($> 88\\text{ HF}$).

#### 2. معنى الكورسنيس المرتفع (High Coarseness = 25 - 32 mg/100m):
- جدار الخلية السليلوزية **سميك جداً ومكتنز بالخشب**.
- الجرام الواحد يحتوي على **عدد قليل جداً من الألياف** (أقل من 1.5 مليون ليفة للجرام في اللب الجنوبي!).
- **مقاومة الانهيار الخلوي (Resistant to Collapse):** الليفة تشبه أنبوباً خشبياً صلباً يرفض الانثناء أو التسطح.
- عند كرمشة الورقة بسكين اليانكي، تبرز نهايات هذه الأنابيب الصلبة على السطح مثل **أشواك أو شعيرات مجهرية خشنة (Micro-bristles)**.
- **النتيجة:** إحساس بالحكة والخشونة الحادة (**Harsh / Scratchy Handfeel**) يرفضه مستهلك مناديل الوجه فوراً!

---

### مثال حسابي تطبيقي للمهندس: مقارنة شحنتين من اللب الطويل
لنفترض أن مصنع التيشيو استلم شحنتين من اللب الطويل لتقوية مناديل الوجه:
1. **الشحنة الأولى: لب شمالي (NBSK)** بطول ألياف $2.6\\text{ mm}$ ورقم خشونة $14.5\\text{ mg/100m}$.
2. **الشحنة الثانية: لب جنوبي (SBSK)** بطول ألياف $3.0\\text{ mm}$ ورقم خشونة $28.0\\text{ mg/100m}$.

* **حساب تعداد ألياف اللب الشمالي:**
  $$\\text{Population}_{\\text{NBSK}} = \\frac{100,000}{2.6 \\times 14.5} \\approx \\mathbf{2,652,500\ \\text{ليفة / جم}}$$
* **حساب تعداد ألياف اللب الجنوبي:**
  $$\\text{Population}_{\\text{SBSK}} = \\frac{100,000}{3.0 \\times 28.0} \\approx \\mathbf{1,190,400\ \\text{ليفة / جم}}$$

> 🔍 **الاستنتاج الميداني الصادم:**
> لنفس الوزن من الألياف، يوفر اللب الشمالي **أكثر من ضعف عدد الألياف ($+122\%$)** في الجرام الواحد! هذا يمنح الورقة شبكة متماسكة متقاربة الثقوب بنعومة فائقة، بينما اللب الجنوبي يترك فجوات كبرى بأنابيب خشبية سميكة وخشنة.

---

### السر البيولوجي الفارق: خشب الربيع (Earlywood) مقابل خشب الصيف (Latewood):

* **في الغابات الشمالية الباردة (كندا، السويد، فنلندا - NBSK):**
  - شتاء قطبي قارس وطويل، وصيف قصير وبارد؛ تنمو الأشجار ببطء شديد وتكون أكثر من **$80\% - 85\%$ من خلاياها "خشب ربيع" (Earlywood / Springwood)**.
  - خلايا خشب الربيع تتكون لنقل الماء السريع للأوراق، لذا تكون رقيقة الجدار، واسعة التجويف، وتنهار فورياً لتشكل أشرطة حريرية مسطحة.
* **في الغابات الجنوبية الحارة (جورجيا، ألاباما، تكساس - SBSK):**
  - صيف حار رطب طويل وشمس ساطعة على مدار العام؛ تنمو الأشجار بسرعة متفجرة وتكون أكثر من **$60\% - 70\%$ من خلاياها "خشب صيف" (Latewood / Summerwood)**.
  - خلايا خشب الصيف تتكون لدعم الشجرة ميكانيكياً، لذا تكون سميكة الجدار ومكتنزة باللجنين والخشب، تقاوم الانهيار وتظل أنابيب قاسية كالشوك المجهري.

---

### أطلس العجائن العالمية الشامل لمصانع التيشيو (Global Pulp Atlas):

| صنف العجينة التجاري | نوع اللب | بلد المنشأ وأشهر الموردين | رقم الكورسنيس (mg/100m) | تعداد الألياف (مليون/جم) | متوسط الطول (ملم) | الإنشيال شوبر القياسي (^∘SR) | الـ CSF المكافئ (ml) | الاستخدام الصناعي المثالي |
|---|---|---|---|---|---|---|---|---|
| **Eucalyptus Globulus** | لب قصير | إسبانيا / البرتغال (Navigator, Ence) | **6.5 - 7.5** | **22 - 26 مليون** | 0.75 - 0.85 | **18 - 22 ^∘SR** | 520 - 560 | **مناديل الوجه الفاخرة جداً (Ultra-Premium Facial)** |
| **Eucalyptus Urograndis** | لب قصير | البرازيل (Suzano, Klabin) | **7.5 - 8.5** | **18 - 22 مليون** | 0.85 - 0.95 | **15 - 19 ^∘SR** | 550 - 610 | **المعيار السائد عالمياً لورق التواليت والوجه** |
| **Acacia Mangium** | لب قصير | إندونيسيا (APP, APRIL) | **6.0 - 7.0** | **24 - 28 مليون** | 0.65 - 0.75 | **20 - 24 ^∘SR** | 470 - 530 | نعومة فائقة مع حاجة لدعم ميكانيكي شمالي |
| **Birch (البتولا)** | لب قصير | فنلندا / السويد (Metsä, Stora Enso) | **9.5 - 11.5** | **12 - 15 مليون** | 0.90 - 1.15 | **16 - 20 ^∘SR** | 550 - 620 | لب قصير بمتانة شد فائقة للماكينات السريعة |
| **NBSK (Spruce/Pine)** | لب طويل | كندا / السويد (Canfor, Södra) | **13.5 - 16.0** | **3.2 - 4.2 مليون** | 2.50 - 3.20 | **12 - 15 ^∘SR** | 680 - 730 | **المعيار الذهبي لتسليح المناديل الفاخرة والوجه** |
| **Radiata Pine** | لب طويل | تشيلي / نيوزيلندا (Arauco, CMPC) | **18.5 - 22.0** | **2.0 - 2.8 مليون** | 2.40 - 2.90 | **13 - 16 ^∘SR** | 660 - 710 | توازن ممتاز لورق التواليت الاقتصادي |
| **SBSK (Southern Pine)**| لب طويل | جنوب أمريكا (GP, IP) | **25.0 - 32.0** | **1.2 - 1.8 مليون** | 2.80 - 3.60 | **11 - 14 ^∘SR** | 710 - 750 | خشن جداً، مخصص لمناشف المطبخ والمسحات AFH |

---

### درجة الإنضاج المبدئية للعجينة البكر (Initial Schopper-Riegler - Initial °SR):

يُعد فحص **"الإنشيال شوبر" (Initial °SR)** أو **"الإنشيال فري نس" (Initial CSF)** أحد أهم بوابات الرقابة الفنية عند استلام بالات اللب في مصنع التيشيو:

#### 1. التعريف الفيزيائي للإنشيال شوبر:
- الإنشيال شوبر هو **"مقياس المقاومة الهيدروديناميكية لنزح وتصريف المياه الطبيعية للعجينة البكر فور إذابتها وتفكيكها بالماء قبل أن تُمس بأي عملية تكرير ميكانيكي" (Raw Unrefined Drainage Resistance)**.
- يُقاس بوحدة **درجة شوبر ريجلر (^∘SR)** وفق المواصفة القياسية الدولية **ISO 5267-1** (أو بوحدة مليلتر Canadian Standard Freeness - CSF وفق TAPPI T227).

#### 2. التفسير الهيدروديناميكي: لماذا يمتلك اللب القصير إنشيال شوبر أعلى بكثير من اللب الطويل؟
إذا نظرت إلى جدول الأطلس أعلاه ستلاحظ ظاهرة لافتة:
- اللب القصير (اليوكاليبتوس) يبدأ عند **$16 - 22^\\circ\\text{SR}$**، بينما اللب الطويل يبدأ عند **$12 - 15^\\circ\\text{SR}$** فقط، فلماذا؟
  1. **مساحة السطح النوعية الهيدروديناميكية (Specific Surface Area):**
     - في اللب القصير، يحتوي الجرام الواحد على أكثر من **22 مليون ليفة صغيرة**. هذا التعداد الهائل يولد مساحة سطحية هائلة تحتك بجزيئات الماء وتعيق تدفقها السريع عبر شبكة الترشيح (Hydraulic Drag)، مما يرفع قراءة الـ ^∘SR.
     - في اللب الطويل، لا يتجاوز عدد الألياف **2.5 مليون ليفة**؛ مما يترك قنوات ومسارات بينية واسعة تسري عبرها المياه بسرعة فائقة، فتكون قراءة الـ ^∘SR منخفضة ومعدل النزح سريعاً.
  2. **النواعم الأولية الطبيعية (Primary Fines & Parenchyma):**
     - يحتوي اللب القصير طبيعياً على خلايا برانشيمية وخلايا أوعية مجهرية ترفع من مقاومة الترشيح الأولية حتى بدون تكرير.

---

### الفارق الحاسم بين اللب المجفف على شيت (Sheet-Dried) واللب المجفف بالهواء (Flash-Dried):

تصل بالات اللب إلى مصانع التيشيو بإحدى طريقتين لتجفيف العجينة في بلد المنشأ، ولكل منهما تأثير دراماتيكي على الإنشيال شوبر وسلوك التشغيل:

#### 1. اللب المجفف على شيت (Sheet-Dried / Flakt-Dried):
- تُجفف العجينة بعد التبييض على ماكينة شيتات ضخمة تمر عبر أنفاق هواء ساخن متدرجة (Flakt Dryer) دون شد مفرط، ثم تُقطع إلى صفائح مضغوطة وتُحزم في بالات.
- **الخواص التشغيلية:**
  - ألياف مستقيمة ذات تجانس رطوبة ممتاز ($10 \\pm 1\%$).
  - قراءة إنشيال شوبر مستقرة وممثلة للحقيقة تماماً.
  - تفكيك فوري في حوض البالبر خلال 12 إلى 15 دقيقة دون تكوين عقد ليفية.

#### 2. اللب المجفف بالهواء الساخن السريع (Flash-Dried Pulp):
- تُفرك العجينة الرطبة إلى فتات ميكانيكي (Fluff) وتُقذف داخل تيارات هواء ساخن عنيفة لتجف خلال ثوانٍ معدودة، ثم تُكبس تحت مكابس هيدروليكية عملاقة إلى قوالب شديدة الصلابة.
- **ظاهرة الالتواءات الميكانيكية الكامنة (Fiber Latency):**
  - نتيجة التجفيف السريع والقص الهوائي، تتجمد الألياف وهي في حالة انثناءات والتواءات مجهرية حادة (**Kinks and Curls**).
  - **الخدعة المعملية للإنشيال شوبر:** إذا أخذت عينة لب فلاش وفككتها في ماء بارد وقست الشوبر، ستجد قراءة منخفضة خادعة جداً (**$10 - 12^\\circ\\text{SR}$**)! والسبب أن الألياف الملتوية تتصرف ككرات دقيقة لا تتشابك ولا تعيق تدفق الماء.
  - ولكن عند وصولها للماكينة، تعطي الورقة متانة ضعيفة جداً وتظهر تكتلات غير مفككة (Fish eyes).

> 🧪 **بروتوكول فك اللاتنسي المعملي (Latency Removal Protocol - ISO 5263):**
> لفحص الإنشيال شوبر الحقيقي للب الفلاش (Flash-dried):
> 1. يجب تفكيك العجينة في ماء ساخن بدرجة حرارة **$85^\\circ\\text{C} - 90^\\circ\\text{C}$** لمدة 10 دقائق (أو 15,000 لفة في جهاز التفكيك المعملي القياسي).
> 2. تعمل الحرارة العالية على تليين بوليمرات الهيميسليلوز، مما يتيح للألياف أن تستقيم وتستعيد شكلها الطبيعي (Disentanglement).
> 3. بعد التبريد إلى $20^\\circ\\text{C}$، يُقاس الإنشيال شوبر ليقفز إلى قيمته الحقيقية (**$17 - 21^\\circ\\text{SR}$**).

---

### الأثر التشغيلي لقيمة الإنشيال شوبر على ماكينة التيشيو وسرعتها:

1. **كفاءة النزح على سلك التشكيل (Crescent Former De-watering):**
   - في ماكينات التيشيو الحديثة بسرعة $1800 - 2200\\text{ m/min}$، يستغرق تشكيل ونزح الشيت على السلك أقل من **$0.02\\text{ ثانية}$**!
   - إذا ارتفع الإنشيال شوبر للشحنة الواردة بمقدار $2 - 3^\\circ\\text{SR}$ عن المعتاد، تنخفض نفاذية السلك ويصل الشيت برطوبة أعلى إلى أسطوانة اليانكي.
   - النتيجة المباشرة: يضطر المشغل إلى **تخفيض سرعة الماكينة بنسبة $5\% - 10\%$** أو رفع ضغط بخار اليانكي وحرارة الكابينة (Hood) لاستهلاك كميات هائلة من الغاز الطبيعي لمنع كرمشة ورقة رطبة.
2. **منحنى استجابة التكرير (Refining Response Curve):**
   - اللب الطويل ذو الإنشيال شوبر المرتفع ($> 16^\\circ\\text{SR}$) يقفز بسرعة حادة عند التكرير، مما يعني أنه سيصل إلى نقطة انسداد النزح قبل أن يكتسب قوة الشد المطلوبة.
   - اللب ذو الإنشيال شوبر المثالي المنخفض ($12 - 14^\\circ\\text{SR}$) يتيح لمهندس الإنتاج مرونة كافية لتكريره بلطف ($SEL = 0.9\\text{ J/m}$) لرفع الشد إلى $25 - 28^\\circ\\text{SR}$ دون خنق الماكينة.

---

### بروتوكول فحص الإنشيال شوبر في المختبر عند الاستلام (ISO 5263 / ISO 5267-1):

عند وصول شحنة بالات إلى المصنع، تُسحب عينات من 5 بالات عشوائية ويُطبق الآتي:
1. **الوزن الجاف:** وزن ما يكافئ **$24.0\\text{ جم}$** من الألياف الجافة تماماً (Oven-dry).
2. **التفكيك المعملي القياسي:** وضع الألياف في $2000\\text{ ml}$ ماء مقطر داخل جهاز الـ Disintegrator وتشغيله لـ **$30,000\\text{ دورة}$** (لمدة 10 دقائق عند سرعة 3000 لفة/دقيقة) لضمان تفكك البالات بالكامل دون تقطيع ليفي.
3. **ضبط الحرارة والتركيز:** تخفيف العينة بدقة وضبط درجة حرارتها عند **$20 \\pm 1^\\circ\\text{C}$** بتركيز $0.2\%$ ($2\\text{ g/L}$).
4. **القياس بجهاز شوبر ريجلر:** سكب $1000\\text{ ml}$ من المعلق في القمع ورفع المخروط، وقراءة حجم الماء المجمع من الفوهة الجانبية فورياً.
5. **مطابقة شهادة التحليل (COA):**
   - إذا كانت القراءة مطابقة لشهادة المورد ($\\pm 1.0^\\circ\\text{SR}$): تُعتمد الشحنة لخطوط الإنتاج.
   - إذا سجلت الشحنة قراءة أعلى بأكثر من $3^\\circ\\text{SR}$: يُخطر قسم الإنتاج لتعديل زمن إذابة البالبر وتخفيض حمل المكررات فوراً لتفادي اختناق ماكينة التيشيو.
`,
    estimated_minutes: 28,
    order: 2,
    is_free: true,
  },

  // ── COURSE 102: LESSON 7 ──
  {
    id: 'les-t102-2',
    module_id: 'mod-t102-2',
    title: 'تصميم خلطات اللب (Furnish Blend) وهندسة الطبقات المتعددة (Stratified Headbox)',
    title_en: 'Furnish Blend Formulation & Multi-Layer Stratified Headbox',
    type: 'lesson',
    content: `
### اقتصاديات خلطات الألياف (Furnish Economics):
تمثل الألياف السليلوزية ما بين **$55\%$ إلى $70\%$ من إجمالي تكلفة إنتاج طن التيشيو**.
- عادة ما يكون طن اللب الطويل (BSKP) أغلى من طن اللب القصير (BHKP) بفارق يتراوح بين **$150$ إلى $250\\text{ دولار/طن}$** في البورصات العالمية.
- لذلك، فإن معادلة تكلفة الألياف لكل طن منتج:

$$\\text{Fiber Cost / Ton} = (f_{\\text{Short}} \\times P_{\\text{Short}}) + (f_{\\text{Long}} \\times P_{\\text{Long}})$$

- **الهدف الهندسي الاستراتيجي:** خفض نسبة اللب الطويل إلى الحد الأدنى الذي يضمن سلامة الشيت وعدم انقطاعه على الماكينة، مع تعظيم نسبة اللب القصير لتحقيق أعلى نعومة بأقل تكلفة ممكنة!

---

### دليل الوصفات المصنعية القياسية لخلطات التيشيو (Industrial Recipe Book):

| الصنف التجاري النهائي | نسبة اللب القصير (اليوكاليبتوس) | نسبة اللب الطويل ونوعه الموصى به | الهدف الهندسي من الخلطة |
|---|---|---|---|
| **مناديل الوجه الفاخرة (Premium Facial)** | **$80\% - 85\%$** | **$15\% - 20\%$ لب طويل شمالي (NBSK)** | أقصى مؤشر نعومة حسي مع شبكة شد كافية للتشغيل والتقطيع فقط |
| **ورق التواليت الراقي (Premium Bath)** | **$75\% - 80\%$** | **$20\% - 25\%$ لب طويل شمالي (NBSK)** | نعومة عالية تمنع تهيج البشرة مع تماسك أثناء سحب الرول |
| **ورق التواليت الاقتصادي (Standard Bath)** | **$65\% - 70\%$** | **$30\% - 35\%$ لب طويل تشيلي (Radiata Pine)** | توازن اقتصادي وتكلفة منخفضة مع متانة ميكانيكية متماسكة |
| **مناديل المطبخ المنزلية (Kitchen Towels)** | **$50\% - 60\%$** | **$40\% - 50\%$ لب طويل جنوبي (SBSK) أو Radiata** | رفع مقاومة التمزق، سعة الحجم (Bulk)، والامتصاص الشعري العالي |
| **مناشف اليد الصناعية والتجارية (AFH Towels)**| **$40\% - 50\%$** | **$50\% - 60\%$ لب طويل جنوبي (SBSK)** | شبكة تسليح قوية جداً تتحمل البلل والشد العنيف في الموزعات |
| **مناديل السفرة والمائدة (Napkins)** | **$60\% - 65\%$** | **$35\% - 40\%$ لب طويل (NBSK أو Radiata)** | صلابة وثبات هندسي يمنع الترهل أثناء الطي والتقطيع والطباعة |

---

### تكنولوجيا صندوق التدفق متعدد الطبقات (Stratified / Multi-Layer Headbox):
في ماكينات التيشيو القديمة ذات الصندوق أحادي الطبقة، تُخلط جميع أنواع الألياف معاً في خزان واحد لتشكل طبقة متجانسة عشوائية، مما يفرض وجود جزء من ألياف اللب الطويل الخشنة على سطح الورقة الخارجي ملامساً للجلد.

أما في **ماكينات التيشيو الحديثة فائقة السرعة (Crescent Former)**، يُستخدم صندوق تدفق هيدروليكي مقسم إلى **2 أو 3 قنوات مستقلة تماماً**:

\`\`\`
[ الطبقة العلوية: 100% لب قصير يوكاليبتوس (ملامسة لأسطوانة اليانكي والجلد) ]
══════════════════ ريشة الفصل الهيدروليكية (Divider Vane) ══════════════════
[ الطبقة الوسطى: لب طويل مكرر + مواد تقوية الشد (العمود الفقري المسلح)  ]
══════════════════ ريشة الفصل الهيدروليكية (Divider Vane) ══════════════════
[ الطبقة السفلية: 100% لب قصير يوكاليبتوس (ملامسة للوجه الآخر والجلد)    ]
\`\`\`

#### 1. الطبقات الخارجية (Yankee Side & Wire Side):
- يُضخ فيها **$100\%$ لب قصير فائق النعومة (Eucalyptus)** بدون أي ألياف لب طويل وبدون تكرير!
- هذه الطبقة هي التي تصطدم بسكين الكرمشة، لتنتج سطحاً ناعماً حريرياً بنسبة $100\%$ خالياً من أي شعيرات خشنة بارزة.

#### 2. الطبقة الداخلية الهيكلية (Core Layer):
- يُضخ فيها **خليط اللب الطويل (NBSK أو SBSK) المكرر مع مواد تعزيز الشد**.
- تعمل هذه الطبقة المحصورة في المنتصف كعمود فقري متين يمنح الورقة قوة الشد دون أن تلمسها بشرة المستخدم إطلاقاً!

> 💰 **المكسب الاقتصادي والصناعي للتقنية:**
> تتيح تقنية تعدد الطبقات (Stratification) استخدام لب طويل ذي كورسنيس مرتفع وأقل تكلفة (مثل اللب الجنوبي SBSK أو اللب التشيلي) في الطبقة الوسطى، مع الحفاظ على أعلى نعومة سطحية ممكنة للطبقات الخارجية، مما يخفض تكلفة خلطة الألياف بنسبة **$10\%$ إلى $15\%$** سنوياً لمصنع التيشيو دون التضحية برضا المستهلك.

---

### معادلة اتزان النزح والإنشيال شوبر للخلطة المركبة (Furnish Initial °SR Balance):

عند خلط أنواع العجائن في خزان الخلط (Blend Chest)، تُحسب درجة الإنضاج المبدئية التقديرية للخلطة المركبة قبل التكرير عبر المعادلة التجميعية:

$$\\text{Composite Initial } ^\\circ\\text{SR} = (f_{\\text{Short}} \\times \\text{SR}_{\\text{Initial, Short}}) + (f_{\\text{Long}} \\times \\text{SR}_{\\text{Initial, Long}})$$

- **مثال تطبيقي لمناديل الوجه الفاخرة:**
  - $80\%$ لب يوكاليبتوس بإنشيال شوبر $19^\\circ\\text{SR}$ + $20\%$ لب طويل NBSK بإنشيال شوبر $13^\\circ\\text{SR}$:
  $$\\text{Composite Initial } ^\\circ\\text{SR} = (0.80 \\times 19) + (0.20 \\times 13) = 15.2 + 2.6 = \\mathbf{17.8^\\circ\\text{SR}}$$
- تُمثل هذه القيمة ($17.8^\\circ\\text{SR}$) نقطة الانطلاق الهيدروديناميكية للنزح. فإذا قمت بتكرير اللب الطويل ليرتفع من $13^\\circ\\text{SR}$ إلى $28^\\circ\\text{SR}$:
  $$\\text{Furnish Final } ^\\circ\\text{SR} = (0.80 \\times 19) + (0.20 \\times 28) = 15.2 + 5.6 = \\mathbf{20.8^\\circ\\text{SR}}$$
- هذا الصعود الخفيف إلى $20.8^\\circ\\text{SR}$ يضمن بقاء النزح على سلك التشكيل سريعاً جداً، مع الحصول على متانة كاملة بفضل قفزة الـ NBSK دون إجهاد اليوكاليبتوس!

---

### المعايرة التشغيلية عند تغير منشأ اللب (Origin Shift Tuning Protocol):

عندما يتغير مورد العجينة في المصنع نتيجة تقلبات الأسعار أو الشحن العالمي:
1. **التحول من اليوكاليبتوس الإيبيري (Globulus) إلى البرازيلي (Urograndis):**
   - يرتفع الكورسنيس من $7.0$ إلى $8.2\\text{ mg/100m}$، بينما ينخفض الإنشيال شوبر من $20^\\circ\\text{SR}$ إلى $17^\\circ\\text{SR}$.
   - **التعديل التشغيلي:** رفع نسبة اليوكاليبتوس في الخلطة بنسبة $+3\%$ (من $80\%$ إلى $83\%$) لتعويض انخفاض تعداد الألياف في الجرام، مع استغلال تحسن سرعة النزح لرفع سرعة الماكينة بمقدار $50\\text{ m/min}$.
2. **التحول من اللب الشمالي (NBSK) إلى اللب التشيلي (Radiata Pine):**
   - يرتفع الكورسنيس من $14.5$ إلى $20.0\\text{ mg/100m}$ وتتضاعف سماكة جدار الليفة.
   - **التعديل التشغيلي في الصندوق الطبقي:** حصر اللب التشيلي في الطبقة الداخلية (Core Layer) حصراً بنسبة $100\%$ مع خفض شدة التكرير SEL إلى $0.85\\text{ J/m}$ وتكثيف رش المطريات الكيميائية (Debonders) على الطبقات السطحية لحماية النعومة.

---

### سيناريوهات تشغيلية واقعية: ماذا يحدث لو أخطأ المشغل في نسب الخلطة؟

1. **السيناريو الأول: زيادة نسبة اللب الطويل عن الحد المسموح في مناديل الوجه ($> 25\%$):**
   - **النتيجة:** انهيار مؤشر النعومة الحسي (TSA)، تحول الورقة إلى ملمس صلب يشبه ورق الطباعة، وظهور خشونة مجهرية تنفر المستهلكين.
   - **الإجراء التصحيحي:** تخفيض تدفق اللب الطويل فوراً، وإيقاف مكرر الألياف مؤقتاً لتجنب زيادة التصلب.

2. **السيناريو الثاني: زيادة نسبة اللب القصير عن الحد المسموح ($> 85\%$):**
   - **النتيجة:** نعومة فائقة مضللة؛ ولكن بمجرد أن ترتفع سرعة الماكينة عن 1500 م/دقيقة، تحدث انقطاعات مستمرة للشيت (**Web Breaks**) عند منطقة التقاط الورق وقشط الكرمشة، مع تطاير غبار كثيف للألياف يسد فلاتر الهواء في خطوط التحويل.
   - **الإجراء التصحيحي:** رفع نسبة اللب الطويل تدريجياً لتعزيز شبكة الشد حتى تستقر حركة الشيت.
`,
    estimated_minutes: 26,
    order: 3,
    is_free: true,
  },

  // ── COURSE 102: LESSON 8 ──
  {
    id: 'les-t102-2b',
    module_id: 'mod-t102-2',
    title: 'العجائن منزوعة الحبر (DIP) وتأثير التقرّن (Hornification) والشوائب',
    title_en: 'Deinked Recycled Pulp (DIP), Hornification & Contaminants',
    type: 'lesson',
    content: `
### استخدام الألياف المعاد تدويرها (DIP) في مصانع التيشيو:
تعتمد مصانع التيشيو الاقتصادية ومصانع منتجات الاستهلاك التجاري والمؤسسي (Away-From-Home - AFH) على **العجائن منزوعة الحبر (Deinked Pulp - DIP)** الناتجة عن تدوير فرز نفايات المكاتب والأوراق البيضاء (Sorted Office Waste - SOW).
- يمثل استخدام الألياف المعاد تدويرها حلاً اقتصادياً وبيئياً ممتازاً يقلل من قطع الأشجار؛ ولكنه يفرض على مهندس التيشيو تحديات فيزيائية وكيميائية معقدة لا توجد في الألياف البكر.

---

### الظواهر الهندسية المعقدة في تدوير ألياف التيشيو:

#### 1. ظاهرة التقرّن السليلوزي (Hornification):
- **الميكانيزم الجزيئي:** عندما تتعرض ألياف السليلوز لدورات متتالية من البلل ثم التجفيف الكامل تحت درجات حرارة عالية في استخدامها الأول، تتقارب سلاسل السليلوز وتتكون بينها روابط هيدروجينية داخلية غير قابلة للعكس (Irreversible Cross-links).
- **الأثر الهندسي للتقرّن:**
  - **فقدان قدرة الانتفاخ بالماء (Swelling Loss):** يُقاس باختبار **قيمة احتجاز الماء (Water Retention Value - WRV)**؛ حيث تنخفض الـ WRV من $1.6 - 1.8\\text{ g/g}$ في الألياف البكر إلى أقل من $0.9 - 1.1\\text{ g/g}$ في ألياف التدوير!
  - **تصلب الجدار الخلوي:** يزداد جدار الليفة قساوة وتفقد مطاوعتها ومرونتها.
  - **فشل الكرمشة:** عند محاولة كرمشة الليفة المقرنة على أسطوانة اليانكي، تنكسر الليفة بدلاً من أن تتجعد بنعومة، مما يُكسب المنديل خشونة واضحة وصلابة مزعجة ويولد كميات هائلة من الغبار السطحي.

#### 2. كابوس المواد اللاصقة (Macro & Micro Stickies):
- تحتوي خامات الورق المعاد تدويره على بقايا أصماغ التجليد، لواصق الأظرف الحساسة للضغط (PSA)، ومستحلبات بوليمرات التغليف.
- في بيئة ماكينة التيشيو الحارة والقلوية، تنصهر هذه الجسيمات البوليمرية وتمر عبر فلاتر التنقية:
  - تلتصق بسطح أسطوانة اليانكي الساخنة مسببة بقعاً محترقة تشوه فيلم الطلاء الكيميائي.
  - تؤدي إلى اصطدام شفرة سكين الكريب واهتزازها، مما يولد علامات رجفة وتلف خطير لسطح الأسطوانة (**Chatter Marks**).
  - تسبب ثقوباً دقيقة متكررة (**Pinholes**) وانقطاعات مفاجئة للشيت.

---

### الحلول الهندسية لترويض ألياف التدوير في مصانع التيشيو:

1. **الترويض الإنزيمي للألياف (Enzymatic Fiber Swelling):**
   - حقن إنزيمات السليولاز والهيميسليولاز المتخصصة بجرعات ميكرونية دقيقة ($50 - 150\\text{ g/t}$) لتقشير الطبقة الخارجية المتصلبة لليفة المقرنة وفتح مساماتها لإعادة امتصاص الماء واستعادة المرونة.
2. **تثبيت وبسترة المواد اللاصقة (Stickies Passivation):**
   - حقن **مسحوق التلك الكاتيوني الدقيق (Cationic Talc)**؛ حيث تلتصق صفائح التلك الدقيقة بالقطرات اللاصقة المنصهرة وتغلفها، مما يلغي خاصية الالتصاق ويسمح بمرورها مع الشيت دون الالتصاق بسطح أسطوانة اليانكي أو شفرة السكين.
3. **الدعم بالبوليمرات التعويضية:**
   - تعويض ضعف الروابط الهيدروجينية بإضافة النشا الكاتيوني بمعدل $4 - 6\\text{ kg/t}$، وراتنجات مقاومة البلل PAE في مناشف المطبخ واليد لرفع قوة الشد الرطب.

---

### الدليل الهندسي لنسب الخلط الآمنة لعجائن التدوير (DIP):

| الصنف النهائي المستهدف | النسبة المسموحة لعجائن DIP | نوع الألياف التكميلية الموصى بها | الملاحظات التشغيلية والاشتراطات |
|---|---|---|---|
| **مناديل الوجه وورق التواليت الفاخر** | **$0\%$ (ممنوع تماماً)** | $100\%$ ألياف بكر (يوكاليبتوس + NBSK) | لحماية النعومة الحريرية ومنع الشوائب والغبار تماماً |
| **ورق التواليت التجاري الاقتصادي** | **$30\% - 50\%$** | $50\% - 70\%$ ألياف بكر مع مطريات (Debonders) | توازن مقبول بين التكلفة الاقتصادية وملمس الورقة |
| **مناشف المطبخ ومناشف اليد AFH** | **$70\% - 100\%$** | لب طويل جنوبي (SBSK) لتدعيم الشد | استخدام راتنجات PAE بجرعات ($12 - 18\\text{ kg/t}$) لضمان مقاومة البلل |
| **رولات السحب المكتبي والورش (Maxi Rolls)** | **$80\% - 100\%$** | ألياف تدوير معالجة بالتلك الإنزيمي | التركيز على المتانة الميكانيكية والامتصاص الاقتصادي |
`,
    estimated_minutes: 24,
    order: 4,
    is_free: true,
  },

  // ── COURSE 102: LESSON 5 (MODULE 3 - LESSON 1) ──
  {
    id: 'les-t102-3a',
    module_id: 'mod-t102-3',
    title: 'تشغيل أحواض إذابة البالات (Hydrapulper) وهندسة التفكيك بدون إجهاد الألياف',
    title_en: 'Hydrapulper Field Operations, Consistency Tuning & Hydrodynamic Deflaking',
    type: 'lesson',
    content: `
### التفرقة الهندسية الجوهرية: التفكيك (Slushing) مقابل التكرير (Refining)
في بداية خط تحضير العجينة (Stock Preparation)، يقع الكثير من المبتدئين في خلط شائع بين عمليتي:
1. **التفكيك وإذابة البالات (Slushing / Deflaking):**
   - **الهدف الهندسي الوحيد:** فصل كتل وحزم الألياف السليلوزية المتلاصقة في البالات الجافة واسترجاع حالتها الفردية المعلقة في الماء دون تقطيعها أو المساس بجدرانها الخلوية.
   - **الميكانيزم:** استخدام قوى الاحتكاك الهيدروديناميكي وتأثير الماء الدافئ لتذويب الروابط الهيدروجينية بين الألياف.
2. **التكرير (Refining):**
   - **الهدف الهندسي:** تعديل مورفولوجيا الليفة فيزيائياً عبر إحداث تشريب داخلي (Internal Fibrillation) وتفتيت سطحي خارجي لتنشيط الروابط الهيدروجينية.
   - **القاعدة الذهبية لمشغل البالبر:** *"تفكيك كامل بأقل طاقة ميكانيكية ممكنة لمنع توليد ألياف مكسورة أو نعومة زائفة (Fines) تخنق نزح المياه على سلك التيشيو!"*

---

### الميكانيكا الهيدروديناميكية لحوض البالبر: تشريح الدوامة وحركة السائل

#### 1. هندسة الحوض وديناميكا الدوار (Rotor & Tub Geometry):
- أحواض البالبر الحديثة في مصانع التيشيو لا تكون أسطوانية دائرية تماماً، بل تصمم بشكل **D-Shape أو بشكل بيضاوي مضلع**:
  - **السبب التشغيلي:** الحوض الأسطواني الأملس يجعل السائل يدور ككتلة صلبة واحدة (Mass Swirl)، فتهبط البالة وتطفو في المنتصف دون تلاطم عنيف.
  - وجود الجدار المستقيم أو الحواجز (Baffles) يكسر مسار الدوامة، مما يجبر البالات الضخمة على السقوط مباشرة نحو مركز الدوار (Rotor Vanes) لتتعرض لصدمات هيدروديناميكية متكررة تسحبها للأسفل.

#### 2. تركيز التشغيل (Consistency) ومعادلة التفكيك:
- في مصانع التيشيو، تُشغّل أحواض البالبر للبالات البكر عادة عند **تركيز منخفض إلى متوسط ($4.5\% - 6.0\%$):**
  - إذا قل التركيز عن $4.0\%$: يقل احتكاك الليفة بأختها (Fiber-to-Fiber Friction)، وتتحول طاقة الدوار إلى تحريك ماء خامل بلا فائدة، مع إهدار هائل في الطاقة الكهربائية ($kWh/t$).
  - إذا زاد التركيز عن $6.5\%$: ترتفع لزوجة المعلق لدرجة تعيق دوران الدوامة، ويحدث هبوط في عزم المحرك ويزداد خطر تعليق الدوار (Rotor Jamming).

#### 3. كيمياء وحرارة ماء الإذابة (White Water Temperature):
- يُغذى البالبر بمياه الدائرة البيضاء الساخنة (White Water) بدرجة حرارة تتراوح بين **$45^\\circ\\text{C}$ إلى $55^\\circ\\text{C}$**:
  - **التفسير الفيزيائي:** الماء الدافئ يقلل التوتر السطحي ويسرع اختراق السائل للمسام المجهرية للبالات المضغوطة (Swelling)، مما يلين بوليمرات الهيميسليلوز ويخفض زمن الدورة بنسبة تصل إلى $30\%$ ويوفر $15\\text{ kWh}$ لكل طن من طاقة التفكيك.

---

### خطوات دورة تشغيل شحنة البالبر الميدانية (Batch Operation Protocol):

\`\`\`
[1. ملء الماء الأبيض بالكمية المحددة] 
        ↓ 
[2. تشغيل محرك الدوار والتأكد من الأمبير الخالي] 
        ↓ 
[3. تلقيم البالات عبر السير الناقل بتتابع زمني] 
        ↓ 
[4. مرحلة التفكيك الهيدروديناميكي النشط (15-20 دقيقة)] 
        ↓ 
[5. الفحص البصري وسحب عينة نسبة الرقائق Flakes] 
        ↓ 
[6. فتح صمام التفريغ نحو خزان التفريغ / جهاز التفكيك Deflaker]
\`\`\`

1. **معايرة المياه أولاً (Pre-filling):**
   - فتح صمام مياه الدائرة البيضاء حتى بلوغ المنسوب المحدد بدقة في برنامج الـ PLC. يُحظر تماماً إسقاط البالات في حوض جاف لتفادي احتراق المحرك وتكسير ريش الدوار.
2. **بدء الدوران وتلقيم البالات:**
   - بدء دوران المحرك ثم إطلاق السير الناقل (Conveyor). تُلقم البالات بمعدل بالة كل 20 إلى 30 ثانية لتجنب حدوث عزم قص مفاجئ يسبب فصل قاطع الدائرة (Overload Trip).
3. **أزمنة التفكيك الموصى بها حسب نوع الخام:**
   - **لب اليوكاليبتوس القصير (Eucalyptus):** $12 - 15\\text{ دقيقة}$ (ألياف سريعة التبلل والانفصال).
   - **اللب الطويل الشمالي (NBSK):** $18 - 25\\text{ دقيقة}$ (ألياف متماسكة تحتاج طاقة إضافية).
   - **عجائن التدوير أو البالات المجففة بشدة (Hard Flash-dried):** $25 - 35\\text{ دقيقة}$.

---

### جهاز التفكيك الميكانيكي (Deflaker / High-Speed Disperser):
عند تفريغ البالبر، تمر العجينة عبر جهاز التفكيك (Deflaker) قبل وصولها لخزان التخزين:
- يتكون من أقراص مسننة دوارة وثابتة متداخلة بخلوص دقيق ($0.5 - 1.0\\text{ mm}$).
- **وظيفته الميدانية:** تفتيت الرقائق المتبقية (Residual Flakes) التي نجت من حوض البالبر دون تقطيع الألياف، مما يضمن خروج عجينة متجانسة $100\%$ تمنع انسداد مصافي التنقية اللاحقة.

---

### الفحص المعملي لنسبة الرقائق غير المفككة (Flake Content Test):
للتأكد من اكتمال التفكيك قبل الضخ، يسحب مشغل الوردية عينة ويجري اختبار مصفاة سومرفيل (Somerville Screen مع شقوق $0.15\\text{ mm}$):

$$\\text{Flake Content (\%)} = \\frac{\\text{Dry Weight of Rejects}}{\\text{Total Dry Weight of Sample}} \\times 100$$

- **الحد التشغيلي المقبول لمصانع التيشيو:** يجب ألا تتجاوز نسبة الرقائق **$0.3\% - 0.5\%$**. تجاوز هذا الحد يعني ظهور بقع بيضاء غير متجانسة وكتل ليفية على سطح المنديل تسبب ثقوباً وضعفاً حسياً.

---

### جدول استكشاف الأعطال وحلها في تشغيل أحواض البالبر (Troubleshooting):

| العطل التشغيلي | السبب المحتمل | الإجراء التصحيحي الفوري |
|---|---|---|
| **توقف الدوار وتعليقه (Rotor Stall / Trip)** | إسقاط بالات كثيرة دفعة واحدة أو انخفاض منسوب الماء | فصل الكهرباء وقفل الأمان (LOTO)، تخفيف الحوض بالماء، إزالة البالات العالقة يدوياً بالونش إن لزم |
| **ارتفاع نسبة الرقائق (High Flake %)** | قصر زمن التفكيك، برودة المياه ($< 35^\\circ\\text{C}$)، أو تآكل ريش الدوار | تمديد زمن التقليب 5 دقائق، رفع حرارة الماء الأبيض، فحص خلوص الدوار ولوحة القاع (Wear Plate) |
| **ظاهرة التكهف في طلمبة التفريغ (Pump Cavitation)** | دخول هواء كثيف بسبب دوامة بالبر عميقة أو لزوجة مفرطة | خفض سرعة الدوار قليلاً قبل التفريغ، ضبط التركيز بإضافة ماء تخفيف، والتأكد من غمر مدخل السحب |
| **التفاف أسلاك البالات المعدنية حول الدوار** | إهمال فك أسلاك الربط اليدوية أو عطل جهاز Ragger | تفعيل جهاز سحب حبل المخلفات (Ragger Wire) بانتظام وتفتيش البالات قبل السير الناقل |
`,
    estimated_minutes: 26,
    order: 1,
    is_free: true,
  },

  // ── COURSE 102: LESSON 6 (MODULE 3 - LESSON 2) ──
  {
    id: 'les-t102-3b',
    module_id: 'mod-t102-3',
    title: 'تشغيل منظومة تنقية الشوائب الميدانية: مصافي الطرد المركزي (HD Cleaners) ومصافي الضغط (Pressure Screens)',
    title_en: 'Centrifugal HD Cleaners & Pressure Screening Operations in Tissue Furnish',
    type: 'lesson',
    content: `
### لماذا تمثل حماية ألياف التيشيو من الشوائب مسألة حياة أو موت للماكينة؟
في ماكينات التيشيو الحديثة فائقة السرعة التي تعمل بسرعة تصل إلى **$2000\\text{ m/min}$** وتنتج ورقة بجراماج شديد الرقة ($13 - 18\\text{ g/m}^2$):
- **حبة رمل واحدة أو دبوس معدني صغير** كفيل بإحداث ثقب فوري في الورقة يسبب انقطاع الشيت (**Sheet Break**) على أسطوانة اليانكي.
- مرور الشوائب الكاشطة يدمر حشوات أقراص التكرير باهظة الثمن، ويثقب سلك التشكيل واللبادات، ويخدش سطح أسطوانة اليانكي مسبباً خسائر صيانة تقدر بعشرات آلاف الدولارات.

---

### 1. مصافي الطرد المركزي عالية الكثافة (High Density Cleaners - HD Cyclones):

#### الأساس الفيزيائي للفصل بالطرد المركزي:
- تعتمد هذه المصافي على مبدأ **الدوامة الحرة (Free Vortex Hydrocyclone)**:
  - تدخل العجينة بتركيز تشغيلي يتراوح بين **$3.5\% - 5.0\%$** بشكل مماسي (Tangentially) عند مدخل الأسطوانة العلوي بسرعة تدفق عالية ($5 - 8\\text{ m/s}$).
  - تتولد قوة طرد مركزي دوامية عنيفة تفوق الجاذبية الأرضية بـ **$100$ إلى $300\\text{ ضعف}$ ($g$-force)**.
  - الشوائب الثقيلة ذات الكثافة العالية ($> 1.2\\text{ g/cm}^3$) مثل حبات الرمل، الشظايا المعدنية، المسامير، وقطع الزجاج تنقذف نحو الجدار الخارجي وتهبط بحركة لولبية إلى أسفل المخروط في حجرة التجميع (**Junk Trap**).
  - تصعد ألياف السليلوز والماء في مركز الدوامة (حيث الضغط المنخفض) وتخرج من الفتحة المركزية العلوية المتجهة للمرحلة التالية.

#### التشغيل الميداني لـ HD Cleaner ومراقبة فرق الضغط:
- **المتغير التشغيلي الأهم هو فرق الضغط ($\\Delta P = P_{\\text{in}} - P_{\\text{out}}$):**
  - نطاق التشغيل الصحيح: **$1.3 - 1.8\\text{ bar}$**.
  - إذا كان $\\Delta P < 1.0\\text{ bar}$: سرعة الدوامة ضعيفة وقوة الطرد المركزي غير كافية لرمي الشوائب الدقيقة.
  - إذا كان $\\Delta P > 2.2\\text{ bar}$: استهلاك مفرط للطاقة وخطر تآكل مخروط السيراميك بفعل الاحتكاك الحاد.
- **إدارة دورة تفريغ حجرة الشوائب (Automatic Junk Trap Cycle):**
  - يتم تفريغ المخلفات أوتوماتيكياً كل 15 إلى 30 دقيقة بنظام الصمامين التبادليين (Interlocked Dual Valves) مع حقن ماء الغسيل العكسي (**Elutriation Water**) في أسفل المخروط لتعويم الألياف الصالحة ومنع خروجها مع المخلفات.

---

### 2. مصافي الضغط ذات الشقوق الدقيقة (Slotted Pressure Screens):

#### مقارنة هندسية بين سلال الثقوب والشقوق:
- في منظومة تحضير عجائن التيشيو، تُستخدم في المرحلة الأولى سلة ثقوب ($1.2 - 1.6\\text{ mm}$) لإزالة الشوائب الكبيرة والرقائق، تليها مصفاة شقوق دقيقة (**Fine Slotted Screen**):
  - **عرض الشق (Slot Width):** **$0.15 - 0.25\\text{ mm}$** لسلال ألياف التيشيو الفاخرة.
  - **شكل الشق:** شقوق ذات حواف هيدروديناميكية مائلة (Contoured Wedge Wire) تزيد من كفاءة فرز عقد الألياف (Shives) والمواد اللاصقة دون خنق تدفق العجينة.

#### فيزياء ريش الدوار وتوليد النبضات السالبة (Hydrodynamic Foil Pulses):
- تدور ريش الدوار (Rotor Foils) بالقرب من السطح الداخلي لسلة الشقوق بخلوص دقيق ($1.5 - 3.0\\text{ mm}$) بسرعة محيطية تتراوح بين $16 - 22\\text{ m/s}$:
  - **مقدمة الريشة:** تولد ضغطاً موجباً طفيفاً يدفع العجينة النظيفة للمرور عبر الشقوق إلى مخرج المقبول (Accept).
  - **مؤخرة الريشة (Trailing Edge):** تصنع نبضة ضغط سالبة هيدروديناميكية (**Negative Suction Pulse**)، تسحب الألياف المحشورة في الشقوق للداخل فوراً وتغسل السلة باستمرار لمنع انسدادها وتوقف الجريان (**De-plugging Effect**).

\`\`\`
  اتجاه الدوران ---> [ ريشة الفويل Foil ]
                    /                  \
              (نبضة سحب سالبة)      (نبضة ضغط موجبة)
            ═══════════════════════════════════════════
            ||  ||  ||  ||  ||  ||  ||  ||  ||  ||  || سلة الشقوق (Screen Basket)
            ═══════════════════════════════════════════
                    ↓ تدفق المقبول النظيف (Accept)
\`\`\`

---

### معدلات الرفض وحسابات الاتزان الكتلي (Reject Rate & Mass Balance):
لضمان عدم هروب الشوائب مع العجينة المقبولة ومنع انسداد المصفاة، يتم التحكم في معدل الرفض:

$$\\text{Volumetric Reject Rate (\%)} = \\frac{Q_{\\text{reject}}}{Q_{\\text{inlet}}} \\times 100 \\quad (10\% - 18\%)$$

$$\\text{Mass Reject Rate (\%)} = \\frac{Q_{\\text{rej}} \\times C_{\\text{rej}}}{Q_{\\text{in}} \\times C_{\\text{in}}} \\times 100 \\quad (15\% - 25\%)$$

- يوجه تيار الرفض من المصفاة الأولية (Primary Screen) إلى مصفاة ثانوية (Secondary Screen) لاستخلاص الألياف العالقة وإرجاعها للنظام، بينما ترسل الشوائب المتكدسة إلى سلة المخلفات.

---

### جدول المشاكل التشغيلية لمصافي الضغط وكيفية التعامل معها:

| الظاهرة التشغيلية | السبب الجذري | التدخل الفوري لمشغل الوردية |
|---|---|---|
| **ارتفاع فرق الضغط ($\\Delta P > 0.6\\text{ bar}$) وتصاعد أمبير الموتور** | انسداد شقوق السلة (Screen Plugging) بسبب ارتفاع تركيز العجينة المفاجئ أو انخفاض تدفق الرفض | خفض تدفق التغذية فوراً، زيادة فتحة صمام الرفض، وتخفيف تركيز التغذية بماء التخفيف |
| **هبوط مفاجئ في فرق الضغط ($\\Delta P < 0.1\\text{ bar}$)** | انكسار أو ثقب في سلة المصفاة (Broken Screen Basket) | إيقاف المصفاة فوراً والتحويل على خط الطوارئ؛ فحص العجينة بالمختبر للتأكد من عدم وصول شوائب |
| **ارتفاع نسبة عقد الألياف (High Shive Count) في الورقة** | تآكل حواف شقوق السلة بفعل الشوائب الكاشطة مع الزمن | جدولة استبدال السلة في التوقف القادم، ضبط تركيز التغذية |
| **اهتزازات ميكانيكية حادة في المصفاة** | عدم اتزان الدوار الميكانيكي أو انحشار جسم معدني صلب | إيقاف فوري وتفتيش الحجرة الداخلية قبل تلف ريش الفويل |
`,
    estimated_minutes: 26,
    order: 2,
    is_free: true,
  },

  // ── COURSE 102: LESSON 7 (MODULE 4 - LESSON 1) ──
  {
    id: 'les-t102-4a',
    module_id: 'mod-t102-4',
    title: 'التحكم الآلي في تركيز العجينة (Consistency Control) وهندسة خزانات الخلط والماكينة',
    title_en: 'Inline Consistency Control Loops & Furnish Chest Agitation Engineering',
    type: 'lesson',
    content: `
### لماذا يعتبر تركيز العجينة الميداني مقياس ضبط الجودة الأول في التيشيو؟
يُعرّف **تركيز العجينة (Consistency %)** بأنه النسبة المئوية لوزن الألياف الجافة تماماً بالنسبة للوزن الإجمالي لمعلق العجينة والماء:

$$C\% = \\frac{\\text{Dry Fiber Mass (kg)}}{\\text{Dry Fiber Mass (kg)} + \\text{Water Mass (kg)}} \\times 100$$

- **الأثر التشغيلي الدقيق:**
  - شيت التيشيو خفيف للغاية ($14 - 20\\text{ g/m}^2$). إذا تذبذب تركيز العجينة بمقدار ضئيل جداً لا يتعدى **$0.1\%$** (مثلاً من $3.5\%$ إلى $3.6\%$):
    - يتغير وزن المتر المربع للورقة فوراً بنسبة تقارب **$3\%$ إلى $5\%$**!
    - يؤدي هذا التذبذب إلى اضطراب التجفيف على أسطوانة اليانكي، واختلاف درجة الرطوبة، وعدم استقرار فيلم الطلاء الكيميائي، وانقطاع الورقة على سكين الكريب.

---

### فيزياء أجهزة قياس التركيز الميدانية (Consistency Transmitters):

1. **حساسات مقاومة القص النصلية (Blade / Shear-Force Transmitters):**
   - **فكرة العمل:** يُثبت نصل معدني رفيع (Blade) في خط الأنابيب، وتتحسس أجهزة قياس الضغط الكهروضغطية (Piezoresistive) قوة الإعاقة وقص الجريان الناتجة عن اصطدام ألياف السليلوز بالنصل.
   - **الاستخدام الميداني:** شائعة جداً في خطوط الضخ بعد الخزانات للتراكيز بين $2.0\%$ و $5.0\%$. تتأثر بسرعة التدفق وتحتاج لمعايرة معملية مستمرة.
2. **الحساسات الدوارة (Rotary Shear Sensors):**
   - **فكرة العمل:** جسم دوار يدور بسرعة ثابتة داخل مجرى العجينة، ويُقاس العزم الميكانيكي (Torque) المقاوم للدوران.
   - **الميزة:** دقة متناهية ولا تتأثر بتقلبات سرعة جريان الخط، وهي المعيار الذهبي قبل خزان الماكينة.
3. **حساسات الميكروويف والبصريات (Microwave & Optical Transmitters):**
   - **فكرة العمل:** قياس سرعة انتشار الموجات الكهرومغناطيسية أو تشتت الضوء بالألياف.
   - **الميزة:** تقيس التركيز الكلي الحقيقي للألياف بغض النظر عن خشونة السريان، وخالية من أي أجزاء متحركة تتآكل.

---

### حلقة التحكم المغلقة في التركيز (Consistency Control Loop):

\`\`\`
                     ┌──────────────────┐
                     │  نظام التحكم PID │
                     └─────────▲────────┘
             إشارة التركيز    │   │ أمر فتح الصمام
             (PV 4-20 mA)      │   │ (MV 0-100%)
                               │   ▼
   [خزان العجينة] ──► [طلمبة الضخ] ──► [حساس التركيز CT] ──► [إلى خزان الخلط]
                            ▲
                            │ خط ماء التخفيف (Dilution Water)
                            └──── [صمام التحكم FC] ◄── [ضغط ماء ثابت]
\`\`\`

#### القواعد التشغيلية الذهبية لضبط حلقة التركيز:
1. **نقطة حقن ماء التخفيف:** تُحقن دائماً عند **مدخل سحب طلمبة الضخ (Pump Suction)**:
   - **السبب التشغيلي:** دوران مروحة الطلمبة (Impeller) يوفر خلطاً هيدروليكياً فورياً وتجانساً تاماً للماء والألياف قبل أن تصل العجينة إلى حساس التركيز الموجود على خط الطرد.
2. **ثبات ضغط ماء التخفيف (Water Header Pressure):** يجب أن يظل ضغط شبكة مياه التخفيف أعلى من ضغط خط العجينة بـ **$1.5\\text{ bar}$ على الأقل** وبشكل ثابت، وإلا فإن تقلب ضغط المياه سيؤدي إلى ظاهرة التذبذب المستمر (**Hunting**) في قراءة التركيز.
3. **معادلة اتزان التخفيف الهيدروليكي:**

$$Q_{\\text{dilution}} = Q_{\\text{in}} \\times \\left( \\frac{C_{\\text{in}} - C_{\\text{setpoint}}}{C_{\\text{setpoint}}} \\right)$$

---

### إدارة وهندسة خزانات العجينة (Stock Chest Engineering):

تتحرك العجينة في مصنع التيشيو عبر سلسلة خزانات استراتيجية:
- **خزان اللب القصير (Short Fiber Chest):** حفظ لب اليوكاليبتوس بتركيز $4.0\% - 4.5\%$.
- **خزان اللب الطويل (Long Fiber Chest):** حفظ اللب الطويل بتركيز $4.0\% - 4.5\%$.
- **خزان الخلط (Blend Chest):** ضبط خلطة الصنف المحددة وتوزيع الكيماويات الأولية.
- **خزان الماكينة (Machine Chest):** المحطة الأخيرة قبل صندوق التدفق؛ خط الدفاع الحاسم لثبات الجراماج.

#### ديناميكا التقليب (Agitation Dynamics) ومنع الركود:
- تُجهز الخزانات بقلابات جانبية (Side-entry Agitators) مع حواجز رأسية (Baffles):
  - **منطقة التقليب النشطة (Complete Motion):** يجب أن يتحرك سطح العجينة بالكامل بسرعة لا تقل عن $0.1\\text{ m/s}$ لمنع ظاهرة الانفصال الطوري والترسيب في القاع (Settling).
  - **تجنب الدوامة الهوائية السطحية:** يجب ألا يكون التقليب مفرطاً لدرجة ابتلاع الهواء السطحي (Vortex Air Entrainment)؛ لأن الهواء الذائب يولد رغوة كيميائية تدمر تشكيل ورقة التيشيو وتسبب ثقوباً دقيقة (Pinholes).
- **زمن البقاء الهيدروليكي (Retention Time):** يُصمم حجم الخزانات ليوفر زمناً تشغيلياً بين **$30$ إلى $45\\text{ دقيقة}$** لامتصاص أي انحرافات مفاجئة في التركيز قبل وصولها للماكينة.

---

### بروتوكول المعايرة المعملية لحساس التركيز الميداني (Calibration Routine):
حساس التركيز لا يقرأ النسبة المئوية بمفرده بل يقرأ إشارة كهربائية ($\\text{mA}$) تحتاج لمعايرة دورية أسبوعية:
1. يثبت المشغل صمام التخفيف على وضع يدوي ثابت لمدة 3 دقائق لضمان استقرار التدفق.
2. تُسحب عينة فيزيائية ممثلة من صمام أخذ العينات المخصص بعد الحساس مباشرة.
3. تُقاس نسبة الجفاف الدقيقة في المختبر باستخدام الميزان الحراري أو الفرن عند $105^\\circ\\text{C}$.
4. تُقارن النتيجة بقراءة الحساس اللحظية؛ ويُعدل معامل الميل والإنزياح (**Slope & Offset**) في نظام التحكم الـ DCS لتحقيق تطابق كامل.
`,
    estimated_minutes: 28,
    order: 1,
    is_free: true,
  },

  // ── COURSE 102: LESSON 8 (MODULE 4 - LESSON 2) ──
  {
    id: 'les-t102-4b',
    module_id: 'mod-t102-4',
    title: 'الفحوصات المعملية اليومية لتحليل ألياف وعجائن التيشيو (FQA, Freeness & Fiber Testing)',
    title_en: 'Daily Furnish Testing: Schopper-Riegler, Fiber Quality Analyzer & Handsheet Evaluation',
    type: 'lesson',
    content: `
### دور معمل الجودة الميداني في توجيه قرارات التشغيل:
في مصنع التيشيو، المختبر الميداني ليس جهة رقابية لاحقة، بل هو **"عين المشغل داخل خط الأنابيب"**.
- لا يمكن للعين البشرية ولا لكاميرات المراقبة رؤية ما إذا كانت ألياف السليلوز قد تعرضت للتكسير أو تغير كورسنيسها أو احتوت على نسبة شوائب مجهرية تؤثر على نعومة المنديل.
- الفحوصات المعيارية السريعة تعطي لغرفة التحكم بيانات رقمية حاسمة لتعديل الصمامات والنسب قبل إنتاج أطنان من الورق غير المطابق للمواصفات.

---

### 1. الفحص العملي لدرجة الإنضاج ونزح المياه (°SR Test):

#### ما الذي يقيسه اختبار شوبر ريجلر (Schopper-Riegler °SR)؟
- يقيس الاختبار **مقاومة نزح المياه** عبر طبقة من الألياف المعلقة تحت تأثير الجاذبية:
  - كلما كانت الألياف سليمة وغير مكررة وخالية من النعومة الزائدة، صُرف الماء بسرعة فائقة وسجل الجهاز قراءة منخفضة ($14^\\circ - 18^\\circ\\text{SR}$ للعجينة البكر غير المكررة).
  - مع تكرير اللب الطويل وتكون الألياف الدقيقة والتشريب السطحي، تتعرقل حركة الماء ويسجل الجهاز درجة أعلى ($24^\\circ - 30^\\circ\\text{SR}$).

#### الإجراء المعياري خطوة بخطوة لاختبار °SR (طبقاً لـ ISO 5267-1):
1. **وزن العينة بدقة تامة:**
   - وزن كمية من العجينة تعادل **$2.00 \\pm 0.02\\text{ g}$** من الألياف الجافة تماماً (محسوبة بمعادلة التركيز).
2. **التخفيف وضبط الحرارة:**
   - تخفيف العينة بالماء المقطر في دورق مدرج حتى حجم **$1000\\text{ ml}$** (تركيز قياسي $0.2\%$).
   - ضبط درجة حرارة المعلق عند **$20 \\pm 1^\\circ\\text{C}$**؛ لأن تغير الحرارة يغير لزوجة الماء وبالتالي يغير النتيجة.
3. **التشغيل والقراءة:**
   - صب المحلول في حجرة الاختبار، وتفعيل ذراع رفع المخروط المانع.
   - يتدفق الماء عبر الفوهة السفلية والجانبية؛ ويُقرأ حجم الماء المتجمع في المخبار الجانبي المدرج مباشرة بوحدات **$^\\circ\\text{SR}$**.

---

### 2. جهاز التحليل البصري الآلي للألياف (Fiber Quality Analyzer - FQA / MorFi):

#### كيف يعمل الجهاز؟
- تسري العجينة المخففة جداً في خلية قياس زجاجية ميكرونية فائقة النقاء، وتلتقط كاميرا بصرية رقمية عالية السرعة آلاف الصور للألياف أثناء تدفقها، ليحللها البرنامج المتطور فورياً ويصدر تقريراً مفصلاً خلال 3 دقائق فقط!

#### المؤشرات الحيوية في تقرير الـ FQA وأهميتها لمشغل التيشيو:
1. **متوسط طول الألياف الموزون بالطول ($L_w$ - Length Weighted):**
   - **اليوكاليبتوس:** $0.75 - 0.95\\text{ mm}$.
   - **اللب الطويل الشمالي NBSK:** $2.30 - 2.80\\text{ mm}$.
   - **الاستخدام التشغيلي:** هبوط هذا الرقم في اللب الطويل يعني أن جهاز التفكيك أو المكرر يقطع الألياف ميكانيكياً ولا يفككها!
2. **نسبة الألياف الدقيقة (Fines Content %):**
   - الألياف والشظايا التي يقل طولها عن $0.2\\text{ mm}$.
   - يجب ألا تتجاوز في خلطة التيشيو **$6\% - 9\%$**. ارتفاعها عن $12\%$ يؤدي لانسداد مسام لبادات الكبس، انخفاض نفاذية الورقة، وتطاير غبار كثيف على خطوط التحويل.
3. **معامل التجعيد والانثناء (Curl & Kink Index %):**
   - الألياف المجعدة طبيعياً تمنح ورقة التيشيو سعة حجم استثنائية (**High Bulk**) ومرونة فائقة وامتصاصاً ممتازاً، مقارنة بالألياف المستقيمة المتصلبة.

---

### 3. فحص الشوائب والنقاط السوداء (Dirt Count Test - TAPPI T437):
- يُجرى بتحضير شيتات اختبار معملية يدوية (Handsheets) باستخدام جهاز التشكيل القياسي (Sheet Former).
- تُفحص الورقة المجففة تحت إضاءة معيارية أو باستخدام ماسح ضوئي آلي (Dirt Scanner) لحساب المساحة الكلية للنقاط والشوائب بوحدة **$\\text{mm}^2/\\text{kg}$ (أو ppm)**.
- **الحد الأقصى المسموح لمناديل الوجه الفاخرة:** أقل من **$2.0\\text{ ppm}$**. الشوائب الزائدة تعني تسرباً من مصافي التنقية HD Cleaners أو عطلاً في سلال الفحص.

---

### مصفوفة ربط الفحوصات المعملية بالقرارات التشغيلية الميدانية (Decision Matrix):

| النتيجة المعملية غير الطبيعية | الخطر المتوقع على الماكينة والمنتج | القرار التشغيلي التصحيحي الفوري |
|---|---|---|
| **ارتفاع مفاجئ في $^\\circ\\text{SR} > 32^\\circ$ في خزان الماكينة** | بطء نزح المياه على سلك التشكيل، زيادة رطوبة الشيت قبل اليانكي، وتصلب المنديل | تخفيض طاقة مكرر اللب الطويل فوراً، مراجعة نسبة اللب القصير، وفحص تركيز الدائرة البيضاء |
| **هبوط متوسط طول الألياف $L_w$ في اللب الطويل ($< 2.0\\text{ mm}$)** | ضعف شد الشيت، تكرار انقطاعات الورق على سرعات فوق 1600 م/د | زيادة خلوص جهاز التفكيك (Deflaker Clearance)، وتخفيض حمل الحافة SEL على أقراص التكرير |
| **ارتفاع نسبة الرقائق غير المفككة ($> 0.8\%$ Flakes)** | ظهور كتل بيضاء خشنة على سطح المنديل وثقوب في الشيت | زيادة زمن تقليب البالبر 5 دقائق، ورفع حرارة ماء الإذابة |
| **ارتفاع عد الشوائب والنقاط السوداء ($> 5\\text{ ppm}$)** | ظهور بقع سوداء مرئية تنفر المستهلكين وتهدد برفض الشحنة | فحص وتفريغ حجرة Junk Trap في مصافي HD Cleaners، وفحص ضغط مصافي الشقوق Slotted Screens |
`,
    estimated_minutes: 28,
    order: 2,
    is_free: true,
  },

  // ── COURSE 201: LESSON 9 ──
  {
    id: 'les-t201-1',
    module_id: 'mod-t201-1',
    title: 'فلسفة التكرير منخفض التركيز (LCR) لألياف التيشيو',
    title_en: 'Low-Consistency Refining (LCR) for Tissue Furnish',
    type: 'lesson',
    content: `
### لماذا تختلف فلسفة تكرير التيشيو جذرياً عن باقي أصناف الورق؟
في ورق الكرتون وورق الطباعة، يكون الهدف من التكرير هو إحداث أكبر قدر ممكن من الترابط الكثيف لزيادة الصلابة ومقاومة الانفجار (Burst).
أما في **مصانع التيشيو**، فالتكرير هو "سلاح ذو حدين": التكرير المفرط هو العدو الأول لنعومة المنديل ولحجم الـ Bulk؛ إذ يجعل الورقة صلبة، رقيقة، وذات ملمس بلاستيكي خشن!

---

### النظرية العلمية: التغيرات المورفولوجية الثلاثة في جدار الليفة أثناء التكرير:
عند مرور الألياف السليلوزية بين سكاكين قرص المكرر الدوار والثابت، تتعرض لقوى ضغط وقص هيدروديناميكية متكررة تحدث ثلاث آليات فيزيائية:

1. **التقشير والتشريف الخارجي (External Fibrillation):**
   - قشط لطيف للطبقة الأولية والجدار الخارجي ($P$ و $S_1$) لكشف السلاسل السليلوزية الميكرونية (Microfibrils) نحو الخارج.
   - ترفع هذه السلاسل من مساحة التلامس النشطة لتكوين الروابط الهيدروجينية دون إضعاف جسد الليفة.

2. **التليين والانفصال الداخلي (Internal Delamination / Swelling):**
   - تكسير مجهري للروابط الثانوية بين طبقات الجدار الأوسط السميك ($S_2$).
   - تسمح هذه الشقوق المجهرية بدخول جزيئات الماء داخل جدار الليفة، مما يرفع من انتفاخها بالماء وقابليتها للانثناء (Fiber Flexibility & Conformability) لتصبح طيعة جداً للكرمشة.

3. **التقطيع وتوليد الألياف الميتة (Fiber Cutting & Fines Generation):**
   - **الخطر الأكبر في التيشيو:** انقطاع الليفة طولياً وتفتتها إلى شوائب مجهرية (Fines).
   - الألياف المقطوعة تسد فتحات أقمشة التشكيل، تعيق نزح المياه، وترفع قساوة الشيت وتزيد من تطاير الغبار (Linting).

---

### الاستراتيجية التشغيلية: التكرير المنفصل (Separate Refining Strategy):
- **تيار ألياف اللب القصير (اليوكاليبتوس):**
  - **يُمنع تكريره نهائياً ($0\\text{ kWh/ton}$):** يُوجه مباشرة من حوض التشتيت إلى خزان الخلط. تكرير اليوكاليبتوس يكسر أطرافه الحرة ويقضي على ملمس النسيج المخملي الفاخر.
- **تيار ألياف اللب الطويل (الصنوبر والتنوب):**
  - يدخل منفرداً إلى مكرر الأقراص (Disc Refiner) بتركيز **$3.5\\% - 4.5\\%$**.
  - يخضع لعملية **"تمشيط لطيف" (Gentle Brushing)** لتنشيط الروابط السطحية مع المحافظة على طول الليفة الكامل لتوفير شبكة المتانة.
`,
    estimated_minutes: 24,
    order: 1,
    is_free: true,
  },

  // ── COURSE 201: LESSON 10 ──
  {
    id: 'les-t201-1b',
    module_id: 'mod-t201-1',
    title: 'الحمل الحافي الخاص (Specific Edge Load - SEL) وهندسة سكاكين المكررات',
    title_en: 'Specific Edge Load (SEL) and Refiner Plate Pattern Design',
    type: 'lesson',
    content: `
### النظرية الرياضية: نظرية الحمل الحافي الخاص (Brecht & Siewert Theory):
يُعد معيار **الحمل الحافي الخاص (SEL)** المعيار الهندسي الدولي المعتمد لتقييم شدة وعنف صدمات سكاكين المكرر على ألياف السليلوز:

$$\\text{SEL} = \\frac{P_{\\text{net}}}{C_L} \\quad (\\text{Joule / meter})$$

- **حيث:**
  - $P_{\\text{net}}$: القدرة الكهربائية الصافية للمحرك (كيلوواط)، وتساوي القدرة الإجمالية مطروحاً منها قدرة الدوران الحر في الماء بدون تحميل ($P_{\\text{total}} - P_{\\text{no-load}}$).
  - $C_L$: طول حافة القطع التراكمي لسكاكين أقراص المكرر في الثانية الواحدة (Cutting Edge Length - $\\text{km/s}$):
  $$C_L = z_r \\cdot z_s \\cdot l \\cdot \\frac{n}{60}$$
  (حيث $z_r$ و $z_s$ عدد سكاكين القرص الدوار والثابت، $l$ طول منطقة التداخل، و $n$ سرعة الدوران بالدقيقة).

---

### مقارنة شدة التكرير (Refining Intensity) بين أصناف الورق:

| صنف الورق | نطاق SEL المستهدف | نوع التأثير السائد على الألياف | الأثر على النعومة والمتانة |
|---|---|---|---|
| **ورق التيشيو الفاخر** | **$0.8 - 1.2\\text{ J/m}$** (فائق اللطف) | تليين وتقشير سطحي بحت (Fibrillation) | **حماية النعومة والـ Bulk مع شد مرن** |
| **ورق الطباعة والكتابة** | $1.5 - 2.2\\text{ J/m}$ (متوسط) | تليين مصحوب بتقطيع طفيف | زيادة الكثافة وتجانس التشكيل |
| **ورق الكرتون والتغليف** | $2.5 - 3.8\\text{ J/m}$ (عنيف) | تقطيع وضغط مكثف لرفع الشد والصلابة | صلابة قاسية ومقاومة انفجار عالية |

---

### هندسة حشوات أقراص التكرير المخصصة للتيشيو (Refiner Plate Metallurgy):
لتحقيق أدنى قيمة SEL ممكنة مع إنجاز الطاقة المطلوبة، يجب تكبير قيمة $C_L$ إلى أقصى حد هندسي، وذلك باختيار حشوات تتميز بـ:
1. **نمط السكاكين الدقيقة (Fine Bar Pattern):**
   - عرض السكين (Bar Width $B_w$): **$1.2 - 1.8\\text{ mm}$** فقط (مقارنة بـ $3.5 - 5.0\\text{ mm}$ للكرتون).
   - عرض المجرى (Groove Width $G_w$): **$1.8 - 2.5\\text{ mm}$**.
2. **زاوية السكاكين المائلة (Bar Crossing Angle):**
   - تُصمم السكاكين بزاوية ميلان تتراوح بين **$10^\\circ$ إلى $15^\\circ$** لمنع اصطدام السكاكين رأسياً ولتوليد قوى قص وتمشيط هيدروديناميكية متدرجة تعبر الألياف خلالها بسلاسة دون هرس.
`,
    estimated_minutes: 22,
    order: 2,
    is_free: true,
  },

  // ── COURSE 201: LESSON 11 ──
  {
    id: 'les-t201-2',
    module_id: 'mod-t201-2',
    title: 'التحكم في درجة الإنضاج (Freeness: °SR & CSF) ونزح المياه',
    title_en: 'Freeness Measurement (°SR & CSF) & Dewatering Dynamics',
    type: 'lesson',
    content: `
### النظرية الفيزيائية: مقاومة الترشيح ونزح المياه (Drainage Resistance):
تُعبر درجة الإنضاج (Freeness) عن السهولة أو الصعوبة التي تتخلص بها شبكة الألياف المعلقة من الماء الحر تحت تأثير الجاذبية والضغط.
- كلما زاد التكرير، تفككت الألياف السطحية وتكونت ألياف دقيقة (Fines)، مما يُشكل طبقة ترشيح كثيفة ذات مسام بالغة الضيق ترفع من مقاومة نزح المياه المحددة (Specific Drainage Resistance).

---

### المقارنة المعملية بين مقياسي °SR و CSF:
1. **مقياس شوبير-ريجلر (Schopper-Riegler - °SR):**
   - المقياس الأكثر شيوعاً في أوروبا والشرق الأوسط (وفق مواصفة ISO 5267-1).
   - يقيس حجم الماء المحتجز؛ **كلما زاد الرقم، زاد التكرير وبطؤ نزح المياه** (العجينة بطيئة النزح).
2. **المقياس القياسي الكندي (Canadian Standard Freeness - CSF):**
   - المقياس المعتمد في أمريكا الشمالية (وفق مواصفة TAPPI T227).
   - يقيس سرعة تدفق الماء الفائض؛ **كلما قل الرقم، زاد التكرير وبطؤ نزح المياه**.

---

### جدول التحويل والمواصفات التشغيلية المثالية لعجائن التيشيو:

| صنف المنتج المستهدف | درجة الإنضاج (°SR) للخلطة الكلية | معادل الفريتنس (CSF) | سلوك نزح المياه على سلك التشكيل | أثرها على الورقة والماكينة |
|---|---|---|---|---|
| **مناديل الوجه فائقة النعومة** | **$24 - 27^\\circ\\text{SR}$** | **$620 - 580\\text{ CSF}$** | فائق السرعة وسلس جداً | أعلى نعومة ممكنة وأدنى استهلاك طاقة تجفيف |
| **ورق التواليت القياسي** | **$26 - 30^\\circ\\text{SR}$** | **$580 - 530\\text{ CSF}$** | متوازن ومثالي | توازن ممتاز بين شد الماكينة ونعومة السطح |
| **مناديل المطبخ ومناشف اليد** | **$30 - 34^\\circ\\text{SR}$** | **$530 - 470\\text{ CSF}$** | أبطأ قليلاً ومضبوط | شبكة ألياف متماسكة ترفع مقاومة الشد والبلل |
| **منطقة الخطر (Over-refined)** | **$> 36^\\circ\\text{SR}$** | **$< 430\\text{ CSF}$** | **بطيء جداً ومعاق** | **تصلب الورقة، انسداد السلك، وزيادة هائلة في استهلاك البخار** |

---

> ⚠️ **الكارثة التشغيلية لفرط التكرير ($> 35^\\circ\\text{SR}$):**
> 1. وصول شيت الورق برطوبة مرتفعة إلى أسطوانة اليانكي، مما يفرض تخفيض سرعة الماكينة بنسبة تصل إلى $15\\%$.
> 2. ارتفاع استهلاك بخار اليانكي وغاز الكابينة لتعويض تبخير المياه الزائدة.
> 3. تحول ملمس المنديل إلى شيت خشن بلاستيكي فاقد للـ Bulk والامتصاص.
`,
    estimated_minutes: 20,
    order: 3,
    is_free: true,
  },

  // ── COURSE 201: LESSON 12 ──
  {
    id: 'les-t201-2b',
    module_id: 'mod-t201-2',
    title: 'ميزان واستهلاك الطاقة الصافي (Net Specific Energy - kWh/t)',
    title_en: 'Net Specific Energy (kWh/t) & Refining Cost Optimization',
    type: 'lesson',
    content: `
### الحساب الرياضي الدقيق لاستهلاك طاقة التكرير (NSE):
يُعد استهلاك الطاقة الصافي لكل طن جاف المعيار الهندسي الأهم لضبط تكلفة قسم تحضير العجينة ولضمان ثبات جودة الألياف:

$$\\text{NSE } (\\text{kWh/t}) = \\frac{P_{\\text{total}} - P_{\\text{no-load}}}{\\dot{m}_{\\text{dry}}}$$

- **حيث:**
  - $P_{\\text{total}}$: القدرة الكهربائية اللحظية المسحوبة من محرك المكرر (كيلوواط).
  - $P_{\\text{no-load}}$: قدرة الدوران الحر في الماء بدون تلامس هيدروليكي (تُقاس دورياً وتصل عادة إلى $25\\% - 35\\%$ من قدرة المحرك الاسمية).
  - $\\dot{m}_{\\text{dry}}$: معدل إنتاجية ألياف اللب الطويل الجافة المارة عبر المكرر (طن جاف/ساعة).

---

### المعدلات القياسية لاستهلاك الطاقة في مصانع التيشيو:
- **على تيار اللب الطويل المنفرد:** يتراوح استهلاك الطاقة الصافي بين **$35$ إلى $55\\text{ kWh/t}$**.
- **على طن الورق النهائي المنتج على الماكينة:** يعادل ذلك استهلاكاً تراكمياً يتراوح بين **$8$ إلى $15\\text{ kWh/t}$** فقط (نظراً لأن اللب الطويل يشكل $20\\% - 25\\%$ فقط من الخلطة، واللب القصير يمر بدون طاقة تكرير).

---

### نظام إدارة وتشتيت العجينة المتكامل (Stock Approach Flow System):
لضمان وصول ألياف خالية من التكتلات والشوائب إلى صندوق تدفق الماكينة، يمر تيار العجينة بالمراحل التالية:
1. **الفرازات الطاردة المركزية عالية الكثافة (HD Cleaners):** إزالة الدبابيس والرمال والشوائب الثقيلة فور خروج العجينة من الهايدروبلبر بتركيز $3.5\\% - 4.5\\%$.
2. **الفرازات المخروطية منخفضة الكثافة (Low-Density Centricleaners):** تعمل بتركيز منخفض جداً ($0.6\\% - 0.8\\%$) لإزالة الشظايا الخشبية والمواد الدقيقة الغريبة.
3. **شاشات الضغط فائقة الدقة (Pressure Screens):** شاشات ذات سلال مثقوبة بشقوق ميكرونية ($0.15 - 0.25\\text{ mm}$) مع ريش دوارة (Hydrofoil Rotors) لتفكيك التكتلات ومنع مرور الألياف المترابطة عشوائياً (Flocks) لضمان انتظام الشيت على سلك التشكيل.
`,
    estimated_minutes: 18,
    order: 4,
    is_free: true,
  },

  // ── COURSE 202: LESSON 13 ──
  {
    id: 'les-t202-1',
    module_id: 'mod-t202-1',
    title: 'كيمياء راتنجات مقاومة البلل الدائمة (PAE Resin)',
    title_en: 'Permanent Wet Strength Chemistry: Polyamide-Epichlorohydrin',
    type: 'lesson',
    content: `
### النظرية الكيميائية: لماذا ينهار الورق العادي عند ملامسة الماء؟
يفقد الورق غير المعالج ما بين **$95\\% - 97\\%$** من قوته فور تبلله بالماء؛ لأن جزيئات الماء القطبية تخترق المسافات بين ألياف السليلوز، وتكون روابط هيدروجينية بديلة مع مجموعات الهيدروكسيل، مما يؤدي إلى انتفاخ الألياف وتباعدها وانهيار شبكة التماسك فورياً.

---

### البنية الجزيئية لراتنج PAE وآلية الحماية التساهمية:
يُعد راتنج **Polyamide-Epichlorohydrin (PAE)** البوليمر القياسي العالمي لإنتاج مناديل المطبخ ومناشف اليد المقاومة للبلل:
1. **حلقات الأزيتيدينيوم النشطة (Azetidinium Rings):**
   - يحتوي البوليمر على حلقات رباعية مشحونة إيجابياً وعالية الإجهاد الكيميائي (Strained 4-membered Rings).
   - تنجذب هذه الشحنات الموجبة فورياً نحو شحنة ألياف السليلوز السالبة في الدائرة الرطبة، مما يضمن احتجاز الراتنج بنسبة تفوق **$95\\%$**.

2. **آليتا التثبيت المقاوم للماء (Cross-linking Mechanisms):**
   - **التشابك الذاتي التساهمي (Homo-crosslinking):** أثناء التجفيف الحراري على أسطوانة اليانكي ($> 100^\\circ\\text{C}$)، تتفاعل حلقات الأزيتيدينيوم مع بعضها مكوّنة شبكة بوليمرية متصلبة بالحرارة (Thermoset Hydrophobic Network) تحيط بنقاط تقاطع الألياف وتحبسها ميكانيكياً.
   - **الارتباط مع السليلوز (Co-crosslinking):** تتفاعل الحلقات كيميائياً مع مجموعات الكاربوكسيل ($-COOH$) على ألياف السليلوز بروابط تساهمية إسترية غير قابلة للذوبان بالماء إطلاقاً.

---

### مؤشر الشد المبلل (Wet/Dry Tensile Ratio) وديناميكا التعتيق (Curing Dynamics):

$$\\text{Wet/Dry Ratio (\\%)} = \\frac{\\text{Wet Tensile Strength (N/m)}}{\\text{Dry Tensile Strength (N/m)}} \\times 100$$

- **في مناديل المطبخ الفاخرة:** يُستهدف تحقيق نسبة تتراوح بين **$25\\%$ إلى $35\\%$** بجرعة راتنج تبلغ **$10 - 16\\text{ kg/ton}$**.
- **ظاهرة التعتيق والتصلب (Natural Curing):**
  - عند خروج رول التيشيو من الماكينة، يكون تفاعل التشابك مكتملاً بنسبة $65\\% - 75\\%$ فقط.
  - يكتمل التفاعل تساهمياً بنسبة $100\\%$ تلقائياً داخل مستودعات الرولات خلال **$7$ إلى $14$ يوماً** بفعل حرارة الرول المحتجزة.
`,
    estimated_minutes: 24,
    order: 1,
    is_free: true,
  },

  // ── COURSE 202: LESSON 14 ──
  {
    id: 'les-t202-1b',
    module_id: 'mod-t202-1',
    title: 'كيمياء راتنجات مقاومة البلل المؤقتة (GPAM) لمناديل التواليت',
    title_en: 'Temporary Wet Strength Chemistry: Glyoxalated Polyacrylamide',
    type: 'lesson',
    content: `
### التحدي الوظيفي لورق التواليت (Flushability Challenge):
يحتاج ورق التواليت إلى متانة أولية أثناء الاستخدام المبلل باليد دون أن يتمزق، ولكنه **يجب أن يتفتت ويتحلل كلياً** بعد إلقائه في المرحاض لمنع انسداد شبكات الصرف الصحي ومحطات معالجة المياه.

---

### النظرية الكيميائية: الروابط الهيمياستالية القابلة للانعكاس (Reversible Hemiacetal Bonds):
يعتمد هذا التناقض الهندسي على بوليمر **GPAM (Glyoxalated Polyacrylamide)**:
- يحتوي البوليمر على مجموعات ألدهيد حرة ($-CHO$) ناتجة عن تفاعل الجلايوكسال مع البولي أكريلاميد.
- تتفاعل مجموعات الألدهيد مع مجموعات الهيدروكسيل ($-OH$) في السليلوز لتكوين **روابط هيمياستال تساهمية مؤقتة (Hemiacetal Bonds)**.

> ⏱️ **آلية التحلل المائي العكسي (Hydrolysis Decay Mechanism):**
> 1. **الثواني الأولى (0 - 15 ثانية):** توفر الروابط قوة شد مبلل أولية ممتازة تحمي يد المستخدم بنسبة تماسك تفوق $15\\% - 20\\%$.
> 2. **بعد دقيقة واحدة من الغمر في ماء المرحاض:** تعكس كميات المياه الفائقة اتجاه التفاعل الكيميائي نحو التفكك المائي (Equilibrium Shift)، وتتكسر روابط الهيمياستال بالكامل، لتنخفض قوة الشد المتبقية إلى **أقل من $3\\%$** ويتفتت المنديل تماماً إلى ألياف مفردة تتدفق مع مياه الصرف بأمان.

---

### منحنى اضمحلال الشد المبلل (Wet Tensile Decay Curve):

| زمن الغمر في الماء | النسبة المتبقية من الشد المبلل | الحالة الميكانيكية للمنديل في شبكة الصرف |
|---|---|---|
| **5 ثوانٍ** | **$100\\%$** من القوة الأولية | متماسك وقوي جداً في يد المستخدم |
| **30 ثانية** | **$40\\% - 50\\%$** | رخو وضعيف ويبدأ في فقدان بنيته |
| **دقيقة واحدة** | **$< 15\\%$** | متفتت وسريع التفكك الهيدروليكي |
| **3 دقائق** | **$< 3\\%$** | ألياف سليلوزية حرة لا تسبب أي انسداد إطلاقاً |
`,
    estimated_minutes: 20,
    order: 2,
    is_free: true,
  },

  // ── COURSE 202: LESSON 15 ──
  {
    id: 'les-t202-2',
    module_id: 'mod-t202-2',
    title: 'المطريات الكيميائية وفك الروابط السطحية (Debonders & Softeners)',
    title_en: 'Chemical Debonders and Topical Softeners Chemistry',
    type: 'lesson',
    content: `
### النظرية الكيميائية: كيف تصنع المطريات النعومة المخملية؟
تعتمد المطريات الكيميائية (Debonders) على مركبات الأمونيوم الرباعية الكاتيونية ذات السلاسل الهيدروكربونية الدهنية المزدوجة (**Dialkyl Quaternary Ammonium Compounds**):
- **الرأس الكاتيوني الموجب (+$N$):** يمتلك شحنة موجبة قوية تجعله ينجذب كهرومغناطيسياً نحو المواقع السالبة على ألياف السليلوز.
- **الذيول الدهنية الكارهة للماء (Hydrophobic Fatty Tails):** سلاسل كربونية طويلة ($C_{16} - C_{18}$) تنتصب عمودياً نحو الخارج مشكلة طبقة زيتية دهنية مجهرية.

---

### آلية عمل الـ Debonder في إعاقة الروابط الهيدروجينية:
1. عند تجفيف الشيت، تمنع هذه الذيول الدهنية اقتراب ألياف السليلوز المجاورة من بعضها لمسافة تكوّن الروابط الهيدروجينية ($< 0.3\\text{ nm}$).
2. يُقلل ذلك عدد الروابط التساهمية السطحية، مما يُخفض جساءة الانثناء (Bending Stiffness) ويجعل الورقة هشة وفائقة الليونة.
3. تمنح الذيول الدهنية السطحية معامل احتكاك منخفضاً للغاية (Low Friction Coefficient) يمنح أطراف الأصابع إحساساً مخملياً شبيهاً بلمس الحرير.

---

### المقارنة بين الإضافة في الدائرة الرطبة والرش السطحي (Wet End vs Topical Spray):

| طريقة التطبيق الكيميائي | موقع الإضافة في الخط | المزايا الهندسية | التحديات والعيوب |
|---|---|---|---|
| **إضافة في الدائرة الرطبة (Wet End Debonder)** | في خزان خلط اللب القصير أو قبل مضخة التدفق | توزيع متجانس ثلاثي الأبعاد في كامل نسيج الورقة | تخفيض قوة الشد الجاف بنسبة $15\\% - 25\\%$ |
| **الرش السطحي (Topical Spray / Lotioning)** | على خط التحويل قبل التقطيع بالرش المباشر | تركيز النعومة على السطح الخارجي دون إضعاف جسد المنديل | استهلاك غراء إضافي في خطوط التحويل وتكلفة معدات |

> ⚖️ **قاعدة الجرعة المعيارية:**
> تتراوح الجرعة القياسية بين **$1.5$ إلى $3.0\\text{ kg/ton}$**. الجرعة المفرطة تسبب "تسميم الشد الجاف"، مما يؤدي إلى انقطاع الورقة على الماكينة وتطاير غبار كثيف (Dusting) في صالة الإنتاج.
`,
    estimated_minutes: 22,
    order: 3,
    is_free: true,
  },

  // ── COURSE 202: LESSON 16 ──
  {
    id: 'les-t202-2b',
    module_id: 'mod-t202-2',
    title: 'محسنات الشد الجاف (CMC والنشا الكاتيوني) وإدارة الشحنة',
    title_en: 'Dry Strength Resins (CMC & Starch) & Wet End Charge Balance',
    type: 'lesson',
    content: `
### تعويض الفاقد في المتانة بدون تكرير ميكانيكي (Dry Strength Resins):
حين يرغب مهندس التيشيو في تعويض النقص في قوة الشد الناتج عن استخدام ألياف اللب القصير أو المطريات الكيميائية، يُمنع اللجوء لتكرير العجينة لأنه يدمر الـ Bulk؛ بل يُستخدم التوليف الكيميائي المزدوج:

#### 1. النشا الكاتيوني المعدل (Cationic Starch):
- بوليمر طبيعي موجب الشحنة بدرجة استبدال كاتيوني منخفضة ($DS = 0.02 - 0.04$).
- ينتشر بين تقاطعات الألياف ويعمل كـ "لحام هيدروجيني إضافي"، رافعاً قوة الشد الجاف بنسبة تصل إلى **$15\\%$** بجرعة **$3 - 6\\text{ kg/ton}$**.

#### 2. كاربوكسي ميثيل سليلوز (CMC):
- بوليمر أنيوني (سالب الشحنة) فائق النقاء.
- عند إضافته بالتناغم مع راتنج PAE أو النشا الكاتيوني، يتشكل مركب بوليمري معقد (Polyelectrolyte Complex) يضاعف كفاءة ربط الألياف الميكانيكية دون زيادة كثافة الشيت أو تقليل سمكه.

---

### النظرية الكهروستاتيكية: إدارة شحنة الدائرة الرطبة وشحنة زيتا (Zeta Potential):
تحمل ألياف السليلوز الطبيعية في الماء شحنة كهروستاتيكية سالبة ناتجة عن تأين مجموعات الكاربوكسيل ($-COO^-$):
- **جهد زيتا الطبيعي للألياف:** يتراوح بين **$-25\\text{ mV}$ إلى $-35\\text{ mV}$**.
- **خطر التراكم الأنيوني (Anionic Trash):**
  - في حال استخدام عجائن التدوير (DIP) أو مياه الدائرة المغلقة، تتراكم بوليمرات سالبة مهملة تعادل شحنة المضافات الكاتيونية وتمنعها من الالتصاق بالألياف.
- **النطاق التشغيلي الذهبي للدائرة البيضاء:**
  - يجب ضبط شحنة الدائرة بواسطة مواد تثبيت وتجلط كاتيونية (Coagulants) لتكون سالبة بشكل طفيف: **$-5\\text{ mV}$ إلى $-10\\text{ mV}$**.
  - هذا النطاق يضمن احتجاز أكثر من **$92\\%$** من الكيماويات والمواد الدقيقة فوق الألياف، ويمنع رغوة الدائرة ويحمي البيئة المائية من الهدر.
`,
    estimated_minutes: 20,
    order: 4,
    is_free: true,
  },

  // ── COURSE 301: LESSON 17 ──
  {
    id: 'les-t301-1',
    module_id: 'mod-t301-1',
    title: 'تكنولوجيا ماكينات التشكيل الهلالي (Crescent Former)',
    title_en: 'Crescent Former Configuration & Centrifugal Dewatering',
    type: 'lesson',
    content: `
### الثورة الهندسية لماكينات التشكيل الهلالي (Crescent Former Revolution):
قبل ظهور الـ Crescent Former، كانت ماكينات التيشيو تعتمد على سلك الفوردينير التقليدي (Fourdrinier) أو درافيل الشفط التفريغية (Suction Breast Roll)، وكانت السرعة محكومة بحدود قصوى لا تتجاوز $1200\\text{ m/min}$ بسبب تطاير رذاذ الماء وتخريب سطح الشيت بالاضطراب الهوائي.
أحدثت ماكينات **Crescent Former** قفزة تكنولوجية مكنت الماكينات الحديثة من العمل بسرعات قياسية تصل إلى **$2000 - 2200\\text{ m/min}$** بأعلى درجات الاستقرار الهيدروديناميكي.

---

### النظرية الفيزيائية: نزح المياه بقوة الطرد المركزي (Centrifugal Dewatering):
في ماكينة Crescent Former، تدخل نافورة العجينة من شفة صندوق التدفق مباشرة في الفجوة الهلالية المتكونة بين **سلك التشكيل الخارجي (Forming Wire)** و **لَبّاد الكبس الداخلي (Felt)** أثناء التفافهما المشترك حول درفيل التشكيل المصمت (Forming Roll):

$$P_{\\text{dewatering}} = \\frac{T_{\\text{wire}}}{R_{\\text{roll}}}$$

- **حيث:**
  - $T_{\\text{wire}}$: قوة شد سلك التشكيل الميكانيكية بالـ $\\text{kN/m}$ (تتراوح عادة بين $6$ إلى $8.5\\text{ kN/m}$).
  - $R_{\\text{roll}}$: نصف قطر درفيل التشكيل بالامتار.
  - ينتج عن هذا الشد ضغط هيدروليكي شعاعي متجانس يضغط العجينة، وتُطرد **$90\\%$ من المياه** فورياً نحو الخارج بفعل **قوة الطرد المركزي (Centrifugal Force)**، لتستقر في حوض تجميع المياه البيضاء دون الحاجة لصناديق شفط تفريغية تستهلك طاقة كهربائية باهظة وتسبب احتكاكاً ميكانيكياً.

---

### التحكم في تركيز التشكيل (Headbox Consistency):
- تُضخ العجينة بتركيز فائق التخفيف: **$0.15\\% - 0.22\\%$** سليلوز (أي أن كل $1\\text{ kg}$ ألياف سليلوز يسبح في حوالي $500\\text{ kg}$ مياه!).
- هذا التخفيف الشديد يضمن تباعد ألياف اللب القصير واللب الطويل في الحالة المعلقة، مما يمنع التكتل العشوائي (Flocking) ويصنع شيت تيشيو ذا تجانس بصري وتشكيل مجهري استثنائي (Superior Sheet Formation).
`,
    estimated_minutes: 24,
    order: 1,
    is_free: true,
  },

  // ── COURSE 301: LESSON 18 ──
  {
    id: 'les-t301-1b',
    module_id: 'mod-t301-1',
    title: 'صندوق التدفق الهيدروليكي ونسبة السرعة (Jet-to-Wire Ratio)',
    title_en: 'Hydraulic Headbox Mechanics & Jet-to-Wire Optimization',
    type: 'lesson',
    content: `
### النظرية الهيدروليكية لصندوق التدفق (Headbox Hydraulics):
تعتمد سرعة تدفق نفاث العجينة الخارج من شفة صندوق التدفق (Headbox Slice Jet) على نظرية برنولي للضغط الهيدروليكي:

$$V_{\\text{jet}} = C_v \\sqrt{2 g \\cdot \\frac{P_{\\text{total}}}{\\rho g}} = C_v \\sqrt{\\frac{2 P_{\\text{total}}}{\\rho}}$$

- **مولدات الاضطراب الدقيق (Micro-turbulence Step Diffusers):**
  - تمر العجينة عبر مصفوفة من الأنابيب متدرجة القطر (Stepped Diffusers) ومولدات الدوامات الدقيقة، لتحويل التدفق الطباقي إلى اضطراب مجهري محكوم (Micro-turbulence) يفكك تكتلات الألياف دون الإخلال باستقرار السطح الحر للنافورة.
- **ألواح التوجيه المرنة (Lamellas / Vanes):**
  - رقائق مرنة من الكربون أو البوليمر تفصل بين مسارات التدفق حتى مخرج الشفة، مما يمنع تكوّن دوامات كبرى تؤدي إلى تباين الوزن القياسي عرضياً (Cross Direction Basis Weight Variation).

---

### ضبط نسبة سرعة التدفق إلى السلك ($J/W$ Ratio) وتوجيه الألياف:

$$J/W = \\frac{V_{\\text{jet}} (\\text{سرعة خروج العجينة م/د})}{V_{\\text{wire}} (\\text{سرعة سلك التشكيل م/د})}$$

#### 1. حالة الصدم والاندفاع (Rush Condition: $J/W > 1.02$):
- سرعة خروج العجينة أسرع من سرعة السلك؛ تنثني الألياف وتترتب طولياً باتجاه الماكينة (MD Orientation)، مما يرفع الشد الطولي ويخفض الشد العرضي ($MD/CD > 2.0:1$).

#### 2. حالة السحب والجر (Drag Condition: $J/W < 0.98$):
- سلك التشكيل أسرع من العجينة؛ يقوم السلك بتمشيط وسحب الألياف في اتجاه الماكينة بقوة.

#### 3. النقطة الذهبية للتيشيو (Square Sheet: $J/W \\approx 1.000 - 1.005$):
- تتساوى سرعة التدفق مع سرعة السلك تماماً؛ تتساقط الألياف وتنتشر بعشوائية ثلاثية الأبعاد متماثلة في كافة الاتجاهات.
- تنخفض نسبة الشد الطولي/العرضي إلى **$1.2:1 - 1.4:1$**، مما يمنح المنديل نعومة متماثلة وملمساً قماشياً مقاوماً للتمزق المائل في يد المستهلك.
`,
    estimated_minutes: 22,
    order: 2,
    is_free: true,
  },

  // ── COURSE 301: LESSON 19 ──
  {
    id: 'les-t301-2',
    module_id: 'mod-t301-2',
    title: 'أقمشة التشكيل (Forming Fabrics) متعددة الطبقات للتيشيو',
    title_en: 'Multi-layer Forming Fabrics for Crescent Formers',
    type: 'lesson',
    content: `
### الهندسة النسيجية لأسلاك التشكيل ثلاثية الطبقات (SSB Technology):
تتحمل أقمشة التشكيل في ماكينات Crescent Former إجهادات شد ميكانيكية واحتكاكاً مائياً هائلاً عند سرعات $2000\\text{ m/min}$.
لذا تُصنع من بوليمرات البوليستر (PET) والبولي أميد (PA) بتصميم نسيجي ثلاثي متطور يُعرف باسم **SSB (Shute Support Binder)**:

---

### الخصائص الهندسية المزدوجة لسلك الـ SSB:
1. **الجانب العلوي الملامس للورقة (Paper Side):**
   - خيوط بوليستر ميكرونية فائقة النعومة بكثافة نسيجية عالية جداً تصل إلى **$70 - 90$ خيط/سم**.
   - **مؤشر دعم الألياف (Fiber Support Index - FSI $> 160$):** يمنع انغراس ألياف اللب القصير الدقيقة في مسام السلك، مما يضمن خروج ورقة ملساء تماماً خالية من أي طبعات أو علامات سلكية (**Zero Wire Marks**) ويحقق أعلى احتجاز ألياف ($> 85\\%$).

2. **الجانب السفلي الملامس لدرافيل الماكينة (Machine Side):**
   - خيوط بوليستر وبولي أميد سميكة وقاسية ذات مقاومة تآكل استثنائية (High Wear Resistance) لحماية السلك من الاحتكاك الميكانيكي المستمر بدرافيل الشد والتوجيه.

---

### نفاذية الهواء واستقرار الشد الميكانيكي:
- **نفاذية الهواء القياسية (Air Permeability):** تُعاير في نطاق **$400 - 550\\text{ CFM}$** (قدم مكعب/دقيقة عند ضغط $127\\text{ Pa}$) لضمان تصريف هيدروليكي فوري للماء الطارد دون ارتداد قطرات الماء إلى الشيت.
- **إدارة الشد الميكانيكي:** يُحافظ على شد السلك عبر أجهزة الشد الهوائية الآلية في نطاق **$6.5 - 7.5\\text{ kN/m}$** لضمان ثبات شكل الفجوة الهلالية ومنع اهتزاز الشيت.
`,
    estimated_minutes: 20,
    order: 3,
    is_free: true,
  },

  // ── COURSE 301: LESSON 20 ──
  {
    id: 'les-t301-2b',
    module_id: 'mod-t301-2',
    title: 'لَبّادات الكبس (Press Felts)، درفيل الكبس وشواطات التنظيف',
    title_en: 'Tissue Press Felts, Suction Press Rolls & High-Pressure Showers',
    type: 'lesson',
    content: `
### ميكانيكا نزح المياه بالكبس ونقل الشيت لأسطوانة اليانكي:
يؤدي لَبّاد التيشيو (Tissue Press Felt) مهمتين فيزيائيتين متزامنتين في ماكينة Crescent Former:
1. استلام الشيت الرطب بنسبة جفاف $18\\% - 22\\%$ من منطقة التشكيل وحمله بأمان على سرعة تفوق $2000\\text{ m/min}$.
2. نقل الشيت وضغطه في فجوة الكبس (**Press Nip**) بين درفيل الكبس المفرغ (Suction Pressure Roll - SPR) وأسطوانة اليانكي الفولاذية الساخنة.

---

### النظرية الفيزيائية: نزح المياه بالضغط وديناميكا الجفاف (Nip Dewatering):
- يتعرض الشيت واللباد في فجوة الكبس لضغط خطي هائل يتراوح بين **$90$ إلى $110\\text{ kN/m}$** (ضغط موضعي يصل إلى $3.5 - 4.5\\text{ MPa}$):
  - ينضغط اللباد فتنفتح مساماته الدقيقة لابتلاع المياه الخارجة من الشيت بفعل الضغط الهيدروليكي، بينما يقوم حذاء الشفط الداخلي لدرفيل الكبس بسحب المياه بالهواء المفرغ (Vacuum $40 - 55\\text{ kPa}$).
  - ترتفع نسبة جفاف الشيت فورياً من **$20\\%$ إلى $42\\% - 45\\%$**.

> ⚡ **الأهمية الطاقية الحرجة للجفاف بالكبس:**
> في الديناميكا الحرارية لورق التيشيو: **كل زيادة بنسبة $1\\%$ في جفاف الشيت الخارج من الكبس توفر $4\\%$ من استهلاك بخار اليانكي وغاز الكابينة!**

---

### نظام صيانة وغسيل اللباد الآلي (Continuous Felt Conditioning):
لضمان عدم انسداد مسامات اللباد براتنجات مقاومة البلل والألياف الدقيقة والشحوم، يعتمد الخط على منظومة شواطات ثلاثية:
1. **شواطات التشحيم والترطيب (Lubricating Showers):** مياه بيضاء مصفاة بضغط منخفض ($2 - 4\\text{ bar}$) لترطيب اللباد قبل صناديق الشفط.
2. **شواطات الإبر النفاثة المتذبذبة عالية الضغط (HP Needle Showers):** نفاثات مياه بالغة الدقة بضغط **$18 - 25\\text{ bar}$** تتذبذب باستمرار لاختراق نسيج اللباد وطرد الشوائب المحتجزة في العمق.
3. **التغذية الكيميائية المستمرة (Continuous Chemical Conditioning):** حقن محاليل تنظيف منظمة للأس الهيدروجيني والمواد المشتتة لحماية مرونة شعيرات النايلون ($PA_{66}$).
`,
    estimated_minutes: 22,
    order: 4,
    is_free: true,
  },

  // ── COURSE 302: LESSON 21 ──
  {
    id: 'les-t302-1',
    module_id: 'mod-t302-1',
    title: 'أسطوانة اليانكي الصلب (Steel Yankee) والديناميكا الحرارية',
    title_en: 'Steel Yankee Cylinders & Steam Condensate Dynamics',
    type: 'lesson',
    content: `
### قلب مصنع التيشيو: أسطوانة اليانكي العملاقة (The Yankee Dryer):
أسطوانة اليانكي هي أضخم مبادل حراري أسطواني دوار فائق الضغط في الصناعات الخفيفة؛ يبلغ قطرها **$3.6$ إلى $5.6\\text{ متر}$**، ويصل وزنها إلى أكثر من **$100 - 140\\text{ طن}$**، وتدور بدقة ميكرونية متناهية تحت ضغط بخار داخلي مشبع يتراوح بين **$6$ إلى $10\\text{ bar}$**.

---

### النظرية الحرارية: معادلة انتقال الحرارة بالتوصيل والتكثيف:
تنتقل الحرارة من البخار المشبع الداخلي إلى شيت التيشيو الرطب الملتصق بالسطح الخارجي وفق معادلة التوصيل الحراري المستمر:

$$q = U \\cdot A \\cdot (T_{\\text{steam}} - T_{\\text{sheet}})$$

- **حيث المقاومة الحرارية الإجمالية (Overall Heat Transfer Coefficient $U$):**
$$\\frac{1}{U} = \\frac{1}{h_{\\text{condensate}}} + \\frac{t_{\\text{shell}}}{k_{\\text{metal}}} + \\frac{t_{\\text{coating}}}{k_{\\text{coating}}} + \\frac{1}{h_{\\text{contact}}}$$

1. $h_{\\text{condensate}}$: معامل انتقال الحرارة عبر طبقة مياه التكثيف الداخلية.
2. $t_{\\text{shell}} / k_{\\text{metal}}$: المقاومة الحرارية لجدار أسطوانة اليانكي (حيث $t$ سمك الجدار و $k$ الموصلية الحرارية للمعدن).
3. $t_{\\text{coating}} / k_{\\text{coating}}$: المقاومة الحرارية لطبقة الطلاء البوليمري الخارجية.

---

### التفوق التكنولوجي لأسطوانات اليانكي الفولاذية (Steel vs Cast Iron):
أزاح الفولاذ (Steel) أسطوانات الحديد الزهر التقليدية (Cast Iron) تماماً من خطوط التيشيو الحديثة لثلاثة أسباب هندسية حاسمة:
1. **الموصلية الحرارية الأعلى بنسبة $30\\%$:** موصلية الفولاذ تبلغ $\\approx 45\\text{ W/m}\\cdot\\text{K}$ مقارنة بـ $\\approx 35\\text{ W/m}\\cdot\\text{K}$ للحديد الزهر.
2. **جدران أسطوانة أرق ($35 - 45\\text{ mm}$ فولاذ مقابل $60 - 75\\text{ mm}$ زهر):** تقليل سمك الجدار يخفض المقاومة الحرارية، مما يتيح تجفيف كميات أضخم من الورق بنفس استهلاك الطاقة.
3. **الأمان ومقاومة الانفجار:** الفولاذ معدن مطيلي (Ductile) يتحمل ضغوط بخار أعلى ($> 10\\text{ bar}$) دون خطر الانهيار الهش والانفجار الكارثي للحديد الزهر.

---

### ديناميكا طبقة التكثيف والمصاصات الثابتة (Stationary Siphons):
- عند دوران الأسطوانة بسرعة تفوق $1000\\text{ m/min}$، تدور مياه التكثيف مع الجدار الداخلي بقوة الطرد المركزي مشكلة حلقة مائية عازلة (**Condensate Rim**).
- كل مليمتر واحد من سماكة هذه الحلقة المائية يخفض كفاءة انتقال الحرارة بنسبة هائلة!
- **الحل الهندسي:** تركيب شبكة من المصاصات الثابتة فائقة الدقة (Stationary Blow-through Siphons) بمجال خلوص ضيق ($1.5 - 2.5\\text{ mm}$) وضغط تفريغ تفاضلي ($\\Delta P = 0.6 - 1.2\\text{ bar}$) لشفط مياه التكثيف والبخار فورياً لمنع تكوّن البركة العازلة.
`,
    estimated_minutes: 24,
    order: 1,
    is_free: true,
  },

  // ── COURSE 302: LESSON 22 ──
  {
    id: 'les-t302-1b',
    module_id: 'mod-t302-1',
    title: 'كابينة الهواء الساخن الفائق (High-Velocity Hood) بدرجة 450°م',
    title_en: 'Yankee Gas-Fired High-Velocity Air Hood Operations',
    type: 'lesson',
    content: `
### النظرية الحرارية: التجفيف بالارتطام الهوائي النفاث (Impingement Drying):
تغطي كابينة اليانكي (The Yankee Hood) النصف العلوي من أسطوانة اليانكي، وهي ليست مجرد غطاء لسحب البخار، بل تمثل **نصف منظومة التجفيف الحراري الكلية**:
- تُطلق الكابينة آلاف النفاثات الهوائية عالية السرعة عبر فوهات دقيقة مشطوفة موجهة رأسياً نحو سطح الورقة:
  - **سرعة اندفاع الهواء (Nozzle Velocity):** **$145$ إلى $160\\text{ م/ث}$** (حوالي **$550\\text{ كم/ساعة}$**!).
  - **درجة حرارة الهواء:** **$450^\\circ\\text{C}$ إلى $500^\\circ\\text{C}$** ناتجة عن احتراق الغاز الطبيعي.

---

### الميكانيزم الفيزيائي لتكسير الطبقة الحدية (Boundary Layer Breakdown):
1. أثناء حركة الشيت السريعة، تتكون فوقه طبقة هوائية حدية راكدة مشبعة ببخار الماء (Laminar Boundary Layer) تعزل الحرارة وتمنع التبخير.
2. ترتطم نفاثات الهواء الساخن فائقة السرعة بهذه الطبقة، فتخترقها وتشتتها فورياً، مسببة اضطراباً هوائياً مجهرياً متواصلاً.
3. يؤدي ذلك إلى معدلات تبخير مائي قياسية تصل إلى **$180 - 240\\text{ kg water / m}^2 \\cdot \\text{h}$**، مما يتيح تجفيف شيت التيشيو من رطوبة $55\\%$ إلى $5\\%$ خلال أقل من **$0.25$ ثانية**!

---

### نظام موازنة واستعادة الطاقة الحرارية (Heat Recovery System):
- تنقسم الكابينة إلى نصفين مستقلين: النصف الرطب الصاعد (Wet End Half) والنصف الجاف الهابط (Dry End Half) لتنظيم معدل التبخير ومنع الصدمات الحرارية.
- تُمرر عوادم الكابينة المحملة بالبخار الساخن ($300^\\circ - 350^\\circ\\text{C}$) عبر منظومة مبادلات حرارية لاستعادة الطاقة:
  - تسخين هواء الاحتراق الداخل للأفران مسبقاً (Combustion Air Preheating).
  - تسخين مياه تغذية غلايات البخار والمياه البيضاء المستخدمة في الدائرة الرطبة، مما يوفر حتى **$18\\% - 22\\%$** من إجمالي فاتورة الغاز الطبيعي للمصنع.
`,
    estimated_minutes: 22,
    order: 2,
    is_free: true,
  },

  // ── COURSE 302: LESSON 23 ──
  {
    id: 'les-t302-2',
    module_id: 'mod-t302-2',
    title: 'كيمياء طلاء سطح اليانكي (Yankee Coating Chemistry)',
    title_en: 'Yankee Coating Chemistry: Adhesive, Release & Modifier',
    type: 'lesson',
    content: `
### منظومة الطلاء البوليمري الدقيق (Yankee Coating Package):
لا تلامس ألياف السليلوز سطح أسطوانة اليانكي المعدني مباشرة، بل تلتصق فوق فيلم بوليمري ميكروني متجدد مستمر بسمك **$1.0 - 2.5\\ \\mu\\text{m}$** تضخه مسطرة رش كيميائية متطورة (**Spray Boom**) أسفل الأسطوانة بضغط $3 - 5\\text{ bar}$.

---

### المكونات الكيميائية الثلاثة لفيلم الطلاء المتوازن:

1. **البوليمر اللاصق (Adhesive Polymer):**
   - بوليمرات بولي أمين-إيبيكلوروهيدرين غير المتشابكة كلياً أو كحول البولي فينيل (PVOH).
   - **الوظيفة:** تثبيت الشيت الرطب بقوة متجانسة فوق سطح الأسطوانة لمنع رفرفة أو تطاير الورقة بفعل أعاصير هواء الكابينة، وضمان نقل الحرارة بالتوصيل المباشر.

2. **المادة العازلة / الفاصلة (Release Agent):**
   - مستحلبات زيوت معدنية عالية النقاء ومطريات هيدروكربونية كارهة للماء وسيليكونات معدلة.
   - **الوظيفة:** ترطيب وتليين الفيلم عند خط التقاء السكين، مما يتيح لشفرة الكرمشة قشط الورقة بسلاسة ونظافة دون أن تلتصق أو تتمزق.

3. **المعدل / الملدن (Modifier / Plasticizer):**
   - مركبات البولي إيثيلين جلايكول (PEG) وفوسفات الأمونيوم العضوية.
   - **الوظيفة:** ضبط درجة التحول الزجاجي ($T_g$) للفيلم البوليمري لمنعه من الجفاف والتفحم تحت حرارة $450^\\circ\\text{C}$، والحفاظ على مرونته ومطاوعته لقوة سكين الكرمشة.

---

### جدول التوازن التشغيلي ومخاطر اختلال الطلاء:

| حالة الطلاء | الخلل الكيميائي | الأعراض التشغيلية على الماكينة | جودة الورقة الناتجة |
|---|---|---|---|
| **فرط الالتصاق (Hard/Sticky Coating)** | زيادة اللاصق ونقص العازل | تآكل سريع لشفرة السكين واهتزاز شديد | ثقوب دقيقة (Pinholes) وملمس قاسي |
| **فرط الانزلاق (Soft/Slippery Coating)** | زيادة العازل ونقص اللاصق | تطاير الورقة مع هواء الكابينة وانفصال مبكر | كرمشة غير منتظمة واستطالة ضعيفة جداً |
| **الطلاء المثالي (Balanced Film)** | توازن نسبي مضبوط ($1:1.5:0.5$) | فيلم ناعم ومستقر، قشط سلس وهادئ للسكين | **أعلى نعومة حريرية، حجم Bulk فائق، وغياب للغبار** |
`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  // ── COURSE 302: LESSON 24 ──
  {
    id: 'les-t302-2b',
    module_id: 'mod-t302-2',
    title: 'ميكانيكا الكرمشة، زوايا سكاكين الكريب ونسبة الكرمشة (Crepe Ratio)',
    title_en: 'Creping Mechanics, Blade Geometry & Crepe Ratio Optimization',
    type: 'lesson',
    content: `
### النظرية الميكانيكية لعملية الكرمشة (Micro-creping Mechanics):
الكرمشة هي القلب النابض لصناعة التيشيو؛ فبدونها يكون الورق مجرد شيت صلب قليل الامتصاص.
- عندما يجف شيت التيشيو إلى رطوبة **$4.0\\% - 6.0\\%$** على أسطوانة اليانكي، يصطدم بسرعة $2000\\text{ m/min}$ بالحد القاطع لسكين الكرمشة.
- تُحدث قوى الصدم الميكانيكية إجهادات قص وانبعاج مجهري (Buckling and Delamination)؛ فتتكسر الروابط الهيدروجينية بين ألياف السطح المقيدة، وتنتصب أطراف ألياف اللب القصير حرة، ويتشكل ما بين **$25$ إلى $45$ ثنية وتجعيدة مجهرية (Micro-crepes) في السنتيمتر الواحد**.

---

### الهندسة المكانية وزوايا سكين الكرمشة (Creping Blade Geometry):
1. **زاوية شطف حافة السكين (Blade Bevel Angle):**
   - تُشطف الشفرة بزاوية تتراوح بين **$15^\\circ$ إلى $25^\\circ$**. كلما زادت زاوية الشطف، زادت قوة تصادم الشيت وزادت كثافة الثنيات المجهرية ونعومتها.
2. **زاوية الجيب التصادمي (Pocket Angle $\\theta$):**
   - الزاوية المحصورة بين مماس أسطوانة اليانكي والوجه العلوي لشفرة السكين (تتراوح نموذجياً بين **$68^\\circ$ إلى $78^\\circ$**).
3. **تكنولوجيا الشفرات السيراميكية (Ceramic Tipped Blades):**
   - استبدلت الشفرات الفولاذية التقليدية (التي تتآكل وتتطلب التغيير كل 4-6 ساعات) بشفرات ذات حواف من الكاربيد السيراميكي (Cermet) تدوم لأكثر من **$24$ إلى $48$ ساعة متواصلة**، مما يحافظ على ثبات مؤشر النعومة بدون تذبذب.

---

### الحساب الرياضي لنسبة الكرمشة (Crepe Ratio %):

$$\\text{Crepe Ratio (\\%)} = \\frac{V_{\\text{yankee}} - V_{\\text{reel}}}{V_{\\text{yankee}}} \\times 100$$

- **حيث:**
  - $V_{\\text{yankee}}$: سرعة دوران سطح أسطوانة اليانكي (م/دقيقة).
  - $V_{\\text{reel}}$: سرعة درفيل اللف وسحب الورقة النهائي (م/دقيقة).

> 📊 **الأثر الفيزيائي لنسبة الكرمشة:**
> - تتراوح النسبة النموذجية بين **$15\\%$ إلى $22\\%$**.
> - رفع نسبة الكرمشة يزيد مباشرة من استطالة المنديل قبل الانقطاع (Stretch % ليصل إلى $18\\% - 24\\%$)، ويضاعف الحجم النوعي (Bulk)، ويمنح الورقة ملمساً قطنياً مرناً لا مثيل له.
`,
    estimated_minutes: 26,
    order: 4,
    is_free: true,
  },
  // ── COURSE 303: LESSON les-t303-1 ──
  {
    id: 'les-t303-1',
    module_id: 'mod-t303-1',
    title: 'تطور ماكينات التوين واير: من Fourdrinier و SBR إلى Crescent Former و C-Former و S-Wrap',
    title_en: 'Evolution of Twin Wire Formers: Fourdrinier, SBR, Crescent & Gap Formers',
    type: 'lesson',
    content: `### تاريخ تطور تكنولوجيا التشكيل في صناعة التيشيو:
شهد قسم التشكيل (Forming Section) في ماكينات ورق التيشيو ثورة هندسية غير مسبوقة على مدار العقود الماضية. إن إنتاج ورقة رقيقة جداً (13 - 22 جم/م²) بسرعات إنتاجية فائقة تتجاوز **2000 م/دقيقة** واجه معضلة فيزيائية كبرى: **كيف يتم التخلص من 98% من مياه العجينة في أجزاء من الثانية دون تشتيت الألياف أو تمزيق الورقة الرطبة؟**

---

### مقارنة أجيال التشكيل الثلاثة:

#### 1. ماكينة الفودرينير المسطحة (Fourdrinier Machine):
- **المبدأ:** يتدفق تيار العجينة من صندوق التدفق فوق سلك أفقي مفرد ومفتوح، ويتم نزح المياه لأسفل بفعل الجاذبية وصناديق الشفط الهيدروديناميكية (Foils & Suction Boxes).
- **المحدد الهندسي الحرج (Speed Limit):**
  - لا يمكن تشغيل ماكينة التيشيو على نظام فودرينير بسرعات تتجاوز **600 إلى 800 م/دقيقة**.
  - **السبب الفيزيائي:** السطح الحر المعرض للهواء (Free Surface) يتعرض لاضطرابات هوائية وقوى طرد تجعل تيار العجينة يتموج ويتطاير (Stock Jump)، مما يدمر تجانس الورقة ويفقدها خصائص النعومة.

#### 2. ماكينة درفيل الشفط (Suction Breast Roll - SBR):
- **المبدأ:** يُضخ تيار العجينة مباشرة فوق درفيل تشكيل مثقب يحتوي في داخله على غرف تفريغ وفاكيوم عالي (Vacuum Box).
- **المزايا والعيوب:**
  - رفعت السرعات إلى **1000 - 1300 م/دقيقة**.
  - **العيوب:** استهلاك هائل لطاقة التفريغ، تآكل شديد في شرائح الإحكام (Seal Strips)، وظهور عيب **علامات الظلال (Shadow Marking)** في الورقة نتيجة ثقوب الدرفيل.

#### 3. عصر ماكينات التوين واير الحديثة (The Twin Wire Era):
- **المبدأ:** حصر تيار العجينة السائل فور خروجه من شفة صندوق التدفق بين سطحين مساميين (سلك وسلك، أو سلك ولباد) والتفافهما حول درفيل تشكيل.
- **النتيجة:** انعدام السطح الحر تماماً، مما مكن الماكينات من كسر حاجز **2200 م/دقيقة** بأعلى درجات التماسك والنعومة.

---

### الأنواع الأربعة الرئيسية لماكينات التوين واير (Twin Wire Formers):

\`\`\`
[ صندوق التدفق الهيدروليكي ] ───►  [ فجوة التشكيل المزدوجة ]
                                         │
        ┌────────────────────────────────┴───────────────────────────────┐
        ▼                                                                ▼
1. Crescent Former                                            2. C-Wrap Former
   (سلك خارجي + لباد داخلي على درفيل مصمت)                    (سلكان يلتفان كحرف C على درفيل مفرغ)
        │                                                                │
        ▼                                                                ▼
3. S-Wrap Former                                              4. Roll-Blade Former
   (سلكان بمسار حرف S ونزح متعاكس)                             (درفيل متبوع بشفرات تعديل التشكيل)
\`\`\`

#### 1. ماكينة التشكيل الهلالي (Crescent Former):
- الماكينة الأوسع انتشاراً في العالم لإنتاج ورق التيشيو الفاخر (أكثر من 85% من الماكينات الحديثة).
- يدخل تيار العجينة بين **سلك تشكيل خارجي (Forming Wire)** و**لباد كبس داخلي (Press Felt)** يلتفان حول **درفيل تشكيل مصمت (Solid Forming Roll)**.
- يتم نزح المياه بالكامل بنسبة 100% نحو السلك الخارجي بفعل ضغط شد السلك وقوة الطرد المركزي، وتلتصق الورقة باللباد لتنتقل مباشرة إلى نيب الكبس وأسطوانة اليانكي دون أي منطقة نقل هوائية حرة (Closed Transfer).

#### 2. ماكينة التشكيل C (C-Wrap Former):
- يدخل تيار العجينة بين سلكين معدنيين/بوليمريين يلتفان حول درفيل تشكيل كبير على شكل حرف C.
- تُنزح المياه نحو الاتجاهين، وتنتقل الورقة المتكونة بعد ذلك إلى لباد الكبس عبر درفيل التقاط مفرغ (Pick-up Roll).

#### 3. ماكينة التشكيل S (S-Wrap Former):
- يلتف السلكان الحاصران للورقة حول درفيل تشكيل أول في اتجاه، ثم ينعكس المسار حول درفيل ثانٍ في الاتجاه المعاكس.
- يتيح هذا التصميم نزحاً متوازناً جداً للمياه من كلا وجهي الورقة، مما يلغي تماماً ظاهرة اختلاف الوجهين (Two-sidedness).

---

### جدول المقارنة الهندسية الشاملة بين ماكينات التشكيل في التيشيو:

| الخاصية الهندسية | Fourdrinier | Suction Breast Roll (SBR) | Crescent Former | C-Wrap / S-Wrap Former |
|---|---|---|---|---|
| **السرعة التصميمية القصوى** | 600 - 800 م/د | 1100 - 1300 م/د | **2000 - 2400 م/د** | 1800 - 2200 م/د |
| **استهلاك طاقة الفاكيوم** | معتدل | **مرتفع جداً (غرف شفط ضخمة)** | **منخفض جداً (طرد مركزي)** | معتدل إلى مرتفع |
| **تناسق وجهي الورقة (Two-sidedness)** | متفاوت (فقد نواعم بالأسفل) | متوسط (أثر ثقوب الدرفيل) | غير متماثل (وجه لباد ووجه سلك) | **فائق التماثل والتطابق** |
| **كفاءة تشغيل أصناف المناديل الرقيقة** | ضعيفة جداً | مقبولة | **استثنائية (100% Closed Transfer)** | جيدة جداً |
| **بساطة الصيانة وتبديل الأقمشة** | معقدة وطويلة | معقدة جداً | **سريعة وبسيطة الكابول (Cantilever)** | متوسطة التعقيد |
| **الملائمة الصناعية السائدة** | الورق المقوى والكرافت | الماكينات القديمة | **التيشيو الفاخر وتواليت المنازل** | مناشف اليد والمطبخ وسرعات عالية |
`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },
  // ── COURSE 303: LESSON les-t303-2 ──
  {
    id: 'les-t303-2',
    module_id: 'mod-t303-1',
    title: 'هيدروديناميكا نزح المياه بين سلكين وقوى الطرد المركزي وضغط الشد (Dewatering Physics)',
    title_en: 'Twin Wire Dewatering Hydrodynamics: Wire Tension & Centrifugal Forces',
    type: 'lesson',
    content: `### فيزياء النزح فائق السرعة في ماكينات التوين واير:
في ماكينات التيشيو التوين واير (Crescent Former و Gap Formers)، يتم نزح أكثر من **95% من الماء الحر** الموجود في تيار العجينة خلال مسافة قوسية لا تتعدى **1.0 إلى 1.5 متر** وعلى زمن تلامس يقل عن **0.03 ثانية**!

تحكم هذه العملية قوى فيزيائية رئيسية تتفاعل لحظياً:
1. ضغط الشد الميكانيكي للأقمشة الحاصرة.
2. قوة الطرد المركزي الناشئة عن الدوران فائق السرعة.
3. المقاومة الهيدروليكية لنسيج السلك وتراكم الكعكة الليفية.

---

### 1. المعادلة الهندسية لضغط النزح الناتج عن شد السلك (Forming Pressure):
يتولد ضغط النزح الهيدروديناميكي ($P_{\text{dewatering}}$) الذي يعتصر تيار العجينة بين السلك واللباد (أو بين السلكين) من الشد الميكانيكي للسلك الخارجي المنحني حول درفيل التشكيل وفق معادلة لابلاس للأسطح المنحنية:

$$P_{\text{dewatering}} = \frac{T}{R}$$

- **حيث:**
  - $P_{\text{dewatering}}$: ضغط النزح الهيدروديناميكي المطبق على طبقة العجينة بالـ (كيلوباسكال kPa).
  - $T$: قوة الشد الميكانيكي للسلك الخارجي بالـ (كيلونيوتن لكل متر kN/m).
  - $R$: نصف قطر درفيل التشكيل الخارجي بالـ (متر m).

#### مثال حسابي تطبيقي للمهندس:
ماكينة Crescent Former نصف قطر درفيل التشكيل فيها $R = 0.80\text{ m}$. يقوم مهندس التشغيل بضبط شد السلك الخارجي بواسطة بساتم الشد الهيدروليكية على $T = 8.0\text{ kN/m}$.
احسب ضغط النزح المطبق على العجينة:

$$P_{\text{dewatering}} = \frac{8.0\text{ kN/m}}{0.80\text{ m}} = 10.0\text{ kPa} \quad (0.10\text{ bar})$$

> 💡 **الأثر التشغيلي العملي:**
> إذا انخفض شد السلك عن 6.0 kN/m، ينخفض ضغط النزح فورياً مما يسبب عدم استقرار طبقة العجينة وهروب المياه مع الشيت نحو اللباد، مسبباً زيادة حمل التجفيف على اليانكي. بينما الشد المفرط (> 11 kN/m) يعتصر الألياف بعنف داخل مسام السلك مسبباً ظاهرة نفاذ الألياف (Fiber Bleed-through) وتآكل أقمشة التشكيل.

---

### 2. قوى الطرد المركزي والدوران فائق السرعة (Centrifugal Force):
إلى جانب ضغط الشد، تلعب قوة الطرد المركزي دوراً فاصلاً في قذف المياه إلى الخارج عبر فتحات السلك:

$$F_c = \frac{m \cdot v^2}{R}$$

- عند سرعة $v = 2100\text{ m/min} = 35\text{ m/s}$، تتضاعف قوة قذف قطرات الماء بمربع السرعة ($35^2 = 1225$).
- تتطاير قطرات الماء من السطح الخارجي للسلك بسرعة تصادمية هائلة نحو أحواض تجميع المياه البيضاء (Saveall Pans).
- يتم تصميم ريش تفريغ المياه (Deflector Blades) بزوايا محسوبة لكسر فيلم الماء المقذوف ومنع ارتداده ثانية على قماش التشكيل (Water Rewetting).

---

### 3. مقاومة الترشيح وتراكم الكعكة الليفية (Darcy’s Law in Gap Forming):
مع خروج الماء من العجينة، تبدأ الألياف السليلوزية بالترسب السريع فوق سطح السلك لتشكل طبقة متراصة تسمى الكعكة الليفية (Fiber Mat). يحكم سريان الماء عبرها قانون دارسي:

$$\frac{dV}{dt} = \frac{A \cdot \Delta P}{\mu \cdot (R_{\text{fabric}} + R_{\text{mat}})}$$

- **حيث:**
  - $R_{\text{fabric}}$: المقاومة الهيدروليكية لسلك التشكيل النسيجي.
  - $R_{\text{mat}}$: المقاومة الهيدروليكية المتصاعدة للكعكة الليفية المتراكمة.
- في بداية منطقة التشكيل تكون $R_{\text{mat}} = 0$، فيكون معدل النزح في ذروته المطلقة.
- مع تراكم الألياف، ترتفع $R_{\text{mat}}$ أضعافاً مضاعفة، مما يتطلب ضغط شد كافٍ لإتمام نزح آخر قطرات الماء الحر قبل انتهاء زاوية التفاف درفيل التشكيل.

---

### 4. ظاهرة عدم تماثل الوجهين وتوزيع النواعم (Two-Sidedness & Fines Distribution):
في ماكينات التشكيل الهلالي Crescent Former، تُنزح المياه بنسبة 100% نحو السلك الخارجي، بينما يبقى اللباد الداخلي عازلاً للماء تقريباً:
- **جهة السلك (Wire Side):** يتدفق الماء بقوة للخارج ساحباً معه جزءاً من الحبيبات الدقيقة والنواعم الأولية (Primary Fines Washout)، مما يجعل هذا الوجه أقل في نسبة النواعم.
- **جهة اللباد (Felt Side):** تعمل الألياف كمرشح يحتجز النواعم السطحية، مما يجعل هذا الوجه غنياً بالحبيبات الدقيقة والألياف القصيرة المنبسطة.
- **الميزة الهندسية العبقرية:**
  وجه اللباد هو الوجه الذي سيلتصق مباشرة بأسطوانة اليانكي! ونظراً لغناه بالنواعم والألياف المسطحة، فإنه يوفر تلامساً حرارياً استثنائياً، ويستجيب لكيمياء طلاء اليانكي بكفاءة، مما ينتج نعومة سطحية فائقة للمنديل بعد قشطه بسكين الكرمشة!
`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },
  // ── COURSE 303: LESSON les-t303-3 ──
  {
    id: 'les-t303-3',
    module_id: 'mod-t303-2',
    title: 'هندسة اصطدام التدفق وضبط فجوة التشكيل ونسبة Jet-to-Wire على سرعات 2200 م/دقيقة',
    title_en: 'Jet Impingement Geometry, Forming Gap & Jet-to-Wire Ratio Tuning',
    type: 'lesson',
    content: `### هندسة خروج تيار العجينة من صندوق التدفق (Headbox Jet Geometry):
يمثل خروج تيار العجينة السائل من شفة صندوق التدفق (Slice Lip) ودخوله في الفجوة المتضيقة بين أقمشة التشكيل أدق عملية هيدروليكية في ماكينة التيشيو. أي اضطراب أو خطأ في زاوية الاصطدام بمقدار مليمترات معدودة يؤدي فورياً إلى:
- تطاير رذاذ العجينة وهروبها على الجوانب.
- تشوه توزيع الألياف وانهيار تجانس الورقة (Poor Formation).
- عدم استواء بروفايل الوزن العرضي (CD Basis Weight Variation).

---

### نقاط اصطدام التدفق الرئيسية في فجوة التشكيل (Impingement Points):

\`\`\`
[ شفة صندوق التدفق ] ════════► تيار العجينة النفاث (Jet)
                                 │
     ┌───────────────────────────┼───────────────────────────┐
     ▼                           ▼                           ▼
1. الاصطدام على اللباد      2. الاصطدام في المركز       3. الاصطدام على السلك
   (Felt Lead)                 (Center Nip)                (Wire Lead)
\`\`\`

#### 1. الاصطدام على اللباد أولاً (Felt Lead):
- يصطدم تيار العجينة بسطح اللباد بزاوية حادة قبل نقطة الالتقاء بالدرفيل بمسافة **10 - 25 ملم**.
- **المزايا:** يثبت الألياف بقوة على وجه اللباد، ويقلل من نفاذ الألياف عبر السلك الخارجي، ويزيد من نعومة الوجه الملامس لليانكي.
- **المحاذير:** يتطلب لزوجة ونفاذية مستقرة للباد لمنع ارتداد المياه.

#### 2. الاصطدام المتوازن في قلب الفجوة (Center Nip Impingement):
- يدخل تيار العجينة مباشرة في عنق الفجوة المتضيقة (Convergence Throat) ملامساً السلك واللباد في اللحظة نفسها.
- **التطبيق:** مثالي لتحقيق أعلى درجات التماثل الهيكلي للورقة وسرعات قصوى تتجاوز 2200 م/دقيقة.

#### 3. الاصطدام على السلك أولاً (Wire Lead):
- يوجه التدفق نحو السلك الخارجي قبل درفيل التشكيل.
- يسرع النزح الفوري، لكنه قد يزيد من فقدان النواعم في مياه الصرف (White Water).

---

### التحكم الدقيق في نسبة سرعة التدفق إلى سرعة السلك (Jet-to-Wire Ratio - J/W):
تعد نسبة $J/W$ أداة التحكم اليومية الأولى لمهندس ومشاغل التيشيو في التحكم في نسبة قوة الشد بالاتجاه الطولي إلى الاتجاه العرضي ($MD/CD\text{ Ratio}$):

$$J/W = \frac{V_{\text{jet}}}{V_{\text{wire}}}$$

- **حيث:**
  - $V_{\text{jet}}$: السرعة الخطية لتيار العجينة الخارج من الشفة (م/دقيقة).
  - $V_{\text{wire}}$: السرعة الخطية لسلك التشكيل (م/دقيقة).

---

### حالات تشغيل نسبة Jet-to-Wire وأثرها على خصائص الورقة:

| حالة التشغيل | نطاق النسبة القياسي ($J/W$) | وضعية الألياف على السلك | نسبة الشد الناتجة ($MD/CD$) | الاستخدام الصناعي الموصى به |
|---|---|---|---|---|
| **السحب (Dragging)** | **0.93 - 0.97** | الألياف تُسحب وتصطف طولياً في اتجاه الحركة (Machine Direction) | **مرتفعة جداً (2.5 - 3.2)** | **مناشف المطبخ والمسحات التجارية (AFH):** مطلوب متانة سحب طولية هائلة لمنع انقطاع الرول في الموزعات |
| **التطابق المتوازن (Square Sheet)** | **0.99 - 1.01** | الألياف تترسب عشوائياً باتجاهات ثلاثية متساوية (Isotropic) | **منخفضة ومتوازنة (1.1 - 1.4)** | **مناديل الوجه الفاخرة (Premium Facial):** تمنح المنديل نعومة حريرية متماثلة عند المسح في أي اتجاه |
| **الدفع (Rushing)** | **1.03 - 1.07** | تيار العجينة أسرع من السلك؛ تتقاطع الألياف وتلتف عرضياً | **معتدلة (1.5 - 1.8)** | زيادة مرونة المنديل بالعرض وتحسين سمك الورقة الحجمي (Bulk) |

---

### استقرار حواف الشيت ومنظومة سحب الرذاذ (Edge Stability & Mist Exhaust):

عند سرعات دوران تفوق 2000 م/دقيقة، يسحب السلك واللباد معه طبقات هواء حدودية تسمى (Boundary Air Layer) تتدفق بسرعة الماكينة:
1. **ستائر الحواف الهيدروليكية (Edge Deckles):**
   - تُركب حواجز تفلونية أو مائية على جانبي صندوق التدفق لمنع تشتت تيار العجينة خارج عرض التشكيل، وضمان حواف مستقيمة خالية من التعرجات.
2. **أحواض تجميع المياه المعزولة (Saveall Pans with Anti-rebound Baffles):**
   - تُزود بجدران حلزونية تبتلع المياه المقذوفة بالطرد المركزي وتوجهها للأسفل دون أن ترتد رذاذاً على الورقة الرطبة.
3. **شفاطات الضباب عالية السحب (Mist Extraction Fans):**
   - تسحب الهواء المشبع بضباب الرذاذ لمنع تكثف قطرات الماء على الهيكل الحديدي وتساقطها (Water Drops) مسببة ثقوباً ميكانيكية وانقطاعات متكررة.
`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },
  // ── COURSE 303: LESSON les-t303-4 ──
  {
    id: 'les-t303-4',
    module_id: 'mod-t303-2',
    title: 'الدليل الميداني لاستكشاف أعطال ماكينات التوين واير وحلها (Twin Wire Troubleshooting Guide)',
    title_en: 'Twin Wire Industrial Troubleshooting Matrix: Pinholes, Edge Waves & Fabric Wear',
    type: 'lesson',
    content: `### الدليل الهندسي لتشخيص وحل مشكلات ماكينات التوين واير:
تتطلب ماكينات التشكيل التوين واير والهلالي (Crescent Formers) استجابة تشغيلية بالغة الدقة؛ فالسرعات الفائقة تعني أن أي خلل هيدروليكي أو ميكانيكي بسيط يتضخم خلال ثوانٍ معدودة مسبباً هدراً هائلاً في الإنتاج وتلفاً مبكراً في الأقمشة باهظة الثمن.

فيما يلي تحليل المشكلات التشغيلية الأكثر شيوعاً وأسبابها الجذرية وطرق علاجها الميدانية:

---

### 1. مشكلة تموج وعدم استقرار حواف الورقة (Edge Waves & Flutter):
- **المظهر الميداني:** تذبذب واضطراب حافة الشيت الرطب بين السلك واللباد، مما يؤدي إلى تشققات الحافة عند الكبس وانقطاع الورقة على اليانكي.
- **الأسباب الجذرية:**
  1. تيار هواء جانبي ناتج عن سرعة الدوران يخلخل الضغط عند أطراف الفجوة.
  2. شفة صندوق التدفق تضخ تدفقاً زائداً أو ناقصاً عند الأطراف بنسبة تتجاوز $\pm 5\%$.
  3. تسريب مياه من ستائر الحواف الجانبية (Edge Deckles).
- **خطة العلاج الفورية:**
  - فحص ملامسة ستائر الحواف للباد وضبط تزييتها المائي بضغط 1.5 بار.
  - تعديل فتحة الميكرومتر الطرفي لصندوق التدفق لخفض التدفق الحافي وضبط بروفايل الوزن.
  - فحص ضغط مروحة سحب ضباب الحواف (Edge Mist Blower).

---

### 2. ظهور الثقوب الدبوسية ونفاذ الألياف (Pinholes & Fiber Bleed-through):
- **المظهر الميداني:** ظهور ثقوب مجهرية متناثرة في شيت المناديل تظهر كنقاط مضيئة عند فحص الرول بالضوء، مع تراكم عجينة ملتصقة على الرولات الداخلية.
- **الأسباب الجذرية:**
  1. شد السلك الخارجي مفرط جداً ($> 11.0\text{ kN/m}$)، مما يعتصر الألياف ويجبرها على اختراق فتحات السلك.
  2. اصطدام تيار العجينة باللباد أو السلك بزاوية عنيفة جداً تؤدي لتمزق موضعي للكعكة الليفية.
  3. تآكل أو اتساع مسامية سلك التشكيل (CFM Fabric Permeability مرتفعة جداً).
- **خطة العلاج الفورية:**
  - خفض شد السلك الخارجي تدريجياً بمقدار $0.5 - 1.0\text{ kN/m}$ ومراقبة ثبات الشيت.
  - ضبط زاوية شفة صندوق التدفق لجعل نقطة الاصطدام أقرب إلى مركز الفجوة.
  - اختيار سلك تشكيل ذي نسيج ثلاثي الطبقات (Triple-layer Fabric) بمسامية محكومة (400 - 450 CFM).

---

### 3. الاهتزاز والتموجات النبضية في الاتجاه الطولي (Barring & MD Pulsations):
- **المظهر الميداني:** تموجات دورية منتظمة في وزن الورقة وسماكتها تتكرر على طول الشيت بتردد ثابت.
- **الأسباب الجذرية:**
  1. ظاهرة التكهف (Cavitation) في مضخة الخلط الرئيسية (Fan Pump).
  2. عدم اتزان ميكانيكي أو تآكل في رولمان بلي درفيل التشكيل (Forming Roll Bearing Wear).
  3. اهتزاز في مخمدات النبض الهيدروليكية (Headbox Attenuator).
- **خطة العلاج الفورية:**
  - فحص ضغط الهواء ومستوى السائل في مخمد النبضات الهوائي (Air Cushion Attenuator).
  - إجراء تحليل الاهتزاز الطيفي (FFT Vibration Analysis) لدرافيل التشكيل ورولمان البلي لتحديد التردد المسبب واستبداله في التوقف المبرمج.

---

### مصفوفة الأعطال الميدانية الشاملة لماكينات التوين واير (Master Twin Wire Matrix):

| العيب المرصود | السبب الجذري الأرجح | خطة العمل العلاجية الحاسمة |
|---|---|---|
| **تساقط قطرات ماء وتكون ثقوب مائية** | انسداد قنوات تفريغ المياه المقذوفة (Saveall Chutes) أو تكثف البخار | 1. تنظيف وصيانة مجاري تصريف مياه الطرد المركزي.<br>2. زيادة سرعة مروحة سحب الضباب الرطب.<br>3. تسخين سقف كابينة التشكيل لمنع التكثف. |
| **تآكل مبكر وموضعي لسلك التشكيل** | احتكاك غير منتظم مع شفرات النزح أو وجود حبيبات رملية | 1. فحص استواء شفرات السيراميك وتغيير القطع المشروخة.<br>2. غسيل دوري لفلاتر مياه التخفيف وإزالة الرواسب الكلسية.<br>3. التحقق من موازنة سرعة السلك مع اللباد بدقة (Fabric Creep < 0.2%). |
| **اختلاف نسبة الشد MD/CD عن الهدف** | انحراف نسبة سرعة التدفق إلى السلك ($J/W Ratio$) | 1. إعادة معايرة حساسات ضغط صندوق التدفق وسرعة السلك.<br>2. تعديل سرعة مضخة الخلط (Fan Pump) لتعديل النسبة نحو 1.0 للمناديل أو 0.95 للمناشف. |
| **هروب رغوة بيضاء على سطح التشكيل** | سحب هواء في مدخل مضخة الخلط أو نقص مضاد الرغوة | 1. فحص منسوب المياه في حوض الشفط لمنع سحب الدوامات الهوائية.<br>2. حقن مضاد رغوة كيميائي (Defoamer) ذي قاعدة سيليكونية في خط الخلط. |
`,
    estimated_minutes: 25,
    order: 4,
    is_free: true,
  },
  // ── COURSE 304: LESSON les-t304-1 ──
  {
    id: 'les-t304-1',
    module_id: 'mod-t304-1',
    title: 'خريطة وتصنيف رشاشات ماكينة التيشيو: من السلك إلى أسطوانة اليانكي',
    title_en: 'Comprehensive Tissue Machine Showers Map: From Wire to Yankee',
    type: 'lesson',
    content: `### الأهمية التشغيلية القصوى لمنظومة الرشاشات في ماكينة التيشيو:
تعد شبكة الرشاشات (Paper Machine Showers) بمثابة **الشرايين الهيدروليكية الحيوية** لماكينة التيشيو. بدون كفاءة هذه المنظومة:
- تنسد مسامات اللبادات بالبوليمرات والألياف خلال ساعات قليلة، مما يرفع رطوبة الورقة ويهدر آلاف الأمتار المكعبة من الغاز الطبيعي على اليانكي.
- تتراكم الرواسب على أسلاك التشكيل مسببة ثقوباً وانقطاعات متكررة.
- يختل فيلم طلاء أسطوانة اليانكي وتتعرض الأسطوانة لعلامات اهتزاز وتآكل كارثي (Chatter Marks).
- تتمزق أطراف الورقة الرطبة وتفشل عملية نزع الشيت عند الانقطاعات.

---

### خريطة منظومات الرش الست الكبرى عبر ماكينة التيشيو:

\`\`\`
[ سلك التشكيل ] ──► [ لباد الكبس ] ──► [ أسطوانة اليانكي ] ──► [ قص الحواف والإسقاط ]
       │                    │                    │                     │
  ┌────┴────┐          ┌────┴────┐          ┌────┴────┐           ┌────┴────┐
  ▼         ▼          ▼         ▼          ▼         ▼           ▼         ▼
HP Wire   LP Wire   HP Felt   LP Lubric.  Yankee   Chemical    Edge Trim  Knock-off
Shower    Shower    Shower    Shower      Boom     Passivation Showers    Showers
\`\`\`

#### 1. الرشاشات المتذبذبة فائقة الضغط (High-Pressure Oscillating Showers - HP Showers):
- **مواقع التركيب:** على مسار عودة لباد الكبس (Felt Return Run)، وعلى مسار عودة سلك التشكيل.
- **ضغط التشغيل:** **15 إلى 35 بار** (200 - 500 PSI) للبادات، و **10 إلى 20 بار** لأسلاك التشكيل.
- **الوظيفة الحيوية:** اختراق عمق الأنسجة وقذف دقائق الألياف المتراصة (Compacted Fibers)، وراتنجات مقاومة البلل (PAE)، والمواد اللاصقة المترسبة (Stickies & Pitch) للحفاظ على النفاذية المائية (CFM Permeability).

#### 2. رشاشات الترطيب والتزييت منخفضة الضغط (Low-Pressure Fan Showers - LP Showers):
- **مواقع التركيب:** قبل شفاطات الفاكيوم (Uhle Boxes)، وفوق رولات توجيه اللباد والسلك.
- **ضغط التشغيل:** **2.0 إلى 5.0 بار** (30 - 75 PSI).
- **الوظيفة الحيوية:** توفير طبقة مائية تزييتية (Lubrication Film) تمنع الاحتكاك الجاف القاتل بين اللباد المتحرك بسرعة 2000 م/د وشرائح السيراميك الثابتة للشفاطات، مما يحمي اللباد من الاهتراء والاحتراق الحراري.

#### 3. مسطرة رش طلاء أسطوانة اليانكي (Yankee Chemical Spray Boom):
- **موقع التركيب:** موجهة نحو سطح أسطوانة اليانكي بعد سكين النظافة (Cleaning Blade) وقبل نيب الكبس (Pressure Roll Nip).
- **ضغط التشغيل:** **1.5 إلى 3.5 بار** مع تحكم حراري دقيق (50°م - 60°م).
- **الوظيفة الحيوية:** رش مزيج كيميائي فائق التجانس يتكون من (البوليمر اللاصق Adhesive، الزيت العازل Release، والمعدل Modifier) لتكوين طبقة ميكرونية مرنة متساوية بالمليمتر عبر عرض الماكينة بالكامل (5.6 متر).

#### 4. فواني قص الحواف المائية فائقة الضغط (Edge Trim Squirt Showers):
- **موقع التركيب:** على طرفي سلك التشكيل لقص حواف الشيت الرطب.
- **ضغط التشغيل:** **40 إلى 70 بار** (600 - 1000 PSI) باستخدام فواني إبرية صلبة ميكرونية.
- **الوظيفة الحيوية:** قطع حواف الورقة الرطبة بقطع ليزري مستقيم فائق الدقة بدون أي شرشخة أو شقوق مجهرية تسبب انقطاع الورقة عند الشد.

#### 5. رشاشات إسقاط الورقة عند الطوارئ (Knock-off Showers):
- **موقع التركيب:** موجهة نحو سلك التشكيل فور خروج الشيت.
- **ضغط التشغيل:** **8 إلى 15 بار** بتدفق حجمي مائي ضخم وغامر.
- **الوظيفة الحيوية:** تعمل آلياً في غضون 0.2 ثانية فور التقاط الخلية الضوئية لانقطاع الورقة على اليانكي لإسقاط الشيت الرطب بالكامل إلى حوض تحت الماكينة (Broke Pulper) لمنع تكدس الورق واختناق الرولات.

---

### جدول المواصفات الهندسية الشامل لمنظومات الرش في ماكينة التيشيو:

| منظومة الرش (Shower System) | نوع الفونية المستخدمة | ضغط التشغيل القياسي (bar) | نوع المياه المستخدمة | معدل استهلاك المياه النموذجي |
|---|---|---|---|---|
| **HP Felt Oscillating Shower** | إبرية نفاثة (Needle 0.8 - 1.0 mm) | **20 - 32 بار** | مياه عذبة مفلترة (< 50 μm) | 80 - 140 لتر/دقيقة |
| **HP Wire Cleaning Shower** | مروحة أو إبرية متذبذبة | **12 - 18 بار** | مياه بيضاء مصفاة فائقة النقاء | 100 - 180 لتر/دقيقة |
| **Uhle Box Lubrication Shower** | مروحة مسطحة (Flat Fan 60°) | **2.5 - 4.0 بار** | مياه بيضاء دافئة مصفاة | 120 - 220 لتر/دقيقة |
| **Yankee Chemical Spray Boom** | مروحة دقيقة أو رذاذ هوائي | **1.8 - 3.2 بار** | مياه منزوعة الأملاح (RO Water) | 3 - 8 لتر/دقيقة كيماويات |
| **Edge Trim Squirt Nozzles** | إبرية ياقوتية صلبة (0.3 - 0.5 mm) | **45 - 65 بار** | مياه عذبة نقية جداً | 1.5 - 3.0 لتر/دقيقة |
| **Roll Cleaning Showers** | مروحة عريضة (Flat Fan 90°) | **2.0 - 3.5 بار** | مياه بيضاء مصفاة | 80 - 150 لتر/دقيقة |
`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },
  // ── COURSE 304: LESSON les-t304-2 ──
  {
    id: 'les-t304-2',
    module_id: 'mod-t304-1',
    title: 'مورفولوجيا وأنواع الفواني وميكانيكا الرذاذ (Needle, Flat Fan, Atomizing & Self-Cleaning)',
    title_en: 'Nozzle Morphology, Spray Mechanics: Needle, Fan, Atomizing & Self-Cleaning',
    type: 'lesson',
    content: `### فيزياء ومورفولوجيا فواني الرش (Nozzle Physics & Fluid Mechanics):
ليست الفونية مجرد ثقب لخروج الماء، بل هي **محول طاقة هيدروديناميكي دقيق** يحول طاقة الضغط الكامنة في أنبوب الرش إلى طاقة حركية موجهة (Kinetic Energy) تشكل الرذاذ بالشكل والسرعة والزاوية المطلوبة لخدمة هدف تشغيلي محدد.

---

### الأنواع الأربعة الرئيسية لفواني ماكينة التيشيو:

\`\`\`
1. فواني الإبرة النفاثة           2. فواني المروحة المسطحة
   (Needle / Solid Stream)         (Flat Fan Spray)
   [ تيار مركز فائق الاصطدام ]     [ ستارة رذاذية منتظمة ]
              │                               │
              ▼                               ▼
3. فواني الرذاذ الميكروني        4. الفواني ذاتية التنظيف
   (Air-Atomizing Nozzles)         (Self-Cleaning Shower Assembly)
   [ قطرات ميكرونية للطلاء ]       [ فرشاة داخلية ضد الانسداد ]
\`\`\`

---

### 1. فواني الإبرة النفاثة المصمتة (Needle / Solid Stream Nozzles):
- **المبدأ الفيزيائي:** توجيه تيار مائي أسطواني مصمت ومتماسك تماماً دون أي انتشار أو تفتت في الهواء، لتركيز كامل طاقة الضغط على أصغر مساحة ممكنة لحظة الاصطدام بسطح اللباد أو السلك.
- **معادلة قوة الاصطدام الحركي النفاث (Impact Force Equation):**

$$I_{\text{impact}} = \frac{\dot{m} \cdot v}{A_{\text{target}}} = \rho \cdot Q \cdot \sqrt{\frac{2 \cdot \Delta P}{\rho}} \cdot \frac{1}{A_{\text{target}}}$$

- **الأثر الهندسي:**
  - قوة اصطدام الفونية الإبرية أعلى بنحو **15 إلى 25 ضعفاً** من فونية المروحة لنفس معدل استهلاك المياه والضغط!
  - تتيح للماء اختراق عمق قماش اللباد وتفتيت جزيئات الصمغ العالقة بين الألياف دون الإضرار بتركيب الصوف السطحي (Batt fibers).
- **خامات التصنيع المقاومة للتآكل:**
  - لا تُصنع فواني الضغط العالي من الإستانلس ستيل العادي لأن الاحتكاك المائي فائق السرعة يوسع ثقبها خلال أيام!
  - تُصنع من حجر **الياقوت الصناعي (Ruby / Sapphire Orifice)** أو كاربيد التنجستن (Tungsten Carbide) لضمان ثبات قطر الفوهة لشهور طويلة.

---

### 2. فواني المروحة المسطحة (Flat Fan Spray Nozzles):
- **المبدأ الفيزيائي:** يمر تيار الماء عبر فتحة بيضاوية مقعرة، لينبسط على شكل ستارة مسطحة مثلثة الشكل ذات حواف متدرجة النقصان (Tapered-edge pattern).
- **زوايا الرش القياسية (Standard Spray Angles):**
  - **$15^\circ$ إلى $30^\circ$:** مروحة ضيقة، تركيز اصطدام أعلى (تستخدم لتنظيف الرولات وغسيل حواف السلك).
  - **$60^\circ$ إلى $90^\circ$:** مروحة متوسطة إلى عريضة (المعيار الأكثر انتشاراً لتزييت شفاطات اللباد وغسيل أقمشة التشكيل).
  - **$110^\circ$:** مروحة عريضة جداً (تستخدم عندما تكون ماسورة الرش قريبة جداً من السطح).
- **منحنى التوزيع العرضي (Parabolic Flow Distribution):**
  - كثافة الماء تكون في قمتها في منتصف زاوية الرش، وتتلاشى تدريجياً نحو الأطراف. هذا التلاشي التدريجي مقصود هندسياً لتمكين تداخل (Overlap) الفواني المجاورة لتكوين ستارة مائية متجانسة 100%.

---

### 3. فواني الرذاذ الميكروني بالهواء المضغوط (Air-Atomizing Nozzles):
- **المبدأ:** خلط تيار الكيماويات السائلة مع تيار هواء مضغوط داخل حجرة خلط ميكرونية داخل الفونية.
- **التطبيق في أسطوانة اليانكي:**
  - تفتيت قطرات البوليمر إلى جزيئات ميكرونية متناهية الصغر (**قطر 20 إلى 40 ميكرون**).
  - منع تكون قطرات خشنة على سطح اليانكي، مما يضمن غشاء طلاء ناعم كالمرايا وخالٍ من التموجات.

---

### 4. أنظمة الرشاشات ذاتية التنظيف (Self-Cleaning Internal Brush Showers):
انسداد فوهة واحدة في رشاش اللباد يعني جفاف وتصلب مسار كامل بعرض الورقة وتلف اللباد! لذا تُزود مواسير الرش بمنظومة تنظيف ذاتي ميكانيكية متطورة:

\`\`\`
[ محبس التفريغ Flush Valve ] ◄── [ عمود الفرشاة الداخلية ] ◄── [ طارة التدوير اليدوي أو المحرك ]
\`\`\`

- **طريقة العمل الميدانية:**
  1. يوجد داخل ماسورة الرش عمود فولاذي مزود بفرش نايلون أو سلكية حلزونية تدور فوق الفتحات الداخلية لجميع الفواني.
  2. عند فتح محبس التفريغ الجانبي (Flush Valve) وتدوير الفرشاة (يدوياً أو آلياً كل ساعة بمؤقت)، تقوم الفرشاة بكنس العوالق والألياف ودفعها خارج طرف الماسورة دون توقف ضخ المياه ودون الحاجة لإيقاف الماكينة نهائياً!
`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },
  // ── COURSE 304: LESSON les-t304-3 ──
  {
    id: 'les-t304-3',
    module_id: 'mod-t304-2',
    title: 'الحسابات الهندسية لزوايا الفواني والمسافات ونسبة الأوفرلاب والتداخل (Spray Geometry & Overlap)',
    title_en: 'Spray Geometry: Spray Angle, Stand-off Distance & Overlap Calculations',
    type: 'lesson',
    content: `### الهندسة التطبيقية لحسابات توزيع الرش ونسبة الأوفرلاب (Overlap %):
إن ضبط المسافات الهندسية بين فواني الرشاش وارتفاعها عن السطح هو العامل الحاسم لمنع ظهور المشكلتين الأكثر شيوعاً في مصانع التيشيو:
1. **الخطوط الجافة غير المغسولة (Streaking):** ناتجة عن تباعد الفواني وعدم كفاية التداخل.
2. **الخطوط المائية الغزيرة (Heavy Wet Lines):** ناتجة عن تصادم أجنحة الرذاذ في الهواء وارتدادها بشكل كثيف.

---

### 1. المعادلة الهندسية لعرض تغطية الفونية الواحدة (Spray Coverage Width):
يُحسب عرض ستارة الرش المفرودة على سطح اللباد أو السلك ($W$) بدلالة زاوية فتحة الفونية ($\theta$) والارتفاع الرأسي لماسورة الرش ($H$):

$$W = 2 \cdot H \cdot \tan\left(\frac{\theta}{2}\right)$$

- **حيث:**
  - $W$: عرض التغطية الناتجة على السطح بالـ (ملم mm).
  - $H$: ارتفاع الفونية عن سطح اللباد/السلك (Stand-off Distance بالـ ملم mm).
  - $\theta$: زاوية مخروط الرش الاسمي للفونية (Spray Angle بالدرجات).

#### مثال حسابي تطبيقي:
ماسورة رش مركبة فوق لباد الكبس على ارتفاع $H = 200\text{ mm}$، ومثبت عليها فواني مروحة بزاوية $\theta = 60^\circ$.
احسب عرض تغطية الفونية الواحدة على اللباد:

$$W = 2 \times 200 \times \tan(30^\circ) = 400 \times 0.577 = 230.9\text{ mm} \approx 231\text{ mm}$$

---

### 2. المعادلة الهندسية لحساب نسبة الأوفرلاب والتداخل (Spray Overlap Percentage):
يُعرف الأوفرلاب بأنه نسبة مساحة الرذاذ المتداخلة بين فونيتين متجاورتين مقارنة بعرض التغطية الفردي:

$$\text{Overlap (\%)} = \left( \frac{W - P}{W} \right) \times 100$$

- **حيث:**
  - $W$: عرض التغطية للفونية الواحدة (ملم).
  - $P$: المسافة المركزية بين كل فونيتين متجاورتين على الماسورة (Nozzle Pitch / Spacing بالـ ملم).

#### مثال حسابي للمهندس:
في المثال السابق ($W = 231\text{ mm}$)، إذا كانت المسافة بين الفواني على الماسورة $P = 150\text{ mm}$.
احسب نسبة التداخل الناتجة:

$$\text{Overlap (\%)} = \left( \frac{231 - 150}{231} \right) \times 100 = \left( \frac{81}{231} \right) \times 100 = 35.1\% \approx 35\%$$

---

### القواعد الهندسية الذهبية لنسبة الأوفرلاب في ماكينات التيشيو:

| التطبيق التشغيلي | نسبة الأوفرلاب المستهدفة | الهدف الهندسي |
|---|---|---|
| **رشاشات تزييت شفاطات الفاكيوم (Uhle Box Showers)** | **50% إلى 100% (تداخل ثنائي Double Coverage)** | ضمان تشكيل فيلم مائي مستمر لا ينقطع إطلاقاً على عرض اللباد بالكامل لمنع أي حرق موضعي |
| **رشاشات غسيل اللباد منخفضة الضغط (LP Felt Showers)** | **50% إلى 75%** | موازنة كميات المياه وإتاحة تداخل الأطراف المتلاشية لتكوين بروفايل مائي مستوٍ (Flat Profile) |
| **مسطرة رش طلاء أسطوانة اليانكي (Yankee Chemical Boom)** | **100% إلى 150% (Double to Triple Overlap)** | استواء ميكروني مطلق لفيلم البوليمر اللاصق؛ أي تباين في الطلاء يخلق بقع تفحم واهتزاز للسكين |
| **رشاشات الضغط العالي المتذبذبة (HP Oscillating Showers)** | **0% إلى 10% (تغطية خطية متذبذبة بمحاذاة الشوط)** | عدم تداخل النفاثات النفاذة لمنع حفر اللباد، مع الاعتماد على التذبذب الميكانيكي لتغطية 100% من السطح |

---

### 3. زاوية ميلان الفونية وتفادي التصادم الرذاذي (Nozzle Offset Angle):
> ⚠️ **خطأ كارثي يقع فيه الكثير من الفنيين:**
> تركيب فواني المروحة المسطحة بحيث تكون أجنحة الرذاذ في خط مستقيم واحد موازٍ تماماً لمحور الماسورة!
> **النتيجة الكارثية:** تتصادم أطراف الرذاذ للفواني المتجاورة في الهواء وجهاً لوجه، مما يكسر الستارة المائية ويحول نقاط التداخل إلى حبال وخطوط مائية غزيرة تسقط كالمزاريب مسببة تدمير بروفايل رطوبة الورقة.

#### الحل الهندسي القياسي:
- يجب **إمالة محور كل فونية بزاوية $5^\circ$ إلى $15^\circ$** عن محور ماسورة الرش (Offset Angle).
- **النتيجة الفيزيائية:** تمر أطراف الرذاذ بجوار بعضها البعض بسلاسة متراكبة (تتجاوز بعضها دون تصادم مباشر)، مما يمنح اللباد ستارة مائية متجانسة وانسيابية بدون أي خطوط تصادمية.
`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },
  // ── COURSE 304: LESSON les-t304-4 ──
  {
    id: 'les-t304-4',
    module_id: 'mod-t304-2',
    title: 'هندسة التذبذب الميكانيكي ومزامنة الشوط وفلترة المياه ومشاكل الفواني الميدانية',
    title_en: 'Shower Oscillation Synchronization, Water Filtration & Field Troubleshooting',
    type: 'lesson',
    content: `### هندسة التذبذب الميكانيكي ومزامنة الشوط (Shower Oscillation Mechanics):
في رشاشات الضغط العالي (HP Showers) التي تستخدم فواني إبرية نفاثة (Needle Nozzles)، تكون قوة التدفق الحركي مركزة وهائلة للغاية. إذا توقفت الماسورة عن الحركة لثوانٍ معدودة، فإن النفاثات ستقوم **بحفر خطوط غائرة في نسيج اللباد** وإتلافه بالكامل!

لذا تُربط مواسير الرش بمحركات تذبذب كهروميكانيكية متطورة (Electromechanical Servo Oscillators) تحرك الماسورة ذهاباً وإياباً بحسابات رياضية فائقة الدقة.

---

### 1. المعادلة الهندسية لمزامنة سرعة التذبذب مع سرعة اللباد والماكينة:
تضمن المزامنة ألا تمر دورة كاملة للباد دون أن تغطي الفونية مساراً جديداً مجاوراً، وألا تترك أي خطوط مهملة دون غسيل (Shadow Streaks):

$$V_{\text{oscillator}} \le \frac{d_{\text{jet}} \cdot V_{\text{machine}}}{L_{\text{felt}}}$$

- **حيث:**
  - $V_{\text{oscillator}}$: أقصى سرعة حركة مسموحة لمحرك تذبذب الرشاش بالـ (ملم/دقيقة).
  - $d_{\text{jet}}$: قطر نفاث الفونية على سطح اللباد (عادة 1.0 إلى 1.5 ملم).
  - $V_{\text{machine}}$: سرعة تشغيل ماكينة التيشيو بالـ (متر/دقيقة).
  - $L_{\text{felt}}$: الطول الإجمالي للباد الكبس بالـ (متر).

#### مثال حسابي للمهندس:
ماكينة تيشيو تعمل بسرعة $V_{\text{machine}} = 1800\text{ m/min}$، طول اللباد $L_{\text{felt}} = 30\text{ m}$، وقطر نفاث الفونية $d_{\text{jet}} = 1.0\text{ mm}$.
احسب أقصى سرعة تذبذب مسموحة للماسورة:

$$V_{\text{oscillator}} \le \frac{1.0\text{ mm} \times 1800\text{ m/min}}{30\text{ m}} = \frac{1800}{30} = 60\text{ mm/min}$$

> 💡 **القاعدة الميدانية:**
> يجب أن تتحرك ماسورة الرش ببطء محسوب ($< 60\text{ mm/min}$ في هذا المثال)، بحيث يتحرك نفاث الماء مسافة تساوي قطر الفونية فقط مع كل لفة كاملة للباد!
> ضبط طول شوط التذبذب ($Stroke$): يجب أن يساوي طول الشوط المسافة بين الفواني على الماسورة بالضبط ($Stroke = P = 150\text{ mm}$)!

---

### 2. متطلبات جودة المياه ومراحل الفلترة الهيدروليكية (Water Quality & Filtration):
تحتاج منظومة الرشاشات إلى مياه نقية خالية من الشوائب العالقة والأملاح؛ فانسداد فونية واحدة قد يوقف الماكينة بالكامل:
1. **الفلاتر المزدوجة المضغوطة (Duplex Pressure Strainers):**
   - تُركب على مدخل كل ماسورة رش بفتحات سلكية دقيقة لا تتعدى **75 إلى 100 ميكرون**.
   - يسمح التصميم المزدوج بعزل وتنظيف أحد الفلاتر أثناء عمل الفلتر الآخر دون قطع المياه عن الماكينة.
2. **عسر المياه والتحكم في الكلس (Water Hardness & Scaling):**
   - يجب ألا يتعدى عسر المياه **$50 - 100\text{ ppm}$** كربونات كالسيوم.
   - المياه العسرة تؤدي لترسب الكلس وانسداد فوهات الفواني الدقيقة واختناق ثقوب اللباد.
3. **درجة الحموضة (pH):**
   - ضبط الأس الهيدروجيني لمياه الرش بين **6.8 إلى 7.5** لمنع تآكل خامات النحاس والإستانلس ستيل.

---

### 3. دليل استكشاف وحل مشكلات الرشاشات والفواني الميدانية (Troubleshooting Matrix):

| العطل التشغيلي المرصود | السبب الجذري الأرجح | خطة العمل العلاجية الفورية للمهندس |
|---|---|---|
| **ظهور خطوط رطوبة طولية على الورقة (Wet Streaks)** | انسداد فونية واحدة أو تآكل فوهتها مما يضخ تدفقاً شاذاً | 1. فحص بروفايل الرش وتدوير فرشاة التنظيف الذاتي للماسورة.<br>2. قياس تدفق الفونية المشتبه بها واستبدالها إذا زاد تدفقها بنسبة > 10%. |
| **حفر وتآكل أخدودي في اللباد (Felt Grooving / Wear)** | توقف محرك التذبذب الميكانيكي مع استمرار ضخ الضغط العالي (HP)! | 1. إيقاف ضغط HP فوراً.<br>2. صيانة محرك وسيرفو التذبذب (Oscillator Drive).<br>3. ربط نظام حماية آلي يقطع ضغط الرش فور توقف حركة الماسورة (Interlock Protection). |
| **تكون ضباب كثيف ورذاذ مائي حول الماكينة (Shower Mist)** | ضغط رش مفرط أو استخدام زوايا رش غير ملائمة | 1. خفض ضغط الرشاش إلى الحد الأدنى المحقق للنظافة.<br>2. تركيب ستائر مطاطية مانعة لانتشار الرذاذ (Splash Guards).<br>3. فحص كفاءة مراوح سحب الضباب. |
| **ظهور خطوط غسيل متقطعة على اللباد (Tiger Striping)** | سرعة التذبذب سريعة جداً وغير متوافقة مع دوران اللباد | 1. إعادة معايرة سرعة شوط التذبذب وفق معادلة المزامنة.<br>2. التأكد من أن طول الشوط يساوي المسافة بين الفواني (Stroke = Pitch). |
| **تقطع حواف الورقة عند السحب** | تآكل أو انسداد فواني قص الحواف (Edge Trim Squirt) | 1. استبدال فوهات الياقوت لفواني القص (Ruby Inserts).<br>2. ضبط ضغط فواني القص على 50 - 60 بار بزاوية قطع 90° قائمة. |
`,
    estimated_minutes: 25,
    order: 4,
    is_free: true,
  },

  // ── COURSE 305: LESSON les-t305-1 ──
  {
    id: 'les-t305-1',
    module_id: 'mod-t305-1',
    title: 'ميكانيزم تشكل واستواء فيلم الكوتنج ودورة حياته (Film Formation & Leveling)',
    title_en: 'Coating Film Formation, Leveling Kinetics & Viscoelastic Window',
    type: 'lesson',
    content: `### ديناميكا تشكل واستواء فيلم الكوتنج على أسطوانة اليانكي (Film Formation & Leveling Kinetics):

يُعد **فيلم الكوتنج (Yankee Coating Film)** على سطح أسطوانة اليانكي هو قلب عملية صناعة ورق التيشيو الناعم، والركيزة الهندسية الفاصلة بين تحقيق كريب ناعم فائق الامتصاص أو التسبب في كوارث تشغيلية تبدأ من تآكل الأسطوانة وتعرج الشفرة وتنتهي بالانقطاعات المتكررة للورق.

---

### 1. دورة حياة فيلم الكوتنج خلال دورة اليانكي الواحدة (360° Life Cycle):

خلال دوران أسطوانة اليانكي (التي تدور بسرعة تتراوح بين $900$ إلى $2200\text{ m/min}$ بمحيط يتراوح بين $15$ إلى $18\text{ متراً}$)، يمر فيلم الكوتنج بدورة فيزيائية وكيميائية متناهية الدقة والسرعة (تستغرق الدورة الواحدة ما بين $0.4$ إلى $1.1\text{ ثانية}$ فقط):

\`\`\`
                                  [شفرة التكريب Creping Doctor]
                                       | (تقشير الورق + تجديد الفيلم)
                                       v
                                [شفرة التنظيف Cleaning Doctor] (إن وجدت)
                                       v
   [عارضة الرشاش Spray Boom] ===> رش الكيميائيات المائية المخففة (0.5% - 2.5% Solids)
                                       v
   [منطقة التبخير الفلاشي Flash Evaporation] ===> تبخر الماء واستواء السائل (Leveling Zone)
                                       v
   [مكبس الضغط Press Nip] <=== التحام الفرشة الرطبة (Sheet Transfer & Embedding)
                                       v
   [منطقة التجفيف تحت الهود Drying Hood] ===> بلمرة وتشابك وتصلب الفيلم مع تجفيف الورق
                                       v
                                [العودة لشفرة التكريب]
\`\`\`

---

### 2. مثلث كيمياء الكوتنج وتوازن المكونات الأساسية:

يتكون محلول الكوتنج المطبق من عارضة الرشاش من ثلاثة عناصر كيميائية رئيسية تعمل معاً بتناغم دقيق:

| المكون الكيميائي | التركيب الوظيفي | الدور الهندسي الأساسي | نسبة الإضافة النموذجية |
| :--- | :--- | :--- | :--- |
| **اللاصق الأساسي (Base Adhesive)** | بوليمرات بولي أميد إبيكلوروهيدرين (PAE) أو بولي فينيل ألكوهول (PVOH) | ربط الورق بسطح اليانكي، وتوفير طبقة حماية عضوية مانعة لاحتكاك المعدن بالمعدن | $1.0 - 4.5\text{ mg/m}^2$ |
| **مادة التحرير (Release Agent)** | مستحلبات زيوت معدنية، إسترات نباتية، ومخففات توتر سطحي (Surfactants) | تعديل قوة الالتصاق، وتسهيل انفصال الورق عن الشفرة، وتليين الفيلم | $0.5 - 2.5\text{ mg/m}^2$ |
| **المعدل/الملين (Modifier / Plasticizer)** | بوليولات سكرية، بولي إيثيلين جلايكول، وأملاح رطوبية (Hygroscopic polyols) | ضبط مرونة الفيلم، منع التزجيج، وتوسيع نافذة اللزوجة والمرونة ($T_g$) | $0.2 - 1.5\text{ mg/m}^2$ |

---

### 3. النافذة اللزجة المرنة (Viscoelastic Tack Window) واستواء الفيلم:

لكي يعمل فيلم الكوتنج بكفاءة، يجب أن تكون لزوجته ومرونته متوازنتين عبر دالة الفقد الميكانيكي:
$$\tan \delta = \frac{G''}{G'}$$
حيث:
- $G'$ هو معامل المرونة التخزيني (Storage Modulus) الذي يمثل صلابة ومقاومة الفيلم.
- $G''$ هو معامل الفقد اللزج (Loss Modulus) الذي يمثل قدرة الفيلم على التدفق والالتصاق.

إذا كانت درجة حرارة الفيلم أقل من **درجة التحول الزجاجي ($T_g$)**، يصبح الفيلم زجاجياً صلباً سريع التفتت، بينما إذا تجاوزت الحرارة نافذة البلمرة القصوى، يتحول إلى طبقة محروقة فاقدة لخاصية اللزوجة.

---

### 4. حسابات معدل الرش وسماكة الفيلم المجهري:

يُحسب معدل تطبيق الكيميائيات الجافة لكل متر مربع من سطح اليانكي بالمعادلة الهندسية التالية:
$$\text{Coating Add-on (mg/m}^2) = \frac{F \times C \times 10^6}{S \times W}$$
حيث:
- $F$: تدفق محلول الرش الكلي ($\text{L/min}$).
- $C$: تركيز المواد الصلبة في المحلول ($\text{kg solids / L solution}$).
- $S$: سرعة أسطوانة اليانكي ($\text{m/min}$).
- $W$: عرض سطح الرش الفعال للأسطوانة ($\text{m}$).

> **قاعدة ذهبية:** يتراوح سمك فيلم الكوتنج الجاف الفعال على اليانكي بين **$1.0$ إلى $5.0\text{ ميكرومتر}$** فقط. أي تفاوت أو عدم استواء في هذا السمك ينعكس فوراً على انتظام الكريب واهتزاز الشفرات.`,
    estimated_minutes: 30,
    order: 1,
    is_free: true,
  },

  // ── COURSE 305: LESSON les-t305-2 ──
  {
    id: 'les-t305-2',
    module_id: 'mod-t305-1',
    title: 'الاستواء المبكر والتصلب السابق لأوانه (Early Leveling / Premature Curing)',
    title_en: 'Early Leveling & Premature Curing: Mechanisms, Symptoms & Cures',
    type: 'lesson',
    content: `### الاستواء المبكر والتصلب السابق لأوانه (Early Leveling & Premature Curing):

يحدث **الاستواء المبكر (Early Leveling)** أو التصلب السابق لأوانه عندما تكتمل عملية تبخر المياه وبلمرة لاصق الكوتنج وتصلبه إلى حالته النهائية **قبل** وصول الفرشة الورقية الرطبة إلى نقطة مكبس الضغط (Press Nip).

---

### 1. الميكانيزم الفيزيائي لحدوث الاستواء المبكر:

في الظروف الطبيعية، يجب أن يظل الفيلم في حالة لزجة مرنة (Tacky / Viscoelastic state) لحظة مرور الشيت في منطقة مكبس الضغط لكي تنغرس الألياف السطحية وتلتصق بالفيلم. في حالة التصلب المبكر:
1. يتبخر الحامل المائي بسرعة فائقة نتيجة الحرارة المرتفعة جداً في قطاع ما بعد الشفرة.
2. يتشابك بوليمر الـ PAE بالكامل ويصل إلى مرحلة التزجيج التام (Vitrification / Complete Curing).
3. يصبح الفيلم سطحاً صلباً لامعاً شديد الجفاف وعديم الالتصاق السطحي ($G' \gg G''$).

---

### 2. المظاهر التشغيلية للاستواء المبكر على ماكينة التيشيو:

عندما تعاني الماكينة من استواء مبكر، تظهر العلامات الهندسية والميدانية التالية فوراً:

| المظهر الميداني | المشاهدة العينية والقياسية | التفسير الفيزيائي الميكانيكي |
| :--- | :--- | :--- |
| **تزجيج سطح اليانكي (Surface Glazing)** | سطح الأسطوانة يلمع مثل المرآة المصقولة، ويكون الفيلم رقيقاً وقاسياً جداً | جفاف مبكر وتبلور مفرط لسلاسل البوليمر قبل ضغط الورق |
| **رفرفة وانتفاخ الورق (Sheet Flapping / Blistering)** | انتفاخ الشيت وابتعاده عن سطح اليانكي تحت غطاء الهود وظهور فقاعات هوائية | فشل الألياف في الالتصاق بالفيلم المتصلب عند نيب المكبس |
| **تآكل الشفرة وظهور التموجات (Chatter Marks)** | تآكل مسنن أو شطف غير منتظم لحافة الشفرة وسماع أزيز عالي التردد | اصطدام حافة الشفرة بطبقة كوتنج صلبة تزيد قوى الاحتكاك المباشر |
| **كريب خشن وضعف النعومة (Coarse Crepe Structure)** | انخفاض عدد طيات الكريب ($< 15\text{ folds/cm}$) وارتفاع خشونة السطح | عدم تغلغل الشفرة أسفل قاعدة الورق لغياب المرونة اللزجة |

---

### 3. الأسباب الجذرية للاستواء المبكر (Root Causes):

\`\`\`
                               [ارتفاع حرارة قشرة اليانكي Shell Temp > 115°C]
                                                   +
                             [موضع الرشاش بعيد جداً عن المكبس Long Dwell Time]
                                                   +
   [خلطة كيميائية شديدة التشابك High PAE / Zero Modifier] ===> [استواء مبكر وتزجيج كامل]
                                                   +
                              [رطوبة شيت الداخل شديدة الجفاف Moisture < 58%]
\`\`\`

1. **انخفاض نسبة الملين/المعدل (Modifier Deficit):** غياب المادة التي تخفض درجة $T_g$ وتبقي الفيلم ليناً.
2. **ضغط بخار مفرط في قطاع الرش:** تشغيل اليانكي بضغط بخار أعلى من المطلوب لسرعة الماكينة الحالية.
3. **ضعف ترطيب الرشاش:** انخفاض معدل تدفق المياه الكلي مع زيادة تركيز المواد الصلبة عن $3\%$.
4. **سرعة ماكينة منخفضة مع ثبات طاقة التجفيف:** زيادة زمن بقاء الفيلم السائل معرضاً لحرارة المعدن.

---

### 4. الإجراءات العلاجية الفورية وطويلة الأجل:

- **العلاج السريع في غرفة التحكم:**
  1. زيادة نسبة **المعدل/الملين (Modifier)** بنسبة $15\% - 30\%$ فوراً لخفض صلابة الفيلم.
  2. زيادة تدفق المياه العذبة لمحلول الرش (تخفيف التركيز وزيادة تبريد السطح بتبخير مياه إضافية).
  3. خفض ضغط بخار اليانكي بمقدار $0.2 - 0.5\text{ bar}$ إن أمكن.
  4. تقريب عارضة الرشاش باتجاه مكبس الضغط (تقليل الـ Dwell Time).`,
    estimated_minutes: 30,
    order: 2,
    is_free: true,
  },

  // ── COURSE 305: LESSON les-t305-3 ──
  {
    id: 'les-t305-3',
    module_id: 'mod-t305-2',
    title: 'الاستواء المتأخر والفيلم الرطب اللزج (Late Leveling / Delayed Curing)',
    title_en: 'Late Leveling & Delayed Curing: Symptoms, Gummy Buildup & Remedies',
    type: 'lesson',
    content: `### الاستواء المتأخر والفيلم الرطب اللزج (Late Leveling & Delayed Curing):

يُمثل **الاستواء المتأخر (Late Leveling)** أو بطء التصلب (Delayed Curing) الحالة العكسية الخطيرة، حيث يصل فيلم الكوتنج إلى شفرة التكريب وهو لا يزال رطباً، غروياً، ولزجاً للغاية (Soft, Under-cured & Gummy Film) دون اكتمال بلمرته وجفافه.

---

### 1. الميكانيزم الفيزيائي للاستواء المتأخر:

في هذه الحالة، يكون معامل الفقد اللزج أعلى بكثير من المطلوب ($G'' \gg G'$) لحظة اصطدام الورق بحافة شفرة التكريب:
- لم يتبخر المحتوى المائي بالكامل من الفيلم بسبب كثرة مياه الرش أو برودة سطح اليانكي.
- ترتفع قوة الالتصاق الهيكلي (Adhesive Tack) إلى درجات قصوى تفوق قوة الشد الذاتية للألياف السليلوزية المبللة.
- بدلاً من أن تقوم الشفرة بفصل الورق النظيف وتكوين طيات كريبية منتظمة، فإنها "تكشط" معجوناً طينياً لزجاً مختلطاً بالألياف المعجونة.

---

### 2. المظاهر التشغيلية للاستواء المتأخر:

| المظهر الميداني | المشاهدة العينية والقياسية | التفسير الفيزيائي الميكانيكي |
| :--- | :--- | :--- |
| **نتف الألياف (Fiber Picking & Pulls)** | ظهور ثقوب مجهرية في الشيت والتصاق خصل ألياف على سطح الأسطوانة | قوة التصاق الفيلم الرطب تفوق تماسك شبكة الألياف السليلوزية |
| **انسداد الشفرة وتراكم المعجون (Blade Plugging)** | تجمع عجين غروي بني أو رمادي لزج خلف شفرة التكريب وأسفل حامل الشفرة | كشط الفيلم غير المتصلب مع الألياف المقتلعة وتراكمه ككتل طينية |
| **تقطع مفاجئ للورق (Sheet Snap-offs)** | انفجار وانقطاع الورق عند حافة الشفرة بمجرد لمسها بدون تمهيد | الشد المفاجئ الناتج عن الالتصاق العنيف بالأسطوانة |
| **تطاير غبار لزج (Sticky Dust Generation)** | تراكم كتل غبار ملتصقة بشدة على دكتات الهود وكراسي الرشاش | تناثر جزيئات بوليمر لزجة غير مكتملة التصلب في تيار الهواء |

---

### 3. الأسباب الجذرية للاستواء المتأخر (Root Causes):

\`\`\`
                              [انخفاض حرارة قشرة اليانكي Shell Temp < 95°C]
                                                   +
                             [محتوى مائي مفرط في الرشاش Dilution Too High]
                                                   +
   [إفراط في مادة التحرير أو لاصق بطيء Curing Lag] ===> [استواء متأخر وعجين لزج]
                                                   +
                            [رطوبة الشيت الداخل مرتفعة جداً Press Nip < 38% Dry]
\`\`\`

1. **انخفاض كفاءة تجفيف الهود أو هبوط ضغط بخار اليانكي:** عجز حراري يمنع التبخر الفلاشي.
2. **ارتفاع مفرط في رطوبة الفرشة القادمة من المكبس:** إدخال كميات ماء تبرّد سطح الفيلم وتعيق البلمرة.
3. **الإفراط في مادة التحرير (Over-release):** استخدام كميات تجعل الفيلم زلقاً ورخواً غير قادر على بناء بنية ثلاثية الأبعاد.
4. **تلوث مياه الرشاش بالمواد العالقة أو الـ pH غير المناسب:** يعمل الـ pH الحامضي الشديد أو القلوي على تعطيل تشابك الـ PAE.

---

### 4. الإجراءات العلاجية الفورية والتشغيلية:

- **العلاج السريع في غرفة التحكم:**
  1. خفض نسبة **مادة التحرير (Release Agent)** فوراً بنسبة $10\% - 20\%$.
  2. رفع طاقة التجفيف (زيادة حرارة هواء الهود Hood Temp أو رفع ضغط بخار اليانكي).
  3. فحص كفاءة نزح مكبس الضغط (Press Nip De-watering) لرفع جفاف الشيت الداخل فوق $40\%$.
  4. تقليل تدفق المياه لمحلول الرش لزيادة تركيز المواد الصلبة وتخفيف الحمل المائي على السطح.`,
    estimated_minutes: 30,
    order: 3,
    is_free: true,
  },

  // ── COURSE 305: LESSON les-t305-4 ──
  {
    id: 'les-t305-4',
    module_id: 'mod-t305-2',
    title: 'الدليل الميداني والمصفوفة الصناعية لضبط استواء الكوتنج (Master Coating Matrix)',
    title_en: 'Master Yankee Coating Matrix, Visual Diagnosis & Trouble-Shooting',
    type: 'lesson',
    content: `### الدليل الميداني والمصفوفة الصناعية لضبط استواء الكوتنج (Master Yankee Coating Matrix):

لتحقيق أعلى درجات الاستقرار الميكانيكي وجودة التيشيو، يعتمد مهندسو التشغيل على قراءة الحالة البصرية والميكانيكية لفيلم الكوتنج لضبطه في "المنطقة الخضراء" (The Sweet Spot).

---

### 1. مصفوفة تشخيص الكوتنج حسب المظهر واللون (Visual & Color Assessment):

| لون ومظهر الفيلم | التشخيص الفيزيائي | الحالة التشغيلية | التدخل الهندسي الفوري المطلوب |
| :--- | :--- | :--- | :--- |
| **بني ذهبي خفيف / برونزي شفاف (Light Bronze / Golden)** | سمك مثالي وتصلب متوازن في النافذة اللزجة المرنة | **حالة مثالية (Target Optimum)** | الحفاظ على المعدلات والبارامترات الحالية وتوثيقها |
| **أبيض حليبي / غائم (Milky / Cloudy Coating)** | احتباس مائي واستواء متأخر مع تشتت غير متجانس | **استواء متأخر (Under-cured)** | خفض مياه الرش، زيادة حرارة التجفيف، فحص استقامة الفواني |
| **شفاف كالزجاج / عاكس (Glassy / Mirror Glaze)** | استواء مبكر وتزجيج مفرط وجفاف كامل لسلاسل البوليمر | **استواء مبكر (Premature Curing)** | زيادة الملين (Modifier)، تقليل ضغط البخار، زيادة الرشاش |
| **بني غامق / متفحم (Dark Brown / Carbonized)** | احتراق الفيلم وتراكم طبقات قديمة غير متجددة | **فيلم هرم ومحترق (Burnt Film)** | تغيير الشفرة فوراً، تنظيف كيميائي، ضبط زاوية التكريب |
| **خطوط طولية داكنة (Streaky / Banded Coating)** | انسداد فواني أو عدم تساوي الأوفرلاب في الرشاش | **خلل في التوزيع العرضي (CD Flaw)** | تنظيف فواني عارضة الرشاش وضبط زاوية الرش إلى $15°$ |

---

### 2. مصفوفة اتخاذ القرار السريع عند اضطراب استواء الكوتنج:

\`\`\`
[رصد المشكلة: فحص بقعة الورق وحافة الشفرة]
       |
       +---> هل يوجد لمعان زجاجي + اهتزاز شفرة + كريب خشن؟
       |        |
       |        +---> نعم: [استواء مبكر Premature Curing]
       |                 الإجراء: +Modifier (15-25%) | -Steam (0.3 bar) | +Water Flow
       |
       +---> هل يوجد عجين متراكم خلف الشفرة + نتف ألياف + تقطع؟
                |
                +---> نعم: [استواء متأخر Late Leveling]
                         الإجراء: -Release (15%) | +Hood Temp | -Water Flow | فحص جفاف المكبس
\`\`\`

---

### 3. بصمة تآكل الشفرة (Doctor Blade Footprint) كمؤشر لاستواء الكوتنج:

تكشف حافة الشفرة المستهلكة (Worn Blade Bevel) حقيقة ما يدور على سطح اليانكي:
- **تآكل منتظم بزاوية شطف ناعمة ومصقولة:** دليل على توازن استواء الكوتنج واستقرار نافذة اللزوجة.
- **تآكل خشن ومسنن مع شظايا دقيقة (Pitting & Chipping):** دليل على استواء مبكر وفيلم شديد القسوة والتزجيج.
- **طبقة ألياف متفحمة ملتصقة بالوجه الأمامي للشفرة:** دليل على استواء متأخر وتراكم مواد لزجة لم تتصلب.

---

### 4. الإجراءات المانعة لضمان استقرار فيلم الكوتنج على المدى الطويل:

1. **معايرة عارضة الرشاش دورياً:** فحص ضغط الرش، وزاوية ميل الفواني (Offset Angle $15°$)، ومسافة الرش ($100 - 150\text{ mm}$).
2. **التحكم في جودة مياه الإذابة:** استخدام مياه خالية من العسر الكلي ومواد الترسيب وبـ $\text{pH}$ يتراوح بين $6.5 - 7.5$.
3. **المعايرة الدقيقة لضغط هواء حامل الشفرة (Blade Tube Pressure):** التأكد من ثبات الضغط العرضي لتجنب تجريف الفيلم في مناطق وتركه في مناطق أخرى.
4. **التسجيل المنتظم لمعدل الإضافة (Add-on Tracking):** ربط معدل الإضافة كيميائياً بسرعة الماكينة أوتوماتيكياً (Speed-paced dosing).`,
    estimated_minutes: 30,
    order: 4,
    is_free: true,
  },



  // ── COURSE 401: LESSON 25 ──
  {
    id: 'les-t401-1',
    module_id: 'mod-t401-1',
    title: 'تكنولوجيا خطوط إعادة اللف والتحكم في الشد (Rewinding)',
    title_en: 'Automatic Rewinding Lines & Web Tension Control',
    type: 'lesson',
    content: `
### من رولات الجامبو الضخمة إلى أسطوانات التحويل (Parent Reels to Logs):
تنتج ماكينة التيشيو رولات جامبو عملاقة (**Jumbo Rolls / Parent Reels**) بقطر يتراوح بين **$2.5$ إلى $3.2\\text{ متر}$**، وعرض يصل إلى **$2.8 - 5.6\\text{ متر}$**، وبوزن يتراوح بين **$3$ إلى $5\\text{ أطنان}$**.
- مهمة خط إعادة اللف فائق السرعة (**Rewinder Line**) الذي يعمل بسرعات بين **$600$ إلى $900\\text{ م/دقيقة}$** هي تحويل هذه الرولات الضخمة إلى أسطوانات مدمجة تسمى **Logs** (بقطر $90 - 150\\text{ مم}$) تحاكي أبعاد الرول النهائي للمستهلك ولكن بطول الماكينة الكامل قبل تقطيعها.

---

### النظرية الميكانيكية للتحكم في شد الشيت (Web Tension Mechanics):
التيشيو مادة مرنة شديدة الحساسية للإجهاد الميكانيكي بسبب انخفاض وزنه النوعي ($13 - 22\\text{ g/m}^2$) ووجود موجات الكرمشة؛ أي تذبذب طفيف في الشد يؤدي إما لانقطاع الشيت (**Web Break**) أو سحق تجاعيد الكرمشة وفقدان الحجم النوعي (**Bulk Loss**).

1. **معادلة الشد السطحي الخطي (Linear Web Tension):**
   $$T = \\frac{F}{w} = \\sigma \\cdot t \\quad [\\text{N/m}]$$
   - حيث:
     - $F$: قوة الشد الإجمالية المقاسة بواسطة خلايا الحمل (Load Cells) بالنيوتن.
     - $w$: عرض شيت الورق بالمتر.
     - $\\sigma$: الإجهاد الميكانيكي الداخلي ($N/\\text{m}^2$).
     - $t$: سمك الشيت الميكروني ($m$).

2. **التحكم بحلقة الشد المغلقة (Closed-Loop Tension Control):**
   - يُراقب الشد باستمرار عبر أسطوانات قياس مزودة بحساسات بيزوكهربائية (**Piezoelectric Load Cells**).
   - تُرسل الإشارات إلى متحكمات دفع رقمية (**Digital Servo Drives**) لتعديل سرعة فك الرول الجامبو (Unwind Stand) بأجزاء من الألف من الثانية، مدعومة برول راقص هوائي معوض (**Dancer Roll**) لامتصاص الصدمات والارتجاجات الناتجة عن عدم دائرية الرول الجامبو (Out-of-roundness).

---

### فيزياء منحنى تخفيف الشد المستدق (Taper Tension Profile):
إذا لُفّ الرول بشد ثابت من البداية حتى النهاية، فإن تراكم الضغوط القطرية في الطبقات الخارجية يؤدي إلى سحق اللب الكرتوني الداخلي (**Core Crushing**) وحدوث انزلاق وانفجار جانبي للطبقات يسمى التلسكوب (**Telescoping**).

$$T(r) = T_0 \\cdot \\left[1 - k \\cdot \\left(\\frac{r - r_{\\text{core}}}{r_{\\text{max}} - r_{\\text{core}}}\\right)\\right]$$

- **حيث:**
  - $T(r)$: الشد المطبق عند نصف القطر اللحظي $r$.
  - $T_0$: الشد الأولي العالي عند بدء اللف على الكور الكرتوني مباشرة ($100\\%$).
  - $k$: معامل التخفيف التنازلي ($0.25 - 0.45$).
  - $r_{\\text{core}}$ و $r_{\\text{max}}$: نصف قطر الكور ونصف القطر النهائي للرول.

> 💡 **القاعدة الذهبية للّف:** نبدأ اللف بشد قوي وثابت حول الكور لضمان عدم انفصال الورق عن الأنبوب الكرتوني، ثم نخفض الشد تدريجياً بنسبة **$25\\% - 40\\%$** مع نمو قطر الرول لحبس وسائد هوائية بين الطبقات والحفاظ على الحجم الفخم (Bulk).

---

### هندسة التخريم الدوراني وسهولة القطع (Rotary Perforation Mechanics):
تتولى وحدة التخريم (**Perforation Unit**) شق خطوط القطع المنقطة لتمكين المستهلك من فصل المناديل بنعومة ودون تمزق عشوائي:
- تتكون الوحدة من أسطوانة تخريم دوارة تحوي شفرات مسننة وسندان ثابت (**Anvil Blade**).
- **حساب مسافة التخريم (Perforation Pitch):**
  $$\\text{Pitch} = \\frac{\\pi \\cdot D_{\\text{roll}}}{N_{\\text{knives}}} \\cdot \\frac{V_{\\text{web}}}{V_{\\text{knife}}}$$
  (تُضبط هندسياً لتثبيت طول المنديل القياسي بين **$110$ إلى $140\\text{ مم}$**).
- **نسبة القطع إلى الرابط (Cut-to-Tie Ratio):**
  - شفرة التخريم ليست مستمرة بل تحتوي على أسنان وثغرات: مثلاً سن قطع بطول $0.9\\text{ mm}$ يليه رابط رابط للألياف بطول $0.4\\text{ mm}$.
  - إذا كان الرابط ضعيفاً جداً، ينقطع الشيت أثناء اللف السريع بالماكينة. وإذا كان قوياً، يعاني المستهلك من صعوبة قطع الورقة وتمزقها طولياً.

---

### جدول مقارنة أنظمة اللف السطحي والمركزي (Surface vs Center Winding):

| وجه المقارنة | اللف السطحي ثلاثي الدرافيل (Surface Winding) | اللف المركزي بمحور مباشر (Center Winding) |
|---|---|---|
| **مبدأ نقل الحركة** | الاحتكاك السطحي عبر درافيل التلامس والراكب (Rider Roll) | محرك سيرفو متصل مباشرة بمحور الكور الداخلي |
| **السرعة القصوى** | **عالية جداً ($800 - 1100\\text{ م/د}$)** | متوسطة إلى منخفضة ($300 - 500\\text{ م/د}$) |
| **التحكم بالحجم (Bulk)** | يتطلب ضبطاً فائق الحساسية لضغط درفيل الركوب الهوائي | ممتاز جداً لعدم وجود ضغط سطحي على الرول |
| **التطبيق الصناعي** | **المعيار السائد في رولات التواليت والمطبخ الاستهلاكية** | اللف الصناعي لرولات الجامبو الطبية والأقمشة غير المنسوجة |
`,
    estimated_minutes: 24,
    order: 1,
    is_free: true,
  },

  // ── COURSE 401: LESSON 26 ──
  {
    id: 'les-t401-1b',
    module_id: 'mod-t401-1',
    title: 'هندسة النقش والدرفلة (Point-to-Point vs Nested vs Micro)',
    title_en: 'Embossing Systems: Point-to-Point, Nested & Micro-embossing',
    type: 'lesson',
    content: `
### الأهمية الوظيفية للنقش (Functionality of Embossing):
النقش (**Embossing**) ليس مجرد زخرفة جمالية لسطح الورقة، بل هو عملية هندسية بالغة التعقيد تستهدف:
1. **مضاعفة الحجم الظاهري (Apparent Bulk):** زيادة قطر الرول بنسبة **$40\\% - 80\\%$** بنفس كمية الألياف.
2. **خلق فجوات شعرية لاحتجاز السوائل:** زيادة سعة الامتصاص المائي بمقدار مرتين إلى ثلاث مرات مقارنة بالورق المسطح.
3. **تليين الهيكل الميكانيكي:** تكسير صلابة الانحناء الجدارية للشيت مما يمنح المستهلك شعوراً فائقاً بالامتلاء والمرونة.

---

### النظرية الفيزيائية للضغط ونقطة التلامس (Hertzian Contact Stress in Nip):
يمر شيت التيشيو الرقيق بين درفيل نقش فولاذي منقوش بحفر ليزري (**Engraved Steel Roll**) ودرفيل ضغط مطاطي (**Rubber Anvil Roll**):
- **معادلة الضغط في خط التلامس (Nip Peak Pressure):**
  $$P_{\\text{nip}} = \\frac{2 \\cdot L_{\\text{load}}}{\\pi \\cdot b \\cdot W} \\quad [\\text{MPa}]$$
  - حيث:
    - $L_{\\text{load}}$: قوة الكبس الهيدروليكية المطبقة.
    - $W$: عرض وجه الدرفيل.
    - $b$: نصف عرض أثر خط التلامس (Nip Footprint Width).
- **صلابة غلاف الرابر (Rubber Hardness):**
  - تُقاس بمقياس **Shore A** وتتراوح نموذجياً بين **$55$ إلى $68\\text{ Shore A}$**.
  - إذا كان المطاط صلباً جداً ($> 75\\text{ Shore A}$)، يؤدي لانقطاع الألياف عند حواف النتوءات وانهيار مقاومة الشد بنسبة تزيد عن $40\\%$.
  - إذا كان المطاط ليناً جداً ($< 50\\text{ Shore A}$)، يتشوه النتوء ولا يحقق الشيت الارتفاع المستهدف (Pin Penetration).

---

### الأنظمة الهندسية الثلاثة لدرافيل النقش:

#### 1. النقش نقطة لنقطة (Point-to-Point / Tip-to-Tip):
- تُنقش كل طبقة من طبقتي التيشيو على حدة بنتوءات هرمية أو مخروطية بارزة.
- تلتقي قمم النتوءات للطبقة العلوية وجهاً لوجه وبدقة ميكرونية متطابقة مع قمم الطبقة السفلية، ويُوضع الغراء المائي على القمم فقط.
- **النتيجة الفيزيائية:** تتشكل حجيرات ووسائد هوائية مغلقة بالكامل في المساحات البينية بين القمم، مما يجعل هذا النظام **الخيار القياسي لمناديل المطبخ (Kitchen Towels)** لتعظيم الامتصاص.

#### 2. النقش المتداخل (Nested / Tip-to-Valley):
- تدخل قمم النتوءات في الطبقة الأولى في قيعان الفراغات بين نتوءات الطبقة الثانية دون أن تتلامس القمم مباشرة.
- **النتيجة الفيزيائية:** تعشيق ميكانيكي يوفر ثباتاً هيكلياً ومقاومة فائقة للانضغاط الجانبي، مما يحمي رول التواليت الفاخر من التسطح والتشوه عند التغليف والشحن.

#### 3. النقش المجهري والديكوري (Micro-Embossing & Deco):
- يحتوي سطح الدرفيل على شبكة كثيفة جداً من النقاط الميكرونية (**$30 - 60\\text{ نقطة/سم}^2$**) بارتفاع ضئيل ($0.3 - 0.5\\text{ مم}$) مصحوبة بنقوش زخرفية ناعمة (أزهار أو تموجات).
- **النتيجة الفيزيائية:** تحسين الملمس المخملي وتماسك الطبقات لمناديل الوجه (Facial Tissue) دون إحداث خشونة سطحية للمستهلك.

---

### جدول مقارنة شامل بين أنظمة النقش:

| الخاصية الهندسية | Point-to-Point (نقطة لنقطة) | Nested (متداخل) | Micro-Embossing (نقش مجهري) |
|---|---|---|---|
| **المنتج الأساسي** | مناديل المطبخ شديدة الامتصاص | رولات التواليت متعددة الطبقات | مناديل الوجه الفاخرة والجيوب |
| **كثافة النتوءات** | $4 - 10\\text{ نقطة/سم}^2$ | $8 - 18\\text{ نقطة/سم}^2$ | **$30 - 60\\text{ نقطة/سم}^2$** |
| **سعة امتصاص الماء** | **الأعلى على الإطلاق ($+40\\% - 60\\%$)** | ممتازة ($+25\\% - 35\\%$) | معتدلة ($+10\\% - 15\\%$) |
| **فقدان الشد الجاف (Tensile Loss)** | $20\\% - 30\\%$ | $15\\% - 25\\%$ | **الأدنى ($8\\% - 15\\%$)** |
| **ملمس النعومة لليد** | خشن نسبياً | ناعم وممتلئ | **حريري ومخملي للغاية** |
`,
    estimated_minutes: 24,
    order: 2,
    is_free: true,
  },

  // ── COURSE 401: LESSON 27 ──
  {
    id: 'les-t401-2',
    module_id: 'mod-t401-2',
    title: 'لصق الطبقات بالغراء المائي (Ply-Bonding) والتصفيح',
    title_en: 'Water-based Ply-Bonding & Adhesive Lamination',
    type: 'lesson',
    content: `
### معضلة انفصال الطبقات (Ply Separation Challenge):
عندما يسحب المستهلك منديل وجه متعدد الطبقات أو يستخدم ورقة مطبخ مبللة، فإن أسوأ عيب جودة قد يواجهه هو انفصال الطبقات عن بعضها وتحولها لوريقات هزيلة متفرقة (**Delamination**).
- الربط المتين بين الطبقات يجب أن يتحقق **دون التضحية بنعومة المنديل**؛ إذ إن فرط استخدام الغراء يحول الورق إلى لوح كرتوني صلب غير صالح للاستخدام!

---

### الكيمياء البوليمرية لغراء التيشيو المائي (Laminating Adhesives):
تعتمد وحدات اللصق الحديثة على مشتتات بوليمرية مائية صديقة للبيئة وقابلة للتحلل الحيوي:
1. **كحول البولي فينيل المعدل (Modified PVOH) وأسيتات البولي فينيل (PVA/EVA):**
   - محتوى المواد الصلبة المنخفض جداً (**Solid Content $3.5\\% - 6.0\\%$**) لتجنب زيادة الجراماج أو قساوة المنديل.
   - اللزوجة الديناميكية المنخفضة (**$150 - 350\\text{ mPa}\\cdot\\text{s}$**) لضمان سرعة الانتقال الميكروني دون تطاير رذاذ الغراء (**Glue Misting**) على السرعات العالية ($700\\text{ م/د}$).
2. **ميكانيزم الالتصاق والتبخير المجهري (Green Tack & Fiber Penetration):**
   - بمجرد وضع قطيرة الغراء الميكرونية على نتوء النقش، تمتص الألياف الجافة المحيطة بالنتوء الماء بسرعة شعرية فائقة خلال أجزاء من الثانية.
   - ينتج عن ذلك تماسك لزج فوري (**Green Tack**) يربط الطبقتين أثناء مسارهما السريع نحو درفيل التزويج (**Marrying Roll**).

---

### نقل الغراء بالدقة الميكرونية: أسطوانة الأنيلوكس وشفرة الحجرة (Anilox Mechanics):
تنتقل طبقة الغراء عبر منظومة طباعية بالغة الإحكام:
1. **أسطوانة الأنيلوكس السيراميكية (Ceramic Laser-Engraved Anilox Roll):**
   - سطح خزفي محفور بالليزر بشبكة خلايا ميكرونية سداسية بزاوية $60^\\circ$ بكثافة تتراوح بين **$80$ إلى $140\\text{ خط/سم}$**.
   - الحجم الحجمي النظري للخلايا (**Theoretical Cell Volume**): محدد بين **$6.0$ إلى $10.0\\text{ cm}^3/\\text{m}^2$** لضبط كمية الغراء الرطبة المستهلكة بدقة متناهية ($0.05 - 0.15\\text{ g/m}^2$ جاف).
2. **شفرة الحجرة المغلقة (Chambered Doctor Blade):**
   - تحصر الغراء بضغط هيدروليكي طفيف وتمسح الفائض عن سطح الأنيلوكس، مانعة تطاير المذيبات أو تلوث خط الإنتاج.
3. **درفيل الكليشيه / درفيل النقل المطاطي (Applicator Roll):**
   - يلامس فقط قمم النتوءات المنقوشة على درفيل الصلب وينقل قطرات الغراء إليها بدقة، دون أن يتسرب أي غراء إلى قيعان الورقة.

---

### المقارنة الهندسية: اللصق بالغراء مقابل الربط الميكانيكي (Knurling):

| المعيار | اللصق بالغراء المائي (Adhesive Lamination) | الربط الميكانيكي بالضغط (Mechanical Knurling) |
|---|---|---|
| **آلية الربط** | روابط بوليمرية كيميائية تلتصق بسطوح الألياف على النتوءات | عجلات فولاذية مسننة تضغط أطراف الورقة لربط الألياف ميكانيكياً |
| **مساحة الربط** | تغطي كامل مسطح الورقة بتوزيع متجانس على النتوءات | تقتصر على شريط ضيق ($5 - 10\\text{ مم}$) عند حافتي الورقة فقط |
| **قوة تماسك الطبقات** | **عالية جداً ومستمرة ($25 - 45\\text{ mN}/50\\text{ mm}$)** | متواضعة وتتفكك بسهولة في منتصف المنديل |
| **التأثير على الملمس** | مرن وممتلئ إذا ضُبطت لزوجة الغراء | أطراف قاسية ومضغوطة تسبب خشونة ملحوظة |
| **التكلفة التشغيلية** | تتطلب تكلفة مستمرة للمادة اللاصقة وتنظيف دوري | صفر تكلفة كيميائية (استثمار ميكانيكي فقط) |

---

### فحص قوة تماسك الطبقات معملياً (Ply Bond Strength Testing):
تُفحص جودة اللصق معملياً وفق بروتوكولات قياسية:
- تُقطع عينة بعرض **$50\\text{ مم}$** وتُفصل الطبقات مبدئياً باليد لمسافة $20\\text{ مم}$.
- تُثبت الطبقتان في فكي جهاز الشد المعملي بزاوية تقشير **$180^\\circ$** أو **$90^\\circ$**.
- يُسجل متوسط قوة المقاومة للانفصال بالمللي نيوتن (**$\\text{mN}/50\\text{ mm}$**):
  - **الحد الأدنى المقبول لمناديل الوجه:** **$\\ge 15\\text{ mN}/50\\text{ mm}$**.
  - **الحد المقبول لمناديل المطبخ:** **$\\ge 30 - 45\\text{ mN}/50\\text{ mm}$**.
`,
    estimated_minutes: 24,
    order: 3,
    is_free: true,
  },

  // ── COURSE 401: LESSON 28 ──
  {
    id: 'les-t401-2b',
    module_id: 'mod-t401-2',
    title: 'ماكينات طي مناديل الوجه (Interfolders) ومناشير الرولات (Log Saws)',
    title_en: 'Interfolded Facial Tissue Machines & High-Speed Log Saws',
    type: 'lesson',
    content: `
### التحدي الهندسي في المراحل النهائية للتحويل:
بعد إعداد شيت التيشيو بنجاح، تتبقى مرحلتان ميكانيكيتان بالغة الحساسية تحددان الشكل النهائي للمنتج في يد المستهلك:
1. **الطي التبادلي الدقيق لمناديل العلب (Facial Tissue Interfolding).**
2. **التقطيع المداري عالي السرعة لأسطوانات الرولات (Log Saw Cutting).**

---

### سينماتيكا ماكينات الطي التبادلي (Interfolding Kinematics):
تعتمد علب مناديل الوجه على ظاهرة السحب التتابعي (**Pop-up Dispensing**)؛ فعند سحب منديل من العلبة، يخرج ثلث المنديل التالي تلقائياً متأهباً للاستخدام.
- **الآلية الفيزيائية:** يمر الورق بين أسطوانتي طي متزامنتين تدوران باتجاهين متعاكسين مزودتين بأنظمة شفط مخلخلة للهواء (**Vacuum Cylinders**) وقواطع ميكانيكية متداخلة:
  - تقوم الأسطوانة الأولى بقطع الشيت عند طول محدد وشفط حافته.
  - تنفخ الأسطوانة الهواء عند زاوية معينة لتثني المنديل داخل طية المنديل المقابل من الأسطوانة الثانية بالتناوب المستمر على سرعات تصل إلى **$250 - 350\\text{ م/دقيقة}$** (أكثر من **$6000$ منديل بالدقيقة** للماكينة متعددة المسارات).

#### أنماط الطي الشائعة في الصناعة:
1. **الطي V (Single Fold / V-Fold):**
   - يُثنى المنديل ثنية واحدة في المنتصف بنسبة $50\\%$ متداخلاً مع المنديل التالي. وهو النمط القياسي لمناديل الوجه الاقتصادية ومسحات الأيدي.
2. **الطي Z (Multi-Fold / Z-Fold):**
   - يُثنى المنديل على شكل حرف $Z$ بثلاث طيات متساوية. يتيح تعبئة عدد ضخم من المناديل في علب موزع صغيرة ورفيعة مع ضمان سهولة الخروج.
3. **الطي W (W-Fold):**
   - أربع طيات للمناديل الكبيرة فائقة النعومة المستخدمة في الفنادق الفاخرة والمستشفيات لمنع أي تلوث للأيدي.

---

### ديناميكا مناشير الرولات المدارية الفائقة (Orbital Log Saws):
تقطع ماكينة المنشار أسطوانة التيشيو الطويلة (**Log** بطول $2.8\\text{ م}$) إلى رولات مفردة بطول $9.5 - 12\\text{ سم}$ بسرعة تصل إلى **$200 - 250\\text{ قطة/دقيقة}$** عبر مسارين متوازيين (**Dual Lane**)، أي إنتاج **$400$ إلى $500\\text{ رول تامة الصنع كل دقيقة**!

#### 1. ميكانيكا الحركة المدارية (Orbital Motion):
- لا يتحرك قرص المنشار بحركة ترددية لأعلى ولأسفل، بل يدور في مسار مداري بيضاوي مستمر:
  - دوران القرص الدائري حول محوره الخاص بسرعة فائقة (**$1200 - 1500\\text{ rpm}$**).
  - دوران ذراع المنشار الحامل للقرص بمسار مداري حول مركز الماكينة ليقطع الرول أثناء حركته المتقدمة دون إيقاف تدفق الورق.

#### 2. هندسة أقراص القطع والشحذ الذاتي المستمر (Continuous In-line Grinding):
- يُصنع قرص القطع من سبائك فولاذية فائقة الصلابة ومطعمة بالتنغستن بقطر **$610$ إلى $1000\\text{ مم}$** وسماكة رقيقة جداً ($3.5 - 5.0\\text{ مم}$) لتقليل هدر الورق.
- **أحجار الشحذ الماسية الدوارة (CBN Grinding Stones):**
  - تلامس حافة الشفرة وتسنها باستمرار وبشكل متناغم مع كل دورة قطع للحفاظ على حد شفرة ميكروني حاد كالمشرط.
- **التزييت والتشحيم الميكروني المستمر (Micro-Mist Lubrication):**
  - يُرش رذاذ ميكروني من الزيوت النباتية والسيليكونات الغذائية المعتمدة على حافة القرص الساخن لتبريدها ومنع التصاق ألياف السليلوز المنصهرة بفعل حرارة الاحتكاك بحافة الرول (**End-roll Fusing**).

---

### مصفوفة جودة القطع وتشخيص عيوب مناشير الرولات:

| عيب القطع في الرول | السبب الميكانيكي الجذري | الإجراء التصحيحي الفوري |
|---|---|---|
| **ميلان زاوية القطع (Bevel Skewing)** | عدم محاذاة محور القرص أو تآكل غير متجانس في زاوية الشحذ | إعادة ضبط زوايا أحجار الشحذ ومحاذاة الذراع المداري |
| **تلاصق حواف الرول (Fusing/Welding)** | سخونة مفرطة في شفرة المنشار ونقص زيت التبريد الميكروني | زيادة معدل تدفق رذاذ التزييت وفحص نظافة شفرة القرص |
| **تفتت وتمزق الكور الكرتوني الداخلي** | تآكل حد الشفرة الميكروني أو انخفاض سرعة دوران القرص | استبدال أحجار السن فوراً والتأكد من حدة شفرة التقطيع |
| **تفاوت أطوال الرولات المقطوعة** | انزلاق سير تغذية الرول أو تآكل حساس المزامنة الضوئية | معايرة حساسية مشفر التغذية (Encoder) وشد سير النقل |
`,
    estimated_minutes: 24,
    order: 4,
    is_free: true,
  },

  // ── COURSE 402: LESSON 29 ──
  {
    id: 'les-t402-1',
    module_id: 'mod-t402-1',
    title: 'الاختبارات المعملية القياسية لورق التيشيو وفق ISO 12625',
    title_en: 'Standard Laboratory Testing Methods for Tissue (ISO 12625)',
    type: 'lesson',
    content: `
### الدستور القياسي لضبط جودة التيشيو (ISO 12625 Standard Suite):
ورق التيشيو مادة مسامية بالغة الحساسية للعوامل البيئية المحيطة؛ إذ تمتص ألياف السليلوز رطوبة الجو بنهم، مما يغير خواص المتانة والنعومة والسماكة في دقائق معدودة.
- لذلك، لا يمكن قبول أو مقارنة أي نتيجة فحص معملي دون تطبيق **المعايير الدولية الصارمة ISO 12625 و TAPPI**.

---

### الغرفة المناخية المعملية وظاهرة الامتزاز الرطوبي (Conditioning & Hysteresis):
وفق المواصفة **ISO 187**:
- تُحفظ كافة عينات التيشيو قبل الفحص لمدة لا تقل عن **$24\\text{ ساعة}$** داخل غرفة تكييف مناخي محكمة التحكم:
  - **درجة الحرارة القياسية:** **$23.0 \\pm 1.0^\\circ\\text{C}$**.
  - **الرطوبة النسبية القياسية (RH):** **$50.0 \\pm 2.0\\%$**.
- **ظاهرة التباطؤ الرطوبي (Hysteresis Effect):**
  - تختلف نسبة رطوبة التوازن إذا تم تجفيف الورقة ثم ترطيبها عما إذا كانت مبللة ثم جُففت؛ لذا يجب دوماً تكييف العينات قادمة من مسار الامتزاز الرطوبي المتصاعد لضمان تكرارية النتائج.

---

### الفحوصات المعملية الستة الأساسية لورق التيشيو:

#### 1. الوزن الأساسي والجراماج (ISO 12625-6: Grammage):
- يُقاس بوزن عينات مقطوعة بدقة ميكرونية بمساحة معلومة (عادة $100\\text{ cm}^2$ أو $10\\text{ cm} \\times 10\\text{ cm}$):
  $$g = \\frac{m}{A} \\quad [\\text{g/m}^2]$$
- يُقاس للطبقة المفردة وللمنتج التام متعدد الطبقات.

#### 2. السماكة والحجم النوعي (ISO 12625-3: Bulking Thickness & Bulk):
- نظراً لانضغاط التيشيو الهش، لا يُستخدم الميكرومتر اليدوي العادي إطلاقاً.
- يُقاس بجهاز ميكرومتر دقيق ذي سندان ضاغط بمساحة $10\\text{ cm}^2$ يطبق ضغطاً استاتيكياً منخفضاً وموحداً قدره **$2.0 \\pm 0.1\\text{ kPa}$**.
  - **الحجم النوعي (Apparent Bulk $v$):**
    $$v = \\frac{t}{g} \\quad [\\text{cm}^3/\\text{g}]$$
    (تتراوح قيمته النموذجية في التيشيو الفاخر بين **$8.0$ إلى $14.0\\text{ cm}^3/\\text{g}$**).

#### 3. الشد الجاف والاستطالة (ISO 12625-4: Tensile Strength & Stretch):
- تُقص عينات بعرض **$50.0 \\pm 0.5\\text{ مم}$** وطول حر بين الفكين **$100.0\\text{ مم}$**.
- تُشد العينة بمعدل استطالة ثابت قدره **$50.0\\text{ مم/دقيقة}$** حتى الانقطاع:
  - **قوة الشد في الاتجاه الطولي ($MD$) والعرضي ($CD$):** بالـ $\\text{N/m}$.
  - **المتوسط الهندسي للشد (Geometric Mean Tensile - GMT):**
    $$GMT = \\sqrt{MD \\times CD} \\quad [\\text{N/m}]$$
  - **الاستطالة قبل القطع (Stretch %):** تعكس كفاءة الكرمشة، وتتراوح بين **$14\\% - 24\\%$** في الاتجاه الطولي.
  - **طاقة امتصاص الشد (TEA - Tensile Energy Absorption):** المساحة تحت منحنى الإجهاد-الانفعال ($\\text{J/m}^2$).

#### 4. الشد الرطب وجهاز فينش (ISO 12625-5: Wet Tensile - Finch Cup):
- تُثبت العينة حول قضيب مائي داخل كأس فينش (**Finch Cup Device**) وتُغمر بالماء المقطر لمدة **$5.0 \\pm 1.0\\text{ ثوانٍ}$**، ثم تُشد فوراً:
  $$\\text{Wet/Dry Ratio (\\%)} = \\frac{\\text{Wet Tensile}}{\\text{Dry Tensile}} \\times 100$$
  - مناديل المطبخ الفاخرة: $\\ge 25\\% - 32\\%$.
  - ورق التواليت الصحي: $\\le 5\\% - 8\\%$ (لضمان سرعة التحلل المائي).

#### 5. سعة وزمن الامتصاص بالسلة السلكية (ISO 12625-8: Water Absorption):
- تُلف عينة بوزن محدد ($5.0\\text{ g}$) داخل سلة أسطوانية سلكية وتُسقط أفقياً فوق سطح الماء:
  - **زمن الامتصاص (Absorption Time):** الزمن بالثواني حتى تغوص السلة بالكامل في الماء (المستهدف أقل من $3 - 5\\text{ ثوانٍ}$).
  - **سعة الامتصاص (Absorption Capacity):** وزن الماء المحتجز في الورقة بعد تقطيرها لمدة $30\\text{ ثانية}$ مقسوماً على الوزن الجاف للورقة ($\\text{g water / g paper}$، وتصل في ورق المطبخ الفاخر إلى **$9.0 - 12.0\\text{ جم/جم}$**).

---

### جدول المواصفات القياسية النموذجية لأصناف التيشيو في المعمل:

| الفحص المعملي القياسي | مناديل الوجه (Facial) | رولات التواليت (Toilet) | مناديل المطبخ (Kitchen Towel) |
|---|---|---|---|
| **الوزن الأساسي للطبقة** | $13.5 - 15.5\\text{ g/m}^2$ | $15.0 - 17.5\\text{ g/m}^2$ | $20.0 - 23.0\\text{ g/m}^2$ |
| **عدد الطبقات** | 2 إلى 3 طبقات | 2 إلى 4 طبقات | 2 إلى 3 طبقات |
| **المتوسط الهندسي للشد (GMT)** | $80 - 110\\text{ N/m}$ | $90 - 130\\text{ N/m}$ | $140 - 220\\text{ N/m}$ |
| **نسبة الشد الرطب/الجاف** | $< 10\\%$ | **$< 7\\%$ (سريع التحلل)** | **$\\ge 25\\% - 30\\%$** |
| **الحجم النوعي (Bulk)** | $9.0 - 11.0\\text{ cm}^3/\\text{g}$ | $8.0 - 10.5\\text{ cm}^3/\\text{g}$ | **$11.0 - 14.5\\text{ cm}^3/\\text{g}$** |
| **زمن الامتصاص المائي** | $< 4\\text{ s}$ | $< 6\\text{ s}$ | **$< 2.5\\text{ s}$** |
`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  // ── COURSE 402: LESSON 30 ──
  {
    id: 'les-t402-1b',
    module_id: 'mod-t402-1',
    title: 'قياس النعومة الموضوعية بجهاز Tissue Softness Analyzer (TSA)',
    title_en: 'Objective Softness Measurement with EMTEC TSA Technology',
    type: 'lesson',
    content: `
### معضلة النعومة الحسية في صناعة التيشيو:
النعومة هي العامل الحاسم الأول في اختيار المستهلك لمناديل الوجه؛ ولكن كيف نقيس "النعومة" فيزيائياً؟
- لعقود طويلة، اعتمدت المصانع على لجان التقييم الحسي البشري (**Human Handfeel Panels**): يُطلب من خبراء لمس العينات وترتيبها.
- **مشاكل الطريقة الحسية:** غير موضوعية، تتأثر برطوبة يد الفاحص وحالته النفسية، متباينة بين الأفراد، ولا تقدم للمهندس أرقاماً فيزيائية لضبط معايير الماكينة.

---

### ثورة التحليل الصوتي الميكانيكي: جهاز EMTEC TSA:
أحدث جهاز **Tissue Softness Analyzer (TSA)** من شركة EMTEC الألمانية ثورة صناعية عالمية؛ حيث حوّل الإحساس البشري إلى معادلات رياضية وأطياف صوتية دقيقة وموثوقة.

#### النظرية الفيزيائية ومبدأ القياس:
1. تُثبت عينة التيشيو بحلقة دائرية مفرغة وتتعرض لشد حلقي محكم.
2. يدور رأس قياس يحمل **ثماني شفرات عمودية رقيقة** فوق سطح الورقة بسرعة زاوية محددة وبضغط تلامس عمودي خفيف للغاية ($0.1 - 0.6\\text{ N}$).
3. تتذبذب شفرات القياس عند احتكاكها بالألياف السطحية وتصدر ذبذبات صوتية مجهرية يلتقطها ميكروفون صوتي فائق الحساسية في قاع الجهاز، ثم يحولها إلى طيف صوتي بترددات الهرتز والكيلوهرتز (**Fourier Transform Spectrum**).

---

### تفكيك الطيف الترددي لجهاز TSA: النعومة السطحية مقابل النعومة الهيكلية:

1. **القمة عالية التردد - النعومة الملمسية السطحية ($TS7$ Peak):**
   - تقع عند التردد **$6.5$ إلى $7.5\\text{ kHz}$**.
   - تنتج عن اهتزاز شفرات القياس عند اصطدامها برؤوس ألياف السليلوز المنفردة البارزة من السطح.
   - **الدلالة الفيزيائية:** تعبر عن **النعومة الحريرية المخملية السطحية (Real Surface Softness / Velvet Touch)**.
   - **القاعدة الذهبية:** كلما انخفضت قمة $TS7$ (مقاسة بـ $\\text{dB}$)، كانت الورقة أكثر نعومة وملمسها أقل خشونة للمستهلك.

2. **القمة منخفضة التردد - الصلابة الهيكلية ($TS750$ Peak):**
   - تقع عند التردد **$750\\text{ Hz}$** تقريباً.
   - تنتج عن اهتزاز شيت الورقة ككل كتابع لمرونته ومقاومته للثني.
   - **الدلالة الفيزيائية:** تعبر عن **صلابة الورقة الهيكلية (Structural Stiffness)**.
   - **القاعدة:** كلما انخفضت قمة $TS750$، كانت الورقة أكثر طواعية ومرونة عند مسكها باليد (تزيد نعومة الـ Bulk Softness).

3. **معامل الانضغاطية المرنة ($D$ - Deformation / Compressibility):**
   - يقيس هبوط الشفرات رأسياً داخل الورقة بالمليمتر تحت ضغط عمودي محدد.
   - يعبر عن مرونة وانتفاش وسائد التيشيو (Cushion Effect).

---

### الخوارزمية الرياضية لمؤشر النعومة اليدوية (Handfeel Formula HF):
يجمع المعالج الرقمي للجهاز المتغيرات الفيزيائية الثلاثة بالإضافة إلى الجراماج والسماكة في معادلة إحصائية متعددة المتغيرات لحساب مؤشر النعومة:

$$HF = a_0 + a_1 \\cdot \\ln(TS7) + a_2 \\cdot \\ln(TS750) + a_3 \\cdot D + a_4 \\cdot \\text{Caliper}$$

- يُنتج الجهاز درجة رقمية موحدة للنعومة (**Handfeel Score من 0 إلى 100**):
  - الورق الاقتصادي التجاري: $65 - 75\\text{ HF}$.
  - التيشيو المنزلي الجيد: $78 - 85\\text{ HF}$.
  - التيشيو الفاخر فائق النعومة (Ultra-Premium Facial): **$88 - 96\\text{ HF}$**.

---

### جدول الترجمة التشغيلية: كيف يستجيب مهندس الماكينة لقراءات TSA؟

| قراءة جهاز TSA | العيب المشخص في الورقة | الإجراء الفوري على ماكينة التيشيو |
|---|---|---|
| **ارتفاع قمة $TS7$ ($> 15\\text{ dB}$)** | سطح الورقة خشن وأطراف الألياف حادة وقاسية | 1. رفع نسبة ألياف اللب القصير (اليوكاليبتوس) في الطبقة الخارجية.<br>2. زيادة جرعة المادة العازلة (Release) أو سكين كريب جديد.<br>3. رش مطري سطحي (Debonder). |
| **ارتفاع قمة $TS750$ ($> 40\\text{ dB}$)** | الورقة متصلبة وتفتقر للمرونة وحجم الـ Bulk | 1. تخفيض طاقة التكرير المفرطة للألياف الطويلة.<br>2. رفع نسبة الكرمشة (Crepe Ratio) بزيادة فرق السرعة.<br>3. تقليل شد الشيت على مجفف اليانكي. |
| **انخفاض معامل $D$ ($< 0.15\\text{ mm}$)** | انضغاط وسائد الورقة وفقدان الامتلاء | 1. تخفيف ضغط درفيل كبس اللباد (Shoe Press / Suction Roll).<br>2. زيادة التخفيف المائي في صندوق التدفق. |
`,
    estimated_minutes: 24,
    order: 2,
    is_free: true,
  },

  // ── COURSE 402: LESSON 31 ──
  {
    id: 'les-t402-2',
    module_id: 'mod-t402-2',
    title: 'تشخيص وعلاج علامات اهتزاز سكين الكريب (Yankee Chatter Marks)',
    title_en: 'Diagnosing and Eliminating Yankee Chatter Marks & Blade Vibration',
    type: 'lesson',
    content: `
### الكابوس التشغيلي الأكبر: علامات الشاتر (Chatter Marks):
علامات اهتزاز السكين (**Chatter Marks**) هي أخطر خلل تشغيلي وميكانيكي يمكن أن يصيب أسطوانة اليانكي:
- **المظهر:** ظهور تموجات وخطوط دورية عرضية محفورة بدقة على طول محيط أسطوانة اليانكي تشبه آثار "الغسالة اليدوية"، يرافقها صوت صفير أو طنين اهتزازي عنيف (**High-pitch Whistle**) من حامل السكين.
- **الكارثة:** إذا لم يُعالج الشاتر خلال دقائق معدودة، فإن الاهتزاز ينقش الأخاديد في معدن الأسطوانة نفسه، مما يتطلب إيقاف الماكينة لأسابيع وجلخ سطح الأسطوانة بتكلفة تصل إلى مئات الآلاف من الدولارات!

---

### الفيزياء الاهتزازية وظاهرة الالتصاق-الانزلاق (Stick-Slip Vibration Mechanics):
ينشأ الشاتر بسبب ظاهرة ميكانيكية وفيزيائية ذاتية التحفيز تسمى **Stick-Slip Motion**:
1. تدور أسطوانة اليانكي بسرعة تفوق **$30\\text{ م/ث}$**، بينما تضغط شفرة الكرمشة بقوة ميكانيكية ضد فيلم الطلاء البوليمري.
2. إذا أصبح فيلم الطلاء قاسياً أو جافاً، تلتصق حافة السكين بالفيلم لجزء من الميكروثانية (**Stick**) مما يُحدث انحناءً والتواءً مرناً في شفرة السكين وتخزيناً لطاقة الإجهاد.
3. تتجاوز قوة الدوران قوة الالتصاق، فتنفرط الشفرة وتنزلق للأمام بعنف (**Slip**).
4. يتكرر هذا الالتصاق والانفلات بمعدل آلاف المرات في الثانية ليتطابق مع التردد الطبيعي للرنين الميكانيكي لحامل السكين (**Resonance Frequency بين $120$ إلى $350\\text{ Hz}$**)، فيتحول إلى اهتزاز مدمر ذاتي الاستمرار.

---

### مصفوفة الأسباب الجذرية الخمسة للشاتر (5 Root Causes):

1. **كيمياء الطلاء وفقدان المادة العازلة (Coating Hardness):**
   - ارتفاع نسبة البوليمر اللاصق (**Adhesive**) مقارنة بالمادة العازلة (**Release Agent**) أو انخفاض الرطوبة على الأطراف، مما يرفع درجة حرارة التحول الزجاجي ($T_g$) للفيلم ويحوله لمادة زجاجية قاسية شديدة الاحتكاك.
2. **استهلاك شفرة السكين وانهيار الزاوية (Blade Wear & Dullness):**
   - تآكل حد الشفرة الميكروني واتساع عرض التلامس السطحي (Contact Land) لأكثر من $1.5\\text{ mm}$، مما يضاعف قوى الاحتكاك المباشرة.
3. **خلل هيدروليكا وهوائيات حامل السكين (Doctor Holder Issues):**
   - عدم توازن الضغط الهوائي داخل وسائد التحميل (Loading Bladders) على امتداد عرض الماكينة.
   - تراكم الأوساخ والتكلسات في مفاصل حامل السكين، مما يفقده المرونة ويعيق امتصاص الاهتزازات.
4. **عدم انتظام بروفايل الرطوبة العرضي (CD Moisture Profile):**
   - وجود مسارات جافة موضعية على سطح الورقة تؤدي لارتفاع احتكاك السكين في تلك النقاط تحديداً.
5. **خلل سيفونات مياه التكثيف الداخلية (Internal Condensate Siphons):**
   - انسداد أحد سيفونات سحب التكثيف داخل اليانكي، مما يسبب تراكم بقع مائية باردة موضعية وتشوهاً حرارياً في استدارة الأسطوانة.

---

### بروتوكول الطوارئ القياسي لإنقاذ سطح اليانكي (Emergency Protocol):

#### الإجراءات الفورية خلال الدقائق الخمس الأولى:
1. **زيادة المادة العازلة فوراً:** رفع معدل ضخ المادة العازلة (**Release Agent**) في مسطرة الرش بنسبة **$+20\\% - 30\\%$** لتليين فيلم الطلاء وكسر حلقة الالتصاق الجاف فوراً.
2. **استبدال سكين الكرمشة دون إبطاء:** إدخال شفرة كاربيد سيراميكية جديدة بزاوية شطف سليمة.
3. **تعديل ضغط حامل السكين:** تخفيض ضغط التحميل الهيدروليكي لحامل السكين تدريجياً حتى ينقطع صوت الصفير الرنيني.
4. **تفعيل نظام التأرجح الميكانيكي (Doctor Oscillation):** التأكد من أن ذراع السكين يتذبذب عرضياً بسلاسة بمعدل $10 - 15\\text{ mm}$ لتوزيع قوى الاحتكاك ومنع تركيز الخطوط في موضع واحد.

---

### جدول الصيانة الوقائية لحماية أسطوانة اليانكي:

| العنصر | الفحص الدوري | الحد الحرج المسموح |
|---|---|---|
| **عمر شفرة الكرمشة الفولاذية** | كل 4 إلى 8 ساعات | استبدال فوري عند تآكل الحافة لأكثر من $1.2\\text{ mm}$ |
| **عمر شفرة الكاربيد السيراميكية** | كل 24 إلى 48 ساعة | فحص مجهري للحد القاطع مع كل دورة لف |
| **ضغط وسائد هواء حامل السكين** | مستمر عبر شاشات التحكم | تفاوت الضغط لا يتجاوز $\\pm 0.1\\text{ bar}$ عبر العرض |
| **اهتزازات مسند السكين (Vibration Analysis)** | حساسات تسارع (Accelerometers) دائمة | سعة الاهتزاز لا تتجاوز **$1.5\\text{ mm/s RMS}$** |
`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  // ── COURSE 402: LESSON 32 ──
  {
    id: 'les-t402-2b',
    module_id: 'mod-t402-2',
    title: 'حل مشكلات انقطاع الورقة (Web Breaks)، تطاير الغبار والوبر (Linting)',
    title_en: 'Root Cause Troubleshooting: Web Breaks, Linting & Pinholes',
    type: 'lesson',
    content: `
### الدليل الهندسي الميداني لاستكشاف وحل مشكلات التيشيو المزمنة:
تتطلب إدارة خط إنتاج ورق التيشيو وسرعاته القياسية حساسية تشغيلية بالغة؛ فأي تغير ميكانيكي أو كيميائي بسيط ينعكس فوراً في صورة عيوب جودة أو توقفات غير مخططة تهدر الأطنان من الإنتاج.

---

### المشكلة الأولى: انقطاع الورقة المتكرر على الماكينة وخط التحويل (Web Breaks):
انقطاع الشيت المستمر يمثل نزيفاً في كفاءة الماكينة الشاملة (**OEE**):

#### الأسباب الجذرية والعلاج الميداني:
1. **تذبذب الشد وموجات التوتر العابرة (Tension Transients):**
   - **السبب:** تفاوت غير محسوب في السرعة بين أسطوانة اليانكي ودرفيل اللف، أو استجابة بطيئة لحساسات الشد على خط التحويل.
   - **العلاج:** إعادة معايرة نسبة الكرمشة (**Crepe Ratio**) ورفعها بنسبة $1\\% - 2\\%$ لزيادة استطالة الشيت ومطواعته لامتصاص الصدمات.
2. **ضعف أطراف الشيت (Weak Edges & Cracks):**
   - **السبب:** جفاف حواف الورقة نتيجة هواء الكابينة، أو وجود شقوق مجهرية من سكاكين تشذيب الحواف المائية (**Water Squirt Cutters**).
   - **العلاج:** فحص فوهات قص الحواف المائية واستبدالها لضمان قطع حاد ميكروني، وتشغيل مرشات ترطيب الأطراف الكيميائية (**Edge Sprays**).
3. **الثقوب والشوائب الموضعية (Local Holes):**
   - **السبب:** سقوط كتل رغوية أو شوائب كيميائية غير مذابة من صندوق التدفق تخلق نقطة تركيز إجهاد يتمزق عندها الشيت.

---

### المشكلة الثانية: تطاير الغبار والوبر الزائد (Linting & Dusting):
تطاير الغبار في خطوط التحويل أو على شاشات الهواتف عند استخدام مناديل الوجه هو الشكوى رقم واحد للمستهلكين ومسؤولي الصيانة!

#### الميكانيزم المجهري للغبار:
ألياف اللب القصير (اليوكاليبتوس) الدقيقة على سطح الورقة تكون غير مرتبطة بالكامل بالشبكة السليلوزية؛ وعند تعرضها لقوى الاحتكاك أو الكرمشة العنيفة تنفصل وتتحول إلى غبار محمول في الهواء.

#### خطة القضاء على الغبار:
1. **ترشيد جرعة المفككات الكيميائية (Debonders):**
   - الإفراط في استخدام المطريات الكيميائية يفصل الألياف عن بعضها بإفراط، مما يحول السطح إلى مصدر للغبار؛ لذا يجب تخفيض الجرعة فوراً بنسبة **$15\\% - 25\\%$**.
2. **إضافة النشا الكاتيوني أو CMC في العجينة:**
   - حقن النشا الكاتيوني بمعدل **$2 - 4\\text{ kg/t}$** يعمل كغراء مجهري يربط نهايات الألياف السطحية بالشبكة دون التضحية بالنعومة الحريرية.
3. **مراجعة زاوية سكين الكرمشة:**
   - السكين شديد الحدة أو ذو الزاوية المفرطة قد يمزق ألياف السطح بدلاً من ثنيها؛ يجب التأكد من ضبط زاوية الجيب التصادمي بين **$70^\\circ$ إلى $74^\\circ$**.

---

### المشكلة الثالثة: الثقوب الدقيقة في الورقة (Pinholes):
ظهور ثقوب ضوئية دقيقة متناثرة في شيت التيشيو يسبب انهيار المظهر والشد:
- **السبب الأول (كيميائي - Stickies & Pitch):** ترسب بقع المواد اللاصقة الدقيقة على سلك التشكيل أو اللباد تسد نزح المياه موضعياً وتخلق ثقباً عند نزع الورقة.
  - **العلاج:** معالجة مياه الدائرة بمسحوق التلك الكاتيوني (**Cationic Talc**) أو إنزيمات تشتيت الشحوم الدقيقة.
- **السبب الثاني (ميكانيكي - Blade Punctures):** وجود نتوءات خشنة أو حبيبات كربونية محترقة على شفرة سكين الكريب تخرق الورقة أثناء قشطها.
  - **العلاج:** تنظيف مسطرة رش طلاء اليانكي واستبدال شفرة السكين.

---

### المصفوفة الصناعية الشاملة لاستكشاف الأعطال (Master Troubleshooting Matrix):

| العيب التشغيلي | المؤشر المعملي المرصود | السبب الجذري الأرجح | خطة العمل العلاجية الحاسمة |
|---|---|---|---|
| **انخفاض الشد الرطب لمناديل المطبخ** | اختبار Finch Cup يقرأ أقل من $20\\%$ | نقص تشابك راتنج PAE أو عدم ملائمة الأس الهيدروجيني | 1. ضبط الأس الهيدروجيني في الدائرة الرطبة بين $7.0 - 7.5$.<br>2. زيادة جرعة PAE لـ $12 - 15\\text{ kg/t}$.<br>3. فحص حرارة التجفيف. |
| **ظهور تباين في قطر الرول (Conical Logs)** | اختلاف قطر أسطوانة الورق من اليمين لليسار | عدم استواء بروفايل الوزن أو السماكة (CD Profile) | 1. معايرة فتحات ميكرومتر صندوق التدفق (Slice Lip / Dilution).<br>2. فحص موازنة ضغط درفيل الركوب على خط اللف. |
| **صعوبة قطع مناديل التخريم** | تمزق المنديل طولياً بدلاً من خط القطع | انخفاض عمق سكين التخريم أو تآكل السندان الثابت | 1. استبدال شفرات التخريم المسننة.<br>2. خفض سمك الرابط (Tie) من $0.5$ إلى $0.35\\text{ mm}$. |
| **رائحة غير مستحبة في المناديل المبللة** | رائحة تعفن خفيفة بعد فتح العبوة | نشاط بكتيري في الدائرة المائية البيضاء المغلقة | 1. رفع جرعة المعقمات والمبيدات الحيوية (Biocides).<br>2. غسيل دوري قلوي وحمضي لمنظومة الأنابيب والصناديق. |
`,
    estimated_minutes: 25,
    order: 4,
    is_free: true,
  },
];

// ── 5. Quiz Questions (الأسئلة التفاعلية التخصصية) ─────────────────────────

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'quiz-t101-1-q1',
    lesson_id: 'les-t101-1',
    question: 'ما هو الفارق الكيميائي والوظيفي الأساسي بين مناديل المطبخ (Kitchen Towels) وورق التواليت (Toilet Paper)؟',
    question_en: 'What is the main chemical difference between kitchen towels and bath tissue?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'مناديل المطبخ تحتوي على راتنج مقاومة البلل الدائم (PAE) بينما ورق التواليت يجب أن يتفكك بسرعة في الماء بدون PAE', is_correct: true },
      { id: 'opt-2', text: 'ورق التواليت يحتوي على نسبة ألياف لب قصير أقل من مناديل المطبخ', is_correct: false },
      { id: 'opt-3', text: 'مناديل المطبخ تُصنع بدون كرمشة بينما ورق التواليت يُكرمش فقط', is_correct: false },
      { id: 'opt-4', text: 'لا يوجد أي فرق كيميائي، الفرق في وزن الجراماج فقط', is_correct: false },
    ],
    explanation: 'مناديل المطبخ تحتاج للحفاظ على قوتها عند ملامسة الماء والزيوت، لذلك يُضاف لها راتنج PAE الدائم. أما ورق التواليت فيُحظر فيه استخدام مقاومات البلل الدائمة حتى يتفتت في غضون ثوانٍ داخل المرحاض.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-1-q1',
    lesson_id: 'les-t102-1',
    question: 'لماذا يُفضل استخدام اللب القصير (مثل اليوكاليبتوس) بنسبة تصل لـ 75-85% في صناعة مناديل الوجه الفاخرة؟',
    question_en: 'Why is eucalyptus short fiber preferred at up to 85% in premium facial tissue?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'لأن أليافه قصيرة ورقيقة الجدار، وتوفر ملايين الأطراف الحرة بعد الكرمشة مما يُولد ملمساً مخملياً وتعداد ألياف يفوق 20 مليون/جم', is_correct: true },
      { id: 'opt-2', text: 'لأنه يعطي أعلى متانة شد في الماكينات فائقة السرعة', is_correct: false },
      { id: 'opt-3', text: 'لأنه يمنع امتصاص الماء تماماً ويزيد من عزل الرطوبة', is_correct: false },
      { id: 'opt-4', text: 'لأنه أرخص خامة في السوق بغض النظر عن الجودة والمواصفات', is_correct: false },
    ],
    explanation: 'ألياف اللب القصير (Eucalyptus) قصيرة (حوالي 0.8-1.0 ملم) ورقيقة الجدار الخلوي، وعند كرمشتها على اليانكي تتفتح نهاياتها الحرة على السطح لتنتج الملمس المخملي المميز، بالإضافة لتعداد ألياف هائل يملأ بنية الورقة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-1-q2',
    lesson_id: 'les-t102-1',
    question: 'في دراسة مورفولوجيا ألياف السليلوز، ماذا تعني نسبة رانكل (Runkel Ratio < 1) بالنسبة لجودة ورق التيشيو؟',
    question_en: 'What does a Runkel Ratio of less than 1 mean for tissue paper quality?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'أن جدار الخلية رقيق وتجويفها واسع، فتنهار الليفة وتتسطح كشريط حريري (Flat Ribbon) يعطي نعومة فائقة ومرونة لمسية', is_correct: true },
      { id: 'opt-2', text: 'أن الليفة صلبة أنبوبية تقاوم الانهيار وتعطي ملمساً خشناً كالشوك', is_correct: false },
      { id: 'opt-3', text: 'أن الليفة غير قابلة للتبييض بالمواد الكيميائية', is_correct: false },
      { id: 'opt-4', text: 'أن الليفة مكسورة ولا يمكن تصنيعها كشيت ورقي', is_correct: false },
    ],
    explanation: 'نسبة رانكل (سماكة الجدارين مقسومة على قطر التجويف) عندما تكون أقل من 1 تعني أن الجدار رقيق مقارنة بالتجويف الخلوي، مما يسمح بانهيار الليفة وتسطحها التام عند الكبس والتجفيف لتتحول إلى شريط حريري ناعم للغاية.',
    order: 2,
    points: 10,
  },
  {
    id: 'quiz-t102-1b-q1',
    lesson_id: 'les-t102-1b',
    question: 'ما هو الأثر الهندسي لارتفاع رقم الخشونة (High Coarseness) في اللب الطويل الجنوبي (SBSK) مقارنة باللب الشمالي (NBSK)؟',
    question_en: 'What is the engineering impact of high coarseness in SBSK compared to NBSK?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'يعني أن جدار الليفة سميك ومكتنز ويقاوم الانهيار، مما يُكسب المنديل خشونة وحكة ملحوظة (Harsh Handfeel) مع انخفاض تعداد الألياف في الجرام', is_correct: true },
      { id: 'opt-2', text: 'يجعل المنديل أكثر نعومة من اللب الشمالي', is_correct: false },
      { id: 'opt-3', text: 'يضاعف عدد الألياف في الجرام ثلاث مرات', is_correct: false },
      { id: 'opt-4', text: 'لا يؤثر إطلاقاً على الملمس الحسي للمنديل', is_correct: false },
    ],
    explanation: 'الكورسنيس هو الوزن الخطي لليفة؛ فالرقم المرتفع في اللب الجنوبي (25-32 mg/100m) يعكس جداراً خلوياً سميكاً يرفض التسطح، فتبرز نهاياته كأشواك مجهرية خشنة على سطح المنديل، بينما يتميز اللب الشمالي بكورسنيس منخفض (13-16 mg/100m) يمنح قوة شد دون تدمير النعومة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-1b-q2',
    lesson_id: 'les-t102-1b',
    question: 'لماذا قد يُسجل اللب المجفف بالهواء الساخن (Flash-Dried Pulp) قراءة إنشيال شوبر (^∘SR) منخفضة ومخادعة (10-12 ^∘SR) في الفحص البارد؟',
    question_en: 'Why does flash-dried pulp give a deceptively low initial Schopper-Riegler (°SR) reading in cold testing?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'بسبب ظاهرة الالتواءات الكامنة (Fiber Latency) وتجمد الألياف في حالة انثناءات لا تعيق الماء إلا بعد التفكيك الساخن (85-90°م)', is_correct: true },
      { id: 'opt-2', text: 'لأن ألياف اللب الفلاش تفقد اللجنين بالكامل وتصبح شفافة', is_correct: false },
      { id: 'opt-3', text: 'لأن اللب الفلاش يتميز بنعومة أسطورية أعلى من اللب المجفف على شيتات', is_correct: false },
      { id: 'opt-4', text: 'بسبب احتواء اللب الفلاش على مواد زيتية تمنع التصاق الماء', is_correct: false },
    ],
    explanation: 'التجفيف الحراري السريع يجمد الألياف في حالة التواءات وانحناءات ميكانيكية حادة (Fiber Latency) تتصرف كجسيمات كروية لا تتشابك، مما يخدع مقياس الشوبر بقراءة منخفضة. وتتطلب المواصفة القياسية تفكيكها في ماء ساخن (85-90°م) لتليين الهيميسليلوز واستقامة الألياف لقراءة قيمتها الحقيقية.',
    order: 2,
    points: 10,
  },
  {
    id: 'quiz-t102-2-q1',
    lesson_id: 'les-t102-2',
    question: 'ما هي الفائدة الهندسية والاقتصادية لاستخدام صندوق التدفق متعدد الطبقات (Stratified Headbox) في ماكينات التيشيو؟',
    question_en: 'What is the engineering and economic advantage of a stratified multi-layer headbox in tissue?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'توجيه 100% لب قصير فائق النعومة للطبقات الخارجية الملامسة للبشرة، وحصر اللب الطويل المسلح في الطبقة الوسطى دون التأثير على النعومة السطحية', is_correct: true },
      { id: 'opt-2', text: 'خلط الألياف الطويلة والقصيرة عشوائياً في طبقة واحدة مفرغة', is_correct: false },
      { id: 'opt-3', text: 'إلغاء الحاجة لأسطوانة اليانكي وكابينة الهواء الساخن', is_correct: false },
      { id: 'opt-4', text: 'تقليل سرعة الماكينة للنصف لتوفير الطاقة الكهربائية', is_correct: false },
    ],
    explanation: 'يتيح الصندوق متعدد الطبقات وضع اللب القصير فائق النعومة على الأسطح الخارجية الملامسة لسكين الكرمشة ولجلد المستهلك، مع حصر اللب الطويل المكرر في الطبقة الداخلية ليعمل كهيكل حامل متين، مما يرفع مؤشر النعومة ويخفض تكلفة الخلطة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-2b-q1',
    lesson_id: 'les-t102-2b',
    question: 'ما هو التحدي الرئيسي لظاهرة التقرّن السليلوزي (Hornification) عند إعادة تدوير ألياف التيشيو (DIP)؟',
    question_en: 'What is the main challenge of hornification in recycled DIP tissue fibers?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'فقدان قدرة الألياف على الانتفاخ بالماء (Swelling Loss) وتصلب جدارها الخلوي، مما يسبب انكسارها عند الكرمشة وتولد ملمس خشن وغبار كثيف', is_correct: true },
      { id: 'opt-2', text: 'تحول الألياف إلى مادة هلامية تمنع تجفيف الورقة على اليانكي', is_correct: false },
      { id: 'opt-3', text: 'مضاعفة عدد الألياف في الجرام الواحد بصورة غير مسبوقة', is_correct: false },
      { id: 'opt-4', text: 'تحسن نعومة المنديل بشكل تلقائي دون الحاجة لمطريات كيميائية', is_correct: false },
    ],
    explanation: 'التقرن ناتج عن تكون روابط هيدروجينية داخلية غير قابلة للعكس بعد دورات التجفيف السابقة، فتنخفض قيمة احتجاز الماء WRV وتتصلب الليفة وتفقد مرونتها، فتنكسر عند اصطدامها بسكين الكرمشة منتجة غباراً وملمساً خشناً.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-3a-q1',
    lesson_id: 'les-t102-3a',
    question: 'لماذا يُفضل تشغيل أحواض إذابة البالات (Hydrapulper) عند تركيز بين 4.5% و 6.0% باستخدام مياه بيضاء دافئة (45-55°م)؟',
    question_en: 'Why is tissue hydrapulper operated at 4.5-6.0% consistency with warm white water (45-55°C)?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'لتوفير احتكاك هيدروديناميكي كافٍ بين الألياف (Fiber-to-Fiber Friction) وتسريع انتفاخها وتليين الهيميسليلوز واختصار زمن الدورة دون تعليق الدوار', is_correct: true },
      { id: 'opt-2', text: 'لتقطيع الألياف ميكانيكياً إلى أجزاء دقيقة جداً لرفع النعومة', is_correct: false },
      { id: 'opt-3', text: 'لغليان المياه وقتل البكتيريا فقط دون أي غرض هيدروديناميكي', is_correct: false },
      { id: 'opt-4', text: 'لمنع دوران مضخة تفريغ العجينة أثناء التشغيل', is_correct: false },
    ],
    explanation: 'التركيز بين 4.5-6.0% يوفر التوازن المثالي بين الاحتكاك البيني والسيولة الهيدروديناميكية، بينما تسرع المياه الدافئة تغلغل الماء في مسام البالة وفك الروابط الهيدروجينية بأقل استهلاك طاقة kWh/t.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-3b-q1',
    lesson_id: 'les-t102-3b',
    question: 'كيف تحمي ريش الدوار (Rotor Foils) سلة الشقوق الدقيقة (0.15-0.25 ملم) في مصافي الضغط من الانسداد (Screen Plugging)؟',
    question_en: 'How do rotor foils protect fine slotted screen baskets from plugging in tissue pressure screens?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'مؤخرة الريشة تصنع نبضة ضغط سالبة هيدروديناميكية تسحب الألياف العالقة من الشقوق للداخل وتغسل السلة باستمرار لمنع انسدادها', is_correct: true },
      { id: 'opt-2', text: 'الريشة تحتك بالسلة ميكانيكياً لكشط الألياف بالقوة العنيفة', is_correct: false },
      { id: 'opt-3', text: 'الريشة ترفع درجة حرارة العجينة لإذابة الشوائب المعدنية', is_correct: false },
      { id: 'opt-4', text: 'الريشة تسد الفتحات وتوقف تدفق المقبول بشكل متقطع', is_correct: false },
    ],
    explanation: 'دوران ريش الفويل يولد نبضة سحب سالبة (Negative Pulse) عند الحافة الخلفية تفكك الألياف المحشورة في شقوق السلة باستمرار لمنع انسدادها وتوقف الجريان (De-plugging effect).',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-4a-q1',
    lesson_id: 'les-t102-4a',
    question: 'أين يجب حقن ماء التخفيف في حلقة التحكم المغلقة في تركيز العجينة (Consistency Control Loop) ولماذا؟',
    question_en: 'Where should dilution water be injected in a consistency control loop and why?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'عند مدخل سحب طلمبة الضخ (Pump Suction) لضمان الخلط التام والفوري للألياف مع الماء بواسطة مروحة الطلمبة قبل وصولها للحساس', is_correct: true },
      { id: 'opt-2', text: 'بعد حساس التركيز مباشرة لتقليل القراءة المسجلة', is_correct: false },
      { id: 'opt-3', text: 'في قاع خزان الماكينة بدون تحريك أو تقليب', is_correct: false },
      { id: 'opt-4', text: 'داخل صندوق التدفق الهيدروليكي مباشرة', is_correct: false },
    ],
    explanation: 'حقن ماء التخفيف قبل سحب الطلمبة يضمن استغلال دوار الطلمبة (Impeller) كخلاط هيدروليكي فائق، فيصل المعلق متجانساً تماماً إلى حساس التركيز ولا تحدث قراءات كاذبة أو تذبذب في الصمام.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t102-4b-q1',
    lesson_id: 'les-t102-4b',
    question: 'ما هو الإجراء التشغيلي الفوري لمهندس التيشيو إذا أظهر تقرير الـ FQA هبوطاً ملحوظاً في متوسط طول الألياف Lw للب طويل NBSK إلى أقل من 2.0 ملم؟',
    question_en: 'What is the immediate operational action if FQA shows weighted fiber length Lw drops below 2.0 mm for NBSK?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'زيادة خلوص جهاز التفكيك (Deflaker Clearance) وتخفيض حمل الحافة (SEL) على أقراص التكرير لمنع تقطيع الألياف وحماية شبكة الشد', is_correct: true },
      { id: 'opt-2', text: 'زيادة نسبة اللب القصير إلى 95% فوراً', is_correct: false },
      { id: 'opt-3', text: 'إيقاف تدفق ماء التخفيف تماماً وإغلاق الصمامات', is_correct: false },
      { id: 'opt-4', text: 'زيادة سرعة الماكينة إلى 2200 م/دقيقة لتعويض النقص', is_correct: false },
    ],
    explanation: 'هبوط متوسط الطول Lw في اللب الطويل مؤشر خطر على حدوث تقطيع ميكانيكي حاد للألياف بدلاً من التفكيك والتشريب، مما يهدد بانهيار قوة شد الشيت وتكرار الانقطاعات على الماكينة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t201-1-q1',
    lesson_id: 'les-t201-1',
    question: 'ما هي استراتيجية التكرير (Refining) الهندسية الصحيحة في مصانع التيشيو الحديثة؟',
    question_en: 'What is the correct refining strategy in modern tissue mills?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'تكرير تيار اللب الطويل فقط بحمل حافة منخفض (SEL 0.8-1.4 J/m) وعدم تكرير اللب القصير إطلاقاً لحماية النعومة', is_correct: true },
      { id: 'opt-2', text: 'تكرير كل الألياف معاً بقوة شديدة لأعلى درجة إنضاج ممكنة', is_correct: false },
      { id: 'opt-3', text: 'تكرير ألياف اليوكاليبتوس وحدها وإهمال اللب الطويل', is_correct: false },
      { id: 'opt-4', text: 'إلغاء التكرير تماماً لجميع أنواع الألياف', is_correct: false },
    ],
    explanation: 'في التيشيو يُكرر تيار ألياف اللب الطويل منفرداً بحمل حافة منخفض (SEL) لتنشيط الروابط السطحية، بينما يُمنع تكرير اللب القصير (اليوكاليبتوس) لمنع تفتته وفقدان النعومة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t302-2-q1',
    lesson_id: 'les-t302-2b',
    question: 'إذا كانت سرعة أسطوانة اليانكي 1800 م/دقيقة وسرعة درفيل اللف النهائي (Reel) 1440 م/دقيقة، فما هي نسبة الكرمشة (Crepe Ratio)؟',
    question_en: 'If Yankee speed is 1800 m/min and Reel speed is 1440 m/min, what is the Crepe Ratio?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: '20%', is_correct: true },
      { id: 'opt-2', text: '10%', is_correct: false },
      { id: 'opt-3', text: '25%', is_correct: false },
      { id: 'opt-4', text: '15%', is_correct: false },
    ],
    explanation: 'نسبة الكرمشة = (سرعة اليانكي - سرعة اللف) / سرعة اليانكي = (1800 - 1440) / 1800 = 360 / 1800 = 0.20 أي 20%.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t402-2-q1',
    lesson_id: 'les-t402-2',
    question: 'ما هو الإجراء الفوري الموصى به عند ظهور علامات اهتزاز سكين الكريب (Yankee Chatter Marks)؟',
    question_en: 'What is the immediate action recommended when Yankee chatter marks appear?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'زيادة معدل ضخ المادة العازلة (Release Agent)، فحص ضغط السكين، واستبدال السكين بآخر جديد حاد', is_correct: true },
      { id: 'opt-2', text: 'زيادة المادة اللاصقة (Adhesive) لأقصى حد وزيادة سرعة الماكينة', is_correct: false },
      { id: 'opt-3', text: 'إيقاف ضخ المياه تماماً إلى سلك التشكيل', is_correct: false },
      { id: 'opt-4', text: 'زيادة حرارة الكابينة الغازية إلى 600 درجة مئوية', is_correct: false },
    ],
    explanation: 'تحدث علامات الـ Chatter غالباً بسبب قساوة فيلم الطلاء وزيادة الاحتكاك، لذا يُرفع معدل المادة العازلة (Release) فوراً ويُستبدل سكين الكريب ويُفحص تزييت ونظافة الحامل.',
    order: 1,
    points: 10,
  },

  {
    id: 'quiz-t303-1-q1',
    lesson_id: 'les-t303-1',
    question: 'لماذا تتفوق ماكينة التشكيل الهلالي (Crescent Former) على ماكينة الفودرينير (Fourdrinier) في سرعات التيشيو الفائقة (> 2000 م/د)؟',
    question_en: 'Why does a Crescent Former outperform a Fourdrinier at ultra-high tissue speeds (> 2000 m/min)?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'لأن حصر العجينة بين السلك واللباد يلغي تماماً اضطراب السطح الحر (Free Surface) وتناثر الألياف الناتج عن قوى الهواء والطرد المركزي', is_correct: true },
      { id: 'opt-2', text: 'لأن ماكينة الفودرينير تستهلك كميات أقل من مياه التخفيف', is_correct: false },
      { id: 'opt-3', text: 'لأن ماكينة Crescent Former تستخدم أسلاك تشكيل برونزية أبطأ في الحركة', is_correct: false },
      { id: 'opt-4', text: 'لأن الفودرينير لا يمكنها إنتاج ورق يحتوي على ألياف الخشب الصلب', is_correct: false },
    ],
    explanation: 'في ماكينة الفودرينير، يكون السطح العلوي للعجينة معرضاً للهواء الطلق؛ وعند سرعات تفوق 800 م/د تتولد دوامات هوائية وقوى طرد تتسبب في تطاير العجينة (Stock Jump) وتشوه الورقة. أما في Crescent Former، فتحصر العجينة بين سلك ولباد مما يلغي السطح الحر ويتيح سرعات تفوق 2200 م/د بانتظام استثنائي.',
    order: 1,
    points: 10,
  },
  {
    id: 'les-t303-2-q1',
    lesson_id: 'les-t303-2',
    question: 'ما هو ضغط النزح الهيدروديناميكي المطبق على العجينة إذا كان شد السلك الخارجي T = 9.0 kN/m ونصف قطر درفيل التشكيل R = 0.90 m؟',
    question_en: 'What is the forming pressure if wire tension T = 9.0 kN/m and roll radius R = 0.90 m?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: '10.0 kPa (حيث P = T / R = 9.0 / 0.90 = 10 kPa)', is_correct: true },
      { id: 'opt-2', text: '8.1 kPa', is_correct: false },
      { id: 'opt-3', text: '100.0 kPa', is_correct: false },
      { id: 'opt-4', text: '0.1 kPa', is_correct: false },
    ],
    explanation: 'وفق معادلة ضغط التشكيل المنحني: P = T / R. بقسمة 9.0 kN/m على 0.90 m نحصل على 10.0 kPa، وهو الضغط الهيدروديناميكي الفوري الذي يعتصر مياه العجينة نحو السلك الخارجي.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t303-3-q1',
    lesson_id: 'les-t303-3',
    question: 'ما هو النطاق الموصى به لنسبة سرعة التدفق إلى السلك (J/W Ratio) عند تصنيع مناديل الوجه الفاخرة فائقة النعومة؟',
    question_en: 'What is the recommended Jet-to-Wire ratio for ultra-soft premium facial tissue?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: '0.99 إلى 1.01 (لإنتاج ورقة متماثلة التوزيع Square Sheet بنسبة MD/CD منخفضة تقترب من 1.2)', is_correct: true },
      { id: 'opt-2', text: '0.90 إلى 0.94 لسحب الألياف في اتجاه واحد بقوة', is_correct: false },
      { id: 'opt-3', text: '1.15 إلى 1.20 لزيادة كرمشة الورقة', is_correct: false },
      { id: 'opt-4', text: 'لا علاقة لنسبة J/W بنعومة الورقة', is_correct: false },
    ],
    explanation: 'عند تطابق سرعة تيار العجينة مع سرعة السلك (J/W ≈ 1.0)، تترسب الألياف باتجاهات عشوائية ثلاثية متساوية، فتكون نسبة الشد MD/CD متوازنة وملمس المنديل فائق النعومة والانسيابية في جميع الاتجاهات دون خشونة طولية.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t303-4-q1',
    lesson_id: 'les-t303-4',
    question: 'إذا رصد مهندس التشغيل ظهور ثقوب دبوسية متناثرة (Pinholes) في شيت التيشيو مع نفاذ ألياف عبر السلك، فما هو الإجراء الفوري الأرجح؟',
    question_en: 'What is the most effective immediate action to fix pinholes caused by excessive wire tension?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'خفض شد السلك الخارجي تدريجياً لتقليل ضغط اعتصار الألياف وتعديل نقطة اصطدام التدفق لتكون أقرب لمركز الفجوة', is_correct: true },
      { id: 'opt-2', text: 'زيادة سرعة الماكينة بنسبة 20% فوراً', is_correct: false },
      { id: 'opt-3', text: 'رفع ضغط بخار أسطوانة اليانكي', is_correct: false },
      { id: 'opt-4', text: 'إيقاف رشاشات غسيل اللباد بالكامل', is_correct: false },
    ],
    explanation: 'الشد المفرط للسلك الخارجي يولد ضغط نزح عنيف يعتصر الألياف ويجبرها على النفاذ من مسام السلك مخلفة ثقوباً دبوسية (Fiber Bleed-through). خفض الشد وضبط زاوية التدفق نحو المركز يعالج المشكلة فورياً.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t304-1-q1',
    lesson_id: 'les-t304-1',
    question: 'ما هو نطاق الضغط التشغيلي القياسي لرشاشات غسيل اللباد المتذبذبة فائقة الضغط (HP Felt Showers)؟',
    question_en: 'What is the standard operating pressure range for HP felt oscillating showers?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: '18 إلى 32 بار (باستخدام فواني إبرية نفاثة صلبة لاختراق عمق مسام اللباد)', is_correct: true },
      { id: 'opt-2', text: '2 إلى 4 بار فقط', is_correct: false },
      { id: 'opt-3', text: '80 إلى 120 بار', is_correct: false },
      { id: 'opt-4', text: '0.5 إلى 1.0 بار', is_correct: false },
    ],
    explanation: 'تتطلب رشاشات تنظيف اللباد ضغطاً مرتفعاً بين 18 إلى 32 بار لاختراق شبكة الألياف الصوفية المتراصة وطرد المواد اللاصقة وجزيئات الراتنج دون تمزيق نسيج اللباد.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t304-2-q1',
    lesson_id: 'les-t304-2',
    question: 'لماذا تُصنع فوهات فواني الضغط العالي الإبرية (Needle Nozzles) من الياقوت الصناعي (Ruby/Sapphire)؟',
    question_en: 'Why are HP shower needle nozzle orifices made of ruby or sapphire?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'لمقاومة الاحتكاك والتآكل الميكانيكي الناتج عن سريان الماء فائق السرعة تحت ضغط 30 بار، والذي قد يوسع فوهات الصلب العادي خلال أيام', is_correct: true },
      { id: 'opt-2', text: 'لتلوين رذاذ الماء لتسهيل رؤيته', is_correct: false },
      { id: 'opt-3', text: 'لتقليل الوزن الكلي لماسورة الرشاش', is_correct: false },
      { id: 'opt-4', text: 'لأن الياقوت يمنع تكون الصدأ الكيميائي فقط', is_correct: false },
    ],
    explanation: 'الاحتكاك الهيدروديناميكي المستمر تحت ضغط يتجاوز 25-30 بار يسبب تآكلاً سريعاً للمعادن العادية، مما يوسع قطر الفوهة ويفقد النفاث تماسكه. فوهات الياقوت الصناعي فائقة الصلادة تحافظ على دقة القطر الميكروني لشهور طويلة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t304-3-q1',
    lesson_id: 'les-t304-3',
    question: 'لماذا يجب إمالة فواني المروحة المسطحة بزاوية ميلان (Offset Angle) بمقدار 5° إلى 15° عن محور ماسورة الرش؟',
    question_en: 'Why must flat fan nozzles be offset by 5° to 15° from the shower pipe axis?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'لمنع تصادم أطراف رذاذ الفواني المتجاورة في الهواء وجهاً لوجه، مما يمنع تكون خطوط مائية كثيفة ومركزة على اللباد', is_correct: true },
      { id: 'opt-2', text: 'لتوجيه الماء نحو محرك الماكينة', is_correct: false },
      { id: 'opt-3', text: 'لخفض استهلاك مضخة الرشاش بنسبة 50%', is_correct: false },
      { id: 'opt-4', text: 'لزيادة سرعة دوران اللباد', is_correct: false },
    ],
    explanation: 'إذا كانت الفواني في خط مستقيم موازٍ للماسورة، تصطدم أطراف أجنحة الرذاذ المتجاورة ببعضها وتتكسر لتسقط كخطوط مائية مركزة غزيرة (Heavy Streaks). زاوية الميلان (Offset 5°-15°) تجعل الرذاذ يتجاوز بعضه بانسيابية دون تصادم.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t304-4-q1',
    lesson_id: 'les-t304-4',
    question: 'ما هي القاعدة الأساسية لضبط شوط التذبذب الميكانيكي (Stroke Length) لماسورة رشاش الضغط العالي؟',
    question_en: 'What is the golden rule for setting the oscillation stroke length of an HP shower?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'يجب أن يساوي طول الشوط بالضبط المسافة الفاصلة بين الفواني على الماسورة (Stroke = Nozzle Pitch)', is_correct: true },
      { id: 'opt-2', text: 'يجب أن يكون الشوط ضعف طول الماكينة بالكامل', is_correct: false },
      { id: 'opt-3', text: 'يجب أن يكون الشوط ثابتاً عند 10 ملم دائماً بصرف النظر عن تباعد الفواني', is_correct: false },
      { id: 'opt-4', text: 'لا يشترط أي تناسب بين الشوط وتباعد الفواني', is_correct: false },
    ],
    explanation: 'عندما يساوي شوط التذبذب المسافة بين الفواني (Stroke = Pitch)، يضمن النظام أن كل فونية تغطي المنطقة الفاصلة بينها وبين الفونية المجاورة بالكامل، مما يمنع وجود أي خطوط مهملة دون تنظيف (Striping) ويحمي اللباد من التآكل المركز.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t305-1-q1',
    lesson_id: 'les-t305-1',
    question: 'ما هو المكون الكيميائي في مثلث الكوتنج المسؤول عن توسيع النافذة اللزجة المرنة وخفض درجة التحول الزجاجي (Tg) لمنع التزجيج؟',
    question_en: 'Which component in the coating triangle lowers Tg and enhances flexibility to prevent glazing?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'اللاصق الأساسي (Base Adhesive / PAE)', is_correct: false },
      { id: 'opt-2', text: 'المعدل أو الملين (Modifier / Plasticizer)', is_correct: true },
      { id: 'opt-3', text: 'مادة التحرير النفطية (Release Agent)', is_correct: false },
      { id: 'opt-4', text: 'مبيد الفطريات (Biocide)', is_correct: false },
    ],
    explanation: 'المعدل أو الملين (Modifier / Plasticizer) مثل البوليولات، هو المسؤول عن الحفاظ على مرونة الفيلم وتوسيع نافذة اللزوجة والمرونة ومنع تحول الفيلم إلى طور زجاجي صلب وهش.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t305-2-q1',
    lesson_id: 'les-t305-2',
    question: 'أي من المظاهر التالية يُعد علامة تشغيلية مؤكدة على حدوث "استواء مبكر" (Early Leveling) لفيلم الكوتنج؟',
    question_en: 'Which operational symptom clearly indicates premature curing / early leveling?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'تراكم معجون رطب وكتل غروية خلف شفرة التكريب', is_correct: false },
      { id: 'opt-2', text: 'لمعان زجاجي مفرط لسطح اليانكي وتآكل مسنن للشفرة وعلامات تموج (Chatter)', is_correct: true },
      { id: 'opt-3', text: 'نتف الألياف وظهور ثقوب رطبة في الشيت', is_correct: false },
      { id: 'opt-4', text: 'انخفاض حرارة قشرة اليانكي إلى أقل من 80 درجة مئوية', is_correct: false },
    ],
    explanation: 'التزجيج الشديد (Mirror Glaze) وتآكل حافة الشفرة المتسارع مع أصوات اهتزاز وعلامات شاتر وكريب خشن هي المظاهر المباشرة للاستواء المبكر للفيلم قبل وصول الورق للنيب.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t305-3-q1',
    lesson_id: 'les-t305-3',
    question: 'ما هو الإجراء الفوري الأنسب في غرفة التحكم عند ملاحظة "استواء متأخر" وتراكم عجين لزج خلف الشفرة مع نتف الألياف؟',
    question_en: 'What is the immediate action when encountering late leveling, fiber picking, and blade plugging?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'زيادة مادة التحرير (Release Agent) وزيادة مياه التخفيف', is_correct: false },
      { id: 'opt-2', text: 'خفض مادة التحرير، رفع طاقة التجفيف (الهود/البخار)، وتقليل تدفق المياه للرشاش', is_correct: true },
      { id: 'opt-3', text: 'إيقاف عارضة الرشاش كلياً وإطفاء مكبس الضغط', is_correct: false },
      { id: 'opt-4', text: 'خفض سرعة الماكينة مع زيادة نسبة اللاصق لأقصى حد', is_correct: false },
    ],
    explanation: 'في الاستواء المتأخر، الفيلم يعاني من فائض رطوبة ونقص بلمرة، لذا يجب خفض مادة التحرير فوراً، ورفع طاقة التجفيف لتبخير الماء، وتقليل مياه الرشاش الزائدة.',
    order: 1,
    points: 10,
  },
  {
    id: 'quiz-t305-4-q1',
    lesson_id: 'les-t305-4',
    question: 'ما هو المظهر اللوني البصري لفيلم الكوتنج الذي يدل على الحالة المثالية المتوازنة (The Sweet Spot) على أسطوانة اليانكي؟',
    question_en: 'What visual color and appearance indicates the optimum sweet spot of the Yankee coating film?',
    type: 'multiple_choice',
    options: [
      { id: 'opt-1', text: 'أبيض حليبي غائم (Milky / Cloudy)', is_correct: false },
      { id: 'opt-2', text: 'برونزي ذهبي خفيف وشفاف (Light Bronze / Golden Translucent)', is_correct: true },
      { id: 'opt-3', text: 'أسود داكن متفحم (Dark Carbonized)', is_correct: false },
      { id: 'opt-4', text: 'شفاف براق مثل مرآة الكروم الصلبة (Mirror Glassy)', is_correct: false },
    ],
    explanation: 'اللون البرونزي الذهبي الشفاف الخفيف هو الدليل البصري المعياري على فيلم كوتنج متوازن وناضج يعمل في نافذته اللزجة المرنة دون تزجيج أو رطوبة زائدة.',
    order: 1,
    points: 10,
  },];

// ── 6. Practical Projects ──────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'proj-tissue-benchmark',
    title: 'المقارنة المعملية لعينات مناديل تجارية: النعومة، المتانة، والجراماج',
    title_en: 'Benchmarking Commercial Tissue Products: Softness vs Tensile Lab',
    description: 'مشروع معملي تطبيقي يقوم فيه المتدرب بجمع 4 عينات تجارية مختلفة من مناديل الوجه والمطبخ، وتحديد الوزن القياسي (GSM)، وفحص متانة الشد، وقياس السعة الامتصاسية، وتقييم مؤشر النعومة الحسي.',
    category: 'مختبر ضبط الجودة والمعايرة',
    difficulty: 'beginner',
    estimated_hours: 6,
    objectives: [
      'تطبيق الحسابات الرياضية للوزن القياسي (Grammage) للطبقة الواحدة والطبقات المتعددة',
      'بناء مصفوفة تقييم حسي وميكانيكي للنعومة والمتانة (Benchmarking Matrix)',
      'التمييز العملي بين مناديل الألياف البكر ومناديل الألياف المعاد تدويرها',
    ],
    materials: [
      'عينات من 4 علب مناديل تجارية مختلفة في السوق (وجه، تواليت، مطبخ)',
      'ميزان حساس بدقة 0.01 أو 0.001 جرام',
      'مسطرة معدنية دقيقة وقاطع شفرات (Cutter) لقطع عينات 10×10 سم',
      'وعاء ماء مدرج وماصة قطارة ومؤقت ثوانٍ (Stopwatch)',
    ],
    safety_notes: [
      'توخي الحذر الشديد عند استخدام الشفرات الحادة لتقطيع العينات',
      'إجراء الاختبارات في بيئة معتدلة الرطوبة والحرارة لتفادي تأثر نتائج الورق',
    ],
    steps: [
      {
        order: 1,
        title: 'تقطيع ووزن العينات لحساب الجراماج (GSM)',
        description: 'قم بقص 10 مربعات بأبعاد 10 سم × 10 سم (المساحة = 0.01 م²) لكل صنف، وزِنها معاً واحسب متوسط وزن المتر المربع.',
        tips: ['وزن 10 ورقات معاً يعطي دقة أعلى بعشر مرات من وزن ورقة مفردة.'],
      },
      {
        order: 2,
        title: 'اختبار زمن وسعة الامتصاص المائي',
        description: 'ضع قطرة ماء بحجم 0.1 مل على سطح كل منديل وسجل زمن الامتصاص الكامل بالثواني، ثم اغمر العينة لمدة 30 ثانية وقس وزن الماء المحتجز.',
        tips: ['مناديل المطبخ الجيدة تحتجز ماءً يعادل 7 إلى 9 أضعاف وزنها الجاف.'],
      },
      {
        order: 3,
        title: 'اختبار التفتت في الماء (Dispersibility Test)',
        description: 'ضع ورقة تواليت وأخرى من منديل المطبخ في كأسين ماء وحركهما برفق لمدة 30 ثانية ولاحظ الفرق الصارخ في تفكك ألياف ورق التواليت مقابل تماسك منديل المطبخ المعالج بـ PAE.',
        tips: ['هذا الاختبار يثبت عملياً الفرق بين وجود راتنج مقاومة البلل وغيابه.'],
      },
      {
        order: 4,
        title: 'تحليل البيانات وإعداد تقرير المقارنة',
        description: 'سجل النتائج في جدول مقارن واحسب مؤشر جودة كل منتج.',
      },
    ],
    checklist: [
      'تم حساب وزن الجراماج الفعلي للعينات الأربعة',
      'تم تسجيل زمن وسعة الامتصاص',
      'تم التحقق من قابلية تفتت ورق الحمام',
      'تمت كتابة التقرير الفني والمقارنة مع المواصفات العالمية',
    ],
    expected_results: 'الوصول إلى تقرير فني احترافي يقيس بدقة أداء المنتجات التجارية ويكشف نسب الخلط ونوعية المواد الكيميائية المستخدمة في كل منتج.',
    troubleshooting: [
      'تذبذب قراءات الوزن: تأكد من تكييف العينات في غرفة غير رطبة وعدم ملامستها باليد المبتلة.',
    ],
    is_published: true,
  },

  {
    id: 'proj-tissue-crepe-calc',
    title: 'نمذجة وضبط نسبة الكرمشة وحسابات استهلاك طاقة اليانكي',
    title_en: 'Yankee Crepe Ratio Modeling & Thermal Energy Balance',
    description: 'مشروع هندسي حسابي متقدم لمحاكاة توازن الطاقة وسرعات خط إنتاج التيشيو، وحساب نسبة الكرمشة (Crepe Ratio)، وتأثير زوايا سكين الكريب على سمك الورقة واستطالتها.',
    category: 'هندسة العمليات والتشغيل الميداني',
    difficulty: 'advanced',
    estimated_hours: 8,
    objectives: [
      'حساب ميزان الكتلة والطاقة لأسطوانة اليانكي والكابينة الغازية',
      'برمجة جدول محاكاة لحساب نسبة الكرمشة (Crepe Ratio) وسرعة الماكينة الفعالة',
      'تحليل تأثير زاوية سكين الكريب (Blade Bevel) على خواص الاستطالة والنعومة',
    ],
    materials: [
      'برنامج جداول بيانات (Excel أو Google Sheets)',
      'بيانات ماكينة تيشيو هلالية (سرعة يانكي، سرعة درفيل، ضغط بخار، حرارة الكابينة)',
      'مخططات الكرمشة الهندسية القياسية',
    ],
    safety_notes: [
      'الحسابات الهندسية الدقيقة تمنع الهدر الحراري وتقلل من خطر انفصال الورق على السرعات العالية',
    ],
    steps: [
      {
        order: 1,
        title: 'بناء نموذج سرعات الماكينة ونسبة الكرمشة',
        description: 'قم بإدخال معادلة الكرمشة الرياضية واختبار سيناريوهات نسب كرمشة من 14% إلى 22% عند سرعات دوران يانكي تتراوح من 1500 إلى 2000 م/دقيقة.',
      },
      {
        order: 2,
        title: 'حساب ميزان التجفيف الحراري (Thermal Balance)',
        description: 'احسب كمية المياه المتبخرة على أسطوانة اليانكي من تركيز الدخول (38-42% جفاف) إلى رطوبة الخروج (95% جفاف)، وتوزيع الحمل بين البخار الداخلي وهواء الكابينة.',
      },
      {
        order: 3,
        title: 'محاكاة استهلاك الطاقة النوعي (Specific Energy Consumption)',
        description: 'احسب استهلاك الغاز الطبيعي (Nm³/ton) والبخار (ton steam / ton paper) وتحديد فرص التوفير.',
      },
    ],
    checklist: [
      'تم حساب نسبة الكرمشة بدقة رياضية',
      'تم حساب معدل تبخير المياه بالكيلوجرام/ساعة',
      'تم حساب كفاءة استهلاك الطاقة الحرارية',
    ],
    expected_results: 'نموذج محاكاة تشغيلي يمكن استخدامه مباشرة في غرفة التحكم بمصنع التيشيو لضبط سرعات الماكينة وتحسين استهلاك الطاقة بنسبة تصل إلى 12%.',
    troubleshooting: [
      'إذا كانت نسبة الكرمشة الناتجة غير متطابقة مع الاستطالة، تحقق من معامل انزلاق درفيل السحب.',
    ],
    is_published: true,
  },
];

// ── 7. FAQ ─────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'ما هي عائلة منتجات التيشيو الأساسية؟',
    answer: 'تشمل مناديل الوجه (Facial Tissue)، ورق التواليت والحمام (Bath Tissue)، مناديل المطبخ والتجفيف (Kitchen Towels)، ومناديل المائدة (Napkins)، بالإضافة إلى المناديل الصناعية (Industrial Wipes).',
    category: 'الأساسيات',
  },
  {
    id: 'faq-2',
    question: 'لماذا يعتبر اليوكاليبتوس (Eucalyptus) أفضل خامة لورق المناديل؟',
    answer: 'لأن أليافه قصيرة ودقيقة ومرنة، وتنتج ملايين النهايات الحرة بعد الكرمشة على أسطوانة اليانكي، مما يمنح المنديل ملمساً مخملياً حريرياً فائق النعومة.',
    category: 'المواد الخام',
  },
  {
    id: 'faq-3',
    question: 'ما هي وظيفة أسطوانة اليانكي وسكين الكرمشة في ماكينة التيشيو؟',
    answer: 'أسطوانة اليانكي تجفف الورقة بالحرارة العالية، بينما يقوم سكين الكريب بقشطها محدثاً تجاعيد ميكرونية دقيقة (Micro-crepes) تكسب المنديل مرونته ونعومته وقدرته الفائقة على الامتصاص.',
    category: 'ماكينات الإنتاج',
  },
  {
    id: 'faq-4',
    question: 'هل شهادات Free Tissue Camp معتمدة ومجانية؟',
    answer: 'نعم، المنصة مجانية 100% وتصدر شهادات إتمام رقمية برقم تحقق معتمد فور إتمام الدورة واجتياز اختباراتها التقييمية بنجاح.',
    category: 'الشهادات',
  },
];

// ── 8. Helper Functions ────────────────────────────────────────────────────

export function getCourseById(id: string): Course | undefined {
  return courses.find(c => c.id === id);
}

export function getModulesByCourseId(courseId: string): Module[] {
  return modules.filter(m => m.course_id === courseId).sort((a, b) => a.order - b.order);
}

export function getLessonsByModuleId(moduleId: string): Lesson[] {
  return lessons.filter(l => l.module_id === moduleId).sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find(l => l.id === id);
}

export function getQuizQuestionsByLessonId(lessonId: string): QuizQuestion[] {
  return quizQuestions.filter(q => q.lesson_id === lessonId).sort((a, b) => a.order - b.order);
}

export function getCourseLessons(courseId: string): Lesson[] {
  const courseModules = getModulesByCourseId(courseId);
  return courseModules.flatMap(m => getLessonsByModuleId(m.id));
}

export function getLearningPathById(id: string): LearningPath | undefined {
  return learningPaths.find(p => p.id === id);
}

export function getCoursesByPathId(pathId: string): Course[] {
  return courses.filter(c => c.learning_path_id === pathId).sort((a, b) => a.order - b.order);
}

export function getNextLesson(courseId: string, currentLessonId: string): Lesson | undefined {
  const allLessons = getCourseLessons(courseId);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
    return allLessons[currentIndex + 1];
  }
  return undefined;
}

export function getPreviousLesson(courseId: string, currentLessonId: string): Lesson | undefined {
  const allLessons = getCourseLessons(courseId);
  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  if (currentIndex > 0) {
    return allLessons[currentIndex - 1];
  }
  return undefined;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
