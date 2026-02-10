"use client";

import Link from "next/link";

export default function SidebarCTA({ topic = "Leistungen" }: { topic?: string }) {
    return (
        <div className="hidden 2xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30">
            <div
                className="rounded-2xl p-6 w-[280px]"
                style={{
                    background: "white",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                    border: "1px solid #E0E7E9",
                }}
            >
                <h3
                    style={{
                        fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#0D2137",
                        marginBottom: "8px",
                    }}
                >
                    Fragen zu {topic}?
                </h3>
                <p
                    style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        fontSize: "14px",
                        color: "#78909C",
                        marginBottom: "16px",
                    }}
                >
                    Wir beraten Sie gerne – kostenlos und unverbindlich.
                </p>

                <a
                    href="tel:+4930610850625"
                    className="flex items-center gap-2 mb-3"
                >
                    <svg className="w-4 h-4 text-[#00838F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span
                        style={{
                            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                            fontWeight: 700,
                            color: "#00838F",
                        }}
                    >
                        030 610 850 625
                    </span>
                </a>

                <p
                    style={{
                        fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif",
                        fontSize: "12px",
                        color: "#78909C",
                        marginBottom: "16px",
                    }}
                >
                    Mo–Fr 9:00–18:00 Uhr
                </p>

                <Link
                    href="/kontakt"
                    className="block w-full py-3 text-white rounded-xl text-center text-sm transition-shadow hover:shadow-lg"
                    style={{
                        background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                        fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                        fontWeight: 600,
                    }}
                >
                    Beratungstermin anfragen
                </Link>
            </div>
        </div>
    );
}
