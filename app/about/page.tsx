import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ogImage, twitterWithImage } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "About FilterFit";
const description =
  "FilterFit is an independent furnace-filter directory from Laqaer Products. Editorial standards and contact.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    images: [ogImage],
  },
  twitter: {
    ...twitterWithImage,
    title,
    description,
  },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd data={organizationJsonLd()} />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-dark">About</p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
        FilterFit is a directory, not a filter brand
      </h1>
      <div className="prose-fit mt-8">
        <p>
          <strong>FilterFit</strong> helps people match furnace filters by{" "}
          <strong>MERV × nominal size × slot depth</strong> so a MERV 13 box does not silently
          choke a 1-inch rack. We do not manufacture filters. We do not invent star ratings.
        </p>
        <p>
          The site is published by <strong>{site.publisher}</strong>. FilterFit is live at{" "}
          <strong>{site.domain}</strong>. For corrections, measurement edge cases, or OEM
          manual quotes we missed, write{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Editorial standards</h2>
        <ul>
          <li>
            <strong>No fake scores.</strong> Brand classes (Filtrete-style, Aerostar-style,
            Filterbuy-style) describe how products are sold. They are not a 10-point scale.
          </li>
          <li>
            <strong>MERV is ASHRAE 52.2,</strong> not a comfort grade and not a medical claim. House
            scales such as MPR are labeled as house scales.
          </li>
          <li>
            <strong>No invented lab numbers.</strong> We do not publish a pressure-drop Pascal for a
            SKU we did not test. We tell you to read the data sheet and the furnace manual.
          </li>
          <li>
            <strong>Depth before MERV.</strong> A 4-inch MERV 13 is not interchangeable with a
            1-inch MERV 13.
          </li>
          <li>
            <strong>Manufacturer airflow guidance wins.</strong> If the nameplate or IO manual
            limits filter type or external static, follow that.
          </li>
          <li>
            <strong>No other-brand bleed.</strong> This property is FilterFit only — not a dumping
            ground for unrelated Laqaer consumer sites.
          </li>
        </ul>

        <h2>How the site is funded</h2>
        <p>
          FilterFit is built as a useful bookmark. Some outbound retailer links are affiliate
          links. A purchase through those links may earn {site.publisher} a commission. Money
          does not buy a score here; we do not sell numbered ratings. See{" "}
          <Link href="/privacy">privacy</Link> for how a content-and-affiliate site handles data.
        </p>

        <h2>What we are not</h2>
        <p>
          Not an HVAC contractor, not a medical publisher, not a substitute for a static-pressure
          reading. If the coil ices or the limit switch trips after a filter change, stop
          experimenting and call a licensed technician.
        </p>
      </div>
    </article>
  );
}
