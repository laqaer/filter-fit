import { amazonLinkAttrs, amazonSearchUrl } from "@/lib/amazon";
import { affiliateDisclosure } from "@/lib/site";

type BestFilterRow = {
  pick: string;
  spec: string;
  who: string;
  subtag: string;
};

export function BestFilterForThis({ rows }: { rows: readonly BestFilterRow[] }) {
  return (
    <section className="ff-associate mt-10">
      <h2 className="font-serif text-2xl text-ink">Best filter for this</h2>
      <div className="table-scroll mt-6">
        <table>
          <thead>
            <tr>
              <th scope="col">Pick</th>
              <th scope="col">MERV / depth</th>
              <th scope="col">Who it&apos;s for</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.subtag}>
                <td className="font-semibold text-ink">{row.pick}</td>
                <td>{row.spec}</td>
                <td>{row.who}</td>
                <td>
                  <a
                    className="text-air underline underline-offset-3"
                    href={amazonSearchUrl(row.pick, row.subtag)}
                    {...amazonLinkAttrs}
                  >
                    {row.pick}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm leading-6 text-ink-soft">
        <strong>Affiliate disclosure. </strong>
        {affiliateDisclosure}
      </p>
    </section>
  );
}
