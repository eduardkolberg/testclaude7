"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  id: string;
}

function FAQItem({ question, answer, id }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = `faq-answer-${id}`;
  const questionId = `faq-question-${id}`;

  return (
    <div className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm">
      <button
        className="w-full px-6 py-5 text-left text-lg font-semibold text-[#13263f] flex justify-between items-center hover:bg-[#F5F7F9] transition-colors min-h-[56px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="px-6 pb-5 text-[#333435] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-[#E8F5FC] py-[60px] px-5" aria-labelledby="faq-title">
      <div className="max-w-[1200px] mx-auto">
        <h2 id="faq-title" className="text-[32px] font-bold text-[#13263f] mb-8 text-center">
          Häufig gestellte Fragen
        </h2>

        <FAQItem
          id="1"
          question="Wie ist die ärztliche Versorgung in der Wohngemeinschaft?"
          answer="Unsere Bewohner werden regelmäßig von Hausärzten betreut. Bei Bedarf organisieren wir Facharzttermine und begleiten zu den Terminen. Im Notfall ist eine schnelle medizinische Versorgung gewährleistet."
        />

        <FAQItem
          id="2"
          question="Wer ist für die Kostenübernahme zuständig?"
          answer="Die Kosten werden in der Regel von den Pflegekassen und dem Sozialhilfeträger übernommen. Wir unterstützen Sie gerne bei der Antragstellung und beraten Sie ausführlich zu den Finanzierungsmöglichkeiten."
        />

        <FAQItem
          id="3"
          question="Welche Rolle spielt der Betreuer/die Betreuerin?"
          answer="Der rechtliche Betreuer vertritt die Interessen des Bewohners in rechtlichen und finanziellen Angelegenheiten. Er arbeitet eng mit uns zusammen, um das Wohl des Bewohners sicherzustellen."
        />
      </div>
    </section>
  );
}
