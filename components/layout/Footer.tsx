import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { companyInfo } from "@/lib/company";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const categories = getCategories();

  return (
    <footer className="border-t border-zinc-800 bg-[#0d0f10]">
      <div className="industrial-container py-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <section className="metal-panel panel-sheen p-5">
            <h3 className="text-xl font-semibold text-white">{companyInfo.companyName}</h3>
            <p className="mt-2 text-sm text-zinc-300">{companyInfo.businessType}</p>
            <div className="mt-4 space-y-2 text-sm text-zinc-200">
              <p>{companyInfo.address}</p>
              <p>
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="transition hover:text-white">
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${companyInfo.email}`} className="transition hover:text-white">
                  {companyInfo.email}
                </a>
              </p>
            </div>
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
              Product Categories
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
        </div>
      </div>

      <div className="border-t border-zinc-800 px-4 py-4 text-center text-xs uppercase tracking-[0.1em] text-zinc-400">
        <p>Trade Name: {companyInfo.legalDetails.tradeName}</p>
        <p className="mt-1">GSTIN | MSME Registered | IEC Certified</p>
        <p className="mt-1">© {new Date().getFullYear()} {companyInfo.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
