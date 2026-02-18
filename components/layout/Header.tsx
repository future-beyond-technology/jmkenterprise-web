"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CategoryIcon } from "@/components/navigation/CategoryIcon";
import { getCategoryNodes } from "@/lib/category-structure";
import { companyInfo } from "@/lib/company";
import { siteConfig } from "@/lib/site";

const primaryLinks = siteConfig.navLinks.filter((link) => link.href !== "/");

function getLeafHref(categorySlug: string, subcategorySlug: string, subSubcategorySlug: string) {
  return `/products/${categorySlug}/${subcategorySlug}/${subSubcategorySlug}`;
}

export function Header() {
  const pathname = usePathname();
  const categories = getCategoryNodes();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [megaMenuTop, setMegaMenuTop] = useState(88);
  const megaCloseTimerRef = useRef<number | null>(null);
  const megaTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(
    () => () => {
      if (megaCloseTimerRef.current) {
        window.clearTimeout(megaCloseTimerRef.current);
      }
    },
    []
  );

  useEffect(() => {
    if (!isMegaOpen) {
      return;
    }

    const updateMegaMenuPosition = () => {
      if (!megaTriggerRef.current) {
        return;
      }

      const triggerRect = megaTriggerRef.current.getBoundingClientRect();
      setMegaMenuTop(triggerRect.bottom + 8);
    };

    updateMegaMenuPosition();
    window.addEventListener("resize", updateMegaMenuPosition);
    window.addEventListener("scroll", updateMegaMenuPosition, { passive: true });

    return () => {
      window.removeEventListener("resize", updateMegaMenuPosition);
      window.removeEventListener("scroll", updateMegaMenuPosition);
    };
  }, [isMegaOpen]);

  const shouldUseSolidHeader = pathname !== "/" || isScrolled || isMegaOpen || isMobileOpen;

  const clearMegaCloseTimer = () => {
    if (megaCloseTimerRef.current) {
      window.clearTimeout(megaCloseTimerRef.current);
      megaCloseTimerRef.current = null;
    }
  };

  const openMegaMenu = () => {
    clearMegaCloseTimer();
    setIsMegaOpen(true);
  };

  const scheduleMegaMenuClose = () => {
    clearMegaCloseTimer();
    megaCloseTimerRef.current = window.setTimeout(() => {
      setIsMegaOpen(false);
      megaCloseTimerRef.current = null;
    }, 260);
  };

  const closeMenus = () => {
    clearMegaCloseTimer();
    setIsMobileOpen(false);
    setIsMegaOpen(false);
  };

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        shouldUseSolidHeader
          ? "border-b border-slate-700/70 bg-slate-950/95 shadow-[0_10px_28px_rgba(2,6,23,0.45)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      ].join(" ")}
    >
      <div className="industrial-container">
        <div className="flex min-h-20 items-center gap-4">
          <Link
            href="/"
            onClick={closeMenus}
            className="inline-flex min-h-11 items-center gap-3 rounded-lg px-1 transition hover:bg-white/5"
          >
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              className="h-10 w-10 rounded-sm object-contain sm:h-12 sm:w-12"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.11em] text-white">{siteConfig.name}</p>
              <p className="text-[11px] uppercase tracking-[0.12em] text-slate-300">
                Industrial Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-end gap-1 xl:flex" aria-label="Primary">
            <Link
              href="/"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={openMegaMenu}
              onMouseLeave={scheduleMegaMenuClose}
            >
              <button
                ref={megaTriggerRef}
                type="button"
                aria-expanded={isMegaOpen}
                aria-controls="desktop-mega-menu"
                onClick={() => {
                  clearMegaCloseTimer();
                  setIsMegaOpen((value) => !value);
                }}
                className="inline-flex min-h-11 items-center gap-2 rounded-lg px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                Product Categories
                <span aria-hidden className="text-xs">
                  ▼
                </span>
              </button>

              {/* Hover bridge keeps mega menu open while moving cursor from trigger to panel. */}
              <div
                aria-hidden
                className={[
                  "fixed left-1/2 z-[49] h-3 w-[min(96vw,76rem)] -translate-x-1/2",
                  isMegaOpen ? "pointer-events-auto" : "pointer-events-none"
                ].join(" ")}
                style={{ top: megaMenuTop - 8 }}
                onMouseEnter={openMegaMenu}
                onMouseLeave={scheduleMegaMenuClose}
              />

              <div
                id="desktop-mega-menu"
                className={[
                  "fixed left-1/2 z-50 max-h-[70vh] w-[min(96vw,76rem)] -translate-x-1/2 overflow-y-auto overscroll-contain rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-[0_25px_45px_rgba(2,6,23,0.55)] transition-all duration-200",
                  isMegaOpen
                    ? "visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-y-1 opacity-0"
                ].join(" ")}
                style={{ top: megaMenuTop }}
                onMouseEnter={openMegaMenu}
                onMouseLeave={scheduleMegaMenuClose}
              >
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {categories.map((category) => (
                    <article key={category.slug} className="rounded-xl border border-slate-800 bg-slate-900/75 p-4">
                      <Link
                        href={`/products/${category.slug}`}
                        onClick={closeMenus}
                        className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        <CategoryIcon icon={category.icon} className="h-4 w-4 text-orange-300" />
                        {category.name}
                      </Link>

                      <div className="mt-2 space-y-3">
                        {category.subcategories.map((subcategory) => (
                          <section key={subcategory.slug}>
                            <p className="px-2 text-xs font-semibold uppercase tracking-[0.13em] text-slate-400">
                              {subcategory.name}
                            </p>
                            <ul className="mt-1 space-y-1">
                              {subcategory.subSubcategories.map((subSubcategory) => (
                                <li key={subSubcategory.slug}>
                                  <Link
                                    href={getLeafHref(category.slug, subcategory.slug, subSubcategory.slug)}
                                    onClick={closeMenus}
                                    className="inline-flex min-h-10 w-full items-center rounded-md px-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
                                  >
                                    {subSubcategory.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className="inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <form action="/products" role="search" onSubmit={closeMenus} className="ml-2 flex items-center gap-2">
              <label htmlFor="header-search" className="sr-only">
                Search products
              </label>
              <input
                id="header-search"
                name="q"
                type="search"
                placeholder="Search products"
                className="h-10 w-52 rounded-lg border border-slate-600 bg-slate-900 px-3 text-sm text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/35"
              />
              <button
                type="submit"
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-orange-500 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-orange-400"
              >
                Go
              </button>
            </form>

            <Link href="/dealer-inquiry" onClick={closeMenus} className="btn-primary nav-quote-btn ml-2">
              Get Quote
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <a
              href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
              className="inline-flex min-h-10 items-center rounded-md border border-slate-600 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-slate-200"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => setIsMobileOpen((value) => !value)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-panel"
              className="inline-flex min-h-10 items-center rounded-md border border-slate-600 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-slate-200"
            >
              Menu
            </button>
          </div>
        </div>

        <div
          id="mobile-nav-panel"
          className={[
            "border-t border-slate-700 transition-all duration-300 xl:hidden",
            isMobileOpen
              ? "max-h-[85vh] overflow-y-auto overscroll-contain pb-5 pt-4 opacity-100"
              : "max-h-0 overflow-hidden pb-0 pt-0 opacity-0"
          ].join(" ")}
        >
          <form action="/products" role="search" onSubmit={closeMenus} className="flex items-center gap-2">
            <label htmlFor="mobile-header-search" className="sr-only">
              Search products
            </label>
            <input
              id="mobile-header-search"
              name="q"
              type="search"
              placeholder="Search products"
              className="h-11 flex-1 rounded-lg border border-slate-600 bg-slate-900 px-3 text-sm text-white placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400/35"
            />
            <button
              type="submit"
              className="inline-flex h-11 min-w-12 items-center justify-center rounded-lg bg-orange-500 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-white"
            >
              Go
            </button>
          </form>

          <div className="mt-4 grid gap-1">
            <Link
              href="/"
              onClick={closeMenus}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-slate-100 transition hover:bg-slate-800"
            >
              Home
            </Link>
            {primaryLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={closeMenus}
                className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-slate-100 transition hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {categories.map((category) => (
              <details key={category.slug} className="rounded-xl border border-slate-700 bg-slate-900/70 p-3">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-1 py-1 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                  <span className="inline-flex items-center gap-2">
                    <CategoryIcon icon={category.icon} className="h-4 w-4 text-orange-300" />
                    {category.name}
                  </span>
                  <span className="text-xs text-slate-400">▼</span>
                </summary>

                <div className="mt-3 space-y-2 border-t border-slate-700 pt-3">
                  {category.subcategories.map((subcategory) => (
                    <details
                      key={subcategory.slug}
                      className="rounded-lg border border-slate-700/80 bg-slate-950/65 p-2"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-1.5 text-sm text-slate-100 [&::-webkit-details-marker]:hidden">
                        <span>{subcategory.name}</span>
                        <span className="text-xs text-slate-400">+</span>
                      </summary>
                      <ul className="mt-2 space-y-1 px-1 pb-1">
                        {subcategory.subSubcategories.map((subSubcategory) => (
                          <li key={subSubcategory.slug}>
                            <Link
                              href={getLeafHref(category.slug, subcategory.slug, subSubcategory.slug)}
                              onClick={closeMenus}
                              className="inline-flex min-h-10 w-full items-center rounded-md px-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white"
                            >
                              {subSubcategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <Link href="/dealer-inquiry" onClick={closeMenus} className="btn-primary nav-quote-btn mt-4 w-full">
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
