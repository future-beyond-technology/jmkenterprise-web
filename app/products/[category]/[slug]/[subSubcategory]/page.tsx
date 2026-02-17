import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import {
  getCategoryLeafPaths,
  getCategoryPathLabel,
  getProductsForLeafPath
} from "@/lib/category-structure";
import { buildMetadata } from "@/lib/seo";

type SubSubcategoryListingPageProps = {
  params: Promise<{ category: string; slug: string; subSubcategory: string }>;
};

export function generateStaticParams() {
  return getCategoryLeafPaths().map((path) => ({
    category: path.category,
    slug: path.subcategory,
    subSubcategory: path.subSubcategory
  }));
}

export async function generateMetadata({ params }: SubSubcategoryListingPageProps): Promise<Metadata> {
  const { category, slug, subSubcategory } = await params;
  const path = { category, subcategory: slug, subSubcategory };
  const labels = getCategoryPathLabel(path);

  if (!labels) {
    return buildMetadata({
      title: "Listing Not Found",
      description: "The requested product listing does not exist.",
      path: "/products"
    });
  }

  return buildMetadata({
    title: `${labels.subSubcategory.name} | ${labels.category.name}`,
    description: labels.subSubcategory.description,
    path: `/products/${category}/${slug}/${subSubcategory}`,
    image: labels.category.heroImage,
    keywords: [labels.category.name, labels.subcategory.name, labels.subSubcategory.name, "product list"]
  });
}

export default async function SubSubcategoryListingPage({
  params
}: SubSubcategoryListingPageProps) {
  const { category, slug, subSubcategory } = await params;
  const path = { category, subcategory: slug, subSubcategory };
  const labels = getCategoryPathLabel(path);

  if (!labels) {
    notFound();
  }

  const products = getProductsForLeafPath(path);

  return (
    <section className="bg-slate-50 py-10 text-slate-900">
      <div className="industrial-container space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: labels.category.name, href: `/products/${labels.category.slug}` },
            {
              label: labels.subcategory.name,
              href: `/products/${labels.category.slug}#${labels.subcategory.slug}`
            },
            { label: labels.subSubcategory.name }
          ]}
        />

        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-600">
            Product Listing Page
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
            {labels.subSubcategory.name}
          </h1>
          <p className="mt-3 text-slate-600">{labels.subSubcategory.description}</p>
        </header>

        <ProductExplorer products={products} />
      </div>
    </section>
  );
}
