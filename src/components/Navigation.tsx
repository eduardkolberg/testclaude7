"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Heart,
  Users,
  Package,
  Ban,
  Info,
  Euro,
  ListOrdered,
  ClipboardList,
  FileText,
  HelpCircle,
  Building2,
  Settings,
  MapPin,
  Phone,
  Briefcase,
  Shield,
  ChevronRight,
  Check,
  Clock,
  type LucideIcon,
} from "lucide-react";

/* ================================================================
   TYPES
   ================================================================ */
interface MegaItem {
  title: string;
  subtitle: string;
  badge?: "Beliebt" | "Wichtig" | "FAQ";
  href: string;
}

interface MegaCategory {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  muted?: boolean;
  items: MegaItem[];
}

interface AccentCard {
  type: "accent";
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  href: string;
}

interface InfoCard {
  type: "info";
  title: string;
  description: string;
  link: string;
  href: string;
}

interface ComparisonCard {
  type: "comparison";
  title: string;
  bullets: { label: string; text: string }[];
  link: string;
  href: string;
}

interface ContactCard {
  type: "contact";
  title: string;
  phone: string;
  hours: string;
  cta: string;
  href: string;
}

interface GeoCard {
  type: "geo";
  title: string;
  description: string;
  link: string;
  href: string;
}

type RightCard = AccentCard | InfoCard | ComparisonCard | ContactCard | GeoCard;

interface MegaMenuData {
  title: string;
  defaultCategory: number;
  categories: MegaCategory[];
  cards: RightCard[];
  trustItems: string[];
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

/* ================================================================
   MEGA MENU DATA
   ================================================================ */
const megaMenus: Record<string, MegaMenuData> = {
  leistungen: {
    title: "Leistungen",
    defaultCategory: 0,
    categories: [
      {
        id: "1.1",
        icon: Home,
        title: "Alltagsunterstützung",
        description: "Haushalt, Wäsche, Einkauf – entlastet im Alltag.",
        href: "/leistungen/alltagsunterstuetzung",
        items: [
          { title: "Haushaltshilfe", subtitle: "Reinigung & Ordnung", badge: "Beliebt", href: "/leistungen/alltagsunterstuetzung#haushaltshilfe" },
          { title: "Wäsche, Bügeln & Bettwäsche", subtitle: "Waschen, Bügeln, Beziehen", href: "/leistungen/alltagsunterstuetzung#waesche" },
          { title: "Fensterreinigung & Gardinen", subtitle: "saisonal April–Oktober", badge: "Wichtig", href: "/leistungen/alltagsunterstuetzung#fenster" },
          { title: "Einkaufshilfe & Besorgungen", subtitle: "Einkauf, Apotheke, Post", href: "/leistungen/alltagsunterstuetzung#einkaufshilfe" },
          { title: "Unterstützung bei Mahlzeiten", subtitle: "Vorbereiten/Erwärmen, Tisch", href: "/leistungen/alltagsunterstuetzung#mahlzeiten" },
        ],
      },
      {
        id: "1.2",
        icon: Heart,
        title: "Betreuung & Begleitung",
        description: "Termine, Spaziergänge, Gesellschaft – sicher begleitet.",
        href: "/leistungen/betreuung-begleitung",
        items: [
          { title: "Begleitung zu Terminen", subtitle: "Arzt, Behörden – stressfrei begleitet", badge: "Beliebt", href: "/leistungen/betreuung-begleitung#termine" },
          { title: "Spaziergänge & Freizeitgestaltung", subtitle: "Bewegung, Gespräche, kleine Ausflüge", href: "/leistungen/betreuung-begleitung#spaziergaenge" },
          { title: "Friedhofsbesuche & Grabpflege", subtitle: "Begleitung und leichte Unterstützung", href: "/leistungen/betreuung-begleitung#friedhof" },
        ],
      },
      {
        id: "1.3",
        icon: Users,
        title: "Entlastung für Angehörige",
        description: "Zeit für sich – wir übernehmen verlässlich.",
        href: "/leistungen/entlastung-angehoerige",
        items: [
          { title: "Stundenweise Entlastung", subtitle: "Kurzfristig Zeit gewinnen", badge: "Beliebt", href: "/leistungen/entlastung-angehoerige#stundenweise" },
          { title: "Tagesstruktur & Organisation", subtitle: "Routine schaffen, Alltag planbar machen", href: "/leistungen/entlastung-angehoerige#tagesstruktur" },
        ],
      },
      {
        id: "1.4",
        icon: Package,
        title: "Pflegebox (kostenlos)",
        description: "Bis 40 €/Monat – Hilfsmittel zum Verbrauch.",
        href: "/leistungen/pflegebox",
        items: [
          { title: "Was ist die Pflegebox?", subtitle: "Hilfsmittel einfach erklärt", href: "/leistungen/pflegebox" },
          { title: "Inhalt & Bestellung", subtitle: "Auswahl, Lieferung, Abrechnung", href: "/leistungen/pflegebox#bestellung" },
        ],
      },
      {
        id: "1.5",
        icon: Ban,
        title: "Was wir NICHT anbieten",
        description: "Transparente Abgrenzung unserer Leistungen.",
        href: "/leistungen/nicht-anbieten",
        items: [
          { title: "Keine Körperpflege & Medizin", subtitle: "Keine Pflegehandlungen", href: "/leistungen/nicht-anbieten#keine-koerperpflege" },
          { title: "Keine Gartenarbeit & Spezialreinigung", subtitle: "Keine Außenarbeiten", href: "/leistungen/nicht-anbieten#keine-gartenarbeit" },
        ],
      },
    ],
    cards: [
      {
        type: "accent",
        title: "Pflegebox kostenlos",
        subtitle: "bis 40 €/Monat",
        description: "Kostenübernahme durch Pflegekasse möglich.",
        cta: "Inhalt & Bestellung",
        href: "/leistungen/pflegebox",
      },
      {
        type: "info",
        title: "Was wir nicht machen",
        description: "Keine Körperpflege & Medizin. Keine Gartenarbeit & Spezialreinigung.",
        link: "Mehr dazu →",
        href: "/leistungen/nicht-anbieten",
      },
    ],
    trustItems: ["Anerkannt nach §45b", "Direktabrechnung", "Keine versteckten Kosten"],
    primaryCta: { text: "Kostenlos beraten lassen", href: "/kontakt" },
    secondaryCta: { text: "Leistungen ansehen", href: "/leistungen" },
  },

  abrechnung: {
    title: "§45b SGB XI & Abrechnung",
    defaultCategory: 1,
    categories: [
      {
        id: "2.1",
        icon: Info,
        title: "Entlastungsbetrag erklärt",
        description: "Wofür gedacht, wie nutzbar – kurz und verständlich.",
        href: "/45b/entlastungsbetrag",
        items: [
          { title: "Was ist §45b SGB XI?", subtitle: "Wofür gedacht, wie nutzbar", href: "/45b/entlastungsbetrag" },
          { title: "Anspruch & Pflegegrad (1–5)", subtitle: "Wer Anspruch hat und was zählt", href: "/45b/entlastungsbetrag#anspruch" },
        ],
      },
      {
        id: "2.2",
        icon: Euro,
        title: "Finanzierung & Kosten",
        description: "Kurz erklärt, wie Sie Ihr Budget optimal nutzen.",
        href: "/45b/finanzierung",
        items: [
          { title: "131 € pro Monat", subtitle: "was Sie dafür bekommen – Beispiele & Stunden", badge: "Beliebt", href: "/45b/finanzierung" },
          { title: "Guthaben & Übertrag", subtitle: "Frist: 30. Juni – was verfällt?", badge: "Wichtig", href: "/45b/finanzierung#uebertrag" },
          { title: "Privatzahlung & Selbstzahler", subtitle: "wenn Budget aufgebraucht", href: "/45b/finanzierung#privat" },
        ],
      },
      {
        id: "2.3",
        icon: ListOrdered,
        title: "Ihr Weg zur Hilfe",
        description: "Schritt für Schritt – ohne Überraschungen.",
        href: "/45b/ablauf",
        items: [
          { title: "Schritt für Schritt", subtitle: "Anruf → Start – Ablauf in klaren Schritten", href: "/45b/ablauf" },
          { title: "Erstgespräch & Bedarfsermittlung", subtitle: "Bedarf, Frequenz, Prioritäten", href: "/45b/ablauf#erstgespraech" },
        ],
      },
      {
        id: "2.4",
        icon: ClipboardList,
        title: "Abrechnung & Nachweise",
        description: "Dokumente und Unterlagen kurz erklärt.",
        href: "/45b/abrechnung",
        items: [
          { title: "Direktabrechnung & Abtretungserklärung", subtitle: "Wir rechnen direkt ab", href: "/45b/abrechnung" },
          { title: "Kostenerstattung", subtitle: "Unterlagen & Ablauf", href: "/45b/abrechnung#erstattung" },
          { title: "Leistungsnachweis", subtitle: "Ihre Stundenkontrolle", href: "/45b/abrechnung#doku" },
        ],
      },
      {
        id: "2.5",
        icon: FileText,
        title: "Vertrag & Kündigung",
        description: "Vertragsabschluss und Kündigung erklärt.",
        href: "/45b/vertrag",
        items: [
          { title: "Vertragsabschluss", subtitle: "Pflicht laut Senat – was drinsteht", href: "/45b/vertrag" },
          { title: "Kündigung", subtitle: "Fristen, Schritte, Ansprechpartner", href: "/45b/vertrag#kuendigung" },
        ],
      },
      {
        id: "2.6",
        icon: HelpCircle,
        title: "FAQ",
        description: "Schnelle Antworten auf häufige Fragen.",
        href: "/45b/faq",
        items: [
          { title: "Fragen zu Leistungen & Ablauf", subtitle: "Start, Termine, Betreuung", badge: "FAQ", href: "/45b/faq" },
          { title: "Fragen zu Kosten & Abrechnung", subtitle: "131 €, Übertrag, Nachweise", badge: "FAQ", href: "/45b/faq#kosten" },
        ],
      },
    ],
    cards: [
      {
        type: "accent",
        icon: Euro,
        title: "Entlastungsbetrag nutzen",
        subtitle: "131 €/Monat",
        description: "Pflegegrad 1–5",
        cta: "Kostenlos berechnen",
        href: "/45b/entlastungsbetrag",
      },
      {
        type: "comparison",
        title: "Direktabrechnung vs. Kostenerstattung",
        bullets: [
          { label: "Direkt:", text: "Wir rechnen mit Kasse ab." },
          { label: "Erstattung:", text: "Sie reichen Unterlagen ein." },
        ],
        link: "Ablauf ansehen →",
        href: "/45b/ablauf",
      },
    ],
    trustItems: ["Anerkannt in Berlin", "Erklärung verständlich", "Unterstützung beim Papierkram"],
    primaryCta: { text: "Kostenlos berechnen", href: "/45b/entlastungsbetrag" },
    secondaryCta: { text: "FAQ", href: "/45b/faq" },
  },

  ueberuns: {
    title: "Über uns",
    defaultCategory: 1,
    categories: [
      {
        id: "3.1",
        icon: Building2,
        title: "Tonus Dienst GmbH",
        description: "Wer wir sind und warum Anerkennung wichtig ist.",
        href: "/ueber-uns",
        items: [
          { title: "Unternehmen & Anerkennung", subtitle: "Senat Berlin – Wer wir sind", href: "/ueber-uns" },
          { title: "Qualität & Versicherung", subtitle: "Standards, Absicherung, Vertrauen", href: "/ueber-uns#anerkennung" },
        ],
      },
      {
        id: "3.2",
        icon: Settings,
        title: "So arbeiten wir",
        description: "Transparent, planbar, mit festen Ansprechpartnern.",
        href: "/ueber-uns/so-arbeiten-wir",
        items: [
          { title: "Terminplanung & SMS-Benachrichtigung", subtitle: "klare Absprachen", badge: "Beliebt", href: "/ueber-uns/so-arbeiten-wir#terminplanung" },
          { title: "Feste Mitarbeiterin & Vertretung", subtitle: "Kontinuität & Backup", href: "/ueber-uns/so-arbeiten-wir#feste-mitarbeiterin" },
          { title: "Kommunikation & Sprachunterstützung", subtitle: "leichter verständlich", href: "/ueber-uns/so-arbeiten-wir#kommunikation" },
          { title: "Reinigungsmittel & Inventar", subtitle: "stellt der Kunde", href: "/ueber-uns/so-arbeiten-wir#reinigungsmittel" },
        ],
      },
      {
        id: "3.3",
        icon: MapPin,
        title: "Einsatzgebiet",
        description: "Berlin & Umgebung – Bezirke auf einen Blick.",
        href: "/einsatzgebiet",
        items: [
          { title: "Aktuelle Bezirke & Abdeckung", subtitle: "Wo wir aktuell unterstützen", href: "/einsatzgebiet" },
          { title: "Einschränkungen (Randgebiete)", subtitle: "Randlagen, Wegezeiten", href: "/einsatzgebiet#anfahrt" },
        ],
      },
      {
        id: "3.4",
        icon: Phone,
        title: "Kontakt",
        description: "So erreichen Sie uns – schnell und freundlich.",
        href: "/kontakt",
        items: [
          { title: "Telefon, E-Mail & Bürozeiten", subtitle: "Schnell, freundlich, zuverlässig", href: "/kontakt" },
          { title: "Anfahrt (Kurfürstenstr. 114)", subtitle: "Adresse, Anreise, Hinweise", href: "/kontakt#standort" },
        ],
      },
      {
        id: "3.5",
        icon: Briefcase,
        title: "Karriere",
        description: "Jobs und Bewerbung bei Tonus Dienst.",
        href: "/karriere",
        items: [
          { title: "Offene Stellen", subtitle: "Bewerben in wenigen Minuten", href: "/karriere" },
          { title: "Anforderungen & Bewerbung", subtitle: "Was wir erwarten", href: "/karriere#bewerbung" },
        ],
      },
      {
        id: "3.6",
        icon: Shield,
        title: "Rechtliches",
        description: "Impressum und Datenschutz.",
        href: "/impressum",
        muted: true,
        items: [
          { title: "Impressum", subtitle: "Unternehmensangaben nach Vorschrift", href: "/impressum" },
          { title: "Datenschutz", subtitle: "Wie wir Daten schützen", href: "/datenschutz" },
        ],
      },
    ],
    cards: [
      {
        type: "contact",
        title: "Kontakt",
        phone: "030 610 850 625",
        hours: "Mo–Fr 9:00–18:00 Uhr",
        cta: "Termin anfragen",
        href: "/kontakt",
      },
      {
        type: "geo",
        title: "Einsatzgebiet: Berlin",
        description: "Bezirke & Abdeckung",
        link: "Karte / Bezirke →",
        href: "/einsatzgebiet",
      },
    ],
    trustItems: ["Anerkennung Senat Berlin", "Versicherung", "Qualität"],
    primaryCta: { text: "Kontakt", href: "/kontakt" },
    secondaryCta: { text: "Über Tonus Dienst", href: "/ueber-uns" },
  },
};

/* ================================================================
   MOBILE MENU DATA
   ================================================================ */
const mobileMenuItems = [
  {
    title: "Leistungen",
    href: "/leistungen",
    children: [
      { title: "Alltagsunterstützung", href: "/leistungen/alltagsunterstuetzung" },
      { title: "Betreuung & Begleitung", href: "/leistungen/betreuung-begleitung" },
      { title: "Entlastung für Angehörige", href: "/leistungen/entlastung-angehoerige" },
      { title: "Pflegebox (kostenlos)", href: "/leistungen/pflegebox" },
      { title: "Was wir NICHT anbieten", href: "/leistungen/nicht-anbieten" },
    ],
  },
  {
    title: "§45b Entlastung",
    href: "/45b",
    children: [
      { title: "Entlastungsbetrag erklärt", href: "/45b/entlastungsbetrag" },
      { title: "Finanzierung & Kosten", href: "/45b/finanzierung" },
      { title: "Ihr Weg zur Hilfe", href: "/45b/ablauf" },
      { title: "Abrechnung", href: "/45b/abrechnung" },
      { title: "Vertrag & Kündigung", href: "/45b/vertrag" },
      { title: "FAQ", href: "/45b/faq" },
    ],
  },
  {
    title: "Über uns",
    href: "/ueber-uns",
    children: [
      { title: "So arbeiten wir", href: "/ueber-uns/so-arbeiten-wir" },
      { title: "Einsatzgebiet", href: "/einsatzgebiet" },
      { title: "Kontakt", href: "/kontakt" },
      { title: "Karriere", href: "/karriere" },
      { title: "Impressum", href: "/impressum" },
      { title: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

/* ================================================================
   BADGE SUB-COMPONENT
   ================================================================ */
function Badge({ type }: { type: "Beliebt" | "Wichtig" | "FAQ" }) {
  const styles: Record<string, string> = {
    Beliebt: "bg-[#E0F7FA] text-[#00838F]",
    Wichtig: "bg-[#FFF3E0] text-[#E65100]",
    FAQ: "bg-[#E8F5E9] text-[#2E7D32]",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide ${styles[type] || styles.Beliebt}`}
    >
      {type}
    </span>
  );
}

/* ================================================================
   RIGHT CARD SUB-COMPONENTS
   ================================================================ */
function AccentCardComponent({ card, onClose }: { card: AccentCard; onClose?: () => void }) {
  const Icon = card.icon;
  return (
    <div className="bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] rounded-xl p-5 border border-[#4DD0E1]/30">
      <div className="flex items-start gap-3 mb-3">
        {Icon && <Icon className="w-5 h-5 text-[#00838F] flex-shrink-0 mt-0.5" />}
        <div>
          <h4
            className="font-semibold text-[#0D2137] text-[15px]"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            {card.title}
          </h4>
          {card.subtitle && (
            <p
              className="font-bold text-[#00838F] text-[20px]"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              {card.subtitle}
            </p>
          )}
        </div>
      </div>
      <p
        className="text-[13px] text-[#37474F] mb-4"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        {card.description}
      </p>
      <Link
        href={card.href}
        onClick={onClose}
        className="block w-full py-2.5 bg-gradient-to-r from-[#00838F] to-[#005662] text-white rounded-lg font-semibold text-[14px] text-center hover:shadow-lg transition-shadow"
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
      >
        {card.cta}
      </Link>
    </div>
  );
}

function InfoCardComponent({ card, onClose }: { card: InfoCard; onClose?: () => void }) {
  return (
    <div className="bg-[#F7FAFA] rounded-xl p-5 border border-[#E0E7E9]">
      <h4
        className="font-semibold text-[#0D2137] text-[15px] mb-2"
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
      >
        {card.title}
      </h4>
      <p
        className="text-[13px] text-[#37474F] mb-3"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        {card.description}
      </p>
      <Link
        href={card.href}
        onClick={onClose}
        className="inline-flex items-center gap-1 font-semibold text-[13px] text-[#00838F] hover:underline"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        {card.link}
      </Link>
    </div>
  );
}

function ComparisonCardComponent({ card, onClose }: { card: ComparisonCard; onClose?: () => void }) {
  return (
    <div className="bg-[#F7FAFA] rounded-xl p-5 border border-[#E0E7E9]">
      <h4
        className="font-semibold text-[#0D2137] text-[15px] mb-3"
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
      >
        {card.title}
      </h4>
      <div className="space-y-2 mb-3">
        {card.bullets.map((b, i) => (
          <div key={i} className="flex gap-2 text-[13px]">
            <span className="font-semibold text-[#00838F]">{b.label}</span>
            <span className="text-[#37474F]">{b.text}</span>
          </div>
        ))}
      </div>
      <Link
        href={card.href}
        onClick={onClose}
        className="inline-flex items-center gap-1 font-semibold text-[13px] text-[#00838F] hover:underline"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        {card.link}
      </Link>
    </div>
  );
}

function ContactCardComponent({ card, onClose }: { card: ContactCard; onClose?: () => void }) {
  return (
    <div className="bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] rounded-xl p-5 border border-[#4DD0E1]/30">
      <h4
        className="font-semibold text-[#0D2137] text-[15px] mb-2"
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
      >
        {card.title}
      </h4>
      <a
        href={`tel:+49${card.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-2 mb-1"
      >
        <Phone className="w-4 h-4 text-[#00838F]" />
        <span
          className="font-bold text-[#00838F] text-[20px]"
          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
        >
          {card.phone}
        </span>
      </a>
      <p
        className="text-[13px] text-[#37474F] mb-4 flex items-center gap-1"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        <Clock className="w-3 h-3" />
        {card.hours}
      </p>
      <Link
        href={card.href}
        onClick={onClose}
        className="block w-full py-2.5 bg-gradient-to-r from-[#00838F] to-[#005662] text-white rounded-lg font-semibold text-[14px] text-center hover:shadow-lg transition-shadow"
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
      >
        {card.cta}
      </Link>
    </div>
  );
}

function GeoCardComponent({ card, onClose }: { card: GeoCard; onClose?: () => void }) {
  return (
    <div className="bg-[#F7FAFA] rounded-xl p-5 border border-[#E0E7E9]">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-4 h-4 text-[#00838F]" />
        <h4
          className="font-semibold text-[#0D2137] text-[15px]"
          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
        >
          {card.title}
        </h4>
      </div>
      <p
        className="text-[13px] text-[#37474F] mb-3"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        {card.description}
      </p>
      <Link
        href={card.href}
        onClick={onClose}
        className="inline-flex items-center gap-1 font-semibold text-[13px] text-[#00838F] hover:underline"
        style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
      >
        {card.link}
      </Link>
    </div>
  );
}

function RightCardRenderer({ card, onClose }: { card: RightCard; onClose?: () => void }) {
  switch (card.type) {
    case "accent":
      return <AccentCardComponent card={card} onClose={onClose} />;
    case "info":
      return <InfoCardComponent card={card} onClose={onClose} />;
    case "comparison":
      return <ComparisonCardComponent card={card} onClose={onClose} />;
    case "contact":
      return <ContactCardComponent card={card} onClose={onClose} />;
    case "geo":
      return <GeoCardComponent card={card} onClose={onClose} />;
    default:
      return null;
  }
}

/* ================================================================
   MEGA PANEL SUB-COMPONENT
   ================================================================ */
function MegaPanel({
  data,
  activeTab,
  onTabHover,
  onClose,
}: {
  data: MegaMenuData;
  activeTab: number;
  onTabHover: (i: number) => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const currentCategory = data.categories[activeTab];
  if (!currentCategory) return null;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex">
        {/* === Left Sidebar === */}
        <div className="w-[260px] flex-shrink-0 bg-[#F7FAFA] border-r border-[#E0E7E9] py-4">
          {data.categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onMouseEnter={() => onTabHover(i)}
                onClick={() => {
                  onClose();
                  router.push(cat.href);
                }}
                className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-150 cursor-pointer ${i === activeTab
                  ? "bg-white border-r-2 border-[#00838F]"
                  : "hover:bg-white/60"
                  } ${cat.muted ? "opacity-60" : ""}`}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${i === activeTab ? "text-[#00838F]" : "text-[#78909C]"
                    }`}
                />
                <span
                  className={`text-[15px] font-semibold truncate ${i === activeTab ? "text-[#00838F]" : "text-[#37474F]"
                    }`}
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* === Middle Content === */}
        <div className="flex-1 min-w-0 p-6">
          <div className="mb-4 pb-3 border-b border-[#E0E7E9]">
            <h3
              className="font-bold text-[#0D2137] text-[20px] mb-1"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              {currentCategory.title}
            </h3>
            <p
              className="text-[13px] text-[#546E7A]"
              style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
            >
              {currentCategory.description}
            </p>
          </div>

          <div className={`grid gap-1 ${currentCategory.items.length > 3 ? "grid-cols-2" : "grid-cols-1"}`}>
            {currentCategory.items.map((item, idx) => (
              <Link
                key={item.href + idx}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-[#E0F7FA]/50 transition-colors cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span
                      className="font-semibold text-[15px] text-[#0D2137] group-hover:text-[#00838F] transition-colors truncate"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {item.title}
                    </span>
                    {item.badge && <Badge type={item.badge} />}
                  </div>
                  <p
                    className="text-[13px] text-[#546E7A] truncate"
                    style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                  >
                    {item.subtitle}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-[#B0BEC5] flex-shrink-0 mt-1 group-hover:text-[#00838F] transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* === Right Sidebar === */}
        <div className="w-[280px] flex-shrink-0 p-5 flex flex-col gap-4 border-l border-[#E0E7E9]">
          {data.cards.map((card, i) => (
            <RightCardRenderer key={i} card={card} onClose={onClose} />
          ))}
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-[#F7FAFA] border-t border-[#E0E7E9]">
        <div className="flex items-center gap-6">
          {data.trustItems.map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#00838F] flex-shrink-0" />
              <span
                className="text-[13px] text-[#546E7A]"
                style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={data.secondaryCta.href}
            onClick={onClose}
            className="text-[13px] font-semibold text-[#00838F] hover:underline"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            {data.secondaryCta.text}
          </Link>
          <Link
            href={data.primaryCta.href}
            onClick={onClose}
            className="inline-block px-5 py-2 rounded-full text-white text-[13px] font-semibold transition-all hover:scale-[1.03] hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            }}
          >
            {data.primaryCta.text}
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   DROPDOWN WRAPPER WITH FRAMER MOTION
   ================================================================ */
function DropdownMenu({
  menuKey,
  label,
  href,
  isOpen,
  onOpen,
  onClose,
  triggerClass,
}: {
  menuKey: string;
  label: string;
  href: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  triggerClass: string;
}) {
  const router = useRouter();
  const data = megaMenus[menuKey];
  const [activeTab, setActiveTab] = useState(data?.defaultCategory || 0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clickCooldownRef = useRef(false);

  const handleMouseEnter = useCallback(() => {
    if (clickCooldownRef.current) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    onOpen();
  }, [onOpen]);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
      setActiveTab(data?.defaultCategory || 0);
    }, 100);
  }, [onClose, data?.defaultCategory]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    clickCooldownRef.current = true;
    setTimeout(() => { clickCooldownRef.current = false; }, 600);
    router.push(href);
  }, [onClose, href, router]);

  if (!data) return null;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={triggerClass}
        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
        onClick={handleClick}
      >
        <span className={`transition-colors ${isOpen ? "text-[#00838F]" : ""}`}>{label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#00838F]" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/30 z-[1000]"
              style={{ top: "80px" }}
              onClick={onClose}
            />

            {/* Mega menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-1/2 -translate-x-1/2 top-[80px] w-[calc(100%-48px)] max-w-[1140px] pt-2 z-[1001]"
            >
              <MegaPanel data={data} activeTab={activeTab} onTabHover={setActiveTab} onClose={onClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================
   NAVIGATION COMPONENT
   ================================================================ */
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  // Only one dropdown open at a time
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-white shadow-[0_1px_3px_rgba(0,131,143,0.08)]"
    : "bg-transparent";

  const textColor = scrolled ? "text-[#37474F]" : "text-[#0D2137]";
  const hoverColor = "hover:text-[#00838F]";

  const menuTriggerClass = `flex items-center gap-1.5 font-semibold text-[16px] ${textColor} ${hoverColor} transition-colors px-3 py-2 cursor-pointer rounded-md hover:bg-[#E0F7FA]/40`;

  return (
    <header
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${headerBg}`}
      style={{ height: "80px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Tonus Dienst - Zur Startseite">
          <Image
            src="/images/tonus-logo-horizontal.png"
            alt="Tonus Dienst GmbH"
            width={280}
            height={64}
            priority
            className="h-[64px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0 ml-8" aria-label="Hauptnavigation">
          <DropdownMenu
            menuKey="leistungen"
            label="Leistungen"
            href="/leistungen"
            isOpen={openMenu === "leistungen"}
            onOpen={() => setOpenMenu("leistungen")}
            onClose={() => setOpenMenu((prev) => (prev === "leistungen" ? null : prev))}
            triggerClass={menuTriggerClass}
          />
          <DropdownMenu
            menuKey="abrechnung"
            label="§45b Entlastung"
            href="/45b"
            isOpen={openMenu === "abrechnung"}
            onOpen={() => setOpenMenu("abrechnung")}
            onClose={() => setOpenMenu((prev) => (prev === "abrechnung" ? null : prev))}
            triggerClass={menuTriggerClass}
          />
          <DropdownMenu
            menuKey="ueberuns"
            label="Über uns"
            href="/ueber-uns"
            isOpen={openMenu === "ueberuns"}
            onOpen={() => setOpenMenu("ueberuns")}
            onClose={() => setOpenMenu((prev) => (prev === "ueberuns" ? null : prev))}
            triggerClass={menuTriggerClass}
          />
        </nav>

        {/* Right side CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+4930610850625"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#00838F] text-[#00838F] rounded-full text-[15px] font-semibold hover:bg-[#E0F7FA] transition-all"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            030 610 850 625
          </a>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-[15px] font-semibold transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              boxShadow: "0 4px 12px rgba(0,131,143,0.3)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            }}
          >
            Beratung anfordern
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-3 rounded-[8px] hover:bg-[#E0F7FA] text-[#455A64] min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[80px] bg-white z-[999] overflow-y-auto"
          >
            <nav className="p-6 space-y-2" aria-label="Mobile Navigation">
              {mobileMenuItems.map((item) => (
                <div key={item.title}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className="flex-1 py-3 px-4 text-[18px] font-semibold text-[#0D2137] hover:text-[#00838F] rounded-[8px] hover:bg-[#F7FAFA] transition-colors"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <button
                        onClick={() => setMobileSubOpen(mobileSubOpen === item.title ? null : item.title)}
                        className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-[#78909C] hover:text-[#00838F] transition-colors"
                        aria-label={`${item.title} Untermenü`}
                      >
                        <svg className={`w-5 h-5 transition-transform ${mobileSubOpen === item.title ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && mobileSubOpen === item.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 pl-4 border-l-2 border-[#E0E7E9] space-y-1 mb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 px-3 text-[16px] text-[#37474F] hover:text-[#00838F] hover:bg-[#F7FAFA] rounded-[8px] transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 space-y-3 border-t border-[#E0E7E9] mt-4">
                <a
                  href="tel:+4930610850625"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-[#00838F] text-[#00838F] rounded-[12px] text-[17px] font-bold transition-colors hover:bg-[#E0F7FA]"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  030 610 850 625
                </a>
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 text-white rounded-[12px] text-[17px] font-bold"
                  style={{
                    background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                    fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  }}
                >
                  Beratung anfordern
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
