"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, Check, Info, Phone,
  Download, Mail, Users, User, HelpCircle,
  Home, ShoppingCart, Stethoscope, Heart,
  Sparkles, Calendar, Clock,
} from "lucide-react";

const ENTLASTUNGSBETRAG = 131;

const SACHLEISTUNGEN: Record<number, number> = { 1: 0, 2: 796, 3: 1497, 4: 1859, 5: 2299 };
const PFLEGEGELD: Record<number, number> = { 1: 0, 2: 347, 3: 599, 4: 765, 5: 947 };
const UMWANDLUNG_MAX: Record<number, number> = { 1: 0, 2: 318.40, 3: 598.80, 4: 743.60, 5: 919.60 };

function calculateBudget(pflegegrad: number, pflegedienstUsage: number) {
  const entlastung = ENTLASTUNGSBETRAG;
  if (pflegegrad === 1) {
    return { entlastung, umwandlung: 0, total: entlastung, yearlyTotal: entlastung * 12, pflegegeldReduction: 0, pflegegeldAfter: 0, netBenefit: entlastung };
  }
  const unusedPercentage = (100 - pflegedienstUsage) / 100;
  const availableSachleistungen = SACHLEISTUNGEN[pflegegrad] * unusedPercentage;
  const umwandlung = Math.min(availableSachleistungen * 0.4, UMWANDLUNG_MAX[pflegegrad]);
  const umwandlungPercentage = umwandlung / SACHLEISTUNGEN[pflegegrad];
  const pflegegeldReduction = PFLEGEGELD[pflegegrad] * umwandlungPercentage;
  const total = entlastung + umwandlung;
  return {
    entlastung,
    umwandlung: Math.round(umwandlung * 100) / 100,
    total: Math.round(total * 100) / 100,
    yearlyTotal: Math.round(total * 12 * 100) / 100,
    pflegegeldReduction: Math.round(pflegegeldReduction * 100) / 100,
    pflegegeldAfter: Math.round((PFLEGEGELD[pflegegrad] - pflegegeldReduction) * 100) / 100,
    netBenefit: Math.round((umwandlung - pflegegeldReduction) * 100) / 100,
  };
}

const HOURLY_RATE = 35.50;

function getServiceExamples(budgetTotal: number) {
  const totalHours = budgetTotal / HOURLY_RATE;
  const h = Math.floor(totalHours);
  const results: { icon: typeof Home; text: string }[] = [];

  results.push({ icon: Clock, text: `~${h} Stunden Unterst\u00FCtzung pro Monat (bei ${HOURLY_RATE.toFixed(2).replace(".", ",")} \u20AC/Std.)` });

  if (totalHours < 5) {
    // ~3-4h: compact plan
    const weeklyMin = Math.floor((totalHours / 4) * 60); // minutes per visit
    results.push({ icon: Home, text: `1\u00D7/Woche Haushaltshilfe (\u00E0 ${weeklyMin} Min.)` });
    results.push({ icon: ShoppingCart, text: `Oder: ${Math.floor(totalHours / 1.5)}\u00D7 monatlich Einkaufshilfe (\u00E0 1,5 Std.)` });
  } else if (totalHours < 10) {
    // ~5-9h: weekly help + extras
    const weeklyH = +(totalHours / 4).toFixed(1);
    const weeklyHStr = String(weeklyH).replace(".", ",");
    results.push({ icon: Home, text: `1\u00D7/Woche Haushaltshilfe (\u00E0 ${weeklyHStr} Std.)` });
    const restHours = totalHours - (weeklyH * 4);
    if (restHours >= 2) {
      results.push({ icon: Stethoscope, text: `${Math.floor(restHours / 1.5)}\u00D7 monatlich Begleitung zum Arzt` });
    }
    results.push({ icon: Heart, text: `Oder: ${Math.floor(totalHours / 2)}\u00D7 Alltagsbegleitung (\u00E0 2 Std.)` });
  } else if (totalHours < 20) {
    // ~10-19h: solid coverage
    results.push({ icon: Home, text: `2\u00D7/Woche Haushaltshilfe (\u00E0 ${+((totalHours * 0.5) / 8).toFixed(1) > 1 ? String(+((totalHours * 0.5) / 8).toFixed(1)).replace(".", ",") : "1"} Std.)` });
    results.push({ icon: Stethoscope, text: `${Math.floor(totalHours * 0.15 / 1.5)+ 1}\u00D7 monatlich Arzt-/Beh\u00F6rdenbegleitung` });
    results.push({ icon: ShoppingCart, text: `W\u00F6chentliche Einkaufshilfe` });
    const betreuungH = Math.round(totalHours * 0.2);
    if (betreuungH >= 1) {
      results.push({ icon: Heart, text: `~${betreuungH} Std. Betreuung & Spazierg\u00E4nge` });
    }
  } else {
    // 20h+: comprehensive
    results.push({ icon: Home, text: `2\u20133\u00D7/Woche Haushaltshilfe` });
    results.push({ icon: Stethoscope, text: `Alle Arzt- und Beh\u00F6rdentermine begleitet` });
    results.push({ icon: ShoppingCart, text: `Komplette Einkaufs\u00FCbernahme` });
    results.push({ icon: Heart, text: `~${Math.round(totalHours * 0.25)} Std. Betreuung & Aktivierung` });
    results.push({ icon: Calendar, text: `T\u00E4gliche Unterst\u00FCtzung m\u00F6glich` });
  }

  return results;
}

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <div
          key={idx}
          className={`h-1 rounded-full transition-all duration-300 ${
            idx <= currentStep ? "bg-[#00838F] w-7" : "bg-[#E0E7E9] w-3.5"
          }`}
        />
      ))}
    </div>
  );
}

function PflegegradSelector({ value, onChange }: { value: number | null; onChange: (v: number) => void }) {
  return (
    <div className="space-y-2">
      <label className="block font-outfit font-semibold text-sm text-[#0D2137]">Ihr Pflegegrad:</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((grade) => (
          <button
            key={grade}
            onClick={() => onChange(grade)}
            className={`flex-1 h-11 rounded-xl font-dm font-bold text-lg transition-all ${
              value === grade
                ? "bg-[#00838F] text-white shadow-lg scale-105"
                : "border-2 border-[#E0E7E9] text-[#455A64] hover:border-[#00838F] hover:bg-[#E0F7FA]"
            }`}
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
}

function ModeToggle({ isAngehoeriger, onChange }: { isAngehoeriger: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-1 p-1 bg-white/10 rounded-full">
      <button
        onClick={() => onChange(false)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-outfit font-semibold transition-all ${
          !isAngehoeriger ? "bg-white text-[#00838F] shadow-sm" : "text-white/70"
        }`}
      >
        <User className="w-3.5 h-3.5" />
        Ich bin selbst betroffen
      </button>
      <button
        onClick={() => onChange(true)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-outfit font-semibold transition-all ${
          isAngehoeriger ? "bg-white text-[#00838F] shadow-sm" : "text-white/70"
        }`}
      >
        <Users className="w-3.5 h-3.5" />
        Für einen Angehörigen
      </button>
    </div>
  );
}

function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="ml-1 text-[#78909C] hover:text-[#00838F]"
      >
        {children}
      </button>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#0D2137] text-white text-xs rounded-lg whitespace-nowrap z-50"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0D2137]" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

type PflegedienstUsage = null | 0 | "partial" | 100;

interface EntlastungsCalculatorProps {
  onClose: () => void;
}

export default function EntlastungsCalculator({ onClose }: EntlastungsCalculatorProps) {
  const [step, setStep] = useState(0);
  const [isAngehoeriger, setIsAngehoeriger] = useState(false);
  const [pflegegrad, setPflegegrad] = useState<number | null>(null);
  const [pflegedienstUsage, setPflegedienstUsage] = useState<PflegedienstUsage>(null);
  const [partialUsage, setPartialUsage] = useState(50);
  const [abrechnungsart, setAbrechnungsart] = useState("direkt");
  const [showUmwandlung, setShowUmwandlung] = useState(true);

  const pronoun = isAngehoeriger ? "Ihrem Angehörigen" : "Ihnen";
  const pronounShort = isAngehoeriger ? "Ihr Angehöriger" : "Sie";
  const actualUsage = pflegedienstUsage === "partial" ? partialUsage : (pflegedienstUsage || 0);

  const budget = useMemo(() => {
    if (!pflegegrad) return null;
    return calculateBudget(pflegegrad, showUmwandlung ? actualUsage : 100);
  }, [pflegegrad, actualUsage, showUmwandlung]);

  const serviceExamples = useMemo(() => {
    if (!budget) return [];
    return getServiceExamples(budget.total);
  }, [budget]);

  const canProceed = () => {
    if (step === 0) return pflegegrad !== null;
    if (step === 1) return pflegegrad === 1 || pflegedienstUsage !== null;
    return true;
  };

  const nextStep = () => {
    if (step === 0 && pflegegrad === 1) setStep(2);
    else setStep(step + 1);
  };

  const prevStep = () => {
    if (step === 2 && pflegegrad === 1) setStep(0);
    else setStep(step - 1);
  };

  const totalSteps = pflegegrad === 1 ? 3 : 4;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-[440px] max-w-[calc(100vw-32px)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00838F] to-[#005662] px-5 py-3.5 text-white">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-outfit font-bold text-lg">Entlastungsrechner</h2>
          <button onClick={onClose} className="text-white/70 hover:text-white text-xl leading-none">&times;</button>
        </div>
        <ModeToggle isAngehoeriger={isAngehoeriger} onChange={setIsAngehoeriger} />
      </div>

      <div className="px-5 py-4">
        <StepIndicator currentStep={step} totalSteps={totalSteps} />

        <AnimatePresence mode="wait">
          {/* Step 0: Pflegegrad */}
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
              <div className="text-center py-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F5E9] text-[#2E7D32] rounded-full text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Gesetzlicher Anspruch
                </div>
                <p className="font-dm font-bold text-3xl text-[#0D2137]">
                  131 &euro; <span className="text-base font-medium text-[#78909C]">/ Monat</span>
                </p>
                <p className="font-source text-sm text-[#78909C] mt-1">stehen {pronoun} mindestens zu.</p>
                <p className="font-source text-xs text-[#00838F] mt-0.5">Oft sogar deutlich mehr &mdash; wir zeigen {pronounShort}, wie.</p>
              </div>

              <PflegegradSelector value={pflegegrad} onChange={setPflegegrad} />

              {pflegegrad === 1 && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-3 bg-[#FFF8E1] rounded-lg border border-[#FFE082]">
                  <div className="flex gap-2">
                    <Info className="w-4 h-4 text-[#F9A825] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-outfit font-semibold text-xs text-[#0D2137] mb-0.5">Wussten {pronounShort}?</p>
                      <p className="font-source text-xs text-[#455A64] leading-relaxed">
                        Mit Pflegegrad 1 kann der Entlastungsbetrag auch für körperbezogene Pflege genutzt werden &mdash; z.&nbsp;B. Hilfe beim Duschen oder Ankleiden.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Step 1: Pflegedienst */}
          {step === 1 && pflegegrad !== null && pflegegrad > 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <div>
                <h3 className="font-outfit font-bold text-[15px] text-[#0D2137] mb-1">Nutzt {pronounShort} aktuell einen ambulanten Pflegedienst?</h3>
                <p className="font-source text-xs text-[#78909C]">Dies beeinflusst, wie viel zusätzliches Budget über den Umwandlungsanspruch möglich ist.</p>
              </div>

              <div className="space-y-2">
                {([
                  { value: 0 as const, label: "Nein, kein Pflegedienst", desc: "Maximaler Umwandlungsanspruch verfügbar" },
                  { value: "partial" as const, label: "Ja, teilweise", desc: "Anteiliger Umwandlungsanspruch möglich" },
                  { value: 100 as const, label: "Ja, regelmäßig (100%)", desc: "Entlastungsbetrag bleibt dennoch verfügbar" },
                ]).map((option) => (
                  <button
                    key={String(option.value)}
                    onClick={() => setPflegedienstUsage(option.value)}
                    className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                      pflegedienstUsage === option.value ? "border-[#00838F] bg-[#E0F7FA]" : "border-[#E0E7E9] hover:border-[#00838F]/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full border-2 flex items-center justify-center ${
                        pflegedienstUsage === option.value ? "border-[#00838F] bg-[#00838F]" : "border-[#E0E7E9]"
                      }`}>
                        {pflegedienstUsage === option.value && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <div>
                        <p className="font-outfit font-semibold text-sm text-[#0D2137]">{option.label}</p>
                        <p className="font-source text-xs text-[#78909C]">{option.desc}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {pflegedienstUsage === "partial" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="p-3 bg-[#F7FAFA] rounded-lg">
                  <label className="block font-outfit font-semibold text-xs text-[#0D2137] mb-2">Wie viel Prozent der Sachleistungen werden genutzt?</label>
                  <div className="flex items-center gap-3">
                    <input type="range" min="0" max="100" step="10" value={partialUsage} onChange={(e) => setPartialUsage(Number(e.target.value))} className="flex-1 h-1.5 bg-[#E0E7E9] rounded-full appearance-none cursor-pointer accent-[#00838F]" />
                    <span className="font-dm font-bold text-sm text-[#00838F] w-10 text-right">{partialUsage}%</span>
                  </div>
                </motion.div>
              )}

              {pflegedienstUsage === 100 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-[#E8F5E9] rounded-lg">
                  <p className="font-source text-xs text-[#2E7D32]">
                    <strong>Gut zu wissen:</strong> Auch bei vollständiger Nutzung eines Pflegedienstes steht {pronoun} der Entlastungsbetrag von 131&nbsp;&euro;/Monat zusätzlich zu.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Step 2: Budget */}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <h3 className="font-outfit font-bold text-[15px] text-[#0D2137] text-center">
                {isAngehoeriger ? "Monatliches Budget Ihres Angehörigen" : "Ihr monatliches Entlastungsbudget"}
              </h3>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-source text-xs text-[#455A64] flex items-center gap-1">
                      Entlastungsbetrag
                      <Tooltip content="§45b SGB XI"><HelpCircle className="w-3 h-3" /></Tooltip>
                    </span>
                    <span className="font-dm font-bold text-sm text-[#2E7D32]">{budget?.entlastung.toFixed(2)} &euro;</span>
                  </div>
                  <div className="h-2.5 bg-[#E8F5E9] rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} className="h-full bg-[#66BB6A] rounded-full" />
                  </div>
                </div>

                {pflegegrad !== null && pflegegrad > 1 && budget && budget.umwandlung > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-source text-xs text-[#455A64] flex items-center gap-1">
                        Umwandlungsanspruch
                        <Tooltip content="§45a Abs. 4 SGB XI"><HelpCircle className="w-3 h-3" /></Tooltip>
                      </span>
                      <span className="font-dm font-bold text-sm text-[#00838F]">+ {budget.umwandlung.toFixed(2)} &euro;</span>
                    </div>
                    <div className="h-2.5 bg-[#E0F7FA] rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${(budget.umwandlung / UMWANDLUNG_MAX[pflegegrad]) * 100}%` }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full bg-[#4DD0E1] rounded-full" />
                    </div>
                    <label className="flex items-center gap-1.5 mt-1.5 cursor-pointer">
                      <input type="checkbox" checked={showUmwandlung} onChange={(e) => setShowUmwandlung(e.target.checked)} className="w-3.5 h-3.5 rounded border-[#E0E7E9] accent-[#00838F]" />
                      <span className="font-source text-xs text-[#78909C]">Umwandlung nutzen</span>
                    </label>
                  </div>
                )}

                <div className="pt-3 border-t border-[#E0E7E9]">
                  <div className="flex items-baseline justify-between">
                    <span className="font-outfit font-semibold text-sm text-[#0D2137]">Gesamt:</span>
                    <div className="text-right">
                      <span className="font-dm font-bold text-2xl text-[#0D2137]">{budget?.total.toFixed(2)} &euro;</span>
                      <span className="font-source text-sm text-[#78909C]"> / Monat</span>
                      <p className="font-source text-xs text-[#78909C]">{budget?.yearlyTotal.toFixed(2)} &euro; / Jahr</p>
                    </div>
                  </div>
                </div>
              </div>

              {pflegegrad !== null && pflegegrad > 1 && budget && budget.umwandlung > 0 && showUmwandlung && (
                <div className="p-3 bg-[#F7FAFA] rounded-lg border border-[#E0E7E9]">
                  <p className="font-outfit font-semibold text-xs text-[#0D2137] mb-1.5 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#78909C]" />
                    Auswirkung auf Pflegegeld
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-[#78909C] font-source">Pflegegeld ohne:</p>
                      <p className="font-dm font-semibold text-[#455A64]">{PFLEGEGELD[pflegegrad].toFixed(2)} &euro;</p>
                    </div>
                    <div>
                      <p className="text-[#78909C] font-source">Mit Umwandlung:</p>
                      <p className="font-dm font-semibold text-[#455A64]">{budget.pflegegeldAfter.toFixed(2)} &euro;</p>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-[#E0E7E9]">
                    <p className="font-source text-xs text-[#2E7D32]">
                      <strong>Netto-Vorteil:</strong> +{budget.netBenefit.toFixed(2)} &euro;/Monat zusätzlich
                    </p>
                  </div>
                </div>
              )}

              <div className="p-3 bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] rounded-lg">
                <p className="font-outfit font-semibold text-sm text-[#0D2137] mb-2">Das können {pronounShort} sich leisten:</p>
                <ul className="space-y-1">
                  {serviceExamples.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <service.icon className="w-3.5 h-3.5 text-[#00838F] mt-0.5 flex-shrink-0" />
                      <span className="font-source text-xs text-[#455A64]">{service.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* Step 3: Abrechnungsart & CTA */}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <h3 className="font-outfit font-bold text-[15px] text-[#0D2137]">Wie möchten {pronounShort} abrechnen?</h3>

              <div className="space-y-2">
                <button
                  onClick={() => setAbrechnungsart("direkt")}
                  className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                    abrechnungsart === "direkt" ? "border-[#00838F] bg-[#E0F7FA]" : "border-[#E0E7E9] hover:border-[#00838F]/50"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className={`w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      abrechnungsart === "direkt" ? "border-[#00838F] bg-[#00838F]" : "border-[#E0E7E9]"
                    }`}>
                      {abrechnungsart === "direkt" && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-outfit font-semibold text-sm text-[#0D2137]">Direktabrechnung</p>
                        <span className="px-1.5 py-0.5 bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-semibold rounded-full">Empfohlen</span>
                      </div>
                      <p className="font-source text-xs text-[#78909C] mt-0.5">
                        Wir rechnen direkt mit {isAngehoeriger ? "der" : "Ihrer"} Pflegekasse ab. {pronounShort} {isAngehoeriger ? "zahlt" : "zahlen"} nichts aus eigener Tasche.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setAbrechnungsart("erstattung")}
                  className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                    abrechnungsart === "erstattung" ? "border-[#00838F] bg-[#E0F7FA]" : "border-[#E0E7E9] hover:border-[#00838F]/50"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className={`w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full border-2 flex items-center justify-center mt-0.5 ${
                      abrechnungsart === "erstattung" ? "border-[#00838F] bg-[#00838F]" : "border-[#E0E7E9]"
                    }`}>
                      {abrechnungsart === "erstattung" && <Check className="w-2.5 h-2.5 text-white" />}
                    </div>
                    <div>
                      <p className="font-outfit font-semibold text-sm text-[#0D2137]">Kostenerstattung</p>
                      <p className="font-source text-xs text-[#78909C] mt-0.5">
                        {pronounShort} {isAngehoeriger ? "bezahlt" : "bezahlen"} unsere Leistung und {isAngehoeriger ? "reicht" : "reichen"} die Belege bei der Kasse ein.
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="p-3 bg-[#F7FAFA] rounded-lg border border-[#E0E7E9]">
                <p className="font-outfit font-semibold text-sm text-[#0D2137] mb-1">Zusammenfassung:</p>
                <div className="space-y-0.5 text-xs font-source text-[#455A64]">
                  <p>&bull; Pflegegrad {pflegegrad}</p>
                  <p>&bull; Budget: <strong>{budget?.total.toFixed(2)} &euro;/Monat</strong></p>
                  <p>&bull; Abrechnung: {abrechnungsart === "direkt" ? "Direktabrechnung" : "Kostenerstattung"}</p>
                </div>
              </div>

              <a
                href="tel:+4930610850625"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#00838F] to-[#005662] text-white rounded-xl font-outfit font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <Phone className="w-4 h-4" />
                Kostenlose Beratung vereinbaren
              </a>

              <p className="text-center font-source text-xs text-[#78909C]">Wir erklären alles verständlich. Versprochen.</p>

              <div className="flex justify-center gap-3">
                <button className="flex items-center gap-1 text-xs font-source text-[#78909C] hover:text-[#00838F]">
                  <Mail className="w-3.5 h-3.5" />
                  Per E-Mail senden
                </button>
                <button className="flex items-center gap-1 text-xs font-source text-[#78909C] hover:text-[#00838F]">
                  <Download className="w-3.5 h-3.5" />
                  Als PDF speichern
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-5 pt-3 border-t border-[#E0E7E9]">
          {step > 0 ? (
            <button onClick={prevStep} className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#78909C] hover:text-[#00838F] font-outfit font-semibold transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Zurück
            </button>
          ) : (
            <div />
          )}
          {step < 3 && (
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-outfit font-bold transition-all ${
                canProceed() ? "bg-[#00838F] text-white hover:bg-[#005662]" : "bg-[#E0E7E9] text-[#78909C] cursor-not-allowed"
              }`}
            >
              Weiter
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
