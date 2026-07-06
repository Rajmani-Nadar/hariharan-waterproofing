import Image from "next/image";

export function Gallery({ items }: { items: Array<{ src: string; alt: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.alt} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
        </div>
      ))}
    </div>
  );
}
