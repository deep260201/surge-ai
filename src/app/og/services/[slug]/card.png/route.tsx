import { getService, services } from "@/content/services";
import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function GET(_req: Request, { params }: RouteContext<"/og/services/[slug]/card.png">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return new Response("Not found", { status: 404 });
  return renderOg({ eyebrow: `Services · ${s.title}`, lead: s.headline.lead, accent: s.headline.accent });
}
