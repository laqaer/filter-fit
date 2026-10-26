import Link from "next/link";
import { guides } from "@/lib/guides";

type RelatedGuidesProps = {
  except?: string;
};

export function RelatedGuides({ except }: RelatedGuidesProps) {
  const items = guides.filter((guide) => guide.href !== except);

  return (
    <section className="mt-14 border-t border-rule pt-8">
      <h2 className="ff-section-title">Related FilterFit guides</h2>
      <ul className="ff-related-grid mt-4">
        {items.map((guide) => (
          <li key={guide.href} className="ff-related-card">
            <p className="ff-kicker">{guide.kicker}</p>
            <Link className="ff-card-title-link" href={guide.href}>
              {guide.title}
            </Link>
            <p className="ff-card-copy">{guide.dek}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
