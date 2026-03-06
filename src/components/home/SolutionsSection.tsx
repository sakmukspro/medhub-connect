import { Building2, FlaskConical, HeartPulse, Accessibility } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Hospital Setup", desc: "End-to-end hospital equipment planning and procurement for new healthcare facilities." },
  { icon: FlaskConical, title: "Diagnostic Lab Equipment", desc: "Complete diagnostic lab setup with imaging, pathology and laboratory equipment." },
  { icon: HeartPulse, title: "ICU Setup", desc: "Fully equipped ICU solutions with ventilators, monitors and critical care systems." },
  { icon: Accessibility, title: "Patient Mobility Solutions", desc: "Wheelchairs, walkers, stretchers and patient transfer equipment for optimal care." },
];

const SolutionsSection = () => (
  <section className="section-padding bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Solutions</span>
        <h2 className="section-title mt-2">Tailored Healthcare Solutions</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-all group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <s.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
