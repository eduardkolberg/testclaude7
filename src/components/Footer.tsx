import Link from "next/link";

const footerLinks = {
  "Unser Zuhause": [
    { title: "Philosophie & Konzept", href: "/unser-zuhause/philosophie-konzept" },
    { title: "Unsere Einrichtung", href: "/unser-zuhause/raeumlichkeiten" },
    { title: "Unser Team", href: "/information-kontakt/standort-team/team" },
    { title: "Karriere", href: "#" },
  ],
  "Leistungen & Kosten": [
    { title: "Pflege & Betreuung", href: "/leistungen-kosten/pflege-betreuung" },
    { title: "Therapieangebote", href: "#" },
    { title: "Freizeitgestaltung", href: "/leistungen-kosten/servicepaket/freizeitgestaltung" },
    { title: "Kosten & Finanzierung", href: "/leistungen-kosten/kosten-finanzierung" },
  ],
  "Service & Info": [
    { title: "Häufige Fragen", href: "/information-kontakt/weg-zu-uns/faq" },
    { title: "Downloads", href: "/information-kontakt/weg-zu-uns/downloads" },
    { title: "Aktuelles", href: "#" },
    { title: "Kontakt", href: "/information-kontakt/kontakt" },
  ],
  "Rechtliches": [
    { title: "Impressum", href: "#" },
    { title: "Datenschutz", href: "#" },
    { title: "AGB", href: "#" },
    { title: "Cookie-Einstellungen", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#13263f] text-white pt-[60px] pb-[30px] px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-white/80 text-sm hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-5 text-center text-sm text-white/60">
          <p>&copy; 2025 WG Südstadt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
