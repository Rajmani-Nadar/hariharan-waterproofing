import { cn } from "@/lib/utils";

export function Timeline({ items }: { items: Array<{ title: string; description: string }> }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-slate-200" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.title} className="relative flex gap-5">
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-900">
              {index + 1}
            </div>
            <div className={cn("rounded-[1.35rem] border border-slate-200/80 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.04)]", index === items.length - 1 ? "" : "") }>
              <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
