import Image from "next/image";
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
            <article key={category.slug} className="metal-panel panel-sheen overflow-hidden p-0">
              <div className="relative h-44 overflow-hidden border-b border-zinc-700">
                <Image
                  src={category.heroImage}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <span className="rounded-full border border-zinc-500 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-100">
                    {category.products.length} products
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-6 text-zinc-300">{category.summary}</p>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
