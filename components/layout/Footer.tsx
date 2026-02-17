import Link from "next/link";
import { getCategoryNodes } from "@/lib/category-structure";
import { companyInfo } from "@/lib/company";
import { siteConfig, whatsappUrl } from "@/lib/site";

const socialLinks = [
  { label: "WhatsApp", href: whatsappUrl },
  { label: "Google Maps", href: companyInfo.googleMapsPlaceUrl },
  { label: "Email", href: `mailto:${companyInfo.email}` }
];

export function Footer() {
  const categories = getCategoryNodes();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="industrial-container py-14">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <section>
            <h2 className="text-lg font-semibold text-white">{companyInfo.companyName}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{companyInfo.businessType}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{companyInfo.address}</p>
            <p className="mt-3 text-sm text-slate-300">
              <a href={`tel:${companyInfo.phone}`} className="transition hover:text-white">
                {companyInfo.phone}
              </a>
            </p>
            <p className="mt-1 text-sm text-slate-300">
              <a href={`mailto:${companyInfo.email}`} className="transition hover:text-white">
                {companyInfo.email}
              </a>
            </p>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Quick Links</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-10 items-center rounded-md px-2 transition hover:bg-slate-800 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Categories</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/products/${category.slug}`}
                    className="inline-flex min-h-10 items-center rounded-md px-2 transition hover:bg-slate-800 hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Social</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-10 items-center rounded-md px-2 transition hover:bg-slate-800 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs uppercase tracking-[0.1em] text-slate-500">
        <p>
          © {new Date().getFullYear()} {companyInfo.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
