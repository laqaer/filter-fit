export type Guide = {
  href: string;
  title: string;
  kicker: string;
  dek: string;
  description: string;
};

export const guides: Guide[] = [
  {
    href: "/merv-11-vs-13-1-inch",
    title: "MERV 11 vs 13 in a 1-inch slot",
    kicker: "Thin media",
    dek: "Why a 1-inch MERV 13 can raise pressure drop and short-cycle a furnace that a MERV 11 would leave alone.",
    description:
      "Compare 1-inch MERV 11 and MERV 13 furnace filters: particle capture, pressure drop, short-cycling, and when to stay at 11.",
  },
  {
    href: "/16x25x1-furnace-filters",
    title: "16×25×1 furnace filters",
    kicker: "Common size",
    dek: "MERV 8 / 11 / 13 in the most common retail size, with Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake scores.",
    description:
      "Compare 16x25x1 furnace filters at MERV 8, 11, and 13. Brand-class notes for Filtrete, Aerostar, and Filterbuy-style filters.",
  },
  {
    href: "/1-inch-vs-4-inch-merv-13",
    title: "1-inch vs 4-inch MERV 13",
    kicker: "Depth first",
    dek: "Media area beats a MERV number. When a 4-inch cabinet is the real upgrade, and when a 1-inch rack is enough.",
    description:
      "Why 4-inch MERV 13 usually flows better than 1-inch MERV 13, and when it is worth upgrading the filter cabinet.",
  },
  {
    href: "/merv-13-safe-for-furnace",
    title: "Is MERV 13 safe for your furnace?",
    kicker: "Airflow first",
    dek: "When MERV 13 is fine, when it chokes PSC blowers, and the warning signs that the filter is winning against the equipment.",
    description:
      "When a MERV 13 furnace filter is safe versus when it restricts airflow. PSC vs ECM, static pressure, and manufacturer limits.",
  },
  {
    href: "/furnace-filter-size-depth-chart",
    title: "Furnace filter size and depth chart",
    kicker: "Measure twice",
    dek: "Nominal size, typical actual size, and 1 / 2 / 4 / 5-inch depths — plus how to read the slot instead of the box.",
    description:
      "Nominal vs actual furnace filter sizes and slot-depth chart. How to measure the rack before you order.",
  },
];

export function guideByHref(href: string): Guide | undefined {
  return guides.find((guide) => guide.href === href);
}
