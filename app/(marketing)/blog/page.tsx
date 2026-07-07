import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { posts } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";
import { CtaSection } from "@/components/ui/cta-section";

export const metadata = createMetadata({
  title: "Blog — Waterproofing Knowledge and Building Care Insights",
  description: "Read practical articles about leaks, maintenance, waterproofing systems, and long-term building protection.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "HN Waterproofing Blog",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Blog" title="Well-written guidance for property owners and building professionals." description="We share knowledge that helps clients make informed decisions about moisture, maintenance, and building protection." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <GlassCard key={post.slug} className="p-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{post.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">{post.excerpt}</p>
                <p className="mt-5 text-sm font-medium text-slate-700">{post.date}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <CtaSection eyebrow="Need a specific answer?" title="Ask us for a tailored explanation based on your building and its current condition." description="We can provide guidance that is practical, technical, and clear." />
      </SectionWrapper>
    </PageShell>
  );
}
