import { Briefcase, ChartLine, Cpu, House, Stethoscope, Store, UtensilsCrossed, type LucideIcon } from "lucide-react";

export const industryIcons: Record<string, LucideIcon> = {
  "ecommerce-retail": Store,
  healthcare: Stethoscope,
  "real-estate": House,
  "restaurants-hospitality": UtensilsCrossed,
  "professional-services": Briefcase,
  consulting: ChartLine,
  "saas-startups": Cpu,
};
