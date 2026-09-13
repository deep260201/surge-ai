import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function GET() {
  return renderOg({
    eyebrow: "Web · Apps · AI Automation",
    lead: "Websites and AI systems built to",
    accent: "surge your business forward",
  });
}
