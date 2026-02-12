export const siteConfig = {
  name: "JMK Enterprise",
  title: "JMK Enterprise | Industrial Welding & Hardware Supplier",
  description:
    "JMK Enterprise supplies industrial welding machines, welding consumables, and tools & hardware solutions for B2B buyers, dealers, and fabrication companies.",
  domain: "https://jmkenterprisein.com",
  logo: "/images/jmk-enterprise-logo.svg",
  phone: "+91 98765 43210",
  email: "sales@jmkenterprisein.com",
  whatsappNumber: "919876543210",
  address: "Plot 12, Industrial Estate Road, Ahmedabad, Gujarat 382430, India",
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

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
