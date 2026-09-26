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

const title = "20×30×1 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 20x30x1 furnace filters at MERV 8, 11, and 13. Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake review scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/20x30x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/20x30x1-furnace-filters" },
};

export default function Size20x30Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/20x30x1-furnace-filters",
        })}
      />
      <GuideHero
        kicker="20×30 face"
        title="20×30×1 furnace filters, compared without fake scores"
        dek="A long 1-inch return. Same opening, three MERV classes, three brand classes — and an actual size that is not 20 by 30."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>20×30×1</strong> is a nominal. The cardboard you slide into the rack is usually
          about <strong>19½ × 29½ × ¾ inches</strong>. If a “20×30” pad is truly 20.00 by 30.00, it
          will buckle or refuse the door. Measure the opening, then confirm the actual dimensions
          on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists this face
          as a larger return — and lists the sizes people order by mistake the same way:{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1</Link> (five inches short on the long
          side), <Link href="/16x25x1-furnace-filters">16×25×1</Link>, and{" "}
          <Link href="/20x20x1-furnace-filters">20×20×1</Link>.
        </p>
        <Callout title="Arrow toward the furnace">
          The airflow arrow on a 20×30×1 points at the equipment, not at the room. A backwards
          filter still “fits.” It loads faster and can dump dust into the blower. Rotating the pad
          so the carton reads 30×20 does not change that rule — the long side still has to match
          the slot.
        </Callout>

        <h2>More face than 20×25 — still a 1-inch pack</h2>
        <p>
          A nominal 20×30 opening is 600 square inches: a fifth more face than a 20×25, and half
          again a 16×25. At the same system CFM that extra cardboard lowers face velocity a little.
          It is why a healthy 20×30×1 return has more room for a MERV step than a small closet
          rack. It is not a 4-inch media cabinet. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size chart</Link> already flags this face
          as commonly 1-inch or 4-inch. Depth still decides how much media you actually have.
        </p>
        <p>
          The 30-inch span is the other constraint. Cheap cardboard bows across that length, and
          air that sneaks around a cupped frame makes the extra area worthless. Treat the inches
          as headroom only while the frame stays flat. That is the same{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, applied to a
          long return grille or a wide furnace rack.
        </p>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. A higher-MERV 1-inch 20×30 SKU often lists a higher initial
          resistance than a lower-MERV pad of the same depth, but that ΔP is manufacturer-specific
          — MERV is an efficiency scale, not a pressure-drop rating. We will not invent a Pascal
          number for a SKU we did not test. Read the data sheet’s initial resistance and the
          furnace or air-handler manual.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 20x30x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 20×30×1 slot</th>
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

      <AmazonShopExamples face="20x30x1" />

      <div className="prose-fit mt-10">
        <p>
          On this face, MERV 8 is still the low-resistance everyday pad — if you change it. MERV 11
          is the usual 1-inch step most houses can take when the return is healthy. MERV 13 is more
          plausible here than in a small 16×25 slot because of the extra face, and it is still the
          tightest common 1-inch combo. The square inches are not a 4-inch pack. A dirty MERV 11
          can out-restrict a clean MERV 13, and a 30-inch frame sags sooner once it loads.
        </p>
        <Callout title="The 30-inch side bows" tone="warn">
          Cheap 20×30×1 frames cup across the long dimension. Once the cardboard bows, air goes
          around the media and the MERV on the box is theater. Prefer a rigid frame, and do not
          leave a loaded pad in until it is felted. A sagged frame also fights the door.
        </Callout>

        <h2>Do not order the neighbor size</h2>
        <p>
          20×30 is not 20×25, not 24×30, and not 20×20. A filter that “almost” fits either leaks or
          will not enter the slot. The five-inch gap versus{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1</Link> is the usual mix-up — hardware-store
          walls stock the shorter rectangle first, and a 20×25 leaves an open end in a 20×30 rack.
          A <Link href="/24x30x1-furnace-filters">24×30×1</Link> is four inches too wide. Confirm
          the long side, not the SKU that was on sale.
        </p>
        <p>
          20×30 and 30×20 are the same cardboard rotated. Match the door so the pad seats flat and
          the arrow still faces the equipment. A 20×30×4 will not crush into a 1-inch grille; a
          1-inch pad standing in a 4-inch cabinet wastes the media area you already paid for. If
          the rack is already 4 inches, use the{" "}
          <Link href="/20x30x4-furnace-filters">20×30×4 comparison</Link>. See also{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link>.
        </p>

        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 20×30×1 products the way a careful shopper already thinks — retail
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
          Hardware-store walls are thick on 16×25 and 20×25. 20×30×1 is often a thinner peg or a
          special order. You are still often buying an MPR number. Treat MPR 1000 as the everyday
          MERV 11-class pad and the higher MPR 1-inch SKUs as the pressure-drop experiment. The
          brand class is consistent sizing when the store actually stocks the face, not a secret
          lab score. If the only box on the hook is 20×25, do not make it fit.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. Useful when you want the
          ASHRAE word on the box. Inspect the frame harder than on 16×25 or even 20×25: a floppy
          20×30×1 will bow across thirty inches and leak around the sides, which defeats the MERV
          you paid for. Confirm the actual (not nominal) dimensions before you buy a six-pack —
          19½ × 29½ is not a leftover 20×25.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 20×30 face is also sold deeper online. That is the reason this class exists, and
          why the size chart lists 1-inch and 4-inch as the common depths. The door still decides:
          if it says 20×30×1, do not order a 4-inch pad and crush it. A large return grille often
          cannot take a media cabinet without a remodel. If a technician already installed a deep
          rack, do not keep stuffing 1-inch pads in it — use the depth you already paid for, and
          start with the <Link href="/20x30x4-furnace-filters">20×30×4 comparison</Link>.
        </p>

        <h2>Change interval: hours beat the calendar</h2>
        <p>
          20×30 is a large residential return, and sometimes a light commercial slide-in. Extra
          face area does not buy extra months when runtime, pets, or renovation dust load a 1-inch
          pack. A printed “90-day” or “six-month” claim is a marketing interval, not a measurement
          of your return. On this span the middle can felt while the ends still look gray — judge
          the center of the pad, not the clean corners.
        </p>
        <p>
          Honest 1-inch habits on this face: MERV 8 often 30–90 days; MERV 11 closer to 30–60
          with pets; MERV 13 only if you will actually pull it on a short interval and the
          equipment still moves design CFM. A black 20×30×1 is a blower restriction no matter
          what MERV it started as.
        </p>

        <h2>When to stay 20×30×1 — and when to stop</h2>
        <p>
          Stay 1-inch if the cabinet is 1-inch, MERV 8 or 11 meets the house, the frame stays
          rigid across the 30-inch span, and you will change the pad. Stop staying 1-inch if you
          want MERV 13 as a lifestyle, if the current pad is always packed at 30 days, or if the
          installer already noted high static. Then the next page is{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, not a thicker
          marketing claim on the same thin pad — and only if that return can actually take the
          depth.
        </p>
        <p>
          Still unsure whether 13 is legal for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/20x30x1-furnace-filters" />
    </article>
  );
}
