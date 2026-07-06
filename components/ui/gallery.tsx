import Image from "next/image";

export function Gallery({ items }: { items: Array<{ src: string; alt: string; title?: string; priority?: boolean }> }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.alt} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_16px_60px_rgba(15,23,42,0.05)]">
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
            {item.title ? (
              <div className="absolute inset-0 bg-slate-950/0 transition duration-500 group-hover:bg-slate-950/50" />
            ) : null}
            {item.title ? (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="max-w-[85%] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {item.title}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
