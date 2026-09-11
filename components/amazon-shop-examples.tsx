import { amazonLinkAttrs, amazonSearchUrl } from "@/lib/amazon";

const mervLevels = [8, 11, 13] as const;

type AmazonShopExamplesProps = {
  /** Nominal face + depth, ASCII, e.g. 16x25x1 */
  face: string;
};

export function AmazonShopExamples({ face }: AmazonShopExamplesProps) {
  const faceLabel = face.replaceAll("x", "×");

  return (
    <section className="mt-10 border border-rule bg-card p-5">
      <h2 className="font-serif text-2xl text-ink">Shop examples on Amazon</h2>
      <p className="mt-2 text-sm leading-6 text-ink-soft">
        Affiliate links. As an Amazon Associate I earn from qualifying purchases, at no extra
        cost to you. These are Amazon searches for {faceLabel} at MERV 8, 11, and 13, not a
        ranked list and not products we tested.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
        {mervLevels.map((merv) => (
          <li key={merv}>
            <a
              className="text-air underline underline-offset-3 hover:text-copper-dark"
              href={amazonSearchUrl(`${face} merv ${merv} furnace filter`)}
              {...amazonLinkAttrs}
            >
              MERV {merv} {faceLabel} furnace filters
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
