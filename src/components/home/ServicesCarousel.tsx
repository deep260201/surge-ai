import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceIcons as icons } from "@/components/services/serviceIcons";
import { serviceImages } from "@/components/services/serviceImages";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServicesCarousel() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Carousel
        speed={40}
        header={
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="What we excel at" title="Everything you need," accent="one team." align="left" />
            <Button href="/services/" variant="secondary" arrow>
              View all services
            </Button>
          </div>
        }
      >
        {services.map((s, i) => {
          const Icon = icons[s.slug];
          const img = serviceImages[s.slug];
          const dark = i % 3 === 1;
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              data-card
              className={cn(
                "group flex w-[18.5rem] shrink-0 snap-start flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:w-[22rem]",
                dark
                  ? "border-line-dark bg-black text-cream hover:shadow-card-hover"
                  : "border-line bg-paper text-ink shadow-card hover:shadow-card-hover",
              )}
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                    dark ? "bg-cream/10" : "bg-mist",
                  )}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <ArrowUpRight
                  className={cn(
                    "h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    dark ? "text-cream/60" : "text-muted",
                  )}
                />
              </div>
              <div className={cn("relative mt-6 aspect-[5/4] overflow-hidden rounded-2xl", dark ? "bg-cream/10" : "bg-mist")}>
                <Image src={img.src} alt={img.alt} fill sizes="352px" loading="eager" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", dark ? "text-cream/65" : "text-muted")}>{s.tagline}</p>
              <ul className={cn("mt-6 space-y-2 border-t pt-5 text-sm", dark ? "border-line-dark" : "border-line")}>
                {s.subServices.slice(0, 3).map((sub) => (
                  <li key={sub.title} className="flex items-center gap-2">
                    <span className={cn("h-1 w-1 rounded-full", dark ? "bg-cream/60" : "bg-black")} />
                    {sub.title}
                  </li>
                ))}
              </ul>
            </Link>
          );
        })}
      </Carousel>
    </section>
  );
}
