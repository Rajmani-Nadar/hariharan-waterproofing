import { createMetadata } from "@/lib/metadata";
import { PageShell } from "@/components/sections/page-shell";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms for engaging Northstar Waterproofing for inspection and treatment services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PageShell>
      <SectionWrapper className="pt-20">
        <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-12 lg:p-16">
          <SectionHeading eyebrow="Terms" title="Terms of engagement for inspection and waterproofing services." description="These terms outline the basis on which we provide service recommendations and project execution." />
          <div className="mt-10 space-y-6 text-sm leading-8 text-slate-600">
            <p>All site assessments are provided as a professional service and may be subject to site conditions, access limitations, and material availability.</p>
            <p>Prices and timelines are discussed in advance and may change if hidden damage, structural complications, or additional scope is revealed during execution.</p>
            <p>We are committed to completing work with due care, professionalism, and clear communication throughout the project period.</p>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
