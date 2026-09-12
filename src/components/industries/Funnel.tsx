import { cn } from "@/lib/utils";

export function Funnel({ steps }: { steps: { label: string; pct: number; note?: string }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s.label} className="group">
            {/* Label and value sit above the bar so they never get clipped as the bar narrows. */}
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className={cn("font-medium", last && "font-semibold")}>{s.label}</span>
              <span className={cn("shrink-0 font-display font-bold tabular-nums", last ? "text-ink" : "text-muted")}>{s.pct}%</span>
            </div>
            <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-mist">
              <div
                className={cn(
                  "h-full min-w-3 origin-left rounded-full transition-transform duration-500 group-hover:scale-x-[1.03]",
                  last ? "bg-black" : "bg-ink/55",
                )}
                style={{ width: `${s.pct}%` }}
              />
            </div>
            {s.note && <p className="mt-1.5 text-xs text-muted">↳ {s.note}</p>}
          </li>
        );
      })}
    </ol>
  );
}
