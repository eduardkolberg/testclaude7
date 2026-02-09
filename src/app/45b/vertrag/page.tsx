import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
    title: "Vertrag & Kündigung | Vertragsabschluss erklärt | Tonus Dienst Berlin",
    description: "Warum ein Vertrag nötig ist, was drinsteht und wie Sie kündigen können – transparent erklärt von Tonus Dienst GmbH Berlin.",
    alternates: { canonical: "https://tonusdienst.de/45b/vertrag" },
};

export default function VertragPage() {
    return (
        <>
            <HeroSection
                badge="Vertrag & Kündigung"
                title="Klare Regeln."
                titleAccent="Faire Bedingungen."
                subtitle="Ein Vertrag schützt beide Seiten. Hier erfahren Sie, warum er notwendig ist, was drinsteht und wie einfach eine Kündigung funktioniert."
                ctaSecondary={{ label: "§45b Übersicht", href: "/45b" }}
            />

            {/* Vertragsabschluss */}
            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Vertragsabschluss
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Der Vertrag ist eine <strong>Pflicht</strong>, die vom Berliner Senat für alle anerkannten Anbieter nach §45b vorgeschrieben wird. Ohne unterschriebenen Vertrag dürfen wir nicht mit der Arbeit beginnen – auch wenn die Pflegekasse bereits zahlt.
                    </p>

                    <div className="p-6 rounded-2xl bg-[#E0F7FA]/40 border border-[#B2EBF2] mb-8">
                        <h3 className="font-bold text-[#00838F] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                            Warum brauche ich einen Vertrag?
                        </h3>
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            Viele Kunden fragen sich, warum ein Vertrag nötig ist, wenn die Kasse ohnehin alles bezahlt. Die Antwort: Der Senat verlangt einen schriftlichen Vertrag als Voraussetzung für die Anerkennung als Dienst. Ohne Vertrag verlieren wir unsere Anerkennung und dürften gar nicht tätig werden. Der Vertrag schützt aber auch Sie – er regelt Leistungen, Preise und Ihre Rechte.
                        </p>
                    </div>

                    <h3 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h3)", fontWeight: 700, color: "#0D2137" }}>
                        Was steht im Vertrag?
                    </h3>
                    <ul className="space-y-4 mb-12">
                        {[
                            { title: "Art der Leistungen", desc: "Welche Hilfen Sie erhalten (Reinigung, Einkauf, Begleitung etc.)." },
                            { title: "Stundensatz", desc: "Der aktuelle Preis pro Stunde (2025: 35,50 €/Stunde)." },
                            { title: "Abtretungserklärung", desc: "Ihr Einverständnis, dass wir direkt mit der Kasse abrechnen." },
                            { title: "Fahrpauschale", desc: "15 Minuten der gebuchten Zeit werden als Anfahrtszeit berechnet." },
                            { title: "Ihre Pflichten", desc: "Bereitstellung von Reinigungsmitteln und Inventar (Staubsauger, Tücher etc.)." },
                            { title: "Kündigungsrecht", desc: "Bedingungen und Fristen für die Beendigung der Zusammenarbeit." },
                        ].map((item) => (
                            <li key={item.title} className="flex items-start gap-3">
                                <span className="text-[#66BB6A] font-bold text-xl flex-shrink-0 mt-0.5">&#10003;</span>
                                <div>
                                    <span className="font-semibold text-[#0D2137]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>{item.title}</span>
                                    <span className="text-[#455A64]" style={{ fontSize: "var(--font-size-body)" }}> – {item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Kündigung */}
                    <div id="kuendigung" className="scroll-mt-24">
                        <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                            Kündigung
                        </h2>
                        <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                            Eine Kündigung ist jederzeit möglich. Wir legen Wert auf Transparenz und faire Bedingungen – niemand wird an einen Vertrag gebunden, der nicht mehr passt.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                                <h4 className="font-bold text-[#0D2137] mb-3" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>So kündigen Sie</h4>
                                <ol className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                    <li>1. Schriftlich per E-Mail an <strong>tonusdienstberlin@gmail.com</strong></li>
                                    <li>2. Oder per Brief an Kurfürstenstraße 114, 10787 Berlin</li>
                                    <li>3. Angabe von Name, Adresse und gewünschtem Enddatum</li>
                                </ol>
                            </div>
                            <div className="p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                                <h4 className="font-bold text-[#0D2137] mb-3" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>Gut zu wissen</h4>
                                <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                    <li>• Keine langen Kündigungsfristen</li>
                                    <li>• Keine versteckten Gebühren bei Kündigung</li>
                                    <li>• Nicht verbrauchtes Guthaben bleibt bei Ihrer Kasse</li>
                                    <li>• Sie können jederzeit erneut starten</li>
                                </ul>
                            </div>
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
                        <Link href="/45b/abrechnung" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Abrechnung & Nachweise
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
