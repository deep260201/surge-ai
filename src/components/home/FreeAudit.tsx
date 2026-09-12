import { BadgeCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { auditIncludes, auditSteps } from "@/content/home";

export function FreeAudit() {
  return (
    <Section>
      <div className="container-x">
        <SectionHeading
          eyebrow="Start here"
          title="One free audit."
          accent="Zero obligation."
          description="The fastest way to find out what we'd do for you, and whether we're the right fit. No pitch deck, no pressure."
        />
        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-3xl border border-line shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-card-hover lg:grid-cols-2">
            <div className="bg-paper p-8 sm:p-10">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">What you get</span>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                A specific, prioritised plan, not a sales call in disguise.
              </h3>
              <ul className="mt-7 space-y-1.5">
                {auditIncludes.map((a) => (
                  <li
                    key={a.title}
                    className="group -mx-3 flex items-start gap-3 rounded-xl px-3 py-1.5 text-sm leading-relaxed transition-colors hover:bg-mist"
                  >
                    <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 transition-transform group-hover:scale-110" strokeWidth={2} />
                    <span>
                      <strong className="font-semibold">{a.title}</strong>, {a.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black p-8 text-cream sm:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">How it works</h3>
              <ol className="mt-7 space-y-2">
                {auditSteps.map((s, i) => (
                  <li key={s.title} className="group -mx-3 flex gap-4 rounded-xl px-3 py-2 transition-colors hover:bg-cream/[0.06]">
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream font-display text-xs font-bold text-black transition-transform group-hover:scale-110">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      <span className="block text-sm text-cream/65">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-9">
                <Button href="/contact/" variant="primary-inverted" size="lg" arrow>
                  Get a quote
                </Button>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-cream/55">
                <Lock className="h-3 w-3" />
                No spam. No obligation. Your details stay private.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
