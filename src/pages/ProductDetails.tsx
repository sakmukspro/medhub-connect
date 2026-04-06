import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, FileText, ArrowLeft } from "lucide-react";

import productInjector from "@/assets/product-injector-single.jpg";
import productMobileXray from "@/assets/product-mobile-xray.jpg";
import productFixedXray from "@/assets/product-fixed-xray.jpg";
import productCArm from "@/assets/product-c-arm.jpg";
import productCathlab from "@/assets/product-mobile-cathlab.jpg";
import productDicom from "@/assets/product-dicom-printer.jpg";
import productDisplay from "@/assets/product-medical-display.jpg";

interface ProductData {
  name: string;
  image: string;
  description: string;
  specs: [string, string][];
  features: string[];
}

const productData: Record<string, ProductData> = {
  "mobile-x-ray": {
    name: "Mobile X-Ray",
    image: productMobileXray,
    description: "Our portable digital X-ray systems are designed for bedside imaging, emergency rooms, ICU departments, and field hospitals. Featuring lightweight construction with powerful imaging capabilities, these units deliver high-resolution digital radiography at the point of care. Ideal for patients who cannot be moved to a radiology department.",
    specs: [
      ["Model", "RP-MXR Series"],
      ["Generator Power", "5kW – 32kW"],
      ["Tube Voltage", "40–125 kVp"],
      ["Detector", "Wireless Flat Panel DR Detector"],
      ["Battery", "Lithium-ion, 8+ hours operation"],
      ["Warranty", "2 Years Standard"],
    ],
    features: [
      "Wireless flat panel detector for instant imaging",
      "Battery-operated for cordless mobility",
      "Touchscreen control console with DICOM connectivity",
      "Lightweight & compact design for easy maneuverability",
      "APR (Anatomical Programmed Radiography) presets",
      "Integrated image processing and export",
    ],
  },
  "fixed-x-ray": {
    name: "Fixed X-Ray",
    image: productFixedXray,
    description: "Our digital fixed X-ray systems provide high-resolution imaging for radiology departments and diagnostic centers. Built with ceiling-suspended or floor-mounted configurations, these systems offer superior image quality with automated positioning for efficient workflow in busy radiology suites.",
    specs: [
      ["Model", "RP-FXR Series"],
      ["Generator Power", "50kW – 65kW"],
      ["Tube Voltage", "40–150 kVp"],
      ["Table", "4-way floating electromagnetic table"],
      ["Detector", "17×17 inch flat panel detector"],
      ["Warranty", "2 Years Standard"],
    ],
    features: [
      "High-frequency inverter generator for consistent output",
      "Auto-collimation and auto-tracking",
      "Ceiling-suspended tube for maximum flexibility",
      "DICOM 3.0 compatible with PACS integration",
      "Dose reduction technology for patient safety",
      "Ergonomic design for operator comfort",
    ],
  },
  "surgical-c-arm": {
    name: "Surgical C-Arm",
    image: productCArm,
    description: "High-performance C-Arm systems with flat panel detector technology designed for orthopedic, trauma, vascular, and cardiac surgical procedures. Our C-Arms deliver real-time fluoroscopic imaging with exceptional clarity, enabling surgeons to perform complex procedures with confidence.",
    specs: [
      ["Model", "RP-CARM Series"],
      ["Image Intensifier", '9"/12" Tri-mode or Flat Panel'],
      ["Generator", "5kW High Frequency"],
      ["C-Arm Rotation", "±190° orbital, ±12.5° angular"],
      ["Monitor", "Dual high-resolution LCD displays"],
      ["Warranty", "2 Years Standard"],
    ],
    features: [
      "Pulsed fluoroscopy for reduced radiation dose",
      "Last image hold and image storage capability",
      "Motorized C-arm movements for precise positioning",
      "Real-time digital subtraction angiography (DSA)",
      "Compact footprint for operating room flexibility",
      "DICOM connectivity for seamless integration",
    ],
  },
  "mobile-cathlab": {
    name: "Mobile Cathlab",
    image: productCathlab,
    description: "Fully equipped mobile catheterization laboratory mounted on a custom vehicle, bringing advanced cardiac catheterization procedures to remote and underserved areas. Our Mobile Cathlab enables hospitals without permanent cath labs to offer life-saving cardiac interventions on-site.",
    specs: [
      ["Model", "RP-MCATH Series"],
      ["Imaging", "Flat Panel Digital Angiography"],
      ["Generator", "80kW High Frequency"],
      ["Vehicle", "Custom-built climate-controlled unit"],
      ["Monitoring", "Full hemodynamic monitoring suite"],
      ["Warranty", "2 Years Standard"],
    ],
    features: [
      "Complete cathlab setup in a mobile unit",
      "Flat panel detector for high-quality angiography",
      "Integrated hemodynamic monitoring system",
      "Climate-controlled environment for equipment safety",
      "UPS backup for uninterrupted procedures",
      "Meets all regulatory and safety standards",
    ],
  },
  "dicom-film-printer": {
    name: "DICOM Film Printer",
    image: productDicom,
    description: "Medical film printer supporting DICOM standards for producing high-quality diagnostic images on film. Compatible with CT, MRI, CR, DR and ultrasound modalities, our printers deliver consistent output with excellent grayscale reproduction for accurate diagnosis.",
    specs: [
      ["Model", "RP-DFP Series"],
      ["Resolution", "320 DPI (12.6 pixels/mm)"],
      ["Film Sizes", "8×10, 10×12, 11×14, 14×17 inch"],
      ["Throughput", "Up to 100 films/hour"],
      ["Interface", "DICOM 3.0 Print SCU/SCP"],
      ["Warranty", "2 Years Standard"],
    ],
    features: [
      "True DICOM 3.0 connectivity",
      "Dry thermal printing technology – no chemicals",
      "Multiple film size support with auto-detection",
      "High grayscale resolution for diagnostic quality",
      "Low maintenance with long-life print head",
      "Compatible with all major PACS/RIS systems",
    ],
  },
  "medical-display-monitor": {
    name: "Medical Display Monitor",
    image: productDisplay,
    description: "High-resolution diagnostic display monitors specifically calibrated for radiology workstations and PACS viewing. Designed to meet DICOM Part 14 standards, these monitors ensure accurate and consistent image rendering for confident diagnosis across all imaging modalities.",
    specs: [
      ["Model", "RP-MDM Series"],
      ["Resolution", "2MP / 3MP / 5MP options"],
      ["Luminance", "Up to 1000 cd/m²"],
      ["Contrast Ratio", "1500:1"],
      ["Calibration", "DICOM Part 14 GSDF compliant"],
      ["Warranty", "3 Years Standard"],
    ],
    features: [
      "Factory calibrated to DICOM GSDF standard",
      "Built-in luminance sensor for auto-calibration",
      "Wide viewing angle IPS/AHVA panel technology",
      "Ambient light compensation for consistent display",
      "Multi-modality preset modes (CT, MRI, CR, MG)",
      "VESA mount compatible with ergonomic stand",
    ],
  },
};

const ProductDetails = () => {
  const { slug } = useParams();
  const product = slug ? productData[slug] : null;
  const name = product?.name || slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Product";

  // For Contrast Media Injector, redirect handled by dedicated page
  const image = product?.image;
  const description = product?.description || "High-quality medical equipment designed for modern healthcare facilities. This product meets international quality standards and comes with comprehensive warranty and support.";
  const specs = product?.specs || [
    ["Model", "RP-" + (slug?.substring(0, 4).toUpperCase() || "PROD")],
    ["Technology", "Latest Generation"],
    ["Dimensions", "Varies by configuration"],
    ["Power", "220V / 50Hz"],
    ["Warranty", "2 Years Standard"],
  ];
  const features = product?.features || [
    "High precision and accuracy",
    "User-friendly interface",
    "Low maintenance requirements",
    "Energy efficient operation",
    "Comprehensive safety features",
  ];

  return (
    <Layout>
      <section className="gradient-bg py-16">
        <div className="container">
          <Link to="/products" className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-primary-foreground">{name}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div className="bg-muted rounded-xl overflow-hidden flex items-center justify-center">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-heading font-bold text-muted-foreground/20 p-20">Product Image</span>
            )}
          </div>
          <div>
            <h2 className="section-title">{name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

            <h3 className="font-heading font-bold text-lg mb-3">Specifications</h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              {specs.map(([k, v]) => (
                <div key={k} className="flex border-b border-border last:border-0">
                  <div className="w-1/3 p-3 bg-muted font-heading font-semibold text-sm">{k}</div>
                  <div className="w-2/3 p-3 text-muted-foreground text-sm">{v}</div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-lg mb-3">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />{f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90">
                <FileText className="w-4 h-4 mr-2" /> Request Quote
              </Button>
              <Button variant="outline" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="w-4 h-4 mr-2" /> Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
