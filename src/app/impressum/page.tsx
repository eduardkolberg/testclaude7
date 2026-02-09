import type { Metadata } from "next";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Impressum | Tonus Dienst GmbH",
  description: "Impressum der Tonus Dienst GmbH – Angaben gemäß §5 TMG.",
  alternates: { canonical: "https://tonusdienst.de/impressum" },
  robots: "noindex, follow",
};

export default function ImpressumPage() {
  return (
    <section className="pt-[120px] pb-20" style={{ background: "white" }}>
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <h1
          className="mb-8"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "var(--font-size-h1)",
            fontWeight: 700,
            color: "#0D2137",
          }}
        >
          Impressum
        </h1>

        <div className="space-y-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              Angaben gemäß §5 TMG
            </h2>
            <p>
              {settings.company.legalName}<br />
              {settings.company.address.street}<br />
              {settings.company.address.zip} {settings.company.address.city}
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              Vertreten durch
            </h2>
            <p>
              {settings.company.ceoTitle}: {settings.company.ceo}
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              Kontakt
            </h2>
            <p>
              Telefon: {settings.company.phoneFormatted}<br />
              E-Mail: {settings.company.email}
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              Registereintrag
            </h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Charlottenburg (Berlin)<br />
              Registernummer: {settings.company.hrb}
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              Aufsichtsbehörde
            </h2>
            <p>
              Senatsverwaltung für Wissenschaft, Gesundheit und Pflege<br />
              Oranienstraße 106<br />
              10969 Berlin
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137", marginBottom: "12px" }}>
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              {" "}<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#00838F] underline">https://ec.europa.eu/consumers/odr/</a>.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
