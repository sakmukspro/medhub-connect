import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import WelcomeSection from "@/components/home/WelcomeSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <WelcomeSection />
    <ServicesGrid />
    <FeaturedProducts />
    <SolutionsSection />
    <WhyChooseUs />
    <Testimonials />
    <BlogSection />
    <CTASection />
  </Layout>
);

export default Index;
