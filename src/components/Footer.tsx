import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

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
    <footer className="bg-[#1E293B] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Siddhivinayak Enterprise Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted partner for industrial materials, safety equipment, and cutting tools since 2017.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.siddhivinayakent.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F97316] hover:text-[#F97316]/80 transition-colors text-sm font-semibold"
              >
                www.siddhivinayakent.net
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#F97316] transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => scrollToSection("products")}
                    className="text-white/70 hover:text-[#F97316] transition-colors text-sm"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+919970500500"
                      className="text-white/90 hover:text-[#F97316] transition-colors"
                    >
                      +91 9970500500
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:siddhivinayakenterprises0104@gmail.com"
                      className="text-white/90 hover:text-[#F97316] transition-colors break-all"
                    >
                      siddhivinayakenterprises0104@gmail.com
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#F97316] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-white/90">
                      B-11, Ganraj Mauli Housing Society, Shahunagar, Chinchwad, Pune-411019
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} Siddhivinayak Enterprises. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/50 hover:text-[#F97316] transition-colors group"
          >
            Back to top
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
