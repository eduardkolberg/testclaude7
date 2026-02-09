import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
    title: "Finanzierung & Kosten | 131 € Entlastungsbetrag nutzen | Tonus Dienst",
    description: "So nutzen Sie Ihr Budget optimal: 131 €/Monat, Guthaben-Übertrag bis 30. Juni, Privatzahlung und Stundenberechnung verständlich erklärt.",
    alternates: { canonical: "https://tonusdienst.de/45b/finanzierung" },
};

export default function FinanzierungPage() {
    const { monthlyAmount, yearlyAmount, rolloverDeadline, maxRolloverMonths } = settings.entlastungsbetrag;
    const ratePerHour = 35.5;
    const hoursPerMonth = Math.floor((monthlyAmount / ratePerHour) * 10) / 10;

    return (
        <>
            <HeroSection
                badge="Finanzierung & Kosten"
                title="Ihr Budget."
                titleAccent="Transparent erklärt."
                subtitle={`${monthlyAmount} € pro Monat stehen Ihnen zu – für anerkannte Alltagshilfe. Wir erklären, wie Sie Ihr Guthaben optimal nutzen, was bei Übertrag passiert und wann private Zuzahlung sinnvoll ist.`}
                ctaSecondary={{ label: "§45b Übersicht", href: "/45b" }}
            />

            {/* Budget Overview */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Was Ihnen zusteht
                    </h2>

                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                            <div className="text-4xl font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{monthlyAmount} €</div>
                            <div className="text-[15px] text-[#546E7A]">pro Monat</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                            <div className="text-4xl font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{yearlyAmount} €</div>
                            <div className="text-[15px] text-[#546E7A]">pro Jahr</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                            <div className="text-4xl font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>≈ {hoursPerMonth} h</div>
                            <div className="text-[15px] text-[#546E7A]">monatliche Hilfe</div>
                        </div>
                    </div>

                    <h3 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137" }}>
                        Stundenberechnung
                    </h3>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Unsere aktuelle Stundenpauschale beträgt <strong>{ratePerHour.toFixed(2).replace(".", ",")} €/Stunde</strong> (Stand 2025). Aus {monthlyAmount} € ergibt sich ein Zeitbudget von ca. <strong>3 Stunden und 40 Minuten pro Monat</strong>. Das reicht für einen längeren Einsatz oder zwei kürzere Besuche (je ca. 1 Stunde 50 Minuten).
                    </p>

                    <div className="rounded-2xl overflow-hidden border border-[#E0E7E9] mb-12">
                        <table className="w-full" style={{ fontSize: "var(--font-size-body)" }}>
                            <thead>
                                <tr style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)" }}>
                                    <th className="text-left px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Variante</th>
                                    <th className="text-right px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Budget</th>
                                    <th className="text-right px-6 py-4 text-white font-semibold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Stunden</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-semibold text-[#0D2137]">1 Besuch / Monat</td>
                                    <td className="px-6 py-4 text-right text-[#00838F] font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>{monthlyAmount} €</td>
                                    <td className="px-6 py-4 text-right text-[#455A64]" style={{ fontFamily: "var(--font-dm-sans)" }}>ca. 3 h 40 min</td>
                                </tr>
                                <tr style={{ background: "#F7FAFA" }}>
                                    <td className="px-6 py-4 font-semibold text-[#0D2137]">2 Besuche / Monat</td>
                                    <td className="px-6 py-4 text-right text-[#00838F] font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>{monthlyAmount} €</td>
                                    <td className="px-6 py-4 text-right text-[#455A64]" style={{ fontFamily: "var(--font-dm-sans)" }}>je ca. 1 h 50 min</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 font-semibold text-[#0D2137]">Mehr gewünscht</td>
                                    <td className="px-6 py-4 text-right text-[#00838F] font-bold" style={{ fontFamily: "var(--font-dm-sans)" }}>+ privat</td>
                                    <td className="px-6 py-4 text-right text-[#455A64]" style={{ fontFamily: "var(--font-dm-sans)" }}>nach Bedarf</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Rollover */}
                    <div id="uebertrag" className="scroll-mt-24">
                        <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                            Guthaben & Übertrag
                        </h2>
                        <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                            Nicht genutzte Beträge verfallen nicht sofort! Sie sammeln sich auf Ihrem Konto an und können bis zum <strong>{rolloverDeadline} des Folgejahres</strong> eingesetzt werden. So können Sie bis zu {maxRolloverMonths} Monate ansparen.
                        </p>
                        <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#F5E6D3] mb-8">
                            <h3 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>⚠️ Wichtig: Frist beachten</h3>
                            <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                                Guthaben aus dem Vorjahr (z.B. 2024) verfällt am {rolloverDeadline} des Folgejahres (also 2025). Danach sind die Mittel unwiederbringlich verloren. Rufen Sie rechtzeitig bei Ihrer Pflegekasse an, um Ihren aktuellen Guthabenstand zu erfahren, und teilen Sie ihn uns mit – wir helfen Ihnen, die Stunden sinnvoll einzuplanen.
                            </p>
                        </div>
                    </div>

                    {/* Private Payment */}
                    <div id="privat" className="scroll-mt-24">
                        <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                            Privatzahlung & Selbstzahler
                        </h2>
                        <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                            Wenn Ihr Kassenbudget erschöpft ist oder Sie noch keinen Pflegegrad haben, können Sie unsere Leistungen als Selbstzahler nutzen. Die Abrechnung erfolgt zum gleichen Stundensatz von {ratePerHour.toFixed(2).replace(".", ",")} €/Stunde. Sie erhalten eine transparente Rechnung zum vereinbarten Termin.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Gleicher Service, gleicher Preis – ob Kasse oder privat",
                                "Kein Risiko: monatlich kündbar, keine versteckten Kosten",
                                "Ideale Lösung während der Wartezeit auf den Pflegegrad-Bescheid",
                                "Kombinierbar: Kassenbudget + private Zuzahlung für mehr Stunden",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3" style={{ fontSize: "var(--font-size-body)", color: "#455A64" }}>
                                    <span className="text-[#66BB6A] font-bold text-xl flex-shrink-0">&#10003;</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section style={{ background: "#F7FAFA", padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Nächste Schritte
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link href="/45b/ablauf" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            So läuft es ab
                        </Link>
                        <Link href="/45b/abrechnung" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Abrechnung verstehen
                        </Link>
                        <Link href="/kontakt" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Beratung anfragen
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
