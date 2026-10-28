import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { AmazonGuideExamples } from "@/components/amazon-shop-examples";
import { Callout } from "@/components/callout";
import { GuideHero } from "@/components/guide-hero";
import { JsonLd } from "@/components/json-ld";
import { RelatedGuides } from "@/components/related-guides";
import { openGraphImage } from "@/lib/metadata";
import {
  articleJsonLd,
  faqPageJsonLd,
  howToJsonLd,
  type FaqEntry,
  type HowToStepInput,
} from "@/lib/schema";

const path = "/how-often-to-change-furnace-filter";
const title = "How often to change a furnace filter";
const description =
  "How often to change a 1-inch or 4-inch furnace filter. Pets, dust, and the signs to change early: weak airflow and a loaded face.";

const howToName = "How to change a furnace filter";
const howToDescription =
  "Shut the blower off, read the old filter, seat the new one with the arrow toward the furnace, and check a supply register.";

const steps: readonly HowToStepInput[] = [
  {
    name: "Shut the blower off",
    text: "Set the thermostat to off, or use the switch on the furnace. Do not pull a filter while the blower is running.",
  },
  {
    name: "Read the old filter",
    text: "Note the nominal size printed on the frame, such as 16×25×1, and which way the airflow arrow points.",
  },
  {
    name: "Look through the media",
    text: "Slide the pad out and hold it up to a light. If you cannot see light, or the frame is bowed, it was already due.",
  },
  {
    name: "Seat the new filter arrow-first",
    text: "Point the arrow toward the furnace, not the room. A backwards filter still fits. It loads faster and can dump dust into the blower.",
  },
  {
    name: "Date the frame and check a register",
    text: "Write the install date on the frame, turn the system back on, and feel a supply register. Weaker air than before the swap means the new pad is too tight for that rack, or it is not seated.",
  },
];

const faq: readonly FaqEntry[] = [
  {
    question: "How often should I change a 1-inch furnace filter?",
    answer: [
      "Change it by dust and runtime, not by the sticker. On a 1-inch rack, MERV 8 is often 30–90 days, MERV 11 is closer to 30–60 days with pets, and a 1-inch MERV 13 is often 30–45 days in winter when that pad is reasonable at all. A black 1-inch MERV 8 is already a blower restriction. The thin-slot choice is ",
      { href: "/merv-11-vs-13-1-inch", label: "MERV 11 vs 13 in a 1-inch slot" },
      ", and the common hardware-store face is the ",
      { href: "/16x25x1-furnace-filters", label: "16×25×1 comparison" },
      ".",
    ],
  },
  {
    question: "How often should I change a 4-inch furnace filter?",
    answer: [
      "A 4-inch pack has more media, so it loads slower than the 1-inch version of the same face. MERV 11 in 4 inches is often 60–90 days. MERV 13 in a deep cabinet lasts longer than 1-inch MERV 13 and is still not set-and-forget. A carton that says 6–12 months is a marketing interval. Inspect the face. Depth versus a thin pad is ",
      { href: "/1-inch-vs-4-inch-merv-13", label: "1-inch vs 4-inch MERV 13" },
      ", and a common media cabinet is the ",
      { href: "/16x25x4-furnace-filters", label: "16×25×4 comparison" },
      ".",
    ],
  },
  {
    question: "Do pets, dust, or allergies mean I should change the filter sooner?",
    answer: [
      "Pets and renovation dust load a pad faster, so shorten the interval. A house that runs the blower more hours because someone notices dust loads the filter on runtime too. That is loading, not a medical effect. A higher MERV does not treat allergies or asthma, and it does not raise the blower’s static-pressure limit. If the face is gray at 30 days, the interval is 30 days.",
    ],
  },
  {
    question: "When should I change a furnace filter before the date I wrote down?",
    answer: [
      "Change it when supply air gets weaker, when you cannot see light through the media, when the frame bows or gets sucked into the rack, or when heat short-cycles or the cooling coil ices after a month that started fine. A fresh filter that blows weaker than the dirty one it replaced is a different problem: the new pad is too tight, or it is not seated. The airflow check is ",
      { href: "/merv-13-safe-for-furnace", label: "Is MERV 13 safe for your furnace?" },
      ".",
    ],
  },
  {
    question: "Does a filter labeled 90 days last 90 days?",
    answer: [
      "No. A printed 90-day claim assumes a clean house, modest runtime, and media that still has room. Pets, a 1-inch slot, or a MERV 13 pad can spend that budget in a month. Confirm the face and the depth on the ",
      { href: "/furnace-filter-size-depth-chart", label: "size and depth chart" },
      " before you order the next pack. A 20×25 rack is the ",
      { href: "/20x25x1-furnace-filters", label: "20×25×1 comparison" },
      ". A 16×20 rack is the ",
      { href: "/16x20x1-furnace-filters", label: "16×20×1 comparison" },
      ".",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { ...openGraphImage, title, description, url: path },
};

export default function HowOftenToChangePage() {
  return (
    <article className="ff-article">
      <JsonLd
        data={articleJsonLd({
          headline: title,
          description,
          path,
        })}
      />
      <JsonLd data={faqPageJsonLd(faq)} />
      <JsonLd
        data={howToJsonLd({
          name: howToName,
          description: howToDescription,
          steps,
        })}
      />
      <GuideHero
        kicker="Change interval"
        title="How often to change a furnace filter"
        dek="A 1-inch pad and a 4-inch pad do not share a calendar. Pets, dust, and a face you cannot see through move the date. A printed “90 days” does not."
      />

      <div className="prose-fit mt-10">
        <p>
          Furnace filter and HVAC air filter name the same pad in a residential air handler. The
          ranges below are for that pad. They are not a schedule for a portable room purifier.
        </p>
        <p>
          There is no single day count that fits every house. Depth sets the range. What the house
          puts into the air, and how many hours the blower runs, moves you inside that range.
          Change the filter when the media is loaded, or when the calendar for that depth arrives,
          whichever comes first.
        </p>
        <Callout title="A 90-day sticker is a marketing interval" tone="warn">
          A carton that says 90 days assumes a clean house, modest runtime, and media that still
          has room. Pets, a 1-inch slot, or a MERV 13 pad can spend that budget in a month. If the
          furnace or air-handler manual names a maximum run time or a filter type, that document
          wins.
        </Callout>

        <h2>1-inch filters load faster than 4-inch filters</h2>
        <p>
          A 1-inch rack holds a thin pack. The same face in a 4-inch cabinet holds more media, so
          dust has more area to sit on and the pressure rise is slower. That is why a 4-inch MERV
          13 usually flows better than a 1-inch MERV 13. Read{" "}
          <Link href="/1-inch-vs-4-inch-merv-13">1-inch vs 4-inch MERV 13</Link> before you treat
          the two depths as the same product. Confirm the third number on the{" "}
          <Link href="/furnace-filter-size-depth-chart">size and depth chart</Link> before you buy
          a six-pack for the wrong slot.
        </p>
      </div>

      <div className="table-scroll mt-6">
        <table>
          <caption className="sr-only">
            Furnace filter change ranges by slot depth and MERV
          </caption>
          <thead>
            <tr>
              <th scope="col">Slot</th>
              <th scope="col">Look by</th>
              <th scope="col">What shortens it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-inch MERV 8</td>
              <td>30–90 days</td>
              <td>Pets, long runtime, a face you cannot see light through. A black 1-inch MERV 8 is a blower restriction.</td>
            </tr>
            <tr>
              <td>1-inch MERV 11</td>
              <td>30–60 days with pets</td>
              <td>Pets, dust, and long runtime. A clean house is the long end of this range, not a second calendar.</td>
            </tr>
            <tr>
              <td>1-inch MERV 13</td>
              <td>Often 30–45 days in winter</td>
              <td>Winter runtime, pets, and a loaded face. A thin MERV 13 is not set-and-forget.</td>
            </tr>
            <tr>
              <td>4-inch MERV 11</td>
              <td>Often 60–90 days</td>
              <td>Pets and renovation dust. More media is not a reason to stop looking.</td>
            </tr>
            <tr>
              <td>4-inch MERV 13</td>
              <td>Longer than 1-inch MERV 13 on the same face</td>
              <td>A gray face, pets, or heavy runtime. A 6–12 month carton claim is still a sticker.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose-fit mt-10">
        <p>
          Two inches sits between a thin pad and a media cabinet. Do not stretch the interval just
          because the new pad is thicker than the old 1-inch. Five inches is the same idea as four:
          more media, lower velocity. If the cabinet maker printed an interval, use that. Otherwise
          inspect a 5-inch the way you inspect a 4-inch.
        </p>
        <p>
          The common 1-inch faces are the{" "}
          <Link href="/16x25x1-furnace-filters">16×25×1 comparison</Link>, the{" "}
          <Link href="/20x25x1-furnace-filters">20×25×1 comparison</Link>, and the{" "}
          <Link href="/16x20x1-furnace-filters">16×20×1 comparison</Link>. A 16×25 media cabinet is
          the <Link href="/16x25x4-furnace-filters">16×25×4 comparison</Link>. If the rack cannot
          grow, the rating choice is{" "}
          <Link href="/merv-11-vs-13-1-inch">MERV 11 vs 13 in a 1-inch slot</Link>.
        </p>

        <h2>Pets and dust move the date earlier</h2>
        <p>
          Pets, people, and a remodel add hair, dander, and drywall dust. The blower does not care
          why the pad is gray. A house that leaves the fan on for more hours loads the filter on
          runtime, not on the calendar.
        </p>
        <p>
          Someone in the house may have bought a higher MERV because they notice dust. That
          purchase does not treat allergies, asthma, or any other condition, and it does not raise
          the blower’s static-pressure limit. It does mean you should look at the face sooner. If
          the pad is gray at 30 days, the interval is 30 days.
        </p>

        <h2>Change it early when airflow drops or the face is loaded</h2>
        <ul>
          <li>Supply registers feel weaker than they did with a clean filter, especially on the longest run.</li>
          <li>You cannot see light through the media, or the face is matted gray to black.</li>
          <li>The frame bows, collapses, or gets sucked into the rack.</li>
          <li>Heat short-cycles, or the cooling coil ices, after a month that started fine.</li>
        </ul>
        <p>
          Those signs can also be a closed return, a dirty coil, or a filter that was too tight the
          day you installed it. A loaded MERV 8 does this. A loaded MERV 13 does it sooner. The
          airflow check is{" "}
          <Link href="/merv-13-safe-for-furnace">Is MERV 13 safe for your furnace?</Link>
        </p>
        <p>
          A fresh filter that blows weaker than the dirty one it replaced is a different problem.
          The new pad is too restrictive for that rack, or it is not seated and the door is
          fighting the frame. Do not wait that one out. Step back to MERV 11 in a 1-inch slot, or
          use the depth you already have.
        </p>

        <h2>{howToName}</h2>
        <p>{howToDescription}</p>
        <ol>
          {steps.map((step) => (
            <li key={step.name}>
              <strong>{step.name}.</strong> {step.text}
            </li>
          ))}
        </ol>

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
        note="These are Amazon searches for a 1-inch furnace filter, a 4-inch furnace filter, and a MERV 11 furnace filter, not a ranked list and not products we tested."
        examples={[
          {
            label: "1-inch furnace filters",
            keywords: "1 inch furnace filter",
            subtag: "ff-guide-change-interval-1in",
          },
          {
            label: "4-inch furnace filters",
            keywords: "4 inch furnace filter",
            subtag: "ff-guide-change-interval-4in",
          },
          {
            label: "MERV 11 furnace filters",
            keywords: "merv 11 furnace filter",
            subtag: "ff-guide-change-interval-merv11",
          },
        ]}
      />
      <RelatedGuides except={path} />
    </article>
  );
}
