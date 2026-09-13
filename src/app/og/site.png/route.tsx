import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return renderOg({
    eyebrow: "Web · Apps · AI Automation",
    lead: "We build the websites and AI systems that",
    accent: "surge your business forward",
  });
}
