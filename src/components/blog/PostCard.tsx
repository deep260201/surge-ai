import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type Post } from "@/content/blog/posts";
import { cn } from "@/lib/utils";

export function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className={cn(
        "group flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover",
        featured ? "border-line-dark bg-black text-cream sm:p-10" : "border-line bg-paper text-ink shadow-card hover:border-black/40",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className={cn(
              "rounded-full border px-2.5 py-1 text-[0.6875rem] font-medium",
              featured ? "border-line-dark text-cream/80" : "border-line text-muted",
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <h2 className={cn("mt-6 font-display font-bold tracking-tight", featured ? "text-3xl sm:text-4xl" : "text-2xl")}>{post.title}</h2>
      <p className={cn("mt-3 text-sm leading-relaxed sm:text-base", featured ? "text-cream/65" : "text-muted")}>{post.excerpt}</p>
      <div className={cn("mt-auto flex items-center justify-between pt-8 text-xs", featured ? "text-cream/60" : "text-muted")}>
        <span>
          {formatDate(post.date)} · {post.readTime} read
        </span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
