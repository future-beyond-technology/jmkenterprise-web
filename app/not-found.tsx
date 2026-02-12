import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-[#1C1C1C]">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">404</p>
        <h1 className="mt-3 text-4xl font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-zinc-300">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded bg-[#FC7A02] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#d96300]"
        >
          Go to Homepage
        </Link>
      </div>
    </section>
  );
}
