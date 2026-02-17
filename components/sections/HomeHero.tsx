import Link from "next/link";

const heroImage =
  "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=2200";

export function HomeHero() {
  return (
    <section className="relative isolate -mt-20 min-h-[calc(78vh+5rem)] overflow-hidden pt-20">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.2),rgba(7,10,14,0.82)),linear-gradient(90deg,rgba(7,10,14,0.84),rgba(7,10,14,0.45),rgba(7,10,14,0.78))]"
      />

      <div className="industrial-container relative flex min-h-[calc(78vh+5rem)] items-center justify-center py-24 text-center text-white">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
            Industrial Supply Partner
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-tight md:text-6xl">
            Built for High-Uptime Industrial Procurement
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-200">
            Source machines, consumables, tools, and safety gear through a clear category-first buying flow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/categories" className="btn-primary">
              Explore Categories
            </Link>
            <Link href="/dealer-inquiry" className="btn-outline">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
