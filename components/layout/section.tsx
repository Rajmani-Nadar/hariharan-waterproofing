import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types/site";

export function Section({ id, theme = "default", className, children }: SectionProps) {
  const themeClasses = {
    default: "bg-white text-slate-950",
    muted: "bg-slate-50 text-slate-950",
    accent: "bg-slate-950 text-white",
  } as const;

  return (
    <section id={id} className={cn("w-full px-6 py-20 sm:px-8 lg:px-12", themeClasses[theme], className)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col">{children}</div>
    </section>
  );
}
