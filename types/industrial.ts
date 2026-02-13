export type ProductStandard = {
  aws: string;
  gb: string;
};

export type UseCase = {
  title: string;
  image: string;
  description: string;
};

export type TechnicalDoc = {
  label: string;
  url: string;
};

export type IndustrialProduct = {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  code: string;
  shortDescription: string;
  description: string;
  images: string[];
  standard: ProductStandard;
  tensileStrength: string;
  applications: string[];
  industries: string[];
  specification: Record<string, string>;
  useCases: UseCase[];
  videos: string[];
  technicalDocs: TechnicalDoc[];
  featured: boolean;
};

export type CategoryMeta = {
  slug: string;
  name: string;
  description: string;
  icon: "wire" | "machine" | "tool" | "shield";
  bannerImage: string;
  accent: string;
};

export type CategorySummary = CategoryMeta & {
  productCount: number;
  featuredCodes: string[];
};

export type ProductFilterState = {
  query: string;
  standard: string;
  application: string;
  industry: string;
  tensileStrength: string;
};

export type ProductFilterOptions = {
  standards: string[];
  applications: string[];
  industries: string[];
  tensileStrengths: string[];
};
