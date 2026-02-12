import Link from "next/link";
import type { Category } from "@/types/catalog";

type CategoryPreviewProps = {
  categories: Category[];
};

export function CategoryPreview({ categories }: CategoryPreviewProps) {
  return (
    <section className="industrial-section-dark border-b border-zinc-800">
      <div className="industrial-container">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="accent-kicker">Product Categories</p>
            <h2 className="section-title text-white">Industrial Product Portfolio</h2>
          </div>
          <Link href="/products" className="btn-outline">
            View All Products
          </Link>
        </div>

        <div className="stagger-grid mt-8 grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category.slug} className="metal-panel panel-sheen p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                <span className="rounded-full border border-zinc-600 bg-[#111315] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-300">
                  {category.products.length} products
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-zinc-300">{category.summary}</p>
              <ul className="mt-5 space-y-2 border-t border-zinc-700 pt-4 text-sm text-zinc-200">
                {category.products.slice(0, 3).map((product) => (
                  <li key={product.id} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FC7A02]" />
                    <span>{product.title}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/products/${category.slug}`} className="btn-subtle mt-6">
                Browse Category
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
