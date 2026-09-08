import { site } from "@/lib/site";

/** Default social image. Absolute so crawlers resolve https://filterfitguide.com/og.png. */
export const ogImage = {
  url: `${site.url}/og.png`,
  width: 1200,
  height: 630,
  alt: "FilterFit — furnace filters by MERV, size, and depth",
} as const;

/**
 * Shared Open Graph fields that every `openGraph` object must include.
 * Next.js shallow-replaces the entire parent `openGraph` when a child sets one.
 */
export const openGraphImage = {
  type: "website" as const,
  locale: site.locale,
  siteName: site.name,
  images: [ogImage],
};

export const twitterWithImage = {
  card: "summary_large_image" as const,
  images: [ogImage.url],
};
