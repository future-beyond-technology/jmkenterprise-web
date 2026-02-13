import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "outline" | "subtle";
};

type HeroStat = {
  value: string;
  label: string;
};

type CinematicPageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  actions?: HeroAction[];
  stats?: HeroStat[];
  priority?: boolean;
};

function getActionClass(variant: HeroAction["variant"]) {
  if (variant === "outline") {
    return "btn-outline";
  }

  if (variant === "subtle") {
    return "btn-subtle";
  }

  return "btn-primary";
}

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

export function CinematicPageHero({
  kicker,
  title,
  description,
  image,
  imageAlt,
  actions = [],
  stats = [],
  priority = false
}: CinematicPageHeroProps) {
  return (
    <section className="page-hero-shell reveal-up">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="page-hero-image"
        sizes="100vw"
        priority={priority}
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-shine" />

      <div className="page-hero-content">
        <div>
          <p className="accent-kicker">{kicker}</p>
          <h1 className="section-title max-w-4xl text-white">{title}</h1>
          <p className="mt-4 max-w-3xl text-zinc-200">{description}</p>

          {actions.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {actions.map((action) => (
                isExternalHref(action.href) ? (
                  <a
                    key={`${action.href}-${action.label}`}
                    href={action.href}
                    target="_blank"
                    rel="noreferrer"
                    className={getActionClass(action.variant)}
                  >
                    {action.label}
                  </a>
                ) : (
                  <Link key={`${action.href}-${action.label}`} href={action.href} className={getActionClass(action.variant)}>
                    {action.label}
                  </Link>
                )
              ))}
            </div>
          ) : null}
        </div>

        {stats.length > 0 ? (
          <aside className="stagger-grid grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <article key={stat.label} className="page-hero-stat">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.11em] text-zinc-300">{stat.label}</p>
              </article>
            ))}
          </aside>
        ) : null}
      </div>
    </section>
  );
}
