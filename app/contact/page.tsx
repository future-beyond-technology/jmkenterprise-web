import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { companyInfo } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact JMK Enterprise for industrial welding and hardware supply inquiries, business support, and product information.",
  path: "/contact",
  keywords: ["contact jmk enterprise", "welding supplier contact", "industrial inquiry support"]
});

export default function ContactPage() {
  const hasValidMapUrl = companyInfo.googleMapsEmbedUrl.startsWith("http");

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-8">
        <CinematicPageHero
          kicker="Business Contact"
          title={`Connect with ${companyInfo.companyName} for Fast B2B Response`}
          description="Share your product requirements, target quantity, and delivery location. Our team will guide you with suitable product options and commercial clarity."
          image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Business team discussing procurement on laptop"
          actions={[
            { href: "/dealer-inquiry", label: "Submit Dealer Inquiry", variant: "primary" },
            { href: whatsappUrl, label: "WhatsApp", variant: "subtle" }
          ]}
          stats={[
            { value: "Phone", label: companyInfo.phone },
            { value: "Email", label: companyInfo.email },
            { value: "Hours", label: siteConfig.businessHours },
            { value: "Response", label: "Within Business Day" }
          ]}
          priority
        />

        <div className="stagger-grid grid gap-4 md:grid-cols-3">
          <article className="channel-card">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-400">Call</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100">{companyInfo.phone}</p>
            <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="mt-3 inline-flex text-sm text-zinc-300 underline">
              Start Call
            </a>
          </article>
          <article className="channel-card">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-400">Email</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100 break-words">{companyInfo.email}</p>
            <a href={`mailto:${companyInfo.email}`} className="mt-3 inline-flex text-sm text-zinc-300 underline">
              Send Email
            </a>
          </article>
          <article className="channel-card">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-400">WhatsApp</p>
            <p className="mt-2 text-lg font-semibold text-zinc-100">Instant Inquiry</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm text-zinc-300 underline">
              Open WhatsApp
            </a>
          </article>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <article className="metal-panel p-6 text-sm text-zinc-200">
              <h2 className="text-lg font-semibold uppercase tracking-[0.11em] text-white">Company Details</h2>
              <div className="mt-4 space-y-3">
                <p>
                  <span className="font-semibold text-white">Company:</span> {companyInfo.companyName}
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span> {companyInfo.address}
                </p>
                <p>
                  <span className="font-semibold text-white">Business Type:</span> {companyInfo.businessType}
                </p>
              </div>

              <section className="mt-6 rounded-lg border border-zinc-700 bg-[#111315] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-white">
                  Legal Business Information
                </h3>
                <div className="mt-3 grid gap-3 text-sm text-zinc-300 lg:grid-cols-2">
                  <p>
                    <span className="font-semibold text-zinc-100">Legal Name:</span>{" "}
                    {companyInfo.legalDetails.legalName}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-100">Trade Name:</span>{" "}
                    {companyInfo.legalDetails.tradeName}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-100">Constitution:</span>{" "}
                    {companyInfo.legalDetails.constitution}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-100">GSTIN:</span>{" "}
                    {companyInfo.legalDetails.gst}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-100">UDYAM:</span>{" "}
                    {companyInfo.legalDetails.udyamRegistrationNumber}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-100">IEC Code:</span>{" "}
                    {companyInfo.legalDetails.iecCode}
                  </p>
                </div>
              </section>

              <div className="mt-5 flex flex-wrap gap-2">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
                  Chat on WhatsApp
                </a>
                <Link href="/dealer-inquiry" className="btn-outline">
                  Dealer Inquiry
                </Link>
              </div>
            </article>

            <article className="metal-panel overflow-hidden">
              <div className="border-b border-zinc-700 px-6 py-4">
                <h2 className="text-lg font-semibold uppercase tracking-[0.11em] text-white">Location Map</h2>
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

          <div className="space-y-6 reveal-up">
            <article className="metal-panel p-5 text-sm text-zinc-200">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                Before You Submit
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Send Better Inquiry, Get Faster Quote</h2>
              <ul className="mt-4 space-y-2 text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Mention product category and expected monthly demand.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Include delivery location and preferred timeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                  <span>Add technical specs if model compatibility matters.</span>
                </li>
              </ul>
            </article>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
