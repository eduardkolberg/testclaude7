import { ReactNode } from "react";

interface InfoBoxProps {
  children: ReactNode;
  variant?: "info" | "warning";
  icon?: ReactNode;
  className?: string;
}

const variants = {
  info: {
    bg: "#E0F7FA",
    color: "#005662",
    iconColor: "#00838F",
  },
  warning: {
    bg: "#FFF8F0",
    color: "#5D4037",
    iconColor: "#F5A623",
  },
};

export default function InfoBox({ children, variant = "info", icon, className = "" }: InfoBoxProps) {
  const v = variants[variant];

  const defaultIcon = (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: v.iconColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div
      className={`p-5 rounded-[12px] flex items-start gap-3 ${className}`}
      style={{ background: v.bg }}
    >
      {icon || defaultIcon}
      <div style={{ fontSize: "15px", color: v.color }}>
        {children}
      </div>
    </div>
  );
}
