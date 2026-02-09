"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Map of path segments to display titles */
const titleMap: Record<string, string> = {
  leistungen: "Leistungen",
  alltagsunterstuetzung: "Alltagsunterstützung",
  "betreuung-begleitung": "Betreuung & Begleitung",
  "entlastung-angehoerige": "Entlastung für Angehörige",
  "45b": "§45b SGB XI",
  entlastungsbetrag: "Entlastungsbetrag erklärt",
  finanzierung: "Finanzierung",
  ablauf: "So läuft es ab",
  abrechnung: "Abrechnung",
  faq: "FAQ",
  "ueber-uns": "Über uns",
  "qualitaet-vertrauen": "Qualität & Vertrauen",
  kontakt: "Kontakt",
  einsatzgebiet: "Einsatzgebiet",
  impressum: "Impressum",
  datenschutz: "Datenschutz",
  danke: "Vielen Dank",
  karriere: "Karriere",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const slugs = pathname.split("/").filter(Boolean);

  const items = slugs.map((slug, index) => {
    const href = "/" + slugs.slice(0, index + 1).join("/");
    const title = titleMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
    return { title, href };
  });

  return (
    <nav className="bg-gradient-to-r from-[#E6F8FB] to-[#F0FDFA] pt-[96px] pb-4 border-b border-cyan-100" aria-label="Breadcrumb">
      <div className="max-w-[1200px] mx-auto px-5">
        <ol className="flex flex-wrap items-center gap-3 text-base" role="list">
          <li className="flex items-center gap-3">
            <Link
              href="/"
              className="text-[#1a365d] hover:text-cyan-600 transition-colors"
            >
              Startseite
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-3">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {index === items.length - 1 ? (
                <span className="text-[#2D3748] font-medium" aria-current="page">{item.title}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[#1a365d] hover:text-cyan-600 transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
