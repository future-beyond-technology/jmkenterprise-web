import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Navbar } from "@/components/layout/Navbar";
import { SEOHead } from "@/components/seo/SEOHead";
import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: siteConfig.domain
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-default.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Industrial Welding & Hardware Supplier`
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <SEOHead id="site-structured-data" data={[buildOrganizationJsonLd(), buildWebsiteJsonLd()]} />
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
