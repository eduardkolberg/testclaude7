import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";

export const metadata: Metadata = {
    title: "So arbeiten wir | Terminplanung, Personal & Kommunikation | Tonus Dienst",
    description: "Terminplanung per SMS, feste Bezugsperson, Sprachunterstützung und Inventar-Regelung – so funktioniert die Zusammenarbeit mit Tonus Dienst GmbH Berlin.",
    alternates: { canonical: "https://tonusdienst.de/ueber-uns/so-arbeiten-wir" },
};

const sections = [
    {
        id: "terminplanung",
        title: "Terminplanung & SMS-Benachrichtigung",
        description: "Am Ende oder Anfang jedes Monats erhalten Sie automatisch eine SMS mit Ihrem Terminplan f\u00fcr den kommenden Monat \u2013 mit Datum, Uhrzeit und Name der Mitarbeiterin. Wenn alles passt, m\u00fcssen Sie nichts tun. Bei \u00c4nderungsw\u00fcnschen rufen Sie einfach an.",
        items: [
            "Monatliche SMS mit komplettem Terminplan (Datum, Uhrzeit, Name)",
            "Prinzip \u201ePassives Einverst\u00e4ndnis\u201c: Kein R\u00fcckruf n\u00f6tig, wenn alles passt",
            "Bei \u00c4nderungsw\u00fcnschen: Einfach im B\u00fcro anrufen",
            "Abmeldung von der SMS-Benachrichtigung jederzeit m\u00f6glich",
            "Alternativ: Fester Rhythmus ohne SMS (z.B. \u201ejeden zweiten Mittwoch\u201c)",
        ],
    },
    {
        id: "feste-mitarbeiterin",
        title: "Feste Mitarbeiterin & Vertretung",
        description: "Wir stellen Ihnen eine feste Bezugsperson zur Seite, die regelm\u00e4\u00dfig zu Ihnen kommt. So entsteht Vertrauen und Ihre Mitarbeiterin kennt Ihre W\u00fcnsche und Gewohnheiten. Bei Urlaub oder Krankheit bieten wir eine Vertretung an.",
        items: [
            "Feste Bezugsperson (Stammpersonal) f\u00fcr Kontinuit\u00e4t und Vertrauen",
            "Vertretung bei Urlaub oder Krankheit ist m\u00f6glich",
            "Sie k\u00f6nnen die Vertretung ablehnen und auf Ihre Stammkraft warten",
            "Wechsel der Mitarbeiterin auf Wunsch jederzeit m\u00f6glich",
            "Ausschlie\u00dflich weibliches Personal \u2013 das ist vielen unserer Kunden wichtig",
        ],
    },
    {
        id: "kommunikation",
        title: "Kommunikation & Sprachunterst\u00fctzung",
        description: "Unsere Mitarbeiterinnen stammen \u00fcberwiegend aus Osteuropa (Ukraine, Russland, Polen). Die Deutschkenntnisse variieren. Wir haben bew\u00e4hrte L\u00f6sungen f\u00fcr die Kommunikation entwickelt.",
        items: [
            "Google Translate: Aufgaben auf Zettel schreiben, Mitarbeiterin fotografiert und \u00fcbersetzt",
            "B\u00fcro als \u00dcbersetzungshilfe: Anrufen, und wir \u00fcbersetzen sofort am Telefon",
            "F\u00fcr russischsprachige Kunden finden wir passende Mitarbeiterinnen",
            "Viele Mitarbeiterinnen haben medizinische Ausbildung in ihren Heimatl\u00e4ndern",
            "Zeigen und Erkl\u00e4ren per Geste funktioniert f\u00fcr Routineaufgaben sehr gut",
        ],
    },
    {
        id: "reinigungsmittel",
        title: "Reinigungsmittel & Inventar (stellt der Kunde)",
        description: "Unsere Mitarbeiterinnen nutzen die Reinigungsmittel und Ger\u00e4te, die bei Ihnen zu Hause vorhanden sind. Wir bringen kein eigenes Equipment mit. Das hat praktische Gr\u00fcnde \u2013 und Sie bestimmen, welche Produkte in Ihrem Haushalt verwendet werden.",
        items: [
            "Staubsauger, Eimer, Wischmopp und T\u00fccher stellt der Kunde bereit",
            "Reinigungsmittel (Allzweckreiniger, Badreiniger etc.) vom Kunden",
            "Fehlende Mittel kann die Mitarbeiterin beim n\u00e4chsten Einkauf besorgen (Erstattung gegen Kassenbon)",
            "Tipp: Verschiedene T\u00fccher mit Aufgaben beschriften (K\u00fcche, Bad, Boden)",
            "Spezialger\u00e4te (Dampfreiniger etc.) sind nicht erforderlich \u2013 haushalts\u00fcbliche Mittel gen\u00fcgen",
        ],
    },
];

export default function SoArbeitenWirPage() {
    return (
        <>
            <HeroSection
                badge="So arbeiten wir"
                title={"Zuverl\u00e4ssig."}
                titleAccent={"Organisiert. Pers\u00f6nlich."}
                subtitle={"Transparente Terminplanung, feste Bezugspersonen und klare Kommunikation \u2013 so gestalten wir die Zusammenarbeit einfach und vertrauensvoll."}
                ctaSecondary={{ label: "\u00dcber uns", href: "/ueber-uns" }}
            />

            {sections.map((section, idx) => (
                <ContentSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    description={section.description}
                    items={section.items}
                    index={idx}
                    infoBox={
                        idx === 0 ? (
                            <InfoBox>
                                {"Probleme mit der SMS? Rufen Sie uns an \u2013 wir diktieren Ihnen den Plan gerne telefonisch. Sie k\u00f6nnen sich auch jederzeit von der automatischen SMS abmelden."}
                            </InfoBox>
                        ) : idx === 2 ? (
                            <InfoBox>
                                {"Tipp: Schreiben Sie Ihre W\u00fcnsche auf einen Zettel auf Deutsch. Unsere Mitarbeiterin kann ihn per Google Translate fotografieren und sofort \u00fcbersetzen. "}
                                <Link href="/45b/faq#personal" className="font-semibold underline">Mehr im FAQ</Link>
                            </InfoBox>
                        ) : undefined
                    }
                />
            ))}

            {/* Insurance & Safety */}
            <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <h2 className="mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        {"Versicherung & Schadensf\u00e4lle"}
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        {"Alle unsere Mitarbeiterinnen sind versichert. Sollte w\u00e4hrend der Arbeit etwas besch\u00e4digt werden, melden Sie den Schaden bitte sofort unserem B\u00fcro. Wir kl\u00e4ren den Vorfall und k\u00fcmmern uns um eine L\u00f6sung."}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl border border-[#E0E7E9] bg-white">
                            <h4 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{"Bei Sch\u00e4den"}</h4>
                            <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                <li>{"\u2022 Schaden sofort dem B\u00fcro melden"}</li>
                                <li>{"\u2022 Alle Mitarbeiterinnen sind versichert"}</li>
                                <li>{"\u2022 Leitung kontaktiert Sie zur Kl\u00e4rung"}</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl border border-[#E0E7E9] bg-white">
                            <h4 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{"Bei Qualit\u00e4tsproblemen"}</h4>
                            <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                <li>{"\u2022 Rufen Sie uns an \u2013 auch w\u00e4hrend der Arbeit"}</li>
                                <li>{"\u2022 Wir \u00fcbersetzen und vermitteln sofort"}</li>
                                <li>{"\u2022 Wechsel der Mitarbeiterin jederzeit m\u00f6glich"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
