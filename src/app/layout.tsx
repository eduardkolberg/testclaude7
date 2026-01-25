import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import dynamic from "next/dynamic";

// Lazy load footer as it's below the fold
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <footer className="bg-[#13263f] py-10" />,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],  // Reduced weights for smaller bundle
  display: "optional",  // Non-blocking font loading
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#13263f",
};

export const metadata: Metadata = {
  title: "WG Südstadt - Senioren-WG Braunschweig",
  description: "Selbstbestimmt leben in familiärer Gemeinschaft. Ihre Senioren-Wohngemeinschaft in Braunschweig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${dmSans.variable} antialiased bg-[#F5F7F9]`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#13263f] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Zum Hauptinhalt springen
        </a>

        <Navigation />
        <Breadcrumbs />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
