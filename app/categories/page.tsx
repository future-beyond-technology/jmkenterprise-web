import { CategoryCard } from "@/components/CategoryCard";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { VisualStory } from "@/components/sections/VisualStory";
import { getCategorySummaries } from "@/lib/industrial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Categories",
  description:
    "Browse enterprise-ready welding consumables, machines, tools, and safety gear categories with clear use-case visuals.",
  path: "/categories",
  keywords: ["industrial categories", "welding portfolio", "B2B product categories"]
});

export default function CategoriesPage() {
  const categories = getCategorySummaries();

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-8">
        {/* Hero establishes why category architecture matters for enterprise sourcing. */}
        <CinematicPageHero
          kicker="Industrial Categories"
          title="Category Architecture Built for Faster Procurement Decisions"
          description="Each category is designed to help buyers quickly understand standards, application fit, and operating context."
          image="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Industrial team reviewing equipment and process charts"
          stats={[
            { value: `${categories.length}`, label: "Primary Categories" },
            { value: "Use-Case", label: "Navigation by Application" },
            { value: "Visual", label: "Context-rich Product Story" },
            { value: "B2B", label: "Buyer-focused UX" }
          ]}
          priority
        />

        {/* Category cards include visual identity, counts, and direct deep links. */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>

      <VisualStory />
    </section>
  );
}
