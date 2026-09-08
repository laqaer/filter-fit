export type Merv = 8 | 11 | 13;
export type DepthInches = 1 | 2 | 4 | 5;

export type FaceSize = {
  id: string;
  label: string;
  width: number;
  height: number;
  common: boolean;
};

export const faceSizes: FaceSize[] = [
  { id: "14x20", label: "14×20", width: 14, height: 20, common: true },
  { id: "14x25", label: "14×25", width: 14, height: 25, common: true },
  { id: "16x20", label: "16×20", width: 16, height: 20, common: true },
  { id: "16x24", label: "16×24", width: 16, height: 24, common: false },
  { id: "16x25", label: "16×25", width: 16, height: 25, common: true },
  { id: "20x20", label: "20×20", width: 20, height: 20, common: true },
  { id: "20x25", label: "20×25", width: 20, height: 25, common: true },
  { id: "20x30", label: "20×30", width: 20, height: 30, common: true },
  { id: "24x24", label: "24×24", width: 24, height: 24, common: false },
  { id: "24x30", label: "24×30", width: 24, height: 30, common: false },
];

export const depths: { inches: DepthInches; label: string; note: string }[] = [
  { inches: 1, label: "1 inch", note: "Retail slide-in. Least media." },
  { inches: 2, label: "2 inch", note: "Halfway rack. Still check ΔP." },
  { inches: 4, label: "4 inch", note: "Media cabinet. Usual MERV 13 home." },
  { inches: 5, label: "5 inch", note: "Honeywell-style / deep media." },
];

export const mervOptions: {
  value: Merv;
  label: string;
  job: string;
}[] = [
  { value: 8, label: "MERV 8", job: "Dust and lint. Lowest resistance." },
  { value: 11, label: "MERV 11", job: "Everyday household particles." },
  { value: 13, label: "MERV 13", job: "Finer particles — only with airflow room." },
];

export type BrandClass = {
  id: string;
  name: string;
  styleOf: string;
  labeling: string;
  typicalDepths: DepthInches[];
  construction: string;
  changeNotes: string;
};

export const brandClasses: BrandClass[] = [
  {
    id: "retail-boxed",
    name: "Retail boxed",
    styleOf: "Filtrete-style",
    labeling:
      "Often sold on 3M’s MPR scale (600 / 1000 / 1500 / 1900 / 2800) rather than MERV. MPR 1000 is commonly treated as MERV 11-class; MPR 1500–1900 as MERV 12–13-class. Those are class comparisons, not lab conversions.",
    typicalDepths: [1, 4],
    construction:
      "Pleated synthetic media in a paperboard frame. Heavy 1-inch presence at hardware stores. Some 4-inch SKUs exist; size runs are narrower than made-to-order shops.",
    changeNotes:
      "Easy to find in 16×25×1 and other common faces. Higher MPR 1-inch filters load faster — plan 30–60 days in a busy house, not a calendar year.",
  },
  {
    id: "value-pleated",
    name: "Value pleated",
    styleOf: "Aerostar-style",
    labeling:
      "Usually printed MERV 8 / 11 / 13 on the carton. Useful when you want the ASHRAE scale instead of a house brand rating.",
    typicalDepths: [1, 4, 5],
    construction:
      "Commodity pleated media, cardboard frame, sold heavily online. Build quality varies by lot; look for a rigid frame that does not collapse in the rack.",
    changeNotes:
      "Good for stocking a known size. Confirm the actual (not nominal) dimensions on the spec line before you buy a six-pack.",
  },
  {
    id: "direct-cut",
    name: "Direct / cut-to-size",
    styleOf: "Filterbuy-style",
    labeling:
      "MERV printed on the product page. Depths typically 1, 2, 4, and 5 inches, including odd faces that big-box stores skip.",
    typicalDepths: [1, 2, 4, 5],
    construction:
      "Pleated media, cardboard frame, often sold as a subscription. The value is the size matrix, not a secret media formula.",
    changeNotes:
      "Measure the slot. These shops will cut an odd nominal; they will not fix a collapsed 1-inch frame you left in for six months.",
  },
];

export type SizeRow = {
  nominal: string;
  typicalActual: string;
  commonDepths: string;
  notes: string;
};

export const sizeChart: SizeRow[] = [
  {
    nominal: "14×20×1",
    typicalActual: "13½ × 19½ × ¾",
    commonDepths: "1",
    notes: "Smaller returns and some older air handlers.",
  },
  {
    nominal: "14×25×1",
    typicalActual: "13½ × 24½ × ¾",
    commonDepths: "1",
    notes: "Common upflow closet systems.",
  },
  {
    nominal: "16×20×1",
    typicalActual: "15½ × 19½ × ¾",
    commonDepths: "1, 4",
    notes: "Often paired with a second filter on a return grille.",
  },
  {
    nominal: "16×25×1",
    typicalActual: "15½ × 24½ × ¾",
    commonDepths: "1, 2, 4, 5",
    notes: "The default hardware-store face. Also sold as 16×25×4.",
  },
  {
    nominal: "16×25×4",
    typicalActual: "~15⅜–15⅞ × 24⅜–24⅞ × 3¾",
    commonDepths: "4",
    notes: "Media-cabinet size. Do not force a 1-inch pad into a 4-inch rack without a proper adapter.",
  },
  {
    nominal: "20×20×1",
    typicalActual: "19½ × 19½ × ¾",
    commonDepths: "1, 4",
    notes: "Square returns; easy to rotate the wrong way. Arrow still faces the furnace.",
  },
  {
    nominal: "20×25×1",
    typicalActual: "19½ × 24½ × ¾",
    commonDepths: "1, 2, 4, 5",
    notes: "Second-most common retail face after 16×25.",
  },
  {
    nominal: "20×25×4",
    typicalActual: "~19⅜–19⅞ × 24⅜–24⅞ × 3¾",
    commonDepths: "4",
    notes: "Typical aftermarket media-cabinet upgrade size.",
  },
  {
    nominal: "20×30×1",
    typicalActual: "19½ × 29½ × ¾",
    commonDepths: "1, 4",
    notes: "Larger returns. Watch sag on cheap 1-inch frames.",
  },
  {
    nominal: "24×24×1",
    typicalActual: "23½ × 23½ × ¾",
    commonDepths: "1",
    notes: "Less common; measure before assuming 20×25 will ‘almost’ fit.",
  },
  {
    nominal: "24×30×1",
    typicalActual: "23½ × 29½ × ¾",
    commonDepths: "1, 4",
    notes: "Large filter grilles. A 4-inch version here is a lot of media.",
  },
];

export type MervRow = {
  merv: Merv;
  particles: string;
  oneInchCharacter: string;
  deepMediaCharacter: string;
  changeHint: string;
};

export const mervRows: MervRow[] = [
  {
    merv: 8,
    particles: "Captures most lint, dust, and pollen-scale particles (ASHRAE 52.2 band around 3–10 μm).",
    oneInchCharacter: "Usually the lowest initial resistance in a 1-inch slot. Does not stay that way if you never change it.",
    deepMediaCharacter: "Plenty of headroom in 4-inch. Often chosen when the equipment is already static-limited.",
    changeHint: "30–90 days depending on dust and runtime. A black 1-inch MERV 8 is a blower restriction.",
  },
  {
    merv: 11,
    particles: "Better on 1–3 μm household dust. The usual everyday target for 1-inch racks.",
    oneInchCharacter: "Noticeably tighter than MERV 8, still the default ‘step up’ that most 1-inch systems tolerate when returns are healthy.",
    deepMediaCharacter: "Easy airflow in 4-inch. A conservative pick if you want finer dust without pushing MERV 13.",
    changeHint: "Often 60–90 days in 4-inch; closer to 30–60 in 1-inch with pets.",
  },
  {
    merv: 13,
    particles: "ASHRAE 52.2 MERV 13 requires at least 50% efficiency in the 0.3–1.0 μm band. That is finer household and some smoke-related particles — not a HEPA room filter.",
    oneInchCharacter: "Highest common 1-inch resistance. Can be fine on a variable-speed air handler with a large return. Can choke a PSC furnace with a small 1-inch slot.",
    deepMediaCharacter: "This is how most homes should run MERV 13: more media, lower velocity, slower loading.",
    changeHint: "Do not ‘set and forget.’ A loaded MERV 13 is a different product than a clean one.",
  },
];

export type Recommendation = {
  headline: string;
  body: string;
  caution?: string;
  related: string[];
};

export function recommend(
  faceId: string,
  depth: DepthInches,
  merv: Merv,
): Recommendation {
  const face = faceSizes.find((item) => item.id === faceId);
  const sizeLabel = face ? `${face.label}×${depth}` : `${faceId}×${depth}`;
  const sixteen = faceId === "16x25";

  if (depth === 1 && merv === 13) {
    return {
      headline: `${sizeLabel}: 1-inch MERV 13 is the tightest common combo`,
      body: `A 1-inch slot has little media area, so air has to push through a dense pack. MERV 13 can work on some ${sizeLabel} systems — especially variable-speed air handlers with a large return — but it is the first place older PSC furnaces lose CFM, ice a coil, or short-cycle. Prefer MERV 11 in 1-inch unless you have confirmed airflow headroom, or move the same MERV 13 into a 4-inch cabinet.`,
      caution:
        "If the current 1-inch filter is already gray at 30 days, stepping to MERV 13 without more depth is usually the wrong move.",
      related: [
        "/merv-11-vs-13-1-inch",
        "/merv-13-safe-for-furnace",
        "/1-inch-vs-4-inch-merv-13",
        ...(sixteen ? ["/16x25x1-furnace-filters"] : []),
      ],
    };
  }

  if (depth === 1 && merv === 11) {
    return {
      headline: `${sizeLabel}: MERV 11 is the usual 1-inch everyday pick`,
      body: `In a 1-inch rack, MERV 11 is the step most houses can take without turning the filter into the most restrictive fitting on the return. You still need a rigid frame, the correct actual size (not just the ${face?.label ?? faceId} nominal), and a change interval that matches pets and runtime.`,
      caution:
        "MERV 11 is not a free upgrade if the slot is undersized or the filter is left in for a season.",
      related: [
        "/merv-11-vs-13-1-inch",
        "/furnace-filter-size-depth-chart",
        ...(sixteen ? ["/16x25x1-furnace-filters"] : []),
      ],
    };
  }

  if (depth === 1 && merv === 8) {
    return {
      headline: `${sizeLabel}: MERV 8 keeps 1-inch resistance low — if you change it`,
      body: `A 1-inch MERV 8 is the low-resistance everyday filter. It protects the blower from lint and dust. It will not stay low-resistance if it sits through a heating season. If you want finer particles, raise depth before you raise MERV.`,
      related: [
        "/furnace-filter-size-depth-chart",
        "/1-inch-vs-4-inch-merv-13",
        ...(sixteen ? ["/16x25x1-furnace-filters"] : []),
      ],
    };
  }

  if (depth === 2 && merv === 13) {
    return {
      headline: `${sizeLabel}: 2-inch MERV 13 is a middle ground, not a 4-inch cabinet`,
      body: `Two inches of media is better than one, but it is still a thin pack compared with a 4- or 5-inch media cabinet. Treat 2-inch MERV 13 like a cautious upgrade: check the data-sheet initial resistance, watch supply temperature and coil behavior after the swap, and do not stretch the change interval.`,
      related: ["/merv-13-safe-for-furnace", "/1-inch-vs-4-inch-merv-13"],
    };
  }

  if (depth === 2) {
    return {
      headline: `${sizeLabel}: 2-inch MERV ${merv} is extra media, still a slide-in`,
      body: `A 2-inch rack gives you more pleat area than a 1-inch pad at the same MERV. That is the right reason to use it. It is not a license to ignore the furnace manual or leave the filter in until it is felted.`,
      related: ["/furnace-filter-size-depth-chart", "/merv-13-safe-for-furnace"],
    };
  }

  if (depth >= 4 && merv === 13) {
    return {
      headline: `${sizeLabel}: this is how most homes should run MERV 13`,
      body: `A ${depth}-inch MERV 13 uses media area to keep face velocity down. That is why depth beats a printed MERV number. Confirm the cabinet actually takes ${depth} inches (not a 1-inch pad standing in a deep slot), seat the filter so air cannot bypass the gasket, and still change it before it loads like a 1-inch pad.`,
      related: [
        "/1-inch-vs-4-inch-merv-13",
        "/merv-13-safe-for-furnace",
        "/furnace-filter-size-depth-chart",
      ],
    };
  }

  return {
    headline: `${sizeLabel}: MERV ${merv} in a ${depth}-inch cabinet leaves airflow room`,
    body: `With ${depth} inches of media, MERV ${merv} is rarely the limiting fitting — a dirty filter, a crushed flex return, or an undersized grille usually is. Use the extra depth for longer service intervals, not for forgetting the filter exists.`,
    related: ["/1-inch-vs-4-inch-merv-13", "/furnace-filter-size-depth-chart"],
  };
}

export function brandsForDepth(depth: DepthInches): BrandClass[] {
  return brandClasses.filter((brand) => brand.typicalDepths.includes(depth));
}
