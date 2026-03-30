import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X, ZoomIn } from "lucide-react";

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

const categories = ["All", "Injectors", "Imaging Equipment", "Services", "Solutions"];

const galleryImages = [
  { src: injectorSingle, title: "Single Head Injector", category: "Injectors" },
  { src: injectorDual, title: "Dual Head Injector", category: "Injectors" },
  { src: injectorAngio, title: "Angio Injector", category: "Injectors" },
  { src: injectorMri, title: "MRI Injector", category: "Injectors" },
  { src: productInjector, title: "Contrast Media Injector", category: "Injectors" },
  { src: productMobileXray, title: "Mobile X-Ray", category: "Imaging Equipment" },
  { src: productFixedXray, title: "Fixed X-Ray", category: "Imaging Equipment" },
  { src: productCArm, title: "Surgical C-Arm", category: "Imaging Equipment" },
  { src: productCathlab, title: "Mobile Cathlab", category: "Imaging Equipment" },
  { src: productDicom, title: "DICOM Film Printer", category: "Imaging Equipment" },
  { src: productDisplay, title: "Medical Display Monitor", category: "Imaging Equipment" },
  { src: serviceInstallation, title: "Equipment Installation", category: "Services" },
  { src: serviceMaintenance, title: "Maintenance & Repairs", category: "Services" },
  { src: serviceTraining, title: "Staff Training", category: "Services" },
  { src: serviceWarranty, title: "Warranty Support", category: "Services" },
  { src: serviceSpareparts, title: "Spare Parts", category: "Services" },
  { src: solutionHospital, title: "Hospital Setup", category: "Solutions" },
  { src: solutionDiagnostic, title: "Diagnostic Lab", category: "Solutions" },
  { src: solutionIcu, title: "ICU Setup", category: "Solutions" },
  { src: solutionMobility, title: "Patient Mobility", category: "Solutions" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  const filtered = activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <section className="gradient-bg py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Product Gallery</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our range of medical equipment through detailed product images
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-heading font-semibold transition-all ${
                  activeCategory === cat
                    ? "gradient-bg text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.title + i}
                className="group relative rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/30 transition-all hover:shadow-xl"
                onClick={() => setLightbox(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-white text-sm font-heading font-semibold">{img.title}</span>
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
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
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="w-full rounded-xl shadow-2xl" />
            <p className="text-white text-center font-heading font-semibold mt-4 text-lg">{lightbox.title}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
