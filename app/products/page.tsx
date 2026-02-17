import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ProductExplorer } from "@/components/sections/ProductExplorer";
import { getAllProducts } from "@/lib/industrial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All Products",
  description:
    "Browse all industrial products with search and filter controls for standards, applications, and industries.",
  path: "/products",
  keywords: ["industrial products", "product filters", "b2b procurement catalog"]
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="bg-slate-50 py-10 text-slate-900">
      <div className="industrial-container space-y-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />

        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">Product Listing</h1>
          <p className="mt-3 text-slate-600">
            Use filters to narrow your shortlist quickly by standard, application, and industry.
          </p>
        </header>

        <ProductExplorer products={products} />
      </div>
    </section>
  );
}
