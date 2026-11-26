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
import { site } from "@/lib/site";

const title = "8×20×4 furnace and air filters";
const description =
  "8x20x4 furnace and air filters are the same pad. Compare MERV 8, 11, and 13. Filterbuy lists actual size 8.0 x 20.0 x 3.63. No fake scores.";

const faq: readonly FaqEntry[] = [
  {
    question: "Is an 8×20×4 furnace filter the same as an air filter?",
    answer: [
      "Yes. Furnace filter and air filter are the same pad. Match the cabinet model and all three actual dimensions, not the words on the carton. A return-grille pad is often a different face and is not this cabinet filter.",
    ],
  },
  {
    question: "Should a 4-inch 8×20 cabinet use MERV 11 or MERV 13?",
    answer: [
      "MERV 11 is the conservative pick in this cabinet. The face is narrower than a 16×20 before depth enters, and MERV 11 still gives easy airflow with finer household dust. MERV 13 is how most homes should run that rating here, with more media, lower velocity, and slower loading than a 1-inch pad. ASHRAE 52.2 requires at least 50% efficiency in the 0.3 to 1.0 μm band. That is finer household dust, not a HEPA room filter. A loaded MERV 13 is a different product than a clean one. A 4-inch label is not a promise that every SKU is gentle. Read the data-sheet initial resistance and the furnace or air-handler manual. Depth versus a 1-inch pad is the ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch guide" },
      ".",
    ],
  },
  {
    question: "Can I put a 1-inch filter in an 8×20×4 rack?",
    answer: [
      "No. A 1-inch pad does not become the correct media-cabinet replacement because the face size matches. A loose pad can tip or let air bypass it. Use the cabinet-approved filter and depth. Do not crush a thicker filter into a thinner slot. A ",
      { href: "/16x20x4-furnace-filters", label: "16×20×4" },
      " is wider and will not seat in this opening.",
    ],
  },
  {
    question: "What is the actual size of a nominal 8×20×4 filter?",
    answer: [
      "There is no single interchangeable actual size. Width, height, and depth are manufacturer-specific. Filterbuy lists actual size 8.0 × 20.0 × 3.63 and MERV 8, 11, and 13. Accumulair states actual size 8 × 20 × 3.75 for a filter sold as 8×20×4. A Filterbuy product title has also stated 8.00 × 20.00 × 4.00, which disagrees with that size page's 8.0 × 20.0 × 3.63. Those stated cuts are not interchangeable. The spread is not a compatibility range. Match all three actual dimensions and the spec line on the carton. The ",
      { href: "/furnace-filter-size-depth-chart", label: "size and depth chart" },
      " is a starting point, not a substitute for the cabinet specifications.",
    ],
  },
  {
    question: "How often should I change an 8×20×4 filter?",
    answer: [
      "Change it by dust and runtime. Four inches of media loads slower than a 1-inch pad of the same face, so the interval stretches. It does not disappear. On this face, MERV 8 is often 30 to 90 days. MERV 11 is often 60 to 90 days. MERV 13 is not set-and-forget. A printed \"6 month\" or \"12 month\" claim is a marketing interval. Pets, renovation dust, and a furnace that runs all winter still set the date.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/8x20x4-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/8x20x4-furnace-filters" },
};

export default function Size8x20x4Page() {
  return (
    <article className="ff-article">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/8x20x4-furnace-filters",
          dateModified: site.contentUpdated,
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <GuideHero
        kicker="Media cabinet"
        title="8×20×4 furnace filters and air filters are the same pad"
        dek="Furnace filter and air filter are the same pad. MERV 8, 11, and 13. Match the cabinet model and all three actual dimensions."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>8×20×4</strong> is a nominal size, not a single set of actual dimensions.
          Furnace filter and air filter are the same pad. Width, height, and depth are
          manufacturer-specific and vary by product family. The spread of stated cuts is not a
          compatibility range. Match all three actual dimensions and the approved replacement part
          for your cabinet model before ordering. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> is a starting
          point, not a substitute for the cabinet specifications. This face is narrower than
          16×20. A <Link href="/16x20x4-furnace-filters">16×20×4</Link> will not seat. A
          return-grille pad is often a different face and is not this cabinet filter.
        </p>
        <p>
          <a href="https://filterbuy.com/air-filters/8x20x4/">
            Filterbuy lists actual size 8.0 × 20.0 × 3.63
          </a>{" "}
          and lists MERV 8, 11, and 13. Accumulair states actual size 8 × 20 × 3.75 for a filter
          sold as 8×20×4. A Filterbuy product title has also stated 8.00 × 20.00 × 4.00, which
          disagrees with that size page&apos;s 8.0 × 20.0 × 3.63. Those stated cuts are not
          interchangeable. Match the spec line on the carton.
        </p>
        <Callout title="Do not substitute a thinner pad without an approved adapter" tone="warn">
          A 1-inch pad does not become the correct media-cabinet replacement because the face
          size matches. A loose pad can tip or let air bypass it. Use the cabinet-approved filter
          and depth. Do not crush a thicker filter into a thinner slot. A 16×20×4 is wider and
          will not seat here.
        </Callout>

        <h2>Why 4-inch instead of 1-inch on this face</h2>
        <p>
          The face is still 8×20, which is narrower than a 16×20 before depth enters. The extra
          depth is extra media. That is the{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch</Link> argument on this cabinet.
          Depth is how most houses run finer filtration without making the filter the tightest
          fitting on the return. It is not a promise that every 4-inch SKU is gentle. Read the
          data-sheet initial resistance and the furnace or air-handler manual. We will not invent
          a Pascal number for a filter we did not test.
        </p>

        <h2>MERV 8 / 11 / 13 in this cabinet</h2>
        <p>
          ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort score and not a
          medical claim. On a 4-inch 8×20 the usual question is how fine you need the dust, and
          whether you will change the pad, not whether the slot can physically hold a pleat.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in an 8x20x4 cabinet</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In an 8×20×4 cabinet</th>
              <th scope="col">Change habit</th>
            </tr>
          </thead>
          <tbody>
            {mervRows.map((row) => (
              <tr key={row.merv}>
                <td className="font-semibold text-ink">{row.merv}</td>
                <td>{row.particles}</td>
                <td>{row.deepMediaCharacter}</td>
                <td>{row.changeHint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AmazonShopExamples face="8x20x4" />

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 8×20×4 products the way a careful shopper already thinks. Retail boxed,
          value pleated, and cut-to-size. We do not invent a 9.7. Street prices move. Media lots
          move. A score would be fiction by next week.
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
          Hardware walls rarely stock this narrow cabinet filter. You are often buying an MPR
          number. Treat MPR 1000 as the everyday MERV 11-class comparison and higher MPR as a
          class label, not a lab conversion. Compare the exact product family and all three actual
          dimensions with the cabinet requirements. 8.0 × 20.0 × 3.63, 8 × 20 × 3.75, and 8.00 ×
          20.00 × 4.00 are not the same pad.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8, 11, or 13, and sold in multi-packs online. Inspect the frame. A
          floppy 4-inch pad leaks at the cabinet gasket, which defeats the MERV you paid for.
          Confirm the actual dimensions before a six-pack. Match the spec line on the carton. A
          leftover 16×20×4 will not fold into this opening.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          Filterbuy&apos;s size page lists 8.0 × 20.0 × 3.63. Accumulair states 8 × 20 × 3.75. A
          Filterbuy product title has also stated 8.00 × 20.00 × 4.00. Those stated cuts are not
          interchangeable. The cabinet model and approved replacement part decide which cut fits.
          Match actual width, height, and depth rather than the printed third number alone.
        </p>

        <h2>Change intervals</h2>
        <p>
          Four inches of media loads slower than a 1-inch pad, which is why the
          interval stretches. It does not disappear. Pets, renovation dust, and a furnace that
          runs all winter still set the date. A printed &quot;6 month&quot; or &quot;12 month&quot;
          claim is a marketing interval, not a measurement of your return.
        </p>
        <p>
          Honest habits on this face, matching the table: MERV 8 often 30 to 90 days depending on
          dust and runtime, MERV 11 often 60 to 90 days in 4-inch, and MERV 13 is not
          set-and-forget. A loaded 8×20×4 is a different product than a clean one. If the current
          filter is packed early, fix the dust load or the return before you chase a higher MERV.
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
      <RelatedGuides except="/8x20x4-furnace-filters" />
    </article>
  );
}
