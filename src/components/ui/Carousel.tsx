"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GAP = 20;

export function Carousel({
  children,
  header,
  inverted,
  speed = 40,
  className,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  inverted?: boolean;
  speed?: number;
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const s = useRef({ offset: 0, target: 0, half: 0, paused: false, dragging: false, lastX: 0, moved: 0 });

  useEffect(() => {
    const st = s.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const measure = () => {
      st.half = (group.current?.offsetWidth ?? 0) + GAP;
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (group.current) ro.observe(group.current);

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!st.paused && !st.dragging && !reduced && !document.hidden) st.target += speed * dt;
      st.offset += (st.target - st.offset) * 0.1;
      if (st.half > 0) {
        while (st.offset >= st.half) {
          st.offset -= st.half;
          st.target -= st.half;
        }
        while (st.offset < 0) {
          st.offset += st.half;
          st.target += st.half;
        }
      }
      if (track.current) track.current.style.transform = `translate3d(${-st.offset}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [speed]);

  const nudge = (dir: 1 | -1) => {
    const card = group.current?.querySelector<HTMLElement>("[data-card]");
    s.current.target += dir * ((card?.offsetWidth ?? 320) + GAP);
  };

  const btn = cn(
    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors",
    inverted
      ? "border-line-dark text-cream hover:bg-cream hover:text-black"
      : "border-line text-ink hover:bg-black hover:text-cream hover:border-black",
  );

  return (
    <div className={className}>
      <div className="container-x flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-0 flex-1">{header}</div>
        <div className="flex gap-2">
          <button type="button" aria-label="Previous" className={btn} onClick={() => nudge(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Next" className={btn} onClick={() => nudge(1)}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        className="mt-10 overflow-hidden py-2 [touch-action:pan-y]"
        onMouseEnter={() => (s.current.paused = true)}
        onMouseLeave={() => (s.current.paused = false)}
        onPointerDown={(e) => {
          s.current.dragging = true;
          s.current.lastX = e.clientX;
          s.current.moved = 0;
        }}
        onPointerMove={(e) => {
          const st = s.current;
          if (!st.dragging) return;
          const dx = e.clientX - st.lastX;
          st.lastX = e.clientX;
          st.moved += Math.abs(dx);
          st.target -= dx;
          st.offset -= dx;
        }}
        onPointerUp={() => (s.current.dragging = false)}
        onPointerCancel={() => (s.current.dragging = false)}
        onClickCapture={(e) => {
          if (s.current.moved > 6) e.preventDefault();
        }}
      >
        <div ref={track} className="flex w-max gap-5 will-change-transform">
          <div ref={group} className="flex gap-5">
            {children}
          </div>
          <div className="flex gap-5" aria-hidden="true" inert>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
