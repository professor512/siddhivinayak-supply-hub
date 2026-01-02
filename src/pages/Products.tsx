import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Disc, Wrench, Cog, Flame, HardHat, Camera, Sparkles, ShieldCheck } from "lucide-react";

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
    description: "Complete range of abrasive products for all industrial applications. Focus on innovation and high-quality performance.",
    brands: ["Grindwell Norton", "Cumi", "Topline", "3M", "Starcke"],
    products: ["Bonded & Resin Grinding Wheels", "Cutting Wheels", "Abrasive Belts", "Hacksaw Blades", "Sanding Discs", "Velcro Discs", "Bandsaw Blades", "Waterproof Abrasive Papers", "Flap Discs"],
  },
  {
    icon: Cog,
    title: "Insertion Tools",
    description: "Wide range of insertion tools available in multiple specifications. Latest tools available in the market based on customer requirements.",
    brands: ["ZCC-CT", "Mitsubishi", "Taegutec", "Korloy", "Sandvik Coromant", "Kyocera", "Tungaloy", "Kennametal"],
    products: ["Carbide Inserts", "Threading Inserts", "Grooving Inserts", "Milling Inserts", "Turning Inserts"],
  },
  {
    icon: Wrench,
    title: "Cutting Tools & Power Tools",
    description: "High-speed cutting tools and rotary burr cutters along with power tools from leading brands.",
    brands: ["Bosch", "Dewalt", "Hitachi", "Makita", "Stanley"],
    products: ["Involute Cutters", "Gear Hobs", "End Mills", "Reamers", "Tool Bits", "Side Grinder", "Orbital Sander", "Drilling Machine", "Impact Wrench", "Die Grinder"],
  },
  {
    icon: Flame,
    title: "Brazing, MIG Wire & Welding",
    description: "Leading supplier of CO₂ welding wires, copper silicon MIG brazing wires, welding electrodes, and accessories.",
    products: ["CO₂ Welding Wires", "MIG Brazing Wires", "Welding Electrodes", "Tip Holders", "Contact Tips", "Gas Nozzles", "CO₂ Regulators"],
  },
  {
    icon: HardHat,
    title: "Safety Equipment & Packaging",
    description: "Industrial & construction safety products along with premium quality packaging materials.",
    products: ["Hand Gloves (Leather, Knitted, Rubber)", "Safety Shoes", "Helmets", "Body Protection", "Leather Aprons", "Ear Plugs", "BOPP Adhesive Tapes", "Bubble Rolls", "Corrugated Boxes"],
  },
  {
    icon: Camera,
    title: "CCTV & Computer Accessories",
    description: "CCTV surveillance solutions for offices and industries. Indoor & outdoor high-resolution and cost-effective solutions.",
    products: ["Bullet Cameras", "Dome Cameras", "IR Dome Cameras", "PTZ Cameras", "Hidden Cameras", "DVRs & NVRs", "Computers & Laptops", "Antivirus Solutions"],
  },
  {
    icon: Sparkles,
    title: "Housekeeping Material & Tools",
    description: "Wholesale supplier of housekeeping materials for all cleaning and maintenance needs.",
    products: ["Cleaning Chemicals", "Stainless Steel Dustbins", "Liquid Toilet Cleaner", "Room Fresheners", "Hand Sanitizers", "Tissue Papers", "Glass Cleaners", "Liquid Dishwash", "Soft Brooms"],
  },
  {
    icon: ShieldCheck,
    title: "COVID-19 Protective Equipment",
    description: "Complete range of protective equipment for health and safety during the pandemic.",
    products: ["Face Masks", "Nitrile & Non-Sterile Gloves", "Face Shields", "PPE Kits", "Hand Sanitizers", "Disinfectant Sprays", "Infrared Thermometer Guns", "Pulse Oximeters"],
  },
];

const ProductCard = ({ category, index }: { category: ProductCategory; index: number }) => {
  const Icon = category.icon;
  
  return (
    <div 
      className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-smooth group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{category.description}</p>
      
      {category.brands && (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Brands We Supply</p>
          <div className="flex flex-wrap gap-1">
            {category.brands.slice(0, 5).map((brand) => (
              <span key={brand} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                {brand}
              </span>
            ))}
            {category.brands.length > 5 && (
              <span className="text-xs text-primary font-medium px-2 py-1">
                +{category.brands.length - 5} more
              </span>
            )}
          </div>
        </div>
      )}
      
      {category.products && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Products Include</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {category.products.slice(0, 4).map((product) => (
              <li key={product} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {product}
              </li>
            ))}
            {category.products.length > 4 && (
              <li className="text-primary font-medium text-sm">
                +{category.products.length - 4} more products
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const Products = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-primary-foreground/70">
              Comprehensive industrial solutions from leading brands. Quality products for every requirement.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <ProductCard key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in providing customized industrial solutions tailored to your specific needs. 
              Contact us to discuss your requirements.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
