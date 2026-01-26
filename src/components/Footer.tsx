import Link from "next/link";

const menuLinks = {
  "Unser Zuhause": [
    { title: "Selbstbestimmt leben: Unsere Grundwerte", href: "/unser-zuhause/philosophie-konzept/grundwerte" },
    { title: "Gemeinschaft statt Einsamkeit", href: "/unser-zuhause/philosophie-konzept/gemeinschaft" },
    { title: "Ein ganz normales Wohnumfeld", href: "/unser-zuhause/philosophie-konzept/wohnumfeld" },
  ],
  "Leistungen & Kosten": [
    { title: "24-Stunden-Präsenz & Sicherheit", href: "/leistungen-kosten/servicepaket/praesenz-sicherheit" },
    { title: "Verpflegung & Hauswirtschaft", href: "/leistungen-kosten/servicepaket/verpflegung" },
    { title: "Kosten & Finanzierung", href: "/leistungen-kosten/kosten-finanzierung" },
  ],
  "Information & Kontakt": [
    { title: "Unser Team stellt sich vor", href: "/information-kontakt/standort-team/team" },
    { title: "Beratung & Besichtigung", href: "/information-kontakt/weg-zu-uns/beratung" },
    { title: "Häufig gestellte Fragen (FAQ)", href: "/information-kontakt/weg-zu-uns/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#13263f] text-white relative overflow-hidden" role="contentinfo">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="footerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="Senioren WG am Hagenmarkt - Zur Startseite">
              <div className="w-[70px] h-[70px] relative flex-shrink-0">
                <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
                  <path d="M30 5L5 25V55H55V25L30 5Z" fill="url(#footerLogoGradient)" />
                  <path d="M30 20L33 28H41L35 33L37 41L30 36L23 41L25 33L19 28H27L30 20Z" fill="#68A31A" />
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="5" y1="30" x2="55" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#002CA8" />
                      <stop offset="1" stopColor="#0688B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">SENIOREN WG</span>
                <span className="text-white font-bold text-xl leading-tight">AM HAGENMARKT</span>
              </div>
            </Link>

            <p className="text-white/80 text-sm leading-relaxed">
              Pflegedienste für ältere Menschen, die von qualifizierten Krankenschwestern angeboten werden, spielen eine entscheidende Rolle bei der Aufrechterhaltung der Lebensqualität von Senioren.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <p className="text-white font-bold text-base">Kontakt</p>

              <div className="space-y-3">
                <a href="tel:053118054700" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-bold text-sm">(0531) 180 54 700</span>
                </a>

                <a href="mailto:info@seniorenwghagenmarkt.de" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 6L12 13L2 6"/>
                  </svg>
                  <span className="text-sm">info@seniorenwghagenmarkt.de</span>
                </a>

                <div className="flex items-center gap-2 text-white/70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span className="text-sm">Mo - Fr 09:00 - 20:00</span>
                </div>

                <div className="flex items-center gap-2 text-white/70">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M12 2C8 2 5 5 5 8c0 5 7 13 7 13s7-8 7-13c0-3-3-6-7-6z"/>
                    <circle cx="12" cy="8" r="2"/>
                  </svg>
                  <span className="text-sm">Hagenmarkt 2, 38100 Braunschweig</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Columns */}
          {Object.entries(menuLinks).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h2 className="text-base font-bold mb-5">{category}</h2>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-white transition-colors inline-block py-1"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; 2025 Senioren WG am Hagenmarkt. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="#impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="#cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
