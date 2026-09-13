import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industryImages } from "@/components/industries/industryImages";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/industries";

export function IndustriesStrip() {
  return (
    <Section tone="black">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries"
          title="Built for the way"
          accent="your industry works."
          description="Every sector has its own conversion levers, compliance rules and customer habits. We've shipped in all of these."
          inverted
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const img = industryImages[ind.slug];
            return (
              <Reveal key={ind.slug} delay={i * 0.04}>
                <Link
                  href={`/industries/${ind.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line-dark transition-colors hover:border-cream/40 hover:bg-cream/[0.04]"
                >
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-cream backdrop-blur-sm">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold tracking-tight">{ind.title}</h3>
                    <p className="mt-1.5 text-sm text-cream/60">{ind.hook}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
          <Reveal delay={0.3}>
            <Link
              href="/industries/"
              className="flex h-full flex-col justify-between rounded-3xl bg-cream p-6 text-black transition-transform hover:-translate-y-0.5"
            >
              <span className="font-display text-4xl font-bold tracking-[-0.04em]">7+</span>
              <span>
                <span className="block font-display text-lg font-semibold tracking-tight">Don&apos;t see yours?</span>
                <span className="mt-1 block text-sm text-muted">We adapt fast. Tell us about your market.</span>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
