export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  category: string;
  slug: string;
  inquirySlug: string;
  title: string;
  shortDescription: string;
  description: string;
  images: string[];
  specs: ProductSpecification[];
  catalogUrl: string;
  keywords: string[];
};

export type CategorySeo = {
  title: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  summary: string;
  heroImage: string;
  seo: CategorySeo;
  products: Product[];
};

export type Catalog = {
  categories: Category[];
};
