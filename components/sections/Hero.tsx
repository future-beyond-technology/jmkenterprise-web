"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { getCategorySummaries } from "@/lib/industrial";
import { whatsappUrl } from "@/lib/site";

const slides = [
  {
    kicker: "B2B Industrial Supply",
    title: "Enterprise Welding Procurement, Engineered for Consistency",
    description:
      "Consumables, machines, tools, and safety gear aligned to real manufacturing workflows and monthly demand planning."
  },
  {
    kicker: "Use-Case Led Selection",
    title: "Choose the Right Welding Stack for Shipyard, Workshop, and Plant Operations",
    description:
      "Application-first shortlisting helps teams quickly map standards, tensile requirements, and process compatibility."
  },
  {
    kicker: "Commercial + Technical Clarity",
    title: "From Product Match to Scalable Monthly Supply",
    description:
      "Get structured quotations, technical data, and dependable dispatch coordination for repeat industrial orders."
  }
];

const heroVideo =
  "https://videos.pexels.com/video-files/4489790/4489790-sd_960_506_30fps.mp4";

export function Hero() {
  const categories = useMemo(() => getCategorySummaries(), []);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const current = slides[activeSlide];

  return (
    <section className="hero-enterprise relative overflow-hidden border-b border-zinc-800">
      {/* Motion-capable video layer builds premium industrial atmosphere above the fold. */}
      <div className="hero-video-wrap" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero-video"
          poster="https://images.pexels.com/photos/15947586/pexels-photo-15947586.jpeg?auto=compress&cs=tinysrgb&w=2000"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="industrial-container relative py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.34 }}
              >
                <p className="accent-kicker">{current.kicker}</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  {current.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-200 sm:text-lg">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Explore Product Grid
              </Link>
              <Link href="/dealer-inquiry" className="btn-outline">
                Request Enterprise Quote
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
                WhatsApp Sales Team
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${
                    activeSlide === index ? "w-10 bg-orange-400" : "w-4 bg-zinc-500"
                  }`}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <aside className="grid gap-4 sm:grid-cols-2">
            {categories.map((category, index) => (
              <motion.article
                key={category.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-zinc-700 bg-[#0f1112]/85 p-4 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                  {category.name}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{category.description}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.11em] text-zinc-500">
                  {category.productCount} product lines
                </p>
              </motion.article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
