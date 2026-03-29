import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import serviceIt from "@/assets/service-it-support.jpg";
import serviceHardware from "@/assets/service-hardware-amc.jpg";

const services = [
  {
    title: "Healthcare IT Support",
    image: serviceIt,
    desc: "End-to-end IT solutions for hospitals and diagnostic centers — PACS/RIS integration, DICOM networking, teleradiology setup, hospital information systems, and 24/7 remote & on-site technical support to keep your healthcare IT infrastructure running seamlessly.",
    features: ["PACS/RIS Integration", "DICOM Networking", "Teleradiology Setup", "24/7 Remote Support"],
    link: "/services#it-support",
  },
  {
    title: "Hardware Service (AMC/CMC)",
    image: serviceHardware,
    desc: "Comprehensive Annual & Comprehensive Maintenance Contracts for all medical diagnostic equipment — preventive maintenance, breakdown support, spare parts management, and calibration services ensuring maximum uptime and equipment longevity.",
    features: ["Preventive Maintenance", "Breakdown Support", "Spare Parts Management", "Calibration Services"],
    link: "/services#hardware",
  },
];

const ServicesGrid = () => (
  <section className="section-padding bg-muted">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">What We Provide</span>
        <h2 className="section-title mt-2">Our Service Categories</h2>
        <p className="section-subtitle">Comprehensive medical equipment service & support solutions</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-xl overflow-hidden border border-border group hover:border-primary/30 transition-colors"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="h-56 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {s.features.map((f) => (
                  <span key={f} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {f}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={s.link}>
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
