"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { IndustrialProduct } from "@/types/industrial";

type ProductCardProps = {
  product: IndustrialProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    // Product cards combine visual context + key technical data for quick shortlist decisions.
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 rounded border border-slate-700/50 bg-slate-950/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-100">
          {product.code}
        </div>
      </div>

      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-700">
          {product.categoryLabel}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        {/* Compact spec tiles surface high-signal details above the fold. */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-slate-200 bg-slate-50 p-2.5">
            <p className="text-[10px] uppercase tracking-[0.11em] text-slate-500">AWS</p>
            <p className="mt-1 text-xs font-semibold text-slate-900">{product.standard.aws}</p>
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 p-2.5">
            <p className="text-[10px] uppercase tracking-[0.11em] text-slate-500">Tensile</p>
            <p className="mt-1 text-xs font-semibold text-slate-900">{product.tensileStrength}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.applications.slice(0, 2).map((application) => (
            <span
              key={`${product.id}-${application}`}
              className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-slate-500"
            >
              {application}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/products/${product.category}/${product.slug}`} className="btn-primary">
            View Product
          </Link>
          <Link href={`/dealer-inquiry?product=${encodeURIComponent(product.code)}`} className="btn-outline">
            Quick Inquiry
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
