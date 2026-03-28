import whyQuality from "@/assets/why-quality.jpg";
import whyTeam from "@/assets/why-team.jpg";
import whyDelivery from "@/assets/why-delivery.jpg";
import whyInstallation from "@/assets/why-installation.jpg";
import whySupport from "@/assets/why-support.jpg";

const reasons = [
  { image: whyQuality, title: "Quality Certified", desc: "ISO certified products meeting international standards" },
  { image: whyTeam, title: "Experienced Team", desc: "20+ years of expertise in medical equipment" },
  { image: whyDelivery, title: "Fast Delivery", desc: "Timely delivery across India with proper logistics" },
  { image: whyInstallation, title: "Installation Support", desc: "Professional installation by trained engineers" },
  { image: whySupport, title: "After Sales Service", desc: "Dedicated support and maintenance contracts" },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why RadPing</span>
        <h2 className="section-title mt-2">Why Choose Us</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="text-center group">
            <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors shadow-lg">
              <img src={r.image} alt={r.title} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-xs">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
