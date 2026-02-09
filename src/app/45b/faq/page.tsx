"use client";

import Link from "next/link";
import { useState } from "react";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";

const faqSections = [
    {
        id: "leistungen",
        title: "Fragen zu Leistungen & Ablauf",
        items: [
            {
                q: "Welche Leistungen bieten Sie an?",
                a: "Wir bieten Haushaltshilfe (Reinigung, W\u00e4sche, B\u00fcgeln), Einkaufshilfe, Unterst\u00fctzung bei Mahlzeiten, Begleitung zu Terminen (Arzt, Beh\u00f6rden), Spazierg\u00e4nge, Friedhofsbesuche und stundenweise Entlastung f\u00fcr Angeh\u00f6rige. Wir sind kein Pflegedienst \u2013 medizinische Leistungen und K\u00f6rperpflege geh\u00f6ren nicht zu unserem Angebot.",
            },
            {
                q: "Bringen die Mitarbeiterinnen eigene Reinigungsmittel mit?",
                a: "Nein. Unsere Mitarbeiterinnen nutzen den Staubsauger, Eimer, T\u00fccher und die Reinigungsmittel, die bei Ihnen zu Hause vorhanden sind. Wenn Ihnen etwas fehlt, kann die Mitarbeiterin es beim n\u00e4chsten Einkauf (z.B. bei Rossmann oder DM) mitbringen \u2013 Sie erstatten den Betrag einfach gegen Kassenbon.",
            },
            {
                q: "K\u00f6nnen die Mitarbeiterinnen auch Fenster putzen?",
                a: "Ja, aber nur Standardfenster mit einer sicheren Stehleiter. Das Hinauslehnen aus Fenstern ist aus Sicherheitsgr\u00fcnden verboten. Fensterreinigung ist saisonal (April bis September/Oktober) \u2013 im Winter bieten wir diesen Service nicht an.",
            },
            {
                q: "K\u00f6nnen Mitarbeiterinnen beim Kochen helfen?",
                a: "Ja, Unterst\u00fctzung bei der Zubereitung von Mahlzeiten (kochen, aufw\u00e4rmen, Tisch decken) geh\u00f6rt zu unserem Leistungsspektrum. Bitte besprechen Sie Ihre W\u00fcnsche mit dem B\u00fcro oder der Mitarbeiterin.",
            },
            {
                q: "K\u00f6nnen Mitarbeiterinnen Eink\u00e4ufe in den 5. Stock tragen?",
                a: "Ja, auch ohne Lift. Wir haben damit Erfahrung. Es hilft, wenn Sie einen Einkaufsroller haben. Bitte geben Sie uns bei der Planung Bescheid, damit wir die richtige Mitarbeiterin einplanen.",
            },
            {
                q: "Was machen Sie NICHT?",
                a: "Wir bieten keine medizinischen Leistungen (Spritzen, Verb\u00e4nde, Medikamentengabe), keine K\u00f6rperpflege (Waschen, Duschen \u2013 das macht der Pflegedienst), keine Gartenarbeit und keine Spezialreinigung mit industriellem Equipment.",
            },
            {
                q: "Wie schnell kann die Hilfe beginnen?",
                a: "Nach dem Erstgespr\u00e4ch und der Vertragsunterzeichnung kann die Hilfe in der Regel innerhalb weniger Tage starten. Wir reagieren so schnell wie m\u00f6glich.",
            },
        ],
    },
    {
        id: "kosten",
        title: "Fragen zu Kosten & Abrechnung",
        items: [
            {
                q: "Was kostet eine Stunde?",
                a: "Seit dem 1. Januar 2025 betr\u00e4gt unser Stundensatz 35,50 \u20ac. Bei Abrechnung \u00fcber die Pflegekasse zahlen Sie nichts selbst \u2013 der Entlastungsbetrag (131 \u20ac/Monat) deckt die Kosten.",
            },
            {
                q: "Wie viele Stunden bekomme ich pro Monat?",
                a: "Bei 131 \u20ac Budget und 35,50 \u20ac/Stunde sind das ca. 3 Stunden und 40 Minuten pro Monat. Das reicht f\u00fcr einen langen Besuch oder zwei k\u00fcrzere (je ca. 1 Stunde 50 Minuten).",
            },
            {
                q: "Verfallen meine Stunden am Monatsende?",
                a: "Nein! Nicht genutzte Betr\u00e4ge sammeln sich als Guthaben an. Dieses Guthaben aus dem Vorjahr kann bis zum 30. Juni des Folgejahres genutzt werden. Danach verf\u00e4llt es leider.",
            },
            {
                q: "Kann ich Guthaben aus dem Vorjahr retten?",
                a: "Ja! Rufen Sie Ihre Pflegekasse an und fragen Sie nach Ihrem Guthabenstand. Teilen Sie uns die Summe mit \u2013 wir planen dann zus\u00e4tzliche Besuche (z.B. h\u00e4ufigere Termine oder l\u00e4ngere Eins\u00e4tze), um die Mittel vor dem 30. Juni zu verbrauchen.",
            },
            {
                q: "Kann ich privat dazuzahlen?",
                a: "Ja. Wenn Ihr Kassenbudget ersch\u00f6pft ist oder Sie mehr Stunden w\u00fcnschen, k\u00f6nnen Sie privat zuzahlen \u2013 zum gleichen Stundensatz. Sie erhalten eine transparente Rechnung.",
            },
            {
                q: "Muss ich selbst etwas bezahlen?",
                a: "Nein, wenn Sie einen Pflegegrad haben. Wir rechnen direkt mit Ihrer Pflegekasse ab (Direktabrechnung). Sie unterschreiben nur den Leistungsnachweis nach jedem Besuch.",
            },
            {
                q: "Was ist die Fahrpauschale (15 Minuten)?",
                a: "Von der gebuchten Zeit werden pauschal 15 Minuten als Anfahrtszeit abgezogen. Bei einem 3-Stunden-Besuch arbeitet die Mitarbeiterin also 2 Stunden und 45 Minuten. Das ist vertraglich geregelt und branchen\u00fcblich.",
            },
        ],
    },
    {
        id: "personal",
        title: "Fragen zu Personal & Kommunikation",
        items: [
            {
                q: "Sprechen die Mitarbeiterinnen Deutsch?",
                a: "Unsere Mitarbeiterinnen stammen \u00fcberwiegend aus Osteuropa (Ukraine, Russland, Polen). Die Deutschkenntnisse variieren \u2013 von Grundkenntnissen bis zu guten Sprachkenntnissen. F\u00fcr russischsprachige Kunden finden wir meist eine passende Mitarbeiterin ohne Sprachbarriere.",
            },
            {
                q: "Wie funktioniert die Verst\u00e4ndigung ohne gutes Deutsch?",
                a: "Wir empfehlen Google Translate: Schreiben Sie Ihre W\u00fcnsche auf Deutsch auf einen Zettel, die Mitarbeiterin fotografiert ihn und \u00fcbersetzt per App. Alternativ k\u00f6nnen Sie jederzeit unser B\u00fcro anrufen \u2013 unsere Koordinatorinnen \u00fcbersetzen sofort am Telefon.",
            },
            {
                q: "Bekomme ich immer dieselbe Mitarbeiterin?",
                a: "Ja, wir stellen Ihnen eine feste Bezugsperson zur Seite. Bei Urlaub oder Krankheit bieten wir eine Vertretung an \u2013 Sie k\u00f6nnen die Vertretung aber auch ablehnen und auf Ihre Stammkraft warten.",
            },
            {
                q: "Kann ich die Mitarbeiterin wechseln?",
                a: "Ja. Wenn die Zusammenarbeit nicht passt (z.B. wegen Kommunikationsproblemen oder unterschiedlichen Vorstellungen), rufen Sie uns an. Wir suchen Ihnen jemand anderen \u2013 ohne Konsequenzen f\u00fcr die bisherige Mitarbeiterin.",
            },
            {
                q: "Arbeiten bei Ihnen auch M\u00e4nner?",
                a: "Nein, bei uns arbeiten ausschlie\u00dflich Frauen. Das ist vielen unserer Kundinnen und Kunden wichtig.",
            },
        ],
    },
    {
        id: "organisation",
        title: "Fragen zur Organisation",
        items: [
            {
                q: "Was ist die SMS-Benachrichtigung?",
                a: "Jeden Monat erhalten Sie automatisch eine SMS mit Ihrem Terminplan (Datum, Uhrzeit, Name der Mitarbeiterin). Wenn alles passt, m\u00fcssen Sie nichts tun. Bei \u00c4nderungsw\u00fcnschen rufen Sie uns einfach an. Sie k\u00f6nnen sich auch von der SMS-Benachrichtigung abmelden.",
            },
            {
                q: "Was, wenn die Mitarbeiterin nicht kommt?",
                a: "Rufen Sie unser B\u00fcro an. M\u00f6gliche Gr\u00fcnde: Krankheit, Transportprobleme oder ein Missverst\u00e4ndnis mit dem Termin. Wir kl\u00e4ren das sofort und planen einen Ersatztermin.",
            },
            {
                q: "Was, wenn die Mitarbeiterin zu fr\u00fch kommt?",
                a: "Wenn m\u00f6glich, lassen Sie sie herein \u2013 auch wenn es etwas fr\u00fcher ist. Wenn Sie die T\u00fcr nicht \u00f6ffnen, geht die Mitarbeiterin davon aus, dass Sie nicht da sind, und f\u00e4hrt zum n\u00e4chsten Termin. Wenn Ihnen die genaue Uhrzeit wichtig ist, teilen Sie das dem B\u00fcro mit.",
            },
            {
                q: "Was, wenn etwas kaputt geht?",
                a: "Alle unsere Mitarbeiterinnen sind versichert. Melden Sie den Schaden sofort dem B\u00fcro. Wir kl\u00e4ren den Vorfall und k\u00fcmmern uns um eine L\u00f6sung.",
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
                title="H\u00e4ufige Fragen."
                titleAccent="Schnelle Antworten."
                subtitle="Die wichtigsten Fragen und Antworten rund um unsere Leistungen, Kosten, Personal und Organisation \u2013 \u00fcbersichtlich zusammengestellt."
                ctaSecondary={{ label: "\u00a745b \u00dcbersicht", href: "/45b" }}
            />

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
                        Rufen Sie uns an {"\u2013"} wir beantworten Ihre Fragen pers\u00f6nlich und unverbindlich.
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
