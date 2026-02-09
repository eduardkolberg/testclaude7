"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { settings, calculateBudget, calculateHours, calculateVisits } from "@/lib/settings";

interface CalculatorProps {
  onRequestConsultation?: (data: { pflegegrad: number; plz: string; services: string[]; budget: number }) => void;
  compact?: boolean;
}

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const start = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { value, start };
}

export default function Calculator({ onRequestConsultation, compact = false }: CalculatorProps) {
  // Block A: Input parameters
  const [pflegegrad, setPflegegrad] = useState(1);
  const [plz, setPlz] = useState("");
  const [abrechnungsart, setAbrechnungsart] = useState<"direkt" | "kosten">("direkt");
  const [monate, setMonate] = useState(12);
  const [bereitsGenutzt, setBereitsGenutzt] = useState(0);

  // Block B: Selected services
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Block D: Show breakdown
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Animation
  const resultRef = useRef<HTMLDivElement>(null);
  const [resultVisible, setResultVisible] = useState(false);

  // Calculations
  const monthlyAmount = settings.entlastungsbetrag.monthlyAmount;
  const budget = calculateBudget(monate, bereitsGenutzt);

  const effectiveRate = selectedServices.length > 0
    ? selectedServices.reduce((sum, key) => {
        const service = settings.serviceRates[key];
        return sum + (service?.ratePerHour || settings.fallbackRate);
      }, 0) / selectedServices.length
    : settings.fallbackRate;

  const totalHours = calculateHours(budget, effectiveRate);
  const totalVisits = calculateVisits(totalHours, 2);
  const budgetCountUp = useCountUp(budget, 1200);

  useEffect(() => {
    budgetCountUp.start();
    setResultVisible(true);
  }, [budget]);

  const toggleService = (key: string) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  };

  const serviceCategories = {
    alltagsunterstuetzung: "Alltagsunterstützung",
    betreuung: "Betreuung & Begleitung",
    entlastung: "Entlastung für Angehörige",
  };

  if (compact) {
    return (
      <div>
        {/* Compact calculator for homepage */}
        <div
          className="text-center p-5 sm:p-8 mb-6 relative overflow-hidden"
          style={{ backgroundColor: "#DCF5F9", borderRadius: "16px" }}
        >
          <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "clamp(36px, 8vw, 48px)", fontWeight: 700, color: "#0D2137", lineHeight: 1 }}>
            {monthlyAmount} € <span style={{ fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 500, color: "#455A64" }}>/ Monat</span>
          </div>
          <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: "#00838F", marginTop: "8px" }}>
            {settings.entlastungsbetrag.yearlyAmount} € / Jahr
          </div>
        </div>

        <label className="block mb-3" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
          Ihr Pflegegrad:
        </label>
        <div className="flex gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((grade) => (
            <button
              key={grade}
              onClick={() => setPflegegrad(grade)}
              className={`flex-1 min-w-[48px] min-h-[48px] h-12 flex items-center justify-center rounded-[12px] border-2 transition-all cursor-pointer
                ${pflegegrad === grade
                  ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]"
                  : "border-[#E0E7E9] bg-transparent text-[#455A64] hover:bg-[#E0F7FA] hover:border-[#4DD0E1] hover:text-[#00838F]"
                }`}
              style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700 }}
              aria-label={`Pflegegrad ${grade}`}
            >
              {grade}
            </button>
          ))}
        </div>

        <label className="block mb-3" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
          Abrechnungsart:
        </label>
        <div className="flex gap-2 mb-6">
          {[
            { key: "direkt" as const, label: "Direktabrechnung" },
            { key: "kosten" as const, label: "Kostenerstattung" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => setAbrechnungsart(opt.key)}
              className={`flex-1 py-3 px-4 min-h-[48px] rounded-[12px] border-2 transition-all cursor-pointer text-center
                ${abrechnungsart === opt.key
                  ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]"
                  : "border-[#E0E7E9] bg-transparent text-[#455A64] hover:bg-[#E0F7FA] hover:border-[#4DD0E1] hover:text-[#00838F]"
                }`}
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onRequestConsultation?.({ pflegegrad, plz, services: selectedServices, budget })}
          className="w-full py-4 text-white rounded-[12px] transition-all hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "var(--font-size-btn)",
            fontWeight: 700,
            boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
            border: "none",
          }}
        >
          Kostenlos berechnen
        </button>

        <p className="text-center mt-4" style={{ fontSize: "15px", color: "#78909C" }}>
          Wir erklären alles verständlich.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Block A: Parameters */}
      <div className="bg-white rounded-[20px] p-6 md:p-8 border border-[#E0E7E9]" style={{ boxShadow: "0 2px 8px rgba(13,33,55,0.06)" }}>
        <h3 className="flex items-center gap-3 mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "#0D2137" }}>
          <span className="w-8 h-8 rounded-full bg-[#00838F] text-white flex items-center justify-center text-[14px] font-bold">A</span>
          Ihre Angaben
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Pflegegrad
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setPflegegrad(grade)}
                  className={`flex-1 min-w-[48px] min-h-[48px] rounded-[12px] border-2 transition-all cursor-pointer
                    ${pflegegrad === grade
                      ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]"
                      : "border-[#E0E7E9] text-[#455A64] hover:border-[#4DD0E1]"
                    }`}
                  style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700 }}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="calc-plz" className="block mb-2" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Postleitzahl
            </label>
            <input
              id="calc-plz"
              type="text"
              inputMode="numeric"
              maxLength={5}
              placeholder="z.B. 10787"
              value={plz}
              onChange={(e) => setPlz(e.target.value)}
              className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors"
              style={{ fontSize: "16px" }}
            />
          </div>

          <div>
            <label className="block mb-2" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Abrechnungsart
            </label>
            <div className="flex gap-2">
              {[
                { key: "direkt" as const, label: "Direktabrechnung" },
                { key: "kosten" as const, label: "Kostenerstattung" },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setAbrechnungsart(opt.key)}
                  className={`flex-1 py-3 rounded-[12px] border-2 transition-all cursor-pointer
                    ${abrechnungsart === opt.key
                      ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]"
                      : "border-[#E0E7E9] text-[#455A64] hover:border-[#4DD0E1]"
                    }`}
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="calc-monate" className="block mb-2" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Berechnungszeitraum (Monate)
            </label>
            <select
              id="calc-monate"
              value={monate}
              onChange={(e) => setMonate(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors bg-white"
              style={{ fontSize: "16px" }}
            >
              {[1, 3, 6, 12, 18].map((m) => (
                <option key={m} value={m}>{m} {m === 1 ? "Monat" : "Monate"}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="calc-genutzt" className="block mb-2" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
              Bereits genutzt (€)
            </label>
            <input
              id="calc-genutzt"
              type="number"
              min={0}
              max={monate * monthlyAmount}
              value={bereitsGenutzt}
              onChange={(e) => setBereitsGenutzt(Math.max(0, Number(e.target.value)))}
              className="w-full px-4 py-3 rounded-[12px] border-2 border-[#E0E7E9] outline-none focus:border-[#00838F] transition-colors"
              style={{ fontSize: "16px" }}
            />
          </div>
        </div>
      </div>

      {/* Block B: Services */}
      <div className="bg-white rounded-[20px] p-6 md:p-8 border border-[#E0E7E9]" style={{ boxShadow: "0 2px 8px rgba(13,33,55,0.06)" }}>
        <h3 className="flex items-center gap-3 mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "#0D2137" }}>
          <span className="w-8 h-8 rounded-full bg-[#00838F] text-white flex items-center justify-center text-[14px] font-bold">B</span>
          Gewünschte Leistungen
        </h3>

        {Object.entries(serviceCategories).map(([catKey, catLabel]) => {
          const services = Object.entries(settings.serviceRates).filter(([, v]) => v.category === catKey);
          return (
            <div key={catKey} className="mb-5 last:mb-0">
              <h4 className="text-[15px] font-semibold text-[#78909C] mb-2 uppercase tracking-wider">{catLabel}</h4>
              <div className="space-y-2">
                {services.map(([key, service]) => (
                  <label
                    key={key}
                    className={`flex items-center gap-3 p-3 rounded-[12px] border-2 cursor-pointer transition-all ${
                      selectedServices.includes(key)
                        ? "border-[#00838F] bg-[#E0F7FA]"
                        : "border-[#E0E7E9] hover:border-[#4DD0E1]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(key)}
                      onChange={() => toggleService(key)}
                      className="w-5 h-5 accent-[#00838F]"
                    />
                    <span className="flex-1" style={{ fontSize: "16px", color: "#0D2137" }}>{service.label}</span>
                    <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: "#00838F" }}>
                      {service.ratePerHour} €/h
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Block C: Results */}
      <div
        ref={resultRef}
        className="rounded-[20px] p-6 md:p-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0D2137 0%, #00363A 100%)",
        }}
      >
        <h3 className="flex items-center gap-3 mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "white" }}>
          <span className="w-8 h-8 rounded-full bg-[#4DD0E1] text-[#0D2137] flex items-center justify-center text-[14px] font-bold">C</span>
          Ihr Ergebnis
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-6 rounded-[16px]" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "36px", fontWeight: 700, color: "#4DD0E1" }}>
              {budget} €
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", marginTop: "4px" }}>
              Verfügbares Budget
            </div>
          </div>
          <div className="text-center p-6 rounded-[16px]" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "36px", fontWeight: 700, color: "white" }}>
              ~{totalHours} h
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", marginTop: "4px" }}>
              Betreuungsstunden
            </div>
          </div>
          <div className="text-center p-6 rounded-[16px]" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "36px", fontWeight: 700, color: "white" }}>
              ~{totalVisits}
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", marginTop: "4px" }}>
              Besuche (à 2h)
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onRequestConsultation?.({ pflegegrad, plz, services: selectedServices, budget })}
            className="flex-1 py-4 text-white rounded-[12px] transition-all hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 100%)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "var(--font-size-btn)",
              fontWeight: 700,
              border: "none",
              boxShadow: "0 4px 16px rgba(77,208,225,0.4)",
            }}
          >
            Kostenlose Beratung anfragen
          </button>
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="px-6 py-4 rounded-[12px] border-2 border-white/30 text-white/80 hover:border-white hover:text-white transition-all cursor-pointer"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "15px", fontWeight: 600, background: "none" }}
          >
            {showBreakdown ? "Aufschlüsselung ausblenden" : "Aufschlüsselung anzeigen"}
          </button>
        </div>
      </div>

      {/* Block D: Breakdown */}
      {showBreakdown && (
        <div className="bg-white rounded-[20px] p-6 md:p-8 border border-[#E0E7E9]" style={{ boxShadow: "0 2px 8px rgba(13,33,55,0.06)" }}>
          <h3 className="flex items-center gap-3 mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "20px", fontWeight: 700, color: "#0D2137" }}>
            <span className="w-8 h-8 rounded-full bg-[#00838F] text-white flex items-center justify-center text-[14px] font-bold">D</span>
            Aufschlüsselung
          </h3>

          <table className="w-full" style={{ fontSize: "16px" }}>
            <tbody>
              <tr className="border-b border-[#E0E7E9]">
                <td className="py-3 text-[#455A64]">Pflegegrad</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">{pflegegrad}</td>
              </tr>
              <tr className="border-b border-[#E0E7E9]">
                <td className="py-3 text-[#455A64]">Monatlicher Entlastungsbetrag</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">{monthlyAmount} €</td>
              </tr>
              <tr className="border-b border-[#E0E7E9]">
                <td className="py-3 text-[#455A64]">Berechnungszeitraum</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">{monate} Monate</td>
              </tr>
              <tr className="border-b border-[#E0E7E9]">
                <td className="py-3 text-[#455A64]">Gesamtbudget</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">{monate * monthlyAmount} €</td>
              </tr>
              {bereitsGenutzt > 0 && (
                <tr className="border-b border-[#E0E7E9]">
                  <td className="py-3 text-[#455A64]">Bereits genutzt</td>
                  <td className="py-3 text-right font-semibold text-[#ef4444]">-{bereitsGenutzt} €</td>
                </tr>
              )}
              <tr className="border-b-2 border-[#00838F]">
                <td className="py-3 font-bold text-[#0D2137]">Verfügbares Budget</td>
                <td className="py-3 text-right font-bold text-[#00838F]" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "20px" }}>
                  {budget} €
                </td>
              </tr>
              <tr className="border-b border-[#E0E7E9]">
                <td className="py-3 text-[#455A64]">Durchschnittlicher Stundensatz</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">{effectiveRate.toFixed(0)} €/h</td>
              </tr>
              <tr className="border-b border-[#E0E7E9]">
                <td className="py-3 text-[#455A64]">Geschätzte Betreuungsstunden</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">~{totalHours} h</td>
              </tr>
              <tr>
                <td className="py-3 text-[#455A64]">Geschätzte Besuche (à 2h)</td>
                <td className="py-3 text-right font-semibold text-[#0D2137]">~{totalVisits}</td>
              </tr>
            </tbody>
          </table>

          <p className="mt-4 text-[14px] text-[#78909C] italic">
            * Alle Angaben sind unverbindliche Schätzungen. Der tatsächliche Umfang wird im persönlichen Beratungsgespräch ermittelt.
          </p>
        </div>
      )}
    </div>
  );
}
