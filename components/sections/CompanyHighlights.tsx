const highlights = [
  {
    metric: "12+",
    title: "Years of Market Exposure",
    description:
      "Deep category understanding across welding operations, dealer expectations, and procurement cycles."
  },
  {
    metric: "95%",
    title: "Order Fulfillment Accuracy",
    description:
      "Structured inventory handling and dispatch verification to reduce supply errors and delays."
  },
  {
    metric: "<24h",
    title: "Technical Response Time",
    description:
      "Fast product recommendation support for compatible machine-consumable-tool combinations."
  },
  {
    metric: "PAN-India",
    title: "Supply Reach",
    description:
      "Logistics-ready support for recurring industrial requirements and long-term channel partnerships."
  }
];

export function CompanyHighlights() {
  return (
    <section className="industrial-section-light border-y border-zinc-300">
      <div className="industrial-container">
        <p className="accent-kicker text-zinc-700">Company Highlights</p>
        <h2 className="section-title text-zinc-900">Built for Operational Reliability at Scale</h2>
        <p className="mt-4 max-w-3xl text-zinc-700">
          Our supply model is designed around repeat B2B purchasing behavior where consistency,
          response speed, and long-term support matter more than one-time transactions.
        </p>

        <div className="stagger-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="metal-panel-light p-5">
              <p className="text-2xl font-bold text-zinc-900">{item.metric}</p>
              <h3 className="mt-1.5 text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-6 text-zinc-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
