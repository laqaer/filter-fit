import type { Metadata } from "next";
import Link from "next/link";
import { DecisionTree } from "@/components/decision-tree";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FilterFit — Furnace filters by MERV, size, and depth",
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-dark">
          Independent filter directory
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          Pick a furnace filter by size, slot depth, then MERV
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">
          FilterFit is a comparison hub for homeowners who want MERV 11 or 13 without turning the
          return into a plugged straw. Nominal size tells you the face. Depth tells you how much
          media you actually have. MERV is last — not first.
        </p>
      </section>

      <section id="picker" className="mt-10 scroll-mt-8">
        <DecisionTree />
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <article className="border border-rule bg-card p-5">
          <h2 className="font-serif text-2xl text-ink">MERV is not a safety rating</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            ASHRAE 52.2 MERV describes particle-size efficiency. It does not say your blower can
            push the required CFM through that media in a 1-inch slot. Read{" "}
            <Link className="text-air underline underline-offset-3" href="/merv-13-safe-for-furnace">
              when MERV 13 is safe
            </Link>
            .
          </p>
        </article>
        <article className="border border-rule bg-card p-5">
          <h2 className="font-serif text-2xl text-ink">Depth beats a printed MERV</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            Four inches of MERV 13 usually flows more like a thin MERV 8–11 than like a 1-inch MERV
            13, because there is more media and lower velocity. See{" "}
            <Link className="text-air underline underline-offset-3" href="/1-inch-vs-4-inch-merv-13">
              1-inch vs 4-inch
            </Link>
            .
          </p>
        </article>
        <article className="border border-rule bg-card p-5">
          <h2 className="font-serif text-2xl text-ink">Measure the rack</h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            A “16×25×1” is a nominal. The cardboard is usually closer to 15½ × 24½ × ¾. Use the{" "}
            <Link
              className="text-air underline underline-offset-3"
              href="/furnace-filter-size-depth-chart"
            >
              size and depth chart
            </Link>{" "}
            before you order a six-pack.
          </p>
        </article>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-ink">Guides</h2>
        <p className="mt-2 max-w-2xl text-ink-soft">
          Bookmark the page that matches the decision you are actually making — not a doorway list
          of every size on earth. Size pages such as{" "}
          <Link className="text-air underline underline-offset-3" href="/16x25x1-furnace-filters">
            16×25×1 furnace filters
          </Link>{" "}
          include disclosed Amazon Associates search examples for that face.
        </p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <li key={guide.href} className="border border-rule bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper-dark">
                {guide.kicker}
              </p>
              <Link
                className="mt-1 block font-serif text-2xl text-ink hover:text-copper-dark"
                href={guide.href}
              >
                {guide.title}
              </Link>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{guide.dek}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
