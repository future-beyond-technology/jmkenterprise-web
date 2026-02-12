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

const certifications = [
  "ISO-oriented process compliance framework",
  "GST compliant invoicing and documentation support",
  "Quality-checked product dispatch workflow",
  "Batch traceability for key consumable lines",
  "Dealer onboarding and account verification SOP",
  "Structured after-sales support process"
];

export default function AboutPage() {
  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-10">
        <header className="reveal-up">
          <p className="accent-kicker">About Us</p>
          <h1 className="section-title max-w-4xl text-white">
            Building Dependable Industrial Supply Partnerships
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            {companyInfo.companyName} serves B2B customers across manufacturing, fabrication, and
            project engineering segments with a practical mix of product quality, responsive service,
            and consistent commercial support.
          </p>
          <p className="mt-3 max-w-3xl text-zinc-300">
            {companyInfo.companyName} operates under the registered trade name{" "}
            {companyInfo.legalDetails.tradeName}, a {companyInfo.legalDetails.constitution} business
            owned by {companyInfo.legalDetails.legalName}.
          </p>
        </header>

        <div className="stagger-grid grid gap-5 lg:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="metal-panel p-6">
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>

        <section className="rounded-2xl border-2 border-[#FC7A02]/70 bg-[#151719] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] lg:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            Import & Export Operations
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">
            Import & Export Operations
          </h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <p className="text-base leading-7 text-zinc-100">
              JMK Enterprise is engaged in the import and distribution of industrial welding
              machines, welding consumables, and hardware tools. We supply fabrication units,
              engineering contractors, and industrial procurement teams with reliable and scalable
              sourcing solutions.
            </p>
            <div className="rounded-lg border border-zinc-700 bg-[#0f1112] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                Business Type
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                {companyInfo.businessType}
              </p>
            </div>
          </div>
        </section>

        <article className="metal-panel panel-sheen p-6">
          <h2 className="text-3xl font-semibold text-white">Certifications & Compliance</h2>
          <ul className="stagger-grid mt-4 grid gap-3 text-sm text-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <li key={item} className="rounded-md border border-zinc-700 bg-[#111315] p-3.5">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
