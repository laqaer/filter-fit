import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { RouteWash } from "@/components/route-wash";
import { ogImage, openGraphImage } from "@/lib/metadata";
import { websiteJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const source = localFont({
  src: [
    { path: "./fonts/source-sans-3-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/source-sans-3-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/source-sans-3-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-source",
  display: "swap",
  adjustFontFallback: false,
});

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/fraunces-latin.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FilterFit — Furnace filters by MERV, size, and depth",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.publisher }],
  alternates: { canonical: "/" },
  openGraph: {
    ...openGraphImage,
    url: site.url,
    title: "FilterFit — Furnace filters by MERV, size, and depth",
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${source.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={websiteJsonLd()} />
        <RouteWash />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
