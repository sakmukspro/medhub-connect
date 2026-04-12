import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, CheckCircle, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import heroInjector from "@/assets/hero-injector.jpg";
import heroFixedXray from "@/assets/hero-fixed-xray.jpg";
import heroMobileXray from "@/assets/hero-mobile-xray.jpg";
import heroCArm from "@/assets/hero-c-arm.jpg";

const slides = [
  {
    bg: heroInjector,
    heading: "Advanced Contrast Media Injectors",
    tagline: "Zenith CT injectors for enhanced imaging of CT scan, MRI and DSA angiography systems",
    cta: "View Products",
    link: "/products",
  },
  {
    bg: heroFixedXray,
    heading: "Digital Fixed X-Ray Systems",
    tagline: "High-resolution digital X-ray systems for radiology departments and diagnostic centers",
    cta: "Explore Solutions",
    link: "/solutions",
  },
  {
    bg: heroMobileXray,
    heading: "Portable Mobile X-Ray Units",
    tagline: "Bedside and emergency imaging with portable digital X-ray systems",
    cta: "Browse Products",
    link: "/products",
  },
  {
    bg: heroCArm,
    heading: "Surgical C-Arm Systems",
    tagline: "High-performance C-Arm with flat panel detector for surgical and orthopedic imaging",
    cta: "View Details",
    link: "/products",
  },
];

const trustBadges = [
  { icon: Shield, label: "ISO 13485 Certified" },
  { icon: Award, label: "Make in India" },
  { icon: CheckCircle, label: "500+ Hospitals Trust Us" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setTextVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setTextVisible(false);
    setTimeout(() => {
      setCurrent((c) => (c + dir + slides.length) % slides.length);
      setTextVisible(true);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section className="relative h-[550px] md:h-[650px] lg:h-[720px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={s.bg} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(310, 60%, 42%, 0.75) 0%, hsla(30, 90%, 55%, 0.5) 50%, hsla(310, 60%, 42%, 0.4) 100%)" }} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT - Text */}
            <div className={`transition-all duration-700 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-4" style={{ color: "white" }}>
                <span className="gradient-text">{slide.heading.split(" ").slice(0, 2).join(" ")}</span>{" "}
                <span style={{ color: "white" }}>{slide.heading.split(" ").slice(2).join(" ")}</span>
              </h1>
              <p className="text-base md:text-lg mb-8 max-w-lg" style={{ color: "hsla(0,0%,100%,0.8)" }}>
                {slide.tagline}
              </p>
              <Button asChild size="lg" className="gradient-bg text-primary-foreground font-heading font-semibold px-8 border-0 hover:opacity-90 mb-8">
                <Link to={slide.link}>{slide.cta}</Link>
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                    <badge.icon className="w-4 h-4" style={{ color: "hsl(30, 90%, 55%)" }} />
                    <span className="text-xs font-medium" style={{ color: "hsla(0,0%,100%,0.9)" }}>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Contact */}
            <div className="hidden lg:flex relative h-[500px] items-center justify-center">
              <a
                href="tel:+917305062227"
                className="group flex items-center gap-4 bg-background/10 backdrop-blur-md border border-white/15 rounded-2xl px-8 py-6 hover:bg-background/20 transition-all duration-500 animate-fade-in"
                style={{ animation: "heroFloat 3s ease-in-out infinite" }}
              >
                <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "hsla(0,0%,100%,0.6)" }}>Call Us Now</p>
                  <p className="text-xl font-bold font-heading" style={{ color: "white" }}>+91-7305062227</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full p-2 transition-colors" style={{ color: "white" }} aria-label="Previous">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full p-2 transition-colors" style={{ color: "white" }} aria-label="Next">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setTextVisible(false); setTimeout(() => { setCurrent(i); setTextVisible(true); }, 400); }} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-secondary" : "w-3 bg-white/40"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
