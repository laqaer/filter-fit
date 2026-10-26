import Link from "next/link";
import { Logo } from "@/components/logo";
import { guides } from "@/lib/guides";

export function SiteHeader() {
  return (
    <header className="ff-header">
      <div className="ff-wrap ff-header-bar">
        <Logo />
        <nav aria-label="Primary" className="ff-nav">
          <Link href="/#picker">Picker</Link>
          {guides.slice(0, 3).map((guide) => (
            <Link key={guide.href} href={guide.href}>
              {guide.kicker}
            </Link>
          ))}
          <Link href="/about">About</Link>
        </nav>
      </div>
      <div className="ff-pleat" aria-hidden />
    </header>
  );
}
