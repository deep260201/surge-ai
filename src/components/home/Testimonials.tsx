import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, type Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/utils";

function Stars({ dark }: { dark?: boolean }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn("h-3.5 w-3.5", dark ? "fill-cream text-cream" : "fill-black text-black")} />
      ))}
    </span>
  );
}

function Card({ t }: { t: Testimonial }) {
  if (t.type === "quote") {
    const dark = t.tone === "dark";
    return (
      <figure
        className={cn(
          "flex h-full w-[20rem] shrink-0 flex-col rounded-3xl border p-6 sm:w-[24rem]",
          dark ? "border-line-dark bg-black text-cream" : "border-line bg-paper text-ink shadow-card",
        )}
      >
        <blockquote className="font-display text-base font-medium leading-snug tracking-tight sm:text-lg">“{t.quote}”</blockquote>
        <figcaption className="mt-auto flex items-center gap-3 pt-6">
          <span
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold",
              dark ? "bg-cream text-black" : "bg-black text-cream",
            )}
          >
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold">{t.name}</span>
            <span className={cn("block truncate text-xs", dark ? "text-cream/60" : "text-muted")}>
              {t.role}, {t.company}
            </span>
          </span>
          <span className="ml-auto shrink-0">
            <Stars dark={dark} />
          </span>
        </figcaption>
      </figure>
    );
  }
  if (t.type === "logo") {
    return (
      <div className="flex h-full w-[18rem] shrink-0 flex-col rounded-3xl border border-line bg-mist p-6">
        <span className="inline-block self-start rounded-full border border-line bg-paper px-3 py-1 font-display text-sm font-bold tracking-tight">
          {t.company}
        </span>
        <p className="mt-5 text-base leading-relaxed">{t.quote}</p>
      </div>
    );
  }
  return (
    <div className="flex h-full w-[16rem] shrink-0 flex-col rounded-3xl bg-black p-6 text-cream">
      <div className="font-display text-5xl font-bold tracking-[-0.04em]">{t.value}</div>
      <p className="mt-2 text-sm text-cream/65">{t.label}</p>
      <p className="mt-auto pt-5 text-xs font-medium uppercase tracking-[0.14em] text-cream/50">{t.company}</p>
    </div>
  );
}

function Row({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="group overflow-hidden">
      <div
        className={cn(
          "flex w-max items-stretch gap-5 pr-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none",
          reverse ? "animate-marquee-reverse" : "animate-marquee-slow",
        )}
      >
        {doubled.map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const third = Math.ceil(testimonials.length / 3);
  return (
    <Section className="overflow-hidden">
      <div className="container-x">
        <SectionHeading eyebrow="Word on the street" title="Clients who" accent="keep coming back." align="left" />
      </div>
      <div className="mt-12 space-y-5">
        <Row items={testimonials.slice(0, third)} />
        <Row items={testimonials.slice(third, third * 2)} reverse />
        <Row items={testimonials.slice(third * 2)} />
      </div>
    </Section>
  );
}
