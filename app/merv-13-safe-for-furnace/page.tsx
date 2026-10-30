import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { AmazonGuideExamples } from "@/components/amazon-shop-examples";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd, faqPageJsonLd, type FaqEntry } from "@/lib/schema";

const title = "Is MERV 13 safe for your furnace?";
const description =
  "When a MERV 13 furnace filter is fine, when it chokes PSC blowers, and the warning signs that airflow — not the MERV badge — is the problem.";

const faq: readonly FaqEntry[] = [
  {
    question: "Will a MERV 13 filter ruin a furnace?",
    answer: [
      "MERV 13 is safe when the system can still move its design airflow after the filter resistance is included. It is a problem when the filter is the tightest fitting on a system that already had no static-pressure leftover. If the furnace or air-handler literature names a maximum MERV, a filter type, or a maximum external static pressure, that document wins.",
    ],
  },
  {
    question: "What does a choked blower look like?",
    answer: [
      "Supply registers feel weaker after the swap, especially on the longest run. In cooling, the coil can ice, weep, and then dump water when it thaws. In heating, the high limit can trip, cycles get short, and a hot heat exchanger can smell like burning dust. A PSC motor hums harder. An ECM ramps, and the electric bill ticks up. The frame can collapse into the rack. A dirty MERV 8, a closed return, or crushed flex can look the same. Do not diagnose from the carton alone.",
    ],
  },
  {
    question: "When is MERV 13 usually fine?",
    answer: [
      "It is usually fine at 4 inches of depth or more, on a variable-speed ECM blower whose return static was already in spec, and with a generous return. A large grille, a short straight drop, or two filters sharing face velocity all count. The pad still has to be changed, because a loaded MERV 13 is a different product. The manufacturer allows it, or measured static stays inside the published maximum. Depth is the first of those checks. See ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch" },
      ".",
    ],
  },
  {
    question: "When is 1-inch MERV 13 the wrong filter?",
    answer: [
      "Do not use it on an older single-speed PSC furnace with a 1-inch slide-in and a small return. Do not use it when the current cheap filter is already packed in a month, when static is already high, or when the manual says pleated MERV 8 or forbids high-MERV throwaways. In those houses, ",
      { href: "/merv-11-vs-13-1-inch", label: "stay at 1-inch MERV 11" },
      " or change the depth.",
    ],
  },
  {
    question: "How do PSC and ECM blowers respond to MERV 13?",
    answer: [
      "A PSC blower is roughly a fixed-speed machine. Raise resistance and airflow falls. An ECM can increase torque to hold airflow, which is why some variable-speed systems tolerate MERV 13. That extra torque costs watts, and the motor still has a ceiling. Past that ceiling the coil ices, the high limit trips, and the motor works at the top of its range.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/merv-13-safe-for-furnace" },
  openGraph: { ...openGraphImage, title, description, url: "/merv-13-safe-for-furnace" },
};

export default function Merv13SafePage() {
  return (
    <article className="ff-article">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/merv-13-safe-for-furnace",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
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
          <Link href="/16x25x1-furnace-filters">16×25×1 page</Link>. 20×25 racks have their own{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1 comparison</Link>. 16×20 — often paired
          with a return-grille filter — is on the{" "}
          <Link href="/16x20x1-furnace-filters">16×20×1 page</Link>. Everyone else should{" "}
          <Link href="/furnace-filter-size-depth-chart">confirm size and depth</Link> first.
        </p>

        <h2>Questions</h2>
        {faq.map((item) => (
          <Fragment key={item.question}>
            <h3>{item.question}</h3>
            <p>
              {item.answer.map((part, index) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <Link key={index} href={part.href}>
                    {part.label}
                  </Link>
                ),
              )}
            </p>
          </Fragment>
        ))}
      </div>
      <AmazonGuideExamples
        note="These are Amazon searches for a MERV 13 furnace filter, a 4-inch MERV 13, and a 1-inch MERV 11, not a ranked list and not products we tested."
        examples={[
          {
            label: "MERV 13 furnace filters",
            keywords: "merv 13 furnace filter",
            subtag: "ff-guide-merv13-safe",
          },
          {
            label: "4-inch MERV 13 furnace filters",
            keywords: "4 inch merv 13 furnace filter",
            subtag: "ff-guide-merv13-safe-4in",
          },
          {
            label: "1-inch MERV 11 furnace filters",
            keywords: "1 inch merv 11 furnace filter",
            subtag: "ff-guide-merv13-safe-1in-merv11",
          },
        ]}
      />
      <RelatedGuides except="/merv-13-safe-for-furnace" />
    </article>
  );
}
