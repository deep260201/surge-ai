import { cn } from "@/lib/utils";

type Props = {
  variant?: "browser" | "phone";
  dark?: boolean;
  label?: string;
  className?: string;
};

// Placeholder device frame — swap for real screenshots via next/image later.
export function Mockup({ variant = "browser", dark, label, className }: Props) {
  const frame = dark ? "border-line-dark bg-black" : "border-line bg-paper";
  const bar = dark ? "bg-cream/15" : "bg-line";
  const soft = dark ? "bg-cream/8" : "bg-mist";
  const text = dark ? "text-cream/80" : "text-ink";

  if (variant === "phone") {
    return (
      <div className={cn("mx-auto w-[11.5rem] rounded-[2.2rem] border p-2.5 shadow-card", frame, className)}>
        <div className={cn("flex aspect-[9/18] flex-col gap-3 rounded-[1.7rem] p-4", soft)}>
          <div className={cn("mx-auto h-1.5 w-14 rounded-full", bar)} />
          <div className={cn("mt-2 font-display text-lg font-bold tracking-tight", text)}>{label}</div>
          <div className={cn("h-2 w-4/5 rounded-full", bar)} />
          <div className={cn("h-2 w-3/5 rounded-full", bar)} />
          <div className={cn("mt-2 h-20 rounded-xl", bar)} />
          <div className="grid grid-cols-2 gap-2">
            <div className={cn("h-14 rounded-xl", bar)} />
            <div className={cn("h-14 rounded-xl", bar)} />
          </div>
          <div className={cn("mt-auto h-9 rounded-full", dark ? "bg-cream" : "bg-black")} />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full rounded-2xl border shadow-card", frame, className)}>
      <div className={cn("flex items-center gap-1.5 border-b px-3 py-2.5", dark ? "border-line-dark" : "border-line")}>
        <span className={cn("h-2 w-2 rounded-full", bar)} />
        <span className={cn("h-2 w-2 rounded-full", bar)} />
        <span className={cn("h-2 w-2 rounded-full", bar)} />
        <span className={cn("ml-3 h-2 flex-1 rounded-full", soft)} />
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className={cn("font-display text-base font-bold tracking-tight", text)}>{label}</div>
          <div className="flex gap-1.5">
            <span className={cn("h-2 w-8 rounded-full", bar)} />
            <span className={cn("h-2 w-8 rounded-full", bar)} />
            <span className={cn("h-2 w-8 rounded-full", bar)} />
          </div>
        </div>
        <div className={cn("mt-5 h-4 w-2/3 rounded-full", bar)} />
        <div className={cn("mt-2 h-2.5 w-1/2 rounded-full", soft)} />
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <div className={cn("h-16 rounded-xl", bar)} />
          <div className={cn("h-16 rounded-xl", soft)} />
          <div className={cn("h-16 rounded-xl", bar)} />
        </div>
      </div>
    </div>
  );
}
