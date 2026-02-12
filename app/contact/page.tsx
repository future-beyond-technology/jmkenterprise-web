import { ContactForm } from "@/components/forms/ContactForm";
import { companyInfo } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/site";

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
      <div className="industrial-container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="space-y-6 reveal-up">
          <header>
            <p className="accent-kicker">Business Information</p>
            <h1 className="section-title text-white">Connect with {companyInfo.companyName}</h1>
            <p className="mt-4 text-zinc-300">
              Reach our team for product sourcing, dealership inquiries, and bulk industrial requirements.
            </p>
          </header>

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
                <span className="font-semibold text-white">Phone:</span>{" "}
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="transition hover:text-white">
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a href={`mailto:${companyInfo.email}`} className="transition hover:text-white">
                  {companyInfo.email}
                </a>
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
                  <span className="font-semibold text-zinc-100">Constitution of Business:</span>{" "}
                  {companyInfo.legalDetails.constitution}
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">GSTIN:</span>{" "}
                  {companyInfo.legalDetails.gst}
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">MSME / UDYAM Registration No:</span>{" "}
                  {companyInfo.legalDetails.udyamRegistrationNumber}
                </p>
                <p>
                  <span className="font-semibold text-zinc-100">IEC Code:</span>{" "}
                  {companyInfo.legalDetails.iecCode}
                </p>
              </div>
            </section>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle mt-5">
              Chat on WhatsApp
            </a>
          </article>

          <article className="metal-panel overflow-hidden">
            <div className="border-b border-zinc-700 px-6 py-4">
              <h2 className="text-lg font-semibold uppercase tracking-[0.11em] text-white">Location Map</h2>
            </div>
            {hasValidMapUrl ? (
              <iframe
                title={`${companyInfo.companyName} Location`}
                src={companyInfo.googleMapsEmbedUrl}
                className="h-72 w-full border-0"
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

        <ContactForm />
      </div>
    </section>
  );
}
