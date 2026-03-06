import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 gradient-bg relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
    <div className="container relative text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-primary-foreground mb-4">
        Need Medical Equipment?
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
        Get in touch with our team for customized healthcare equipment solutions tailored to your facility.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-background text-primary font-heading font-semibold hover:bg-background/90 border-0">
          <Link to="/contact">Request Quote</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground font-heading font-semibold hover:bg-primary-foreground/10">
          <Link to="/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
