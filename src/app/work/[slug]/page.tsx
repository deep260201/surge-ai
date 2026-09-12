import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Quote } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceIcons } from "@/components/services/serviceIcons";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Mockup } from "@/components/ui/Mockup";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { WorkCard } from "@/components/work/WorkCard";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { getCaseStudy, work } from "@/content/work";
import { ogPaths, openGraphFor } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) return {};
  return {
    title: `${w.client} — ${w.title}`,
    description: w.summary,
    alternates: { canonical: `/work/${w.slug}/` },
    openGraph: openGraphFor(ogPaths.work(w.slug), `${w.client}: ${w.title}`),
  };
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">{label}</dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) notFound();

  const index = work.findIndex((x) => x.slug === w.slug);
  const next = work[(index + 1) % work.length];
  const more = work.filter((x) => x.slug !== w.slug).slice(0, 3);
  const relatedServices = services.filter((s) => w.services.includes(s.short));
  const dark = w.tone === "dark";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              name: w.title,
              about: w.client,
              description: w.summary,
              author: { "@type": "Organization", name: site.name, url: site.url },
              url: `${site.url}/work/${w.slug}/`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/work/` },
                { "@type": "ListItem", position: 3, name: w.client, item: `${site.url}/work/${w.slug}/` },
              ],
            },
          ],
        }}
      />

      <PageHero
        crumbs={[
          { label: "Work", href: "/work/" },
          { label: w.client, href: `/work/${w.slug}/` },
        ]}
        eyebrow={`${w.client} · ${w.industry}`}
        lead={w.title}
        description={w.summary}
      >
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Meta label="Services" value={w.services.join(", ")} />
          <Meta label="Industry" value={w.industry} />
          <Meta label="Timeline" value={w.timeline} />
          <Meta label="Year" value={w.year} />
        </dl>
      </PageHero>

      <section className="container-x">
        <Reveal>
          <div
            className={cn(
              "flex items-end justify-center overflow-hidden rounded-[2.5rem] px-6 pt-10 sm:px-16 sm:pt-16",
              dark ? "bg-black" : "bg-mist",
            )}
          >
            {w.mockup === "phone" ? (
              <div className="flex items-end gap-6 sm:gap-10">
                <Mockup variant="phone" dark={!dark} label={w.client} className="hidden translate-y-10 sm:block" />
                <Mockup variant="phone" dark={dark} label={w.client} className="w-[13rem] translate-y-6" />
                <Mockup variant="phone" dark={!dark} label={w.client} className="hidden translate-y-10 sm:block" />
              </div>
            ) : (
              <Mockup dark={!dark} label={w.client} className="max-w-4xl translate-y-2 rounded-b-none border-b-0" />
            )}
          </div>
        </Reveal>
      </section>

      <section className="border-b border-line">
        <div className="container-x">
          <dl className="grid divide-line sm:grid-cols-3 sm:divide-x">
            {w.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 0.06}>
                <div className="px-2 py-10 text-center sm:py-14">
                  <dd className="font-display text-4xl font-bold tracking-[-0.04em] tabular-nums sm:text-6xl">
                    <CountUp value={r.value} />
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{r.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <div className="container-x space-y-20">
          <Reveal className="grid gap-8 lg:grid-cols-[14rem_1fr]">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">The challenge</span>
            <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{w.challenge}</p>
          </Reveal>

          <Reveal className="grid gap-8 lg:grid-cols-[14rem_1fr]">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">Our approach</span>
            <ol className="max-w-3xl space-y-5">
              {w.approach.map((step, i) => (
                <li key={step} className="flex gap-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black font-display text-xs font-bold text-cream">
                    0{i + 1}
                  </span>
                  <p className="pt-1.5 text-base leading-relaxed sm:text-lg">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="grid gap-8 lg:grid-cols-[14rem_1fr]">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">The solution</span>
            <div className="max-w-3xl">
              <p className="text-base leading-relaxed text-ink sm:text-lg">{w.solution}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {w.stack.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="container-x pb-20 sm:pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="flex items-end justify-center overflow-hidden rounded-3xl bg-cream px-8 pt-10">
              <Mockup label={w.client} className="translate-y-2 rounded-b-none border-b-0" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-end justify-center overflow-hidden rounded-3xl bg-black px-8 pt-10">
              <Mockup variant="phone" dark label={w.client} className="translate-y-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {w.quote && (
        <Section tone="black">
          <div className="container-x">
            <Reveal className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto h-8 w-8 text-cream/40" />
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
                “{w.quote.text}”
              </blockquote>
              <p className="mt-8 text-sm font-semibold">{w.quote.name}</p>
              <p className="text-xs text-cream/60">{w.quote.role}</p>
            </Reveal>
          </div>
        </Section>
      )}

      {relatedServices.length > 0 && (
        <Section tone="cream">
          <div className="container-x">
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">Services used</span>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => {
                const Icon = serviceIcons[s.slug];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-0.5 hover:border-black hover:shadow-card"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-base font-semibold tracking-tight">{s.title}</span>
                      <span className="block text-xs text-muted">{s.tagline}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      )}

      <Section>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">More work</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                Next up: <span className="accent-word">{next.client}</span>
              </h2>
            </div>
            <Button href={`/work/${next.slug}/`} variant="secondary" arrow>
              View {next.client}
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {more.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.06}>
                <WorkCard work={m} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
