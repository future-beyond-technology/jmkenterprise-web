import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { companyInfo } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Connect with JMK Enterprise for technical consultation, pricing support, and B2B industrial procurement requirements.",
  path: "/contact",
  keywords: ["contact jmk enterprise", "enterprise welding support", "industrial quote request"]
});

export default function ContactPage() {
  const hasValidMapUrl = companyInfo.googleMapsEmbedUrl.startsWith("http");

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-8">
        {/* Contact hero sets communication channels and response expectations. */}
        <CinematicPageHero
          kicker="Contact & Conversion"
          title="Connect with an Enterprise-Focused Industrial Sales Team"
          description="Get technical recommendations, standard alignment support, and procurement-ready commercial guidance."
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Business team discussing industrial procurement"
          actions={[
            { href: "/dealer-inquiry", label: "Dealer Inquiry", variant: "primary" },
            { href: whatsappUrl, label: "WhatsApp", variant: "subtle" }
          ]}
          stats={[
            { value: companyInfo.phone, label: "Sales Phone" },
            { value: companyInfo.email, label: "Business Email" },
            { value: siteConfig.businessHours, label: "Working Hours" },
            { value: "B2B", label: "Enterprise Support" }
          ]}
          priority
        />

        {/* Quick channel cards reduce friction for urgent enterprise buyers. */}
        <div className="grid gap-4 md:grid-cols-3">
          <article className="channel-card">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Call</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100">{companyInfo.phone}</p>
            <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="mt-2 inline-flex text-sm text-orange-300 underline">
              Start Call
            </a>
          </article>
          <article className="channel-card">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Email</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100 break-all">{companyInfo.email}</p>
            <a href={`mailto:${companyInfo.email}`} className="mt-2 inline-flex text-sm text-orange-300 underline">
              Send Email
            </a>
          </article>
          <article className="channel-card">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">WhatsApp</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100">Instant Response</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm text-orange-300 underline">
              Open Chat
            </a>
          </article>
        </div>

        {/* Dual-column layout keeps business trust info next to the lead form. */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <article className="metal-panel p-6 text-sm text-zinc-200">
              <h2 className="text-lg font-semibold uppercase tracking-[0.1em] text-white">Company Details</h2>
              <div className="mt-4 space-y-2 text-zinc-300">
                <p><span className="font-semibold text-zinc-100">Company:</span> {companyInfo.companyName}</p>
                <p><span className="font-semibold text-zinc-100">Address:</span> {companyInfo.address}</p>
                <p><span className="font-semibold text-zinc-100">Business Type:</span> {companyInfo.businessType}</p>
                <p><span className="font-semibold text-zinc-100">Trade Name:</span> {companyInfo.legalDetails.tradeName}</p>
                <p><span className="font-semibold text-zinc-100">GSTIN:</span> {companyInfo.legalDetails.gst}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/products" className="btn-outline">Browse Products</Link>
                <Link href="/about" className="btn-subtle">About Business</Link>
              </div>
            </article>

            <article className="metal-panel overflow-hidden">
              <div className="border-b border-zinc-700 px-6 py-4">
                <h2 className="text-lg font-semibold uppercase tracking-[0.1em] text-white">Location Map</h2>
              </div>
              {hasValidMapUrl ? (
                <iframe
                  title={`${companyInfo.companyName} Location`}
                  src={companyInfo.googleMapsEmbedUrl}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="p-6 text-sm text-zinc-300">
                  <p>Map URL is currently unavailable.</p>
                  <a
                    href={companyInfo.googleMapsPlaceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-zinc-100 underline"
                  >
                    Open location in Google Maps
                  </a>
                </div>
              )}
            </article>
          </div>

          <LeadForm title="Send Enterprise Inquiry" subtitle="Submit this form for a fast technical-commercial response." />
        </div>
      </div>
    </section>
  );
}
