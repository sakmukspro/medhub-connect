import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Hospitals Served" },
  { value: 100, suffix: "+", label: "Products" },
  { value: 50, suffix: "+", label: "Service Contracts" },
];

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return { count, ref };
}

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center p-4 rounded-lg bg-muted">
      <div className="text-2xl font-extrabold font-heading text-primary">{count}{suffix}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const WelcomeSection = () => (
  <section className="section-padding">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Welcome to RadPing</span>
          <h2 className="section-title mt-2">Make in India Medical Devices</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            RADPING is the dream of producing Make in India medical diagnostic devices that is of world class quality, and strive to be pioneers in innovating state of the art devices, showing excellence in design and engineering with premium quality medical devices.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Radping, innovation is at the forefront of everything we do. Our strong innovation team focuses on improving existing products and introducing new products that address the market feedback and needs identified by our marketing team.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We are committed to continuing our tradition of delivering high-quality, innovative healthcare technology products that make a difference in people's lives around the world.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
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
