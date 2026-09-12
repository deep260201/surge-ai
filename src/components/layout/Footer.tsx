import Link from "next/link";
import { Logo, LogoMark } from "@/components/brand/Logo";
import { site } from "@/config/site";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { NewsletterForm } from "./NewsletterForm";

const company = [
  { label: "About", href: "/about/" },
  { label: "Work", href: "/work/" },
  { label: "Blog", href: "/blog/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
];

const socialIconClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-dark text-cream/70 transition-colors hover:border-cream hover:text-cream";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.3A1.8 1.8 0 1 1 6.5 4.7a1.8 1.8 0 0 1 0 3.6ZM19 19h-3v-4.7c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V19h-3v-9h3v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.8 1.3 3.8 4.2V19Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.9-9.1L0 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.4L17.7 20Z" />
    </svg>
  );
}

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cream">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-cream/65 transition-colors hover:text-cream">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-cream">
      <LogoMark className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] text-cream/[0.04]" />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Surge AI home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">{site.tagline}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/65">{site.description}</p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
          <Column title="Services" links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}/` }))} />
          <Column title="Industries" links={industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}/` }))} />
          <div className="space-y-10">
            <Column title="Company" links={company} />
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-cream">Contact</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-cream/65">
                <li>
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                    {site.email}
                  </a>
                </li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a href={site.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                  <LinkedInIcon />
                </a>
                <a href={site.socials.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                  <InstagramIcon />
                </a>
                <a href={site.socials.x} aria-label="X" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-dark pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy/" className="transition-colors hover:text-cream">Privacy</Link>
            <Link href="/terms/" className="transition-colors hover:text-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
