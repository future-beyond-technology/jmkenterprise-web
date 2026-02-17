export type CategoryIcon = "wire" | "machine" | "tool" | "shield";

export type SubSubcategoryNode = {
  id: string;
  name: string;
  slug: string;
  description: string;
  productIds: string[];
};

export type SubcategoryNode = {
  id: string;
  name: string;
  slug: string;
  description: string;
  subSubcategories: SubSubcategoryNode[];
};

export type CategoryNode = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: CategoryIcon;
  heroImage: string;
  subcategories: SubcategoryNode[];
};

export type CategoryTree = {
  categories: CategoryNode[];
};

export type CategoryLeafPath = {
  category: string;
  subcategory: string;
  subSubcategory: string;
};
