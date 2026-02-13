import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { buildMetadata } from "@/lib/seo";

const steps = [
  {
    title: "Capture Requirement",
    detail: "Collect category, standard, and demand details through a guided multi-step form."
  },
  {
    title: "Technical Mapping",
    detail: "Shortlist suitable products based on process, application, and industry condition."
  },
  {
    title: "Commercial Structuring",
    detail: "Share enterprise quotation support, lead time guidance, and supply continuity model."
  }
];

export const metadata = buildMetadata({
  title: "Dealer Inquiry",
  description:
    "Multi-step enterprise inquiry flow for B2B buyers, dealers, and project procurement teams.",
  path: "/dealer-inquiry",
  keywords: ["dealer inquiry", "enterprise lead form", "industrial quotation request"]
});

export default function DealerInquiryPage() {
  return (
    <section className="industrial-section-dark">
      <div className="industrial-container max-w-6xl space-y-8">
        {/* Inquiry hero frames this page as a structured enterprise intake experience. */}
        <CinematicPageHero
          kicker="Enterprise Inquiry"
          title="Request Structured B2B Quotation and Product Mapping"
          description="Designed for procurement managers, dealer partners, and project buyers handling recurring or bulk industrial requirements."
          image="https://images.pexels.com/photos/8297015/pexels-photo-8297015.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Industrial team reviewing project workflow"
          actions={[
            { href: "/products", label: "Open Product Grid", variant: "outline" },
            { href: "/contact", label: "Contact Team", variant: "subtle" }
          ]}
          stats={[
            { value: "3-Step", label: "Guided Lead Capture" },
            { value: "B2B", label: "Dealer Focus" },
            { value: "Spec-led", label: "Technical Matching" },
            { value: "Quote", label: "Commercial Clarity" }
          ]}
          priority
        />

        {/* Step cards explain exactly how requirements become a commercial response. */}
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="process-card">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-orange-300">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <LeadForm title="Dealer & Bulk Inquiry Form" subtitle="Submit complete details to receive an enterprise-ready response." />

          <article className="metal-panel p-6 text-sm text-zinc-300">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-orange-300">For Faster Response</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Keep These Inputs Ready</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" /><span>Product code or category + expected monthly volume</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" /><span>Application condition and required standards</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" /><span>Delivery location and target timeline</span></li>
              <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" /><span>Commercial preference (project / recurring / dealer)</span></li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/contact" className="btn-outline">Talk to Sales Team</Link>
              <Link href="/about" className="btn-subtle">Know Our Process</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
