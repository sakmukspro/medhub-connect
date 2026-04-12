import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroInjector from "@/assets/hero-injector.jpg";
import heroFixedXray from "@/assets/hero-fixed-xray.jpg";
import heroMobileXray from "@/assets/hero-mobile-xray.jpg";
import heroCArm from "@/assets/hero-c-arm.jpg";
import productInjector from "@/assets/product-injector-single.png";
import productFixedXray from "@/assets/product-fixed-xray.png";
import productMobileXray from "@/assets/product-mobile-xray.png";
import productCArm from "@/assets/product-c-arm.png";

const slides = [
  {
    bg: heroInjector,
    product: productInjector,
    heading: "Advanced Contrast",
    headingLine2: "Media Injectors",
    tagline: "Zenith CT injectors for enhanced imaging of CT scan, MRI and DSA angiography systems",
    cta: "View Products",
    link: "/products",
  },
  {
    bg: heroFixedXray,
    product: productFixedXray,
    heading: "Digital Fixed",
    headingLine2: "X-Ray Systems",
    tagline: "High-resolution digital X-ray systems for radiology departments and diagnostic centers",
    cta: "Explore Solutions",
    link: "/solutions",
  },
  {
    bg: heroMobileXray,
    product: productMobileXray,
    heading: "Portable Mobile",
    headingLine2: "X-Ray Units",
    tagline: "Bedside and emergency imaging with portable digital X-ray systems",
    cta: "Browse Products",
    link: "/products",
  },
  {
    bg: heroCArm,
    product: productCArm,
    heading: "Surgical C-Arm",
    headingLine2: "Systems",
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
      {/* Soft pink/rose gradient background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, hsl(340, 80%, 95%) 0%, hsl(20, 90%, 95%) 30%, hsl(330, 60%, 92%) 60%, hsl(340, 70%, 94%) 100%)"
      }} />

      {/* Flowing wave SVG decoration */}
      <svg className="absolute bottom-0 left-0 w-full h-[60%] opacity-40" viewBox="0 0 1440 400" preserveAspectRatio="none">
        <path d="M0,200 C200,100 400,300 600,200 C800,100 1000,280 1200,180 C1300,140 1400,200 1440,200 L1440,400 L0,400 Z" fill="hsla(310, 60%, 70%, 0.25)" />
        <path d="M0,260 C180,180 380,320 580,240 C780,160 980,300 1180,220 C1320,170 1440,260 1440,260 L1440,400 L0,400 Z" fill="hsla(30, 90%, 75%, 0.2)" />
        <path d="M0,300 C240,240 440,340 640,280 C840,220 1040,320 1240,260 C1360,230 1440,300 1440,300 L1440,400 L0,400 Z" fill="hsla(310, 50%, 80%, 0.15)" />
      </svg>

      {/* Soft circle glow accents */}
      <div className="absolute top-10 right-[20%] w-[400px] h-[400px] rounded-full opacity-20" style={{
        background: "radial-gradient(circle, hsla(310, 60%, 70%, 0.4) 0%, transparent 70%)"
      }} />
      <div className="absolute bottom-10 left-[10%] w-[300px] h-[300px] rounded-full opacity-15" style={{
        background: "radial-gradient(circle, hsla(30, 90%, 70%, 0.4) 0%, transparent 70%)"
      }} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT - Text */}
            <div className={`transition-all duration-700 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight mb-4">
                <span className="text-foreground">{slide.heading}</span>
                <br />
                <span className="gradient-text">{slide.headingLine2}</span>
              </h1>
              <p className="text-base md:text-lg mb-8 max-w-lg text-muted-foreground">
                {slide.tagline}
              </p>
              <Button asChild size="lg" className="gradient-bg text-primary-foreground font-heading font-semibold px-8 border-0 hover:opacity-90 mb-8 shadow-lg">
                <Link to={slide.link}>{slide.cta}</Link>
              </Button>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 bg-background/60 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/10 shadow-sm">
                    <badge.icon className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium text-foreground/80">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Product Image */}
            <div className="hidden lg:flex relative h-[500px] items-center justify-center">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                >
                  <img
                    src={s.product}
                    alt={s.heading + " " + s.headingLine2}
                    className="max-h-[460px] max-w-full object-contain drop-shadow-2xl"
                    style={{
                      filter: "drop-shadow(0 20px 40px hsla(310, 60%, 42%, 0.15))",
                      animation: i === current ? "heroFloat 3s ease-in-out infinite" : "none"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={() => go(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm rounded-full p-2 transition-colors text-primary" aria-label="Previous">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={() => go(1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 backdrop-blur-sm rounded-full p-2 transition-colors text-primary" aria-label="Next">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => { setTextVisible(false); setTimeout(() => { setCurrent(i); setTextVisible(true); }, 400); }} className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-3 bg-primary/30"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
