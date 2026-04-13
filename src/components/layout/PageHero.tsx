import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  icon1: LucideIcon;
  icon2?: LucideIcon;
}

const PageHero = ({ title, subtitle, icon1: Icon1, icon2: Icon2 }: PageHeroProps) => (
  <section className="gradient-bg py-20 relative overflow-hidden">
    {/* Decorative icons */}
    <Icon1
      className="absolute top-6 right-8 w-24 h-24 text-primary-foreground/[0.07] rotate-12"
      strokeWidth={1}
    />
    {Icon2 && (
      <Icon2
        className="absolute bottom-4 left-8 w-20 h-20 text-primary-foreground/[0.07] -rotate-12"
        strokeWidth={1}
      />
    )}
    {/* Subtle radial glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at 80% 20%, hsla(30,90%,55%,0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, hsla(310,60%,42%,0.1) 0%, transparent 50%)",
      }}
    />
    <div className="container text-center relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-primary-foreground mb-4">
        {title}
      </h1>
      <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
    </div>
  </section>
);

export default PageHero;
