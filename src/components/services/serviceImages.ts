import type { StaticImageData } from "next/image";
import ai from "@/assets/services/ai-bots-automation.webp";
import app from "@/assets/services/app-development.webp";
import branding from "@/assets/services/branding.webp";
import custom from "@/assets/services/custom-software.webp";
import marketing from "@/assets/services/marketing.webp";
import web from "@/assets/services/web-design-development.webp";

/** One illustration per service, keyed by the slug in src/content/services.ts. */
export const serviceImages: Record<string, { src: StaticImageData; alt: string }> = {
  "web-design-development": { src: web, alt: "Laptop showing a biotech website with a bold 'Better Therapeutics' headline" },
  "ai-bots-automation": { src: ai, alt: "Soft iridescent 3D blob" },
  "app-development": { src: app, alt: "Two phones showing a real estate assistant app" },
  "custom-software": { src: custom, alt: "Phone showing a marketplace app's Discover screen" },
  branding: { src: branding, alt: "Roll of green branded tape reading Boston Dynamics" },
  marketing: { src: marketing, alt: "Monitor showing a golf course analytics dashboard" },
};
