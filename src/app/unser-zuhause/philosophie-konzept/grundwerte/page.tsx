"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className={`faq-icon ${isOpen ? "active" : ""}`}>▼</span>
      </div>
      <div className={`faq-answer ${isOpen ? "active" : ""}`}>
        <p className="text-[#333435] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function GrundwertePage() {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold text-[#13263f] mb-5 fade-in">
          Selbstbestimmt leben: Unsere Grundwerte
        </h1>

        <p className="text-lg leading-relaxed text-[#333435] mb-10 fade-in">
          Wir glauben an ein Leben in Würde, Freiheit und Selbstbestimmung. Unsere Grundwerte bilden das Fundament
          für ein respektvolles Miteinander und schaffen einen Raum, in dem sich jeder Mensch entfalten kann.
        </p>

        {/* Section 1: Unsere Grundwerte */}
        <div className="section-card fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-icon">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#0688B5" strokeWidth="2">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h2 className="text-[28px] font-bold text-[#13263f]">Unsere Grundwerte</h2>
              </div>
              <p className="text-base leading-relaxed text-[#333435] mb-4">
                In unserer Wohngemeinschaft steht der Mensch im Mittelpunkt. Wir fördern ein Leben,
                das geprägt ist von Respekt, Würde und individueller Freiheit.
              </p>
              <ul className="check-list">
                <li>Selbstbestimmung und Autonomie im Alltag</li>
                <li>Respektvoller Umgang miteinander</li>
                <li>Förderung individueller Fähigkeiten</li>
                <li>Teilhabe am gesellschaftlichen Leben</li>
              </ul>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop"
                alt="Gemütliches Wohnzimmer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Pflege und Alltag */}
        <div className="section-card fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="section-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#0688B5" strokeWidth="2">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <h2 className="text-[28px] font-bold text-[#13263f]">Pflege und Alltag</h2>
          </div>
          <p className="text-base leading-relaxed text-[#333435] mb-4">
            Selbstbestimmung beginnt bereits bei den kleinen Dingen des Alltags – wie der Wahl des Essens,
            der Tagesgestaltung oder der persönlichen Pflege.
          </p>
          <ul className="check-list">
            <li><strong>INDIVIDUELLE BETREUUNG:</strong> Jeder Bewohner erhält eine auf seine Bedürfnisse zugeschnittene Betreuung</li>
            <li><strong>GEMEINSAME AKTIVITÄTEN:</strong> Wir fördern das Miteinander durch gemeinsame Unternehmungen</li>
            <li><strong>PROFESSIONELLE PFLEGE:</strong> Unser qualifiziertes Team steht rund um die Uhr zur Verfügung</li>
            <li><strong>BARRIEREFREIHEIT:</strong> Alle Räume sind barrierefrei gestaltet</li>
          </ul>
        </div>

        {/* Section 3: Wohn- und Lebensraum */}
        <div className="section-card fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop"
                alt="Essbereich"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="section-icon">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#0688B5" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <h2 className="text-[28px] font-bold text-[#13263f]">Wohn- und Lebensraum</h2>
              </div>
              <p className="text-base leading-relaxed text-[#333435] mb-4">
                Unsere Räumlichkeiten sind liebevoll und funktional gestaltet. Sie bieten sowohl
                Gemeinschaftsflächen als auch Rückzugsorte für private Momente.
              </p>
              <ul className="check-list">
                <li>Helle und freundliche Gemeinschaftsräume</li>
                <li>Individuell gestaltbare Privatbereiche</li>
                <li>Zugang zu Balkon und Außenbereich</li>
                <li>Moderne und sichere Ausstattung</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Hauswirtschaft & Alltag */}
        <div className="section-card fade-in">
          <div className="flex items-center gap-3 mb-5">
            <div className="section-icon">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#0688B5" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h2 className="text-[28px] font-bold text-[#13263f]">Hauswirtschaft & Alltag</h2>
          </div>
          <p className="text-base leading-relaxed text-[#333435] mb-4">
            Die Teilhabe am alltäglichen Leben ist uns wichtig. Ob beim Kochen, bei der Hausarbeit oder
            bei Freizeitaktivitäten – wir fördern Selbstständigkeit und Gemeinschaft.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
            <ul className="check-list">
              <li>Gemeinsames Kochen und Essen</li>
              <li>Unterstützung bei hauswirtschaftlichen Tätigkeiten</li>
              <li>Einkaufsbegleitung und Organisation</li>
              <li>Wäschepflege und Reinigung</li>
            </ul>
            <div className="relative h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop"
                alt="Waschmaschinen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-[#E8F5FC] py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] font-bold text-[#13263f] mb-8 text-center">FAQ</h2>

          <FAQItem
            question="Wie ist die ärztliche Versorgung in der Wohngemeinschaft?"
            answer="Unsere Bewohner werden regelmäßig von Hausärzten betreut. Bei Bedarf organisieren wir Facharzttermine und begleiten zu den Terminen. Im Notfall ist eine schnelle medizinische Versorgung gewährleistet."
          />

          <FAQItem
            question="Wer ist für die Kostenübernahme zuständig?"
            answer="Die Kosten werden in der Regel von den Pflegekassen und dem Sozialhilfeträger übernommen. Wir unterstützen Sie gerne bei der Antragstellung und beraten Sie ausführlich zu den Finanzierungsmöglichkeiten."
          />

          <FAQItem
            question="Welche Rolle spielt der Betreuer/die Betreuerin?"
            answer="Der rechtliche Betreuer vertritt die Interessen des Bewohners in rechtlichen und finanziellen Angelegenheiten. Er arbeitet eng mit uns zusammen, um das Wohl des Bewohners sicherzustellen."
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-[60px] px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[32px] font-bold text-[#13263f] mb-10 text-center">Beratung & Kontakt</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F7F9] rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-[#13263f] mb-3">Adresse</h3>
              <p className="text-base text-[#333435] leading-relaxed">
                WG Südstadt<br />
                Musterstraße 123<br />
                38100 Braunschweig
              </p>
            </div>

            <div className="bg-[#F5F7F9] rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-[#13263f] mb-3">Telefon</h3>
              <p className="text-base text-[#333435] leading-relaxed">
                Tel: (0531) 180 54 700<br />
                Fax: (0531) 180 54 701<br />
                Mo-Fr: 9:00 - 17:00 Uhr
              </p>
            </div>

            <div className="bg-[#F5F7F9] rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-[#13263f] mb-3">E-Mail & Anfahrt</h3>
              <p className="text-base text-[#333435] leading-relaxed">
                info@wg-suedstadt.de<br />
                <a href="#" className="text-[#0688B5] hover:underline">Route berechnen</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
