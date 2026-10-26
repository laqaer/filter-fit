import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md";
  tone?: "ink" | "light";
};

export function Logo({ size = "md", tone = "ink" }: LogoProps) {
  const classes = ["ff-logo", size === "sm" ? "is-sm" : "", tone === "light" ? "is-light" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href="/" className={classes}>
      <svg className="ff-logo-mark" viewBox="0 0 32 32" aria-hidden>
        <rect width="32" height="32" fill={tone === "light" ? "#f4f1ea" : "#1e4d3a"} />
        <path
          d="M7 7.5 L11.2 24.5 L16 7.5 L20.8 24.5 L25 7.5"
          fill="none"
          stroke={tone === "light" ? "#1e4d3a" : "#f4f1ea"}
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className="ff-logo-word">
        FilterFit
        <span className="ff-logo-sub">Size · Depth · MERV</span>
      </span>
    </Link>
  );
}
