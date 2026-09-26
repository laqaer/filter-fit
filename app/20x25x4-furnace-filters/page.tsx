import type { Metadata } from "next";
import Link from "next/link";
import { AmazonShopExamples } from "@/components/amazon-shop-examples";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { brandClasses, mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "20×25×4 furnace filters and air filters: MERV 8 vs 11 vs 13";
const description =
  "20x25x4 furnace filters and air filters are the same pad. MERV 8, 11, and 13 in a media cabinet — actual size, 4-inch vs 1-inch, and brand classes, no fake scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/20x25x4-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/20x25x4-furnace-filters" },
};

export default function Size20x25x4Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/20x25x4-furnace-filters",
          dateModified: site.contentUpdated,
        })}
      />
      <GuideHero
        kicker="Media cabinet"
        title="20×25×4 furnace filters and air filters are the same pad"
        dek="Furnace filter and air filter are two names for this nominal 20×25 media filter. MERV 8, 11, and 13 — match the cabinet model and all three actual dimensions, not the nominal depth alone."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>20×25×4</strong> is a nominal size, not a single set of actual dimensions.
          Cartons may say furnace filter or air filter; it is the same pad. Width, height, and
          depth are manufacturer-specific and vary by product family. Depth examples span
          roughly <strong>3⅝–4⅜ inches</strong>; that is not a compatibility range, and filters
          within it are not interchangeable. Match all three actual dimensions and the approved
          replacement part for your cabinet model before ordering. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> is a starting
          point, not a substitute for the cabinet specifications. For a 1-inch slide-in, use the{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1 comparison</Link>. A{" "}
          <Link href="/16x25x4-furnace-filters">16×25×4</Link> will not
          cover a 20-inch-wide cabinet.
        </p>
        <p>
          For example,{" "}
          <a href="https://filterbuy.com/air-filters/20x25x4/">Filterbuy lists its standard
          20×25×4 at 19.5 × 24.5 × 3.63 inches</a> and, on that same page, warns that some brands
          print 20×25×4 on filters that are actually about 4.38 inches deep. A different depth
          under the same nominal label can be the required replacement; it does not authorize
          fitting an arbitrary 4-inch filter.
        </p>
        <Callout title="Do not substitute a thinner pad without an approved adapter" tone="warn">
          A 20×25×1 does not become the correct media-cabinet replacement because the face size
          matches. A loose pad can tip or let air bypass it. Use the cabinet-approved filter and
          depth, or a manufacturer-approved adapter; do not crush a thicker filter into a thinner
          slot.
        </Callout>

        <h2>Why 4-inch instead of 1-inch on this face</h2>
        <p>
          The face is still 20×25. The extra depth is extra media, so the same MERV usually runs
          at lower velocity than a{" "}
          <Link href="/20x25x1-furnace-filters">1-inch 20×25</Link>. That is the{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch</Link> argument on this cabinet:
          depth is how most houses run finer filtration without making the filter the tightest
          fitting on the return. It is not a promise that every 4-inch SKU is gentle. Read the
          data-sheet initial resistance and the furnace or air-handler manual. We will not invent
          a Pascal number for a filter we did not test.
        </p>

        <h2>MERV 8 / 11 / 13 in this cabinet</h2>
        <p>
          ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort score and not a
          medical claim. On a 4-inch 20×25 the usual question is how fine you need the dust, and
          whether you will change the pad, not whether the slot can physically hold a pleat.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 20x25x4 cabinet</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 20×25×4 cabinet</th>
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

      <AmazonShopExamples face="20x25x4" />

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 20×25×4 products the way a careful shopper already thinks — retail
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
          Hardware walls are thick with 20×25×1 and thinner on 4-inch. You are often buying an MPR
          number. Treat MPR 1000 as the everyday MERV 11-class comparison and higher MPR as a class
          label, not a lab conversion. Compare the exact product family and all three actual
          dimensions with the cabinet requirements; do not assume every nominal 4-inch filter is
          3¾ inches deep.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. Inspect the frame: a floppy
          4-inch pad leaks at the cabinet gasket, which defeats the MERV you paid for. Confirm the
          actual dimensions before a six-pack — 19⅜ is not the same pad as 19⅞, and 3⅝ is not the
          same depth as 4⅜.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 20×25 face is sold as 20×25×1, 20×25×2, 20×25×4, and 20×25×5. The cabinet model
          and approved replacement part decide which one fits. A nominal 4-inch label at one brand
          can describe a deeper pad at another. Match actual width, height, and depth rather than
          choosing by the printed third number alone.
        </p>

        <h2>Change intervals</h2>
        <p>
          Four inches of media loads slower than a 1-inch 20×25, which is why the interval
          stretches. It does not disappear. Pets, renovation dust, and a furnace that runs all
          winter still write the calendar. A printed “6 month” or “12 month” claim is a marketing
          interval, not a measurement of your return.
        </p>
        <p>
          Honest habits on this face, matching the table: MERV 8 often 30–90 days depending on dust
          and runtime; MERV 11 often 60–90 days in 4-inch; MERV 13 is not set-and-forget. A loaded
          20×25×4 is a different product than a clean one. If the current filter is packed early,
          fix the dust load or the return before you chase a higher MERV.
        </p>
        <p>
          Still unsure whether 13 is appropriate for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/20x25x4-furnace-filters" />
    </article>
  );
}
