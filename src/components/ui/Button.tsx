import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "primary-inverted" | "secondary-inverted" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-black text-cream hover:bg-ink",
  secondary: "border border-line text-ink hover:border-black hover:bg-black hover:text-cream",
  "primary-inverted": "bg-cream text-black hover:bg-paper",
  "secondary-inverted": "border border-line-dark text-cream hover:border-cream hover:bg-cream hover:text-black",
  ghost: "text-ink hover:bg-mist",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem] gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-[0.9375rem] gap-2",
};

type Props = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "children">;

export function Button({ variant = "primary", size = "md", arrow, href, className, children, ...rest }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap",
    "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />}
    </>
  );
  if (href) {
    const external = href.startsWith("http");
    return (
      <Link href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
