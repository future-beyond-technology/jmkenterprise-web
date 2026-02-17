import categoryStructureData from "@/data/category-structure.json";
import { industrialProducts } from "@/data/industrial-products";
import type {
  CategoryLeafPath,
  CategoryNode,
  CategoryTree,
  SubSubcategoryNode,
  SubcategoryNode
} from "@/types/category-structure";
import type { IndustrialProduct } from "@/types/industrial";

const categoryTree = categoryStructureData as CategoryTree;
const productById = new Map(industrialProducts.map((product) => [product.id, product]));

export function getCategoryTree(): CategoryTree {
  return categoryTree;
}

export function getCategoryNodes(): CategoryNode[] {
  return categoryTree.categories;
}

export function getCategoryNode(categorySlug: string): CategoryNode | undefined {
  return categoryTree.categories.find((category) => category.slug === categorySlug);
}

export function getSubcategoryNode(
  categorySlug: string,
  subcategorySlug: string
): SubcategoryNode | undefined {
  const category = getCategoryNode(categorySlug);

  if (!category) {
    return undefined;
  }

  return category.subcategories.find((subcategory) => subcategory.slug === subcategorySlug);
}

export function getSubSubcategoryNode(
  categorySlug: string,
  subcategorySlug: string,
  subSubcategorySlug: string
): SubSubcategoryNode | undefined {
  const subcategory = getSubcategoryNode(categorySlug, subcategorySlug);

  if (!subcategory) {
    return undefined;
  }

  return subcategory.subSubcategories.find((node) => node.slug === subSubcategorySlug);
}

function mapProductIdsToProducts(productIds: string[]): IndustrialProduct[] {
  return productIds
    .map((productId) => productById.get(productId))
    .filter((product): product is IndustrialProduct => Boolean(product));
}

export function getProductsForCategory(categorySlug: string): IndustrialProduct[] {
  const category = getCategoryNode(categorySlug);

  if (!category) {
    return [];
  }

  const ids = category.subcategories.flatMap((subcategory) =>
    subcategory.subSubcategories.flatMap((subSubcategory) => subSubcategory.productIds)
  );

  return mapProductIdsToProducts(ids);
}

export function getProductsForLeafPath(path: CategoryLeafPath): IndustrialProduct[] {
  const node = getSubSubcategoryNode(path.category, path.subcategory, path.subSubcategory);

  if (!node) {
    return [];
  }

  return mapProductIdsToProducts(node.productIds);
}

export function getCategoryLeafPaths(): CategoryLeafPath[] {
  return categoryTree.categories.flatMap((category) =>
    category.subcategories.flatMap((subcategory) =>
      subcategory.subSubcategories.map((subSubcategory) => ({
        category: category.slug,
        subcategory: subcategory.slug,
        subSubcategory: subSubcategory.slug
      }))
    )
  );
}

export function getLeafPathByProductId(productId: string): CategoryLeafPath | undefined {
  for (const category of categoryTree.categories) {
    for (const subcategory of category.subcategories) {
      for (const subSubcategory of subcategory.subSubcategories) {
        if (subSubcategory.productIds.includes(productId)) {
          return {
            category: category.slug,
            subcategory: subcategory.slug,
            subSubcategory: subSubcategory.slug
          };
        }
      }
    }
  }

  return undefined;
}

export function getCategoryPathLabel(path: CategoryLeafPath) {
  const category = getCategoryNode(path.category);
  const subcategory = getSubcategoryNode(path.category, path.subcategory);
  const subSubcategory = getSubSubcategoryNode(
    path.category,
    path.subcategory,
    path.subSubcategory
  );

  if (!category || !subcategory || !subSubcategory) {
    return undefined;
  }

  return {
    category,
    subcategory,
    subSubcategory
  };
}
