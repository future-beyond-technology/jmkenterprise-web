import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getCategories } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "Browse welding machines, welding consumables, and industrial tools & hardware supplied by JMK Enterprise for B2B customers.",
  path: "/products",
  keywords: ["industrial welding products", "welding consumables catalog", "tools and hardware b2b"]
});

export default function ProductsPage() {
  const categories = getCategories();

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container">
        <header className="reveal-up">
          <p className="accent-kicker">Products</p>
          <h1 className="section-title text-white">Industrial Product Categories</h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Explore our category-wise portfolio designed for dealers, procurement managers, and
            fabrication businesses.
          </p>
        </header>

        <section className="reveal-up mt-8 overflow-hidden rounded-2xl border border-zinc-700 bg-[#0f1113]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[260px]">
              <Image
                src="https://images.pexels.com/photos/34204859/pexels-photo-34204859.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Industrial welding operations in progress"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5 lg:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                    Industrial Sourcing
                  </p>
                  <h2 className="mt-2 max-w-xl text-2xl font-semibold text-white lg:text-3xl">
                    Select the Right Product Mix for Your Monthly Demand
                  </h2>
                </div>
              </div>
            </div>

            <aside className="space-y-3 p-5 lg:p-7">
              <p className="text-sm leading-6 text-zinc-300">
                Use category pages to compare products quickly, then submit one inquiry for pricing,
                lead time, and recommended alternatives.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/dealer-inquiry" className="btn-primary">
                  Submit Requirement
                </Link>
                <Link href="/contact" className="btn-outline">
                  Talk to Sales
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <div className="mt-10 space-y-12">
          {categories.map((category) => (
            <section key={category.slug} className="reveal-up">
              <div className="mb-5 flex items-center justify-between gap-3 border-b border-zinc-700 pb-3">
                <h2 className="text-3xl font-semibold text-white">{category.name}</h2>
                <Link href={`/products/${category.slug}`} className="btn-outline">
                  View Category
                </Link>
              </div>
              <div className="stagger-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {category.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    categorySlug={category.slug}
                    categoryName={category.name}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
