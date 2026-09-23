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

const title = "16×25×4 furnace filters and air filters: MERV 8 vs 11 vs 13";
const description =
  "16x25x4 furnace filters and air filters are the same pad. MERV 8, 11, and 13 in a media cabinet — actual size, 4-inch vs 1-inch, and brand classes, no fake scores.";

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
      <GuideHero
        kicker="Media cabinet"
        title="16×25×4 furnace filters and air filters are the same pad"
        dek="Furnace filter and air filter are two names for this 4-inch 16×25. MERV 8, 11, and 13, with an actual size near 15⅜–15⅞ × 24⅜–24⅞ × 3¾ — not a 1-inch rack."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>16×25×4</strong> is a nominal. The cardboard that seats in a media cabinet is
          usually <strong>~15⅜–15⅞ × 24⅜–24⅞ × 3¾ inches</strong>, not 16.00 by 25.00 by
          4.00. That range is wider than the 1-inch 15½ × 24½ × ¾ because 4-inch mills do not share
          one actual. Measure the opening, then match the spec line on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists this row
          as a media-cabinet depth. If the door is a 1-inch slide-in, use the{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1 comparison</Link> instead of crushing a
          4-inch pad into it.
        </p>
        <Callout title="Do not stand a 1-inch pad in a 4-inch rack" tone="warn">
          A 16×25×1 does not become a 16×25×4 because the cabinet is deep. Air bypasses a thin pad,
          or the pad tips and leaks around the gasket. Do not force a 1-inch filter into this rack,
          and do not crush a 4-inch filter into a 1-inch door. Use the depth the cabinet was built
          for.
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
          class label, not a lab conversion. Confirm the carton is a 4-inch actual near 3¾, not a
          1-inch pad that shares the 16×25 face.
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
          decides. If the slot is 4 inches, order 16×25×4. A 5-inch pad belongs in a deep media
          cabinet, not this one. A 1-inch pad standing in this slot wastes the media area you
          already paid for.
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
      </div>
      <AmazonShopExamples face="16x25x4" />
      <RelatedGuides except="/16x25x4-furnace-filters" />
    </article>
  );
}
