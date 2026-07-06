import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Gallery } from "@/components/ui/gallery";
import { StructuredData } from "@/components/seo/structured-data";
import { CtaSection } from "@/components/ui/cta-section";

export const metadata = createMetadata({
  title: "Gallery — Waterproofing Work in Progress and Completion",
  description: "Browse a visual overview of waterproofing projects, detailing, and completed treatments.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Gallery",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Gallery" title="A visual record of careful preparation, precise application, and durable results." description="We document the journey from inspection through to finished protection so that every stage is transparent." />
          <div className="mt-10">
            <Gallery items={[{ src: "/assets/illustrations/project-riverside.svg", alt: "Roof waterproofing inspection" }, { src: "/assets/illustrations/project-harbor.svg", alt: "Basement waterproofing treatment" }, { src: "/assets/illustrations/project-cedar.svg", alt: "Terrace protection outcome" }]} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <CtaSection eyebrow="See more" title="If you want a closer look at our process, we can arrange a guided walkthrough." description="We can share project examples that reflect the system and approach best suited to your property." />
      </SectionWrapper>
    </PageShell>
  );
}
