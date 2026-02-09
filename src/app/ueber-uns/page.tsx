import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
    title: "Über uns | Tonus Dienst GmbH Berlin | Anerkannter Anbieter §45b",
    description: "Tonus Dienst GmbH – vom Berliner Senat anerkannter Anbieter für Alltagshilfe. Erfahren Sie mehr über unser Unternehmen, unsere Werte und unsere Qualitätsstandards.",
    alternates: { canonical: "https://tonusdienst.de/ueber-uns" },
};

export default function UeberUnsPage() {
    return (
        <>
            <HeroSection
                badge="Über uns"
                title="Tonus Dienst GmbH."
                titleAccent="Zuverlässig seit 2018."
                subtitle="Wir sind ein vom Berliner Senat anerkannter Anbieter für Alltagshilfe nach §45b SGB XI. Unser Team unterstützt pflegebedürftige Menschen und ihre Angehörigen – mit Herz, Verlässlichkeit und klaren Strukturen."
                features={["Senat-Anerkennung", "Über 500 Kunden", "Versicherter Service"]}
            />

            {/* Company Info */}
            <section id="unternehmen" className="bg-white scroll-mt-24" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Unternehmen & Anerkennung
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Tonus Dienst GmbH ist seit {settings.company.foundingYear} in Berlin tätig und spezialisiert auf haushaltsnahe Dienstleistungen für pflegebedürftige Menschen. Wir sind <strong>kein Pflegedienst</strong> – wir leisten keine medizinische Pflege und keine Körperpflege. Stattdessen konzentrieren wir uns auf das, was den Alltag leichter macht: Reinigung, Einkauf, Begleitung und Entlastung.
                    </p>
                    <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Unsere Anerkennung durch den <strong>Berliner Senat</strong> bedeutet, dass unsere Leistungen über den Entlastungsbetrag (§45b SGB XI) finanziert werden können. Wir rechnen direkt mit den Pflegekassen ab – für Sie entstehen keine Kosten.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                            <div className="text-4xl mb-3">🏛️</div>
                            <h3 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>Senat-Anerkennung</h3>
                            <p style={{ fontSize: "14px", color: "#546E7A" }}>Offiziell anerkannter Anbieter nach §45b SGB XI</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                            <div className="text-4xl mb-3">🛡️</div>
                            <h3 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>Versichert</h3>
                            <p style={{ fontSize: "14px", color: "#546E7A" }}>Alle Mitarbeiterinnen sind haftpflichtversichert</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl border border-[#E0E7E9] bg-[#F7FAFA]">
                            <div className="text-4xl mb-3">⭐</div>
                            <h3 className="font-bold text-[#0D2137] mb-1" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{settings.trustStats.googleRating} Google</h3>
                            <p style={{ fontSize: "14px", color: "#546E7A" }}>Über {settings.trustStats.customersServed} betreute Kunden</p>
                        </div>
                    </div>

                    {/* Qualität & Versicherung */}
                    <div id="anerkennung" className="scroll-mt-24">
                        <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                            Qualität & Versicherung
                        </h2>
                        <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                            Vertrauen beginnt mit Transparenz. Alle unsere Mitarbeiterinnen sind <strong>haftpflichtversichert</strong>. Sollte während eines Einsatzes einmal etwas zu Bruch gehen, ist der Schaden abgedeckt. Melden Sie jeden Vorfall einfach dem Büro – wir kümmern uns umgehend.
                        </p>
                        <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                            Unsere Mitarbeiterinnen durchlaufen eine <strong>30-stündige Grundausbildung</strong> und werden regelmäßig eingearbeitet. Viele bringen medizinische Vorkenntnisse aus ihren Heimatländern mit (z.B. ausgebildete Krankenschwestern), was sich positiv auf die Qualität der Betreuung auswirkt.
                        </p>
                    </div>

                    {/* Firmendaten */}
                    <div id="firmendaten" className="scroll-mt-24 p-6 rounded-2xl bg-[#F7FAFA] border border-[#E0E7E9]">
                        <h3 className="font-bold text-[#0D2137] mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                            Firmendaten
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3" style={{ fontSize: "15px", color: "#455A64" }}>
                            <div><span className="font-semibold text-[#0D2137]">Firma:</span> {settings.company.legalName}</div>
                            <div><span className="font-semibold text-[#0D2137]">HRB:</span> {settings.company.hrb}</div>
                            <div><span className="font-semibold text-[#0D2137]">Geschäftsführerin:</span> {settings.company.ceo}</div>
                            <div><span className="font-semibold text-[#0D2137]">Gegründet:</span> {settings.company.foundingYear}</div>
                            <div><span className="font-semibold text-[#0D2137]">Adresse:</span> {settings.company.address.street}, {settings.company.address.zip} {settings.company.address.city}</div>
                            <div><span className="font-semibold text-[#0D2137]">Telefon:</span> {settings.company.phoneFormatted}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section style={{ background: "#F7FAFA", padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Mehr erfahren
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link href="/ueber-uns/so-arbeiten-wir" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            So arbeiten wir
                        </Link>
                        <Link href="/einsatzgebiet" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Einsatzgebiet
                        </Link>
                        <Link href="/karriere" className="px-6 py-3 rounded-full border-2 border-[#00838F] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-all" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                            Karriere
                        </Link>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
