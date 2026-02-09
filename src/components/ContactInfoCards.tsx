import { ReactNode } from "react";

interface ContactInfoItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  href?: string;
}

interface ContactInfoCardsProps {
  items: ContactInfoItem[];
  className?: string;
}

export default function ContactInfoCards({ items, className = "" }: ContactInfoCardsProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, idx) => {
        const content = (
          <>
            <div className="w-12 h-12 rounded-full bg-[#E0F7FA] flex items-center justify-center text-[#00838F] flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <div style={{ fontSize: "18px", fontWeight: 600, color: "#0D2137" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "15px", color: "#78909C" }}>
                {item.subtitle}
              </div>
            </div>
          </>
        );

        if (item.href) {
          return (
            <a
              key={idx}
              href={item.href}
              className="flex items-center gap-4 p-5 rounded-[16px] bg-white border border-[#E0E7E9] transition-all hover:border-[#4DD0E1] hover:shadow-md"
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={idx}
            className="flex items-center gap-4 p-5 rounded-[16px] bg-white border border-[#E0E7E9]"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
