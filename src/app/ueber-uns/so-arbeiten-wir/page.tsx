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
        description: "Am Ende oder Anfang jedes Monats erhalten Sie automatisch eine SMS mit Ihrem Terminplan für den kommenden Monat – mit Datum, Uhrzeit und Name der Mitarbeiterin. Wenn alles passt, müssen Sie nichts tun. Bei Änderungswünschen rufen Sie einfach an.",
        items: [
            "Monatliche SMS mit komplettem Terminplan (Datum, Uhrzeit, Name)",
            "Prinzip „Passives Einverständnis“: Kein Rückruf nötig, wenn alles passt",
            "Bei Änderungswünschen: Einfach im Büro anrufen",
            "Abmeldung von der SMS-Benachrichtigung jederzeit möglich",
            "Alternativ: Fester Rhythmus ohne SMS (z.B. „jeden zweiten Mittwoch“)",
        ],
    },
    {
        id: "feste-mitarbeiterin",
        title: "Feste Mitarbeiterin & Vertretung",
        description: "Wir stellen Ihnen eine feste Bezugsperson zur Seite, die regelmäßig zu Ihnen kommt. So entsteht Vertrauen und Ihre Mitarbeiterin kennt Ihre Wünsche und Gewohnheiten. Bei Urlaub oder Krankheit bieten wir eine Vertretung an.",
        items: [
            "Feste Bezugsperson (Stammpersonal) für Kontinuität und Vertrauen",
            "Vertretung bei Urlaub oder Krankheit ist möglich",
            "Sie können die Vertretung ablehnen und auf Ihre Stammkraft warten",
            "Wechsel der Mitarbeiterin auf Wunsch jederzeit möglich",
            "Ausschließlich weibliches Personal – das ist vielen unserer Kunden wichtig",
        ],
    },
    {
        id: "kommunikation",
        title: "Kommunikation & Sprachunterstützung",
        description: "Unsere Mitarbeiterinnen stammen überwiegend aus Osteuropa (Ukraine, Russland, Polen). Die Deutschkenntnisse variieren. Wir haben bewährte Lösungen für die Kommunikation entwickelt.",
        items: [
            "Google Translate: Aufgaben auf Zettel schreiben, Mitarbeiterin fotografiert und übersetzt",
            "Büro als Übersetzungshilfe: Anrufen, und wir übersetzen sofort am Telefon",
            "Für russischsprachige Kunden finden wir passende Mitarbeiterinnen",
            "Viele Mitarbeiterinnen haben medizinische Ausbildung in ihren Heimatländern",
            "Zeigen und Erklären per Geste funktioniert für Routineaufgaben sehr gut",
        ],
    },
    {
        id: "reinigungsmittel",
        title: "Reinigungsmittel & Inventar (stellt der Kunde)",
        description: "Unsere Mitarbeiterinnen nutzen die Reinigungsmittel und Geräte, die bei Ihnen zu Hause vorhanden sind. Wir bringen kein eigenes Equipment mit. Das hat praktische Gründe – und Sie bestimmen, welche Produkte in Ihrem Haushalt verwendet werden.",
        items: [
            "Staubsauger, Eimer, Wischmopp und Tücher stellt der Kunde bereit",
            "Reinigungsmittel (Allzweckreiniger, Badreiniger etc.) vom Kunden",
            "Fehlende Mittel kann die Mitarbeiterin beim nächsten Einkauf besorgen (Erstattung gegen Kassenbon)",
            "Tipp: Verschiedene Tücher mit Aufgaben beschriften (Küche, Bad, Boden)",
            "Spezialgeräte (Dampfreiniger etc.) sind nicht erforderlich – haushaltsübliche Mittel genügen",
        ],
    },
];

export default function SoArbeitenWirPage() {
    return (
        <>
            <HeroSection
                badge="So arbeiten wir"
                title={"Zuverlässig."}
                titleAccent={"Organisiert. Persönlich."}
                subtitle={"Transparente Terminplanung, feste Bezugspersonen und klare Kommunikation – so gestalten wir die Zusammenarbeit einfach und vertrauensvoll."}
                ctaSecondary={{ label: "Über uns", href: "/ueber-uns" }}
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
                                {"Probleme mit der SMS? Rufen Sie uns an – wir diktieren Ihnen den Plan gerne telefonisch. Sie können sich auch jederzeit von der automatischen SMS abmelden."}
                            </InfoBox>
                        ) : idx === 2 ? (
                            <InfoBox>
                                {"Tipp: Schreiben Sie Ihre Wünsche auf einen Zettel auf Deutsch. Unsere Mitarbeiterin kann ihn per Google Translate fotografieren und sofort übersetzen. "}
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
                        {"Versicherung & Schadensfälle"}
                    </h2>
                    <p className="mb-6" style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
                        {"Alle unsere Mitarbeiterinnen sind versichert. Sollte während der Arbeit etwas beschädigt werden, melden Sie den Schaden bitte sofort unserem Büro. Wir klären den Vorfall und kümmern uns um eine Lösung."}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl border border-[#E0E7E9] bg-white">
                            <h4 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{"Bei Schäden"}</h4>
                            <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                <li>{"• Schaden sofort dem Büro melden"}</li>
                                <li>{"• Alle Mitarbeiterinnen sind versichert"}</li>
                                <li>{"• Leitung kontaktiert Sie zur Klärung"}</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl border border-[#E0E7E9] bg-white">
                            <h4 className="font-bold text-[#0D2137] mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{"Bei Qualitätsproblemen"}</h4>
                            <ul className="space-y-2 text-[#455A64]" style={{ fontSize: "15px" }}>
                                <li>{"• Rufen Sie uns an – auch während der Arbeit"}</li>
                                <li>{"• Wir übersetzen und vermitteln sofort"}</li>
                                <li>{"• Wechsel der Mitarbeiterin jederzeit möglich"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
}
