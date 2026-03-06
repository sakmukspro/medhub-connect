import { Monitor, HeartPulse, Scissors, Accessibility, Activity, Stethoscope } from "lucide-react";

const services = [
  { icon: Monitor, title: "Imaging Equipment", desc: "CT Scan, MRI, X-Ray, Ultrasound & more" },
  { icon: HeartPulse, title: "ICU Equipment", desc: "Ventilators, monitors & critical care systems" },
  { icon: Scissors, title: "Surgical Equipment", desc: "OT lights, tables & surgical instruments" },
  { icon: Accessibility, title: "Mobility Aids", desc: "Wheelchairs, walkers & patient transfer devices" },
  { icon: Activity, title: "Rehabilitation Equipment", desc: "Physiotherapy & recovery equipment" },
  { icon: Stethoscope, title: "Monitoring Devices", desc: "Patient monitors, ECG & vital sign systems" },
];

const ServicesGrid = () => (
  <section className="section-padding bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Provide</span>
        <h2 className="section-title mt-2">Our Service Categories</h2>
        <p className="section-subtitle">Comprehensive medical equipment solutions for every healthcare need</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group cursor-pointer border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
