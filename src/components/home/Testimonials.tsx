import { Quote, Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const testimonials = [
  { name: "Dr. Rajesh Kumar", role: "Chief Radiologist, Apollo Hospital", text: "RadPing has been our trusted partner for imaging equipment. Their service and support is exemplary.", rating: 5, avatar: "RK" },
  { name: "Dr. Priya Sharma", role: "Director, City Diagnostic Center", text: "Excellent quality equipment with prompt installation and after-sales service. Highly recommended.", rating: 5, avatar: "PS" },
  { name: "Dr. Arun Menon", role: "ICU Head, Fortis Hospital", text: "We equipped our entire ICU with RadPing solutions. Reliable equipment and great technical support.", rating: 4, avatar: "AM" },
  { name: "Dr. Sneha Patel", role: "MD, LifeCare Diagnostics", text: "From consultation to installation, RadPing made the entire process seamless. Outstanding professionalism.", rating: 5, avatar: "SP" },
  { name: "Dr. Vikram Singh", role: "HOD Radiology, Max Hospital", text: "The contrast media injectors from RadPing are top-notch. Precision engineering at its best.", rating: 4, avatar: "VS" },
  { name: "Dr. Meera Joshi", role: "MD, Sunrise Imaging Center", text: "Exceptional after-sales support and training. RadPing truly understands healthcare providers' needs.", rating: 5, avatar: "MJ" },
];

const avatarColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-primary/80 text-primary-foreground",
  "bg-secondary/80 text-secondary-foreground",
  "bg-accent/80 text-accent-foreground",
];

const Testimonials = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(260 60% 65%), hsl(280 50% 60%), hsl(310 60% 55%))" }}>
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20" style={{ background: "hsl(350 80% 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15" style={{ background: "hsl(50 80% 70%)", filter: "blur(100px)" }} />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "hsl(50 90% 75%)" }}>Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2" style={{ color: "white" }}>Customer Feedbacks</h2>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, idx) => (
              <CarouselItem key={t.name} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="bg-background rounded-2xl p-6 shadow-lg h-full flex flex-col relative">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-muted-foreground/20 mb-3" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < t.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {t.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${avatarColors[idx % avatarColors.length]}`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
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
