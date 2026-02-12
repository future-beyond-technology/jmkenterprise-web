import { companyInfo } from "@/lib/company";

const whatsappNumber = companyInfo.phone.replace(/\D/g, "");

export const siteConfig = {
  name: companyInfo.companyName,
  title: `${companyInfo.companyName} | Industrial Welding & Hardware Supplier`,
  description:
    "JMK Enterprise supplies industrial welding machines, welding consumables, and tools & hardware solutions for B2B buyers, dealers, and fabrication companies.",
  domain: "https://jmkenterprisein.com",
  logo: "/images/jmk-enterprises-new-logo.svg",
  businessHours: "Mon - Sat: 9:30 AM to 7:00 PM",
  keywords: [
    "industrial welding supplier",
    "welding machines distributor",
    "welding consumables wholesale",
    "tools and hardware supplier",
    "B2B welding products",
    "JMK Enterprise"
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/dealer-inquiry", label: "Dealer Inquiry" },
    { href: "/contact", label: "Contact" }
  ]
} as const;

export const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#";
