export interface MenuItem {
  id: string;
  title: string;
  slug: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    id: "1",
    title: "Leistungen",
    slug: "leistungen",
    children: [
      {
        id: "1-1",
        title: "Alltagsunterstützung",
        slug: "alltagsunterstuetzung",
        children: [
          { id: "1-1-1", title: "Haushaltshilfe (Reinigung & Ordnung)", slug: "haushaltshilfe" },
          { id: "1-1-2", title: "Einkaufshilfe & Besorgungen", slug: "einkaufshilfe" },
          { id: "1-1-3", title: "Unterstützung bei Mahlzeiten", slug: "mahlzeiten" },
        ],
      },
      {
        id: "1-2",
        title: "Betreuung & Begleitung",
        slug: "betreuung-begleitung",
        children: [
          { id: "1-2-1", title: "Begleitung zu Terminen (Arzt, Behörden)", slug: "termine" },
          { id: "1-2-2", title: "Spaziergänge & Freizeitgestaltung", slug: "freizeitgestaltung" },
        ],
      },
      {
        id: "1-3",
        title: "Entlastung für Angehörige",
        slug: "entlastung-angehoerige",
        children: [
          { id: "1-3-1", title: "Stundenweise Entlastung", slug: "stundenweise" },
          { id: "1-3-2", title: "Unterstützung bei Tagesstruktur & Organisation", slug: "tagesstruktur" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "§45b SGB XI & Abrechnung",
    slug: "entlastungsbetrag-abrechnung",
    children: [
      {
        id: "2-1",
        title: "Entlastungsbetrag verständlich erklärt",
        slug: "erklaerung",
        children: [
          { id: "2-1-1", title: "Was ist §45b SGB XI?", slug: "was-ist-paragraph-45b" },
          { id: "2-1-2", title: "Anspruch & Pflegegrad (1–5)", slug: "anspruch-pflegegrad" },
        ],
      },
      {
        id: "2-2",
        title: "Finanzierung",
        slug: "finanzierung",
        children: [
          { id: "2-2-1", title: "131 € pro Monat: So wird es genutzt", slug: "131-euro-nutzung" },
          { id: "2-2-2", title: "Kombinationen & Restbeträge", slug: "kombinationen" },
        ],
      },
      {
        id: "2-3",
        title: "So läuft es ab",
        slug: "ablauf",
        children: [
          { id: "2-3-1", title: "Ihr Weg zur Hilfe (Schritt für Schritt)", slug: "weg-zur-hilfe" },
          { id: "2-3-2", title: "Erstgespräch & Bedarfsermittlung", slug: "erstgespraech" },
        ],
      },
      {
        id: "2-4",
        title: "Abrechnung mit der Pflegekasse",
        slug: "pflegekasse",
        children: [
          { id: "2-4-1", title: "Direktabrechnung", slug: "direktabrechnung" },
          { id: "2-4-2", title: "Kostenerstattung (Unterlagen & Ablauf)", slug: "kostenerstattung" },
        ],
      },
      { id: "2-5", title: "FAQ", slug: "faq" },
    ],
  },
  {
    id: "3",
    title: "Über uns",
    slug: "ueber-uns",
    children: [
      { id: "3-1", title: "Tonus Dienst GmbH", slug: "tonus-dienst" },
      { id: "3-2", title: "Qualität & Vertrauen", slug: "qualitaet" },
      { id: "3-3", title: "Kontakt", slug: "kontakt" },
      { id: "3-4", title: "Einsatzgebiet (Berlin & Umgebung)", slug: "einsatzgebiet" },
      { id: "3-5", title: "Karriere", slug: "karriere" },
      {
        id: "3-6",
        title: "Rechtliches",
        slug: "rechtliches",
        children: [
          { id: "3-6-1", title: "Impressum", slug: "impressum" },
          { id: "3-6-2", title: "Datenschutz", slug: "datenschutz" },
        ],
      },
    ],
  },
];
