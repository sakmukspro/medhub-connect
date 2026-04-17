import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productInjector from "@/assets/product-injector-single.jpg";
import productMobileXray from "@/assets/product-mobile-xray.jpg";
import productFixedXray from "@/assets/product-fixed-xray.jpg";
import productCArm from "@/assets/product-c-arm.jpg";

import productDicom from "@/assets/product-dicom-printer.jpg";
import productDisplay from "@/assets/product-medical-display.jpg";

const products = [
  { name: "Contrast Media Injector", desc: "Zenith CT injector for enhanced imaging of CT scan, MRI and DSA angiography systems", image: productInjector, slug: "contrast-media-injector" },
  { name: "Mobile X-Ray", desc: "Portable digital X-ray systems for bedside and emergency imaging", image: productMobileXray, slug: "mobile-x-ray" },
  { name: "Fixed X-Ray", desc: "Digital fixed X-ray systems for radiology departments", image: productFixedXray, slug: "fixed-x-ray" },
  { name: "Surgical C-Arm", desc: "High-performance C-Arm with flat panel detector for surgical imaging", image: productCArm, slug: "surgical-c-arm" },
  
  { name: "DICOM Film Printer", desc: "RadPing Thermal Imaging Printer with DICOM format output – low fog, high sharpness, high max density", image: productDicom, slug: "dicom-film-printer" },
  { name: "Medical Display Monitor", desc: "High-resolution diagnostic display monitors for radiology workstations", image: productDisplay, slug: "medical-display-monitor" },
];

const FeaturedProducts = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Products</span>
        <h2 className="section-title mt-2">Featured Products</h2>
        <p className="section-subtitle">Make in India medical diagnostic devices of world-class quality</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-colors" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="h-48 overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg mt-1 mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{p.desc}</p>
              <Button asChild variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={`/products/${p.slug}`}>
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
