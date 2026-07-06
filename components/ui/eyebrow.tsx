import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm font-medium uppercase tracking-[0.3em] text-slate-500", className)}>
      {children}
    </p>
  );
}
