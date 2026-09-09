import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { brandClasses, mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const title = "16×20×1 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 16x20x1 furnace filters at MERV 8, 11, and 13. Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake review scores.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/16x20x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/16x20x1-furnace-filters" },
};

export default function Size16x20Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/16x20x1-furnace-filters",
        })}
      />
      <GuideHero
        kicker="16×20 face"
        title="16×20×1 furnace filters, compared without fake scores"
        dek="A common 1-inch face, often paired with a return-grille filter. Same opening, three MERV classes, three brand classes — and an actual size that is not 16 by 20."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>16×20×1</strong> is a nominal. The cardboard you slide into the rack is usually
          about <strong>15½ × 19½ × ¾ inches</strong>. If a “16×20” pad is truly 16.00 by 20.00, it
          will buckle or refuse the door. Measure the opening, then confirm the actual dimensions
          on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists other
          faces the same way — including the more common{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1</Link> and{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1</Link>.
        </p>
        <Callout title="Arrow toward the furnace">
          The airflow arrow on a 16×20×1 points at the equipment, not at the room. A backwards
          filter still “fits.” It loads faster and can dump dust into the blower. If you also have
          a pad at a return grille, that arrow still faces the furnace — not the living room.
        </Callout>

        <h2>Less face than 16×25 — still a 1-inch pack</h2>
        <p>
          A 16×20 opening is about a fifth less face area than a 16×25, and far less than a 20×25.
          At the same system CFM that smaller cardboard raises face velocity. It is why a 16×20×1
          rack is a poorer place to “just step up to MERV 13” than a larger 1-inch slot. It is not
          a 4-inch media cabinet. Depth still decides how much media you actually have.
        </p>
        <p>
          Treat the missing inches as less headroom, not as a reason to ignore MERV. That is the
          same <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, applied
          to a face the size chart already flags as common — and one that often shares the return
          with a second filter at a grille.
        </p>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. Raising MERV on a 1-inch 16×20 therefore raises resistance unless
          you also add depth. ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort
          score and not a medical claim. We will not invent a Pascal number for a SKU we did not
          test. Read the data sheet’s initial resistance and the furnace or air-handler manual.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 16x20x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 16×20×1 slot</th>
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
          is the usual 1-inch step most houses can take when the return is healthy. MERV 13 is the
          tightest common 1-inch combo, and it is less plausible here than in a 16×25 or 20×25
          slot: same thin pack, less cardboard. A dirty MERV 11 can out-restrict a clean MERV 13.
          Loading writes the real product.
        </p>
        <Callout title="Count the filters before you subscribe" tone="warn">
          Many 16×20×1 cabinets sit at the furnace while a second pad lives in a return grille —
          often a different face. They are two SKUs. Changing only the easy grille and leaving the
          furnace pad felted is how a “clean house” still short-cycles.
        </Callout>

        <h2>Do not order the neighbor size</h2>
        <p>
          16×20 is not 16×25, not 14×20, and not 20×20. A filter that “almost” fits either leaks or
          collapses. Some houses use a 16×20×1 at the furnace and a{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1</Link> or{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1</Link> at a return grille — confirm both
          slots before you subscribe.
        </p>
        <p>
          16×20 and 20×16 are the same cardboard rotated. Match the door so the pad seats flat and
          the arrow still faces the equipment. A 16×20×4 will not crush into a 1-inch door; a
          1-inch pad standing in a 4-inch cabinet wastes the media area you already paid for. See{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link>.
        </p>

        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 16×20×1 products the way a careful shopper already thinks — retail
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
          Hardware stores stock 16×20×1, though the wall is usually thicker on 16×25. You are often
          buying an MPR number. Treat MPR 1000 as the everyday MERV 11-class pad and the higher MPR
          1-inch SKUs as the pressure-drop experiment — more so on this smaller face. The brand
          class is convenience and consistent sizing, not a secret lab score.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. Useful when you want the
          ASHRAE word on the box. Inspect the frame: a floppy 16×20×1 will bow in the rack and
          leak around the sides, which defeats the MERV you paid for. Confirm the actual (not
          nominal) dimensions before you buy a six-pack — 15½ × 19½ is not “close enough” to a
          leftover 16×25.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 16×20 face is also sold as 16×20×4, which is the usual aftermarket media-cabinet
          upgrade on this opening. That is the reason this class exists. If your door says
          16×20×1, do not order a 4-inch pad and crush it. If you have a media cabinet, do not keep
          stuffing 1-inch pads in the deep slot — use the depth you already paid for.
        </p>

        <h2>Change interval: hours beat the calendar</h2>
        <p>
          16×20 is a residential slide-in that often shares duty with a grille filter. More runtime
          loads a 1-inch pad faster, and the smaller face does not give you extra days. Pets,
          renovation dust, and a furnace that never shuts off in winter do the same thing. A
          printed “90-day” or “six-month” claim is a marketing interval, not a measurement of your
          return.
        </p>
        <p>
          Honest 1-inch habits on this face: MERV 8 often 30–90 days; MERV 11 closer to 30–60
          with pets; MERV 13 only if you will actually pull it on a short interval and the
          equipment still moves design CFM. A black 16×20×1 is a blower restriction no matter
          what MERV it started as. If two pads are in the airstream, change both.
        </p>

        <h2>When to stay 16×20×1 — and when to stop</h2>
        <p>
          Stay 1-inch if the cabinet is 1-inch, MERV 8 or 11 meets the house, the frame stays
          rigid, and you will change the pad — including the grille pad if there is one. Stop
          staying 1-inch if you want MERV 13 as a lifestyle, if the current pad is always packed
          at 30 days, or if the installer already noted high static. Then the next page is{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, not a thicker
          marketing claim on the same thin pad.
        </p>
        <p>
          Still unsure whether 13 is legal for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
      </div>
      <RelatedGuides except="/16x20x1-furnace-filters" />
    </article>
  );
}
