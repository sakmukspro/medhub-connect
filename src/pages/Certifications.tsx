import Layout from "@/components/layout/Layout";
import { ShieldCheck, Award, FileCheck } from "lucide-react";

const certs = [
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Quality Management System certification ensuring consistent quality in products and services." },
  { icon: Award, title: "ISO 13485:2016", desc: "Medical Devices Quality Management Systems for the design and manufacture of medical devices." },
  { icon: FileCheck, title: "CE Marking", desc: "European conformity marking indicating compliance with health, safety, and environmental protection standards." },
  { icon: ShieldCheck, title: "BIS Certification", desc: "Bureau of Indian Standards certification for products meeting Indian quality standards." },
  { icon: Award, title: "CDSCO Approval", desc: "Central Drugs Standard Control Organisation regulatory approval for medical devices." },
  { icon: FileCheck, title: "WHO-GMP", desc: "World Health Organization Good Manufacturing Practice certification." },
];

const Certifications = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Certifications</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Our commitment to quality and regulatory compliance</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div key={c.title} className="bg-card rounded-xl p-6 border border-border text-center" style={{ boxShadow: "var(--shadow-card)" }}>
            <c.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading font-bold text-lg mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Certifications;
