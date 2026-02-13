import { companyInfo } from "@/lib/company";

const whatsappNumber = companyInfo.phone.replace(/\D/g, "");
const normalizedWhatsapp = whatsappNumber.length === 10 ? `91${whatsappNumber}` : whatsappNumber;
const defaultWhatsappMessage = [
  "Hello JMK Enterprise Sales Team,",
  "",
  "This is a corporate enquiry.",
  "Company Name:",
  "Contact Person:",
  "Product Category / Code:",
  "Monthly Requirement:",
  "Delivery Location:",
  "",
  "Please share technical recommendation, commercial quote, and lead time.",
  "Thank you."
].join("\n");

export const siteConfig = {
  name: companyInfo.companyName,
  title: `${companyInfo.companyName} | Enterprise Welding Consumables, Machines & Industrial Tools`,
  description:
    "JMK Enterprise is a B2B supplier of welding consumables, welding machines, tools, and protective gear for fabrication, manufacturing, and project industries.",
  domain: "https://jmkenterprisein.com",
  logo: "/images/jmk-enterprises-new-logo.svg",
  businessHours: "Mon - Sat: 9:30 AM to 7:00 PM",
  keywords: [
    "welding consumables supplier",
    "industrial welding wire",
    "B2B welding machines",
    "fabrication tools supplier",
    "welding safety PPE",
    "JMK Enterprise"
  ],
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/categories", label: "Categories" },
    { href: "/products", label: "Product Grid" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ]
} as const;

export function buildWhatsappUrl(message = defaultWhatsappMessage): string {
  if (!normalizedWhatsapp) {
    return "#";
  }

  const query = new URLSearchParams({ text: message }).toString();
  return `https://wa.me/${normalizedWhatsapp}?${query}`;
}

export const whatsappUrl = buildWhatsappUrl();
