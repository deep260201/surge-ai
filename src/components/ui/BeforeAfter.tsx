"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Shot = { src: StaticImageData; alt: string };

const frame = "absolute inset-0 overflow-hidden rounded-2xl border border-line bg-paper shadow-card";
const sizes = "(min-width: 1024px) 560px, 90vw";

/** Drag-to-compare slider. `before` and `after` should share the same framing so they line up. */
export function BeforeAfter({ before, after, className }: { before: Shot; after: Shot; className?: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className={cn("relative aspect-[16/10] w-full select-none", className)}>
      <div className={frame}>
        <Image src={after.src} alt={after.alt} fill sizes={sizes} className="object-cover object-top" />
      </div>
      <div className={frame} style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes={sizes} className="object-cover object-top" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-black" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-paper shadow-card">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </span>
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-cream">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-paper px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-black shadow-card">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
