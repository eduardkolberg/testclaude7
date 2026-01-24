export interface MenuItem {
  id: string;
  title: string;
  slug: string;
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    id: "1",
    title: "Unser Zuhause",
    slug: "unser-zuhause",
    children: [
      {
        id: "1-1",
        title: "Philosophie & Konzept",
        slug: "philosophie-konzept",
        children: [
          { id: "1-1-1", title: "Selbstbestimmt leben: Unsere Grundwerte", slug: "grundwerte" },
          { id: "1-1-2", title: "Gemeinschaft statt Einsamkeit", slug: "gemeinschaft" },
          { id: "1-1-3", title: "Ein ganz normales Wohnumfeld", slug: "wohnumfeld" },
        ],
      },
      {
        id: "1-2",
        title: "Räumlichkeiten & Ausstattung",
        slug: "raeumlichkeiten",
        children: [
          { id: "1-2-1", title: "Private Zimmer: Ihr persönlicher Rückzugsort", slug: "private-zimmer" },
          { id: "1-2-2", title: "Gemeinschaftsbereiche: Das Herz der WG", slug: "gemeinschaftsbereiche" },
          { id: "1-2-3", title: "Barrierefreiheit & Komfort", slug: "barrierefreiheit" },
          { id: "1-2-4", title: "Möblierung: eigene Möbel oder Hausmöbel", slug: "moeblierung" },
          { id: "1-2-5", title: "Medien & Internet: TV (optional) & WLAN", slug: "medien-internet" },
        ],
      },
      {
        id: "1-3",
        title: "Alltag & Leben",
        slug: "alltag-leben",
        children: [
          { id: "1-3-1", title: "Tagesablauf & Aktivitäten", slug: "tagesablauf" },
          { id: "1-3-2", title: "Gemeinsame Mahlzeiten & frische Küche", slug: "mahlzeiten" },
          { id: "1-3-3", title: "Die Rolle der Alltagsbegleiter", slug: "alltagsbegleiter" },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Leistungen & Kosten",
    slug: "leistungen-kosten",
    children: [
      {
        id: "2-1",
        title: "Unser Servicepaket",
        slug: "servicepaket",
        children: [
          { id: "2-1-1", title: "24-Stunden-Präsenz & Sicherheit", slug: "praesenz-sicherheit" },
          { id: "2-1-2", title: "Verpflegung & Hauswirtschaft", slug: "verpflegung" },
          { id: "2-1-3", title: "Alltags- & Freizeitgestaltung", slug: "freizeitgestaltung" },
        ],
      },
      {
        id: "2-2",
        title: "Pflege & Betreuung",
        slug: "pflege-betreuung",
        children: [
          { id: "2-2-1", title: "Das Prinzip der freien Pflegedienstwahl", slug: "pflegedienstwahl" },
          { id: "2-2-2", title: "Was leistet ein ambulanter Pflegedienst?", slug: "ambulanter-pflegedienst" },
          { id: "2-2-3", title: "Nahtlose Koordination vor Ort", slug: "koordination" },
        ],
      },
      {
        id: "2-3",
        title: "Kosten & Finanzierung",
        slug: "kosten-finanzierung",
        children: [
          { id: "2-3-1", title: "Transparente Kostenaufstellung", slug: "kostenaufstellung" },
          { id: "2-3-2", title: "Finanzierungshilfen der Pflegekasse", slug: "finanzierungshilfen" },
          { id: "2-3-3", title: "Wohngruppenzuschlag & Zuschüsse", slug: "wohngruppenzuschlag" },
          { id: "2-3-4", title: "Nebenkosten & Inklusivleistungen", slug: "nebenkosten" },
          { id: "2-3-5", title: "Kaution: Höhe, Anlage, Rückzahlung", slug: "kaution" },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Information & Kontakt",
    slug: "information-kontakt",
    children: [
      {
        id: "3-1",
        title: "Standort & Team",
        slug: "standort-team",
        children: [
          { id: "3-1-1", title: "Lage im Herzen von Braunschweig", slug: "lage" },
          { id: "3-1-2", title: "Unser Team stellt sich vor", slug: "team" },
          { id: "3-1-3", title: "Anfahrt & Erreichbarkeit", slug: "anfahrt" },
        ],
      },
      {
        id: "3-2",
        title: "Der Weg zu uns",
        slug: "weg-zu-uns",
        children: [
          { id: "3-2-1", title: "Beratung & Besichtigung vereinbaren", slug: "beratung" },
          { id: "3-2-2", title: "Informationsmaterial & Downloads", slug: "downloads" },
          { id: "3-2-3", title: "Mietvertrag: Ablauf, Unterlagen & Fristen", slug: "mietvertrag" },
          { id: "3-2-4", title: "Häufig gestellte Fragen (FAQ)", slug: "faq" },
        ],
      },
      {
        id: "3-3",
        title: "Kontakt aufnehmen",
        slug: "kontakt",
        children: [
          { id: "3-3-1", title: "Kontaktformular & E-Mail", slug: "kontaktformular" },
          { id: "3-3-2", title: "Telefonische Erreichbarkeit", slug: "telefon" },
          { id: "3-3-3", title: "Adresse & Öffnungszeiten", slug: "adresse" },
        ],
      },
    ],
  },
];
