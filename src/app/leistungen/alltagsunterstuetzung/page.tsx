import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";

export const metadata: Metadata = {
  title: "Alltagsunterstützung in Berlin | Haushaltshilfe, Einkaufshilfe & Mahlzeiten",
  description: "Haushaltshilfe, Einkaufshilfe und Unterstützung bei Mahlzeiten in Berlin. Abrechnung über §45b SGB XI möglich. Tonus Dienst GmbH – jetzt kostenlos beraten lassen.",
  alternates: { canonical: "https://tonusdienst.de/leistungen/alltagsunterstuetzung" },
};

const sections = [
  {
    id: "haushaltshilfe",
    title: "Haushaltshilfe (Reinigung & Ordnung)",
    description: "Ein sauberes Zuhause sorgt für Wohlbefinden und Sicherheit. Wir übernehmen die regelmäßige Reinigung, halten Ordnung und sorgen dafür, dass Sie sich in Ihren eigenen vier Wänden rundum wohlfühlen.",
    items: [
      "Regelmäßige Reinigung von Wohn- und Schlafräumen",
      "Bad und Küche sauber halten",
      "Wäsche waschen, bügeln und einräumen",
      "Aufräumen und Ordnung schaffen",
      "Müllentsorgung und Grundreinigung",
    ],
  },
  {
    id: "einkaufshilfe",
    title: "Einkaufshilfe & Besorgungen",
    description: "Einkaufen kann im Alter zur Herausforderung werden. Wir begleiten Sie zum Einkaufen oder erledigen die Besorgungen für Sie – zuverlässig und nach Ihren Wünschen.",
    items: [
      "Gemeinsamer Einkauf oder Einkauf für Sie",
      "Besorgungen des täglichen Bedarfs",
      "Apothekenbesuche und Rezeptabholung",
      "Post- und Bankerledigungen",
      "Lieferung und Einräumen der Einkäufe",
    ],
  },
  {
    id: "mahlzeiten",
    title: "Unterstützung bei Mahlzeiten",
    description: "Eine ausgewogene Ernährung ist wichtig für Gesundheit und Lebensfreude. Wir unterstützen bei der Zubereitung von Mahlzeiten und sorgen dafür, dass Sie gut versorgt sind.",
    items: [
      "Gemeinsames Zubereiten von Mahlzeiten",
      "Kochen nach Ihren Wünschen und Bedürfnissen",
      "Hilfe bei der Nahrungsaufnahme",
      "Spülen und Aufräumen der Küche",
      "Erstellen von Speiseplänen",
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
        subtitle="Haushalt, Einkauf, Mahlzeiten – wir übernehmen die Aufgaben, die im Alltag zur Belastung werden. Zuverlässig, regelmäßig und mit Herz."
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
            <InfoBox>
              Diese Leistung ist über den Entlastungsbetrag (§45b SGB XI) abrechenbar.{" "}
              <Link href="/45b/entlastungsbetrag" className="font-semibold underline">Mehr erfahren</Link>
            </InfoBox>
          }
        />
      ))}

      <CTABanner />
    </>
  );
}
