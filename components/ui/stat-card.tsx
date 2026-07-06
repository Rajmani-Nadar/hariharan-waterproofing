import { cn } from "@/lib/utils";

export function StatCard({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur", className)}>
      <p className="text-3xl font-semibold tracking-[-0.02em] text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-7 text-slate-600">{label}</p>
    </div>
  );
}
