import Layout from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, FileText, ArrowLeft } from "lucide-react";

const ProductDetails = () => {
  const { slug } = useParams();
  const name = slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Product";

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
          <div className="bg-muted rounded-xl h-80 lg:h-auto flex items-center justify-center">
            <span className="text-4xl font-heading font-bold text-muted-foreground/20">Product Image</span>
          </div>
          <div>
            <h2 className="section-title">{name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              High-quality medical equipment designed for modern healthcare facilities. This product meets international quality standards and comes with comprehensive warranty and support.
            </p>

            <h3 className="font-heading font-bold text-lg mb-3">Specifications</h3>
            <div className="border border-border rounded-lg overflow-hidden mb-6">
              {[
                ["Model", "RP-" + (slug?.substring(0, 4).toUpperCase() || "PROD")],
                ["Technology", "Latest Generation"],
                ["Dimensions", "Varies by configuration"],
                ["Power", "220V / 50Hz"],
                ["Warranty", "2 Years Standard"],
              ].map(([k, v]) => (
                <div key={k} className="flex border-b border-border last:border-0">
                  <div className="w-1/3 p-3 bg-muted font-heading font-semibold text-sm">{k}</div>
                  <div className="w-2/3 p-3 text-muted-foreground text-sm">{v}</div>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-lg mb-3">Key Features</h3>
            <ul className="space-y-2 mb-8">
              {["High precision and accuracy", "User-friendly interface", "Low maintenance requirements", "Energy efficient operation", "Comprehensive safety features"].map((f) => (
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
