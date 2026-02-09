/**
 * CMS-like settings for Tonus Dienst
 * All configurable values in one place — no hardcoded numbers in components.
 */

export const settings = {
  company: {
    name: "Tonus Dienst GmbH",
    legalName: "Tonus Dienst GmbH",
    slogan: "Pflege in Berlin \u2013 Mit Herz und Seele",
    phone: "+4930610850625",
    phoneFormatted: "030 610 850 625",
    email: "info@ebox.berlin",
    address: {
      street: "Kurfürstenstraße 114",
      zip: "10787",
      city: "Berlin",
      country: "DE",
    },
    hrb: "HRB 210758 B",
    ceo: "Kober Swetlana",
    ceoTitle: "Geschäftsführerin",
    foundingYear: 2018,
    website: "https://tonusdienst.de",
    openingHours: "Mo\u2013Fr 9:00\u201318:00 Uhr",
  },

  entlastungsbetrag: {
    monthlyAmount: 131,
    yearlyAmount: 1572,
    /** Nicht genutzte Beträge Vorjahr bis 30.06 übertragbar */
    rolloverDeadline: "30. Juni",
    maxRolloverMonths: 18,
  },

  /** Pflegegrade 1-5: all get 131 EUR */
  pflegegrade: [
    { grad: 1, entlastungsbetrag: 131 },
    { grad: 2, entlastungsbetrag: 131 },
    { grad: 3, entlastungsbetrag: 131 },
    { grad: 4, entlastungsbetrag: 131 },
    { grad: 5, entlastungsbetrag: 131 },
  ],

  /** Service rates for the calculator */
  serviceRates: {
    haushaltshilfe: { label: "Haushaltshilfe (Reinigung & Ordnung)", ratePerHour: 35, category: "alltagsunterstuetzung" },
    einkaufshilfe: { label: "Einkaufshilfe & Besorgungen", ratePerHour: 35, category: "alltagsunterstuetzung" },
    mahlzeiten: { label: "Unterstützung bei Mahlzeiten", ratePerHour: 35, category: "alltagsunterstuetzung" },
    arztbegleitung: { label: "Begleitung zu Terminen", ratePerHour: 35, category: "betreuung" },
    spaziergaenge: { label: "Spaziergänge & Freizeitgestaltung", ratePerHour: 35, category: "betreuung" },
    entlastung_stundenweise: { label: "Stundenweise Entlastung", ratePerHour: 35, category: "entlastung" },
    tagesstruktur: { label: "Tagesstruktur & Organisation", ratePerHour: 35, category: "entlastung" },
  } as Record<string, { label: string; ratePerHour: number; category: string }>,

  /** Fallback rate if service not found */
  fallbackRate: 35,

  /** PLZ whitelist for Berlin service area */
  plzWhitelist: {
    ranges: [
      { from: 10115, to: 14199 },
    ],
    description: "Berlin und nähere Umgebung",
  },

  /** Districts served */
  districts: [
    "Mitte",
    "Charlottenburg-Wilmersdorf",
    "Schöneberg",
    "Tempelhof",
    "Steglitz-Zehlendorf",
    "Neukölln",
    "Friedrichshain-Kreuzberg",
    "Spandau",
    "Reinickendorf",
    "Pankow",
    "Lichtenberg",
    "Marzahn-Hellersdorf",
  ],

  /** Trust stats for the homepage */
  trustStats: {
    yearsExperience: 7,
    customersServed: 500,
    googleRating: 4.9,
  },

  /** FAQ data shared across pages */
  homeFaqs: [
    {
      q: "Was ist der Entlastungsbetrag nach \u00a745b SGB XI?",
      a: "Der Entlastungsbetrag ist eine Leistung der Pflegekasse in Höhe von 131 \u20ac monatlich. Er steht jedem Pflegebedürftigen mit Pflegegrad 1 bis 5 zu, der zu Hause gepflegt wird. Er kann für anerkannte Angebote zur Unterstützung im Alltag genutzt werden \u2013 wie unsere Leistungen.",
    },
    {
      q: "Muss ich den Entlastungsbetrag selbst beantragen?",
      a: "Nein, einen gesonderten Antrag müssen Sie in der Regel nicht stellen. Der Anspruch besteht automatisch mit Ihrem Pflegegrad. Wir unterstützen Sie bei allen nötigen Unterlagen und kümmern uns um die Abrechnung mit Ihrer Pflegekasse.",
    },
    {
      q: "Welche Leistungen kann ich über den Entlastungsbetrag finanzieren?",
      a: "Alle unsere Leistungen \u2013 von der Haushaltshilfe über Einkaufshilfe bis hin zur Begleitung zu Arztterminen \u2013 können über den Entlastungsbetrag abgerechnet werden. Wir sind als Anbieter nach \u00a745b SGB XI vom Land Berlin anerkannt.",
    },
    {
      q: "Kommen bei mir zusätzliche Kosten auf mich zu?",
      a: "In der Regel nicht. Der Entlastungsbetrag deckt unsere Leistungen ab. Sollte Ihr Bedarf darüber hinausgehen, besprechen wir das transparent im Vorfeld. Es gibt keine versteckten Kosten.",
    },
    {
      q: "In welchen Bezirken sind Sie tätig?",
      a: "Wir sind in ganz Berlin und der näheren Umgebung im Einsatz. Rufen Sie uns einfach an \u2013 wir prüfen gerne, ob wir auch in Ihrer Nähe tätig sind.",
    },
    {
      q: "Wie schnell kann die Hilfe beginnen?",
      a: "Nach unserem Erstgespräch kann die Unterstützung in der Regel innerhalb weniger Tage starten. Wir wissen, dass Hilfe oft dringend benötigt wird, und reagieren so schnell wie möglich.",
    },
    {
      q: "Kann ich nicht genutzte Beträge ansparen?",
      a: "Ja! Nicht genutzte Entlastungsbeträge können ins Folgequartal übertragen werden. Beträge aus dem Vorjahr können bis zum 30. Juni des Folgejahres noch eingesetzt werden. Wir beraten Sie gerne dazu.",
    },
  ],
};

/** Helper: check if a PLZ is in the service area */
export function isPLZInServiceArea(plz: string | number): boolean {
  const num = typeof plz === "string" ? parseInt(plz, 10) : plz;
  if (isNaN(num)) return false;
  return settings.plzWhitelist.ranges.some((r) => num >= r.from && num <= r.to);
}

/** Helper: calculate budget from settings */
export function calculateBudget(months: number, alreadyUsed: number = 0): number {
  return Math.max(0, months * settings.entlastungsbetrag.monthlyAmount - alreadyUsed);
}

/** Helper: calculate hours from budget and rate */
export function calculateHours(budget: number, ratePerHour: number): number {
  if (ratePerHour <= 0) return 0;
  return Math.floor((budget / ratePerHour) * 10) / 10;
}

/** Helper: calculate visits from hours */
export function calculateVisits(hours: number, hoursPerVisit: number = 2): number {
  if (hoursPerVisit <= 0) return 0;
  return Math.floor(hours / hoursPerVisit);
}
