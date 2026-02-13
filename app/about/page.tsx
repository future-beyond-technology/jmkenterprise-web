import Link from "next/link";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustSection } from "@/components/sections/TrustSection";
import { VisualStory } from "@/components/sections/VisualStory";
import { companyInfo } from "@/lib/company";
import { getCategorySummaries } from "@/lib/industrial";
import { buildMetadata } from "@/lib/seo";

const principles = [
  {
    title: "Mission",
    description:
      "Simplify industrial procurement through technical clarity, reliable quality, and responsive commercial support."
  },
  {
    title: "Vision",
    description:
      "Become a preferred long-term B2B sourcing partner across fabrication and manufacturing ecosystems in India."
  },
  {
    title: "Operating Model",
    description:
      "Use-case led product mapping, standardized documentation, and repeatable monthly supply orchestration."
  }
];

export const metadata = buildMetadata({
  title: "About",
  description:
    "About JMK Enterprise, a corporate-grade B2B industrial supplier for welding consumables, machines, tools, and protective gear.",
  path: "/about",
  keywords: ["about jmk enterprise", "b2b industrial supplier", "welding procurement partner"]
});

export default function AboutPage() {
  const categories = getCategorySummaries();

  return (
    <>
      <section className="industrial-section-dark">
        <div className="industrial-container space-y-8">
          {/* Corporate positioning hero with legal/commercial identity highlights. */}
          <CinematicPageHero
            kicker="About JMK Enterprise"
            title="Built for Enterprise Procurement Teams that Need Predictable Supply Performance"
            description={`${companyInfo.companyName} operates as a B2B industrial supply partner delivering welding products, tools, and safety gear with strong technical-commercial coordination.`}
            image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=2000"
            imageAlt="Industrial strategy team in discussion"
            actions={[
              { href: "/products", label: "Explore Product Grid", variant: "primary" },
              { href: "/contact", label: "Contact Team", variant: "outline" }
            ]}
            stats={[
              { value: `${categories.length}`, label: "Category Verticals" },
              { value: "B2B", label: "Commercial Focus" },
              { value: companyInfo.legalDetails.gst, label: "GSTIN" },
              { value: companyInfo.legalDetails.iecCode, label: "IEC Code" }
            ]}
            priority
          />

          {/* Business pillars designed for quick executive-level scanning. */}
          <div className="grid gap-5 lg:grid-cols-3">
            {principles.map((item, index) => (
              <article key={item.title} className="insight-card">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                  Pillar {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>

          <article className="metal-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Legal & Business Identity</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Transparent, Documentation-Ready, Compliance-Aligned</h2>
            <div className="mt-4 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
              <p><span className="font-semibold text-zinc-100">Legal Name:</span> {companyInfo.legalDetails.legalName}</p>
              <p><span className="font-semibold text-zinc-100">Trade Name:</span> {companyInfo.legalDetails.tradeName}</p>
              <p><span className="font-semibold text-zinc-100">Constitution:</span> {companyInfo.legalDetails.constitution}</p>
              <p><span className="font-semibold text-zinc-100">UDYAM:</span> {companyInfo.legalDetails.udyamRegistrationNumber}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/dealer-inquiry" className="btn-primary">Start Procurement Discussion</Link>
              <Link href="/contact" className="btn-outline">Business Contact</Link>
            </div>
          </article>
        </div>
      </section>

      <VisualStory />
      <TrustSection />
      <Testimonials />
    </>
  );
}
