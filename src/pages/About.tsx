import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, ShieldCheck, Clock, Award } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import aboutMission from "@/assets/about-mission.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import aboutValues from "@/assets/about-values.jpg";

const values = [
  { icon: ShieldCheck, title: "Quality", desc: "We never compromise on the quality of our products and services.", color: "bg-emerald-500/15 text-emerald-600" },
  { icon: Heart, title: "Customer First", desc: "Our clients' needs drive every decision we make.", color: "bg-rose-500/15 text-rose-600" },
  { icon: Clock, title: "Reliability", desc: "Timely delivery and consistent support you can count on.", color: "bg-amber-500/15 text-amber-600" },
  { icon: Award, title: "Innovation", desc: "Continuously adopting the latest in medical technology.", color: "bg-sky-500/15 text-sky-600" },
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
            RADPING is the dream of producing Make in India medical diagnostic devices that is of world class quality, and strive to be pioneers in innovating state of the art devices, showing excellence in design and engineering with premium quality medical devices.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Radping, innovation is at the forefront of everything we do. Our strong innovation team focuses on improving existing products and introducing new products that address the market feedback and needs identified by our marketing team.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We are committed to continuing our tradition of delivering high-quality, innovative healthcare technology products that make a difference in people's lives around the world.
          </p>
          <Button asChild className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
        <img src={aboutTeam} alt="Our Team" className="rounded-xl shadow-lg" />
      </div>
    </section>

    {/* Mission & Vision - Single Row */}
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img src={aboutMission} alt="Our Mission" loading="lazy" width={640} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-heading font-bold text-xl">Our Mission</h2>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                To provide technology to the hands of healthcare professionals to diagnose better and efficiently. Our aim is to introduce innovative products that prioritize safety and simplicity to facilitate better patient care.
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img src={aboutVision} alt="Our Vision" loading="lazy" width={640} height={400} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-heading font-bold text-xl">Our Vision</h2>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Create a technology driven support to healthcare professionals to save people's life. To be India's most trusted partner in healthcare equipment, empowering every hospital with access to cutting-edge medical technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-card p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-3`}>
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={aboutValues} alt="Our Core Values" loading="lazy" width={640} height={512} className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
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
