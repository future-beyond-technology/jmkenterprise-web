import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import {
  getCategoryNode,
  getCategoryNodes,
  getProductsForCategory
} from "@/lib/category-structure";
import { buildMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getCategoryNodes().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryNode = getCategoryNode(category);

  if (!categoryNode) {
    return buildMetadata({
      title: "Category Not Found",
      description: "The requested category was not found.",
      path: "/products"
    });
  }

  return buildMetadata({
    title: `${categoryNode.name} | Categories`,
    description: categoryNode.description,
    path: `/products/${categoryNode.slug}`,
    image: categoryNode.heroImage,
    keywords: [categoryNode.name, "industrial category", "subcategory navigation"]
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryNode = getCategoryNode(category);

  if (!categoryNode) {
    notFound();
  }

  const productCount = getProductsForCategory(categoryNode.slug).length;

  return (
    <section className="bg-slate-50 py-10 text-slate-900">
      <div className="industrial-container space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: categoryNode.name }
          ]}
        />

        <header
          className="relative overflow-hidden rounded-3xl border border-slate-200 px-6 py-10 text-white sm:px-10"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.72)), url(${categoryNode.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-300">Main Category</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{categoryNode.name}</h1>
          <p className="mt-3 max-w-3xl text-slate-200">{categoryNode.description}</p>
          <p className="mt-4 text-sm text-slate-300">{productCount} products mapped to this category</p>
        </header>

        <section aria-label="Subcategories" className="grid gap-5 lg:grid-cols-2">
          {categoryNode.subcategories.map((subcategory) => (
            <article
              key={subcategory.slug}
              id={subcategory.slug}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.06)]"
            >
              <h2 className="text-2xl font-semibold text-slate-900">{subcategory.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{subcategory.description}</p>

              <ul className="mt-4 space-y-2">
                {subcategory.subSubcategories.map((subSubcategory) => (
                  <li key={subSubcategory.slug}>
                    <Link
                      href={`/products/${categoryNode.slug}/${subcategory.slug}/${subSubcategory.slug}`}
                      className="inline-flex min-h-12 w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-900 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      <span>{subSubcategory.name}</span>
                      <span className="text-xs text-slate-500">{subSubcategory.productIds.length} items</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
