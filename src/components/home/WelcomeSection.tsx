import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Hospitals Served" },
  { value: "100+", label: "Products" },
  { value: "50+", label: "Service Contracts" },
];

const WelcomeSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Welcome to RadPing</span>
          <h2 className="section-title mt-2">Hospital Equipment Solution Provider</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            RADPING IMAGING PVT LTD is a Hospital Equipment Solution Providing Company specializing in Radiology, Cardiology, Dental and Critical Care for over 20 years. We provide products & solutions in the healthcare & industrial imaging domain with continuous innovation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our experience ranges from large-scale replacement hospital projects to assisting individual departments with the planning and procurement of costly medical systems.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 rounded-lg bg-muted">
                <div className="text-2xl font-extrabold font-heading text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <Button asChild className="gradient-bg text-primary-foreground border-0 font-heading font-semibold hover:opacity-90">
            <Link to="/about">Read More</Link>
          </Button>
        </div>
        <div className="relative">
          <img src={aboutTeam} alt="Our Team" className="rounded-xl shadow-lg w-full" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 gradient-bg rounded-xl opacity-20" />
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl opacity-30" />
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeSection;
