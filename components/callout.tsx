type CalloutProps = {
  title: string;
  tone?: "air" | "warn";
  children: React.ReactNode;
};

export function Callout({ title, tone = "air", children }: CalloutProps) {
  const toneClass = tone === "warn" ? "ff-callout is-warn" : "ff-callout";

  return (
    <aside className={toneClass}>
      <p>{title}</p>
      <div className="mt-1">{children}</div>
    </aside>
  );
}
