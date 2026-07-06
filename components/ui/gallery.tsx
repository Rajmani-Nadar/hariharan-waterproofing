import Image from "next/image";

export function Gallery({ items }: { items: Array<{ src: string; alt: string; priority?: boolean }> }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.alt} className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_16px_60px_rgba(15,23,42,0.05)]">
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
          </div>
        </div>
      ))}
    </div>
  );
}
