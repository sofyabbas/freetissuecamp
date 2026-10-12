'use client';

import React, { useState } from 'react';
import { Sparkles, Scale, RefreshCw, Feather, ShieldCheck, Droplet, Gauge } from 'lucide-react';

export function PulpCalculator() {
  const [productType, setProductType] = useState<'facial' | 'toilet' | 'towel' | 'napkin'>('facial');
  const [hardwoodPercent, setHardwoodPercent] = useState<number>(75);
  const [softwoodPercent, setSoftwoodPercent] = useState<number>(25);
  const [paeDoseKg, setPaeDoseKg] = useState<number>(0);
  const [debonderDoseKg, setDebonderDoseKg] = useState<number>(1.5);

  const handleHardwoodChange = (val: number) => {
    setHardwoodPercent(val);
    setSoftwoodPercent(100 - val);
  };

  const handleSelectProduct = (type: 'facial' | 'toilet' | 'towel' | 'napkin') => {
    setProductType(type);
    if (type === 'facial') {
      setHardwoodPercent(80);
      setSoftwoodPercent(20);
      setPaeDoseKg(0);
      setDebonderDoseKg(2.0);
    } else if (type === 'toilet') {
      setHardwoodPercent(70);
      setSoftwoodPercent(30);
      setPaeDoseKg(0);
      setDebonderDoseKg(0.5);
    } else if (type === 'towel') {
      setHardwoodPercent(55);
      setSoftwoodPercent(45);
      setPaeDoseKg(12);
      setDebonderDoseKg(0);
    } else if (type === 'napkin') {
      setHardwoodPercent(60);
      setSoftwoodPercent(40);
      setPaeDoseKg(4);
      setDebonderDoseKg(0);
    }
  };

  // Calculations for Tissue Quality Metrics
  // Softness index depends on Eucalyptus + Debonders - Tensile refining
  const softnessScore = Math.min(
    98,
    Math.max(40, Math.round(hardwoodPercent * 0.95 + debonderDoseKg * 4 - paeDoseKg * 1.2))
  );

  // Tensile strength depends on Softwood + PAE - Debonders
  const tensileIndex = (softwoodPercent * 0.65 + paeDoseKg * 1.8 - debonderDoseKg * 3.5).toFixed(1);

  // Wet tensile ratio %
  const wetTensileRatio = paeDoseKg > 0 ? Math.min(35, Math.round(paeDoseKg * 2.5 + 4)) : 4;

  // Water absorption capacity g/g
  const absorbencyCapacity = (7.5 + (softwoodPercent * 0.04) + (debonderDoseKg * 0.4)).toFixed(1);

  const productInfo = {
    facial: {
      name: 'مناديل الوجه (Ultra-Soft Facial)',
      targetGrammage: '13.5 - 15.0 جم/م²',
      priority: 'نعومة مخملية فائقة وملمس حريري بدون تهيج للبشرة',
      idealFurnish: '75% - 85% لب قصير (يوكاليبتوس) + 15% - 25% لب طويل شمالي (NBSK)',
    },
    toilet: {
      name: 'ورق التواليت والحمام (Bath Tissue)',
      targetGrammage: '15.0 - 17.5 جم/م²',
      priority: 'توازن بين النعومة وسرعة التفتت والتحلل بالماء (Flushability)',
      idealFurnish: '65% - 75% لب قصير (يوكاليبتوس) + 25% - 35% لب طويل (NBSK/Radiata)',
    },
    towel: {
      name: 'مناديل المطبخ (Kitchen Towels)',
      targetGrammage: '20.0 - 24.0 جم/م²',
      priority: 'سعة امتصاص ماء ضخمة ومقاومة شد رطبة فائقة (Wet Strength)',
      idealFurnish: '50% - 60% لب قصير + 40% - 50% لب طويل (SBSK/Radiata) + PAE',
    },
    napkin: {
      name: 'مناديل المائدة والسفرة (Table Napkins)',
      targetGrammage: '17.0 - 20.0 جم/م²',
      priority: 'متانة ميكانيكية وثبات في الطي وقابلية ممتازة للطباعة الزخرفية',
      idealFurnish: '60% لب قصير + 40% لب طويل',
    },
  };

  return (
    <div className="bg-gradient-to-br from-paper-100 to-white rounded-3xl p-6 sm:p-8 border border-kraft-200/80 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-700 bg-primary-50 px-3 py-1 rounded-full border border-primary-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            المختبر التفاعلي لهندسة التيشيو
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
            محاكي خلط ألياف وكيمياء التيشيو (Tissue Furnish & Quality Simulator)
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
            اختر صنف المنديل، عاير نسب اللب القصير واللب الطويل والمضافات، وشاهد مؤشرات النعومة والمتانة والامتصاص فورياً
          </p>
        </div>
        <button
          onClick={() => handleSelectProduct('facial')}
          className="text-xs text-charcoal-500 hover:text-charcoal-800 flex items-center gap-1 self-start sm:self-center bg-white px-3 py-1.5 rounded-lg border border-charcoal-200 shadow-2xs"
        >
          <RefreshCw className="w-3.5 h-3.5" /> إعادة ضبط
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Tissue Grade Selection */}
          <div>
            <label className="block text-xs font-bold text-charcoal-700 mb-2">
              1. صنف منتج التيشيو المستهدف:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['facial', 'toilet', 'towel', 'napkin'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => handleSelectProduct(type)}
                  className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                    productType === type
                      ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                      : 'bg-white text-charcoal-700 border-charcoal-200 hover:border-primary-300'
                  }`}
                >
                  {type === 'facial' && 'مناديل وجه'}
                  {type === 'toilet' && 'ورق تواليت'}
                  {type === 'towel' && 'مناديل مطبخ'}
                  {type === 'napkin' && 'مناديل مائدة'}
                </button>
              ))}
            </div>
            <p className="text-xs text-charcoal-500 mt-2 bg-paper-50 p-2.5 rounded-xl border border-charcoal-100">
              💡 <span className="font-semibold text-charcoal-800">{productInfo[productType].name}:</span> {productInfo[productType].priority}
            </p>
          </div>

          {/* Fiber Furnish Sliders */}
          <div className="bg-white p-5 rounded-2xl border border-charcoal-200 space-y-4">
            <h4 className="text-xs font-bold text-charcoal-800 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-kraft-700" /> 2. توازن الألياف السليلوزية (Furnish Blend):
            </h4>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-primary-700">🌱 اللب القصير (BHKP يوكاليبتوس للنعومة والـ Bulk):</span>
                <span className="font-bold text-primary-800">{hardwoodPercent}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="90"
                value={hardwoodPercent}
                onChange={(e) => handleHardwoodChange(Number(e.target.value))}
                className="w-full accent-primary-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-kraft-700">🌲 اللب الطويل (BSKP صنوبر للمتانة وشبكة السحب):</span>
                <span className="font-bold text-kraft-800">{softwoodPercent}%</span>
              </div>
              <div className="w-full bg-kraft-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-kraft-600 h-full transition-all duration-300"
                  style={{ width: `${softwoodPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Chemical Additives */}
          <div className="bg-white p-5 rounded-2xl border border-charcoal-200 space-y-4">
            <h4 className="text-xs font-bold text-charcoal-800 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary-600" /> 3. المضافات الكيميائية المتخصصة:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>راتنج مقاومة البلل PAE:</span>
                  <span className="font-bold text-primary-700">{paeDoseKg} كجم/طن</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="18"
                  step="1"
                  value={paeDoseKg}
                  onChange={(e) => setPaeDoseKg(Number(e.target.value))}
                  className="w-full accent-primary-600 cursor-pointer"
                />
                <span className="text-[10px] text-charcoal-400">خاص بمناديل المطبخ ومقاومة التمزق</span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>المطريات الكيميائية (Debonder):</span>
                  <span className="font-bold text-amber-700">{debonderDoseKg} كجم/طن</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="4"
                  step="0.5"
                  value={debonderDoseKg}
                  onChange={(e) => setDebonderDoseKg(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <span className="text-[10px] text-charcoal-400">يفك الروابط السطحية لزيادة النعومة</span>
              </div>
            </div>
          </div>

        </div>

        {/* Real-time Quality Output Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-primary-800">
          <div>
            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-primary-800">
              <div className="w-8 h-8 rounded-lg bg-primary-800 flex items-center justify-center text-primary-300">
                <Gauge className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">مؤشرات جودة شيت التيشيو</h4>
                <p className="text-[11px] text-primary-300">تقديرات هندسية وفق معايير TAPPI / ISO</p>
              </div>
            </div>

            <div className="space-y-4">
              
              {/* Softness Score */}
              <div className="bg-primary-800/60 p-3.5 rounded-xl border border-primary-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Feather className="w-5 h-5 text-emerald-300" />
                  <div>
                    <span className="text-xs text-primary-100 block">مؤشر النعومة الحسي (TSA)</span>
                    <span className="text-[10px] text-primary-300">Handfeel Score</span>
                  </div>
                </div>
                <span className="text-xl font-black text-emerald-300">{softnessScore} / 100</span>
              </div>

              {/* Tensile Index */}
              <div className="bg-primary-800/60 p-3.5 rounded-xl border border-primary-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-300" />
                  <div>
                    <span className="text-xs text-primary-100 block">مؤشر قوة الشد الجاف</span>
                    <span className="text-[10px] text-primary-300">Tensile Index (N·m/g)</span>
                  </div>
                </div>
                <span className="text-xl font-black text-amber-300">{tensileIndex}</span>
              </div>

              {/* Wet Tensile Ratio */}
              <div className="bg-primary-800/60 p-3.5 rounded-xl border border-primary-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Droplet className="w-5 h-5 text-cyan-300" />
                  <div>
                    <span className="text-xs text-primary-100 block">نسبة مقاومة الشد الرطب</span>
                    <span className="text-[10px] text-primary-300">Wet / Dry Tensile Ratio</span>
                  </div>
                </div>
                <span className="text-xl font-black text-cyan-300">{wetTensileRatio}%</span>
              </div>

              {/* Absorbency */}
              <div className="bg-primary-800/60 p-3.5 rounded-xl border border-primary-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Droplet className="w-5 h-5 text-blue-300" />
                  <div>
                    <span className="text-xs text-primary-100 block">سعة الامتصاص المائي</span>
                    <span className="text-[10px] text-primary-300">Absorption Capacity</span>
                  </div>
                </div>
                <span className="text-xl font-black text-blue-300">{absorbencyCapacity} جم/جم</span>
              </div>

            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-primary-800 text-xs text-primary-200 space-y-1.5">
            <div className="flex justify-between items-center">
              <span>الوزن القياسي النموذجي:</span>
              <span className="font-bold text-white">{productInfo[productType].targetGrammage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>نسب الخلط الموصى بها:</span>
              <span className="font-bold text-emerald-300">{productInfo[productType].idealFurnish}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
