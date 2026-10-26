import Link from "next/link";
import { Logo } from "@/components/logo";
import { guides } from "@/lib/guides";
import { affiliateDisclosure, hvacCaveat, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="ff-footer">
      <div className="ff-wrap ff-footer-grid">
        <div>
          <Logo size="sm" tone="light" />
          <p className="ff-footer-blurb">{site.tagline}</p>
          <p className="ff-footer-blurb">
            A {site.publisher} comparison site, published at {site.domain}.
          </p>
        </div>
        <div>
          <h2>Guides</h2>
          <ul className="ff-footer-links">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href}>{guide.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Site</h2>
          <ul className="ff-footer-links">
            <li>
              <Link href="/about">About & editorial standards</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ff-wrap">
        <div className="ff-legal">
          <p>
            <strong>Affiliate disclosure. </strong>
            {affiliateDisclosure}
          </p>
          <p>
            <strong>HVAC caveat. </strong>
            {hvacCaveat}
          </p>
        </div>
        <p className="ff-colophon">
          © {new Date().getFullYear()} {site.publisher}. FilterFit is an independent directory. We do not sell filters.
        </p>
      </div>
    </footer>
  );
}
