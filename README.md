# JMK Enterprise Website (Next.js 16)

Corporate B2B industrial website starter for **JMK Enterprise** built with **Next.js 16 (App Router)**, **TypeScript**, and **TailwindCSS**.

- Website: `JMK Enterprise`
- Domain: `https://jmkenterprisein.com`
- Industry: Industrial Welding & Hardware Supplier (B2B)

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- TailwindCSS
- Static export compatible (`output: "export"`)

## Project Structure

```txt
app/
  about/page.tsx
  contact/page.tsx
  dealer-inquiry/page.tsx
  products/
    page.tsx
    [category]/page.tsx
    [category]/[slug]/page.tsx
  layout.tsx
  page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
components/
  forms/
    ContactForm.tsx
    InquiryForm.tsx
  layout/
    Header.tsx
    Navbar.tsx
    Footer.tsx
  sections/
    Hero.tsx
    CompanyHighlights.tsx
    CategoryPreview.tsx
    WhyChooseUs.tsx
    InquiryCTA.tsx
  ProductCard.tsx
  ProductDetail.tsx
  seo/SEOHead.tsx
data/
  catalog.json
lib/
  catalog.ts
  seo.ts
  site.ts
types/
  catalog.ts
public/
  images/
  catalogs/
```

## Features Included

- Homepage with hero, highlights, category previews, why choose us, inquiry CTA, WhatsApp CTA
- About page with mission, vision, infrastructure, and certifications section
- Products index + dynamic category pages
- Dynamic product detail routes: `/products/[category]/[slug]`
- Product detail UI with images, specs table, inquiry button, and download catalog button
- Dealer Inquiry and Contact pages with client-side validation forms
- SEO setup:
  - Page-level metadata
  - OpenGraph metadata
  - Site-wide Organization/WebSite JSON-LD
  - Product JSON-LD on product pages
- `404`, `sitemap.xml`, and `robots.txt`
- Data-driven catalog from `data/catalog.json`
- Clean modular architecture for phase-2 CMS integration

## Static Catalog Data

`data/catalog.json` includes sample categories:

- Welding Machines
- Welding Consumables (Electrodes & Wires)
- Tools & Hardware

Sample products (6 included) with:

- title
- images
- specs
- inquiry slug
- description

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & Static Export

```bash
npm run build
```

The project is configured for static export compatibility via `next.config.ts`.

## Phase 2 Ready Notes

- Catalog and route rendering are data-driven for easier CMS migration.
- SEO helper utilities centralize metadata generation.
- Route structure can be extended for locale-based routing in a future phase.
