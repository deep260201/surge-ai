import type { Metadata } from "next";
import { PostCard } from "@/components/blog/PostCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/config/site";
import { posts } from "@/content/blog/posts";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical writing on web, AI automation and growth from the Surge AI team.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} Insights`,
          url: `${site.url}/blog/`,
          blogPost: posts.map((p) => ({ "@type": "BlogPosting", headline: p.title, datePublished: p.date, url: `${site.url}/blog/${p.slug}/` })),
        }}
      />
      <PageHero
        eyebrow="Insights"
        lead="Practical notes on web, AI and"
        accent="growing a business online."
        description="No hot takes. Checklists, methods and lessons from projects we've shipped, written so you can act on them with or without us."
      />

      <section className="container-x pb-20 sm:pb-28">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-line bg-cream p-10 text-center text-muted">First posts coming soon.</div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <PostCard post={featured} featured />
            </Reveal>
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i + 1) * 0.06}>
                <PostCard post={p} />
              </Reveal>
            ))}
            <Reveal delay={0.12} className={rest.length % 3 === 0 ? "lg:col-span-1" : ""}>
              <div className="flex h-full flex-col justify-between rounded-3xl bg-black p-7 text-cream">
                <div>
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">Newsletter</span>
                  <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
                    One useful email <span className="accent-word">a month.</span>
                  </h2>
                </div>
                <div className="mt-8">
                  <NewsletterForm />
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </section>

      <FinalCTA />
    </>
  );
}
