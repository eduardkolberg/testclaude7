"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { isPLZInServiceArea } from "@/lib/settings";

interface ServiceAreaSectionProps {
  districts: string[];
  animated?: boolean;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

export default function ServiceAreaSection({ districts, animated = true, className = "" }: ServiceAreaSectionProps) {
  const { ref, visible } = useInView(0.15);
  const isVisible = animated ? visible : true;

  const [plz, setPlz] = useState("");
  const [plzResult, setPlzResult] = useState<"success" | "error" | null>(null);

  const checkPLZ = () => {
    if (isPLZInServiceArea(plz)) {
      setPlzResult("success");
    } else {
      setPlzResult("error");
    }
  };

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-start ${className}`} ref={animated ? ref : undefined}>
      {/* Left: Districts + PLZ */}
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="flex flex-wrap gap-2 mb-10">
          {districts.map((district) => (
            <span
              key={district}
              className="inline-flex items-center px-4 py-2 rounded-full cursor-default"
              style={{
                background: "#E0F7FA",
                color: "#00838F",
                ...fontBody,
                fontSize: "15px",
                fontWeight: 500,
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00838F";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E0F7FA";
                e.currentTarget.style.color = "#00838F";
              }}
            >
              {district}
            </span>
          ))}
        </div>

        {/* PLZ Checker */}
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Ihre Postleitzahl eingeben"
            aria-label="Postleitzahl"
            inputMode="numeric"
            autoComplete="postal-code"
            value={plz}
            onChange={(e) => { setPlz(e.target.value); setPlzResult(null); }}
            onKeyDown={(e) => { if (e.key === "Enter") checkPLZ(); }}
            maxLength={5}
            className="flex-1 px-5 py-3.5 rounded-[12px] border-2 outline-none transition-colors"
            style={{
              borderColor: plzResult === "success" ? "#66BB6A" : plzResult === "error" ? "#ef4444" : "#E0E7E9",
              ...fontBody,
              fontSize: "16px",
            }}
            onFocus={(e) => { if (!plzResult) e.currentTarget.style.borderColor = "#00838F"; }}
            onBlur={(e) => { if (!plzResult) e.currentTarget.style.borderColor = "#E0E7E9"; }}
          />
          <button
            onClick={checkPLZ}
            className="px-6 py-3.5 text-white rounded-[12px] whitespace-nowrap transition-all hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              ...fontHeadings,
              fontSize: "16px",
              fontWeight: 600,
              border: "none",
            }}
          >
            Prüfen
          </button>
        </div>

        {plzResult === "success" && (
          <p className="flex items-center gap-2" style={{ ...fontBody, fontSize: "15px", color: "#66BB6A", fontWeight: 600 }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ja, wir sind bei Ihnen aktiv! Rufen Sie uns an.
          </p>
        )}
        {plzResult === "error" && (
          <p className="flex items-center gap-2" style={{ ...fontBody, fontSize: "15px", color: "#ef4444", fontWeight: 600 }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            Bitte rufen Sie uns an – wir prüfen, ob wir auch in Ihrer Nähe tätig sind.
          </p>
        )}
      </div>

      {/* Right: Berlin map placeholder */}
      <div
        className="relative rounded-[24px] overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 50%, #E0F2F1 100%)",
          boxShadow: "0 4px 12px rgba(0,131,143,0.12)",
          minHeight: "380px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.6s ease-out 0.15s",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-48 h-48 mx-auto mb-4" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="#00838F" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
              <circle cx="100" cy="100" r="60" stroke="#00838F" strokeWidth="1.5" opacity="0.2" />
              <circle cx="100" cy="100" r="40" fill="#00838F" opacity="0.08" />
              <circle cx="105" cy="95" r="6" fill="#00838F" />
              <path d="M105 89 L105 80" stroke="#00838F" strokeWidth="2" />
              <circle cx="105" cy="78" r="3" fill="#4DD0E1" />
              <text x="60" y="70" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Spandau</text>
              <text x="110" y="55" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Pankow</text>
              <text x="85" y="105" fill="#00838F" fontSize="8" fontWeight="700" opacity="0.8">Mitte</text>
              <text x="130" y="110" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Lichtenberg</text>
              <text x="65" y="140" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Steglitz</text>
              <text x="115" y="145" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Neukölln</text>
            </svg>
            <div style={{ ...fontHeadings, fontSize: "16px", fontWeight: 600, color: "#00838F" }}>
              Berlin & Umgebung
            </div>
            <div className="flex items-center justify-center gap-1 mt-2" style={{ ...fontBody, fontSize: "14px", color: "#455A64" }}>
              <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Kurfürstenstr. 114, 10787 Berlin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
