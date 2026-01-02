import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-orange">
                <span className="text-xl font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <span className="text-lg font-bold">Siddhivinayak</span>
                <span className="block text-xs text-secondary-foreground/70">Enterprises</span>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              One Stop Solution For All Your Needs. Your trusted partner for industrial supplies, safety equipment, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Products & Services
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Products</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Abrasives
              </Link>
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Cutting Tools
              </Link>
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Safety Equipment
              </Link>
              <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                CCTV Solutions
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.siddhivinayakent.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span>www.siddhivinayakent.net</span>
              </a>
              <a href="mailto:info@siddhivinayakent.net" className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@siddhivinayakent.net</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-secondary-foreground/80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Industrial Supply Partner, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Siddhivinayak Enterprises. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Your trusted industrial supply partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
