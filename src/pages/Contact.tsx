import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle, Send } from "lucide-react";

const Contact = () => (
  <Layout>
    <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out to us through any of the channels below." icon1={Send} icon2={Phone} />

    {/* Contact Cards */}
    <section className="section-padding -mt-10">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            {
              icon: Phone,
              title: "Call Us",
              detail: "+91-7305062227",
              href: "tel:+917305062227",
              gradient: "from-primary to-[hsl(280,60%,50%)]",
            },
            {
              icon: Mail,
              title: "Email Us",
              detail: "info@radping.in",
              href: "mailto:info@radping.in",
              gradient: "from-secondary to-[hsl(15,80%,50%)]",
            },
            {
              icon: Clock,
              title: "Working Hours",
              detail: "Mon - Sat: 9AM - 6PM",
              href: null,
              gradient: "from-accent to-[hsl(200,60%,45%)]",
            },
            {
              icon: Globe,
              title: "Headquarters",
              detail: "Chennai, India",
              href: null,
              gradient: "from-[hsl(340,60%,50%)] to-primary",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative group rounded-2xl bg-card border border-border p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
              {item.href ? (
                <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {item.detail}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              )}
            </div>
          ))}
        </div>

        {/* Main content: Form + Map + Address */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Send Us a Message</h2>
            <p className="text-muted-foreground text-sm mb-6">Fill the form below and we'll respond within 24 hours.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background border-border" />
                <Input placeholder="Email Address" type="email" className="bg-background border-border" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone Number" type="tel" className="bg-background border-border" />
                <Input placeholder="Company / Hospital" className="bg-background border-border" />
              </div>
              <Input placeholder="Subject" className="bg-background border-border" />
              <Textarea placeholder="Your Message" rows={4} className="bg-background border-border" />

              <div className="flex flex-wrap gap-3">
                <Button
                  type="submit"
                  className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90 px-8"
                >
                  Send Message
                </Button>
                <a
                  href="https://wa.me/917305062227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    type="button"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-primary-foreground font-heading font-semibold px-6 gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </form>
          </div>

          {/* Right column: Address + Map */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground shadow-lg">
              <h3 className="font-heading font-bold text-lg mb-4">Our Office</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                  <p className="text-sm opacity-90">
                    Block-1, Unit No:37, Third Floor,<br />
                    SIDCO Electronic Complex,<br />
                    Thiru Vi Ka Industrial Estate,<br />
                    Guindy, Chennai - 600032
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 opacity-80" />
                  <a href="tel:+917305062227" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    +91-7305062227
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 opacity-80" />
                  <a href="mailto:info@radping.in" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                    info@radping.in
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/917305062227"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 bg-[#25D366] text-primary-foreground rounded-xl px-4 py-3 font-heading font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm flex-1 min-h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.21!3d13.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM2LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="RadPing Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
