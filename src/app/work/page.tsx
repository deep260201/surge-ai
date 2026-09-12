import type { Metadata } from "next";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { WorkGrid } from "@/components/work/WorkGrid";
import { site } from "@/config/site";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites, apps, automations and brands we've shipped, with the results they produced.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: work.map((w, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: w.title,
            url: `${site.url}/work/${w.slug}/`,
          })),
        }}
      />
      <PageHero
        eyebrow="Our work"
        lead="Projects that shipped,"
        accent="and the numbers they moved."
        description="A selection of websites, apps, automations and brands. Every one is measured against the goal we agreed at the start, not just how it looks."
      >
        <Button href="/contact/" size="lg" arrow>
          Start Your Project
        </Button>
      </PageHero>

      <section className="container-x pb-20 sm:pb-28">
        <Reveal>
          <WorkGrid items={work} />
        </Reveal>
      </section>

      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
