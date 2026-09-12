import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "@/components/work/WorkCard";
import { work } from "@/content/work";

export function FeaturedWork() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Carousel
        speed={35}
        header={
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured projects" title="Work that" accent="ships and performs." align="left" />
            <Button href="/work/" variant="secondary" arrow>
              Recent projects
            </Button>
          </div>
        }
      >
        {work.map((w) => (
          <WorkCard key={w.slug} work={w} data-card className="w-[19rem] shrink-0 sm:w-[24rem]" />
        ))}
      </Carousel>
    </section>
  );
}
