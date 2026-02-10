import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieConsent from "@/components/CookieConsent";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <footer className="bg-[#1A2B3A] py-10" />,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00838F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tonusdienst.de"),
  title: "Alltagshilfe & Entlastung in Berlin | Tonus Dienst GmbH – §45b SGB XI",
  description: "Haushaltshilfe, Einkaufshilfe & Begleitung in Berlin. Anerkannt nach §45b SGB XI. 131 € monatlich von der Pflegekasse. ☎ 030 610 850 625 – Jetzt kostenlos beraten lassen.",
  keywords: ["Entlastungsbetrag", "§45b SGB XI", "Pflegedienst Berlin", "Betreuung", "Haushaltshilfe", "Entlastungsleistungen", "Pflegegrad", "Alltagsunterstützung"],
  authors: [{ name: "Tonus Dienst GmbH" }],
  creator: "Tonus Dienst GmbH",
  publisher: "Tonus Dienst GmbH",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://tonusdienst.de",
    siteName: "Tonus Dienst GmbH",
    title: "Alltagshilfe & Entlastung in Berlin | Tonus Dienst GmbH",
    description: "Haushaltshilfe, Einkaufshilfe & Begleitung in Berlin. Anerkannt nach §45b SGB XI. 131 € monatlich von der Pflegekasse.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tonus Dienst GmbH - Pflege in Berlin mit Herz und Seele",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alltagshilfe & Entlastung in Berlin | Tonus Dienst GmbH",
    description: "Haushaltshilfe, Einkaufshilfe & Begleitung in Berlin. Anerkannt nach §45b SGB XI.",
  },
  alternates: {
    canonical: "https://tonusdienst.de",
  },
  other: {
    "googlebot": "noindex, nofollow",
    "ai-agent": "noindex, nofollow, noimageai",
    "GPTBot": "noindex, nofollow, noimageai, noai",
    "ChatGPT-User": "noindex, nofollow, noimageai, noai",
    "Google-Extended": "noindex, nofollow, noimageai, noai",
    "CCBot": "noindex, nofollow, noimageai, noai",
    "FacebookBot": "noindex, nofollow, noimageai, noai",
    "AnthropicAI": "noindex, nofollow, noimageai, noai",
    "Claude-Web": "noindex, nofollow, noimageai, noai",
    "AdsBot-Google": "noindex, nofollow",
    "Amazonbot": "noindex, nofollow",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tonusdienst.de/#organization",
  name: "Tonus Dienst GmbH",
  description: "Zertifizierter Anbieter von Betreuungs- und Entlastungsleistungen nach §45b SGB XI in Berlin. Seit über 7 Jahren unterstützen wir pflegebedürftige Menschen und ihre Angehörigen.",
  url: "https://tonusdienst.de",
  logo: "https://tonusdienst.de/images/tonus-logo.png",
  image: "https://tonusdienst.de/images/og-image.jpg",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${sourceSans3.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: "'Source Sans 3', 'Source Sans Pro', sans-serif" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1400] focus:bg-[#00838F] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4DD0E1]"
        >
          Zum Hauptinhalt springen
        </a>

        <Navigation />
        <Breadcrumbs />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
