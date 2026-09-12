import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/content/home";

export function Stats() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-x">
        <dl className="grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="flex flex-col-reverse px-2 py-10 text-center sm:py-14">
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-4xl font-bold tracking-[-0.04em] tabular-nums sm:text-6xl">
                <CountUp value={s.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
