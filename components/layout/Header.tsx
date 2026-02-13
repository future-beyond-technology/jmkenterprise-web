import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/company";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-zinc-800/80 bg-[#101214]/88 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(252,122,2,0.2),transparent_42%),linear-gradient(90deg,rgba(255,255,255,0.04),transparent_35%,rgba(255,255,255,0.04))]" />

      <div className="relative border-b border-zinc-800/70 bg-[#0d0f10]/90">
        <div className="industrial-container flex items-center justify-between gap-3 py-2 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
          <p className="truncate">{companyInfo.businessType}</p>
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="shrink-0 font-semibold text-zinc-200 transition hover:text-white"
          >
            {companyInfo.phone}
          </a>
        </div>
      </div>

      <div className="industrial-container relative flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} Logo`}
            width={64}
            height={64}
            className="h-14 w-14 rounded-sm object-contain"
            priority
          />
          <div className="hidden border-l border-zinc-700 pl-3 sm:block">
            <p className="text-lg font-semibold uppercase tracking-[0.09em] text-zinc-100">
              {companyInfo.companyName}
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-300">
              Trusted B2B Procurement Partner
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.1em]">
          <a
            href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
            className="rounded-md border border-zinc-700 px-3.5 py-2 text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            {companyInfo.phone}
          </a>
          <Link href="/dealer-inquiry" className="btn-primary">
            Dealer Inquiry
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
