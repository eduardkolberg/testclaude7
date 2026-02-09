"use client";

import { useInView } from "@/hooks/useInView";

interface StatItem {
  value: string;
  label: string;
}

interface TrustBarProps {
  items: StatItem[];
  animated?: boolean;
  className?: string;
}

const fontData = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

export default function TrustBar({ items, animated = true, className = "" }: TrustBarProps) {
  const { ref, visible } = useInView(0.3);
  const isVisible = animated ? visible : true;

  return (
    <section className={`bg-white py-14 border-b border-[#E0E7E9] ${className}`} ref={animated ? ref : undefined}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="flex flex-wrap justify-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[140px] text-center px-6 py-4"
              style={{
                borderRight: idx < items.length - 1 ? "1px solid #E0E7E9" : "none",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${idx * 0.1}s`,
              }}
            >
              <div style={{ ...fontData, fontSize: "36px", fontWeight: 700, color: "#00838F", marginBottom: "4px" }}>
                {item.value}
              </div>
              <div style={{ ...fontBody, fontSize: "16px", color: "#78909C" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
