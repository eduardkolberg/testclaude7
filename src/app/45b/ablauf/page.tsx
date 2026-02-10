import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
    title: "Ihr Weg zur Hilfe | Ablauf Schritt für Schritt | Tonus Dienst Berlin",
    description: "Von der ersten Anfrage bis zum regelmäßigen Besuch – so einfach starten Sie mit Tonus Dienst. Erstgespräch, Vertrag, Einsatzbeginn verständlich erklärt.",
    alternates: { canonical: "https://tonusdienst.de/45b/ablauf" },
};

const steps = [
    {
        step: "1",
        title: "Anruf oder Anfrage",
        description: "Sie rufen uns an oder senden eine Anfrage. Wir nehmen Ihre Daten auf: Name, Adresse, Pflegegrad und gewünschte Leistungen. Das dauert nur wenige Minuten.",
        detail: "Telefon: 030 610 850 625 · Mo–Fr 9:00–18:00 Uhr",
    },
    {
        step: "2",
        title: "Erstgespräch vor Ort",
        description: "Unsere Fachleitung (z.B. Frau Rak oder Frau Kolberg) besucht Sie zu Hause. Sie bespricht mit Ihnen den Umfang der Hilfe, besichtigt die Wohnung und klärt Ihre Wünsche und Prioritäten.",
        detail: "Kostenlos und unverbindlich – Sie entscheiden danach in Ruhe.",
    },
    {
        step: "3",
        title: "Vertrag & Formalitäten",
        description: "Der Vertrag wird vor Ort unterschrieben – eine Pflicht gemäß Senatsvorgabe. Gleichzeitig unterzeichnen Sie die Abtretungserklärung, damit wir direkt mit Ihrer Kasse abrechnen können. Sie zahlen nichts selbst.",
        detail: "Obligatorisch nach Berliner Senatsvorgaben für anerkannte Dienste.",
    },
    {
        step: "4",
        title: "Mitarbeiterin kennenlernen",
        description: "Wir stellen Ihnen eine feste Mitarbeiterin vor, die regelmäßig zu Ihnen kommt. Beim ersten Besuch zeigen Sie ihr die Wohnung, erklären Ihre Wünsche und legen gemeinsam den Ablauf fest.",
        detail: "Feste Bezugsperson für Kontinuität und Vertrauen.",
    },
    {
        step: "5",
        title: "Regelmäßige Besuche",
        description: "Ihre Mitarbeiterin kommt im vereinbarten Rhythmus (z.B. wöchentlich oder alle zwei Wochen). Sie erhalten vorab eine SMS mit dem Terminplan für den kommenden Monat. Nach jedem Besuch unterschreiben Sie den Leistungsnachweis.",
        detail: "Automatische SMS-Erinnerung – Sie müssen sich um nichts kümmern.",
    },
];

export default function AblaufPage() {
    return (
        <>
            <HeroSection
                badge="Ihr Weg zur Hilfe"
                title="So einfach."
                titleAccent="Schritt für Schritt."
                subtitle="Von der ersten Anfrage bis zum regelmäßigen Besuch – transparent, planbar und ohne Überraschungen. Wir begleiten Sie durch den gesamten Prozess."
                ctaSecondary={{ label: "§45b Übersicht", href: "/45b" }}
            />
            <SidebarCTA />

            {/* Steps */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <div className="space-y-8">
                        {steps.map((s, idx) => (
                            <div key={s.step} id={idx === 1 ? "erstgespraech" : undefined} className={`relative flex gap-6 ${idx === 1 ? "scroll-mt-24" : ""}`}>
                                {/* Connector line */}
                                {idx < steps.length - 1 && (
                                    <div className="absolute left-6 top-14 w-0.5 bg-[#E0E7E9]" style={{ height: "calc(100% - 20px)" }} />
                                )}
                                {/* Step number */}
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 z-10" style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>
                                    {s.step}
                                </div>
                                {/* Content */}
                                <div className="flex-1 pb-8">
                                    <h3 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "20px" }}>
                                        {s.title}
                                    </h3>
                                    <p className="mb-3" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                                        {s.description}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7FAFA] border border-[#E0E7E9]">
                                        <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ fontSize: "14px", color: "#546E7A" }}>{s.detail}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What to Prepare */}
            <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Was Sie vorbereiten sollten
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: "Pflegegrad-Bescheid", desc: "Falls vorhanden – Schreiben Ihrer Pflegekasse mit dem festgestellten Pflegegrad." },
                            { title: "Reinigungsmittel & Inventar", desc: "Staubsauger, Eimer, Tücher und Reinigungsmittel – wir nutzen Ihre vorhandenen Mittel." },
                            { title: "Wunschliste", desc: "Schreiben Sie auf, welche Aufgaben Ihnen besonders wichtig sind – das erleichtert die Planung." },
                            { title: "Zeitliche Wünsche", desc: "Welcher Wochentag passt Ihnen? Vormittags oder nachmittags? Wir stimmen den Rhythmus ab." },
                        ].map((item) => (
                            <div key={item.title} className="p-5 bg-white rounded-2xl border border-[#E0E7E9]">
                                <h4 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{item.title}</h4>
                                <p style={{ fontSize: "15px", color: "#546E7A", lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="bg-white" style={{ padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Bereit loszulegen?
                    </h2>
                    <p className="mb-8 text-[#455A64]" style={{ fontSize: "var(--font-size-body)" }}>
                        Rufen Sie uns an oder schreiben Sie uns – wir melden uns noch am selben Tag.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+4930610850625" className="px-8 py-4 rounded-full text-white font-bold hover:scale-[1.03] transition-all" style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", boxShadow: "0 4px 12px rgba(0,131,143,0.3)", fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            030 610 850 625
                        </a>
                        <Link href="/kontakt" className="px-8 py-4 rounded-full border-2 border-[#00838F] text-[#00838F] font-bold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Kontaktformular
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
