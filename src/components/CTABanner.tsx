"use client";

import Link from "next/link";


interface CTABannerProps {
  heading?: string;
  subheading?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export default function CTABanner({
  heading = "Wir sind für Sie da.",
  subheading = "Lassen Sie sich jetzt kostenlos beraten.",
  ctaPrimary = { label: "030 610 850 625", href: "tel:+4930610850625" },
  ctaSecondary = { label: "Nachricht schreiben", href: "/kontakt" }
}: CTABannerProps) {
  const fontBody = { fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" };

  return (
    <section
      className="relative text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #4DD0E1 0%, #00838F 100%)",
        padding: "96px 0",
      }}
    >
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
          <circle cx="200" cy="150" r="200" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="1240" cy="100" r="150" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <h2
          className="mb-4"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "var(--font-size-h2)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "white",
          }}
        >
          {heading}
        </h2>

        <p
          className="mb-8 max-w-[600px] mx-auto"
          style={{
            fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
            fontSize: "var(--font-size-body-large)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a
            href={ctaPrimary.href}
            className="inline-flex items-center justify-center gap-2 bg-white rounded-full transition-all hover:-translate-y-0.5"
            style={{
              color: "#00838F",
              padding: "16px 32px",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              fontSize: "var(--font-size-btn)",
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              animation: "pulse-shadow 2.5s ease-in-out infinite",
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
                border: "2px solid white",
                color: "white",
                padding: "16px 32px",
                background: "transparent",
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontSize: "var(--font-size-btn)",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {ctaSecondary.label}
            </Link>
          )}
        </div>

        <p style={{ ...fontBody, fontSize: "16px", color: "rgba(255,255,255,0.85)" }}>
          Mo&ndash;Fr 9:00&ndash;18:00 Uhr &middot; info@ebox.berlin
        </p>
      </div>
    </section>
  );
}

