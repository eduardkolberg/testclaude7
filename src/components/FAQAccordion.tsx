"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      {items.map((faq, idx) => (
        <div key={idx} className="border-b border-[#E0E7E9]" style={{ padding: "8px 0" }}>
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: openIdx === idx ? "#00838F" : "#0D2137",
              background: "none",
              border: "none",
              padding: "12px 0",
            }}
            aria-expanded={openIdx === idx}
          >
            <span>{faq.q}</span>
            <span
              className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full transition-all"
              style={{
                transform: openIdx === idx ? "rotate(45deg)" : "none",
                transitionDuration: "300ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                color: openIdx === idx ? "#00838F" : "#78909C",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="8" y1="2" x2="8" y2="14" />
                <line x1="2" y1="8" x2="14" y2="8" />
              </svg>
            </span>
          </button>
          <div
            className="grid"
            style={{
              gridTemplateRows: openIdx === idx ? "1fr" : "0fr",
              opacity: openIdx === idx ? 1 : 0,
              transition: "grid-template-rows 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease",
            }}
          >
            <div className="overflow-hidden">
              <p
                className="pt-2 pb-4"
                style={{
                  fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                  fontSize: "16px",
                  color: "#455A64",
                  lineHeight: 1.65,
                }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
