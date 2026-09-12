export type Industry = {
  slug: string;
  title: string;
  hook: string;
  headline: { lead: string; accent: string };
  description: string;
  stakes: { value: string; label: string; note: string }[];
  funnel: { label: string; pct: number; note?: string }[];
  frontend: string[];
  ai: string[];
  platforms: string[];
  subSectors: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    hook: "Speed and trust at checkout are your revenue.",
    headline: { lead: "E-commerce built to sell,", accent: "not just to look good." },
    description:
      "Most stores don't have a traffic problem; they have a conversion problem. We design and build around the four things that decide revenue: speed, checkout, mobile and trust.",
    stakes: [
      { value: "~70%", label: "of carts are abandoned before checkout", note: "Nearly half cite unexpected costs" },
      { value: "53%", label: "of mobile visitors leave if a page takes over 3s", note: "Speed is a conversion feature" },
      { value: "0.1s", label: "faster on mobile lifts conversion by ~8%", note: "Small gains compound at scale" },
    ],
    funnel: [
      { label: "Visitors land", pct: 100 },
      { label: "Browse products", pct: 62, note: "slow pages lose them here" },
      { label: "Add to cart", pct: 28 },
      { label: "Reach checkout", pct: 12, note: "surprise costs and forced accounts" },
      { label: "Purchase", pct: 3 },
    ],
    frontend: [
      "Information architecture and search that finds the product fast",
      "Product and category pages built around buyer questions",
      "Checkout stripped to the fields that matter",
      "Payments, shipping and tax integrations that just work",
      "Core Web Vitals in the green on real devices",
      "Structured data so products show rich results",
    ],
    ai: [
      "Personalised recommendations and bundles",
      "24/7 AI support that answers sizing, delivery and returns",
      "Abandoned-cart recovery across email and WhatsApp",
      "Order, inventory and customer-data workflows on autopilot",
    ],
    platforms: ["Shopify", "Shopify Plus", "WooCommerce", "BigCommerce", "Headless / Next.js", "Klaviyo", "Stripe"],
    subSectors: ["Fashion & apparel", "Beauty & personal care", "Food & beverage", "Home & furniture", "Health & wellness", "B2B & wholesale"],
    faqs: [
      { q: "Which e-commerce platform is best for us?", a: "Shopify for most D2C brands, WooCommerce when content and ownership matter, headless when speed and scale justify it. Choosing is the first thing the free audit answers." },
      { q: "Will we lose SEO if we replatform?", a: "Not with a proper migration. We map every URL by revenue, keep redirects live for a year, validate analytics on staging and launch in phases." },
      { q: "Can you fix specific problems like cart abandonment or speed?", a: "Yes. Many engagements start as a focused fix on checkout, speed or mobile, then grow from there." },
      { q: "Do you support subscriptions, B2B or international selling?", a: "All three, on the platforms that handle them well natively rather than through fragile plugins." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    hook: "Compliance and accessibility, handled together.",
    headline: { lead: "Healthcare websites and systems that", accent: "patients can actually use." },
    description:
      "Clinics, practices and health brands need two things at once: a site that's accessible and trustworthy for every patient, and systems that protect their data while removing admin from your staff.",
    stakes: [
      { value: "77%", label: "of patients search online before booking", note: "Your site is the first consultation" },
      { value: "1 in 4", label: "appointments are missed without reminders", note: "Automation fixes this directly" },
      { value: "WCAG AA", label: "is the baseline, not a bonus", note: "Accessibility is a legal and human requirement" },
    ],
    funnel: [
      { label: "Search for care", pct: 100 },
      { label: "Land on your site", pct: 58, note: "slow or confusing sites lose them" },
      { label: "Find the right service", pct: 34 },
      { label: "Start a booking", pct: 18, note: "phone-only booking stalls here" },
      { label: "Attend appointment", pct: 11 },
    ],
    frontend: [
      "Accessible design tested with screen readers and older devices",
      "Service pages that answer the questions patients actually ask",
      "Online booking with location and practitioner awareness",
      "Secure forms for intake and enquiries",
      "Local SEO for every location",
      "Trust signals: credentials, reviews, clear pricing where allowed",
    ],
    ai: [
      "Appointment reminders with one-tap confirm and reschedule",
      "AI triage assistant that routes enquiries to the right team",
      "Digital intake that lands in your practice software",
      "Follow-up and recall workflows that run themselves",
    ],
    platforms: ["Next.js", "WordPress", "Cliniko", "Twilio", "WhatsApp Business", "n8n", "Google Business Profile"],
    subSectors: ["Clinics & practices", "Dental", "Physio & wellness", "Mental health", "Diagnostics & labs", "Health tech"],
    faqs: [
      { q: "How do you handle patient data?", a: "Data stays inside your practice systems wherever possible. Integrations use least-privilege access, everything is encrypted in transit and at rest, and we document exactly what each automation touches." },
      { q: "Can you integrate with our practice management software?", a: "Usually. We've connected booking and intake to most common practice platforms, and where there's no API we build a safe workaround." },
      { q: "Do you build for multiple locations?", a: "Yes. Multi-location booking, per-location SEO and a single dashboard for the whole group is a common project for us." },
      { q: "Is accessibility really necessary?", a: "Yes, and it's good business. Accessible sites are easier for everyone, rank better and reduce legal risk. We build to WCAG 2.2 AA by default." },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    hook: "Live listings, crawlable pages, instant lead capture.",
    headline: { lead: "Real estate sites that", accent: "capture the lead while interest is hot." },
    description:
      "Buyers and renters decide in minutes. We build listing sites that load fast, rank for neighbourhood searches and route every enquiry to the right agent before the prospect moves on.",
    stakes: [
      { value: "97%", label: "of buyers start their search online", note: "Portals are not enough on their own" },
      { value: "78%", label: "of deals go to the first agent who responds", note: "Speed to lead wins" },
      { value: "iframe", label: "listings are invisible to Google", note: "Real pages rank; embeds don't" },
    ],
    funnel: [
      { label: "Search a location", pct: 100 },
      { label: "Open a listing", pct: 64 },
      { label: "View photos & map", pct: 41, note: "slow galleries lose them" },
      { label: "Send an enquiry", pct: 9 },
      { label: "Book a viewing", pct: 4, note: "slow replies kill this step" },
    ],
    frontend: [
      "MLS or CRM-synced listings as real, indexable pages",
      "Fast photo galleries, maps and floor plans",
      "Neighbourhood and area guides that rank",
      "Agent profiles that build trust",
      "Viewing booking built into every listing",
      "Mortgage, valuation and lead-magnet tools",
    ],
    ai: [
      "AI assistant that answers listing questions 24/7",
      "Lead qualification by budget, timeline and financing",
      "Instant routing to the right agent with full context",
      "Automated follow-up sequences and viewing reminders",
    ],
    platforms: ["Next.js", "MLS / IDX APIs", "HubSpot", "Follow Up Boss", "Google Maps", "Claude", "Calendly"],
    subSectors: ["Residential agencies", "Commercial property", "Property developers", "Lettings & management", "Holiday rentals", "Proptech"],
    faqs: [
      { q: "Can you sync listings automatically?", a: "Yes. We integrate with MLS/IDX feeds and most agency CRMs so listings update themselves and every property gets its own crawlable page." },
      { q: "How fast can leads reach agents?", a: "Under a minute, with the enquiry already qualified and the conversation attached, so agents call back with context." },
      { q: "Do you build for developers launching a project?", a: "Yes, including launch microsites, plot or unit availability, and lead capture for off-plan sales." },
      { q: "Will this replace the portals?", a: "It complements them. Portals bring traffic; your own site converts it and builds the brand and data you own." },
    ],
  },
  {
    slug: "restaurants-hospitality",
    title: "Restaurants & Hospitality",
    hook: "Own your orders, stop renting customers from delivery apps.",
    headline: { lead: "Hospitality that", accent: "owns its customers again." },
    description:
      "Delivery apps take up to 30% of every order and keep the customer data. We build direct ordering, booking and loyalty that put the relationship, and the margin, back in your hands.",
    stakes: [
      { value: "30%", label: "commission on delivery-app orders", note: "Direct orders keep that margin" },
      { value: "85%", label: "of diners check a venue online first", note: "Menu, photos and booking must be instant" },
      { value: "5x", label: "cheaper to keep a guest than win a new one", note: "Loyalty pays for itself" },
    ],
    funnel: [
      { label: "Search or see an ad", pct: 100 },
      { label: "View menu & photos", pct: 70, note: "PDF menus lose mobile visitors" },
      { label: "Start an order or booking", pct: 32 },
      { label: "Complete it", pct: 19, note: "clunky checkout drops them" },
      { label: "Return within 30 days", pct: 6 },
    ],
    frontend: [
      "Mobile-first menus that load instantly, no PDFs",
      "Direct ordering with saved cards, wallets and reorder",
      "Table booking without third-party fees",
      "Location pages and Google Business Profile that fill tables",
      "Loyalty built into the ordering flow",
      "Kitchen display and POS integration",
    ],
    ai: [
      "AI assistant for bookings, allergens and opening hours",
      "Automated win-back and loyalty messaging",
      "Review requests timed after the visit",
      "Stock, ordering and rota workflows on autopilot",
    ],
    platforms: ["React Native", "Next.js", "Stripe", "Square", "Lightspeed", "OneSignal", "Google Business Profile"],
    subSectors: ["Restaurants & cafés", "Takeaways & delivery brands", "Bars & venues", "Hotels & B&Bs", "Multi-site groups", "Ghost kitchens"],
    faqs: [
      { q: "Can we really move customers off delivery apps?", a: "Not all of them, but a meaningful share. A fast app, a loyalty nudge and a small discount for direct orders typically moves 30–40% of regulars within months." },
      { q: "Do we need an app or is a website enough?", a: "For ordering, a well-built mobile website often suffices. An app wins when reorder frequency is high and push notifications matter." },
      { q: "Will it work with our POS?", a: "We integrate with most major POS and kitchen display systems so staff workflow doesn't change." },
      { q: "Can you handle multiple locations?", a: "Yes, with per-location menus, hours, ordering and pages that rank locally." },
    ],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    hook: "Trust earned in seconds, intake that converts.",
    headline: { lead: "Professional services sites that", accent: "earn trust in seconds." },
    description:
      "Law, accounting, architecture, agencies: prospects judge you on your site before they ever call. We build credibility fast and turn enquiries into booked consultations without the back-and-forth.",
    stakes: [
      { value: "75%", label: "of people judge credibility by website design", note: "Dated design costs you the brief" },
      { value: "50 ms", label: "is how fast a first impression forms", note: "Typography and clarity do the work" },
      { value: "5x", label: "more conversions when a lead is contacted within 5 minutes", note: "Automated intake makes it possible" },
    ],
    funnel: [
      { label: "Referral or search", pct: 100 },
      { label: "Check your website", pct: 80, note: "weak sites end it here" },
      { label: "Read a service or team page", pct: 45 },
      { label: "Make contact", pct: 12, note: "long forms deter them" },
      { label: "Book a consultation", pct: 7 },
    ],
    frontend: [
      "Positioning and messaging that says who you're for",
      "Service pages structured around client problems",
      "Team pages that build personal trust",
      "Case studies and results, not just credentials",
      "Frictionless enquiry and consultation booking",
      "SEO for the searches that bring the right clients",
    ],
    ai: [
      "AI intake that qualifies and books consultations",
      "Automatic routing to the right partner or team",
      "Proposal and document workflows on autopilot",
      "Follow-up and nurture sequences for slow-burn leads",
    ],
    platforms: ["Next.js", "WordPress", "HubSpot", "Calendly", "Clio", "DocuSign", "LinkedIn"],
    subSectors: ["Law firms", "Accounting & finance", "Architecture & engineering", "Agencies & studios", "Recruitment", "Insurance & advisory"],
    faqs: [
      { q: "We're regulated. Can you work within our rules?", a: "Yes. We've built for legal, financial and medical firms with strict marketing rules and design content and claims to fit them." },
      { q: "How do you make a firm look credible without stock photos?", a: "Typography-led design, real photography of real people, clear positioning and evidence. It reads as senior because it is." },
      { q: "Can you automate our client intake?", a: "Yes. From website enquiry to qualified, booked and logged in your CRM, without anyone re-keying data." },
      { q: "Will we be able to update the site ourselves?", a: "Always. Team changes, new services and insights are yours to publish in minutes." },
    ],
  },
  {
    slug: "consulting",
    title: "Consulting",
    hook: "Authority that wins the high-value engagement.",
    headline: { lead: "Consulting brands that", accent: "win the room before the pitch." },
    description:
      "High-value engagements are won on authority. We build brands, websites and content engines that make your thinking visible to the clients you want, so the right conversations start themselves.",
    stakes: [
      { value: "90%", label: "of B2B buyers research multiple firms first", note: "Visible expertise wins the shortlist" },
      { value: "13%", label: "conversion for industry-fluent pages vs 2–5% generic", note: "Specific beats broad" },
      { value: "6–12 mo", label: "typical B2B decision cycle", note: "Content keeps you present throughout" },
    ],
    funnel: [
      { label: "Hear of you", pct: 100 },
      { label: "Look you up", pct: 72 },
      { label: "Read your thinking", pct: 38, note: "no published insight ends it here" },
      { label: "Shortlist you", pct: 14 },
      { label: "Start a conversation", pct: 6, note: "authority decides this step" },
    ],
    frontend: [
      "Positioning workshops to sharpen who you serve",
      "A restrained, senior brand identity",
      "An editorial website where insights lead",
      "Partner and practice pages that convert",
      "Long-form content built to rank and be cited",
      "Investor and sales decks that match the brand",
    ],
    ai: [
      "Content repurposing across LinkedIn, email and web",
      "Lead scoring on engagement with your thinking",
      "Automated nurture for long decision cycles",
      "Proposal and onboarding workflows",
    ],
    platforms: ["Figma", "Next.js", "MDX", "HubSpot", "LinkedIn", "Semrush", "Keynote"],
    subSectors: ["Management consulting", "Strategy boutiques", "IT & technology consulting", "HR & change", "Financial advisory", "Independent consultants"],
    faqs: [
      { q: "Do we need a rebrand or just a new website?", a: "Often both, but not always. We start with positioning; if the identity supports it, we keep it and focus the budget on the site and content." },
      { q: "How much content do we have to produce?", a: "One substantial piece a month is enough to build authority if it's repurposed well. We set up the system and can write with you." },
      { q: "Can you help with pitch decks?", a: "Yes. Investor and sales decks are part of our branding service and use the same system as the site." },
      { q: "How do you measure success?", a: "Enquiry quality, not just quantity: engagement value, shortlist rate and which content led to conversations." },
    ],
  },
  {
    slug: "saas-startups",
    title: "SaaS & Tech Startups",
    hook: "Ship faster, look credible, scale without rebuilding.",
    headline: { lead: "SaaS and startup products that", accent: "ship fast and scale clean." },
    description:
      "From landing page to MVP to growth, we design and build the product, the marketing site and the automation around them, so a small team can move like a big one.",
    stakes: [
      { value: "42%", label: "of startups fail on no market need", note: "Ship the smallest thing that proves it" },
      { value: "2 wks", label: "is how often we ship a working build", note: "Progress you can see" },
      { value: "0", label: "engineers you need to hire to launch", note: "Managed stacks, handed over" },
    ],
    funnel: [
      { label: "Visit the site", pct: 100 },
      { label: "Understand the product", pct: 55, note: "unclear positioning loses them" },
      { label: "Start a trial or demo", pct: 16 },
      { label: "Reach first value", pct: 8, note: "onboarding decides this" },
      { label: "Convert to paid", pct: 3 },
    ],
    frontend: [
      "Positioning and a marketing site that explains the product in seconds",
      "Product design tested with real users before build",
      "MVP built on a managed, scalable stack",
      "Self-serve onboarding, billing and account management",
      "Design system so product and marketing stay consistent",
      "Analytics that show what users actually do",
    ],
    ai: [
      "AI features inside your product, built and integrated",
      "Onboarding and lifecycle email on autopilot",
      "AI support assistant trained on your docs",
      "Internal tooling and reporting for the team",
    ],
    platforms: ["Next.js", "Supabase", "Stripe", "Vercel", "Claude", "Resend", "Segment"],
    subSectors: ["B2B SaaS", "Marketplaces", "Fintech", "AI-native products", "Developer tools", "Pre-seed to Series A"],
    faqs: [
      { q: "Can you build our MVP?", a: "Yes. We scope the one workflow customers will pay for, prototype it, test it, then build it on a stack your future engineers will be happy to inherit." },
      { q: "Do you work with technical founders?", a: "Often. We slot in on design, front end, marketing site or automation while you focus on the core." },
      { q: "What happens when we hire engineers?", a: "They inherit clean, documented code and infrastructure. We hand over fully or stay on for design and growth." },
      { q: "Can you help with fundraising materials?", a: "Yes. Pitch decks, brand and a credible site are frequently part of pre-raise projects." },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

export const industryFaqs = [
  { q: "Why does industry matter for a website?", a: "Because each sector has its own conversion levers, compliance rules and customer habits. Industry-fluent pages convert at up to 13% versus 2–5% for generic templates." },
  { q: "What if my industry isn't listed?", a: "We adapt fast. Tell us about your market in the free audit and we'll show you how our approach applies before you commit." },
  { q: "Do you redesign existing sites or only build new?", a: "Both, roughly half and half. Rebuilds protect SEO, brand equity and existing customers while fixing what's broken." },
  { q: "Who actually works on my project?", a: "One accountable team across web, brand and AI. No outsourcing, no white-label markup." },
  { q: "How do we start?", a: "Book a call or request the free audit. You'll get a specific, prioritised plan whether or not you hire us." },
];
