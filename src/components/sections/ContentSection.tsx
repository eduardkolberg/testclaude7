import { ReactNode } from "react";
import Checklist from "@/components/Checklist";

interface ContentSectionProps {
  id?: string;
  title: string;
  description: string;
  items: string[];
  index?: number;
  infoBox?: ReactNode;
  maxWidth?: string;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };

export default function ContentSection({
  id,
  title,
  description,
  items,
  index = 0,
  infoBox,
  maxWidth = "max-w-[900px]",
  className = "",
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${className}`}
      style={{
        background: index % 2 === 0 ? "white" : "#F7FAFA",
        padding: "var(--section-padding-y) 0",
      }}
    >
      <div className={`${maxWidth} mx-auto px-6 md:px-10`}>
        <h2
          className="mb-4"
          style={{
            ...fontHeadings,
            fontSize: "var(--font-size-h2)",
            fontWeight: 700,
            color: "#0D2137",
          }}
        >
          {title}
        </h2>
        <p
          className="mb-8"
          style={{ fontSize: "var(--font-size-body)", color: "#455A64", lineHeight: 1.65 }}
        >
          {description}
        </p>
        <Checklist items={items} className="mb-8" />
        {infoBox}
      </div>
    </section>
  );
}
