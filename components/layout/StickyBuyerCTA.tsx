"use client";

import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function StickyBuyerCTA() {
  return (
    // Persistent bottom CTA keeps enterprise conversion options accessible on long pages.
    <div className="fixed bottom-3 left-0 right-0 z-50 px-3">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-2 rounded-2xl border border-zinc-700 bg-[#0f1112]/95 p-3 shadow-[0_16px_28px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-300">
          Enterprise buyer?
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/dealer-inquiry" className="btn-primary">
            Request Quote
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-subtle">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
