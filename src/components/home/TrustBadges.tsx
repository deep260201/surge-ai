import Image, { type StaticImageData } from "next/image";
import { Star } from "lucide-react";
import clutch from "@/assets/platforms/clutch.svg";
import designrush from "@/assets/platforms/designrush.svg";
import goodfirms from "@/assets/platforms/goodfirms.svg";
import trustpilot from "@/assets/platforms/trustpilot.svg";
import upwork from "@/assets/platforms/upwork.svg";
import { trustPlatforms } from "@/content/home";

// Official marks in their own brand colours; the platforms' guidelines do not allow recolouring.
const logos: Record<string, StaticImageData> = {
  Clutch: clutch,
  DesignRush: designrush,
  GoodFirms: goodfirms,
  Trustpilot: trustpilot,
  Upwork: upwork,
};

export function TrustBadges() {
  const platforms = trustPlatforms.filter((p) => logos[p]);
  const row = [...platforms, ...platforms, ...platforms, ...platforms];
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
              className="flex h-16 items-center gap-4 rounded-2xl border border-line bg-paper px-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-black"
              // The row repeats four times for the loop; only the first copy is read out.
              aria-hidden={i >= platforms.length || undefined}
            >
              {/* Eager: the marquee carries logos past the viewport edge, and lazy ones would pop in mid-scroll. */}
              <Image src={logos[p]} alt={p} loading="eager" className="h-6 w-auto sm:h-7" />
              <span className="flex items-center gap-1 border-l border-line pl-4 text-xs font-medium text-muted">
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
