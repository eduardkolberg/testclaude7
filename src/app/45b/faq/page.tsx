"use client";

import Link from "next/link";
import { useState } from "react";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import SidebarCTA from "@/components/SidebarCTA";

const faqSections = [
    {
        id: "leistungen",
        title: "Fragen zu Leistungen & Ablauf",
        items: [
            {
                q: "Welche Leistungen bieten Sie an?",
                a: "Wir bieten Haushaltshilfe (Reinigung, Wäsche, Bügeln), Einkaufshilfe, Unterstützung bei Mahlzeiten, Begleitung zu Terminen (Arzt, Behörden), Spaziergänge, Friedhofsbesuche und stundenweise Entlastung für Angehörige. Wir sind kein Pflegedienst – medizinische Leistungen und Körperpflege gehören nicht zu unserem Angebot.",
            },
            {
                q: "Bringen die Mitarbeiterinnen eigene Reinigungsmittel mit?",
                a: "Nein. Unsere Mitarbeiterinnen nutzen den Staubsauger, Eimer, Tücher und die Reinigungsmittel, die bei Ihnen zu Hause vorhanden sind. Wenn Ihnen etwas fehlt, kann die Mitarbeiterin es beim nächsten Einkauf (z.B. bei Rossmann oder DM) mitbringen – Sie erstatten den Betrag einfach gegen Kassenbon.",
            },
            {
                q: "Können die Mitarbeiterinnen auch Fenster putzen?",
                a: "Ja, aber nur Standardfenster mit einer sicheren Stehleiter. Das Hinauslehnen aus Fenstern ist aus Sicherheitsgründen verboten. Fensterreinigung ist saisonal (April bis September/Oktober) – im Winter bieten wir diesen Service nicht an.",
            },
            {
                q: "Können Mitarbeiterinnen beim Kochen helfen?",
                a: "Ja, Unterstützung bei der Zubereitung von Mahlzeiten (kochen, aufwärmen, Tisch decken) gehört zu unserem Leistungsspektrum. Bitte besprechen Sie Ihre Wünsche mit dem Büro oder der Mitarbeiterin.",
            },
            {
                q: "Können Mitarbeiterinnen Einkäufe in den 5. Stock tragen?",
                a: "Ja, auch ohne Lift. Wir haben damit Erfahrung. Es hilft, wenn Sie einen Einkaufsroller haben. Bitte geben Sie uns bei der Planung Bescheid, damit wir die richtige Mitarbeiterin einplanen.",
            },
            {
                q: "Was machen Sie NICHT?",
                a: "Wir bieten keine medizinischen Leistungen (Spritzen, Verbände, Medikamentengabe), keine Körperpflege (Waschen, Duschen – das macht der Pflegedienst), keine Gartenarbeit und keine Spezialreinigung mit industriellem Equipment.",
            },
            {
                q: "Wie schnell kann die Hilfe beginnen?",
                a: "Nach dem Erstgespräch und der Vertragsunterzeichnung kann die Hilfe in der Regel innerhalb weniger Tage starten. Wir reagieren so schnell wie möglich.",
            },
        ],
    },
    {
        id: "kosten",
        title: "Fragen zu Kosten & Abrechnung",
        items: [
            {
                q: "Was kostet eine Stunde?",
                a: "Seit dem 1. Januar 2025 beträgt unser Stundensatz 35,50 €. Bei Abrechnung über die Pflegekasse zahlen Sie nichts selbst – der Entlastungsbetrag (131 €/Monat) deckt die Kosten.",
            },
            {
                q: "Wie viele Stunden bekomme ich pro Monat?",
                a: "Bei 131 € Budget und 35,50 €/Stunde sind das ca. 3 Stunden und 40 Minuten pro Monat. Das reicht für einen langen Besuch oder zwei kürzere (je ca. 1 Stunde 50 Minuten).",
            },
            {
                q: "Verfallen meine Stunden am Monatsende?",
                a: "Nein! Nicht genutzte Beträge sammeln sich als Guthaben an. Dieses Guthaben aus dem Vorjahr kann bis zum 30. Juni des Folgejahres genutzt werden. Danach verfällt es leider.",
            },
            {
                q: "Kann ich Guthaben aus dem Vorjahr retten?",
                a: "Ja! Rufen Sie Ihre Pflegekasse an und fragen Sie nach Ihrem Guthabenstand. Teilen Sie uns die Summe mit – wir planen dann zusätzliche Besuche (z.B. häufigere Termine oder längere Einsätze), um die Mittel vor dem 30. Juni zu verbrauchen.",
            },
            {
                q: "Kann ich privat dazuzahlen?",
                a: "Ja. Wenn Ihr Kassenbudget erschöpft ist oder Sie mehr Stunden wünschen, können Sie privat zuzahlen – zum gleichen Stundensatz. Sie erhalten eine transparente Rechnung.",
            },
            {
                q: "Muss ich selbst etwas bezahlen?",
                a: "Nein, wenn Sie einen Pflegegrad haben. Wir rechnen direkt mit Ihrer Pflegekasse ab (Direktabrechnung). Sie unterschreiben nur den Leistungsnachweis nach jedem Besuch.",
            },
            {
                q: "Was ist die Fahrpauschale (15 Minuten)?",
                a: "Von der gebuchten Zeit werden pauschal 15 Minuten als Anfahrtszeit abgezogen. Bei einem 3-Stunden-Besuch arbeitet die Mitarbeiterin also 2 Stunden und 45 Minuten. Das ist vertraglich geregelt und branchenüblich.",
            },
        ],
    },
    {
        id: "personal",
        title: "Fragen zu Personal & Kommunikation",
        items: [
            {
                q: "Sprechen die Mitarbeiterinnen Deutsch?",
                a: "Unsere Mitarbeiterinnen stammen überwiegend aus Osteuropa (Ukraine, Russland, Polen). Die Deutschkenntnisse variieren – von Grundkenntnissen bis zu guten Sprachkenntnissen. Für russischsprachige Kunden finden wir meist eine passende Mitarbeiterin ohne Sprachbarriere.",
            },
            {
                q: "Wie funktioniert die Verständigung ohne gutes Deutsch?",
                a: "Wir empfehlen Google Translate: Schreiben Sie Ihre Wünsche auf Deutsch auf einen Zettel, die Mitarbeiterin fotografiert ihn und übersetzt per App. Alternativ können Sie jederzeit unser Büro anrufen – unsere Koordinatorinnen übersetzen sofort am Telefon.",
            },
            {
                q: "Bekomme ich immer dieselbe Mitarbeiterin?",
                a: "Ja, wir stellen Ihnen eine feste Bezugsperson zur Seite. Bei Urlaub oder Krankheit bieten wir eine Vertretung an – Sie können die Vertretung aber auch ablehnen und auf Ihre Stammkraft warten.",
            },
            {
                q: "Kann ich die Mitarbeiterin wechseln?",
                a: "Ja. Wenn die Zusammenarbeit nicht passt (z.B. wegen Kommunikationsproblemen oder unterschiedlichen Vorstellungen), rufen Sie uns an. Wir suchen Ihnen jemand anderen – ohne Konsequenzen für die bisherige Mitarbeiterin.",
            },
            {
                q: "Arbeiten bei Ihnen auch Männer?",
                a: "Nein, bei uns arbeiten ausschließlich Frauen. Das ist vielen unserer Kundinnen und Kunden wichtig.",
            },
        ],
    },
    {
        id: "organisation",
        title: "Fragen zur Organisation",
        items: [
            {
                q: "Was ist die SMS-Benachrichtigung?",
                a: "Jeden Monat erhalten Sie automatisch eine SMS mit Ihrem Terminplan (Datum, Uhrzeit, Name der Mitarbeiterin). Wenn alles passt, müssen Sie nichts tun. Bei Änderungswünschen rufen Sie uns einfach an. Sie können sich auch von der SMS-Benachrichtigung abmelden.",
            },
            {
                q: "Was, wenn die Mitarbeiterin nicht kommt?",
                a: "Rufen Sie unser Büro an. Mögliche Gründe: Krankheit, Transportprobleme oder ein Missverständnis mit dem Termin. Wir klären das sofort und planen einen Ersatztermin.",
            },
            {
                q: "Was, wenn die Mitarbeiterin zu früh kommt?",
                a: "Wenn möglich, lassen Sie sie herein – auch wenn es etwas früher ist. Wenn Sie die Tür nicht öffnen, geht die Mitarbeiterin davon aus, dass Sie nicht da sind, und fährt zum nächsten Termin. Wenn Ihnen die genaue Uhrzeit wichtig ist, teilen Sie das dem Büro mit.",
            },
            {
                q: "Was, wenn etwas kaputt geht?",
                a: "Alle unsere Mitarbeiterinnen sind versichert. Melden Sie den Schaden sofort dem Büro. Wir klären den Vorfall und kümmern uns um eine Lösung.",
            },
        ],
    },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-[#E0E7E9] last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
            >
                <span className="font-semibold text-[#0D2137]" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "17px" }}>{q}</span>
                <svg
                    className={`w-5 h-5 flex-shrink-0 text-[#00838F] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>{a}</p>
            </div>
        </div>
    );
}

export default function FAQPage() {
    return (
        <>
            <HeroSection
                badge="FAQ"
                title="Häufige Fragen."
                titleAccent="Schnelle Antworten."
                subtitle="Die wichtigsten Fragen und Antworten rund um unsere Leistungen, Kosten, Personal und Organisation – übersichtlich zusammengestellt."
                ctaSecondary={{ label: "§45b Übersicht", href: "/45b" }}
            />
            <SidebarCTA />

            <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    {faqSections.map((section, sIdx) => (
                        <div key={section.id} id={section.id === "kosten" ? "kosten" : undefined} className={`${sIdx > 0 ? "mt-16" : ""} ${section.id === "kosten" ? "scroll-mt-24" : ""}`}>
                            <h2 className="mb-2" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                                {section.title}
                            </h2>
                            <div className="rounded-2xl border border-[#E0E7E9] overflow-hidden px-6 bg-white">
                                {section.items.map((item) => (
                                    <FAQItem key={item.q} q={item.q} a={item.a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: "#F7FAFA", padding: "80px 0" }}>
                <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif", fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
                        Ihre Frage nicht dabei?
                    </h2>
                    <p className="mb-8 text-[#455A64]" style={{ fontSize: "var(--font-size-body)" }}>
                        Rufen Sie uns an {"–"} wir beantworten Ihre Fragen persönlich und unverbindlich.
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
