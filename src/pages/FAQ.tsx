import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Phone, CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Products",
    items: [
      { q: "What types of medical equipment does RadPing offer?", a: "RadPing offers a comprehensive range of medical equipment including Contrast Media Injectors (Single Head, Dual Head, Angio, MRI), Mobile X-Ray systems, Fixed X-Ray machines, Surgical C-Arms, Mobile Cathlabs, DICOM Film Printers, and Medical Display Monitors." },
      { q: "Are your products certified and safe to use?", a: "Yes, all our products comply with international quality standards including ISO 9001:2015, ISO 13485:2016, CE Marking, and BIS Certification. Every product undergoes rigorous testing before delivery." },
      { q: "Can I get a product demonstration before purchasing?", a: "Absolutely! We offer on-site and virtual product demonstrations. Contact our sales team to schedule a demo tailored to your hospital's requirements." },
      { q: "Do you offer customized solutions for hospitals?", a: "Yes, we provide tailored healthcare solutions based on your hospital's size, specialization, and budget. Our team conducts a thorough assessment before recommending the best equipment configuration." },
    ],
  },
  {
    category: "Services & Support",
    items: [
      { q: "What kind of after-sales support do you provide?", a: "We offer comprehensive after-sales support including installation, training, preventive maintenance, on-call technical support, and spare parts supply. Our service team is available to assist you promptly." },
      { q: "Do you offer AMC (Annual Maintenance Contract)?", a: "Yes, we offer both AMC (Annual Maintenance Contract) and CMC (Comprehensive Maintenance Contract) packages that cover routine maintenance, repairs, spare parts, and priority support." },
      { q: "How quickly can you respond to service requests?", a: "Our service team aims to respond within 24 hours for standard requests and within 4 hours for critical/emergency cases. We have service engineers across major cities for faster response." },
      { q: "Do you provide training for hospital staff?", a: "Yes, we provide thorough training for all equipment we supply. This includes operator training, safety protocols, and basic troubleshooting. Refresher training sessions are also available." },
    ],
  },
  {
    category: "Orders & Delivery",
    items: [
      { q: "What is the typical delivery timeline?", a: "Delivery timelines vary by product. Standard equipment is typically delivered within 2-4 weeks. Custom configurations may take 4-8 weeks. Our team will provide exact timelines at the time of order confirmation." },
      { q: "Do you deliver across India?", a: "Yes, we deliver and install equipment across India. We have a pan-India service network with engineers stationed in major cities and regions." },
      { q: "How can I request a quotation?", a: "You can request a quotation by visiting our Contact page, calling our sales team directly, or filling out the 'Request a Quote' form on our website. We typically respond within 24 business hours." },
      { q: "What payment terms do you offer?", a: "We offer flexible payment terms including advance payment, milestone-based payments, and credit terms for established institutions. Details are discussed during the quotation process." },
    ],
  },
  {
    category: "Partnership",
    items: [
      { q: "How can I become a RadPing distributor?", a: "We welcome partnership inquiries! Visit our 'Become a Partner/Distributor' page to learn about our partnership program and submit your application. Our business development team will review and get back to you." },
      { q: "Do you offer dealership opportunities in my region?", a: "Yes, we are continuously expanding our dealer network across India. If your region is not yet covered, we'd love to discuss partnership opportunities. Contact our business development team for details." },
    ],
  },
];

const categoryColors = [
  "from-purple-500 to-violet-600",
  "from-sky-500 to-blue-600",
  "from-amber-500 to-orange-600",
  "from-emerald-500 to-teal-600",
];

const FAQ = () => (
  <Layout>
    <section className="gradient-bg py-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
          Find answers to common questions about our products, services, and partnership opportunities
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-4xl">
        {faqs.map((cat, ci) => (
          <div key={cat.category} className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[ci]} flex items-center justify-center shadow-md`}>
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-heading font-bold text-xl">{cat.category}</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {cat.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${cat.category}-${i}`}
                  className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-sm hover:text-primary hover:no-underline py-4">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="container max-w-2xl text-center">
        <h2 className="section-title">Still Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Can't find what you're looking for? Our team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" className="font-heading font-semibold">
            <a href="tel:+919876543210">
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
