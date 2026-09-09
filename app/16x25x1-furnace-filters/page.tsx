import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { brandClasses, mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const title = "16×25×1 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 16x25x1 furnace filters at MERV 8, 11, and 13. Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake review scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/16x25x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/16x25x1-furnace-filters" },
};

export default function Size16x25Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/16x25x1-furnace-filters",
        })}
      />
      <GuideHero
        kicker="Common size"
        title="16×25×1 furnace filters, compared without fake scores"
        dek="The hardware-store default. Same face, three MERV classes, three brand classes — and an actual size that is not 16 by 25."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>16×25×1</strong> is a nominal. The cardboard you slide into the rack is usually
          about <strong>15½ × 24½ × ¾ inches</strong>. If a “16×25” pad is truly 16.00 by 25.00, it
          will buckle or refuse the door. Measure the opening, then confirm the actual dimensions
          on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists other
          faces the same way. If the rack is 20×25, use the{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1 comparison</Link>. If it is 16×20, use
          the <Link href="/16x20x1-furnace-filters">16×20×1 comparison</Link>.
        </p>
        <Callout title="Arrow toward the furnace">
          The airflow arrow on a 16×25×1 points at the equipment, not at the room. A backwards
          filter still “fits.” It loads faster and can dump dust into the blower.
        </Callout>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. Raising MERV on a 1-inch 16×25 therefore raises resistance unless
          you also add depth. That is the whole{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, applied to
          the size most people actually buy.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 16x25x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 16×25×1 slot</th>
              <th scope="col">Change habit</th>
            </tr>
          </thead>
          <tbody>
            {mervRows.map((row) => (
              <tr key={row.merv}>
                <td className="font-semibold text-ink">{row.merv}</td>
                <td>{row.particles}</td>
                <td>{row.oneInchCharacter}</td>
                <td>{row.changeHint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 16×25×1 products the way a careful shopper already thinks — retail
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
          Easy to grab at a hardware store in 16×25×1. You are often buying an MPR number. Treat
          MPR 1000 as the everyday MERV 11-class pad and the higher MPR 1-inch SKUs as the
          pressure-drop experiment. The brand class is convenience and consistent sizing, not a
          secret lab score.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. Useful when you want the
          ASHRAE word on the box. Inspect the frame: a floppy 16×25×1 will bow in the rack and
          leak around the sides, which defeats the MERV you paid for.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 16×25 face is also sold as 16×25×2, 16×25×4, and 16×25×5. That is the reason
          this class exists. If your door says 16×25×1, do not order a 4-inch pad and crush it.
          If you have a media cabinet, do not keep stuffing 1-inch pads in the deep slot — use the
          depth you already paid for.
        </p>

        <h2>When to stay 16×25×1 — and when to stop</h2>
        <p>
          Stay 1-inch if the cabinet is 1-inch, MERV 8 or 11 meets the house, and you will change
          the pad. Stop staying 1-inch if you want MERV 13 as a lifestyle, if the current pad is
          always packed at 30 days, or if the installer already noted high static. Then the next
          page is{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, not a thicker
          marketing claim on the same thin pad.
        </p>
        <p>
          Still unsure whether 13 is legal for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/16x25x1-furnace-filters" />
    </article>
  );
}
