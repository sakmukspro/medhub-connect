import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">Contact Us</h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">Get in touch with our team for any inquiries</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-muted" />
              <Input placeholder="Email Address" type="email" className="bg-muted" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Phone Number" type="tel" className="bg-muted" />
              <Input placeholder="Company / Hospital" className="bg-muted" />
            </div>
            <Input placeholder="Subject" className="bg-muted" />
            <Textarea placeholder="Your Message" rows={5} className="bg-muted" />
            <Button type="submit" className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90 w-full sm:w-auto px-8">
              Send Message
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-muted rounded-xl p-6">
            <h3 className="font-heading font-bold text-lg mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Block-1, Unit No:37, Third Floor, SIDCO Electronic Complex, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 600032</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+917305062227" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91-7305062227</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@radping.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@radping.in</a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-muted rounded-xl h-64 flex items-center justify-center border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.21!3d13.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzM2LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.75rem" }}
              allowFullScreen
              loading="lazy"
              title="RadPing Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
