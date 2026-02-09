"use client";

import { useState, useEffect } from "react";

interface CookiePreferences {
  necessary: boolean;
  statistics: boolean;
  marketing: boolean;
  external: boolean;
}

const COOKIE_KEY = "tonus_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    statistics: false,
    marketing: false,
    external: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const savePreferences = (preferences: CookiePreferences) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...preferences, timestamp: Date.now() }));
    setVisible(false);
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, statistics: true, marketing: true, external: true });
  };

  const acceptNecessary = () => {
    savePreferences({ necessary: true, statistics: false, marketing: false, external: false });
  };

  const saveCustom = () => {
    savePreferences(prefs);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1300] p-4 md:p-6">
      <div
        className="max-w-[900px] mx-auto bg-white rounded-[20px] p-6 md:p-8"
        style={{ boxShadow: "0 -4px 32px rgba(0,0,0,0.15)" }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#E0F7FA] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#0D2137",
                marginBottom: "8px",
              }}
            >
              Datenschutz-Einstellungen
            </h3>
            <p style={{ fontSize: "15px", color: "#455A64", lineHeight: 1.6 }}>
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
              Weitere Informationen finden Sie in unserer{" "}
              <a href="/datenschutz" className="text-[#00838F] underline">Datenschutzerklärung</a>.
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="mb-6 space-y-3 pl-14">
            {[
              { key: "necessary" as const, label: "Notwendig", desc: "Für die Grundfunktionen der Website erforderlich.", disabled: true },
              { key: "statistics" as const, label: "Statistik", desc: "Helfen uns zu verstehen, wie Besucher unsere Website nutzen." },
              { key: "marketing" as const, label: "Marketing", desc: "Werden verwendet, um relevante Werbung anzuzeigen." },
              { key: "external" as const, label: "Externe Medien", desc: "Inhalte von Drittanbietern wie Google Maps." },
            ].map((cat) => (
              <label key={cat.key} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs[cat.key]}
                  disabled={cat.disabled}
                  onChange={(e) => setPrefs({ ...prefs, [cat.key]: e.target.checked })}
                  className="mt-1 w-5 h-5 accent-[#00838F]"
                />
                <div>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "#0D2137" }}>{cat.label}</span>
                  <p style={{ fontSize: "14px", color: "#78909C" }}>{cat.desc}</p>
                </div>
              </label>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pl-14">
          <button
            onClick={acceptAll}
            className="px-6 py-3 text-white rounded-[12px] transition-all hover:-translate-y-0.5 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              border: "none",
            }}
          >
            Alle akzeptieren
          </button>
          {showDetails ? (
            <button
              onClick={saveCustom}
              className="px-6 py-3 rounded-[12px] border-2 border-[#00838F] text-[#00838F] transition-all hover:bg-[#E0F7FA] cursor-pointer"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "15px", fontWeight: 600 }}
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="px-6 py-3 rounded-[12px] border-2 border-[#E0E7E9] text-[#455A64] transition-all hover:border-[#00838F] hover:text-[#00838F] cursor-pointer"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "15px", fontWeight: 600 }}
            >
              Einstellungen
            </button>
          )}
          <button
            onClick={acceptNecessary}
            className="px-6 py-3 text-[#78909C] hover:text-[#455A64] transition-colors cursor-pointer"
            style={{ fontSize: "15px", fontWeight: 500, background: "none", border: "none" }}
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
