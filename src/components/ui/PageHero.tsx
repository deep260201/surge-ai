import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DotField } from "./DotField";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  crumbs,
  lead,
  accent,
  description,
  children,
}: {
  eyebrow?: string;
  crumbs?: { label: string; href: string }[];
  lead: string;
  accent?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_70%)]"
      >
        <DotField />
      </div>
      <div className="container-x relative">
        {crumbs && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-muted">
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
              {crumbs.map((c) => (
                <span key={c.href} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  <Link href={c.href} className="hover:text-ink">
                    {c.label}
                  </Link>
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        {/* The headline is the LCP element: keep it static so it paints with the first frame. */}
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
          {lead} {accent && <span className="accent-word">{accent}</span>}
        </h1>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{description}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15} className="mt-9">
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
