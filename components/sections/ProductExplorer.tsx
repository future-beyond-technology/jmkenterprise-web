"use client";

import { useMemo, useState } from "react";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCard";
import {
  defaultFilterState,
  filterProducts,
  getFilterOptions
} from "@/lib/industrial";
import type { IndustrialProduct, ProductFilterState } from "@/types/industrial";

type ProductExplorerProps = {
  products: IndustrialProduct[];
  initialQuery?: string;
  lockCategory?: string;
};

export function ProductExplorer({ products, initialQuery = "", lockCategory }: ProductExplorerProps) {
  // Keep all filter controls in one state object for simpler resets and updates.
  const [filters, setFilters] = useState<ProductFilterState>({
    ...defaultFilterState,
    query: initialQuery
  });

  const options = useMemo(() => getFilterOptions(products), [products]);

  // Memoized filtering prevents unnecessary recomputation on unrelated renders.
  const filteredProducts = useMemo(
    () => filterProducts(products, filters, lockCategory),
    [products, filters, lockCategory]
  );

  const onReset = () => {
    setFilters({ ...defaultFilterState, query: "" });
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
      <FilterSidebar filters={filters} options={options} onChange={setFilters} onReset={onReset} />

      <div>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm text-zinc-300">
            Showing <span className="font-semibold text-zinc-100">{filteredProducts.length}</span> products
          </p>
          {lockCategory ? (
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] uppercase tracking-[0.11em] text-zinc-400">
              Category Locked
            </span>
          ) : null}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="rounded-2xl border border-zinc-700 bg-[#111315] p-8 text-center">
            <p className="text-lg font-semibold text-zinc-100">No product matched your filters</p>
            <p className="mt-2 text-sm text-zinc-400">Adjust standard/application/industry and try again.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
