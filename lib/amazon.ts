export const AMAZON_ASSOCIATE_TAG = "laqaer-20";

export const amazonLinkAttrs = {
  rel: "nofollow sponsored noopener noreferrer",
  target: "_blank",
} as const;

/**
 * Amazon search URL with the Associates tag. Keywords are URL-encoded; no ASINs.
 * `ascsubtag` is Amazon's sub-tracking parameter so a later Associates report can
 * separate picker clicks from a size page. It does not change the search results.
 */
export function amazonSearchUrl(keywords: string, subtag?: string): string {
  const query = new URLSearchParams({
    k: keywords,
    tag: AMAZON_ASSOCIATE_TAG,
  });
  if (subtag) query.set("ascsubtag", subtag);
  return `https://www.amazon.com/s?${query.toString()}`;
}
