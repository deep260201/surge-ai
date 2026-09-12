import type { Metadata } from "next";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Process } from "@/components/home/Process";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";
import { perks, roles } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a small, senior team building websites, apps and AI automation for ambitious businesses.",
  alternates: { canonical: "/careers/" },
};

const apply = (role: string) => `mailto:${site.email}?subject=${encodeURIComponent(`Application: ${role}`)}`;

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        lead="Do the best work of your career,"
        accent="without the agency chaos."
        description="We're a small, senior, remote team. Fixed scopes, clear ownership and clients we actually like. If that sounds like you, we'd like to hear from you."
      >
        <Button href="#roles" size="lg" arrow>See open roles</Button>
      </PageHero>

      <Section tone="cream" id="roles" className="scroll-mt-20">
        <div className="container-x">
          <SectionHeading eyebrow="Open roles" title="Who we're" accent="looking for." align="left" />
          <div className="mt-10 space-y-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="group flex flex-col gap-6 rounded-3xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-card-hover md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{r.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{r.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted">
                      <span className="rounded-full border border-line px-2.5 py-1">{r.type}</span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-line px-2.5 py-1">
                        <MapPin className="h-3 w-3" /> {r.location}
                      </span>
                    </div>
                  </div>
                  <Button href={apply(r.title)} variant="secondary" arrow className="shrink-0">Apply</Button>
                </div>
              </Reveal>
            ))}
            <Reveal delay={roles.length * 0.06}>
              <div className="flex flex-col gap-6 rounded-3xl bg-black p-7 text-cream md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    Nothing that fits? <span className="accent-word">Write anyway.</span>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/65">
                    We hire for people, not job descriptions. Send a few lines about what you do best and a link to something you&apos;ve shipped.
                  </p>
                </div>
                <Button href={apply("Speculative application")} variant="primary-inverted" className="shrink-0">
                  Send an intro <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading eyebrow="How it feels" title="Small team," accent="serious work." align="left" description="No timesheets theatre, no ten-vendor hand-offs. You own a project from scope to launch, with the tools and the time to do it properly." />
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-sm font-medium">
                  <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Process />
    </>
  );
}
