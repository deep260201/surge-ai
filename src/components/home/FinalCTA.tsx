import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";

export function FinalCTA() {
  return (
    <section className="bg-paper px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="relative mx-auto max-w-[88rem] overflow-hidden rounded-[2.5rem] bg-black px-6 py-24 text-center text-cream sm:py-32">
        <LogoMark className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 text-cream/[0.035]" />
        <div className="relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line-dark px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-cream/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cream" />
              Ready when you are
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-7 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.035em] sm:text-7xl">
              Ready to build <span className="accent-word block">what&apos;s next?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
              Tell us what you&apos;re building and we&apos;ll help turn it into a fast, scalable digital product built for
              real-world growth.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact/" variant="primary-inverted" size="lg" arrow>
              Start Your Project
            </Button>
            <Button href="/work/" variant="secondary-inverted" size="lg">
              View Our Work
            </Button>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-cream/50">
              {services.map((s, i) => (
                <span key={s.slug} className="flex items-center gap-3">
                  {s.short}
                  {i < services.length - 1 && <span aria-hidden="true">·</span>}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
