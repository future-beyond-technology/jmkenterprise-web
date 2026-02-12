import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";

type ProductCardProps = {
  product: Product;
  categorySlug: string;
  categoryName?: string;
};

export function ProductCard({ product, categorySlug, categoryName }: ProductCardProps) {
  return (
    <article className="metal-panel group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-[#FC7A02]/80">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-zinc-700">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pb-3 pt-8 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-200">
          {categoryName || "Industrial Product"}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{product.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-300">{product.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.slice(0, 2).map((spec) => (
            <span
              key={`${product.id}-${spec.label}`}
              className="rounded border border-zinc-700 bg-[#111315] px-2.5 py-1 text-[11px] uppercase tracking-[0.09em] text-zinc-300"
            >
              {spec.label}
            </span>
          ))}
        </div>

        <Link href={`/products/${categorySlug}/${product.slug}`} className="btn-subtle mt-5">
          View Product
        </Link>
      </div>
    </article>
  );
}
