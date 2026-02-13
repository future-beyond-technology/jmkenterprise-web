import type { IndustrialProduct } from "@/types/industrial";

export const industrialProducts: IndustrialProduct[] = [
  {
    id: "wire-er70s6-12",
    slug: "er70s6-copper-coated-mig-wire",
    category: "welding-consumables",
    categoryLabel: "Welding Consumables",
    title: "ER70S-6 Copper Coated MIG Wire",
    code: "JMK-WIRE-ER70S6-12",
    shortDescription:
      "Smooth feed MIG wire for low-spatter welding in high-volume fabrication operations.",
    description:
      "Engineered for consistent arc stability and clean bead formation, this ER70S-6 wire supports productivity in automated and semi-automatic welding lines.",
    images: [
      "https://images.pexels.com/photos/15059762/pexels-photo-15059762.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/9242913/pexels-photo-9242913.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "AWS A5.18 ER70S-6",
      gb: "GB/T ER50-6"
    },
    tensileStrength: "540 MPa",
    applications: ["MIG welding", "Fabrication", "Automotive brackets", "General engineering"],
    industries: ["Automotive", "Construction", "Heavy fabrication"],
    specification: {
      "Wire Diameter": "0.8 / 1.0 / 1.2 mm",
      "Spool Weight": "15 kg",
      "Shielding Gas": "CO2 / Ar-CO2 mix",
      "Current Type": "DCEP"
    },
    useCases: [
      {
        title: "Truck Body Fabrication",
        image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Supports repetitive fillet joints with stable feed and reduced rework rate."
      },
      {
        title: "Workshop Jobbing",
        image: "https://images.pexels.com/photos/4480531/pexels-photo-4480531.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Ideal for mixed thickness jobs where versatility and arc control are critical."
      }
    ],
    videos: [
      "https://www.youtube.com/watch?v=8x2rQ0xQ6uQ",
      "https://www.youtube.com/watch?v=9j0M6Q8r0x8"
    ],
    technicalDocs: [
      { label: "Product Datasheet", url: "/catalogs/jmk-enterprise-catalog.pdf" },
      { label: "Welding Procedure Guide", url: "/catalogs/jmk-enterprise-catalog.pdf" }
    ],
    featured: true
  },
  {
    id: "wire-e71t1c-flux",
    slug: "e71t1c-flux-cored-wire",
    category: "welding-consumables",
    categoryLabel: "Welding Consumables",
    title: "E71T-1C Flux Cored Wire",
    code: "JMK-WIRE-E71T1C-12",
    shortDescription:
      "High-deposition flux cored wire for structural steel and heavy section welding.",
    description:
      "Developed for all-position welding where deposition efficiency and penetration consistency are mandatory for throughput-driven fabrication units.",
    images: [
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "AWS A5.20 E71T-1C",
      gb: "GB/T T49 2 T1-1 C1 A"
    },
    tensileStrength: "560 MPa",
    applications: ["Structural welding", "Ship blocks", "Heavy fabrication", "Repair welding"],
    industries: ["Shipbuilding", "Infrastructure", "Steel fabrication"],
    specification: {
      "Wire Diameter": "1.2 / 1.6 mm",
      "Polarity": "DCEP",
      "Recommended Gas": "100% CO2",
      "Deposition Rate": "High"
    },
    useCases: [
      {
        title: "Shipbuilding Blocks",
        image: "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Delivers consistent weld quality in long seam applications for marine structures."
      },
      {
        title: "Bridge Fabrication",
        image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Suitable for high-thickness joints requiring controlled heat input and productivity."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=U7I7l8X9T9w"],
    technicalDocs: [
      { label: "Flux Wire Handling Guide", url: "/catalogs/jmk-enterprise-catalog.pdf" }
    ],
    featured: false
  },
  {
    id: "mig-400-pulse",
    slug: "mig-400-pulse-inverter",
    category: "welding-machines",
    categoryLabel: "Welding Machines",
    title: "MIG 400 Pulse Inverter System",
    code: "JMK-MIG-400P",
    shortDescription:
      "Pulse MIG system for high-duty-cycle manufacturing and repeat weld quality.",
    description:
      "Designed for production-grade welding lines, this machine combines pulse control, parameter memory, and stable arc performance across varying material thickness.",
    images: [
      "https://images.pexels.com/photos/34204859/pexels-photo-34204859.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/33653242/pexels-photo-33653242.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/33653238/pexels-photo-33653238.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "IEC 60974-1",
      gb: "GB/T 15579"
    },
    tensileStrength: "N/A (Machine)",
    applications: ["MIG welding", "Pulse transfer", "Production welding"],
    industries: ["Automotive", "Rail", "Fabrication"],
    specification: {
      "Output Range": "50 - 400 A",
      "Input Voltage": "415V, 3 Phase",
      "Duty Cycle": "60% @ 400A",
      "Protection Class": "IP23"
    },
    useCases: [
      {
        title: "Chassis Manufacturing",
        image: "https://images.pexels.com/photos/3846153/pexels-photo-3846153.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Pulse mode improves bead consistency and reduces post-weld finishing in chassis lines."
      },
      {
        title: "Heavy Structure Fabrication",
        image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Supports long operating cycles with stable arc at higher currents."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=J4Y6c4A7f44"],
    technicalDocs: [
      { label: "Machine Brochure", url: "/catalogs/jmk-enterprise-catalog.pdf" },
      { label: "Maintenance Checklist", url: "/catalogs/jmk-enterprise-catalog.pdf" }
    ],
    featured: true
  },
  {
    id: "arc-500-inverter",
    slug: "arc-500-industrial-inverter",
    category: "welding-machines",
    categoryLabel: "Welding Machines",
    title: "ARC 500 Industrial Inverter",
    code: "JMK-ARC-500I",
    shortDescription:
      "Heavy-duty arc inverter for robust field and workshop welding operations.",
    description:
      "Engineered for rugged environments, the ARC 500 delivers dependable power output and thermal stability for continuous industrial repair and fabrication tasks.",
    images: [
      "https://images.pexels.com/photos/15059760/pexels-photo-15059760.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "IEC 60974-10",
      gb: "GB/T 15579.1"
    },
    tensileStrength: "N/A (Machine)",
    applications: ["Arc welding", "Maintenance repair", "Site fabrication"],
    industries: ["Construction", "Mining", "General engineering"],
    specification: {
      "Output Current": "30 - 500 A",
      "Input Power": "415V",
      "Cooling": "Forced Air",
      "Arc Force": "Adjustable"
    },
    useCases: [
      {
        title: "Plant Maintenance",
        image: "https://images.pexels.com/photos/12955826/pexels-photo-12955826.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Handles on-site breakdown welding where reliability and mobility are required."
      },
      {
        title: "Fabrication Yard",
        image: "https://images.pexels.com/photos/5582597/pexels-photo-5582597.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Suitable for medium and heavy fabrication with consistent current output."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=V2A8fU4L8Q8"],
    technicalDocs: [{ label: "Arc Inverter Spec Sheet", url: "/catalogs/jmk-enterprise-catalog.pdf" }],
    featured: false
  },
  {
    id: "grinder-5in-pro",
    slug: "procut-5in-angle-grinder",
    category: "tools-equipment",
    categoryLabel: "Tools & Equipment",
    title: "ProCut 5-inch Angle Grinder",
    code: "JMK-TOOL-AG5",
    shortDescription: "Industrial grinder for cutting, beveling, deburring and surface preparation.",
    description:
      "Balanced ergonomics and robust motor design make this grinder suitable for daily workshop use in fabrication and maintenance departments.",
    images: [
      "https://images.pexels.com/photos/13296062/pexels-photo-13296062.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/3997251/pexels-photo-3997251.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "ISO 11148-7",
      gb: "GB/T 7442"
    },
    tensileStrength: "N/A (Tool)",
    applications: ["Cutting", "Surface prep", "Edge finishing"],
    industries: ["Metal fabrication", "Maintenance", "Construction"],
    specification: {
      "Disc Size": "125 mm",
      "Power": "1100W",
      "No Load Speed": "11,000 RPM",
      Weight: "2.1 kg"
    },
    useCases: [
      {
        title: "Workshop Finishing",
        image: "https://images.pexels.com/photos/6205794/pexels-photo-6205794.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Improves edge quality before fit-up and welding."
      },
      {
        title: "Field Cut & Grind",
        image: "https://images.pexels.com/photos/3017154/pexels-photo-3017154.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Compact tool footprint supports on-site rework needs."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=wvz5h1sdJq0"],
    technicalDocs: [{ label: "Tool User Guide", url: "/catalogs/jmk-enterprise-catalog.pdf" }],
    featured: true
  },
  {
    id: "bench-vice-6in",
    slug: "forgelock-6in-bench-vice",
    category: "tools-equipment",
    categoryLabel: "Tools & Equipment",
    title: "ForgeLock 6-inch Bench Vice",
    code: "JMK-TOOL-BV6",
    shortDescription: "High-clamp bench vice for drilling, fitting and precision handling operations.",
    description:
      "Built with ductile cast construction for workshop durability and repeat clamping accuracy in mechanical and fabrication environments.",
    images: [
      "https://images.pexels.com/photos/29404121/pexels-photo-29404121.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/3844516/pexels-photo-3844516.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "ISO 9001 Process",
      gb: "GB/T 21626"
    },
    tensileStrength: "N/A (Tool)",
    applications: ["Clamping", "Fitting", "Bench operations"],
    industries: ["Workshops", "Fabrication", "Maintenance"],
    specification: {
      "Jaw Width": "150 mm",
      "Opening Capacity": "0 - 165 mm",
      "Body Material": "Ductile Cast Steel",
      Mounting: "4-Bolt"
    },
    useCases: [
      {
        title: "Precision Fitting",
        image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Stable clamping for repetitive fitting and finishing work."
      },
      {
        title: "Maintenance Bench",
        image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Supports repair teams with reliable hold during part preparation."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=PVx6t9fUbP0"],
    technicalDocs: [{ label: "Bench Vice Installation Guide", url: "/catalogs/jmk-enterprise-catalog.pdf" }],
    featured: false
  },
  {
    id: "helmet-auto-dark",
    slug: "auto-darkening-welding-helmet",
    category: "protective-gear",
    categoryLabel: "Protective Gear",
    title: "Auto-Darkening Welding Helmet",
    code: "JMK-PPE-ADH",
    shortDescription:
      "Smart shade control helmet designed for visibility, protection and operator comfort.",
    description:
      "Provides reliable eye and face protection with fast response auto-darkening filters, helping maintain weld quality and operator safety in extended shifts.",
    images: [
      "https://images.pexels.com/photos/266176/pexels-photo-266176.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/162568/factory-worker-manufacture-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "ANSI Z87.1",
      gb: "GB 3609.1"
    },
    tensileStrength: "N/A (PPE)",
    applications: ["Arc welding", "MIG welding", "TIG welding"],
    industries: ["Fabrication", "Shipyard", "Manufacturing"],
    specification: {
      "Shade Range": "DIN 9 - 13",
      "Response Time": "1/25,000 sec",
      "Power Source": "Solar + Lithium",
      Weight: "520 g"
    },
    useCases: [
      {
        title: "Shipyard Welding",
        image: "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Enhances welder visibility and safety in demanding marine fabrication zones."
      },
      {
        title: "Factory Floor",
        image: "https://images.pexels.com/photos/1108104/pexels-photo-1108104.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Supports long welding cycles with better comfort and reduced eye strain."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=4zvJ7Mzj_B0"],
    technicalDocs: [{ label: "PPE Compliance Sheet", url: "/catalogs/jmk-enterprise-catalog.pdf" }],
    featured: true
  },
  {
    id: "gloves-leather-pro",
    slug: "heat-resistant-leather-gloves",
    category: "protective-gear",
    categoryLabel: "Protective Gear",
    title: "Heat Resistant Leather Welding Gloves",
    code: "JMK-PPE-HRG",
    shortDescription: "Durable leather gloves for heat insulation, grip stability, and operator safety.",
    description:
      "Double-stitched and heat-resistant gloves designed for welding and hot-work handling where high dexterity and thermal safety are required.",
    images: [
      "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1800",
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1800"
    ],
    standard: {
      aws: "EN 12477 Type A",
      gb: "GB 24541"
    },
    tensileStrength: "N/A (PPE)",
    applications: ["Welding", "Handling hot parts", "Grinding support"],
    industries: ["Fabrication", "Steel plants", "Maintenance"],
    specification: {
      Material: "Split leather",
      Lining: "Heat-resistant cotton",
      "Cuff Length": "14 inch",
      Stitching: "Kevlar thread"
    },
    useCases: [
      {
        title: "Welding Booth",
        image: "https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Protects operators during repetitive weld handling and repositioning tasks."
      },
      {
        title: "Maintenance Shutdown",
        image: "https://images.pexels.com/photos/4489748/pexels-photo-4489748.jpeg?auto=compress&cs=tinysrgb&w=1600",
        description: "Supports teams handling high-temperature components during turnarounds."
      }
    ],
    videos: ["https://www.youtube.com/watch?v=oRcE3T8aQwQ"],
    technicalDocs: [{ label: "Safety Data Sheet", url: "/catalogs/jmk-enterprise-catalog.pdf" }],
    featured: false
  }
];
