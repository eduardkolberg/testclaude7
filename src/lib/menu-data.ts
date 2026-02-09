export interface MenuItem {
  id: string;
  title: string;
  slug: string;
  /** If set, this is a hash anchor on the parent page, not a standalone page */
  anchor?: boolean;
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
          { id: "1-1-1", title: "Haushaltshilfe", slug: "haushaltshilfe", anchor: true },
          { id: "1-1-2", title: "Einkaufshilfe & Besorgungen", slug: "einkaufshilfe", anchor: true },
          { id: "1-1-3", title: "Unterstützung bei Mahlzeiten", slug: "mahlzeiten", anchor: true },
        ],
      },
      {
        id: "1-2",
        title: "Betreuung & Begleitung",
        slug: "betreuung-begleitung",
        children: [
          { id: "1-2-1", title: "Begleitung zu Terminen", slug: "termine", anchor: true },
          { id: "1-2-2", title: "Spaziergänge & Freizeitgestaltung", slug: "spaziergaenge", anchor: true },
        ],
      },
      {
        id: "1-3",
        title: "Entlastung für Angehörige",
        slug: "entlastung-angehoerige",
        children: [
          { id: "1-3-1", title: "Stundenweise Entlastung", slug: "stundenweise", anchor: true },
          { id: "1-3-2", title: "Tagesstruktur & Organisation", slug: "tagesstruktur", anchor: true },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "§45b SGB XI",
    slug: "45b",
    children: [
      { id: "2-1", title: "Entlastungsbetrag erklärt", slug: "entlastungsbetrag" },
      { id: "2-2", title: "Finanzierung", slug: "finanzierung" },
      { id: "2-3", title: "So läuft es ab", slug: "ablauf" },
      { id: "2-4", title: "Abrechnung", slug: "abrechnung" },
      { id: "2-5", title: "FAQ", slug: "faq" },
    ],
  },
  {
    id: "3",
    title: "Über uns",
    slug: "ueber-uns",
    children: [
      { id: "3-1", title: "Tonus Dienst GmbH", slug: "tonus-dienst" },
      { id: "3-2", title: "Qualität & Vertrauen", slug: "qualitaet-vertrauen" },
    ],
  },
];

/**
 * Build a full href for a menu item.
 * Anchored items use parent path + #slug (e.g. /leistungen/alltagsunterstuetzung#haushaltshilfe)
 */
export function buildHref(item: MenuItem, parentPath: string = ""): string {
  if (item.anchor) {
    return `${parentPath}#${item.slug}`;
  }
  return `${parentPath}/${item.slug}`;
}
