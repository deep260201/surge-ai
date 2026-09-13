"use client";

import { useEffect, useRef, useState } from "react";

// Start counting once the number has scrolled up past this fraction of the viewport height,
// so it runs while the visitor is looking at it, not while it is only peeking in at the bottom edge.
const TRIGGER_LINE = 0.7;
const DURATION_MS = 1600;

export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const suffix = match?.[3] ?? value;
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let anim = 0;
    let pending = 0;

    const run = () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const duration = reduced ? 0 : DURATION_MS;
      const start = performance.now();
      const step = (now: number) => {
        const p = duration ? Math.min(1, (now - start) / duration) : 1;
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    };

    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const check = () => {
      pending = 0;
      const top = el.getBoundingClientRect().top;
      // A number near the very end of a page may never reach the trigger line,
      // so also start once the page is scrolled to the bottom and the number is on screen.
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (top < window.innerHeight * TRIGGER_LINE || (atEnd && top < window.innerHeight)) {
        detach();
        run();
      }
    };

    function onScroll() {
      if (!pending) pending = requestAnimationFrame(check);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Covers tall screens where the number is already in reading position on load.
    pending = requestAnimationFrame(check);

    return () => {
      detach();
      cancelAnimationFrame(pending);
      cancelAnimationFrame(anim);
    };
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
