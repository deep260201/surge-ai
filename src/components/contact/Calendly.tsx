import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site, whatsappHref } from "@/config/site";

export function Calendly() {
  if (!site.calendlyUrl) {
    return (
      <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-cream p-8 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper shadow-card">
          <CalendarDays className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold tracking-tight">Book a 30-minute call</h3>
        <p className="mt-2 max-w-xs text-sm text-muted">
          Online booking is being set up. Until then, message us on WhatsApp and we&apos;ll find a time.
        </p>
        <div className="mt-6">
          <Button href={whatsappHref("Hi Surge AI, I'd like to book a call.")} variant="secondary" arrow>
            Book via WhatsApp
          </Button>
        </div>
      </div>
    );
  }
  const url = `${site.calendlyUrl}${site.calendlyUrl.includes("?") ? "&" : "?"}hide_gdpr_banner=1&background_color=faf9f6&text_color=1a1a18&primary_color=0c0f0c`;
  return (
    <div className="h-full overflow-hidden rounded-3xl border border-line bg-paper shadow-card">
      <iframe title="Book a call with Surge AI" src={url} className="h-[44rem] w-full" loading="lazy" />
    </div>
  );
}
