import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { X, ZoomIn, Camera, Images } from "lucide-react";

// Import all product/gallery images
import injectorSingle from "@/assets/injector-single.jpg";
import injectorDual from "@/assets/injector-dual.jpg";
import injectorAngio from "@/assets/injector-angio.jpg";
import injectorMri from "@/assets/injector-mri.jpg";
import productInjector from "@/assets/product-injector-single.jpg";
import productMobileXray from "@/assets/product-mobile-xray.jpg";
import productFixedXray from "@/assets/product-fixed-xray.jpg";
import productCArm from "@/assets/product-c-arm.jpg";
import productCathlab from "@/assets/product-mobile-cathlab.jpg";
import productDicom from "@/assets/product-dicom-printer.jpg";
import productDisplay from "@/assets/product-medical-display.jpg";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceWarranty from "@/assets/service-warranty.jpg";
import serviceSpareparts from "@/assets/service-spareparts.jpg";
import solutionHospital from "@/assets/solution-hospital.jpg";
import solutionDiagnostic from "@/assets/solution-diagnostic.jpg";
import solutionIcu from "@/assets/solution-icu.jpg";
import solutionMobility from "@/assets/solution-mobility.jpg";

const categories = ["All", "Team", "Product", "Client Place", "Others"];

const galleryImages = [
  // Product
  { src: productMobileXray, title: "Mobile X-Ray System", category: "Product" },
  { src: productFixedXray, title: "Fixed X-Ray System", category: "Product" },
  { src: productCArm, title: "Surgical C-Arm", category: "Product" },
  { src: productDicom, title: "DICOM Film Printer", category: "Product" },
  { src: productDisplay, title: "Medical Display Monitor", category: "Product" },
  { src: injectorSingle, title: "Single Head CT Injector", category: "Product" },
  { src: injectorDual, title: "Dual Head CT Injector", category: "Product" },
  { src: injectorAngio, title: "Angio Injector", category: "Product" },
  { src: injectorMri, title: "MRI Injector", category: "Product" },
  { src: productInjector, title: "Contrast Media Injector", category: "Product" },
  { src: productCathlab, title: "Mobile Cathlab", category: "Product" },

  // Team — add your team images here
  // { src: teamImage1, title: "Team Member Name", category: "Team" },

  // Client Place — add client/installation images here
  { src: solutionHospital, title: "Hospital Infrastructure", category: "Client Place" },
  { src: solutionDiagnostic, title: "Diagnostic Center Setup", category: "Client Place" },
  { src: solutionIcu, title: "ICU Equipment Setup", category: "Client Place" },
  { src: solutionMobility, title: "Franchise Model Solutions", category: "Client Place" },

  // Others
  { src: serviceInstallation, title: "Equipment Installation", category: "Others" },
  { src: serviceMaintenance, title: "Maintenance & Repairs", category: "Others" },
  { src: serviceTraining, title: "Staff Training", category: "Others" },
  { src: serviceWarranty, title: "Warranty Support", category: "Others" },
  { src: serviceSpareparts, title: "Spare Parts Supply", category: "Others" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  const categoryColors: Record<string, string> = {
    All: "from-primary to-secondary",
    Radiology: "from-[hsl(310,60%,42%)] to-[hsl(280,60%,50%)]",
    Products: "from-[hsl(30,90%,55%)] to-[hsl(15,80%,50%)]",
    "Critical Care": "from-[hsl(0,70%,50%)] to-[hsl(340,60%,45%)]",
    Others: "from-[hsl(175,60%,40%)] to-[hsl(200,60%,45%)]",
  };

  return (
    <Layout>
      <PageHero title="Product Gallery" subtitle="Explore our range of medical equipment through detailed product images" icon1={Camera} icon2={Images} />

      <section className="section-padding">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? `bg-gradient-to-r ${categoryColors[cat]} text-primary-foreground shadow-lg scale-105`
                    : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-105"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Info note */}
          <p className="text-center text-xs text-muted-foreground mb-6 italic">
            💡 To add images: import them in this file and add an entry to the galleryImages array with the appropriate category.
          </p>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((img, i) => (
              <div
                key={img.title + i}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border bg-card shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                onClick={() => setLightbox(img)}
              >
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-4">
                  <ZoomIn className="w-8 h-8 text-primary-foreground mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1" />
                  <span className="text-primary-foreground text-sm font-heading font-semibold text-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1">
                    {img.title}
                  </span>
                </div>
                {/* Category badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold text-primary-foreground bg-gradient-to-r ${categoryColors[img.category]} shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                  {img.category}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No images found in this category.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-secondary transition-colors bg-primary/20 rounded-full p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300" />
            <p className="text-primary-foreground text-center font-heading font-semibold mt-4 text-lg">{lightbox.title}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
