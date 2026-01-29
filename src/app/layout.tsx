import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import dynamic from "next/dynamic";

// Lazy load footer as it's below the fold
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <footer className="bg-[#1a365d] py-10" />,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "optional",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a365d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tonusdienst.de"),
  title: "Tonus Dienst GmbH – Betreuung & Entlastung nach §45b SGB XI in Berlin",
  description: "Zertifizierter Anbieter für Betreuungs- und Entlastungsleistungen nach §45b SGB XI in Berlin. Haushaltshilfe, Begleitung & Alltagsunterstützung. Über 7 Jahre Erfahrung. Kostenlose Beratung!",
  keywords: ["Entlastungsbetrag", "§45b SGB XI", "Pflegedienst Berlin", "Betreuung", "Haushaltshilfe", "Entlastungsleistungen", "Pflegegrad", "Alltagsunterstützung"],
  authors: [{ name: "Tonus Dienst GmbH" }],
  creator: "Tonus Dienst GmbH",
  publisher: "Tonus Dienst GmbH",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://tonusdienst.de",
    siteName: "Tonus Dienst GmbH",
    title: "Tonus Dienst – Pflege in Berlin mit Herz und Seele",
    description: "Betreuungs- und Entlastungsleistungen nach §45b SGB XI. Haushaltshilfe, Begleitung zu Terminen, Alltagsunterstützung in Berlin.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tonus Dienst GmbH - Pflege in Berlin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonus Dienst – Pflege in Berlin mit Herz und Seele",
    description: "Betreuungs- und Entlastungsleistungen nach §45b SGB XI in Berlin.",
  },
  alternates: {
    canonical: "https://tonusdienst.de",
  },
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tonusdienst.de/#organization",
  name: "Tonus Dienst GmbH",
  description: "Zertifizierter Anbieter von Betreuungs- und Entlastungsleistungen nach §45b SGB XI in Berlin. Seit über 7 Jahren unterstützen wir pflegebedürftige Menschen und ihre Angehörigen.",
  url: "https://tonusdienst.de",
  logo: "https://tonusdienst.de/images/logo.png",
  image: "https://tonusdienst.de/images/team.jpg",
  telephone: "+49-30-610850625",
  email: "info@ebox.berlin",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kurfürstenstraße 114",
    addressLocality: "Berlin",
    postalCode: "10787",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.5024,
    longitude: 13.3433,
  },
  areaServed: {
    "@type": "City",
    name: "Berlin",
  },
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Direktabrechnung mit Pflegekasse",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  founder: {
    "@type": "Person",
    name: "Kober Swetlana",
    jobTitle: "Geschäftsführer",
  },
  foundingDate: "2018",
  legalName: "Tonus Dienst GmbH",
  slogan: "Pflege in Berlin – Mit Herz und Seele",
  knowsAbout: [
    "§45b SGB XI Entlastungsbetrag",
    "Betreuungsleistungen",
    "Haushaltshilfe",
    "Alltagsunterstützung",
    "Pflegeberatung",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen nach §45b SGB XI",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Haushaltshilfe",
          description: "Reinigung, Ordnung und hauswirtschaftliche Unterstützung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Begleitung zu Terminen",
          description: "Begleitung zu Arzt, Behörden und anderen wichtigen Terminen",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alltagsunterstützung",
          description: "Einkaufshilfe, Besorgungen und Unterstützung bei Mahlzeiten",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entlastung für Angehörige",
          description: "Stundenweise Entlastung und Unterstützung bei der Tagesstruktur",
        },
      },
    ],
  },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${dmSans.variable} antialiased bg-[#F7FAFC]`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#1a365d] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
