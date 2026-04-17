import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/radping-logo.jpeg";
import productInjector from "@/assets/product-injector-single.jpg";
import productMobileXray from "@/assets/product-mobile-xray.jpg";
import productFixedXray from "@/assets/product-fixed-xray.jpg";
import productCArm from "@/assets/product-c-arm.jpg";
import productCathlab from "@/assets/product-mobile-cathlab.jpg";
import productDicom from "@/assets/product-dicom-printer.jpg";
import productDisplay from "@/assets/product-medical-display.jpg";

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string; image?: string }[];
}

const productImages: Record<string, string> = {
  "Contrast Media Injector": productInjector,
  "Mobile X-Ray": productMobileXray,
  "Fixed X-Ray": productFixedXray,
  "Surgical C-Arm": productCArm,
  "Mobile Cathlab": productCathlab,
  "DICOM Film Printer": productDicom,
  "Medical Display Monitor": productDisplay,
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About Us", path: "/about",
    children: [
      { label: "Core Team", path: "/about#core-team" },
      { label: "Our Clients", path: "/our-clients" },
      { label: "Quality Process", path: "/quality-process" },
      { label: "Certifications", path: "/certifications" },
    ],
  },
  {
    label: "Products", path: "/products",
    children: [
      { label: "Contrast Media Injector", path: "/products/contrast-media-injector" },
      { label: "Mobile X-Ray", path: "/products/mobile-x-ray" },
      { label: "Fixed X-Ray", path: "/products/fixed-x-ray" },
      { label: "Surgical C-Arm", path: "/products/surgical-c-arm" },
      { label: "DICOM Film Printer", path: "/products/dicom-film-printer" },
      { label: "Medical Display Monitor", path: "/products/medical-display-monitor" },
    ],
  },
  {
    label: "Services", path: "/services",
    children: [
      { label: "Healthcare IT Support", path: "/services#it-support" },
      { label: "Hardware Service (AMC/CMC)", path: "/services#hardware" },
    ],
  },
  {
    label: "Support", path: "/services#support",
    children: [
      { label: "Sales", path: "/contact" },
      { label: "Technical", path: "/services#technical" },
      { label: "FAQ", path: "/faq" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  {
    label: "Partner", path: "/partner",
    children: [
      { label: "Become A Partner/Distributor", path: "/partner" },
      { label: "Certifications", path: "/certifications" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const DropdownMenu = ({ items, show, isProducts }: { items: { label: string; path: string }[]; show: boolean; isProducts?: boolean }) => {
  if (!show) return null;

  if (isProducts) {
    return (
      <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-3 px-3 min-w-[520px] z-50">
        <div className="grid grid-cols-2 gap-2">
          {items.map((item) => (
            <Link
              key={item.path + item.label}
              to={item.path}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium font-heading text-foreground hover:text-primary hover:bg-primary/5 transition-colors group"
            >
              {productImages[item.label] && (
                <img
                  src={productImages[item.label]}
                  alt={item.label}
                  className="w-10 h-10 rounded-md object-cover flex-shrink-0 border border-border group-hover:border-primary/30 transition-colors"
                />
              )}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[220px] z-50">
      {items.map((item) => (
        <Link
          key={item.path + item.label}
          to={item.path}
          className="block px-4 py-2 text-sm font-medium font-heading text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="RadPing Imaging Pvt Ltd" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium font-heading rounded-md transition-colors hover:text-primary hover:bg-primary/5 inline-flex items-center gap-1 ${
                  location.pathname === item.path ? "text-primary bg-primary/5" : "text-foreground"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && (
                <DropdownMenu items={item.children} show={activeDropdown === item.label} isProducts={item.label === "Products"} />
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-background pb-4 max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center">
                <Link
                  to={item.path}
                  onClick={() => !item.children && setOpen(false)}
                  className={`flex-1 px-6 py-3 text-sm font-medium font-heading transition-colors hover:text-primary hover:bg-primary/5 ${
                    location.pathname === item.path ? "text-primary bg-primary/5" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="px-4 py-3 text-muted-foreground"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="bg-muted">
                  {item.children.map((child) => (
                    <Link
                      key={child.path + child.label}
                      to={child.path}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 pl-10 pr-6 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label === "Products" && productImages[child.label] && (
                        <img src={productImages[child.label]} alt={child.label} className="w-8 h-8 rounded object-cover border border-border" />
                      )}
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default MainNav;
