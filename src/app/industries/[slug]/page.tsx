import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Bot, Check, Eye } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FreeAudit } from "@/components/home/FreeAudit";
import { Process } from "@/components/home/Process";
import { TwoDoors } from "@/components/home/TwoDoors";
import { Funnel } from "@/components/industries/Funnel";
import { industryIcons } from "@/components/industries/industryIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { site, whatsappHref } from "@/config/site";
import { getIndustry, industries } from "@/content/industries";
import { work } from "@/content/work";
import { ogPaths, openGraphFor } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return {
    title: `${ind.title} Web Design, Apps & AI`,
    description: ind.description,
    alternates: { canonical: `/industries/${ind.slug}/` },
    openGraph: openGraphFor(ogPaths.industry(ind.slug), `${ind.title} — ${site.name}`),
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const related = work.filter((w) => w.industry === ind.title);
  const relatedWork = (related.length ? related : work).slice(0, 3);
  const others = industries.filter((o) => o.slug !== ind.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: `${ind.title} web design, development and AI automation`,
              description: ind.description,
              provider: { "@type": "Organization", name: site.name, url: site.url },
              audience: { "@type": "Audience", audienceType: ind.title },
              url: `${site.url}/industries/${ind.slug}/`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries/` },
                { "@type": "ListItem", position: 3, name: ind.title, item: `${site.url}/industries/${ind.slug}/` },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: ind.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />

      <PageHero
        crumbs={[
          { label: "Industries", href: "/industries/" },
          { label: ind.title, href: `/industries/${ind.slug}/` },
        ]}
        eyebrow={ind.title}
        lead={ind.headline.lead}
        accent={ind.headline.accent}
        description={ind.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" size="lg" arrow>
            Get a quote
          </Button>
          <Button href={whatsappHref(`Hi Surge AI, I run a ${ind.title.toLowerCase()} business and I'd like to talk.`)} variant="secondary" size="lg" className="bg-white">
            Chat on WhatsApp
          </Button>
        </div>
      </PageHero>

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading eyebrow="The stakes" title="Where businesses like yours" accent="quietly lose money." align="left" />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <div className="rounded-3xl border border-line bg-paper p-7 shadow-card sm:p-9">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">The leaky funnel</span>
                <div className="mt-6">
                  <Funnel steps={ind.funnel} />
                </div>
                <p className="mt-6 text-xs text-muted">Illustrative funnel based on typical sector benchmarks. Your audit shows your real numbers.</p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-1">
              {ind.stakes.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="group flex items-start gap-5 rounded-3xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-card-hover">
                    <span className="shrink-0 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">{s.value}</span>
                    <span>
                      <span className="block font-medium leading-snug">{s.label}</span>
                      <span className="mt-1 block text-sm text-muted">{s.note}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <Button href="/contact/" variant="secondary" arrow className="w-full sm:w-auto">
                  Find my leaks, free
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="What we build"
            title="What customers see, and"
            accent="the AI behind it."
            description="One accountable partner: web, brand and AI teams working on the same build, under one roof."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-line bg-paper p-8 shadow-card sm:p-10">
                <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">
                  <Eye className="h-4 w-4" /> What customers see
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">The front end</h3>
                <ul className="mt-6 space-y-3">
                  {ind.frontend.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl bg-black p-8 text-cream sm:p-10">
                <span className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">
                  <Bot className="h-4 w-4" /> What scales you
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">The AI layer</h3>
                <ul className="mt-6 space-y-3">
                  {ind.ai.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                      <Check className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.5} />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line-dark pt-6">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">Platforms we build on</span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ind.platforms.map((p) => (
                      <span key={p} className="rounded-full border border-line-dark px-3 py-1 text-xs font-medium text-cream/85">
                        {p}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-cream/50">Not sure which fits? That&apos;s the first thing the free audit answers.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <TwoDoors />

      <Section>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Selected work" title={`${ind.title}`} accent="projects." align="left" />
            <Button href="/work/" variant="secondary" arrow>
              See full portfolio
            </Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedWork.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.06}>
                <WorkCard work={w} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading eyebrow="Sector depth" title="Specialists within" accent={ind.title.toLowerCase() + "."} align="left" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ind.subSectors.map((s) => (
              <Link
                key={s}
                href="/contact/"
                className="group flex items-center justify-between rounded-2xl border border-line bg-paper px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-black hover:shadow-card"
              >
                <span className="font-display text-base font-semibold tracking-tight">{s}</span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Process />
      <FreeAudit />
      <FAQ items={ind.faqs} description={`Straight answers for ${ind.title.toLowerCase()} businesses considering a build, rebuild or automation.`} />

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Other industries" title="Choose" accent="your world." align="left" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => {
              const OIcon = industryIcons[o.slug];
              return (
                <Link
                  key={o.slug}
                  href={`/industries/${o.slug}/`}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-paper p-4 transition-all hover:-translate-y-0.5 hover:border-black hover:shadow-card"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                    <OIcon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-tight">{o.title}</span>
                    <span className="block text-xs text-muted">{o.hook}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
