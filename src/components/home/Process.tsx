import { ClipboardList, CodeXml, FlaskConical, Headphones, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/content/home";
import { cn } from "@/lib/utils";

const icons: LucideIcon[] = [ClipboardList, PenTool, CodeXml, FlaskConical, Rocket, Headphones];

function Card({ step, title, description, className }: (typeof process)[number] & { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-[12rem] rounded-2xl border border-line bg-paper px-4 py-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-card-hover",
        className,
      )}
    >
      <span className="text-[0.6875rem] font-semibold tracking-[0.2em] text-muted">{step}</span>
      <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">{description}</p>
    </div>
  );
}

function Node({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-cream shadow-card transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-card-hover">
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}

export function Process() {
  return (
    <Section>
      <div className="container-x">
        <SectionHeading
          eyebrow="Our process"
          title="Simple process."
          accent="Sharp execution."
          description="A focused timeline from idea to launch, without unnecessary noise."
        />

        {/* Desktop: horizontal line, cards alternating above/below */}
        <div className="relative mt-16 hidden lg:block">
          <div aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-px bg-line" />
          <ol className="grid grid-cols-6">
            {process.map((p, i) => {
              const top = i % 2 === 0;
              return (
                <Reveal as="li" key={p.step} delay={i * 0.06} className="group flex flex-col items-center">
                  <div className="flex h-40 w-full items-end justify-center">{top && <Card {...p} />}</div>
                  <span className={cn("h-7 w-px transition-colors duration-300", top ? "bg-line group-hover:bg-black" : "bg-transparent")} />
                  <Node icon={icons[i]} />
                  <span className={cn("h-7 w-px transition-colors duration-300", top ? "bg-transparent" : "bg-line group-hover:bg-black")} />
                  <div className="flex h-40 w-full items-start justify-center">{!top && <Card {...p} />}</div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* Mobile/tablet: vertical line on the left */}
        <div className="relative mt-14 lg:hidden">
          <div aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-line" />
          <ol className="space-y-6">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.05} className="flex items-center gap-5">
                <Node icon={icons[i]} />
                <Card {...p} className="max-w-none text-left" />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
