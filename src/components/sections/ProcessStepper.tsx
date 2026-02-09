"use client";

import { useInView } from "@/hooks/useInView";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepperProps {
  items: StepItem[];
  animated?: boolean;
  className?: string;
}

const fontHeadings = { fontFamily: "var(--font-outfit), 'Outfit', sans-serif" };
const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };
const fontData = { fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" };

export default function ProcessStepper({ items, animated = true, className = "" }: ProcessStepperProps) {
  const stepper = useInView(0.2);
  const stepperLine = useInView(0.4);
  const isVisible = animated ? stepper.visible : true;
  const lineVisible = animated ? stepperLine.visible : true;

  return (
    <div className={`relative grid md:grid-cols-3 gap-12 ${className}`} ref={(el) => {
      // Attach both refs
      if (animated && el) {
        (stepper.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (stepperLine.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }
    }}>
      {/* Connecting line (desktop) */}
      <div className="hidden md:block absolute top-7 left-[15%] right-[15%] h-[2px] bg-[#E0E7E9]" />
      <div
        className="hidden md:block absolute top-7 left-[15%] h-[2px] bg-[#4DD0E1] z-[1]"
        style={{
          width: lineVisible ? "70%" : "0%",
          transition: "width 1.5s ease-out",
        }}
      />

      {items.map((step, idx) => (
        <div
          key={step.number}
          className="relative text-center z-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.6s ease-out ${idx * 0.15}s`,
          }}
        >
          <div
            className="w-14 h-14 rounded-full text-white flex items-center justify-center mx-auto mb-6 relative z-[2]"
            style={{
              background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 50%, #005662 100%)",
              boxShadow: "0 4px 16px rgba(0,131,143,0.3)",
              ...fontData,
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            {step.number}
          </div>
          <h3 className="mb-4" style={{ ...fontHeadings, fontSize: "20px", fontWeight: 600, color: "#0D2137" }}>
            {step.title}
          </h3>
          <p className="max-w-[280px] mx-auto" style={{ ...fontBody, fontSize: "16px", color: "#455A64", lineHeight: 1.6 }}>
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
