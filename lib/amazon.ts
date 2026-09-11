export const AMAZON_ASSOCIATE_TAG = "laqaer-20";

export const amazonLinkAttrs = {
  rel: "nofollow sponsored noopener noreferrer",
  target: "_blank",
} as const;

/** Amazon search URL with the Associates tag. Keywords are URL-encoded; no ASINs. */
export function amazonSearchUrl(keywords: string): string {
  const query = new URLSearchParams({
    k: keywords,
    tag: AMAZON_ASSOCIATE_TAG,
  });
  return `https://www.amazon.com/s?${query.toString()}`;
}
