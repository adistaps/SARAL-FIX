import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plane, Package, Truck, Clock, Shield, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Air Charter Solution",
      description: "Dedicated air charter services for urgent and specialized cargo requirements with flexible scheduling and global reach.",
      icon: Plane,
      features: ["Flexible scheduling", "Global coverage", "Specialized cargo handling", "24/7 availability"],
      slug: "air-charter"
    },
    {
      title: "Airfreight Services", 
      description: "Fast and reliable airfreight solutions for time-sensitive shipments with comprehensive tracking and customs handling.",
      icon: Package,
      features: ["Express delivery", "Real-time tracking", "Customs clearance", "Insurance coverage"],
      slug: "airfreight"
    },
    {
      title: "Project Cargo",
      description: "Specialized handling of oversized, heavy, and complex project cargo with expert logistics planning and execution.",
      icon: Truck,
      features: ["Heavy lift capability", "Route planning", "Special equipment", "Project management"],
      slug: "project-cargo"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Efficient logistics solutions ensuring timely delivery of your cargo"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional cargo handling with comprehensive insurance coverage"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide reach through our extensive partner network"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Comprehensive freight and logistics solutions tailored to meet your business needs with professional excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 bg-card-alt hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                   <Link to={`/services/${service.slug}`} onClick={() => window.scrollTo(0, 0)}>
                     <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground">
                       Learn More
                     </Button>
                   </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose SARAL FREIGHT?</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              We deliver exceptional value through our comprehensive service offerings and commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-accent" />
                  </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;