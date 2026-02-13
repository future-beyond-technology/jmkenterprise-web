import { industrialProducts } from "@/data/industrial-products";
import type {
  CategoryMeta,
  CategorySummary,
  IndustrialProduct,
  ProductFilterOptions,
  ProductFilterState
} from "@/types/industrial";

export const categoryMetaMap: Record<string, CategoryMeta> = {
  "welding-consumables": {
    slug: "welding-consumables",
    name: "Welding Consumables",
    description: "High-consistency wires and consumables for quality weld output and repeat procurement.",
    icon: "wire",
    bannerImage:
      "https://images.pexels.com/photos/15059762/pexels-photo-15059762.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#f97316"
  },
  "welding-machines": {
    slug: "welding-machines",
    name: "Welding Machines",
    description: "Industrial welding systems for high duty-cycle manufacturing and heavy fabrication.",
    icon: "machine",
    bannerImage:
      "https://images.pexels.com/photos/34204859/pexels-photo-34204859.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#fb923c"
  },
  "tools-equipment": {
    slug: "tools-equipment",
    name: "Tools & Equipment",
    description: "Workshop-ready tools engineered for reliability in daily production workflows.",
    icon: "tool",
    bannerImage:
      "https://images.pexels.com/photos/13296062/pexels-photo-13296062.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#ef4444"
  },
  "protective-gear": {
    slug: "protective-gear",
    name: "Protective Gear",
    description: "Certified PPE solutions to improve welder safety, comfort, and operational continuity.",
    icon: "shield",
    bannerImage:
      "https://images.pexels.com/photos/162568/factory-worker-manufacture-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=1800",
    accent: "#f59e0b"
  }
};

export const defaultFilterState: ProductFilterState = {
  query: "",
  standard: "all",
  application: "all",
  industry: "all",
  tensileStrength: "all"
};

export function getAllProducts(): IndustrialProduct[] {
  return industrialProducts;
}

export function getFeaturedProducts(limit = 6): IndustrialProduct[] {
  return industrialProducts.filter((product) => product.featured).slice(0, limit);
}

export function getProductByCategoryAndSlug(category: string, slug: string): IndustrialProduct | undefined {
  return industrialProducts.find(
    (product) => product.category === category && product.slug === slug
  );
}

export function getProductsByCategory(category: string): IndustrialProduct[] {
  return industrialProducts.filter((product) => product.category === category);
}

export function getCategoryMeta(category: string): CategoryMeta | undefined {
  return categoryMetaMap[category];
}

export function getCategorySummaries(): CategorySummary[] {
  return Object.values(categoryMetaMap).map((meta) => {
    const products = getProductsByCategory(meta.slug);

    return {
      ...meta,
      productCount: products.length,
      featuredCodes: products.slice(0, 3).map((product) => product.code)
    };
  });
}

export function getAllProductPaths(): Array<{ category: string; slug: string }> {
  return industrialProducts.map((product) => ({
    category: product.category,
    slug: product.slug
  }));
}

export function getFilterOptions(products: IndustrialProduct[] = industrialProducts): ProductFilterOptions {
  const standardSet = new Set<string>();
  const applicationSet = new Set<string>();
  const industrySet = new Set<string>();
  const tensileSet = new Set<string>();

  for (const product of products) {
    standardSet.add(product.standard.aws);
    for (const application of product.applications) {
      applicationSet.add(application);
    }
    for (const industry of product.industries) {
      industrySet.add(industry);
    }
    tensileSet.add(product.tensileStrength);
  }

  return {
    standards: [...standardSet].sort((a, b) => a.localeCompare(b)),
    applications: [...applicationSet].sort((a, b) => a.localeCompare(b)),
    industries: [...industrySet].sort((a, b) => a.localeCompare(b)),
    tensileStrengths: [...tensileSet].sort((a, b) => a.localeCompare(b))
  };
}

export function filterProducts(
  products: IndustrialProduct[],
  filters: ProductFilterState,
  category?: string
): IndustrialProduct[] {
  const q = filters.query.trim().toLowerCase();

  return products.filter((product) => {
    if (category && product.category !== category) {
      return false;
    }

    if (q) {
      const searchable = [
        product.title,
        product.code,
        product.shortDescription,
        ...product.applications,
        ...product.industries
      ]
        .join(" ")
        .toLowerCase();

      if (!searchable.includes(q)) {
        return false;
      }
    }

    if (filters.standard !== "all" && product.standard.aws !== filters.standard) {
      return false;
    }

    if (filters.application !== "all" && !product.applications.includes(filters.application)) {
      return false;
    }

    if (filters.industry !== "all" && !product.industries.includes(filters.industry)) {
      return false;
    }

    if (
      filters.tensileStrength !== "all" &&
      product.tensileStrength !== filters.tensileStrength
    ) {
      return false;
    }

    return true;
  });
}

export function getRelatedProducts(product: IndustrialProduct, limit = 3): IndustrialProduct[] {
  return industrialProducts
    .filter((candidate) => candidate.category === product.category && candidate.id !== product.id)
    .slice(0, limit);
}
