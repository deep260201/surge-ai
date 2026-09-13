"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
// zod/mini is the tree-shakable build: ~10x smaller than the classic `zod` entry for a form this size.
import * as z from "zod/mini";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { submitForm } from "@/lib/forms";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().check(z.trim(), z.minLength(2, "Please tell us your name.")),
  email: z.email("Please enter a valid email address."),
  company: z.optional(z.string().check(z.trim())),
  website: z.optional(z.string().check(z.trim())),
  service: z.string().check(z.minLength(1, "Pick the closest match.")),
  message: z.string().check(z.trim(), z.minLength(20, "A few sentences helps us prepare properly.")),
  audit: z.boolean(),
  botcheck: z.string().check(z.maxLength(0)),
});

type Values = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Values, string>>;

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-black focus:outline-none";
const label = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-muted";

export function ContactForm() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    message: "",
    audit: true,
    botcheck: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    if (parsed.data.botcheck) return;
    setStatus("sending");
    const res = await submitForm("Contact", {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company ?? "",
      website: parsed.data.website ?? "",
      service: parsed.data.service,
      message: parsed.data.message,
      free_audit: parsed.data.audit ? "Yes" : "No",
    });
    if (res.ok) {
      setStatus("done");
    } else {
      setStatus("error");
      setServerError(res.error);
    }
  }

  if (status === "done") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-black p-10 text-center text-cream">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream text-black">
          <Check className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 font-display text-3xl font-bold tracking-tight">
          Got it. <span className="accent-word">Talk soon.</span>
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/65">
          We reply to every enquiry within one business day. If it&apos;s urgent, WhatsApp is the fastest way to reach us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-paper p-6 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" className={cn(field, errors.name && "border-black")} value={values.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" placeholder="Your name" />
          {errors.name && <p className="mt-1.5 text-xs text-ink">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" type="email" className={cn(field, errors.email && "border-black")} value={values.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" placeholder="you@company.com" />
          {errors.email && <p className="mt-1.5 text-xs text-ink">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="company" className={label}>Company <span className="normal-case tracking-normal text-muted/70">(optional)</span></label>
          <input id="company" className={field} value={values.company} onChange={(e) => set("company", e.target.value)} autoComplete="organization" placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="website" className={label}>Current website <span className="normal-case tracking-normal text-muted/70">(optional)</span></label>
          <input id="website" className={field} value={values.website} onChange={(e) => set("website", e.target.value)} inputMode="url" placeholder="https://" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className={label}>What do you need?</label>
          <select id="service" className={cn(field, errors.service && "border-black")} value={values.service} onChange={(e) => set("service", e.target.value)}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure / several">Not sure / several</option>
          </select>
          {errors.service && <p className="mt-1.5 text-xs text-ink">{errors.service}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>Tell us about the project</label>
          <textarea id="message" rows={5} className={cn(field, "resize-y", errors.message && "border-black")} value={values.message} onChange={(e) => set("message", e.target.value)} placeholder="What are you building or rebuilding? What does better look like? Any deadline?" />
          {errors.message && <p className="mt-1.5 text-xs text-ink">{errors.message}</p>}
        </div>
        <label className="flex cursor-pointer items-start gap-3 sm:col-span-2">
          <input type="checkbox" checked={values.audit} onChange={(e) => set("audit", e.target.checked)} className="mt-0.5 h-4 w-4 accent-black" />
          <span className="text-sm leading-relaxed">
            <span className="font-medium">Include a free audit.</span>{" "}
            <span className="text-muted">We&apos;ll review your site, brand or workflow and send a prioritised plan, hire us or not.</span>
          </span>
        </label>
        <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" value={values.botcheck} onChange={(e) => set("botcheck", e.target.value)} className="hidden" aria-hidden="true" />
      </div>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">No spam, no obligation. Your details stay private.</p>
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
        </Button>
      </div>
      {status === "error" && (
        <p className="mt-4 rounded-xl bg-mist px-4 py-3 text-sm">
          {serverError} You can also email us directly or use WhatsApp.
        </p>
      )}
    </form>
  );
}
