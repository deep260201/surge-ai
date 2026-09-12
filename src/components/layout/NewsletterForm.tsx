"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { submitForm } from "@/lib/forms";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem("website") as HTMLInputElement).value) return;
    setStatus("sending");
    const res = await submitForm("Newsletter", { email });
    if (res.ok) {
      setStatus("done");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(res.error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-sm">
      <label htmlFor="newsletter-email" className="mb-2 block text-sm text-cream/70">
        Insights on web, AI and growth. No spam.
      </label>
      <div className="flex items-center rounded-full border border-line-dark bg-black/40 p-1 focus-within:border-cream/60">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="h-9 flex-1 bg-transparent px-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
        />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-black transition-colors hover:bg-paper disabled:opacity-50"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {status === "done" && <p className="mt-2 text-xs text-cream/70">You&apos;re in. Talk soon.</p>}
      {status === "error" && <p className="mt-2 text-xs text-cream/70">{message}</p>}
    </form>
  );
}
