import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import airCharterImg from "@/assets/air-charter.jpg";
import airfreightImg from "@/assets/airfreight.jpg";
import projectCargoImg from "@/assets/project-cargo.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Air Charter Solution",
      description: "Dedicated air charter services for urgent and specialized cargo requirements with flexible scheduling and global reach.",
      image: airCharterImg,
      icon: Plane,
      slug: "air-charter"
    },
    {
      id: "02", 
      title: "Airfreight Services",
      description: "Fast and reliable airfreight solutions for time-sensitive shipments with comprehensive tracking and customs handling.",
      image: airfreightImg,
      icon: Package,
      slug: "airfreight"
    },
    {
      id: "03",
      title: "Project Cargo",
      description: "Specialized handling of oversized, heavy, and complex project cargo with expert logistics planning and execution.",
      image: projectCargoImg,
      icon: Truck,
      slug: "project-cargo"
    }
  ];

  return (
    <section className="py-20 bg-card-alt">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ~ Our Services ~
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            SARAL Freight <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive freight and logistics solutions tailored to meet your business needs with professional excellence and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-background"
            >
              <div className="relative">
                {/* Service Number & Icon */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-6xl font-bold text-primary/20">{service.id}</span>
                </div>

                {/* Service Content */}
                <div className="p-6 pt-20 pb-4">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-4 bg-primary p-4 rounded-lg text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Action Button */}
                <CardContent className="p-6">
                  <Link to={`/services/${service.slug}`} onClick={() => window.scrollTo(0, 0)}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;