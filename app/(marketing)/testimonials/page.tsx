import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Testimonials } from "@/components/ui/testimonials";
import { testimonials } from "@/lib/content";
import { StructuredData } from "@/components/seo/structured-data";
import { CtaSection } from "@/components/ui/cta-section";

export const metadata = createMetadata({
  title: "Testimonials — Client Feedback on Premium Waterproofing Work",
  description: "Read what homeowners and property managers say about our waterproofing services, communication, and results.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <PageShell>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Testimonials",
      }} />
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Testimonials" title="Trusted by people who value calm, reliable execution." description="We aim to make every project feel considered, clear, and professionally managed." />
          <div className="mt-10">
            <Testimonials items={testimonials} />
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-white/70">
        <CtaSection eyebrow="Share your experience" title="If you are planning a project, we would be happy to discuss the right solution with you." description="Our team will explain the treatment plan and answer questions with clarity from the start." />
      </SectionWrapper>
    </PageShell>
  );
}
