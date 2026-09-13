import Image from "next/image";
import { Check, RefreshCw, Rocket } from "lucide-react";
import newBuild from "@/assets/two-doors/new-build.webp";
import rebuildAfter from "@/assets/two-doors/rebuild-after.webp";
import rebuildBefore from "@/assets/two-doors/rebuild-before.webp";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const doors = [
  {
    icon: Rocket,
    eyebrow: "Start from zero",
    title: "Build something new",
    description:
      "You're launching a brand, a store, a product or an internal tool. You want it done right the first time, without juggling four vendors.",
    points: ["Naming, identity & brand system", "Site or app designed and built to convert", "Automation baked in from day one"],
    cta: "Plan a new build",
    dark: true,
  },
  {
    icon: RefreshCw,
    eyebrow: "Improve what exists",
    title: "Rebuild what you've outgrown",
    description:
      "It worked once. Now it's slow, off-brand, hard to update or quietly leaking conversions. We redesign, replatform and re-automate without losing what's working.",
    points: ["Redesign & replatform with no SEO loss", "Rebrand that protects existing equity", "Re-automate brittle, manual processes"],
    cta: "Start a rebuild",
    dark: false,
  },
];

export function TwoDoors() {
  return (
    <Section tone="cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Two equal doors"
          title="Whichever door you walk in,"
          accent="you're in the right place."
          description="Roughly half of what we do is building from zero. The other half is rebuilding what companies have outgrown. We're genuinely expert at both."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {doors.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-card">
                <div className={d.dark ? "bg-black p-8" : "bg-mist p-8"}>
                  {d.dark ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={newBuild}
                        alt="Exact Sports soccer camp website shown on a laptop"
                        fill
                        sizes="(min-width: 1024px) 560px, 90vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <BeforeAfter
                      before={{ src: rebuildBefore, alt: "Rawspicebar website before the redesign: a plain white page with small photos" }}
                      after={{ src: rebuildAfter, alt: "Rawspicebar website after the redesign: a bold orange hero with product photography" }}
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    <d.icon className="h-3.5 w-3.5" />
                    {d.eyebrow}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d.description}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/contact/" variant="secondary" arrow>
                      {d.cta}
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
