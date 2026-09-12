import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/config/site";
import { formatDate, getPost, posts } from "@/content/blog/posts";
import { ogPaths, openGraphFor } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      ...openGraphFor(ogPaths.post(post.slug), post.title),
      type: "article",
      publishedTime: post.date,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Body } = await import(`@/content/blog/${slug}.mdx`);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: site.name, url: site.url },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
        }}
      />

      <article>
        <header className="container-x pt-36 sm:pt-44">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
              <Link href="/" className="hover:text-ink">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/blog/" className="hover:text-ink">Insights</Link>
            </nav>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span key={t} className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] font-medium text-muted">{t}</span>
              ))}
            </div>
            <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{post.excerpt}</p>
            <p className="mt-6 text-sm text-muted">
              By the Surge AI team · {formatDate(post.date)} · {post.readTime} read
            </p>
          </Reveal>
        </header>

        <div className="container-x mt-12 border-t border-line pt-4 sm:mt-16">
          <div className="mx-auto max-w-3xl">
            <Body />
          </div>
        </div>
      </article>

      <Section>
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
              More <span className="accent-word">insights.</span>
            </h2>
            <Button href="/blog/" variant="secondary" arrow>All posts</Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
