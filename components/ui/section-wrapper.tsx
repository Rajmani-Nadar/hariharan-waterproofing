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
    <section id={id} className={cn("relative w-full", padded && "px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28 xl:px-12", className)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col">{children}</div>
    </section>
  );
}
