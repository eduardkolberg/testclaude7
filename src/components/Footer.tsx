"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo?: { src: string; alt: string; width: number; height: number };
  companyName?: string;
  description?: string;
  columns?: FooterColumn[];
  contact?: {
    phone?: string;
    phoneLabel?: string;
    email?: string;
    address?: ReactNode;
  };
  legalLinks?: FooterLink[];
  copyright?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "LEISTUNGEN",
    links: [
      { label: "Alltagsunterstützung", href: "/leistungen/alltagsunterstuetzung" },
      { label: "Betreuung & Begleitung", href: "/leistungen/betreuung-begleitung" },
      { label: "Entlastung für Angehörige", href: "/leistungen/entlastung-angehoerige" },
      { label: "Alle Leistungen", href: "/leistungen" },
    ],
  },
  {
    title: "§45B SGB XI",
    links: [
      { label: "Entlastungsbetrag erklärt", href: "/45b/entlastungsbetrag" },
      { label: "Finanzierung", href: "/45b/finanzierung" },
      { label: "So läuft es ab", href: "/45b/ablauf" },
      { label: "Abrechnung", href: "/45b/abrechnung" },
      { label: "FAQ", href: "/45b/faq" },
    ],
  },
];

export default function Footer({
  logo = { src: "/images/tonus-logo-white.png", alt: "Tonus Dienst GmbH", width: 160, height: 160 },
  companyName = "Tonus Dienst GmbH",
  description = "Pflege in Berlin · Mit Herz und Seele",
  columns = defaultColumns,
  contact = {
    phone: "+4930610850625",
    phoneLabel: "+49 (030) 610-850-625",
    email: "info@ebox.berlin",
    address: <>Kurfürstenstr. 114<br />10787 Berlin</>,
  },
  legalLinks = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
  copyright,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const finalCopyright = copyright || `© ${currentYear} ${companyName} · HRB 210758 B`;

  return (
    <footer
      className="text-white relative z-10"
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
            <Link href="/" className="inline-block mb-6" aria-label={`${companyName} - Zur Startseite`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-20 w-auto"
              />
            </Link>
            <div className="mb-2 font-semibold text-white text-base">
              {companyName}
            </div>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
              {description}
            </p>
          </div>

          {/* Dynamic Columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3
                className="uppercase tracking-wider mb-6 text-white font-bold"
                style={{ fontSize: "16px", lineHeight: "1.2" }}
              >
                {col.title}
              </h3>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-1.5 text-[16px] transition-colors hover:text-cyan-bright"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Column 4: Kontakt */}
          <div>
            <h3
              className="uppercase tracking-wider mb-6 text-white font-bold"
              style={{ fontSize: "16px", lineHeight: "1.2" }}
            >
              KONTAKT
            </h3>
            <div className="space-y-4">
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-[16px] transition-colors py-1 hover:text-cyan-bright"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {contact.phoneLabel || contact.phone}
                </a>
              )}

              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-[16px] transition-colors py-1 hover:text-cyan-bright"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {contact.email}
                </a>
              )}

              {contact.address && (
                <div className="flex items-start gap-3 text-[16px] py-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <address className="not-italic">
                    {contact.address}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-4 py-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span>{finalCopyright}</span>
            <span className="hidden sm:inline">·</span>
            <span>Geschäftsführer: Kober Swetlana</span>
          </div>

          <nav className="flex items-center gap-6" aria-label="Rechtliche Links">
            {legalLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] transition-colors py-2 hover:text-cyan-bright"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Made with love by arka */}
      <div className="py-4" style={{ background: "#15222e" }}>
        <a
          href="https://top.arka-media.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-[14px] transition-opacity hover:opacity-80"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <span>Made with</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
            <path d="M0 3.26784C0 4.22421 0.386105 5.0809 0.997666 5.67899H0.994968L1.10162 5.78012C1.10702 5.78445 1.11107 5.78879 1.11512 5.79312L5.62015 10L10.005 5.68044H10.0023C10.6139 5.08235 11 4.22421 11 3.26784C11 1.46345 9.63243 0 7.94624 0C6.94453 0 6.06048 0.509653 5.5 1.27219C4.93952 0.509653 4.05547 0 3.05376 0C1.36757 0 0 1.46345 0 3.26784Z" fill="#D72329" />
          </svg>
          <span>by</span>
          <span className="inline-flex items-center">
            <Image src="/images/arka-a.png" alt="" width={80} height={72} className="h-[14px] w-auto" />
            <Image src="/images/arka-rka.png" alt="arka" width={171} height={72} className="h-[14px] w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          </span>
        </a>
      </div>
    </footer>
  );
}

