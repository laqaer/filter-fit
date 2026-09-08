import Link from "next/link";
import { Logo } from "@/components/logo";
import { guides } from "@/lib/guides";

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-soft">
          <Link className="hover:text-copper-dark" href="/#picker">
            Picker
          </Link>
          {guides.slice(0, 3).map((guide) => (
            <Link key={guide.href} className="hover:text-copper-dark" href={guide.href}>
              {guide.kicker}
            </Link>
          ))}
          <Link className="hover:text-copper-dark" href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
