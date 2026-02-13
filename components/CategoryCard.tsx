"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CategorySummary } from "@/types/industrial";

type CategoryCardProps = {
  category: CategorySummary;
};

function CategoryIcon({ icon }: { icon: CategorySummary["icon"] }) {
  // Inline SVG icons keep category visuals crisp without external icon dependencies.
  if (icon === "wire") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M3 12h8a3 3 0 1 0 0-6h-1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M21 12h-8a3 3 0 1 0 0 6h1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "machine") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 10h5M14 14h5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "tool") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M14 5a4 4 0 0 0-5 5l-5 5 3 3 5-5a4 4 0 0 0 5-5l-3 3-2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    // Lift-on-hover helps cards feel interactive while preserving enterprise polish.
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#1a1d20,#101214)] p-6 shadow-[0_20px_35px_rgba(0,0,0,0.28)]"
    >
      <div
        className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: category.accent }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-600 bg-zinc-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-200">
          <CategoryIcon icon={category.icon} />
          <span>{category.name}</span>
        </div>
        <span className="rounded-full border border-zinc-600 bg-zinc-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-300">
          {category.productCount} SKUs
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-zinc-300">{category.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.featuredCodes.map((code) => (
          <span key={code} className="rounded border border-zinc-700 bg-[#0f1112] px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-zinc-400">
            {code}
          </span>
        ))}
      </div>

      <Link
        href={`/products/${category.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition group-hover:text-orange-200"
      >
        Explore Category
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  );
}
