import Layout from "@/components/layout/Layout";
import { Factory, Hospital, Microscope, Building, Stethoscope, Pill } from "lucide-react";

const industries = [
  { icon: Hospital, title: "Hospitals", desc: "Multi-specialty and super-specialty hospitals across India" },
  { icon: Microscope, title: "Diagnostic Centers", desc: "Imaging and pathology diagnostic laboratories" },
  { icon: Stethoscope, title: "Clinics", desc: "Specialty clinics and outpatient centers" },
  { icon: Building, title: "Government Hospitals", desc: "District and state-level government healthcare facilities" },
  { icon: Pill, title: "Nursing Homes", desc: "Small to mid-size nursing and care homes" },
  { icon: Factory, title: "Research Institutions", desc: "Medical research and academic institutions" },
];

const Industries = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Industries Served</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Serving diverse healthcare facilities across India</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind) => (
          <div key={ind.title} className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <ind.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{ind.title}</h3>
            <p className="text-muted-foreground text-sm">{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Industries;
