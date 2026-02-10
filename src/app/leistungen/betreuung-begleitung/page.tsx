import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
  title: "Betreuung & Begleitung in Berlin | Arztbegleitung, Spaziergänge & Friedhof",
  description: "Begleitung zu Arztterminen, gemeinsame Spaziergänge, Friedhofsbesuche und aktivierende Freizeitgestaltung in Berlin. Abrechnung über §45b SGB XI. Tonus Dienst GmbH.",
  alternates: { canonical: "https://tonusdienst.de/leistungen/betreuung-begleitung" },
};

const sections = [
  {
    id: "termine",
    title: "Begleitung zu Terminen (Arzt, Behörden)",
    description: "Arztbesuche, Behördengänge oder Termine bei der Krankenkasse – wir begleiten Sie sicher und zuverlässig. Wir helfen beim An- und Ausziehen, fahren Sie hin und warten auf Sie.",
    items: [
      "Begleitung zum Arzt und Facharzt",
      "Behördengänge und Amtstermine",
      "Besuche bei der Krankenkasse",
      "Hilfe beim Ausfüllen von Formularen",
      "Wartezeit-Begleitung vor Ort",
    ],
  },
  {
    id: "spaziergaenge",
    title: "Spaziergänge & Freizeitgestaltung",
    description: "Frische Luft, Bewegung und Gesellschaft – das tut gut. Wir gehen mit Ihnen spazieren, besuchen Parks oder unternehmen gemeinsam etwas, das Ihnen Freude bereitet.",
    items: [
      "Regelmäßige Spaziergänge in der Nachbarschaft",
      "Besuche in Parks und Grünanlagen",
      "Gemeinsame Freizeitaktivitäten",
      "Gesellschaft und aktivierende Gespräche",
      "Begleitung zu kulturellen Veranstaltungen",
    ],
  },
  {
    id: "friedhof",
    title: "Friedhofsbesuche & Grabpflege-Unterstützung",
    description: "Für viele ältere Menschen ist der regelmäßige Besuch am Grab eines geliebten Menschen sehr wichtig. Wir begleiten Sie zum Friedhof, helfen beim Tragen und können gemeinsam die Blumen gießen. Bitte beachten Sie: Dies ist keine professionelle Grabpflege.",
    items: [
      "Begleitung zum Friedhof und zurück",
      "Gemeinsames Gießen der Blumen am Grab",
      "Hilfe beim Tragen von Gießkannen und Blumen",
      "Ruhige Begleitung und persönliche Unterstützung",
      "Keine professionelle Grabpflege (Gartenarbeit) – dafür gibt es Fachbetriebe",
    ],
  },
];

export default function BetreuungBegleitungPage() {
  return (
    <>
      <HeroSection
        badge="Betreuung & Begleitung"
        title="Gemeinsam unterwegs."
        titleAccent="Sicher begleitet."
        subtitle="Ob zum Arzt, zur Behörde, in den Park oder zum Friedhof – wir sind an Ihrer Seite. Für mehr Sicherheit, Gesellschaft und Lebensqualität im Alltag."
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
                {"Wichtig: Unsere Begleitung zum Friedhof ist eine Unterstützungsleistung, keine professionelle Grabpflege. Für regelmäßige Grabpflege wenden Sie sich bitte an einen Gärtnereibetrieb."}
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
