import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { getCategories, getCategoryBySlug } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return buildMetadata({
      title: "Category Not Found",
      description: "The requested product category does not exist.",
      path: "/products"
    });
  }

  return buildMetadata({
    title: category.seo.title,
    description: category.seo.description,
    path: `/products/${category.slug}`,
    keywords: [category.name, "industrial supplier", "B2B product category"]
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-700">
          <div className="relative min-h-[260px] lg:min-h-[320px]">
            <Image
              src={category.heroImage}
              alt={`${category.name} industrial category`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/25" />
            <div className="absolute inset-0 flex items-end p-6 lg:p-8">
              <div className="max-w-3xl">
                <p className="accent-kicker">Category</p>
                <h1 className="section-title text-white">{category.name}</h1>
                <p className="mt-4 max-w-3xl text-zinc-200">{category.summary}</p>
                <Link href="/dealer-inquiry" className="btn-primary mt-5">
                  Get Category Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="stagger-grid mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categorySlug={category.slug}
              categoryName={category.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
