import Layout from "@/components/layout/Layout";
import { ShieldCheck, Search, Settings, CheckCircle, FileCheck, Users } from "lucide-react";
import aboutQuality from "@/assets/about-quality.jpg";

const steps = [
  { icon: Search, title: "Incoming Inspection", desc: "Every component and raw material undergoes rigorous incoming quality inspection before entering the production line.", gradient: "from-sky-500 to-blue-600" },
  { icon: Settings, title: "In-Process Control", desc: "Continuous monitoring and testing during manufacturing to ensure each product meets design specifications.", gradient: "from-amber-500 to-orange-600" },
  { icon: CheckCircle, title: "Final Testing", desc: "Comprehensive functional and safety testing of finished products before packaging and dispatch.", gradient: "from-emerald-500 to-teal-600" },
  { icon: FileCheck, title: "Documentation", desc: "Complete traceability documentation maintained for every product including test reports and certificates.", gradient: "from-purple-500 to-violet-600" },
  { icon: Users, title: "Installation Validation", desc: "On-site installation validation by trained engineers with performance verification and user training.", gradient: "from-rose-500 to-pink-600" },
  { icon: ShieldCheck, title: "Post-Market Surveillance", desc: "Ongoing monitoring of product performance and customer feedback for continuous improvement.", gradient: "from-indigo-500 to-blue-700" },
];

const QualityProcess = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Quality Process</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Our commitment to delivering world-class medical equipment
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <img src={aboutQuality} alt="Quality Process" loading="lazy" width={640} height={512} className="rounded-xl shadow-lg" />
        <div>
          <h2 className="section-title">Quality at Every Step</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At RadPing, quality is not just a process — it's a culture. We follow stringent quality management systems aligned with international standards to ensure every product we deliver meets the highest benchmarks of safety, reliability, and performance.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our quality team works closely with R&D, manufacturing, and service departments to maintain end-to-end quality assurance from design to delivery and beyond.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Quality Process Steps</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border relative" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">
                {i + 1}
              </div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-3xl text-center">
        <h2 className="section-title">Standards We Follow</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {["ISO 9001:2015", "ISO 13485:2016", "CE Marking", "BIS Certified"].map((s) => (
            <div key={s} className="bg-muted rounded-xl p-4 border border-border">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-heading font-bold text-sm">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default QualityProcess;
