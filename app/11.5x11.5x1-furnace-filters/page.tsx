import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { AmazonShopExamples } from "@/components/amazon-shop-examples";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { brandClasses, mervRows } from "@/lib/filters";
import { openGraphImage } from "@/lib/metadata";
import { articleJsonLd, faqPageJsonLd, type FaqEntry } from "@/lib/schema";

const title = "11.5×11.5×1 furnace and air filters";
const description =
  "Compare 11.5x11.5x1 furnace and air filters at MERV 8, 11, and 13. Filterbuy lists actual size 11.5 x 11.5 x 0.75. No fake scores.";

const faq: readonly FaqEntry[] = [
  {
    question: "What is the actual size of a nominal 11.5×11.5×1 filter?",
    answer: [
      "The published actual size is 11.5 × 11.5 × 0.75. The face is not a half-inch under the nominal. The published actual face is 11.5 by 11.5. Only the nominal 1-inch thickness is 0.75. Filterbuy lists that actual size and says MERV 8, 11, and 13 are available. SpiroPure also states actual size 11.5 × 11.5 × 0.75 for this nominal. The cut is manufacturer-specific. Match the spec line on the carton. The ",
      { href: "/furnace-filter-size-depth-chart", label: "size and depth chart" },
      " records the same nominal.",
    ],
  },
  {
    question: "Should a 1-inch 11.5×11.5 slot use MERV 11 or MERV 13?",
    answer: [
      "MERV 11 is the usual 1-inch step most houses can take when the return is healthy. MERV 13 is the tightest common 1-inch combo, and it is less plausible on this small square than in a 16×25 or 20×25 slot. A dirty MERV 11 can out-restrict a clean MERV 13. Read the data-sheet initial resistance before you step up. The argument is ",
      { href: "/merv-11-vs-13-1-inch", label: "MERV 11 vs 13 in 1-inch" },
      ".",
    ],
  },
  {
    question: "Can I put a 4-inch filter in an 11.5×11.5×1 rack?",
    answer: [
      "No. A 4-inch pad will not fit a 1-inch door. A 1-inch pad standing in a 4-inch cabinet wastes the media you already paid for. See ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch MERV 13" },
      ".",
    ],
  },
  {
    question: "How often should I change an 11.5×11.5×1 filter?",
    answer: [
      "Change it by dust and runtime. The smaller face does not give you extra days. The interval does not get longer because the pad is labeled air filter instead of furnace filter. On this face, MERV 8 is often 30 to 90 days. MERV 11 is closer to 30 to 60 days with pets. Use MERV 13 only if you will pull it on a short interval and the equipment still moves design CFM. A printed \"90-day\" or \"six-month\" claim is a marketing interval. A black 11.5×11.5×1 is a blower restriction no matter what MERV it started as.",
    ],
  },
  {
    question: "Is a 12×12×1 the same filter as an 11.5×11.5×1?",
    answer: [
      "No. One maker's 12×12×1 cut can measure the same as this nominal's actual, 11.5 × 11.5 × 0.75. The matching measurement does not make the labels interchangeable. Order the nominal printed on the old filter, then match the spec line. The ",
      { href: "/furnace-filter-size-depth-chart", label: "size and depth chart" },
      " compares nominal names.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/11.5x11.5x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/11.5x11.5x1-furnace-filters" },
};

export default function Size115Page() {
  return (
    <article className="ff-article">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/11.5x11.5x1-furnace-filters",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <GuideHero
        kicker="11.5 face"
        title="11.5×11.5×1 furnace filters and air filters, compared without fake scores"
        dek="Same 1-inch pad under both names. The published actual face is 11.5 by 11.5. Only the nominal 1-inch thickness is 0.75."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>11.5×11.5×1</strong> is a nominal. The published actual size is{" "}
          <strong>11.5 × 11.5 × 0.75</strong>. The face is not a half-inch under the nominal. The
          published actual face is 11.5 by 11.5. Only the nominal 1-inch thickness is 0.75.{" "}
          <a href="https://filterbuy.com/air-filters/11-5x11-5x1/">
            Filterbuy lists actual size 11.5 × 11.5 × 0.75
          </a>{" "}
          and says MERV 8, 11, and 13 are available. SpiroPure also states actual size 11.5 × 11.5
          × 0.75 for this nominal. The cut is still manufacturer-specific. Match the spec line on
          the carton. Cartons may say furnace filter or air filter. The face is the same. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> records this
          nominal.
        </p>
        <p>
          <a href="https://filterbuy.com/resources/air-filter-basics/air-filter-sizes/">
            Filterbuy&apos;s air-filter size list shows nominal 12×12×1 with an actual of 11.5 ×
            11.5 × 0.75
          </a>
          . One maker&apos;s 12×12×1 cut can measure the same as this nominal&apos;s actual. The
          matching measurement does not make the labels interchangeable. Order the nominal printed
          on the old filter.
        </p>
        <Callout title="Arrow toward the furnace">
          The airflow arrow on an 11.5×11.5×1 points at the equipment, not at the room. This face
          is a square. Rotating it does not change the face. A backwards filter still fits the
          door. It loads faster and can dump dust into the blower.
        </Callout>

        <h2>Small square, still a 1-inch pack</h2>
        <p>
          This face is smaller than a 16×20 or a 20×20. At the same system CFM, the smaller
          cardboard raises face velocity. A small square is a poor place to step up to MERV 13. It
          is not a 4-inch media cabinet. Depth still decides how much media you actually have. See{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link>.
        </p>
        <p>
          Treat the small face as less headroom, not as a reason to ignore MERV. That is the same{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, on a square
          most hardware stores do not keep on the wall.
        </p>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. A higher-MERV 1-inch 11.5×11.5 SKU often lists a higher initial
          resistance than a lower-MERV pad of the same depth, but that pressure drop is
          manufacturer-specific. MERV is an efficiency scale, not a pressure-drop rating. We will
          not invent a Pascal number for a SKU we did not test. Read the data-sheet initial
          resistance and the furnace or air-handler manual.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in an 11.5x11.5x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In an 11.5×11.5×1 slot</th>
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

      <AmazonShopExamples face="11.5x11.5x1" />

      <div className="prose-fit mt-10">
        <p>
          On this face, MERV 8 is still the low-resistance everyday pad, if you change it. MERV 11
          is the usual 1-inch step most houses can take when the return is healthy. MERV 13 is the
          tightest common 1-inch combo, and it is less plausible here than in a 16×25 or 20×25
          slot. Same thin pack, less cardboard. A dirty MERV 11 can out-restrict a clean MERV 13.
          A loaded pad restricts more than a clean one.
        </p>
        <Callout title="The small face loads faster" tone="warn">
          An 11.5×11.5×1 is easy to forget because the size is uncommon. The interval still
          stretches if the rack is behind a grille or in a tight closet. Pull it on a runtime
          habit, not when the supply air finally feels weak.
        </Callout>

        <h2>Do not order the neighbor size</h2>
        <p>
          11.5×11.5×1 is not 12×12×1. One maker&apos;s 12×12×1 cut can measure 11.5 × 11.5 × 0.75,
          the same numbers as this nominal&apos;s actual. The matching measurement does not make
          the labels interchangeable. A 4-inch pad will not crush into this 1-inch door. A 1-inch
          pad standing in a 4-inch cabinet wastes the media you already paid for. See{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link>.
        </p>

        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 11.5×11.5×1 products the way a careful shopper already thinks. Retail
          boxed, value pleated, and cut-to-size. We do not invent a 9.7. Street prices move. Media
          lots move. A score would be fiction by next week.
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
          Hardware stores often skip this square. When a boxed SKU is on the shelf, you are still
          buying an MPR number. Treat MPR 1000 as the everyday MERV 11-class pad and the higher
          MPR 1-inch SKUs as the pressure-drop experiment. The brand class is convenience and
          consistent sizing, not a secret lab score. Confirm the actual line before you leave the
          aisle. The face should read 11.5 by 11.5, not a half inch under the nominal.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8, 11, or 13, and sold in multi-packs online. This is often how you
          get the size. Inspect the frame. A floppy square leaks around the sides, which defeats
          the MERV you paid for. Confirm the actual dimensions before a six-pack. 11.5 × 11.5 ×
          0.75 is not a leftover 12×12 label.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          This class exists because big-box size runs skip odd faces. Filterbuy lists MERV 8, 11,
          and 13 at actual size 11.5 × 11.5 × 0.75. The door still decides the depth. If the slot
          says 11.5×11.5×1, do not order a 4-inch pad and crush it. If a technician already
          installed a deep rack, use the depth you already paid for.
        </p>

        <h2>Change interval: hours beat the calendar</h2>
        <p>
          11.5×11.5 is a residential slide-in that is easy to forget. More runtime loads a 1-inch
          pad faster, and the smaller face does not give you extra days. Pets, renovation dust,
          and a furnace that never shuts off in winter do the same thing. A printed &quot;90-day&quot;
          or &quot;six-month&quot; claim is a marketing interval, not a measurement of your return.
          The label air filter does not add days.
        </p>
        <p>
          Honest 1-inch habits on this face: MERV 8 often 30 to 90 days, MERV 11 closer to 30 to
          60 days with pets, and MERV 13 only if you will pull it on a short interval and the
          equipment still moves design CFM. A black 11.5×11.5×1 is a blower restriction no matter
          what MERV it started as.
        </p>

        <h2>When to stay 11.5×11.5×1, and when to stop</h2>
        <p>
          Stay 1-inch if the cabinet is 1-inch, MERV 8 or 11 meets the house, the frame stays
          rigid, and you will change the pad. Stop staying 1-inch if you want MERV 13 as a
          lifestyle, if the current pad is always packed at 30 days, or if the installer already
          noted high static. Then the next page is{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, and only if that
          slot can take the depth.
        </p>
        <p>
          Still unsure whether 13 is appropriate for the blower? Use{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
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
      <RelatedGuides except="/11.5x11.5x1-furnace-filters" />
    </article>
  );
}
