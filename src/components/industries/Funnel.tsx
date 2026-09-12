import { cn } from "@/lib/utils";

export function Funnel({ steps }: { steps: { label: string; pct: number; note?: string }[] }) {
  return (
    <ol className="space-y-2.5">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={s.label} className="group">
            <div className="flex items-center gap-4">
              <div className="w-full">
                <div
                  className={cn(
                    "flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium transition-transform duration-300 group-hover:translate-x-1",
                    last ? "bg-black text-cream" : "bg-mist text-ink",
                  )}
                  style={{ width: `${Math.max(s.pct, 22)}%` }}
                >
                  <span className="truncate">{s.label}</span>
                  <span className={cn("ml-3 shrink-0 font-display font-bold tabular-nums", last ? "" : "text-muted")}>{s.pct}%</span>
                </div>
              </div>
            </div>
            {s.note && <p className="mt-1 pl-1 text-xs text-muted">↳ {s.note}</p>}
          </li>
        );
      })}
    </ol>
  );
}
