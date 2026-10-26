import { PleatPlate } from "@/components/pleat-plate";

type GuideHeroProps = {
  kicker: string;
  title: string;
  dek: string;
};

export function GuideHero({ kicker, title, dek }: GuideHeroProps) {
  return (
    <header className="ff-guide-hero">
      <div>
        <p className="ff-kicker">{kicker}</p>
        <h1 className="ff-display">{title}</h1>
        <div className="ff-sig" aria-hidden />
        <p className="ff-dek">{dek}</p>
      </div>
      <PleatPlate />
    </header>
  );
}
