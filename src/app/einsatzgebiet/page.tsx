import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import { settings } from "@/lib/settings";

export const metadata: Metadata = {
    title: "Einsatzgebiet Berlin | Alle Bezirke | Tonus Dienst GmbH",
    description: "Tonus Dienst ist in ganz Berlin tätig – Mitte, Charlottenburg, Schöneberg, Tempelhof, Neukölln, Spandau, Reinickendorf, Pankow und mehr.",
    alternates: { canonical: "https://tonusdienst.de/einsatzgebiet" },
};

const districtInfo = [
    { name: "Mitte", plz: "10115–10179, 10551–10559, 13347–13359" },
    { name: "Charlottenburg-Wilmersdorf", plz: "10585–10629, 10707–10719, 14050–14059, 14193–14199" },
    { name: "Schöneberg", plz: "10777–10789, 10823–10829, 12103–12109, 10965" },
    { name: "Tempelhof", plz: "12099–12109, 12157–12169, 12247–12249" },
    { name: "Steglitz-Zehlendorf", plz: "12161–12169, 12203–12209, 14109–14169" },
    { name: "Neukölln", plz: "12043–12059, 12347–12359, 12435–12439" },
    { name: "Friedrichshain-Kreuzberg", plz: "10243–10249, 10961–10969, 10997–10999" },
    { name: "Spandau", plz: "13581–13599, 14052, 13629" },
    { name: "Reinickendorf", plz: "13403–13409, 13435–13439, 13465–13469, 13503–13509" },
    { name: "Pankow", plz: "10405–10409, 10435–10439, 13086–13089, 13125–13129, 13156–13159, 13187–13189" },
    { name: "Lichtenberg", plz: "10315–10319, 10365–10369, 13051–13059" },
    { name: "Marzahn-Hellersdorf", plz: "12619–12629, 12679–12689" },
];

export default function EinsatzgebietPage() {
    return (
        <>
            <HeroSection
                badge="Einsatzgebiet"
                title="Ganz Berlin."
                titleAccent="Wir sind da."
                subtitle="Wir sind in allen Berliner Bezirken im Einsatz – von Mitte bis Marzahn, von Reinickendorf bis Neukölln. Prüfen Sie, ob wir auch in Ihrer Nähe aktiv sind."
                features={[`${settings.districts.length} Bezirke`, "PLZ 10115–14199", "Kostenlose Beratung"]}
                ctaSecondary={{ label: "Über uns", href: "/ueber-uns" }}
            />

            {/* District Grid */}
            <section id="bezirke" className="bg-white scroll-mt-24" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[1000px] mx-auto px-6 md:px-10">
                    <h2 className="mb-3" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Unsere Bezirke
                    </h2>
                    <p className="mb-8" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Wir betreuen Kunden in allen zwölf Berliner Bezirken. In der folgenden Übersicht finden Sie die Postleitzahlbereiche, in denen wir tätig sind.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {districtInfo.map((d) => (
                            <div key={d.name} className="flex flex-col gap-2 p-5 rounded-2xl border border-[#E0E7E9] hover:border-[#00838F]/30 hover:shadow-md transition-all">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <h3 className="font-bold text-[#0D2137]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "16px" }}>{d.name}</h3>
                                </div>
                                <p style={{ fontSize: "13px", color: "#78909C", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}>{d.plz}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-[#FFF8F0] border border-[#F5E6D3]">
                        <h3 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "18px" }}>
                            Ihr Bezirk nicht dabei?
                        </h3>
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            Wir erweitern unser Einsatzgebiet stetig. Wenn Ihr Bezirk nicht in der Liste steht oder Sie sich in der näheren Umgebung von Berlin befinden, rufen Sie uns trotzdem an. Wir prüfen gerne, ob wir auch bei Ihnen aktiv werden können.
                        </p>
                    </div>
                </div>
            </section>

            {/* Fahrpauschale */}
            <section id="anfahrt" className="scroll-mt-24" style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Hinweise zur Anfahrt
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        Unsere Mitarbeiterinnen nutzen den ÖPNV (öffentliche Verkehrsmittel) für die Anfahrt zu Ihnen. Im Vertrag ist eine <strong>Fahrpauschale von 15 Minuten</strong> vereinbart, die von der gebuchten Arbeitszeit abgezogen wird. Das bedeutet: Bei einem 3-Stunden-Termin beträgt die reine Arbeitszeit 2 Stunden und 45 Minuten.
                    </p>
                    <div className="p-6 rounded-2xl bg-[#E0F7FA]/40 border border-[#B2EBF2]">
                        <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                            <strong>Tipp:</strong> Die Fahrpauschale gilt pro Besuch, nicht pro Stunde. Bei längeren Einsätzen fällt sie prozentual weniger ins Gewicht.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white" style={{ padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Jetzt Verfügbarkeit prüfen
                    </h2>
                    <p className="mb-8 text-[#455A64]" style={{ fontSize: "var(--font-size-body)" }}>
                        Rufen Sie uns an und nennen Sie Ihre Postleitzahl – wir prüfen sofort, ob wir in Ihrer Nähe aktiv sind.
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
