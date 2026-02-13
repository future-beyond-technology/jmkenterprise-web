import Link from "next/link";
import { getCategorySummaries } from "@/lib/industrial";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const categories = getCategorySummaries();

  return (
    <nav className="border-b border-zinc-800 bg-[#111417]/95">
      <div className="industrial-container py-3">
        <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-zinc-300 sm:text-sm">
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

        {/* Horizontal category chips provide direct drill-down into each industrial vertical. */}
        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Industrial Categories
          </span>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="shrink-0 rounded-full border border-zinc-700 bg-[#0f1112] px-3 py-1.5 text-xs font-semibold text-zinc-100 transition hover:border-orange-500 hover:bg-orange-500/15"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
