import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  inverted,
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && <Eyebrow inverted={inverted}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
        {title} {accent && <span className="accent-word">{accent}</span>}
      </h2>
      {description && (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", inverted ? "text-cream/65" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}
