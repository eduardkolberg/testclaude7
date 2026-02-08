"use client";

import Link from "next/link";
import Image from "next/image";

const footerColumns = {
  leistungen: {
    title: "LEISTUNGEN",
    links: [
      { label: "Haushaltshilfe", href: "/leistungen/alltagsunterstuetzung/haushaltshilfe" },
      { label: "Einkaufshilfe", href: "/leistungen/alltagsunterstuetzung/einkaufshilfe" },
      { label: "Mahlzeiten", href: "/leistungen/alltagsunterstuetzung/mahlzeiten" },
      { label: "Arztbegleitung", href: "/leistungen/betreuung-begleitung/termine" },
      { label: "Spaziergänge", href: "/leistungen/betreuung-begleitung/freizeitgestaltung" },
      { label: "Entlastung", href: "/leistungen/entlastung-angehoerige" },
    ],
  },
  paragraph: {
    title: "§45B SGB XI",
    links: [
      { label: "Was ist §45b?", href: "/entlastungsbetrag-abrechnung/erklaerung/was-ist-paragraph-45b" },
      { label: "Pflegegrade", href: "/entlastungsbetrag-abrechnung/erklaerung/anspruch-pflegegrad" },
      { label: "Finanzierung", href: "/entlastungsbetrag-abrechnung/finanzierung" },
      { label: "Abrechnung", href: "/entlastungsbetrag-abrechnung/pflegekasse" },
      { label: "FAQ", href: "/entlastungsbetrag-abrechnung/faq" },
    ],
  },
  kontakt: {
    title: "KONTAKT",
    items: [
      { icon: "phone", text: "+49 (030) 610-850-625", href: "tel:+4930610850625" },
      { icon: "email", text: "info@ebox.berlin", href: "mailto:info@ebox.berlin" },
      { icon: "location", text: "Kurfürstenstr. 114, 10787 Berlin" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white"
      style={{ background: "#1A2B3A" }}
      role="contentinfo"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Main footer grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-12"
          style={{ padding: "64px 0 48px" }}
        >
          {/* Column 1: Logo & company info */}
          <div>
            <Link href="/" className="inline-block mb-6" aria-label="Tonus Dienst - Zur Startseite">
              <Image
                src="/images/tonus-logo-white.png"
                alt="Tonus Dienst GmbH"
                width={160}
                height={160}
                className="h-20 w-auto"
              />
            </Link>
            <p
              className="mb-2"
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Tonus Dienst GmbH
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
              Pflege in Berlin &middot; Mit Herz und Seele
            </p>
          </div>

          {/* Column 2: Leistungen */}
          <nav aria-label="Leistungen">
            <h3
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "24px",
              }}
            >
              {footerColumns.leistungen.title}
            </h3>
            <ul className="space-y-1">
              {footerColumns.leistungen.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-[16px] transition-colors"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4DD0E1")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: §45b SGB XI */}
          <nav aria-label="§45b SGB XI">
            <h3
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "24px",
              }}
            >
              {footerColumns.paragraph.title}
            </h3>
            <ul className="space-y-1">
              {footerColumns.paragraph.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1.5 text-[16px] transition-colors"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#4DD0E1")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Kontakt */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "24px",
              }}
            >
              {footerColumns.kontakt.title}
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+4930610850625"
                className="flex items-center gap-3 text-[16px] transition-colors py-1"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4DD0E1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +49 (030) 610-850-625
              </a>
              <a
                href="mailto:info@ebox.berlin"
                className="flex items-center gap-3 text-[16px] transition-colors py-1"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#4DD0E1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@ebox.berlin
              </a>
              <div className="flex items-start gap-3 text-[16px] py-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <address className="not-italic">
                  Kurfürstenstr. 114<br />
                  10787 Berlin
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-4 py-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span>&copy; {currentYear} Tonus Dienst GmbH &middot; HRB 210758 B</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Geschäftsführer: Kober Swetlana</span>
          </div>

          <nav className="flex items-center gap-6" aria-label="Rechtliche Links">
            <Link
              href="/ueber-uns/rechtliches/impressum"
              className="text-[15px] transition-colors py-2"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4DD0E1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              Impressum
            </Link>
            <Link
              href="/ueber-uns/rechtliches/datenschutz"
              className="text-[15px] transition-colors py-2"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#4DD0E1")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
