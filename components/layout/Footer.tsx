import Link from "next/link";
import { getCategorySummaries } from "@/lib/industrial";
import { companyInfo } from "@/lib/company";
import { siteConfig } from "@/lib/site";

const trustBadges = ["GST Verified", "MSME Registered", "IEC Enabled", "B2B Support Desk"];

export function Footer() {
  const categories = getCategorySummaries();

  return (
    <footer className="mt-16 border-t border-zinc-800 bg-[#0c0f10] pb-24">
      <div className="industrial-container py-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr]">
          <section className="rounded-xl border border-zinc-700 bg-[#111315] p-5">
            <h3 className="text-xl font-semibold text-zinc-100">{companyInfo.companyName}</h3>
            <p className="mt-2 text-sm text-zinc-300">{companyInfo.businessType}</p>
            <p className="mt-3 text-sm text-zinc-400">{companyInfo.address}</p>

            {/* Trust badges reinforce compliance signals at the final conversion touchpoint. */}
            <div className="mt-4 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded border border-zinc-700 bg-[#0f1112] px-2.5 py-1 text-[11px] uppercase tracking-[0.1em] text-zinc-400"
                >
                  {badge}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-zinc-700 bg-[#111315] p-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Quick Links</h4>
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

          <section className="rounded-xl border border-zinc-700 bg-[#111315] p-5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">Categories</h4>
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

      <div className="border-t border-zinc-800 px-4 py-5 text-center text-xs uppercase tracking-[0.1em] text-zinc-500">
        <p>
          © {new Date().getFullYear()} {companyInfo.companyName}. Enterprise Industrial Procurement Partner.
        </p>
      </div>
    </footer>
  );
}
