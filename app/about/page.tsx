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
            JMK Enterprise serves B2B customers across manufacturing, fabrication, and project
            engineering segments with a practical mix of product quality, responsive service, and
            consistent commercial support.
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
