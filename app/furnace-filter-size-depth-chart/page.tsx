import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { sizeChart } from "@/lib/filters";
import { articleJsonLd } from "@/lib/schema";

const title = "Furnace filter size and depth chart";
const description =
  "Nominal vs actual furnace filter sizes and 1 / 2 / 4 / 5-inch slot depths. How to measure the rack before you order.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/furnace-filter-size-depth-chart" },
  openGraph: { title, description, url: "/furnace-filter-size-depth-chart" },
};

export default function SizeChartPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/furnace-filter-size-depth-chart",
        })}
      />
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
          <Link href="/16x25x1-furnace-filters">16×25×1 MERV comparison</Link>.
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
                <td>{row.notes}</td>
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
      </div>
      <RelatedGuides except="/furnace-filter-size-depth-chart" />
    </article>
  );
}
