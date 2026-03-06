import Layout from "@/components/layout/Layout";
import { Wrench, Settings, ShieldCheck, GraduationCap, Cog } from "lucide-react";

const services = [
  { icon: Wrench, title: "Equipment Installation", desc: "Professional installation by trained engineers ensuring proper setup, calibration and commissioning of all medical equipment." },
  { icon: Settings, title: "Maintenance & Repairs", desc: "Scheduled preventive maintenance and emergency repair services to keep your equipment running at peak performance." },
  { icon: ShieldCheck, title: "Warranty Support", desc: "Comprehensive warranty coverage with quick turnaround times for repairs and replacements." },
  { icon: GraduationCap, title: "Training", desc: "On-site training programs for hospital staff on proper operation and basic maintenance of all equipment." },
  { icon: Cog, title: "Spare Parts", desc: "Genuine spare parts supply with fast delivery for all equipment brands we service." },
];

const Services = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Services & Support</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">End-to-end service support for all your medical equipment needs</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <s.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
