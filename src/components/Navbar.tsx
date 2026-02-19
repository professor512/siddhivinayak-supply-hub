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
    <header className="fixed top-0 z-50 w-full bg-white shadow-md border-b border-border">

    
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="Siddhivinayak Enterprise Logo"
            className="h-11 w-auto object-contain"
          />
        </button>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"

            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/919970500500"
           className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary transition-colors"

          >
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </a>
          <Button onClick={() => scrollToSection("contact")}>
            Get a Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-secondary-foreground"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="text-base font-medium py-3 text-foreground hover:text-primary transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
            <Button
              className="mt-4"
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