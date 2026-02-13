import Link from "next/link";
import type { IndustrialProduct } from "@/types/industrial";

type StickySpecsProps = {
  product: IndustrialProduct;
};

export function StickySpecs({ product }: StickySpecsProps) {
  return (
    // Sticky technical panel keeps critical specification data visible during scroll.
    <aside className="sticky top-24 rounded-2xl border border-zinc-700 bg-[linear-gradient(145deg,#191c1f,#111315)] p-5 shadow-[0_20px_30px_rgba(0,0,0,0.3)]">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">Sticky Specs</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">Technical Highlights</h2>

      <dl className="mt-4 space-y-2">
        {Object.entries(product.specification).map(([key, value]) => (
          <div key={key} className="rounded-md border border-zinc-700 bg-[#0f1112] px-3 py-2.5">
            <dt className="text-[11px] uppercase tracking-[0.11em] text-zinc-500">{key}</dt>
            <dd className="mt-1 text-sm font-medium text-zinc-200">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 space-y-2">
        <Link href={`/dealer-inquiry?product=${encodeURIComponent(product.code)}`} className="btn-primary w-full">
          Request Enterprise Quote
        </Link>
        <a href={product.technicalDocs[0]?.url ?? "/catalogs/jmk-enterprise-catalog.pdf"} className="btn-outline w-full">
          Download Technical Doc
        </a>
      </div>
    </aside>
  );
}
