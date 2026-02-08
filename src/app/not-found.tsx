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
        {/* Construction icon */}
        <div
          className="mx-auto mb-8 w-24 h-24 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)" }}
        >
          <svg
            className="w-12 h-12 text-[#00838F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437"
            />
          </svg>
        </div>

        {/* Main heading */}
        <h1
          className="mb-4"
          style={{
            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 700,
            color: "#0D2137",
            lineHeight: 1.2,
          }}
        >
          Hier wird noch fleißig gebaut!
        </h1>

        {/* Subtitle */}
        <p
          className="mb-3"
          style={{
            fontSize: "20px",
            color: "#455A64",
            lineHeight: 1.6,
          }}
        >
          Unsere digitalen Handwerker geben alles &ndash; aber Rom wurde auch nicht
          an einem Tag gebaut. Und diese Seite leider auch nicht.
        </p>

        {/* Ironic note */}
        <p
          className="mb-10"
          style={{
            fontSize: "18px",
            color: "#78909C",
            lineHeight: 1.6,
          }}
        >
          Schauen Sie in ein, zwei Wochen nochmal vorbei &ndash; dann steht hier
          etwas Schönes. Versprochen.{" "}
          <span style={{ fontSize: "16px" }}>
            (Na gut, fast versprochen.)
          </span>
        </p>

        {/* CTA buttons */}
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
            Lieber anrufen
          </a>
        </div>

        {/* Small footer note */}
        <p className="mt-12" style={{ fontSize: "14px", color: "#B0BEC5" }}>
          Pflege braucht Geduld &ndash; unsere Website offenbar auch.
        </p>
      </div>
    </section>
  );
}
