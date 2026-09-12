import { getCaseStudy, work } from "@/content/work";
import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function GET(_req: Request, { params }: RouteContext<"/og/work/[slug]/card.png">) {
  const { slug } = await params;
  const w = getCaseStudy(slug);
  if (!w) return new Response("Not found", { status: 404 });
  return renderOg({ eyebrow: `Case study · ${w.client}`, lead: w.title });
}
