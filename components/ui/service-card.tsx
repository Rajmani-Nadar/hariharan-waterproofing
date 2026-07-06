import { ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  title,
  description,
  points,
  icon,
  className,
}: {
  title: string;
  description: string;
  points?: string[];
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl", className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        {icon ?? <ShieldCheck className="h-6 w-6" />}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {points?.length ? (
        <ul className="mt-6 space-y-2 text-sm text-slate-600">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-900" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900">
        Explore solution <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </div>
  );
}
