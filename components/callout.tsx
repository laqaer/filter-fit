type CalloutProps = {
  title: string;
  tone?: "air" | "warn";
  children: React.ReactNode;
};

export function Callout({ title, tone = "air", children }: CalloutProps) {
  const styles =
    tone === "warn"
      ? "border-copper bg-warn-soft text-warn"
      : "border-air bg-air-soft text-ink-soft";

  return (
    <aside className={`border-l-4 px-4 py-3 text-sm leading-6 ${styles}`}>
      <p className="font-semibold text-ink">{title}</p>
      <div className="mt-1">{children}</div>
    </aside>
  );
}
