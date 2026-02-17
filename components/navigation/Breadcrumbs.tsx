import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
};

export function Breadcrumbs({
  items,
  className = "",
  variant = "light"
}: BreadcrumbsProps) {
  const textClass = variant === "dark" ? "text-slate-300" : "text-slate-600";
  const hoverClass =
    variant === "dark"
      ? "hover:bg-white/10 hover:text-white"
      : "hover:bg-slate-200 hover:text-slate-900";
  const separatorClass = variant === "dark" ? "text-slate-500" : "text-slate-400";
  const activeClass = variant === "dark" ? "font-semibold text-white" : "font-semibold text-slate-900";

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${textClass}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`rounded-md px-1.5 py-1 transition ${hoverClass}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? activeClass : ""}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden className={separatorClass}>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
