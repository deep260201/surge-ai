export const site = {
  name: "Surge AI",
  tagline: "Surge. Innovate. Transform.",
  description:
    "Surge AI is a web design, development and AI automation agency. We build fast, scalable websites, apps and AI-powered systems for ambitious businesses.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://surgeai.example.com").replace(/\/$/, ""), // TODO: replace
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@surgeai.example.com", // TODO: replace
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  socials: {
    linkedin: "https://linkedin.com", // TODO: replace
    instagram: "https://instagram.com", // TODO: replace
    x: "https://x.com", // TODO: replace
  },
} as const;

export const whatsappHref = (message = "Hi Surge AI, I'd like to discuss a project.") =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
    : "/contact/";

export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;
