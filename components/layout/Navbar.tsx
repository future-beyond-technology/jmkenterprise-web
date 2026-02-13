import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const categories = getCategories();

  return (
    <nav className="border-b border-zinc-800 bg-[linear-gradient(90deg,#131719,#191d20,#131719)]">
      <div className="industrial-container py-3">
        <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-zinc-200 sm:text-sm">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-md border border-transparent px-3 py-2 transition hover:border-zinc-600 hover:bg-zinc-900/70 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Categories
          </span>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="shrink-0 rounded-full border border-zinc-700 bg-[#111315] px-3 py-1.5 text-xs font-semibold text-zinc-100 transition hover:border-[#FC7A02] hover:bg-[#FC7A02]/20"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
