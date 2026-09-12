export type Role = {
  title: string;
  type: string;
  location: string;
  summary: string;
};

// TODO: replace with real openings, or leave empty to show the speculative-application card only.
export const roles: Role[] = [
  {
    title: "Full-stack Developer (Next.js)",
    type: "Full-time / Contract",
    location: "Remote",
    summary: "Ship websites and web apps for clients across e-commerce, healthcare and SaaS. Strong React and TypeScript; bonus for Shopify or Supabase.",
  },
  {
    title: "AI Automation Engineer",
    type: "Contract",
    location: "Remote",
    summary: "Design and build workflows and AI agents with n8n, Make and LLM APIs. You care about reliability and clean hand-offs more than demos.",
  },
];

export const perks = [
  "Remote-first, async by default",
  "Fixed-scope projects, no chaos",
  "Senior team, real ownership",
  "AI tooling budget",
  "Learning time every week",
  "Work you can put your name on",
];
