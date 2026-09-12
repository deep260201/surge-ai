import { services } from "@/content/services";

const items = [...services.map((s) => s.title), "UI/UX Design", "E-commerce", "SaaS MVPs", "SEO & Growth"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line-dark bg-black py-5 text-cream">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap font-display text-lg font-semibold tracking-tight sm:text-2xl">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6">{item}</span>
            <span aria-hidden="true" className="text-cream/40">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
