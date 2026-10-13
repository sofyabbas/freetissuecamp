const fs = require('fs');
const path = require('path');

const outputDir = path.resolve(__dirname, '../public/images/courses');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Diagram metadata
const diagrams = [
  // Path 1: Raw Materials & Fibers
  {
    id: 'tis-101-fiber-anatomy.svg',
    titleEn: 'Hardwood vs Softwood Fiber Anatomy',
    titleAr: 'مقارنة تشريح ألياف الخشب الصلب (Eucalyptus) والخشب اللين (NBSK)',
    primaryColor: '#0284c7',
    badge: 'TAPPI T 259 / ISO Fiber Morphology',
    items: [
      { label: 'Eucalyptus (Hardwood)', desc: 'Length: 0.8 - 1.1 mm | Width: 14 - 20 µm | Millions of fibers/g for supreme softness' },
      { label: 'NBSK (Softwood)', desc: 'Length: 2.5 - 3.5 mm | Width: 28 - 40 µm | Thick cell wall for network tensile strength' },
      { label: 'Cell Wall Anatomy', desc: 'S1, S2, S3 layers with lumen hollow center collapsing under drying into flat ribbons' }
    ],
    type: 'comparison'
  },
  {
    id: 'tis-101-bale-safety.svg',
    titleEn: 'Pulp Bale De-wiring & Inspection Layout',
    titleAr: 'مخطط فك أسلاك بالات العجينة وإجراءات السلامة وفحص الاستلام',
    primaryColor: '#e11d48',
    badge: 'SOP-BALE-01 / Zero Energy Safety',
    items: [
      { label: 'Pulp Bale Destacker', desc: 'Heavy forklift zone, safety clearance 3.0 m, mechanical staging' },
      { label: 'Pneumatic Wire Cutter', desc: 'High-tension de-wiring, anti-whip safety guard, cut wire recycling chute' },
      { label: 'Inspection Conveyor', desc: 'Visual dirt check, moisture sampling probes, reject kick-off station' }
    ],
    type: 'flow'
  },
  {
    id: 'tis-101-quality-triangle.svg',
    titleEn: 'The Tissue Quality Triangle Trade-offs',
    titleAr: 'مثلث جودة ورق المناديل: التوازن الحرج بين النعومة والمتانة والامتصاص',
    primaryColor: '#16a34a',
    badge: 'Quality Engineering Metric',
    items: [
      { label: 'Handfeel Softness (النعومة)', desc: 'Surface micro-crepes and free fiber ends (High Eucalyptus furnish)' },
      { label: 'Tensile Strength (المتانة)', desc: 'Inter-fiber hydrogen bonding and long fiber refining (NBSK furnish)' },
      { label: 'Absorption & Bulk (الامتصاص والامتلاء)', desc: 'Capillary pore network via Lucas-Washburn dynamics' }
    ],
    type: 'triangle'
  },
  {
    id: 'tis-102-recipes.svg',
    titleEn: 'Furnish Recipe Matrix by Tissue Grade',
    titleAr: 'مصفوفة خلطات الألياف حسب صنف المنتج (وجه، تواليت، مطبخ، مناديل صناعية)',
    primaryColor: '#4f46e5',
    badge: 'Mill Furnish Standards',
    items: [
      { label: 'Facial Tissue (13.5 gsm)', desc: '75-85% Eucalyptus + 15-25% NBSK (Max softness)' },
      { label: 'Toilet Paper (16-19 gsm)', desc: '60-70% Eucalyptus + 30-40% NBSK or High Deinked Pulp' },
      { label: 'Kitchen Towel (20-24 gsm)', desc: '40-50% Eucalyptus + 50-60% NBSK + High PAE Resin' }
    ],
    type: 'matrix'
  },
  {
    id: 'tis-102-pulper-flow.svg',
    titleEn: 'Hydrapulper Rotor & Helical Flow Patterns',
    titleAr: 'ديناميكا دوار الحلالة الهيدروليكية (Pulper Rotor) ونمط الدوران الحلزوني',
    primaryColor: '#0d9488',
    badge: 'Voith / Valmet Hydrapulper Design',
    items: [
      { label: 'Vortex Inflow', desc: 'Helical suction funnel drawing bales directly into high-shear rotor core' },
      { label: 'Consistency Control (C = 4-6%)', desc: 'Optimum fiber-to-fiber attrition without hydraulic drag overload' },
      { label: 'Junk Trap & Ragger', desc: 'Automatic removal of tramp metal, baling wires, and heavy plastic debris' }
    ],
    type: 'vortex'
  },
  {
    id: 'tis-102-consistency-loop.svg',
    titleEn: 'Inline Consistency Control Loop Schematic',
    titleAr: 'مخطط حلقة التحكم المغلقة في تركيز العجينة (PID Consistency Loop)',
    primaryColor: '#2563eb',
    badge: 'ISA S5.1 Instrumentation P&ID',
    items: [
      { label: 'Rotary Consistency Transmitter', desc: 'Shear-force sensing blade measuring slurry viscosity in real time' },
      { label: 'DCS Controller (PID Algorithm)', desc: 'Set-point comparison with feed-forward stock chest level compensation' },
      { label: 'Dilution Water Control Valve', desc: 'Fast-response linear globe valve modulating white water flow' }
    ],
    type: 'loop'
  },
  {
    id: 'tis-103-lucas-washburn.svg',
    titleEn: 'Lucas-Washburn Capillary Absorption Model',
    titleAr: 'نموذج لوكاس-واشبورن لفيزياء الامتصاص والخاصية الشعرية في ورق التيسو',
    primaryColor: '#9333ea',
    badge: 'Fluid Dynamics dh/dt = (r·γ·cosθ)/(4η·h)',
    items: [
      { label: 'Pore Radius (r)', desc: 'Maximized via low press nip pressure and high Yankee creping micro-folds' },
      { label: 'Contact Angle (θ)', desc: 'Kept near 0° (Hydrophilic cellulose) avoiding excessive hydrophobic debonders' },
      { label: 'Surface Tension (γ)', desc: 'Liquid penetration dynamics driving spontaneous capillary suction' }
    ],
    type: 'physics'
  },
  {
    id: 'tis-103-stratified-headbox.svg',
    titleEn: '3-Layer Stratified Headbox Cross Section',
    titleAr: 'مقطع عرضي لصندوق التدفق ثلاثي الطبقات والشرائح التوجيهية (Vanes)',
    primaryColor: '#c026d3',
    badge: 'Valmet OptiFlo / Voith MasterJet II',
    items: [
      { label: 'Yankee Side (Layer 1)', desc: '100% Eucalyptus hardwood for velvety tactile skin contact' },
      { label: 'Center Core (Layer 2)', desc: '100% NBSK long softwood fibers for tensile carrier structure' },
      { label: 'Air Side (Layer 3)', desc: '100% Eucalyptus hardwood for identical double-sided softness' }
    ],
    type: 'stratified'
  },
  {
    id: 'tis-103-cost-model.svg',
    titleEn: 'Furnish Cost vs Softness Optimization Curves',
    titleAr: 'منحنيات التوازن الاقتصادي بين تكلفة العجينة ومؤشرات النعومة والمتانة',
    primaryColor: '#d97706',
    badge: 'Mill Economic Model $/Ton',
    items: [
      { label: 'NBSK Long Fiber Cost Penalty', desc: '$850 - $1100 / ton virgin softwood pulp' },
      { label: 'BEKP Hardwood Fiber Cost', desc: '$650 - $850 / ton virgin eucalyptus pulp' },
      { label: 'Optimization Sweet Spot', desc: 'Maximum BEKP ratio compensated by targeted wet/dry chemical additives' }
    ],
    type: 'curves'
  },

  // Path 2: Stock Prep & Chemistry
  {
    id: 'tis-201-stockprep-flow.svg',
    titleEn: 'Stock Prep Flow Architecture & Chests',
    titleAr: 'المخطط الهندسي لتدفق العجينة من الحلالة وخزانات الخلط إلى ماكينة الورق',
    primaryColor: '#0891b2',
    badge: 'Stock Preparation Architecture',
    items: [
      { label: 'Pulper & Dump Chest', desc: 'Consistency C = 4.5%, heavy junk extraction' },
      { label: 'Refining & Blend Chest', desc: 'Dedicated NBSK disc refining line prior to furnish mixing' },
      { label: 'Machine Chest & Fan Pump', desc: 'Precision dilution to C = 0.18-0.25% at headbox manifold' }
    ],
    type: 'flow'
  },
  {
    id: 'tis-201-chemicals.svg',
    titleEn: 'Wet End Chemical Families & Injection Points',
    titleAr: 'خارطة عائلات الكيماويات الرطبة ونقاط الحقن في مسار العجينة',
    primaryColor: '#059669',
    badge: 'Tissue Chemical Additives Map',
    items: [
      { label: 'Permanent Wet Strength (PAE)', desc: 'Dosed at thick stock pump suction, pH 6.8 - 7.4' },
      { label: 'Dry Strength Agents (CMC / GPAM)', desc: 'Dosed prior to machine chest for hydrogen bond amplification' },
      { label: 'Debonders & Softeners', desc: 'Cationic surfactants added to Yankee layer stock to disrupt bonding' }
    ],
    type: 'matrix'
  },
  {
    id: 'tis-201-dosing-skid.svg',
    titleEn: 'Chemical Dosing Skid Instrumentation Diagram',
    titleAr: 'مخطط وحدة حقن ومعايرة الكيماويات الرطبة ومضخات الجرعات التناسبية',
    primaryColor: '#ea580c',
    badge: 'Automated Dosing System P&ID',
    items: [
      { label: 'Progressive Cavity Pump', desc: 'Positive displacement with variable frequency drive (VFD)' },
      { label: 'Magnetic Flowmeter (Magmeter)', desc: 'Accurate inline volumetric mass flow monitoring (±0.2%)' },
      { label: 'Pulsation Dampener & Check Valve', desc: 'Uniform continuous chemical spray without pressure waves' }
    ],
    type: 'loop'
  },
  {
    id: 'tis-202-refining-philosophy.svg',
    titleEn: 'LCR Refiner Fiber Development vs Cutting',
    titleAr: 'فلسفة تكرير ألياف التيشيو: الرجفان السطحي مقابل التقطيع العنيف',
    primaryColor: '#4f46e5',
    badge: 'Low Consistency Disc Refining',
    items: [
      { label: 'Gentle Fibrillation (Target)', desc: 'Low specific edge load SEL < 1.0 J/m unravels microfibrils' },
      { label: 'Harmful Fiber Cutting (Avoid)', desc: 'Excessive SEL shears fiber length, destroys drainage, spikes °SR' },
      { label: 'Freeness Control Window', desc: 'Maintain Canadian Standard Freeness CSF 520-580 ml (28-34 °SR)' }
    ],
    type: 'comparison'
  },
  {
    id: 'tis-202-sr-tester.svg',
    titleEn: 'Schopper-Riegler Tester ISO 5267-1 Diagram',
    titleAr: 'جهاز قياس درجة الشوبر ريجلر (Schopper-Riegler) لنزح المياه وفحص التكرير',
    primaryColor: '#0284c7',
    badge: 'ISO 5267-1 / TAPPI T 227 Laboratory Standard',
    items: [
      { label: 'Test Cylinder & Wire Cone', desc: 'Standard 2.0 g oven-dry pulp sample suspended in 1000 ml water' },
      { label: 'Orifice Discharge Split', desc: 'Bottom continuous discharge orifice vs side measuring funnel' },
      { label: 'Reading Scale (°SR)', desc: 'Direct measurement of dewatering resistance (10 - 90 °SR)' }
    ],
    type: 'device'
  },
  {
    id: 'tis-202-pressure-screen.svg',
    titleEn: 'Pressure Screen Rotor & Wedgewire Basket',
    titleAr: 'منخل الضغط لتنقية الشوائب والدوار النبضي (Wedgewire Screen Basket)',
    primaryColor: '#6366f1',
    badge: 'Centrifugal Screening Technology',
    items: [
      { label: 'Hydrofoil Rotor Blades', desc: 'Generates negative suction pulses preventing basket slot blinding' },
      { label: 'Wedgewire Slots (0.15 - 0.25 mm)', desc: 'Rejects shives, stickies, and unrefined fiber bundles' },
      { label: 'Accepts Chamber', desc: 'Ultra-clean stock directed straight to machine headbox' }
    ],
    type: 'rotor'
  },
  {
    id: 'tis-203-sel-model.svg',
    titleEn: 'Specific Edge Load Bar Geometry Model',
    titleAr: 'النموذج الهندسي للحمل النوعي لحواف السكاكين (Specific Edge Load - SEL)',
    primaryColor: '#e11d48',
    badge: 'Brecht-Siewert Refining Theory SEL = (Pnet / CEL)',
    items: [
      { label: 'Bar Width & Groove Depth', desc: 'Fine bar pattern 2.5 mm bar / 3.0 mm groove for tissue pulp' },
      { label: 'Cutting Edge Length (CEL)', desc: 'Calculated in km/s based on rotor speed and disc geometry' },
      { label: 'Specific Edge Load (SEL)', desc: 'Tuned precisely between 0.6 to 1.0 J/m for gentle fibrillation' }
    ],
    type: 'physics'
  },
  {
    id: 'tis-203-pae-chemistry.svg',
    titleEn: 'PAE Azetidinium Cross-linking Mechanism',
    titleAr: 'آلية الارتباط الكيميائي والتصالب لحلقات الأزيتيدينيوم في راتنج PAE',
    primaryColor: '#16a34a',
    badge: 'Polyamidoamine-Epichlorohydrin Chemistry',
    items: [
      { label: 'Cationic Azetidinium Ring', desc: 'Electrostatically attracted to anionic cellulose carboxyl groups' },
      { label: 'Thermal Cross-Linking on Yankee', desc: 'Forms irreversible water-insoluble covalent network' },
      { label: 'Wet Tensile Retention', desc: 'Delivers 25-35% of dry tensile strength when wet' }
    ],
    type: 'chemistry'
  },
  {
    id: 'tis-203-zeta-potential.svg',
    titleEn: 'Zeta Potential & Colloidal Charge Window',
    titleAr: 'منحنى جهد زيتا (Zeta Potential) والنافذة المثالية للشحنة الغروية في العجينة',
    primaryColor: '#0d9488',
    badge: 'Mütek PCD Streaming Current Model',
    items: [
      { label: 'Anionic Trash Window', desc: 'Negative charge < -25 mV leads to chemical waste and foam' },
      { label: 'Optimal Window (-5 to -15 mV)', desc: 'Near-zero slightly anionic state ensures maximum chemical retention' },
      { label: 'Overcationization Danger', desc: 'Positive charge > 0 mV repels functional resins and creates sizing defects' }
    ],
    type: 'curves'
  },

  // Path 3: Forming Technologies
  {
    id: 'tis-301-forming-layout.svg',
    titleEn: 'Crescent Former Roll Layout & Fabric Run',
    titleAr: 'مخطط درافيل قسم التشكيل (Crescent Former) ومسار سلك التشكيل ولباد العصر',
    primaryColor: '#0284c7',
    badge: 'High-Speed Crescent Former 2200 m/min',
    items: [
      { label: 'Solid Forming Roll (CFR)', desc: 'Centrifugal dewatering zone where jet enters nip of wire and felt' },
      { label: 'Outer Forming Wire', desc: 'Porous synthetic fabric supporting water drainage into saveall' },
      { label: 'Inner Press Felt', desc: 'Carries wet web safely through forming and transfers to Yankee' }
    ],
    type: 'machine'
  },
  {
    id: 'tis-301-saveall.svg',
    titleEn: 'Saveall Drainage & Centrifugal Deflector Geometry',
    titleAr: 'حوض تجميع المياه البيضاء (Saveall) وحواجز الطرد المركزي ونزع المياه',
    primaryColor: '#0891b2',
    badge: 'Hydraulic Saveall Hydrodynamics',
    items: [
      { label: 'Centrifugal Throw-off Vane', desc: 'Directs expelled water cleanly without mist bounce-back' },
      { label: 'Saveall White Water Pan', desc: 'Gravity collection tray feeding Primary Fan Pump mixing silo' },
      { label: 'Deflector Blades', desc: 'Prevents air entrapment and fabric water rewetting' }
    ],
    type: 'flow'
  },
  {
    id: 'tis-301-walkdown.svg',
    titleEn: 'Forming Section Walk-Down Inspection Points',
    titleAr: 'نقاط الفحص الميداني لجولة المشغل في قسم التشكيل (Walk-Down)',
    primaryColor: '#d97706',
    badge: 'SOP-FORM-01 Inspection Sequence',
    items: [
      { label: 'Headbox Apron & Slice Lip', desc: 'Inspection for fiber buildup, streaks, and uniform jet trajectory' },
      { label: 'Fabric Tensiometer & Auto-Guides', desc: 'Verify pneumatic guide bellows and oscillating shower pressure' },
      { label: 'Saveall Drain Chutes', desc: 'Check for overflowing pans and air vacuum stability' }
    ],
    type: 'matrix'
  },
  {
    id: 'tis-302-former-types.svg',
    titleEn: 'Crescent Former vs C-Former Geometry',
    titleAr: 'مقارنة هندسية بين ماكينات الهلال (Crescent Former) والتوين واير (C-Former)',
    primaryColor: '#4f46e5',
    badge: 'Tissue Machine Geometry Comparison',
    items: [
      { label: 'Crescent Former', desc: 'Wire + Felt over solid roll; supreme sheet formation, no vacuum suction' },
      { label: 'Twin-Wire C-Former', desc: 'Wire + Wire over suction roll; suited for heavy towel & deinked grades' },
      { label: 'Fourdrinier (Legacy)', desc: 'Flat wire forming limited to speeds < 800 m/min' }
    ],
    type: 'comparison'
  },
  {
    id: 'tis-302-jet-to-wire.svg',
    titleEn: 'Jet-to-Wire Impingement & MD/CD Orientation',
    titleAr: 'نسبة سرعة نفاث العجينة إلى السلك (J/W Ratio) وتوجيه الألياف في الاتجاهين',
    primaryColor: '#9333ea',
    badge: 'Sheet Formation Physics: Rush vs Drag',
    items: [
      { label: 'Rush Condition (J/W > 1.05)', desc: 'Jet faster than wire, tends to align fibers in MD' },
      { label: 'Square Sheet Target (J/W = 0.98 - 1.02)', desc: 'Maximum fiber randomness; ideal MD/CD tensile ratio near 1.5' },
      { label: 'Drag Condition (J/W < 0.95)', desc: 'Wire pulls fibers; high MD tensile but brittle CD edge strength' }
    ],
    type: 'curves'
  },
  {
    id: 'tis-302-edge-guides.svg',
    titleEn: 'Edge Squirt Nozzles & Fabric Auto-Guides',
    titleAr: 'نوافير تشذيب الحواف ونظام التوجيه الهوائي الآلي للأقمشة',
    primaryColor: '#e11d48',
    badge: 'Web Edge & Guiding Control',
    items: [
      { label: 'High-Pressure Edge Squirts', desc: 'Ultra-fine needle water jets cutting clean sheet trim edges' },
      { label: 'Pneumatic Palm Sensor', desc: 'Continuously tracks fabric edge position with rapid response' },
      { label: 'Proportional Guide Roll', desc: 'Pivoting roll correcting lateral fabric drift automatically' }
    ],
    type: 'device'
  },
  {
    id: 'tis-303-drainage-ptr.svg',
    titleEn: 'Centrifugal Dewatering Pressure Balance: P = T / R',
    titleAr: 'معادلة اتزان ضغط النزح بالطرد المركزي حول درفيل التشكيل P = T / R',
    primaryColor: '#16a34a',
    badge: 'Forming Physics: Dewatering Pressure',
    items: [
      { label: 'Fabric Tension (T)', desc: 'Tension applied to synthetic wire (6.0 - 8.5 kN/m)' },
      { label: 'Forming Roll Radius (R)', desc: 'Radius of solid roll (typically 0.7 - 1.0 m)' },
      { label: 'Drainage Pressure (P)', desc: 'Centrifugal hydrostatic pressure forcing water through fabric mesh' }
    ],
    type: 'physics'
  },
  {
    id: 'tis-303-tad-flow.svg',
    titleEn: 'Through-Air Drying (TAD) Honeycomb Drum Flow',
    titleAr: 'ماكينات التجفيف بالهواء النافذ (TAD) ودرفيل قرص العسل (Honeycomb Drum)',
    primaryColor: '#ea580c',
    badge: 'TAD Premium Tissue Technology',
    items: [
      { label: 'TAD Structured Fabric', desc: '3D woven mold creating plush cushions without mechanical press' },
      { label: 'Honeycomb Vacuum Drum', desc: 'High-open-area rotating cylinder pulling hot air through sheet' },
      { label: 'Bulk Retention', desc: 'Delivers 100% higher water absorption bulk than conventional Crescent' }
    ],
    type: 'machine'
  },
  {
    id: 'tis-303-ntt-atmos.svg',
    titleEn: 'Valmet TAD vs Andritz NTT vs Voith ATMOS Comparison',
    titleAr: 'مقارنة تقنيات التيسو الهيكلية الموفرة للطاقة: TAD مقابل NTT ومقابل ATMOS',
    primaryColor: '#059669',
    badge: 'Advanced Structured Tissue Technologies',
    items: [
      { label: 'Valmet TAD', desc: 'Gold standard premium bulk; highest energy consumption' },
      { label: 'Andritz PrimeLine NTT', desc: 'Textured belt + Shoe Press; 35% less energy with near-TAD bulk' },
      { label: 'Voith ATMOS', desc: 'Molded fabric + vacuum hot air with 100% recycled furnish compatibility' }
    ],
    type: 'comparison'
  },

  // Path 4: Pressing, Yankee & Creping
  {
    id: 'tis-401-yankee-overview.svg',
    titleEn: 'Yankee Cylinder & Creping Doctor Action',
    titleAr: 'أسطوانة اليانكي وسكين الكريب: ميكانيزم التجفيف والكرمشة السطحية',
    primaryColor: '#0284c7',
    badge: 'Yankee Dryer & Doctor Geometry',
    items: [
      { label: 'Cast Iron / Steel Yankee', desc: 'Giant 15-18 ft drying cylinder operating at 4-10 bar steam pressure' },
      { label: 'Creping Doctor Blade', desc: 'High-precision steel/ceramic blade peeling sheet and forming micro-crepes' },
      { label: 'Cleaning & Cutoff Doctors', desc: 'Secondary oscillating blades conditioning shell and handling sheet breaks' }
    ],
    type: 'machine'
  },
  {
    id: 'tis-401-doctor-holder.svg',
    titleEn: 'Creping Blade Pocket Angle & Holder Geometry',
    titleAr: 'هندسة حامل سكين الكريب (Doctor Holder) وزاوية الجيب (Pocket Angle)',
    primaryColor: '#4f46e5',
    badge: 'Kadant / Voith Doctor Mechanical Setup',
    items: [
      { label: 'Blade Stick-out', desc: 'Free unsupported blade projection calibrated strictly to 25.0 ± 1.0 mm' },
      { label: 'Pocket Angle (88° - 92°)', desc: 'Angle between blade face and Yankee tangent controlling sheet impact' },
      { label: 'Blade Loading Pressure', desc: 'Pneumatic tube loading at 1.5 - 2.2 bar for uniform line load' }
    ],
    type: 'device'
  },
  {
    id: 'tis-401-blade-change.svg',
    titleEn: 'Doctor Blade Replacement Safety Sequence',
    titleAr: 'التسلسل الإجرائي لتبديل سكين الكريب بأمان تام (SOP-DRY-01)',
    primaryColor: '#e11d48',
    badge: 'SOP-DRY-01 Safe Blade Change Protocol',
    items: [
      { label: '1. Unload & Lockout', desc: 'Retract doctor holder, isolate pneumatic pressure, crawl speed verify' },
      { label: '2. Cut-Proof PPE & Extraction', desc: 'Kevlar gloves, pull old blade smoothly into safe disposal bin' },
      { label: '3. Clean Jaw & Insert New Blade', desc: 'Scrape jaw buildup, slide new bevel blade, verify edge stop latches' }
    ],
    type: 'flow'
  },
  {
    id: 'tis-402-coating-triangle.svg',
    titleEn: 'Yankee Coating Chemistry Triangle',
    titleAr: 'مثلث كيمياء طلاء أسطوانة اليانكي: اللاصق والمقشر والمعدل (Adhesive/Release/Modifier)',
    primaryColor: '#d97706',
    badge: 'Coating Tribology Matrix',
    items: [
      { label: 'Adhesive Resin (PAAM / Polyamine)', desc: 'Controls sheet adhesion, transfers heat, protects Yankee shell' },
      { label: 'Release Agent (Mineral/Vegetable Oil)', desc: 'Softens coating film, eases blade creping, prevents chatter marks' },
      { label: 'Modifier (Phosphate / Polyol)', desc: 'Prevents hard glassy coating build-up and maintains film plasticity' }
    ],
    type: 'triangle'
  },
  {
    id: 'tis-402-spr-boom.svg',
    titleEn: 'Suction Pressure Roll & Spray Boom Geometry',
    titleAr: 'درفيل العصر والشفط (SPR) وعارضة رش الكيماويات على أسطوانة اليانكي',
    primaryColor: '#059669',
    badge: 'Yankee Nip & Chemical Spray Boom',
    items: [
      { label: 'Suction Pressure Roll (SPR)', desc: 'Perforated roll pressing web at 80-95 kN/m transferring sheet to Yankee' },
      { label: 'Spray Boom Distance (100 - 150 mm)', desc: 'Targeted fan spray overlap (50%) ensuring uniform CD organic film' },
      { label: 'Air Cap & Water Mist Dampers', desc: 'Prevents atomized chemical droplets from drifting into dry hood' }
    ],
    type: 'machine'
  },
  {
    id: 'tis-402-blade-footprint.svg',
    titleEn: 'Doctor Blade Wear Footprint & Bevel Lands',
    titleAr: 'تحليل بصمة تآكل شفرة الكريب (Wear Land) وفحصها بالمجهر الضوئي',
    primaryColor: '#c026d3',
    badge: 'Optical Microscopy Blade Wear QA',
    items: [
      { label: 'Blade Bevel Angle (10° - 20°)', desc: 'Initial ground bevel angle matched to Yankee pocket geometry' },
      { label: 'Wear Land Width (0.8 - 1.2 mm)', desc: 'Contact footprint width indicating healthy steady-state wear' },
      { label: 'Wear Footprint Defects', desc: 'Uneven CD wear land warns of uneven blade loading or holder deflection' }
    ],
    type: 'device'
  },
  {
    id: 'tis-403-creping-dynamics.svg',
    titleEn: 'Creping Delamination & Micro-fold Frequency',
    titleAr: 'ديناميكا الكرمشة المجهرية وتردد التجاعيد وتفكك الروابط بين الألياف',
    primaryColor: '#4f46e5',
    badge: 'Viscoelastic High-Speed Sheet Impact',
    items: [
      { label: 'Speed Ratio (Draw %)', desc: 'Yankee cylinder speed vs Reel speed (15% - 25% crepe ratio)' },
      { label: 'Micro-Fold Frequency (f)', desc: '20 to 35 crepes per centimeter creating supreme handfeel bulk' },
      { label: 'Inter-fiber Delamination', desc: 'Internal fiber debonding without web disruption increases water absorption' }
    ],
    type: 'physics'
  },
  {
    id: 'tis-403-shoe-press.svg',
    titleEn: 'Shoe Press (ViscoNip) Pressure Distribution',
    titleAr: 'توزيع الضغط في عصارة الشو برس (Shoe Press) وحفظ سماكة البلك',
    primaryColor: '#0891b2',
    badge: 'Shoe Pressing: P(x) Curve vs SPR',
    items: [
      { label: 'Wide Nip Contact (80 - 120 mm)', desc: '4x dwell time under pressure compared to conventional rolls' },
      { label: 'Reduced Peak Pressure (< 6 MPa)', desc: 'Gentle water extraction prevents fiber crushing and bulk loss' },
      { label: 'After-Press Dryness (+46%)', desc: 'Delivers 46% post-press dryness saving massive Yankee thermal energy' }
    ],
    type: 'curves'
  },
  {
    id: 'tis-403-syd-chatter.svg',
    titleEn: 'Steel Yankee Shell & Chatter Vibration Spectrum',
    titleAr: 'إجهادات أسطوانات الصلب (SYD) وطيف اهتزازات شفرة الكريب (Chatter Marks)',
    primaryColor: '#e11d48',
    badge: 'FFT Vibration Analysis on Yankee',
    items: [
      { label: 'Steel Yankee Shell Advantage', desc: 'Thinner shell, higher thermal conductivity, welded construction' },
      { label: 'Chatter Frequency Band (100 - 300 Hz)', desc: 'Harmonic blade resonance etching washboard marks on cylinder' },
      { label: 'Mitigation Strategies', desc: 'Holder damping adjustment, coating film elasticity tuning, blade ceramic tips' }
    ],
    type: 'curves'
  },

  // Path 5: Steam, Hoods & Utilities
  {
    id: 'tis-501-steam-joint.svg',
    titleEn: 'Yankee Rotary Steam Joint & Siphon Assembly',
    titleAr: 'الوصلة البخارية الدوارة (Steam Rotary Joint) ومجموعة السيفون الداخلي',
    primaryColor: '#0284c7',
    badge: 'High-Pressure Steam Joint Mechanics',
    items: [
      { label: 'Live Steam Inflow (4 - 10 bar)', desc: 'High-pressure saturated steam entered through journal center' },
      { label: 'Stationary Siphon Shoes', desc: 'Siphons hovering 1.5 - 2.5 mm above shell inner grooved surface' },
      { label: 'Blowthrough Steam & Condensate', desc: 'Continuous evacuation preventing insulating condensate rimming' }
    ],
    type: 'machine'
  },
  {
    id: 'tis-501-vacuum-pump.svg',
    titleEn: 'Liquid Ring Vacuum Pump Cutaway & Operation',
    titleAr: 'مضخة الفاكيوم ذات الحلقة السائلة (Liquid Ring Vacuum Pump) وطريقة عملها',
    primaryColor: '#0d9488',
    badge: 'Nash / Gardner Denver Liquid Ring Vacuum',
    items: [
      { label: 'Eccentric Rotor & Impeller', desc: 'Blades rotating eccentrically relative to pump casing' },
      { label: 'Seal Water Liquid Ring', desc: 'Centrifugal seal ring creating compressing and expanding gas chambers' },
      { label: 'Suction Capacity (-40 to -65 kPa)', desc: 'Extracts massive water vapor loads from felt uhle boxes and SPR' }
    ],
    type: 'rotor'
  },
  {
    id: 'tis-501-steam-traps.svg',
    titleEn: 'Steam Trap Mechanisms: Float vs Thermodynamic',
    titleAr: 'مصائد البخار (Steam Traps): مقارنة المصيدة الميكانيكية بالثيرموديناميكية',
    primaryColor: '#ea580c',
    badge: 'Condensate Drainage Equipment',
    items: [
      { label: 'Ball Float Steam Trap', desc: 'Continuous modulating discharge responding to condensate density' },
      { label: 'Thermodynamic Disc Trap', desc: 'Cyclic operation utilizing dynamic flash steam pressure changes' },
      { label: 'Trap Failure Modes', desc: 'Blowing steam leaks energy; stuck closed traps water-log equipment' }
    ],
    type: 'comparison'
  },
  {
    id: 'tis-502-shower-nozzle.svg',
    titleEn: 'HP Oscillating Needle Shower Overlap & Geometry',
    titleAr: 'رشاشات الغسيل الإبرية عالية الضغط وتزامن شوط التذبذب مع دوران اللباد',
    primaryColor: '#16a34a',
    badge: 'SOP-SHOWER-02 Felt Conditioning',
    items: [
      { label: 'Needle Jet Pressure (25 - 32 bar)', desc: 'High-impact needle stream penetrating deep felt pores' },
      { label: 'Stroke Synchronization', desc: 'Oscillation speed matched to felt loop length preventing striping cuts' },
      { label: 'Automatic Safety Interlock', desc: 'Instant water valve shutoff within 5 seconds if oscillator stops' }
    ],
    type: 'device'
  },
  {
    id: 'tis-502-gas-burner.svg',
    titleEn: 'Maxon Combustion Gas Burner & Air Ratio System',
    titleAr: 'برنر احتراق الغاز الطبيعي للهود ونظام ضبط نسبة الهواء والوقود التكافؤية',
    primaryColor: '#e11d48',
    badge: 'High-Efficiency Gas Burner NFPA 86',
    items: [
      { label: 'Combustion Chamber & Burner Cone', desc: 'Generates up to 510°C hot air for high-velocity Yankee Hood' },
      { label: 'Excess Air Ratio (λ = 1.15 - 1.25)', desc: 'Guarantees 100% complete combustion with CO emissions < 50 ppm' },
      { label: 'UV Flame Scanner Scanner', desc: 'Millisecond optical flame safeguard shutting main fuel valve on loss' }
    ],
    type: 'machine'
  },
  {
    id: 'tis-503-thermocompressor.svg',
    titleEn: 'Thermocompressor Laval Supersonic Nozzle & Spindle',
    titleAr: 'الثيرموكمبريسور وفوهة لافال الأسرع من الصوت وإبرة التحكم في ضغط البخار',
    primaryColor: '#6366f1',
    badge: 'Supersonic Steam Jet Heat Pump',
    items: [
      { label: 'Motive High-Pressure Steam (12-16 bar)', desc: 'Expands through convergent-divergent nozzle to Mach 2 supersonic speed' },
      { label: 'Suction Chamber (Blowthrough Steam)', desc: 'Entrains low-pressure Yankee discharge steam without mechanical parts' },
      { label: 'Modulating Spindle Actuator', desc: 'DCS modulated needle valve adjusting throat area according to drying load' }
    ],
    type: 'physics'
  },
  {
    id: 'tis-503-rimming-dp.svg',
    titleEn: 'Yankee Condensate Rimming & Siphon Evacuation dP',
    titleAr: 'ظاهرة حلقة التكثيف (Rimming) وفرق الضغط المطلوب لسحب مياه السيفون',
    primaryColor: '#0284c7',
    badge: 'Yankee Heat Transfer Mechanics',
    items: [
      { label: 'Puddling to Rimming Transition', desc: 'At speeds > 350 m/min condensate forms uniform insulating water ring' },
      { label: 'Differential Pressure (dP)', desc: 'Maintained at 0.8 - 1.4 bar to continuously evacuate condensate' },
      { label: 'Heat Transfer Resistance', desc: '1.0 mm water layer reduces Yankee heat transfer by over 30%' }
    ],
    type: 'curves'
  },
  {
    id: 'tis-503-hood-daf.svg',
    titleEn: 'Yankee Hood Air Impingement & DAF Water Clarifier',
    titleAr: 'اندفاع هواء الهود فائق السرعة ووحدة تعويم الهواء المذاب (DAF) لمعالجة المياه',
    primaryColor: '#059669',
    badge: 'Energy & Effluent Utilities',
    items: [
      { label: 'High Velocity Impingement Nozzles', desc: 'Air jets at 140-160 m/s break sheet boundary layer evaporating 60% of water' },
      { label: 'Heat Recovery Economizer', desc: 'Hood exhaust heat preheats boiler feed water and machine process showers' },
      { label: 'Dissolved Air Flotation (DAF)', desc: 'Micro-bubble flotation clarifying white water with >98% solids recovery' }
    ],
    type: 'machine'
  }
];

function generateSvgContent(d) {
  const pCol = d.primaryColor || '#0284c7';
  
  // Render cards based on items
  const itemsSvg = d.items.map((it, idx) => {
    const yOffset = 150 + idx * 95;
    return `
    <g transform="translate(60, ${yOffset})">
      <rect x="0" y="0" width="680" height="78" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#shadow)" />
      <rect x="0" y="0" width="8" height="78" rx="4" fill="${pCol}" />
      <circle cx="36" cy="39" r="16" fill="${pCol}" fill-opacity="0.12" />
      <text x="36" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="${pCol}" text-anchor="middle">${idx + 1}</text>
      <text x="68" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="#0f172a">${escapeXml(it.label)}</text>
      <text x="68" y="56" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#475569">${escapeXml(it.desc)}</text>
    </g>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%">
  <defs>
    <filter id="shadow" x="-5%" y="-10%" width="110%" height="130%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.06" />
    </filter>
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="480" fill="#f8fafc" rx="18" />
  
  <!-- Subtle Blueprint Grid Pattern -->
  <g stroke="#e2e8f0" stroke-width="0.8" opacity="0.6">
    <line x1="40" y1="0" x2="40" y2="480" />
    <line x1="160" y1="0" x2="160" y2="480" />
    <line x1="280" y1="0" x2="280" y2="480" />
    <line x1="400" y1="0" x2="400" y2="480" />
    <line x1="520" y1="0" x2="520" y2="480" />
    <line x1="640" y1="0" x2="640" y2="480" />
    <line x1="760" y1="0" x2="760" y2="480" />
    <line x1="0" y1="60" x2="800" y2="60" />
    <line x1="0" y1="140" x2="800" y2="140" />
    <line x1="0" y1="220" x2="800" y2="220" />
    <line x1="0" y1="300" x2="800" y2="300" />
    <line x1="0" y1="380" x2="800" y2="380" />
    <line x1="0" y1="460" x2="800" y2="460" />
  </g>

  <!-- Industrial Header Banner -->
  <rect x="0" y="0" width="800" height="110" rx="18" fill="url(#headerGrad)" />
  <rect x="0" y="105" width="800" height="5" fill="${pCol}" />

  <!-- Technical Spec Badge -->
  <g transform="translate(60, 24)">
    <rect x="0" y="0" width="${d.badge.length * 8 + 24}" height="24" rx="12" fill="${pCol}" fill-opacity="0.25" stroke="${pCol}" stroke-width="1" />
    <circle cx="12" cy="12" r="4" fill="${pCol}" />
    <text x="24" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" letter-spacing="0.5">${escapeXml(d.badge)}</text>
  </g>

  <!-- Titles -->
  <text x="60" y="74" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#ffffff">${escapeXml(d.titleEn)}</text>
  <text x="60" y="96" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#94a3b8">${escapeXml(d.titleAr)}</text>

  <!-- Technical Content Cards -->
  ${itemsSvg}

  <!-- Footer Brand Mark -->
  <g transform="translate(60, 448)">
    <text x="0" y="14" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="bold" fill="#64748b">FREE TISSUE CAMP • INDUSTRIAL SCHEMATIC ASSET</text>
    <text x="680" y="14" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="bold" fill="${pCol}" text-anchor="end">ENGINEERING CERTIFIED</text>
  </g>
</svg>`;
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

console.log(`Generating ${diagrams.length} high-resolution industrial SVG diagrams...`);

for (const d of diagrams) {
  const filePath = path.join(outputDir, d.id);
  const content = generateSvgContent(d);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`✅ All ${diagrams.length} diagrams created in ${outputDir}!`);
