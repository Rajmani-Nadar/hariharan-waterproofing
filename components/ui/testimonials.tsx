import { Quote } from "lucide-react";

export function Testimonials({ items }: { items: Array<{ quote: string; author: string; role: string }> }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.author} className="rounded-[1.5rem] border border-slate-200/80 bg-white p-8 shadow-[0_16px_60px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
          <Quote className="h-8 w-8 text-slate-400" />
          <p className="mt-6 text-sm leading-8 text-slate-700">“{item.quote}”</p>
          <div className="mt-8">
            <p className="font-semibold text-slate-950">{item.author}</p>
            <p className="text-sm text-slate-500">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
