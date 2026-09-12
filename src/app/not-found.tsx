import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { DotField } from "@/components/ui/DotField";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]">
        <DotField />
      </div>
      <div className="container-x relative text-center">
        <LogoMark className="mx-auto h-16 w-16 text-ink" />
        <p className="mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted">404</p>
        <h1 className="mt-3 font-display text-5xl font-bold tracking-[-0.035em] sm:text-7xl">
          This page <span className="accent-word">moved on.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">
          The link may be old or mistyped. Ironically, we fix this sort of thing for a living.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" arrow>Back to home</Button>
          <Button href="/contact/" variant="secondary" size="lg">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
