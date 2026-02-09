"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const leistungenDropdown = [
  {
    title: "Alltagsunterstützung",
    icon: "home",
    items: [
      { label: "Haushaltshilfe", href: "/leistungen/alltagsunterstuetzung/haushaltshilfe" },
      { label: "Einkaufshilfe & Besorgungen", href: "/leistungen/alltagsunterstuetzung/einkaufshilfe" },
      { label: "Unterstützung bei Mahlzeiten", href: "/leistungen/alltagsunterstuetzung/mahlzeiten" },
    ],
  },
  {
    title: "Betreuung & Begleitung",
    icon: "people",
    items: [
      { label: "Begleitung zu Terminen", href: "/leistungen/betreuung-begleitung/termine" },
      { label: "Spaziergänge & Freizeit", href: "/leistungen/betreuung-begleitung/freizeitgestaltung" },
    ],
  },
  {
    title: "Entlastung für Angehörige",
    icon: "heart",
    items: [
      { label: "Stundenweise Entlastung", href: "/leistungen/entlastung-angehoerige/stundenweise" },
      { label: "Tagesstruktur & Organisation", href: "/leistungen/entlastung-angehoerige/tagesstruktur" },
    ],
  },
];

const abrechnungDropdown = [
  {
    title: "Entlastungsbetrag erklärt",
    icon: "info",
    items: [
      { label: "Was ist §45b SGB XI?", href: "/entlastungsbetrag-abrechnung/erklaerung/was-ist-paragraph-45b" },
      { label: "Anspruch & Pflegegrad (1–5)", href: "/entlastungsbetrag-abrechnung/erklaerung/anspruch-pflegegrad" },
    ],
  },
  {
    title: "Finanzierung",
    icon: "euro",
    items: [
      { label: "131 € monatlich nutzen", href: "/entlastungsbetrag-abrechnung/finanzierung/131-euro-nutzung" },
      { label: "Kombinationen & Restbeträge", href: "/entlastungsbetrag-abrechnung/finanzierung/kombinationen" },
    ],
  },
  {
    title: "So läuft es ab",
    icon: "steps",
    items: [
      { label: "Ihr Weg zur Hilfe", href: "/entlastungsbetrag-abrechnung/ablauf/weg-zur-hilfe" },
      { label: "Erstgespräch & Bedarfsermittlung", href: "/entlastungsbetrag-abrechnung/ablauf/erstgespraech" },
    ],
  },
  {
    title: "Abrechnung",
    icon: "receipt",
    items: [
      { label: "Direktabrechnung", href: "/entlastungsbetrag-abrechnung/pflegekasse/direktabrechnung" },
      { label: "Kostenerstattung", href: "/entlastungsbetrag-abrechnung/pflegekasse/kostenerstattung" },
    ],
  },
];

const ueberUnsDropdown = [
  {
    title: "Unternehmen",
    icon: "building",
    items: [
      { label: "Tonus Dienst GmbH", href: "/ueber-uns/tonus-dienst" },
      { label: "Qualität & Vertrauen", href: "/ueber-uns/qualitaet" },
    ],
  },
  {
    title: "Kontakt & Gebiet",
    icon: "map",
    items: [
      { label: "Kontakt", href: "/ueber-uns/kontakt" },
      { label: "Einsatzgebiet Berlin", href: "/ueber-uns/einsatzgebiet" },
    ],
  },
  {
    title: "Karriere",
    icon: "briefcase",
    items: [
      { label: "Stellenangebote", href: "/ueber-uns/karriere" },
    ],
  },
  {
    title: "Rechtliches",
    icon: "shield",
    items: [
      { label: "Impressum", href: "/ueber-uns/rechtliches/impressum" },
      { label: "Datenschutz", href: "/ueber-uns/rechtliches/datenschutz" },
    ],
  },
];

const dropdownIcons: Record<string, React.ReactNode> = {
  home: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  people: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  heart: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  info: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>,
  euro: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 008.898 0l.506-3.541a3 3 0 00-4.834-2.437zM7.5 11.25h5.25m-5.25 3h3.75" /></svg>,
  steps: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>,
  receipt: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  building: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  map: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  briefcase: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  shield: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
};

const mobileMenuItems = [
  {
    title: "Leistungen",
    href: "/leistungen",
    children: [
      { title: "Haushaltshilfe", href: "/leistungen/alltagsunterstuetzung/haushaltshilfe" },
      { title: "Einkaufshilfe", href: "/leistungen/alltagsunterstuetzung/einkaufshilfe" },
      { title: "Mahlzeiten", href: "/leistungen/alltagsunterstuetzung/mahlzeiten" },
      { title: "Arztbegleitung", href: "/leistungen/betreuung-begleitung/termine" },
      { title: "Spaziergänge", href: "/leistungen/betreuung-begleitung/freizeitgestaltung" },
      { title: "Entlastung", href: "/leistungen/entlastung-angehoerige" },
    ],
  },
  {
    title: "§45b SGB XI & Abrechnung",
    href: "/entlastungsbetrag-abrechnung",
    children: [
      { title: "Was ist §45b SGB XI?", href: "/entlastungsbetrag-abrechnung/erklaerung/was-ist-paragraph-45b" },
      { title: "Anspruch & Pflegegrad", href: "/entlastungsbetrag-abrechnung/erklaerung/anspruch-pflegegrad" },
      { title: "131 € pro Monat", href: "/entlastungsbetrag-abrechnung/finanzierung/131-euro-nutzung" },
      { title: "Kombinationen & Restbeträge", href: "/entlastungsbetrag-abrechnung/finanzierung/kombinationen" },
      { title: "Ihr Weg zur Hilfe", href: "/entlastungsbetrag-abrechnung/ablauf/weg-zur-hilfe" },
      { title: "Erstgespräch", href: "/entlastungsbetrag-abrechnung/ablauf/erstgespraech" },
      { title: "Direktabrechnung", href: "/entlastungsbetrag-abrechnung/pflegekasse/direktabrechnung" },
      { title: "Kostenerstattung", href: "/entlastungsbetrag-abrechnung/pflegekasse/kostenerstattung" },
    ],
  },
  {
    title: "Über uns",
    href: "/ueber-uns",
    children: [
      { title: "Tonus Dienst GmbH", href: "/ueber-uns/tonus-dienst" },
      { title: "Qualität & Vertrauen", href: "/ueber-uns/qualitaet" },
      { title: "Kontakt", href: "/ueber-uns/kontakt" },
      { title: "Einsatzgebiet Berlin", href: "/ueber-uns/einsatzgebiet" },
      { title: "Karriere", href: "/ueber-uns/karriere" },
      { title: "Impressum", href: "/ueber-uns/rechtliches/impressum" },
      { title: "Datenschutz", href: "/ueber-uns/rechtliches/datenschutz" },
    ],
  },
];

export default function Navigation() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  const handleBlockClick = (href: string) => (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".dd-link")) return;
    router.push(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-white shadow-[0_1px_3px_rgba(0,131,143,0.08)]"
    : "bg-transparent";

  const textColor = scrolled ? "text-[#455A64]" : "text-[#0D2137]";
  const hoverColor = "hover:text-[#00838F]";

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${headerBg}`}
      style={{ height: "80px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5" aria-label="Tonus Dienst - Zur Startseite">
          <Image
            src="/images/tonus-icon.png"
            alt=""
            width={670}
            height={630}
            priority
            className="h-[56px] w-auto"
            style={{ height: "56px", width: "auto" }}
          />
          <Image
            src="/images/tonus-text.png"
            alt="Tonus Dienst"
            width={1831}
            height={179}
            className="hidden sm:block h-[17px] w-auto"
            style={{ height: "17px", width: "auto" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 ml-8 relative" aria-label="Hauptnavigation">
          {/* Leistungen with mega dropdown */}
          <div
            className="static"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/leistungen"
              className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-[16px] font-semibold ${textColor} ${hoverColor} transition-colors`}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Leistungen
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Mega Dropdown */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <div className="bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,131,143,0.18)] overflow-hidden" style={{ width: "580px" }}>
                {/* Top row: 2 columns */}
                <div className="grid grid-cols-2">
                  {leistungenDropdown.slice(0, 2).map((col, idx) => (
                    <div
                      key={col.title}
                      className="dd-block p-5 rounded-[8px] cursor-pointer"
                      onClick={handleBlockClick(col.items[0].href)}
                      style={{
                        borderRight: idx === 0 ? "1px solid #E0E7E9" : "none",
                        borderBottom: "1px solid #E0E7E9",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00838F] flex-shrink-0">
                          {dropdownIcons[col.icon]}
                        </div>
                        <h4
                          className="text-[14px] font-bold text-[#0D2137]"
                          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        >
                          {col.title}
                        </h4>
                      </div>
                      <ul className="space-y-0.5 ml-[42px]">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="dd-link block px-3 py-2 rounded-[8px] text-[14px] text-[#455A64]"
                              style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* Bottom row: full width */}
                {leistungenDropdown.slice(2).map((col) => (
                  <div key={col.title} className="dd-block-row p-5 border-b border-[#E0E7E9] cursor-pointer" onClick={handleBlockClick(col.items[0].href)}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00838F] flex-shrink-0">
                        {dropdownIcons[col.icon]}
                      </div>
                      <h4
                        className="text-[14px] font-bold text-[#0D2137]"
                        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                      >
                        {col.title}
                      </h4>
                    </div>
                    <div className="flex gap-1 ml-[42px]">
                      {col.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="dd-link px-3 py-2 rounded-[8px] text-[14px] text-[#455A64]"
                          style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                {/* Bottom CTA banner */}
                <div className="px-5 py-3.5 bg-[#F7FAFA] flex items-center justify-between">
                  <span className="text-[13px] text-[#78909C]" style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}>
                    Abrechnung über die Pflegekasse möglich
                  </span>
                  <Link
                    href="/leistungen"
                    className="text-[13px] font-semibold text-[#00838F] hover:underline"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    Alle Leistungen &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* §45b SGB XI & Abrechnung with mega dropdown */}
          <div
            className="static"
            onMouseEnter={() => setDropdown2Open(true)}
            onMouseLeave={() => setDropdown2Open(false)}
          >
            <Link
              href="/entlastungsbetrag-abrechnung"
              className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-[16px] font-semibold ${textColor} ${hoverColor} transition-colors`}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              §45b & Abrechnung
              <svg className={`w-4 h-4 transition-transform ${dropdown2Open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Mega Dropdown */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${dropdown2Open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <div className="bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,131,143,0.18)] overflow-hidden" style={{ width: "580px" }}>
                {/* Grid 2x2 */}
                <div className="grid grid-cols-2">
                  {abrechnungDropdown.map((col, idx) => (
                    <div
                      key={col.title}
                      className="dd-block p-5 rounded-[8px] cursor-pointer"
                      onClick={handleBlockClick(col.items[0].href)}
                      style={{
                        borderRight: idx % 2 === 0 ? "1px solid #E0E7E9" : "none",
                        borderBottom: idx < 2 ? "1px solid #E0E7E9" : "none",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00838F] flex-shrink-0">
                          {dropdownIcons[col.icon]}
                        </div>
                        <h4
                          className="text-[14px] font-bold text-[#0D2137]"
                          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        >
                          {col.title}
                        </h4>
                      </div>
                      <ul className="space-y-0.5 ml-[42px]">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="dd-link block px-3 py-2 rounded-[8px] text-[14px] text-[#455A64]"
                              style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* Bottom CTA banner */}
                <div className="px-5 py-3.5 bg-[#F7FAFA] border-t border-[#E0E7E9] flex items-center justify-between">
                  <span className="text-[13px] text-[#78909C]" style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}>
                    131 € monatlich stehen Ihnen zu
                  </span>
                  <Link
                    href="/entlastungsbetrag-abrechnung"
                    className="text-[13px] font-semibold text-[#00838F] hover:underline"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    Alle Infos &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Über uns with mega dropdown */}
          <div
            className="static"
            onMouseEnter={() => setDropdown3Open(true)}
            onMouseLeave={() => setDropdown3Open(false)}
          >
            <Link
              href="/ueber-uns"
              className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-[16px] font-semibold ${textColor} ${hoverColor} transition-colors`}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Über uns
              <svg className={`w-4 h-4 transition-transform ${dropdown3Open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Mega Dropdown */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ${dropdown3Open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <div className="bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,131,143,0.18)] overflow-hidden" style={{ width: "520px" }}>
                {/* Grid 2x2 */}
                <div className="grid grid-cols-2">
                  {ueberUnsDropdown.map((col, idx) => (
                    <div
                      key={col.title}
                      className="dd-block p-5 rounded-[8px] cursor-pointer"
                      onClick={handleBlockClick(col.items[0].href)}
                      style={{
                        borderRight: idx % 2 === 0 ? "1px solid #E0E7E9" : "none",
                        borderBottom: idx < 2 ? "1px solid #E0E7E9" : "none",
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#00838F] flex-shrink-0">
                          {dropdownIcons[col.icon]}
                        </div>
                        <h4
                          className="text-[14px] font-bold text-[#0D2137]"
                          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        >
                          {col.title}
                        </h4>
                      </div>
                      <ul className="space-y-0.5 ml-[42px]">
                        {col.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="dd-link block px-3 py-2 rounded-[8px] text-[14px] text-[#455A64]"
                              style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* Bottom CTA banner */}
                <div className="px-5 py-3.5 bg-[#F7FAFA] border-t border-[#E0E7E9] flex items-center justify-between">
                  <span className="text-[13px] text-[#78909C]" style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}>
                    Pflege ist Vertrauenssache
                  </span>
                  <Link
                    href="/ueber-uns"
                    className="text-[13px] font-semibold text-[#00838F] hover:underline"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    Mehr über uns &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav >

        {/* Right side CTAs */}
        < div className="hidden lg:flex items-center gap-3" >
          {/* Phone CTA - outline */}
          < a
            href="tel:+4930610850625"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#00838F] text-[#00838F] rounded-full text-[15px] font-semibold hover:bg-[#E0F7FA] transition-all"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }
            }
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            030 610 850 625
          </a >

          {/* Kontakt CTA - filled */}
          < Link
            href="/ueber-uns/kontakt"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-[15px] font-semibold transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            }}
          >
            Kontakt
            < svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-3 rounded-[8px] hover:bg-[#E0F7FA] text-[#455A64] min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {
        mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-[999] overflow-y-auto">
            <nav className="p-6 space-y-2" aria-label="Mobile Navigation">
              {mobileMenuItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className="flex-1 py-3 px-4 text-[18px] font-semibold text-[#0D2137] hover:text-[#00838F] rounded-[8px] hover:bg-[#F7FAFA] transition-colors"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileSubOpen(mobileSubOpen === item.title ? null : item.title)}
                        className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-[#78909C] hover:text-[#00838F] transition-colors"
                        aria-label={`${item.title} Untermenü`}
                      >
                        <svg className={`w-5 h-5 transition-transform ${mobileSubOpen === item.title ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {item.children && mobileSubOpen === item.title && (
                    <div className="ml-4 pl-4 border-l-2 border-[#E0E7E9] space-y-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2.5 px-3 text-[16px] text-[#455A64] hover:text-[#00838F] hover:bg-[#F7FAFA] rounded-[8px] transition-colors"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-3 border-t border-[#E0E7E9] mt-4">
                <a
                  href="tel:+4930610850625"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-[#00838F] text-[#00838F] rounded-[12px] text-[17px] font-bold transition-colors hover:bg-[#E0F7FA]"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  030 610 850 625
                </a>
                <Link
                  href="/ueber-uns/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 text-white rounded-[12px] text-[17px] font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                    fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  }}
                >
                  Kontakt
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        )
      }
    </header >
  );
}
