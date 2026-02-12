import Image from "next/image";
import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#101213]/92 backdrop-blur-md">
      <div className="border-b border-zinc-800/70 bg-[#0d0f10]">
        <div className="industrial-container flex flex-wrap items-center justify-between gap-3 py-2 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
          <p>Industrial Welding & Hardware Supplier</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-zinc-200">
              {siteConfig.email}
            </a>
            <span>{siteConfig.businessHours}</span>
          </div>
        </div>
      </div>

      <div className="industrial-container flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} Logo`}
            width={198}
            height={52}
            priority
          />
          <span className="hidden border-l border-zinc-700 pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300 sm:inline">
            Trusted B2B Procurement Partner
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.1em]">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="rounded-md border border-zinc-700 px-3.5 py-2 text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900"
          >
            {siteConfig.phone}
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
