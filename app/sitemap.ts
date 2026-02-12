import type { MetadataRoute } from "next";
import { getAllProductPaths, getCategories } from "@/lib/catalog";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/products"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    {
      url: absoluteUrl("/dealer-inquiry"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 }
  ];

  const categoryRoutes: MetadataRoute.Sitemap = getCategories().map((category) => ({
    url: absoluteUrl(`/products/${category.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  const productRoutes: MetadataRoute.Sitemap = getAllProductPaths().map((path) => ({
    url: absoluteUrl(`/products/${path.category}/${path.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
