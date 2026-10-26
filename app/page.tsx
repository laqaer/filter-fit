import type { Metadata } from "next";
import Link from "next/link";
import { DecisionTree } from "@/components/decision-tree";
import { FilterAirflow } from "@/components/filter-airflow";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FilterFit — Furnace filters by MERV, size, and depth",
  description: site.description,
  alternates: { canonical: "/" },
};

const notes = [
  {
    title: "MERV is not a safety rating",
    body: (
      <>
        ASHRAE 52.2 MERV describes particle-size efficiency. It does not say your blower can
        push the required CFM through that media in a 1-inch slot. Read{" "}
        <Link className="ff-text-link" href="/merv-13-safe-for-furnace">
          when MERV 13 is safe
        </Link>
        .
      </>
    ),
  },
  {
    title: "Depth beats a printed MERV",
    body: (
      <>
        Four inches of MERV 13 usually flows more like a thin MERV 8–11 than like a 1-inch MERV
        13, because there is more media and lower velocity. See{" "}
        <Link className="ff-text-link" href="/1-inch-vs-4-inch-merv-13">
          1-inch vs 4-inch
        </Link>
        .
      </>
    ),
  },
  {
    title: "Measure the rack",
    body: (
      <>
        A “16×25×1” is a nominal. The cardboard is usually closer to 15½ × 24½ × ¾. Use the{" "}
        <Link className="ff-text-link" href="/furnace-filter-size-depth-chart">
          size and depth chart
        </Link>{" "}
        before you order a six-pack.
      </>
    ),
  },
] as const;

export default function HomePage() {
  return (
    <div>
      <section className="ff-wrap ff-hero">
        <div>
          <p className="ff-kicker">Independent filter directory</p>
          <h1 className="ff-display">Pick a furnace filter by size, slot depth, then MERV</h1>
          <div className="ff-sig" aria-hidden />
          <p className="ff-lede">
            FilterFit is a comparison hub for homeowners who want MERV 11 or 13 without turning the
            return into a plugged straw. Nominal size tells you the face. Depth tells you how much
            media you actually have. MERV is last — not first.
          </p>
        </div>
        <FilterAirflow />
      </section>

      <section id="picker" className="ff-band">
        <div className="ff-wrap">
          <DecisionTree />
        </div>
      </section>

      <div className="ff-wrap ff-home-rest">
        <section className="ff-notes">
          {notes.map((note) => (
            <article key={note.title} className="ff-note">
              <h2 className="ff-card-title">{note.title}</h2>
              <p className="ff-card-copy">{note.body}</p>
            </article>
          ))}
        </section>

        <section className="ff-section-head">
          <h2 className="ff-section-title">Guides</h2>
          <p className="ff-section-copy">
            Bookmark the page that matches the decision you are actually making — not a doorway list
            of every size on earth. Size pages such as{" "}
            <Link className="ff-text-link" href="/16x25x1-furnace-filters">
              16×25×1 furnace filters
            </Link>{" "}
            include disclosed Amazon Associates search examples for that face.
          </p>
          <ul className="ff-guide-grid mt-6">
            {guides.map((guide) => (
              <li key={guide.href} className="ff-guide-card">
                <p className="ff-kicker">{guide.kicker}</p>
                <Link className="ff-card-title-link" href={guide.href}>
                  {guide.title}
                </Link>
                <p className="ff-card-copy">{guide.dek}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
