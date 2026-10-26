import Link from "next/link";

export default function NotFound() {
  return (
    <div className="ff-article ff-narrow">
      <p className="ff-kicker">404</p>
      <h1 className="ff-display">That size is not on the rack</h1>
      <p className="ff-lede">
        The page is missing. The filter picker and the size chart are still on the hub.
      </p>
      <p className="mt-6">
        <Link className="ff-text-link" href="/">
          Back to FilterFit
        </Link>
      </p>
    </div>
  );
}
