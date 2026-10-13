import type { LearningPath, Course, Module, Lesson, QuizQuestion, Project, FAQ } from '@/types';

// =========================================================================
// Free Tissue Camp — Complete Industrial Curriculum v2.0
// المنهاج الهندسي التخصصي المعتمد: تصنيع ورق المناديل والتشيو (Tissue Papermaking & Converting)
// 6 مسارات رئيسية | 18 دورة تدريبية (مبتدئ، متوسط، متقدم) | 36 وحدة | 54 درساً بنظام الطبقتين (Layer A / Layer B)
// =========================================================================

// ── 1. Learning Paths (المسارات التخصصية الستة) ───────────────────────────────────

export const learningPaths: LearningPath[] = [
  {
    "id": "path-fiber-furnish",
    "title": "هندسة ألياف وعجائن منتجات ورق التيشيو التخصصية",
    "title_en": "Fiber Furnish Engineering & Product-Specific Pulp Selection",
    "description": "استلام بالات اللب والمورفولوجيا، تصميم الخلطات لمنتجات الوجه والتواليت والمطبخ، فيزياء أبعاد الألياف (Coarseness)، وتوزيع الطبقات بالرأس الموزع متعدد الطبقات.",
    "description_en": "Pulp bale inspection, fiber morphology, furnish recipe design for facial, toilet, towel, and wipes grades, coarseness physics, and multi-layer stratification.",
    "icon": "Layers",
    "color": "#2e7d32",
    "order": 1,
    "courses": [],
    "total_courses": 3,
    "total_lessons": 9,
    "estimated_hours": 32
  },
  {
    "id": "path-stock-prep-chemistry",
    "title": "تحضير العجينة، التكرير والكيمياء الرطبة للتيشيو",
    "title_en": "Stock Preparation & Wet-End Chemistry",
    "description": "سكيد حقن الكيماويات، التكرير منخفض التركيز LCR للألياف الطويلة دون تكسيرها، اختبارات °SR، ديناميكا SEL، وكيمياء الروابط التساهمية PAE والشحنات Zeta Potential.",
    "description_en": "Chemical dosing skids, low-consistency refining (LCR) for softwoods, freeness testing (°SR), specific edge load dynamics, and wet-end polymer chemistry.",
    "icon": "TestTube",
    "color": "#15803d",
    "order": 2,
    "courses": [],
    "total_courses": 3,
    "total_lessons": 9,
    "estimated_hours": 34
  },
  {
    "id": "path-forming-machine",
    "title": "تكنولوجيا التشكيل وتكوينات ماكينات التيشيو الحديثة",
    "title_en": "Forming Technologies & Tissue Machine Configurations",
    "description": "مسارات أقمشة التشكيل واللبادات، تشغيل Crescent Former والتوين واير، ضبط نسبة Jet-to-Wire، هيدروديناميكا النزح الطارد P=T/R، وتقنيات التيشيو المهيكل TAD و NTT و ATMOS.",
    "description_en": "Fabric and felt routing, Crescent Former and Twin-Wire operation, Jet-to-Wire optimization, centrifugal drainage physics, and structured tissue technologies (TAD/NTT/ATMOS).",
    "icon": "Factory",
    "color": "#1b5e20",
    "order": 3,
    "courses": [],
    "total_courses": 3,
    "total_lessons": 9,
    "estimated_hours": 38
  },
  {
    "id": "path-pressing-yankee-creping",
    "title": "الكبس، أسطوانة اليانكي، كيمياء الطلاء وميكانيكا الكرمشة",
    "title_en": "Pressing, Yankee Engineering & Creping Mechanics",
    "description": "أسطوانة اليانكي وتغيير شفرات الكريب، كيمياء فيلم الطلاء الثلاثي ودرفيل العصر SPR، الشو برس Shoe Press (ViscoNip)، ونمذجة إجهادات أسطوانات الصلب وعلاج Chatter Marks.",
    "description_en": "Yankee dryer operation, doctor blade changing safety, coating package chemistry, shoe pressing (ViscoNip), and thermal stress modeling to prevent chatter marks.",
    "icon": "Cog",
    "color": "#b45309",
    "order": 4,
    "courses": [],
    "total_courses": 3,
    "total_lessons": 9,
    "estimated_hours": 38
  },
  {
    "id": "path-steam-hood-utilities",
    "title": "منظومات البخار والتكاثف، هود اليانكي والمرافق العامة",
    "title_en": "Steam Systems, Yankee Hood & Mill Utilities",
    "description": "مرافق الماكينة ومضخات الفاكيوم، رشاشات الضغط العالي وبرنرات الهود، ديناميكا الثيرموكمبريسور وفوهات لافال، استقرار فرق الضغط dP ومنع غرق اليانكي، واسترجاع الألياف بالـ DAF.",
    "description_en": "Machine utilities and vacuum systems, high-pressure showers, hood gas burners, thermocompressor Laval nozzle dynamics, differential pressure control, and DAF recovery.",
    "icon": "Wind",
    "color": "#0284c7",
    "order": 5,
    "courses": [],
    "total_courses": 3,
    "total_lessons": 9,
    "estimated_hours": 36
  },
  {
    "id": "path-slitter-rewinder",
    "title": "عمليات وهندسة مقصات ولفافات ورق التيشيو (Slitter Rewinder)",
    "title_en": "Tissue Slitter Rewinder Operations & Engineering",
    "description": "المقص واللفافة الميدانية (Doctor Machine): مسارات تمرير الورق والأمان، ميكانيكا سكاكين الشير وزاوية الـ Cant Angle، دمج الطبقات وضبط الشد، ديناميكا اللف (TNT)، وعلاج عيوب الرولات.",
    "description_en": "Tissue slitter rewinder mechanics, web threading and safety, shear slitting cant angle, multi-ply tension combining, TNT winding dynamics, and jumbo roll defect prevention.",
    "icon": "Repeat",
    "color": "#7c3aed",
    "order": 6,
    "courses": [],
    "total_courses": 3,
    "total_lessons": 9,
    "estimated_hours": 34
  }
];

// ── 2. Courses (الدورات الـ 18 التخصصية) ──────────────────────────────────────────

export const courses: Course[] = [
  {
    "id": "course-tis-101",
    "learning_path_id": "path-fiber-furnish",
    "title": "مدخل إلى ألياف التيشيو، استلام البالات والمورفولوجيا الأساسية",
    "title_en": "Introduction to Tissue Fibers & Raw Materials",
    "description": "دورة المستوى الأول لمهندسي وفنيي الوردية: استلام وفحص بالات اللب، الفروق المورفولوجية بين الألياف القصيرة (Eucalyptus) والطويلة (NBSK/SBSK)، وفهم مثلث جودة التيشيو (النعومة، المتانة، والامتصاص).",
    "short_description": "استلام بالات اللب، الخشب الصلب واللين، ومثلث جودة التيشيو",
    "difficulty": "beginner",
    "estimated_hours": 8,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "فحص بالات اللب واستلام الشحنات",
      "التمييز بين ألياف الخشب الصلب واللين",
      "موازنة مثلث جودة التيشيو",
      "إجراءات السلامة وفك أسلاك البالات"
    ],
    "requirements": [
      "لا توجد متطلبات مسبقة، موجه للطلاب والفنيين والمهندسين الجدد"
    ],
    "objectives": [
      "فهم مورفولوجيا الألياف ودور اللب القصير في النعومة واللب الطويل في المتانة",
      "إتقان إجراءات فحص رطوبة البالات وقطع الأسلاك بأمان وفق SOP-BALE-01",
      "استيعاب القيود الهندسية لمثلث الجودة (Softness vs Tensile vs Absorbency)"
    ],
    "order": 1,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-102",
    "learning_path_id": "path-fiber-furnish",
    "title": "تصميم خلطات الألياف حسب صنف التيشيو وتشغيل البالبر الميداني",
    "title_en": "Furnish Formulation by Tissue Grade & Pulper Operations",
    "description": "دورة المستوى الثاني: تصميم خلطات الألياف حسب الصنف النهائي (Facial, Toilet, Kitchen Towel, Industrial Wipes)، هيدروديناميكا البالبر، ضبط التركيز، وعمليات حوض الـ Junk Trap.",
    "short_description": "خلطات الألياف حسب الصنف، هيدروديناميكا البالبر، وحلقات التركيز",
    "difficulty": "intermediate",
    "estimated_hours": 12,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "تصميم خلطات الألياف لكل صنف",
      "تشغيل أحواض البالبر بنوعيها LC و HC",
      "حساب الطاقة النوعية للتفكيك SDE",
      "معايرة حساسات وحلقات التركيز"
    ],
    "requirements": [
      "إتمام دورة مدخل إلى ألياف التيشيو TIS-101"
    ],
    "objectives": [
      "تصميم خلطات الألياف الدقيقة لمناديل الوجه والحمام والمطبخ والمسحات الصناعية",
      "تشغيل البالبر وتجنب تقطيع الألياف الميكانيكي مع استهلاك طاقة مثالي",
      "معايرة حلقات التخفيف الآلية والتحكم في مصيدة الشوائب وفق SOP-PULP-02"
    ],
    "order": 2,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-103",
    "learning_path_id": "path-fiber-furnish",
    "title": "فيزياء الألياف المتقدمة، الرأس الموزع متعدد الطبقات وتكلفة الخلطات",
    "title_en": "Advanced Fiber Physics, Stratified Multi-Layer Headbox Design & Furnish Economics",
    "description": "دورة المستوى الثالث المتقدم: فيزياء أبعاد الألياف (رقم الخشونة Coarseness ونسبة رانكل)، ديناميكا الامتصاص الشعري وفق معادلة Lucas-Washburn، تشغيل الرأس الموزع متعدد الطبقات (Stratified Headbox)، ونمذجة التكلفة الاقتصادية للخلطة.",
    "short_description": "رقم الخشونة، فيزياء الامتصاص، الرأس متعدد الطبقات وتكلفة الخلطة",
    "difficulty": "advanced",
    "estimated_hours": 12,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "حساب رقم الخشونة وتعداد الألياف",
      "تطبيق معادلة Lucas-Washburn للامتصاص",
      "تشغيل الرأس الموزع متعدد الطبقات (3-Layer)",
      "النمذجة الرياضية لتحسين تكلفة الخلطة"
    ],
    "requirements": [
      "إتمام دورة تصميم خلطات الألياف TIS-102"
    ],
    "objectives": [
      "نمذجة المسامية الشعرية وسرعة الامتصاص المائي للألياف",
      "ضبط فروق الضغط بين حواجز الرأس الموزع لمنع اختلاط الطبقات وفق SOP-STRAT-03",
      "تطبيق نموذج البرمجة الخطية لتقليل تكلفة خلطة اللب مع الالتزام بالمواصفات القياسية"
    ],
    "order": 3,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-201",
    "learning_path_id": "path-stock-prep-chemistry",
    "title": "أساسيات تحضير العجينة، سكيد حقن الكيماويات وإجراءات السلامة",
    "title_en": "Stock Preparation Fundamentals & Chemical Handling Skids",
    "description": "دورة المستوى الأول: خريطة تدفق قسم تحضير العجينة، منظومات حقن الكيماويات الرطبة، وظائف راتنجات PAE و GPAM والنشا والمطريات، وإجراءات المعايرة والسلامة الميدانية.",
    "short_description": "خريطة تحضير العجينة، سكيد الكيماويات، وراتنجات القوة والمطريات",
    "difficulty": "beginner",
    "estimated_hours": 8,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "قراءة مخططات تدفق تحضير العجينة",
      "تشغيل سكيد طلمبات حقن الكيماويات",
      "معايرة مقاييس التدفق المغناطيسية",
      "التعامل الآمن مع المواد الكيميائية"
    ],
    "requirements": [
      "معرفة أساسية ببيئة المصنع وإجراءات السلامة العامة"
    ],
    "objectives": [
      "التعرف على مسار الألياف من خزان الخلط حتى صندوق التدفق",
      "فهم وظائف الكيماويات المتخصصة للتيشيو (PAE, GPAM, CMC, Debonders)",
      "معايرة طلمبات الحقن ومراقبة ضغط فواني الحقن وفق SOP-CHEM-01"
    ],
    "order": 1,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-202",
    "learning_path_id": "path-stock-prep-chemistry",
    "title": "التكرير منخفض التركيز (LCR)، الفحوصات المعملية ومصافي الضغط",
    "title_en": "Low-Consistency Refining (LCR), Screening & Freeness Optimization",
    "description": "دورة المستوى الثاني: أسرار التكرير منخفض التركيز للألياف الطويلة دون تقطيعها، فحص درجة الإنضاج شوبر ريجلر (°SR)، اختيار حشوات الأقراص، وهندسة مصافي الضغط (Pressure Screens).",
    "short_description": "التكرير LCR للألياف الطويلة، قياس الشوبر (°SR)، ومصافي الضغط",
    "difficulty": "intermediate",
    "estimated_hours": 12,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "تشغيل مكررات الأقراص المزدوجة",
      "إجراء فحص شوبر ريجلر القياسي ISO 5267-1",
      "ضبط مسافة فتحة الأقراص ميكرونياً",
      "إدارة سلال مصافي الضغط ومعدل الرفض"
    ],
    "requirements": [
      "إتمام دورة أساسيات تحضير العجينة TIS-201"
    ],
    "objectives": [
      "استيعاب لماذا نكرر ألياف اللب الطويل فقط ونحظر تكرير اليوكاليبتوس في التيشيو",
      "إجراء فحص درجة الإنضاج وضبطها في نطاق 26-30°SR وفق SOP-LAB-02",
      "منع انسداد مصافي الضغط والتحكم في سرعة تدفق الشقوق Slot Velocity"
    ],
    "order": 2,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-203",
    "learning_path_id": "path-stock-prep-chemistry",
    "title": "ديناميكا التكرير المتقدمة (SEL) وكيمياء السطح والشحنات البوليمرية",
    "title_en": "Advanced Refining Dynamics (SEL/SSL) & Wet-End Surface/Polymer Chemistry",
    "description": "دورة المستوى الثالث المتقدم: الحسابات الهندسية للحمل الحافي الخاص (SEL) وحمل السطح النوعي (SSL)، كيمياء تنشيط روابط PAE التساهمية، إدارة الشحنة الكهروستاتيكية (Zeta Potential)، ومعايرة جهاز Mütek PCD.",
    "short_description": "حسابات SEL/SSL، كيمياء بلمرة PAE، والتحكم في Zeta Potential",
    "difficulty": "advanced",
    "estimated_hours": 14,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "حساب الحمل الحافي الخاص SEL واستهلاك الطاقة kWh/t",
      "تحليل تفاعلات أزيتيدينيوم PAE والشد الرطب",
      "قياس الشحنة الغروية بجهاز Mütek PCD",
      "التحكم في الشحنة الكهروستاتيكية وإزالة الشوائب الأنيونية"
    ],
    "requirements": [
      "إتمام دورة التكرير ومصافي الضغط TIS-202"
    ],
    "objectives": [
      "تطبيق نموذج SEL لتوليد الرجفان السطحي دون تقصير الألياف",
      "تحقيق نسبة شد رطب/جاف تفوق 25-30% على الورق المنتج",
      "إدارة بروتوكول معايرة الشحنة الغروية وفق SOP-CHEM-03"
    ],
    "order": 3,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-301",
    "learning_path_id": "path-forming-machine",
    "title": "جولة تفقدية لمنطقة التشكيل، مسارات أقمشة التشكيل واللبادات",
    "title_en": "Forming Section Walk-Down, Fabric Geometries & Roll Mechanics",
    "description": "دورة المستوى الأول: تشريح قسم التشكيل، مسارات سلك التشكيل ولباد العصر، درافيل التشكيل والصرف، أحواض الطرد المركزي (Savealls)، وبروتوكول التفتيش الميداني قبل التشغيل.",
    "short_description": "مسارات الأسلاك واللبادات، درافيل التشكيل، وأحواض الصرف",
    "difficulty": "beginner",
    "estimated_hours": 10,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "التعرف على مكونات قسم التشكيل",
      "فحص أقمشة وسجاد التشكيل واللبادات",
      "مراقبة حركة أحواض الطرد المركزي",
      "تطبيق إجراءات التفتيش والسلامة SOP-FORM-01"
    ],
    "requirements": [
      "معرفة بمبادئ سلامة المعدات الدوارة"
    ],
    "objectives": [
      "فهم آلية تحويل العجينة المائية (99.8% ماء) إلى فرشة رطبة في أجزاء من الثانية",
      "فحص سلامة حواف الأسلاك واللبادات ومراقبة شفرات تنظيف الدرافيل",
      "تنفيذ جولة التفتيش الميداني المعتمدة قبل تشغيل الماكينة"
    ],
    "order": 1,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-302",
    "learning_path_id": "path-forming-machine",
    "title": "تشغيل ماكينات Crescent Former والتوين واير وضبط نسبة السرعة",
    "title_en": "Operation of Crescent Former & Twin-Wire Systems, Jet-to-Wire & Alignment",
    "description": "دورة المستوى الثاني: تشغيل ماكينات التشكيل الهلالي والتوين واير C-Former و S-Wrap، ضبط نسبة سرعة التدفق إلى السلك (Jet-to-Wire: Rush vs Drag)، زاوية السقوط، وسكاكين تشذيب الحواف المائية.",
    "short_description": "ماكينات Crescent والتوين واير، ضبط Jet-to-Wire، وسكاكين الحواف",
    "difficulty": "intermediate",
    "estimated_hours": 14,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "تشغيل ماكينات Crescent Former والتوين واير",
      "ضبط نسبة Jet-to-Wire والتحكم في نسبة MD/CD",
      "تحديد نقطة التقاء التدفق النفاث Impingement Point",
      "معايرة سكاكين قص الحواف المائية Edge Squirts"
    ],
    "requirements": [
      "إتمام دورة جولة منطقة التشكيل TIS-301"
    ],
    "objectives": [
      "التحكم في نسبة قوة الشد الطولية/العرضية (MD/CD Ratio) بدقة متناهية",
      "ضبط زاوية التدفق وسرعة الخروج لمنع ارتداد المياه وفق SOP-FORM-02",
      "صيانة وتشغيل سكاكين الحواف المائية بضغط يفوق 25 بار لضمان حواف نقية"
    ],
    "order": 2,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-303",
    "learning_path_id": "path-forming-machine",
    "title": "هيدروديناميكا السرعات الفائقة والتقنيات المهيكلة (TAD / NTT / ATMOS)",
    "title_en": "High-Speed Hydrodynamics, Centrifugal Drainage & Structured Tissue (TAD/NTT/ATMOS)",
    "description": "دورة المستوى الثالث المتقدم: فيزياء النزح بالطرد المركزي P=T/R وسرعات تفوق 2200 م/د، صندوق التدفق فائق الاضطراب، وتكنولوجيا التيشيو المهيكل فائق الامتصاص والبلك (TAD, NTT, ATMOS).",
    "short_description": "هيدروديناميكا P=T/R، تقنيات التيشيو المهيكل TAD/NTT/ATMOS، والبلك الفائق",
    "difficulty": "advanced",
    "estimated_hours": 14,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "حساب ضغط النزح الطارد P=T/R على درافيل التشكيل",
      "فهم الديناميكا الحرارية لتجفيف الهواء النافذ TAD",
      "مقارنة تكنولوجيا العصر المهيكل NTT و ATMOS",
      "إدارة صناديق الفاكيوم والتشكيل ثلاثي الأبعاد"
    ],
    "requirements": [
      "إتمام دورة تشغيل Crescent Former والتوين واير TIS-302"
    ],
    "objectives": [
      "نمذجة نفاذية الفرشة عبر معادلة Ergun للتدفق في الأوساط المسامية",
      "تصميم ومراقبة إنتاج أصناف التيشيو الفاخرة ببلك يفوق 12-16 cm³/g",
      "تطبيق بروتوكول ضبط فاكيوم التشكيل ثلاثي الأبعاد وفق SOP-TAD-03"
    ],
    "order": 3,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-401",
    "learning_path_id": "path-pressing-yankee-creping",
    "title": "أساسيات أسطوانة اليانكي، تغيير شفرات الكريب وإجراءات السلامة",
    "title_en": "Yankee Dryer Basics & Creping Blade Safety Protocols",
    "description": "دورة المستوى الأول: الوظيفة الحرارية والميكانيكية لأسطوانة اليانكي، علم الكرمشة (Creping)، زوايا بيت الشفرة (Pocket Angle)، وبروتوكول تغيير شفرة الكريب بأمان وعادم الغبار.",
    "short_description": "أسطوانة اليانكي، شفرات الكريب، زاوية الجيب، وسلامة تغيير السكين",
    "difficulty": "beginner",
    "estimated_hours": 10,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "فهم دور أسطوانة اليانكي وعملية الكرمشة",
      "حساب نسبة الكرمشة Crepe Ratio %",
      "تغيير شفرات الكريب بأمان وفق SOP-DRY-01",
      "تشغيل منظومة سحب وعادم غبار التيشيو"
    ],
    "requirements": [
      "معرفة بإجراءات العزل والسلامة الحرارية"
    ],
    "objectives": [
      "استيعاب كيف تحول صدمة شفرة الكريب الشيت المفرود إلى ورق تيشيو مرن وناعم",
      "إتقان خطوات تغيير شفرة الكريب الساخنة الحادة بدون أي مخاطر بشرية",
      "ضبط ضغط الوسائد الهوائية لحامل الشفرة لمنع تجريف سطح الأسطوانة"
    ],
    "order": 1,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-402",
    "learning_path_id": "path-pressing-yankee-creping",
    "title": "كيمياء طلاء أسطوانة اليانكي، درفيل العصر وفحص بصمة التآكل",
    "title_en": "Yankee Coating Chemistry, SPR Operations & Blade Wear Tribology",
    "description": "دورة المستوى الثاني: مثلث طلاء اليانكي (اللاصق، العازل، والمعدل)، مظهر فيلم الكوتنج (المثالي مقابل المزجج والصمغي)، تشغيل درفيل العصر والشفط SPR، وفحص بصمة تآكل الشفرة بالمجهر.",
    "short_description": "مثلث طلاء اليانكي، درفيل العصر SPR، وفحص بصمة تآكل الشفرة",
    "difficulty": "intermediate",
    "estimated_hours": 14,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "إدارة معدلات رش كيمياء الكوتنج (mg/m²)",
      "تشغيل وضبط فراغ درفيل العصر SPR",
      "محاذاة عارضة الرشاشات وضبط زاوية 15° Offset",
      "قياس بصمة تآكل الشفرة بالمجهر Optical Wear Footprint"
    ],
    "requirements": [
      "إتمام دورة أساسيات اليانكي وشفرات الكريب TIS-401"
    ],
    "objectives": [
      "الحفاظ على فيلم كوتنج برونزي شفاف متوازن في المنطقة الخضراء Sweet Spot",
      "ضبط ضغط خط الكبس النيبي N/m وفراغ غرف SPR الداخلية",
      "فحص بصمة تآكل الشفرة وتصحيح انحرافات التحميل العرضي وفق SOP-COAT-02"
    ],
    "order": 2,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-403",
    "learning_path_id": "path-pressing-yankee-creping",
    "title": "فيزياء الكرمشة المتقدمة، الشو برس (Shoe Press) وإجهادات اليانكي",
    "title_en": "Creping Physics, Shoe Pressing (ViscoNip) & Yankee Thermal-Stress Modeling",
    "description": "دورة المستوى الثالث المتقدم: ديناميكا صدم الكرمشة والنافذة اللزجة المرنة، تكنولوجيا الشو برس Shoe Press (ViscoNip)، نمذجة إجهادات أسطوانات الصلب (SYD)، وعلاج علامات اهتزاز الشفرة Chatter Marks.",
    "short_description": "ديناميكا الكرمشة، الشو برس ViscoNip، وعلاج علامات Chatter Marks",
    "difficulty": "advanced",
    "estimated_hours": 14,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "نمذجة قوى صدم الكرمشة وتردد التجاعيد",
      "تشغيل عصارات الشو برس الهيدروليكية ViscoNip",
      "حساب الإجهادات الحرارية والميكانيكية لأسطوانات الصلب",
      "تحليل الاهتزازات الطيفية FFT ومنع Chatter Marks"
    ],
    "requirements": [
      "إتمام دورة كيمياء الكوتنج ودرفيل العصر TIS-402"
    ],
    "objectives": [
      "تطبيق تكنولوجيا Shoe Press لرفع جفاف ما بعد الكبس إلى 44-48% دون فقدان البلك",
      "فهم الفروق الحرارية والميتالورجية بين أسطوانات الصلب وزهر الحديد",
      "تحليل طيف اهتزاز حامل الشفرة وتطبيق بروتوكول الوقاية من Chatter Marks وفق SOP-ENG-03"
    ],
    "order": 3,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-501",
    "learning_path_id": "path-steam-hood-utilities",
    "title": "مرافق الماكينة، مسارات البخار، ومضخات الفاكيوم الميدانية",
    "title_en": "Machine Utilities, Steam Loops & Vacuum Plant Inspection",
    "description": "دورة المستوى الأول: دورة البخار المشبع ونقل الحرارة الكامنة، المفصل الدوار (Steam Joint)، مضخات الفاكيوم ذات الحلقة السائلة، وفحص مصائد البخار (Steam Traps).",
    "short_description": "مسارات البخار، المفصل الدوار، مضخات الفاكيوم، ومصائد البخار",
    "difficulty": "beginner",
    "estimated_hours": 10,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "قراءة مسارات شبكة البخار والمكثفات",
      "فحص حلقة الكربون للمفصل الدوار لليانكي",
      "تشغيل ومراقبة مضخات الفاكيوم المائية Nash",
      "فحص مصائد البخار بالأشعة تحت الحمراء SOP-UTIL-01"
    ],
    "requirements": [
      "معرفة عامة بالسلامة في شبكات الضغط العالي والبخار"
    ],
    "objectives": [
      "فهم كيف ينقل البخار المشبع حرارته الكامنة لتبخير مياه الورقة في أجزاء من الثانية",
      "مراقبة حرارة مياه التبريد لمضخات الفاكيوم لمنع ظاهرة التكهف Cavitation",
      "اكتشاف مصائد البخار العاطلة ومنع ظاهرة المطرقة المائية Water Hammer"
    ],
    "order": 1,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-502",
    "learning_path_id": "path-steam-hood-utilities",
    "title": "رشاشات الضغط العالي، برنرات الغاز، ونظم استقرار الشيت",
    "title_en": "High-Pressure Showers, Gas Burners & Runnability Systems",
    "description": "دورة المستوى الثاني: رشاشات غسيل اللباد عالية الضغط المتذبذبة، مزامنة شوط التذبذب، برنرات احتراق الغاز الطبيعي لهود اليانكي، ونظم توجيه الأسلاك واللبادات الأوتوماتيكية.",
    "short_description": "رشاشات الضغط العالي، برنرات الغاز، وأجهزة توجيه الأقمشة",
    "difficulty": "intermediate",
    "estimated_hours": 12,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "ضبط رشاشات الضغط العالي وزاوية 15° Offset",
      "مزامنة سرعة شوط التذبذب مع سرعة اللباد",
      "إدارة برنرات الغاز ونسب الهواء والوقود",
      "صيانة أجهزة التوجيه الهوائية Auto-Guides"
    ],
    "requirements": [
      "إتمام دورة مرافق الماكينة ومسارات البخار TIS-501"
    ],
    "objectives": [
      "منع قطع اللبادات بربط حركة الرشاش الترددي مع نظام الأمان Interlock وفق SOP-SHOWER-02",
      "ضبط احتراق برنرات الغاز النظيف مع نسبة أول أكسيد الكربون CO أقل من 50 ppm",
      "معايرة أذرع حساسات استقامة وسنترة الأقمشة واللبادات"
    ],
    "order": 2,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-503",
    "learning_path_id": "path-steam-hood-utilities",
    "title": "ديناميكا الثيرموكمبريسور، أيروديناميكا الهود واسترجاع الألياف بالـ DAF",
    "title_en": "Thermocompressor Dynamics, High-Velocity Hood Aerodynamics & DAF Recovery",
    "description": "دورة المستوى الثالث المتقدم: الثيرموكمبريسور وفوهات لافال الأسرع من الصوت، حلقة التكاثف (Rimming) وضبط فرق الضغط dP لمنع غرق اليانكي، أيروديناميكا هود الهواء الساخن 500°م، ووحدة تعويم الهواء المذاب DAF.",
    "short_description": "الثيرموكمبريسور، فرق الضغط dP، هود الهواء 500°م، ووحدة DAF",
    "difficulty": "advanced",
    "estimated_hours": 14,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "حساب نسبة سحب وانضغاط الثيرموكمبريسور Ra/Cr",
      "معايرة إبرة التحكم التناسبية Spindle Actuator",
      "ضبط منحنى فرق الضغط dP مقابل سرعة الماكينة",
      "إدارة هود الهواء الساخن 500°م ووحدة تعويم الألياف DAF"
    ],
    "requirements": [
      "إتمام دورة الرشاشات وبرنرات الغاز TIS-502"
    ],
    "objectives": [
      "تطبيق نموذج الثيرموكمبريسور لإعادة ضغط بخار البلوثرو دون هدر حراري",
      "منع وعلاج ظاهرة غرق اليانكي Flooding الفوري وفق SOP-ENG-05",
      "تحقيق كفاءة استرجاع ألياف تفوق 98% في وحدة DAF لتقليل الفاقد في الصرف"
    ],
    "order": 3,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-601",
    "learning_path_id": "path-slitter-rewinder",
    "title": "مكونات المقص واللفافة، مسار تمرير الورق وبروتوكولات الأمان",
    "title_en": "Rewinder Components, Web Threading & Nip Hazard Safety Protocols",
    "description": "دورة المستوى الأول: تشريح مقص ولفافة التيشيو (Doctor Machine / Slitter Rewinder)، أذرع فك الرول الجامبو، أعمدة الهواء التمددية (Air Shafts)، مسار تمرير الورق، وبروتوكولات السلامة والستائر الضوئية.",
    "short_description": "مكونات المقص واللفافة، أعمدة الهواء، وتمرير الورق الآمن",
    "difficulty": "beginner",
    "estimated_hours": 10,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "التعرف على المكونات الرئيسية لمقص ولفافة التيشيو",
      "تشغيل أعمدة الهواء وفحص ضغط التمدد",
      "تمرير الورق بأمان عند سرعة الزحف Crawl Speed",
      "تطبيق بروتوكولات الأمان والستائر الضوئية SOP-REW-01"
    ],
    "requirements": [
      "معرفة بمخاطر النقاط الانضغاطية Nip Points وإجراءات السلامة"
    ],
    "objectives": [
      "فهم دور مقص ولفافة التيشيو في تقطيع وتجهيز الرولات للمصانع والتحويل",
      "إتقان خطوات فك وتثبيت الرول الجامبو وتجهيز المواسير الكرتونية",
      "الالتزام الصارم بقواعد منع الحوادث عند نقاط الانضغاط الدوارة"
    ],
    "order": 1,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-602",
    "learning_path_id": "path-slitter-rewinder",
    "title": "ميكانيكا التقطيع بسكاكين الشير، دمج الطبقات والتحكم في الشد",
    "title_en": "Shear Slitting Mechanics, Multi-Ply Combining & Tension Profiling",
    "description": "دورة المستوى الثاني: هندسة سكاكين الشير الدائرية (زاوية الميل Cant Angle، عمق التداخل Overlap، وضغط التلامس)، خلايا قياس الشد Load Cells، دمج الطبقات المتعددة Multi-Ply، ودرافيل الفرد المنحنية Bowed Rolls.",
    "short_description": "سكاكين الشير، زاوية Cant Angle، ضبط الشد، ودرافيل الفرد",
    "difficulty": "intermediate",
    "estimated_hours": 12,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "معايرة زاوية سكاكين الشير Cant Angle وعمق التداخل",
      "ضبط خلايا قياس الشد Load Cells وحلقة PID",
      "دمج ومطابقة شد الطبقات المتعددة Multi-Ply",
      "ضبط زاوية درافيل الفرد المنحنية لمنع تداخل الرولات"
    ],
    "requirements": [
      "إتمام دورة مكونات المقص واللفافة TIS-601"
    ],
    "objectives": [
      "ضبط سكاكين التقطيع بزاوية 0.75° وتداخل 1.0 مم وفق SOP-SLIT-02 لحواف نقية بدون غبار",
      "منع ارتخاء أو انقطاع الطبقات عند دمج رولين أو ثلاثة على المقص",
      "توجيه درافيل الفرد المنحنية لمنع تداخل وتشابك الرولات المتجاورة"
    ],
    "order": 2,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  },
  {
    "id": "course-tis-603",
    "learning_path_id": "path-slitter-rewinder",
    "title": "ديناميكا اللف (TNT)، علاج عيوب الرولات الكبرى وهندسة الجودة",
    "title_en": "Winding Dynamics (TNT Algorithm), Defect Prevention & Jumbo Roll Physics",
    "description": "دورة المستوى الثالث المتقدم: خوارزمية اللف الثلاثية TNT (الشد Tension، النيب Nip، وعزم الدوران Torque)، نمذجة الإجهادات الداخلية للرول (Hakiel’s Model)، ومنع عيوب الرولات (Telescoping, Dishing, Corrugations, Core Crushing).",
    "short_description": "خوارزمية TNT، نمذجة إجهادات الرول، وعلاج عيوب Telescoping و Dishing",
    "difficulty": "advanced",
    "estimated_hours": 12,
    "total_lessons": 3,
    "total_modules": 2,
    "skills": [
      "برمجة منحنيات TNT التنازلية من الماسورة للسطح",
      "تطبيق نموذج Hakiel لحساب الإجهادات الشعاعية والمماسية",
      "قياس صلابة الرول بجهاز ParoTester / Schmidt",
      "تشخيص وعلاج عيوب الرولات الكبرى في خطوط التحويل"
    ],
    "requirements": [
      "إتمام دورة ميكانيكا التقطيع وضبط الشد TIS-602"
    ],
    "objectives": [
      "تطبيق القاعدة الذهبية للف: أقصى صلابة عند الماسورة وتدرج ناعم نحو الخارج",
      "حماية المواسير الكرتونية من الانهيار البيضاوي ومنع انزلاق الرول التلسكوبي",
      "تنفيذ بروتوكول فحص صلابة الرولات وضبط منحنيات اللف وفق SOP-WIND-03"
    ],
    "order": 3,
    "is_published": true,
    "is_free": true,
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  }
];

// ── 3. Modules (الوحدات الـ 36 التخصصية) ──────────────────────────────────────────

export const modules: Module[] = [
  {
    "id": "mod-tis-101-1",
    "course_id": "course-tis-101",
    "title": "استلام بالات اللب وفحص الجودة والمورفولوجيا الأساسية",
    "title_en": "Pulp Bale Receiving, Quality Verification & Fiber Morphology",
    "description": "فحص البالات الواردة، سلامة التغليف، وتصنيف ألياف السليلوز بين الخشب الصلب واللين.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-101-2",
    "course_id": "course-tis-101",
    "title": "مثلث جودة التيشيو وإجراءات السلامة لفك البالات",
    "title_en": "Tissue Quality Triangle & Bale De-wiring Safety",
    "description": "موازنة النعومة والمتانة والامتصاص، وإجراءات السلامة القياسية عند فك الأسلاك.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-102-1",
    "course_id": "course-tis-102",
    "title": "وصفات وخلطات الألياف للأصناف التجارية المختلفة",
    "title_en": "Furnish Formulations Across Tissue Market Grades",
    "description": "خلطات مناديل الوجه، ورق التواليت، مناديل المطبخ شديدة الامتصاص، والمسحات الصناعية.",
    "order": 1,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-102-2",
    "course_id": "course-tis-102",
    "title": "هيدروديناميكا أحواض البالبر وضبط التركيز الآلي",
    "title_en": "Pulper Hydrodynamics, SDE Energy & Consistency Control",
    "description": "تشغيل أحواض LC و HC، حساب الطاقة النوعية للتفكيك، ومعايرة حلقات التخفيف الآلية.",
    "order": 2,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-103-1",
    "course_id": "course-tis-103",
    "title": "فيزياء أبعاد الألياف وديناميكا الامتصاص الشعري",
    "title_en": "Fiber Morphology Physics & Capillary Absorption Dynamics",
    "description": "رقم الخشونة Coarseness، نسبة رانكل، ونمذجة الامتصاص بمعادلة Lucas-Washburn.",
    "order": 1,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-103-2",
    "course_id": "course-tis-103",
    "title": "الرأس الموزع متعدد الطبقات وتحسين التكلفة الاقتصادية",
    "title_en": "Stratified 3-Layer Headbox Operations & Furnish Economics",
    "description": "تشغيل الرأس الموزع الطبقي، ضبط فروق الضغط بين الحواجز، ونمذجة التكلفة المثلى.",
    "order": 2,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-201-1",
    "course_id": "course-tis-201",
    "title": "خريطة قسم تحضير العجينة ودور الكيماويات المتخصصة",
    "title_en": "Stock Prep Flow Architecture & Wet-End Chemical Additives",
    "description": "مسار الألياف والكيماويات من خزان الخلط حتى صندوق التدفق ووظائف الراتنجات.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-201-2",
    "course_id": "course-tis-201",
    "title": "تشغيل ومعايرة سكيد طلمبات الحقن وفواني التوزيع",
    "title_en": "Dosing Pump Skid Calibration & Injection Quill Hydraulics",
    "description": "معايرة طلمبات الحقن، مقاييس التدفق المغناطيسية، وحسابات اختراق الفواني.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-202-1",
    "course_id": "course-tis-202",
    "title": "استراتيجيات التكرير وفحص درجة الإنضاج شوبر ريجلر",
    "title_en": "Refining Strategy & Schopper-Riegler Freeness (°SR)",
    "description": "القاعدة الذهبية لتكرير الألياف الطويلة فقط، وفحص درجة الإنضاج ISO 5267-1.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-202-2",
    "course_id": "course-tis-202",
    "title": "مصافي الضغط وسلال السلك المخروطي وإدارة الرفض",
    "title_en": "Pressure Screen Hydrodynamics, Wedgewire Baskets & Reject Control",
    "description": "سرعة تدفق الشقوق Slot Velocity، حماية الماكينة، وضبط نسبة الرفض.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-203-1",
    "course_id": "course-tis-203",
    "title": "الحسابات الهندسية للحمل الحافي الخاص وتنشيط PAE",
    "title_en": "SEL/SSL Mathematical Modeling & Covalent PAE Cross-linking",
    "description": "معادلات SEL و SSL، حشوات الأقراص، وميكانيزم روابط أزيتيدينيوم التساهمية.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-203-2",
    "course_id": "course-tis-203",
    "title": "إدارة الشحنة الكهروستاتيكية وجهاز معايرة الشحنة الغروية",
    "title_en": "Zeta Potential Control & Mütek PCD Colloidal Titration",
    "description": "قياس الشحنة الغروية والجهد الزيتي، ومعادلة الشوائب الأنيونية في الدائرة البيضاء.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-301-1",
    "course_id": "course-tis-301",
    "title": "تشريح قسم التشكيل ومسارات الأقمشة والدرافيل",
    "title_en": "Forming Section Anatomy, Fabric Runs & Roll Mechanics",
    "description": "مسارات أسلاك التشكيل ولبادات العصر، درافيل الصرف وديناميكا الطرد المركزي.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-301-2",
    "course_id": "course-tis-301",
    "title": "أحواض الطرد المركزي وبروتوكول التفتيش الميداني",
    "title_en": "Saveall Drainage Chutes & Pre-Start Safety Inspection",
    "description": "توجيه مياه الطرد بأحواض Savealls وإجراءات التفتيش والسلامة للمعدات الدوارة.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-302-1",
    "course_id": "course-tis-302",
    "title": "ماكينات التشكيل الهلالي وتوين واير ونسبة السرعة",
    "title_en": "Crescent Former vs Twin-Wire & Jet-to-Wire Optimization",
    "description": "التفوق الهندسي لماكينات Crescent، ونسبة سرعة التدفق إلى السلك ونسبة MD/CD.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-302-2",
    "course_id": "course-tis-302",
    "title": "سكاكين الحواف المائية ونظم توجيه وسنترة الأقمشة",
    "title_en": "Edge Squirt Water Cutters & Fabric Auto-Guidance Systems",
    "description": "سكاكين التشذيب المائية عالية الضغط وأجهزة التوجيه الهوائية والهيدروليكية.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-303-1",
    "course_id": "course-tis-303",
    "title": "هيدروديناميكا النزح الطارد وصندوق التدفق عالي الاضطراب",
    "title_en": "Centrifugal Drainage P=T/R & High-Turbulence Headbox Hydraulics",
    "description": "قوى النزح الطارد على درافيل التشكيل وتوليد الاضطراب المجهري لنعومة التشكيل.",
    "order": 1,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-303-2",
    "course_id": "course-tis-303",
    "title": "تكنولوجيا التيشيو المهيكل فائق الامتصاص (TAD, NTT, ATMOS)",
    "title_en": "Structured Tissue Engineering: TAD, NTT & ATMOS Processes",
    "description": "ميكانيزم التجفيف بالهواء النافذ TAD والعصر المهيكل، وتوليد البلك الفائق.",
    "order": 2,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-401-1",
    "course_id": "course-tis-401",
    "title": "الوظيفة الحرارية لأسطوانة اليانكي وميكانيكا الكرمشة",
    "title_en": "Yankee Cylinder Thermal Function & Creping Mechanics",
    "description": "نقل الحرارة الكامنة، صدمة شفرة الكريب، وتوليد التجاعيد الدقيقة والنعومة.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-401-2",
    "course_id": "course-tis-401",
    "title": "بروتوكول تغيير شفرة الكريب بأمان وعادم الغبار",
    "title_en": "Safe Blade Changing Protocols & Dust Extraction Systems",
    "description": "خطوات تغيير الشفرات الساخنة، ضبط زاوية الجيب Pocket Angle، ومنظومات سحب الغبار.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-402-1",
    "course_id": "course-tis-402",
    "title": "المثلث الكيميائي لطلاء اليانكي وعارضة الرشاشات",
    "title_en": "Yankee Coating Chemistry Matrix & Chemical Spray Boom",
    "description": "توازن اللاصق والعازل والمعدل، وضبط عارضة الرش بزاوية 15° Offset وأوفرلاب 100%.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-402-2",
    "course_id": "course-tis-402",
    "title": "درفيل العصر والشفط وفحص بصمة تآكل الشفرة بالمجهر",
    "title_en": "Suction Pressure Roll (SPR) & Blade Wear Footprint Tribology",
    "description": "تشغيل درفيل العصر SPR، وقياس عرض تآكل شفرة الكريب Land Width بالمجهر الضوئي.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-403-1",
    "course_id": "course-tis-403",
    "title": "ديناميكا الكرمشة والشو برس الهيدروليكي ViscoNip",
    "title_en": "High-Frequency Creping Dynamics & Hydraulic Shoe Pressing",
    "description": "تردد التجاعيد الدقيقة، النافذة اللزجة المرنة، وعصارات الشو برس لزيادة الجفاف وحفظ البلك.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-403-2",
    "course_id": "course-tis-403",
    "title": "إجهادات أسطوانات الصلب وعلاج علامات الاهتزاز Chatter Marks",
    "title_en": "Steel Yankee Stress Modeling & Chatter Mark Diagnostics",
    "description": "الميتالورجيا الحرارية لأسطوانات الصلب، وتحليل الاهتزازات الطيفية FFT لمنع الشاتر.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-501-1",
    "course_id": "course-tis-501",
    "title": "دورة البخار المشبع والمفصل الدوار لليانكي",
    "title_en": "Saturated Steam Thermodynamic Cycle & Rotary Joint Assemblies",
    "description": "خصائص البخار المشبع، نقل الحرارة الكامنة، وحلقات كربون المفصل الدوار.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-501-2",
    "course_id": "course-tis-501",
    "title": "مضخات الفاكيوم المائية وفحص مصائد البخار",
    "title_en": "Liquid Ring Vacuum Pumps & Steam Trap Inspection",
    "description": "مضخات الفاكيوم المائية، حرارة مياه التبريد، وفحص مصائد البخار بالأشعة تحت الحمراء.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-502-1",
    "course_id": "course-tis-502",
    "title": "رشاشات الضغط العالي ومزامنة شوط التذبذب",
    "title_en": "HP Oscillating Needle Showers & Stroke Synchronization",
    "description": "تنظيف مسام اللباد بنفاثات 30 بار ومزامنة شوط التذبذب مع سرعة اللباد لحمايته.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-502-2",
    "course_id": "course-tis-502",
    "title": "برنرات غاز الهود ونظم توجيه واستقرار الشيت",
    "title_en": "Hood Gas Combustion Burners & Web Stabilization Auto-Guides",
    "description": "احتراق الغاز الطبيعي النظيف ونسب الهواء، وأجهزة التوجيه الهوائية للأقمشة.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-503-1",
    "course_id": "course-tis-503",
    "title": "الثيرموكمبريسور وفوهات لافال الأسرع من الصوت",
    "title_en": "Thermocompressor Laval Nozzles & Spindle Modulation",
    "description": "تمدد البخار الأسرع من الصوت Mach > 2، إبرة التحكم التناسبية، ونسب السحب والانضغاط.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-503-2",
    "course_id": "course-tis-503",
    "title": "هود الهواء الساخن 500°م ووحدة تعويم الألياف DAF",
    "title_en": "High-Velocity Air Hood 500°C & DAF Dissolved Air Flotation",
    "description": "ارتطام الهواء النفاث وسرعات 150 م/ث، استقرار فرق الضغط dP، واسترجاع ألياف DAF.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-601-1",
    "course_id": "course-tis-601",
    "title": "تشريح مقص ولفافة التيشيو وأعمدة الهواء التمددية",
    "title_en": "Tissue Slitter Rewinder Anatomy & Expanding Air Shafts",
    "description": "أجزاء المقص واللفافة، أذرع فك الرول الجامبو، وتشغيل وضغط أعمدة الهواء.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-601-2",
    "course_id": "course-tis-601",
    "title": "مسار تمرير الورق وبروتوكولات أمان الستائر الضوئية",
    "title_en": "Web Threading Path & Safety Light Curtain Protocols",
    "description": "تمرير الورق بسرعة الزحف، والوقاية الصارمة من مخاطر النقاط الانضغاطية Nip Points.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-602-1",
    "course_id": "course-tis-602",
    "title": "هندسة سكاكين الشير وزاوية الـ Cant Angle والتداخل",
    "title_en": "Shear Slitting Knife Mechanics, Cant Angle & Overlap Depth",
    "description": "ميكانيكا التقطيع بالمقص، ضبط زاوية 0.75°، وتداخل 1.0 مم لحواف نقية بدون غبار.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-602-2",
    "course_id": "course-tis-602",
    "title": "حلقات التحكم في الشد ودمج الطبقات المتعددة ودرافيل الفرد",
    "title_en": "Closed-Loop Tension Control, Multi-Ply Combining & Bowed Rolls",
    "description": "خلايا قياس الشد Load Cells، مطابقة سرعة الرولات المتعددة، ودرافيل الفرد لمنع التشابك.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  },
  {
    "id": "mod-tis-603-1",
    "course_id": "course-tis-603",
    "title": "خوارزمية اللف الثلاثية TNT ونمذجة الإجهادات الداخلية",
    "title_en": "The TNT Winding Triad & Hakiel Wound Roll Stress Modeling",
    "description": "الشد Tension والنيب Nip وعزم الدوران Torque، ونمذجة الإجهادات الشعاعية والمماسية.",
    "order": 1,
    "lessons": [],
    "total_lessons": 2
  },
  {
    "id": "mod-tis-603-2",
    "course_id": "course-tis-603",
    "title": "فحص صلابة الرول والدليل الميداني لعلاج عيوب الرولات",
    "title_en": "Roll Hardness Profiling & Master Winding Defect Troubleshooting",
    "description": "فحص ParoTester، ومنع عيوب Telescoping و Dishing و Corrugations و Core Crushing.",
    "order": 2,
    "lessons": [],
    "total_lessons": 1
  }
];

// ── 4. Lessons (الدروس الـ 54 بالهندسة المزدوجة Layer A و Layer B) ─────────────────

export const lessons: Lesson[] = [
  {
    id: "les-tis-101-1",
    module_id: "mod-tis-101-1",
    title: "تشريح ألياف السليلوز: الخشب الصلب (Hardwood) مقابل الخشب اللين (Softwood)",
    title_en: "Cellulose Fiber Anatomy: Hardwood vs Softwood Morphology",
    type: 'lesson',
    content: `### تشريح ألياف السليلوز ومورفولوجيا ألياف التيشيو (Fiber Morphology):

تعتمد صناعة ورق التيشيو فائق الجودة على فهم عميق للتركيب المورفولوجي والفيزيائي لجدار وتجويف ألياف السليلوز النباتية. الألياف ليست مجرد حشوات متجانسة، بل وحدات بنائية مجهرية تتباين كلياً في أبعادها ومرونتها.

![Hardwood vs Softwood Fiber Cell Wall Anatomy](/images/courses/tis-101-fiber-anatomy.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Valmet tissue fiber morphology hardwood vs softwood cross section diagram\`
> * \`TAPPI T 259 species identification of wood and fibers\`
> * \`Scanning electron micrograph Eucalyptus globulus vs Picea abies cell wall lumen\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ألياف الخشب الصلب (Hardwood / BHKP - اليوكاليبتوس):**
  - ألياف قصيرة ($0.8 - 1.1\\text{ مم}$) ورفيعة جداً.
  - وظيفتها في التيشيو: هي "مخمل النعومة"؛ حيث توفر ملايين الأطراف الحرة الدقيقة على سطح الورقة عند الكرمشة، مما يمنح الورقة ملمساً قطنياً فائق النعومة والامتلاء (Bulk).
* **ألياف الخشب اللين (Softwood / BSKP - الصنوبر والراتنجي NBSK):**
  - ألياف طويلة ($2.5 - 3.2\\text{ مم}$) وسميكة الجدار.
  - وظيفتها في التيشيو: هي "حديد التسليح الهيكلي"؛ حيث تتشابك لبناء شبكة متماسكة تمنع انقطاع الورقة على سرعات الماكينة العالية ($2000\\text{ م/د}$) أو داخل خطوط التحويل.
* **القاعدة الذهبية للوردية:** لا يمكن استبدال اللب الطويل باللب القصير عشوائياً. تقليل اللب الطويل يسبب انقطاعات فورية للورقة، بينما زيادته المفرطة تجعل المناديل خشنة كالصنفرة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **تعداد الألياف النوعي في الجرام ($N_f$):**
  $$N_f = \\frac{1}{\\text{Coarseness} \\times L_{avg}} \\quad [\\text{fibers/gram}]$$
  حيث يعطي لب اليوكاليبتوس ($Eucalyptus$) ما بين $18 - 24 \\times 10^6\\text{ ليفة/جم}$، بينما يعطي اللب الطويل الشمالي ($NBSK$) حوالي $3 - 5 \\times 10^6\\text{ ليفة/جم}$ فقط.
* **نسبة رانكل ومرونة انهيار الليفة (Runkel Ratio):**
  $$\\text{Runkel Ratio} = \\frac{2 \\cdot w}{l_d}$$
  حيث $w$ هو سُمك جدار الخلية ($\\mu\\text{m}$) و $l_d$ هو قطر التجويف الداخلي (Lumen). في مناديل الوجه الفاخرة، نشترط نسبة رانكل $< 1.0$؛ حيث ينهار الجدار الرقيق تحت ضغط العصر ويتحول إلى شريط حريري مسطح يوفر مرونة انحناء استثنائية ($S_b$).

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض شد الورقة مع انقطاعات متكررة | استبدال شحنة NBSK بشحنة لب جنوبي SBSK خشن بدون تعديل النسبة. | العودة فورياً لشحنة NBSK أو رفع نسبة اللب الطويل بـ $+4\\%$. |
| تطاير غبار كثيف عند البوبينة | لب قصير رديء يحتوي على نسبة ألياف ميتة وشظايا fines $> 15\\%$. | فحص أبعاد الألياف في المعمل وزيادة نسبة اللب الطويل مؤقتاً. |
| خشونة مفاجئة في ملمس الورقة | زيادة نسبة اللب الطويل عن الحدود المقررة في وصفة الإنتاج. | ضبط نسب الخلط بالـ DCS للعودة للنسبة المعتمدة للصنف. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-101-2",
    module_id: "mod-tis-101-1",
    title: "استلام البالات، فحص الرطوبة وإجراءات فك الأسلاك بأمان (SOP-BALE-01)",
    title_en: "Pulp Bale Receiving, Core Moisture Testing & De-wiring Safety",
    type: 'lesson',
    content: `### استلام بالات اللب وإجراءات السلامة القياسية (Bale Receiving & Safety):

تبدأ جودة التيشيو من ساحة استلام بالات اللب الخام. تصل البالات بوزن قياسي $250\\text{ كجم}$ للبالة، مربوطة بأسلاك فولاذية عالية الشد تمثل خطراً ميكانيكياً جسيماً إذا لم يتم التعامل معها ببروتوكولات دقيقة.

![Pulp Bale De-wiring and Inbound Inspection Layout](/images/courses/tis-101-bale-safety.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Automatic pulp bale dewiring machine safety cross section\`
> * \`TAPPI T 210 sampling and testing of market pulp for moisture\`
> * \`Bale clamp forklift handling safety rules paper mill\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **الفحص البصري الأولي:** تحقق من نظافة الغلاف الخارجي، خلو البالات من بقع الشحم، الزيوت، الفحم، أو آثار مياه الأمطار والعفن. أي تلوث يدخل البالبر سيتحول إلى ثقوب سوداء (Pinholes) على أسطوانة اليانكي.
* **مخاطر فك الأسلاك (De-wiring Hazards):** أسلاك البالات مشدودة تحت ضغط هائل. عند قص السلك، يرتد طرف السلك المعدني بسرعة خاطفة قد تسبب إصابات جسيمة للعين أو الوجه أو الأطراف.
* **قواعد السلامة الصارمة:**
  1. ارتداء نظارات السلامة البانورامية وقفازات كيفلار مقاومة للقطع (Level 5).
  2. القص بزاوية $45^\\circ$ باستخدام مقصات هيدروليكية أو يدوية طويلة الذراع.
  3. حظر نزع الأسلاك باليد المجردة نهائياً.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب الرطوبة والوزن الجاف تجارياً (Air-Dry Metric Ton - ADMT):**
  تباع بالات اللب على أساس الوزن التجاري الجاف هوائياً ($90\\%$ ألياف جافة تماماً و $10\\%$ رطوبة متوازنة):
  $$\\text{ADMT} = \\text{Gross Weight} \\times \\frac{\\text{Dry Solids Fraction}}{0.90}$$
  إذا انحرفت رطوبة البالات في ساحة التخزين عن $10\\%$، يؤدي ذلك إلى خطأ كارثي في حسابات تركيز البالبر الميداني وتكلفة الطن.
* **توزيع أخذ العينات المعملية (Core Drilling Sample Protocol):**
  تؤخذ عينات اللب عبر مثقاب حلزوني مفرغ من 5 نقاط مختلفة بعمق $150\\text{ مم}$ داخل قلب البالة لضمان قياس رطوبة حقيقي غير متأثر بالجفاف السطحي.

---

### خطوات التشغيل المعيارية (SOP-BALE-01):
1. افحص شهادة شحنة اللب (Certificate of Analysis) وطابق كود الصنف (NBSK vs Eucalyptus).
2. افحص 5 بالات عشوائية بواسطة مجس قياس الرطوبة الرقمي المعاير؛ ارفض الشحنة إذا تجاوزت رطوبة القلب $15\\%$.
3. ضع البالة فوق سير التغذية؛ قص الأسلاك واحداً تلو الآخر مع الوقوف بجانب البالة وليس في مواجهة السلك.
4. اجمع كافة الأسلاك المعدنية فوراً في حاوية الخردة المغلقة؛ وجود سلك واحد في حوض البالبر يدمر روتور البالبر وطلمبات السحب.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انحشار أسلاك البالات بسير التغذية | ترك أطراف أسلاك متدلية بعد القص اليدوي. | إيقاف السير فوراً وعزل الطاقة LOTO وإزالة الأسلاك العالقة. |
| تذبذب تركيز البالبر بعد التحميل | اختلاف رطوبة البالات المخزنة في الهواء الطلق عن النسبة المبرمجة بالـ DCS. | إجراء فحص رطوبة فوري وإدخال نسبة الجفاف الفعلية في معادلة الخلط. |
| بقع صفراء أو بنية في ورق التيشيو | استخدام بالات تعرضت لرطوبة بحرية وعفن فطري أثناء الشحن. | عزل اللوط المصاب فوراً ورفض إدخاله في خلطات مناديل الوجه. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-101-3",
    module_id: "mod-tis-101-2",
    title: "مثلث جودة التيشيو والمفاضلة بين النعومة والمتانة والامتصاص",
    title_en: "The Tissue Quality Triangle: Softness, Strength & Absorbency Trade-offs",
    type: 'lesson',
    content: `### مثلث جودة التيشيو والمفاضلة الفيزيائية الكبرى (The Quality Triangle):

في صناعة التيشيو، تواجه هندسة العمليات معضلة فيزيائية مستمرة: الخصائص الثلاث الكبرى لورق التيشيو (**النعومة السطحية، متانة الشد، والقدرة على الامتصاص**) تتنافر فيزيائياً مع بعضها البعض.

![The Tissue Quality Triangle Trade-offs](/images/courses/tis-101-quality-triangle.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Tissue paper softness vs tensile strength trade-off curve TAPPI\`
> * \`Emtec TSA tissue softness analyzer HF and TS7 parameters\`
> * \`Tissue bulk vs water absorption capacity ISO 12625-8\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **النعومة (Softness):** تنقسم إلى "نعومة سطحية المخملية" ناتجة عن أطراف ألياف اللب القصير بعد الكرمشة، و"نعومة مرونة الشيت" ناتجة عن قدرة الورقة على الانثناء بسهولة بين الأصابع.
* **المتانة (Tensile Strength):** قدرة الشيت على مقاومة الشد في الاتجاه الطولي (MD) والعرضي (CD) دون تمزق أثناء الاستخدام.
* **الامتصاص (Absorbency):** سرعة وسعة احتجاز الماء داخل الفراغات الهوائية المجهرية بين الألياف.
* **المعادلة الميدانية:**
  - كلما رفعت التكرير أو زادت ألياف اللب الطويل لرفع المتانة $\\implies$ زادت الروابط الهيدروجينية، فتصلبت الورقة وفقدت نعومتها وامتصاصها.
  - كلما خفضت الروابط واستخدمت مطريات كيميائية لرفع النعومة $\\implies$ ضعفت متانة الورقة وزادت انقطاعاتها.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **مؤشر النعومة الحسي الموضوعي (Emtec TSA - Tissue Softness Analyzer):**
  يقاس الملمس بجهاز التحليل الصوتي المجهري TSA عبر محددين أساسيين:
  1. ذروة التردد $TS7$ (عند $\\approx 6.5\\text{ kHz}$): تقيس النعومة الحريرية السطحية لأطراف الألياف (كلما قلت القيمة زادت النعومة).
  2. ذروة التردد $TS750$ (عند $\\approx 750\\text{ Hz}$): تقيس مرونة وقساوة البنية الهيكلية للشيت (Rigidity/Stiffness).
* **معادلة الارتباط بين الشد والمساحة الرابطة النسبية (RBA):**
  $$\\text{Tensile Index} = k_1 \\cdot \\text{RBA} \\cdot \\sigma_b$$
  حيث $k_1$ معامل هندسي، و $\\text{RBA}$ هي نسبة مساحة الألياف المرتبطة بروابط هيدروجينية، و $\\sigma_b$ قوة القص لكل وحدة مساحة رابطة.
  لتحقيق التوازن الذهبي، نستخدم الألياف متعددة الطبقات (Stratification) لعزل متانة اللب الطويل في القلب وترك السطح للألياف فائقة النعومة.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| شكوى العملاء من خشونة مناديل الوجه | ارتفاع قيمة $TS750$ نتيجة تكرير زائد للب الطويل أو زيادة ضغط كبس درفيل SPR. | خفض طاقة التكرير النوعية، وتقليل الحمل الخطي لدرفيل العصر. |
| انقطاع الورق عند خطوط التقطيع بالتحويل | انخفاض شد الاتجاه العرضي CD عن الحد الأدنى لمواصفة الماكينة. | رفع نسبة اللب الطويل بمقدار $+3\\%$ أو زيادة راتنج الشد الجاف CMC. |
| بطء امتصاص الماء في مناديل المطبخ | انضغاط مسام الشيت وفقدان البلك (Bulk) بسبب كبس مفرط على اليانكي. | تخفيف ضغط العصر وتعديل زاوية سكين الكريب لرفع كرمشة البلك. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-102-1",
    module_id: "mod-tis-102-1",
    title: "خلطات الألياف حسب المنتج: مناديل الوجه، التواليت، المطبخ، ومسحات الورش",
    title_en: "Furnish Formulations Across Grades: Facial, Toilet, Towel & Wipes",
    type: 'lesson',
    content: `### تصميم خلطات الألياف حسب صنف التيشيو التجاري (Furnish Formulations):

لكل صنف تجاري من ورق التيشيو معادلة خلط كيميائية ومورفولوجية فريدة تلبي وظيفته الاستهلاكية في السوق. استخدام خلطة موحدة لجميع المنتجات هو خطأ صناعي فادح يؤدي إلى ارتفاع التكلفة وتراجع الجودة.

![Furnish Recipe Matrix by Grade](/images/courses/tis-102-recipes.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Tissue furnish blend ratio facial vs bath tissue vs kitchen towel table\`
> * \`Deinked pulp DIP utilization in away from home AFH tissue grades\`
> * \`Virgin pulp vs recycled fiber strength and softness curves TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **1. مناديل الوجه الفاخرة (Facial Tissue - 13.5 إلى 15.5 جم/م²):**
  - **الخلطة:** $80 - 85\\%$ لب قصير (يوكاليبتوس) + $15 - 20\\%$ لب طويل شمالي (NBSK).
  - **الهدف:** أعلى درجات النعومة المخملية الممكنة مع متانة كافية لسحب المنديل من العلبة دون تمزق.
* **2. ورق التواليت والحمام (Bath Tissue - 15.0 إلى 17.5 جم/م²):**
  - **الخلطة:** $70 - 75\\%$ لب قصير + $25 - 30\\%$ لب طويل.
  - **الشرط الحرج:** سهولة التفكك والتحلل المائي السريع داخل شبكات الصرف الصحي (Flushability)؛ يُحظر استخدام مقاومات البلل الدائمة نهائياً.
* **3. مناديل المطبخ فائقة الامتصاص (Kitchen Towel - 20.0 إلى 24.0 جم/م²):**
  - **الخلطة:** $50 - 60\\%$ لب طويل + $40 - 50\\%$ لب قصير.
  - **الهدف:** متانة رطبة هائلة لتحمل الفرك ومسح الزيوت والسوائل دون أن تتفتت الورقة.
* **4. مسحات الورش الصناعية (Industrial Wipes / AFH):**
  - **الخلطة:** حتى $100\\%$ لب معاد تدويره منزوع الحبر (DIP) أو خليط لب بكر مع كسر ماكينة عالي.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة حساب متوسط طول الألياف للخلطة المرجحة ($L_{blend}$):**
  $$L_{blend} = \\sum_{i=1}^{n} x_i \\cdot L_{w,i} = (x_{LF} \\cdot L_{LF}) + (x_{SF} \\cdot L_{SF})$$
  حيث $x_i$ هو الكسر الكتلي للمكون و $L_{w,i}$ متوسط طول الألياف المرجح بالوزن.
* **معامل الانهيار المائي لمناديل التواليت (Flushability Disintegration Test - FG502):**
  تخضع عينات ورق التواليت لاختبار الصندوق الاهتزازي المائي القياسي؛ حيث يجب أن تتفتت الورقة إلى شظايا أصغر من $12.5\\text{ مم}$ خلال زمن لا يتجاوز **$30 - 45\\text{ ثانية}$** تحت إجهاد قص مائي $120\\text{ RPM}$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انسداد شبكات الصرف الصحي بشحنة تواليت | تلوث خلطة التواليت براتنج مقاومة البلل PAE من خط المطبخ. | إيقاف خط التغذية، غسيل حوض الكسر، وتصفير حقن PAE. |
| تفكك مناديل المطبخ أثناء مسح الأسطح | انخفاض نسبة اللب الطويل عن $50\\%$ أو نقص جرعة PAE. | رفع نسبة NBSK ومراجعة معدل إضافة راتنج PAE في المعمل. |
| تراجع شد الورق في أصناف AFH | تدهور جودة كسر الماكينة المعاد وتراكم شوائب fines بنسبة عالية. | زيادة نسبة التطهير بالـ Purge وإضافة $10\\%$ لب بكر طويل. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-102-2",
    module_id: "mod-tis-102-2",
    title: "تشغيل أحواض البالبر (LC/HC)، روتور الفوكس ومصيدة الشوائب (SOP-PULP-02)",
    title_en: "Hydrapulper Operations (LC/HC), Vokes Rotor Dynamics & Junk Traps",
    type: 'lesson',
    content: `### تشغيل أحواض البالبر وهيدروديناميكا التفكيك المائي (Pulper Operations):

حوض البالبر (Hydrapulper) هو قلب بداية العملية الإنتاجية. مهمته ليست "فرم" أو "تقطيع" ألياف الخشب، بل توليد دوامة هيدروديناميكية عنيفة تتيح قوى قص مائي مجهري وتصادم ألياف لتفكيك شيتات البالات إلى ألياف مفردة معزولة دون الإضرار بطولها الطبيعي.

![Hydrapulper Rotor and Flow Patterns](/images/courses/tis-102-pulper-flow.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Andritz FibreSolve pulper rotor flow dynamics cross section\`
> * \`Voith BlueLine IntensaPulper flow vortex junk trap diagram\`
> * \`Pulper specific deflaking energy SDE calculation kWh per ton\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **أنواع أحواض البالبر في التيشيو:**
  - *البالبر منخفض التركيز (LC Pulper - تركيز 4.5 إلى 5.5%):* الأكثر شيوعاً في مصانع التيشيو البكر؛ يمتاز بسرعة التفكيك وسهولة ضخ المعلق.
  - *البالبر عالي التركيز (HC Pulper - تركيز 12 إلى 16%):* يستخدم لعجائن التدوير وإزالة الحبر (DIP)؛ حيث يوفر احتكاكاً بين الألياف لفصل جزيئات الحبر مع استهلاك أقل للماء والحرارة.
* **روتور الفوكس ومصيدة الشوائب (Vokes Rotor & Junk Trap):**
  - يقوم الروتور بإنشاء الدوامة المركزية وسحب البالات نحو القاع.
  - تسقط الشوائب الثقيلة (المعادن، الحجارة، الأسلاك المتخلفة) في جيب جانبي منخفض يسمى **مصيدة الشوائب (Junk Trap)**، بينما تُسحب البلاستيكيات الطويلة بواسطة حبل الشوائب (Ragger Tail).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب الطاقة النوعية للتفكيك (Specific Deflaking Energy - SDE):**
  $$SDE = \\frac{P_{net} \\cdot t_{batch}}{M_{batch}} \\quad [\\text{kWh/ton}]$$
  حيث $P_{net}$ هي قدرة المحرك الصافية ($\\text{kW}$)، $t_{batch}$ زمن الدورة (ساعات)، و $M_{batch}$ كتلة الألياف الجافة بالطن.
  - المستهدف للب البكر القصير: $25 - 35\\text{ kWh/t}$.
  - المستهدف للب البكر الطويل: $35 - 50\\text{ kWh/t}$.
  - زيادة الطاقة عن $65\\text{ kWh/t}$ تؤدي إلى توليد شوائب ميتة (Fines) دون أي تحسن في درجة التفكيك.
* **معادلة تركيز البالبر الميداني ($C_{pulper}$):**
  $$C_{pulper} = \\frac{M_{fiber}}{M_{fiber} + V_{water} \\cdot \\rho_{water}} \\times 100$$

---

### خطوات التشغيل المعيارية (SOP-PULP-02):
1. املأ حوض البالبر بالمياه البيضاء المصفاة بنسبة $60\\%$ من الحجم المطلوب عند حرارة $40 - 50^\\circ\\text{C}$.
2. شغل محرك الروتور على سرعة منخفضة ($30\\text{ Hz}$) وتأكد بصرياً من تشكل الدوامة المركزية.
3. ابدأ إسقاط البالات عبر السير: ابدأ باللب الطويل أولاً ثم اللب القصير.
4. أضف مياه التخفيف التكميلية حتى الوصول للتركيز المطلوب ($4.8 - 5.2\\%$).
5. ارفع سرعة الروتور إلى $50\\text{ Hz}$ واضبط مؤقت التفكيك على $18\\text{ دقيقة}$ للخلطة البكر.
6. اسحب عينة فحص في أسطوانة بصرية زرقاء سعة $500\\text{ مل}$؛ إذا وُجدت كتل ألياف أكبر من $3\\text{ مم}$ مدد التشغيل 3 دقائق.
7. افتح محبس التفريغ نحو خزان التفريغ (Dump Chest)، وفعل دورة غسيل مصيدة الشوائب لمدة 45 ثانية.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| فصل محرك البالبر على الحمل الزائد Overload | زيادة التركيز عن $6.5\\%$ أو سقوط بالات متكتلة مع مياه باردة $< 20^\\circ\\text{C}$. | فتح خط مياه الطوارئ فورياً، وتدوير المحرك على أدنى سرعة. |
| كتل ألياف صلبة تصل لخزان الماكينة | تآكل ثقوب صفيحة الاستخلاص (Extraction Plate) واتساعها $> 14\\text{ مم}$. | تقليل زمن فتح محبس التفريغ، وجدولة تغيير الصفيحة في أقرب توقف. |
| اهتزاز شديد وصوت خبط داخل البالبر | سقوط قطعة معدنية ثقيلة أو سلك بالة عالق بريش الروتور. | تفريغ البالبر فوراً وعزل الطاقة LOTO وإزالة الأجسام المعدنية. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-102-3",
    module_id: "mod-tis-102-2",
    title: "حلقات التحكم الآلي في التركيز (Consistency Control) وموازين التدفق",
    title_en: "Closed-Loop Consistency Control Dynamics & Dilution Tuning",
    type: 'lesson',
    content: `### حلقات التحكم الآلي في التركيز (Consistency Control Dynamics):

التركيز (Consistency) هو النسبة المئوية لوزن الألياف الجافة في معلق العجينة المائي. ثبات التركيز بنسبة خطأ لا تتجاوز $\\pm 0.05\\%$ عبر خزانات تحضير العجينة هو الضمان الوحيد لاستقرار الوزن القياسي (Basis Weight) ومنع تموجات الجراماج العرضية على ماكينة التيشيو.

![Inline Consistency Control Loop Schematic](/images/courses/tis-102-consistency-loop.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Valmet inline optical consistency transmitter calibration protocol\`
> * \`BTG rotating shear consistency transmitter peak performance manual\`
> * \`Consistency dilution valve PID loop tuning paper machine stock prep\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **أنواع حساسات التركيز في التيشيو:**
  1. *حساس القص الميكانيكي الدوار (Rotating / Blade Shear):* يقيس قوة مقاومة العجينة لحركة الشفرة؛ ممتاز للتركيزات العالية والمتوسطة ($2.5 - 5.0\\%$).
  2. *حساس الميكروويف (Microwave Transmitter):* يقيس التردد الكهرومغناطيسي؛ لا يتأثر بنوع الألياف أو اللون أو درجة الإنضاج.
  3. *الحساس البصري (Optical Sensor):* يقيس تشتت الضوء؛ ممتاز للتركيزات المنخفضة جداً ($0.5 - 1.5\\%$) في خط صندوق التدفق.
* **آلية عمل حلقة التحكم المغلقة (Closed Loop):**
  تقيس أجهزة الإرسال التركيز الفعلي في خط السحب بعد طلمبة الخزان $\\implies$ يقارن نظام الـ DCS القيمة بالمستهدف $\\implies$ يصدر أمراً لصمام التخفيف (Dilution Valve) لضخ كمية مياه مصفاة دقيقة لتعديل التركيز.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **ميزان المادة لحلقة التخفيف الآلية (Dilution Mass Balance):**
  $$Q_{water} = Q_{in} \\cdot \\left( \\frac{C_{in} - C_{target}}{C_{target}} \\right) \\quad [\\text{m}^3/\\text{h}]$$
  حيث $Q_{in}$ هو معدل تدفق العجينة الداخلة، $C_{in}$ التركيز الداخل، و $C_{target}$ التركيز المستهدف.
* **ضبط متحكم الـ PID لحلقة التركيز:**
  نظراً لوجود زمن تأخير ميت ($Dead\\ Time\\ \\theta_d$) بين نقطة حقن ماء التخفيف وحساس القياس اللاحق في الخط:
  $$G_p(s) = \\frac{K_p \\cdot e^{-\\theta_d s}}{\\tau s + 1}$$
  يجب أن يُضبط زمن التأخير التفاضلي لمنع التذبذب الدوري (Cycling) الذي يولد موجات طولية في وزن الشيت.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تذبذب قراءة التركيز بشكل جيبي منتظم | بارامترات PID لصمام التخفيف سريعة جداً (Gain مرتفع). | تهدئة استجابة الصمام بزيادة زمن التكامل Integral Time. |
| انحراف قراءة الحساس عن التحليل المعملي | ترسب ألياف وكيماويات فوق شفرة أو عدسة الحساس. | تنظيف حساس القياس ومعايرة نقطة الصفر بمختبر الجودة. |
| صمام التخفيف مفتوح $100\\%$ والتركيز لا ينخفض | ضغط خط المياه البيضاء للتخفيف منخفض عن ضغط خط العجينة. | فحص طلمبة التخفيف والتأكد من فتح محابس الخط الفرعي. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-103-1",
    module_id: "mod-tis-103-1",
    title: "فيزياء أبعاد الألياف: رقم الخشونة، نسبة رانكل، ونموذج لوكاس-واشبورن للامتصاص",
    title_en: "Fiber Dimension Physics: Coarseness, Runkel & Lucas-Washburn Absorption",
    type: 'lesson',
    content: `### فيزياء أبعاد الألياف وديناميكا الامتصاص الشعري (Fiber Physics & Capillary Absorption):

ترتبط الجودة الفائقة لورق التيشيو بفيزياء أبعاد جدار الخلية النباتية. رقم الخشونة (Coarseness) ونسبة رانكل تحكمان قدرة الشيت على تكوين مصفوفة مسامية تتيح الامتصاص الفوري للسوائل وفق قوانين الموائع الشعرية.

![Lucas-Washburn Capillary Flow Absorption Model](/images/courses/tis-103-lucas-washburn.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Fiber coarseness measurement Kajaani FS5 standard TAPPI T 271\`
> * \`Lucas-Washburn equation pore radius and contact angle in paper\`
> * \`Fiber cell wall collapse and relative bonded area RBA in soft tissue\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ما هو رقم الخشونة (Coarseness)؟**
  هو وزن الليفة بالنسبة لطولها، ويقاس بـ (مليجرام لكل 100 متر ألياف - mg/100m).
  - الألياف ذات رقم الخشونة المنخفض (كاليوكاليبتوس) تكون رقيقة وناعمة جداً وجدارها ينثني بسهولة.
  - الألياف ذات رقم الخشونة المرتفع (كالصنوبر الجنوبي SBSK) تكون سميكة كالأنبوب الخشن وتنتج ورقة صلبة الملمس.
* **كيف تشرب ورقة التيشيو الماء؟**
  لا يمتص الورق الماء داخل جدار الخلية فقط، بل "يشفط" الماء بالخاصية الشعرية داخل الفراغات الهوائية المجهرية المتكونة بين تقاطعات الألياف. إذا كبست الورقة بقوة في الماكينة، أغلقت هذه المسام وفقدت الورقة قدرتها على الامتصاص.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة لوكاس-واشبورن للامتصاص الشعري (Lucas-Washburn Equation):**
  تحكم سرعة وارتفاع صعود السائل داخل مسام التيشيو:
  $$\\frac{dh}{dt} = \\frac{r \\cdot \\gamma \\cdot \\cos\\theta}{4 \\cdot \\eta \\cdot h}$$
  وبالمكاملة للحصول على مسافة التغلغل $h$ كدالة في الزمن $t$:
  $$h(t) = \\sqrt{\\frac{r \\cdot \\gamma \\cdot \\cos\\theta \\cdot t}{2 \\cdot \\eta}}$$
  حيث $r$ متوسط نصف قطر المسام الشعري، $\\gamma$ التوتر السطحي للسائل، $\\theta$ زاوية التلامس، و $\\eta$ اللزوجة الديناميكية.
  - لتعظيم الامتصاص في مناديل المطبخ: يجب تعظيم نصف قطر المسام $r$ عبر رفع البلك (Bulk) وتقليل العصر الميكانيكي، مع الحفاظ على $\\cos\\theta \\approx 1$ (زاوية تلامس صفرية وسطح هيدروفيلي محب للماء).
* **معادلة رقم الخشونة وتعداد الألياف:**
  $$\\text{Coarseness } (C) = \\frac{M_{fibers}}{\\sum L_i} \\quad [\\text{mg/m}]$$

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| بطء امتصاص الماء في مناديل المطبخ | انخفاض نصف قطر المسام $r$ بسبب كبس مفرط أو زيادة المطريات الكيميائية. | خفض ضغط نيب العصر، وتقليل جرعة المطريات لتقليل زاوية التلامس $\\theta$. |
| خشونة مفاجئة مصحوبة بانخفاض النعومة | ارتفاع رقم الخشونة للشحنة الواردة عن $8.5\\text{ mg/100m}$. | خفض نسبة اللب الطويل الخشن وزيادة نسبة ألياف اليوكاليبتوس. |
| تفتت بنية الورقة عند البلل | نقص الألياف الطويلة المساهمة في تكوين الهيكل الشعري المتشابك. | رفع نسبة NBSK بمقدار $+4\\%$ وتعديل إضافة مقاومات البلل. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-103-2",
    module_id: "mod-tis-103-2",
    title: "تشغيل الرأس الموزع متعدد الطبقات (Stratified 3-Layer) وضبط فرق ضغط الحواجز (SOP-STRAT-03)",
    title_en: "Stratified 3-Layer Headbox Operations & Boundary Vane Pressure Tuning",
    type: 'lesson',
    content: `### الرأس الموزع متعدد الطبقات (Stratified Headbox Operations):

يمثل صندوق التدفق متعدد الطبقات (Stratified Headbox) قمة التطور التكنولوجي في تشكيل التيشيو. يتيح حقن 3 طبقات ألياف متمايزة هيدروليكياً في نفس الوقت لتصنيع شيت يجمع بين السطح المخملي الناعم والقلب الإنشائي شديد المتانة.

![3-Layer Stratified Headbox Cross Section and Vanes](/images/courses/tis-103-stratified-headbox.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Valmet OptiFlo multi layer tissue headbox dilution cross section\`
> * \`Toscotec TT Headbox-ML stratified tissue formation diagram\`
> * \`Flexible trailing vanes differential pressure tissue headbox TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **بنية الطبقات الثلاث للشيت:**
  - *الطبقة العلوية (وجه الهود):* $100\\%$ لب قصير ناعم (يوكاليبتوس) لملامسة جلد المستهلك.
  - *الطبقة الوسطى (القلب الإنشائي):* $60\\%$ لب طويل قوي (NBSK) + $40\\%$ كسر ماكينة لتوفير المتانة والتماسك.
  - *الطبقة السفلية (وجه اليانكي):* $100\\%$ لب قصير ناعم لضمان التصاق متجانس وكرمشة ميكروية ناعمة.
* **الحواجز المرنة (Trailing Vanes):** حواجز رقيقة تفصل بين مسارات الطبقات الثلاث داخل صندوق التدفق لمنع اختلاط الألياف قبل مخرج الفونية.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معيار نقاوة الطبقات ومنع الاضطراب البيني (Layer Purity Optimization):**
  يعتمد الحفاظ على نقاوة الطبقات ($Purity > 85\\%$) على تصفير فرق السرعة بين الطبقات المتجاورة عند شفة الخروج:
  $$|\\Delta v| = |v_{layer,1} - v_{layer,2}| < 0.05\\text{ m/s}$$
  إذا زاد فرق السرعة، يتولد قص اضطرابي هيدروليكي يمزق الحاجز المرن ويؤدي لاختلاط ألياف اللب الطويل مع طبقة السطح، فتنهار نعومة الورقة.
* **معادلة هبوط الضغط عبر الحواجز:**
  $$\\Delta P_{vane} = P_{layer,top} - P_{layer,core} \\quad \\implies \\quad -0.02\\text{ bar} \\le \\Delta P_{vane} \\le +0.02\\text{ bar}$$

---

### خطوات التشغيل المعيارية (SOP-STRAT-03):
1. تحقق من قراءات حساسات الضغط للطبقات الثلاث ($P_1, P_2, P_3$) على شاشة الـ DCS.
2. اضبط معدلات التدفق لتحقيق توزيع الكسر الكتلي: $25\\%$ طبقة علوية، $50\\%$ قلب، و $25\\%$ طبقة سفلية.
3. تأكد من أن فرق الضغط عبر الحواجز المرنة لا يتجاوز $\\pm 0.02\\text{ bar}$.
4. اسحب عينة مقطعية مجهرية ملونة كل وردية للتحقق من عدم تسرب ألياف اللب الطويل لطبقات السطح الخارجية.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تدهور مفاجئ في نعومة سطح المنديل | اختلاط الطبقات نتيجة فرق سرعة أو انحناء الحاجز المرن Vane. | موازنة الضغوط ومعدلات التدفق بين الطبقات بالـ DCS فوراً. |
| انفصال طبقات الورق Delamination عند التحويل | ضعف الروابط البينية بين القلب والسطح بسبب زيادة المطريات بالقلب. | خفض جرعة المطريات بالطبقة الوسطى وزيادة تكرير ألياف القلب. |
| خطوط وزنية طولية في بروفايل الورق | انسداد جزئي في إحدى فواني التخفيف الموضعي CD Dilution. | إجراء دورة غسيل عكسي آلي لبلوف التخفيف في صندوق التدفق. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-103-3",
    module_id: "mod-tis-103-2",
    title: "النموذج الرياضي لتحسين تكلفة الخلطة (Furnish Cost Optimization) وجودة السطح",
    title_en: "Mathematical Furnish Cost Optimization & Multi-Variable Linear Modeling",
    type: 'lesson',
    content: `### نمذجة وتحسين تكلفة خلطة الألياف (Furnish Cost Optimization):

تمثل تكلفة اللب الخام ما بين **$55\\% - 65\\%$** من إجمالي تكاليف تصنيع ورق التيشيو. تمكن النمذجة الرياضية متعددة المتغيرات مهندس العمليات من الوصول إلى الخلطة الأقل تكلفة (Least-Cost Furnish) مع الوفاء الكامل بكافة محددات الجودة القياسية الصارمة.

![Furnish Cost vs Softness Optimization Curves](/images/courses/tis-103-cost-model.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Pulp furnish linear programming optimization cost paper mill\`
> * \`Tensile vs softness Pareto frontier optimization tissue manufacturing\`
> * \`Raw material furnish blend economic trade-off pulp prices\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **لماذا نحسب تكلفة الخلطة يومياً؟**
  أسعار خام اللب في البورصة العالمية تتغير باستمرار. اللب الطويل الشمالي NBSK أغلى بنسبة $20 - 35\\%$ من لب اليوكاليبتوس. توفير $2\\%$ فقط من اللب الطويل واستبدالها بلب قصير أو كسر ماكينة نظيف يوفر عشرات الآلاف من الدولارات شهرياً للمصنع.
* **خط الأمان التشغيلي:** لا يجوز خفض اللب الطويل لتقليل التكلفة إذا كان ذلك سيؤدي لانقطاع الورقة على الماكينة. الانقطاع لمدة 15 دقيقة يهدر وفورات يوم كامل من اللب!

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **صياغة نموذج البرمجة الخطية للخلطة (Linear Programming Optimization):**
  $$\\text{دالة الهدف (تقليل التكلفة): } \\min J = \\sum_{i=1}^{n} c_i \\cdot x_i$$
  حيث $c_i$ تكلفة الطن من المكون $i$ بالدولار، و $x_i$ الكسر الكتلي للمكون.
  **القيود الهندسية الملزمة:**
  1. قيد الكتلة الإجمالية: $\\sum_{i=1}^{n} x_i = 1.0$
  2. قيد متانة الشد الأدنى: $\\sum_{i=1}^{n} T_i \\cdot x_i \\ge T_{spec} \\quad (\\text{N/m})$
  3. قيد النعومة الحسية الأدنى: $\\sum_{i=1}^{n} S_i \\cdot x_i \\ge S_{spec} \\quad (\\text{TSA HF})$
  4. قيد استقرار الماكينة: $x_{LF} \\ge 0.15$ لمنع تقطع الشيت على سرعات $> 1800\\text{ م/د}$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| زيادة استهلاك اللب الطويل وارتفاع التكلفة | زيادة هامش الأمان للمشغلين دون مبرر لتقليل مخاطر الانقطاعات. | تدقيق مؤشرات الشد وإعادة ضبط نسبة الخلط بالـ DCS نحو القيمة المثلى. |
| انخفاض جفاف الشيت الخارج من نيب العصر | تدهور ترشيح العجينة نتيجة استخدام خلطة رخيصة غنية بالألياف الدقيقة. | مراجعة درجة الشوبر ريجلر للخلطة وإجراء فحص نسبة الشوائب المعملي. |
| فشل مواصفة النعومة في فحص الجودة النهائي | زيادة نسبة اللب الطويل على حساب اليوكاليبتوس لتقليل هادر القطع. | الالتزام الصارم بحدود البرمجة الخطية المعتمدة لصنف مناديل الوجه. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-201-1",
    module_id: "mod-tis-201-1",
    title: "خريطة تدفق قسم تحضير العجينة وخزانات الخلط والماكينة",
    title_en: "Stock Prep Flow Architecture: From Mixing Chest to Machine Chest",
    type: 'lesson',
    content: `### خريطة تدفق قسم تحضير العجينة (Stock Prep Flow Architecture):

يمثل قسم تحضير العجينة (Stock Preparation) حلقة الوصل الحيوية بين بالات اللب الصلبة الجافة وبين ماكينة التيشيو فائقة السرعة. أي اضطراب في هذا القسم ينتقل فوراً إلى صندوق التدفق ويظهر كعيوب في جودة الورق.

![Stock Prep Flow Architecture and Chests](/images/courses/tis-201-stockprep-flow.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Stock preparation flow diagram mixing chest machine chest paper machine\`
> * \`Valmet stock preparation short circulation tissue paper flow schematic\`
> * \`Fan pump and deaerator deculator wet end piping drawing\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **مسار الألياف عبر الخزانات الرئيسية:**
  1. *حوض التفريغ (Dump Chest):* يستقبل العجينة مباشرة بعد البالبر بتركيز $4.5 - 5.0\\%$.
  2. *خزان الخلط (Mixing Chest):* يتم فيه خلط ألياف اللب الطويل المكررة مع ألياف اللب القصير وكسر الماكينة المعالج بنسب دقيقة.
  3. *خزان الماكينة (Machine Chest):* يمثل خزان التخزين النهائي المستقر قبل ضخ العجينة إلى الدائرة القصيرة للماكينة؛ ويحافظ على منسوب وتركيز شديدي الثبات.
* **الدائرة القصيرة (Short Circulation):** تبدأ من صمام التحكم في الوزن الأساسي (Basis Weight Valve) وطلمبة الخلط (Fan Pump)، حيث يتم تخفيف العجينة بالمياه البيضاء من تركيز $3.0\\%$ إلى $0.18 - 0.25\\%$ قبل دخولها لصندوق التدفق.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة زمن البقاء وتجانس الخلط في الخزانات (Retention Time):**
  $$\\tau_{res} = \\frac{V_{chest}}{Q_{out}} \\quad [\\text{minutes}]$$
  يجب ألا يقل زمن البقاء في خزان الماكينة عن **$25 - 35\\text{ دقيقة}$** لضمان امتصاص أي تذبذبات في التركيز أو درجة الحرارة وتجانس توزيع المضافات الكيميائية.
* **ميزان المادة في الدائرة القصيرة (Fan Pump Mixing Mass Balance):**
  $$Q_{fan} \\cdot C_{headbox} = Q_{thick} \\cdot C_{thick} + Q_{ww} \\cdot C_{ww}$$
  حيث $Q_{fan}$ تدفق طلمبة المروحة، $C_{headbox}$ تركيز صندوق التدفق ($0.2\\%$)، و $C_{ww}$ تركيز المياه البيضاء المتخلفة بعد التشكيل.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تذبذب مفاجئ في الوزن القياسي Basis Weight | تذبذب منسوب خزان الماكينة مما أدى لاختلاف ضغط السحب لطلمبة التغذية. | تثبيت منسوب خزان الماكينة بين $60 - 75\\%$ وضبط حلقة التغذية. |
| رغوة كثيفة تفيض من خزان الخلط | هواء محبوس نتيجة سقوط حر للعجينة من ارتفاع عالي داخل الخزان. | تعديل خط التغذية ليغمر تحت مستوى السطح، وضبط مانع الرغوة. |
| ترسيب كتل ألياف بقاع خزان الماكينة | انخفاض قدرة قلاب الخزان (Agitator) أو تلف ريش التقليب. | مراجعة أمبير القلاب وجدولة فحص ميكانيكي لعمود التقليب في التوقف. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-201-2",
    module_id: "mod-tis-201-1",
    title: "الكيماويات الأساسية للتيشيو: مقاومات البلل، النشا، والمطريات",
    title_en: "Specialty Tissue Chemicals: PAE, GPAM, CMC, Debonders & Softeners",
    type: 'lesson',
    content: `### الكيماويات المتخصصة للتيشيو (Specialty Wet-End Additives):

تعتمد صناعة التيشيو على هندسة كيميائية دقيقة في الطرف الرطب (Wet-End). تلعب البوليمرات المضافة أدواراً حاسمة في تحقيق توازن المتانة الرطبة والجافة دون التضحية بالنعومة الفائقة.

![Wet End Chemical Families and Injection](/images/courses/tis-201-chemicals.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`PAE wet strength resin vs GPAM temporary wet strength chemistry\`
> * \`Cationic starch and CMC dry strength synergy tissue paper TAPPI\`
> * \`Chemical debonders quaternary ammonium softeners mechanism\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **1. مقاومات البلل الدائمة (PAE - Polyamide-Epichlorohydrin):**
  - تضاف لمناديل المطبخ؛ تكون روابط غير قابلة للذوبان في الماء حتى تحت الفرك العنيف.
* **2. مقاومات البلل المؤقتة (GPAM - Glyoxylated Polyacrylamide):**
  - تضاف لورق التواليت؛ تمنح الورقة قوة مؤقتة لعدة ثوانٍ عند الاستخدام، ثم تتفكك تماماً داخل المرحاض.
* **3. محسنات الشد الجاف (CMC والنشا الكاتيوني):**
  - بوليمرات تزيد قوة التماسك الداخلي للشيت الجاف دون الحاجة لزيادة التكرير الميكانيكي المضر بالنعومة.
* **4. المطريات ومفككات الروابط (Debonders & Softeners):**
  - مستحلبات زيتية كيميائية تلتصق بسطح الألياف وتقلل الروابط الهيدروجينية الطبيعية، مما يجعل الورقة قطنية الملمس وفائقة المرونة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **كفاءة تفاعل راتنجات الـ PAE:**
  ترتبط بوليمرات PAE كاتيونياً بمجموعات الكربوكسيل السالبة على الألياف، وتتحول تحت حرارة أسطوانة اليانكي إلى شبكة بوليمرية مترابطة تساهمياً:
  $$\\text{Permanent Wet Strength Ratio} = \\frac{\\text{Wet Tensile (CD)}}{\\text{Dry Tensile (CD)}} \\times 100 \\ge 25 - 32\\%$$
* **تأثير المطريات الكيميائية (Debonder Mechanism):**
  تتكون من مركبات أمونيوم رباعية كاتيونية ذات سلاسل هيدروكربونية كارهة للماء:
  تقلل الـ Debonders معامل الانثناء ($S_b$) للورقة بنسبة تصل إلى $40\\%$، ولكنها تخفض متانة الشد الجاف بنسبة $15 - 25\\%$ لكل $1\\text{ كجم/طن}$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض الشد الرطب لمناديل المطبخ عن $25\\%$ | انخفاض الـ pH في الطرف الرطب عن $6.8$ أو تفكك صلاحية راتنج PAE. | ضبط الـ pH في نطاق $7.2 - 7.6$ ومراجعة تاريخ صلاحية البراميل. |
| الشيت يلتصق بشدة بسكين الكريب ويتقطع | تسرب راتنج PAE غير المرتبط بالألياف وترسبه فوق أسطوانة اليانكي. | تقليل جرعة PAE فوراً وزيادة مادة التحرير Release في عارضة الرش. |
| فقدان مفاجئ لشد الورقة الجاف | زيادة جرعة المطريات (Debonder) عن الحدود المسموحة بالوصفة. | خفض معدل حقن المطريات بمقدار $-20\\%$ واستعادة توازن الشد. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-201-3",
    module_id: "mod-tis-201-2",
    title: "تشغيل ومعايرة سكيد طلمبات حقن الكيماويات (SOP-CHEM-01)",
    title_en: "Chemical Dosing Pump Skid Calibration & Injection Quill Maintenance",
    type: 'lesson',
    content: `### سكيد حقن الكيماويات وفواني التوزيع (Chemical Dosing Skids):

تعتمد كفاءة الإضافات الكيميائية على دقة منظومات الضخ والحقن. أخطاء المعايرة في سكيد الكيماويات تؤدي إما إلى إهدار آلاف اللترات من البوليمرات باهظة الثمن، أو فشل مواصفات الجودة القياسية ورفض الشحنات.

![Chemical Dosing Skid Instrumentation Diagram](/images/courses/tis-201-dosing-skid.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Prominent progressive cavity chemical metering pump skid diagram\`
> * \`Krohne Optiflux magnetic flowmeter pulp stock slurry piping\`
> * \`Chemical injection quill check valve maintenance paper mill\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **مكونات سكيد الحقن الميداني:**
  1. *طلمبات الإزاحة الإيجابية (Progressive Cavity / Diaphragm Pumps):* لضخ البوليمرات اللزجة بدقة متناهية.
  2. *مقاييس التدفق المغناطيسية (Magnetic Flowmeters):* لقياس التدفق اللحظي وإرسال الإشارة للـ DCS.
  3. *أسطوانة المعايرة الزجاجية (Calibration Cylinder):* أنبوبة مدرجة لاختبار معدل سحب الطلمبة يدوياً في 60 ثانية.
  4. *فونية الحقن (Injection Quill):* أنبوبة من الستانلس ستيل تخترق خط العجينة ومزودة ببلف عدم رجوع (Check Valve).
* **إجراءات الأمان:** ارتداء نظارات حماية العين، مريلة كيميائية، وقفازات النتريل السميكة عند التعامل مع خطوط الكيماويات.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب معدل الضخ الكتلي للكيماويات ($dot{m}_{chem}$):**
  $$dot{m}_{chem} = rac{Q_{stock} cdot C_{stock} cdot ho_{stock} cdot D_{target}}{C_{active} cdot ho_{chem}} 	imes 10^{-3} quad [	ext{L/min}]$$
  حيث $Q_{stock}$ تدفق العجينة ($	ext{m}^3/	ext{min}$)، $C_{stock}$ تركيز الألياف، $D_{target}$ الجرعة المستهدفة بالـ $	ext{kg/ton}$، و $C_{active}$ نسبة المادة الفعالة للبوليمر.
* **هيدروديناميكا فونية الحقن (Quill Penetration Depth):**
  يجب أن تمتد الفونية إلى عمق ثلث قطر الماسورة الداخلي ($D/3$) مع سرعة خروج للمحلول $v_{inj} ge 1.5 cdot v_{stock}$ لمنع ترسب البوليمر على جدار الماسورة وتكون كتل صمغية.

---

### خطوات التشغيل المعيارية (SOP-CHEM-01):
1. ارتدِ واقي الوجه والقفازات المقاومة للكيماويات قبل فحص السكيد.
2. حول محبس السحب من "التشغيل المستمر" إلى "أسطوانة المعايرة".
3. شغل ساعة الإيقاف الرقمية لمدة 60 ثانية بالضبط؛ سجل الحجم المسحوب بالمليلتر.
4. احسب التدفق الفعلي: $Q_{act} = (V_0 - V_1) 	imes 0.06 [	ext{L/h}]$.
5. قارن التدفق بقراءة مقياس التدفق بالـ DCS؛ إذا تجاوز الانحراف $pm 3%$، أجرِ معايرة للصفر ونظف أقطاب الحساس.
6. تأكد من أن ضغط خط الحقن أعلى بمقدار $1.5	ext{ bar}$ من ضغط خط العجينة لمنع ارتداد الألياف داخل الفونية.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| طلمبة الحقن تعمل وقراءة التدفق بالـ DCS صفر | انسداد بلف عدم الرجوع بالفونية بسبب تجمد وتكتل البوليمر. | عزل السكيد وغسيل خط الحقن بماء دافئ وتسليك الفونية. |
| اهتزاز وخبط عنيف في خطوط سكيد الحقن | ظاهرة التكهف Cavitation نتيجة لزوجة البوليمر العالية أو تشغيل جاف. | فحص منسوب خزان الكيماويات وتهوية رأس الطلمبة وتخفيف اللزوجة. |
| تآكل سريع في قميص طلمبة الكيماويات Stator | تشغيل الطلمبة بدون سائل (Dry Run) مما حرق بطانة المطاط. | تغيير الـ Stator وتفعيل حساس الحماية من الجفاف Interlock. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-202-1",
    module_id: "mod-tis-202-1",
    title: "القاعدة الذهبية: تكرير الألياف الطويلة فقط وتجنب تكرير اليوكاليبتوس",
    title_en: "The Golden Rule of Tissue Refining: Long Fiber Only vs Eucalyptus",
    type: 'lesson',
    content: `### فلسفة التكرير منخفض التركيز لورق التيشيو (LCR Refining Philosophy):

يعد التكرير منخفض التركيز (Low-Consistency Refining - LCR) من أخطر العمليات في مصنع التيشيو. في صناعة الكرتون، يتم تكرير كافة الألياف لزيادة المتانة، أما في ورق التيشيو الفاخر، فإن التكرير الخاطئ يقضي فوراً على النعومة والامتلاء (Bulk).

![LCR Refiner Fiber Development vs Cutting](/images/courses/tis-202-refining-philosophy.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Low consistency refining LCR of tissue softwood vs hardwood TAPPI\`
> * \`Fibrillation vs fiber cutting in double disc refiners\`
> * \`Eucalyptus fiber zero refining policy tissue manufacturing\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **القاعدة الذهبية الصارمة في التيشيو:**
  > **"نكرر ألياف اللب الطويل (Softwood) فقط، ويُحظر تكرير ألياف اللب القصير (Eucalyptus) نهائياً!"**
* **لماذا لا نكرر ألياف اليوكاليبتوس؟**
  - ألياف اليوكاليبتوس قصيرة بطبيعتها ($0.8 - 1.0	ext{ مم}$) ورقيقة الجدار. إذا مرت داخل المكرر، ستتعرض للتقطيع الميكانيكي وتتحول إلى شظايا ناعمة (Fines).
  - هذه الشظايا تسد مسام لبادات العصر، وتبطئ نزح المياه على السلك، وتجعل المناديل خشنة وقاسية جداً.
* **الهدف من تكرير اللب الطويل (NBSK):**
  - فرك وتفكيك الجدار الخارجي للألياف الطويلة وتوليد شعيرات مجهرية (Fibrillation) تزيد الترابط الهيدروجيني لتعزيز متانة الشيت دون تقطيع طول الليفة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **التطور المورفولوجي لليفة أثناء التكرير:**
  1. *الرجفان الداخلي (Internal Fibrillation):* كسر الروابط داخل جدار الليفة فتصبح مرنة وقابلة للتسطح.
  2. *الرجفان الخارجي (External Fibrillation):* تقشير خيوط السليلوز الدقيقة على السطح لزيادة مساحة التلامس الرابطة (Target).
  3. *التقطيع الميكانيكي (Fiber Shortening):* تكسير الألياف بالعرض، وهو العيب القاتل الذي يجب تجنبه في التيشيو.
* **مؤشر الحفاظ على طول الألياف (Fiber Length Retention):**
  $$\\text{Length Retention (\\%)} = \\frac{L_{w,out}}{L_{w,in}} \\times 100 \\ge 92 - 95\\%$$
  إذا انخفض طول الألياف بعد المكرر بأكثر من $5\\%$، فهذا دليل على أن شدة التكرير مرتفعة جداً وأن سكاكين المكرر تقطع الألياف بدلاً من فركها.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض سرعة نزح المياه وانسداد اللبادات | تكرير غير مقصود لألياف اليوكاليبتوس أو تكسير عنيف للألياف الطويلة. | التأكد من عزل خط اللب القصير عن المكرر، وفتح خلوص الأقراص فوراً. |
| انقطاع متكرر للورق عند سكين الكريب | نقص متانة الشد نتيجة عدم تكرير ألياف اللب الطويل بالدرجة الكافية. | رفع الحمل النوعي للمكرر تدريجياً للوصول إلى المستهدف (°SR). |
| تدهور نعومة مناديل الوجه بشكل ملحوظ | زيادة درجة الشوبر ريجلر للألياف الطويلة عن $32^circ\\text{SR}$. | تخفيف حمل المكرر وضبط درجة الإنضاج في النطاق المثالي $26-28^circ\\text{SR}$. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-202-2",
    module_id: "mod-tis-202-1",
    title: "فحص درجة الإنضاج شوبر ريجلر (°SR) ومعايرة مكررات الأقراص (SOP-LAB-02)",
    title_en: "Schopper-Riegler Freeness (°SR) Testing & Disc Refiner Gap Calibration",
    type: 'lesson',
    content: `### فحص درجة الإنضاج شوبر ريجلر (°SR) ومكررات الأقراص:

يقيس اختبار شوبر ريجلر (°SR) أو الفريتنس (CSF) درجة سهولة تصريف المياه من معلق الألياف. هو المؤشر اليومي الأكثر حساسية لتوجيه قرارات تشغيل المكررات وضمان ثبات خواص الشيت.

![Schopper-Riegler Tester ISO 5267-1 Diagram](/images/courses/tis-202-sr-tester.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Schopper Riegler freeness tester procedure ISO 5267-1 diagram\`
> * \`Voith TwinFlo double disc refiner mechanical gap sensor calibration\`
> * \`Refiner no-load power vs net power measurement paper mill\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ماذا تعني درجة شوبر ريجلر (°SR)؟**
  - مقياس رقمي من 10 إلى 90 درجة.
  - كلما كانت القيمة منخفضة ($12 - 16^circ\\text{SR}$): كانت الألياف بكر ولم تكرر، والماء ينزح منها بسرعة البرق.
  - كلما ارتفعت القيمة ($28 - 32^circ\\text{SR}$): كانت الألياف مكررة ومفصصة، والماء ينزح منها ببطء.
* **النطاق التشغيلي المعياري لألياف التيشيو:**
  - اللب الطويل الداخل للمكرر: $13 - 15^circ\\text{SR}$.
  - اللب الطويل الخارج بعد التكرير: **$26 - 30^circ\\text{SR}$** (زيادة $\\Delta ^\\circ\\text{SR} = 12 - 15$ درجة).
  - إذا زادت القيمة عن $32^circ\\text{SR}$، تنهار سرعة الماكينة وتتصلب الورقة!

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **القدرة الصافية للتكرير (Net Refining Power - $P_{net}$):**
  $$P_{net} = P_{gross} - P_{no\\_load} \\quad [\\text{kW}]$$
  حيث $P_{no\\_load}$ هي قدرة دوران الأقراص في الماء دون تلامس مع الألياف (تستهلك للتغلب على الاحتكاك الهيدروليكي والميكانيكي). يجب قياس $P_{no\\_load}$ دورياً لضمان دقة حسابات الطاقة.
* **معادلة خلوص الأقراص الميكروني (Plate Gap Distance):**
  تضبط مكررات الأقراص الحديثة الخلوص ميكرونياً ($50 - 150\\ \\mu\\text{m}$) عبر محركات سيرفو خطية دقيقة لمنع حدوث التلامس المعدني الكارثي (Clashing).

---

### خطوات التشغيل المعيارية (SOP-LAB-02):
1. اسحب عينة $5\\text{ لتر}$ من خط خروج المكرر مباشرة.
2. احسب التركيز بدقة بالمعمل؛ وزن بالضبط ما يعادل $2.00\\text{ جم}$ ألياف جافة تماماً وخففها في $1000\\text{ مل}$ ماء مقطر عند $20.0 \\pm 0.5^\\circ\\text{C}$.
3. نظف مخروط الفحص النحاسي لجهاز °SR بفرشاة ناعمة وثبته بإحكام في قاعدته.
4. صب معلق الـ $1000\\text{ مل}$ في حجرة الفحص؛ ارفع صمام الإطلاق الرأسي.
5. اقرأ حجم الماء المنسكب من الفوهة الجانبية عبر المخبار المدرج مباشرة بوحدات $^\\circ\\text{SR}$.
6. إذا كانت القيمة $> 30^circ\\text{SR}$، أرسل أمراً فورياً للـ DCS لفتح خلوص المكرر وتقليل الحمل بمقدار $10\\text{ kW}$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| قفزة مفاجئة في الشوبر ريجلر إلى $38^circ\\text{SR}$ | انغلاق مفرط لخلوص الأقراص أو انخفاض تدفق العجينة فجأة. | فتح خلوص المكرر فورياً بالتحكم اليدوي ومراجعة تدفق الخط. |
| صوت صرير واحتكاك معدني داخل المكرر | تلامس سكاكين الأقراص Plate Clashing نتيجة نقص التركيز عن $2.5\\%$. | الضغط على زر التراجع الطارئ Emergency Back-off فوراً! |
| عدم تغير قيمة الـ °SR رغم زيادة الحمل | تآكل شديد في حواف وسكاكين الأقراص وفقدانها لارتفاع البار. | جدولة تغيير حشوات الأقراص وفحص ساعات تشغيل الحشوة الحالية. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-202-3",
    module_id: "mod-tis-202-2",
    title: "مصافي الضغط (Pressure Screens) وسلال السلك المخروطي ونسبة الرفض",
    title_en: "Pressure Screen Hydrodynamics, Wedgewire Baskets & Reject Ratio Control",
    type: 'lesson',
    content: `### مصافي الضغط وسلال السلك المشقوق (Pressure Screening):

تمثل مصافي الضغط (Pressure Screens) خط الدفاع الأخير لحماية ماكينة التيشيو. مهمتها استبعاد الشوائب، الكتل غير المكررة (Shives)، والملوثات اللزجة (Stickies) قبل وصول العجينة إلى صندوق التدفق الحساس.

![Pressure Screen Rotor and Wedgewire Basket](/images/courses/tis-202-pressure-screen.svg)

> **مراجع ومصطلحات Keyword البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Voith BlueLine pressure screen multi-foil rotor dynamics diagram\`
> * \`Wedgewire slotted screen basket slot width 0.15mm tissue paper\`
> * \`Pressure screen reject rate mass balance and thickening factor TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف تعمل مصفاة الضغط؟**
  - تدخل العجينة تحت ضغط ($2.5 - 3.5\\text{ bar}$) وتمر عبر سلة أسطوانية مصنوعة من أسلاك دقيقة جداً تفصل بينها شقوق ميكرونية ($0.15 - 0.25\\text{ مم}$).
  - تدور ريش هيدروديناميكية (Foils) بسرعة فائقة داخل السلة لتوليد نبضات ضغط وخلخلة تنظف شقوق السلة باستمرار وتمنع انسدادها.
* **مجرى المقبولات مقابل المرفوضات (Accepts vs Rejects):**
  - *المقبولات (Accepts):* الألياف الفردية النظيفة التي تعبر الشقوق وتتجه لصندوق التدفق.
  - *المرفوضات (Rejects):* الشوائب والكتل التي تعجز عن العبور وتخرج من أسفل المصفاة لتمر بمصفاة ثانوية.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **سرعة عبور الشقوق (Slot Passage Velocity - $v_{slot}$):**
  $$v_{slot} = \\frac{Q_{accept}}{A_{open}} = \\frac{Q_{accept}}{\\pi \\cdot D_{basket} \\cdot H_{basket} \\cdot \\epsilon_{open}} \\quad [\\text{m/s}]$$
  يجب الحفاظ على $v_{slot}$ في نطاق **$1.5 - 2.2\\text{ m/s}$**؛ السرعة الأقل تسبب انسداد الشقوق بالألياف (Fiber Stapling)، والسرعة الأعلى تجبر الشوائب اللزجة المرنة على العبور بالقوة نحو الماكينة.
* **نسبة الرفض الكتلي (Mass Reject Rate - $R_m$):**
  $$R_m = \\frac{Q_{rej} \\cdot C_{rej}}{Q_{in} \\cdot C_{in}} \\times 100 \\quad [\\%] \\quad (\\text{المستهدف: } 10 - 15\\%)$$

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| ارتفاع فرق الضغط $\\Delta P$ عبر المصفاة عن $0.8\\text{ bar}$ | انسداد شقوق السلة بالشوائب أو انخفاض سرعة دوران الروتور. | تفعيل دورة الغسيل العكسي الآلي Backwash وفحص سير المحرك. |
| ثقوب وشوائب تظهر في شيت التيشيو | تآكل أو كسر موضعي في أسلاك سلة المصفاة. | عزل المصفاة، تشغيل المصفاة الاحتياطية، وفحص السلة داخلياً. |
| انسداد كامل في خط المرفوضات Rejects | انغلاق صمام التحكم في الرفض أو تراكم كتل ألياف صلبة. | فتح صمام تصريف الرفض يدوياً بنسبة $100\\%$ لتطهير الخط. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-203-1",
    module_id: "mod-tis-203-1",
    title: "الحسابات الهندسية للحمل الحافي الخاص (SEL) واستهلاك الطاقة النوعية (kWh/ton)",
    title_en: "Specific Edge Load (SEL), Specific Surface Load (SSL) & Energy Modeling",
    type: 'lesson',
    content: `### الحسابات الهندسية المتقدمة للتكرير (Refining Engineering Modeling):

لإدارة عملية التكرير باحترافية، لا يمكن الاعتماد على مجرد قراءة أمبير المحرك. تحكم نظرية الحمل الحافي الخاص (Specific Edge Load - SEL) ونظرية حمل السطح النوعي (SSL) شدة كل صدمة ميكانيكية تتعرض لها ألياف الخشب داخل المكرر.

![Specific Edge Load Bar Geometry Model](/images/courses/tis-203-sel-model.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Specific Edge Load SEL calculation formula double disc refiner TAPPI\`
> * \`Cutting edge length CEL calculation refiner bar pattern diagram\`
> * \`Specific surface load SSL vs SEL refining intensity comparison\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ما هو الـ SEL؟**
  هو كمية الطاقة التي تفرغها حافة سكين المكرر في كل متر من أطوال الألياف العابرة، ويقاس بـ (جول لكل متر - J/m).
  - *تكرير بشدة عالية ($SEL > 2.0\\text{ J/m}$):* صدمات عنيفة تقطع الألياف كالمقصلة (مرفوض تماماً في التيشيو).
  - *تكرير بشدة منخفضة ($SEL = 0.8 - 1.2\\text{ J/m}$):* صدمات لطيفة ومتكررة تفرك جدار الألياف وتفككه دون تقطيع (المعيار الذهبي للتيشيو الفاخر).
* **القاعدة التشغيلية:** كلما أردنا نعومة أعلى، نختار حشوات بسكاكين أضيق وعديدة لزيادة طول الحواف وخفض الـ SEL.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **طول حواف القطع في الثانية (Cutting Edge Length - CEL):**
  $$CEL = z_r \\cdot z_s \\cdot l \\cdot n \\quad [\\text{km/s}]$$
  حيث $z_r, z_s$ عدد سكاكين الروتور والستاتور، $l$ طول منطقة التلامس الفعالة ($\\text{m}$)، و $n$ سرعة الدوران ($\\text{rev/s}$).
* **معادلة الحمل الحافي الخاص (Specific Edge Load - SEL):**
  $$SEL = \\frac{P_{net}}{CEL} = \\frac{P_{gross} - P_{no\\_load}}{CEL} \\quad [\\text{J/m}]$$
  *النطاق المستهدف للتيشيو:*
  - ألياف الخشب اللين الشمالي ($NBSK$): $SEL = 0.8 - 1.2\\text{ J/m}$.
  - ألياف الخشب اللين الجنوبي ($SBSK$): $SEL = 1.2 - 1.5\\text{ J/m}$.
* **حمل السطح النوعي (Specific Surface Load - SSL):**
  $$SSL = \\frac{SEL}{w_b + w_g} \\quad [\\text{J/m}^2]$$
  حيث $w_b$ عرض السكينة و $w_g$ عرض المجرى؛ يعطي مؤشراً أدق لتوزيع الإجهاد على الألياف في المكررات فائقة الكثافة.
* **استهلاك الطاقة الصافي للطن ($NSE$):**
  $$NSE = \\frac{P_{net}}{\\dot{m}_{dry\\_fiber}} \\quad [\\text{kWh/ton}] \\quad (\\text{المستهدف: } 45 - 65\\text{ kWh/t})$$

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تقطع ألياف اللب الطويل وانخفاض شد الشيت | ارتفاع الـ SEL عن $1.8\\text{ J/m}$ نتيجة انخفاض سرعة الدوران أو سكاكين عريضة. | تقليل القدرة الصافية، أو استبدال حشوة الأقراص بحشوة ذات سكاكين أدق. |
| استهلاك طاقة مفرط دون تطور في الشد | تآكل حواف السكاكين وتحولها لحواف دائرية ملساء (Rounded Bars). | تغيير حشوة الأقراص بقطع غيار أصلية ذات زوايا حادة. |
| تذبذب قراءة القدرة الصافية للمكرر | تذبذب تركيز العجينة الداخلة للمكرر مما يغير الحمل الهيدروليكي. | ضبط حلقة التخفيف قبل المكرر وتثبيت التركيز عند $3.2 \\pm 0.05\\%$. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-203-2",
    module_id: "mod-tis-203-1",
    title: "كيمياء روابط PAE التساهمية وتنشيطها الحراري ومعدل الشد الرطب/الجاف",
    title_en: "Covalent PAE Cross-linking Chemistry & Yankee Thermal Curing Kinetics",
    type: 'lesson',
    content: `### كيمياء راتنجات PAE والتنشيط الحراري على اليانكي:

تمثل راتنجات البولي أميد-إيبيكلوروهيدرين (PAE) العمود الفقري لإنتاج ورق التيشيو المقاوم للماء (كمناديل المطبخ ومسحات الورش). لا تعتمد كفاءة الراتنج على مجرد إضافته في الخزان، بل على اكتمال تفاعلات التشابك التساهمي المعقدة تحت التأثير الحراري لأسطوانة اليانكي.

![PAE Azetidinium Cross-linking Mechanism](/images/courses/tis-203-pae-chemistry.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`PAE resin azetidinium group crosslinking reaction mechanism cellulose TAPPI\`
> * \`Wet to dry tensile ratio optimization kitchen towel ISO 12625-5\`
> * \`Yankee cylinder thermal curing kinetics of wet strength resins\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف يعمل الـ PAE؟**
  - يحتوي البوليمر على حلقات كيميائية نشطة (Azetidinium Rings) تحمل شحنة موجبة قوية تلتصق فوراً بألياف الخشب السالبة.
  - عند مرور الورقة فوق أسطوانة اليانكي الساخنة ($> 100^\\circ\\text{C}$)، تفتح هذه الحلقات وتكون "جسوراً تساهمية صلبة" غير قابلة للذوبان بالماء تربط الألياف ببعضها البعض كاللحام الدائم.
* **النضج الحراري اللاحق (Natural Aging / Curing):**
  - لا يكتمل تفاعل الـ PAE بنسبة $100\\%$ لحظة خروج الورقة من الماكينة؛ حيث تخرج بنسبة نضج حراري $70 - 80\\%$، وتكتمل القوة الرطبة النهائية داخل الرول الجامبو خلال **$24 - 48\\text{ ساعة}$** من التخزين في المستودع بفعل الحرارة الكامنة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **الميكانيزم الكيميائي لتكوين الروابط التساهمية:**
  $$\\text{Cell-COOH} + \\text{Azetidinium-PAE} \\xrightarrow{\\Delta H > 100^\\circ\\text{C}} \\text{Cell-COO-CH}_2\\text{-CH(OH)-CH}_2\\text{-NH-PAE}$$
  تتكون روابط إسترية وكارباميتية تساهمية تحمي الروابط الهيدروجينية الطبيعية من التحلل المائي عند غمر الورقة في السوائل.
* **حساب النسبة المعيارية للمتانة الرطبة/الجافة ($R_{W/D}$):**
  $$R_{W/D} = \\frac{\\text{Wet Tensile (CD)}}{\\text{Dry Tensile (CD)}} \\times 100 \\quad [\\%]$$
  - مناديل المطبخ القياسية: $R_{W/D} = 25 - 28\\%$.
  - مناديل المطبخ الفاخرة ومسحات الورش: $R_{W/D} \\ge 30 - 34\\%$.
* **معادلة استهلاك الراتنج المحددة (Dosage Efficiency):**
  تصل كفاءة الامتزاز السطحي للـ PAE إلى أقصى حد لها عند جرعات تتراوح بين **$8 - 15\\text{ kg/ton}$**؛ أي زيادة بعد ذلك تسبب تشبع مساحة السطح وضياع الراتنج في الصرف.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض الشد الرطب فوراً على البوبينة | انخفاض حرارة سطح أسطوانة اليانكي ($< 95^circ\\text{C}$) فلم ينضج الراتنج حرارياً. | رفع ضغط بخار اليانكي وحرارة الهود لضمان طهي وتنشيط بوليمر PAE. |
| استهلاك مفرط للراتنج دون زيادة بالشد | وجود شوائب أنيونية (Anionic Trash) تعادل الشحنة الموجبة للـ PAE. | إضافة مثبت شحنة كاتيوني Fixative في الدائرة البيضاء قبل حقن PAE. |
| انبعاث رائحة خانقة وتطاير كيماويات | زيادة تركيز الفورمالدهيد أو منتجات التحلل نتيجة فرط الحرارة. | ضبط توازن الهواء العادم في الهود ومراجعة مواصفة الراتنج المورد. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-203-3",
    module_id: "mod-tis-203-2",
    title: "إدارة الشحنة الكهروستاتيكية (Zeta Potential) ومعايرة جهاز Mütek PCD (SOP-CHEM-03)",
    title_en: "Zeta Potential Management & Mütek PCD Colloidal Titration Protocols",
    type: 'lesson',
    content: `### كيمياء الشحنات الغروية والجهد الزيتي (Zeta Potential Management):

الطرف الرطب لماكينة التيشيو هو نظام كوليدالي (غروي) معقد تتحكم فيه قوى التجاذب والتنافر الكهروستاتيكي. تمثل إدارة الجهد الزيتي (Zeta Potential) والطلب على الشحنة المفتاح الذهبي لتقليل استهلاك الكيماويات وضمان أعلى احتفاظ للألياف ومقاومة الرغوة.

![Zeta Potential and Colloidal Charge Window](/images/courses/tis-203-zeta-potential.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Mütek PCD 05 particle charge detector titration curve wet end\`
> * \`Zeta potential optimization window tissue paper white water TAPPI\`
> * \`Cationic demand measurement with Poly-DADMAC titration procedure\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ما هي الشحنة الكهروستاتيكية في التيشيو؟**
  - ألياف السليلوز وشظايا الخشب بطبيعتها تحمل شحنة سالبة (Anionic).
  - الكيماويات المضافة (PAE، مثبتات الشحنة، النشا) تحمل شحنة موجبة (Cationic).
  - الشحنات المختلفة تتجاذب كالمغناطيس؛ فتلتصق الكيماويات بسطح الليفة.
* **خطر "القمامة الأنيونية" (Anionic Trash):**
  إذا احتوت المياه البيضاء على ملوثات سالبة ذائبة، فإنها "تلتهم" الكيماويات الموجبة باهظة الثمن قبل أن تصل إلى الألياف، فتفقد الكيماويات فاعليتها وتفيض الرغوة في الخزانات.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **النافذة التشغيلية المثلى للجهد الزيتي (Zeta Potential Window):**
  يقاس الجهد الزيتي ($\\zeta$) بوحدات الميلي فولت ($\\text{mV}$):
  $$\\text{النافذة المثلى لورق التيشيو: } -5.0\\text{ mV} \\le \\zeta \\le -0.5\\text{ mV}$$
  - إذا كان الجهد شديد السلبية ($< -15\\text{ mV}$): يحدث تنافر كهروستاتيكي وتفقد الورقة المواد الرابطة وتتلوث المياه البيضاء.
  - إذا انقلب الجهد إلى موجب ($> +2.0\\text{ mV}$): يحدث تكتل مفرط وتخثر للألياف (Flocculation) مما يدمر استواء التشكيل (Formation) ويولد غيوماً وزنية.
* **حساب الطلب على الشحنة النوعية (Specific Cationic Demand - $q_d$):**
  عبر المعايرة البوليمرية بمحلول $0.001\\text{ N}$ Poly-DADMAC بجهاز Mütek PCD:
  $$q_d = \\frac{V_{titrant} \\cdot N}{V_{sample}} \\times 1000 \\quad [\\mu\\text{eq/L}]$$
  الهدف التشغيلي: الحفاظ على $q_d$ في نطاق **$-20\\text{ إلى } -50\\ \\mu\\text{eq/L}$**.

---

### خطوات التشغيل المعيارية (SOP-CHEM-03):
1. اسحب عينة $1000\\text{ مل}$ من مياه صندوق التدفق البيضاء.
2. رشح العينة بورق ترشيح Whatman 541 لعزل الألياف الدقيقة وأخذ الرشيح الغروي الرائق.
3. ضع بالضبط $10.0\\text{ مل}$ من الرشيح داخل خلية قياس جهاز Mütek PCD.
4. شغل المكبس الترددي؛ سجل قراءة الجهد الأولي بالمللي فولت ($U_0\\text{ mV}$).
5. عاير أوتوماتيكياً بمحلول $0.001\\text{ N}$ Poly-DADMAC حتى الوصول لنقطة التعادل ($0\\text{ mV}$).
6. إذا تجاوز الطلب الأنيوني $-120\\ \\mu\\text{eq/L}$، ارفع جرعة البوليمر المثبت (Coagulant/Fixative) بـ $+0.4\\text{ kg/t}$ فوراً قبل زيادة راتنج PAE.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تراجع فاعلية البوليمرات وارتفاع عكارة الصرف | تراكم الشوائب الأنيونية وانخفاض الشحنة عن $-15\\text{ mV}$. | زيادة مثبت الشحنة الكاتيوني وتصريف جزء من المياه البيضاء بالـ Purge. |
| تشكيل غائم وبقع ألياف متكتلة بالورق | فرط الشحنة الموجبة ($> +3\\text{ mV}$) أدى لتخثر الألياف قبل السلك. | خفض جرعة الكيماويات الموجبة فوراً والعودة للمنطقة السالبة الخفيفة. |
| رغوة كثيفة مستمرة في حوض طلمبة الخلط | انهيار التوازن الكهروستاتيكي وتراكم مواد خافضة للتوتر السطحي. | معادلة الشحنة وحقن مانع رغوة مائي خالي من السيليكون. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-301-1",
    module_id: "mod-tis-301-1",
    title: "تشريح قسم التشكيل ومسار سلك التشكيل ولباد العصر",
    title_en: "Forming Section Anatomy, Wire & Felt Routing and Dynamic Wrap",
    type: 'lesson',
    content: `### تشريح قسم التشكيل ومسارات الأقمشة (Forming Section Anatomy):

قسم التشكيل هو المنطقة التي تتحول فيها العجينة السائلة ($99.8\\%$ مياه و $0.2\\%$ ألياف) إلى فرشة ورقية متماسكة القوام في زمن مذهل لا يتجاوز **$0.02$ ثانية** على سرعات تفوق $2000\\text{ م/د}$.

![Forming Section Roll Layout and Fabric Run](/images/courses/tis-301-forming-layout.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Valmet Crescent Former OptiFormer tissue machine layout diagram\`
> * \`Andritz PrimeForm crescent former wire and felt paths drawing\`
> * \`Forming fabric weave structure single layer vs double layer TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **سلك التشكيل (Forming Fabric / Wire):**
  - شبكة بوليمرية دقيقة المسام مصنوعة من خيوط البوليستر؛ تحتجز ألياف الخشب على سطحها وتسمح للمياه بالعبور الحر من خلالها.
* **لباد العصر (Press Felt):**
  - نسيج صوفي/بوليمري كثيف ومرن، يعمل كبساط ناقل للورقة الرطبة، ويمتص المياه المعصورة عند درفيل العصر، ويوفر الحماية للشيت الضعيف أثناء النقل.
* **مسار الالتفاف المشترك (The Converging Wedge):**
  - تلتقي ألياف السائل بين السلك الخارجي واللباد الداخلي أثناء التفافهما معاً حول درفيل التشكيل العملاق، حيث تُقذف المياه للخارج بفعل قوة الطرد المركزي الهائلة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **ديناميكا شد الأسلاك واللبادات (Fabric Tension Dynamics):**
  يحافظ نظام الشد الهوائي/الهيدروليكي الآلي على شد السلك واللباد في نطاقات هندسية صارمة:
  - شد سلك التشكيل: $T_{wire} = 7.0 - 9.0\\text{ kN/m}$.
  - شد لباد العصر: $T_{felt} = 6.0 - 8.0\\text{ kN/m}$.
  انخفاض الشد عن هذه الحدود يؤدي إلى تجعد السلك وتذبذب النزح، بينما زيادته تسبب تمدد الخيوط وتآكل كراسي تحميل الدرافيل (Bearings).
* **معادلة إجهاد الطرد المركزي على قشرة درفيل التشكيل:**
  $$\\sigma_c = \\rho_{shell} \\cdot v_{machine}^2$$
  عند سرعة $2200\\text{ م/د}$ ($v = 36.67\\text{ م/ث}$)، تخضع درافيل التشكيل لموازنة ديناميكية بمعيار ISO 1940 Grade G1.0 لمنع الاهتزازات الميكانيكية المدمرة.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| اهتزاز عنيف في ذراع شداد السلك | عطل في بلف التناسب الهوائي أو تسرب هواء في سلندر الشد. | فحص ضغط هواء الشداد بالمانومتر وإصلاح التسريب. |
| تآكل غير متجانس في حواف السلك | عدم استقامة توازي درافيل التشكيل (Misalignment). | قياس التوازي بالليزر وضبط محاذاة كراسي التحميل. |
| علامات نسيج السلك ظاهرة بوضوح بالورق | تلف طبقة الألياف الدقيقة بالسلك أو اختيار نسيج سلك خشن. | استبدال السلك بنسيج ثلاثي الطبقات ذو دعامة دقيقة. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-301-2",
    module_id: "mod-tis-301-1",
    title: "درافيل التشكيل وأحواض تصريف مياه الطرد المركزي (Savealls)",
    title_en: "Forming Rolls, Hydrodynamic Deflectors & Saveall Drainage Chutes",
    type: 'lesson',
    content: `### درافيل التشكيل وأحواض تصريف مياه الطرد المركزي (Savealls):

على سرعات ماكينات التيشيو الفائقة، تتحول مياه العجينة المطرودة إلى نفاثات مائية مقذوفة بقوى طرد مركزي تفوق $150\\text{ g}$. تلعب درافيل التشكيل وأحواض تجميع المياه (Saveall Pans) دوراً حاسماً في احتواء المياه ومنع ارتدادها لتخريب الشيت.

![Saveall Drainage and Centrifugal Deflector Geometry](/images/courses/tis-301-saveall.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Tissue machine saveall tray design centrifugal water mist collection\`
> * \`Forming roll deflector blade gap tolerance high speed crescent former\`
> * \`White water mist extraction fan and droplet separator hood\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **درافيل التشكيل (Forming Rolls):**
  - درفيل ضخم مصمت أو مفرغ مصنوع من الصلب غير القابل للصدأ؛ يلتف حوله السلك واللباد ليشكلا نقطة الالتقاء الأولى لتيار العجينة.
* **أحواض الطرد المركزي ومسارات الصرف (Savealls):**
  - حواضن معدنية منحنية تحيط بدرفيل التشكيل لاقتناص رذاذ ومياه النزح العنيفة وتوجيهها بسلاسة نحو قنوات الصرف السفلية دون تكوين رغوة أو اضطراب.
* **شفرات الكشط والتوجيه (Deflector Blades):**
  - شفرات مثبتة بدقة مليمترية تكشط طبقة المياه الملتصقة بظهر السلك وتمنع عودتها لتلويث الورقة المشكلة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب مسار وزاوية قذف مياه الطرد المركزي (Trajectory Angle):**
  تتحرر قطرات المياه من السلك عند النقطة التي تتغلب فيها قوى الطرد المركزي على قوى الشد السطحي للماء:
  $$F_c = m \\cdot \\frac{v^2}{R} > F_{\\sigma}$$
  يجب تصميم انحناء حوض الـ Saveall بحيث تلامس القطرات الجدار المعدني بمماسات ملساء ($Tangential\\ Entry$) بزاوية $< 15^\\circ$ لمنع الارتداد الرذاذي (Water Splash Back).
* **سعة تصريف أحواض المياه البيضاء:**
  يجب أن تستوعب مجاري الصرف ما بين $40 - 70\\text{ m}^3/\\text{min}$ من المياه البيضاء دون حدوث فيضان أو سدد مائي.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| ثقوب مائية وقطرات تتساقط فوق السلك | تراكم كتل ألياف على شفة حوض الـ Saveall تسقط قطرات ماء متكثفة. | تنظيف شفة الحوض وضبط زاوية شفرة الكشط Deflector. |
| فيضان المياه البيضاء من جوانب درفيل التشكيل | انسداد مواسير الصرف السفلية لحوض الـ Saveall بالرغوة أو الألياف. | فتح بلوف التصريف السريع وتسليك مواسير النزح فورياً. |
| ضباب مائي كثيف في صالة الماكينة | انخفاض سرعة مروحة شفط الضباب الرطب Mist Extraction Fan. | تنظيف فلاتر مروحة الشفط وزيادة سرعة محرك سحب الضباب. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-301-3",
    module_id: "mod-tis-301-2",
    title: "بروتوكول التفتيش الميداني قبل التشغيل واحتياطات الدوران (SOP-FORM-01)",
    title_en: "Forming Section Pre-Start Visual Inspection & Rotating Safety Protocols",
    type: 'lesson',
    content: `### بروتوكول التفتيش الميداني لمنطقة التشكيل (SOP-FORM-01):

تشكل منطقة التشكيل بيئة عمل عالية المخاطر نظراً لاحتوائها على درافيل عملاقة تدور بسرعات تتجاوز $2000\\text{ م/د}$، وأسلاك مشدودة تحت أطنان من القوى، وتيارات مياه عالية الضغط. التفتيش الدقيق قبل الإقلاع هو صمام الأمان لمنع الكوارث الميكانيكية والإصابات البشرية.

![Forming Section Walk-Down Inspection Points](/images/courses/tis-301-walkdown.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Tissue machine pre-start safety checklist forming section walk down\`
> * \`Inrunning nip hazard machine guarding standard OSHA paper mill\`
> * \`Lubrication sight glass oil flow verification paper machine bearings\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **فلسفة التفتيش البصري الشامل (Walk-Down):**
  قبل إعطاء أمر إدارة الماكينة، يمر المشغل بمسار محدد حول قسم التشكيل بالكامل ليتأكد من:
  1. خلو مسار الأسلاك واللبادات من أي أدوات منسية (مفاتيح، مسامير، وصلات خراطيم).
  2. نظافة حواف الأسلاك وعدم وجود خيوط منسلخة قد تلتف حول ركائز الدرافيل.
  3. عمل رشاشات التزييت والتأكد من سريان الزيت داخل زجاجات الرؤية (Sight Glasses).
* **إشارات التحذير:** إطلاق سارينة التحذير الصوتية والضوئية لمدة 30 ثانية قبل الدوران بسرعة الزحف (Crawl Speed).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معايير فحص كراسي التحميل والمحاذاة:**
  - التحقق من تزييت كراسي تحميل درافيل التشكيل (Spherical Roller Bearings):
  - تدفق الزيت المستهدف: $1.5 - 3.0\\text{ L/min}$ لكل كرسي تحميل عند لزوجة ISO VG 220 وحرارة تشغيل لا تتجاوز **$65^\\circ\\text{C}$**.
  - فحص استقامة محاذاة الدرافيل بالليزر: يجب ألا يتجاوز انحراف التوازي عبر عرض الماكينة **$\\pm 0.1\\text{ mm/m}$**.

---

### خطوات التشغيل المعيارية (SOP-FORM-01):
1. اعزل الماكينة وعلق لافتات الأمان (LOTO) قبل الدخول الفعلي لمنطقة التشكيل.
2. تفقد مسار سلك التشكيل كاملاً؛ تأكد من عدم وجود خدوش أو ثقوب أو انحراف بالحواف.
3. تفقد مسار اللباد؛ تأكد من استقراره في منتصف درافيل التوجيه ومحاذاة رشاشات الغسيل.
4. افحص شفرات كشط الدرافيل (Doctor Blades)؛ تأكد من ملاصقتها التامة لسطح الدرافيل بضغط هواء $1.2\\text{ bar}$.
5. تأكد من خلو أحواض تصريف الـ Savealls من أي كتل ألياف متحجرة.
6. اخرج من نطاق السياج الأمني، أغلق الأبواب المتداخلة (Interlocks)، واطلق سارينة التحذير قبل بدء سرعة الزحف.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انقطاع مفاجئ لسلك التشكيل عند الإقلاع | نسيان أداة معدنية فوق هيكل الماكينة سقطت داخل نيب الدرفيل. | إيقاف الماكينة فوراً، إزالة الأداة، وتغيير السلك مع فتح تحقيق سلامة. |
| جهاز التوجيه الآلي يصدر إنذار انحراف | انسداد حساس الحافة الهوائي أو تراكم رغوة على ذراع التحسس. | تنظيف حساس الحافة بخرطوم مياه وضبط وضع السنترة اليدوي. |
| ارتفاع حرارة كرسي تحميل درفيل التشكيل عن $75^circ\\text{C}$ | انقطاع سريان زيت التزييت أو تلف ميكانيكي داخلي بالرولمان بلي. | فحص خط الزيت فوراً وتغيير الفلتر وإجراء فحص اهتزازات Vib-Check. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-302-1",
    module_id: "mod-tis-302-1",
    title: "ماكينة التشكيل الهلالي (Crescent Former) مقابل التوين واير C-Former و S-Wrap",
    title_en: "Crescent Former vs Twin-Wire Gap Formers: C-Former & S-Wrap Architectures",
    type: 'lesson',
    content: `### تطور ماكينات التشكيل: Crescent Former والتوين واير:

شهدت تكنولوجيا تشكيل ورق التيشيو ثورة هندسية انتقلت بها من ماكينات فودرينير (Fourdrinier) البطيئة وماكينات الصندوق الشفاط (Suction Breast Roll) إلى ماكينات التشكيل الهلالي الحديثة (Crescent Former) وماكينات الفجوة المزدوجة (Twin-Wire C-Former و S-Wrap).

![Crescent Former vs C-Former Geometry](/images/courses/tis-302-former-types.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Crescent Former vs C-Former tissue machine dewatering comparison\`
> * \`Twin wire gap former S-wrap fabric tension drainage physics\`
> * \`Toscotec TT Crescent Former high speed performance curves\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ماكينة التشكيل الهلالي (Crescent Former):**
  - التصميم المهيمن عالمياً في مصانع التيشيو الحديثة ($> 85\\%$ من الماكينات).
  - الميكانيزم: تلتقي العجينة مباشرة في الفجوة المنحنية المتكونة بين سلك خارجي ولباد كبس داخلي يلتفان معاً فوق درفيل تشكيل صلب واحد.
  - الميزة: استقرار هيدروديناميكي استثنائي على سرعات تفوق $2200\\text{ م/د}$، سهولة التشغيل، واستهلاك منخفض للطاقة.
* **ماكينات الفجوة المزدوجة التوين واير (Twin-Wire C-Former و S-Wrap):**
  - تستخدم سلكين معدنيين/بوليمريين بدون لباد في مرحلة النزح الأولى؛ حيث يتم نزح المياه من الوجهين معاً.
  - الميزة: مناسبة للأصناف الثقيلة والورق المنتج من ألياف التدوير المعاد تصنيعها (DIP).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **المقارنة الهيدروديناميكية بين أنظمة التشكيل:**

| المعيار الهندسي | Crescent Former | Twin-Wire C-Former | Suction Breast Roll (SBR) |
| :--- | :--- | :--- | :--- |
| **أقصى سرعة تشغيلية** | $2200 - 2400\\text{ م/د}$ | $1800 - 2000\\text{ م/د}$ | $1100 - 1300\\text{ م/د}$ |
| **استهلاك طاقة الفاكيوم** | منخفض (بدون شفط بالدرفيل) | متوسط | فائق الارتفاع (شفط هائل) |
| **استواء التشكيل (Formation)** | ممتاز ومتجانس جداً | جيد جداً | متوسط |
| **توزيع الألياف بالاتجاهين** | تحكم دقيق بـ MD/CD | تحكم متوسط | انحياز شديد للـ MD |

* **معادلة نزح المياه الهيدروديناميكي في فجوة الـ Crescent Former:**
  $$P_{drain} = \\frac{T_{wire}}{R_{roll}} + \\frac{\\rho \\cdot v^2 \\cdot h_{slurry}}{R_{roll}}$$
  حيث يتكامل ضغط شد السلك مع ضغط القصور الذاتي لتيار العجينة لتفريغ $95\\%$ من المياه قبل مغادرة درفيل التشكيل.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| ارتداد مائي عنيف عند مدخل فجوة التشكيل | عدم توافق زاوية قذف تيار العجينة مع نقطة التقاء السلك واللباد. | تعديل زاوية صندوق التدفق لضبط الـ Impingement Point. |
| بقع بيضاء وسوء تشكيل Formation بوسط الشيت | انخفاض شد السلك المركزي نتيجة تمدد غير متساوٍ في منتصف السلك. | زيادة شد السلك العام بمقدار $+0.5\\text{ kN/m}$ وفحص استقامة السلك. |
| استهلاك طاقة مرتفع لمحرك درفيل التشكيل | احتكاك زائد لشفرات الكشط Deflectors أو ثقل وزن المياه المتجمعة. | ضبط خلوص الشفرات ومراجعة كفاءة تصريف أحواض Savealls. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-302-2",
    module_id: "mod-tis-302-1",
    title: "ضبط نسبة سرعة التدفق إلى السلك (Jet-to-Wire: Rush vs Drag) وزاوية السقوط (SOP-FORM-02)",
    title_en: "Jet-to-Wire Ratio (Rush vs Drag), Slice Impingement & MD/CD Orientation",
    type: 'lesson',
    content: `### ضبط نسبة سرعة التدفق إلى السلك (Jet-to-Wire Ratio Dynamics):

تعد نسبة سرعة التدفق إلى السلك (J/W Ratio) من أقوى أدوات التحكم المتاحة لمشغل ماكينة التيشيو. من خلال تغيير طفيف في هذه النسبة ($1 - 2\\%$)، يمكن تغيير اتجاه ترسب ألياف الخشب والتحكم الكامل في نسبة متانة الشد الطولي إلى العرضي (MD/CD Ratio).

![Jet to Wire Impingement and MD/CD Orientation](/images/courses/tis-302-jet-to-wire.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Jet to wire ratio tissue machine MD CD tensile ratio orientation curve\`
> * \`Rush vs drag tissue paper formation and fiber orientation TAPPI\`
> * \`Headbox slice lip micro adjustment spindle thermal expansion diagram\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ما هي نسبة Jet-to-Wire؟**
  هي حاصل قسمة سرعة خروج تيار العجينة من صندوق التدفق ($v_{jet}$) على سرعة حركة سلك التشكيل ($v_{wire}$).
* **أوضاع التشغيل الثلاثة:**
  1. *الاندفاع السريع (Rush - J/W > 1.02):* تيار العجينة أسرع من السلك؛ تتدحرج الألياف وتميل للترسب بالاتجاه العرضي (CD).
  2. *السحب والجر (Drag - J/W < 0.98):* السلك أسرع من تيار العجينة؛ "يمشط" السلك الألياف ويرتبها في اتجاه الحركة الموازي للماكينة (MD).
  3. *الورقة المربعة المتوازنة (Square Sheet - J/W $approx$ 1.00):* تتساوى السرعتان، فتترسب الألياف بشكل عشوائي ومتوازن، مما يعطي مناديل تواليت تقطع بتساوٍ في كافة الاتجاهات.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب سرعة تيار العجينة (Torricelli’s Law Formulation):**
  $$v_{jet} = C_d \\cdot \\sqrt{\\frac{2 \\cdot P_{headbox}}{\\rho_{stock}}}$$
  حيث $C_d$ معامل التصريف لفونية صندوق التدفق ($0.96 - 0.98$)، و $P_{headbox}$ الضغط الإجمالي لوسادة الهواء والمضخة.
* **النموذج الرياضي لنسبة متانة الشد ($R_{MD/CD}$):**
  $$R_{MD/CD} = a \\cdot (\\text{J/W} - 1)^2 + b$$
  تصل النسبة إلى أدنى قيمة لها ($b \\approx 1.5 - 1.8$) عند $\\text{J/W} \\approx 1.002$. الانحراف في أي اتجاه (Rush أو Drag) يرفع نسبة $R_{MD/CD}$ إلى $2.5 - 3.5$، مما يرفع متانة الشد الطولي ويخفض استطالة الورقة العرضية (CD Stretch).

---

### خطوات التشغيل المعيارية (SOP-FORM-02):
1. حدد نسبة الشد المطلوبة للصنف بالـ DCS: $R_{MD/CD} = 1.8$ لمناديل الوجه والتواليت؛ $R_{MD/CD} = 2.4$ لمناديل المطبخ.
2. ادخل نسبة الـ J/W المستهدفة في نظام التحكم الآلي: ابدأ عند $1.005$.
3. راقب نقطة سقوط التيار النفاث (Impingement Point) عبر نافذة الفحص باستخدام مصباح الستوروبوسكوب:
   - يجب أن يسقط التيار بالضبط في نيب الالتقاء المتلاقي.
   - إذا سقط التيار مبكراً فوق السلك، حدث انحباس للهواء وتكونت ثقوب.
   - إذا سقط مبكراً فوق اللباد، حدث ارتداد مائي عكسي.
4. افحص بروفايل الوزن العرضي واضبط شفة الصندوق الميكرونية للحفاظ على تباين أقل من $0.15\\text{ g/m}^2$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض شد الاتجاه العرضي CD وضعف استطالة الورق | تشغيل الماكينة على وضع Drag مفرط ($J/W < 0.97$) رتب الألياف طولياً. | رفع ضغط صندوق التدفق لضبط النسبة نحو $1.002 - 1.005$. |
| تموجات وثقوب دقيقة Pinholes في الورقة | سقوط التيار النفاث بزاوية حادة مباشرة على قماش اللباد. | تعديل وضع الشفة الأفقية Horizontal Slice Lip لتحريك نقطة السقوط. |
| عدم ثبات نسبة الـ J/W وتذبذبها | تذبذب سرعة طلمبة المروحة Fan Pump أو خلل بحلقة ضغط وسادة الهواء. | ضبط بارامترات VFD لطلمبة المروحة وتفريغ مكثفات وسادة الهواء. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-302-3",
    module_id: "mod-tis-302-2",
    title: "سكاكين تشذيب الحواف المائية (Edge Squirts) وأجهزة توجيه الأسلاك واللبادات",
    title_en: "High-Pressure Edge Squirts & Pneumatic/Hydraulic Fabric Auto-Guides",
    type: 'lesson',
    content: `### سكاكين تشذيب الحواف المائية وأجهزة توجيه الأقمشة:

حواف شيت التيشيو الرطب عند منطقة التشكيل تكون غير متساوية وتحتوي على زوائد ليفية هشة. تقوم سكاكين الحواف المائية (Edge Trimmers / Squirt Cutters) بقص وتحديد عرض الشيت بدقة ميكرونية على السلك، بينما تحافظ أجهزة التوجيه التلقائية (Auto-Guides) على سنترة واستقامة مسار الأقمشة الدوارة.

![Edge Squirt Nozzles and Fabric Auto Guide Mechanism](/images/courses/tis-302-edge-guides.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Tissue machine high pressure water squirt edge trimmer nozzle pressure\`
> * \`Judson pneumatic wire and felt auto guide palm sensor layout drawing\`
> * \`Edge trim chute pulper return system paper machine runnability\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **سكاكين الحواف المائية (Edge Squirts):**
  - فواني نفاثة دقيقة تطلق خيوط ماء شديدة الحدة بضغط يتراوح بين **$25 - 40\\text{ bar}$**.
  - تقص حافتي الشيت الرطب على السلك وتفرغ الشرائط المقطوعة (Edge Trims) في قنوات تصريف ترجعها مباشرة إلى حوض الكسر.
* **أجهزة التوجيه الآلي (Fabric Auto-Guides):**
  - مجسات هوائية أو ضوئية تلامس حافة السلك أو اللباد؛ إذا انحرف القماش مليمتراً واحداً نحو جهة القيادة أو الخدمة، يفتح بلف هوائي يغير زاوية درفيل التوجيه (Guide Roll) ليعيد القماش إلى المنتصف فوراً.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **هيدروديناميكا فوهة القطع المائي الإبرية (Needle Squirt Nozzle):**
  سرعة تدفق شعاع القطع المائي:
  $$v_{water} = C_v \\cdot \\sqrt{\\frac{2 \\cdot P_{pump}}{\\rho_{water}}}$$
  عند ضغط $30\\text{ bar}$، تبلغ سرعة خيط الماء نحو **$75\\text{ m/s}$**. إذا انخفض الضغط عن $18\\text{ bar}$، يتحول الخيط إلى رذاذ يمزق ألياف الحافة بدلاً من قصها بشكل حاد ونقي.
* **حركية درفيل التوجيه التناسبي (Guide Roll Geometry):**
  $$\\theta_{tilt} = K_g \\cdot \\Delta x_{edge}$$
  حيث تتناسب زاوية إمالة الدرفيل $\\theta_{tilt}$ مع مقدار انحراف القماش العرضي $\\Delta x_{edge}$ بزمن استجابة $< 1.5\\text{ ثانية}$ لمنع خروج القماش من مساره وتلفه.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انقطاع متكرر للشيت عند حواف أسطوانة اليانكي | قطع رديء وسلاسل ألياف متبقية بسبب انسداد أو تآكل فونية سكين القطع المائي. | استبدال فوهة فونية السكين فوراً وضبط ضغط الماء عند $\\ge 25\\text{ bar}$. |
| انسداد مجاري سحب الحواف Trim Chutes | انخفاض شفط تيار الهواء بمجاري الحواف أو تقطع شعاع الماء النفاث. | تنظيف مجرى الشفط وتسليك رواسب الألياف بمضخة الغسيل. |
| قماش السلك يزحف بسرعة نحو شاسيه الماكينة | تلف الغشاء المطاطي لسلندر التوجيه أو تراكم ألياف على مجس الحافة. | تنظيف ذراع المجس الهوائي وإصلاح تسريب الهواء في سلندر التوجيه. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-303-1",
    module_id: "mod-tis-303-1",
    title: "هيدروديناميكا النزح بالطرد المركزي (P = T/R) والاضطراب المجهري بصندوق التدفق",
    title_en: "Centrifugal Drainage P=T/R Physics & Micro-Turbulence Fluid Mechanics",
    type: 'lesson',
    content: `### هيدروديناميكا النزح فائق السرعة وتوليد الاضطراب المجهري:

عند سرعات الماكينات فائقة السرعة ($1800 - 2400\\text{ م/د}$)، تصبح معادلات ميكانيكا الموائع الكلاسيكية حاسمة لفهم ديناميكا نزح المياه والتحكم في ظاهرة تكتل الألياف (Fiber Flocculation) لضمان تشكيل متجانس بصرياً وميكانيكياً.

![Centrifugal Dewatering Pressure Balance P=T/R](/images/courses/tis-303-drainage-ptr.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Tissue machine centrifugal drainage P=T/R formula derivation\`
> * \`Headbox turbulence generator step diffusor insert fluid dynamics\`
> * \`Fiber flocculation scale of turbulence high speed tissue forming\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **لماذا نحتاج للاضطراب المجهري (Micro-Turbulence)؟**
  ألياف السليلوز في الماء تحب أن تتجمع وتتشابك مع بعضها ككرات الصوف مكونة كتلاً وتجمعات (Flocs). مهمة أنابيب الاضطراب داخل صندوق التدفق هي تكسير هذه التجمعات بواسطة دوامات مائية دقيقة للغاية قبل أن تسقط الألياف على السلك، فتتوزع كل ليفة بمفردها بنعومة متناهية.
* **قوة النزح بالطرد المركزي:**
  عندما يلتف السلك المشدود حول درفيل التشكيل الدوار، يولد شد السلك ضغطاً هيدروستاتيكياً يضغط العجينة ويدفع الماء نحو الخارج كالسهم.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة ضغط النزح بالطرد المركزي (The P = T/R Model):**
  $$P_{drain} = \\frac{T}{R} \\quad [\\text{kPa}]$$
  حيث $T$ شد السلك ($\\text{kN/m}$) و $R$ نصف قطر درفيل التشكيل ($\\text{m}$).
  - إذا كان $T = 8.5\\text{ kN/m}$ ونصف قطر الدرفيل $R = 1.0\\text{ m}$، فإن ضغط النزح الأساسي هو:
  $$P_{drain} = 8.5\\text{ kPa}$$
* **معدل سريان النزح الهيدروديناميكي الموضعي ($q$):**
  $$q = \\frac{1}{\\mu \\cdot (R_m + R_f)} \\cdot \\left( \\frac{T}{R} + \\rho \\cdot v^2 \\cdot \\frac{h}{R} \\right) \\quad [\\text{m/s}]$$
  حيث $\\mu$ لزوجة المائع، $R_m$ مقاومة نسيج السلك، $R_f$ مقاومة طبقة ألياف الورقة المترسبة، و $h$ سُمك طبقة العجينة.
* **توليد الاضطراب وتكسير التكتلات (Kolmogorov Micro-scale of Turbulence):**
  تحتوي أنابيب الناشر المتدرج (Step Diffuser) على توسعات مفاجئة تولد دوامات كولموغروف المجهرية:
  $$\\eta_k = \\left( \\frac{\\nu^3}{\\epsilon} \\right)^{1/4} \\approx 50 - 100\\ \\mu\\text{m}$$
  حيث تكون الدوامات في حجم مقارب لطول ألياف الخشب، مما يمنع تشابكها ويحقق أعلى مؤشر تشكيل استوائي (Formation Index).

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تشكيل الورقة غائم وبقع ألياف متكتلة | انخفاض سرعة تيار العجينة داخل أنابيب الاضطراب بصندوق التدفق. | زيادة معدل إعادة التدوير Recirculation ورفع ضغط الصندوق. |
| انخفاض جفاف الشيت الخارج من قسم التشكيل | انخفاض شد سلك التشكيل $T$ مما قلل ضغط النزح $P=T/R$. | رفع شد السلك بالشداد الآلي وضبطه عند $8.5\\text{ kN/m}$. |
| تسرب رذاذ مائي جانبي من أطراف صندوق التدفق | تآكل حشوات الشفة الجانبية (Side Seals) بفعل ضغط الصندوق العالي. | تغيير حشوات الإحكام الجانبية ومعايرة فتحة الشفة بالليزر. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-303-2",
    module_id: "mod-tis-303-2",
    title: "تكنولوجيا التجفيف بالهواء النافذ (Through-Air Drying - TAD) وتوليد البلك الفائق",
    title_en: "Through-Air Drying (TAD) Technology, Structured Fabrics & Ultra-Bulk Creation",
    type: 'lesson',
    content: `### تكنولوجيا التجفيف بالهواء النافذ (Through-Air Drying - TAD):

تمثل تكنولوجيا التجفيف بالهواء النافذ (TAD) المعيار الذهبي المطلق لإنتاج أرقى أصناف المناديل الورقية ومناشف المطبخ في العالم. على عكس الماكينات التقليدية التي تعتصر المياه ميكانيكياً، تنفخ ماكينات TAD الهواء الساخن عبر مسام الشيت لتجفيفه دون لمس أو ضغط هيكله المسامي.

![Through-Air Drying TAD Honeycomb Drum Configuration](/images/courses/tis-303-tad-flow.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Valmet ThruAir TAD tissue machine flow schematic\`
> * \`TAD structured molding fabric knuckles and pocket design drawing\`
> * \`Through air drying heat transfer and water evaporation rate TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **الفرق بين الماكينة العادية (DCT) وماكينة TAD:**
  - *الماكينة التقليدية (Dry Crepe Tissue - DCT):* تكبس الورقة بين درافيل ثقيلة لعصر الماء، مما يضغط الألياف ويفقدها حجمها وسمكها (Bulk).
  - *ماكينة الـ TAD:* تلغي العصر الميكانيكي تماماً؛ وبدلاً منه، تنقل الورقة الرطبة فوق قماش ثلاثي الأبعاد وتمررها حول درفيل هائل مفرغ (Honeycomb Drum) ينفخ هواءً ساخناً ($200 - 240^\\circ\\text{C}$) يخترق مسام الورقة ليجففها بنسبة $70\\%$ في الهواء الطلق!
* **النتيجة الاستهلاكية:**
  ورقة منشفة TAD تزن $22\\text{ جم/م²}$ تعطي سماكة وامتصاصاً يعادل ورقة كبس تقليدي تزن $44\\text{ جم/م²}$؛ أي ضعف الامتصاص بنفس كمية الألياف!

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة إرجون لتدفق الهواء عبر الوسط المسامي للشيت (Ergun Porous Flow Equation):**
  $$\\frac{\\Delta P}{L} = \\frac{150 \\cdot \\mu \\cdot (1 - \\epsilon)^2}{d_p^2 \\cdot \\epsilon^3} \\cdot v_s + \\frac{1.75 \\cdot \\rho \\cdot (1 - \\epsilon)}{d_p \\cdot \\epsilon^3} \\cdot v_s^2$$
  حيث $\\epsilon$ النسبة الفراغية للشيت المهيكل ($Void\\ Fraction > 0.75$)، $d_p$ القطر الهيدروليكي للمسام، و $v_s$ السرعة السطحية للهواء النافذ.
* **مؤشر البلك النوعي (Specific Bulk Metric):**
  $$\\text{Specific Bulk} = \\frac{\\text{Caliper } (\\mu\\text{m})}{\\text{Basis Weight } (\\text{g/m}^2)} \\quad [\\text{cm}^3/\\text{g}]$$
  - ورق التيشيو التقليدي (Crescent Former DCT): $\\text{Bulk} = 7 - 9\\text{ cm}^3/\\text{g}$.
  - ورق التيشيو المهيكل بتقنية TAD: **$\\text{Bulk} = 13 - 16\\text{ cm}^3/\\text{g}$** (زيادة تفوق $80\\%$ في الحجم والنعومة).
* **ميزان الطاقة وتبخير المياه في أسطوانة الـ TAD:**
  $$Q_{tad} = \\dot{m}_{air} \\cdot C_{p,air} \\cdot (T_{supply} - T_{exhaust}) = \\dot{m}_{evap} \\cdot h_{fg}$$

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض مفاجئ في بلك وسماكة مناديل الـ TAD | انسداد مسام قماش التشكيل ثلاثي الأبعاد بالراتنجات أو ضعف فاكيوم التشكيل. | تشغيل رشاشات التنظيف الكيميائي للقماش ورفع فاكيوم التشكيل بـ $+5\\text{ kPa}$. |
| احتراق وشياط حواف الورقة على درفيل الـ TAD | اختلال توزيع درجات حرارة الهواء عبر عرض الدرفيل (CD Temperature Flaw). | موازنة خوانق الهواء الساخن وفحص استقامة لهب برنر الهواء. |
| تطاير أجزاء من الشيت قبل أسطوانة اليانكي | انخفاض نفاذية الورقة نتيجة زيادة مفرطة في نعومة وتكرير الألياف. | تقليل تكرير الألياف واستخدام خلطة ألياف خشنة ذات مسامية نفاذة. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-303-3",
    module_id: "mod-tis-303-2",
    title: "تقنيات العصر المهيكل الموفرة للطاقة (NTT & ATMOS) وموازين النزح (SOP-TAD-03)",
    title_en: "Textured Tissue Technologies: NTT, ATMOS & Energy-Efficient Structuring",
    type: 'lesson',
    content: `### تقنيات التيشيو المهيكل الموفرة للطاقة (NTT & ATMOS):

رغم الجودة الأسطورية لماكينات TAD، إلا أن استهلاكها المرتفع من الغاز والكهرباء دفع الشركات الهندسية الكبرى (Andritz و Voith) لتطوير حلول هجينة ثورية مثل **NTT (New Tissue Technology)** و **ATMOS (Advanced Tissue Molding System)** لتحقيق بلك ونعومة قريبة من الـ TAD ولكن باستهلاك طاقة يقارب الماكينات التقليدية.

![Valmet TAD vs Andritz NTT vs Voith ATMOS Comparison](/images/courses/tis-303-ntt-atmos.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Andritz PrimeLine NTT textured tissue press nip diagram\`
> * \`Voith ATMOS structured tissue drying process cross section\`
> * \`Energy consumption comparison DCT vs NTT vs TAD tissue mills\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف تعمل تقنية Andritz NTT؟**
  - تستخدم حزاماً بوليمرياً منقوشاً ثلاثي الأبعاد (Textured Belt) يمر مع الورقة داخل عصارة شو برس هيدروليكي عريض (Shoe Press).
  - يتم عصر الماء وتشكيل الورقة في وقت واحد؛ حيث تُدفع الألياف داخل وسائد الحزام دون أن تنسحق، مما ينتج ورقة ذات بلك مرتفع ($10 - 12\\text{ cm}^3/\\text{g}$) مع جفاف يصل إلى $46\\%$ بعد العصارة!
* **كيف تعمل تقنية Voith ATMOS؟**
  - تطبق شفطاً بالفاكيوم الحار عبر قماش مهيكل لتشكيل الشيت قبل وصوله لليانكي، مما يوفر حتى **$35\\%$ من الغاز الطبيعي** مقارنة بالـ TAD الكامل.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **مقارنة استهلاك الطاقة الشامل (Energy Benchmark Comparison):**

| التكنولوجيا | الجفاف بعد العصر | استهلاك الغاز الطبيعي | استهلاك الكهرباء | البلك النوعي |
| :--- | :--- | :--- | :--- | :--- |
| **DCT التقليدي** | $40 - 45\\%$ | $800 - 1000\\text{ kWh/t}$ | $600 - 750\\text{ kWh/t}$ | $7.5\\text{ cm}^3/\\text{g}$ |
| **Andritz NTT** | $45 - 48\\%$ | $850 - 1050\\text{ kWh/t}$ | $700 - 800\\text{ kWh/t}$ | $10.5\\text{ cm}^3/\\text{g}$ |
| **Full TAD** | لا يوجد كبس ($25\\%$) | **$1800 - 2400\\text{ kWh/t}$** | **$1000 - 1300\\text{ kWh/t}$** | **$14.5\\text{ cm}^3/\\text{g}$** |

* **معادلة نبضة العصر الهيدروليكي في تقنية NTT (Press Impulse):**
  $$I = \\frac{\\text{Linear Load}}{v_{machine}} = \\int_{0}^{t_{nip}} P(t)\\, dt \\quad [\\text{kPa}\\cdot\\text{s}]$$
  يتيح عصارة الشو برس العريض زيادة زمن النزح بمقدار 4 أضعاف مع الحفاظ على قمة الضغط ($P_{peak} < 6\\text{ MPa}$) منخفضة لحماية وسائد البلك الميكروية.

---

### خطوات التشغيل المعيارية (SOP-TAD-03):
1. افحص حالة الحزام المنقوش (Textured Belt)؛ تأكد من خلو المسام من ترسبات الكيماويات والراتنجات.
2. شغل صندوق الفاكيوم التمهيدي المولد للبنية الثلاثية؛ اضبط الفاكيوم عند $30\\text{ kPa}$.
3. اضبط الحمل الخطي لعصارة الشو برس NTT: ابدأ عند $90\\text{ kN/m}$ للأصناف الخفيفة وتدرج إلى $130\\text{ kN/m}$ للمناشف.
4. افحص بروفايل سمك الورقة (Caliper) الخارجة من العصارة؛ تأكد من عدم هبوط البلك عن المستهدف القياسي ($> 10.0\\text{ cm}^3/\\text{g}$).
5. راقب ضغط زيت هيدروليك شو العصارة (Shoe)؛ حافظ على حرارة الزيت في نطاق $45 - 55^\\circ\\text{C}$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تسطح نقوش التيشيو وضياع ملمس الـ NTT | زيادة مفرطة في الحمل الخطي لعصارة الشو برس ($> 150\\text{ kN/m}$). | خفض حمل عصارة الشو برس فوراً وإمالة زاوية الشو برس للخلف Tilt. |
| خطوط مائية متقطعة على رول الورق | انسداد موضعي في ثقوب الحزام المنقوش برواسب ألياف جافة. | تشغيل رشاشات الغسيل عالي الضغط بالحزام وضبط المنظف الكيميائي. |
| ارتفاع حرارة زيت هيدروليك عصارة الشو برس عن $65^circ\\text{C}$ | انسداد مبادل تبريد الزيت الهيدروليكي أو تآكل طلمبة التزييت. | تنظيف مبادل التبريد ومراجعة سريان مياه التبريد الصناعية. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-401-1",
    module_id: "mod-tis-401-1",
    title: "الوظيفة الحرارية لأسطوانة اليانكي وميكانيكا الكرمشة (Yankee Dryer Functions)",
    title_en: "Yankee Cylinder Thermodynamic Roles & Creping Buckling Physics",
    type: 'lesson',
    content: `### الوظيفة الحرارية والميكانيكية لأسطوانة اليانكي (Yankee Dryer Fundamentals):

تعتبر أسطوانة اليانكي (Yankee Dryer) قلب مصنع التيشيو وأضخم وعاء ضغط دوار في الصناعات الورقية. يصل قطرها إلى **$3.6 - 5.5\\text{ متر}$** وتزن ما بين **$80 - 150\\text{ طناً}$**. تؤدي وظيفتين متزامنتين في منتهى الدقة: التجفيف بالبخار ونقل الحركة لتوليد الكرمشة (Creping).

![Yankee Cylinder and Creping Doctor Action](/images/courses/tis-401-yankee-overview.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Yankee dryer cast iron vs steel shell heat transfer rate TAPPI\`
> * \`Creping process micro-buckling and delamination mechanism tissue paper\`
> * \`Yankee cylinder condensate removal and internal steam dynamics\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف تجفف أسطوانة اليانكي الورقة؟**
  - يدخل البخار المشبع ($6 - 10\\text{ bar}$) داخل قلب الأسطوانة، وتنقل الحرارة عبر الجدار المعدني إلى الشيت الرطب الملتصق بالسطح الخارجي، فترتفع نسبة الجفاف من $40\\%$ إلى أكثر من **$95\\%$** في زمن لا يتعدى ثلث ثانية!
* **ما هي عملية الكرمشة (Creping)؟**
  - تلتصق الورقة بقوة بفيلم كيميائي خاص يغطي وجه الأسطوانة.
  - عندما تصطدم الورقة الجافة بحافة سكين الكريب الصلب الثابت، تنفصل الورقة وتتكسر أليافها مجهرياً وتتجعد على شكل تموجات ميكروية متقاربة، مما يحول الورقة المسطحة الصلبة إلى نسيج تيشيو فائق النعومة، عالي الامتصاص، وقابل للاستطالة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب نسبة الكرمشة الميكانيكية (Crepe Ratio %):**
  تحسب نسبة الكرمشة من فرق السرعة بين أسطوانة اليانكي ومكركر اللف النهائي (Reel):
  $$\\text{Crepe Ratio (\\%)} = \\left( \\frac{v_{Yankee} - v_{Reel}}{v_{Yankee}} \\right) \\times 100$$
  - *مثال ميداني:* إذا كانت سرعة اليانكي $v_{Yankee} = 1800\\text{ م/د}$ وسرعة البوبينة $v_{Reel} = 1500\\text{ م/د}$:
  $$\\text{Crepe Ratio} = \\left( \\frac{1800 - 1500}{1800} \\right) \\times 100 = 16.67\\%$$
  - زيادة نسبة الكرمشة تزيد استطالة الشيت (Stretch) والنعومة والبلك، ولكنها تقلل الإنتاجية المترية الخطية.
* **معادلة انتقال الحرارة بالتوصيل عبر جدار اليانكي:**
  $$q = \\frac{k_{shell}}{t_{shell}} \\cdot (T_{steam} - T_{surface}) \\quad [\\text{kW/m}^2]$$
  حيث معامل التوصيل الحراري لأسطوانات الصلب $k_{steel} \\approx 45\\text{ W/m}\\cdot\\text{K}$ متفوق على زهر الحديد $k_{cast} \\approx 35\\text{ W/m}\\cdot\\text{K}$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| كرمشة خشنة وضعف استطالة الشيت | انخفاض نسبة الكرمشة الفعلية بالـ DCS عن $15\\%$. | زيادة فرق السرعة بإبطاء درفيل البوبينة Reel قليلاً. |
| تقطع الورقة عند سكين الكريب Nip Break | جفاف الشيت غير كافٍ ($< 92\\%$) نتيجة انخفاض ضغط بخار اليانكي. | رفع ضغط البخار الداخلي أو زيادة حرارة الهود الغازي. |
| صوت خبط دوري مع كل لفة لليانكي | تشوه غير متماثل في استدارة قشرة الأسطوانة Out-of-roundness. | إجراء قياس استدارة القشرة بالدايل أنديكيتور وفحص المسامير. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-401-2",
    module_id: "mod-tis-401-1",
    title: "ميكانيكا شفرات الكريب وزوايا بيت الشفرة (Pocket Angle)",
    title_en: "Creping Blade Mechanics, Holder Geometry & Pocket Angle Dynamics",
    type: 'lesson',
    content: `### ميكانيكا شفرات الكريب وهندسة زوايا التحميل (Blade Mechanics):

ليست شفرة الكريب مجرد سكين كاشط، بل أداة هندسية دقيقة تحكم شكل وحجم التجاعيد الميكروية. زاوية الجيب (Pocket Angle) وزاوية شطف الشفرة (Blade Bevel) تحددان ما إذا كانت الورقة ستتحول إلى مناديل فاخرة أو ورق خشن.

![Creping Blade Pocket Angle and Holder Geometry](/images/courses/tis-401-doctor-holder.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Kadant tissue creping doctor blade loading and angles drawing\`
> * \`Creping pocket angle calculation blade bevel holder angle TAPPI\`
> * \`Carbon steel vs ceramic tipped creping blades performance tissue\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **أنواع شفرات الكريب في التيشيو:**
  1. *شفرات الصلب الكربوني (Carbon Steel):* مرنة ورخيصة؛ تتطلب التغيير كل 2 إلى 4 ساعات.
  2. *شفرات السيراميك والكاربيد (Ceramic / Carbide-Tipped):* تحتوي على حافة متصلدة فائقة الصلابة؛ تعمل باستقرار لمدة 24 إلى 72 ساعة متواصلة.
* **زاوية الجيب (Pocket Angle):**
  - هي الزاوية المحصورة بين الوجه الأمامي للشفرة ومماس سطح أسطوانة اليانكي.
  - *زاوية جيب حادة ($< 80^circ$):* صدمة عنيفة، كرمشة سميكة، وبلك عالي (لمناديل المطبخ).
  - *زاوية جيب منفرجة ($85^circ - 88^circ$):* صدمة ناعمة، كرمشة ميكروية دقيقة، وملمس حريري (لمناديل الوجه).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة حساب زاوية الجيب الفعلية (Pocket Angle Geometry):**
  $$\\theta_{pocket} = \\theta_{holder} + \\alpha_{bevel} - 90^\\circ$$
  حيث $\\theta_{holder}$ زاوية حامل الشفرة بالنسبة للمماس، و $\\alpha_{bevel}$ زاوية شطف حافة السكينة ($10^\\circ, 15^\\circ, 20^\\circ$).
* **قوة التحميل الخطي للشفرة (Linear Blade Loading):**
  تضغط الشفرة على اليانكي بواسطة وسائد هوائية منبسطة (Pneumatic Tubes):
  $$P_{linear} = \\frac{p_{tube} \\cdot A_{eff}}{L_{blade}} \\quad [\\text{kN/m}]$$
  يجب ضبط قوة التحميل بين **$1.8 - 2.8\\text{ kN/m}$**. التحميل الأقل يسبب رفع الشفرة ومرور الورقة تحتها (Sheet Blow-by)، والتحميل المفرط يسرع تآكل اليانكي ويسبب حزوزاً معدنية.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| مرور الورقة تحت شفرة الكريب Sheet Pass | انخفاض ضغط هواء أنبوبة التحميل أو تراكم ألياف جافة بحامل الشفرة. | رفع ضغط الأنبوبة الهوائية وتنظيف بيت الشفرة تماماً. |
| خشونة مفاجئة وكرمشة متباعدة بالورق | تآكل حافة الشفرة واتساع عرض التلامس Land Width بشكل مفرط. | تغيير شفرة الكريب فوراً وفق الخطوات القياسية المعتمدة. |
| خطوط داكنة محفورة على سطح اليانكي | استخدام شفرة تالفة أو ضغط تحميل خطي زائد عن $3.5\\text{ kN/m}$. | خفض ضغط الوسادة الهوائية فوراً وتغيير الشفرة وفحص السطح. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-401-3",
    module_id: "mod-tis-401-2",
    title: "بروتوكول تغيير شفرة الكريب بأمان وعادم الغبار (SOP-DRY-01)",
    title_en: "Creping Doctor Blade Safe Replacement Protocols & Dust Extraction Systems",
    type: 'lesson',
    content: `### بروتوكول تغيير شفرة الكريب ونظم سحب الغبار (SOP-DRY-01):

يعد تغيير شفرة الكريب من أدق العمليات اليومية للوردية. الشفرة المستهلكة تكون شديدة السخونة ($> 100^\\circ\\text{C}$)، حادة كالموس، وتستقر على بعد ملليمترات من أسطوانة تدور بأطنان من العزم الميكانيكي. الالتزام بإجراءات السلامة هو مسألة حياة أو موت.

![Doctor Blade Replacement Safety Sequence](/images/courses/tis-401-blade-change.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Safe creping blade change procedure tissue machine OSHA\`
> * \`Doctor blade puller tool insulated pliers safety guidelines\`
> * \`Tissue dust extraction hood exhaust ventilation air velocity\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **قواعد السلامة غير القابلة للتفاوض:**
  1. ارتداء أكمام الأذرع العازلة للحرارة، قفازات كيفلار مقاومة للقطع (Level 5)، ونظارات واقية مع شيلد الوجه الكامل.
  2. التواصل الصوتي التام باللاسلكي مع غرفة التحكم: *"جاري فتح حامل شفرة الكريب لتغيير السكينة"*.
  3. حظر لمس الشفرة المستهلكة باليد حتى مع القفاز؛ سحب الشفرة دائماً باستخدام كماشة القفل العازلة المخصصة (Locking Pliers).
  4. التخلص الفوري من الشفرة المستهلكة داخل صندوق الإعدام المعدني المغلق.
* **منظومة سحب الغبار (Dust Extraction):**
  تولد الكرمشة غباراً سليلوزياً متطايراً؛ تقوم هودات الشفط بكنس الغبار فورياً لمنع تراكمه على الماكينة وحمايته من الاشتعال.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **توزيع ضغط حامل الشفرة والتردد الاهتزازي:**
  يحتوي حامل الشفرة الحديث (مثل Kadant Conformatic) على أصابع مرنة مستقلة عرضياً (Fingers) توفر توزيعاً متساوياً للحمل عبر عرض الشيت ($2.8 - 5.6\\text{ m}$) دون تأثر بالانحناء الحراري للأسطوانة:
  $$\\Delta P_{CD} < \\pm 5\\% \\quad \\text{across the machine width}$$
* **سرعة سحب عوادم الغبار (Face Capture Velocity):**
  يجب ألا تقل سرعة سحب الهواء عند فتحة هود الغبار عن **$15 - 20\\text{ m/s}$** لضمان شفط الجسيمات الدقيقة ($< 10\\ \\mu\\text{m}$) ومنع تكون خليط انفجاري غباري وفق معايير NFPA 652.

---

### خطوات التشغيل المعيارية (SOP-DRY-01):
1. أبلغ مشغل غرفة التحكم بالـ DCS للتأهب وتثبيت ضغط الكوتنج.
2. فرغ ضغط أنبوبة التحميل الهوائية؛ تأكد من تراجع الحامل وانفصاله التام عن اليانكي.
3. امسك طرف الشفرة المستهلكة بكماشة القفل المعزولة؛ اسحبها أفقياً بسلاسة نحو صندوق التجميع.
4. استخدم فوهة الشفاط لتنظيف جيب الحامل من رواسب الكوتنج المحترق والألياف.
5. ادخل الشفرة الجديدة بحذر مع التأكد من أن زاوية الشطف (Bevel) موجهة لأعلى باتجاه دوران اليانكي.
6. سنتر الشفرة بحيث لا يتجاوز البروز الجانبي عن حافة اليانكي $25\\text{ مم}$.
7. اعد تطبيق ضغط هواء التحميل ($2.0\\text{ bar}$)؛ شغل حركة التذبذب (Oscillation) وتأكد من تلامس الشفرة الكامل.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| صعوبة إدخال الشفرة الجديدة وتعليقها | تراكم كوتنج كربوني محترق داخل مجرى جيب الحامل Blade Pocket. | تنظيف المجرى بشفرة كشط نحاسية وتفريغ الرواسب بالفاكيوم. |
| غبار سليلوزي كثيف يتراكم حول الشفرة | انسداد فلاتر هود سحب الغبار أو تراكم كتل ألياف بفتحات الشفط. | تنظيف مجاري الشفط وفحص ضغط سحب مروحة عادم الغبار. |
| انكسار طرف الشفرة الجديد فور التحميل | بروز مفرط لطرف الشفرة اصطدم بحافة حزام درفيل العصر أو الشاسيه. | ضبط سنترة الشفرة والتأكد من الخلوص الجانبي القياسي ($25\\text{ مم}$). |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-402-1",
    module_id: "mod-tis-402-1",
    title: "المثلث الكيميائي لطلاء اليانكي: اللاصق، العازل، والمعدل (Coating Package)",
    title_en: "Yankee Coating Chemistry Matrix: Adhesive, Release & Modifier",
    type: 'lesson',
    content: `### المثلث الكيميائي لطلاء أسطوانة اليانكي (Yankee Coating Package):

يعتبر فيلم الطلاء الكيميائي المتشكل فوق سطح أسطوانة اليانكي أعقد منظومة بوليمرية تفاعلية في صناعة التيشيو. هذا الفيلم الميكروني الرقيق هو الذي يحمي معدن الأسطوانة من الاحتكاك، ويضمن التصاق الورقة لنقل الحرارة، ويحدد جودة الكرمشة ونعومة المناديل.

![Yankee Coating Chemistry Triangle](/images/courses/tis-402-coating-triangle.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Yankee coating package adhesive release modifier chemical balance TAPPI\`
> * \`Polyamide polyamine epichlorohydrin PAE coating adhesive cross linking\`
> * \`Glass transition temperature Tg of Yankee coating film dynamics\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **أضلاع مثلث الكوتنج الثلاثة:**
  1. *المادة اللاصقة (Adhesive Polymer):* بوليمر غروي يثبت الشيت الرطب بقوة متجانسة فوق المعدن لمنع تطاير الورقة مع هواء الهود الساخن.
  2. *مادة التحرير والعزل (Release Oil):* مستحلب زيتي يقلل الالتصاق بدرجة محسوبة ليسمح لسكين الكريب بقشر الورقة دون تمزيقها.
  3. *المادة المعدلة والملينة (Modifier / Plasticizer):* مركب يحافظ على طراوة ومرونة الفيلم ويمنعه من الجفاف والتفحم تحت حرارة الهود العالية.
* **المظهر البصري لفيلم الكوتنج:**
  - *الحالة المثالية (The Sweet Spot):* فيلم برونزي ذهبي خفيف، شفاف، ومتجانس عبر عرض الأسطوانة.
  - *الاستواء المبكر (Glazed Film):* فيلم زجاجي شديد اللمعان والصلابة يسبب صرير واهتزاز السكين.
  - *الاستواء المتأخر (Gummy Film):* فيلم بني غامق صمغي طري يتراكم خلف الشفرة ويقطع الورقة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب معدل التغطية الكيميائية (Chemical Add-on Rate):**
  $$\\text{Add-On Rate} = \\frac{Q_{chem} \\cdot C_{solids} \\cdot 1000}{v_{Yankee} \\cdot W_{shell}} \\quad [\\text{mg/m}^2]$$
  حيث $Q_{chem}$ معدل ضخ الكيماويات ($\\text{mL/min}$)، $C_{solids}$ نسبة المواد الصلبة الفعالة، $v_{Yankee}$ سرعة الماكينة ($\\text{m/min}$)، و $W_{shell}$ عرض الأسطوانة ($\\text{m}$).
  *المعدلات المستهدفة للتيشيو الفاخر:*
  - اللاصق (Adhesive): $1.5 - 3.5\\text{ mg/m}^2$.
  - العازل (Release): $0.8 - 2.0\\text{ mg/m}^2$.
  - المعدل (Modifier): $0.5 - 1.5\\text{ mg/m}^2$.
* **حرارة التحول الزجاجي للفيلم ($T_g$):**
  يجب ضبط تركيبة الكوتنج بحيث تظل حرارة التحول الزجاجي $T_g$ بين **$85 - 105^\\circ\\text{C}$** عند نقطة صدم الشفرة، لضمان بقاء البوليمر في حالته اللزجة المرنة (Viscoelastic Window).

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| صرير واهتزاز عنيف لسكين الكريب | استواء مبكر وتزجيج للفيلم نتيجة نقص مادة التعديل Modifier أو زيادة الحرارة. | رفع مادة التعديل بـ $+20\\%$ وزيادة مادة التحرير Release وتخفيف بخار اليانكي. |
| تراكم عجين صمغي بني خلف الشفرة | استواء متأخر ونقص بلمرة نتيجة زيادة مفرطة في مياه الرش أو مادة التحرير. | تقليل مياه الرش، خفض مادة التحرير بـ $-15\\%$، وزيادة حرارة التجفيف. |
| تطاير أطراف الورقة وانفصالها قبل السكين | نقص المادة اللاصقة Adhesive عند حواف الأسطوانة الخارجية. | مراجعة فواني أطراف عارضة الرشاشات ورفع جرعة اللاصق العام بـ $+10\\%$. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-402-2",
    module_id: "mod-tis-402-1",
    title: "درفيل العصر والشفط (SPR) وعوارض رش الكوتنج ومحاذاة الفواني (SOP-COAT-02)",
    title_en: "Suction Pressure Roll (SPR) Mechanics & Spray Boom Alignment",
    type: 'lesson',
    content: `### درفيل العصر والشفط وعوارض رش الكوتنج (SPR & Spray Boom):

يمثل درفيل العصر والشفط (Suction Pressure Roll - SPR) المحطة الحاسمة لنقل الشيت الرطب من لباد التشكيل وتثبيته فوق أسطوانة اليانكي. تتكامل هذه العملية مع عارضة رش الكيماويات (Spray Boom) التي تهيئ سطح المعدن لاستقبال الشيت تحت ضغط نيب هائل.

![Suction Pressure Roll and Spray Boom Geometry](/images/courses/tis-402-spr-boom.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Suction pressure roll internal vacuum box seal strip adjustment drawing\`
> * \`Yankee coating spray boom nozzle overlap diagram Toscotec\`
> * \`Pressure roll nip impression test carbon paper Fuji film procedure\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **درفيل العصر والشفط (SPR):**
  - درفيل مفرغ مثقب بآلاف الثقوب ومغطى بطبقة من البولي يوريثان المرن.
  - يحتوي بداخله على صندوق فاكيوم ثابت (Vacuum Box) يشفط المياه المعصورة من الشيت واللباد عند نقطة التلامس (Nip) بقوة فاكيوم تصل إلى $-60\\text{ kPa}$.
* **عارضة رش الكوتنج (Spray Boom):**
  - عارضة مجهزة بـ 10 إلى 16 فونية نفاثة ترش رذاذاً ميكرونياً فائق النعومة لمحلول الكوتنج المخفف بالماء الساخن ($50 - 60^\\circ\\text{C}$) فوق الأسطوانة قبل وصول الورقة.
* **زاوية الميل $15^circ$ (Offset Angle):**
  - تضبط فواني الرش بميلان $15^circ$ عن الخط الأفقي لمنع تصادم حواف رذاذ الفواني المتجاورة وتجنب الخطوط الطولية في الكوتنج.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **توزيع ضغط النيب وحساب الحمل الخطي (Linear Nip Load):**
  $$P_{peak} = \\frac{2 \\cdot L_{linear}}{\\pi \\cdot w_{nip}} \\quad [\\text{MPa}]$$
  حيث $L_{linear}$ الحمل الخطي ($70 - 100\\text{ kN/m}$) و $w_{nip}$ عرض منطقة التلامس النيبية ($30 - 45\\text{ مم}$).
  - يجب قياس اتساق عرض النيب دورياً بورق الكربون المقاوم للضغط (Fuji Prescale Film)؛ التفاوت المسموح عبر عرض الماكينة: $\\Delta w_{nip} < \\pm 1.5\\text{ مم}$.
* **حساب نسبة تداخل فواني الرشاش (Spray Overlap %):**
  $$\\text{Overlap (\\%)} = \\left( \\frac{w_{spray} - P_{nozzle}}{P_{nozzle}} \\right) \\times 100$$
  حيث $w_{spray}$ عرض مخروط الرش عند سطح اليانكي و $P_{nozzle}$ المسافة بين الفواني. المعيار الهندسي لليانكي هو **تداخل مزدوج بنسبة $100\\%$ (Double Overlap)** لضمان تغطية متجانسة حتى في حال انسداد فونية مفاجئ.

---

### خطوات التشغيل المعيارية (SOP-COAT-02):
1. تحقق من ضغط مياه تخفيف عارضة الرشاشات ($3.5 - 4.5\\text{ bar}$) وحرارة الماء ($55 - 65^\\circ\\text{C}$).
2. افحص زوايا فواني الرشاش؛ تأكد من ضبط زاوية الميل عند $15^circ$ Offset ومسافة البعد عن اليانكي عند $120\\text{ مم}$.
3. شغل فاكيوم درفيل العصر SPR؛ اضبط الفاكيوم عند $-55\\text{ kPa}$ وتأكد من تزييت شرائح العزل المائية (Seal Strips).
4. ارفع ضغط تحميل درفيل العصر تدريجياً حتى الحمل التشغيلي المعتمد ($85\\text{ kN/m}$).
5. راقب بصرياً خط خروج الشيت من النيب؛ يجب ألا تظهر أي فقاعات هواء محبوسة أو خطوط ظل لثقوب الدرفيل (Shadow Marks).

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| خطوط ظل لثقوب الدرفيل Shadow Marks بالورق | انسداد ثقوب التصريف بدرفيل العصر SPR بالألياف والكيماويات. | جدولة غسيل كيميائي عالي الضغط لثقوب الدرفيل في أقرب توقف. |
| خطوط طولية داكنة وجافة في فيلم الكوتنج | انسداد جزئي في إحدى فواني عارضة الرشاشات أو اختلال زاوية الرش. | فك وتسليك الفونية المسدودة فورياً وضبط زاوية الـ $15^circ$. |
| اهتزاز شديد بدرفيل العصر عند زيادة السرعة | تآكل أو تصلب غطاء البولي يوريثان المطاطي لدرفيل العصر SPR. | فحص صلابة الغطاء بجهاز P&J وجدولة تجليخ واستعدال الغطاء. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-402-3",
    module_id: "mod-tis-402-2",
    title: "تريبولوجيا تآكل شفرة الكريب وفحص بصمة التآكل (Blade Footprint) بالمجهر",
    title_en: "Doctor Blade Wear Tribology & Optical Microscopic Footprint Analysis",
    type: 'lesson',
    content: `### تريبولوجيا تآكل شفرات الكريب (Doctor Blade Wear Tribology):

تكشف شفرة الكريب المستهلكة لمهندس العمليات الحقيقة الكاملة لما يدور فوق سطح أسطوانة اليانكي. فحص بصمة تآكل الشفرة (Blade Footprint) بالمجهر الضوئي هو الأداة التشخيصية الأولى لتقييم صحة الكوتنج، ميكانيكا حامل الشفرة، ومعدل اهتلاك أسطوانة اليانكي.

![Doctor Blade Wear Footprint and Bevel Lands](/images/courses/tis-402-blade-footprint.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Doctor blade wear footprint land width optical microscope photo TAPPI\`
> * \`Creping blade abrasive wear vs adhesive wear tribology tissue paper\`
> * \`Blade bevel contact pressure distribution profile measurement\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ما هي "بصمة تآكل الشفرة" (Blade Footprint)؟**
  هي الشطفة المعدنية اللامعة التي تتشكل على حافة السكين نتيجة احتكاكها المستمر بأسطوانة اليانكي أثناء الكرمشة.
* **قراءة مظهر البصمة بالمجهر البصري:**
  1. *بصمة ناعمة مصقولة بانتظام:* كوتنج متوازن، خلوص ميكانيكي مثالي، وتآكل سليم للشفرة.
  2. *بصمة خشنة مشرشرة ومكسورة (Chipping):* فيلم كوتنج صلب مزجج، أو ضغط تحميل مفرط على الشفرة.
  3. *بصمة ملتصق بها كربون أسود محترق:* استواء متأخر وتراكم مواد كيميائية لم تتصلب.
  4. *عرض البصمة غير متساوٍ بين جهة القيادة والخدمة:* حامل الشفرة مائل وغير موازٍ لأسطوانة اليانكي.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **تريبولوجيا إجهاد التلامس وتآكل الحافة (Contact Stress Dynamics):**
  $$\\sigma_{contact}(t) = \\frac{P_{linear}}{w_{land}(t)} \\quad [\\text{MPa}]$$
  عند تركيب الشفرة الجديدة، يكون عرض حافة التلامس الابتدائية $w_{land} \\approx 0.4 - 0.6\\text{ مم}$، مما يوفر إجهاد قص مرتفع يحقق كرمشة حادة.
  مع مرور الوقت، تتآكل الشفرة ويتسع عرض التلامس $w_{land}$ ليصل إلى **$> 1.8 - 2.2\\text{ مم}$**، مما يؤدي إلى هبوط إجهاد التلامس $\\sigma_{contact}$ إلى ما دون الحد الحرج لانفصال الشيت، فتتحول الكرمشة إلى خشنة وتفقد الورقة نعومتها، وتصبح الشفرة مستهلكة هندسياً.
* **معدل التآكل النوعي (Archard’s Wear Law Formulation):**
  $$V_{wear} = K_{wear} \\cdot \\frac{F_N \\cdot L_{sliding}}{H_{blade}}$$
  حيث $K_{wear}$ معامل التآكل التريبولوجي لفيلم الكوتنج، $L_{sliding}$ مسافة انزلاق اليانكي، و $H_{blade}$ صلابة معدن الشفرة (صلب كربوني $\\approx 500\\text{ HV}$ مقابل كاربيد السيراميك $\\approx 1200\\text{ HV}$).

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| تآكل مفرط للشفرة في أقل من ساعتين | نقص مادة التحرير والتزييت الكيميائي Release أو خشونة سطح اليانكي. | زيادة جرعة مادة التحرير بـ $+15\\%$ وفحص خشونة سطح الأسطوانة. |
| عرض بصمة التآكل عريض بجهة ومفقود بالأخرى | عدم توازي حامل الشفرة وتفاوت ضغط وسائد التحميل الهوائية عبر العرض. | معايرة مسامير الضبط الميكروني لحامل الشفرة وتسوية التوازي بالليزر. |
| شظايا مكسورة ومسننة على حافة الشفرة | صدمات ميكانيكية ناتجة عن اهتزازات ترددية Chatter أو رمل بالعجينة. | تقليل ضغط التحميل، وتغيير الشفرة، وفحص أجهزة إزالة الرمال Cleaners. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-403-1",
    module_id: "mod-tis-403-1",
    title: "ديناميكا صدم الكرمشة وتردد التجاعيد الدقيقة والنافذة اللزجة المرنة",
    title_en: "High-Frequency Creping Dynamics, Micro-folds & Viscoelastic Window",
    type: 'lesson',
    content: `### ديناميكا صدم الكرمشة والنافذة اللزجة المرنة (High-Speed Creping Dynamics):

تحدث عملية الكرمشة في أجزاء متناهية الصغر من الميكروثانية تحت ترددات صدم تصادمية مجهرية. تتطلب هذه العملية فهماً فيزيائياً عميقاً للسلوك اللزج المرن (Viscoelasticity) لفيلم البوليمر وألياف السليلوز عند نقطة التحول الحرجة.

![Creping Delamination and Micro-fold Frequency](/images/courses/tis-403-creping-dynamics.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`High speed tissue creping mechanics micro-fold frequency calculation\`
> * \`Viscoelastic properties of Yankee coating storage modulus loss modulus\`
> * \`Paper sheet buckling mechanics at creping doctor blade TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ماذا يحدث للورقة عند حافة الشفرة؟**
  - تصطدم الورقة المنطلقة بسرعة $120\\text{ كم/ساعة}$ بحافة الشفرة الثابتة.
  - ينضغط الشيت طولياً حتى يصل لحد الانهيار الميكانيكي (Buckling)، فينثني مكوناً طية ميكروية دقيقة، ثم ينفصل عن سطح اليانكي، وتتكرر هذه الدورة آلاف المرات في الثانية الواحدة لتكوين ملمس التيشيو الحريري.
* **النافذة اللزجة المرنة (The Viscoelastic Window):**
  - يجب ألا يكون فيلم الكوتنج صلباً كالزجاج (فينكسر وتتطاير الورقة) ولا طرياً كالعجين (فيعجن ويلتصق بالسكين). يجب أن يكون في حالة لزجة مرنة تسمح بامتصاص الصدمة وتجدد الفيلم بسلاسة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب تردد تكوين التجاعيد الميكروية (Creping Fold Frequency - $f_{crepe}$):**
  $$f_{crepe} = \\frac{v_{Yankee}}{\\lambda_{fold}} = \\frac{v_{Yankee} \\cdot \\text{Crepe Ratio}}{t_{sheet}} \\quad [\\text{Hz}]$$
  حيث $\\lambda_{fold}$ طول موجة الطية الميكروية ($15 - 40\\ \\mu\\text{m}$)، و $t_{sheet}$ سمك الشيت.
  - على سرعة $2000\\text{ م/د}$، يبلغ تردد صدم وتكوين الكرمشة ما بين **$15000 - 30000\\text{ هرتز}$** (نطاق الموجات فوق الصوتية الميكانيكية)!
* **معامل الفقد والتخزين للبوليمر (Storage $G'$ vs Loss Modulus $G''$):**
  $$\\tan\\delta = \\frac{G''}{G'}$$
  يجب ضبط كيمياء الكوتنج وحرارة اليانكي بحيث تكون $\\tan\\delta \\approx 0.3 - 0.5$ عند تردد الكرمشة الميداني لضمان تبديد طاقة الصدم دون حدوث انفصال هش للفيلم.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| كرمشة غير منتظمة وتموجات طولية بالشيت | خروج فيلم الكوتنج عن النافذة اللزجة المرنة نتيجة رطوبة زائدة بالشيت. | رفع ضغط بخار اليانكي وحرارة الهود لاستعادة جفاف الشيت ($> 95\\%$). |
| تكسر وتطاير ألياف الشيت كالغبار عند السكين | طاقة صدم مفرطة وزاوية جيب حادة جداً مع فيلم كوتنج جاف وهش. | زيادة مادة التعديل Modifier وخفض زاوية شطف الشفرة Bevel. |
| استطالة الورقة أقل من مواصفة التحويل | انخفاض تردد الكرمشة $f_{crepe}$ واتساع طول موجة الطيات الميكروية. | رفع نسبة الكرمشة الميكانيكية وزيادة قوة التصاق الشيت باللاصق. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-403-2",
    module_id: "mod-tis-403-1",
    title: "تكنولوجيا الشو برس (ViscoNip / Shoe Press) وحفظ سماكة البلك",
    title_en: "Shoe Press Engineering: ViscoNip, NipcoFlex & Caliper Retention Mechanics",
    type: 'lesson',
    content: `### تكنولوجيا الشو برس (Tissue Shoe Pressing):

تمثل عصارات الشو برس المخصصة للتيشيو (مثل Valmet Advantage ViscoNip و Voith NipcoFlex T) أكبر قفزة تكنولوجية في قسم العصر خلال العقدين الأخيرين. استبدلت هذه التكنولوجيا درافيل العصر الدائرية التقليدية بشو هيدروليكي (Hydraulic Shoe) مقعر عريض يوفر كفاءة نزح مائي فائقة مع الحفاظ الكامل على بلك وسماكة الورقة.

![Shoe Press ViscoNip Pressure Distribution](/images/courses/tis-403-shoe-press.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Valmet Advantage ViscoNip press module mechanical drawing\`
> * \`Voith NipcoFlex T shoe press tissue machine cross section\`
> * \`Shoe press impulse drying dewatering efficiency vs suction roll TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **لماذا تتفوق عصارات الشو برس على درافيل العصر العادية؟**
  - *درافيل العصر الدائرية (SPR):* تضغط الورقة في مساحة ضيقة جداً ($30 - 45\\text{ مم}$) بقمة ضغط حادة تشبه "ضربة المطرقة"، مما يعتصر الماء ولكنه يسحق ألياف الورقة ويجعلها رقيقة ومسطحة.
  - *عصارات الشو برس (Shoe Press):* تستخدم شوز (Shoe) معدنياً مقعراً مبطناً بحزام بوليمري مرن، مما يخلق منطقة تلامس عريضة جداً (**$80 - 120\\text{ مم}$**). تتيح هذه المساحة عصر الماء بلطف على مدى زمني أطول 4 أضعاف، فتخرج الورقة بجفاف هائل ($46\\%$) مع بقاء الألياف منتفخة ومحتفظة بكامل سمكها وبلكها!

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة نبضة العصر الهيدروليكية (Press Impulse Formulation):**
  $$I_{press} = \\int_{0}^{t_{nip}} P(t)\\, dt = \\frac{L_{linear}}{v_{machine}} \\quad [\\text{kPa}\\cdot\\text{s}]$$
  حيث يتيح اتساع نيب الشو برس ($w_{shoe} \\ge 100\\text{ مم}$) مضاعفة زمن بقاء الشيت تحت الضغط ($t_{nip} = w_{shoe} / v_{machine}$) دون الحاجة لرفع قمة الضغط ($P_{peak} < 6\\text{ MPa}$ مقارنة بـ $> 9\\text{ MPa}$ في الدرافيل التقليدية).
* **معادلة توفير طاقة التجفيف:**
  > **قاعدة طاقة التيشيو:** كل زيادة بنسبة **$1\\%$** في جفاف الشيت الخارج من قسم العصر توفر **$4\\%$** من استهلاك بخار اليانكي وغاز الهود!
  رفع الجفاف من $41\\%$ إلى $46\\%$ بواسطة عصارة الشو برس يوفر نحو **$20\\%$ من إجمالي فاتورة الطاقة الحرارية للمصنع**.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| انخفاض بلك الشيت بعد عصارة الشو برس | تحميل الشو برس بقمة ضغط حادة عند مدخل النيب بدلاً من التدرج الناعم. | إعادة برمجة ميل الشو برس شو برس هيدروليكياً (Tilt) لتأخير ذروة الضغط للمخرج. |
| ارتفاع حرارة حزام عصارة الشو برس عن $70^circ\\text{C}$ | نقص تزييت الزيت الهيدروليكي بين الشو الثابت (Stationary Shoe) والوجه الداخلي للحزام. | فحص فواني حقن زيت التزييت الهيدروليكي ومراجعة حرارة المبادل. |
| تفاوت رطوبة الشيت العرضية CD Moisture Flaw | اختلال ضغط بساتم التحميل الهيدروليكية الموزعة عبر عرض الشو برس. | ضبط بروفايل البساتم الهيدروليكية المستقلة بالـ DCS لتسوية الرطوبة. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-403-3",
    module_id: "mod-tis-403-2",
    title: "نمذجة إجهادات أسطوانات الصلب (SYD) وتشخيص وعلاج علامات الاهتزاز Chatter Marks (SOP-ENG-03)",
    title_en: "Steel Yankee (SYD) Thermal-Stress Modeling & Chatter Mark FFT Diagnostics",
    type: 'lesson',
    content: `### ميتالورجيا أسطوانات الصلب وعلاج اهتزازات Chatter Marks:

أحدثت أسطوانات اليانكي المصنوعة من الصلب الملحوم (Steel Yankee Dryers - SYD) تحولاً ثورياً في كفاءة تجفيف التيشيو وسلامة التشغيل مقارنة بأسطوانات زهر الحديد الكلاسيكية. ومع ذلك، تتطلب إدارة الإجهادات الحرارية والميكانيكية وحماية الأسطوانة من علامات الاهتزاز (Chatter Marks) رقابة هندسية صارمة.

![Steel vs Cast Iron Yankee Shell and Chatter Vibration Spectrum](/images/courses/tis-403-syd-chatter.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Steel Yankee Dryer advantages vs cast iron shell thickness Toscotec\`
> * \`Yankee chatter marks root cause analysis doctor blade vibration FFT\`
> * \`Finite Element Analysis thermal stress distribution steel Yankee shell TAPPI\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **مميزات أسطوانة اليانكي الصلب (SYD):**
  - جدار الأسطوانة أرق ($30 - 38\\text{ مم}$) مقارنة بزهر الحديد ($50 - 65\\text{ مم}$).
  - التوصيل الحراري أعلى بنسبة $30\\%$، وتتحمل ضغط بخار داخلي حتى **$10.0\\text{ bar}$** (مقابل $6.5\\text{ bar}$ للزهر)، مما يتيح سرعات إنتاج أعلى بأمان تام.
* **كارثة علامات الاهتزاز (Chatter Marks):**
  - هي تموجات وحزوز معدنية مجهرية تنحفر في سطح الأسطوانة نتيجة اهتزاز شفرة الكريب بترددات رنينية.
  - إذا ظهرت علامات الشاتر، تتدمر نعومة الورق وتتآكل الشفرات خلال دقائق، ولا يمكن علاجها إلا بإيقاف الماكينة وتجليخ أسطوانة اليانكي بالكامل في الموقع بتكلفة باهظة وخسارة أيام إنتاجية.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **نمذجة الإجهادات الحرارية لقشرة الأسطوانة (Thermal Stress Model):**
  $$\\sigma_{thermal} = \\frac{E \\cdot \\alpha_{thermal} \\cdot \\Delta T_{wall}}{2 \\cdot (1 - \\nu)}$$
  حيث $E$ معامل المرونة، $\\alpha_{thermal}$ معامل التمدد الحراري، $\\Delta T_{wall}$ فارق الحرارة عبر جدار المعدن، و $\\nu$ نسبة بواسون ($Poisson's\\ Ratio$).
* **التحليل الطيفي للاهتزازات وتشخيص الشاتر (FFT Vibration Analysis):**
  ترصد حساسات التسارع (Accelerometers) المثبتة على حامل الشفرة طيف الاهتزاز السريع:
  - *التردد الرنيني لشفرة الكريب:* يقع عادةً بين **$800 - 2500\\text{ Hz}$**.
  - إذا تجاوز سعة الاهتزاز الكلية $RMS > 2.5\\text{ mm/s}$ عند هذه الترددات، فهذا مؤشر إنذار فوري على بدء تكوّن علامات الشاتر الميكانيكية.

---

### خطوات التشغيل المعيارية (SOP-ENG-03):
1. راقب شاشة تحليل الاهتزازات الطيفية (FFT Spectrum) لحامل سكين الكريب لحظياً.
2. إذا أطلقت منظومة المراقبة إنذار رنين ترددي ($800 - 2500\\text{ Hz}$):
   - غير ضغط أنبوبة تحميل الشفرة فوراً بمقدار $\\pm 0.4\\text{ bar}$ لكسر التردد الرنيني.
   - ارفع مادة التليين Modifier في رشاش الكوتنج بـ $+25\\%$ لترطيب الفيلم.
   - افحص شوط وسرعة التذبذب الميكانيكي لحامل الشفرة؛ تأكد من حركته المتصلة ($15\\text{ مم}$ بمعدل $1.5\\text{ دورة/دقيقة}$).
3. في حال استمرار الاهتزاز، ارفع الشفرة فوراً واستبدلها بشفرة سيراميكية ذات زاوية شطف مختلفة.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| خطوط حزوز متموجة محفورة بعرض اليانكي | اهتزاز رنيني مستمر لشفرة الكريب Chatter Marks وتوقف تذبذب الحامل. | تفعيل بروتوكول كسر الرنين فوراً وتغيير الشفرة وجدولة فحص السطح. |
| تشوه حراري في حواف أسطوانة اليانكي | فارق حراري عنيف بين المنتصف والأطراف نتيجة تبريد مائي خاطئ. | فحص فواني ترطيب الأطراف وعزل عادم حرارة الهود عن حواف الأسطوانة. |
| تسريب بخار من رؤوس مسامير أغطية اليانكي | تمدد حراري متفاوت أو تجاوز عزم الربط التصميمي لمسامير الغطاء. | قياس عزم الربط الهيدروليكي للمسامير والتأكد من مطابقة جداول ASME. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-501-1",
    module_id: "mod-tis-501-1",
    title: "دورة البخار المشبع من الغلاية إلى مفصل اليانكي الدوار",
    title_en: "Saturated Steam Thermodynamic Cycle & Rotary Joint Mechanics",
    type: 'lesson',
    content: `### دورة البخار المشبع والمفصل الدوار لليانكي (Saturated Steam Cycle):

يمثل البخار المشبع شريان الطاقة الحرارية لماكينة التيشيو. يدخل البخار إلى الأسطوانة عبر مفصل دوار عالي الدقة (Rotary Steam Joint) يدور مع الأسطوانة بينما تظل خطوط الإمداد الخارجية ثابتة.

![Yankee Rotary Steam Joint and Siphon Assembly](/images/courses/tis-501-steam-joint.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Kadant Johnson rotary steam joint and stationary siphon drawing\`
> * \`Saturated steam latent heat of vaporization vs pressure table tissue\`
> * \`Carbon seal ring wear and leakage prevention Yankee steam joint\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **لماذا البخار المشبع وليس المحمص؟**
  - البخار المشبع الجاف يتخلى فوراً عن حرارته الكامنة الهائلة بمجرد ملامسة جدار الأسطوانة الداخلي، مع ثبات كامل في درجة الحرارة والضغط عبر عرض الأسطوانة.
  - البخار المحمص يتصرف كغاز عازل ضعيف التوصيل الحراري ويسبب بقعاً باردة.
* **المفصل الدوار (Rotary Joint):**
  - وصلة ميكانيكية دقيقة تحتوي على حلقات كربونية مانعة للتسريب (Carbon Rings) تُحكم عزل البخار الداخل عالي الضغط ($6 - 10\\text{ bar}$) وتسمح بخروج خليط الماء المتكاثف عبر المحور المركزي دون أي تسريب.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة الحرارة الكامنة ومعدل تدفق البخار (Steam Mass Flow):**
  $$\\dot{Q}_{steam} = \\dot{m}_{steam} \\cdot h_{fg} = \\dot{m}_{steam} \\cdot (h_{g} - h_{f}) \\quad [\\text{kW}]$$
  حيث تنخفض الحرارة الكامنة للتبخير ($h_{fg}$) مع زيادة الضغط (من $2066\\text{ kJ/kg}$ عند $6\\text{ bar}$ إلى $2015\\text{ kJ/kg}$ عند $10\\text{ bar}$).
* **عزم الاحتكاك وعمر حلقة الكربون للمفصل الدوار:**
  $$T_{friction} = \\mu_{carbon} \\cdot F_{spring} \\cdot R_{seal}$$
  تراقب مؤشرات تآكل حلقة الكربون (Wear Indicator Pin) دورياً؛ يجب ألا يتجاوز معدل تآكل الحلقة $1.0\\text{ مم}$ لكل 2000 ساعة تشغيلية لتفادي الانهيار المفاجئ.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| نفث بخار حي ومياه من فتحة المفصل الدوار | كسر أو تآكل كامل لحلقة الكربون المانعة للتسريب Carbon Ring. | التحويل لخط البخار الاحتياطي، وإيقاف الخط، وتغيير طقم الإحكام. |
| هبوط مفاجئ في حرارة سطح أسطوانة اليانكي | تكثف مبكر للبخار في خط الإمداد ودخول مياه رطبة للأسطوانة. | فحص وتصريف مصائد البخار السابقة لمدخل أسطوانة اليانكي. |
| صوت طحن واحتكاك داخل المفصل الدوار | تلف كراسي التحميل الداخلية للمفصل أو عدم محاذاة محور الدوران. | فحص المحاذاة الميكانيكية للوصلة والتأكد من تزييت كراسي التحميل. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-501-2",
    module_id: "mod-tis-501-1",
    title: "مضخات الفاكيوم ذات الحلقة السائلة ومياه التبريد",
    title_en: "Liquid Ring Vacuum Pumps: Seal Water Dynamics & Cavitation Prevention",
    type: 'lesson',
    content: `### مضخات الفاكيوم ذات الحلقة السائلة (Liquid Ring Vacuum Pumps):

تمثل مضخات الفاكيوم ذات الحلقة السائلة (مثل Nash و Gardner Denver) رئة ماكينة التيشيو. مهمتها توليد الضغوط السلبية العميقة اللازمة لشفط مئات الأطنان من المياه من أقمشة التشكيل وصناديق تفريغ اللبادات ودرفيل العصر والشفط (SPR).

![Liquid Ring Vacuum Pump Cutaway and Operation](/images/courses/tis-501-vacuum-pump.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Liquid ring vacuum pump operating principle cone port Nash diagram\`
> * \`Seal water temperature effect on vacuum pump capacity curve\`
> * \`Vacuum pump cavitation noise and impeller erosion paper mill\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف تولد المضخة الفراغ (الفاكيوم)؟**
  - يدور دافع ذو ريش منحنية داخل غلاف بيضاوي يحتوي على ماء؛ تشكل قوة الطرد المركزي حلقة مائية دوارة تلتصق بجدار الغلاف.
  - نتيجة اللامركزية، تتسع المسافات بين ريش الدافع فتسحب الهواء والماء من الماكينة، ثم تضيق فتطرد الخليط للخارج.
* **حرارة مياه التبريد (Seal Water):**
  - **القاعدة الذهبية:** يجب أن تكون مياه التبريد باردة دائماً ($< 30^circ	ext{C}$).
  - إذا ارتفعت حرارة الماء عن $45^circ	ext{C}$، يغلي الماء داخل الفراغ، فتفقد المضخة قدرتها على الشفط، وتحدث فرقعة وتآكل عنيف لريش الدافع (التكهف Cavitation).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **تصحيح سعة سحب مضخة الفاكيوم حسب حرارة ماء الإحكام (Capacity Correction Factor):**
  $$S_{act} = S_{std} \\cdot \\frac{P_{inlet} - P_{v}(T_{seal})}{P_{inlet} - P_{v}(15^\\circ\\text{C})}$$
  حيث $P_v(T_{seal})$ هو ضغط بخار الماء المشبع عند درجة حرارة ماء الإحكام الفعلي.
  - إذا كان الفاكيوم المطلوبة $-60\\text{ kPa}$ وارتفعت حرارة الماء إلى $45^\\circ\\text{C}$، تفقد المضخة أكثر من **$35\\%$ من سعتها التصميمية** نتيجة تصاعد بخار الماء الداخلي.
* **قدرة المحرك واستهلاك الطاقة الهيدروليكية:**
  $$P_{brake} = \\frac{Q_{air} \\cdot \\Delta P}{\\eta_{pump}} \\quad [\\text{kW}]$$

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| صوت فرقعة وحصى داخل مضخة الفاكيوم | ظاهرة التكهف Cavitation نتيجة ارتفاع حرارة ماء الإحكام عن $40^circ\\text{C}$. | فتح صمام مياه التبريد العذبة الباردة فوراً لتبريد الحلقة السائلة. |
| هبوط عام في مستوى الفاكيوم بكامل الماكينة | انخفاض منسوب أو ضغط خط تغذية مياه الإحكام الرئيسي للمضخات. | فحص طلمبة مياه الإحكام وتنظيف فلاتر الخط السلكية. |
| ارتفاع حرارة كراسي تحميل المضخة عن $80^circ\\text{C}$ | نقص شحم التزييت أو عدم محاذاة الكبلنج بين الموتور والمضخة. | تشحيم كراسي التحميل وفحص الاهتزازات واستقامة المحاذاة. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-501-3",
    module_id: "mod-tis-501-2",
    title: "فحص مصائد البخار (Steam Traps) والمفصل الدوار (SOP-UTIL-01)",
    title_en: "Steam Trap Inspection Protocols, Thermodynamic Operation & Preventive Checks",
    type: 'lesson',
    content: `### مصائد البخار والتفتيش الوقائي للمرافق (Steam Traps & Maintenance):

مصائد البخار (Steam Traps) هي صمامات آلية ذكية مهمتها تصريف المياه المتكاثفة والغازات غير القابلة للتكثيف من خطوط الأنابيب دون السماح للبخار الحي عالي الطاقة بالهروب. عطل مصيدة بخار واحدة قد يكلف المصنع عشرات الآلاف من الدولارات كوقود مهدور، أو يسبب ظاهرة المطرقة المائية المدمرة (Water Hammer).

![Steam Trap Thermodynamic vs Ball Float Mechanism](/images/courses/tis-501-steam-traps.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Steam trap testing ultrasonic detector infrared thermometer procedure\`
> * \`Ball float steam trap vs thermodynamic disc trap paper mill\`
> * \`Water hammer prevention in steam and condensate return systems\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **أنواع مصائد البخار في مصنع التيشيو:**
  1. *المصيدة الميكانيكية ذات العوامة (Ball Float Trap):* تصرف التكاثف باستمرار وفور تكونه؛ ممتازة للمبادلات الحرارية وأجهزة تسخين الهواء.
  2. *المصيدة الديناميكية الحرارية (Thermodynamic Disc Trap):* قوية ومدمجة؛ تعمل بنظام الفتح والغلق المتقطع لخطوط التوزيع وتجفيف المواسير.
* **كيف نكتشف المصيدة التالفة؟**
  - *تالفة في وضع الفتح (Blown Open):* تنفث بخاراً حياً مستمراً داخل خط الراجع، وتصدر صوت صفير مستمر، وترتفع حرارة ماسورة الراجع لتساوي حرارة ماسورة الدخول (هدر طاقة فادح).
  - *تالفة في وضع الغلق (Blocked Closed):* ماسورة الراجع باردة تماماً، وتتراكم المياه داخل الخط مسببة خبطاً وصوت مطرقة مائية (Water Hammer).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **حساب معدل فقد الطاقة للمصائد التالفة (Napier’s Steam Loss Equation):**
  $$\\dot{m}_{loss} = 24.24 \\cdot P_{abs} \\cdot d_{orifice}^2 \\quad [\\text{kg/h}]$$
  حيث $P_{abs}$ الضغط المطلق بالبار، و $d_{orifice}$ قطر فوهة المصيدة بالملليمتر.
  - تسريب مصيدة واحدة بقطر فوهة $6\\text{ مم}$ عند ضغط $8\\text{ bar}$ يهدر نحو **$85\\text{ كجم بخار في الساعة}$** (ما يعادل خسارة أكثر من $25000\\text{ دولار}$ سنوياً لمصيدة واحدة)!
* **الفحص المزدوج بالموجات فوق الصوتية والحرارة:**
  تدمج أجهزة الفحص الحديثة قياس الحرارة بالأشعة تحت الحمراء ($IR$) مع فحص الترددات الصوتية فوق الصوتية ($38 - 40\\text{ kHz}$) لتحديد ما إذا كان السريان ماءً متكاثفاً طبيعياً أو بخاراً حياً مهدوراً.

---

### خطوات التشغيل المعيارية (SOP-UTIL-01):
1. تفقد المفصل الدوار لليانكي؛ افحص مؤشر تآكل حلقة الكربون الميكانيكية وتأكد من عدم وجود أي تسريب خارجي.
2. استخدم جهاز الفحص بالموجات فوق الصوتية ومسدس الحرارة لفحص مصائد البخار التابعة لليانكي والهود.
3. قس حرارة ماسورة الدخول وحرارة ماسورة الخروج للمصيدة:
   - يجب أن يكون هناك فارق حراري واضح ($\\Delta T = 15 - 30^\\circ\\text{C}$).
   - إذا تساوت الحرارتان وصدر صوت صفير مستمر، فالمصيدة تسرب بخاراً حياً مفتوحاً.
4. سجل المصائد التالفة فورياً على نظام الصيانة وافتح محبس خط الباي-باس مؤقتاً لعزل وتغيير المصيدة.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| صوت خبط عنيف ومطرقة مائية Water Hammer | مصيدة البخار عالقة في وضع الغلق مما راكم مياهاً باردة داخل خط البخار. | تصريف المياه يدوياً عبر محبس التهوية وتغيير حشوة المصيدة. |
| ارتفاع ضغط خط راجع التكاثف فجأة | مصائد بخار رئيسية تالفة في وضع الفتح تنفث بخاراً حياً داخل الراجع. | عزل المصيدة المسربة فورياً وتوجيه البخار لمكثف الطوارئ. |
| انخفاض كفاءة تسخين هواء مبادل الهود | تراكم غازات غير قابلة للتكثيف (هواء) داخل حجرة المبادل لتعطل بلف التهوية. | تنفيس حجرة المبادل يدوياً وتغيير بلف التنفيس الآلي Air Vent. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-502-1",
    module_id: "mod-tis-502-1",
    title: "رشاشات الغسيل عالي الضغط المتذبذبة ومزامنة الشوط (SOP-SHOWER-02)",
    title_en: "High-Pressure Oscillating Showers, 15° Offset & Stroke Synchronization",
    type: 'lesson',
    content: `### رشاشات الغسيل عالي الضغط وهندسة التذبذب (High-Pressure Showers):

لبادات العصر (Press Felts) تعمل كإسفنجة ميكانيكية مجهرية تنضغط وتنبسط ملايين المرات يومياً. للحفاظ على مسامها مفتوحة ومنع انسدادها بالألياف والكيماويات، تعتمد الماكينة على رشاشات الغسيل الإبرية عالية الضغط (HP Oscillating Showers) التي تعمل بنظام تذبذب متزامن في غاية الدقة.

![HP Oscillating Needle Shower Overlap and Geometry](/images/courses/tis-502-shower-nozzle.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Kadant oscillating high pressure needle shower stroke overlap calculation\`
> * \`Press felt compaction and high pressure cleaning needle jet damage\`
> * \`Linear electromechanical oscillator speed synchronization paper machine\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **فواني الإبرة النفاثة (Needle Jet Nozzles):**
  - فواني مصنوعة من الياقوت أو السيراميك الصلب تطلق شعاع ماء نفاث بقطر $0.8 - 1.0\\text{ مم}$ وبضغط يتراوح بين **$25 - 35\\text{ bar}$**.
  - يخترق هذا الشعاع عمق اللباد ليخلخل الأوساخ العالقة ويطردها نحو صناديق الفاكيوم (Uhle Boxes).
* **خطر توقف التذبذب (The Oscillation Hazard):**
  - **تحذير حاسم:** إذا توقفت حركة الرشاش الترددية لعدة دقائق واستمر ضخ الماء العالي الضغط، ستقوم نفاثات الماء بقطع وقص خيوط اللباد كالمشرط، مما يدمر لباداً ثمنه عشرات الآلاف من الدولارات في غضون ربع ساعة!

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة مزامنة سرعة التذبذب الميكانيكي ($v_{osc}$):**
  لضمان تغطية سطح اللباد بنسبة $100\\%$ دون ترك خطوط غير مغسولة ودون تكرار الاصطدام في نفس النقطة:
  $$v_{osc} = \\frac{d_{nozzle} \\cdot v_{felt}}{\\pi \\cdot D_{felt\\_loop}} \\quad [\\text{mm/min}]$$
  حيث $d_{nozzle}$ قطر فوهة الفونية، $v_{felt}$ سرعة دوران اللباد، و $D_{felt\\_loop}$ الطول المحيطي لحلقة اللباد بالكامل.
* **شوط التذبذب والمسافة بين الفواني (Stroke vs Pitch):**
  يجب أن يكون شوط التذبذب ($S$) مساوياً بالضبط للمسافة بين الفواني ($P_{nozzle}$):
  $$S = P_{nozzle} = 150\\text{ mm}$$
  مع ضبط زاوية ميلان الفواني عند **$15^circ$ Offset** لتفادي الصدم الرأسي العنيف وحماية الألياف السطحية للباد (Batt Fibers) من التنسيل.

---

### خطوات التشغيل المعيارية (SOP-SHOWER-02):
1. تأكد من أن ضغط طلمبة المياه عالية الضغط مستقر عند $28 - 32\\text{ bar}$.
2. افحص ذراع المحرك الترددي الكهروميكانيكي (Oscillator Drive)؛ تأكد من اكتمال الشوط حتى $150\\text{ مم}$.
3. اختبر إنترلوك الأمان الميداني:
   - افصل حركة ماتور التذبذب تجريبياً؛ يجب أن يغلق محبس المياه عالي الضغط أوتوماتيكياً خلال **$5\\text{ ثوانٍ}$**.
4. افحص الفواني بصرياً؛ تأكد من عدم انسداد أي فوهة واستقامة خيوط المياه الإبرية.
5. راقب فراغ صناديق تفريغ اللباد Uhle Boxes للتأكد من نزح كامل المياه المحقونة.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| خطوط حزوز وقص دائرية محفورة باللباد | توقف محرك التذبذب عن الحركة مع استمرار تشغيل طلمبة الضغط العالي. | إيقاف طلمبة المياه فوراً وفحص الإنترلوك الكهربائي لماتور التذبذب. |
| انسداد اللباد وامتلاؤه بالأوساخ في مناطق محددة | انسداد فواني محددة بالرشاش نتيجة عطل في الفلتر الذاتي الداخلي. | تشغيل فرشة التنظيف الميكانيكية للرشاش وتسليك الفواني يدوياً. |
| ضعف اختراق المياه لعمق اللباد | هبوط ضغط طلمبة الغسيل عن $20\\text{ bar}$ نتيجة تسريب أو تآكل البساتم. | صيانة طلمبة الضغط العالي وضبط بلف تنظيم الضغط Pressure Relief. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-502-2",
    module_id: "mod-tis-502-1",
    title: "برنرات غاز الهود ونظم توجيه واستقرار الشيت",
    title_en: "Yankee Hood Gas Burners: Stoichiometry & Web Stabilization Auto-Guides",
    type: 'lesson',
    content: `### برنرات احتراق الغاز الطبيعي ونظم استقرار الشيت:

يمثل هود أسطوانة اليانكي محرقة غازية ضخمة تستهلك ملايين الأمتار المكعبة من الغاز الطبيعي لتوفير الهواء الساخن ($450 - 500^circ	ext{C}$). ضبط كفاءة احتراق البرنرات وتوجيه الأقمشة هو الأساس لتحقيق أعلى كفاءة تجفيف بأقل تكلفة للوقود وبأعلى درجات السلامة من الحرائق.

![Maxon Combustion Gas Burner and Air Ratio System](/images/courses/tis-502-gas-burner.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Maxon Eclipse gas burner nozzle combustion chamber tissue hood diagram\`
> * \`Air to gas ratio control stoichiometry NFPA 86 industrial ovens\`
> * \`Ultraviolet UV flame detector scanner alignment tissue burner\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف يعمل برنر هود التيشيو؟**
  - يخلط البرنر الغاز الطبيعي بهواء الاحتراق ويدفعه عبر موقد حلقي يولد لهباً متصلاً ومستقراً داخل مجرى الهواء المدفوع بمراوح التدوير الضخمة.
* **شروط الأمان القصوى للبرنرات:**
  1. *التطهير المسبق (Purge Cycle):* قبل إشعال الشرارة، يجب تشغيل مراوح الهواء النقي بكامل طاقتها لمدة 5 دقائق لكنس أي بقايا غاز قد تسبب انفجاراً داخل الهود.
  2. *حساس اللهب (UV Flame Scanner):* عين إلكترونية ترى لهب البرنر بالأشعة فوق البنفسجية؛ إذا انطفأ اللهب لأكثر من ثانية واحدة، يغلق محبس الغاز الرئيسي أوتوماتيكياً.
* **نصف الويت مقابل نصف الدراي:** يتم التحكم في برنر الويت هود (Wet Hood) بطلب حراري أعلى من برنر الدراي هود (Dry Hood) لتبخير الماء السائل الداخل مع الورقة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة الاحتراق التام للميثان وضبط فائض الهواء (Excess Air Ratio - $lambda$):**
  $$	ext{CH}_4 + 2,(	ext{O}_2 + 3.76,	ext{N}_2) longrightarrow 	ext{CO}_2 + 2,	ext{H}_2	ext{O} + 7.52,	ext{N}_2 + Delta H_c$$
  حيث $Delta H_c approx 890	ext{ kJ/mol}$.
  - يجب ضبط نسبة فائض الهواء عند:
  $$lambda = rac{	ext{Air/Fuel}_{actual}}{	ext{Air/Fuel}_{stoich}} = 1.15 - 1.25$$
  - إذا قلت $lambda$ عن $1.10$: يحدث احتراق غير تام ويتصاعد أول أكسيد الكربون السام $CO > 100	ext{ ppm}$ ويهدر الوقود.
  - إذا زادت $lambda$ عن $1.35$: يتم تسخين هواء بارد إضافي بلا داعٍ، مما يرفع فاتورة الغاز بنسبة تفوق $8%$.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| فصل البرنر على إنذار Flame Failure فجأة | اتساخ عدسة حساس الأشعة فوق البنفسجية UV Scanner بالسخام. | تنظيف عدسة الحساس بقطعة قماش ناعمة ومراجعة استقامة زاوية الرؤية. |
| تصاعد دخان أسود ورائحة غاز غير محترق | نقص هواء الاحتراق أو تلف سيرفو صمام الغاز التناسبي Gas Ratio Valve. | إعادة معايرة محرك السيرفو وضبط نسبة الهواء والغاز على الـ DCS. |
| إنذار حرارة مرتفعة جداً في قنوات الهود | عطل في ثيرموكابل قياس الحرارة الداخلي أو توقف مروحة التدوير. | فحص قراءة حساس الحرارة والتأكد الفوري من عمل مروحة التدوير الرئيسية. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-502-3",
    module_id: "mod-tis-502-2",
    title: "نظم توجيه الأقمشة الهوائية واستقرار الشيت بالهود (Auto-Guides & Aerodynamics)",
    title_en: "Pneumatic Fabric Auto-Guiding & Aerodynamic Sheet Flutter Control",
    type: 'lesson',
    content: `### ديناميكا استقرار الشيت وتوجيه الأقمشة في بيئة الهود فائقة السرعة

مع اندفاع هواء التجفيف بسرعات تصل إلى $150\\text{ m/s}$ وحرارة $500^\\circ\\text{C}$ حول أسطوانة اليانكي الدوارة بسرعة $2000\\text{ m/min}$، تتعرض الورقة وقماش التوصيل لقوى ديناميكية هوائية جبارة (Aerodynamic Lift & Drag) قادرة على إحداث رفرفة عنيفة (Sheet Flutter) تؤدي إلى تقطع الورقة الفوري أو انحراف القماش وسحقه.

---

### الطبقة (أ) - للمشغلين وفنيي الوردية (Shop-Floor SOPs)

#### 1. جهاز التوجيه الهوائي الآلي (Pneumatic Auto-Guide Palm Sensor)
- يستشعر كف التوجيه (Guide Palm) أو الحساس البصري/فوق الصوتي موضع حافة القماش بشكل مستمر.
- إذا انحرف القماش نحو جهة المحرك (Drive Side)، يتحرك بستم التوجيه النيوماتيكي لتغيير زاوية درفيل التوجيه (Guide Roll) ليعيد القماش فوراً نحو المنتصف.
- **إجراء السلامة اليومي:** فحص كف التوجيه للتأكد من خلوه من تراكم الألياف العالقة التي قد تجعله يعطي إشارة خاطئة تتسبب في خروج القماش عن مساره واصطدامه بهيكل الماكينة.

#### 2. علامات عدم استقرار الشيت داخل الهود:
- أصوات فرقعة هوائية مكتومة صادرة من منطقة جيب الهود (Hood Pocket).
- تجاعيد طولية أو قطرية متفرقة على سطح الورقة الملفوفة.
- تراكم هادر ورقي متفحم داخل قنوات عادم الهود مما ينذر بخطر نشوب حريق.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor)

#### 1. استقرار الضغط السكوني داخل الهود (Static Pressure Balance & Air Seal)
يجب أن يعمل الهود دائماً تحت ضغط سالب طفيف (Slight Negative Pressure) لمنع تسرب الهواء الحارق والغازات إلى صالة الإنتاج:
$$\\Delta P_{hood} = P_{inside} - P_{hall} \\approx -10 \\text{ to } -25 \\text{ Pa}$$
إذا انخفض الضغط بشدة (تخلخل مفرط $\\Delta P < -50\\text{ Pa}$)، يحدث سحب مفرط لهواء الصالة البارد عبر الستائر الهوائية (Air Knives)، مما يخفض كفاءة التجفيف ويرفع استهلاك الطاقة.

#### 2. ميكانيكا درفيل التوجيه التناسبي (Proportional Guide Roll Kinematics)
تعتمد حركة تصحيح القماش على زاوية انحراف محور الدرفيل $\\theta$:
$$\\frac{dy}{dt} = V_{fabric} \\cdot \\sin(\\theta) \\approx V_{fabric} \\cdot \\theta$$
حيث $y$ هي الإزاحة العرضية للقماش، و$V_{fabric}$ سرعة حركة القماش. يجب أن تستجيب حلقة التحكم النيوماتيكية بزمن تأخير $\\tau < 0.8\\text{ s}$ لضمان عدم حدوث تذبذب رنيني في حركة القماش (Fabric Weaving Cycle).`,
    estimated_minutes: 30,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-503-1",
    module_id: "mod-tis-503-1",
    title: "الثيرموكمبريسور، فوهات لافال الأسرع من الصوت وإبرة التحكم التناسبية",
    title_en: "Thermocompressor Dynamics, Laval Supersonic Nozzle & Spindle Modulation",
    type: 'lesson',
    content: `### الثيرموكمبريسور وديناميكا إعادة ضغط البخار (Thermocompressor Dynamics):

يمثل الثيرموكمبريسور (Thermocompressor) قمة الهندسة الديناميكية الحرارية في إدارة بخار أسطوانة اليانكي. يعمل كمضخة حرارية نفاثة بدون أي أجزاء دوارة؛ حيث يستغل طاقة اندفاع بخار المحطة عالي الضغط لسحب وضغط بخار البلوثرو العادم وإعادته إلى اليانكي بدلاً من إهداره.

![Thermocompressor Cross Section and Velocity Profile](/images/courses/tis-503-thermocompressor.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Spirax Sarco thermocompressor variable orifice nozzle actuator diagram\`
> * \`Supersonic steam expansion convergent divergent Laval nozzle Mach 2\`
> * \`Thermocompressor entrainment ratio and compression ratio calculation paper machine\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **كيف يعمل الثيرموكمبريسور؟**
  - يدخل بخار عالي الضغط من الغلاية ($14 - 16\\text{ bar}$) ويندفع عبر فوهة ضيقة بسرعة تتجاوز ضعف سرعة الصوت ($Mach > 2$).
  - هذا الاندفاع الخارق يولد منطقة خلخلة وسحب فراغي تجر معها بخار البلوثرو منخفض الضغط ($5 - 6\\text{ bar}$) القادم من فاصل التكاثف.
  - يختلط التياران داخل ممر متسع (Diffuser)، فتهدأ السرعة ويتحول الاندفاع إلى ضغط متوسط ($8 - 9.5\\text{ bar}$) يكفي لتغذية أسطوانة اليانكي مجدداً.
* **إبرة التحكم (The Spindle):**
  - إبرة مخروطية صلبة تتحرك بمحرك دقيق داخل الفوهة؛ لتوسيع أو تضييق فتحة خروج البخار مع تغير سرعة الماكينة لضمان استمرار السحب بكفاءة ثابتة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **نسبة السحب ونسبة الانضغاط (Entrainment & Compression Ratios):**
  $$\\text{Entrainment Ratio } (R_a) = \\frac{\\dot{m}_{suction}}{\\dot{m}_{motive}} \\approx 0.35 - 0.55$$
  $$\\text{Compression Ratio } (C_r) = \\frac{P_{discharge}}{P_{suction}} \\approx 1.18 - 1.35$$
  إذا تجاوزت نسبة الانضغاط الحد التصميمي ($C_r > 1.45$)، تحدث صدمة ارتدادية (Back-shock) وتدخل الفوهة في وضع الاختناق العكسي (Choking)، فتتوقف عن سحب بخار الفاصل.
* **التحكم المتسلسل بين الإبرة وصمام التعويض (Split-Range Control):**
  - من $0\\%$ إلى $100\\%$ من طلب البخار: تتحرك إبرة الثيرموكمبريسور (Spindle) حصرياً لتعظيم استرجاع الطاقة.
  - إذا طلبت الماكينة ضغطاً إضافياً ولم تكفِ الإبرة ($100\\%$ مفتوحة)، يفتح صمام التعويض المباشر (Make-Up Valve) بالتوازي لتغذية الفارق من الغلاية مباشرة.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| توقف سحب بخار الفاصل تماماً | انخفاض ضغط بخار الدفع الرئيسي من الغلايات عن $12\\text{ bar}$. | مراجعة ضغط المحطة الرئيسي والتأكد من فتح محبس البخار بالكامل. |
| تذبذب عنيف في ضغط خروج البخار | تآكل ميكانيكي أو اعوجاج في إبرة التحكم المخروطية Spindle Needle. | جدولة فك وفحص الإبرة والفوهة ومعايرة شوط السيرفو 0-100%. |
| تصريف بخار مفرط نحو المكثف السطحي | فتح غير مبرر لصمام التعويض المباشر Make-Up Valve بالتوازي. | إعادة ضبط بارامترات التحكم المتسلسل Split-Range وإغلاق الصمام. |`,
    estimated_minutes: 25,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-503-2",
    module_id: "mod-tis-503-1",
    title: "هيدروديناميكا حلقة التكاثف (Rimming)، فرق الضغط dP وعلاج غرق اليانكي (SOP-ENG-05)",
    title_en: "Condensate Rimming Layer, Differential Pressure (dP) & Anti-Flooding Protocols",
    type: 'lesson',
    content: `### فرق الضغط وتفريغ التكاثف وغرق اليانكي (dP Control & Flooding):

داخل أسطوانة اليانكي الدوارة، يتحول البخار بعد نقل حرارته إلى أطنان من المياه المتكاثفة. هذه المياه تشكل عازلاً حرارياً خطيراً يقلل انتقال الحرارة بـ 50 ضعفاً مقارنة بالصلب. إزالة هذا التكاثف تعتمد بالكامل على استقرار فرق الضغط الديناميكي (Differential Pressure - dP).

![Yankee Condensate Rimming and Siphon Evacuation dP](/images/courses/tis-503-rimming-dp.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`Yankee dryer differential pressure control blow-through steam valve\`
> * \`Stationary siphon clearance internal grooves rimming condensate film\`
> * \`Yankee flooding symptoms high drive load sheet break troubleshooting\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **ما هو فرق الضغط (dP)؟**
  هو الفارق بين ضغط البخار داخل اليانكي وضغط البخار في خزان فاصل التكاثف:
  $$\\Delta P = P_{Yankee} - P_{Separator}$$
* **لماذا نحتاج إلى dP؟**
  على سرعات الماكينة العالية، تلتصق المياه بجدار الأسطوانة بقوة طرد مركزي تمنعها من السقوط (Rimming Film). فرق الضغط هو القوة الوحيدة التي تشفط الماء عبر أنابيب السايفون لرفعه لخارج الأسطوانة.
* **كارثة غرق اليانكي (Flooding):**
  إذا هبط الـ dP، يتوقف تفريغ الماء فوراً، فتتراكم أطنان من المياه داخل الأسطوانة خلال 3 دقائق!
  - *العلامات:* هبوط حاد في حرارة سطح اليانكي، تقطع الورق، وارتفاع هائل ومفاجئ في أمبير محرك إدارة اليانكي (Drive Overload).

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة فرق الضغط الأدنى لتفريغ التكاثف (Minimum $\\Delta P$ Derivation):**
  $$\\Delta P_{req} \\ge \\rho_w \\cdot \\omega^2 \\cdot R \\cdot h_{siphon} + \\rho_w \\cdot g \\cdot (2R) + \\Delta P_{friction}$$
  حيث تتناسب القوة المقاومة طردياً مع **مربع سرعة الماكينة ($\\omega^2$)**.
  - عند $1000\\text{ م/د}$: يلزم $\\Delta P \\approx 0.45\\text{ bar}$.
  - عند $1600\\text{ م/د}$: يلزم $\\Delta P \\approx 0.85\\text{ bar}$.
  - عند $2200\\text{ م/د}$: يلزم $\\Delta P \\ge 1.30\\text{ bar}$.
* **وظيفة بخار البلوثرو (Blow-Through Steam Fraction):**
  دخول $15 - 20\\%$ من البخار مع الماء يحوله إلى رذاذ ثنائي الطور خفيف الكثافة (Two-Phase Flow $\\rho \\approx 30\\text{ kg/m}^3$)، مما يسهل رفعه عبر فوهات السايفونات دون حدوث انسداد هيدروليكي (Steam Locking).

---

### خطوات التشغيل المعيارية (SOP-ENG-05):
1. راقب شاشة الـ DCS لليانكي: تأكد من أن الـ $\\Delta P$ الفعلي يطابق المنحنى المحدد لسرعة الماكينة الحالية.
2. في حال انخفاض الـ dP وظهور علامات غرق اليانكي (ارتفاع أمبير المحرك):
   - ارفع الـ dP المستهدف يدوياً فوراً بمقدار $+0.4\\text{ bar}$.
   - افتح بلف البلوثرو بنسبة إضافية $+20\\%$ لتسريع سرعة الكنس الرذاذي.
   - خفض سرعة الماكينة بمقدار $250\\text{ م/د}$ فورياً لتخفيف قوى الطرد المركزي المعاكسة.
3. راقب منسوب خزان فاصل التكاثف؛ تأكد من عمل طلمبات سحب التكاثف بكامل طاقتها لتفريغ المياه الزائدة.
4. بمجرد عودة أمبير المحرك لمستواه الطبيعي واستقرار الحرارة، أعد النظام للوضع التلقائي.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| فصل محرك اليانكي على الـ Overload | غرق اليانكي التام بالماء وتراكم 3 أطنان مياه بقاع الأسطوانة. | تطبيق بروتوكول الإنقاذ SOP-ENG-05 فوراً وفتح بلف البلوثرو. |
| خطوط حرارية باردة تمتد بعرض اليانكي | انسداد أو انكسار في بعض فوهات السايفونات الداخلية (Broken Siphon). | إجراء مسح حراري بالأشعة تحت الحمراء لتحديد السايفون وجدولة تغييره. |
| تذبذب الـ dP بين الارتفاع والانخفاض | عطل في بلف التحكم في منسوب خزان الفاصل Level Control Valve. | معايرة حساس المنسوب وصيانة بلف تصريف التكاثف التناسبي. |`,
    estimated_minutes: 25,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-503-3",
    module_id: "mod-tis-503-2",
    title: "أيروديناميكا هود الهواء الساخن 500°م ووحدة تعويم الألياف DAF",
    title_en: "High-Velocity Air Hood 500°C Aerodynamics & DAF Fiber Recovery Systems",
    type: 'lesson',
    content: `### هود الهواء الساخن ووحدة تعويم الألياف المذابة (Hood & DAF Systems):

يمثل هود الهواء فائق السرعة ووحدة تعويم الألياف (Dissolved Air Flotation - DAF) الركيزتين البيئية والحرارية لماكينة التيشيو. يوفر الهود أكثر من $60\\%$ من طاقة التجفيف الصدمي، بينما تسترجع وحدة الـ DAF أكثر من $98\\%$ من الألياف المفقودة من مياه الصرف لتعيدها نظيفة إلى خط الإنتاج.

![Yankee High Velocity Hood Air Impingement and DAF Float System](/images/courses/tis-503-hood-daf.svg)

> **مراجع ومصطلحات البحث الصناعي الموصى بها (OEM Search Queries):**
> * \`High velocity Yankee hood impingement nozzle velocity 150 m per s\`
> * \`Dissolved Air Flotation DAF circular clarifier fiber recovery cross section\`
> * \`Yankee hood heat recovery tower air to water heat exchanger efficiency\`

---

### الطبقة (أ) - دليل المشغل وفني الوردية (Operator Practical Layer):
* **هود الهواء الساخن فائق السرعة:**
  - يطلق آلاف النفاثات الهوائية بسرعة إعصارية تصل إلى **$150\\text{ م/ث}$** وبحرارة تصل إلى **$500^\\circ\\text{C}$**.
  - يصطدم هذا الهواء العنيف بالشيت فيكسر الطبقة العازلة من بخار الماء الراكدة فوق سطح الورقة، مسبباً تبخيراً لحظياً خارقاً.
* **وحدة تعويم الألياف (DAF):**
  - خزان مائي دائري يُحقن بمياه مشبعة بفقاعات هواء مجهرية بحجم الميكرون.
  - تلتصق الفقاعات بالألياف العائمة وتدفعها لتطفو على السطح كرغوة سميكة، حيث تكشطها مساحات آلية وتوجهها فوراً إلى أحواض كسر الماكينة.

---

### الطبقة (ب) - العمق الهندسي والنمذجة الرياضية (Engineering Rigor):
* **معادلة انتقال الحرارة بالحمل الصدمي للهود (Impingement Heat Flux):**
  $$q_{hood} = h_{conv} \\cdot (T_{air} - T_{sheet}) \\quad [\\text{kW/m}^2]$$
  حيث يصل معامل انتقال الحرارة بالحمل $h_{conv}$ إلى ما بين **$350 - 450\\text{ W/m}^2\\cdot\\text{K}$** بفضل سرعة النفاثات العالية ($145 - 165\\text{ m/s}$) وخلوص الفواني الحرج ($H/d \\approx 4 - 6$).
* **ديناميكا تعويم الألياف في وحدة الـ DAF:**
  تعتمد سرعة صعود جسيمات الألياف والفقاعات على قانون ستوكس المعدل:
  $$v_{rise} = \\frac{g \\cdot (\\rho_w - \\rho_{agg}) \\cdot d_{agg}^2}{18 \\cdot \\mu}$$
  يحافظ ضغط الإشباع الهوائي على **$5.5 - 6.5\\text{ bar}$** لضمان توليد فقاعات دقيقة بحجم **$20 - 50\\ \\mu\\text{m}$** لتحقيق كفاءة استرجاع ألياف تفوق **$98.5\\%$**.

---

### مصفوفة استكشاف الأعطال وحلها الميداني (Troubleshooting Matrix):

| العَرَض الميداني المرصود | السبب الجذري المحتمل | الإجراء الهندسي الفوري للحل |
| :--- | :--- | :--- |
| رائحة حريق ودخان متصاعد من داخل الهود | تراكم غبار السليلوز Lint على جدران صناديق الفواني ووصوله للحرارة. | إيقاف الماكينة وتبريد الهود وإجراء تنظيف شامل للغبار المتراكم. |
| عكارة مياه صرف الماكينة وفقدان ألياف عالي | انسداد فواني تشتيت الهواء بوحدة الـ DAF أو نقص بوليمر التخثير. | تسليك فواني الإشباع وزيادة جرعة البوليمر التخثيري المندف بمقدار $+10\\%$. |
| عدم انتظام رطوبة الشيت العرضية CD Moisture | انسداد موضعي لبعض فواني نفث الهواء الساخن بكابينة الهود. | تنظيف فواني الهود بفرشاة معدنية وإعادة ضبط خوانق توزيع الهواء Dampers. |`,
    estimated_minutes: 25,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-601-1",
    module_id: "mod-tis-601-1",
    title: "مكونات الريوايندر ومسار الورقة ومفاهيم السلامة الحاسمة",
    title_en: "Rewinder Architecture, Web Path & Critical Machine Safety",
    type: 'lesson',
    content: `## مدخل إلى ماكينات إعادة اللف والتقطيع (Slitter-Rewinder)

ماكينة الريوايندر هي المحطة الأخيرة والحرجة في قسم صناعة الورق (Paper Mill) قبل خروج بكرات التيسو إلى مصانع التحويل (Converting Plants). مهمتها تحويل بكرة الماكينة الأم (Parent Roll / Jumbo Roll) التي قد تزن أطنان وتصل عروضها إلى أكثر من 3-5 أمتار وتعمل بكثافة وضغط غير متجانس، إلى بكرات نهائية أصغر محكمة اللف (Finished / Shipping Reels) مقسمة بعروض دقيقة وتوتر متوازن.

---

### Layer A: للمشغلين وفنيي الوردية (Shop-Floor SOPs & Safety)

#### 1. مسار الورقة (Web Path Walkdown)
\`\`\`
[Jumbo Roll Unwind Stand]
           │
           ▼
    [Load Cells / Dancer Roll] (قياس وتثبيت الشد)
           │
           ▼
    [Spreader / Bow Roll] (فرد الورقة ومنع الكرمشة)
           │
           ▼
    [Slitting Station (Top & Bottom Knives)] (التقطيع العرضي والتشذيب)
           │
           ▼
    [Rider Roll / Nip Area] (منطقة الضغط والتحكم بالصلابة)
           │
           ▼
[Winding Drums / Core Shafts] (البكرات الملتفة النهائية)
\`\`\`

#### 2. بروتوكول السلامة الصارم (Safety & Zero Energy State)
- **منطقة سكاكين التقطيع (Slitting Nip Zone):** أخطر منطقة ميكانيكية. يُمنع منعاً باتاً الاقتراب أو لمس الورقة أثناء الدوران أو تعديل السكاكين يدوياً أثناء الحركة.
- **التشابك وسحب الأيدي (Inrunning Nips):** بين درام اللف ودرفيل الركوب (Rider Roll). جميع الحواجز الضوئية وحساسات الليزر (Light Curtains & Interlocks) يجب أن تكون مفعلة بنسبة 100%.
- **استخدام أدوات التغذية الآمنة:** عند تمرير الورقة في البداية (Threading)، يتم ضبط السرعة على وضع الزحف التململي (Crawl Speed < 15 m/min) واستخدام قضبان أو هواء مضغوط بدلاً من اليدين.

\`\`\`
[SOP-REW-01: فحص واستلام وردية الريوايندر]
1. التحقق من سلامة حساسات الطوارئ وحبال الإيقاف (Pull-wire E-Stops) على جانبي الماكينة.
2. فحص محاذاة خراطيم شفط الهادر الجانبي (Trim Suction Ducts) للتأكد من عدم انسدادها بالهباء (Dust).
3. التأكد من سلامة كراسي تحميل عمود القلب الكرتوني (Core Shaft Latches) وإحكام تثبيتها.
4. ارتداء مهمات الوقاية الشخصية الملزمة: واقي سمع، قفازات مقاومة للقطع (فقط أثناء استبدال السكاكين وهي متوقفة)، وسترة سلامة ضيقة خالية من أي أطراف متدلية.
\`\`\`

---

### Layer B: للمهندسين (Engineering & Physical Mechanics)

#### 1. طوبولوجيا ماكينات اللف (Rewinder Topologies: 2-Drum vs. Center-Winder)
في ورق التيسو الحساس منخفض الوزن (Tissue & Towel 13-35 g/m²)، الاختيار بين أنظمة اللف يحدد جودة الكريب والانتفاخ (Bulk):
- **Two-Drum Surface Winder:** يتم تدوير البكرة عن طريق الاحتكاك السطحي مع درامين سفليين. ميزته البساطة والسرعة العالية، لكن عيبه تراكم وزن البكرة ذاتها مع زيادة القطر، مما قد يسحق طبقات الورق الداخلية ويقتل السماكة (Bulk Loss) أو يسبب تجاعيد الشد الداخلي.
- **Surface-Driven with Center-Assist (أو Single Drum Center Winder):** يُستخدم في درجات البريميوم والتيسو فائق النعومة، حيث يتم تطبيق عزم دوران مباشر على قلب اللف (Core Drive Assist) لتقليل ضغط النيب وحماية هيكل الورقة.

#### 2. معادلة الشد وتوازن الزحف الهوائي (Air Entrainment & Boundary Layer)
عند السرعات التشغيلية العالية ($V > 1200\\text{ m/min}$)، تجر الورقة معها طبقة حدية من الهواء (Boundary Air Layer) تتدفق داخل النيب بين الورقة والدرام.
سمك الطبقة الهوائية المتسربة يعطى تقريبياً بـ:
$$h_{air} \\approx 0.65 \\cdot R \\cdot \\left(\\frac{6\\mu V}{T}\\right)^{2/3}$$
حيث:
- $R$: نصف قطر درام اللف.
- $\\mu$: لزوجة الهواء الديناميكية.
- $V$: السرعة الخطية للورقة.
- $T$: شد الورقة لكل وحدة عرض ($N/m$).

إذا كان الشد $T$ منخفضاً جداً والضغط غير كافٍ، يتشكل وسادة هوائية تؤدي إلى انزلاق الورقة وعدم انتظام حواف البكرة (Telescoping).

---

### Troubleshooting Matrix (جدول استكشاف الأعطال الشائعة)

| العطل (Issue) | السبب المحتمل (Root Cause) | الإجراء الفوري للمشغل (Shop-Floor) | التحليل الهندسي الجذري (Engineering Fix) |
| :--- | :--- | :--- | :--- |
| **تقطع مستمر للورقة عند البدء** | صدمة تسارع مفاجئة أو شد ابتدائي مرتفع جداً | تخفيض سرعة التسارع وبدء اللف بنعومة | إعادة ضبط منحنى Ramp-up في درايف الموتور ومراجعة استجابة خلايا الحمل (Load Cells Tuning) |
| **انسداد شفاطات الهادر (Trim Chute Clog)** | ضعف ضغط مروحة الشفط أو تراكم غبار التيسو | إيقاف الماكينة وتنظيف فوهة الشفط بفرشاة آمنة | زيادة سرعة مروحة الشفط والتأكد من سرعة هواء الفينشوري ($V_{air} > 1.3 V_{web}$) |
| **تفاوت حواف اللف الجانبية (Dished Ends)** | اختلال محاذاة عمود القلب أو تذبذب استقامة البكرة الأم | فحص تثبيت العمود الكرتوني ومستويات التثبيت | مراجعة محاذاة درافيل التوجيه بالليزر وضبط نظام التوجيه التلقائي (Web Guide Sensor) |
`,
    estimated_minutes: 35,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-601-2",
    module_id: "mod-tis-601-1",
    title: "أنواع القلوب الكرتونية وتركيبها وتأثيرها على جودة اللف",
    title_en: "Paperboard Cores: Specifications, Loading & Structural Integrity",
    type: 'lesson',
    content: `## القلوب الكرتونية (Cores): ركيزة البكرة الصلبة

القلب الكرتوني ليس مجرد أسطوانة كرتون رخيصة، بل هو العنصر الهيكلي الأساسي الذي ينقل عزم الدوران ويتحمل قوى الانضغاط الشعاعية الهائلة الناتجة عن مئات الطبقات الملفوفة فوقه. انهيار القلب في مصنع التحويل يعني عدم إمكانية استخدام البكرة بالكامل وإهدار أطنان من الإنتاج.

---

### Layer A: للمشغلين وفنيي الوردية

#### 1. الفحص الظاهري للقلوب قبل التحميل
- **الرطوبة:** القلب الرطب يفقد 50% من مقاومته للانضغاط؛ يجب تخزين القلوب في مكان جاف ومكيف.
- **التشوهات البيضاوية (Out-of-round):** إذا كان القلب مضغوطاً أو بيضاوياً، فإنه سيهتز بعنف عند سرعة 1500 م/دقيقة مسبباً قطع الورقة.
- **النظافة:** خلو القلب من نتوءات الغراء وبقايا الكرتون والشوائب.

#### 2. تشغيل وتثبيت العمود الهوائي (Air Shaft Operation)
- تأكد من تفريغ هواء العمود بالكامل قبل إدخال القلوب لتجنب خدشها أو تمزيقها.
- ضبط موقع القلوب بدقة متناهية تحت مسار السكاكين لتجنب سقوط أطراف الورقة بين القلوب.
- ضغط نفخ العمود الهوائي القياسي: عادة بين **5.5 إلى 6.5 بار**. الضغط الضعيف يسبب انزلاق القلب فوق العمود عند الفرملة، والضغط الزائد قد يفجر بالونات العمود الداخلية.

---

### Layer B: للمهندسين

#### 1. مقاومة القلب للانضغاط الشعاعي (Flat Crush vs. Radial Crush Strength)
تتعرض طبقات القلب لضغط مستمر يتزايد مع نمو قطر البكرة الملفوفة.
معادلة الضغط الشعاعي النظري الخارجي الواقع على القلب الكرتوني:
$$P_c = \\sum_{i=1}^{N} \\frac{T_i}{R_i} - E_r \\cdot \\epsilon_r$$
حيث:
- $T_i$: الشد في الطبقة رقم $i$.
- $R_i$: نصف قطر الطبقة.
- $\\epsilon_r$: الانفعال الشعاعي الناتج عن المرونة والتضاغط الهيكلي للورق.

إذا تجاوز $P_c$ حد المرونة الميكانيكي للكرتون ($P_{critical}$)، يحدث انهيار مفاجئ للقلب يُعرف بـ (Core Crushing) أو انبعاج موضعي (Buckling).

#### 2. عزم القصور الذاتي والتسارع الزاوي
عند التسارع المفاجئ (Acceleration Ramp)، يتولد عزم التواء (Torsional Shear Stress) بين السطح الداخلي للقلب وعناصر قبضة العمود الهوائي (Lugs / Leaves):
$$\\tau = \\frac{J \\cdot \\alpha}{r_{core} \\cdot A_{grip}}$$
حيث $J$ هو عزم القصور الذاتي للبكرة المتنامية، و$\\alpha$ هو التسارع الزاوي ($d\\omega/dt$). إذا تجاوز الإجهاد قوة تماسك طبقات الكرتون الداخلية، يحدث انفصال طبقي داخل جدار القلب (Delamination).
`,
    estimated_minutes: 30,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-601-3",
    module_id: "mod-tis-601-2",
    title: "مبادئ شد الورقة ومراقبة خلايا التحميل (Load Cells)",
    title_en: "Web Tension Fundamentals & Load Cell Closed-Loop Calibration",
    type: 'lesson',
    content: `## استقرار شد الورقة في الريوايندر

ورق التيسو يتميز باستطالة عالية (High Stretch: 15-28%) ومقاومة شد منخفضة نسبياً مقارنة بورق الكرتون والطباعة. الحفاظ على شد ثابت وخالٍ من الذبذبات أثناء مراحل التسارع والسرعة الثابتة والفرملة هو جوهر نجاح عملية اللف.

---

### Layer A: للمشغلين وفنيي الوردية

#### 1. ما هو الشد المثالي لورق التيسو؟
- الشد لا يجب أن يكون "مشاعرياً" أو يتم باللمس باليد أثناء الحركة!
- الشد الزائد: يسحق تجاعيد الكريب ويقلل السماكة (Bulk Loss) أو يسبب انقطاع الورقة الفوري.
- الشد المنخفض: يسبب ترهل الورقة (Slack Web)، تجاعيد متوازية، وعدم ثبات مسار الورقة.
- القيمة المعتادة للشد النوعي في ورق التيسو تتراوح بين **40 إلى 90 نيوتن/متر عرض**.

#### 2. علامات الشد غير المتوازن
- رفرفة الورقة (Flapping) قبل درافيل التقطيع.
- انزلاق البكرة الأم وتغير صوت الفرامل الميكانيكية أو الموتور الكهربائي.
- ظهور تجاعيد قطرية تشبه علامات سمكة الرنجة (Herringbone wrinkles).

---

### Layer B: للمهندسين

#### 1. نظرية عمل خلايا الحمل (Strain Gauge Load Cells)
تعتمد خلايا الحمل المثبتة تحت كراسي تحميل درفيل القياس (Tension Roll) على قنطرة ويتستون (Wheatstone Bridge) التي تقيس التشوه الميكروي الناتج عن القوة المحصلة لشد الورقة:
$$F_{resultant} = 2 \\cdot T_{total} \\cdot \\sin\\left(\\frac{\\theta_{wrap}}{2}\\right) \\cdot \\cos(\\beta)$$
حيث:
- $T_{total}$: إجمالي قوة الشد في عرض الورقة.
- $\\theta_{wrap}$: زاوية التفاف الورقة حول الدرفيل (Wrap Angle).
- $\\beta$: زاوية ميل محصلة القوة بالنسبة لمحور الخلية الحساس.

#### 2. حلقة التحكم المغلقة (Closed-Loop PID Control Tuning)
يتم إرسال إشارة الشد المقاسة إلى المعالج (PLC / Drive Controller)، حيث تتم مقارنتها مع القيمة المطلوبة (Setpoint)، ويتم توجيه أمر التحكم إلى درايف فك البكرة الأم (Unwind Brake / Regenerative Drive):
$$u(t) = K_p e(t) + K_i \\int e(t) dt + K_d \\frac{de(t)}{dt}$$
أهم تحدٍ في التحكم هو تغير عزم القصور الذاتي للبكرة الأم المتناقصة باستمرار مع الوقت:
$$J(t) = \\frac{1}{2} \\pi \\cdot W \\cdot \\rho_{paper} \\cdot \\left(R(t)^4 - R_{core}^4\\right)$$
لذا يجب تطبيق نظام تعويض عزم القصور الذاتي الديناميكي (Inertia Compensation Feedforward) لضمان عدم حدوث قفزة في الشد أثناء التسارع أو الفرملة المفاجئة.
`,
    estimated_minutes: 35,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-602-1",
    module_id: "mod-tis-602-1",
    title: "ميكانيكا التقطيع: هندسة السكاكين العلوية والسفلية والزوايا",
    title_en: "Slitting Mechanics: Shear Slitting, Blade Geometries & Cant Angle",
    type: 'lesson',
    content: `## هندسة التقطيع المقاوم للاهتراء (Shear Slitting Precision)

تقطيع ورق التيسو بسرعات تصل إلى 1500 - 2000 م/دقيقة هو اختبار ميكانيكي هندسي غاية في الدقة. حافة القطع غير السليمة لا تنتج فقط غباراً كثيفاً (Dust Generation) يعطل حساسات الماكينة ومصانع التحويل، بل تسبب أيضاً تركيزات إجهاد (Stress Concentrations) تؤدي إلى تقطع الورقة عند سحبها في ماكينات التحويل.

---

### Layer A: للمشغلين وفنيي الوردية (SOP-SLIT-02)

#### 1. القواعد الذهبية لضبط سكاكين التقطيع (Top & Bottom Slitters)
\`\`\`
[SOP-SLIT-02: فحص وضبط سكاكين التقطيع]
1. فحص الشفرات العلوية والسفلية يومياً تحت عدسة مكبرة أو باللمس الآمن للتأكد من خلوها من أي سنون مكسورة (Nicks & Burrs).
2. التحقق من عمق التداخل (Blade Penetration / Overlap): يجب ألا يتجاوز 1.0 إلى 1.5 مم لورق التيسو العادي، و0.8 مم لورق التيسو الخفيف. التداخل الزائد يسبب اهتزاز الحواف وسحق الألياف.
3. ضبط قوة التلامس الجانبي (Side Load Pressure): القوة الموصى بها هي 1.5 إلى 2.5 بار في حوامل السكاكين الهوائية. الضغط المفرط يولد حرارة هائلة ويستهلك السكاكين في ساعات معدودة.
4. التأكد من دوران السكين السفلي (Bottom Anvil Motor) بسرعة متزامنة مع سرعة الورقة (Lead Speed: 5-8% أسرع من الورقة).
\`\`\`

#### 2. كيف تتعرف على حافة القطع الرديئة بالعين المجردة؟
- تطاير سحب بيضاء من غبار الألياف حول حامل السكين.
- الحافة مشرشرة كأنها مقطوعة باليد بدلاً من أن تكون خطاً ناعماً مستقيماً.
- ظهور شقوق ميكروية (Micro-tears) تنفجر فوراً بمجرد شد البكرة في التحويل.

---

### Layer B: للمهندسين (Mechanical & Material Engineering)

#### 1. زاوية الميلان وتأثيرها الهيدروديناميكي (Cant Angle)
السكين العلوي لا يركب موازياً تماماً للسكين السفلي، بل بزاوية ميلان دقيقة للغاية (Cant Angle $\\alpha$ تتراوح بين **$0.25^\\circ$ إلى $0.5^\\circ$**):
$$\\alpha = 15' \\text{ to } 30' \\text{ (arcminutes)}$$
- إذا كانت $\\alpha < 0.2^\\circ$: يحدث تلامس على كامل مساحة الشفرة الخلفية، مما يسبب احتكاكاً هائلاً وحرارة وتوليد غبار مفرط.
- إذا كانت $\\alpha > 0.7^\\circ$: تتركز قوة القص في نقطة بالغة الصغر مسببة اهتراء سريعاً للسن ونقصاً في عمر السكين بنسبة 70%.

#### 2. هندسة شفرات كربيد التنجستن مقابل الصلب فائق السرعة (Tungsten Carbide vs. D2 / M2 Tool Steel)
- **High-Speed Steel (HSS / M2):** صلادة 62-64 HRC، مرن نسبياً ومقاوم للصدمات ولكنه يتطلب إعادة سن متكررة كل 4-6 أسابيع.
- **Tungsten Carbide (WC-Co):** صلادة فائقة تتجاوز 88-92 HRA، عمر افتراضي يصل إلى 10 أضعاف HSS، ولكنه هش (Brittle) وحساس للاهتزازات، ويتطلب تزييت ميكروي ومراقبة عزم التثبيت.

#### 3. ميكانيكا القص والإجهاد (Shear Stress Distribution)
تتحقق الحافة المثالية عندما تتولد قوى القص بحيث تفصل الألياف عبر الكسر النظيف (Clean Cleavage) قبل أن يحدث انثناء مرن (Elastic Bending) للورقة:
$$\\tau_{shear} = \\frac{F_{side} \\cdot \\mu + F_{vertical}}{A_{contact}} > \\sigma_{shear, paper}$$
`,
    estimated_minutes: 40,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-602-2",
    module_id: "mod-tis-602-1",
    title: "أنظمة التوجيه الآلي وفرد الورقة ومنع الكرمشة",
    title_en: "Web Guiding Systems, Spreader Rolls & Wrinkle Prevention",
    type: 'lesson',
    content: `## التحكم في مسار الورقة ومنع التشوهات

مع سرعات تصل إلى 25 متر في الثانية، أي تفاوت طفيف في توتر أطراف البكرة الأم أو انحراف ميكانيكي في التوازي يترجم فوراً إلى انزلاق عرضي (Web Weaving) أو ظهور تجاعيد تتشابك داخل البكرات المشقوقة مسببة التصاقها ببعضها (Interweaving).

---

### Layer A: للمشغلين وفنيي الوردية

#### 1. درفيل الفرد المقوس (Bow / Spreader Roll)
- درفيل الفرد له محور منحني ثابت بينما غلافه الخارجي المطاطي يدور بحرية.
- اتجاه انحناء الدرفيل (Bow Direction) يجب أن يكون موجهاً دائماً في اتجاه حركة الورقة بزاوية طفيفة للأعلى لفرد أطراف الورقة نحو الخارج.
- **تحذير للمشغل:** توجيه القوس في الاتجاه المعاكس سيتسبب فوراً في ضغط الورقة للداخل وتوليد تجاعيد مستمرة في المنتصف!

#### 2. حساسات التوجيه (Edge Guiding Sensors)
- تنظيف عيون الحساسات البصرية (Optical Sensors) أو فوق الصوتية (Ultrasonic Sensors) بهواء نظيف في بداية كل وردية للتخلص من غبار التيسو.
- التأكد من أن الورقة تسير في منتصف المجال النشط للحساس (Deadband calibration).

---

### Layer B: للمهندسين

#### 1. معادلة التمدد العرضي لدرفيل الفرد (Lateral Web Spreading)
مع دوران الغلاف المطاطي حول المحور المقوس، يتمدد المطاط على الجانب المحدب وينكمش على الجانب المقعر. الإزاحة العرضية للألياف تحسب من:
$$\\Delta W = 2 \\cdot L_{arc} \\cdot \\left(\\frac{h_{bow}}{R_{roll}}\\right) \\cdot \\sin(\\theta_{wrap})$$
حيث $h_{bow}$ هو مقدار تقوس السنتر بالنسبة للأطراف.
يجب ألا يتجاوز الانفعال العرضي $\\epsilon_{CD}$ حد استطالة الورقة في الاتجاه العرضي (CD Stretch Limit)، وإلا حدث تقطع عرضي للورقة عند السنتر.

#### 2. ديناميكا التوجيه المغلق (Proportional Steering Roll Dynamics)
يتحرك درفيل التوجيه (Steering Roll) حول نقطة ارتكاز لحظية (Instantaneous Center of Rotation). دالة التحويل من الدرجة الثانية للنظام:
$$G(s) = \\frac{Y_{out}(s)}{Y_{in}(s)} = \\frac{1}{\\tau^2 s^2 + 2\\zeta \\tau s + 1}$$
حيث يتطلب الحفاظ على الاستقرار تخميداً (Damping Ratio $\\zeta \\approx 0.7$) لمنع ظاهرة الصيد والتذبذب المستمر (Hunting / Weaving Cycle) عند السرعات العالية.
`,
    estimated_minutes: 35,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-602-3",
    module_id: "mod-tis-602-2",
    title: "التحكم في الشد التفاضلي وعزم السحب (Tension Profiling)",
    title_en: "Differential Tension Control & Speed Draw Optimization",
    type: 'lesson',
    content: `## الشد التدريجي وعلاقة القطر (Taper Tension Strategy)

إذا حافظت الماكينة على نفس مقدار الشد الخطي من بداية اللف حول القلب الكرتوني حتى وصول القطر النهائي إلى 1500 مم، فإن البكرة ستعاني حتماً من ظاهرة "انفجار البكرة الخارجي" و"سحق الطبقات الداخلية" بفعل تراكم قوى الشد المحيطية. الحل الهندسي هو تطبيق الشد المتناقص التلقائي (Tapered Tension Profile).

---

### Layer A: للمشغلين وفنيي الوردية

#### 1. ما هو الشد المتناقص (Taper Tension) ببساطة؟
- عند البداية حول الكور: نريد شداً قوياً ومحكماً لتثبيت الورقة بقوة ومنع انزلاقها على الكرتون.
- مع كبر حجم البكرة: يقوم الكمبيوتر تلقائياً بتخفيض الشد تدريجياً بنسبة (15% - 35%) حتى تظل الطبقات الخارجية مرنة وتسمح للبكرة بالتنفس دون أن تسحق ما تحتها.

#### 2. كيف تكتشف مشكلة الشد بالعين؟
- إذا كانت البكرة "رخوة جداً عند الكور وقاسية من الخارج": ستنزلق البكرة في ماكينة التحويل وتفقد توازنها.
- إذا كانت البكرة "قاسية جداً عند الكور": ستلاحظ تشققات دائرية حول الكور تسمى نجوم اللف (Starring).

---

### Layer B: للمهندسين

#### 1. خوارزميات الشد المتناقص (Linear vs. Hyperbolic Taper Algorithms)
1. **الشد الخطي (Linear Taper):**
$$T(D) = T_{initial} \\cdot \\left[ 1 - \\left(\\frac{\\%Taper}{100}\\right) \\cdot \\left(\\frac{D - D_{core}}{D_{max} - D_{core}}\\right) \\right]$$
2. **الشد القطعي الزائد (Hyperbolic Taper - الأكثر ملاءمة للتيسو):**
$$T(D) = T_{final} + (T_{initial} - T_{final}) \\cdot \\left(\\frac{D_{core}}{D}\\right)$$
يوفر الشد القطعي حماية فائقة للقلب الكرتوني والطبقات الأولى بينما يحافظ على شد شبه ثابت في الثلثين الخارجيين من القطر.

#### 2. عزم السحب وفرق السرعات (Speed Draw Control)
يتم التحكم في التوتر بين درام 1 ودرام 2 في ماكينات السطح عبر ضبط فرق السرعة الدقيق (Speed Ratio $\\Delta V$):
$$\\Delta V = \\frac{V_{drum2} - V_{drum1}}{V_{drum1}} \\times 100\\%$$
في ورق التيسو، يتم ضبط $\\Delta V$ عادة بين **+0.1% إلى +0.4%**، حيث يولد هذا الفرق عزم دوران محيطي (Torque Addition) يشد الطبقات المتراكمة عبر النيب دون الحاجة لزيادة قوة ضغط درفيل الركوب.
`,
    estimated_minutes: 35,
    order: 3,
    is_free: true,
  },

  {
    id: "les-tis-603-1",
    module_id: "mod-tis-603-1",
    title: "محددات اللف الفيزيائية الثلاثة (TNT: Tension, Nip, Torque)",
    title_en: "The Triad of Winding Dynamics: Tension, Nip & Torque (TNT)",
    type: 'lesson',
    content: `## الثالوث المقدس للف الورق: مبادئ TNT

في علم هندسة اللف والتحويل (Winding Mechanics)، تتحكم ثلاثة متغيرات مادية أساسية في صلابة وتماسك أي بكرة ورقية ملفوفة:
1. **الشد (Tension - T):** قوة سحب الورقة في الاتجاه الطولي قبل دخولها إلى نقطة التماس.
2. **الضغط في النيب (Nip Force - N):** القوة الخطية المؤثرة عمودياً بين درفيل الركوب (Rider Roll) ودرافيل اللف.
3. **عزم الدوران (Torque - T):** فرق العزم المحيطي بين درافيل اللف أو عزم الدوران المباشر المطبق على العمود الكرتوني.

---

### Layer A: للمشغلين وفنيي الوردية

#### 1. وظيفة كل عنصر في الميدان:
- **Tension:** يحدد شد الورقة المبدئي، ويمنع الارتخاء والتجاعيد قبل السكاكين.
- **Nip (الضغط):** يطرد الهواء الزائد المحبوس بين الطبقات في بداية اللف ويثبت صلابة البكرة. مع نمو البكرة، يجب تخفيف ضغط درفيل الركوب تدريجياً (Nip Relief) لتعويض زيادة وزن البكرة نفسها!
- **Torque (العزم):** يشد الطبقات بإحكام من الداخل دون سحق الورقة.

#### 2. كيف تختبر جودة اللف على الأرض؟
- **اختبار العصا أو المطرقة الجلدية (Billy Club Test):** ضرب طرف البكرة بخفة؛ الصوت الرنان الصافي يدل على تماسك متوازن، بينما الصوت المكتوم الرخو يدل على وجود جيوب هوائية خطرة.
- **فحص المسافة بين الطبقات (Density & Hardness Tester - ParoTester / Schmidt Hammer):** للتأكد من عدم وجود تفاوت في الصلابة عبر عرض البكرة.

---

### Layer B: للمهندسين

#### 1. مصفوفة الإجهادات الداخلية للبكرة (Hakiel's Non-Linear Winding Model)
في النموذج الرياضي الكلاسيكي لـ Hakiel، يتم تمثيل البكرة كمادة لامرنة وغير متجانسة ذات استجابة غير خطية في الاتجاه الشعاعي:
$$E_r = C_0 + C_1 \\cdot \\sigma_r + C_2 \\cdot \\sigma_r^2$$
معادلة الاتزان التفاضلي للإجهاد الشعاعي $\\sigma_r$ والإجهاد المحيطي (Tangential Hoop Stress $\\sigma_t$):
$$r \\frac{d\\sigma_r}{dr} + \\sigma_r - \\sigma_t = 0$$
علاقة التوافق الحركي:
$$\\sigma_t = E_t \\cdot \\left( \\frac{u}{r} + \\alpha \\Delta T \\right)$$
الهدف الهندسي من ضبط منحنيات TNT هو ضمان أن يظل الإجهاد المحيطي $\\sigma_t > 0$ (موجباً) عبر كامل قطر البكرة لمنع تفكك الطبقات (Buckling / J-Line)، وفي نفس الوقت بقاء الإجهاد الشعاعي $\\sigma_r < \\sigma_{crush}$ لمنع سحق تجاعيد الكريب.

#### 2. استراتيجية تخفيف ضغط النيب التلقائي (Nip Relief Curve)
مع نمو قطر البكرة $D(t)$، تزداد كتلتها $M(t)$، وبالتالي يمارس وزنها الذاتي ضغط نيب إضافي على الدرافيل السفلية. تقوم اسطوانات الهيدروليك/النيوماتيك برفع درفيل الركوب وفق المعادلة:
$$F_{rider}(D) = F_{initial} - K_{relief} \\cdot \\left[ W_{roll}(D) \\cdot \\cos(\\theta_{nip}) \\right]$$
`,
    estimated_minutes: 40,
    order: 1,
    is_free: true,
  },

  {
    id: "les-tis-603-2",
    module_id: "mod-tis-603-1",
    title: "مصفوفة عيوب اللف الشاملة واستراتيجيات التغلب عليها",
    title_en: "Master Roll Defect Matrix: Root Causes & Corrective Actions",
    type: 'lesson',
    content: `## التشريح الهندسي لعيوب لف التيسو (Roll Defect Anatomy)

عيوب لف بكرات التيسو تكلف مصانع الورق والتحويل ملايين الدولارات سنوياً في صورة هادر ورقي (Broke)، وتوقفات خطوط التحويل الأوتوماتيكية فائقة السرعة. هذا الدليل يقدم الربط المباشر بين العيب والحل.

---

### Layer A: للمشغلين وفنيي الوردية (SOP-WIND-03)

\`\`\`
[SOP-WIND-03: مصفوفة استكشاف عيوب البكرات وإجراءات التصحيح الفوري]

1. عيب التليسكوب (Telescoping - خروج القلب أو الطبقات للخارج كالمنظار):
   - السبب المباشر: انحباس كميات كبيرة من الهواء بين الطبقات + شد منخفض جداً + فرملة عنيفة للماكينة.
   - الإجراء الفوري: زيادة ضغط النيب الأولي بنسبة 15% وتطبيق منحنى فرملة تدريجي ناعم.

2. عيب نجوم اللف (Starring - تشققات نجمية في جوانب البكرة حول القلب):
   - السبب المباشر: شد خارجي مرتفع جداً ضغط على طبقات داخلية ملفوفة برخاوة شديدة.
   - الإجراء الفوري: زيادة الشد حول الكور مباشرة بنسبة 20%، وزيادة معدل الـ Taper Tension لتخفيف شد الطبقات الخارجية.

3. عيب عروق الحبال (Rope Marks / Tin Canning - نتوءات حبلية مائلة على سطح البكرة):
   - السبب المباشر: عدم انتظام سمك الورقة العرضي (Caliper Profile Variation) تضخم في نفس النقطة عبر مئات اللفات.
   - الإجراء الفوري: تفعيل ميزة التذبذب العرضي (Web Oscillation) لتوزيع نقاط السمك الزائد عبر عرض البكرة.
\`\`\`

---

### Layer B: للمهندسين (Forensic Defect Analysis)

#### 1. مصفوفة التحليل الجذري المتقدمة (Root Cause Analysis Matrix)

| العيب الظاهري | الآلية الفيزيائية الكامنة | المتغير الحاكم في نظام TNT | الفحص المخبري / الميداني |
| :--- | :--- | :--- | :--- |
| **Dished Ends (الجوانب المقعرة)** | تمدد مرن غير متماثل في أطراف الورقة ناتج عن اختلاف الشد بين اليمين واليسار | Tension Imbalance & Alignment | ليزر فحص توازي الدرافيل (Roll Parallelism Alignment) |
| **Crepe Wrinkles (كرمشة الكريب)** | تجاوز إجهاد الانضغاط في الاتجاه الطولي لقوة تماسك الورقة السطحية | Nip Force Overload | مجهر فحص تلف الكريب (SEM Surface Analysis) |
| **Interweaving (تشابك البكرات)** | انحراف زوايا الورقة بعد السكاكين بسبب غياب التباعد العرضي الكافي | Knife Setup & Spreader Deflection | حساب مسافة التباعد العرضي ($S_{gap} > 1.5\\text{ mm}$) |
| **Core Offset (انزلاق الكور)** | تجاوز عزم القصور الذاتي لقوة الاحتكاك بين الكور والعمود أثناء الطوارئ | Torque Spike on E-Stop | ضغط نفخ العمود الهوائي ومراجعة زمن التوقف الحرج ($t_{stop}$) |

#### 2. حساب مسار التباطؤ الحرج لمنع انفصال الطبقات (Deceleration Torque Limit)
أثناء التوقف الاضطراري (Emergency Stop)، تتولد قوة قص بين الطبقات الملفوفة قد تسبب انزلاق الطبقات الداخلية فوق بعضها وتدمير البكرة:
$$\\tau_{interlayer} = \\frac{M_{outer} \\cdot R_{outer} \\cdot a_{brake}}{2\\pi R_{layer}^2 \\cdot W} < \\mu_{paper-paper} \\cdot P_{radial}$$
إذا كانت قوة الاحتكاك السطحي $\\mu_{paper-paper} \\cdot P_{radial}$ غير كافية، تنزلق الطبقات محدثة عيب الـ (J-Line Shift).
`,
    estimated_minutes: 40,
    order: 2,
    is_free: true,
  },

  {
    id: "les-tis-603-3",
    module_id: "mod-tis-603-2",
    title: "التكامل بين ماكينة الورق ومصنع التحويل (Converting Interface)",
    title_en: "Paper Machine to Converting Interface: Runnability & QA Standards",
    type: 'lesson',
    content: `## الواجهة بين صناعة الورق وخطوط التحويل (Tissue-to-Converting Interface)

النجاح الحقيقي لماكينة ورق التيسو لا يقاس فقط بكمية الأطنان المنتجة عند طرف الريوايندر، بل بمدى سلاسة دوران هذه البكرات وسرعتها في خطوط التحويل النهائي (Converting Lines) لتصنيع مناديل الجيب، تواليت رول، ومناشف المطبخ دون توقفات.

---

### Layer A: للمشغلين وفنيي الوردية

#### 1. متطلبات مصنع التحويل من بكرة التيسو:
- **سلامة الحواف:** ممنوع تماماً وجود أي شقوق صغيرة في أطراف البكرة (Edge Nicks). الشق الذي طوله 1 مم في طرف البكرة يتسبب في قطع الورقة وتوقف خط التحويل فور تشغيله على سرعة 600 م/دقيقة.
- **التغليف السليم:** بكرات التيسو تمتص رطوبة الجو كالإسفنجة. يجب تغليف البكرات بالبلاستيك فور إخراجها من الريوايندر لمنع تشوه الأطراف.
- **القلب الكرتوني السليم:** عدم وجود أي غراء متسرب يغلق تجويف الكور، وتوافق قطر الكور الداخلي تماماً مع مواصفات أذرع التحويل (3 بوصة أو 6 بوصة).

#### 2. وضع بطاقة البكرة (Reel ID Tagging & Traceability):
- تسجيل رقم البكرة، وزنها، رقم ماكينة الورق، اتجاه السحب (Unwind Direction Arrow)، وأي ملاحظات فنية حول وجود وصلة ورقية (Splice).
- تحديد موقع الوصلة بشريط لاصق عاكس (Reflective Splicing Tape) لكي تقرأه حساسات مصنع التحويل تلقائياً.

---

### Layer B: للمهندسين

#### 1. استبقاء الحجم والسماكة أثناء اللف (Bulk Retention & Caliper Loss)
الهدف الأهم في صناعة التيسو الحديثة هو تقديم منتج ناعم ومنفوش بأقل كمية ألياف (Basis Weight Reduction). الضغط غير المحسوب في الريوايندر يسحق هذا الهيكل:
$$\\text{Bulk Loss (\\%)} = \\frac{\\text{Bulk}_{reel} - \\text{Bulk}_{wound}}{\\text{Bulk}_{reel}} \\times 100\\%$$
يجب ألا يتجاوز الفقد في الحجم داخل الريوايندر نسبة **4% إلى 7%**. تجاوز ذلك يعني هدر مواد كيميائية وطاقة تكثيف تم إنفاقها في الـ Yankee Dryer.

#### 2. معايير الجودة الميكانيكية للقبول في التحويل (Converting QA Metrics)
1. **معامل تفاوت الوزن الأساسي (Basis Weight 2-Sigma Variation):** $< 1.2\\%$.
2. **استطالة الاتجاه الطولي (MD Stretch):** يجب أن تظل أعلى من **12-16%** بعد اللف لضمان امتصاص الصدمات الميكانيكية في محطات التوشيح والتقطيع.
3. **مقاومة الشد الرطب (Wet Tensile / Dry Tensile Ratio):** تحقيق النسبة المستهدفة لضمان عدم تفتت المناديل المبللة أو مناشف المطبخ أثناء الاستخدام.
4. **توازن عزم اللف (Roll Hardness Profile):** لا يتجاوز التباين العرضي في قراءة جهاز Parotester أكثر من $\\pm 2$ وحدة على كامل العرض.
`,
    estimated_minutes: 35,
    order: 3,
    is_free: true,
  }
];

// ── 5. Quiz Questions (الأسئلة والاختبارات التقييمية) ─────────────────────────────

export const quizQuestions: QuizQuestion[] = [
  {
    "id": "quiz-101-1-1",
    "lesson_id": "les-tis-101-1",
    "question": "ما هي الميزة التشغيلية الأساسية التي توفرها ألياف الخشب الصلب (Hardwood / Eucalyptus) في ورق التيسو؟",
    "question_en": "What is the primary operational benefit of Hardwood (Eucalyptus) fibers in tissue paper?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "زيادة مقاومة الشد الطولي الميكانيكي (Tensile Strength)",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "منح المنديل النعومة الفائقة وتكوين بنية كريب ناعمة بفضل الألياف القصيرة والعديدة",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "تسريع نزح الماء على واير الفورمر",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "تقليل استهلاك الكيماويات في تحضير العجينة",
        "is_correct": false
      }
    ],
    "explanation": "ألياف اليوكاليبتوس قصيرة ودقيقة (0.8 - 1.0 مم) وبأعداد هائلة لكل جرام، مما يعطي تغطية سطحية ممتازة ونعومة مخملية فائقة وملايين النهايات الحرة بعد الكرمشة.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-102-1-1",
    "lesson_id": "les-tis-102-1",
    "question": "ما هو الخطر الرئيسي لزيادة نسبة تكرير ألياف التيسو الطويلة (NBSK) فوق 35-38 °SR؟",
    "question_en": "What is the primary risk of over-refining NBSK fibers beyond 35-38 °SR in tissue?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "فقدان النعومة وزيادة جساءة المنديل (Stiffness) وانخفاض نزح الماء وسرعة الماكينة",
        "is_correct": true
      },
      {
        "id": "opt-2",
        "text": "انخفاض مقاومة الشد الجاف",
        "is_correct": false
      },
      {
        "id": "opt-3",
        "text": "زيادة استهلاك البخار في الهود فقط دون أثر على الورقة",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "انفجار البكرة في الريوايندر مباشرة",
        "is_correct": false
      }
    ],
    "explanation": "التكرير الزائد يرفع درجة الشوبر ريجلر مما يصعب نزح الماء ويسحق حجم الورقة المنفوش (Bulk Loss) ويجعل المنديل قاسياً وخشناً للمستهلك.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-103-1-1",
    "lesson_id": "les-tis-103-1",
    "question": "في تقنية Headbox ثلاثية الطبقات (3-Layer Stratification)، أين يجب توجيه ألياف الخشب الصلب بنسبة 100%؟",
    "question_en": "In a 3-layer stratified headbox, where should 100% hardwood furnish be directed?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "في الطبقة الوسطى (Center Layer) لتوفير الألياف",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "في الطبقات الخارجية الملامسة لجلد المستهلك وسطح اليانكي لتحقيق أعلى نعومة ملموسة",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "يتم خلطها بالتساوي دون طبقات",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "توضع فقط بجوار حواف الورقة لمنع التمزق",
        "is_correct": false
      }
    ],
    "explanation": "الطبقات الخارجية (Top & Bottom) هي المسؤولة عن النعومة المباشرة، بينما توضع ألياف الخشب اللين في المنتصف (Core) لتحقيق القوة والشد دون التضحية بالنعومة السطحية.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-201-1-1",
    "lesson_id": "les-tis-201-1",
    "question": "ما هو النطاق المثالي لتركيز العجينة داخل فرازة ومكرر التيسو منخفض التركيز (LC Refiner)؟",
    "question_en": "What is the optimal consistency range for tissue LC refining?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "0.5% - 1.2%",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "3.5% - 4.5%",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "10% - 15%",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "25% - 30%",
        "is_correct": false
      }
    ],
    "explanation": "تركيز 3.5% إلى 4.5% يضمن وجود وسادة ألياف سميكة بين سكاكين القرص مما يحمي الألياف من التقطيع العنيف ويوفر رجفان خارجي وتليين مرن.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-202-1-1",
    "lesson_id": "les-tis-202-1",
    "question": "ما هي آلية التثبيت الكيميائي لراتنج مقاومة البلل الدائمة (PAE Resin) في وسط العجينة؟",
    "question_en": "What is the bonding mechanism of PAE permanent wet strength resin in tissue furnish?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "الترسيب الفيزيائي المباشر دون تفاعل كيميائي",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "تكوين روابط تساهمية متصالبة (Cross-linking) مع سلاسل السليلوز ومقاومة الماء تحت الحرارة",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "التفاعل مع جزيئات الشحوم فقط",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "تبخير الروابط الهيدروجينية",
        "is_correct": false
      }
    ],
    "explanation": "مجموعات الأزيتيدينيوم الموجبة في PAE تتفاعل مع مجموعات الكربوكسيل في السليلوز وتخضع لبلمرة متصالبة ذاتية أثناء التجفيف على اليانكي لتكوين شبكة مقاومة للماء.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-301-1-1",
    "lesson_id": "les-tis-301-1",
    "question": "ما هي النسبة المستهدفة لسرعة نفاث العجينة إلى سرعة السلك (Jet-to-Wire Ratio) للحصول على ورقة متماثلة الخواص (Square Sheet)؟",
    "question_en": "What is the target Jet-to-Wire ratio for achieving a square sheet structure?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "0.80 - 0.85 (Rush شديد)",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "0.98 - 1.02 (تطابق شبه تام لتقليل اصطفاف الألياف في الاتجاه الطولي)",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "1.25 - 1.40 (Drag عالي)",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "2.00",
        "is_correct": false
      }
    ],
    "explanation": "الاقتراب من النسبة 1.00 يمنع قوى القص الموجهة للألياف في اتجاه الماكينة، مما يخفض نسبة MD/CD Tensile Ratio ويجعل الورقة متساوية القوة في كافة الاتجاهات.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-303-1-1",
    "lesson_id": "les-tis-303-1",
    "question": "كيف تحقق تقنية التجفيف بالهواء النافذ (TAD) حجماً ونعومة تفوق ماكينات الهلال التقليدية (Crescent Former) بنسبة 100%؟",
    "question_en": "How does Through-Air Drying (TAD) achieve 100% higher bulk and softness compared to conventional Crescent Formers?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "عبر زيادة وزن المنديل وإضافة كميات أكبر من الألياف",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "عبر إلغاء النيب الانضغاطي الميكانيكي وتجفيف شبكة الألياف بالهواء الساخن وهي محتفظة بهيكلها ثلاثي الأبعاد",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "باستخدام ألياف معاد تدويرها فقط",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "بزيادة ضغط سكين الكريب إلى الضعف",
        "is_correct": false
      }
    ],
    "explanation": "في الـ TAD لا يتم عصر الورقة ميكانيكياً في النيب، بل يتم سحب الهواء الساخن عبر مسام الورقة لتثبيت بنية وسائد الألياف المنفوشة ثلاثية الأبعاد دون سحق.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-401-1-1",
    "lesson_id": "les-tis-401-1",
    "question": "ما هي الفائدة التشغيلية الرئيسية لاستخدام عصارة الشو برس (Shoe Press) على أسطوانة اليانكي مقارنة بدرفيل الشفط التقليدي (Suction Press Roll)؟",
    "question_en": "What is the primary operational advantage of a Yankee Shoe Press over a Suction Press Roll?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "رفع جفاف الورقة بعد النيب بمقدار 4-6% دون سحق سماكة الورقة بفضل عرض النيب الواسع والضغط الأقصى المنخفض",
        "is_correct": true
      },
      {
        "id": "opt-2",
        "text": "تقليل استهلاك الكهرباء لمحركات الواير",
        "is_correct": false
      },
      {
        "id": "opt-3",
        "text": "إلغاء الحاجة لسكاكين الكريب نهائياً",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "العمل بدون بطانية عصر (Feltless)",
        "is_correct": false
      }
    ],
    "explanation": "عرض نيب عصارة الشو برس (120-150 مم مقابل 40-50 مم) يوفر زمن تضاغط أطول لنزح الماء الهيدروليكي مع ذروة ضغط أقل تحمي حجم الورقة المنفوش (Bulk).",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-402-1-1",
    "lesson_id": "les-tis-402-1",
    "question": "ماذا يحدث لطبقة الكوتينج على اليانكي إذا زاد رش المادة اللاصقة (Adhesive) بدرجة مفرطة مع نقص معدل التقشير (Release Agent)؟",
    "question_en": "What happens to the Yankee coating when adhesive is overdosed relative to release modifier?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "تصبح الطبقة لينة للغاية وتتطاير الورقة",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "تصبح الطبقة قاسية وزجاجية ويزداد التصاق الورقة مما يؤدي إلى تكسر سكين الكريب وثقوب متكررة وتقطع للورقة",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "ينخفض استهلاك البخار داخل اليانكي",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "يزداد سمك الورقة تلقائياً",
        "is_correct": false
      }
    ],
    "explanation": "زيادة اللاصق تجعل الطبقة صلبة وشديدة الالتصاق، فيزداد الاحتكاك والاهتزاز العنيف لسكين الكريب وتتمزق الورقة أثناء القشط.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-501-1-1",
    "lesson_id": "les-tis-501-1",
    "question": "ما هي وظيفة الثيرموكمبريسور (Thermocompressor) في حلقة بخار ومكثفات أسطوانة اليانكي؟",
    "question_en": "What is the function of the Thermocompressor in the Yankee steam and condensate loop?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "تبريد سطح اليانكي بالهواء المضغوط",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "إعادة ضغط وخلط بخار النفخ (Blowthrough Steam) بواسطة بخار الضغط العالي الحي وإعادته لليانكي لتوفير الطاقة",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "طرد الغازات غير القابلة للتكثف إلى الغلاف الجوي مباشرة",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "تسخين مياه الصرف الصحي للمصنع",
        "is_correct": false
      }
    ],
    "explanation": "الثيرموكمبريسور يعمل كمضخة حرارية بمبدأ الفينشوري، حيث يستغل طاقة البخار عالي الضغط لسحب وضغط بخار البلوثرو وتدويره مجدداً داخل أسطوانة اليانكي.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-502-1-1",
    "lesson_id": "les-tis-502-1",
    "question": "كم تبلغ النسبة المئوية التقريبية لقدرة التجفيف التي يوفرها هود الهواء الساخن فائق السرعة مقارنة بإجمالي تجفيف ماكينة التيسو؟",
    "question_en": "What approximate percentage of total machine drying capacity is provided by a high-velocity Yankee Hood?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "10% - 15%",
        "is_correct": false
      },
      {
        "id": "opt-2",
        "text": "50% - 70%",
        "is_correct": true
      },
      {
        "id": "opt-3",
        "text": "95% - 99%",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "5% فقط",
        "is_correct": false
      }
    ],
    "explanation": "هود الهواء الساخن عالي السرعة (حرارة تصل إلى 450-510°م وسرعة هواء 150 م/ث) يزيل ما بين 50% إلى 70% من إجمالي المياه المتبخرة على ماكينة التيسو الحديثة.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-601-1-1",
    "lesson_id": "les-tis-601-1",
    "question": "ما هو الخطر التشغيلي الأكبر عند انحباس وسادة هوائية سميكة (Air Entrainment) بين طبقات الورق في الريوايندر عند السرعات العالية؟",
    "question_en": "What is the primary operational hazard of excessive air entrainment between tissue layers during rewinding?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "انزلاق الورقة وعدم انتظام حواف البكرة وحدوث عيب التليسكوب (Telescoping)",
        "is_correct": true
      },
      {
        "id": "opt-2",
        "text": "ارتفاع استهلاك الكهرباء فقط دون أثر ميكانيكي",
        "is_correct": false
      },
      {
        "id": "opt-3",
        "text": "تكسر درافيل اللف السفلية",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "تحول الورقة إلى اللون الأصفر",
        "is_correct": false
      }
    ],
    "explanation": "الهواء المحبوس يقلل الاحتكاك السطحي بين الطبقات المتجاورة، مما يجعل البكرة غير مستقرة وتنزلق طبقاتها أو تخرج للخارج كالمنظار.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-602-1-1",
    "lesson_id": "les-tis-602-1",
    "question": "ما هي الزاوية الموصى بها لميلان السكين العلوي (Cant Angle) في محطة تقطيع ورق التيسو الدوارة؟",
    "question_en": "What is the recommended cant angle for top shear slitter blades in tissue converting?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "0.25° إلى 0.50° (من 15 إلى 30 دقيقة قوسية)",
        "is_correct": true
      },
      {
        "id": "opt-2",
        "text": "5.0° إلى 10.0°",
        "is_correct": false
      },
      {
        "id": "opt-3",
        "text": "صفر تماماً بالتوازي المطلق",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "45° زاوية قائمة",
        "is_correct": false
      }
    ],
    "explanation": "زاوية الميلان الطفيفة جداً (0.25° - 0.5°) تضمن نقطة تماس وحيدة ونظيفة تقص الألياف دون احتكاك مفرط وتمنع تطاير الغبار والاهتراء السريع.",
    "order": 1,
    "points": 10
  },
  {
    "id": "quiz-603-1-1",
    "lesson_id": "les-tis-603-1",
    "question": "ما هو الإجراء الهندسي الصحيح لعلاج عيب نجوم اللف (Starring) في بكرات التيسو المقطوعة؟",
    "question_en": "What is the correct engineering remedy for starring defects in wound tissue rolls?",
    "type": "multiple_choice",
    "options": [
      {
        "id": "opt-1",
        "text": "زيادة الشد الابتدائي حول القلب الكرتوني وتطبيق شد متناقص (Taper Tension) لتخفيف ضغط الطبقات الخارجية",
        "is_correct": true
      },
      {
        "id": "opt-2",
        "text": "تخفيف الشد حول الكور وزيادة الشد الخارجي",
        "is_correct": false
      },
      {
        "id": "opt-3",
        "text": "إلغاء استخدام درفيل الركوب",
        "is_correct": false
      },
      {
        "id": "opt-4",
        "text": "رش رذاذ ماء على أطراف البكرة",
        "is_correct": false
      }
    ],
    "explanation": "عيب النجوم ينتج عن سحق الطبقات الخارجية المشدودة بقوة لطبقات داخلية ملفوفة برخاوة؛ الحل هو لف قاعدة صلبة حول الكور ثم تخفيف الشد تدريجياً مع زيادة القطر.",
    "order": 1,
    "points": 10
  }
];

// ── 6. Projects (المشاريع التطبيقية الهندسية) ───────────────────────────────────

export const projects: Project[] = [
  {
    "id": "proj-tis-p1-furnish",
    "course_id": "course-tis-103",
    "title": "مشروع المحاكاة والتوازن الاقتصادي لخلطة الألياف (Pulp Furnish Optimization)",
    "title_en": "Pulp Furnish Economic & Quality Optimization Simulation",
    "description": "تصميم مصفوفة خلطة ألياف متقدمة لمنتج مناديل وجه بريميوم (Facial Tissue 13.5 g/m²) تحقق معايير النعومة والقوة بأقل تكلفة طن.",
    "description_en": "Engineering furnish formulation matrix for 13.5 gsm premium facial tissue balancing softness, tensile, and fiber cost.",
    "difficulty": "advanced",
    "category": "المواد الخام والعجائن",
    "objectives": [
      "تحديد نسب خلط NBSK واليوكاليبتوس الأمثل لمعادلة الـ Bulk والنعومة.",
      "حساب العائد الاستثماري وخفض التكلفة لكل طن ورق منتج.",
      "تطبيق معادلات التصنيف الطبقي في هيدبوكس متعدد الطبقات."
    ],
    "materials": [
      "بيانات مواصفات ألياف NBSK و BEKP الفنية (Fiber Length, Coarseness, Freeness).",
      "نموذج إكسل لمعادلات التكلفة والقوة الميكانيكية."
    ],
    "safety_notes": [
      "المشروع تحليلي وهندسي مكتبي - مراعاة حدود مواصفات الأمان لسرعة الماكينة."
    ],
    "steps": [
      {
        "order": 1,
        "title": "تحليل متطلبات جودة المنتج النهائي",
        "description": "تحديد مستهدفات الشد الجاف (MD/CD Tensile)، الشد الرطب، والنعومة Handfeel Target."
      },
      {
        "order": 2,
        "title": "حساب كميات التغذية ونسب الخلط",
        "description": "موازنة نسبة الألياف الطويلة والقصيرة عبر الطبقات الثلاث للهيدبوكس."
      },
      {
        "order": 3,
        "title": "محاكاة خفض التكلفة وحساب حساسية الأداء",
        "description": "اختبار سيناريوهات خفض 5% من ألياف NBSK المكلفة مع تعويض القوة بكيماويات القوة الجافة."
      }
    ],
    "expected_results": "تقرير فني متكامل يحتوي على وصفة الخلطة المثالية، منحنى القوة مقابل التكلفة، وتوصيات التغذية للطبقات الخارجية والداخلية.",
    "troubleshooting": [
      "في حال انخفاض الشد العرضي: زيادة طاقة التكرير النوعية لألياف NBSK بمقدار 10 kWh/t.",
      "في حال انخفاض النعومة: إعادة توزيع ألياف اليوكاليبتوس لتركيزها في طبقة اليانكي بنسبة 100%."
    ],
    "checklist": [
      "مراجعة حسابات الفاقد المادي (Yield).",
      "التأكد من عدم تجاوز حد الشوبر ريجلر الحرج.",
      "تأكيد مطابقة مواصفات النعومة لأجهزة TSA."
    ],
    "estimated_hours": 12,
    "is_published": true
  },
  {
    "id": "proj-tis-p4-creping",
    "course_id": "course-tis-403",
    "title": "مشروع التدقيق الميداني ومعايرة نظام الكوتينج والكريب على أسطوانة اليانكي",
    "title_en": "Yankee Coating & Creping Doctor Mechanical Audit & Setup",
    "description": "إعداد خطة متكاملة لمعايرة حوامل السكاكين، حساب زوايا الكريب، وتوليف مصفوفة رش الكيماويات على اليانكي.",
    "description_en": "Complete engineering audit for creping blade holders, crepe angles calculation, and spray boom chemistry tuning.",
    "difficulty": "advanced",
    "category": "التجفيف والكريب",
    "objectives": [
      "حساب زاوية الكريب الحقيقية وزاوية التآكل لسكين الكريب.",
      "تصميم منحنى الرش العرضي (CD Spray Profile) للقضاء على بقع الرطوبة.",
      "إجراء تحليل جذري لاهتزازات حامل السكين وحماية سطح اليانكي من الخدوش."
    ],
    "materials": [
      "محدد زوايا الكريب الميكانيكي (Bevel Gauge).",
      "أوراق فحص بصمة النيب (Carbon / Pressure Impression Paper).",
      "جهاز قياس الاهتزازات المحمول (Vibration Accelerometer)."
    ],
    "safety_notes": [
      "إيقاف الماكينة وتطبيق إجراءات القفل والعزل (LOTO) أثناء فحص بصمة النيب.",
      "ارتداء قفازات جلدية مضادة للقطع أثناء تداول سكاكين الكريب والتقشير."
    ],
    "steps": [
      {
        "order": 1,
        "title": "فحص ومطابقة استقامة حامل السكين (Blade Holder Profile)",
        "description": "قياس مسافة البروز (Stick-out) والتأكد من ضغط التيوبات الهوائية المتساوي."
      },
      {
        "order": 2,
        "title": "ضبط ومعايرة زاوية الكريب ونيب الضغط",
        "description": "ضبط زاوية الجيب (Pocket Angle) بين 88° و 92° وضبط ضغط السكين عند 1.5 - 2.2 بار."
      },
      {
        "order": 3,
        "title": "تحسين تركيزات مصفوفة الرش (Spray Boom Balancing)",
        "description": "ضبط نسب البوليمر اللاصق ومعدل التقشير والمعدل المعدل لتشكيل فيلم عضوي متجانس."
      }
    ],
    "expected_results": "تحقيق بنية كريب ناعمة ومنتظمة بمعدل 25-30 كريب/سم مع خلو سطح اليانكي من أي اهتزازات وتآكل منتظم للشفرة.",
    "troubleshooting": [
      "تكون طبقة كوتينج ثقيلة وزجاجية: زيادة معدل Release Agent بنسبة 15% فوراً.",
      "ظهور خطوط طولية على اليانكي: استبدال فوري لسكين الكريب وفحص انسداد فونيات الرش المقابلة."
    ],
    "checklist": [
      "فحص زوايا شطف السكين تحت العدسة المكبرة.",
      "التحقق من ضغط ونظافة فوهات الرش العرضية.",
      "تسجيل بصمة ضغط السكين على طول عرض الأسطوانة."
    ],
    "estimated_hours": 15,
    "is_published": true
  },
  {
    "id": "proj-tis-p5-energy",
    "course_id": "course-tis-503",
    "title": "مشروع التدقيق الحراري وحساب اتزان الطاقة لماكينة التيسو (Energy & Mass Balance)",
    "title_en": "Tissue Machine Mass & Energy Balance Thermal Audit",
    "description": "إجراء حسابات الاتزان الحراري الشامل لأسطوانة اليانكي وهود الهواء الساخن لتحديد الفواقد وخفض استهلاك الغاز والبخار.",
    "description_en": "Comprehensive mass and energy balance calculations for Yankee dryer and gas-fired hood to minimize specific energy consumption.",
    "difficulty": "advanced",
    "category": "أنظمة البخار والمرافق",
    "objectives": [
      "حساب معدل التبخير النوعي بالكيلوجرام ماء لكل متر مربع في الساعة.",
      "حساب استهلاك الطاقة النوعي (SEC) بالجيجا جول لكل طن ورق تام الصنع.",
      "تقييم كفاءة الثيرموكمبريسور واسترجاع الحرارة من عوادم الهود."
    ],
    "materials": [
      "حساسات قياس درجات حرارة ورطوبة العادم (Exhaust Dew Point Sensors).",
      "عدادات تدفق البخار ومقاييس ضغط ودرجة حرارة الغاز الطبيعي.",
      "برنامج نمذجة تدفقات الطاقة الحرارية."
    ],
    "safety_notes": [
      "الحذر من الأسطح الساخنة وخطوط البخار عالية الضغط.",
      "استخدام مهمات الوقاية الحرارية المناسبة أثناء أخذ قراءات قنوات عوادم الهود."
    ],
    "steps": [
      {
        "order": 1,
        "title": "جمع بيانات التشغيل الميدانية",
        "description": "تسجيل ضغوط البخار، درجات حرارة هواء الهود (Blow / Exhaust)، ومعدل إنتاج الورق وسرعته."
      },
      {
        "order": 2,
        "title": "حساب اتزان الكتلة للمياه المتبخرة",
        "description": "حساب كمية المياه المزاحة على اليانكي وتوزيعها بين البخار الداخلي ونفخ الهود."
      },
      {
        "order": 3,
        "title": "تحديد فرص استرجاع الطاقة وتخفيض التكاليف",
        "description": "حساب الجدوى الاقتصادية لرفع رطوبة عادم الهود وإعادة استخدام الحرارة لتسخين مياه التغذية."
      }
    ],
    "expected_results": "خارطة حرارية متكاملة لتدفق الطاقة، وتحديد فرص توفير تفوق 8% من إجمالي استهلاك الطاقة بالمصنع.",
    "troubleshooting": [
      "رطوبة عادم الهود منخفضة جداً (< 100 g/kg): تقليل كمية الهواء النقي المدخل وضبط دمبر العادم.",
      "تراكم المكثفات في اليانكي: فحص فرق الضغط على بلف البلوثرو وتعديل فوهة الثيرموكمبريسور."
    ],
    "checklist": [
      "معايرة حساسات الرطوبة النسبية في قنوات الهود.",
      "فحص عوازل خطوط البخار الساخنة للتأكد من عدم وجود تسريبات حرارية.",
      "حساب كمية الغاز الطبيعي المستهلكة لكل طن ورق."
    ],
    "estimated_hours": 14,
    "is_published": true
  }
];

// ── 7. FAQs (الأسئلة الشائعة والمفاهيم الصناعية) ────────────────────────────────

export const faqs: FAQ[] = [
  {
    "id": "faq-1",
    "question": "ما هو المنهاج الجديد المعتمد في Free Tissue Camp؟",
    "answer": "هو منهاج هندسي صناعي متكامل يضم 6 مسارات تخصصية رئيسية و18 دورة تدريبية تغطي دورة حياة تصنيع ورق المناديل من الألياف الخام حتى البكرات النهائية والتحويل، مصمم بهيكلية مزدوجة (Layer A للمشغلين وفنيي الوردية، وLayer B للمهندسين ومديري الإنتاج).",
    "category": "المنهاج والشهادات"
  },
  {
    "id": "faq-2",
    "question": "كيف أتنقل بين متطلبات المشغل (SOPs) والمتطلبات الهندسية (Math & Physics)؟",
    "answer": "كل درس في المنهاج الجديد مقسم بوضوح إلى طبقتين: Layer A تقدم إجراءات التشغيل القياسية والخطوات الميدانية بلغة مبسطة وعملية، بينما Layer B تقدم النماذج الرياضية، الديناميكا الحرارية، والمعادلات الهندسية المتقدمة.",
    "category": "طريقة التعلم"
  },
  {
    "id": "faq-3",
    "question": "لماذا تم تخصيص مسار كامل لأسطوانة اليانكي وأنظمة الكريب والطلاء؟",
    "answer": "أسطوانة اليانكي وسكين الكريب ونظام الرش (Coating) تمثل قلب ماكينة التيسو والسر التكنولوجي الذي يحول الورقة المسطحة إلى منديل فائق النعومة والامتصاص. أي خلل فيها يؤدي مباشرة إلى تلف ميكانيكي بملايين الدولارات أو انهيار جودة المنتج.",
    "category": "التكنولوجيا والماكينات"
  },
  {
    "id": "faq-4",
    "question": "هل يغطي المنهاج ماكينات التقطيع وإعادة اللف (Slitter Rewinders)؟",
    "answer": "نعم، المسار السادس مخصص بالكامل لهندسة وتشغيل ماكينات اللف والتقطيع، متناولاً سلامة المشغل، زوايا سكاكين القص، التحكم في الشد المتناقص، وثالوث اللف الفيزيائي (TNT: Tension, Nip, Torque) لمنع عيوب البكرات مثل التليسكوب والنجوم.",
    "category": "المسارات التدريبية"
  },
  {
    "id": "faq-5",
    "question": "هل شهادات المنصة معتمدة ومجانية؟",
    "answer": "نعم، المنصة مجانية 100% بالكامل، وتوفر شهادات إتمام رقمية معتمدة برقم تسلسلي موثق فور إنهاء اختبارات المسار واجتياز التقييمات بنجاح.",
    "category": "الشهادات والاعتمادات"
  },
  {
    "id": "faq-6",
    "question": "كيف يمكن لمصانع الورق الرجوع للمحتوى القديم إذا رغبت في ذلك؟",
    "answer": "تحتفظ إدارة المنصة بنسخة احتياطية كاملة ومضمونة (Legacy Backup v1.0) مع أداة تبديل سريعة، مما يتيح التبديل بين المنهاج الجديد والمنهاج السابق بمرونة تامة.",
    "category": "الدعم الفني والمنظومة"
  }
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
