import { ContactForm } from "@/components/forms/ContactForm";
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
  return (
    <section className="industrial-section-dark">
      <div className="industrial-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="reveal-up">
          <p className="accent-kicker">Contact</p>
          <h1 className="section-title text-white">Talk to Our Industrial Supply Team</h1>
          <p className="mt-4 text-zinc-300">
            Reach out for product availability, dealership discussions, or urgent procurement
            requirements.
          </p>

          <div className="metal-panel mt-8 space-y-4 p-6 text-sm text-zinc-200">
            <p>
              <span className="font-semibold text-white">Phone:</span> {siteConfig.phone}
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span> {siteConfig.email}
            </p>
            <p>
              <span className="font-semibold text-white">Address:</span> {siteConfig.address}
            </p>
            <p>
              <span className="font-semibold text-white">Business Hours:</span>{" "}
              {siteConfig.businessHours}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
