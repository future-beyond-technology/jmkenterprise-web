import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  const categories = getCategories();

  return (
    <footer className="border-t border-zinc-800 bg-[#0d0f10]">
      <div className="industrial-container py-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <section className="metal-panel panel-sheen p-5">
            <h3 className="text-xl font-semibold text-white">{siteConfig.name}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{siteConfig.description}</p>
          </section>

          <section className="metal-panel p-5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.17em] text-zinc-300">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-200">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="metal-panel p-5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.17em] text-zinc-300">
              Categories
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-200">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/products/${category.slug}`} className="transition hover:text-white">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="metal-panel p-5">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.17em] text-zinc-300">
              Contact
            </h4>
            <div className="mt-3 space-y-2 text-sm text-zinc-200">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  WhatsApp Chat
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-4 text-center text-xs uppercase tracking-[0.1em] text-zinc-400">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
