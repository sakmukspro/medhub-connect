import { Quote } from "lucide-react";

const testimonials = [
  { name: "Dr. Rajesh Kumar", role: "Chief Radiologist, Apollo Hospital", text: "RadPing has been our trusted partner for imaging equipment. Their service and support is exemplary." },
  { name: "Dr. Priya Sharma", role: "Director, City Diagnostic Center", text: "Excellent quality equipment with prompt installation and after-sales service. Highly recommended." },
  { name: "Dr. Arun Menon", role: "ICU Head, Fortis Hospital", text: "We equipped our entire ICU with RadPing solutions. Reliable equipment and great technical support." },
];

const Testimonials = () => (
  <section className="section-padding bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
        <h2 className="section-title mt-2">What Our Clients Say</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <Quote className="w-8 h-8 text-primary/20 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <div className="font-heading font-bold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
