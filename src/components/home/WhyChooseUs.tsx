import { ShieldCheck, Users, Truck, Wrench, Headphones } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Quality Certified", desc: "ISO certified products meeting international standards" },
  { icon: Users, title: "Experienced Team", desc: "20+ years of expertise in medical equipment" },
  { icon: Truck, title: "Fast Delivery", desc: "Timely delivery across India with proper logistics" },
  { icon: Wrench, title: "Installation Support", desc: "Professional installation by trained engineers" },
  { icon: Headphones, title: "After Sales Service", desc: "Dedicated support and maintenance contracts" },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why RadPing</span>
        <h2 className="section-title mt-2">Why Choose Us</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="text-center group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <r.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-xs">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
