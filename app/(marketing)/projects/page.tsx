import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { projects } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";
import { CtaSection } from "@/components/ui/cta-section";

export const metadata = createMetadata({
  title: "Projects — Waterproofing Case Studies and Completed Builds",
  description: "Review recent waterproofing projects across residential and commercial properties with durable, high-performance outcomes.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Projects" title="Completed work with a clear focus on durability and restraint." description="Each project reflects a thoughtful response to the site, the building, and the moisture problem at hand." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <GlassCard key={project.title} className="p-6">
                <div className="h-40 rounded-[1.25rem] border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(15,76,92,0.14),transparent_45%),linear-gradient(135deg,#f7f4ea,#e9ecef)]" />
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{project.type}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                <p className="mt-4 text-sm font-medium text-slate-700">{project.location}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <CtaSection eyebrow="Discuss your project" title="Bring us your building challenge and we will help you shape the right protection strategy." description="We are comfortable working with homeowners, architects, property managers, and commercial teams." />
      </SectionWrapper>
    </PageShell>
  );
}
