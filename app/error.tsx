"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">Unexpected issue</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Something went wrong.</h1>
      <p className="mt-3 max-w-md text-base text-slate-600">
        The experience interrupted unexpectedly. A quick refresh usually resolves this.
      </p>
      <div className="mt-8 flex gap-3">
        <button
          onClick={reset}
          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-50"
        >
          Try again
        </button>
        <Link href="/" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
          Return home
        </Link>
      </div>
    </main>
  );
}
