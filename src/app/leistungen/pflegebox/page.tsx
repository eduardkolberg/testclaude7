import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
    title: "Kostenlose Pflegebox | Bis zu 40 €/Monat | Tonus Dienst Berlin",
    description: "Pflegebox mit Handschuhen, Desinfektionsmitteln, Masken und Bettschutzeinlagen – kostenlos über Ihre Pflegekasse. Tonus Dienst GmbH Berlin.",
    alternates: { canonical: "https://tonusdienst.de/leistungen/pflegebox" },
};

const boxItems = [
    { name: "Händedesinfektion", detail: "500 ml – für die tägliche Hygiene", icon: "💧" },
    { name: "Flächendesinfektion", detail: "1000 ml – für Oberflächen und Kontaktpunkte", icon: "🧴" },
    { name: "Einmalhandschuhe", detail: "Mehrere Paar – latexfrei, in verschiedenen Größen", icon: "🧤" },
    { name: "Mundschutzmasken", detail: "OP-Masken und FFP2 – nach Bedarf", icon: "😷" },
    { name: "Schutzschürzen", detail: "Einweg – für pflegerische Tätigkeiten", icon: "🦺" },
    { name: "Bettschutzeinlagen", detail: "Saugfähige Unterlagen – verschiedene Größen", icon: "🛏️" },
];

const steps = [
    { step: "1", title: "Bedarf mitteilen", description: "Rufen Sie uns an oder sagen Sie Ihrer Betreuungskraft, welche Produkte Sie benötigen." },
    { step: "2", title: "Box zusammenstellen", description: "Wir stellen Ihre individuelle Pflegebox nach Ihren Wünschen zusammen – bis zu 40 € monatlich." },
    { step: "3", title: "Lieferung erhalten", description: "Die Box wird Ihnen kostenlos per Kurier oder durch unsere Mitarbeiterin nach Hause geliefert." },
    { step: "4", title: "Abrechnung läuft", description: "Wir rechnen direkt mit Ihrer Pflegekasse ab. Für Sie entstehen keine Kosten." },
];

export default function PflegeboxPage() {
    return (
        <>
            <HeroSection
                badge="Pflegebox"
                title="Pflegehilfsmittel."
                titleAccent="Kostenlos geliefert."
                subtitle="Jeden Monat bis zu 40 € an Pflegehilfsmitteln zum Verbrauch – direkt zu Ihnen nach Hause. Kostenübernahme durch Ihre Pflegekasse. Einfach, bequem und zuverlässig."
                ctaSecondary={{ label: "Alle Leistungen", href: "/leistungen" }}
                features={["Ab Pflegegrad 1", "Bis 40 €/Monat", "Kostenlose Lieferung"]}
            />
            <SidebarCTA />

            {/* Box Contents */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-3" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Was ist in der Pflegebox?
                    </h2>
                    <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Sie bestimmen selbst, welche Produkte Sie benötigen. Wir stellen Ihre individuelle Box zusammen – ganz nach Ihrem Bedarf.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-12">
                        {boxItems.map((item) => (
                            <div key={item.name} className="flex items-start gap-4 p-5 rounded-2xl border border-[#E0E7E9] hover:border-[#00838F]/30 hover:shadow-md transition-all">
                                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                                <div>
                                    <h3 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{item.name}</h3>
                                    <p style={{ fontSize: "15px", color: "#546E7A" }}>{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-[#E0F7FA]/40 border border-[#B2EBF2]">
                        <h3 className="font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                            Gut zu wissen
                        </h3>
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            Jeder Pflegebedürftige mit Pflegegrad 1–5 hat Anspruch auf Pflegehilfsmittel zum Verbrauch im Wert von bis zu 40 € pro Monat (§ 40 SGB XI). Diese Produkte sind zusätzlich zum Entlastungsbetrag und werden separat von der Pflegekasse finanziert.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Order */}
            <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-8 text-center" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        So bestellen Sie Ihre Pflegebox
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {steps.map((s) => (
                            <div key={s.step} className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-[#E0E7E9]">
                                <span className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                                    {s.step}
                                </span>
                                <div>
                                    <h3 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{s.title}</h3>
                                    <p style={{ fontSize: "15px", color: "#546E7A", lineHeight: 1.6 }}>{s.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
