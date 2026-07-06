import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function CtaSection({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  secondaryHref = "/services",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="rounded-[2.25rem] border border-slate-200 bg-slate-950 px-8 py-16 text-white shadow-2xl sm:px-10 lg:px-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">{eyebrow}</p> : null}
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <AnimatedButton href={primaryHref}>Book free inspection</AnimatedButton>
          <a href={secondaryHref} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            View services <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
