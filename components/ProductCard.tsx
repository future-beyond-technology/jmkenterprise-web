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
      className="group overflow-hidden rounded-2xl border border-zinc-700 bg-[linear-gradient(155deg,#1a1d20,#121416)] shadow-[0_18px_34px_rgba(0,0,0,0.32)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-700">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 rounded border border-zinc-500 bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-200">
          {product.code}
        </div>
      </div>

      <div className="p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-orange-300">
          {product.categoryLabel}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{product.shortDescription}</p>

        {/* Compact spec tiles surface high-signal details above the fold. */}
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-zinc-700 bg-[#0f1112] p-2.5">
            <p className="text-[10px] uppercase tracking-[0.11em] text-zinc-500">AWS</p>
            <p className="mt-1 text-xs font-semibold text-zinc-200">{product.standard.aws}</p>
          </div>
          <div className="rounded-md border border-zinc-700 bg-[#0f1112] p-2.5">
            <p className="text-[10px] uppercase tracking-[0.11em] text-zinc-500">Tensile</p>
            <p className="mt-1 text-xs font-semibold text-zinc-200">{product.tensileStrength}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.applications.slice(0, 2).map((application) => (
            <span
              key={`${product.id}-${application}`}
              className="rounded border border-zinc-700 bg-[#101214] px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-zinc-400"
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
