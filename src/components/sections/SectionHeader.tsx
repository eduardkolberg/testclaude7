import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string | ReactNode;
  subtitle?: string;
  textColor?: "light" | "dark";
  centered?: boolean;
  maxWidth?: string;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

export default function SectionHeader({
  label,
  title,
  subtitle,
  textColor = "dark",
  centered = true,
  maxWidth = "max-w-3xl",
  className = "",
}: SectionHeaderProps) {
  const isLight = textColor === "light";
  const labelColor = isLight ? "#4DD0E1" : "#00838F";
  const titleColor = isLight ? "#FFFFFF" : "#0D2137";
  const subtitleColor = isLight ? "rgba(255,255,255,0.9)" : "#455A64";

  return (
    <div className={`${centered ? "text-center" : ""} mb-12 ${maxWidth} ${centered ? "mx-auto" : ""} ${className}`}>
      {label && (
        <p
          className="mb-3"
          style={{
            ...fontHeadings,
            fontSize: "14px",
            fontWeight: 600,
            color: labelColor,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {label}
        </p>
      )}
      {typeof title === "string" ? (
        <h2
          style={{
            ...fontHeadings,
            fontSize: "var(--font-size-h2)",
            fontWeight: 700,
            color: titleColor,
            lineHeight: 1.2,
            marginBottom: subtitle ? "16px" : undefined,
          }}
        >
          {title}
        </h2>
      ) : (
        <h2 className={subtitle ? "mb-4" : ""}>{title}</h2>
      )}
      {subtitle && (
        <p style={{ ...fontBody, fontSize: "var(--font-size-body)", color: subtitleColor, lineHeight: 1.65 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
