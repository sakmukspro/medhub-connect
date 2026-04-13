import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, TrendingUp, Heart, Briefcase, Rocket } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Growth Opportunities", desc: "Continuous learning and career advancement" },
  { icon: Heart, title: "Healthcare Benefits", desc: "Comprehensive health insurance coverage" },
  { icon: Users, title: "Great Team", desc: "Collaborative and supportive work environment" },
  { icon: Briefcase, title: "Impactful Work", desc: "Make a difference in healthcare delivery" },
];

const openings = [
  { title: "Biomedical Engineer", location: "Chennai", type: "Full-time" },
  { title: "Sales Executive - Medical Equipment", location: "Mumbai", type: "Full-time" },
  { title: "Service Technician - Imaging", location: "Delhi", type: "Full-time" },
  { title: "Customer Support Executive", location: "Chennai", type: "Full-time" },
];

const Careers = () => (
  <Layout>
    <PageHero title="Careers" subtitle="Join our team and help shape the future of healthcare" icon1={Rocket} icon2={Briefcase} />

    {/* Benefits */}
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title text-center mb-12">Why Work With Us</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="text-center p-6 rounded-xl bg-muted">
              <b.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Openings */}
    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="section-title text-center mb-12">Open Positions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((o) => (
            <div key={o.title} className="bg-card rounded-xl p-5 border border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="font-heading font-bold">{o.title}</h3>
                <p className="text-muted-foreground text-sm">{o.location} • {o.type}</p>
              </div>
              <Button variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Apply Form */}
    <section className="section-padding">
      <div className="container max-w-2xl">
        <h2 className="section-title text-center mb-8">Apply Now</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Full Name" className="bg-muted" />
            <Input placeholder="Email" type="email" className="bg-muted" />
          </div>
          <Input placeholder="Phone Number" type="tel" className="bg-muted" />
          <Input placeholder="Position Applied For" className="bg-muted" />
          <Textarea placeholder="Cover Letter / Message" rows={5} className="bg-muted" />
          <Button type="submit" className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90 w-full sm:w-auto px-8">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  </Layout>
);

export default Careers;
