import Link from "next/link";
import { Mockup } from "@/components/ui/Mockup";
import type { CaseStudy } from "@/content/work";
import { cn } from "@/lib/utils";

const toneClass = {
  light: "border-line bg-paper text-ink shadow-card",
  mist: "border-line bg-mist text-ink",
  dark: "border-line-dark bg-black text-cream",
};

export function WorkCard({ work: w, className, ...rest }: { work: CaseStudy; className?: string } & Record<string, unknown>) {
  const dark = w.tone === "dark";
  return (
    <Link
      href={`/work/${w.slug}/`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        toneClass[w.tone],
        className,
      )}
      {...rest}
    >
      <div className="p-7 pb-0">
        <div className="font-display text-2xl font-bold tracking-tight">{w.client}</div>
        <p className={cn("mt-3 text-sm leading-relaxed", dark ? "text-cream/65" : "text-muted")}>{w.summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {w.services.map((s) => (
            <span
              key={s}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[0.6875rem] font-medium",
                dark ? "border-line-dark text-cream/80" : "border-line text-muted",
              )}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold tracking-tight">{w.result.value}</span>
          <span className={cn("text-xs", dark ? "text-cream/60" : "text-muted")}>{w.result.label}</span>
        </div>
      </div>
      <div className="mt-6 flex flex-1 items-end px-7">
        <Mockup
          variant={w.mockup}
          dark={!dark}
          label={w.client}
          className={cn(
            "translate-y-4 transition-transform duration-300 group-hover:translate-y-2",
            w.mockup === "browser" && "rounded-b-none border-b-0",
          )}
        />
      </div>
    </Link>
  );
}
