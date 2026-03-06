import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "CT Scan Machine", desc: "High-resolution computed tomography for accurate diagnostics", category: "Imaging" },
  { name: "MRI Scanner", desc: "Magnetic resonance imaging with advanced coil technology", category: "Imaging" },
  { name: "Patient Monitor", desc: "Multi-parameter vital signs monitoring system", category: "Monitoring" },
  { name: "Hospital Bed", desc: "Electric ICU bed with full adjustment capabilities", category: "ICU" },
  { name: "Wheelchair", desc: "Lightweight foldable wheelchair for patient mobility", category: "Mobility" },
  { name: "Ventilator", desc: "Advanced ventilator for critical care respiratory support", category: "ICU" },
];

const FeaturedProducts = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Products</span>
        <h2 className="section-title mt-2">Featured Products</h2>
        <p className="section-subtitle">Trusted medical equipment from leading manufacturers worldwide</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/30 transition-colors" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-4xl font-heading font-bold text-muted-foreground/20">{p.category}</span>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold text-secondary uppercase">{p.category}</span>
              <h3 className="font-heading font-bold text-lg mt-1 mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <Button asChild variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={`/products/${p.name.toLowerCase().replace(/ /g, "-")}`}>
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
