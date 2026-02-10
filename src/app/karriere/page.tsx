import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
    title: "Karriere bei Tonus Dienst | Jobs als Alltagshelferin Berlin",
    description: "Arbeiten Sie als Alltagshelferin bei Tonus Dienst GmbH in Berlin. Flexible Arbeitszeiten, fairer Verdienst und ein sinnvoller Job. Jetzt bewerben!",
    alternates: { canonical: "https://tonusdienst.de/karriere" },
};

const benefits = [
    { icon: "⏰", title: "Flexible Arbeitszeiten", description: "Planen Sie Ihre Termine rund um Ihr Leben – morgens, vormittags oder nachmittags. Keine Nacht- und Wochenendarbeit." },
    { icon: "💰", title: "Fairer Verdienst", description: "Attraktiver Stundenlohn mit pünktlicher Bezahlung. Keine Überraschungen – nur transparente Konditionen." },
    { icon: "🏠", title: "Arbeit in Ihrer Nähe", description: "Einsätze in Ihrem Berliner Bezirk oder der näheren Umgebung. Kurze Anfahrtswege, mehr Zeit für Sie." },
    { icon: "🤝", title: "Feste Kunden", description: "Sie betreuen Ihre eigenen, festen Kunden. So bauen Sie persönliche Beziehungen auf und kennen die Wünsche der Menschen." },
    { icon: "📚", title: "Grundausbildung (30 Stunden)", description: "Sie erhalten eine 30-stündige Grundausbildung, die Sie auf Ihren Einsatz vorbereitet. Vorkenntnisse im Pflegebereich sind ein Plus, aber keine Pflicht." },
    { icon: "🌍", title: "Multikulturelles Team", description: "Unser Team besteht aus Mitarbeiterinnen verschiedener Herkünfte. Deutsch-, Russisch- und Ukrainischkenntnisse sind willkommen." },
];

const requirements = [
    "Zuverlässigkeit und Pünktlichkeit",
    "Freundlicher und respektvoller Umgang mit älteren Menschen",
    "Grundkenntnisse in Deutsch (Google Translate reicht für den Anfang)",
    "Bereitschaft zur 30-stündigen Grundausbildung",
    "Gültiger Aufenthalts- und Arbeitstitel (wenn nicht EU-Bürgerin)",
    "Erfahrung im Haushalt ist von Vorteil, aber keine Pflicht",
];

export default function KarrierePage() {
    return (
        <>
            <HeroSection
                badge="Karriere"
                title="Arbeiten mit Sinn."
                titleAccent="Menschen helfen."
                subtitle="Werden Sie Teil unseres Teams und unterstützen Sie pflegebedürftige Menschen in Berlin – als Alltagshelferin bei Tonus Dienst GmbH."
                ctaSecondary={{ label: "Über uns", href: "/ueber-uns" }}
            />
            <SidebarCTA />

            {/* Benefits */}
            <section id="vorteile" className="bg-white scroll-mt-24" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-8" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Warum Tonus Dienst?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5 mb-12">
                        {benefits.map((b) => (
                            <div key={b.title} className="flex items-start gap-4 p-5 rounded-2xl border border-[#E0E7E9] hover:border-[#00838F]/30 hover:shadow-md transition-all">
                                <span className="text-3xl flex-shrink-0">{b.icon}</span>
                                <div>
                                    <h3 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{b.title}</h3>
                                    <p style={{ fontSize: "15px", color: "#546E7A", lineHeight: 1.6 }}>{b.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Was wir erwarten
                    </h2>
                    <ul className="space-y-4 mb-8">
                        {requirements.map((req) => (
                            <li key={req} className="flex items-start gap-3" style={{ fontSize: "var(--font-size-body)", color: "#455A64" }}>
                                <span className="text-[#66BB6A] font-bold text-xl flex-shrink-0">&#10003;</span>
                                <span>{req}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="p-6 rounded-2xl bg-[#E0F7FA]/40 border border-[#B2EBF2]">
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            <strong>Hinweis:</strong> Wir stellen ausschließlich Frauen ein, da dies den Wünschen unserer überwiegend weiblichen Kundschaft entspricht. Medizinische Vorkenntnisse (z.B. Krankenschwester im Heimatland) sind ein großes Plus!
                        </p>
                    </div>
                </div>
            </section>

            {/* Your Role */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Ihre typischen Aufgaben
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {[
                            { task: "Reinigung", detail: "Staubsaugen, Wischen, Bad und Küche putzen" },
                            { task: "Wäsche & Bügeln", detail: "Waschen, Aufhängen, Bügeln, Bettwäsche beziehen" },
                            { task: "Einkauf", detail: "Lebensmittel, Drogerie- und Apothekenbesorgungen" },
                            { task: "Begleitung", detail: "Arztbesuche, Behördengänge, Spaziergänge" },
                            { task: "Mahlzeiten", detail: "Kochen, Aufwärmen, Tisch decken und abräumen" },
                            { task: "Organisation", detail: "Post sortieren, Kalender pflegen, Telefonate" },
                        ].map((item) => (
                            <div key={item.task} className="p-4 rounded-xl bg-[#F7FAFA] border border-[#E0E7E9]">
                                <span className="font-semibold text-[#0D2137]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>{item.task}</span>
                                <span className="text-[#546E7A]" style={{ fontSize: "15px" }}> – {item.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply */}
            <section id="bewerben" className="scroll-mt-24" style={{ background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)", padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Jetzt bewerben
                    </h2>
                    <p className="mb-8 text-[#455A64] max-w-[600px] mx-auto" style={{ fontSize: "var(--font-size-body)", lineHeight: 1.65 }}>
                        Rufen Sie uns an oder schreiben Sie eine kurze E-Mail mit Ihrem Namen und Ihrer Telefonnummer. Wir melden uns innerhalb eines Werktages.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+4930610850625" className="px-8 py-4 rounded-full text-white font-bold hover:scale-[1.03] transition-all" style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", boxShadow: "0 4px 12px rgba(0,131,143,0.3)", fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            030 610 850 625
                        </a>
                        <a href="mailto:tonusdienstberlin@gmail.com" className="px-8 py-4 rounded-full border-2 border-[#00838F] text-[#00838F] font-bold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            E-Mail senden
                        </a>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
