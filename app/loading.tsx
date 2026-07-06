export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_70%)]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-300 border-t-slate-950" />
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Preparing experience</p>
      </div>
    </main>
  );
}
