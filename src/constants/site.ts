import gloves from "@/assets/prod-gloves.jpg";
import masks from "@/assets/prod-masks.jpg";
import bp from "@/assets/prod-bp.jpg";
import bed from "@/assets/prod-bed.jpg";
import wheelchair from "@/assets/prod-wheelchair.jpg";
import oxygen from "@/assets/prod-oxygen.jpg";
import syringes from "@/assets/prod-syringes.jpg";
import stethoscope from "@/assets/prod-stethoscope.jpg";

export const COMPANY = {
  name: "INNOV8 INTERNATIONAL DISTRIBUTION INC.",
  short: "Innov8 International",
  tagline: "Nationwide Distributor of Medical Supplies",
  established: 2010,
  email: "info@innov8intl.ph",
  phone: "+63 (2) 8000-0000",
  address: "Metro Manila, Philippines",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/network", label: "Network" },
  { to: "/contact", label: "Contact" },
] as const;

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  { id: "gloves", name: "Surgical Gloves", category: "PPE & Disposables", image: gloves, description: "Latex-free nitrile examination and surgical gloves in multiple sizes." },
  { id: "masks", name: "Medical Face Masks", category: "PPE & Disposables", image: masks, description: "3-ply and N95 respirator masks for clinical environments." },
  { id: "syringes", name: "Disposable Syringes", category: "Medical Disposables", image: syringes, description: "Sterile single-use syringes — 1ml to 20ml with safety needles." },
  { id: "bp", name: "Blood Pressure Monitors", category: "Diagnostic Equipment", image: bp, description: "Digital and aneroid sphygmomanometers for clinics and hospitals." },
  { id: "stethoscope", name: "Professional Stethoscopes", category: "Diagnostic Equipment", image: stethoscope, description: "Cardiology-grade dual-head stethoscopes for accurate auscultation." },
  { id: "bed", name: "Hospital Beds", category: "Hospital Furniture", image: bed, description: "Electric and manual adjustable beds with side rails and IV holders." },
  { id: "wheelchair", name: "Wheelchairs", category: "Mobility & Patient Care", image: wheelchair, description: "Standard, lightweight, and bariatric mobility solutions." },
  { id: "oxygen", name: "Oxygen Tanks & Regulators", category: "Respiratory Care", image: oxygen, description: "Medical grade oxygen cylinders with regulators and flow meters." },
];

export const CATEGORIES = [
  "PPE & Disposables",
  "Diagnostic Equipment",
  "Hospital Furniture",
  "Mobility & Patient Care",
  "Respiratory Care",
  "Surgical Instruments",
  "Medical Disposables",
  "Clinic Supplies",
];

export const STATS = [
  { value: "15+", label: "Years of service" },
  { value: "1,200+", label: "Healthcare partners" },
  { value: "17", label: "Regions covered" },
  { value: "99.4%", label: "On-time delivery" },
];

export const REGIONS = [
  "NCR — Metro Manila", "CAR — Cordillera", "Region I — Ilocos", "Region II — Cagayan Valley",
  "Region III — Central Luzon", "Region IV-A — CALABARZON", "Region IV-B — MIMAROPA",
  "Region V — Bicol", "Region VI — Western Visayas", "Region VII — Central Visayas",
  "Region VIII — Eastern Visayas", "Region IX — Zamboanga Peninsula",
  "Region X — Northern Mindanao", "Region XI — Davao", "Region XII — SOCCSKSARGEN",
  "Region XIII — Caraga", "BARMM",
];
