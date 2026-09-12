import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/brand/Logo";

function Skeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-paper p-4 shadow-card">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 py-2">
          <span className="h-7 w-7 shrink-0 rounded-full bg-mist" />
          <span className="h-2.5 flex-1 rounded-full bg-mist" style={{ maxWidth: `${80 - i * 15}%` }} />
          <span className="h-2 w-8 rounded-full bg-line" />
        </div>
      ))}
    </div>
  );
}

function Donut() {
  return (
    <div className="mt-6 flex items-center gap-5 rounded-2xl border border-line bg-paper p-4 shadow-card">
      <div className="relative h-20 w-20 shrink-0 rounded-full" style={{ background: "conic-gradient(var(--color-black) 0 72%, var(--color-mist) 72% 100%)" }}>
        <div className="absolute inset-3 flex items-center justify-center rounded-full bg-paper font-display text-sm font-bold">72%</div>
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="h-2.5 w-full rounded-full bg-black" />
        <div className="h-2.5 w-4/5 rounded-full bg-line" />
        <div className="h-2.5 w-3/5 rounded-full bg-mist" />
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="mt-6 flex items-center gap-2 rounded-2xl border border-line bg-paper p-4 shadow-card">
      {["Month 1", "Month 2", "Month 3"].map((m, i) => (
        <div key={m} className="flex flex-1 items-center gap-2">
          <span className="rounded-full border border-line px-2.5 py-1 text-[0.625rem] font-medium">{m}</span>
          {i < 2 && <span className="h-px flex-1 bg-line" />}
        </div>
      ))}
    </div>
  );
}

const card =
  "group h-full rounded-3xl border border-line bg-paper/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/40 hover:bg-paper hover:shadow-card-hover";

export function Bento() {
  return (
    <Section tone="cream">
      <div className="container-x">
        <SectionHeading eyebrow="Why Surge AI" title="How we help you" accent="grow & scale" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className={card}>
              <h3 className="font-display text-xl font-semibold leading-snug">
                A <strong>senior, in-house team</strong> built around your vision, not a rotating bench.
              </h3>
              <Skeleton />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className={card}>
              <h3 className="font-display text-xl font-semibold leading-snug">
                <strong>Transparent, fixed pricing</strong> with no hidden fees or surprises along the way.
              </h3>
              <Donut />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={card}>
              <h3 className="font-display text-xl font-semibold leading-snug">
                <strong>AI and automation built in</strong> from day one, so your product works harder than your team.
              </h3>
              <Skeleton rows={2} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className={card}>
              <h3 className="font-display text-xl font-semibold leading-snug">
                <strong>End-to-end delivery</strong>: brand, design, build, launch and marketing under one roof.
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Brand", "Design", "Build", "Launch", "Grow"].map((t, i) => (
                  <span
                    key={t}
                    className="rounded-full bg-black px-3 py-1.5 text-xs font-medium text-cream transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-black p-7 text-center text-cream transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
              <LogoMark className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 text-cream/[0.06] transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-cream/[0.12]" />
              <span className="rounded-full border border-line-dark px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/70">
                Start here
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                Get a <span className="accent-word">free audit</span> of your site or workflow
              </h3>
              <p className="mt-2 text-sm text-cream/65">Specific findings and a roadmap, yours to keep.</p>
              <div className="mt-6">
                <Button href="/contact/" variant="primary-inverted" arrow>
                  Request an audit
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className={card}>
              <h3 className="font-display text-xl font-semibold leading-snug">
                A <strong>long-term product partnership</strong> built to support your growth over time.
              </h3>
              <Timeline />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
