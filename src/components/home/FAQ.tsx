"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { faqs as defaultFaqs, type FAQ as FAQItem } from "@/content/faqs";
import { cn } from "@/lib/utils";

export function FAQ({
  items = defaultFaqs,
  description = "Everything you need to know about working with Surge AI, from timelines and pricing to what happens after launch.",
}: {
  items?: FAQItem[];
  description?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-5xl">
            Questions? <span className="accent-word block">We&apos;ve got answers.</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">{description}</p>
          <p className="mt-6 text-sm">
            Still have a question?{" "}
            <a href="/contact/" className="font-semibold underline underline-offset-4">
              Talk to our team
            </a>
          </p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group -mx-4 flex w-[calc(100%+2rem)] items-center justify-between gap-6 rounded-2xl px-4 py-6 text-left transition-colors hover:bg-paper"
                >
                  <span className="font-display text-lg font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-paper transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-cream",
                      isOpen && "rotate-45 border-black bg-black text-cream",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-base leading-relaxed text-muted">{f.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
