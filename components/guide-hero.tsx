type GuideHeroProps = {
  kicker: string;
  title: string;
  dek: string;
};

export function GuideHero({ kicker, title, dek }: GuideHeroProps) {
  return (
    <header className="ff-guide-hero">
      <p className="ff-kicker">{kicker}</p>
      <h1 className="ff-display">{title}</h1>
      <p className="ff-dek">{dek}</p>
    </header>
  );
}
