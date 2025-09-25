import { Card, CardContent } from "@/components/ui/card";
import { Package, Warehouse, Truck, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      title: "Received your product",
      description: "We receive and process your shipment with careful handling and documentation to ensure secure transportation.",
      icon: Package
    },
    {
      step: "02", 
      title: "Warehousing",
      description: "Professional storage and inventory management in our secure facilities with climate control and security systems.",
      icon: Warehouse
    },
    {
      step: "03",
      title: "Package has been handed over",
      description: "Your shipment is carefully prepared and handed over to our transportation network for delivery.",
      icon: Truck
    },
    {
      step: "04",
      title: "Package has been delivered",
      description: "Safe and timely delivery to the final destination with confirmation and tracking updates throughout the process.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ~ How It's Work ~
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            How It's <span className="text-accent">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our streamlined process ensures efficient and reliable freight management from pickup to delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                </div>
              )}
              
              <Card className="text-center border-0 bg-card-alt hover:shadow-lg transition-shadow relative z-10">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="text-sm text-accent font-bold mb-2">STEP {step.step}</div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-block text-accent/20">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="currentColor">
              <path d="M0 10 Q 25 0 50 10 T 100 10" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;