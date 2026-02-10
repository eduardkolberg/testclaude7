import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
  title: "Alltagsunterstützung in Berlin | Haushaltshilfe, Einkaufshilfe & Mahlzeiten",
  description: "Haushaltshilfe, Wäsche & Bügeln, Fensterreinigung, Einkaufshilfe und Unterstützung bei Mahlzeiten in Berlin. Abrechnung über §45b SGB XI. Tonus Dienst GmbH.",
  alternates: { canonical: "https://tonusdienst.de/leistungen/alltagsunterstuetzung" },
};

const sections = [
  {
    id: "haushaltshilfe",
    title: "Haushaltshilfe (Reinigung & Ordnung)",
    description: "Ein sauberes Zuhause sorgt für Wohlbefinden und Sicherheit. Wir übernehmen die regelmäßige Reinigung, halten Ordnung und sorgen dafür, dass Sie sich in Ihren eigenen vier Wänden rundum wohlfühlen. Unsere Mitarbeiterinnen nutzen Ihre vorhandenen Reinigungsmittel und Geräte (Staubsauger, Eimer, Tücher).",
    items: [
      "Regelmäßige Reinigung von Wohn- und Schlafräumen",
      "Bad und Küche sauber halten",
      "Staubwischen und Bodenpflege",
      "Aufräumen und Ordnung schaffen",
      "Müllentsorgung und Grundreinigung",
    ],
  },
  {
    id: "waesche",
    title: "Wäsche, Bügeln & Bettwäsche",
    description: "Wäsche waschen, trocknen, bügeln und einräumen – eine Aufgabe, die im Alter zur echten Herausforderung werden kann. Wir übernehmen das für Sie, einschließlich dem regelmäßigen Wechsel der Bettwäsche.",
    items: [
      "Wäsche waschen und trocknen",
      "Bügeln und Zusammenlegen",
      "Bettwäsche wechseln und beziehen",
      "Wäsche sortieren und einräumen",
      "Handtuchpflege und Ordnung im Schrank",
    ],
  },
  {
    id: "fenster",
    title: "Fensterreinigung & Gardinen (saisonal: April–Oktober)",
    description: "Saubere Fenster lassen Licht und Freude herein. Wir reinigen Ihre Standardfenster mit haushaltsüblichen Mitteln und einer sicheren Stehleiter. Bitte beachten Sie: Diese Leistung ist saisonal verfügbar und unterliegt Sicherheitsregeln.",
    items: [
      "Reinigung von Standardfenstern (Innen- und Außenseite, sofern sicher erreichbar)",
      "Saisonal verfügbar: April bis September/Oktober – im Winter nicht möglich",
      "Nur mit sicherer Stehleiter – kein Hinauslehnen aus Fenstern (Sicherheitsvorschrift)",
      "Gardinen abnehmen, waschen und wieder aufhängen (erfordert ca. 3–4 Stunden, bitte vorab planen)",
      "Keine professionelle Fensterreinigung mit Spezialequipment",
    ],
  },
  {
    id: "einkaufshilfe",
    title: "Einkaufshilfe & Besorgungen",
    description: "Einkaufen kann im Alter zur Herausforderung werden – besonders ohne Lift oder bei schlechtem Wetter. Wir begleiten Sie zum Einkaufen oder erledigen die Besorgungen für Sie. Unsere Mitarbeiterinnen tragen Einkäufe auch in den 5. Stock – mit oder ohne Lift.",
    items: [
      "Gemeinsamer Einkauf oder Einkauf für Sie",
      "Besorgungen des täglichen Bedarfs (Lebensmittel, Drogerie)",
      "Apothekenbesuche und Rezeptabholung",
      "Post- und Bankerledigungen",
      "Lieferung, Transport (auch 5. OG ohne Lift) und Einräumen der Einkäufe",
    ],
  },
  {
    id: "mahlzeiten",
    title: "Unterstützung bei Mahlzeiten",
    description: "Eine ausgewogene Ernährung ist wichtig für Gesundheit und Lebensfreude. Wir unterstützen bei der Zubereitung von Mahlzeiten und sorgen dafür, dass Sie gut versorgt sind. Kochen, Aufwärmen, Tisch decken – besprechen Sie Ihre Wünsche mit uns.",
    items: [
      "Gemeinsames Zubereiten von Mahlzeiten",
      "Kochen und Aufwärmen nach Ihren Wünschen",
      "Tisch decken und Mahlzeiten anrichten",
      "Spülen und Aufräumen der Küche",
      "Erstellen von Speiseplänen auf Wunsch",
    ],
  },
];

export default function AlltagsunterstuetzungPage() {
  return (
    <>
      <HeroSection
        badge="Alltagsunterstützung"
        title="Ihr Alltag."
        titleAccent="Unsere Unterstützung."
        subtitle="Haushalt, Wäsche, Fenster, Einkauf, Mahlzeiten – wir übernehmen die Aufgaben, die im Alltag zur Belastung werden. Zuverlässig, regelmäßig und mit Herz."
        ctaSecondary={{ label: "Alle Leistungen", href: "/leistungen" }}
      />

      <SidebarCTA />

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
                {"Wichtig: Fensterreinigung ist eine saisonale Leistung und nur von April bis Oktober verfügbar. Aus Sicherheitsgründen dürfen unsere Mitarbeiterinnen sich nicht aus Fenstern lehnen."}
              </InfoBox>
            ) : (
              <InfoBox>
                {"Diese Leistung ist über den Entlastungsbetrag (§45b SGB XI) abrechenbar. "}
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
