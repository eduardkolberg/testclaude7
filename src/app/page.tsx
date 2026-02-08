"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ============================================
   SCROLL ANIMATION HOOK
   ============================================ */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ============================================
   COUNT-UP HOOK
   ============================================ */
function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { value, start };
}

/* ============================================
   MAIN PAGE
   ============================================ */
export default function Home() {
  // Calculator state
  const [pflegegrad, setPflegegrad] = useState(1);
  const [abrechnungsart, setAbrechnungsart] = useState<"direkt" | "kosten">("direkt");

  // PLZ checker state
  const [plz, setPlz] = useState("");
  const [plzResult, setPlzResult] = useState<"success" | "error" | null>(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Testimonial slider
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll animations
  const trustBar = useInView(0.3);
  const leistungen = useInView(0.15);
  const entlastung = useInView(0.15);
  const stepper = useInView(0.2);
  const usps = useInView(0.15);
  const einsatzgebiet = useInView(0.15);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonialsList = [
    {
      quote: "Frau M. kommt zweimal pro Woche zu meiner Mutter. Seitdem ist Mama viel ausgeglichener – und ich kann endlich wieder beruhigt zur Arbeit gehen.",
      author: "Sabine K.",
      relation: "Tochter einer Kundin",
      stars: 5,
    },
    {
      quote: "Die Mitarbeiter von Tonus Dienst sind pünktlich, freundlich und zuverlässig. Mein Vater freut sich jedes Mal auf die gemeinsamen Spaziergänge.",
      author: "Thomas R.",
      relation: "Sohn eines Kunden",
      stars: 5,
    },
    {
      quote: "Endlich jemand, der sich wirklich kümmert. Die Beratung war unkompliziert und die Hilfe kam schnell. Vielen Dank!",
      author: "Helga W.",
      relation: "Kundin",
      stars: 4,
    },
    {
      quote: "Die Unterstützung im Haushalt ist eine riesige Entlastung. Die Mitarbeiter sind immer freundlich und arbeiten sehr gründlich.",
      author: "Michael S.",
      relation: "Sohn eines Kunden",
      stars: 5,
    },
    {
      quote: "Ich freue mich jede Woche auf den Besuch. Wir lachen viel und die Spaziergänge tun mir sehr gut. Danke an das tolle Team!",
      author: "Renate B.",
      relation: "Kundin",
      stars: 5,
    },
    {
      quote: "Sehr kompetente Beratung und schnelle Abwicklung mit der Pflegekasse. Wir fühlen uns bei Tonus Dienst bestens aufgehoben.",
      author: "Andreas M.",
      relation: "Enkel einer Kundin",
      stars: 4,
    },
  ];
  const testimonials = useInView(0.15);
  const faqSection = useInView(0.15);

  // Count-up for trust bar
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

  // PLZ checker
  const berlinPLZRanges = [
    [10115, 14199],
  ];
  const checkPLZ = () => {
    const num = parseInt(plz, 10);
    if (num >= 10115 && num <= 14199) {
      setPlzResult("success");
    } else {
      setPlzResult("error");
    }
  };

  // Stepper line animation
  const stepperLine = useInView(0.4);

  const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
  const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };
  const fontData = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" };

  return (
    <div className="overflow-x-hidden">

      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section
        className="relative flex items-start pt-32 pb-0 overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)",
          minHeight: "max(680px, 90vh)",
          maxHeight: "900px",
        }}
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #00838F 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

            {/* Left: Text content */}
            <div>
              {/* Badge */}
              <div
                className="hero-stagger hero-stagger-1 inline-flex items-center gap-2.5 px-6 py-3 rounded-full mb-8 relative overflow-hidden group whitespace-nowrap"
                style={{
                  background: "linear-gradient(90deg, #E0F7FA 0%, #E0F2F1 100%)",
                  boxShadow: "0 2px 8px rgba(0,131,143,0.08)",
                  border: "1px solid rgba(77,208,225,0.3)",
                  ...fontHeadings,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00838F",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>Anerkannt vom Land Berlin • Seit über 7 Jahren</span>
              </div>

              {/* H1 */}
              <h1
                className="hero-stagger hero-stagger-2 mb-6"
                style={{
                  ...fontHeadings,
                  fontSize: "var(--font-size-h1)",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#0D2137",
                }}
              >
                Ihr Alltag.<br />
                <span style={{ color: "#00838F" }}>Unsere Unterstützung.</span>
              </h1>

              {/* Subheadline */}
              <p
                className="hero-stagger hero-stagger-3 mb-8 max-w-[520px]"
                style={{
                  ...fontBody,
                  fontSize: "var(--font-size-body-large)",
                  lineHeight: 1.6,
                  color: "#455A64",
                }}
              >
                Einkaufen, Arztbesuche, Haushalt – wir entlasten Sie und Ihre Angehörigen.
                Ab Pflegegrad 1. Abrechnung über die Pflegekasse möglich.
              </p>

              {/* CTA Buttons */}
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
                  style={{
                    border: "2px solid #00838F",
                    color: "#00838F",
                    padding: "16px 32px",
                    background: "transparent",
                    ...fontHeadings,
                    fontSize: "var(--font-size-btn)",
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E0F7FA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Leistungen ansehen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="hero-stagger hero-stagger-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {[
                  "Anerkannt nach §45b SGB XI",
                  "Direktabrechnung mit Ihrer Pflegekasse",
                  "Keine versteckten Kosten",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#66BB6A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ ...fontBody, fontSize: "16px", color: "#455A64" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Calculator Card */}
            <div className="hero-stagger hero-stagger-6 relative pt-6">
              {/* Floating badge */}
              <div
                className="absolute -top-5 -right-2 z-20 px-5 py-3 bg-white rounded-xl shadow-lg border border-[#E0E7E9]"
                style={{
                  animation: "float 4s ease-in-out infinite",
                  ...fontHeadings,
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0D2137",
                }}
              >
                <span className="text-[#00838F]">7+ Jahre</span> Erfahrung in Berlin
              </div>

              <div
                className="relative z-10 p-8 md:p-10"
                style={{
                  background: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "24px",
                  boxShadow: "0 8px 30px rgba(0,131,143,0.15)",
                }}
              >
                <h2
                  className="mb-8 flex items-center gap-3"
                  style={{
                    ...fontHeadings,
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: "#0D2137",
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00838F]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  Entlastungsbetrag nutzen
                </h2>

                {/* Amount display */}
                <div
                  className="text-center p-8 mb-6 relative overflow-hidden"
                  style={{
                    backgroundColor: "#DCF5F9",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{ ...fontData, fontSize: "48px", fontWeight: 700, color: "#0D2137", lineHeight: 1 }}>
                    131 € <span style={{ fontSize: "24px", fontWeight: 500, color: "#455A64" }}>/ Monat</span>
                  </div>
                  <div style={{ ...fontData, fontSize: "15px", fontWeight: 600, color: "#00838F", marginTop: "8px" }}>
                    1.572 € / Jahr
                  </div>
                </div>

                {/* Pflegegrad selection */}
                <label className="block mb-3" style={{ ...fontBody, fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
                  Ihr Pflegegrad:
                </label>
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3, 4, 5].map((grade) => (
                    <button
                      key={grade}
                      onClick={() => setPflegegrad(grade)}
                      className={`flex-1 min-w-[48px] min-h-[48px] h-12 flex items-center justify-center rounded-[12px] border-2 transition-all cursor-pointer 
                        ${pflegegrad === grade
                          ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]"
                          : "border-[#E0E7E9] bg-transparent text-[#455A64] hover:bg-[#E0F7FA] hover:border-[#4DD0E1] hover:text-[#00838F]"
                        }`}
                      style={{
                        ...fontData,
                        fontSize: "16px",
                        fontWeight: 700,
                      }}
                      aria-label={`Pflegegrad ${grade}`}
                    >
                      {grade}
                    </button>
                  ))}
                </div>

                {/* Abrechnungsart */}
                <label className="block mb-3" style={{ ...fontBody, fontSize: "15px", fontWeight: 600, color: "#455A64" }}>
                  Abrechnungsart:
                </label>
                <div className="flex gap-2 mb-6">
                  {[
                    { key: "direkt" as const, label: "Direktabrechnung" },
                    { key: "kosten" as const, label: "Kostenerstattung" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setAbrechnungsart(opt.key)}
                      className={`flex-1 py-3 px-4 min-h-[48px] rounded-[12px] border-2 transition-all cursor-pointer text-center
                        ${abrechnungsart === opt.key
                          ? "border-[#00838F] bg-[#E0F7FA] text-[#00838F]"
                          : "border-[#E0E7E9] bg-transparent text-[#455A64] hover:bg-[#E0F7FA] hover:border-[#4DD0E1] hover:text-[#00838F]"
                        }`}
                      style={{
                        ...fontBody,
                        fontSize: "15px",
                        fontWeight: 600,
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="w-full py-4 text-white rounded-[12px] transition-all hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                    ...fontHeadings,
                    fontSize: "var(--font-size-btn)",
                    fontWeight: 700,
                    boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
                    border: "none",
                  }}
                >
                  Kostenlos berechnen
                </button>

                <p className="text-center mt-4" style={{ ...fontBody, fontSize: "15px", color: "#78909C" }}>
                  Wir erklären alles verständlich.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <svg
          className="absolute bottom-[-1px] left-[-2%] w-[105%] h-[80px]" // Use standard absolute positioning
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ transform: "scaleX(1.1)", transformOrigin: "bottom center" }} // Ensure full coverage
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </section>

      {/* ============================================
          SECTION 2: TRUST BAR
          ============================================ */}
      <section className="bg-white py-14 border-b border-[#E0E7E9]" ref={trustBar.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-wrap justify-center">
            {[
              { number: `${years.value}+`, label: "Jahre Erfahrung" },
              { number: `${customers.value}+`, label: "Betreute Kunden" },
              { number: "Berlin", label: "& Umgebung" },
              { number: `4,${Math.floor(rating.value / 10)} ★`, label: "Google Bewertung" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[140px] text-center px-6 py-4"
                style={{
                  borderRight: idx < 3 ? "1px solid #E0E7E9" : "none",
                  opacity: trustBar.visible ? 1 : 0,
                  transform: trustBar.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${idx * 0.1}s`,
                }}
              >
                <div style={{ ...fontData, fontSize: "36px", fontWeight: 700, color: "#00838F", marginBottom: "4px" }}>
                  {item.number}
                </div>
                <div style={{ ...fontBody, fontSize: "16px", color: "#78909C" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: UNSERE LEISTUNGEN
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }} ref={leistungen.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Section header */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#00838F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              WAS WIR FÜR SIE TUN
            </p>
            <h2 style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137", lineHeight: 1.2, marginBottom: "16px" }}>
              Alltagshilfe, die wirklich entlastet
            </h2>
            <p style={{ ...fontBody, fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}>
              Von der Haushaltshilfe bis zur Begleitung zum Arzt – wir sind für Sie da. Individuell, zuverlässig und mit Herz.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((card, idx) => (
              <div
                key={card.title}
                className="group bg-white border border-[#E0E7E9] rounded-[16px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={{
                  opacity: leistungen.visible ? 1 : 0,
                  transform: leistungen.visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${idx * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,131,143,0.18)";
                  e.currentTarget.style.borderColor = "#4DD0E1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#E0E7E9";
                }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 100%)" }}>
                  {card.icon}
                </div>

                <h3 className="mb-4" style={{ ...fontHeadings, fontSize: "var(--font-size-h3)", fontWeight: 600, color: "#0D2137", lineHeight: 1.3 }}>
                  {card.title}
                </h3>

                <ul className="mb-8 flex-grow space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.55 }}>
                      <span className="text-[#66BB6A] font-bold text-[18px] mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                  style={{ ...fontBody, fontSize: "16px", fontWeight: 600, color: "#00838F" }}
                >
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
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
        {/* Watermark */}
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
              <span style={{ ...fontData, fontSize: "48px", fontWeight: 700, color: "#FFFFFF", display: "block" }}>131 € monatlich –</span>
              <span style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#4DD0E1" }}>von Ihrer Pflegekasse bezahlt.</span>
            </h2>
            <p style={{ ...fontBody, fontSize: "var(--font-size-body)", color: "rgba(255,255,255,0.9)", lineHeight: 1.65 }}>
              Jeder Pflegebedürftige mit Pflegegrad 1–5 hat Anspruch auf den Entlastungsbetrag nach §45b SGB XI. Wir rechnen direkt mit Ihrer Kasse ab – für Sie entstehen keine Kosten.
            </p>
          </div>

          {/* Pflegegrad cards */}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#4DD0E1";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(77,208,225,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ ...fontBody, fontSize: "14px", color: "rgba(255,255,255,0.85)", marginBottom: "8px" }}>
                  Pflegegrad {grade}
                </div>
                <div style={{ ...fontData, fontSize: "24px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
                  131 €
                </div>
                <div className="text-[#66BB6A] text-[20px]">✓</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="tel:+4930610850625"
              className="inline-flex items-center gap-2 text-white rounded-full transition-all hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 100%)",
                padding: "16px 40px",
                ...fontHeadings,
                fontSize: "var(--font-size-btn)",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(77,208,225,0.4)",
              }}
            >
              Anspruch prüfen – kostenlos
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: PROCESS STEPPER
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }} ref={stepper.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#00838F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              IHR WEG ZU UNS
            </p>
            <h2 style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137", marginBottom: "16px" }}>
              In 3 Schritten zur Unterstützung
            </h2>
            <p style={{ ...fontBody, fontSize: "var(--font-size-body)", color: "#455A64" }}>
              Unkompliziert und schnell – wir kümmern uns um alles Weitere.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-12 mt-16" ref={stepperLine.ref}>
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[2px] bg-[#E0E7E9]" />
            <div
              className="hidden md:block absolute top-7 left-[15%] h-[2px] bg-[#4DD0E1] z-[1]"
              style={{
                width: stepperLine.visible ? "70%" : "0%",
                transition: "width 1.5s ease-out",
              }}
            />

            {[
              {
                num: "1",
                title: "Erstgespräch",
                text: "Sie rufen uns an oder schreiben uns eine Nachricht. Wir beraten Sie kostenlos und unverbindlich – auch telefonisch.",
              },
              {
                num: "2",
                title: "Bedarfsermittlung",
                text: "Wir kommen zu Ihnen nach Hause und besprechen gemeinsam, welche Unterstützung Sie oder Ihr Angehöriger benötigt.",
              },
              {
                num: "3",
                title: "Ihre Hilfe startet",
                text: "Ihre persönliche Alltagshilfe beginnt – zuverlässig, regelmäßig und ganz nach Ihrem Bedarf. Die Abrechnung übernehmen wir.",
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                className="relative text-center z-10"
                style={{
                  opacity: stepper.visible ? 1 : 0,
                  transform: stepper.visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${idx * 0.15}s`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full text-white flex items-center justify-center mx-auto mb-6 relative z-[2]"
                  style={{
                    background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 50%, #005662 100%)",
                    boxShadow: "0 4px 16px rgba(0,131,143,0.3)",
                    ...fontData,
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  {step.num}
                </div>
                <h3 className="mb-4" style={{ ...fontHeadings, fontSize: "20px", fontWeight: 600, color: "#0D2137" }}>
                  {step.title}
                </h3>
                <p className="max-w-[280px] mx-auto" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: USPs
          ============================================ */}
      <section style={{ background: "#FFF8F0", padding: "var(--section-padding-y) 0" }} ref={usps.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#00838F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              WARUM UNS VERTRAUEN
            </p>
            <h2 style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
              Was uns von anderen unterscheidet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Über 7 Jahre Erfahrung",
                text: "Seit 2017 unterstützen wir pflegebedürftige Menschen in Berlin – zuverlässig und kompetent.",
              },
              {
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
                title: "Direktabrechnung",
                text: "Wir rechnen direkt mit Ihrer Pflegekasse ab. Kein Papierkram, keine Vorkasse.",
              },
              {
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
                title: "Mit Herz & Seele",
                text: "Pflege ist Vertrauenssache. Unsere Mitarbeiter sind geschult, einfühlsam und engagiert.",
              },
              {
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                title: "Einsätze in ganz Berlin",
                text: "Wir kommen zu Ihnen nach Hause – in Berlin und der näheren Umgebung.",
              },
              {
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
                title: "Ihr festes Team",
                text: "Sie werden immer von den gleichen Helfern betreut – für Vertrauen und Kontinuität.",
              },
              {
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#00838F" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
                title: "Persönlicher Ansprechpartner",
                text: "Bei Fragen erreichen Sie uns direkt. Kein Callcenter, keine Warteschleife.",
              },
            ].map((usp, idx) => (
              <div
                key={usp.title}
                className="bg-white p-8 rounded-[16px] border border-[#E0E7E9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,131,143,0.12)]"
                style={{
                  opacity: usps.visible ? 1 : 0,
                  transform: usps.visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${idx * 0.1}s`,
                }}
              >
                <div className="mb-4">{usp.icon}</div>
                <h3 style={{ ...fontHeadings, fontSize: "18px", fontWeight: 600, color: "#0D2137", marginBottom: "16px" }}>
                  {usp.title}
                </h3>
                <p style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
                  {usp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: EINSATZGEBIET
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }} ref={einsatzgebiet.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#00838F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              UNSER EINSATZGEBIET
            </p>
            <h2 style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137", marginBottom: "16px" }}>
              Wir kommen zu Ihnen nach Hause
            </h2>
            <p style={{ ...fontBody, fontSize: "var(--font-size-body)", color: "#455A64" }}>
              Unser Team ist in ganz Berlin und der näheren Umgebung für Sie im Einsatz.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Districts + PLZ */}
            <div
              style={{
                opacity: einsatzgebiet.visible ? 1 : 0,
                transform: einsatzgebiet.visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "Mitte", "Charlottenburg-Wilmersdorf", "Schöneberg", "Tempelhof",
                  "Steglitz-Zehlendorf", "Neukölln", "Friedrichshain-Kreuzberg",
                  "Spandau", "Reinickendorf", "Pankow", "Lichtenberg",
                  "Marzahn-Hellersdorf", "+ Umgebung",
                ].map((district) => (
                  <span
                    key={district}
                    className="inline-flex items-center px-4 py-2 rounded-full cursor-default"
                    style={{
                      background: "#E0F7FA",
                      color: "#00838F",
                      ...fontBody,
                      fontSize: "15px",
                      fontWeight: 500,
                      transition: "background-color 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00838F";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#E0F7FA";
                      e.currentTarget.style.color = "#00838F";
                    }}
                  >
                    {district}
                  </span>
                ))}
              </div>

              {/* PLZ Checker */}
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Ihre Postleitzahl eingeben"
                  aria-label="Postleitzahl"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  value={plz}
                  onChange={(e) => { setPlz(e.target.value); setPlzResult(null); }}
                  onKeyDown={(e) => { if (e.key === "Enter") checkPLZ(); }}
                  maxLength={5}
                  className="flex-1 px-5 py-3.5 rounded-[12px] border-2 outline-none transition-colors"
                  style={{
                    borderColor: plzResult === "success" ? "#66BB6A" : plzResult === "error" ? "#ef4444" : "#E0E7E9",
                    ...fontBody,
                    fontSize: "16px",
                  }}
                  onFocus={(e) => { if (!plzResult) e.currentTarget.style.borderColor = "#00838F"; }}
                  onBlur={(e) => { if (!plzResult) e.currentTarget.style.borderColor = "#E0E7E9"; }}
                />
                <button
                  onClick={checkPLZ}
                  className="px-6 py-3.5 text-white rounded-[12px] whitespace-nowrap transition-all hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                    ...fontHeadings,
                    fontSize: "16px",
                    fontWeight: 600,
                    border: "none",
                  }}
                >
                  Prüfen
                </button>
              </div>

              {plzResult === "success" && (
                <p className="flex items-center gap-2" style={{ ...fontBody, fontSize: "15px", color: "#66BB6A", fontWeight: 600 }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ja, wir sind bei Ihnen aktiv! Rufen Sie uns an.
                </p>
              )}
              {plzResult === "error" && (
                <p className="flex items-center gap-2" style={{ ...fontBody, fontSize: "15px", color: "#ef4444", fontWeight: 600 }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                  Bitte rufen Sie uns an – wir prüfen, ob wir auch in Ihrer Nähe tätig sind.
                </p>
              )}
            </div>

            {/* Right: Berlin map placeholder */}
            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 50%, #E0F2F1 100%)",
                boxShadow: "0 4px 12px rgba(0,131,143,0.12)",
                minHeight: "380px",
                opacity: einsatzgebiet.visible ? 1 : 0,
                transform: einsatzgebiet.visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.6s ease-out 0.15s",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Simplified Berlin outline */}
                  <svg className="w-48 h-48 mx-auto mb-4" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="80" stroke="#00838F" strokeWidth="2" strokeDasharray="4 4" opacity="0.3" />
                    <circle cx="100" cy="100" r="60" stroke="#00838F" strokeWidth="1.5" opacity="0.2" />
                    <circle cx="100" cy="100" r="40" fill="#00838F" opacity="0.08" />
                    {/* Pin marker */}
                    <circle cx="105" cy="95" r="6" fill="#00838F" />
                    <path d="M105 89 L105 80" stroke="#00838F" strokeWidth="2" />
                    <circle cx="105" cy="78" r="3" fill="#4DD0E1" />
                    {/* District labels */}
                    <text x="60" y="70" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Spandau</text>
                    <text x="110" y="55" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Pankow</text>
                    <text x="85" y="105" fill="#00838F" fontSize="8" fontWeight="700" opacity="0.8">Mitte</text>
                    <text x="130" y="110" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Lichtenberg</text>
                    <text x="65" y="140" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Steglitz</text>
                    <text x="115" y="145" fill="#00838F" fontSize="7" fontWeight="600" opacity="0.6">Neukölln</text>
                  </svg>
                  <div style={{ ...fontHeadings, fontSize: "16px", fontWeight: 600, color: "#00838F" }}>
                    Berlin & Umgebung
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2" style={{ ...fontBody, fontSize: "14px", color: "#455A64" }}>
                    <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Kurfürstenstr. 114, 10787 Berlin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 8: TESTIMONIALS
          ============================================ */}
      <section style={{ background: "#F7FAFA", padding: "var(--section-padding-y) 0" }} ref={testimonials.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#00838F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              DAS SAGEN UNSERE KUNDEN
            </p>
            <h2 style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
              Echte Stimmen. Echtes Vertrauen.
            </h2>
          </div>

          {/* Carousel Implementation */}
          <div className="relative px-4 md:px-12">
            {/* Arrows */}
            {/* Arrows */}
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#E0F7FA] hover:text-[#00838F] hover:shadow-[0_6px_16px_rgba(0,131,143,0.15)] disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 text-[#00838F] inherit-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(testimonialsList.length - (windowWidth < 768 ? 1 : 3), currentSlide + 1))}
              disabled={currentSlide >= testimonialsList.length - (windowWidth < 768 ? 1 : 3)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white flex items-center justify-center transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#E0F7FA] hover:text-[#00838F] hover:shadow-[0_6px_16px_rgba(0,131,143,0.15)] disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 text-[#00838F] inherit-color" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden -mx-4 px-4 py-8">
              <div
                className="flex gap-8 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(calc(-${currentSlide} * ((100% + 32px) / ${windowWidth < 768 ? 1 : 3})))`,
                }}
              >
                {/* REVISIT: The transform logic above is messy. Let's do a cleaner style.
                      We have gap-8 (32px).
                      Item width: (100% - (visible-1)*gap) / visible
                      Translate: -index * (itemWidth + gap)
                  */}
                {testimonialsList.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex-none w-full md:w-[calc(33.333%-22px)] bg-white rounded-[16px] p-8 transition-all hover:scale-[1.02] relative border border-transparent hover:border-[#4DD0E1]"
                    style={{
                      boxShadow: "0 2px 12px rgba(13,33,55,0.08)",
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="mb-4">
                      {/* Cyan Quote Icon - Material Format Quote */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="#4DD0E1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                      </svg>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#FFA000]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote Text */}
                    <div className="mb-8 pl-2 border-l-2 border-[#E0F7FA]">
                      <p className="italic" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="mt-auto">
                      <div style={{ ...fontHeadings, fontSize: "16px", fontWeight: 700, color: "#0D2137" }}>
                        {t.author}
                      </div>
                      <div style={{ ...fontBody, fontSize: "14px", color: "#90A4AE" }}>
                        {t.relation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: Math.ceil(testimonialsList.length / (windowWidth < 768 ? 1 : 3)) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx * (windowWidth < 768 ? 1 : 3))}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${Math.ceil(currentSlide / (windowWidth < 768 ? 1 : 3)) === idx
                    ? "bg-[#00838F]"
                    : "bg-[#E0E7E9] hover:bg-[#B2EBF2]"
                    }`}
                  aria-label={`Go to slide group ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 9: FAQ
          ============================================ */}
      <section className="bg-white" style={{ padding: "var(--section-padding-y) 0" }} ref={faqSection.ref}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="mb-3" style={{ ...fontHeadings, fontSize: "14px", fontWeight: 600, color: "#00838F", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              HÄUFIGE FRAGEN
            </p>
            <h2 style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "#0D2137" }}>
              Antworten auf Ihre wichtigsten Fragen
            </h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* FAQ accordion */}
            <div
              style={{
                opacity: faqSection.visible ? 1 : 0,
                transform: faqSection.visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              {[
                {
                  q: "Was ist der Entlastungsbetrag nach §45b SGB XI?",
                  a: "Der Entlastungsbetrag ist eine Leistung der Pflegekasse in Höhe von 131 € monatlich. Er steht jedem Pflegebedürftigen mit Pflegegrad 1 bis 5 zu, der zu Hause gepflegt wird. Er kann für anerkannte Angebote zur Unterstützung im Alltag genutzt werden – wie unsere Leistungen.",
                },
                {
                  q: "Muss ich den Entlastungsbetrag selbst beantragen?",
                  a: "Nein, einen gesonderten Antrag müssen Sie in der Regel nicht stellen. Der Anspruch besteht automatisch mit Ihrem Pflegegrad. Wir unterstützen Sie bei allen nötigen Unterlagen und kümmern uns um die Abrechnung mit Ihrer Pflegekasse.",
                },
                {
                  q: "Welche Leistungen kann ich über den Entlastungsbetrag finanzieren?",
                  a: "Alle unsere Leistungen – von der Haushaltshilfe über Einkaufshilfe bis hin zur Begleitung zu Arztterminen – können über den Entlastungsbetrag abgerechnet werden. Wir sind als Anbieter nach §45b SGB XI vom Land Berlin anerkannt.",
                },
                {
                  q: "Kommen bei mir zusätzliche Kosten auf mich zu?",
                  a: "In der Regel nicht. Der Entlastungsbetrag deckt unsere Leistungen ab. Sollte Ihr Bedarf darüber hinausgehen, besprechen wir das transparent im Vorfeld. Es gibt keine versteckten Kosten.",
                },
                {
                  q: "In welchen Bezirken sind Sie tätig?",
                  a: "Wir sind in ganz Berlin und der näheren Umgebung im Einsatz. Rufen Sie uns einfach an – wir prüfen gerne, ob wir auch in Ihrer Nähe tätig sind.",
                },
                {
                  q: "Wie schnell kann die Hilfe beginnen?",
                  a: "Nach unserem Erstgespräch kann die Unterstützung in der Regel innerhalb weniger Tage starten. Wir wissen, dass Hilfe oft dringend benötigt wird, und reagieren so schnell wie möglich.",
                },
                {
                  q: "Kann ich nicht genutzte Beträge ansparen?",
                  a: "Ja! Nicht genutzte Entlastungsbeträge können ins Folgequartal übertragen werden. Beträge aus dem Vorjahr können bis zum 30. Juni des Folgejahres noch eingesetzt werden. Wir beraten Sie gerne dazu.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-[#E0E7E9]" style={{ padding: "8px 0" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                    style={{
                      ...fontHeadings,
                      fontSize: "18px",
                      fontWeight: 600,
                      color: openFaq === idx ? "#00838F" : "#0D2137",
                      background: "none",
                      border: "none",
                      padding: "12px 0",
                    }}
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="text-[24px] flex-shrink-0 transition-transform"
                      style={{ transform: openFaq === idx ? "rotate(45deg)" : "none", transitionDuration: "300ms" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all"
                    style={{
                      maxHeight: openFaq === idx ? "500px" : "0",
                      transitionDuration: "400ms",
                      transitionTimingFunction: "ease",
                    }}
                  >
                    <p className="pt-4" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar: Noch Fragen? */}
            <div className="hidden lg:block">
              <div
                className="sticky top-[100px] p-8 rounded-[16px]"
                style={{
                  background: "linear-gradient(180deg, #F7FAFA 0%, #E0F7FA 100%)",
                  border: "1px solid #E0E7E9",
                }}
              >
                <h3 className="mb-4" style={{ ...fontHeadings, fontSize: "22px", fontWeight: 700, color: "#0D2137" }}>
                  Noch Fragen?
                </h3>
                <p className="mb-6" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
                  Rufen Sie uns an. Wir helfen sofort.
                </p>
                <a
                  href="tel:+4930610850625"
                  className="flex items-center gap-3 mb-6 group"
                  style={{ ...fontData, fontSize: "22px", fontWeight: 700, color: "#00838F" }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  030 610 850 625
                </a>
                <Link
                  href="/ueber-uns/kontakt"
                  className="block w-full text-center py-3.5 rounded-[12px] text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                    ...fontHeadings,
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Rückruf anfordern
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 10: CTA BANNER
          ============================================ */}
      <section
        className="relative overflow-hidden text-center"
        style={{
          background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 100%)",
          padding: "96px 0",
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
            <circle cx="200" cy="150" r="200" stroke="white" strokeWidth="1" fill="none" />
            <circle cx="1240" cy="100" r="150" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
          <h2 className="mb-4" style={{ ...fontHeadings, fontSize: "var(--font-size-h2)", fontWeight: 700, color: "white" }}>
            Wir sind für Sie da.
          </h2>
          <p className="mb-8 max-w-[600px] mx-auto" style={{ ...fontBody, fontSize: "var(--font-size-body-large)", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
            Lassen Sie sich jetzt kostenlos beraten.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="tel:+4930610850625"
              className="inline-flex items-center justify-center gap-2 bg-white rounded-full transition-all hover:-translate-y-0.5"
              style={{
                color: "#00838F",
                padding: "16px 32px",
                ...fontHeadings,
                fontSize: "var(--font-size-btn)",
                fontWeight: 700,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                animation: "pulse-shadow 2.5s ease-in-out infinite",
              }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              030 610 850 625
            </a>
            <Link
              href="/ueber-uns/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full transition-all"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "16px 32px",
                background: "transparent",
                ...fontHeadings,
                fontSize: "var(--font-size-btn)",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              Nachricht schreiben
            </Link>
          </div>

          <p style={{ ...fontBody, fontSize: "15px", color: "rgba(255,255,255,0.85)" }}>
            Mo–Fr 9:00–18:00 Uhr &middot; info@ebox.berlin
          </p>
        </div>
      </section>
    </div>
  );
}
