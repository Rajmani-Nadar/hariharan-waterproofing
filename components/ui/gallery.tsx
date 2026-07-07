"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery({ items }: { items: Array<{ src: string; alt: string; title?: string; priority?: boolean; category?: string; description?: string }> }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category ?? "Featured")))], [items]);
  const visibleItems = activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter);
  const selectedItem = selectedIndex !== null ? visibleItems[selectedIndex] : null;

  return (
    <>
      {categories.length > 1 ? (
        <div className="mb-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeFilter === category ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-900"}`}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <button
            key={item.alt}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white text-left shadow-[0_16px_60px_rgba(15,23,42,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={item.priority}
                loading={item.priority ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent transition duration-500 group-hover:from-slate-950/80" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                {item.category ? <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200">{item.category}</p> : null}
                {item.title ? <p className="mt-2 text-xl font-semibold text-white">{item.title}</p> : null}
                {item.description ? <p className="mt-2 line-clamp-2 text-sm text-slate-300">{item.description}</p> : null}
              </div>
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedItem ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Project preview">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950 text-white shadow-2xl">
            <button type="button" aria-label="Close preview" onClick={() => setSelectedIndex(null)} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur">
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => setSelectedIndex((current) => (current === null ? null : (current - 1 + visibleItems.length) % visibleItems.length))}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => setSelectedIndex((current) => (current === null ? null : (current + 1) % visibleItems.length))}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/10]">
              <Image src={selectedItem.src} alt={selectedItem.alt} fill className="object-cover" priority sizes="100vw" />
            </div>
            <div className="flex flex-col gap-4 p-6 sm:p-8 md:flex-row md:items-end md:justify-between">
              <div>
                {selectedItem.category ? <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">{selectedItem.category}</p> : null}
                {selectedItem.title ? <p className="mt-2 text-2xl font-semibold">{selectedItem.title}</p> : null}
                {selectedItem.description ? <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{selectedItem.description}</p> : null}
              </div>
              <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200">
                Full view
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
