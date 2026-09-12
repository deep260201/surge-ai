import { getIndustry, industries } from "@/content/industries";
import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function GET(_req: Request, { params }: RouteContext<"/og/industries/[slug]/card.png">) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return new Response("Not found", { status: 404 });
  return renderOg({ eyebrow: `Industries · ${ind.title}`, lead: ind.headline.lead, accent: ind.headline.accent });
}
