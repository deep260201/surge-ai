import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, inverted }: { children: React.ReactNode; className?: string; inverted?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
        inverted ? "text-cream/70" : "text-muted",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", inverted ? "bg-cream" : "bg-black")} />
      {children}
    </span>
  );
}
