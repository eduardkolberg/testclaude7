"use client";

import { ReactNode } from "react";
import Link from "next/link";

export interface HeroSectionProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  features?: string[];
  children?: ReactNode; // For the right-side content (e.g. calculator or image)
}

export default function HeroSection({
  badge,
  title,
  titleAccent,
  subtitle,
  ctaPrimary = { label: "Kostenlos beraten lassen", href: "tel:+4930610850625" },
  ctaSecondary,
  features = [],
  children,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex items-start pt-24 sm:pt-32 pb-0 overflow-x-hidden"
      style={{
        background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)",
        minHeight: "max(680px, 90vh)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, #00838F 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 w-full pb-16 md:pb-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {badge && (
              <div
                className="hero-stagger hero-stagger-1 inline-flex items-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full mb-6 sm:mb-8 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(90deg, #E0F7FA 0%, #E0F2F1 100%)",
                  boxShadow: "0 2px 8px rgba(0,131,143,0.08)",
                  border: "1px solid rgba(77,208,225,0.3)",
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#00838F",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span>{badge}</span>
              </div>
            )}

            <h1
              className="hero-stagger hero-stagger-2 mb-6"
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "var(--font-size-h1)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#0D2137",
              }}
            >
              {title}<br />
              {titleAccent && <span style={{ color: "#00838F" }}>{titleAccent}</span>}
            </h1>

            <p
              className="hero-stagger hero-stagger-3 mb-8 max-w-[520px]"
              style={{
                fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                fontSize: "var(--font-size-body-large)",
                lineHeight: 1.6,
                color: "#455A64",
              }}
            >
              {subtitle}
            </p>

            <div className="hero-stagger hero-stagger-4 flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 text-white rounded-full transition-all hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                  boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
                  padding: "16px 32px",
                  fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  fontSize: "var(--font-size-btn)",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {ctaPrimary.label}
              </a>

              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full transition-all"
                  style={{
                    border: "2px solid #00838F",
                    color: "#00838F",
                    padding: "16px 32px",
                    background: "transparent",
                    fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                    fontSize: "var(--font-size-btn)",
                    fontWeight: 700,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E0F7FA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {ctaSecondary.label}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              )}
            </div>

            {features.length > 0 && (
              <div className="hero-stagger hero-stagger-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#66BB6A] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif", fontSize: "16px", color: "#455A64" }}>{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Custom Content / Calculator */}
          <div className="relative pt-6">
            {children}
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <svg
        className="absolute bottom-[-1px] left-0 w-full h-[60px] sm:h-[80px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-white"
        />
      </svg>
    </section>
  );
}

