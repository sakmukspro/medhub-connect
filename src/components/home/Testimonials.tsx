import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  { name: "Dr. Rajesh Kumar", role: "Chief Radiologist, Apollo Hospital", text: "RadPing has been our trusted partner for imaging equipment. Their service and support is exemplary." },
  { name: "Dr. Priya Sharma", role: "Director, City Diagnostic Center", text: "Excellent quality equipment with prompt installation and after-sales service. Highly recommended." },
  { name: "Dr. Arun Menon", role: "ICU Head, Fortis Hospital", text: "We equipped our entire ICU with RadPing solutions. Reliable equipment and great technical support." },
  { name: "Dr. Sneha Patel", role: "MD, LifeCare Diagnostics", text: "From consultation to installation, RadPing made the entire process seamless. Outstanding professionalism." },
];

const Testimonials = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="section-padding bg-topbar text-topbar-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-topbar-foreground mb-4 mt-2">What Our Clients Say</h2>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-4 basis-full md:basis-1/2">
                <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-topbar-foreground/10 h-full">
                  <Quote className="w-8 h-8 text-secondary/60 mb-4" />
                  <p className="text-topbar-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-heading font-bold text-sm text-topbar-foreground">{t.name}</div>
                    <div className="text-xs text-topbar-foreground/60">{t.role}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
