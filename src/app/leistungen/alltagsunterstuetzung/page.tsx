import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";

export const metadata: Metadata = {
  title: "Alltagsunterst\u00fctzung in Berlin | Haushaltshilfe, Einkaufshilfe & Mahlzeiten",
  description: "Haushaltshilfe, W\u00e4sche & B\u00fcgeln, Fensterreinigung, Einkaufshilfe und Unterst\u00fctzung bei Mahlzeiten in Berlin. Abrechnung \u00fcber \u00a745b SGB XI. Tonus Dienst GmbH.",
  alternates: { canonical: "https://tonusdienst.de/leistungen/alltagsunterstuetzung" },
};

const sections = [
  {
    id: "haushaltshilfe",
    title: "Haushaltshilfe (Reinigung & Ordnung)",
    description: "Ein sauberes Zuhause sorgt f\u00fcr Wohlbefinden und Sicherheit. Wir \u00fcbernehmen die regelm\u00e4\u00dfige Reinigung, halten Ordnung und sorgen daf\u00fcr, dass Sie sich in Ihren eigenen vier W\u00e4nden rundum wohlf\u00fchlen. Unsere Mitarbeiterinnen nutzen Ihre vorhandenen Reinigungsmittel und Ger\u00e4te (Staubsauger, Eimer, T\u00fccher).",
    items: [
      "Regelm\u00e4\u00dfige Reinigung von Wohn- und Schlafr\u00e4umen",
      "Bad und K\u00fcche sauber halten",
      "Staubwischen und Bodenpflege",
      "Aufr\u00e4umen und Ordnung schaffen",
      "M\u00fcllentsorgung und Grundreinigung",
    ],
  },
  {
    id: "waesche",
    title: "W\u00e4sche, B\u00fcgeln & Bettw\u00e4sche",
    description: "W\u00e4sche waschen, trocknen, b\u00fcgeln und einr\u00e4umen \u2013 eine Aufgabe, die im Alter zur echten Herausforderung werden kann. Wir \u00fcbernehmen das f\u00fcr Sie, einschlie\u00dflich dem regelm\u00e4\u00dfigen Wechsel der Bettw\u00e4sche.",
    items: [
      "W\u00e4sche waschen und trocknen",
      "B\u00fcgeln und Zusammenlegen",
      "Bettw\u00e4sche wechseln und beziehen",
      "W\u00e4sche sortieren und einr\u00e4umen",
      "Handtuchpflege und Ordnung im Schrank",
    ],
  },
  {
    id: "fenster",
    title: "Fensterreinigung & Gardinen (saisonal: April\u2013Oktober)",
    description: "Saubere Fenster lassen Licht und Freude herein. Wir reinigen Ihre Standardfenster mit haushalts\u00fcblichen Mitteln und einer sicheren Stehleiter. Bitte beachten Sie: Diese Leistung ist saisonal verf\u00fcgbar und unterliegt Sicherheitsregeln.",
    items: [
      "Reinigung von Standardfenstern (Innen- und Au\u00dfenseite, sofern sicher erreichbar)",
      "Saisonal verf\u00fcgbar: April bis September/Oktober \u2013 im Winter nicht m\u00f6glich",
      "Nur mit sicherer Stehleiter \u2013 kein Hinauslehnen aus Fenstern (Sicherheitsvorschrift)",
      "Gardinen abnehmen, waschen und wieder aufh\u00e4ngen (erfordert ca. 3\u20134 Stunden, bitte vorab planen)",
      "Keine professionelle Fensterreinigung mit Spezialequipment",
    ],
  },
  {
    id: "einkaufshilfe",
    title: "Einkaufshilfe & Besorgungen",
    description: "Einkaufen kann im Alter zur Herausforderung werden \u2013 besonders ohne Lift oder bei schlechtem Wetter. Wir begleiten Sie zum Einkaufen oder erledigen die Besorgungen f\u00fcr Sie. Unsere Mitarbeiterinnen tragen Einki\u00e4ufe auch in den 5. Stock \u2013 mit oder ohne Lift.",
    items: [
      "Gemeinsamer Einkauf oder Einkauf f\u00fcr Sie",
      "Besorgungen des t\u00e4glichen Bedarfs (Lebensmittel, Drogerie)",
      "Apothekenbesuche und Rezeptabholung",
      "Post- und Bankerledigungen",
      "Lieferung, Transport (auch 5. OG ohne Lift) und Einr\u00e4umen der Eink\u00e4ufe",
    ],
  },
  {
    id: "mahlzeiten",
    title: "Unterst\u00fctzung bei Mahlzeiten",
    description: "Eine ausgewogene Ern\u00e4hrung ist wichtig f\u00fcr Gesundheit und Lebensfreude. Wir unterst\u00fctzen bei der Zubereitung von Mahlzeiten und sorgen daf\u00fcr, dass Sie gut versorgt sind. Kochen, Aufw\u00e4rmen, Tisch decken \u2013 besprechen Sie Ihre W\u00fcnsche mit uns.",
    items: [
      "Gemeinsames Zubereiten von Mahlzeiten",
      "Kochen und Aufw\u00e4rmen nach Ihren W\u00fcnschen",
      "Tisch decken und Mahlzeiten anrichten",
      "Sp\u00fclen und Aufr\u00e4umen der K\u00fcche",
      "Erstellen von Speisepl\u00e4nen auf Wunsch",
    ],
  },
];

export default function AlltagsunterstuetzungPage() {
  return (
    <>
      <HeroSection
        badge="Alltagsunterst\u00fctzung"
        title="Ihr Alltag."
        titleAccent="Unsere Unterst\u00fctzung."
        subtitle="Haushalt, W\u00e4sche, Fenster, Einkauf, Mahlzeiten \u2013 wir \u00fcbernehmen die Aufgaben, die im Alltag zur Belastung werden. Zuverl\u00e4ssig, regelm\u00e4\u00dfig und mit Herz."
        ctaSecondary={{ label: "Alle Leistungen", href: "/leistungen" }}
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
            idx === 2 ? (
              <InfoBox>
                {"Wichtig: Fensterreinigung ist eine saisonale Leistung und nur von April bis Oktober verf\u00fcgbar. Aus Sicherheitsgr\u00fcnden d\u00fcrfen unsere Mitarbeiterinnen sich nicht aus Fenstern lehnen."}
              </InfoBox>
            ) : (
              <InfoBox>
                {"Diese Leistung ist \u00fcber den Entlastungsbetrag (\u00a745b SGB XI) abrechenbar. "}
                <Link href="/45b/entlastungsbetrag" className="font-semibold underline">Mehr erfahren</Link>
              </InfoBox>
            )
          }
        />
      ))}

      <CTABanner />
    </>
  );
}
