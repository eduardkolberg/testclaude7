import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load below-the-fold components
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: () => <div className="bg-[#E8F5FC] py-[60px] px-5 animate-pulse" />,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <div className="bg-white py-[60px] px-5 animate-pulse" />,
});

// Checkmark icon component
function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#D5E6EB] flex items-center justify-center flex-shrink-0 mt-1">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#0688B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// Section icon with background
function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[120px] h-[120px] rounded-[30px] bg-[#E5F0F3] flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}

// Small icon with background
function SmallIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-14 h-14 rounded-full bg-[#E5F0F3] flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}

export default function GrundwertePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f1f7f8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-[42px] font-bold text-[#13263f] leading-tight mb-6">
                Selbstbestimmt leben: Unsere Grundwerte
              </h1>
              <p className="text-lg leading-relaxed text-[#333435] mb-8">
                Wir glauben an ein Leben in Würde, Freiheit und Selbstbestimmung. Unsere Grundwerte bilden das Fundament
                für ein respektvolles Miteinander und schaffen einen Raum, in dem sich jeder Mensch entfalten kann.
              </p>
              <Link
                href="/information-kontakt/weg-zu-uns/beratung"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#002CA8] to-[#0688B5] text-white px-8 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
              >
                Beratung vereinbaren
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/dscf2158.png"
                alt="Bewohner und Betreuer in gemütlicher Atmosphäre"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Alltag wie zu Hause & Pflege nach Wahl */}
      <section className="bg-[#f1f7f8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-5 mb-10">
            <SectionIcon>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M40 20V60M20 40H60" stroke="#0688B5" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="40" cy="40" r="25" stroke="#68A31A" strokeWidth="3"/>
              </svg>
            </SectionIcon>
            <h2 className="text-[28px] font-bold text-black">Was uns auszeichnet</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Alltag wie zu Hause */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <SmallIcon>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M3.5 14L14 3.5L24.5 14M5.5 12V23.5H11V17.5H17V23.5H22.5V12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold text-black">Alltag wie zu Hause</h3>
              </div>
              <div className="h-px bg-[#D5E6EB]" />
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Fünf Mahlzeiten täglich</strong> – Wünsche möglich (Sonderkost nach Bedarf).
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Eigene Möbel erlaubt;</strong> Zimmer sind Ihr persönlicher Bereich.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Tagesstruktur wird mit Ihnen abgestimmt</strong> – keine starre Heimordnung.
                  </p>
                </div>
              </div>
            </div>

            {/* Pflege nach Wahl */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <SmallIcon>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M14 7C14 7 10.5 10.5 10.5 13C10.5 14.933 12.067 16.5 14 16.5C15.933 16.5 17.5 14.933 17.5 13C17.5 10.5 14 7 14 7Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 21H21M10.5 21V17.5M17.5 21V17.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold text-black">Pflege nach Wahl</h3>
              </div>
              <div className="h-px bg-[#D5E6EB]" />
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Freie Wahl des ambulanten Pflegedienstes</strong> (Partner u. a. Kambaplus Pflegedienst GmbH – keine Bindung).
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Leistungen nach SGB XI</strong> (Grundpflege) <strong>und SGB V</strong> (Behandlungspflege) werden durch den Pflegedienst erbracht.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Externe Fachärzte</strong>/Therapien kommen nach Rezept ins Haus – Koordination vor Ort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#6d7070] mt-8 max-w-3xl">
            * Hinweis: Unsere WG stellt nicht-medizinische 24-h-Präsenz, Hauswirtschaft und Verpflegung sicher. Medizinische Pflege erbringt der ambulante Dienst. Mehr unter{" "}
            <Link href="/leistungen-kosten/pflege-betreuung" className="underline hover:text-[#0688B5]">
              Pflege & Betreuung
            </Link>.
          </p>
        </div>
      </section>

      {/* Section 3: Rollen & Zuständigkeiten */}
      <section className="bg-[#f1f7f8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center gap-5 mb-10">
            <SectionIcon>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="30" cy="30" r="10" stroke="#0688B5" strokeWidth="3"/>
                <circle cx="50" cy="30" r="10" stroke="#0688B5" strokeWidth="3"/>
                <path d="M20 55C20 47 25 42 30 42C35 42 40 47 40 55" stroke="#0688B5" strokeWidth="3"/>
                <path d="M40 55C40 47 45 42 50 42C55 42 60 47 60 55" stroke="#0688B5" strokeWidth="3"/>
                <circle cx="40" cy="50" r="8" fill="#68A31A"/>
              </svg>
            </SectionIcon>
            <h2 className="text-[28px] font-bold text-black">Rollen & Zuständigkeiten (transparent)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WG-Team */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <SmallIcon>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <circle cx="10" cy="8" r="4"/>
                    <circle cx="18" cy="8" r="4"/>
                    <path d="M4 21C4 16 7 14 10 14C13 14 14 15 14 15C14 15 15 14 18 14C21 14 24 16 24 21"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold text-black">WG-Team (Betreiber)</h3>
              </div>
              <div className="h-px bg-[#D5E6EB]" />
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Verpflegung & Einkäufe</strong> (Wochenspeiseplan, REWE-Lieferung).
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Hauswirtschaft & Reinigung</strong> (Zimmer wöchentlich, Gemeinschaft täglich; Fenster 4×/Jahr; Grundreinigung 2×/Jahr).
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Alltagsbegleitung</strong> (Spaziergänge, Gespräche, Terminbegleitung).
                  </p>
                </div>
              </div>
            </div>

            {/* Pflegedienst */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <SmallIcon>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#0688B5" strokeWidth="1.5">
                    <path d="M14 7V21M7 14H21" strokeLinecap="round"/>
                    <rect x="4" y="4" width="20" height="20" rx="4"/>
                  </svg>
                </SmallIcon>
                <h3 className="text-lg font-bold text-black">Pflegedienst (Ihr Vertragspartner)</h3>
              </div>
              <div className="h-px bg-[#D5E6EB]" />
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Grund- & Behandlungspflege</strong> (Körperpflege, Medikamente, Wundversorgung).
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Pflegedokumentation</strong> & Kommunikation mit Ärzten/Angehörigen.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">
                    <strong>Beratung zu Pflegegraden</strong> & Hilfsmitteln.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link href="/leistungen-kosten/servicepaket/praesenz-sicherheit" className="inline-flex items-center gap-2 border border-[#D5E6EB] rounded-full px-6 py-2 text-sm font-medium text-[#333435] hover:bg-[#E5F0F3] transition-colors">
              24-Stunden-Präsenz & Sicherheit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68A31A" strokeWidth="1.5">
                <path d="M4 8H12M12 8L8 4M12 8L8 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/leistungen-kosten/servicepaket/verpflegung" className="inline-flex items-center gap-2 border border-[#D5E6EB] rounded-full px-6 py-2 text-sm font-medium text-[#333435] hover:bg-[#E5F0F3] transition-colors">
              Verpflegung & Hauswirtschaft
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68A31A" strokeWidth="1.5">
                <path d="M4 8H12M12 8L8 4M12 8L8 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Image & Content */}
      <section className="bg-[#f1f7f8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/dscf2243.png"
                  alt="Gemütlicher Gemeinschaftsraum"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg hidden lg:block">
                <Image
                  src="/images/dscf2254.png"
                  alt="Detail des Wohnbereichs"
                  fill
                  className="object-cover"
                  sizes="200px"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="flex items-center gap-5 mb-6">
                <SectionIcon>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <rect x="15" y="25" width="50" height="35" rx="4" stroke="#0688B5" strokeWidth="3"/>
                    <path d="M25 25V20C25 17 28 15 40 15C52 15 55 17 55 20V25" stroke="#0688B5" strokeWidth="3"/>
                    <circle cx="40" cy="42" r="8" fill="#68A31A"/>
                  </svg>
                </SectionIcon>
                <h2 className="text-[28px] font-bold text-black">Hausordnung & Regeln (Auszug)</h2>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Rauchen in Zimmern verboten.</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Haustiere nicht gestattet.</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Kleingeräte ok; keine Induktionsplatten/Toaster im Zimmer (Brandschutz).</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Besuche jederzeit möglich – Rücksicht auf Mitbewohner.</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">WLAN & IPTV vorhanden; Smart-TV/Streaming unterstützt.</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <Link href="/downloads/hausordnung.pdf" className="text-lg text-[#13263f] underline hover:text-[#0688B5]">
                    Vollständige Regeln: Hausordnung (PDF).
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Another Image Section */}
      <section className="bg-[#f1f7f8] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-5 mb-6">
                <SectionIcon>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M20 50L40 30L60 50" stroke="#0688B5" strokeWidth="3" strokeLinecap="round"/>
                    <path d="M25 60H55" stroke="#0688B5" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="40" cy="22" r="6" fill="#68A31A"/>
                  </svg>
                </SectionIcon>
                <h2 className="text-[28px] font-bold text-black">Wohn- und Lebensraum</h2>
              </div>

              <p className="text-lg text-[#333435] leading-relaxed mb-6">
                Unsere Räumlichkeiten sind liebevoll und funktional gestaltet. Sie bieten sowohl
                Gemeinschaftsflächen als auch Rückzugsorte für private Momente.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Helle und freundliche Gemeinschaftsräume</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Individuell gestaltbare Privatbereiche</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Zugang zu Balkon und Außenbereich</p>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <p className="text-lg text-[#333435]">Moderne und sichere Ausstattung</p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link href="/unser-zuhause/raeumlichkeiten/private-zimmer" className="inline-flex items-center gap-2 border border-[#D5E6EB] rounded-full px-6 py-2 text-sm font-medium text-[#333435] hover:bg-[#E5F0F3] transition-colors">
                  Private Zimmer
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68A31A" strokeWidth="1.5">
                    <path d="M4 8H12M12 8L8 4M12 8L8 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/unser-zuhause/raeumlichkeiten/gemeinschaftsbereiche" className="inline-flex items-center gap-2 border border-[#D5E6EB] rounded-full px-6 py-2 text-sm font-medium text-[#333435] hover:bg-[#E5F0F3] transition-colors">
                  Gemeinschaftsbereiche
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#68A31A" strokeWidth="1.5">
                    <path d="M4 8H12M12 8L8 4M12 8L8 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="/images/dscf2264.png"
                alt="Heller Wohnbereich"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lazy loaded sections */}
      <Suspense fallback={<div className="bg-[#E8F5FC] py-[60px] px-5" />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<div className="bg-white py-[60px] px-5" />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
