import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, ShieldCheck, Clock, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  { icon: ShieldCheck, title: "Quality", desc: "We never compromise on the quality of our products and services." },
  { icon: Heart, title: "Customer First", desc: "Our clients' needs drive every decision we make." },
  { icon: Clock, title: "Reliability", desc: "Timely delivery and consistent support you can count on." },
  { icon: Award, title: "Innovation", desc: "Continuously adopting the latest in medical technology." },
];

const timeline = [
  { year: "2004", event: "Company founded in Chennai as medical equipment consultancy" },
  { year: "2008", event: "Expanded to full-service hospital equipment supply" },
  { year: "2012", event: "Reached 100+ hospital partnerships across South India" },
  { year: "2016", event: "Introduced advanced imaging equipment portfolio" },
  { year: "2020", event: "Expanded services nationwide with 500+ hospitals served" },
  { year: "2024", event: "Launched comprehensive ICU and critical care solutions" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">About RadPing</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Over 20 years of excellence in hospital equipment solutions
        </p>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Company Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            RADPING IMAGING PVT LTD is a leading Hospital Equipment Solution Providing Company specializing in Radiology, Cardiology, Dental and Critical Care with over 20 years of experience.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We provide products & solutions in the healthcare & industrial imaging domain. Our process is specifically designed to meet the total medical equipment planning needs of hospital construction project teams.
          </p>
          <Button asChild className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
        <img src={aboutTeam} alt="Our Team" className="rounded-xl shadow-lg" />
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-muted">
      <div className="container grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-xl p-8 border border-border">
          <Target className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
          <p className="text-muted-foreground">To provide world-class medical equipment solutions that enable healthcare facilities to deliver exceptional patient care through innovative technology and reliable support.</p>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border">
          <Eye className="w-10 h-10 text-secondary mb-4" />
          <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
          <p className="text-muted-foreground">To be India's most trusted partner in healthcare equipment, empowering every hospital with access to cutting-edge medical technology and unmatched service excellence.</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-6 rounded-xl bg-muted">
              <v.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Journey</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {timeline.map((t) => (
            <div key={t.year} className="flex gap-4 items-start">
              <div className="w-16 text-right font-heading font-bold text-primary flex-shrink-0">{t.year}</div>
              <div className="w-3 h-3 rounded-full gradient-bg mt-1.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">{t.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
