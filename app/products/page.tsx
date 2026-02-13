import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { CinematicPageHero } from "@/components/sections/CinematicPageHero";
import { getAllProducts } from "@/lib/industrial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Product Grid",
  description:
    "Dynamic industrial product grid with filters for standards, applications, industries, and tensile requirements.",
  path: "/products",
  keywords: [
    "welding product grid",
    "industrial product filter",
    "b2b consumables finder",
    "welding standard filter"
  ]
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container space-y-8">
        {/* Product-grid hero communicates filter-driven discovery for procurement users. */}
        <CinematicPageHero
          kicker="Product Grid"
          title="Search, Compare, and Shortlist Industrial Products in One View"
          description="Apply standards, application, industry, and tensile filters to quickly identify the right product set for your welding environment."
          image="https://images.pexels.com/photos/8297035/pexels-photo-8297035.jpeg?auto=compress&cs=tinysrgb&w=2000"
          imageAlt="Industrial inventory racks and procurement operations"
          stats={[
            { value: `${products.length}`, label: "Products in Catalog" },
            { value: "AWS/GB", label: "Standard Filters" },
            { value: "Use Case", label: "Application-focused" },
            { value: "Interactive", label: "Live Product Filtering" }
          ]}
          priority
        />

        {/* Filter explorer handles standards/application/industry/tensile matching. */}
        <ProductExplorer products={products} />
      </div>
    </section>
  );
}
