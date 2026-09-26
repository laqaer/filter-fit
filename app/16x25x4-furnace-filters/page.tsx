import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { AmazonShopExamples } from "@/components/amazon-shop-examples";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { brandClasses, mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd, faqPageJsonLd, type FaqEntry } from "@/lib/schema";

const title = "16×25×4 furnace filters and air filters: MERV 8 vs 11 vs 13";
const description =
  "16x25x4 furnace filters and air filters are the same pad. MERV 8, 11, and 13 in a media cabinet — actual size, 4-inch vs 1-inch, and brand classes, no fake scores.";

const faq: readonly FaqEntry[] = [
  {
    question: "Is a 16×25×4 furnace filter the same as an air filter?",
    answer: [
      "Yes. Furnace filter and air filter are two names for this nominal 16×25 media filter. The carton wording does not change the pad. Match the cabinet model and all three actual dimensions.",
    ],
  },
  {
    question: "Should a 4-inch 16×25 slot use MERV 11 or MERV 13?",
    answer: [
      "MERV 11 is the conservative pick in this cabinet: easy airflow and finer household dust. MERV 13 is how most homes should run that rating on this media-cabinet face — more media, lower velocity, slower loading — and ASHRAE 52.2 requires at least 50% efficiency in the 0.3–1.0 μm band. That is finer household dust, not a HEPA room filter, and a loaded MERV 13 is a different product than a clean one. A 4-inch label is not a promise that every SKU is gentle. Read the data-sheet initial resistance and the furnace or air-handler manual. Depth versus a 1-inch pad is the ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch guide" },
      ".",
    ],
  },
  {
    question: "Can I put a 16×25×1 filter in a 16×25×4 rack?",
    answer: [
      "No. A 16×25×1 does not become the correct media-cabinet replacement because the face size matches. A loose pad can tip or allow air to bypass it. Use the cabinet-approved filter and depth, or a manufacturer-approved adapter; do not crush a thicker filter into a thinner slot. The slide-in slot is the ",
      { href: "/16x25x1-furnace-filters", label: "16×25×1 comparison" },
      ".",
    ],
  },
  {
    question: "What is the actual size of a nominal 16×25×4 filter?",
    answer: [
      "There is no single interchangeable actual size. Width, height, and depth are manufacturer-specific and vary by product family. Depth examples span roughly 3⅝–4⅜ inches; that is not a compatibility range, and filters within it are not interchangeable. Filterbuy lists its standard 16×25×4 at 15.5 × 24.5 × 3.63 inches. Some nominal 4-inch cabinet replacements are sold as 16×25×5 and measure 15.75 × 24.75 × 4.38 inches. A different nominal label can describe the required replacement; it does not authorize fitting an arbitrary 5-inch filter. 15⅜ is not the same pad as 15⅞. Match all three actual dimensions and the approved replacement part. The ",
      { href: "/furnace-filter-size-depth-chart", label: "size and depth chart" },
      " is a starting point, not a substitute for the cabinet specifications.",
    ],
  },
  {
    question: "How often should I change a 16×25×4 filter?",
    answer: [
      "Change it by dust and runtime. Four inches of media loads slower than a 1-inch 16×25, so the interval stretches. It does not disappear. On this face, MERV 8 is often 30–90 days, MERV 11 is often 60–90 days, and MERV 13 is not set-and-forget. A printed “6 month” or “12 month” claim is a marketing interval. Pets, renovation dust, and a furnace that runs all winter still write the calendar.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/16x25x4-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/16x25x4-furnace-filters" },
};

export default function Size16x25x4Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/16x25x4-furnace-filters",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <GuideHero
        kicker="Media cabinet"
        title="16×25×4 furnace filters and air filters are the same pad"
        dek="Furnace filter and air filter are two names for this nominal 16×25 media filter. MERV 8, 11, and 13 — match the cabinet model and all three actual dimensions, not the nominal depth alone."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>16×25×4</strong> is a nominal size, not a single set of actual dimensions.
          Width, height, and depth are manufacturer-specific and vary by product family. Depth examples span
          roughly <strong>3⅝–4⅜ inches</strong>; that is not a compatibility range, and filters
          within it are not interchangeable. Match all three actual dimensions and the approved
          replacement part for your cabinet model before ordering. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> is a starting
          point, not a substitute for the cabinet specifications. For a 1-inch slide-in, use the{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1 comparison</Link> instead.
        </p>
        <p>
          For example, <a href="https://filterbuy.com/air-filters/16x25x4/">Filterbuy lists its
          standard 16×25×4 at 15.5 × 24.5 × 3.63 inches</a>. Its{" "}
          <a href="https://filterbuy.com/brand/pro1-iaq-air-filters/pro1-iaq-f1612-16x25x4replacement-filter/merv-11/">
            Honeywell compatibility note
          </a> points some nominal 4-inch cabinet replacements to a product sold as 16×25×5,
          measuring 15.75 × 24.75 × 4.38 inches. A different nominal label can describe the
          required replacement; it does not authorize fitting an arbitrary 5-inch filter.
        </p>
        <Callout title="Do not substitute a thinner pad without an approved adapter" tone="warn">
          A 16×25×1 does not become the correct media-cabinet replacement because the face size
          matches. A loose pad can tip or allow air to bypass it. Use the cabinet-approved filter
          and depth, or a manufacturer-approved adapter; do not crush a thicker filter into a
          thinner slot.
        </Callout>

        <h2>Why 4-inch instead of 1-inch on this face</h2>
        <p>
          The face is still 16×25. The extra depth is extra media, so the same MERV usually runs at
          lower velocity than a{" "}
          <Link href="/16x25x1-furnace-filters">1-inch 16×25</Link>. That is the{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch</Link> argument on the common
          media-cabinet face: depth is how most houses run finer filtration without turning the
          filter into the tightest fitting on the return. It is not a promise that every 4-inch SKU
          is gentle. Read the data-sheet initial resistance and the furnace or air-handler manual.
          We will not invent a Pascal number for a filter we did not test.
        </p>

        <h2>MERV 8 / 11 / 13 in this cabinet</h2>
        <p>
          ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort score and not a
          medical claim. On a 4-inch 16×25 the usual question is how fine you need the dust, and
          whether you will change the pad, not whether the slot can physically hold a pleat.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 16x25x4 cabinet</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 16×25×4 cabinet</th>
              <th scope="col">Change habit</th>
            </tr>
          </thead>
          <tbody>
            {mervRows.map((row) => (
              <tr key={row.merv}>
                <td className="font-semibold text-ink">{row.merv}</td>
                <td>{row.particles}</td>
                <td>{row.deepMediaCharacter}</td>
                <td>{row.changeHint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AmazonShopExamples face="16x25x4" />

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 16×25×4 products the way a careful shopper already thinks — retail
          boxed, value pleated, and cut-to-size — instead of inventing a 9.7. Street prices move.
          Media lots move. A score would be fiction by next week.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">Filtrete, Aerostar, and Filterbuy style brand classes</caption>
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Labeling</th>
              <th scope="col">What to inspect</th>
            </tr>
          </thead>
          <tbody>
            {brandClasses.map((brand) => (
              <tr key={brand.id}>
                <td>
                  <div className="font-semibold text-ink">{brand.name}</div>
                  <div className="text-sm text-ink-soft">{brand.styleOf}</div>
                </td>
                <td>{brand.labeling}</td>
                <td>
                  {brand.construction} {brand.changeNotes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-fit mt-10">
        <h3>Retail boxed (Filtrete-style)</h3>
        <p>
          Hardware walls are thick with 16×25×1 and thinner on 4-inch. Some Filtrete-style media
          cabinets exist; the size run is narrower than the 1-inch aisle. You are often buying an
          MPR number. Treat MPR 1000 as the everyday MERV 11-class comparison and higher MPR as a
          class label, not a lab conversion. Compare the exact product family and all three actual
          dimensions with the cabinet requirements; do not assume every nominal 4-inch filter is
          3¾ inches deep.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. This is the easy way to
          stock a known 16×25×4. Inspect the frame: a floppy 4-inch pad leaks at the cabinet
          gasket, which defeats the MERV you paid for. Confirm the actual dimensions before a
          six-pack — 15⅜ is not the same pad as 15⅞.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 16×25 face is sold as 16×25×1, 16×25×2, 16×25×4, and 16×25×5. The cabinet
          model and approved replacement part decide which one fits. A nominal 4-inch label at
          one brand can correspond to a nominal 5-inch replacement at another. Match actual
          width, height, and depth rather than choosing by either label alone.
        </p>

        <h2>Change intervals</h2>
        <p>
          Four inches of media loads slower than a 1-inch 16×25, which is why the interval
          stretches. It does not disappear. Pets, renovation dust, and a furnace that runs all
          winter still write the calendar. A printed “6 month” or “12 month” claim is a marketing
          interval, not a measurement of your return.
        </p>
        <p>
          Honest habits on this face, matching the table: MERV 8 often 30–90 days depending on dust
          and runtime; MERV 11 often 60–90 days in 4-inch; MERV 13 is not set-and-forget. A loaded
          16×25×4 is a different product than a clean one. If the current filter is packed early,
          fix the dust load or the return before you chase a higher MERV.
        </p>
        <p>
          Still unsure whether 13 is appropriate for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>

        <h2>Questions</h2>
        {faq.map((item) => (
          <Fragment key={item.question}>
            <h3>{item.question}</h3>
            <p>
              {item.answer.map((part, index) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <Link key={index} href={part.href}>
                    {part.label}
                  </Link>
                ),
              )}
            </p>
          </Fragment>
        ))}
      </div>
      <RelatedGuides except="/16x25x4-furnace-filters" />
    </article>
  );
}
