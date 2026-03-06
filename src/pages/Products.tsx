import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Imaging Equipment", products: ["CT Scan Machine", "MRI Scanner", "Digital X-Ray", "Ultrasound", "Mammography"] },
  { name: "Diagnostic Equipment", products: ["Blood Analyzer", "ECG Machine", "Spirometer", "Defibrillator"] },
  { name: "ICU Equipment", products: ["Ventilator", "ICU Bed", "Infusion Pump", "Suction Machine"] },
  { name: "Patient Monitoring", products: ["Multi-Parameter Monitor", "Pulse Oximeter", "Cardiac Monitor", "Fetal Monitor"] },
  { name: "Mobility Aids", products: ["Wheelchair", "Walker", "Stretcher", "Hospital Bed"] },
  { name: "Surgical Instruments", products: ["OT Light", "OT Table", "Electrosurgical Unit", "Sterilizer"] },
  { name: "Rehabilitation Equipment", products: ["Treadmill", "Parallel Bars", "Exercise Bike", "TENS Unit"] },
];

const Products = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Our Products</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Comprehensive range of medical equipment from leading global manufacturers
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="h-32 bg-muted rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-muted-foreground/20">{cat.name.split(" ")[0]}</span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 group-hover:text-primary transition-colors">{cat.name}</h3>
              <ul className="space-y-1 mb-4">
                {cat.products.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />{p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={`/products/${cat.name.toLowerCase().replace(/ /g, "-")}`}>
                  View Category <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-muted rounded-xl p-8">
          <p className="text-muted-foreground text-sm mb-2">We work with leading brands in the industry including</p>
          <p className="font-heading font-bold text-lg text-foreground">GE HealthCare • Philips Healthcare • Siemens Healthineers</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
