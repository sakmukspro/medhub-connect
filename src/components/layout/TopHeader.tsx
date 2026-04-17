import { Phone, Mail } from "lucide-react";

const TopHeader = () => (
  <div className="bg-topbar text-topbar-foreground text-sm py-2">
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-6">
        <a href="tel:+917305062227" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Phone className="w-3.5 h-3.5" /> +91-7305062227
        </a>
        <a href="mailto:info@radping.in" className="hidden sm:flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Mail className="w-3.5 h-3.5" /> info@radping.in
        </a>
      </div>
      <div className="flex items-center gap-3">
        {[
          { name: "LinkedIn", url: "https://www.linkedin.com/company/radpingimaging/", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
          { name: "YouTube", url: "https://youtube.com", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" },
        ].map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label={social.name}>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={social.path} /></svg>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default TopHeader;
