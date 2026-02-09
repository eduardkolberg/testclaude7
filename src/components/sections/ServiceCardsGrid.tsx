"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import Checklist from "@/components/Checklist";

interface ServiceCardItem {
  icon: ReactNode;
  title: string;
  description?: string;
  items: string[];
  href: string;
  linkLabel?: string;
}

interface ServiceCardsGridProps {
  items: ServiceCardItem[];
  columns?: 2 | 3;
  animated?: boolean;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

export default function ServiceCardsGrid({ items, columns = 3, animated = true, className = "" }: ServiceCardsGridProps) {
  const { ref, visible } = useInView(0.15);
  const isVisible = animated ? visible : true;

  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-8 ${className}`} ref={animated ? ref : undefined}>
      {items.map((card, idx) => (
        <div
          key={card.title}
          className="group bg-white border border-[#E0E7E9] rounded-[16px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.6s ease-out ${idx * 0.1}s`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,131,143,0.18)";
            e.currentTarget.style.borderColor = "#4DD0E1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "#E0E7E9";
          }}
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 100%)" }}>
            {card.icon}
          </div>

          <h3 className="mb-4" style={{ ...fontHeadings, fontSize: "var(--font-size-h3)", fontWeight: 600, color: "#0D2137", lineHeight: 1.3 }}>
            {card.title}
          </h3>

          {card.description && (
            <p className="mb-4" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
              {card.description}
            </p>
          )}

          <Checklist items={card.items} size="sm" className="mb-8 flex-grow" />

          <Link
            href={card.href}
            className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
            style={{ ...fontBody, fontSize: "16px", fontWeight: 600, color: "#00838F" }}
          >
            {card.linkLabel || "Mehr erfahren"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
