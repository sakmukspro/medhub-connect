import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Heart, Users } from "lucide-react";

const clientCategories = [
  {
    title: "Government Hospitals",
    clients: ["AIIMS Delhi", "JIPMER Puducherry", "Government General Hospital Chennai", "Rajiv Gandhi Government General Hospital", "ESI Hospital"],
  },
  {
    title: "Private Hospital Chains",
    clients: ["Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "KIMS Hospital", "Meenakshi Mission Hospital"],
  },
  {
    title: "Diagnostic Centers",
    clients: ["SRL Diagnostics", "Vijaya Diagnostic Centre", "Medall Healthcare", "Neuberg Diagnostics", "Aarthi Scans"],
  },
  {
    title: "Medical Colleges",
    clients: ["Madras Medical College", "Stanley Medical College", "Kilpauk Medical College", "SRM Medical College", "Saveetha Medical College"],
  },
];

const OurClients = () => (
  <Layout>
    <PageHero title="Our Clients" subtitle="Trusted by 500+ healthcare facilities across India" icon1={Heart} icon2={Users} />

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Partnerships Built on Trust</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Over the past 20 years, RadPing has built strong relationships with hospitals, diagnostic centers, and medical institutions across India. Our commitment to quality products and reliable after-sales service has earned us the trust of leading healthcare providers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From government hospitals to top private healthcare chains, our equipment solutions are trusted by medical professionals who demand nothing but the best for their patients.
          </p>
        </div>
        <img src={aboutClients} alt="Our Clients" loading="lazy" width={640} height={512} className="rounded-xl shadow-lg" />
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Client Network</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientCategories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-xl p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-heading font-bold text-lg mb-4 text-primary">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.clients.map((c) => (
                  <li key={c} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Hospitals Served" },
            { value: "20+", label: "Years of Trust" },
            { value: "50+", label: "Service Contracts" },
            { value: "100+", label: "Products Installed" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary">{s.value}</div>
              <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default OurClients;
