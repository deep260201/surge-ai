import type { Metadata } from "next";
import { Bento } from "@/components/home/Bento";
import { FAQ } from "@/components/home/FAQ";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { FinalCTA } from "@/components/home/FinalCTA";
import { FreeAudit } from "@/components/home/FreeAudit";
import { Hero } from "@/components/home/Hero";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { Marquee } from "@/components/home/Marquee";
import { Process } from "@/components/home/Process";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBadges } from "@/components/home/TrustBadges";
import { TwoDoors } from "@/components/home/TwoDoors";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `${site.name} — Web Design, Development & AI Automation Agency`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesCarousel />
      <TwoDoors />
      <FeaturedWork />
      <Bento />
      <Testimonials />
      <IndustriesStrip />
      <Process />
      <TrustBadges />
      <FreeAudit />
      <FAQ />
      <FinalCTA />
    </>
  );
}
