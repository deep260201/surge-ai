import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-12 font-display text-2xl font-bold tracking-tight sm:text-3xl" {...props} />,
    h3: (props) => <h3 className="mt-8 font-display text-xl font-semibold tracking-tight" {...props} />,
    p: (props) => <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg" {...props} />,
    ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed sm:text-lg" {...props} />,
    ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-base leading-relaxed sm:text-lg" {...props} />,
    li: (props) => <li className="pl-1" {...props} />,
    a: ({ href = "", ...props }) =>
      href.startsWith("/") ? (
        <Link href={href} className="font-medium underline underline-offset-4" {...props} />
      ) : (
        <a href={href} className="font-medium underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />
      ),
    blockquote: (props) => (
      <blockquote className="mt-8 border-l-2 border-black pl-6 font-display text-xl font-medium leading-snug tracking-tight sm:text-2xl" {...props} />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    hr: () => <hr className="my-12 border-line" />,
    code: (props) => <code className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.9em]" {...props} />,
    pre: (props) => <pre className="mt-6 overflow-x-auto rounded-2xl bg-black p-5 text-sm text-cream [&_code]:bg-transparent [&_code]:p-0" {...props} />,
    ...components,
  };
}
