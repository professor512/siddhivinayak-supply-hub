import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Zap,
  Disc,
  Wrench,
  Cog,
  Flame,
  HardHat,
  Camera,
  Sparkles,
  ShieldCheck,
  Globe,
  Mail,
  MapPin,
  Send,
  ChevronDown
} from "lucide-react";
import { z } from "zod";

// Smooth scroll function
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary py-24 md:py-36">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Trusted Industrial Partner Since Years
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 animate-fade-in-up">
            Siddhivinayak{" "}
            <span className="text-primary">Enterprises</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-secondary-foreground/90 mb-4 animate-fade-in-up animation-delay-100">
            One Stop Solution For All Your Needs
          </p>
          <p className="text-lg md:text-xl text-secondary-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We provide reliable, cost-effective, and customized industrial supply solutions 
            to meet diverse customer requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("products")}
            >
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-secondary-foreground/50 hover:text-primary transition-colors"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Company Image Placeholder</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Industrial Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Siddhivinayak Enterprises is a trusted supplier of industrial materials, 
              housekeeping products, stationery items, CCTV systems, computer accessories, 
              and contract labour services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We work round the clock to ensure customer satisfaction through quality products, 
              competitive pricing, and timely delivery.
            </p>
            <Button onClick={() => scrollToSection("contact")} size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: "Customized Solutions",
      description: "Tailored industrial solutions designed to meet your specific requirements",
    },
    {
      icon: Zap,
      title: "Cost-Effective Pricing",
      description: "Competitive rates without compromising on quality or service",
    },
    {
      icon: CheckCircle,
      title: "Simple Payment Options",
      description: "Flexible and hassle-free payment methods for your convenience",
    },
    {
      icon: Award,
      title: "Market-Leading Brands",
      description: "Partnerships with top brands like Bosch, 3M, Makita, and more",
    },
    {
      icon: Shield,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority, with dedicated support",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "On-time delivery ensuring your operations run smoothly",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2">
            What Sets Us Apart
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-8 hover:bg-secondary-foreground/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-5">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-3">{feature.title}</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  brands?: string[];
  products?: string[];
}

const productCategories: ProductCategory[] = [
  {
    icon: Disc,
    title: "Abrasives",
    description: "Complete range of abrasive products for all industrial applications.",
    brands: ["Grindwell Norton", "Cumi", "Topline", "3M", "Starcke"],
    products: ["Grinding Wheels", "Cutting Wheels", "Abrasive Belts", "Sanding Discs"],
  },
  {
    icon: Cog,
    title: "Insertion Tools",
    description: "Wide range of insertion tools in multiple specifications.",
    brands: ["ZCC-CT", "Mitsubishi", "Taegutec", "Sandvik Coromant"],
    products: ["Carbide Inserts", "Threading Inserts", "Milling Inserts"],
  },
  {
    icon: Wrench,
    title: "Cutting & Power Tools",
    description: "High-speed cutting tools and power tools from leading brands.",
    brands: ["Bosch", "Dewalt", "Hitachi", "Makita", "Stanley"],
    products: ["End Mills", "Reamers", "Side Grinder", "Drilling Machine"],
  },
  {
    icon: Flame,
    title: "Welding Accessories",
    description: "CO₂ welding wires, brazing wires, and welding accessories.",
    products: ["CO₂ Welding Wires", "MIG Brazing Wires", "Welding Electrodes", "Gas Nozzles"],
  },
  {
    icon: HardHat,
    title: "Safety Equipment",
    description: "Industrial & construction safety products and packaging materials.",
    products: ["Safety Gloves", "Safety Shoes", "Helmets", "BOPP Tapes"],
  },
  {
    icon: Camera,
    title: "CCTV & IT",
    description: "Surveillance solutions and computer accessories.",
    products: ["Bullet Cameras", "Dome Cameras", "DVRs", "Computers"],
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Wholesale supplier of housekeeping and cleaning materials.",
    products: ["Cleaning Chemicals", "Dustbins", "Room Fresheners", "Sanitizers"],
  },
  {
    icon: ShieldCheck,
    title: "COVID-19 Equipment",
    description: "Complete range of protective equipment for health and safety.",
    products: ["Face Masks", "PPE Kits", "Face Shields", "Thermometer Guns"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Products & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial solutions from leading brands. Quality products for every requirement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex flex-wrap gap-1">
                      {category.brands?.slice(0, 2).map((brand) => (
                        <span key={brand} className="text-xs bg-background/90 backdrop-blur-sm text-foreground px-2 py-1 rounded-full">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {category.products?.slice(0, 2).map((product) => (
                      <span key={product} className="text-xs text-muted-foreground">
                        • {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Contact form schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  const contactInfo = [
    { icon: Globe, label: "Website", value: "www.siddhivinayakent.net" },
    { icon: Mail, label: "Email", value: "info@siddhivinayakent.net" },
    { icon: MapPin, label: "Location", value: "Industrial Supply Partner, India" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground flex-shrink-0">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-foreground/60">{info.label}</p>
                    <p className="text-lg font-medium text-secondary-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Contact Us */}
            <div className="p-6 bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl">
              <h3 className="text-lg font-semibold text-secondary-foreground mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                {[
                  "Get customized quotes for your requirements",
                  "Discuss bulk order discounts",
                  "Learn about our latest products",
                  "Technical support and consultation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary-foreground/70">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-6">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
                <Button onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", company: "", email: "", phone: "", message: "" });
                }}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProductsSection />
      <ContactSection />
    </main>
  );
};

export default Index;