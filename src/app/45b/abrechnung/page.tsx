import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
    title: "Abrechnung & Nachweise | Direktabrechnung & Leistungsnachweis | Tonus Dienst",
    description: "Direktabrechnung mit der Pflegekasse, Abtretungserklärung und Leistungsnachweis erklärt. So funktioniert die Abrechnung bei Tonus Dienst Berlin.",
    alternates: { canonical: "https://tonusdienst.de/45b/abrechnung" },
};

export default function AbrechnungPage() {
    return (
        <>
            <HeroSection
                badge="Abrechnung & Nachweise"
                title="Papierkram?"
                titleAccent="Übernehmen wir."
                subtitle="Die Abrechnung mit Ihrer Pflegekasse ist für viele Kunden die größte Hürde. Bei uns müssen Sie sich darum nicht kümmern – wir rechnen direkt ab."
                ctaSecondary={{ label: "§45b Übersicht", href: "/45b" }}
            />

            {/* Direktabrechnung */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Direktabrechnung & Abtretungserklärung
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Als anerkannter Anbieter nach §45b SGB XI rechnen wir Ihre Leistungen direkt mit Ihrer Pflegekasse ab. Sie müssen keine Rechnungen einreichen und zahlen nichts aus eigener Tasche – solange Ihr monatliches Budget von 131 € ausreicht.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-2xl border-2 border-[#00838F] bg-[#F7FAFA]">
                            <div className="text-2xl mb-3">✅</div>
                            <h3 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>Direktabrechnung</h3>
                            <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                <li>• Wir rechnen direkt mit Ihrer Kasse ab</li>
                                <li>• Sie unterschreiben nur den Leistungsnachweis</li>
                                <li>• Kein Vorstrecken, keine Formulare</li>
                                <li>• Die einfachste und beliebteste Option</li>
                            </ul>
                        </div>
                        <div id="erstattung" className="scroll-mt-24 p-6 rounded-2xl border border-[#E0E7E9]">
                            <div className="text-2xl mb-3">📋</div>
                            <h3 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>Kostenerstattung</h3>
                            <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                <li>• Sie erhalten eine Rechnung von uns</li>
                                <li>• Sie reichen diese bei Ihrer Kasse ein</li>
                                <li>• Die Kasse erstattet Ihnen den Betrag</li>
                                <li>• Möglich, aber aufwändiger für Sie</li>
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#E0F7FA]/40 border border-[#B2EBF2] mb-12">
                        <h3 className="font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                            Was ist die Abtretungserklärung?
                        </h3>
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            Mit der Abtretungserklärung erlauben Sie uns, Ihren Entlastungsbetrag (131 €/Monat) direkt von der Pflegekasse zu erhalten. Dieses Dokument ist Teil Ihres Vertrags und wird einmalig unterschrieben. Es bedeutet nicht, dass Sie auf Leistungen verzichten – es vereinfacht nur den Zahlungsweg.
                        </p>
                    </div>

                    {/* Leistungsnachweis */}
                    <div id="doku" className="scroll-mt-24">
                        <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                            Der Leistungsnachweis
                        </h2>
                        <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                            Nach jedem Besuch dokumentiert unsere Mitarbeiterin die erbrachten Leistungen und die Arbeitszeit. Sie prüfen die Angaben und bestätigen sie mit Ihrer Unterschrift. Dieses Dokument ist die Grundlage für die Abrechnung mit Ihrer Kasse.
                        </p>

                        <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#F5E6D3] mb-8">
                            <h3 className="font-bold text-[#0D2137] mb-3" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                                📝 Wichtige Tipps zur Stundenkontrolle
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Prüfen Sie vor der Unterschrift, ob die eingetragene Zeit stimmt.",
                                    "Wenn die Mitarbeiterin früher gegangen ist, korrigieren Sie die Zeit auf dem Bogen (z.B. streichen und richtige Zeit eintragen).",
                                    "Unterschreiben Sie niemals leere Formulare (Blanko-Bögen).",
                                    "Unterschreiben Sie nicht für Tage, an denen kein Besuch stattgefunden hat.",
                                    "15 Minuten Fahrpauschale können von der Arbeitszeit abgezogen werden – das ist normal und vertraglich geregelt.",
                                ].map((tip) => (
                                    <li key={tip} className="flex items-start gap-3" style={{ fontSize: "15px", color: "#455A64" }}>
                                        <span className="text-[#FF8F00] font-bold text-lg flex-shrink-0">!</span>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section style={{ background: "#F7FAFA", padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Weitere Informationen
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link href="/45b/vertrag" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Vertrag & Kündigung
                        </Link>
                        <Link href="/45b/finanzierung" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Finanzierung verstehen
                        </Link>
                        <Link href="/45b/faq" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Häufige Fragen
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
