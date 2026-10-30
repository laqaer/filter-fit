import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { AmazonGuideExamples } from "@/components/amazon-shop-examples";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { sizeChart } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd, faqPageJsonLd, type FaqEntry } from "@/lib/schema";

const chartGuideHref: Record<string, string> = {
  "16×20×4": "/16x20x4-furnace-filters",
  "16×25×4": "/16x25x4-furnace-filters",
  "20×20×4": "/20x20x4-furnace-filters",
  "20×25×4": "/20x25x4-furnace-filters",
  "20×30×4": "/20x30x4-furnace-filters",
};

const title = "Furnace filter size and depth chart";
const description =
  "Nominal vs actual furnace filter sizes and 1 / 2 / 4 / 5-inch slot depths. How to measure the rack before you order.";

const faq: readonly FaqEntry[] = [
  {
    question: "Is the size printed on the box the size that fits?",
    answer: [
      "The number on the box is a nominal name. The cardboard that fits is the actual size. Read the old filter, then measure the cardboard. Brands vary by a quarter inch. If the opening sits between two sizes, take the smaller actual. A filter that rattles leaks. A filter that has to be forced in collapses. The table on this page lists usual North American cardboard sizes. Match the spec line on the filter you order, because mills differ.",
    ],
  },
  {
    question: "What does the last number in 16×25×1 mean?",
    answer: [
      "It is slot depth. 16×25×1 means a 1-inch-class depth. 16×25×4 is a different product. Measure the depth the frame can occupy without bowing the door. Ordering the wrong third number is the common mismatch.",
    ],
  },
  {
    question: "How do 1-inch, 2-inch, 4-inch, and 5-inch slots differ?",
    answer: [
      "A 1-inch slot is a retail slide-in with the least media. MERV 13 in that slot is the risky upgrade. See ",
      { href: "/merv-11-vs-13-1-inch", label: "MERV 11 vs 13" },
      ". A 2-inch rack adds pleat area and is still a throwaway filter. Confirm the door closes on 2 inches. A 4-inch cabinet is the usual aftermarket media cabinet, and the depth most homes should use for MERV 13. See ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "depth vs MERV" },
      ". A 5-inch cabinet is deep media. Do not assume a 4-inch pad fills it without the specified spacer.",
    ],
  },
  {
    question: "Can the return grille and the furnace take different filters?",
    answer: [
      "Yes. Some systems use one filter at the furnace and one at a return grille, and those two pads are not always the same size. A grille that takes 20×25×1 while the furnace cabinet takes 16×25×1 is a common trap. Count the filters and measure each slot before you order. After size and depth are known, check the blower on ",
      { href: "/merv-13-safe-for-furnace", label: "Is MERV 13 safe for your furnace?" },
      ".",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/furnace-filter-size-depth-chart" },
  openGraph: { ...openGraphImage, title, description, url: "/furnace-filter-size-depth-chart" },
};

export default function SizeChartPage() {
  return (
    <article className="ff-article ff-wide">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/furnace-filter-size-depth-chart",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <GuideHero
        kicker="Measure twice"
        title="Nominal size and slot-depth chart"
        dek="The number on the box is a name. The number that fits is the actual cardboard. Depth is a third measurement, not a model suffix you can ignore."
      />

      <div className="prose-fit mt-10">
        <h2>How to measure so the pad actually seats</h2>
        <ol>
          <li>
            <strong>Read the old filter</strong> for the nominal (16×25×1). Then measure the
            cardboard anyway. Brands vary by a quarter inch.
          </li>
          <li>
            <strong>Measure the slot</strong> — width, height, and the depth the frame can occupy
            without bowing the door.
          </li>
          <li>
            <strong>Prefer the smaller actual</strong> if you are between sizes. A filter that
            rattles leaks. A filter you hammer in collapses.
          </li>
          <li>
            <strong>Count the filters.</strong> Some systems use one at the furnace and one at a
            return grille. They are not always the same size.
          </li>
        </ol>
        <Callout title="×1 is depth, not a version number">
          16×25×1 means a 1-inch-class depth. 16×25×4 is a different product. Ordering the wrong
          third number is the most common FilterFit support email we expect to get.
        </Callout>

        <h2>Typical actual sizes</h2>
        <p>
          Actuals below are the usual North American cardboard sizes, not a guarantee for every
          mill. Always match the spec line on the SKU. If you live on 16×25, continue to the{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1 MERV comparison</Link>. The 16×25×4 row
          is that face in a media cabinet —{" "}
          <Link href="/16x25x4-furnace-filters">16×25×4 comparison</Link>. The same rule covers{" "}
          <Link href="/20x25x4-furnace-filters">20×25×4</Link>,{" "}
          <Link href="/16x20x4-furnace-filters">16×20×4</Link>,{" "}
          <Link href="/20x20x4-furnace-filters">20×20×4</Link>, and{" "}
          <Link href="/20x30x4-furnace-filters">20×30×4</Link>. If the rack is
          20×25, use the <Link href="/20x25x1-furnace-filters">20×25×1 guide</Link>. If it is
          16×20 — often a furnace rack paired with a return-grille filter — use the{" "}
          <Link href="/16x20x1-furnace-filters">16×20×1 comparison</Link>. If it is 14×25 — a
          common upflow closet face — use the{" "}
          <Link href="/14x25x1-furnace-filters">14×25×1 comparison</Link>. If it is 20×20 — a
          square return that is easy to rotate the wrong way — use the{" "}
          <Link href="/20x20x1-furnace-filters">20×20×1 comparison</Link>. If it is
          12×24 — a less-common face that hardware stores often skip — use the{" "}
          <Link href="/12x24x1-furnace-filters">12×24×1 comparison</Link>. If it is 14×20 — a
          smaller return and some older air handlers — use the{" "}
          <Link href="/14x20x1-furnace-filters">14×20×1 comparison</Link>. If it is 20×30 — a
          long return where cheap 1-inch frames sag — use the{" "}
          <Link href="/20x30x1-furnace-filters">20×30×1 comparison</Link>. If it is
          24×30 — a large return grille — use the{" "}
          <Link href="/24x30x1-furnace-filters">24×30×1 comparison</Link>. If it is
          24×24 — a less-common square return — use the{" "}
          <Link href="/24x24x1-furnace-filters">24×24×1 comparison</Link>.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">Nominal versus typical actual furnace filter sizes</caption>
          <thead>
            <tr>
              <th scope="col">Nominal</th>
              <th scope="col">Typical actual (in)</th>
              <th scope="col">Common depths</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {sizeChart.map((row) => (
              <tr key={row.nominal}>
                <td className="font-semibold text-ink">{row.nominal}</td>
                <td>{row.typicalActual}</td>
                <td>{row.commonDepths}</td>
                <td>
                  {row.notes}
                  {chartGuideHref[row.nominal] ? (
                    <>
                      {" "}
                      <Link
                        className="ff-text-link"
                        href={chartGuideHref[row.nominal]}
                      >
                        {row.nominal} comparison
                      </Link>
                      .
                    </>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-fit mt-10">
        <h2>Depth classes</h2>
        <ul>
          <li>
            <strong>1 inch.</strong> Retail slide-in. Least media. MERV 13 is the risky upgrade —
            read <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13</Link>.
          </li>
          <li>
            <strong>2 inch.</strong> Extra pleat area, still a throwaway rack. Confirm the door
            actually closes on 2 inches.
          </li>
          <li>
            <strong>4 inch.</strong> The usual aftermarket media cabinet. This is how most homes
            should run MERV 13. See <Link href="/1-inch-vs-4-inch-merv-13">depth vs MERV</Link>.
          </li>
          <li>
            <strong>5 inch.</strong> Honeywell-style / deep media. Do not assume a 4-inch pad fills
            it without the specified spacer.
          </li>
        </ul>

        <h2>Things that look like a size and are not</h2>
        <ul>
          <li>A door sticker copied from the last wrong filter someone jammed in.</li>
          <li>A grille that takes 20×25×1 while the furnace cabinet takes 16×25×1.</li>
          <li>Oddball “exact” sizes from a custom shop — good, as long as you measured the slot.</li>
          <li>Washable foam cut from a roll. That is a pad, not a MERV 13 pleated filter.</li>
        </ul>
        <p>
          After size and depth are known, the last question is whether the rating is safe for the
          blower: <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
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
      <AmazonGuideExamples
        note="These are Amazon searches for two common nominal sizes, 16×25×1 and 16×25×4, not a ranked list and not products we tested."
        examples={[
          {
            label: "16×25×1 furnace filters",
            keywords: "16x25x1 furnace filter",
            subtag: "ff-guide-chart-16x25x1",
          },
          {
            label: "16×25×4 furnace filters",
            keywords: "16x25x4 furnace filter",
            subtag: "ff-guide-chart-16x25x4",
          },
        ]}
      />
      <RelatedGuides except="/furnace-filter-size-depth-chart" />
    </article>
  );
}
