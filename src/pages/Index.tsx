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
  ChevronDown,
  Phone,
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
    <section
      id="home"
      className="relative overflow-hidden bg-[#1E293B] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#2D3748] to-[#1E293B] animate-gradient"></div>
        
        {/* Moving geometric shapes for industrial feel */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F97316] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F97316] rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#F97316] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#F97316]/30 backdrop-blur-sm">
              <Award className="h-4 w-4" />
              Since 2017 - Trusted Industrial Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Siddhivinayak <span className="text-[#F97316]">Enterprises</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-white/90 mb-4">
              One Stop Solution For All Your Industrial Needs
            </p>
            
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Premium industrial supplies, safety equipment, and cutting tools from world-class brands. Serving Pune & Maharashtra with excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-base px-8 py-6"
                onClick={() => scrollToSection("products")}
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => scrollToSection("contact")}
              >
                Request Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#F97316] mb-1">100+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F97316] mb-1">24/7</div>
                <div className="text-sm text-white/60">Fast Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/power-tools.jpg"
                alt="Industrial Tools and Equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
            </div>
            
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-[#F97316]/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <div className="font-bold text-[#1E293B]">Certified Supplier</div>
                  <div className="text-sm text-gray-600">ISO Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/founder.PNG"
                alt="Founder - Piyush Sonawane"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/60 via-transparent to-transparent" />
            </div>

            {/* Founder Card */}
            <div className="absolute -bottom-8 left-8 right-8 bg-white shadow-2xl rounded-xl p-6 border-t-4 border-[#F97316]">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">
                Founder & Proprietor
              </p>
              <h4 className="text-2xl font-bold text-[#1E293B] mb-1">
                Piyush Sonawane
              </h4>
              <p className="text-sm text-[#F97316] font-semibold">
                Siddhivinayak Enterprises
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F97316]/10 rounded-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1E293B]/5 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-3 mb-6 leading-tight">
              Building Industrial Excellence Since 2017
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Siddhivinayak Enterprises is a leading supplier of industrial materials, cutting tools, safety equipment, housekeeping products, CCTV systems, and contract labour services across Pune and Maharashtra.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We partner with world-class brands like Bosch, 3M, Makita, Dewalt, and Sandvik to deliver quality products, competitive pricing, and timely delivery to our valued clients.
            </p>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-[#F97316]" />
                  </div>
                  <div className="text-2xl font-bold text-[#1E293B]">8+</div>
                </div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white rounded-lg p-5 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#F97316]" />
                  </div>
                  <div className="text-2xl font-bold text-[#1E293B]">100+</div>
                </div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection("contact")} 
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white"
            >
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
      icon: Cog,
      title: "Customized Solutions",
      description:
        "Tailored industrial solutions designed to meet your specific business requirements and operational needs",
    },
    {
      icon: Zap,
      title: "Cost-Effective Pricing",
      description:
        "Competitive rates and bulk order discounts without compromising on quality or service standards",
    },
    {
      icon: CheckCircle,
      title: "Flexible Payment Terms",
      description:
        "Multiple payment options and credit facilities designed for your business convenience",
    },
    {
      icon: Award,
      title: "Premium Brands",
      description:
        "Authorized partnerships with industry-leading brands like Bosch, 3M, Makita, Dewalt, and Sandvik",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "ISO-compliant products with genuine warranties and comprehensive quality certifications",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Fast and reliable delivery across Pune & Maharashtra ensuring zero downtime for your operations",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-3 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Committed to excellence in industrial supply with customer-first approach
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-[#F8FAFC] border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#F97316]/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F97316] text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


interface ProductCategory {
  title: string;
  description: string;
  brands?: string[];
  products?: string[];
  image: string;
}

const productCategories: ProductCategory[] = [
  {
    title: "Abrasives",
    description:
      "Complete range of abrasive products for all industrial applications.",
    image: "/abrasives.jpg",
    brands: ["Grindwell Norton", "Cumi", "Topline", "3M", "Starcke"],
    products: [
      "Grinding Wheels",
      "Cutting Wheels",
      "Abrasive Belts",
      "Sanding Discs",
    ],
  },
  {
    title: "Insertion Tools",
    description: "Wide range of insertion tools in multiple specifications.",
    image: "/insertion-tools.jpg",
    brands: ["ZCC-CT", "Mitsubishi", "Taegutec", "Sandvik Coromant"],
    products: ["Carbide Inserts", "Threading Inserts", "Milling Inserts"],
  },
  {
    title: "Cutting & Power Tools",
    description:
      "High-speed cutting tools and power tools from leading brands.",
    image: "/power-tools.jpg",
    brands: ["Bosch", "Dewalt", "Hitachi", "Makita", "Stanley"],
    products: ["End Mills", "Reamers", "Side Grinder", "Drilling Machine"],
  },
  {
    title: "Welding Accessories",
    description:
      "CO₂ welding wires, brazing wires, and welding accessories.",
    image: "/welding.jpg",
    products: [
      "CO₂ Welding Wires",
      "MIG Brazing Wires",
      "Welding Electrodes",
      "Gas Nozzles",
    ],
  },
  {
    title: "Safety Equipment",
    description:
      "Industrial & construction safety products and packaging materials.",
    image: "/safety.jpg",
    products: ["Safety Gloves", "Safety Shoes", "Helmets", "BOPP Tapes"],
  },
  {
    title: "CCTV & IT",
    description: "Surveillance solutions and computer accessories.",
    image: "/cctv.jpg",
    products: ["Bullet Cameras", "Dome Cameras", "DVRs", "Computers"],
  },
  {
    title: "Housekeeping",
    description:
      "Wholesale supplier of housekeeping and cleaning materials.",
    image: "/housekeeping.jpg",
    products: [
      "Cleaning Chemicals",
      "Dustbins",
      "Room Fresheners",
      "Sanitizers",
    ],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-3 mb-4">
            Industrial Product Catalog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive range of industrial supplies from world-class manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image with Overlay */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/50 to-transparent opacity-80"></div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {category.description}
                  </p>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 bg-[#F97316]/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-white text-[#F97316] hover:bg-gray-100"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white">
                {/* Brands */}
                {category.brands && category.brands.length > 0 && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Brands
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {category.brands.slice(0, 3).map((brand) => (
                        <span
                          key={brand}
                          className="text-xs bg-[#F8FAFC] text-gray-700 px-2 py-1 rounded"
                        >
                          {brand}
                        </span>
                      ))}
                      {category.brands.length > 3 && (
                        <span className="text-xs bg-[#F8FAFC] text-gray-700 px-2 py-1 rounded">
                          +{category.brands.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Products */}
                {category.products && category.products.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Products
                    </p>
                    <ul className="space-y-1">
                      {category.products.slice(0, 3).map((product) => (
                        <li
                          key={product}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <span className="h-1 w-1 rounded-full bg-[#F97316]"></span>
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandsSection = () => {
  const brands = [
    { name: "Bosch", icon: Wrench },
    { name: "3M", icon: Shield },
    { name: "Makita", icon: Zap },
    { name: "Dewalt", icon: HardHat },
    { name: "Stanley", icon: Wrench },
    { name: "Sandvik", icon: Cog },
    { name: "Mitsubishi", icon: Disc },
    { name: "Taegutec", icon: Cog },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider">
            Authorized Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-3 mb-4">
            Brands We Deal In
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with world-renowned manufacturers to deliver quality and reliability
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-[#F8FAFC] border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-[#F97316]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 group-hover:bg-[#F97316] transition-colors duration-300">
                <brand.icon className="h-8 w-8 text-[#F97316] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#F97316] transition-colors">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    {
      icon: Cog,
      title: "Manufacturing",
      description: "Precision tools and equipment for manufacturing excellence",
    },
    {
      icon: Wrench,
      title: "Automotive",
      description: "Specialized tools and supplies for automotive industry",
    },
    {
      icon: HardHat,
      title: "Engineering",
      description: "Complete engineering solutions and cutting tools",
    },
    {
      icon: Flame,
      title: "Construction",
      description: "Safety equipment and construction materials",
    },
    {
      icon: Disc,
      title: "Industrial Plants",
      description: "Comprehensive industrial supply and maintenance solutions",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1E293B]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Delivering specialized solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-[#F97316]/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#F97316] text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {industry.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
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
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "74ef85f0-450c-4ba5-9672-ff8d9b59f184", 
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });

        toast({
          title: "Message Sent!",
          description:
            "Thank you for contacting us. We'll get back to you soon.",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Server Error",
        description: "Unable to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-[#F97316] font-bold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-3 mb-4">
            Contact Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your industrial supply needs? Our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F97316]/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919970500500"
                    className="text-lg font-bold text-[#1E293B] hover:text-[#F97316] transition-colors"
                  >
                    +91 9970500500
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F97316]/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:siddhivinayakenterprises0104@gmail.com"
                    className="text-base font-bold text-[#1E293B] hover:text-[#F97316] transition-colors break-all"
                  >
                    siddhivinayakenterprises0104@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F97316]/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-base font-bold text-[#1E293B]">
                    B-11, Ganraj Mauli Housing Society
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Shahunagar, Chinchwad, Pune-411019
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919970500500"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">Chat on WhatsApp</p>
                  <p className="text-sm text-white/90">Quick response guaranteed</p>
                </div>
                <ArrowRight className="ml-auto h-6 w-6" />
              </div>
            </a>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] mx-auto mb-6">
                    <CheckCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been received. Our team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="bg-[#F97316] hover:bg-[#F97316]/90"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-2">
                    Request a Quote
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you with a customized quote.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#1E293B] font-semibold">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : "border-gray-300"}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[#1E293B] font-semibold">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#1E293B] font-semibold">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : "border-gray-300"}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#1E293B] font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#1E293B] font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements, quantity needed, delivery location, etc."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : "border-gray-300"}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
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
      <BrandsSection />
      <IndustriesSection />
      <ContactSection />
    </main>
  );
};

export default Index;
