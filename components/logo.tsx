import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md";
};

export function Logo({ size = "md" }: LogoProps) {
  const mark = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const word = size === "sm" ? "text-lg" : "text-xl";

  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span
        className={`relative inline-flex ${mark} items-center justify-center overflow-hidden border border-copper/40 bg-card`}
        aria-hidden
      >
        <span className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#c45c26_0_2px,#fffdf8_2px_6px)] opacity-80" />
        <span className="relative font-serif text-[0.65rem] font-semibold tracking-wide text-ink">
          FF
        </span>
      </span>
      <span className={`font-serif ${word} font-semibold tracking-tight text-ink`}>
        FilterFit
        <span className="block text-[0.65rem] font-sans font-medium uppercase tracking-[0.16em] text-ink-soft group-hover:text-copper-dark">
          Size · Depth · MERV
        </span>
      </span>
    </Link>
  );
}
