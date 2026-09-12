@AGENTS.md

# Surge AI — Agency Website Brief

## Business
- Name: Surge AI. Tagline: "Surge. Innovate. Transform."
- Service-based digital agency. Flagship: Web Design & Development. Second: AI Bots & Automation. Then app dev, custom software, branding, marketing.
- Audience: B2B — startups, SMBs and growing businesses, global. No pricing page, no team bios. All CTAs → "Start Your Project" / "Book a Call".
- Assets: logo (cream S-bolt mark + "SURGE AI" wordmark on dark), domain + static hosting.

## Services (each has its own page with sub-service sections)
1. Web Design & Development — e-commerce development, custom web apps & portals, UI/UX design, website redesign & replatforming, landing pages
2. AI Bots & Automation — workflow automation, AI agents & chatbots (support/sales), AI development & integration, AI consulting
3. App Development — iOS, Android, cross-platform
4. Custom Web & Software Solutions — CRM/ERP/internal tools, SaaS MVPs, dashboards, integrations
5. Branding — brand identity & logo, rebranding, pitch & deck design, social & ad design
6. Marketing — SEO, Google Business Profile / local SEO, paid ads, social media, content

## Industries (each has its own page)
E-commerce & Retail · Healthcare · Real Estate · Restaurants & Hospitality · Professional Services · Consulting · SaaS & Tech Startups
Each page: one-line hook, pain points, what we build for them, relevant services, a mock case study, CTA.

## Site map
/ · /services + /services/[slug] · /industries + /industries/[slug] · /work + /work/[slug] · /about · /contact · /blog (MDX scaffold, empty) · /careers (simple, low priority) · /privacy · /terms

## Home page sections (in order)
1. Hero — pill nav (logo, links, "Start Your Project" button). Big headline with italic serif accent word, subline, primary CTA + WhatsApp secondary, 3 trust badges (Web-First / AI-Powered / End-to-End Delivery).
2. Services marquee ticker (single line, ✦ separators).
3. Stats row — 4 tiles (Projects, Clients, Apps, Websites) — placeholder numbers.
4. "What we excel at" — horizontal-scroll service cards with prev/next arrows, each links to its service page.
5. "Two doors" — Build something new / Rebuild what you've outgrown, two cards with checklists + CTAs.
6. Featured projects carousel — 6 mock case studies with device mockups.
7. "How we help you grow & scale" — 6-card bento grid, one dark card as CTA.
8. Testimonials — masonry grid mixing quote cards and client logos. Mock content.
9. Industries strip — 7 industry chips/cards linking to industry pages.
10. Process timeline — Planning, Design, Development, Testing, Launch, Support.
11. "Trusted by teams that ship" — review-platform badge row (Clutch, GoodFirms, Google, Upwork, Trustpilot).
12. Free audit section — split card (What you get / How it works 1-2-3) with "Get a Quote" CTA.
13. FAQ accordion — 6-8 questions.
14. Final CTA — "Ready to build what's next?" with Start Your Project + View Our Work.
15. Footer — 4 columns (Services, Company, Industries, Contact), socials, newsletter email input, legal links.

## Design system (monochrome, derived from logo)
- Palette (no accent color — contrast and typography do the work). Tokens live in `src/app/globals.css` under `@theme`:
  - paper #FAF9F6 page background · cream #F5F0E8 alternating sections · mist #ECEAE4 card fills · line #D9D6CF borders
  - muted #6B6B66 secondary text · ink #1A1A18 body/headings · black #0C0F0C dark sections, primary buttons, footer · line-dark #2A2D2A borders on dark
- Emphasis without color: italic serif accent words in headlines, weight contrast, light/dark section alternation, oversized numerals.
- Buttons: primary = black pill with cream text + arrow; secondary = outlined pill; both invert on hover. On dark sections use the `inverted` variants.
- Typography: Inter (body, `font-sans`), Space Grotesk (headlines, `font-display`), Instrument Serif italic (accent words, `font-serif`). Loaded via next/font in `src/app/layout.tsx`.
- Logo: `src/components/brand/Logo.tsx` renders an SVG mark + wordmark in `currentColor` so it works on light and dark. Replace with the real logo SVG when supplied.
- Components: pill buttons with arrow icon, rounded-2xl cards with 1px line border + soft shadow, uppercase eyebrow labels with dot ("• OUR PROCESS"), bolt logomark as a recurring motif.
- Motion: subtle scroll fade/slide (Framer Motion), card hover lift, marquee. No heavy animation.
- Floating: WhatsApp button bottom-right, scroll-to-top. Fully responsive, WCAG AA, no dark mode toggle.

## Tech stack (static-only — must work on any static host)
- Next.js 16 App Router + TypeScript + Tailwind CSS v4 + Framer Motion + lucide-react. `output: 'export'` + `trailingSlash: true` + `images.unoptimized: true` in `next.config.ts`. No API routes, no server actions, no middleware/proxy.
- Content: no CMS. Services, industries, case studies, testimonials, FAQs are typed data in `src/content/`; case studies and blog posts as MDX. Every dynamic route uses `generateStaticParams`.
- Forms (contact, newsletter, free audit): client-side POST to Web3Forms via `src/lib/forms.ts` (NEXT_PUBLIC_WEB3FORMS_KEY). Honeypot + zod validation.
- Calendly: embed on /contact + "Book a Call" modal (NEXT_PUBLIC_CALENDLY_URL). WhatsApp: wa.me link (NEXT_PUBLIC_WHATSAPP_NUMBER). Analytics: GA4 via NEXT_PUBLIC_GA_ID (no-op if unset). All in `src/config/site.ts`.
- SEO: per-page metadata, static OG images, sitemap + robots via next-sitemap, JSON-LD (Organization, Service, FAQ, BreadcrumbList).
- Placeholders: realistic Surge AI-specific copy (no lorem ipsum); mockups as SVG/gradient device frames until real screenshots arrive; mark with `// TODO: replace`.
- `npm run build` produces `/out` — upload to any host.

## Working rules
- Build page by page: 1) scaffold + design system + nav/footer ✅, 2) Home, 3) Services + 6 service pages, 4) Work + case studies, 5) Industries + 7 pages, 6) About + Contact, 7) Blog/Careers/legal, 8) SEO + Lighthouse pass.
- After each page: run dev server, check desktop + 390px mobile, stop for review before continuing.
- Small reusable components, no premature abstractions. Read `node_modules/next/dist/docs/` before using an unfamiliar Next API.
