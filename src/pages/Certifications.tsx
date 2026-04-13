import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";

const certs = [
  { icon: ShieldCheck, title: "ISO 9001:2015", desc: "Quality Management System certification ensuring consistent quality in products and services. This internationally recognized standard demonstrates our commitment to meeting customer requirements and continual improvement." },
  { icon: Award, title: "ISO 13485:2016", desc: "Medical Devices Quality Management Systems certification for the design and manufacture of medical devices. This standard is specifically designed for organizations involved in medical device production." },
  { icon: FileCheck, title: "CE Marking", desc: "European conformity marking indicating compliance with health, safety, and environmental protection standards. Products bearing CE marking can be freely traded within the European Economic Area." },
  { icon: ShieldCheck, title: "BIS Certification", desc: "Bureau of Indian Standards certification for products meeting Indian quality standards. This ensures our products comply with Indian regulatory requirements for medical devices." },
  { icon: Award, title: "CDSCO Approval", desc: "Central Drugs Standard Control Organisation regulatory approval for medical devices. This is the national regulatory body for pharmaceuticals and medical devices in India." },
  { icon: FileCheck, title: "WHO-GMP", desc: "World Health Organization Good Manufacturing Practice certification. This ensures our manufacturing processes consistently produce products according to quality standards." },
];

const Certifications = () => (
  <Layout>
    <PageHero title="Certifications" subtitle="Our commitment to quality and regulatory compliance" icon1={Award} icon2={BadgeCheck} />

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Certified Excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            RadPing maintains the highest standards of quality and regulatory compliance. Our certifications reflect our dedication to producing safe, reliable, and effective medical equipment that meets international benchmarks.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every product undergoes rigorous testing and validation to ensure compliance with applicable national and international standards before reaching our customers.
          </p>
        </div>
        <img src={aboutCertifications} alt="Our Certifications" loading="lazy" width={640} height={512} className="rounded-xl shadow-lg" />
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c) => (
          <div key={c.title} className="bg-card rounded-xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <c.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="font-heading font-bold text-lg mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Certifications;
