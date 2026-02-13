import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/lib/catalog";
import { siteConfig, whatsappUrl } from "@/lib/site";

const heroStats = [
  { value: "99.1%", label: "Supply Consistency" },
  { value: "24-48h", label: "Quote Window" },
  { value: "500+", label: "Category SKUs" },
  { value: "PAN India", label: "Dispatch Reach" }
];

const procurementFlow = [
  {
    step: "01",
    title: "Requirement Mapping",
    note: "Collect technical specs, quantity, and delivery timeline."
  },
  {
    step: "02",
    title: "Commercial Structuring",
    note: "Align product mix, pricing slab, and lead-time confirmation."
  },
  {
    step: "03",
    title: "Supply Execution",
    note: "Coordinated dispatch with responsive post-order support."
  }
];

const segmentTags = [
  "Fabrication Plants",
  "OEM Workshops",
  "Infrastructure Projects",
  "Authorized Dealers"
];

export function Hero() {
  const categories = getCategories();
  const heroBackdropImage =
    "https://images.pexels.com/photos/15947586/pexels-photo-15947586.jpeg?auto=compress&cs=tinysrgb&w=2000";
  const visualRail = categories.slice(0, 3).map((category) => ({
    title: category.name,
    image: category.heroImage,
    note: category.summary
  }));

  return (
    <section className="hero-cinematic border-b border-zinc-800">
      <div className="hero-bg-media">
        <Image
          src={heroBackdropImage}
          alt="Industrial team working in a factory environment"
          fill
          className="hero-bg-image"
          sizes="100vw"
          priority
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-sparks" />
        <div className="hero-bg-beam" />
        <div className="hero-bg-beam hero-bg-beam-delay" />
      </div>
      <div className="hero-gridline" />
      <div className="hero-lens" />

      <div className="industrial-container relative py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="reveal-up">
            <p className="accent-kicker">Industrial Welding & Hardware Supplier</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Built Like an Industrial Command Deck for Consistent B2B Procurement
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
              {siteConfig.name} supports B2B teams with structured sourcing across machines,
              consumables, and tools. The platform experience is designed around supply confidence,
              speed, and clarity for repeat purchase cycles.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/dealer-inquiry" className="btn-outline">
                Request B2B Quote
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
                WhatsApp Now
              </a>
            </div>

            <div className="metal-panel mt-8 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">
                Trusted Across Industrial Segments
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {segmentTags.map((segment) => (
                  <span
                    key={segment}
                    className="rounded border border-zinc-700 bg-[#111315] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.11em] text-zinc-200"
                  >
                    {segment}
                  </span>
                ))}
              </div>
            </div>

            <div className="stagger-grid mt-6 grid gap-3 sm:grid-cols-2">
              {heroStats.map((item) => (
                <article key={item.label} className="metric-tile">
                  <p className="text-xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.11em] text-zinc-400">
                    {item.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="reveal-up space-y-4">
            <div className="hero-screen">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">
                    Supply Intelligence Console
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Procurement Workflow</h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {procurementFlow.map((item) => (
                  <article
                    key={item.step}
                    className="rounded-lg border border-zinc-700 bg-[#111315]/90 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#FC7A02]/70 bg-[#FC7A02]/15 text-xs font-semibold text-white">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-zinc-300">{item.note}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="stagger-grid grid gap-3 sm:grid-cols-3">
              {visualRail.map((item) => (
                <article key={item.title} className="showcase-tile">
                  <div className="relative h-32 overflow-hidden rounded-md border border-zinc-700">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-zinc-300">{item.note}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="hero-divider" />
    </section>
  );
}
