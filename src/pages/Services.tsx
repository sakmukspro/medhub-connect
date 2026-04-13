import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Wrench, Headphones } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceWarranty from "@/assets/service-warranty.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceSpareparts from "@/assets/service-spareparts.jpg";

const services = [
  { image: serviceInstallation, title: "Equipment Installation", desc: "Professional installation by trained engineers ensuring proper setup, calibration and commissioning of all medical equipment." },
  { image: serviceMaintenance, title: "Maintenance & Repairs", desc: "Scheduled preventive maintenance and emergency repair services to keep your equipment running at peak performance." },
  { image: serviceWarranty, title: "Warranty Support", desc: "Comprehensive warranty coverage with quick turnaround times for repairs and replacements." },
  { image: serviceTraining, title: "Training", desc: "On-site training programs for hospital staff on proper operation and basic maintenance of all equipment." },
  { image: serviceSpareparts, title: "Spare Parts", desc: "Genuine spare parts supply with fast delivery for all equipment brands we service." },
];

const Services = () => (
  <Layout>
    <PageHero title="Services & Support" subtitle="End-to-end service support for all your medical equipment needs" icon1={Wrench} icon2={Headphones} />

    <section className="section-padding">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="h-44 overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
