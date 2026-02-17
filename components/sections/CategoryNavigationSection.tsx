import Link from "next/link";
import { CategoryIcon } from "@/components/navigation/CategoryIcon";
import type { CategoryNode } from "@/types/category-structure";

type CategoryNavigationSectionProps = {
  categories: CategoryNode[];
};

function getPrimaryListingPath(category: CategoryNode) {
  const firstSubcategory = category.subcategories[0];
  const firstLeaf = firstSubcategory?.subSubcategories[0];

  if (!firstSubcategory || !firstLeaf) {
    return `/products/${category.slug}`;
  }

  return `/products/${category.slug}/${firstSubcategory.slug}/${firstLeaf.slug}`;
}

export function CategoryNavigationSection({ categories }: CategoryNavigationSectionProps) {
  return (
    <section className="bg-slate-50 py-20 text-slate-900">
      <div className="industrial-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">Category Navigation</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Start by Main Category</h2>
          <p className="mt-3 text-slate-600">Navigate faster with clearly grouped industrial categories.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.slug}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.14)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <CategoryIcon icon={category.icon} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
              <div className="mt-5">
                <Link
                  href={getPrimaryListingPath(category)}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Browse Category
                  <span className="ml-2" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
