import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Cpu } from "lucide-react";
import productInjector from "@/assets/product-injector-single.jpg";
import productMobileXray from "@/assets/product-mobile-xray.jpg";
import productFixedXray from "@/assets/product-fixed-xray.jpg";
import productCArm from "@/assets/product-c-arm.jpg";
import productCathlab from "@/assets/product-mobile-cathlab.jpg";
import productDicom from "@/assets/product-dicom-printer.jpg";
import productDisplay from "@/assets/product-medical-display.jpg";

const products = [
  { name: "Contrast Media Injector", desc: "Zenith CT injector for enhanced imaging of CT scan, MRI and DSA angiography systems. Available in Single Head, Dual Head, Angio and MRI variants.", image: productInjector, slug: "contrast-media-injector" },
  { name: "Mobile X-Ray", desc: "Portable digital X-ray systems designed for bedside imaging, emergency rooms, and ICU departments.", image: productMobileXray, slug: "mobile-x-ray" },
  { name: "Fixed X-Ray", desc: "Digital fixed X-ray systems with high-resolution imaging for radiology departments and diagnostic centers.", image: productFixedXray, slug: "fixed-x-ray" },
  { name: "Surgical C-Arm", desc: "High-performance C-Arm systems with flat panel detector technology for surgical and orthopedic imaging.", image: productCArm, slug: "surgical-c-arm" },
  { name: "Mobile Cathlab", desc: "Fully equipped mobile catheterization laboratory for cardiac procedures in remote and underserved areas.", image: productCathlab, slug: "mobile-cathlab" },
  { name: "DICOM Film Printer", desc: "Medical film printer supporting DICOM standards for high-quality imaging output in radiology.", image: productDicom, slug: "dicom-film-printer" },
  { name: "Medical Display Monitor", desc: "High-resolution diagnostic display monitors calibrated for radiology workstations and PACS viewing.", image: productDisplay, slug: "medical-display-monitor" },
];

const Products = () => (
  <Layout>
    <PageHero title="Our Products" subtitle="Make in India medical diagnostic devices of world-class quality" icon1={Package} icon2={Cpu} />
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="h-56 overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
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
  </Layout>
);

export default Products;
