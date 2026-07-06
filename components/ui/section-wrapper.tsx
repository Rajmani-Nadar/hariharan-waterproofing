import { cn } from "@/lib/utils";

export function SectionWrapper({
  children,
  className,
  id,
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  padded?: boolean;
}) {
  return (
    <section id={id} className={cn("relative w-full", padded && "px-6 py-20 sm:px-8 lg:px-12 lg:py-28", className)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col">{children}</div>
    </section>
  );
}
