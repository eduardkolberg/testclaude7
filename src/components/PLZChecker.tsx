"use client";

import { useState } from "react";
import { isPLZInServiceArea } from "@/lib/settings";

interface PLZCheckerProps {
  compact?: boolean;
}

export default function PLZChecker({ compact = false }: PLZCheckerProps) {
  const [plz, setPlz] = useState("");
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const checkPLZ = () => {
    if (plz.length < 5) return;
    setResult(isPLZInServiceArea(plz) ? "success" : "error");
  };

  return (
    <div>
      <div className={`flex gap-2 ${compact ? "" : "mb-3"}`}>
        <input
          type="text"
          placeholder="Ihre Postleitzahl eingeben"
          aria-label="Postleitzahl"
          inputMode="numeric"
          autoComplete="postal-code"
          value={plz}
          onChange={(e) => { setPlz(e.target.value); setResult(null); }}
          onKeyDown={(e) => { if (e.key === "Enter") checkPLZ(); }}
          maxLength={5}
          className="flex-1 px-5 py-3.5 rounded-[12px] border-2 outline-none transition-colors"
          style={{
            borderColor: result === "success" ? "#66BB6A" : result === "error" ? "#ef4444" : "#E0E7E9",
            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
            fontSize: "16px",
          }}
          onFocus={(e) => { if (!result) e.currentTarget.style.borderColor = "#00838F"; }}
          onBlur={(e) => { if (!result) e.currentTarget.style.borderColor = "#E0E7E9"; }}
        />
        <button
          onClick={checkPLZ}
          className="px-6 py-3.5 text-white rounded-[12px] whitespace-nowrap transition-all hover:-translate-y-0.5 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "16px",
            fontWeight: 600,
            border: "none",
          }}
        >
          Prüfen
        </button>
      </div>

      {result === "success" && (
        <p className="flex items-center gap-2 mt-3" style={{ fontSize: "15px", color: "#66BB6A", fontWeight: 600 }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Ja, wir sind bei Ihnen aktiv! Rufen Sie uns an.
        </p>
      )}
      {result === "error" && (
        <p className="flex items-center gap-2 mt-3" style={{ fontSize: "15px", color: "#ef4444", fontWeight: 600 }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          Bitte rufen Sie uns an &ndash; wir prüfen, ob wir auch in Ihrer Nähe tätig sind.
        </p>
      )}
    </div>
  );
}
