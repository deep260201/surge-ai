import { formatDate, getPost, posts } from "@/content/blog/posts";
import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: RouteContext<"/og/blog/[slug]/card.png">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response("Not found", { status: 404 });
  return renderOg({ eyebrow: `Blog · ${formatDate(post.date)}`, lead: post.title });
}
