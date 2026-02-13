import { notFound } from "next/navigation";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import {
  getAllProducts,
  getCategoryMeta,
  getCategorySummaries,
  getProductsByCategory
} from "@/lib/industrial";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getCategorySummaries().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategoryMeta(category);

  if (!meta) {
    return buildMetadata({
      title: "Category Not Found",
      description: "Requested category does not exist.",
      path: "/products"
    });
  }

  return buildMetadata({
    title: `${meta.name} | Product Grid`,
    description: meta.description,
    path: `/products/${meta.slug}`,
    image: meta.bannerImage,
    keywords: [meta.name, "industrial category", "B2B product shortlist"]
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const meta = getCategoryMeta(category);

  if (!meta) {
    notFound();
  }

  const allProducts = getAllProducts();
  const categoryProducts = getProductsByCategory(category);

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-8">
        {/* Category-specific hero focuses users on one product domain at a time. */}
        <CinematicPageHero
          kicker="Category Product Grid"
          title={`${meta.name}: Optimized for Industrial Use Cases`}
          description={meta.description}
          image={meta.bannerImage}
          imageAlt={`${meta.name} category visual`}
          stats={[
            { value: `${categoryProducts.length}`, label: "Products in Category" },
            { value: "Filtered", label: "Technical Match" },
            { value: "Visual", label: "Use-case Storytelling" },
            { value: "B2B", label: "Procurement Ready" }
          ]}
          priority
        />

        {/* Shared explorer is reused with category lock for focused filtering. */}
        <ProductExplorer products={allProducts} lockCategory={category} />
      </div>
    </section>
  );
}
