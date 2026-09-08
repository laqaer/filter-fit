import Link from "next/link";
import { Logo } from "@/components/logo";
import { guides } from "@/lib/guides";
import { affiliateDisclosure, hvacCaveat, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-rule bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo size="sm" />
            <p className="mt-3 max-w-sm text-sm leading-6 text-ink-soft">{site.tagline}</p>
            <p className="mt-3 text-sm text-ink-soft">
              A {site.publisher} comparison site, published at {site.domain}.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">Guides</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {guides.map((guide) => (
                <li key={guide.href}>
                  <Link className="text-air hover:text-copper-dark" href={guide.href}>
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">Site</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-air hover:text-copper-dark" href="/about">
                  About & editorial standards
                </Link>
              </li>
              <li>
                <Link className="text-air hover:text-copper-dark" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <a className="text-air hover:text-copper-dark" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-rule pt-6 text-sm leading-6 text-ink-soft">
          <p>
            <strong className="text-ink">Affiliate disclosure. </strong>
            {affiliateDisclosure}
          </p>
          <p>
            <strong className="text-ink">HVAC caveat. </strong>
            {hvacCaveat}
          </p>
          <p>© {new Date().getFullYear()} {site.publisher}. FilterFit is an independent directory. We do not sell filters.</p>
        </div>
      </div>
    </footer>
  );
}
