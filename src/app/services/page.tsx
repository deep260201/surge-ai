import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FreeAudit } from "@/components/home/FreeAudit";
import { Process } from "@/components/home/Process";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceIcons } from "@/components/services/serviceIcons";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design and development, AI bots and automation, app development, custom software, branding and marketing. One team, end to end.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `${site.url}/services/${s.slug}/`,
          })),
        }}
      />
      <PageHero
        eyebrow="Services"
        lead="Everything you need to launch, grow and"
        accent="automate, under one roof."
        description="Web comes first: it's where most of our clients start. AI automation comes next, because a great site deserves a team that isn't drowning in admin. Everything else supports those two."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" size="lg" arrow>
            Start Your Project
          </Button>
          <Button href="/work/" variant="secondary" size="lg">
            See our work
          </Button>
        </div>
      </PageHero>

      <section className="container-x pb-20 sm:pb-28">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            const dark = i === 0;
            return (
              <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                <Link
                  href={`/services/${s.slug}/`}
                  className={cn(
                    "group flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover sm:p-10",
                    dark ? "border-line-dark bg-black text-cream" : "border-line bg-paper text-ink shadow-card hover:border-black/40",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "inline-flex h-14 w-14 items-center justify-center rounded-2xl",
                        dark ? "bg-cream/10" : "bg-mist",
                      )}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <span
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all group-hover:bg-cream group-hover:text-black",
                        dark ? "border-line-dark" : "border-line group-hover:bg-black group-hover:text-cream",
                      )}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  {i === 0 && (
                    <span className="mt-6 inline-flex w-fit rounded-full border border-line-dark px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-cream/80">
                      Flagship service
                    </span>
                  )}
                  <h2 className={cn("font-display text-2xl font-bold tracking-tight sm:text-3xl", i === 0 ? "mt-4" : "mt-8")}>{s.title}</h2>
                  <p className={cn("mt-2 text-base leading-relaxed", dark ? "text-cream/65" : "text-muted")}>{s.tagline}</p>
                  <ul className={cn("mt-6 grid gap-2 border-t pt-6 text-sm sm:grid-cols-2", dark ? "border-line-dark" : "border-line")}>
                    {s.subServices.map((sub) => (
                      <li key={sub.title} className="flex items-center gap-2">
                        <span className={cn("h-1 w-1 shrink-0 rounded-full", dark ? "bg-cream/60" : "bg-black")} />
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Process />
      <FreeAudit />
      <FinalCTA />
    </>
  );
}
