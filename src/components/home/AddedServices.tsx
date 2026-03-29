import { Link } from "react-router-dom";
import { Video, Newspaper, Search, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Video,
    title: "Product Videos",
    desc: "Watch detailed product demonstrations, installation guides and customer testimonials.",
    color: "bg-rose-500/15 text-rose-600",
    link: "/gallery",
    linkText: "Watch Videos",
  },
  {
    icon: Newspaper,
    title: "News & Installation Feeds",
    desc: "Latest news about our installations, hospital setups, and industry updates across India.",
    color: "bg-sky-500/15 text-sky-600",
    link: "/blog",
    linkText: "Read Updates",
  },
  {
    icon: Search,
    title: "SEO – LinkedIn & Google",
    desc: "Follow us on LinkedIn and Google for the latest updates on products and healthcare innovations.",
    color: "bg-emerald-500/15 text-emerald-600",
    link: "https://www.linkedin.com/company/radping",
    linkText: "Follow Us",
    external: true,
  },
  {
    icon: FileText,
    title: "Request a Quote",
    desc: "Get a customized quotation for medical equipment tailored to your hospital's requirements.",
    color: "bg-amber-500/15 text-amber-600",
    link: "/contact",
    linkText: "Get Quote",
  },
  {
    icon: Star,
    title: "Customer Reviews",
    desc: "Read what healthcare professionals say about our products, service and after-sales support.",
    color: "bg-purple-500/15 text-purple-600",
    link: "/about#testimonials",
    linkText: "Read Reviews",
  },
];

const AddedServices = () => (
  <section className="section-padding">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-secondary uppercase tracking-wider">More From RadPing</span>
        <h2 className="section-title mt-2">Added Services</h2>
        <p className="section-subtitle">Stay connected, informed, and supported at every step</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all group text-center"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className={`w-14 h-14 rounded-xl ${s.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <s.icon className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-bold text-base mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
            {s.external ? (
              <Button asChild variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <a href={s.link} target="_blank" rel="noopener noreferrer">{s.linkText}</a>
              </Button>
            ) : (
              <Button asChild variant="outline" size="sm" className="font-heading text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={s.link}>{s.linkText}</Link>
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AddedServices;
