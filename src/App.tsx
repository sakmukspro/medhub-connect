import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ContrastMediaInjector from "./pages/ContrastMediaInjector";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Certifications from "./pages/Certifications";
import OurClients from "./pages/OurClients";
import QualityProcess from "./pages/QualityProcess";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Industries from "./pages/Industries";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Partner from "./pages/Partner";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/contrast-media-injector" element={<ContrastMediaInjector />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-support" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/quality-process" element={<QualityProcess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
