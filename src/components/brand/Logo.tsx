import { cn } from "@/lib/utils";

// TODO: replace with the real Surge AI logo SVG when supplied.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
      fill="currentColor"
    >
      <defs>
        <mask id="surge-bolt-cut">
          <rect width="100" height="100" fill="white" />
          <polygon
            points="58,18 40,54 51,54 40,84 62,42 51,42"
            fill="black"
          />
        </mask>
      </defs>
      <g mask="url(#surge-bolt-cut)">
        <rect x="22" y="22" width="62" height="28" rx="14" transform="rotate(-34 53 36)" />
        <rect x="16" y="50" width="62" height="28" rx="14" transform="rotate(-34 47 64)" />
      </g>
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="font-display text-[1.05rem] font-bold uppercase tracking-[0.18em]">
        Surge AI
      </span>
    </span>
  );
}
