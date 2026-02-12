const businessAddress = `SIMPLEX 51, Vastu Vihar, Ward 31,
Adityapur, Saraikella Kharsawan,
West Singhbhum, Jharkhand - 831013`;

const encodedAddress = encodeURIComponent(businessAddress);

export const companyInfo = {
  companyName: "JMK Enterprise",

  legalDetails: {
    legalName: "Suraj Kumar Singh",
    tradeName: "Jai Maa Kali Enterprises",
    constitution: "Proprietorship",
    gst: "20CADPS7551K1ZJ",
    msmeNumber: "UDYAM-JH-22-0001705",
    udyamRegistrationNumber: "UDYAM-JH-22-0001705",
    iecCode: "CADPS7551K"
  },

  phone: "7004853643",
  email: "jaimaakalienterprises60@gmail.com",

  address: businessAddress,

  googleMapsEmbedUrl: `https://www.google.com/maps?q=${encodedAddress}&output=embed`,
  googleMapsPlaceUrl: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,

  businessType:
    "Importer & Distributor of Industrial Welding Equipment and Hardware Products"
} as const;
