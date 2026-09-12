import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return renderOg({
    eyebrow: "Web · Apps · AI Automation",
    lead: "We build websites and AI systems that",
    accent: "move business forward.",
  });
}
