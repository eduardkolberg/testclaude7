import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";

export const metadata: Metadata = {
  title: "Betreuung & Begleitung in Berlin | Arztbegleitung, Spazierg\u00e4nge & Friedhof",
  description: "Begleitung zu Arztterminen, gemeinsame Spazierg\u00e4nge, Friedhofsbesuche und aktivierende Freizeitgestaltung in Berlin. Abrechnung \u00fcber \u00a745b SGB XI. Tonus Dienst GmbH.",
  alternates: { canonical: "https://tonusdienst.de/leistungen/betreuung-begleitung" },
};

const sections = [
  {
    id: "termine",
    title: "Begleitung zu Terminen (Arzt, Beh\u00f6rden)",
    description: "Arztbesuche, Beh\u00f6rdeng\u00e4nge oder Termine bei der Krankenkasse \u2013 wir begleiten Sie sicher und zuverl\u00e4ssig. Wir helfen beim An- und Ausziehen, fahren Sie hin und warten auf Sie.",
    items: [
      "Begleitung zum Arzt und Facharzt",
      "Beh\u00f6rdeng\u00e4nge und Amtstermine",
      "Besuche bei der Krankenkasse",
      "Hilfe beim Ausf\u00fcllen von Formularen",
      "Wartezeit-Begleitung vor Ort",
    ],
  },
  {
    id: "spaziergaenge",
    title: "Spazierg\u00e4nge & Freizeitgestaltung",
    description: "Frische Luft, Bewegung und Gesellschaft \u2013 das tut gut. Wir gehen mit Ihnen spazieren, besuchen Parks oder unternehmen gemeinsam etwas, das Ihnen Freude bereitet.",
    items: [
      "Regelm\u00e4\u00dfige Spazierg\u00e4nge in der Nachbarschaft",
      "Besuche in Parks und Gr\u00fcnanlagen",
      "Gemeinsame Freizeitaktivit\u00e4ten",
      "Gesellschaft und aktivierende Gespr\u00e4che",
      "Begleitung zu kulturellen Veranstaltungen",
    ],
  },
  {
    id: "friedhof",
    title: "Friedhofsbesuche & Grabpflege-Unterst\u00fctzung",
    description: "F\u00fcr viele \u00e4ltere Menschen ist der regelm\u00e4\u00dfige Besuch am Grab eines geliebten Menschen sehr wichtig. Wir begleiten Sie zum Friedhof, helfen beim Tragen und k\u00f6nnen gemeinsam die Blumen gie\u00dfen. Bitte beachten Sie: Dies ist keine professionelle Grabpflege.",
    items: [
      "Begleitung zum Friedhof und zur\u00fcck",
      "Gemeinsames Gie\u00dfen der Blumen am Grab",
      "Hilfe beim Tragen von Gie\u00dfkannen und Blumen",
      "Ruhige Begleitung und pers\u00f6nliche Unterst\u00fctzung",
      "Keine professionelle Grabpflege (Gartenarbeit) \u2013 daf\u00fcr gibt es Fachbetriebe",
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
        subtitle="Ob zum Arzt, zur Beh\u00f6rde, in den Park oder zum Friedhof \u2013 wir sind an Ihrer Seite. F\u00fcr mehr Sicherheit, Gesellschaft und Lebensqualit\u00e4t im Alltag."
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
                {"Wichtig: Unsere Begleitung zum Friedhof ist eine Unterst\u00fctzungsleistung, keine professionelle Grabpflege. F\u00fcr regelm\u00e4\u00dfige Grabpflege wenden Sie sich bitte an einen G\u00e4rtnereibetrieb."}
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
