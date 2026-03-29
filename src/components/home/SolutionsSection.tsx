import solutionHospital from "@/assets/solution-hospital.jpg";
import solutionDiagnostic from "@/assets/solution-diagnostic.jpg";
import solutionIcu from "@/assets/solution-icu.jpg";
import solutionMobility from "@/assets/solution-mobility.jpg";

const solutions = [
  { image: solutionHospital, title: "Hospital Setup", desc: "End-to-end hospital equipment planning and procurement for new healthcare facilities." },
  { image: solutionDiagnostic, title: "Diagnostic Lab Equipment", desc: "Complete diagnostic lab setup with imaging, pathology and laboratory equipment." },
  { image: solutionIcu, title: "ICU Setup", desc: "Fully equipped ICU solutions with ventilators, monitors and critical care systems." },
  { image: solutionMobility, title: "Patient Mobility Solutions", desc: "Wheelchairs, walkers, stretchers and patient transfer equipment for optimal care." },
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
          <div key={s.title} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="h-40 overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" width={512} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-heading font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsSection;
