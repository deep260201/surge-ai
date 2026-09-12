"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function OldSite() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line-dark bg-[#3a3a36] shadow-card">
      <div className="flex items-center gap-1.5 border-b border-line-dark px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-cream/20" />
        <span className="h-2 w-2 rounded-full bg-cream/20" />
        <span className="h-2 w-2 rounded-full bg-cream/20" />
        <span className="ml-3 h-2 flex-1 rounded-full bg-cream/10" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="h-3 w-16 rounded-sm bg-cream/40" />
          <div className="flex gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-2 w-6 rounded-sm bg-cream/25" />
            ))}
          </div>
        </div>
        <div className="mt-1 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className={cn("h-7 rounded-sm", i % 3 === 0 ? "bg-cream/30" : "bg-cream/15")} />
          ))}
        </div>
        <div className="h-2 w-full rounded-sm bg-cream/20" />
        <div className="h-2 w-11/12 rounded-sm bg-cream/20" />
        <div className="h-2 w-full rounded-sm bg-cream/20" />
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          <span className="h-5 rounded-sm bg-cream/40" />
          <span className="h-5 rounded-sm bg-cream/20" />
          <span className="h-5 rounded-sm bg-cream/20" />
        </div>
      </div>
    </div>
  );
}

function NewSite() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-paper shadow-card">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="ml-3 h-2 flex-1 rounded-full bg-mist" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="font-display text-base font-bold tracking-tight">Rebuild</div>
          <div className="flex gap-1.5">
            <span className="h-2 w-8 rounded-full bg-line" />
            <span className="h-2 w-8 rounded-full bg-line" />
            <span className="h-6 w-14 rounded-full bg-black" />
          </div>
        </div>
        <div className="mt-5 h-4 w-2/3 rounded-full bg-line" />
        <div className="mt-2 h-2.5 w-1/2 rounded-full bg-mist" />
        <div className="mt-auto grid grid-cols-3 gap-2.5">
          <div className="h-14 rounded-xl bg-line" />
          <div className="h-14 rounded-xl bg-mist" />
          <div className="h-14 rounded-xl bg-line" />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfter({ className }: { className?: string }) {
  const [pos, setPos] = useState(50);

  return (
    <div className={cn("relative aspect-[16/10] w-full select-none", className)}>
      <div className="absolute inset-0">
        <NewSite />
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <OldSite />
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
