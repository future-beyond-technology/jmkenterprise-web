const reasons = [
  {
    step: "01",
    title: "Category-Aligned Procurement",
    description:
      "Products are grouped and recommended by industrial use-case, improving purchase clarity and reducing mismatch risk."
  },
  {
    step: "02",
    title: "Commercial + Technical Balance",
    description:
      "We support both price-sensitive bulk buying and technical requirements for duty cycle, quality, and compatibility."
  },
  {
    step: "03",
    title: "Long-Term Dealer Support",
    description:
      "Our model favors repeat dealer engagement with predictable communication, availability planning, and fast escalation paths."
  }
];

export function WhyChooseUs() {
  return (
    <section className="industrial-section-dark border-b border-zinc-800">
      <div className="industrial-container">
        <p className="accent-kicker">Why Choose Us</p>
        <h2 className="section-title text-white">A Structured Supplier Partner, Not Just a Vendor</h2>

        <div className="stagger-grid mt-8 grid gap-5 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="metal-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ff5b5b]">Step {reason.step}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
