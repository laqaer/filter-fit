"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function RouteWash() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    const bar = document.querySelector<HTMLElement>("[data-route-wash]");
    if (!bar) return;
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    bar.animate(
      [
        { transform: "scaleX(0)", opacity: 1 },
        { transform: "scaleX(1)", opacity: 1, offset: 0.7 },
        { transform: "scaleX(1)", opacity: 0 },
      ],
      { duration: 560, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
    );
  }, [pathname]);

  return <div data-route-wash className="ff-route-wash" aria-hidden />;
}
