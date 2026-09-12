export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  headline: { lead: string; accent: string };
  description: string;
  subServices: { title: string; description: string }[];
  forWho: string[];
  outcomes: string[];
  platforms: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    short: "Web Development",
    tagline: "Fast, conversion-first websites built to grow with you.",
    headline: { lead: "Websites that load fast, rank well and", accent: "turn visitors into customers." },
    description:
      "From marketing sites to e-commerce and custom web apps, we design and build on modern stacks with performance, SEO and conversion designed in from the first wireframe.",
    subServices: [
      { title: "E-commerce Development", description: "Conversion-first storefronts on Shopify, WooCommerce or headless stacks, with checkout flows tuned for revenue." },
      { title: "Custom Web Apps & Portals", description: "Bespoke platforms, dashboards and client portals built to your exact process, not a template's." },
      { title: "UI/UX Design", description: "Research-led interfaces that are a pleasure to use and simple to maintain." },
      { title: "Redesign & Replatforming", description: "Modernise a site you've outgrown without losing rankings, traffic or customers." },
      { title: "Landing Pages", description: "Focused, fast pages that turn campaign traffic into qualified leads." },
    ],
    forWho: [
      "Businesses whose current site is slow, dated or hard to update",
      "Founders launching a product or brand who need to look credible fast",
      "E-commerce stores leaking sales at checkout",
      "Teams that want one partner for design, build and ongoing growth",
    ],
    outcomes: [
      "Sub-second load times and green Core Web Vitals",
      "Clear structure that search engines and people both understand",
      "A CMS or content setup your team can actually use",
      "Analytics and conversion tracking wired in from day one",
    ],
    platforms: ["Next.js", "React", "Shopify", "WooCommerce", "Webflow", "WordPress", "Headless CMS"],
    faqs: [
      { q: "Which platform will you build my website on?", a: "It depends on what you need. Content-heavy marketing sites usually go on Next.js with a headless CMS or WordPress; stores go on Shopify or WooCommerce; anything custom is built with React and Next.js. We recommend, you decide." },
      { q: "Can you redesign my site without hurting SEO?", a: "Yes. We map every existing URL, preserve or redirect it, carry over metadata and structured data, and monitor rankings after launch. Replatforming with no SEO loss is one of our most common projects." },
      { q: "Will I be able to edit content myself?", a: "Always. Every site ships with a content setup matched to your team, and a short handover session so you're never dependent on us for a text change." },
    ],
  },
  {
    slug: "ai-bots-automation",
    title: "AI Bots & Automation",
    short: "AI Automation",
    tagline: "Cut the manual work draining your team.",
    headline: { lead: "Automations and AI agents that", accent: "give your team its time back." },
    description:
      "We connect the tools you already use, remove repetitive steps and deploy AI assistants that actually resolve conversations, so your people can focus on work that needs a human.",
    subServices: [
      { title: "Workflow Automation", description: "Connect CRMs, inboxes, spreadsheets and apps so data moves itself and nothing falls through the cracks." },
      { title: "AI Agents & Chatbots", description: "Support and sales assistants trained on your business that answer, qualify and hand off correctly." },
      { title: "AI Development & Integration", description: "Bring LLMs, document processing and prediction into the stack you already run." },
      { title: "AI Consulting", description: "A clear, prioritised roadmap of what to automate first, and what not to, before a line of code." },
    ],
    forWho: [
      "Teams copying data between tools every day",
      "Support inboxes buried in the same twenty questions",
      "Sales teams slow to follow up on inbound leads",
      "Operations leaders who want measurable time savings, not AI hype",
    ],
    outcomes: [
      "Hours of manual admin removed every week",
      "Faster response times for customers and leads",
      "Fewer errors from re-keyed data",
      "Clear reporting on what each automation saves",
    ],
    platforms: ["Claude", "OpenAI", "n8n", "Make", "Zapier", "HubSpot", "WhatsApp Business", "Slack"],
    faqs: [
      { q: "What can realistically be automated?", a: "Anything rule-based and repetitive: lead routing, follow-up sequences, invoice handling, onboarding, reporting, support triage. We start with an audit that ranks tasks by time saved versus effort to build." },
      { q: "Will an AI chatbot annoy my customers?", a: "Not if it's built properly. Ours are trained on your actual content, know when they don't know, and hand off to a human with full context instead of looping." },
      { q: "Is my data safe?", a: "We design every integration with least-privilege access, keep sensitive data inside your systems where possible, and document exactly what each automation can read and write." },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    short: "Mobile Apps",
    tagline: "iOS, Android and cross-platform apps that feel native.",
    headline: { lead: "Mobile apps your customers", accent: "keep on their home screen." },
    description:
      "We design and build mobile apps from MVP to store launch, with native-quality performance, thoughtful onboarding and the backend to grow behind them.",
    subServices: [
      { title: "iOS & Android", description: "Native performance and platform-correct UX on both stores." },
      { title: "Cross-platform", description: "One codebase, every device, with React Native or Flutter when it makes sense." },
      { title: "App Strategy & MVP", description: "Scope the smallest app that proves the idea, then build it well." },
      { title: "Backend & APIs", description: "Secure, scalable services and integrations so the app works at scale." },
      { title: "Launch & Growth", description: "Store listings, analytics, push notifications and post-launch iteration." },
    ],
    forWho: [
      "Founders validating a product idea",
      "Businesses that want to own the customer relationship instead of renting it",
      "Companies replacing a clunky internal app",
      "Restaurants, clinics and services that need bookings and orders on mobile",
    ],
    outcomes: [
      "A store-ready app on iOS and Android",
      "Onboarding that gets users to value fast",
      "A backend built for the next 100k users",
      "Analytics that show what people actually do",
    ],
    platforms: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "Supabase", "App Store", "Google Play"],
    faqs: [
      { q: "Native or cross-platform?", a: "Cross-platform (React Native or Flutter) is right for most business apps and halves the cost. We go native when an app depends heavily on device features, performance or platform-specific design." },
      { q: "How long does an app take?", a: "A focused MVP typically takes 8–12 weeks. Larger products run 3–6 months. We ship a working build every two weeks so you see progress, not promises." },
      { q: "Do you handle app store submission?", a: "Yes, including listings, screenshots, review guidelines and the inevitable back-and-forth with reviewers." },
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Web & Software Solutions",
    short: "Custom Software",
    tagline: "Internal tools shaped exactly to how you work.",
    headline: { lead: "Software built around your process,", accent: "not the other way round." },
    description:
      "When off-the-shelf tools stop fitting, we build the system you actually need: CRMs, ERPs, dashboards, SaaS products and the integrations that tie them together.",
    subServices: [
      { title: "CRM / ERP / Internal Tools", description: "Replace spreadsheets and rented software with systems built for your workflow." },
      { title: "SaaS MVPs", description: "Ship a sellable product fast, on a foundation that scales." },
      { title: "Dashboards & Reporting", description: "See the numbers that matter, in real time, from every source." },
      { title: "Integrations & APIs", description: "Make your systems talk to each other reliably and securely." },
      { title: "Legacy Modernisation", description: "Move ageing systems to modern stacks without stopping the business." },
    ],
    forWho: [
      "Operations running on spreadsheets and workarounds",
      "Startups building a software product",
      "Businesses paying for five tools that don't talk to each other",
      "Teams with a legacy system nobody dares to touch",
    ],
    outcomes: [
      "One system of record instead of scattered data",
      "Workflows that match how your team actually works",
      "Role-based access and audit trails",
      "Code you own, documented and handed over",
    ],
    platforms: ["Next.js", "Node.js", "Python", "PostgreSQL", "Supabase", "AWS", "Vercel", "Stripe"],
    faqs: [
      { q: "Isn't custom software expensive?", a: "Compared to a subscription, upfront yes. Compared to years of subscriptions, workarounds and lost time, usually not. We scope a phase-one build that pays for itself, then grow it." },
      { q: "Who owns the code?", a: "You do. Full source, documentation and infrastructure access are handed over at launch." },
      { q: "Can you integrate with the tools we already use?", a: "Almost always. We've integrated with accounting, CRM, e-commerce, logistics and payment platforms of every size." },
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Branding",
    tagline: "Identity systems built to last.",
    headline: { lead: "A brand that looks like", accent: "the calibre of your work." },
    description:
      "Naming, identity, guidelines and the creative that follows. We build brand systems that scale from favicon to billboard and stay consistent across every channel.",
    subServices: [
      { title: "Brand Identity & Logo", description: "Logo, colour, type and a system of rules that keeps everything coherent." },
      { title: "Rebranding", description: "Evolve the brand while protecting the equity people already recognise." },
      { title: "Pitch & Deck Design", description: "Investor and sales decks that win the room." },
      { title: "Social & Ad Creative", description: "Scroll-stopping creative, on-brand at scale." },
      { title: "Brand Guidelines", description: "A practical playbook your team and partners can actually follow." },
    ],
    forWho: [
      "New businesses that need to look established from day one",
      "Companies whose brand no longer matches their quality",
      "Founders raising or selling who need a sharper story",
      "Teams producing inconsistent creative across channels",
    ],
    outcomes: [
      "A distinctive identity that's hard to copy",
      "Consistent brand across web, social, print and product",
      "Files, templates and rules ready for your team",
      "Creative that's recognisably yours at a glance",
    ],
    platforms: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva templates", "Keynote", "Google Slides"],
    faqs: [
      { q: "How long does a brand identity take?", a: "A full identity typically takes 4–6 weeks: discovery, direction, refinement and the guidelines. A rebrand of an existing identity can be faster." },
      { q: "Do you do naming?", a: "Yes. Naming is offered as part of identity projects and includes availability checks for domains and social handles." },
      { q: "Will the new brand work on our existing website?", a: "We plan the rollout with you, and if the site needs to change we can do that too, since web is our core service." },
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    short: "Marketing",
    tagline: "Be found, be chosen, be remembered.",
    headline: { lead: "Marketing that compounds,", accent: "not campaigns that vanish." },
    description:
      "SEO, local search, paid ads and content, run by the same team that built your site, so every channel points at pages designed to convert.",
    subServices: [
      { title: "SEO", description: "Technical, on-page and content SEO that builds durable organic traffic." },
      { title: "Local SEO & Google Business Profile", description: "Own the map pack and the searches that happen in your city." },
      { title: "Paid Ads", description: "Google and Meta campaigns tuned to return, not just reach." },
      { title: "Social & Content", description: "Consistent, on-brand presence across the channels that matter for you." },
      { title: "Analytics & CRO", description: "Measure what works and improve the pages that carry the traffic." },
    ],
    forWho: [
      "Businesses invisible on Google for the searches that matter",
      "Local services that live and die by the map pack",
      "Companies spending on ads without knowing what returns",
      "Teams with a great product and no consistent content",
    ],
    outcomes: [
      "Rankings for the keywords that bring buyers",
      "A Google Business Profile that fills the phone lines",
      "Ad spend tied to real conversions",
      "Monthly reporting in plain language",
    ],
    platforms: ["Google Ads", "Meta Ads", "Google Search Console", "GA4", "Semrush", "Google Business Profile", "LinkedIn"],
    faqs: [
      { q: "How soon will we see SEO results?", a: "Technical fixes show within weeks; competitive rankings typically take 3–6 months to build. Local SEO usually moves faster." },
      { q: "Do you require long contracts?", a: "No. Marketing runs month to month after an initial three-month setup period, because that's how long it takes to judge fairly." },
      { q: "Can you just run our ads?", a: "Yes, though we'll always check the landing pages first. Sending paid traffic to a slow or unclear page wastes money." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
