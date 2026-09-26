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

const title = "24×24×1 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 24x24x1 furnace filters at MERV 8, 11, and 13. Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake review scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/24x24x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/24x24x1-furnace-filters" },
};

export default function Size24x24Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/24x24x1-furnace-filters",
        })}
      />
      <GuideHero
        kicker="24×24 face"
        title="24×24×1 furnace filters, compared without fake scores"
        dek="A large 1-inch square return. Same opening, three MERV classes, three brand classes — and an actual size that is not 24 by 24."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>24×24×1</strong> is a nominal. The cardboard you slide into the rack is usually
          about <strong>23½ × 23½ × ¾ inches</strong>. If a “24×24” pad is truly 24.00 by 24.00, it
          will buckle or refuse the door. Measure the opening, then confirm the actual dimensions
          on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists this face
          as a less-common square return — and lists the sizes people order by mistake the same
          way: <Link href="/20x20x1-furnace-filters">20×20×1</Link> (four inches short on each
          side), <Link href="/20x25x1-furnace-filters">20×25×1</Link> (the hardware-store
          rectangle), and <Link href="/24x30x1-furnace-filters">24×30×1</Link> (six inches long on
          one side).
        </p>
        <Callout title="Arrow toward the furnace">
          A 24×24×1 seats in any 90° rotation, so it is easy to install the wrong way. The airflow
          arrow still points at the equipment, not at the room. A backwards square still “fits.” It
          loads faster and can dump dust into the blower.
        </Callout>

        <h2>More face than 20×20 — still a 1-inch pack</h2>
        <p>
          A nominal 24×24 opening is 576 square inches: more face than a{" "}
          <Link href="/20x20x1-furnace-filters">20×20</Link>, a bit more than a{" "}
          <Link href="/20x25x1-furnace-filters">20×25</Link>, and a fifth less than a{" "}
          <Link href="/24x30x1-furnace-filters">24×30</Link>. At the same system CFM that extra
          cardboard lowers face velocity a little versus the smaller square. It is why a healthy
          24×24×1 return grille has more room for a MERV step than a 20×20. It is not a 4-inch
          media cabinet. The <Link href="/furnace-filter-size-depth-chart">size chart</Link> lists
          this face as commonly 1-inch only. Depth still decides how much media you actually have.
        </p>
        <p>
          The square is still a rotation trap, and both sides are long enough to cup. Air that
          sneaks around a bowed frame makes the extra area worthless. Treat the inches as headroom
          only while the frame stays flat. That is the same{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, applied to a
          large square return grille.
        </p>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. A higher-MERV 1-inch 24×24 SKU often lists a higher initial
          resistance than a lower-MERV pad of the same depth, but that ΔP is manufacturer-specific
          — MERV is an efficiency scale, not a pressure-drop rating. We will not invent a Pascal
          number for a SKU we did not test. Read the data sheet’s initial resistance and the
          furnace or air-handler manual.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 24x24x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 24×24×1 slot</th>
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

      <AmazonShopExamples face="24x24x1" />

      <div className="prose-fit mt-10">
        <p>
          On this face, MERV 8 is still the low-resistance everyday pad — if you change it. MERV 11
          is the usual 1-inch step most houses can take when the return is healthy. MERV 13 is more
          plausible here than in a 20×20 slot because of the extra face, and it is still the
          tightest common 1-inch combo. The square inches are not a 4-inch pack. A dirty MERV 11
          can out-restrict a clean MERV 13, and a 24-inch frame can sag on both sides once it
          loads. A grille you can rotate any way is also easy to seat backwards and then leave
          until it looks a little gray from across the room — the center loads first.
        </p>
        <Callout title="The square hides a backwards pad" tone="warn">
          Because 24×24 fits every rotation, a ceiling or wall return is easy to seat arrow-out.
          Cheap frames also cup across the 24-inch span. Once the cardboard bows, air goes around
          the media and the MERV on the box is theater. Prefer a rigid frame, pull it on a runtime
          habit, and check the arrow every time.
        </Callout>

        <h2>Do not order the neighbor size</h2>
        <p>
          24×24 is not <Link href="/20x20x1-furnace-filters">20×20</Link>, not{" "}
          <Link href="/20x25x1-furnace-filters">20×25</Link>, and not{" "}
          <Link href="/24x30x1-furnace-filters">24×30</Link>. A filter that “almost” fits either
          leaks or will not enter the slot. The four-inch gap versus 20×20×1 is the usual square
          mix-up — same shape, wrong face, and a 20×20 leaves an open border in a 24×24 grille.
          20×25×1 is what the hardware-store wall stocks first: four inches narrow and one inch
          long. 24×30×1 is six inches too long on one side; it is a rectangle, not a rotated
          24×24. Confirm the square grille, not the SKU that was on sale.
        </p>
        <p>
          24×24 rotated is still 24×24. Match the door so the pad seats flat and the arrow still
          faces the equipment. A thicker pad will not crush into a 1-inch grille; a 1-inch pad
          standing in a deep cabinet wastes the media area you already paid for. See{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link>.
        </p>

        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 24×24×1 products the way a careful shopper already thinks — retail
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
          Hardware-store walls are thick on 16×25, 20×25, and 20×20. 24×24×1 is often missing from
          the peg, or it is a special order. You are still often buying an MPR number when a boxed
          SKU exists. Treat MPR 1000 as the everyday MERV 11-class pad and the higher MPR 1-inch
          SKUs as the pressure-drop experiment. The brand class is consistent sizing when the store
          actually stocks the face, not a secret lab score. If the only box on the hook is{" "}
          <Link href="/20x20x1-furnace-filters">20×20</Link> or{" "}
          <Link href="/20x25x1-furnace-filters">20×25</Link>, do not make it fit.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. This is often how you
          actually get the size. Inspect the frame: a floppy 24×24×1 will bow across the square and
          leak around the sides, which defeats the MERV you paid for. Confirm the actual (not
          nominal) dimensions before you buy a six-pack — 23½ × 23½ is not a leftover{" "}
          <Link href="/20x20x1-furnace-filters">20×20</Link> or a{" "}
          <Link href="/24x30x1-furnace-filters">24×30</Link>.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 24×24 face is sold because big-box size runs skip it. The door still decides the
          depth: the size chart lists this face as commonly 1-inch. If the grille says 24×24×1, do
          not order a thicker pad and crush it. A ceiling grille often cannot take a media cabinet
          without a remodel. If a technician already installed a deep rack, do not keep stuffing
          1-inch pads in it — use the depth you already paid for.
        </p>

        <h2>Change interval: hours beat the calendar</h2>
        <p>
          24×24 is a large residential return grille, and sometimes a light commercial slide-in.
          Extra face area does not buy extra months when runtime, pets, or renovation dust load a
          1-inch pack. Some houses also have a second filter at the furnace in a different size —
          count them before you order one six-pack for both. A printed “90-day” or “six-month”
          claim is a marketing interval, not a measurement of your return. On this span the middle
          can felt while the corners still look gray — judge the center of the pad, not the clean
          edges.
        </p>
        <p>
          Honest 1-inch habits on this face: MERV 8 often 30–90 days; MERV 11 closer to 30–60
          with pets; MERV 13 only if you will actually pull it on a short interval and the
          equipment still moves design CFM. A black 24×24×1 is a blower restriction no matter
          what MERV it started as.
        </p>

        <h2>When to stay 24×24×1 — and when to stop</h2>
        <p>
          Stay 1-inch if the grille is 1-inch, MERV 8 or 11 meets the house, the frame stays
          rigid across the 24-inch span, and you will change the pad even when the grille needs a
          chair. Stop staying 1-inch if you want MERV 13 as a lifestyle, if the current pad is
          always packed at 30 days, or if the installer already noted high static. Then the next
          page is <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, not a
          thicker marketing claim on the same thin pad — and only if that return can actually take
          the depth.
        </p>
        <p>
          Still unsure whether 13 is legal for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/24x24x1-furnace-filters" />
    </article>
  );
}
