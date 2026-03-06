import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/radping-logo.jpeg";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <img src={logo} alt="RadPing" className="h-12 mb-4 brightness-200" />
          <p className="text-sm leading-relaxed mb-4">
            RADPING IMAGING PVT LTD is a Hospital Equipment Solution Providing Company specializing in Radiology, Cardiology, Dental and Critical Care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Products", "Solutions", "Services & Support", "Careers"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="hover:text-secondary transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-bold text-background mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            {["Imaging Equipment", "ICU Equipment", "Patient Monitors", "Mobility Aids", "Surgical Instruments"].map((p) => (
              <li key={p}>
                <Link to="/products" className="hover:text-secondary transition-colors">{p}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-background mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
              Block-1, Unit No:37, Third Floor, SIDCO Electronic Complex, Guindy, Chennai - 600032
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-secondary" />
              +91-7305062227
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 text-secondary" />
              info@radping.in
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-background/10">
      <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-xs gap-2">
        <p>© {new Date().getFullYear()} RadPing Imaging Pvt Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
          <Link to="/sitemap" className="hover:text-secondary transition-colors">Sitemap</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
