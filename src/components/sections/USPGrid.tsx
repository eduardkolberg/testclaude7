"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface USPItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface USPGridProps {
  items: USPItem[];
  columns?: 2 | 3;
  animated?: boolean;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

export default function USPGrid({ items, columns = 3, animated = true, className = "" }: USPGridProps) {
  const { ref, visible } = useInView(0.15);
  const isVisible = animated ? visible : true;

  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-8 ${className}`} ref={animated ? ref : undefined}>
      {items.map((usp, idx) => (
        <div
          key={usp.title}
          className="bg-white p-8 rounded-[16px] border border-[#E0E7E9] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,131,143,0.12)]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.6s ease-out ${idx * 0.1}s`,
          }}
        >
          <div className="mb-4">{usp.icon}</div>
          <h3 style={{ ...fontHeadings, fontSize: "18px", fontWeight: 600, color: "#0D2137", marginBottom: "16px" }}>
            {usp.title}
          </h3>
          <p style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
            {usp.description}
          </p>
        </div>
      ))}
    </div>
  );
}
