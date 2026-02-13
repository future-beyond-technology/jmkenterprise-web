"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { IndustrialProduct } from "@/types/industrial";

type TabKey = "overview" | "applications" | "use-cases" | "resources";

type TabbedDetailsProps = {
  product: IndustrialProduct;
};

const tabs: Array<{ key: TabKey; label: string }> = [
  { key: "overview", label: "Overview" },
  { key: "applications", label: "Applications" },
  { key: "use-cases", label: "Use Cases" },
  { key: "resources", label: "Resources" }
];

export function TabbedDetails({ product }: TabbedDetailsProps) {
  // Tabs break technical content into digestible chunks for procurement and engineering teams.
  const [activeTab, setActiveTab] = useState<TabKey>("overview");

  return (
    <section className="rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#1a1d20,#111315)] p-5">
      <div role="tablist" aria-label="Product details tabs" className="flex flex-wrap gap-2 border-b border-zinc-700 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
              activeTab === tab.key
                ? "bg-orange-500/20 text-orange-200"
                : "bg-zinc-900 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.24 }}
          className="pt-5"
        >
          {activeTab === "overview" ? (
            <div className="space-y-4 text-sm text-zinc-300">
              <p className="leading-7">{product.description}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <article className="rounded-md border border-zinc-700 bg-[#0f1112] p-3.5">
                  <p className="text-[11px] uppercase tracking-[0.11em] text-zinc-500">AWS Standard</p>
                  <p className="mt-1 font-semibold text-zinc-200">{product.standard.aws}</p>
                </article>
                <article className="rounded-md border border-zinc-700 bg-[#0f1112] p-3.5">
                  <p className="text-[11px] uppercase tracking-[0.11em] text-zinc-500">GB Standard</p>
                  <p className="mt-1 font-semibold text-zinc-200">{product.standard.gb}</p>
                </article>
              </div>

              {/* Expandable section keeps technical detail available without overwhelming first view. */}
              <details className="rounded-md border border-zinc-700 bg-[#0f1112] p-3.5">
                <summary className="cursor-pointer text-sm font-semibold text-zinc-100">
                  Expand complete specification
                </summary>
                <dl className="mt-3 space-y-2 text-sm text-zinc-300">
                  {Object.entries(product.specification).map(([key, value]) => (
                    <div key={key} className="flex items-start justify-between gap-3 border-b border-zinc-700 pb-2">
                      <dt className="text-zinc-400">{key}</dt>
                      <dd className="text-zinc-200">{value}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            </div>
          ) : null}

          {activeTab === "applications" ? (
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-md border border-zinc-700 bg-[#0f1112] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">Applications</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                  {product.applications.map((application) => (
                    <li key={application} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-md border border-zinc-700 bg-[#0f1112] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">Industries</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                  {product.industries.map((industry) => (
                    <li key={industry} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{industry}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ) : null}

          {activeTab === "use-cases" ? (
            <div className="grid gap-4 lg:grid-cols-2">
              {product.useCases.map((useCase) => (
                <article key={useCase.title} className="overflow-hidden rounded-xl border border-zinc-700 bg-[#0f1112]">
                  <div className="relative h-44">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 text-lg font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="p-4 text-sm leading-6 text-zinc-300">{useCase.description}</p>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "resources" ? (
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="rounded-md border border-zinc-700 bg-[#0f1112] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">Technical Docs</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                  {product.technicalDocs.map((doc) => (
                    <li key={doc.label}>
                      <a href={doc.url} className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200">
                        <span>{doc.label}</span>
                        <span aria-hidden>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-md border border-zinc-700 bg-[#0f1112] p-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-300">Video Demos</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-200">
                  {product.videos.map((video) => (
                    <li key={video}>
                      <a href={video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200">
                        <span>Watch Application Demo</span>
                        <span aria-hidden>↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
