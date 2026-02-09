import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/sections/ContentSection";
import InfoBox from "@/components/InfoBox";

export const metadata: Metadata = {
  title: "Entlastung für Angehörige in Berlin | Stundenweise Betreuung",
  description: "Stundenweise Entlastung und Unterstützung bei der Tagesstruktur für pflegende Angehörige in Berlin. Abrechnung über §45b SGB XI. Tonus Dienst GmbH.",
  alternates: { canonical: "https://tonusdienst.de/leistungen/entlastung-angehoerige" },
};

const sections = [
  {
    id: "stundenweise",
    title: "Stundenweise Entlastung",
    description: "Pflegende Angehörige brauchen auch einmal Pause. Wir übernehmen die Betreuung stundenweise, damit Sie Zeit für sich haben – ob für Erledigungen, Arbeit oder einfach zum Durchatmen.",
    items: [
      "Stundenweise Übernahme der Betreuung",
      "Flexible Zeiten nach Ihrem Bedarf",
      "Regelmäßige oder einmalige Entlastung",
      "Vertrauensvolle Bezugsperson für Ihren Angehörigen",
      "Auch an Wochenenden möglich",
    ],
  },
  {
    id: "tagesstruktur",
    title: "Unterstützung bei Tagesstruktur & Organisation",
    description: "Struktur gibt Sicherheit. Wir helfen bei der Organisation des Alltags, erinnern an Medikamente, Termine und Mahlzeiten und sorgen für einen geregelten Tagesablauf.",
    items: [
      "Hilfe bei der Tagesplanung",
      "Erinnerung an Medikamente und Termine",
      "Organisation von Alltags-Aufgaben",
      "Unterstützung bei der Kommunikation mit Ärzten",
      "Regelmäßiger Austausch mit Angehörigen",
    ],
  },
];

export default function EntlastungAngehoerigePagee() {
  return (
    <>
      <HeroSection
        badge="Entlastung für Angehörige"
        title="Damit auch Sie"
        titleAccent="wieder durchatmen können."
        subtitle="Sie pflegen mit Herz – wir unterstützen Sie dabei. Stundenweise Entlastung und Hilfe bei der Organisation, damit Sie Zeit für sich finden."
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
