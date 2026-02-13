import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";

type ProductDetailProps = {
  product: Product;
  categoryName: string;
  categorySlug: string;
};

export function ProductDetail({ product, categoryName, categorySlug }: ProductDetailProps) {
  const [primaryImage, ...secondaryImages] = product.images;

  return (
    <section className="industrial-section-dark">
      <div className="industrial-container">
        <nav
          aria-label="Breadcrumb"
          className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.1em] text-zinc-400"
        >
          <Link href="/" className="hover:text-zinc-200">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-zinc-200">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${categorySlug}`} className="hover:text-zinc-200">
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-zinc-200">{product.title}</span>
        </nav>

        <p className="accent-kicker">{categoryName}</p>
        <h1 className="section-title text-white">{product.title}</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">{product.description}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-4">
            <div className="metal-panel relative aspect-[16/10] overflow-hidden">
              <Image
                src={primaryImage}
                alt={`${product.title} primary visual`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            {secondaryImages.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {secondaryImages.map((image, index) => (
                  <div
                    key={`${product.id}-${image}-${index}`}
                    className="metal-panel relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${product.title} supporting visual ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 26vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="metal-panel p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.11em] text-zinc-400">
                Purchase Guidance
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">
                Select product specifications that match your operating duty cycle and monthly
                consumption. For exact model/grade matching, share application details via inquiry.
              </p>
            </div>
          </div>

          <aside className="metal-panel panel-sheen sticky top-28 p-6">
            <h2 className="text-2xl font-semibold text-white">Technical Specifications</h2>
            <table className="mt-4 w-full border-collapse text-sm">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label} className="border-b border-zinc-700">
                    <th className="w-1/2 py-3 text-left font-medium text-zinc-300">{spec.label}</th>
                    <td className="py-3 text-zinc-100">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link href={`/dealer-inquiry?product=${encodeURIComponent(product.inquirySlug)}`} className="btn-primary">
                Send Inquiry
              </Link>
              <a href={product.catalogUrl} download className="btn-outline">
                Download Catalog
              </a>
              <Link href={`/products/${categorySlug}`} className="btn-subtle">
                Back to Category
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
