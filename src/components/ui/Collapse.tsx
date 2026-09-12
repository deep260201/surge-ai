import { cn } from "@/lib/utils";

/**
 * Height animation with no JS measuring and no animation library: the `.collapsible`
 * class in globals.css interpolates a CSS grid row from 0fr to 1fr. Content stays in
 * the DOM (so it is indexable and keeps its state) and is hidden from assistive tech
 * and tab order while closed.
 */
export function Collapse({
  open,
  id,
  className,
  children,
}: {
  open: boolean;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} data-open={open} inert={!open} className={cn("collapsible", className)}>
      <div>{children}</div>
    </div>
  );
}
