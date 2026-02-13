"use client";

import { motion } from "framer-motion";

const workflow = [
  {
    id: "01",
    title: "Requirement Mapping",
    description: "Define material grade, welding process, standards, and production expectations."
  },
  {
    id: "02",
    title: "Product Engineering Match",
    description: "Align consumables, machines, and safety gear with real operating conditions."
  },
  {
    id: "03",
    title: "Pilot and Validation",
    description: "Validate weld quality, deposition efficiency, and process repeatability."
  },
  {
    id: "04",
    title: "Scale and Support",
    description: "Move into monthly supply cadence with technical and commercial continuity."
  }
];

export function VisualStory() {
  return (
    <section className="industrial-section-light border-y border-zinc-300">
      <div className="industrial-container">
        <p className="accent-kicker text-zinc-700">Manufacturing Workflow</p>
        <h2 className="section-title text-zinc-900">From Requirement to Repeatable Production Quality</h2>

        {/* Linear workflow layout helps users understand the sourcing-to-production journey quickly. */}
        <div className="relative mt-8 grid gap-4 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-6 right-6 top-7 hidden h-px bg-zinc-300 lg:block" />
          {workflow.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-xl border border-zinc-300 bg-white p-5 shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-orange-300 bg-orange-100 text-xs font-semibold text-orange-700">
                {step.id}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-700">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
