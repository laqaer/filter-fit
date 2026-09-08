import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd } from "@/lib/schema";

const title = "Is MERV 13 safe for your furnace?";
const description =
  "When a MERV 13 furnace filter is fine, when it chokes PSC blowers, and the warning signs that airflow — not the MERV badge — is the problem.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/merv-13-safe-for-furnace" },
  openGraph: { ...openGraphImage, title, description, url: "/merv-13-safe-for-furnace" },
};

export default function Merv13SafePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/merv-13-safe-for-furnace",
        })}
      />
      <GuideHero
        kicker="Airflow first"
        title="When MERV 13 is fine — and when it chokes the blower"
        dek="MERV 13 is not a hazard class. A filter that the air handler cannot breathe through is. Use the manual, the slot depth, and the equipment’s behavior — not the aisle label."
      />

      <div className="prose-fit mt-10">
        <p>
          People ask whether MERV 13 will “ruin” a furnace. The honest answer is: MERV 13 is safe
          when the system can still move the design CFM after the filter’s resistance is included.
          It is a problem when the filter becomes the tightest fitting on a system that already had
          no static-pressure leftover.
        </p>
        <Callout title="Follow the manufacturer" tone="warn">
          If the furnace or air-handler literature specifies a maximum MERV, a filter type, or a
          maximum external static pressure, that document wins. FilterFit is a directory, not a
          second nameplate.
        </Callout>

        <h2>What “choke” looks like in a real house</h2>
        <ul>
          <li>Supply registers that feel weaker after the swap, especially on the longest run.</li>
          <li>Cooling: ice on the copper, a coil that weeps, then a sudden dump of water.</li>
          <li>Heating: high-limit trips, short cycles, a burning-dust smell that is actually a hot heat exchanger.</li>
          <li>A PSC motor that hums harder; an ECM that ramps and the electric bill ticks up.</li>
          <li>The filter collapses or sucks into the rack — the frame lost, not just the MERV.</li>
        </ul>
        <p>
          Any of those can also be a dirty MERV 8, a closed return, or a crushed flex. Do not
          diagnose from the carton alone.
        </p>

        <h2>When MERV 13 is usually OK</h2>
        <ul>
          <li>
            <strong>Depth is 4 inches or more.</strong> Media area is doing the work. See{" "}
            <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch</Link>.
          </li>
          <li>
            <strong>Variable-speed / ECM blower</strong> with return static that was already in
            spec. The motor can recover some CFM; it cannot invent a larger duct.
          </li>
          <li>
            <strong>Return path is generous</strong> — large grille, short straight drop, or two
            filters sharing the face velocity.
          </li>
          <li>
            <strong>You will change it.</strong> A loaded MERV 13 is not the product you bought.
          </li>
          <li>
            <strong>OEM allows it</strong> or is silent while measured static stays inside the
            published maximum after the install.
          </li>
        </ul>

        <h2>When MERV 13 is the wrong 1-inch idea</h2>
        <ul>
          <li>Older single-speed PSC furnace, 1-inch slide-in, small return.</li>
          <li>The current cheap filter is already packed in a month — you have a loading problem.</li>
          <li>Known high static (long flex, undersized return, dirty coil).</li>
          <li>The manual says “pleated MERV 8” or forbids high-MERV throwaways.</li>
        </ul>
        <p>
          In those houses,{" "}
          <Link href="/merv-11-vs-13-1-inch">stay at 1-inch MERV 11</Link> or change depth. Do not
          collect MERV badges.
        </p>

        <h2>PSC vs ECM, without folklore</h2>
        <p>
          A permanent-split-capacitor blower is roughly a fixed-speed machine. Raise resistance and
          CFM falls. An ECM can increase torque to chase CFM, which is why some variable-speed
          systems “tolerate” MERV 13 — they spend watts on it. They still have a ceiling. Past that
          ceiling you get the same ice and limit trips, plus a motor working at the top of its
          range all winter.
        </p>

        <h2>A short checklist before you order</h2>
        <ol>
          <li>Read the filter door and the manual. Note any max MERV or media-cabinet SKU.</li>
          <li>Measure face and depth. Nominal 16×25×1 is not a 4-inch cabinet.</li>
          <li>Look at the current filter. Felted already? Fix the interval before you raise MERV.</li>
          <li>If you can, have static pressure measured before and after the first MERV 13 month.</li>
          <li>Watch the first week of heat and the first week of cooling like a test, not a lifestyle.</li>
        </ol>
        <p>
          Common 16×25 shoppers can start on the{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1 page</Link>. Everyone else should{" "}
          <Link href="/furnace-filter-size-depth-chart">confirm size and depth</Link> first.
        </p>
      </div>
      <RelatedGuides except="/merv-13-safe-for-furnace" />
    </article>
  );
}
