import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Unsere Leistungen | Tonus Dienst GmbH – Alltagshilfe in Berlin",
  description: "Haushaltshilfe, Einkaufshilfe, Arztbegleitung, Spaziergänge & Entlastung für Angehörige. Alle Leistungen über §45b SGB XI abrechenbar. Tonus Dienst Berlin.",
  alternates: { canonical: "https://tonusdienst.de/leistungen" },
};

const serviceCategories = [
  {
    title: "Alltagsunterstützung",
    href: "/leistungen/alltagsunterstuetzung",
    description: "Haushaltshilfe, Einkaufshilfe und Unterstützung bei Mahlzeiten – damit der Alltag wieder leichter wird.",
    items: ["Haushaltshilfe – Reinigung & Ordnung", "Einkaufshilfe & Besorgungen", "Unterstützung bei Mahlzeiten"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Betreuung & Begleitung",
    href: "/leistungen/betreuung-begleitung",
    description: "Gemeinsame Termine, Spaziergänge und aktivierende Gesellschaft – für mehr Lebensqualität.",
    items: ["Begleitung zu Arzt- & Behördenterminen", "Spaziergänge & Freizeitgestaltung", "Gesellschaft & Gespräche"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Entlastung für Angehörige",
    href: "/leistungen/entlastung-angehoerige",
    description: "Stundenweise Übernahme, Tagesstruktur und Organisation – damit auch Sie wieder durchatmen können.",
    items: ["Stundenweise Entlastung", "Unterstützung bei Tagesstruktur", "Organisation im Alltag"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function LeistungenPage() {
  return (
    <>
      <HeroSection
        badge="Unsere Leistungen"
        title="Alltagshilfe, die wirklich entlastet."
        titleAccent="Individuell. Zuverlässig. Mit Herz."
        subtitle="Von der Haushaltshilfe bis zur Begleitung zum Arzt – wir unterstützen pflegebedürftige Menschen und entlasten ihre Angehörigen. Alle Leistungen sind über den Entlastungsbetrag (§45b SGB XI) abrechenbar."
        ctaSecondary={{ label: "Mehr zu §45b erfahren", href: "/45b" }}
      />

      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white border border-[#E0E7E9] rounded-[16px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,131,143,0.18)] hover:border-[#4DD0E1]"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 100%)" }}>
                  {cat.icon}
                </div>

                <h2
                  className="mb-3"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 600, color: "#0D2137" }}
                >
                  {cat.title}
                </h2>

                <p className="mb-6" style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
                  {cat.description}
                </p>

                <ul className="mb-8 flex-grow space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3" style={{ fontSize: "16px", color: "#455A64" }}>
                      <span className="text-[#66BB6A] font-bold text-[18px] flex-shrink-0">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ fontSize: "16px", fontWeight: 600, color: "#00838F" }}
                >
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entlastungsbetrag hint */}
      <section style={{ background: "#F7FAFA", padding: "80px 0" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6" style={{ background: "#E0F7FA", color: "#00838F", fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "14px", fontWeight: 600 }}>
            Gut zu wissen
          </div>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
            Alle Leistungen über die Pflegekasse abrechenbar
          </h2>
          <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
            Mit dem Entlastungsbetrag nach §45b SGB XI stehen Ihnen 131 € monatlich zu – ab Pflegegrad 1. Wir rechnen direkt mit Ihrer Pflegekasse ab. Für Sie entstehen keine Kosten.
          </p>
          <Link
            href="/45b/entlastungsbetrag"
            className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "var(--font-size-btn)",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
            }}
          >
            §45b verständlich erklärt
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
