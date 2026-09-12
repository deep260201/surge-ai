import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Process } from "@/components/home/Process";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceIcons } from "@/components/services/serviceIcons";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { site, whatsappHref } from "@/config/site";
import { getService, services } from "@/content/services";
import { work } from "@/content/work";
import { ogPaths, openGraphFor } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: openGraphFor(ogPaths.service(s.slug), `${s.title} — ${site.name}`),
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const Icon = serviceIcons[s.slug];
  const related = work.filter((w) => w.services.includes(s.short));
  const relatedWork = (related.length ? related : work).slice(0, 3);
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: s.title,
              description: s.description,
              provider: { "@type": "Organization", name: site.name, url: site.url },
              areaServed: "Worldwide",
              url: `${site.url}/services/${s.slug}/`,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services/` },
                { "@type": "ListItem", position: 3, name: s.title, item: `${site.url}/services/${s.slug}/` },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: s.faqs.map((f) => ({
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
          { label: "Services", href: "/services/" },
          { label: s.title, href: `/services/${s.slug}/` },
        ]}
        eyebrow={s.title}
        lead={s.headline.lead}
        accent={s.headline.accent}
        description={s.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" size="lg" arrow>
            Start Your Project
          </Button>
          <Button href={whatsappHref(`Hi Surge AI, I'd like to talk about ${s.title.toLowerCase()}.`)} variant="secondary" size="lg">
            Chat on WhatsApp
          </Button>
        </div>
      </PageHero>

      <Section tone="cream">
        <div className="container-x">
          <SectionHeading eyebrow="What's included" title="Everything under" accent={s.short.toLowerCase() + "."} align="left" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.subServices.map((sub, i) => (
              <Reveal key={sub.title} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-3xl border border-line bg-paper p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-black/40 hover:shadow-card-hover">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-muted">0{i + 1}</span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{sub.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{sub.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-line bg-paper p-8 shadow-card sm:p-10">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">Who it&apos;s for</span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                You&apos;ll get the most from this if…
              </h2>
              <ul className="mt-7 space-y-3">
                {s.forWho.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-black p-8 text-cream sm:p-10">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">What you get</span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">Outcomes, not just deliverables.</h2>
              <ul className="mt-7 space-y-3">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.5} />
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-line-dark pt-6">
                <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">Tools & platforms</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.platforms.map((p) => (
                    <span key={p} className="rounded-full border border-line-dark px-3 py-1 text-xs font-medium text-cream/85">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Process />

      <Section tone="cream">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Related work" title="Projects in" accent={s.short.toLowerCase() + "."} align="left" />
            <Button href="/work/" variant="secondary" arrow>
              All projects
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

      <FAQ items={s.faqs} description={`Common questions about ${s.title.toLowerCase()} with Surge AI.`} />

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Other services" title="Often paired" accent="with this." align="left" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => {
              const OIcon = serviceIcons[o.slug];
              return (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}/`}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-paper p-4 transition-all hover:-translate-y-0.5 hover:border-black hover:shadow-card"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                    <OIcon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-semibold leading-tight">{o.short}</span>
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
