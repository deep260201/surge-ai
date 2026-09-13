import type { Metadata } from "next";
import { Bot, Code, Eye, Handshake, Palette, Rocket, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { LogoMark } from "@/components/brand/Logo";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBadges } from "@/components/home/TrustBadges";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Surge AI is a web design, development and AI automation agency. One team across web, brand and AI, built to ship.",
  alternates: { canonical: "/about/" },
};

const words = [
  { word: "Surge", meaning: "Momentum. We move fast, ship every two weeks and never let a project drift." },
  { word: "Innovate", meaning: "AI-first thinking applied to real business problems, not novelty for its own sake." },
  { word: "Transform", meaning: "The outcome that matters: a business that runs faster, sells more and does less by hand." },
];

const values: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Zap, title: "Ship, then improve", detail: "A working build every two weeks beats a perfect plan that never launches." },
  { icon: Handshake, title: "One accountable team", detail: "Web, brand and AI under one roof. No hand-offs, no white-label markup, no finger-pointing." },
  { icon: Bot, title: "AI-first, human-led", detail: "We use AI to build faster and automate more, and people to decide what's worth building." },
  { icon: Eye, title: "Plain language", detail: "Clear scopes, fixed prices and updates you can actually read." },
  { icon: ShieldCheck, title: "You own everything", detail: "Code, designs, accounts and data are yours from day one. No lock-in." },
  { icon: Rocket, title: "Measured by outcomes", detail: "Every project starts with a number we're trying to move, and ends by reporting on it." },
];

const disciplines: { icon: LucideIcon; title: string; detail: string; items: string[] }[] = [
  { icon: Code, title: "Web & product", detail: "Websites, e-commerce, web and mobile apps, custom software.", items: ["Design", "Build", "Replatform", "Scale"] },
  { icon: Palette, title: "Brand & creative", detail: "Identity, rebrands, decks and the creative that follows.", items: ["Identity", "Guidelines", "Decks", "Campaigns"] },
  { icon: Bot, title: "AI & automation", detail: "Workflows, agents, integrations and the roadmap to get there.", items: ["Automate", "Agents", "Integrate", "Advise"] },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Surge AI",
          url: `${site.url}/about/`,
          mainEntity: { "@type": "Organization", name: site.name, url: site.url, slogan: site.tagline },
        }}
      />
      <PageHero
        eyebrow="About Surge AI"
        lead="A small team with a big bias"
        accent="for shipping."
        description="We started Surge AI because too many businesses were paying four vendors to build one thing, slowly. One team across web, brand and AI, moving fast and measured on results."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" size="lg" arrow>
            Work with us
          </Button>
          <Button href="/work/" variant="secondary" size="lg" className="bg-white">
            See our work
          </Button>
        </div>
      </PageHero>

      <section className="container-x pb-20 sm:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black px-6 py-16 text-cream sm:px-16 sm:py-24">
            <LogoMark className="pointer-events-none absolute -right-20 -top-20 h-[30rem] w-[30rem] text-cream/[0.05]" />
            <div className="relative">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">Our tagline, explained</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.035em] sm:text-6xl">
                Surge. Innovate. <span className="accent-word">Transform.</span>
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                {words.map((w, i) => (
                  <div key={w.word} className="border-t border-line-dark pt-6">
                    <span className="text-xs font-semibold tracking-[0.2em] text-cream/50">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{w.word}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">{w.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Section tone="cream">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading eyebrow="Why we exist" title="Great work," accent="fewer vendors." align="left" />
          </Reveal>
          <Reveal delay={0.08} className="space-y-5 text-base leading-relaxed text-ink sm:text-lg">
            <p>
              The typical growing business hires a designer, a developer, a branding studio and, lately, an AI consultant. Each one
              is good at their piece. Nobody owns the whole thing, so the site launches late, the brand drifts, and the automation
              never quite connects.
            </p>
            <p>
              Surge AI is the alternative: a single senior team that designs, builds and automates together, on a fixed scope with a
              fixed price. We lead with web because that&apos;s where most businesses start, and we bring AI to every project because a
              great site deserves a team that isn&apos;t drowning in admin.
            </p>
            <p>
              We&apos;re deliberately small, deliberately picky about the work we take on, and measured on the numbers we agreed at the
              start, not on how the deliverables look in a deck.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="One roof" title="Three disciplines," accent="one accountable team." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-line bg-paper p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-black/40 hover:shadow-card-hover">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                    <d.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.detail}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {d.items.map((it) => (
                      <span key={it} className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] font-medium">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Stats />

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading eyebrow="How we work" title="Six things" accent="we don't compromise on." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-card-hover">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Process />
      <TrustBadges />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
