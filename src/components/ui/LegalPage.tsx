import { Eyebrow } from "./Eyebrow";

export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="container-x pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.035em] sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated {updated}</p>
        <div className="mt-10 border-t border-line pt-2 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_li]:pl-1 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-ink [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_ul]:leading-relaxed">
          {children}
        </div>
      </div>
    </article>
  );
}
