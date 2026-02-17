import { CategoryNavigationSection } from "@/components/sections/CategoryNavigationSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { getCategoryNodes } from "@/lib/category-structure";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description:
    "Corporate industrial supplier for welding consumables, machines, tools, and safety equipment with category-first navigation.",
  path: "/",
  keywords: [
    "industrial procurement website",
    "welding product categories",
    "corporate industrial supplier",
    "b2b welding equipment"
  ]
});

export default function HomePage() {
  const categories = getCategoryNodes();

  return (
    <>
      <HomeHero />
      <CategoryNavigationSection categories={categories} />
    </>
  );
}
