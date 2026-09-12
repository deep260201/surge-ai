import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { posts } from "@/content/blog/posts";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { work } from "@/content/work";

export const dynamic = "force-static";

type Entry = MetadataRoute.Sitemap[number];

const entry = (path: string, priority: number, changeFrequency: Entry["changeFrequency"], lastModified = new Date()): Entry => ({
  url: `${site.url}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1, "weekly"),
    ...["/services/", "/industries/", "/work/", "/about/", "/contact/", "/blog/"].map((p) => entry(p, 0.8, "monthly")),
    ...services.map((s) => entry(`/services/${s.slug}/`, 0.7, "monthly")),
    ...industries.map((i) => entry(`/industries/${i.slug}/`, 0.7, "monthly")),
    ...work.map((w) => entry(`/work/${w.slug}/`, 0.6, "monthly")),
    ...posts.map((p) => entry(`/blog/${p.slug}/`, 0.6, "monthly", new Date(p.date))),
    entry("/careers/", 0.4, "monthly"),
    entry("/privacy/", 0.2, "yearly"),
    entry("/terms/", 0.2, "yearly"),
  ];
}
