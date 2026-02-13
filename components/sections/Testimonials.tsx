"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "JMK's wire and machine recommendation reduced our weld rework rate and improved line output in less than one quarter.",
    name: "Procurement Head",
    company: "Eastern Heavy Fabricators"
  },
  {
    quote:
      "What stands out is response speed and commercial clarity. Their team understands project-driven buying cycles.",
    name: "Plant Operations Manager",
    company: "Nexa Engineering Works"
  },
  {
    quote:
      "We use JMK for consumables + PPE + tools under one account, which simplified monthly sourcing significantly.",
    name: "Supply Chain Lead",
    company: "Maritime Structures India"
  }
];

export function Testimonials() {
  return (
    <section className="industrial-section-dark border-t border-zinc-800">
      <div className="industrial-container">
        <p className="accent-kicker">Client Voice</p>
        <h2 className="section-title text-white">Trusted by Enterprise Buyers and Fabrication Teams</h2>

        {/* Social proof cards are staggered to create a clean, high-trust reading rhythm. */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#191d20,#121416)] p-5"
            >
              <p className="text-sm leading-7 text-zinc-200">“{item.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-zinc-100">{item.name}</p>
              <p className="text-xs uppercase tracking-[0.1em] text-zinc-400">{item.company}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
