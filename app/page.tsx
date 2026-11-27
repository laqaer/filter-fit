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
        <p className="ff-kicker">Independent filter directory</p>
        <h1 className="ff-display">Pick a furnace filter by size, slot depth, then MERV</h1>
        <p className="ff-lede">
          FilterFit is a comparison hub for homeowners who want MERV 11 or 13 without turning the
          return into a plugged straw. Nominal size tells you the face. Depth tells you how much
          media you actually have. MERV is last — not first.
        </p>
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

        <section className="ff-section-head" aria-labelledby="comparison-chart">
          <h2 id="comparison-chart" className="ff-section-title">
            Furnace filter comparison chart
          </h2>
          <div className="prose-fit mt-6">
            <p>
              The capture column lists ASHRAE 52.2 minimums for E1, E2, and E3. A filter can test
              above its minimum. FilterFit did not test the filters in this chart.
            </p>
            <h3>MERV 8, MERV 11, and MERV 13</h3>
          </div>
          <div className="table-scroll mt-6">
            <table>
              <caption className="sr-only">
                MERV 8, MERV 11, and MERV 13 compared by particle capture, typical use, and airflow
              </caption>
              <thead>
                <tr>
                  <th scope="col">Rating</th>
                  <th scope="col">What it captures</th>
                  <th scope="col">Typical use</th>
                  <th scope="col">Airflow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-ink">MERV 8</td>
                  <td>
                    No minimum on E1 (0.3 to 1.0 μm). At least 20% on E2 (1.0 to 3.0 μm) and 70% on
                    E3 (3.0 to 10.0 μm). Lint, dust, and pollen-scale particles.
                  </td>
                  <td>Low-resistance everyday filter in a 1-inch slot. It protects the blower from lint.</td>
                  <td>
                    Usually the lowest initial resistance of these three in a 1-inch slot. A loaded
                    filter is still a restriction.
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">MERV 11</td>
                  <td>
                    At least 20% on E1 (0.3 to 1.0 μm), 65% on E2 (1.0 to 3.0 μm), and 85% on E3
                    (3.0 to 10.0 μm).
                  </td>
                  <td>The usual everyday target for a 1-inch rack when the return is healthy.</td>
                  <td>
                    Tighter than MERV 8. A dirty MERV 11 can restrict more than a clean MERV 13.
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">MERV 13</td>
                  <td>
                    At least 50% on E1 (0.3 to 1.0 μm), 85% on E2 (1.0 to 3.0 μm), and 90% on E3
                    (3.0 to 10.0 μm). Finer household particles. It is not a HEPA room filter.
                  </td>
                  <td>
                    The rating to run in a 4-inch cabinet. A 1-inch MERV 13 is the tightest common
                    combination.
                  </td>
                  <td>
                    Highest common resistance in a 1-inch slot. It can be fine on a variable-speed
                    air handler with a large return. It can choke a PSC furnace with a small slot.
                    A 4-inch MERV 13 has more media and lower velocity.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="prose-fit">
            <h3>1-inch and 4-inch depth</h3>
          </div>
          <div className="table-scroll mt-6">
            <table>
              <caption className="sr-only">
                1-inch and 4-inch furnace filter depth compared by replacement interval, airflow, and
                fit
              </caption>
              <thead>
                <tr>
                  <th scope="col">Depth</th>
                  <th scope="col">Replacement interval</th>
                  <th scope="col">Airflow</th>
                  <th scope="col">Fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-ink">1 inch</td>
                  <td>
                    MERV 8 is often 30 to 90 days. MERV 11 is closer to 30 to 60 days with pets.
                    MERV 13 is often 30 to 45 days in winter. Change the filter when the media loads,
                    or when that range arrives.
                  </td>
                  <td>Least media, and the highest face velocity at a given MERV.</td>
                  <td>
                    A retail slide-in. The nominal 1-inch filter is often about ¾ inch thick. Do not
                    force a 4-inch filter into this slot.
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">4 inch</td>
                  <td>
                    Longer than the same face in 1 inch. MERV 11 is often 60 to 90 days. A 4-inch
                    MERV 13 still needs a look. A 6-month or 12-month carton claim is a sticker.
                  </td>
                  <td>
                    More media and lower velocity. A 4-inch MERV 13 often flows closer to a 1-inch
                    MERV 8 or MERV 11 than to a 1-inch MERV 13.
                  </td>
                  <td>
                    A media cabinet. Match the actual depth. Do not leave a 1-inch filter in the deep
                    slot.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
