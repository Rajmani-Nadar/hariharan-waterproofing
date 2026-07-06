"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function Testimonials({ items }: { items: Array<{ quote: string; author: string; role: string; location?: string }> }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
      {items.map((item) => {
        const initials = item.author
          .split(" ")
          .slice(0, 2)
          .map((part) => part[0])
          .join("")
          .toUpperCase();

        return (
          <motion.article
            key={item.author}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25 }}
            className="min-w-[290px] snap-start rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl md:min-w-0"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${item.author}-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Verified
              </span>
            </div>
            <Quote className="mt-6 h-8 w-8 text-slate-400" />
            <p className="mt-6 text-base leading-8 text-slate-700">“{item.quote}”</p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {initials}
              </div>
              <div>
                <p className="font-semibold text-slate-950">{item.author}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
                {item.location ? <p className="text-sm text-slate-500">{item.location}</p> : null}
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
