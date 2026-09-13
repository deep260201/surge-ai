import type { StaticImageData } from "next/image";
import mark from "@/assets/brand/mark.png";
import wordmark from "@/assets/brand/wordmark.png";
import { cn } from "@/lib/utils";

/**
 * The logo artwork ships as white-on-transparent masks (src/assets/brand), painted with
 * `currentColor` via CSS mask. That keeps the old behaviour: the same component works in ink
 * on light sections and cream on dark ones, and opacity utilities like text-cream/[0.05] still apply.
 */
function Masked({ src, className }: { src: StaticImageData; className?: string }) {
  const mask = `url(${src.src})`;
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        aspectRatio: `${src.width} / ${src.height}`,
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function LogoMark({ className }: { className?: string }) {
  return <Masked src={mark} className={cn("h-8 w-8", className)} />;
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span role="img" aria-label="Surge AI" className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <Masked src={wordmark} className="h-[1.6rem] w-auto" />
    </span>
  );
}
