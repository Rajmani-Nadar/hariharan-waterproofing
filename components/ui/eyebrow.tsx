import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm font-semibold uppercase tracking-[0.28em] text-slate-500", className)}>
      {children}
    </p>
  );
}
