import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustSection } from "@/components/sections/TrustSection";
import { VisualStory } from "@/components/sections/VisualStory";
import { getCategorySummaries, getFeaturedProducts } from "@/lib/industrial";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description:
    "Enterprise B2B supplier for welding wires, machines, tools, and protective gear with visual product storytelling and industry use-case support.",
  path: "/",
  keywords: [
    "enterprise welding supplier",
    "industrial consumables b2b",
    "welding machine procurement",
    "fabrication tools wholesale"
  ]
});

export default function HomePage() {
  const categories = getCategorySummaries();
  const featuredProducts = getFeaturedProducts(6);

  return (
    <>
      {/* Primary visual conversion hero with video backdrop and rotating value slides. */}
      <Hero />

      {/* Category-first navigation helps enterprise buyers shortlist faster. */}
      <section className="industrial-section-dark border-y border-zinc-800">
        <div className="industrial-container">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="accent-kicker">Category Showcase</p>
              <h2 className="section-title text-white">Industrial Portfolio Designed for B2B Buyers</h2>
            </div>
            <Link href="/categories" className="btn-outline">
              View All Categories
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured grid highlights high-intent products with quick inquiry CTAs. */}
      <section className="industrial-section-dark border-b border-zinc-800">
        <div className="industrial-container">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="accent-kicker">Featured Products</p>
              <h2 className="section-title text-white">Visual Product Stories with Technical Clarity</h2>
            </div>
            <Link href="/products" className="btn-outline">
              Open Product Grid
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual process storytelling + trust blocks improve buyer confidence. */}
      <VisualStory />
      <TrustSection />
      <Testimonials />

      {/* Multi-step lead capture section optimized for B2B procurement teams. */}
      <section className="industrial-section-dark border-t border-zinc-800">
        <div className="industrial-container grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <article className="metal-panel p-6">
            <p className="accent-kicker">Lead Generation UX</p>
            <h2 className="section-title text-white">Start Enterprise Procurement Conversation in 3 Steps</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Tell us your process, standard requirements, and monthly demand profile. We return a
              practical product mix with clear technical and commercial recommendations.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>Dynamic requirement capture for faster quote readiness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>Use-case context improves product suitability from first response</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400" />
                <span>Built for procurement teams, dealers, and project buyers</span>
              </li>
            </ul>
          </article>

          <LeadForm />
        </div>
      </section>
    </>
  );
}
