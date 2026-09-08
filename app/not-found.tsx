import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-dark">404</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">That size is not on the rack</h1>
      <p className="mt-4 text-ink-soft">
        The page is missing. The filter picker and the size chart are still on the hub.
      </p>
      <p className="mt-6">
        <Link className="text-air underline underline-offset-3 hover:text-copper-dark" href="/">
          Back to FilterFit
        </Link>
      </p>
    </div>
  );
}
