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
    <section className="relative h-[550px] md:h-[650px] lg:h-[720px] overflow-hidden bg-foreground">
      {/* Background images with soft blur & low opacity */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-40" : "opacity-0"}`}
        >
          <img src={s.bg} alt="" className="w-full h-full object-cover scale-105 blur-[2px]" />
        </div>
      ))}

      {/* Gradient overlays for premium blend */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(220, 20%, 6%, 0.92) 0%, hsla(310, 30%, 10%, 0.8) 40%, hsla(220, 20%, 8%, 0.85) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsla(310, 60%, 42%, 0.12) 0%, hsla(30, 90%, 55%, 0.06) 40%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)" }} />

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
              <p className="text-base md:text-lg mb-8 max-w-lg" style={{ color: "hsla(0,0%,100%,0.75)" }}>
                {slide.tagline}
              </p>
              <Button asChild size="lg" className="gradient-bg text-primary-foreground font-heading font-semibold px-8 border-0 hover:opacity-90 mb-8 shadow-lg shadow-primary/20">
                <Link to={slide.link}>{slide.cta}</Link>
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-sm">
                    <badge.icon className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium" style={{ color: "hsla(0,0%,100%,0.85)" }}>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Product visual + Contact */}
            <div className={`hidden lg:flex relative h-[500px] flex-col items-center justify-center gap-6 transition-all duration-700 ${textVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              {/* Product image with soft glow */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl" style={{ background: "radial-gradient(circle, hsla(310, 60%, 42%, 0.25) 0%, hsla(30, 90%, 55%, 0.1) 50%, transparent 70%)", filter: "blur(40px)", transform: "scale(1.5)" }} />
                <img
                  src={slide.bg}
                  alt={slide.heading}
                  className="relative w-[420px] h-[340px] object-contain drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 25px 50px hsla(310, 60%, 42%, 0.3)) drop-shadow(0 10px 20px hsla(30, 90%, 55%, 0.2))" }}
                />
              </div>

              {/* Contact card */}
              <a
                href="tel:+917305062227"
                className="group relative flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-7 py-5 hover:bg-white/10 transition-all duration-500 shadow-lg shadow-black/20"
                style={{ animation: "heroFloat 3s ease-in-out infinite" }}
              >
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "hsla(0,0%,100%,0.5)" }}>Call Us Now</p>
                  <p className="text-lg font-bold font-heading" style={{ color: "white" }}>+91-7305062227</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 backdrop-blur-md rounded-full p-2.5 transition-all border border-white/10" style={{ color: "white" }} aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/5 hover:bg-white/15 backdrop-blur-md rounded-full p-2.5 transition-all border border-white/10" style={{ color: "white" }} aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setTextVisible(false); setTimeout(() => { setCurrent(i); setTextVisible(true); }, 400); }} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 gradient-bg" : "w-3 bg-white/20"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
