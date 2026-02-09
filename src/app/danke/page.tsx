"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DankeContent() {
  const searchParams = useSearchParams();
  const anfragenId = searchParams.get("id");

  return (
    <section
      className="min-h-[calc(100vh-80px)] flex items-center justify-center"
      style={{
        background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)",
        padding: "80px 24px",
      }}
    >
      <div className="max-w-[600px] text-center">
        <div
          className="mx-auto mb-8 w-24 h-24 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)" }}
        >
          <svg className="w-12 h-12 text-[#66BB6A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "#0D2137",
          }}
        >
          Vielen Dank!
        </h1>

        <p className="mb-3" style={{ fontSize: "20px", color: "#455A64", lineHeight: 1.6 }}>
          Ihre Anfrage ist bei uns eingegangen. Wir melden uns in der Regel innerhalb von 2 Stunden bei Ihnen.
        </p>

        {anfragenId && (
          <div
            className="inline-block px-6 py-3 rounded-[12px] mb-8"
            style={{ background: "#E0F7FA", border: "1px solid rgba(77,208,225,0.3)" }}
          >
            <span style={{ fontSize: "14px", color: "#78909C" }}>Anfrage-ID: </span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: "#00838F" }}>
              {anfragenId}
            </span>
          </div>
        )}

        <p className="mb-10" style={{ fontSize: "18px", color: "#78909C", lineHeight: 1.6 }}>
          Falls Sie uns vorher erreichen möchten:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+4930610850625"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[16px] font-semibold transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            030 610 850 625
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#00838F] text-[#00838F] rounded-full text-[16px] font-semibold hover:bg-[#E0F7FA] transition-all"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function DankePage() {
  return (
    <Suspense fallback={
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center" style={{ background: "linear-gradient(170deg, #F7FAFA 0%, #E0F2F1 40%, #FFF8F0 100%)" }}>
        <div className="text-center">
          <p style={{ fontSize: "20px", color: "#455A64" }}>Laden...</p>
        </div>
      </section>
    }>
      <DankeContent />
    </Suspense>
  );
}
