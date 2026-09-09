import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { brandClasses, mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const title = "20×25×1 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 20x25x1 furnace filters at MERV 8, 11, and 13. Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake review scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/20x25x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/20x25x1-furnace-filters" },
};

export default function Size20x25Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/20x25x1-furnace-filters",
        })}
      />
      <GuideHero
        kicker="20×25 face"
        title="20×25×1 furnace filters, compared without fake scores"
        dek="The second-most-common retail face after 16×25. Same opening, three MERV classes, three brand classes — and an actual size that is not 20 by 25."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>20×25×1</strong> is a nominal. The cardboard you slide into the rack is usually
          about <strong>19½ × 24½ × ¾ inches</strong>. If a “20×25” pad is truly 20.00 by 25.00, it
          will buckle or refuse the door. Measure the opening, then confirm the actual dimensions
          on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists other
          faces the same way — including the more common{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1</Link> and{" "}
          <Link href="/16x20x1-furnace-filters">16×20×1</Link>.
        </p>
        <Callout title="Arrow toward the furnace">
          The airflow arrow on a 20×25×1 points at the equipment, not at the room. A backwards
          filter still “fits.” It loads faster and can dump dust into the blower. Rotating a 20×25
          to read as 25×20 does not change that rule.
        </Callout>

        <h2>More face than 16×25 — still a 1-inch pack</h2>
        <p>
          A 20×25 opening is about a quarter more face area than a 16×25. At the same system CFM
          that extra cardboard lowers face velocity a little. It is why some 20×25×1 racks tolerate
          a step up in MERV that a smaller 1-inch slot would not. It is not a 4-inch media cabinet.
          Depth still decides how much media you actually have.
        </p>
        <p>
          Treat the extra inches as headroom, not as a license to run 1-inch MERV 13 as a lifestyle.
          That is the same{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, applied to
          the size most people buy after 16×25 — including larger residential returns and a lot of
          commercial slide-in racks.
        </p>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. Raising MERV on a 1-inch 20×25 therefore raises resistance unless
          you also add depth. ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort
          score and not a medical claim. We will not invent a Pascal number for a SKU we did not
          test. Read the data sheet’s initial resistance and the furnace or air-handler manual.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 20x25x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 20×25×1 slot</th>
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
        <p>
          On this face, MERV 8 is still the low-resistance everyday pad — if you change it. MERV 11
          is the usual 1-inch step most houses can take when the return is healthy. MERV 13 remains
          the tightest common 1-inch combo: more plausible here than in a small 16×25 slot, still
          the first place a PSC furnace with a long flex return loses CFM. A dirty MERV 11 can
          out-restrict a clean MERV 13. Loading writes the real product.
        </p>
        <Callout title="A larger span bows easier" tone="warn">
          Cheap 20×25×1 frames sag across the long side. Once the cardboard cups, air bypasses the
          media and the MERV on the box is theater. Prefer a rigid frame, and do not leave a
          loaded pad in until it is felted.
        </Callout>

        <h2>Do not order the neighbor size</h2>
        <p>
          20×25 is not 20×20, not 20×30, and not 16×25. A filter that “almost” fits either leaks or
          collapses. Some houses use a 16×25×1 or{" "}
          <Link href="/16x20x1-furnace-filters">16×20×1</Link> at the furnace and a 20×25×1 at a
          return grille — they are two SKUs, not a six-pack of whichever was on sale. Confirm both
          slots before you subscribe.
        </p>
        <p>
          20×25 and 25×20 are the same cardboard rotated. Match the door so the pad seats flat and
          the arrow still faces the equipment. A 20×25×4 will not crush into a 1-inch door; a
          1-inch pad standing in a 4-inch cabinet wastes the media area you already paid for. See{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link>.
        </p>

        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 20×25×1 products the way a careful shopper already thinks — retail
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
          Easy to grab at a hardware store in 20×25×1 — this is a stocked face, not a special
          order. You are often buying an MPR number. Treat MPR 1000 as the everyday MERV 11-class
          pad and the higher MPR 1-inch SKUs as the pressure-drop experiment. The brand class is
          convenience and consistent sizing, not a secret lab score.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. Useful when you want the
          ASHRAE word on the box. Inspect the frame harder on this size than on 16×25: a floppy
          20×25×1 will bow in the rack and leak around the sides, which defeats the MERV you paid
          for. Confirm the actual (not nominal) dimensions before you buy a six-pack.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 20×25 face is also sold as 20×25×2, 20×25×4, and 20×25×5. That is the reason
          this class exists, and why 20×25×4 shows up as a typical aftermarket media-cabinet
          upgrade. If your door says 20×25×1, do not order a 4-inch pad and crush it. If you have
          a media cabinet, do not keep stuffing 1-inch pads in the deep slot — use the depth you
          already paid for.
        </p>

        <h2>Change interval: hours beat the calendar</h2>
        <p>
          20×25 is a standard commercial slide-in as well as a residential one. More runtime
          loads a 1-inch pad faster, even with the extra face area. Pets, renovation dust, and a
          furnace that never shuts off in winter do the same thing in a house. A printed
          “90-day” or “six-month” claim is a marketing interval, not a measurement of your
          return.
        </p>
        <p>
          Honest 1-inch habits on this face: MERV 8 often 30–90 days; MERV 11 closer to 30–60
          with pets; MERV 13 only if you will actually pull it on a short interval and the
          equipment still moves design CFM. A black 20×25×1 is a blower restriction no matter
          what MERV it started as.
        </p>

        <h2>When to stay 20×25×1 — and when to stop</h2>
        <p>
          Stay 1-inch if the cabinet is 1-inch, MERV 8 or 11 meets the house, the frame stays
          rigid, and you will change the pad. Stop staying 1-inch if you want MERV 13 as a
          lifestyle, if the current pad is always packed at 30 days, or if the installer already
          noted high static. Then the next page is{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, not a thicker
          marketing claim on the same thin pad.
        </p>
        <p>
          Still unsure whether 13 is legal for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/20x25x1-furnace-filters" />
    </article>
  );
}
