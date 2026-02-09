import Link from "next/link";

export default function NotFound() {
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
          className="mx-auto mb-6"
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "120px",
            fontWeight: 700,
            lineHeight: 1,
            color: "#E0E7E9",
          }}
        >
          404
        </div>

        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            color: "#0D2137",
          }}
        >
          Seite nicht gefunden
        </h1>

        <p className="mb-8" style={{ fontSize: "18px", color: "#455A64", lineHeight: 1.6 }}>
          Die gesuchte Seite existiert leider nicht oder wurde verschoben. Keine Sorge &ndash; wir helfen Ihnen gerne weiter.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[16px] font-semibold transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zur Startseite
          </Link>

          <a
            href="tel:+4930610850625"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#00838F] text-[#00838F] rounded-full text-[16px] font-semibold hover:bg-[#E0F7FA] transition-all"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            030 610 850 625
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E0E7E9]">
          <p className="text-[15px] text-[#78909C] mb-4">Vielleicht suchen Sie nach:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Leistungen", href: "/leistungen" },
              { label: "§45b SGB XI", href: "/45b" },
              { label: "Kontakt", href: "/kontakt" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-[15px] text-[#00838F] font-semibold hover:bg-[#E0F7FA] transition-colors"
                style={{ border: "1px solid #E0E7E9" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
