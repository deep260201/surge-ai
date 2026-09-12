export type Testimonial =
  | { type: "quote"; quote: string; name: string; role: string; company: string; tone?: "light" | "dark" }
  | { type: "logo"; company: string; quote: string }
  | { type: "stat"; value: string; label: string; company: string };

// TODO: replace with real testimonials.
export const testimonials: Testimonial[] = [
  {
    type: "quote",
    quote: "We gave them an aggressive deadline and they still delivered more design iterations and options than we asked for.",
    name: "Priya Shah",
    role: "Founder",
    company: "Northwind",
  },
  { type: "logo", company: "Clearpath Clinics", quote: "Our no-shows dropped by more than half in the first quarter." },
  {
    type: "quote",
    quote: "Very few teams can make software look this good and work this well. Surge AI did both, on time.",
    name: "Daniel Okafor",
    role: "Head of Product",
    company: "Stackline",
    tone: "dark",
  },
  { type: "stat", value: "+38%", label: "conversion rate after the redesign", company: "Northwind" },
  {
    type: "quote",
    quote: "The automation they built quietly removed about fifteen hours of admin a week from my team.",
    name: "Sarah Lindqvist",
    role: "Operations Director",
    company: "Meridian Advisory",
  },
  { type: "logo", company: "Harbor Realty", quote: "Leads now reach the right agent in under a minute." },
  {
    type: "quote",
    quote: "I can't believe they shipped the whole ordering app in six weeks. Our customers love it.",
    name: "Marco Bellini",
    role: "Owner",
    company: "Ember Kitchen",
  },
  {
    type: "quote",
    quote: "Clear communication, honest timelines, no surprises. Exactly what we needed from an agency.",
    name: "Aisha Rahman",
    role: "Marketing Lead",
    company: "Clearpath Clinics",
  },
  { type: "stat", value: "3.1x", label: "qualified leads after launch", company: "Harbor Realty" },
  {
    type: "quote",
    quote: "They showed the designs to our long-time customers and people were smiling ear to ear.",
    name: "Tom Whitaker",
    role: "Co-founder",
    company: "Stackline",
    tone: "dark",
  },
  { type: "logo", company: "Meridian Advisory", quote: "The rebrand finally matches the calibre of our work." },
  {
    type: "quote",
    quote: "We had a long list of detailed requirements and they met every one of them without fuss.",
    name: "Elena Petrova",
    role: "CTO",
    company: "Northwind",
  },
];
