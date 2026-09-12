import type { Metadata } from "next";
import { site } from "@/config/site";

export const OG_SIZE = { width: 1200, height: 630 } as const;

/**
 * Full openGraph block for a page. Next replaces (not merges) nested `openGraph`
 * objects across layout/page, so every page that sets one must pass the full set.
 */
export function openGraphFor(imagePath: string, alt: string): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: imagePath, ...OG_SIZE, alt }],
  };
}

export const ogPaths = {
  site: "/og/site.png",
  service: (slug: string) => `/og/services/${slug}/card.png`,
  industry: (slug: string) => `/og/industries/${slug}/card.png`,
  work: (slug: string) => `/og/work/${slug}/card.png`,
  post: (slug: string) => `/og/blog/${slug}/card.png`,
} as const;
