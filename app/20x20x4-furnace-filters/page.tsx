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

const title = "20×20×4 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 20x20x4 furnace filters at MERV 8, 11, and 13. Actual depth is not one number. Brand classes, no fake scores.";

const faq: readonly FaqEntry[] = [
  {
    question: "What is the actual size of a nominal 20×20×4 filter?",
    answer: [
      "There is no single interchangeable actual size. Filterbuy’s product spec on its 20×20×4 page lists 19.50 × 19.50 × 3.63 inches. The same page also says actual dimensions typically measure 19.5 × 19.5 × 3.75 inches. Those are not the same depth. A nominal 4-inch label is not a compatibility range. Match all three actual dimensions and the cabinet-approved replacement.",
    ],
  },
  {
    question: "Should a 4-inch 20×20 cabinet use MERV 11 or MERV 13?",
    answer: [
      "MERV 11 is the conservative pick in this cabinet: easy airflow and finer household dust. MERV 13 is how most homes should run that rating here, with more media, lower velocity, and slower loading. ASHRAE 52.2 requires at least 50% efficiency in the 0.3–1.0 μm band. That is finer household dust, not a HEPA room filter, and a loaded MERV 13 is a different product than a clean one. Extra depth is extra media, which is the reason to run a finer MERV here. Read the data-sheet initial resistance and the equipment manual. Depth versus a 1-inch pad is the ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch guide" },
      ".",
    ],
  },
  {
    question: "Can I put a 1-inch filter in a 20×20×4 rack?",
    answer: [
      "No. A 4-inch pad will not crush into a 1-inch grille, and a 1-inch pad standing in a 4-inch cabinet wastes the media area. Rotating the square does not fix the depth. 20×20 turned is still 20×20. Many ceiling grilles cannot take a media cabinet without a different rack. The door, not the square face, decides. The slide-in slot is the ",
      { href: "/20x20x1-furnace-filters", label: "20×20×1 comparison" },
      ".",
    ],
  },
  {
    question: "How often should I change a 20×20×4 filter?",
    answer: [
      "Change it by dust and runtime. Four inches loads slower than a 1-inch 20×20. It does not make the filter invisible. On this face, MERV 8 is often 30–90 days depending on dust and runtime, MERV 11 is often 60–90 days in 4-inch, and MERV 13 is not set-and-forget. A printed “6 month” or “12 month” claim is a marketing interval.",
    ],
  },
  {
    question: "Can I use a 20×25×4 in a 20×20×4 cabinet?",
    answer: [
      "No. A 20×25×4 is five nominal inches taller and will not “almost” seat. A floppy square leaks on all four sides, so confirm the actual cut, including the depth, before a multi-pack. 3.63 inches and 3.75 inches are both being described as this nominal, and they are not the same pad.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/20x20x4-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/20x20x4-furnace-filters" },
};

export default function Size20x20x4Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/20x20x4-furnace-filters",
          dateModified: site.contentUpdated,
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <GuideHero
        kicker="Media cabinet"
        title="20×20×4 furnace filters, compared without trusting one depth"
        dek="A square media cabinet. MERV 8, 11, and 13 — rotating the pad does not fix a wrong depth, and one retailer’s own page does not agree with itself."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>20×20×4</strong> is a nominal size, not a single set of actual dimensions. The
          cut is manufacturer-specific.{" "}
          <a href="https://filterbuy.com/air-filters/20x20x4/">Filterbuy’s product spec on its
          20×20×4 page lists 19.50 × 19.50 × 3.63 inches</a>. The same page also says
          actual dimensions typically measure 19.5 × 19.5 × 3.75 inches.
          Those are not the same depth. That disagreement, on one product URL, is why a nominal
          4-inch label is not a compatibility range. Match all three actual dimensions and the
          cabinet-approved replacement. For the 1-inch square, use the{" "}
          <Link href="/20x20x1-furnace-filters">20×20×1 comparison</Link>. A{" "}
          <Link href="/20x25x4-furnace-filters">20×25×4</Link> is five nominal inches taller and
          will not “almost” seat.
        </p>
        <Callout title="Rotation does not fix depth" tone="warn">
          20×20 turned is still 20×20. A 4-inch pad will not crush into a 1-inch grille, and a
          1-inch pad standing in a 4-inch cabinet wastes the media area. Many ceiling grilles
          cannot take a media cabinet without a different rack. The door, not the square face,
          decides.
        </Callout>

        <h2>Why 4-inch instead of 1-inch on this face</h2>
        <p>
          The face is still a square 20×20. Extra depth is extra media, which is the{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch</Link> reason to run a finer MERV
          here. Read the data-sheet initial resistance and the equipment manual. We will not invent
          a Pascal number for a filter we did not test.
        </p>

        <h2>MERV 8 / 11 / 13 in this cabinet</h2>
        <p>
          ASHRAE 52.2 MERV is a particle-size efficiency scale, not a comfort score and not a
          medical claim. On a 4-inch 20×20 the usual question is how fine you need the dust, and
          whether you will change the pad.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 20x20x4 cabinet</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 20×20×4 cabinet</th>
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

      <AmazonShopExamples face="20x20x4" />

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 20×20×4 products the way a careful shopper already thinks — retail
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
          Square 4-inch pads are easier to miss on a hardware wall that leads with 16×25 and
          20×25 rectangles. You are often buying an MPR number. Treat it as a class label and
          compare all three actual dimensions with the cabinet.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13. A floppy square leaks on all four sides. Confirm the
          actual cut before a multi-pack, including the depth, because 3.63 inches and 3.75 inches
          are both being described as this nominal.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The value of this class is the size matrix, including a square the big-box aisle skips.
          It still will not turn a 1-inch grille into a media cabinet. If the installed rack is
          already deep, use that depth.
        </p>

        <h2>Change intervals</h2>
        <p>
          Four inches loads slower than a 1-inch 20×20. It does not make the filter invisible. A
          printed “6 month” or “12 month” claim is a marketing interval. MERV 8 often 30–90 days
          depending on dust and runtime; MERV 11 often 60–90 days in 4-inch; MERV 13 is not
          set-and-forget. If the blower’s limit is the open question, use{" "}
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
      <RelatedGuides except="/20x20x4-furnace-filters" />
    </article>
  );
}
