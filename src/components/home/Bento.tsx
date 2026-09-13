import Image, { type StaticImageData } from "next/image";
import available from "@/assets/bento/available.webp";
import partnership from "@/assets/bento/partnership.webp";
import plan from "@/assets/bento/plan.webp";
import report from "@/assets/bento/report.webp";
import team from "@/assets/bento/team.webp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LogoMark } from "@/components/brand/Logo";

const card =
  "group h-full rounded-3xl border border-line bg-paper/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-black/40 hover:bg-paper hover:shadow-card-hover";

// TODO: replace — these illustrations carry another agency's branding (CANDEV) and are placeholders.
const items: { title: React.ReactNode; image: StaticImageData; alt: string }[] = [
  {
    title: (
      <>
        A <strong>senior, in-house team</strong> built around your vision, not a rotating bench.
      </>
    ),
    image: team,
    alt: "Your team panel listing a software developer, a mobile app developer and a QA engineer",
  },
  {
    title: (
      <>
        <strong>Transparent, fixed pricing</strong> with no hidden fees or surprises along the way.
      </>
    ),
    image: plan,
    alt: "Plan dashboard showing 72 of 80 hours used, with switch, pause and cancel plan options",
  },
  {
    title: (
      <>
        <strong>AI and automation built in</strong> from day one, so your product works harder than your team.
      </>
    ),
    image: available,
    alt: "Profile cards with an 'Available now' badge",
  },
  {
    title: (
      <>
        <strong>End-to-end delivery</strong>: brand, design, build, launch and marketing under one roof.
      </>
    ),
    image: report,
    alt: "Development report splitting 80 hours across web, app, web app and software development",
  },
];

function Picture({ image, alt }: { image: StaticImageData; alt: string }) {
  return (
    <div className="mt-6 overflow-hidden rounded-2xl">
      <Image src={image} alt={alt} sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 90vw" className="h-auto w-full" />
    </div>
  );
}

export function Bento() {
  return (
    <Section tone="cream">
      <div className="container-x">
        <SectionHeading eyebrow="Why Surge AI" title="How we help you" accent="grow & scale" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.alt} delay={i * 0.05}>
              <div className={card}>
                <h3 className="font-display text-xl font-semibold leading-snug">{it.title}</h3>
                <Picture image={it.image} alt={it.alt} />
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-black p-7 text-center text-cream transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
              <LogoMark className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 text-cream/[0.06] transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-cream/[0.12]" />
              <span className="rounded-full border border-line-dark px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-cream/70">
                Start here
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                Get a <span className="accent-word">free audit</span> of your site or workflow
              </h3>
              <p className="mt-2 text-sm text-cream/65">Specific findings and a roadmap, yours to keep.</p>
              <div className="mt-6">
                <Button href="/contact/" variant="primary-inverted" arrow>
                  Request an audit
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className={card}>
              <h3 className="font-display text-xl font-semibold leading-snug">
                A <strong>long-term product partnership</strong> built to support your growth over time.
              </h3>
              <Picture image={partnership} alt="Infinity loop marked 1st, 2nd and 3rd month" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
