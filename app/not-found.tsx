import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">The page you were looking for is unavailable.</h1>
      <p className="mt-3 max-w-md text-base text-slate-600">
        The path may have moved or the resource no longer exists. Return home and explore the experience.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
        Return home
      </Link>
    </main>
  );
}
