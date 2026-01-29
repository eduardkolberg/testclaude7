import Link from "next/link";
import type { ReactNode } from "react";

// --- Components ---

function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} max-w-3xl mx-auto`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight ${light ? "text-white" : "text-[var(--color-primary)]"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-blue-100" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function ServiceCard({
  title,
  icon,
  items,
  href
}: {
  title: string;
  icon: ReactNode;
  items: string[];
  href: string;
}) {
  return (
    <div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 text-cyan-600">
          {icon}
        </div>

        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 group-hover:text-cyan-700 transition-colors">
          {title}
        </h3>

        <ul className="space-y-4 mb-8 flex-grow">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-600">
              <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="inline-flex items-center gap-2 text-cyan-700 font-semibold group-hover:gap-3 transition-all"
        >
          Details ansehen
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
  isLast
}: {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 text-white text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 relative z-10">
        {number}
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-cyan-200 -z-0" />
      )}
      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">{description}</p>
    </div>
  );
}

// --- Main Page ---

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* 
        HERO SECTION 
        - Split Layout: Text Left / Image Right
        - Modern Glassmorphism
        - Floating Elements
      */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--color-bg)]">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-50/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="relative container mx-auto px-5 z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Content */}
            <div className="max-w-2xl text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-cyan-100 rounded-full px-5 py-2.5 mb-8 shadow-sm animate-fade-in-up md:mx-0 mx-auto">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[var(--color-primary)] text-sm font-bold tracking-wide">Zertifiziert nach §45a SGB XI</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--color-primary)] leading-[1.05] mb-8 tracking-tight animate-fade-in-up delay-100">
                Pflege in Berlin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 relative">
                  mit Herz und Seele
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-200 -z-10 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-600 mb-10 leading-relaxed animate-fade-in-up delay-200 font-normal max-w-lg lg:mx-0 mx-auto">
                Ihr zertifizierter Partner für Betreuungs- und Entlastungsleistungen.
                Wir schenken Ihnen Zeit, Sicherheit und Lebensfreude – jeden Tag.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300 justify-center lg:justify-start">
                <a
                  href="tel:+4930610850625"
                  className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[var(--color-primary)] text-white text-lg font-bold px-8 py-4 rounded-2xl hover:bg-[#2d4a6a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Kostenlos beraten
                  </span>
                </a>
                <Link
                  href="/entlastungsbetrag-abrechnung/erklaerung/was-ist-paragraph-45b"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] text-lg font-bold px-8 py-4 rounded-2xl hover:bg-cyan-50 transition-all border border-slate-200 shadow-sm"
                >
                  Mehr erfahren
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 animate-fade-in-up delay-300 justify-center lg:justify-start">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                      User
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-cyan-100 flex items-center justify-center text-xs font-bold text-cyan-800">
                    500+
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.25.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-500">Zufriedene Kunden in Berlin</p>
                </div>
              </div>
            </div>

            {/* Right Column: Image & Floating Elements */}
            <div className="relative animate-fade-in-up delay-200 lg:block hidden">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/hero-image.png"
                  alt="Loving care - elderly woman and caregiver smiling"
                  className="w-full h-auto object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Card 1: Experience */}
                <div className="absolute top-10 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-float border border-white/50">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Erfahrung</p>
                    <p className="text-lg font-bold text-[var(--color-primary)]">7+ Jahre</p>
                  </div>
                </div>

                {/* Floating Card 2: Reimbursement */}
                <div className="absolute bottom-12 -right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl animate-float delay-1000 border border-white/50 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-lg font-bold text-teal-700">131 €</p>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Monatlicher Entlastungsbetrag direkt abrechenbar.
                  </p>
                </div>
              </div>

              {/* Decorative elements behind image */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full border border-cyan-100/50"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-dashed border-teal-100/50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        FEATURE SECTION: Entlastungsbetrag
        - Floating card effect
        - High contrast callout
      */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="container mx-auto px-5">
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-transparent opacity-50" />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-100 rounded-full blur-[100px] group-hover:bg-cyan-200 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-800 text-sm font-bold rounded-full mb-6">
                  Ihr gutes Recht
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
                  Nutzen Sie Ihre <br /><span className="text-cyan-600">131 € monatlich</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Ihnen steht dieser Betrag gesetzlich zu (ab Pflegegrad 1).
                  Sie können ihn für Haushaltshilfe, Begleitung und Entlastung einsetzen.
                  Verfällt er ungenutzt? Lassen Sie das nicht zu.
                </p>
                <Link
                  href="/entlastungsbetrag-abrechnung"
                  className="inline-flex items-center gap-3 text-lg font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
                >
                  <span className="border-b-2 border-cyan-200 hover:border-cyan-600 transition-all pb-0.5">Alles zum Entlastungsbetrag</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>

              <div className="flex-shrink-0 animate-float">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 shadow-2xl flex items-center justify-center p-2 relative">
                  <div className="absolute inset-2 border-4 border-white/30 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
                  <div className="text-center text-white">
                    <div className="text-lg font-medium opacity-90 mb-1">Bis zu</div>
                    <div className="text-6xl font-bold mb-2">1,572€</div>
                    <div className="text-sm font-medium opacity-90 uppercase tracking-widest">pro Jahr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        SERVICES SECTION
        - Bento-style layout attempt or uniform cards
      */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        <div className="container mx-auto px-5">
          <SectionHeader
            title="Unsere Leistungen"
            subtitle="Wir unterstützen Sie im Alltag – individuell, zuverlässig und mit Herz. Genau da, wo Sie uns brauchen."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Alltagsunterstützung"
              href="/leistungen/alltagsunterstuetzung"
              items={["Haushaltshilfe & Reinigung", "Einkaufshilfe & Besorgungen", "Unterstützung bei Mahlzeiten"]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <ServiceCard
              title="Betreuung & Begleitung"
              href="/leistungen/betreuung-begleitung"
              items={["Begleitung zu Arztterminen", "Spaziergänge & Ausflüge", "Gemeinsame Gespräche"]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <ServiceCard
              title="Entlastung für Angehörige"
              href="/leistungen/entlastung-angehoerige"
              items={["Stundenweise Verhinderungspflege", "Zeit für Ihre Erholung", "Sicherheit für Ihre Liebsten"]}
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* 
        HOW IT WORKS
        - Clean steps with visual connectors
      */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="container mx-auto px-5">
          <SectionHeader
            title="So einfach geht's"
            subtitle="In nur drei Schritten zu mehr Lebensqualität. Wir kümmern uns um den Papierkram."
          />

          <div className="grid md:grid-cols-3 gap-12 mt-16 px-4">
            <StepCard
              number="1"
              title="Kostenlose Beratung"
              description="Rufen Sie uns an. Wir klären Ihre Ansprüche und Fragen sofort am Telefon."
            />
            <StepCard
              number="2"
              title="Individueller Plan"
              description="Wir erstellen gemeinsam einen Plan, der genau zu Ihren Wünschen passt."
            />
            <StepCard
              number="3"
              title="Los geht's"
              description="Unsere freundliche Hilfe kommt zu Ihnen. Wir rechnen direkt mit der Kasse ab."
              isLast
            />
          </div>
        </div>
      </section>

      {/* 
        Big CTA / Pre-Footer
        - Dark, serious but hopeful
      */}
      <section className="py-24 bg-[#1a365d] relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-5 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Bereit für Unterstützung?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
            Zögern Sie nicht. Ein Anruf genügt, und wir finden gemeinsam eine Lösung für Ihre Situation.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="tel:+4930610850625"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-2xl font-bold px-10 py-5 rounded-2xl shadow-2xl hover:scale-105 transition-transform"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              030 610 850 625
            </a>
            <p className="text-blue-200 text-sm mt-2">
              Mo-Fr 09:00 - 17:00 Uhr • Kostenfrei & unverbindlich
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
