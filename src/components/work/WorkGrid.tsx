"use client";

import { useState } from "react";
import { WorkCard } from "@/components/work/WorkCard";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

export function WorkGrid({ items }: { items: CaseStudy[] }) {
  const filters = ["All", ...Array.from(new Set(items.flatMap((w) => w.services)))];
  const [active, setActive] = useState("All");
  const visible = active === "All" ? items : items.filter((w) => w.services.includes(active));

  return (
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
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((w) => (
          // Keyed by filter so cards remount and replay the enter transition when the filter changes.
          <div key={`${active}-${w.slug}`} className="anim-fade">
            <WorkCard work={w} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
