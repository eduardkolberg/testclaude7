import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/sections/SectionHeader";
import LinkCardGrid from "@/components/LinkCardGrid";
import { settings } from "@/lib/settings";
import SidebarCTA from "@/components/SidebarCTA";

export const metadata: Metadata = {
  title: "§45b SGB XI – Entlastungsbetrag verständlich erklärt | Tonus Dienst Berlin",
  description: `Der Entlastungsbetrag nach §45b SGB XI: ${settings.entlastungsbetrag.monthlyAmount} € monatlich für Alltagshilfe. Alles zu Anspruch, Finanzierung, Ablauf und Abrechnung. Tonus Dienst Berlin.`,
  alternates: { canonical: "https://tonusdienst.de/45b" },
};

const hubLinks = [
  {
    title: "Entlastungsbetrag erklärt",
    href: "/45b/entlastungsbetrag",
    description: `Was ist §45b SGB XI? Wer hat Anspruch? ${settings.entlastungsbetrag.monthlyAmount} € monatlich verständlich erklärt.`,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
  },
  {
    title: "Finanzierung",
    href: "/45b/finanzierung",
    description: "So wird Ihre Alltagshilfe finanziert: Budget, Kombinationen und Restbeträge.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "So läuft es ab",
    href: "/45b/ablauf",
    description: "Ihr Weg zur Hilfe: Schritt für Schritt vom Erstgespräch bis zum Start der Unterstützung.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: "Abrechnung mit der Pflegekasse",
    href: "/45b/abrechnung",
    description: "Direktabrechnung oder Kostenerstattung – wir erklären beide Wege.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Vertrag & K\u00fcndigung",
    href: "/45b/vertrag",
    description: "Warum ein Vertrag n\u00f6tig ist, was drinsteht und wie Sie k\u00fcndigen k\u00f6nnen.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "H\u00e4ufige Fragen (FAQ)",
    href: "/45b/faq",
    description: "Die wichtigsten Fragen und Antworten zum Entlastungsbetrag.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

export default function Paragraph45bPage() {
  return (
    <>
      <HeroSection
        badge="§45b SGB XI"
        title={`${settings.entlastungsbetrag.monthlyAmount} € monatlich`}
        titleAccent="von Ihrer Pflegekasse bezahlt."
        subtitle={`Der Entlastungsbetrag nach §45b SGB XI steht jedem Pflegebedürftigen mit Pflegegrad 1–5 zu. ${settings.entlastungsbetrag.monthlyAmount} € pro Monat für anerkannte Alltagshilfe – und wir rechnen direkt mit Ihrer Kasse ab.`}
        ctaPrimary={{ label: "Jetzt beraten lassen", href: "tel:+4930610850625" }}
        ctaSecondary={{ label: "Unsere Leistungen", href: "/leistungen" }}
      />
      <SidebarCTA />

      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader title="Alles zum Entlastungsbetrag" />
          <LinkCardGrid items={hubLinks} />
        </div>
      </section>

      <CTABanner heading="Ihr Anspruch wartet." subheading="Lassen Sie sich jetzt kostenlos beraten – wir erklären alles verständlich." />
    </>
  );
}
