import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductMediaGallery } from "@/components/ProductMediaGallery";
import { SEOHead } from "@/components/seo/SEOHead";
import { StickySpecs } from "@/components/StickySpecs";
import { TabbedDetails } from "@/components/TabbedDetails";
import {
  getAllProductPaths,
  getCategoryMeta,
  getProductByCategoryAndSlug,
  getRelatedProducts
} from "@/lib/industrial";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ProductDetailPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProductPaths();
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);

  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product detail page does not exist.",
      path: "/products"
    });
  }

  return buildMetadata({
    title: `${product.title} | ${product.categoryLabel}`,
    description: product.shortDescription,
    path: `/products/${product.category}/${product.slug}`,
    image: product.images[0],
    keywords: [
      product.title,
      product.code,
      ...product.applications,
      ...product.industries
    ]
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { category, slug } = await params;
  const product = getProductByCategoryAndSlug(category, slug);
  const categoryMeta = getCategoryMeta(category);

  if (!product || !categoryMeta) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images.map((image) => absoluteUrl(image)),
    description: product.description,
    sku: product.code,
    category: product.categoryLabel,
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name
    },
    additionalProperty: Object.entries(product.specification).map(([name, value]) => ({
      "@type": "PropertyValue",
      name,
      value
    })),
    url: absoluteUrl(`/products/${product.category}/${product.slug}`)
  };

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: categoryMeta.name, path: `/products/${categoryMeta.slug}` },
    { name: product.title, path: `/products/${product.category}/${product.slug}` }
  ]);

  return (
    <section className="industrial-section-dark">
      <SEOHead id="product-structured-data" data={[productSchema, breadcrumbSchema]} />

      <div className="industrial-container space-y-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-zinc-500"
        >
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/categories">Categories</Link>
          <span>/</span>
          <Link href={`/products/${categoryMeta.slug}`}>{categoryMeta.name}</Link>
          <span>/</span>
          <span className="text-zinc-300">{product.title}</span>
        </nav>

        <header>
          <p className="accent-kicker">{product.categoryLabel}</p>
          <h1 className="section-title text-white">{product.title}</h1>
          <p className="mt-3 max-w-3xl text-zinc-300">{product.shortDescription}</p>
        </header>

        {/* Media + sticky technical block keeps decision-critical info in view. */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <ProductMediaGallery title={product.title} images={product.images} />
          <StickySpecs product={product} />
        </div>

        {/* Animated tabs expose deep technical and use-case context progressively. */}
        <TabbedDetails product={product} />

        {relatedProducts.length > 0 ? (
          <section>
            <div className="mb-4 flex items-end justify-between gap-2">
              <div>
                <p className="accent-kicker">Related Products</p>
                <h2 className="section-title text-white">Explore Similar Options</h2>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </section>
        ) : null}

        {/* Bottom lead section captures high-intent enterprise inquiries on detail pages. */}
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <article className="metal-panel p-6">
            <p className="accent-kicker">Enterprise Conversion</p>
            <h2 className="section-title text-white">Need Commercial & Technical Clarification?</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Share your use-case and demand profile to receive equivalent options, standard guidance,
              and commercial terms tailored for recurring or project procurement.
            </p>
          </article>
          <LeadForm title="Request Product Consultation" subtitle="Submit details to get a product-fit recommendation." />
        </section>
      </div>
    </section>
  );
}
