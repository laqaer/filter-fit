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

const title = "16×20×4 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 16x20x4 furnace filters at MERV 8, 11, and 13. Actual size varies by brand. Brand classes, no fake scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/16x20x4-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/16x20x4-furnace-filters" },
};

export default function Size16x20x4Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/16x20x4-furnace-filters",
          dateModified: site.contentUpdated,
        })}
      />
      <GuideHero
        kicker="Media cabinet"
        title="16×20×4 furnace filters, compared without borrowing a 16×25"
        dek="A smaller media-cabinet face. MERV 8, 11, and 13 — after you match this opening, not the more common 16×25 next to it on the shelf."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>16×20×4</strong> is a nominal size, not a single set of actual dimensions. Depth
          and the two face cuts are manufacturer-specific.{" "}
          <a href="https://filterbuy.com/air-filters/16x20x4/">Filterbuy lists its standard
          16×20×4 at 15.50 × 19.50 × 3.63 inches</a>. That page also says sizes differ by brand
          and tells shoppers to check dimensions before switching brands. That warning is the
          point: one brand’s cut is not a compatibility range for every 16×20×4. Match all three
          actual dimensions and the cabinet-approved replacement. For the 1-inch slide-in, use the{" "}
          <Link href="/16x20x1-furnace-filters">16×20×1 comparison</Link>. Do not order a{" "}
          <Link href="/16x25x4-furnace-filters">16×25×4</Link> because the width matched and the
          height was “close.”
        </p>
        <Callout title="A grille filter is often a second size" tone="warn">
          Some houses use a 16×20 at the furnace and a different face at a return grille. A 4-inch
          cabinet filter does not replace that grille pad, and a 1-inch grille pad does not fill
          the cabinet. Count the slots before you buy a multi-pack.
        </Callout>

        <h2>Why 4-inch instead of 1-inch on this face</h2>
        <p>
          The face is still 16×20, which is less media area than 16×25 before depth even enters.
          The extra depth is what gives a MERV 13 room to breathe on this smaller opening. Read
          the <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch</Link> argument, then the
          data-sheet initial resistance for the SKU and the air-handler manual. We will not invent
          a Pascal number for a filter we did not test.
        </p>

        <h2>MERV 8 / 11 / 13 in this cabinet</h2>
        <p>
          ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort score and not a
          medical claim. On a 4-inch 16×20 the usual question is how fine you need the dust, and
          whether you will change the pad.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 16x20x4 cabinet</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 16×20×4 cabinet</th>
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

      <AmazonShopExamples face="16x20x4" />

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 16×20×4 products the way a careful shopper already thinks — retail
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
          The 4-inch aisle is thinner than the 16×20×1 wall, and thinner still than 16×25. You are
          often buying an MPR number. Treat that as a class label, not a lab conversion, and
          compare all three actual dimensions with the cabinet requirements.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13. Inspect the frame. A floppy pad on this smaller face
          still leaks at the gasket. Confirm the actual cut before a multi-pack — 15½ × 19½ is not
          a leftover 16×25 with the end folded.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 16×20 face is sold at more than one depth. The cabinet model decides. If the
          door says 16×20×1, do not order this pad and crush it. If a technician already installed
          a deep rack, do not keep stuffing the 1-inch pad into it.
        </p>

        <h2>Change intervals</h2>
        <p>
          Four inches loads slower than a 1-inch 16×20. The smaller face does not grant a year of
          neglect. A printed “6 month” or “12 month” claim is a marketing interval. MERV 8 often
          30–90 days depending on dust and runtime; MERV 11 often 60–90 days in 4-inch; MERV 13 is
          not set-and-forget. If you are unsure the blower has room, use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/16x20x4-furnace-filters" />
    </article>
  );
}
