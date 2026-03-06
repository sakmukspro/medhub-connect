import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCtScan from "@/assets/hero-ct-scan.jpg";
import heroIcu from "@/assets/hero-icu.jpg";
import heroMobility from "@/assets/hero-mobility.jpg";

const slides = [
  {
    image: heroCtScan,
    heading: "Advanced Medical Imaging Solutions",
    tagline: "State-of-the-art CT, MRI & X-Ray equipment for modern healthcare facilities",
    cta: "View Products",
    link: "/products",
  },
  {
    image: heroIcu,
    heading: "Reliable Hospital Equipment Supplier",
    tagline: "Complete ICU setup and patient monitoring solutions trusted by 500+ hospitals",
    cta: "Explore Solutions",
    link: "/solutions",
  },
  {
    image: heroMobility,
    heading: "Mobility & Patient Care Devices",
    tagline: "Wheelchairs, walkers and rehabilitation equipment for enhanced patient comfort",
    cta: "Browse Products",
    link: "/products",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => setCurrent((c) => (c + dir + slides.length) % slides.length);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-2xl animate-fade-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-primary-foreground mb-4 leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">{slide.tagline}</p>
                <Button asChild size="lg" className="gradient-bg text-primary-foreground font-heading font-semibold px-8 border-0 hover:opacity-90">
                  <Link to={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full p-2 text-primary-foreground transition-colors" aria-label="Previous">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full p-2 text-primary-foreground transition-colors" aria-label="Next">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-secondary" : "bg-primary-foreground/40"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
