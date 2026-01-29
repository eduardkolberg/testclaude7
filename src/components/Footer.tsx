import Link from "next/link";
import Image from "next/image";

// Navigation links organized by category
const footerNavigation = {
  leistungen: {
    title: "Leistungen",
    links: [
      { title: "Haushaltshilfe", href: "/leistungen/alltagsunterstuetzung/haushaltshilfe" },
      { title: "Einkaufshilfe & Besorgungen", href: "/leistungen/alltagsunterstuetzung/einkaufshilfe" },
      { title: "Begleitung zu Terminen", href: "/leistungen/betreuung-begleitung/termine" },
      { title: "Entlastung für Angehörige", href: "/leistungen/entlastung-angehoerige" },
    ],
  },
  entlastungsbetrag: {
    title: "§45b SGB XI",
    links: [
      { title: "Was ist der Entlastungsbetrag?", href: "/entlastungsbetrag-abrechnung/erklaerung/was-ist-paragraph-45b" },
      { title: "131 € pro Monat nutzen", href: "/entlastungsbetrag-abrechnung/finanzierung/131-euro-nutzung" },
      { title: "Abrechnung mit Pflegekasse", href: "/entlastungsbetrag-abrechnung/pflegekasse" },
      { title: "Häufige Fragen (FAQ)", href: "/entlastungsbetrag-abrechnung/faq" },
    ],
  },
  unternehmen: {
    title: "Über uns",
    links: [
      { title: "Tonus Dienst GmbH", href: "/ueber-uns/tonus-dienst" },
      { title: "Qualität & Vertrauen", href: "/ueber-uns/qualitaet" },
      { title: "Einsatzgebiet Berlin", href: "/ueber-uns/einsatzgebiet" },
      { title: "Karriere", href: "/ueber-uns/karriere" },
    ],
  },
};

// Social media links
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/tonusdienst",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/tonusdienst",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/tonusdienst",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a365d] to-[#0f2847] text-white relative overflow-hidden" role="contentinfo">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5">
        {/* Trust Signals Bar */}
        <div className="py-8 border-b border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Years of experience */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-cyan-400">7+</span>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Jahre Erfahrung</p>
                <p className="text-white/60 text-sm">in Berlin</p>
              </div>
            </div>

            {/* Certification */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">§45a zertifiziert</p>
                <p className="text-white/60 text-sm">Geprüfter Anbieter</p>
              </div>
            </div>

            {/* Direct billing */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Direktabrechnung</p>
                <p className="text-white/60 text-sm">mit Pflegekasse</p>
              </div>
            </div>

            {/* Free consultation */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Kostenlose Beratung</p>
                <p className="text-white/60 text-sm">Unverbindlich</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Company Info - Wider column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block transition-opacity hover:opacity-90" aria-label="Tonus Dienst - Zur Startseite">
              <Image
                src="/images/tonus-logo-white.png"
                alt="Tonus Dienst GmbH"
                width={200}
                height={200}
                className="w-40 h-auto"
              />
            </Link>

            <p className="text-white/70 text-base leading-relaxed max-w-md">
              Ihr zertifizierter Partner für Betreuungs- und Entlastungsleistungen nach §45b SGB XI in Berlin.
              Wir unterstützen pflegebedürftige Menschen und ihre Angehörigen mit Herz und Professionalität.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-bold text-lg">Kontakt</h3>

              <div className="space-y-3">
                <a
                  href="tel:+4930610850625"
                  className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors group py-2 min-h-[48px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-semibold text-base">030 610 850 625</span>
                </a>

                <a
                  href="mailto:info@ebox.berlin"
                  className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors group py-2 min-h-[48px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-base">info@ebox.berlin</span>
                </a>

                <div className="flex items-center gap-3 text-white/80 py-2 min-h-[48px]">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <address className="not-italic text-base leading-relaxed">
                    Kurfürstenstr. 114<br />
                    10787 Berlin
                  </address>
                </div>

                <div className="flex items-center gap-3 text-white/80 py-2 min-h-[48px]">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-base">Mo – Fr: 09:00 – 18:00 Uhr</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center text-white/60 hover:text-cyan-400 transition-all"
                  aria-label={`${social.name} - Neues Fenster`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerNavigation).map(([key, section]) => (
              <nav key={key} aria-label={section.title}>
                <h3 className="text-white font-bold text-lg mb-5">{section.title}</h3>
                <ul className="space-y-1" role="list">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/70 text-base hover:text-cyan-400 transition-colors block py-2.5 min-h-[44px] flex items-center"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Kostenlose Erstberatung</h3>
              <p className="text-white/60 text-base">
                Nutzen Sie Ihren Entlastungsbetrag – wir beraten Sie unverbindlich!
              </p>
            </div>
            <a
              href="tel:+4930610850625"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/25 min-h-[56px]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Jetzt anrufen
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-white/50 text-sm">
            <p>&copy; {currentYear} Tonus Dienst GmbH. Alle Rechte vorbehalten.</p>
            <span className="hidden sm:inline">|</span>
            <p>Geschäftsführer: Kober Swetlana</p>
            <span className="hidden sm:inline">|</span>
            <p>HRB 210758 B</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Rechtliche Links">
            <Link href="/ueber-uns/rechtliches/impressum" className="text-white/50 hover:text-cyan-400 transition-colors text-sm py-2 min-h-[44px] flex items-center">
              Impressum
            </Link>
            <Link href="/ueber-uns/rechtliches/datenschutz" className="text-white/50 hover:text-cyan-400 transition-colors text-sm py-2 min-h-[44px] flex items-center">
              Datenschutz
            </Link>
            <Link href="/ueber-uns/kontakt" className="text-white/50 hover:text-cyan-400 transition-colors text-sm py-2 min-h-[44px] flex items-center">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
