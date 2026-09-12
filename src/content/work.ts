export type Tone = "light" | "mist" | "dark";

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  industry: string;
  services: string[];
  result: { value: string; label: string };
  tone: Tone;
  mockup: "browser" | "phone";
  year: string;
  timeline: string;
  stack: string[];
  challenge: string;
  approach: string[];
  solution: string;
  results: { value: string; label: string }[];
  quote?: { text: string; name: string; role: string };
};

// TODO: replace with real case studies.
export const work: CaseStudy[] = [
  {
    slug: "northwind-commerce",
    client: "Northwind",
    title: "Headless Shopify rebuild for a growing D2C brand",
    summary: "Replatformed a slow theme store to a headless storefront with sub-second pages and a smarter checkout.",
    industry: "E-commerce & Retail",
    services: ["Web Development", "UI/UX Design"],
    result: { value: "+38%", label: "conversion rate" },
    tone: "dark",
    mockup: "browser",
    year: "2025",
    timeline: "9 weeks",
    stack: ["Next.js", "Shopify Storefront API", "Sanity", "Vercel", "Klaviyo"],
    challenge:
      "Northwind's theme-based store had grown through five years of apps and patches. Pages took over four seconds to load on mobile, the checkout leaked customers at the shipping step, and every campaign landing page needed a developer.",
    approach: [
      "Audited analytics and session recordings to find where revenue was actually leaking.",
      "Kept Shopify for checkout, inventory and payments; moved the storefront to a headless Next.js front end.",
      "Rebuilt the product page around the three questions customers asked most, with reviews and delivery estimates above the fold.",
      "Gave the marketing team a CMS with reusable landing-page blocks so campaigns no longer waited on developers.",
    ],
    solution:
      "A headless storefront that renders in under a second, a redesigned product and cart flow, and a content system the team runs themselves. Every old URL was mapped and redirected, so organic traffic carried straight over.",
    results: [
      { value: "+38%", label: "conversion rate" },
      { value: "0.8s", label: "mobile load time, from 4.2s" },
      { value: "+24%", label: "average order value" },
    ],
    quote: {
      text: "We gave them an aggressive deadline and they still delivered more design iterations and options than we asked for.",
      name: "Priya Shah",
      role: "Founder, Northwind",
    },
  },
  {
    slug: "clearpath-clinics",
    client: "Clearpath Clinics",
    title: "Patient booking platform for a multi-location clinic group",
    summary: "Designed and built an accessible booking flow with automated reminders and intake forms.",
    industry: "Healthcare",
    services: ["Custom Software", "AI Automation"],
    result: { value: "62%", label: "fewer no-shows" },
    tone: "mist",
    mockup: "phone",
    year: "2025",
    timeline: "12 weeks",
    stack: ["React", "Node.js", "PostgreSQL", "Twilio", "n8n"],
    challenge:
      "Four clinic locations were taking bookings by phone into separate calendars. Reception spent hours confirming appointments, no-shows ran at nearly a quarter of bookings, and intake paperwork was still filled in on clipboards.",
    approach: [
      "Mapped the booking journey across all four locations with reception staff, not just management.",
      "Designed a mobile-first booking flow that meets WCAG 2.2 AA, since a large share of patients book from older phones.",
      "Built a single scheduling backend with location-aware availability and practitioner rules.",
      "Automated SMS and WhatsApp reminders with one-tap confirm and reschedule, plus digital intake sent before the visit.",
    ],
    solution:
      "One booking platform across every location, with automated reminders, digital intake and a reception dashboard that shows the day at a glance. Patient data stays inside the clinic's own systems.",
    results: [
      { value: "62%", label: "fewer no-shows" },
      { value: "15 hrs", label: "reception time saved per week" },
      { value: "4.9", label: "average patient rating of the booking flow" },
    ],
    quote: {
      text: "Our no-shows dropped by more than half in the first quarter. Reception finally has time to talk to patients.",
      name: "Aisha Rahman",
      role: "Marketing Lead, Clearpath Clinics",
    },
  },
  {
    slug: "harbor-realty",
    client: "Harbor Realty",
    title: "Live-listing website with instant lead routing",
    summary: "MLS-synced listings, crawlable property pages and AI-qualified leads routed straight to agents.",
    industry: "Real Estate",
    services: ["Web Development", "AI Automation"],
    result: { value: "3.1x", label: "qualified leads" },
    tone: "light",
    mockup: "browser",
    year: "2024",
    timeline: "8 weeks",
    stack: ["Next.js", "MLS API", "Claude", "HubSpot", "Google Maps"],
    challenge:
      "Harbor's listings lived inside an iframe from a third-party provider: invisible to Google, slow to load and impossible to brand. Enquiries landed in a shared inbox and often waited a day before an agent replied.",
    approach: [
      "Synced the MLS feed into the site so every property became a real, indexable page with its own metadata.",
      "Designed property pages around photos, map and the two actions buyers take: book a viewing and ask a question.",
      "Added an AI assistant that answers listing questions and qualifies enquiries by budget, timeline and financing.",
      "Routed qualified leads to the right agent in HubSpot within a minute, with the full conversation attached.",
    ],
    solution:
      "A fast, fully branded listings site that ranks for neighbourhood searches, with an AI front desk that qualifies buyers around the clock and hands them to agents while interest is still hot.",
    results: [
      { value: "3.1x", label: "qualified leads" },
      { value: "<1 min", label: "enquiry to agent, from 20+ hours" },
      { value: "+180%", label: "organic traffic in six months" },
    ],
    quote: {
      text: "Leads now reach the right agent in under a minute. That alone changed our close rate.",
      name: "Daniel Reyes",
      role: "Managing Broker, Harbor Realty",
    },
  },
  {
    slug: "ember-kitchen",
    client: "Ember Kitchen",
    title: "Direct ordering app that cut delivery-app commissions",
    summary: "Native iOS and Android ordering with loyalty built in, so the restaurant owns its customers.",
    industry: "Restaurants & Hospitality",
    services: ["App Development", "Branding"],
    result: { value: "41%", label: "orders moved direct" },
    tone: "dark",
    mockup: "phone",
    year: "2024",
    timeline: "6 weeks",
    stack: ["React Native", "Firebase", "Stripe", "OneSignal"],
    challenge:
      "Ember paid up to 30% commission on every delivery-app order and had no idea who its customers were. A previous agency's app had been abandoned with a two-star rating.",
    approach: [
      "Refreshed the brand first so the app, packaging and signage told one story.",
      "Designed ordering around speed: reorder your last meal in two taps, pay with saved cards or wallets.",
      "Built a simple loyalty scheme that rewards direct orders and nudges delivery-app customers across.",
      "Integrated with the existing kitchen display so staff workflow didn't change.",
    ],
    solution:
      "A fast, well-reviewed ordering app on both stores, a loyalty programme that keeps customers coming back directly, and a customer database Ember owns for the first time.",
    results: [
      { value: "41%", label: "of orders moved to direct" },
      { value: "4.8", label: "store rating, from 2.1" },
      { value: "£6k+", label: "commission saved per month" },
    ],
    quote: {
      text: "I can't believe they shipped the whole ordering app in six weeks. Our customers love it.",
      name: "Marco Bellini",
      role: "Owner, Ember Kitchen",
    },
  },
  {
    slug: "meridian-advisory",
    client: "Meridian Advisory",
    title: "Rebrand and authority-led website for a consulting firm",
    summary: "New identity, editorial website and a content engine that positions the partners as the obvious choice.",
    industry: "Consulting",
    services: ["Branding", "Marketing"],
    result: { value: "2.4x", label: "inbound enquiries" },
    tone: "mist",
    mockup: "browser",
    year: "2024",
    timeline: "10 weeks",
    stack: ["Figma", "Next.js", "MDX", "Semrush", "LinkedIn"],
    challenge:
      "Meridian's work was excellent and its brand was not. A dated logo, a template website and no published thinking meant prospects couldn't tell them apart from cheaper competitors.",
    approach: [
      "Ran positioning workshops with the partners to sharpen who they serve and what they refuse to do.",
      "Designed a restrained identity that reads as senior: typography-led, confident, no stock imagery.",
      "Built an editorial website where insights, not services, are the front door.",
      "Set up a content engine: monthly long-form pieces, repurposed for LinkedIn, tracked against enquiry quality.",
    ],
    solution:
      "A brand and website that finally match the calibre of the work, plus a publishing rhythm that keeps the partners visible to the clients they want.",
    results: [
      { value: "2.4x", label: "inbound enquiries" },
      { value: "+65%", label: "average engagement value" },
      { value: "12", label: "pieces ranking on page one" },
    ],
    quote: {
      text: "The rebrand finally matches the calibre of our work. The right clients started calling.",
      name: "Sarah Lindqvist",
      role: "Operations Director, Meridian Advisory",
    },
  },
  {
    slug: "stackline-saas",
    client: "Stackline",
    title: "MVP to paying customers in ten weeks",
    summary: "Product design, web app build and onboarding automation for a B2B analytics startup.",
    industry: "SaaS & Tech Startups",
    services: ["Custom Software", "UI/UX Design"],
    result: { value: "10 wks", label: "idea to revenue" },
    tone: "light",
    mockup: "browser",
    year: "2025",
    timeline: "10 weeks",
    stack: ["Next.js", "Supabase", "Stripe", "Resend", "Vercel"],
    challenge:
      "Two founders with deep domain knowledge, a pitch deck and no product. They needed something real enough to charge for before their runway ran out.",
    approach: [
      "Cut the roadmap to the one workflow customers would pay for and designed only that.",
      "Prototyped in Figma and tested with eight target users before writing production code.",
      "Built on a managed stack so the founders could ship without a devops hire.",
      "Automated onboarding, billing and lifecycle email so the team could focus on sales.",
    ],
    solution:
      "A focused, well-designed web app with self-serve onboarding and billing, launched to design partners in week eight and to paying customers in week ten.",
    results: [
      { value: "10 wks", label: "from kickoff to first revenue" },
      { value: "14", label: "paying customers at launch" },
      { value: "0", label: "engineers hired to get there" },
    ],
    quote: {
      text: "Very few teams can make software look this good and work this well. Surge AI did both, on time.",
      name: "Daniel Okafor",
      role: "Head of Product, Stackline",
    },
  },
];

export const getCaseStudy = (slug: string) => work.find((w) => w.slug === slug);
