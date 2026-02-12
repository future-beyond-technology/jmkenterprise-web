import { Suspense } from "react";
import { InquiryFormWithSearchParams } from "@/components/forms/InquiryForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dealer Inquiry",
  description:
    "Submit your dealer or bulk inquiry for welding machines, consumables, and hardware products from JMK Enterprise.",
  path: "/dealer-inquiry",
  keywords: ["dealer inquiry", "bulk welding products", "industrial supplier inquiry"]
});

export default function DealerInquiryPage() {
  return (
    <section className="industrial-section-dark">
      <div className="industrial-container max-w-5xl">
        <header className="reveal-up">
          <p className="accent-kicker">Dealer Inquiry</p>
          <h1 className="section-title text-white">Request B2B Pricing & Dealership Support</h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Share your expected volumes and preferred categories. Our team will respond with
            product recommendations, commercial terms, and next steps.
          </p>
        </header>

        <div className="mt-8">
          <Suspense
            fallback={
              <div className="metal-panel p-6 text-sm text-zinc-300">Loading inquiry form...</div>
            }
          >
            <InquiryFormWithSearchParams />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
