import type { CategoryIcon as CategoryIconType } from "@/types/category-structure";

type CategoryIconProps = {
  icon: CategoryIconType;
  className?: string;
};

export function CategoryIcon({ icon, className = "h-5 w-5" }: CategoryIconProps) {
  if (icon === "wire") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M3 12h8a3 3 0 1 0 0-6h-1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M21 12h-8a3 3 0 1 0 0 6h1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "machine") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 10h5M14 14h5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "tool") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M14 5a4 4 0 0 0-5 5l-5 5 3 3 5-5a4 4 0 0 0 5-5l-3 3-2-2z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
