import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site";

const heroStats = [
  { value: "250+", label: "Active B2B Accounts" },
  { value: "48 Hrs", label: "Typical Quote Turnaround" },
  { value: "3 Core", label: "Industrial Product Categories" }
];

const sectorCoverage = ["Fabrication Plants", "OEM Workshops", "Project Procurement Teams", "Channel Dealers"];

export function Hero() {
  return (
    <section className="industrial-section-dark relative overflow-hidden border-b border-zinc-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_22%,rgba(196,0,0,0.22),transparent_42%)]" />
      <div className="industrial-container relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div className="reveal-up">
          <p className="accent-kicker">Industrial Welding & Hardware Supplier</p>
          <h1 className="section-title max-w-4xl text-white">
            Corporate-Grade Industrial Supply for Reliable Production and Procurement
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
            {siteConfig.name} helps industrial buyers source machines, consumables, and tools through
            one structured vendor network focused on quality, continuity, and faster commercial response.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>
            <Link href="/dealer-inquiry" className="btn-outline">
              Become a Dealer
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
              WhatsApp Us
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">
            <span className="rounded-full border border-zinc-700 px-3 py-1.5">Bulk Supply Support</span>
            <span className="rounded-full border border-zinc-700 px-3 py-1.5">Category-Wise Catalog</span>
            <span className="rounded-full border border-zinc-700 px-3 py-1.5">Dealer Network Ready</span>
          </div>
        </div>

        <aside className="metal-panel panel-sheen reveal-up p-6 lg:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-zinc-300">
            Performance Snapshot
          </p>

          <div className="stagger-grid mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map((item) => (
              <article key={item.label} className="rounded-md border border-zinc-700 bg-[#101213] p-4">
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-zinc-400">{item.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 border-t border-zinc-700 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-zinc-300">Sector Coverage</p>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-200 sm:grid-cols-2 lg:grid-cols-1">
              {sectorCoverage.map((sector) => (
                <li key={sector} className="rounded border border-zinc-700 bg-[#111315] px-3 py-2">
                  {sector}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
