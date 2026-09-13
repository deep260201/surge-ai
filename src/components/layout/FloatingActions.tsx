"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { site, whatsappHref } from "@/config/site";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.4-.3Z" />
    </svg>
  );
}

const emailHref = `mailto:${site.email}?subject=${encodeURIComponent("Project enquiry")}`;

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mailto: only opens something if the visitor has a default mail app configured, which many
  // people don't (webmail users, mainly). Copying the address alongside it means the click always
  // does something useful, even when no mail app opens.
  const onEmailClick = () => {
    navigator.clipboard?.writeText(site.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-card transition-all hover:bg-mist",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <span className="relative">
        <span
          role="status"
          className={cn(
            "pointer-events-none absolute right-full top-1/2 mr-2.5 -translate-y-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1.5 text-xs font-medium text-cream shadow-card transition-all duration-200",
            copied ? "translate-x-0 opacity-100" : "translate-x-1 opacity-0",
          )}
        >
          {copied ? `Copied ${site.email}` : ""}
        </span>
        <a
          href={emailHref}
          onClick={onEmailClick}
          aria-label={`Email us at ${site.email}`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-card-hover transition-all hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-cream"
        >
          <Mail className="h-5 w-5" strokeWidth={1.75} />
        </a>
      </span>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-cream shadow-card-hover transition-transform hover:-translate-y-0.5"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
