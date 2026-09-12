/**
 * Scroll-reveal wrapper. Renders plain markup; the inline observer in
 * src/app/layout.tsx animates `[data-reveal]` elements into view with the
 * Web Animations API as soon as the HTML is parsed, so above-the-fold content
 * never waits for React to hydrate. Without scripting the content is simply visible.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
}: {
  as?: "div" | "li" | "section" | "article";
  children: React.ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
}) {
  return (
    <Tag data-reveal={delay ? String(delay) : ""} className={className}>
      {children}
    </Tag>
  );
}
