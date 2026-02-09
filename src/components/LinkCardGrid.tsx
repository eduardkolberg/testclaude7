import { ReactNode } from "react";
import Link from "next/link";

interface LinkCardItem {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

interface LinkCardGridProps {
  items: LinkCardItem[];
  columns?: 2 | 3;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };

export default function LinkCardGrid({ items, columns = 3, className = "" }: LinkCardGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-6 ${className}`}>
      {items.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group p-6 rounded-[16px] border border-[#E0E7E9] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,131,143,0.18)] hover:border-[#4DD0E1]"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#00838F]" style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 100%)" }}>
            {link.icon}
          </div>
          <h3 className="mb-2" style={{ ...fontHeadings, fontSize: "20px", fontWeight: 600, color: "#0D2137" }}>
            {link.title}
          </h3>
          <p style={{ fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
            {link.description}
          </p>
          <span className="inline-flex items-center gap-1 mt-4 text-[#00838F] font-semibold text-[15px] group-hover:gap-2 transition-all">
            {link.linkLabel || "Mehr erfahren"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
