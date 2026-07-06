import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment, className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
