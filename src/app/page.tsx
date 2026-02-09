"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { settings } from "@/lib/settings";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import SectionHeader from "@/components/sections/SectionHeader";
import TrustBar from "@/components/sections/TrustBar";
import ServiceCardsGrid from "@/components/sections/ServiceCardsGrid";
import ProcessStepper from "@/components/sections/ProcessStepper";
import USPGrid from "@/components/sections/USPGrid";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import FAQWithSidebar from "@/components/sections/FAQWithSidebar";

/* ============================================
   DATA
   ============================================ */

const serviceCards = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Alltagsunterstützung",
    items: [
      "Haushaltshilfe – Reinigung, Ordnung & Wäsche",
      "Einkaufshilfe & Besorgungen des täglichen Bedarfs",
      "Unterstützung bei der Zubereitung von Mahlzeiten",
    ],
    href: "/leistungen/alltagsunterstuetzung",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Betreuung & Begleitung",
    items: [
      "Begleitung zu Arzt- und Behördenterminen",
      "Gemeinsame Spaziergänge & Freizeitgestaltung",
      "Gesellschaft & aktivierende Gespräche",
    ],
    href: "/leistungen/betreuung-begleitung",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Entlastung für Angehörige",
    items: [
      "Stundenweise Übernahme der Betreuung",
      "Hilfe bei Tagesstruktur & Organisation",
      "Damit Sie wieder durchatmen können",
    ],
    href: "/leistungen/entlastung-angehoerige",
  },
];

const stepperItems = [
  { number: "1", title: "Erstgespräch", description: "Sie rufen uns an oder schreiben uns eine Nachricht. Wir beraten Sie kostenlos und unverbindlich – auch telefonisch." },
  { number: "2", title: "Bedarfsermittlung", description: "Wir kommen zu Ihnen nach Hause und besprechen gemeinsam, welche Unterstützung Sie oder Ihr Angehöriger benötigt." },
  { number: "3", title: "Ihre Hilfe startet", description: "Ihre persönliche Alltagshilfe beginnt – zuverlässig, regelmäßig und ganz nach Ihrem Bedarf. Die Abrechnung übernehmen wir." },
];

const uspItems = [
  { icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Über 7 Jahre Erfahrung", description: "Seit 2017 unterstützen wir pflegebedürftige Menschen in Berlin – zuverlässig und kompetent." },
  { icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>, title: "Direktabrechnung", description: "Wir rechnen direkt mit Ihrer Pflegekasse ab. Kein Papierkram, keine Vorkasse." },
  { icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>, title: "Mit Herz & Seele", description: "Pflege ist Vertrauenssache. Unsere Mitarbeiter sind geschult, einfühlsam und engagiert." },
  { icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>, title: "Einsätze in ganz Berlin", description: "Wir kommen zu Ihnen nach Hause – in Berlin und der näheren Umgebung." },
  { icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>, title: "Ihr festes Team", description: "Sie werden immer von den gleichen Helfern betreut – für Vertrauen und Kontinuität." },
  { icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>, title: "Persönlicher Ansprechpartner", description: "Bei Fragen erreichen Sie uns direkt. Kein Callcenter, keine Warteschleife." },
];

const districts = [
  "Mitte", "Charlottenburg-Wilmersdorf", "Schöneberg", "Tempelhof",
  "Steglitz-Zehlendorf", "Neukölln", "Friedrichshain-Kreuzberg",
  "Spandau", "Reinickendorf", "Pankow", "Lichtenberg",
  "Marzahn-Hellersdorf", "+ Umgebung",
];

const testimonialsList = [
  { quote: "Frau M. kommt zweimal pro Woche zu meiner Mutter. Seitdem ist Mama viel ausgeglichener – und ich kann endlich wieder beruhigt zur Arbeit gehen.", author: "Sabine K.", relation: "Tochter einer Kundin", stars: 5 },
  { quote: "Die Mitarbeiter von Tonus Dienst sind pünktlich, freundlich und zuverlässig. Mein Vater freut sich jedes Mal auf die gemeinsamen Spaziergänge.", author: "Thomas R.", relation: "Sohn eines Kunden", stars: 5 },
  { quote: "Endlich jemand, der sich wirklich kümmert. Die Beratung war unkompliziert und die Hilfe kam schnell. Vielen Dank!", author: "Helga W.", relation: "Kundin", stars: 4 },
  { quote: "Die Unterstützung im Haushalt ist eine riesige Entlastung. Die Mitarbeiter sind immer freundlich und arbeiten sehr gründlich.", author: "Michael S.", relation: "Sohn eines Kunden", stars: 5 },
  { quote: "Ich freue mich jede Woche auf den Besuch. Wir lachen viel und die Spaziergänge tun mir sehr gut. Danke an das tolle Team!", author: "Renate B.", relation: "Kundin", stars: 5 },
  { quote: "Sehr kompetente Beratung und schnelle Abwicklung mit der Pflegekasse. Wir fühlen uns bei Tonus Dienst bestens aufgehoben.", author: "Andreas M.", relation: "Enkel einer Kundin", stars: 4 },
];

const faqItems = [
  { q: "Was ist der Entlastungsbetrag nach §45b SGB XI?", a: "Der Entlastungsbetrag ist eine Leistung der Pflegekasse in Höhe von 131 € monatlich. Er steht jedem Pflegebedürftigen mit Pflegegrad 1 bis 5 zu, der zu Hause gepflegt wird. Er kann für anerkannte Angebote zur Unterstützung im Alltag genutzt werden – wie unsere Leistungen." },
  { q: "Muss ich den Entlastungsbetrag selbst beantragen?", a: "Nein, einen gesonderten Antrag müssen Sie in der Regel nicht stellen. Der Anspruch besteht automatisch mit Ihrem Pflegegrad. Wir unterstützen Sie bei allen nötigen Unterlagen und kümmern uns um die Abrechnung mit Ihrer Pflegekasse." },
  { q: "Welche Leistungen kann ich über den Entlastungsbetrag finanzieren?", a: "Alle unsere Leistungen – von der Haushaltshilfe über Einkaufshilfe bis hin zur Begleitung zu Arztterminen – können über den Entlastungsbetrag abgerechnet werden. Wir sind als Anbieter nach §45b SGB XI vom Land Berlin anerkannt." },
  { q: "Kommen bei mir zusätzliche Kosten auf mich zu?", a: "In der Regel nicht. Der Entlastungsbetrag deckt unsere Leistungen ab. Sollte Ihr Bedarf darüber hinausgehen, besprechen wir das transparent im Vorfeld. Es gibt keine versteckten Kosten." },
  { q: "In welchen Bezirken sind Sie tätig?", a: "Wir sind in ganz Berlin und der näheren Umgebung im Einsatz. Rufen Sie uns einfach an – wir prüfen gerne, ob wir auch in Ihrer Nähe tätig sind." },
  { q: "Wie schnell kann die Hilfe beginnen?", a: "Nach unserem Erstgespräch kann die Unterstützung in der Regel innerhalb weniger Tage starten. Wir wissen, dass Hilfe oft dringend benötigt wird, und reagieren so schnell wie möglich." },
  { q: "Kann ich nicht genutzte Beträge ansparen?", a: "Ja! Nicht genutzte Entlastungsbeträge können ins Folgequartal übertragen werden. Beträge aus dem Vorjahr können bis zum 30. Juni des Folgejahres noch eingesetzt werden. Wir beraten Sie gerne dazu." },
];

/* ============================================
   FONTS (shared style objects)
   ============================================ */
const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };
const fontData = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" };

/* ============================================
   MAIN PAGE
   ============================================ */
export default function Home() {
  const [pflegegrad, setPflegegrad] = useState(1);
  const [abrechnungsart, setAbrechnungsart] = useState<"direkt" | "kosten">("direkt");
  const monthlyAmount = settings.entlastungsbetrag.monthlyAmount;

  // Count-up for trust bar
  const trustBar = useInView(0.3);
  const years = useCountUp(7, 1200);
  const customers = useCountUp(500, 1500);
  const rating = useCountUp(49, 1200);

  useEffect(() => {
    if (trustBar.visible) {
      years.start();
      customers.start();
      rating.start();
    }
  }, [trustBar.visible]);

  // Entlastungsbetrag section animation
  const entlastung = useInView(0.15);

  const trustBarItems = [
    { value: `${years.value}+`, label: "Jahre Erfahrung" },
    { value: `${customers.value}+`, label: "Betreute Kunden" },
    { value: "Berlin", label: "& Umgebung" },
    { value: `4,${Math.floor(rating.value / 10)} ★`, label: "Google Bewertung" },
  ];

  return (
    <div className="overflow-x-hidden">

      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section
        className="relative flex items-start pt-24 sm:pt-32 pb-0 overflow-x-hidden"
        style={{
          background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)",
          minHeight: "max(680px, 90vh)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, #00838F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            <div>
              <div
                className="hero-stagger hero-stagger-1 inline-flex items-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full mb-6 sm:mb-8 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(90deg, #E0F7FA 0%, #E0F2F1 100%)",
                  boxShadow: "0 2px 8px rgba(0,131,143,0.08)",
                  border: "1px solid rgba(77,208,225,0.3)",
                  ...fontHeadings,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00838F",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.08em",
                }}
              >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Anerkannt vom Land Berlin &bull; Seit über 7 Jahren</span>
              </div>

              <h1
                className="hero-stagger hero-stagger-2 mb-6"
                style={{ ...fontHeadings, fontSize: "var(--font-size-h1)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#0D2137" }}
              >
                Ihr Alltag.<br />
                <span style={{ color: "#00838F" }}>Unsere Unterstützung.</span>
              </h1>

              <p
                className="hero-stagger hero-stagger-3 mb-8 max-w-[520px]"
                style={{ ...fontBody, fontSize: "var(--font-size-body-large)", lineHeight: 1.6, color: "#455A64" }}
              >
                Einkaufen, Arztbesuche, Haushalt – wir entlasten Sie und Ihre Angehörigen. Ab Pflegegrad 1. Abrechnung über die Pflegekasse möglich.
              </p>

              <div className="hero-stagger hero-stagger-4 flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+4930610850625"
                  className="inline-flex items-center justify-center gap-2 text-white rounded-full transition-all hover:scale-[1.03]"
                  style={{
                    background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                    boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
                    padding: "16px 32px",
                    ...fontHeadings,
                    fontSize: "var(--font-size-btn)",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                  }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Kostenlos beraten lassen
                </a>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center gap-2 rounded-full transition-all"
                  style={{ border: "2px solid #00838F", color: "#00838F", padding: "16px 32px", background: "transparent", ...fontHeadings, fontSize: "var(--font-size-btn)", fontWeight: 700 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E0F7FA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Leistungen ansehen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="hero-stagger hero-stagger-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {["Anerkannt nach §45b SGB XI", "Direktabrechnung mit Ihrer Pflegekasse", "Keine versteckten Kosten"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#66BB6A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ ...fontBody, fontSize: "16px", color: "#455A64" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Calculator */}
            <div className="relative pt-6 hero-stagger hero-stagger-6">
              <div
                className="hidden sm:block absolute -top-5 -right-2 z-20 px-5 py-3 bg-white rounded-xl shadow-lg border border-[#E0E7E9]"
                style={{ animation: "float 4s ease-in-out infinite", ...fontHeadings, fontSize: "13px", fontWeight: 700, color: "#0D2137" }}
              >
                <span className="text-[#00838F]">7+ Jahre</span> Erfahrung in Berlin
              </div>

              <div
                className="relative z-10 p-6 sm:p-8 md:p-10"
                style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderRadius: "24px", boxShadow: "0 8px 30px rgba(0,131,143,0.15)" }}
              >
                <h2 className="mb-8 flex items-center gap-3" style={{ ...fontHeadings, fontSize: "20px", fontWeight: 700, lineHeight: 1.3, color: "#0D2137" }}>
                  <div className="w-10 h-10 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00838F]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  Entlastungsbetrag nutzen
                </h2>

                <div className="text-center p-5 sm:p-8 mb-6 relative overflow-hidden" style={{ backgroundColor: "#DCF5F9", borderRadius: "16px" }}>
                  <div style={{ ...fontData, fontSize: "clamp(36px, 8vw, 48px)", fontWeight: 700, color: "#0D2137", lineHeight: 1 }}>
                    {monthlyAmount} € <span style={{ fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 500, color: "#455A64" }}>/ Monat</span>
                  </div>
                  <div style={{ ...fontData, fontSize: "15px", fontWeight: 600, color: "#00838F", marginTop: "8px" }}>
                    {settings.entlastungsbetrag.yearlyAmount} € / Jahr
                  </div>
                </div>

                <label className="block mb-3" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>Ihr Pflegegrad:</label>
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setPflegegrad(grade)}
                      className={`flex-1 min-w-[48px] min-h-[48px] h-12 flex items-center justify-center rounded-[12px] border-2 transition-all cursor-pointer ${pflegegrad === grade ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]" : "border-[#E0E7E9] bg-transparent text-[#455A64] hover:bg-[#E0F7FA] hover:border-[#4DD0E1] hover:text-[#00838F]"}`}
                      style={{ ...fontData, fontSize: "16px", fontWeight: 700 }}
                      aria-label={`Pflegegrad ${grade}`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>

                <label className="block mb-3" style={{ fontSize: "15px", fontWeight: 600, color: "#455A64" }}>Abrechnungsart:</label>
                <div className="flex gap-2 mb-6">
                  {([{ key: "direkt" as const, label: "Direktabrechnung" }, { key: "kosten" as const, label: "Kostenerstattung" }]).map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setAbrechnungsart(opt.key)}
                      className={`flex-1 py-3 px-4 min-h-[48px] rounded-[12px] border-2 transition-all cursor-pointer text-center ${abrechnungsart === opt.key ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]" : "border-[#E0E7E9] bg-transparent text-[#455A64] hover:bg-[#E0F7FA] hover:border-[#4DD0E1] hover:text-[#00838F]"}`}
                      style={{ fontSize: "15px", fontWeight: 600 }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <button
                  className="w-full py-4 text-white rounded-[12px] transition-all hover:-translate-y-0.5 cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", ...fontHeadings, fontSize: "var(--font-size-btn)", fontWeight: 700, boxShadow: "0 4px 12px rgba(0,131,143,0.3)", border: "none" }}
                >
                  Kostenlos berechnen
                </button>
                <p className="text-center mt-4" style={{ fontSize: "15px", color: "#78909C" }}>Wir erklären alles verständlich.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <svg className="absolute bottom-[-1px] left-0 w-full h-[60px] sm:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white" />
        </svg>
      </section>

      {/* ============================================
          SECTION 2: TRUST BAR
          ============================================ */}
      <div ref={trustBar.ref}>
        <TrustBar items={trustBarItems} animated={false} />
      </div>

      {/* ============================================
          SECTION 3: UNSERE LEISTUNGEN
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader
            label="WAS WIR FÜR SIE TUN"
            title="Alltagshilfe, die wirklich entlastet"
            subtitle="Von der Haushaltshilfe bis zur Begleitung zum Arzt – wir sind für Sie da. Individuell, zuverlässig und mit Herz."
          />
          <ServiceCardsGrid items={serviceCards} />
        </div>
      </section>

      {/* ============================================
          SECTION 4: ENTLASTUNGSBETRAG (Dark)
          ============================================ */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0D2137 0%, #00363A 100%)", padding: "var(--section-padding-y) 0" }}
        ref={entlastung.ref}
      >
        <div className="absolute top-10 right-10 w-[300px] h-[300px] opacity-[0.04]">
          <svg viewBox="0 0 200 200" fill="white">
            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4" fill="none" />
            <circle cx="100" cy="60" r="20" fill="white" />
            <path d="M60,120 Q60,80 100,80 Q140,80 140,120 Q140,160 100,170 Q60,160 60,120Z" fill="white" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#4DD0E1", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              SO WIRD ES FINANZIERT
            </p>
            <h2 className="mb-6">
              <span style={{ ...fontData, fontSize: "clamp(28px, 7vw, 48px)", fontWeight: 700, color: "#FFFFFF", display: "block" }}>131 € monatlich –</span>
              <span style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#4DD0E1" }}>von Ihrer Pflegekasse bezahlt.</span>
            </h2>
            <p style={{ ...fontBody, fontSize: "var(--font-size-body)", color: "rgba(255,255,255,0.9)", lineHeight: 1.65 }}>
              Jeder Pflegebedürftige mit Pflegegrad 1–5 hat Anspruch auf den Entlastungsbetrag nach §45b SGB XI. Wir rechnen direkt mit Ihrer Kasse ab – für Sie entstehen keine Kosten.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
            {[1, 2, 3, 4, 5].map((grade, idx) => (
              <div
                key={grade}
                className="text-center p-5 rounded-[12px] transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  opacity: entlastung.visible ? 1 : 0,
                  transform: entlastung.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${idx * 0.1}s`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#4DD0E1"; e.currentTarget.style.boxShadow = "0 0 20px rgba(77,208,225,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ ...fontBody, fontSize: "14px", color: "rgba(255,255,255,0.85)", marginBottom: "8px" }}>Pflegegrad {grade}</div>
                <div style={{ ...fontData, fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "8px" }}>131 €</div>
                <div className="text-[#66BB6A] text-[20px]">&#10003;</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+4930610850625"
              className="inline-flex items-center gap-2 text-white rounded-full transition-all hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 100%)", padding: "16px 40px", ...fontHeadings, fontSize: "var(--font-size-btn)", fontWeight: 700, boxShadow: "0 4px 16px rgba(77,208,225,0.4)" }}
            >
              Anspruch prüfen – kostenlos
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: PROCESS STEPPER
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader
            label="IHR WEG ZU UNS"
            title="In 3 Schritten zur Unterstützung"
            subtitle="Unkompliziert und schnell – wir kümmern uns um alles Weitere."
          />
          <div className="mt-16">
            <ProcessStepper items={stepperItems} />
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: USPs
          ============================================ */}
      <section style={{ background: "#FFF8F0", padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader
            label="WARUM UNS VERTRAUEN"
            title="Was uns von anderen unterscheidet"
          />
          <USPGrid items={uspItems} />
        </div>
      </section>

      {/* ============================================
          SECTION 7: EINSATZGEBIET
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader
            label="UNSER EINSATZGEBIET"
            title="Wir kommen zu Ihnen nach Hause"
            subtitle="Unser Team ist in ganz Berlin und der näheren Umgebung für Sie im Einsatz."
          />
          <ServiceAreaSection districts={districts} />
        </div>
      </section>

      {/* ============================================
          SECTION 8: TESTIMONIALS
          ============================================ */}
      <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader
            label="DAS SAGEN UNSERE KUNDEN"
            title="Echte Stimmen. Echtes Vertrauen."
          />
          <TestimonialsCarousel items={testimonialsList} />
        </div>
      </section>

      {/* ============================================
          SECTION 9: FAQ
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <SectionHeader
            label="HÄUFIGE FRAGEN"
            title="Antworten auf Ihre wichtigsten Fragen"
          />
          <FAQWithSidebar items={faqItems} />
        </div>
      </section>

      {/* ============================================
          SECTION 10: CTA BANNER
          ============================================ */}
      <section
        className="relative text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 100%)", padding: "96px 0" }}
      >
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
            <circle cx="200" cy="150" r="200" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="1240" cy="100" r="150" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <h2 className="mb-4" style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, lineHeight: 1.2, color: "white" }}>
            Wir sind für Sie da.
          </h2>
          <p className="mb-8 max-w-[600px] mx-auto" style={{ ...fontBody, fontSize: "var(--font-size-body-large)", lineHeight: 1.6, color: "rgba(255,255,255,0.9)" }}>
            Lassen Sie sich jetzt kostenlos beraten.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="tel:+4930610850625"
              className="inline-flex items-center justify-center gap-2 bg-white rounded-full transition-all hover:-translate-y-0.5"
              style={{ color: "#00838F", padding: "16px 32px", ...fontHeadings, fontSize: "var(--font-size-btn)", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,0,0,0.2)", animation: "pulse-shadow 2.5s ease-in-out infinite" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              030 610 850 625
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full transition-all"
              style={{ border: "2px solid white", color: "white", padding: "16px 32px", background: "transparent", ...fontHeadings, fontSize: "var(--font-size-btn)", fontWeight: 700 }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Nachricht schreiben
            </Link>
          </div>

          <p style={{ ...fontBody, fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
            Mo&ndash;Fr 9:00&ndash;18:00 Uhr &middot; info@ebox.berlin
          </p>
        </div>
      </section>
    </div>
  );
}
