"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ================================================================
   ICONS
   ================================================================ */
const icons: Record<string, React.ReactNode> = {
  home: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
  heart: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  people: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  package: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
  ban: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>,
  info: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>,
  euro: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 009.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 008.898 0l.506-3.541a3 3 0 00-4.834-2.437zM7.5 11.25h5.25m-5.25 3h3.75" /></svg>,
  steps: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" /></svg>,
  receipt: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>,
  document: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  question: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>,
  building: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  cog: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  map: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  phone: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  briefcase: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>,
  shield: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
};

const ArrowRight = () => (
  <svg className="w-4 h-4 text-[#B0BEC5] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#00838F] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

/* ================================================================
   MEGA MENU DATA
   ================================================================ */
interface MegaCard {
  title: string;
  badge?: "BELIEBT" | "WICHTIG";
  desc: string;
  href: string;
}

interface SidebarTab {
  icon: string;
  label: string;
  content: { title: string; subtitle: string; cards: MegaCard[] };
}

interface RightCard {
  type: "promo" | "info";
  title: string;
  highlight?: string;
  highlightSub?: string;
  desc?: string;
  descTeal?: boolean;
  cta?: { label: string; href: string };
  link?: { label: string; href: string };
  icon?: string;
  lines?: { label: string; value: string }[];
}

interface MegaMenu {
  sidebar: SidebarTab[];
  right: RightCard[];
  bottom: {
    checks: string[];
    link?: { label: string; href: string };
    cta: { label: string; href: string };
  };
}

/* ---------- Leistungen ---------- */
const leistungenMega: MegaMenu = {
  sidebar: [
    {
      icon: "home",
      label: "Alltagsunterstützung",
      content: {
        title: "Alltagsunterstützung",
        subtitle: "Haushalt, Wäsche, Einkauf – entlastet im Alltag.",
        cards: [
          { title: "Haushaltshilfe", badge: "BELIEBT", desc: "Reinigung & Ordnung", href: "/leistungen/alltagsunterstuetzung#haushaltshilfe" },
          { title: "Wäsche, Bügeln & Bettwäsche", desc: "Waschen, Bügeln, Beziehen", href: "/leistungen/alltagsunterstuetzung#waesche" },
          { title: "Fensterreinigung", badge: "WICHTIG", desc: "saisonal April–Oktober", href: "/leistungen/alltagsunterstuetzung#fenster" },
          { title: "Einkaufshilfe & Besorgungen", desc: "Einkauf, Apotheke, Post", href: "/leistungen/alltagsunterstuetzung#einkaufshilfe" },
          { title: "Unterstützung bei Mahlzeiten", desc: "Vorbereiten/Erwärmen, Tisch", href: "/leistungen/alltagsunterstuetzung#mahlzeiten" },
        ],
      },
    },
    {
      icon: "heart",
      label: "Betreuung & Begleitung",
      content: {
        title: "Betreuung & Begleitung",
        subtitle: "Arztbesuche, Spaziergänge, Gesellschaft – persönlich begleitet.",
        cards: [
          { title: "Begleitung zu Terminen", badge: "BELIEBT", desc: "Arzt, Behörden, Therapie", href: "/leistungen/betreuung-begleitung#termine" },
          { title: "Spaziergänge & Freizeit", desc: "Frische Luft, Bewegung", href: "/leistungen/betreuung-begleitung#spaziergaenge" },
          { title: "Gesellschaft & Gespräche", desc: "Gegen Einsamkeit", href: "/leistungen/betreuung-begleitung#gesellschaft" },
          { title: "Vorlesen & Beschäftigung", desc: "Aktivierung, Gedächtnis", href: "/leistungen/betreuung-begleitung#vorlesen" },
        ],
      },
    },
    {
      icon: "people",
      label: "Entlastung für Angehörige",
      content: {
        title: "Entlastung für Angehörige",
        subtitle: "Auszeiten schaffen, Alltag organisieren – für pflegende Familien.",
        cards: [
          { title: "Stundenweise Entlastung", badge: "BELIEBT", desc: "Regelmäßige Auszeiten", href: "/leistungen/entlastung-angehoerige#stundenweise" },
          { title: "Tagesstruktur & Organisation", desc: "Planung, Routinen", href: "/leistungen/entlastung-angehoerige#tagesstruktur" },
          { title: "Auszeiten für Angehörige", desc: "Erholung & Kraft tanken", href: "/leistungen/entlastung-angehoerige#auszeiten" },
        ],
      },
    },
    {
      icon: "package",
      label: "Pflegebox (kostenlos)",
      content: {
        title: "Pflegebox kostenlos",
        subtitle: "Monatliche Pflegehilfsmittel – direkt zu Ihnen nach Hause.",
        cards: [
          { title: "Pflegebox Inhalt", badge: "BELIEBT", desc: "Handschuhe, Desinfekt., Masken", href: "/leistungen/pflegebox" },
          { title: "Kostenübernahme", desc: "bis 40 €/Monat von der Kasse", href: "/leistungen/pflegebox#kosten" },
          { title: "Bestellung & Lieferung", desc: "Einfach online bestellen", href: "/leistungen/pflegebox#bestellung" },
        ],
      },
    },
    {
      icon: "ban",
      label: "Was wir NICHT anbieten",
      content: {
        title: "Was wir nicht machen",
        subtitle: "Transparenz ist uns wichtig – hier unsere klaren Grenzen.",
        cards: [
          { title: "Keine Körperpflege", badge: "WICHTIG", desc: "Duschen, Waschen, Anziehen", href: "/leistungen#nicht-anbieten" },
          { title: "Keine medizinische Pflege", desc: "Injektionen, Verbände", href: "/leistungen#nicht-anbieten" },
          { title: "Keine Gartenarbeit", desc: "Rasenmähen, Hecke schneiden", href: "/leistungen#nicht-anbieten" },
          { title: "Keine Spezialreinigung", desc: "Grundreinigung, Entrümpelung", href: "/leistungen#nicht-anbieten" },
        ],
      },
    },
  ],
  right: [
    {
      type: "promo",
      title: "Pflegebox kostenlos",
      highlight: "bis 40 €/Monat",
      desc: "Kostenübernahme durch Pflegekasse möglich.",
      cta: { label: "Inhalt & Bestellung", href: "/leistungen/pflegebox" },
    },
    {
      type: "info",
      title: "Was wir nicht machen",
      desc: "Keine Körperpflege & Medizin. Keine Gartenarbeit & Spezialreinigung.",
      descTeal: true,
      link: { label: "Mehr dazu \u2192", href: "/leistungen#nicht-anbieten" },
    },
  ],
  bottom: {
    checks: ["Anerkannt nach §45b", "Direktabrechnung", "Keine versteckten Kosten"],
    link: { label: "Leistungen ansehen", href: "/leistungen" },
    cta: { label: "Kostenlos beraten lassen", href: "/kontakt" },
  },
};

/* ---------- §45b Entlastung ---------- */
const entlastungMega: MegaMenu = {
  sidebar: [
    {
      icon: "info",
      label: "Entlastungsbetrag erklärt",
      content: {
        title: "Entlastungsbetrag erklärt",
        subtitle: "Was ist der §45b SGB XI und wer hat Anspruch?",
        cards: [
          { title: "Was ist §45b SGB XI?", badge: "BELIEBT", desc: "Gesetzliche Grundlage einfach erklärt", href: "/45b/entlastungsbetrag" },
          { title: "Wer hat Anspruch?", desc: "Ab Pflegegrad 1 – alle Infos", href: "/45b/entlastungsbetrag#anspruch" },
          { title: "Welche Leistungen?", desc: "Was Sie damit bezahlen können", href: "/45b/entlastungsbetrag#leistungen" },
        ],
      },
    },
    {
      icon: "euro",
      label: "Finanzierung & Kosten",
      content: {
        title: "Finanzierung & Kosten",
        subtitle: "Kurz erklärt, wie Sie Ihr Budget optimal nutzen.",
        cards: [
          { title: "131 € pro Monat", badge: "BELIEBT", desc: "was Sie dafür bekommen – Beispiele & Stunden", href: "/45b/finanzierung" },
          { title: "Guthaben & Übertrag", badge: "WICHTIG", desc: "Frist: 30. Juni – was verfällt?", href: "/45b/finanzierung#uebertrag" },
          { title: "Privatzahlung & Selbstzahler", desc: "wenn Budget aufgebraucht", href: "/45b/finanzierung#privat" },
        ],
      },
    },
    {
      icon: "steps",
      label: "Ihr Weg zur Hilfe",
      content: {
        title: "Ihr Weg zur Hilfe",
        subtitle: "In wenigen Schritten zur Unterstützung – so einfach geht's.",
        cards: [
          { title: "Erstgespräch & Beratung", badge: "BELIEBT", desc: "Kostenlos und unverbindlich", href: "/45b/ablauf" },
          { title: "Antrag & Bewilligung", desc: "Wir helfen beim Papierkram", href: "/45b/ablauf#antrag" },
          { title: "Start der Betreuung", desc: "Schnell und unkompliziert", href: "/45b/ablauf#start" },
        ],
      },
    },
    {
      icon: "receipt",
      label: "Abrechnung & Nachweise",
      content: {
        title: "Abrechnung & Nachweise",
        subtitle: "Direktabrechnung oder Kostenerstattung – beides möglich.",
        cards: [
          { title: "Direktabrechnung", badge: "BELIEBT", desc: "Wir rechnen direkt mit der Kasse ab", href: "/45b/abrechnung" },
          { title: "Kostenerstattung", desc: "Sie reichen Unterlagen ein", href: "/45b/abrechnung#erstattung" },
          { title: "Dokumentation", desc: "Leistungsnachweise & Belege", href: "/45b/abrechnung#doku" },
        ],
      },
    },
    {
      icon: "document",
      label: "Vertrag & Kündigung",
      content: {
        title: "Vertrag & Kündigung",
        subtitle: "Flexibel, transparent, jederzeit kündbar.",
        cards: [
          { title: "Vertragsdetails", desc: "Was im Vertrag steht", href: "/45b/vertrag" },
          { title: "Kündigung", desc: "Jederzeit möglich, ohne Frist", href: "/45b/vertrag#kuendigung" },
          { title: "Flexibilität", badge: "BELIEBT", desc: "Leistungen jederzeit anpassen", href: "/45b/vertrag#flexibel" },
        ],
      },
    },
    {
      icon: "question",
      label: "FAQ",
      content: {
        title: "Häufige Fragen",
        subtitle: "Antworten auf die wichtigsten Fragen zum Entlastungsbetrag.",
        cards: [
          { title: "Brauche ich einen Pflegegrad?", badge: "BELIEBT", desc: "Ja, ab Pflegegrad 1", href: "/45b/faq" },
          { title: "Ist es wirklich kostenlos?", desc: "Bei Direktabrechnung: ja", href: "/45b/faq#kosten" },
          { title: "Wie schnell geht es los?", desc: "Oft innerhalb weniger Tage", href: "/45b/faq#start" },
        ],
      },
    },
  ],
  right: [
    {
      type: "promo",
      title: "Entlastungsbetrag nutzen",
      highlight: "131 €/Monat",
      highlightSub: "Pflegegrad 1–5",
      cta: { label: "Kostenlos berechnen", href: "/45b/entlastungsbetrag" },
      icon: "euro",
    },
    {
      type: "info",
      title: "Direktabrechnung vs. Kostenerstattung",
      lines: [
        { label: "Direkt:", value: "Wir rechnen mit Kasse ab." },
        { label: "Erstattung:", value: "Sie reichen Unterlagen ein." },
      ],
      link: { label: "Ablauf ansehen \u2192", href: "/45b/ablauf" },
    },
  ],
  bottom: {
    checks: ["Anerkannt in Berlin", "Erklärung verständlich", "Unterstützung beim Papierkram"],
    link: { label: "FAQ", href: "/45b/faq" },
    cta: { label: "Kostenlos berechnen", href: "/45b/entlastungsbetrag" },
  },
};

/* ---------- Über uns ---------- */
const ueberUnsMega: MegaMenu = {
  sidebar: [
    {
      icon: "building",
      label: "Tonus Dienst GmbH",
      content: {
        title: "Tonus Dienst GmbH",
        subtitle: "Seit über 7 Jahren Ihr Partner für Alltagshilfe in Berlin.",
        cards: [
          { title: "Über das Unternehmen", badge: "BELIEBT", desc: "Geschichte & Mission", href: "/ueber-uns" },
          { title: "Anerkennung & Zertifikate", desc: "Senat Berlin, §45a SGB XI", href: "/ueber-uns#anerkennung" },
          { title: "Unser Versprechen", desc: "Zuverlässig, persönlich, fair", href: "/ueber-uns#versprechen" },
        ],
      },
    },
    {
      icon: "cog",
      label: "So arbeiten wir",
      content: {
        title: "So arbeiten wir",
        subtitle: "Transparent, planbar, mit festen Ansprechpartnern.",
        cards: [
          { title: "Terminplanung & Absprachen", badge: "BELIEBT", desc: "klare Absprachen", href: "/ueber-uns/qualitaet-vertrauen" },
          { title: "Feste Mitarbeiterin & Vertretung", desc: "Kontinuität & Backup", href: "/ueber-uns/qualitaet-vertrauen#mitarbeiter" },
          { title: "Kommunikation & Sprache", desc: "leichter verständlich", href: "/ueber-uns/qualitaet-vertrauen#kommunikation" },
          { title: "Reinigungsmittel & Inventar", desc: "stellt der Kunde", href: "/ueber-uns/qualitaet-vertrauen#inventar" },
        ],
      },
    },
    {
      icon: "map",
      label: "Einsatzgebiet",
      content: {
        title: "Einsatzgebiet Berlin",
        subtitle: "Wir sind in vielen Berliner Bezirken für Sie da.",
        cards: [
          { title: "Bezirke & Abdeckung", badge: "BELIEBT", desc: "Aktuelle Einsatzgebiete", href: "/einsatzgebiet" },
          { title: "Anfahrt & Erreichbarkeit", desc: "Kurze Wege, schnelle Hilfe", href: "/einsatzgebiet#anfahrt" },
        ],
      },
    },
    {
      icon: "phone",
      label: "Kontakt",
      content: {
        title: "Kontakt",
        subtitle: "Wir sind Mo–Fr 9:00–18:00 Uhr für Sie erreichbar.",
        cards: [
          { title: "Telefon", badge: "BELIEBT", desc: "030 610 850 625", href: "/kontakt" },
          { title: "E-Mail & Formular", desc: "Schreiben Sie uns", href: "/kontakt#formular" },
          { title: "Standort", desc: "Berlin", href: "/kontakt#standort" },
        ],
      },
    },
    {
      icon: "briefcase",
      label: "Karriere",
      content: {
        title: "Karriere",
        subtitle: "Werden Sie Teil unseres Teams – wir suchen Verstärkung.",
        cards: [
          { title: "Offene Stellen", badge: "BELIEBT", desc: "Aktuelle Stellenangebote", href: "/karriere" },
          { title: "Bewerbung", desc: "Einfach per E-Mail oder Formular", href: "/karriere#bewerbung" },
          { title: "Vorteile als Mitarbeiter", desc: "Flexible Zeiten, faires Gehalt", href: "/karriere#vorteile" },
        ],
      },
    },
    {
      icon: "shield",
      label: "Rechtliches",
      content: {
        title: "Rechtliches",
        subtitle: "Impressum, Datenschutz und rechtliche Hinweise.",
        cards: [
          { title: "Impressum", desc: "Pflichtangaben nach §5 TMG", href: "/impressum" },
          { title: "Datenschutz", desc: "DSGVO-konforme Datenverarbeitung", href: "/datenschutz" },
        ],
      },
    },
  ],
  right: [
    {
      type: "promo",
      title: "Kontakt",
      highlight: "030 610 850 625",
      highlightSub: "Mo–Fr 9:00–18:00 Uhr",
      cta: { label: "Termin anfragen", href: "/kontakt" },
      icon: "phone",
    },
    {
      type: "info",
      title: "Einsatzgebiet: Berlin",
      desc: "Bezirke & Abdeckung",
      icon: "map",
      link: { label: "Karte / Bezirke \u2192", href: "/einsatzgebiet" },
    },
  ],
  bottom: {
    checks: ["Anerkennung Senat Berlin", "Versicherung", "Qualität"],
    link: { label: "Über Tonus Dienst", href: "/ueber-uns" },
    cta: { label: "Kontakt", href: "/kontakt" },
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
      { title: "FAQ", href: "/45b/faq" },
    ],
  },
  {
    title: "Über uns",
    href: "/ueber-uns",
    children: [
      { title: "Kontakt", href: "/kontakt" },
      { title: "Einsatzgebiet", href: "/einsatzgebiet" },
      { title: "Impressum", href: "/impressum" },
      { title: "Datenschutz", href: "/datenschutz" },
    ],
  },
];

/* ================================================================
   MEGA PANEL SUB-COMPONENT
   ================================================================ */
function MegaPanel({
  data,
  activeTab,
  onTabHover,
}: {
  data: MegaMenu;
  activeTab: number;
  onTabHover: (i: number) => void;
}) {
  const current = data.sidebar[activeTab]?.content;
  if (!current) return null;

  return (
    <div className="bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">
      <div className="flex">
        {/* === Left Sidebar === */}
        <div className="w-[260px] flex-shrink-0 border-r border-[#E0E7E9] py-3">
          {data.sidebar.map((tab, i) => (
            <div
              key={tab.label}
              onMouseEnter={() => onTabHover(i)}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors ${
                i === activeTab
                  ? "text-[#00838F] border-l-[3px] border-[#00838F] bg-[#F7FEFE]"
                  : "text-[#455A64] border-l-[3px] border-transparent hover:bg-[#F7FAFA]"
              }`}
            >
              <span className={i === activeTab ? "text-[#00838F]" : "text-[#90A4AE]"}>
                {icons[tab.icon]}
              </span>
              <span
                className={`text-[15px] ${i === activeTab ? "font-semibold" : "font-medium"}`}
                style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        {/* === Middle Content === */}
        <div className="flex-1 min-w-0 p-6">
          <h3
            className="text-[20px] font-bold text-[#0D2137]"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          >
            {current.title}
          </h3>
          <p
            className="text-[14px] text-[#78909C] mt-1"
            style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
          >
            {current.subtitle}
          </p>
          <div className="border-b border-[#E0E7E9] my-4" />
          <div className="grid grid-cols-2 gap-x-3 gap-y-1">
            {current.cards.map((card) => (
              <Link
                key={card.href + card.title}
                href={card.href}
                className="group flex items-center justify-between gap-2 px-3 py-3 rounded-lg hover:bg-[#F7FAFA] transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-[15px] font-semibold text-[#0D2137] truncate"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {card.title}
                    </span>
                    {card.badge && (
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${
                          card.badge === "BELIEBT"
                            ? "bg-[#E0F7FA] text-[#00838F]"
                            : "bg-[#FFF3E0] text-[#E65100]"
                        }`}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-[13px] text-[#78909C] mt-0.5 truncate"
                    style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
                <ArrowRight />
              </Link>
            ))}
          </div>
        </div>

        {/* === Right Sidebar === */}
        <div className="w-[280px] flex-shrink-0 bg-[#F7FAFA] p-5 flex flex-col gap-4">
          {data.right.map((card, i) =>
            card.type === "promo" ? (
              <div key={i} className="bg-[#E0F7FA] rounded-xl p-5">
                {card.icon && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#00838F]">{icons[card.icon]}</span>
                    <span
                      className="text-[15px] font-semibold text-[#0D2137]"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {card.title}
                    </span>
                  </div>
                )}
                {!card.icon && (
                  <p
                    className="text-[15px] font-semibold text-[#0D2137]"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {card.title}
                  </p>
                )}
                <p
                  className="text-[22px] font-bold text-[#00838F] mt-1"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  {card.highlight}
                </p>
                {card.highlightSub && (
                  <p className="text-[13px] text-[#78909C] mt-0.5">{card.highlightSub}</p>
                )}
                {card.desc && <p className="text-[13px] text-[#78909C] mt-1">{card.desc}</p>}
                {card.cta && (
                  <Link
                    href={card.cta.href}
                    className="block mt-3 text-center py-2.5 px-4 rounded-lg text-white font-semibold text-[14px] transition-all hover:scale-[1.02]"
                    style={{
                      background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
                      fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                    }}
                  >
                    {card.cta.label}
                  </Link>
                )}
              </div>
            ) : (
              <div key={i} className="bg-white rounded-xl p-5 border border-[#E0E7E9]">
                {card.icon ? (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#455A64]">{icons[card.icon]}</span>
                    <p
                      className="text-[15px] font-semibold text-[#0D2137]"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {card.title}
                    </p>
                  </div>
                ) : (
                  <p
                    className="text-[15px] font-semibold text-[#0D2137] mb-2"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {card.title}
                  </p>
                )}
                {card.desc && (
                  <p
                    className={`text-[13px] mt-1 ${card.descTeal ? "text-[#00838F]" : "text-[#78909C]"}`}
                    style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
                  >
                    {card.desc}
                  </p>
                )}
                {card.lines && (
                  <div className="mt-2 space-y-1">
                    {card.lines.map((line, j) => (
                      <p key={j} className="text-[13px] text-[#455A64]">
                        <span className="font-semibold text-[#00838F]">{line.label}</span>{" "}
                        {line.value}
                      </p>
                    ))}
                  </div>
                )}
                {card.link && (
                  <Link
                    href={card.link.href}
                    className="inline-block mt-2 text-[13px] font-semibold text-[#00838F] hover:underline"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {card.link.label}
                  </Link>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-[#F7FAFA] border-t border-[#E0E7E9]">
        <div className="flex items-center gap-6">
          {data.bottom.checks.map((check) => (
            <div key={check} className="flex items-center gap-1.5">
              <CheckIcon />
              <span
                className="text-[13px] text-[#78909C]"
                style={{ fontFamily: "var(--font-source-sans), 'Source Sans 3', sans-serif" }}
              >
                {check}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {data.bottom.link && (
            <Link
              href={data.bottom.link.href}
              className="text-[13px] font-semibold text-[#00838F] hover:underline"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              {data.bottom.link.label}
            </Link>
          )}
          <Link
            href={data.bottom.cta.href}
            className="inline-block px-5 py-2 rounded-full text-white text-[13px] font-semibold transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, #00838F 0%, #005662 100%)",
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
            }}
          >
            {data.bottom.cta.label}
          </Link>
        </div>
      </div>
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

  // Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [tab1, setTab1] = useState(0);
  const [tab2, setTab2] = useState(0);
  const [tab3, setTab3] = useState(0);

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

  const textColor = scrolled ? "text-[#455A64]" : "text-[#0D2137]";
  const hoverColor = "hover:text-[#00838F]";

  const menuTriggerClass = `flex items-center gap-1 font-semibold text-[16px] ${textColor} ${hoverColor} transition-colors px-4 py-2`;

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
        <nav className="hidden lg:flex items-center gap-1 ml-8" aria-label="Hauptnavigation">
          {/* Leistungen */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => { setDropdownOpen(false); setTab1(0); }}
          >
            <button
              className={menuTriggerClass}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Leistungen
              <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`fixed left-1/2 -translate-x-1/2 top-[80px] w-[calc(100%-48px)] max-w-[1140px] pt-2 z-[1001] transition-all duration-200 ${
                dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <MegaPanel data={leistungenMega} activeTab={tab1} onTabHover={setTab1} />
            </div>
          </div>

          {/* §45b Entlastung */}
          <div
            onMouseEnter={() => setDropdown2Open(true)}
            onMouseLeave={() => { setDropdown2Open(false); setTab2(0); }}
          >
            <button
              className={menuTriggerClass}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              §45b Entlastung
              <svg className={`w-4 h-4 transition-transform ${dropdown2Open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`fixed left-1/2 -translate-x-1/2 top-[80px] w-[calc(100%-48px)] max-w-[1140px] pt-2 z-[1001] transition-all duration-200 ${
                dropdown2Open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <MegaPanel data={entlastungMega} activeTab={tab2} onTabHover={setTab2} />
            </div>
          </div>

          {/* Über uns */}
          <div
            onMouseEnter={() => setDropdown3Open(true)}
            onMouseLeave={() => { setDropdown3Open(false); setTab3(0); }}
          >
            <button
              className={menuTriggerClass}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Über uns
              <svg className={`w-4 h-4 transition-transform ${dropdown3Open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`fixed left-1/2 -translate-x-1/2 top-[80px] w-[calc(100%-48px)] max-w-[1140px] pt-2 z-[1001] transition-all duration-200 ${
                dropdown3Open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <MegaPanel data={ueberUnsMega} activeTab={tab3} onTabHover={setTab3} />
            </div>
          </div>
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
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-white z-[999] overflow-y-auto">
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
                {item.children && mobileSubOpen === item.title && (
                  <div className="ml-4 pl-4 border-l-2 border-[#E0E7E9] space-y-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 px-3 text-[16px] text-[#455A64] hover:text-[#00838F] hover:bg-[#F7FAFA] rounded-[8px] transition-colors"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
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
        </div>
      )}
    </header>
  );
}
