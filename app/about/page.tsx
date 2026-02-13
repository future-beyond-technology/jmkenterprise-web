import Image from "next/image";
import Link from "next/link";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { getCategories } from "@/lib/catalog";
import { companyInfo } from "@/lib/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About JMK Enterprise",
  description:
    "Learn about JMK Enterprise mission, vision, infrastructure, and quality-driven approach as an industrial welding and hardware supplier.",
  path: "/about",
  keywords: ["about jmk enterprise", "industrial supplier mission", "welding hardware infrastructure"]
});

const principles = [
  {
    title: "Mission",
    description:
      "To simplify industrial procurement by delivering high-performing welding and hardware solutions with reliability, technical clarity, and faster response time."
  },
  {
    title: "Vision",
    description:
      "To become a preferred B2B supply partner for welding, consumables, and hardware in India through long-term customer trust and operational consistency."
  },
  {
    title: "Infrastructure",
    description:
      "Organized inventory planning, category-based stocking, and dispatch coordination designed to support recurring dealer and project orders."
  }
];

const executionModel = [
  {
    step: "01",
    title: "Requirement Discovery",
    description:
      "We assess use-case, duty cycle, budget, and dispatch timelines before recommending product sets."
  },
  {
    step: "02",
    title: "Commercial Planning",
    description:
      "Quotation structure is prepared around monthly demand, category mix, and supply continuity."
  },
  {
    step: "03",
    title: "Order Fulfilment",
    description:
      "Dispatch, documentation, and post-order support are aligned for repeat industrial buying cycles."
  }
];

const certifications = [
  "ISO-oriented process compliance framework",
  "GST compliant invoicing and documentation support",
  "Quality-checked product dispatch workflow",
  "Batch traceability for key consumable lines",
  "Dealer onboarding and account verification SOP",
  "Structured after-sales support process"
];

export default function AboutPage() {
  const categories = getCategories();
  const totalProducts = categories.reduce((count, category) => count + category.products.length, 0);

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-8">
        <CinematicPageHero
          kicker="About JMK Enterprise"
          title="A Corporate-Grade Industrial Supply Partner Built for Long-Term B2B Reliability"
          description={`${companyInfo.companyName} supports manufacturing, fabrication, and project procurement teams with dependable category sourcing, commercial clarity, and responsive delivery coordination.`}
          image="https://images.pexels.com/photos/4484072/pexels-photo-4484072.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Industrial professionals discussing supply operations on site"
          actions={[
            { href: "/products", label: "Explore Portfolio", variant: "primary" },
            { href: "/dealer-inquiry", label: "Request Commercial Quote", variant: "outline" }
          ]}
          stats={[
            { value: `${categories.length}`, label: "Core Categories" },
            { value: `${totalProducts}`, label: "Featured Products" },
            { value: "B2B", label: "Primary Business Model" },
            { value: "IEC Ready", label: "Import Trade Capability" }
          ]}
          priority
        />

        <div className="stagger-grid grid gap-5 lg:grid-cols-3">
          {principles.map((item, index) => (
            <article key={item.title} className="insight-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                Pillar {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="metal-panel overflow-hidden p-0">
            <div className="relative h-56 border-b border-zinc-700 lg:h-64">
              <Image
                src="https://images.pexels.com/photos/18323775/pexels-photo-18323775.jpeg?auto=compress&cs=tinysrgb&w=1800"
                alt="Industrial warehouse and operations floor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/35" />
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                    Operational Backbone
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Built for Repeat Procurement</h2>
                </div>
              </div>
            </div>
            <div className="p-6 text-sm text-zinc-200">
              <p className="leading-7">
                {companyInfo.companyName} operates under the registered trade name{" "}
                {companyInfo.legalDetails.tradeName}, a {companyInfo.legalDetails.constitution} business
                owned by {companyInfo.legalDetails.legalName}.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-zinc-700 bg-[#111315] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">GSTIN</p>
                  <p className="mt-1 font-semibold text-zinc-100">{companyInfo.legalDetails.gst}</p>
                </div>
                <div className="rounded-md border border-zinc-700 bg-[#111315] p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">IEC Code</p>
                  <p className="mt-1 font-semibold text-zinc-100">{companyInfo.legalDetails.iecCode}</p>
                </div>
              </div>
              <Link href="/contact" className="btn-outline mt-5">
                Talk to Our Team
              </Link>
            </div>
          </article>

          <article className="metal-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
              Import & Export Operations
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Scalable Supply for Industrial Buyers</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-200">
              We source and distribute welding machines, consumables, and hardware tools for B2B
              customers seeking consistency across quality, lead time, and documentation.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{companyInfo.businessType}</p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-200">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                <span>Category-wise stocking strategy for recurring order continuity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                <span>Compliance-aligned billing and legal documentation support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                <span>After-sales coordination for long-term dealer and project accounts</span>
              </li>
            </ul>
          </article>
        </section>

        <article className="metal-panel panel-sheen p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
            Execution Model
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">How We Handle B2B Projects</h2>
          <div className="stagger-grid mt-5 grid gap-4 lg:grid-cols-3">
            {executionModel.map((item) => (
              <article key={item.step} className="process-card">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Step {item.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-zinc-100">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="metal-panel p-6">
          <h2 className="text-3xl font-semibold text-white">Certifications & Compliance</h2>
          <ul className="stagger-grid mt-4 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <li key={item} className="rounded-md border border-zinc-700 bg-[#111315] p-3.5">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FC7A02]" />
                  <span>{item}</span>
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
