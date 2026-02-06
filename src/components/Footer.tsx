import { ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    "Abrasives",
    "Insertion Tools",
    "Cutting & Power Tools",
    "Welding Accessories",
    "Safety Equipment",
    "CCTV & IT",
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Siddhivinayak Enterprise Logo"
                className="h-11 w-auto object-contain w-64"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              One Stop Solution For All Your Needs. Your trusted partner for industrial
              materials, safety equipment, and more...
            </p>
            <a
              href="https://www.siddhivinayakent.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              www.siddhivinayakent.net
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-background/50 block text-xs uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:info@siddhivinayakent.net" className="text-background/70 hover:text-primary transition-colors">
                  info@siddhivinayakent.net
                </a>
              </li>
              <li>
                <span className="text-background/50 block text-xs uppercase tracking-wider mb-1">Website</span>
                <a href="https://www.siddhivinayakent.net" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-primary transition-colors">
                  www.siddhivinayakent.net
                </a>
              </li>
              <li>
                <span className="text-background/50 block text-xs uppercase tracking-wider mb-1">Location</span>
                <span className="text-background/70">Industrial Supply Partner, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Siddhivinayak Enterprises. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-background/50 hover:text-primary transition-colors"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;