import { cn } from "@/lib/utils";

const tones = {
  paper: "bg-paper text-ink",
  cream: "bg-cream text-ink",
  black: "bg-black text-cream",
};

export function Section({
  tone = "paper",
  className,
  children,
  id,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}
