# Scalable Frontend Folder Structure

```text
app/
  layout.tsx
  page.tsx
  categories/page.tsx
  products/page.tsx
  products/[category]/page.tsx
  products/[category]/[subcategory]/[subSubcategory]/page.tsx
  products/[category]/[slug]/page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
  navigation/
    Breadcrumbs.tsx
    CategoryIcon.tsx
  sections/
    HomeHero.tsx
    CategoryNavigationSection.tsx
    ProductExplorer.tsx
  FilterSidebar.tsx
  ProductCard.tsx

data/
  category-structure.json
  industrial-products.ts

lib/
  category-structure.ts
  industrial.ts
  seo.ts
  site.ts

types/
  category-structure.ts
  industrial.ts
```
