export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
};

// Add a post: create src/content/blog/<slug>.mdx and add an entry here (newest first).
// TODO: replace sample posts.
export const posts: Post[] = [
  {
    slug: "replatform-without-losing-seo",
    title: "How to replatform your website without losing SEO",
    excerpt: "Most redesigns lose traffic because nobody owns the migration. Here's the checklist we run on every rebuild.",
    date: "2026-08-20",
    readTime: "6 min",
    tags: ["Web Development", "SEO"],
  },
  {
    slug: "what-to-automate-first",
    title: "What to automate first (and what to leave alone)",
    excerpt: "A simple way to rank the tasks in your business by time saved versus effort to build, before you buy any AI tool.",
    date: "2026-07-30",
    readTime: "5 min",
    tags: ["AI Automation"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
