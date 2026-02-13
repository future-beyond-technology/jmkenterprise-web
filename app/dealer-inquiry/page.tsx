import Link from "next/link";
import { Suspense } from "react";
import { InquiryFormWithSearchParams } from "@/components/forms/InquiryForm";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dealer Inquiry",
  description:
    "Submit your dealer or bulk inquiry for welding machines, consumables, and hardware products from JMK Enterprise.",
  path: "/dealer-inquiry",
  keywords: ["dealer inquiry", "bulk welding products", "industrial supplier inquiry"]
});

const inquirySteps = [
  {
    title: "Share Requirement",
    detail: "Mention product category, model preference, and monthly demand estimate."
  },
  {
    title: "Commercial Evaluation",
    detail: "Our team aligns product options with pricing slab and dispatch commitment."
  },
  {
    title: "Finalize Supply",
    detail: "You receive quotation clarity, next-step confirmation, and support channel details."
  }
];

export default function DealerInquiryPage() {
  return (
    <section className="industrial-section-dark">
      <div className="industrial-container max-w-6xl space-y-8">
        <CinematicPageHero
          kicker="Dealer Inquiry"
          title="Request B2B Pricing and Build a Reliable Monthly Supply Plan"
          description="Submit your demand profile once and receive product match recommendations, commercial direction, and implementation support from our team."
          image="https://images.pexels.com/photos/8297015/pexels-photo-8297015.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Procurement team reviewing industrial project data"
          actions={[
            { href: "/products", label: "View Products", variant: "outline" },
            { href: "/contact", label: "Talk to Sales", variant: "subtle" }
          ]}
          stats={[
            { value: "B2B", label: "Dealer & Bulk Focus" },
            { value: "Category-Wise", label: "Requirement Mapping" },
            { value: "Commercial", label: "Quote Structuring" },
            { value: "Support", label: "Post-Order Guidance" }
          ]}
          priority
        />

        <div className="stagger-grid grid gap-4 md:grid-cols-3">
          {inquirySteps.map((item, index) => (
            <article key={item.title} className="process-card">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-orange-300">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Suspense
              fallback={
                <div className="metal-panel p-6 text-sm text-zinc-300">Loading inquiry form...</div>
              }
            >
              <InquiryFormWithSearchParams />
            </Suspense>
          </div>

          <aside className="space-y-4">
            <article className="metal-panel p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                To Receive Better Quotes
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Keep These Details Ready</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Product names or industrial application type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Estimated monthly or project quantity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Preferred dispatch location and timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Any required compliance or specification note</span>
                </li>
              </ul>
            </article>

            <article className="metal-panel p-5 text-sm text-zinc-200">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Need Immediate Assistance?</p>
              <p className="mt-2 leading-7 text-zinc-300">
                If your requirement is urgent, share it directly with our team and we will coordinate
                fast support for product shortlist and commercial discussion.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/contact" className="btn-outline">
                  Contact Team
                </Link>
                <Link href="/products" className="btn-subtle">
                  Browse Categories
                </Link>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
