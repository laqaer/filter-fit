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

const title = "16×25×1 furnace filters: MERV 8 vs 11 vs 13";
const description =
  "Compare 16x25x1 furnace filters at MERV 8, 11, and 13. Filtrete-, Aerostar-, and Filterbuy-style brand classes — no fake review scores.";

const faq: readonly FaqEntry[] = [
  {
    question: "What is the actual size of a nominal 16×25×1 filter?",
    answer: [
      "Usually about 15½ × 24½ × ¾ inches. 16×25×1 is a nominal. If a “16×25” pad is truly 16.00 by 25.00, it will buckle or refuse the door. Measure the opening, then confirm the actual dimensions on the carton. The ",
      { href: "/furnace-filter-size-depth-chart", label: "size and depth chart" },
      " lists other faces the same way. A 20×25 rack, a 16×20 rack, and a 14×25 upflow closet are different openings — see the ",
      { href: "/20x25x1-furnace-filters", label: "20×25×1" },
      ", ",
      { href: "/16x20x1-furnace-filters", label: "16×20×1" },
      ", and ",
      { href: "/14x25x1-furnace-filters", label: "14×25×1" },
      " comparisons.",
    ],
  },
  {
    question: "Should a 1-inch 16×25 slot use MERV 11 or MERV 13?",
    answer: [
      "MERV 11 is the usual everyday target on this hardware-store face: better on 1–3 μm household dust, and the default step most 1-inch systems tolerate when the return is healthy. The face area is fixed, so raising MERV on a 1-inch 16×25 raises resistance unless you also add depth. MERV 13 is the highest common 1-inch resistance. It can be fine on a variable-speed air handler with a large return, and it can choke a PSC furnace with a small 1-inch slot. ASHRAE 52.2 MERV 13 requires at least 50% efficiency in the 0.3–1.0 μm band. That is finer household dust, not a HEPA room filter. A loaded MERV 13 is a different product than a clean one. The argument is ",
      { href: "/merv-11-vs-13-1-inch", label: "MERV 11 vs 13 in 1-inch" },
      ".",
    ],
  },
  {
    question: "Can I put a 16×25×4 filter in a 16×25×1 door?",
    answer: [
      "No. If the door says 16×25×1, do not order a 4-inch pad and crush it. If you already have a media cabinet, do not keep stuffing 1-inch pads in the deep slot — use the depth you already paid for. Stay 1-inch when the cabinet is 1-inch and MERV 8 or 11 meets the house. Stop staying 1-inch if you want MERV 13 as a lifestyle, if the pad is always packed at 30 days, or if the installer already noted high static. The cabinet page is the ",
      { href: "/16x25x4-furnace-filters", label: "16×25×4 comparison" },
      ", and depth versus a thin pad is the ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch guide" },
      ".",
    ],
  },
  {
    question: "How often should I change a 16×25×1 filter?",
    answer: [
      "Change it by dust and runtime. This is the size most people buy, and a 1-inch pack loads faster than the 4-inch version of the same face. On this slot, MERV 8 is often 30–90 days, MERV 11 is closer to 30–60 days with pets, and MERV 13 is not set-and-forget. A printed “90-day” claim is a marketing interval. A black 1-inch MERV 8 is already a blower restriction. A floppy 16×25×1 that bows in the rack leaks around the sides, which defeats the MERV you paid for even if you change it on time.",
    ],
  },
  {
    question: "Which way does the arrow on a 16×25×1 point?",
    answer: [
      "Toward the furnace, not the room. A backwards filter still fits. It loads faster and can dump dust into the blower. Retail boxes on this face often print an MPR number instead of MERV. Treat MPR 1000 as the everyday MERV 11-class pad, not a lab conversion. Still unsure whether MERV 13 is appropriate for the blower? Use ",
      { href: "/merv-13-safe-for-furnace", label: "Is MERV 13 safe for your furnace?" },
      ".",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/16x25x1-furnace-filters" },
  openGraph: { ...openGraphImage, title, description, url: "/16x25x1-furnace-filters" },
};

export default function Size16x25Page() {
  return (
    <article className="ff-article">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path: "/16x25x1-furnace-filters",
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <GuideHero
        kicker="Common size"
        title="16×25×1 furnace filters, compared without fake scores"
        dek="The hardware-store default. Same face, three MERV classes, three brand classes — and an actual size that is not 16 by 25."
      />

      <div className="prose-fit mt-10">
        <p>
          <strong>16×25×1</strong> is a nominal. The cardboard you slide into the rack is usually
          about <strong>15½ × 24½ × ¾ inches</strong>. If a “16×25” pad is truly 16.00 by 25.00, it
          will buckle or refuse the door. Measure the opening, then confirm the actual dimensions
          on the carton. The{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> lists other
          faces the same way. If the rack is 20×25, use the{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1 comparison</Link>. If it is 16×20, use
          the <Link href="/16x20x1-furnace-filters">16×20×1 comparison</Link>. If it is 14×25 — a
          common upflow closet face, not this 16-inch rack — use the{" "}
          <Link href="/14x25x1-furnace-filters">14×25×1 comparison</Link>.
        </p>
        <Callout title="Arrow toward the furnace">
          The airflow arrow on a 16×25×1 points at the equipment, not at the room. A backwards
          filter still “fits.” It loads faster and can dump dust into the blower.
        </Callout>

        <h2>MERV 8 / 11 / 13 on this exact face</h2>
        <p>
          The face area is fixed. Raising MERV on a 1-inch 16×25 therefore raises resistance unless
          you also add depth. That is the whole{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in 1-inch</Link> argument, applied to
          the size most people actually buy.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">MERV 8, 11, and 13 behavior in a 16x25x1 slot</caption>
          <thead>
            <tr>
              <th scope="col">MERV</th>
              <th scope="col">What it is for</th>
              <th scope="col">In a 16×25×1 slot</th>
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

      <AmazonShopExamples face="16x25x1" />

      <div className="prose-fit mt-10">
        <h2>Brand classes, not a leaderboard</h2>
        <p>
          FilterFit groups 16×25×1 products the way a careful shopper already thinks — retail
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
          Easy to grab at a hardware store in 16×25×1. You are often buying an MPR number. Treat
          MPR 1000 as the everyday MERV 11-class pad and the higher MPR 1-inch SKUs as the
          pressure-drop experiment. The brand class is convenience and consistent sizing, not a
          secret lab score.
        </p>
        <h3>Value pleated (Aerostar-style)</h3>
        <p>
          Usually printed MERV 8 / 11 / 13, sold in multi-packs online. Useful when you want the
          ASHRAE word on the box. Inspect the frame: a floppy 16×25×1 will bow in the rack and
          leak around the sides, which defeats the MERV you paid for.
        </p>
        <h3>Direct / cut-to-size (Filterbuy-style)</h3>
        <p>
          The same 16×25 face is also sold as 16×25×2, 16×25×4, and 16×25×5. That is the reason
          this class exists. If your door says 16×25×1, do not order a 4-inch pad and crush it.
          If you have a media cabinet, do not keep stuffing 1-inch pads in the deep slot — use the
          depth you already paid for.
        </p>

        <h2>When to stay 16×25×1 — and when to stop</h2>
        <p>
          Stay 1-inch if the cabinet is 1-inch, MERV 8 or 11 meets the house, and you will change
          the pad. Stop staying 1-inch if you want MERV 13 as a lifestyle, if the current pad is
          always packed at 30 days, or if the installer already noted high static. Then the next
          page is{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">upgrading the cabinet</Link>, or the{" "}
          <Link href="/16x25x4-furnace-filters">16×25×4 comparison</Link> if that cabinet is
          already installed — not a thicker marketing claim on the same thin pad.
        </p>
        <p>
          Still unsure whether 13 is legal for the blower? Use{" "}
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
      <RelatedGuides except="/16x25x1-furnace-filters" />
    </article>
  );
}
