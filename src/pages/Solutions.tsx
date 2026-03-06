import Layout from "@/components/layout/Layout";
import { Building2, FlaskConical, HeartPulse, Accessibility } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Hospital Equipment Supply", desc: "Complete end-to-end hospital equipment planning, procurement and installation. We handle everything from needs assessment to final commissioning of equipment across all departments." },
  { icon: FlaskConical, title: "Diagnostic Lab Setup", desc: "Comprehensive diagnostic laboratory setup including imaging equipment, pathology instruments, and laboratory information systems for accurate and efficient diagnostics." },
  { icon: HeartPulse, title: "ICU Setup Solutions", desc: "Fully equipped intensive care unit solutions with ventilators, patient monitors, ICU beds, infusion pumps and all critical care accessories." },
  { icon: Accessibility, title: "Mobility Support Solutions", desc: "Patient mobility and rehabilitation equipment including wheelchairs, walkers, stretchers, and specialized transfer devices for enhanced patient comfort." },
];

const Solutions = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Our Solutions</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Customized healthcare equipment solutions for every type of medical facility</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container space-y-12">
        {solutions.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-heading font-bold text-2xl mb-3">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            <div className={`bg-muted rounded-xl h-64 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <span className="text-2xl font-heading font-bold text-muted-foreground/20">{s.title.split(" ")[0]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Solutions;
