import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Process } from "@/components/home/Process";
import { TwoDoors } from "@/components/home/TwoDoors";
import { industryIcons } from "@/components/industries/industryIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/config/site";
import { industries, industryFaqs } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Web, app, AI and brand work built for the specific way your industry wins or loses online.",
  alternates: { canonical: "/industries/" },
};

const comparison = [
  { row: "Copy", generic: "Talks about you", fluent: "Talks about the customer's problem" },
  { row: "Structure", generic: "Same template for everyone", fluent: "Built around how buyers in your sector decide" },
  { row: "Trust", generic: "Stock photos, vague claims", fluent: "Sector proof, compliance and real results" },
  { row: "Automation", generic: "A contact form", fluent: "Intake, booking and follow-up on autopilot" },
  { row: "Conversion", generic: "~2–5%", fluent: "Up to 13%" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: industries.map((i, n) => ({
            "@type": "ListItem",
            position: n + 1,
            name: i.title,
            url: `${site.url}/industries/${i.slug}/`,
          })),
        }}
      />
      <PageHero
        eyebrow="Industries · who we build for"
        lead="Most agencies serve industries. We build for"
        accent="the specific way yours wins or loses online."
        description="Every sector has its own conversion levers, compliance rules and customer habits. Pick your world and see exactly what we'd build, and why."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" size="lg" arrow>
            Get a free audit
          </Button>
          <Button href="/work/" variant="secondary" size="lg">
            See our work
          </Button>
        </div>
      </PageHero>

      <section className="container-x pb-20 sm:pb-28">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = industryIcons[ind.slug];
            return (
              <Reveal key={ind.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/industries/${ind.slug}/`}
                  className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-black/40 hover:shadow-card-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h2 className="mt-8 font-display text-2xl font-bold tracking-tight">{ind.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{ind.hook}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                    {ind.subSectors.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] font-medium text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 text-sm font-semibold">Build new or rebuild → Explore</span>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={0.12}>
            <Link
              href="/contact/"
              className="flex h-full flex-col justify-between rounded-3xl bg-black p-7 text-cream transition-transform hover:-translate-y-1.5"
            >
              <span className="font-display text-5xl font-bold tracking-[-0.04em]">?</span>
              <span>
                <span className="block font-display text-2xl font-bold tracking-tight">Don&apos;t see yours?</span>
                <span className="mt-2 block text-sm text-cream/65">Tell us about your market. We adapt fast and we&apos;ll show you how before you commit.</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Talk to us <ArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why industry-specific"
            title="Generic template vs"
            accent="industry-fluent."
            description="Around 90% of B2B buyers check multiple vendor sites before making contact. The one that speaks their language wins the shortlist."
          />
          <Reveal className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper shadow-card">
            <div className="grid grid-cols-[7rem_1fr_1fr] sm:grid-cols-[10rem_1fr_1fr]">
              <div className="border-b border-line p-4 sm:p-5" />
              <div className="border-b border-l border-line p-4 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted sm:p-5">
                Generic template
              </div>
              <div className="border-b border-l border-line bg-black p-4 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-cream sm:p-5">
                Industry-fluent
              </div>
              {comparison.map((c) => (
                <div key={c.row} className="contents">
                  <div className="border-b border-line p-4 text-sm font-semibold last:border-b-0 sm:p-5">{c.row}</div>
                  <div className="flex items-start gap-2 border-b border-l border-line p-4 text-sm text-muted sm:p-5">
                    <X className="mt-0.5 h-4 w-4 shrink-0" />
                    {c.generic}
                  </div>
                  <div className="flex items-start gap-2 border-b border-l border-line bg-black p-4 text-sm text-cream sm:p-5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                    {c.fluent}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <TwoDoors />
      <Process />
      <FAQ items={industryFaqs} description="Straight answers, by industry: how we work, who's on your project and how to start." />
      <FinalCTA />
    </>
  );
}
