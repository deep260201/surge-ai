import type { StaticImageData } from "next/image";
import consulting from "@/assets/industries/consulting.webp";
import ecommerce from "@/assets/industries/ecommerce-retail.webp";
import healthcare from "@/assets/industries/healthcare.webp";
import professionalServices from "@/assets/industries/professional-services.webp";
import realEstate from "@/assets/industries/real-estate.webp";
import restaurants from "@/assets/industries/restaurants-hospitality.webp";
import saas from "@/assets/industries/saas-startups.webp";

/** One photo per industry, keyed by the slug in src/content/industries.ts. */
export const industryImages: Record<string, { src: StaticImageData; alt: string }> = {
  "ecommerce-retail": { src: ecommerce, alt: "Small business owner taping up a parcel ready to ship" },
  healthcare: { src: healthcare, alt: "Clinic receptionist greeting an older patient at the front desk" },
  "real-estate": { src: realEstate, alt: "Estate agent handing house keys to a smiling couple in an empty home" },
  "restaurants-hospitality": { src: restaurants, alt: "Barista serving a cup of coffee across a café counter" },
  "professional-services": { src: professionalServices, alt: "Adviser meeting a client across a desk in a bright office" },
  consulting: { src: consulting, alt: "Consultant walking a team through a product strategy on a whiteboard" },
  "saas-startups": { src: saas, alt: "Two colleagues reviewing work on a laptop in a startup office" },
};
