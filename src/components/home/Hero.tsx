import { Bot, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DotField } from "@/components/ui/DotField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { whatsappHref } from "@/config/site";

const badges = [
  { icon: Globe, title: "Web-First", sub: "Built to convert" },
  { icon: Bot, title: "AI-Powered", sub: "Automation built in" },
  { icon: ShieldCheck, title: "End-to-End", sub: "From idea to launch" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]"
      >
        <DotField />
      </div>
      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-muted shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Web design, development & AI automation
          </span>
        </Reveal>
        {/* The headline is the LCP element: keep it static so it paints with the first frame. */}
        <h1 className="mt-7 max-w-5xl font-display text-[2.75rem] font-bold leading-[1] tracking-[-0.035em] sm:text-7xl lg:text-[5.25rem]">
          We build websites and AI systems that <span className="accent-word">move business forward.</span>
        </h1>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Surge AI designs and builds fast, scalable websites, apps and AI-powered automations that help ambitious
            businesses launch faster, operate smarter and grow with confidence.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact/" size="lg" arrow>
            Start Your Project
          </Button>
          <Button href={whatsappHref()} variant="secondary" size="lg" className="bg-white">
            Chat on WhatsApp
          </Button>
        </Reveal>
        <Reveal delay={0.2} className="mt-16 w-full max-w-3xl">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
            {badges.map(({ icon: Icon, title, sub }) => (
              <li key={title} className="flex items-center gap-3 sm:justify-center">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-paper shadow-card">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-left">
                  <span className="block font-display text-sm font-semibold">{title}</span>
                  <span className="block text-xs text-muted">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Eyebrow className="sr-only">Surge. Innovate. Transform.</Eyebrow>
      </div>
    </section>
  );
}
