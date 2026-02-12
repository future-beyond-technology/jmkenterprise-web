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
