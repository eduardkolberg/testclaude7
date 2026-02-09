"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQWithSidebarProps {
  items: FAQItem[];
  sidebar?: ReactNode;
  animated?: boolean;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };
const fontData = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" };

export default function FAQWithSidebar({ items, sidebar, animated = true, className = "" }: FAQWithSidebarProps) {
  const { ref, visible } = useInView(0.15);
  const isVisible = animated ? visible : true;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const defaultSidebar = (
    <div className="hidden lg:block">
      <div
        className="sticky top-[100px] p-8 rounded-[16px]"
        style={{
          background: "linear-gradient(180deg, #F7FAFA 0%, #E0F7FA 100%)",
          border: "1px solid #E0E7E9",
        }}
      >
        <h3 className="mb-4" style={{ ...fontHeadings, fontSize: "22px", fontWeight: 700, color: "#0D2137" }}>
          Noch Fragen?
        </h3>
        <p className="mb-6" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
          Rufen Sie uns an. Wir helfen sofort.
        </p>
        <a
          href="tel:+4930610850625"
          className="flex items-center gap-3 mb-6 group"
          style={{ ...fontData, fontSize: "22px", fontWeight: 700, color: "#00838F" }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          030 610 850 625
        </a>
        <Link
          href="/kontakt"
          className="block w-full text-center py-3.5 rounded-[12px] text-white transition-all hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
            ...fontHeadings,
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Rückruf anfordern
        </Link>
      </div>
    </div>
  );

  return (
    <div className={className} ref={animated ? ref : undefined}>
      <div className="grid lg:grid-cols-[1fr_320px] gap-12">
        {/* FAQ accordion */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease-out",
          }}
        >
          {items.map((faq, idx) => (
            <div key={idx} className="border-b border-[#E0E7E9]" style={{ padding: "8px 0" }}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                style={{
                  ...fontHeadings,
                  fontSize: "18px",
                  fontWeight: 600,
                  color: openFaq === idx ? "#00838F" : "#0D2137",
                  background: "none",
                  border: "none",
                  padding: "12px 0",
                }}
                aria-expanded={openFaq === idx}
              >
                <span>{faq.q}</span>
                <span
                  className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full transition-all"
                  style={{
                    transform: openFaq === idx ? "rotate(45deg)" : "none",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    color: openFaq === idx ? "#00838F" : "#78909C",
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
                  gridTemplateRows: openFaq === idx ? "1fr" : "0fr",
                  opacity: openFaq === idx ? 1 : 0,
                  transition: "grid-template-rows 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease",
                }}
              >
                <div className="overflow-hidden">
                  <p className="pt-2 pb-4" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.65 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden mt-8 p-6 rounded-[16px] text-center" style={{ background: "linear-gradient(180deg, #F7FAFA 0%, #E0F7FA 100%)", border: "1px solid #E0E7E9" }}>
          <p className="mb-4" style={{ ...fontHeadings, fontSize: "18px", fontWeight: 700, color: "#0D2137" }}>Noch Fragen?</p>
          <a
            href="tel:+4930610850625"
            className="inline-flex items-center justify-center gap-2 w-full py-4 text-white rounded-[12px] text-[17px] font-bold"
            style={{ background: "linear-gradient(135deg, #00838F 0%, #005662 100%)", fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            030 610 850 625
          </a>
        </div>

        {/* Sidebar */}
        {sidebar || defaultSidebar}
      </div>
    </div>
  );
}
