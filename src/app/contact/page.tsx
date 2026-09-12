import type { Metadata } from "next";
import { CalendarDays, Mail, MessageCircle } from "lucide-react";
import { Calendly } from "@/components/contact/Calendly";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/home/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, whatsappHref } from "@/config/site";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you're building. Get a free audit, book a call or message us on WhatsApp.",
  alternates: { canonical: "/contact/" },
};

const steps = [
  { title: "We read it properly", detail: "A real person reviews your enquiry and your site, brand or workflow if you shared one." },
  { title: "We reply within a day", detail: "With first thoughts, clarifying questions and a suggested time to talk." },
  { title: "You get a plan", detail: "After a 30-minute call you'll have a specific, prioritised plan and a fixed quote." },
];

export default function ContactPage() {
  const channels = [
    { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}`, note: "Replies within one business day" },
    { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: whatsappHref(), note: "Fastest for quick questions" },
    { icon: CalendarDays, title: "Book a call", value: "30 minutes, free", href: "#book", note: "Pick a slot that suits you" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Surge AI",
          url: `${site.url}/contact/`,
          mainEntity: { "@type": "Organization", name: site.name, email: site.email, url: site.url },
        }}
      />
      <PageHero
        eyebrow="Contact"
        lead="Tell us what"
        accent="you're building."
        description="Whether it's a new build, a rebuild or a process you want automated, start here. You'll hear back from a real person within one business day."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-black hover:shadow-card-hover"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-black group-hover:text-cream">
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted">{c.title}</span>
                <span className="block break-words text-sm font-semibold">{c.value}</span>
                <span className="block text-xs text-muted">{c.note}</span>
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      <section id="form" className="container-x scroll-mt-28 pb-20 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl bg-black p-8 text-cream sm:p-10">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-cream/60">What happens next</span>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">No pitch deck. No pressure.</h2>
              <ol className="mt-8 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream font-display text-xs font-bold text-black">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{s.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-cream/65">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-10 border-t border-line-dark pt-6 text-sm text-cream/65">
                <p>Prefer to talk first?</p>
                <a href="#book" className="mt-1 inline-block font-semibold text-cream underline underline-offset-4">
                  Book a 30-minute call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section tone="cream" id="book" className="scroll-mt-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Book a call"
            title="Pick a time,"
            accent="we'll do the prep."
            description="A 30-minute discovery call on Google Meet. Come with a link and a goal; leave with a clear next step."
          />
          <Reveal className="mt-12">
            <Calendly />
          </Reveal>
        </div>
      </Section>

      <FAQ items={faqs.slice(0, 5)} description="Quick answers before you get in touch: timelines, pricing and what happens after launch." />
    </>
  );
}
