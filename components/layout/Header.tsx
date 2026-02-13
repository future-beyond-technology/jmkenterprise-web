import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/company";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    // Sticky top bar keeps brand identity and inquiry CTA always reachable.
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#0d1012]/92 backdrop-blur-md">
      <div className="industrial-container flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            width={56}
            height={56}
            className="h-12 w-12 rounded-sm object-contain"
            priority
          />
          <div>
            <p className="text-base font-semibold uppercase tracking-[0.09em] text-zinc-100">{siteConfig.name}</p>
            <p className="text-[11px] uppercase tracking-[0.13em] text-zinc-400">
              B2B Industrial Supplier
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="rounded-md border border-zinc-700 px-3 py-2 font-semibold uppercase tracking-[0.1em] text-zinc-200"
          >
            {companyInfo.phone}
          </a>
          <Link href="/dealer-inquiry" className="btn-primary">
            Enterprise Inquiry
          </Link>
        </div>
      </div>
    </header>
  );
}
