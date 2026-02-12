import { CategoryPreview } from "@/components/sections/CategoryPreview";
import { CompanyHighlights } from "@/components/sections/CompanyHighlights";
import { Hero } from "@/components/sections/Hero";
import { InquiryCTA } from "@/components/sections/InquiryCTA";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { getCategories } from "@/lib/catalog";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.title,
  description:
    "JMK Enterprise is a B2B supplier of welding machines, electrodes, wires, tools, and industrial hardware with responsive inquiry support.",
  path: "/",
  keywords: ["industrial hardware supplier", "welding machines India", "B2B welding products"]
});

export default function HomePage() {
  const categories = getCategories();

  return (
    <>
      <Hero />
      <CompanyHighlights />
      <CategoryPreview categories={categories} />
      <WhyChooseUs />
      <InquiryCTA />
    </>
  );
}
