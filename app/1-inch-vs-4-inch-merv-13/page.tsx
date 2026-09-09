import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const title = "1-inch vs 4-inch MERV 13 furnace filters";
const description =
  "Why filter depth beats a MERV number. When a 4-inch media cabinet is the real MERV 13 upgrade, and when to keep a 1-inch rack.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/1-inch-vs-4-inch-merv-13" },
  openGraph: { ...openGraphImage, title, description, url: "/1-inch-vs-4-inch-merv-13" },
};

export default function InchVsFourPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/1-inch-vs-4-inch-merv-13",
        })}
      />
      <GuideHero
        kicker="Depth first"
        title="Depth beats MERV: 1-inch vs 4-inch MERV 13"
        dek="Same printed rating, different amount of media. The 4-inch cabinet is how most houses get finer filtration without choking the blower."
      />

      <div className="prose-fit mt-10">
        <p>
          MERV 13 describes how the media treats particles. It does not describe how much media is
          in the airstream. A 1-inch MERV 13 and a 4-inch MERV 13 can share a number on the carton
          and behave like different products in the same furnace.
        </p>

        <h2>Why more depth usually means less resistance</h2>
        <p>
          Pleated filters work by spreading airflow across media area. A 4-inch pack has a longer
          path and, in a competent design, much more media than a 1-inch pad of the same face
          (<Link href="/16x25x1-furnace-filters">16×25</Link>,{" "}
          <Link href="/20x25x1-furnace-filters">20×25</Link>,{" "}
          <Link href="/16x20x1-furnace-filters">16×20</Link>, and so on). Air slows down through that media. Lower velocity at the same
          MERV is how you keep pressure drop in a range a residential blower can live with.
        </p>
        <p>
          That is why a 4-inch MERV 13 often feels closer to a 1-inch MERV 8 or 11 than to a
          1-inch MERV 13. It is also why “just buy MERV 13” is incomplete advice. See{" "}
          <Link href="/merv-11-vs-13-1-inch">the 1-inch MERV 11 vs 13 guide</Link> if the rack
          cannot grow.
        </p>
        <Callout title="Bypass ruins the upgrade">
          A 4-inch filter that does not seat against the cabinet gasket leaks dirty air around the
          frame. You paid for MERV 13 and received a 1-inch gap. Seat it fully; do not stack two
          1-inch pads to “make” 2 inches.
        </Callout>

        <h2>When a 1-inch rack is enough</h2>
        <ul>
          <li>You are happy with MERV 8 or 11 and you change the pad on time.</li>
          <li>The furnace manual is conservative about high-MERV 1-inch media.</li>
          <li>There is no physical room for a media cabinet (tight closet, coil jammed to the door).</li>
          <li>The house already has a large return grille filter and the cabinet filter is a secondary screen.</li>
        </ul>
        <p>
          “Enough” is an airflow statement. It is not a judgment that finer filtration is
          pointless. If you want MERV 13 in that closet, the honest path is usually more depth, not
          a denser 1-inch SKU.
        </p>

        <h2>When to upgrade the cabinet</h2>
        <p>Upgrade the rack or add a media cabinet when most of these are true:</p>
        <ul>
          <li>You want MERV 13 as the everyday filter, not a two-week experiment.</li>
          <li>The 1-inch pad loads fast (pets, renovation dust, long runtime).</li>
          <li>Supply air got weaker after the last “upgrade” to a thicker 1-inch pad.</li>
          <li>A technician has already measured high external static, or the coil ices after filter changes.</li>
        </ul>

        <h3>Ways the cabinet actually changes</h3>
        <ul>
          <li>
            <strong>Aftermarket 4- or 5-inch media cabinet</strong> on the return drop. Common,
            serviceable, and the usual Filterbuy-style / Honeywell-style depth.
          </li>
          <li>
            <strong>Filter grille in a wall or ceiling return</strong> that already takes a deeper
            pad. Measure the grille, not the furnace door.
          </li>
          <li>
            <strong>OEM media air cleaner</strong> that the furnace brand already published a
            static curve for. Follow that curve; do not assume any 4-inch MERV 13 matches it.
          </li>
        </ul>
        <p>
          Cabinet work is HVAC work. Clearance, door swing, condensate, and coil access all move.
          FilterFit will not sketch a retrofit from a blog comment. Hire someone who will measure
          static before and after.
        </p>

        <h2>Cost is a cabinet once, or a 1-inch pad forever</h2>
        <p>
          A 4-inch MERV 13 usually costs more per filter and lasts longer per change. A 1-inch
          MERV 13 is cheaper per piece and more expensive as a habit if you have to swap it monthly
          to keep the blower honest. We will not invent a five-year TCO table — street prices
          move. The decision is: pay for media area once (cabinet + deep filter) or keep buying
          density in a thin slot.
        </p>

        <h2>5-inch, 2-inch, and “almost 4”</h2>
        <p>
          Five-inch media cabinets are the same idea as four-inch: more media, lower velocity.
          Two-inch is a halfway rack — better than one inch, not a media cleaner. Never assume a
          16×25×4 will drop into a 5-inch cabinet without a spacer the manufacturer specified.
          Confirm depth on the{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link>.
        </p>
        <p>
          After the cabinet exists,{" "}
          <Link href="/merv-13-safe-for-furnace">check whether MERV 13 is still the right rating</Link>{" "}
          for that blower and duct system.
        </p>
      </div>
      <RelatedGuides except="/1-inch-vs-4-inch-merv-13" />
    </article>
  );
}
