import Layout from "@/components/layout/Layout";
import { Handshake, TrendingUp, Shield, Award, MapPin, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import partnerHandshake from "@/assets/partner-handshake.jpg";
import partnerDistribution from "@/assets/partner-distribution.jpg";

const benefits = [
  { icon: TrendingUp, title: "Growing Market", desc: "Tap into the rapidly expanding Indian healthcare equipment market with a trusted brand.", gradient: "from-emerald-500 to-teal-600" },
  { icon: Shield, title: "Product Quality", desc: "Represent ISO-certified, CE-marked products that hospitals trust and recommend.", gradient: "from-sky-500 to-blue-600" },
  { icon: Award, title: "Training & Support", desc: "Comprehensive product training, marketing support, and technical assistance.", gradient: "from-amber-500 to-orange-600" },
  { icon: MapPin, title: "Territory Rights", desc: "Exclusive or semi-exclusive territory rights to maximize your business potential.", gradient: "from-purple-500 to-violet-600" },
  { icon: Users, title: "Dedicated Team", desc: "A dedicated relationship manager and technical support team to back you.", gradient: "from-rose-500 to-pink-600" },
  { icon: Handshake, title: "Competitive Margins", desc: "Attractive margins and incentive programs designed for mutual growth.", gradient: "from-indigo-500 to-blue-700" },
];

const steps = [
  "Submit your application through the form below",
  "Our business development team reviews your profile",
  "Introductory meeting to discuss partnership terms",
  "Agreement signing and onboarding",
  "Product training and marketing kit handover",
  "Launch and ongoing support",
];

const Partner = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">
          Become a Partner / Distributor
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Join RadPing's growing network and bring world-class medical equipment to your region
        </p>
      </div>
    </section>

    {/* Overview */}
    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-title">Partner With Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            RadPing is expanding its distribution network across India and beyond. We are looking for passionate, driven partners who share our commitment to improving healthcare through quality medical equipment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As a RadPing partner, you'll have access to our complete range of medical imaging and diagnostic equipment, backed by comprehensive training, marketing support, and after-sales service infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're an established medical equipment distributor or looking to enter the healthcare equipment space, we have partnership models tailored to your business goals.
          </p>
        </div>
        <img src={partnerHandshake} alt="Partnership" loading="lazy" width={800} height={512} className="rounded-xl shadow-lg" />
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Partner With RadPing?</h2>
          <p className="section-subtitle">Unlock growth opportunities with India's trusted medical equipment brand</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                <b.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <img src={partnerDistribution} alt="Distribution Network" loading="lazy" width={800} height={512} className="rounded-xl shadow-lg" />
        <div>
          <h2 className="section-title">How It Works</h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Application Form */}
    <section className="section-padding bg-muted" id="partner-form">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="section-title">Apply Now</h2>
          <p className="section-subtitle">Fill out the form below and our team will get back to you within 48 hours</p>
        </div>
        <form className="bg-card rounded-xl p-8 border border-border shadow-lg space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-heading font-semibold mb-1.5 block">Full Name *</label>
              <Input placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-heading font-semibold mb-1.5 block">Company Name *</label>
              <Input placeholder="Your company name" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-heading font-semibold mb-1.5 block">Email *</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-sm font-heading font-semibold mb-1.5 block">Phone *</label>
              <Input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-heading font-semibold mb-1.5 block">City / Region *</label>
              <Input placeholder="Your city or region" />
            </div>
            <div>
              <label className="text-sm font-heading font-semibold mb-1.5 block">Years in Business</label>
              <Input placeholder="e.g. 5 years" />
            </div>
          </div>
          <div>
            <label className="text-sm font-heading font-semibold mb-1.5 block">Current Business / Experience</label>
            <Textarea placeholder="Tell us about your current business and experience in medical equipment distribution..." rows={4} />
          </div>
          <div>
            <label className="text-sm font-heading font-semibold mb-1.5 block">Why do you want to partner with RadPing?</label>
            <Textarea placeholder="Share your motivation and goals..." rows={3} />
          </div>
          <Button type="submit" className="w-full gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90 h-12 text-base">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  </Layout>
);

export default Partner;
