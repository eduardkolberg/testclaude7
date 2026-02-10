import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
    title: "Qualität & Vertrauen | So arbeiten wir | Tonus Dienst Berlin",
    description: "Feste Bezugsperson, versichertes Personal, Qualitätsstandards und Beschwerdemanagement – so stellen wir Qualität sicher.",
    alternates: { canonical: "https://tonusdienst.de/ueber-uns/qualitaet-vertrauen" },
};

const principles = [
    {
        icon: "👩‍💼",
        title: "Feste Bezugsperson",
        description: "Ihnen wird eine feste Mitarbeiterin zugewiesen, die regelmäßig zu Ihnen kommt. So entsteht Vertrauen und eine persönliche Beziehung. Bei Urlaub oder Krankheit organisieren wir eine Vertretung – Sie können die Vertretung aber auch ablehnen.",
    },
    {
        icon: "📋",
        title: "Fachleitung & Erstgespräch",
        description: "Vor dem ersten Einsatz besucht Sie unsere Fachleitung persönlich. Sie bespricht Ihre Wünsche, besichtigt die Wohnung und erstellt gemeinsam mit Ihnen einen individuellen Hilfeplan. Das Erstgespräch ist kostenlos und unverbindlich.",
    },
    {
        icon: "📱",
        title: "Transparente Kommunikation",
        description: "Sie erhalten monatlich eine SMS mit dem Terminplan (Tag, Uhrzeit, Name der Mitarbeiterin). Bei Problemen erreichen Sie unser Büro unter 030 610 850 625 – wir sprechen Deutsch, Russisch und Ukrainisch.",
    },
    {
        icon: "🛡️",
        title: "Versicherungsschutz",
        description: "Alle Mitarbeiterinnen sind haftpflichtversichert. Wenn bei einem Einsatz etwas zu Bruch geht, melden Sie es dem Büro – wir regeln den Schadensfall schnell und unkompliziert.",
    },
    {
        icon: "📖",
        title: "Grundausbildung (30 Stunden)",
        description: "Jede neue Mitarbeiterin absolviert eine 30-stündige Grundausbildung. Viele bringen zusätzlich medizinische Qualifikationen aus ihren Heimatländern mit (z.B. Krankenschwester).",
    },
    {
        icon: "🔄",
        title: "Flexibler Personalwechsel",
        description: "Wenn die Zusammenarbeit mit der zugewiesenen Mitarbeiterin nicht funktioniert, können Sie jederzeit einen Wechsel beantragen. Teilen Sie uns Ihre Gründe mit – wir finden eine bessere Lösung.",
    },
];

export default function QualitaetVertrauenPage() {
    return (
        <>
            <HeroSection
                badge="Qualität & Vertrauen"
                title="So arbeiten wir."
                titleAccent="Mit Verlässlichkeit."
                subtitle="Qualität entsteht durch klare Standards, persönliche Beziehungen und die Bereitschaft, auf Ihre Wünsche einzugehen. Erfahren Sie, was uns von anderen unterscheidet."
                ctaSecondary={{ label: "Über uns", href: "/ueber-uns" }}
            />
            <SidebarCTA topic="Qualität" />

            {/* Principles */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-8" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Unsere Qualitätsgrundsätze
                    </h2>
                    <div className="space-y-6">
                        {principles.map((p) => (
                            <div key={p.title} className="flex items-start gap-5 p-6 rounded-2xl border border-[#E0E7E9] hover:border-[#00838F]/30 hover:shadow-md transition-all">
                                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                                <div>
                                    <h3 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                                        {p.title}
                                    </h3>
                                    <p style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How we handle problems */}
            <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Wenn etwas nicht stimmt
                    </h2>
                    <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Bei Beschwerden oder Problemen nehmen Sie einfach Kontakt mit unserem Büro auf. Typische Anliegen und wie wir damit umgehen:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { issue: "Mitarbeiterin kommt zu spät", solution: "Rufen Sie das Büro an – wir klären die Ursache und planen bei Bedarf um." },
                            { issue: "Reinigung nicht gründlich genug", solution: "Fotografieren Sie die Stellen und teilen Sie Ihre Prioritäten dem Büro mit. Wir besprechen alles mit der Mitarbeiterin." },
                            { issue: "Sprachbarriere zu groß", solution: "Wir bieten einen Telefondolmetscherservice oder wechseln die Mitarbeiterin." },
                            { issue: "Etwas ist kaputt gegangen", solution: "Melden Sie den Schaden dem Büro. Alle Mitarbeiterinnen sind versichert." },
                        ].map((item) => (
                            <div key={item.issue} className="p-5 bg-white rounded-2xl border border-[#E0E7E9]">
                                <h4 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "16px" }}>
                                    ⚠️ {item.issue}
                                </h4>
                                <p style={{ fontSize: "15px", color: "#546E7A", lineHeight: 1.6 }}>
                                    ✅ {item.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cleaning supplies */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Was Sie bereitstellen
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Unsere Mitarbeiterinnen nutzen Ihre vorhandenen Reinigungsmittel und Geräte. Dafür benötigen wir:
                    </p>
                    <ul className="space-y-3 mb-8">
                        {[
                            "Staubsauger (in funktionsfähigem Zustand)",
                            "Eimer und Wischmop",
                            "Tücher / Lappen (idealerweise für Bad und Küche getrennt)",
                            "Allzweckreiniger, Badreiniger, Spülmittel",
                            "Müllbeutel",
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-3" style={{ fontSize: "var(--font-size-body)", color: "#455A64" }}>
                                <span className="text-[#66BB6A] font-bold text-xl flex-shrink-0">&#10003;</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="p-6 rounded-2xl bg-[#E0F7FA]/40 border border-[#B2EBF2]">
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            <strong>Tipp:</strong> Wenn Ihnen etwas fehlt, kann die Mitarbeiterin es beim nächsten Einkauf besorgen (z.B. bei Rossmann oder DM). Sie erstatten den Betrag einfach gegen Kassenbon.
                        </p>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
