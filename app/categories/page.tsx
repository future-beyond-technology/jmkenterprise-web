import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { CategoryNavigationSection } from "@/components/sections/CategoryNavigationSection";
import { getCategoryNodes } from "@/lib/category-structure";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description:
    "Browse main industrial categories with clear subcategory hierarchy and fast navigation.",
  path: "/categories",
  keywords: ["industrial categories", "corporate category navigation", "b2b product categories"]
});

export default function CategoriesPage() {
  const categories = getCategoryNodes();

  return (
    <>
      <section className="bg-slate-100 py-10 text-slate-900">
        <div className="industrial-container">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Categories" }]} />
          <header className="mt-4 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight">Industrial Categories</h1>
            <p className="mt-3 text-slate-600">
              Choose a main category to continue into subcategory and sub-subcategory product listings.
            </p>
          </header>
        </div>
      </section>

      <CategoryNavigationSection categories={categories} />
    </>
  );
}
