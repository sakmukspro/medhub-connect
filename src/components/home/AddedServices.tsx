import { Link } from "react-router-dom";
import { Video, Newspaper, Search, FileText, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Video,
    title: "Product Videos",
    desc: "Watch detailed product demonstrations, installation guides and customer testimonials.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-rose-500 to-pink-600",
    borderColor: "border-rose-200",
    link: "/gallery",
    linkText: "Watch Videos",
  },
  {
    icon: Newspaper,
    title: "News & Installation Feeds",
    desc: "Latest news about our installations, hospital setups, and industry updates across India.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-sky-500 to-blue-600",
    borderColor: "border-sky-200",
    link: "/blog",
    linkText: "Read Updates",
  },
  {
    icon: Search,
    title: "SEO – LinkedIn & Google",
    desc: "Follow us on LinkedIn and Google for the latest updates on products and healthcare innovations.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    borderColor: "border-emerald-200",
    link: "https://www.linkedin.com/company/radping",
    linkText: "Follow Us",
    external: true,
  },
  {
    icon: FileText,
    title: "Request a Quote",
    desc: "Get a customized quotation for medical equipment tailored to your hospital's requirements.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    borderColor: "border-amber-200",
    link: "/contact",
    linkText: "Get Quote",
  },
  {
    icon: Star,
    title: "Customer Reviews",
    desc: "Read what healthcare professionals say about our products, service and after-sales support.",
    iconColor: "text-white",
    bgGradient: "bg-gradient-to-br from-purple-500 to-violet-600",
    borderColor: "border-purple-200",
    link: "/about#testimonials",
    linkText: "Read Reviews",
  },
];

const AddedServices = () => (
  <section className="section-padding bg-gradient-to-br from-muted via-background to-muted">
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
            className={`bg-card rounded-xl p-6 border-2 ${s.borderColor} hover:shadow-xl transition-all group text-center hover:-translate-y-1`}
          >
            <div className={`w-16 h-16 rounded-2xl ${s.bgGradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
              <s.icon className={`w-8 h-8 ${s.iconColor}`} />
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
