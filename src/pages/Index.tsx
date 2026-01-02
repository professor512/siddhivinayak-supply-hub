import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock, Users, Award, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Siddhivinayak{" "}
            <span className="text-primary">Enterprises</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary-foreground/90 mb-4 animate-fade-in-up animation-delay-100">
            One Stop Solution For All Your Needs
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We provide reliable, cost-effective, and customized industrial supply solutions 
            to meet diverse customer requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Your Trusted Industrial Partner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Siddhivinayak Enterprises is a trusted supplier of industrial materials, 
            housekeeping products, stationery items, CCTV systems, computer accessories, 
            and contract labour services. We work round the clock to ensure customer 
            satisfaction through quality products, competitive pricing, and timely delivery.
          </p>
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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Sets Us Apart
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8">
            Contact us today for a customized quote tailored to your industrial needs.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
      <CTASection />
    </main>
  );
};

export default Index;
