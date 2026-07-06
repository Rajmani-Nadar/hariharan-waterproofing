import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export const metadata = createMetadata({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
});

export default function NotFoundPage() {
  return (
    <PageShell>
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-10 text-center shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-slate-950">The page you are looking for is unavailable.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-600">The route may have changed or the page may no longer exist. Return to the homepage and continue exploring our services.</p>
          <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white">Return home</Link>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
