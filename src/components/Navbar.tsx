import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="Siddhivinayak Enterprise Logo"
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold text-[#1E293B] hover:text-[#F97316] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919970500500"
            className="flex items-center gap-2 text-sm font-semibold text-[#1E293B] hover:text-[#F97316] transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+91 9970500500</span>
          </a>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#1E293B] hover:text-[#F97316] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="text-base font-semibold py-3 text-[#1E293B] hover:text-[#F97316] transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <a
              href="tel:+919970500500"
              className="flex items-center gap-2 text-base font-semibold py-3 text-[#1E293B] hover:text-[#F97316] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 9970500500</span>
            </a>
            <Button
              className="mt-4 bg-[#F97316] hover:bg-[#F97316]/90 text-white"
              onClick={() => {
                scrollToSection("contact");
                setIsOpen(false);
              }}
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;