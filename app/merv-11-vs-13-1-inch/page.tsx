import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const title = "MERV 11 vs MERV 13 in a 1-inch furnace filter";
const description =
  "Why 1-inch MERV 13 raises pressure drop and short-cycle risk compared with MERV 11, and when a thin MERV 13 is still reasonable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/merv-11-vs-13-1-inch" },
  openGraph: { ...openGraphImage, title, description, url: "/merv-11-vs-13-1-inch" },
};

export default function Merv11Vs13Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/merv-11-vs-13-1-inch",
        })}
      />
      <GuideHero
        kicker="1-inch slots"
        title="MERV 11 vs 13 when the rack is only an inch deep"
        dek="A 1-inch filter is a thin pack of media. Raising MERV on that pack is not the same upgrade as raising MERV in a 4-inch cabinet."
      />

      <div className="prose-fit mt-10">
        <p>
          Homeowners jump from a gray 1-inch MERV 8 to a 1-inch MERV 13 because the box promises
          finer particles. Sometimes that works. Often the furnace answers with weaker supply air,
          a frosting indoor coil, or a heat cycle that slams off on the high-limit switch. The MERV
          number did not become “unsafe.” The <em>slot</em> ran out of media area.
        </p>
        <p>
          If you are shopping the common 16×25 face, start at the{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1 comparison</Link>. The same 1-inch MERV
          argument applies to <Link href="/20x25x1-furnace-filters">20×25×1</Link>. If you can
          change the cabinet, read{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link> first.
        </p>

        <h2>What the two ratings actually claim</h2>
        <p>
          MERV is ASHRAE 52.2. It is a particle-size efficiency scale, not a comfort score and not
          a medical claim. In plain language:
        </p>
        <ul>
          {mervRows
            .filter((row) => row.merv !== 8)
            .map((row) => (
              <li key={row.merv}>
                <strong>MERV {row.merv}.</strong> {row.particles} {row.oneInchCharacter}
              </li>
            ))}
        </ul>
        <p>
          Retail brands muddy this. Filtrete-style boxes often print <strong>MPR</strong> (a 3M
          house scale). MPR 1000 is commonly treated as MERV 11-class; MPR 1500–1900 as MERV 12–13-class.
          Those are shopping classes, not a lab conversion you should tattoo on the furnace.
        </p>

        <h2>Pressure drop is the 1-inch problem</h2>
        <p>
          Air has to pass through the media. A 1-inch pad has a short path and limited pleat area,
          so face velocity is high. Tighter media (higher MERV) raises the resistance of that path.
          Manufacturers publish initial resistance at a stated airflow; we will not invent a Pascal
          number for a SKU we did not test. What is honest:
        </p>
        <ul>
          <li>A clean 1-inch MERV 13 is usually the highest-resistance common household pad.</li>
          <li>A dirty 1-inch MERV 11 can exceed a clean 1-inch MERV 13. Loading matters more than the badge after month two.</li>
          <li>A 4-inch MERV 13 often presents less resistance than a 1-inch MERV 13 at the same face size because there is more media.</li>
        </ul>
        <Callout title="Read the furnace, not the filter aisle" tone="warn">
          Many residential furnaces are designed around roughly 0.5 inch w.c. of external static
          pressure for the whole duct system — filter, coil, and fittings included. A dense 1-inch
          pad can spend a large share of that budget by itself. Check the air-handler or furnace
          manual for the allowed filter type and any published static limit.
        </Callout>

        <h2>Short-cycling and other “the house feels wrong” signs</h2>
        <p>
          Restricted return air cuts CFM. The equipment still tries to deliver the nameplate
          capacity through less air, so temperature rise goes up in heat and coil temperature goes
          down in cooling. That is how you get:
        </p>
        <ul>
          <li>Short heat cycles and a high-limit trip (the furnace thinks the heat exchanger is too hot).</li>
          <li>A sweating or icing evaporator, then a flood of water when it thaws.</li>
          <li>Rooms that never catch up, even though the thermostat is calling.</li>
          <li>A PSC blower that sounds strained, or an ECM that ramps up and uses more wattage to chase the same CFM.</li>
        </ul>
        <p>
          Those signs are not unique to MERV 13. A felted MERV 8 does the same thing. MERV 13 in a
          1-inch slot just gets you there with a cleaner-looking filter.
        </p>

        <h2>When 1-inch MERV 11 is the better buy</h2>
        <ul>
          <li>The rack is truly 1 inch. No media cabinet hiding behind the door.</li>
          <li>The furnace is a single-speed PSC, or the return is already a tight flex run.</li>
          <li>You have pets, drywall dust, or you historically change filters late.</li>
          <li>The current MERV 8 already looks used at 30 days — you need a change habit, not a tighter pad.</li>
        </ul>

        <h2>When 1-inch MERV 13 can be reasonable</h2>
        <ul>
          <li>Variable-speed / ECM air handler, and the installer sized return static with room to spare.</li>
          <li>A large filter grille or two returns, so face velocity is not all piled on one small pad.</li>
          <li>You will change it on a short interval (often 30–45 days in winter), not “when I remember.”</li>
          <li>The OEM literature does not forbid high-MERV 1-inch media.</li>
        </ul>
        <p>
          Even then, a{" "}
          <Link href="/merv-13-safe-for-furnace">MERV 13 safety check</Link> is about airflow, not
          about whether 13 is a “better” number than 11.
        </p>

        <h2>Do not use invented scores</h2>
        <p>
          FilterFit will not rank Filtrete-style, Aerostar-style, and Filterbuy-style 1-inch pads
          with a 9.4. Compare frame rigidity, published MERV or MPR, actual (not nominal) size, and
          the change interval you will keep. That is the whole product table that matters in a
          1-inch slot.
        </p>
      </div>
      <RelatedGuides except="/merv-11-vs-13-1-inch" />
    </article>
  );
}
