import catalogData from "@/data/catalog.json";
import type { Catalog, Category, Product } from "@/types/catalog";

const catalog = catalogData as Catalog;

export function getCatalog(): Catalog {
  return catalog;
}

export function getCategories(): Category[] {
  return catalog.categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return catalog.categories.find((category) => category.slug === slug);
}

export function getAllProducts(): Product[] {
  return catalog.categories.flatMap((category) => category.products);
}

export function getProductByCategoryAndSlug(
  categorySlug: string,
  productSlug: string
): Product | undefined {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return undefined;
  }

  return category.products.find((product) => product.slug === productSlug);
}

export function getAllProductPaths(): Array<{ category: string; slug: string }> {
  return getCategories().flatMap((category) =>
    category.products.map((product) => ({
      category: category.slug,
      slug: product.slug
    }))
  );
}
