"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
  "ISO-oriented process framework",
  "GST and compliant invoicing support",
  "MSME registered business",
  "IEC-enabled import operations",
  "Batch traceability process",
  "Structured after-sales SOP"
];

const caseStudies = [
  {
    title: "Shipyard Consumable Standardization",
    result: "18% reduction in rework and improved weld consistency across shifts.",
    beforeImage:
      "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1600",
    afterImage:
      "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    title: "Fabrication Line Productivity Upgrade",
    result: "Faster fit-up to weld cycle using matched machine-wire-tool stack.",
    beforeImage:
      "https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg?auto=compress&cs=tinysrgb&w=1600",
    afterImage:
      "https://images.pexels.com/photos/4484072/pexels-photo-4484072.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const videoDemos = [
  { label: "Flux Wire Application Demo", url: "https://www.youtube.com/watch?v=U7I7l8X9T9w" },
  { label: "MIG Parameter Optimization", url: "https://www.youtube.com/watch?v=J4Y6c4A7f44" },
  { label: "PPE Safety Checklist", url: "https://www.youtube.com/watch?v=4zvJ7Mzj_B0" }
];

export function TrustSection() {
  return (
    <section className="industrial-section-dark border-y border-zinc-800">
      <div className="industrial-container space-y-8">
        <header>
          <p className="accent-kicker">Trust & Validation</p>
          <h2 className="section-title text-white">Evidence-Driven Partner for Enterprise Procurement</h2>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Case studies and before/after visuals provide tangible proof for B2B buyers. */}
          <article className="rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#1a1d20,#121416)] p-5">
            <h3 className="text-xl font-semibold text-zinc-100">Case Studies & Before/After Visuals</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {caseStudies.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-xl border border-zinc-700 bg-[#0f1112] p-3"
                >
                  <h4 className="text-base font-semibold text-zinc-100">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.result}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="relative overflow-hidden rounded-md border border-zinc-700">
                      <Image src={item.beforeImage} alt={`${item.title} before`} width={420} height={280} className="h-28 w-full object-cover" />
                      <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-zinc-200">Before</span>
                    </div>
                    <div className="relative overflow-hidden rounded-md border border-zinc-700">
                      <Image src={item.afterImage} alt={`${item.title} after`} width={420} height={280} className="h-28 w-full object-cover" />
                      <span className="absolute left-2 top-2 rounded bg-black/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-zinc-200">After</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </article>

          <div className="space-y-4">
            <article className="rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#1a1d20,#121416)] p-5">
              <h3 className="text-lg font-semibold text-zinc-100">Certifications & Compliance</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {certificates.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#1a1d20,#121416)] p-5">
              <h3 className="text-lg font-semibold text-zinc-100">Video Demo Library</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {videoDemos.map((video) => (
                  <li key={video.label}>
                    <a href={video.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200">
                      <span>{video.label}</span>
                      <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
