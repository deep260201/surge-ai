"use client";

import { useState } from "react";
import { AnimatePresence, LazyMotion, domMax, m } from "framer-motion";
import { WorkCard } from "@/components/work/WorkCard";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

export function WorkGrid({ items }: { items: CaseStudy[] }) {
  const filters = ["All", ...Array.from(new Set(items.flatMap((w) => w.services)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((w) => w.services.includes(active));

  return (
    <LazyMotion features={domMax}>
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by service">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f ? "border-black bg-black text-cream" : "border-line bg-paper text-muted hover:border-black hover:text-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <m.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((w) => (
            <m.div
              key={w.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <WorkCard work={w} className="h-full" />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>
    </div>
    </LazyMotion>
  );
}
