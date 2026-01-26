import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="bg-[#E8F5FC] py-[60px] px-5 animate-pulse" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="bg-white py-[60px] px-5 animate-pulse" />,
});

// Checkmark icon
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#D5E6EB] flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="#0688B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// Section icon with background
function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-[30px] bg-[#E5F0F3] flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}

// Small icon with background
function SmallIcon({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#E5F0F3] flex items-center justify-center flex-shrink-0 ${className}`}>
      {children}
    </div>
  );
}

// Link button component
function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 border border-[#D5E6EB] rounded-full px-5 py-2 text-sm font-medium text-[#333435] hover:bg-[#E5F0F3] transition-colors"
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68A31A" strokeWidth="1.5">
        <path d="M4 8H12M12 8L8 4M12 8L8 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}

export default function GrundwertePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#E5F0F3] relative pb-0">
        <div className="max-w-[1020px] mx-auto px-4 py-[60px] sm:py-[100px] text-center">
          <h1 className="text-[32px] sm:text-[36px] lg:text-[48px] font-bold text-[#13263f] leading-tight mb-4 sm:mb-6">
            Selbstbestimmt leben: Unsere Grundwerte für Ihr Wohlbefinden
          </h1>
          <p className="text-lg sm:text-xl lg:text-[28px] leading-[1.4] text-[#333435] mb-6">
            Wohnen wie zu Hause – mit{" "}
            <strong>
              freier Pflegedienstwahl, 24-Stunden-Präsenz (nicht-medizinisch), offenen Besuchszeiten und demenzsensibler Betreuung.
            </strong>{" "}
            Mitten in der Stadt, nah am Leben.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pb-10 sm:pb-0">
            {[
              { icon: "👤", label: "Selbstbestimmung" },
              { icon: "👍", label: "Freie Pflegedienstwahl" },
              { icon: "🕐", label: "24-h Präsenz" },
              { icon: "🤝", label: "Demenz-kompetent" },
              { icon: "🏢", label: "Zentrum Braunschweig" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1 py-1 px-3">
                <span className="text-[#0688B5]">{item.icon}</span>
                <span className="font-bold text-sm text-[#333435] opacity-80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Wave decoration */}
        <div className="w-full">
          <Image
            src="/images/page_line.png"
            alt=""
            width={1920}
            height={60}
            className="w-full hidden sm:block"
            priority
          />
        </div>
      </section>

      {/* Section 1: Unsere Grundwerte */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:max-w-[540px]">
              <div className="flex items-center gap-4 mb-6">
                <SectionIcon>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M30 15L15 25v20h30V25L30 15z" stroke="#0688B5" strokeWidth="2.5"/>
                    <path d="M30 25l5 5-5 5-5-5 5-5z" fill="#68A31A"/>
                  </svg>
                </SectionIcon>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black">Unsere Grundwerte</h2>
              </div>

              <div className="space-y-3">
                {[
                  { bold: "Selbstbestimmung im Alltag:", text: "Aufstehen, Essen, Aktivitäten – nach Ihren Wünschen." },
                  { bold: "Offene Besuche:", text: "Angehörige können jederzeit kommen." },
                  { bold: "Freiheit & Sicherheit ohne Zwang:", text: "keine freiheitseinschränkenden Maßnahmen; Tür ist nicht abgeschlossen." },
                  { bold: "Würde & Privatsphäre:", text: "Ihr Zimmer ist Ihr Rückzugsort." },
                  { bold: "Mehrsprachig:", text: "Deutsch · Russisch · Polnisch." },
                  { bold: "Transparenz:", text: "klare Zuständigkeiten & faire Abläufe." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      <strong>{item.bold}</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full lg:max-w-[540px] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/room.jpg"
                alt="Zimmer in der Senioren-WG"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Was Selbstbestimmung konkret heißt */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <SectionIcon>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="20" stroke="#0688B5" strokeWidth="2.5"/>
                <path d="M20 30h20M30 20v20" stroke="#0688B5" strokeWidth="2.5"/>
                <circle cx="30" cy="30" r="6" fill="#68A31A"/>
              </svg>
            </SectionIcon>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-black">Was Selbstbestimmung konkret heißt</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-7">
            {/* Column 1: Alltag wie zu Hause */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SmallIcon>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M4 14L14 4L24 14M6 12V24H22V12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold">Alltag wie zu Hause</h3>
              </div>
              <div className="border-t border-[#D5E6EB]" />
              <div className="space-y-4 py-5">
                {[
                  { bold: "Fünf Mahlzeiten täglich", text: " – Wünsche möglich (Sonderkost nach Bedarf)" },
                  { bold: "Eigene Möbel erlaubt:", text: " Zimmer sind Ihr persönlicher Bereich." },
                  { bold: "Tagesstruktur wird mit Ihnen abgestimmt", text: " – keine starre Heimordnung." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      <strong>{item.bold}</strong>{item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Pflege nach Wahl */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SmallIcon>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M14 4v8M10 8h8M7 14c0 4 3 10 7 10s7-6 7-10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold">Pflege nach Wahl</h3>
              </div>
              <div className="border-t border-[#D5E6EB]" />
              <div className="space-y-4 py-5">
                {[
                  { bold: "Freie Wahl des ambulanten Pflegedienstes", text: " (Partner u. a. Kambaplus Pflegedienst GmbH – keine Bindung)." },
                  { bold: "Leistungen nach SGB XI", text: " (Grundpflege) und SGB V (Behandlungspflege) werden durch den Pflegedienst erbracht." },
                  { bold: "Externe Fachärzte", text: "/Therapien kommen nach Rezept ins Haus – Koordination vor Ort." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      <strong>{item.bold}</strong>{item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm opacity-75 text-[#333435] max-w-[800px] mt-2">
            * Hinweis: Unsere WG stellt nicht-medizinische 24-h-Präsenz, Hauswirtschaft und Verpflegung sicher. Medizinische Pflege erbringt der ambulante Dienst. Mehr unter{" "}
            <Link href="/leistungen-kosten/pflege-betreuung" className="underline underline-offset-4 hover:opacity-60">
              Pflege & Betreuung
            </Link>.
          </p>
        </div>
      </section>

      {/* Section 3: Rollen & Zuständigkeiten */}
      <section className="bg-[#E5F0F3] py-[60px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <SectionIcon className="bg-[#D5E6EB]">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="20" cy="20" r="8" stroke="#0688B5" strokeWidth="2"/>
                <circle cx="40" cy="20" r="8" stroke="#0688B5" strokeWidth="2"/>
                <path d="M10 45c0-8 5-12 10-12s10 4 10 12M30 45c0-8 5-12 10-12s10 4 10 12" stroke="#0688B5" strokeWidth="2"/>
                <circle cx="30" cy="38" r="6" fill="#68A31A"/>
              </svg>
            </SectionIcon>
            <h2 className="text-[24px] sm:text-[28px] font-bold text-black">Rollen & Zuständigkeiten (transparent)</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-7">
            {/* WG-Team */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SmallIcon className="bg-[#D5E6EB]">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <circle cx="10" cy="8" r="4"/>
                    <circle cx="18" cy="8" r="4"/>
                    <path d="M4 21c0-5 3-7 6-7s6 2 6 7M12 21c0-5 3-7 6-7s6 2 6 7"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold">WG-Team (Betreiber)</h3>
              </div>
              <div className="border-t border-[#D5E6EB]" />
              <div className="space-y-4 py-5">
                {[
                  { bold: "Verpflegung & Einkäufe", text: " (Wochenspeiseplan, REWE-Lieferung)." },
                  { bold: "Hauswirtschaft & Reinigung", text: " (Zimmer wöchentlich, Gemeinschaft täglich; Fenster 4×/Jahr; Grundreinigung 2×/Jahr)." },
                  { bold: "24-h Ansprechbarkeit", text: " (nicht-medizinisch), Nachtpräsenz." },
                  { text: "WLAN/TV-Einrichtung, Einzugshilfe, Organisation vor Ort." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      {item.bold && <strong>{item.bold}</strong>}{item.text}
                    </p>
                  </div>
                ))}
              </div>
              <LinkButton href="/leistungen-kosten/pflege-betreuung">Pflege & Betreuung</LinkButton>
            </div>

            {/* Ambulanter Pflegedienst */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SmallIcon className="bg-[#D5E6EB]">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M14 7v14M7 14h14" strokeLinecap="round"/>
                    <rect x="4" y="4" width="20" height="20" rx="4"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold">Ambulanter Pflegedienst</h3>
              </div>
              <div className="border-t border-[#D5E6EB]" />
              <div className="space-y-4 py-5">
                {[
                  { bold: "Grundpflege nach SGB XI.", text: "" },
                  { bold: "Behandlungspflege nach SGB V", text: " (Medikamente, Wunden, Injektionen etc.)." },
                  { text: "Begleitung/Organisation zu Ärzten bei Bedarf." },
                  { text: "Abrechnung & Kassenkommunikation." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      {item.bold && <strong>{item.bold}</strong>}{item.text}
                    </p>
                  </div>
                ))}
              </div>
              <LinkButton href="/leistungen-kosten/kosten-finanzierung">Kosten & Finanzierung</LinkButton>
            </div>

            {/* Entlastungsangebote */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SmallIcon className="bg-[#D5E6EB]">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <rect x="4" y="8" width="20" height="16" rx="2"/>
                    <path d="M8 8V6a6 6 0 1112 0v2"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold">Entlastungsangebote</h3>
              </div>
              <div className="border-t border-[#D5E6EB]" />
              <div className="space-y-4 py-5">
                {[
                  { bold: "Alltagsbegleitung", text: " (z. B. Spaziergänge) über lizenzierte Anbieter." },
                  { text: "Besuche/soziale Kontakte, individuelles Aktivieren." },
                  { bold: "Seelsorge/Psychosoziales", text: " extern organisierbar." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      {item.bold && <strong>{item.bold}</strong>}{item.text}
                    </p>
                  </div>
                ))}
              </div>
              <LinkButton href="/unser-zuhause/raeumlichkeiten">Räumlichkeiten</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Freiheit & Sicherheit */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="relative w-full lg:max-w-[540px] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/block_1.jpg"
                alt="Gemeinschaftsbereich"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                loading="lazy"
              />
            </div>

            <div className="lg:max-w-[540px]">
              <div className="flex items-center gap-4 mb-6">
                <SectionIcon>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M15 45V25l15-10 15 10v20H15z" stroke="#0688B5" strokeWidth="2.5"/>
                    <path d="M25 45V35h10v10" stroke="#0688B5" strokeWidth="2"/>
                    <circle cx="30" cy="28" r="4" fill="#68A31A"/>
                  </svg>
                </SectionIcon>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black">Freiheit & Sicherheit – ohne Zwang</h2>
              </div>

              <div className="space-y-3">
                {[
                  { bold: "Türen sind nicht verschlossen:", text: " keine freiheitsentziehenden Maßnahmen." },
                  { bold: "Spazierengehen ist erlaubt", text: " – Begleitung nach Absprache möglich." },
                  { bold: "Bad-Notruf in Planung:", text: " sensorgestützte Lösungen werden geprüft." },
                  { bold: "Demenzsensibles Umfeld:", text: " (Orientierung, Ruhe, Routinen)." },
                  { bold: "Sicherheit:", text: " Rauchmelder, Beschilderung, Erste-Hilfe-Ausstattung." },
                  { bold: "Evakuierungs-/", text: "Hygienepläne vorhanden." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      <strong>{item.bold}</strong>{item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <LinkButton href="/unser-zuhause/philosophie-konzept/gemeinschaft">Mehr zu Gemeinschaft</LinkButton>
                <LinkButton href="/unser-zuhause/philosophie-konzept/wohnumfeld">Wohnumfeld</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Verpflegung & Alltag */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:max-w-[540px]">
              <div className="flex items-center gap-4 mb-6">
                <SectionIcon>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="10" y="15" width="40" height="30" rx="3" stroke="#0688B5" strokeWidth="2.5"/>
                    <path d="M10 25h40M20 15v-5M40 15v-5" stroke="#0688B5" strokeWidth="2"/>
                    <circle cx="30" cy="35" r="5" fill="#68A31A"/>
                  </svg>
                </SectionIcon>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black">Verpflegung & Alltag</h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Frühstück · Zwischenmahlzeit · Mittag · Nachmittagskaffee · Abend · Spätmahlzeit." },
                  { bold: "Wöchentliche Bestellung", text: " (z. B. REWE). Individuelle Wünsche möglich." },
                  { bold: "Wochenspeiseplan:", text: " flexible Anpassungen bei Unverträglichkeiten/Diäten." },
                  { text: "Feste & Anlässe werden gemeinsam gestaltet (Deko, kleine Extras)." },
                  { bold: "Viele Bewohner sind bettlägerig:", text: " Ausflüge derzeit nur im Einzelfall mit Begleitung." },
                  { bold: "Kommunikation:", text: " Deutsch · Russisch · Polnisch." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">
                      {item.bold && <strong>{item.bold}</strong>}{item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <LinkButton href="/unser-zuhause/alltag-leben">Mehr zu Alltag & Leben</LinkButton>
                <LinkButton href="/leistungen-kosten/servicepaket/verpflegung">Verpflegung & Hauswirtschaft</LinkButton>
              </div>
            </div>

            <div className="relative w-full lg:max-w-[540px] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/block_2.jpg"
                alt="Küche und Essbereich"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Hausordnung & Regeln */}
      <section className="py-[60px] lg:py-[100px]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="relative w-full lg:max-w-[540px] h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/block_3.jpg"
                alt="Wohnbereich"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                loading="lazy"
              />
            </div>

            <div className="lg:max-w-[540px]">
              <div className="flex items-center gap-4 mb-6">
                <SectionIcon>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <rect x="12" y="8" width="36" height="44" rx="3" stroke="#0688B5" strokeWidth="2.5"/>
                    <path d="M20 20h20M20 30h20M20 40h12" stroke="#0688B5" strokeWidth="2"/>
                    <circle cx="42" cy="40" r="5" fill="#68A31A"/>
                  </svg>
                </SectionIcon>
                <h2 className="text-[24px] sm:text-[28px] font-bold text-black">Hausordnung & Regeln (Auszug)</h2>
              </div>

              <div className="space-y-3">
                {[
                  { text: "Rauchen in Zimmern verboten." },
                  { text: "Haustiere nicht gestattet." },
                  { text: "Kleingeräte ok; keine Induktionsplatten/Toaster im Zimmer (Brandschutz)." },
                  { text: "Besuche jederzeit möglich – Rücksicht auf Mitbewohner." },
                  { text: "WLAN & IPTV vorhanden; Smart-TV/Streaming unterstützt." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-lg">
                    <CheckIcon />
                    <p className="text-[#333435]">{item.text}</p>
                  </div>
                ))}
                <div className="flex items-start gap-3 text-lg">
                  <CheckIcon />
                  <Link href="/downloads/hausordnung.pdf" className="text-[#13263f] underline underline-offset-4 hover:opacity-60">
                    Vollständige Regeln: Hausordnung (PDF).
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Suspense fallback={<div className="bg-[#E8F5FC] py-[60px] px-5" />}>
        <FAQSection />
      </Suspense>

      {/* Contact Section */}
      <Suspense fallback={<div className="bg-white py-[60px] px-5" />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
