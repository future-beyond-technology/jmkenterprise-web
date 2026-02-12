import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { SEOHead } from "@/components/seo/SEOHead";
import { getAllProductPaths, getCategoryBySlug, getProductByCategoryAndSlug } from "@/lib/catalog";
import { absoluteUrl, buildBreadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllProductPaths();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const product = getProductByCategoryAndSlug(categorySlug, slug);

  if (!category || !product) {
    return buildMetadata({
      title: "Product Not Found",
      description: "The requested product page is not available.",
      path: "/products"
    });
  }

  return buildMetadata({
    title: `${product.title} | ${category.name}`,
    description: product.shortDescription,
    path: `/products/${category.slug}/${product.slug}`,
    image: product.images[0],
    keywords: [category.name, ...product.keywords]
  });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category: categorySlug, slug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const product = getProductByCategoryAndSlug(categorySlug, slug);

  if (!category || !product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images.map((image) => absoluteUrl(image)),
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name
    },
    category: category.name,
    url: absoluteUrl(`/products/${category.slug}/${product.slug}`),
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name
    },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value
    }))
  };

  const breadcrumbSchema = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: category.name, path: `/products/${category.slug}` },
    { name: product.title, path: `/products/${category.slug}/${product.slug}` }
  ]);

  return (
    <>
      <SEOHead id="product-json-ld" data={[productSchema, breadcrumbSchema]} />
      <ProductDetail product={product} categoryName={category.name} categorySlug={category.slug} />
    </>
  );
}
