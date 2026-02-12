import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
};

export function absoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.domain).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = "/images/og-default.svg"
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Industrial Solutions`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: absoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "IN"
    },
    sameAs: [absoluteUrl("/contact")]
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.domain}/products?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
