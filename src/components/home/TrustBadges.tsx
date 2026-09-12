import { Star } from "lucide-react";
import { trustPlatforms } from "@/content/home";

export function TrustBadges() {
  const row = [...trustPlatforms, ...trustPlatforms, ...trustPlatforms, ...trustPlatforms];
  return (
    <section className="overflow-hidden border-y border-line bg-cream py-14">
      <div className="container-x text-center">
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.08em]">Trusted by teams that ship</h2>
        <p className="mt-1 text-sm text-muted">Rated 5.0 across the platforms that matter.</p>
      </div>
      <div className="group mt-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-6 py-3 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-black"
            >
              <span className="font-display text-base font-bold tracking-tight">{p}</span>
              <span className="flex items-center gap-1 text-xs font-medium text-muted">
                <Star className="h-3.5 w-3.5 fill-black text-black" />
                5.0
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
