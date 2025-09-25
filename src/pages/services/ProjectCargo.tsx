import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Settings, MapPin, Users, Shield, CheckCircle } from "lucide-react";
import projectCargoImg from "@/assets/project-cargo.jpg";

const ProjectCargo = () => {
  const capabilities = [
    {
      icon: Settings,
      title: "Heavy Lift Capability",
      description: "Specialized equipment for oversized and heavy cargo transportation"
    },
    {
      icon: MapPin,
      title: "Route Planning",
      description: "Expert route surveys and logistics planning for complex shipments"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and risk assessment for valuable cargo"
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Dedicated project managers overseeing end-to-end logistics"
    }
  ];

  const expertise = [
    "Industrial machinery transport",
    "Construction equipment logistics",
    "Oil & gas project cargo",
    "Power generation equipment",
    "Manufacturing plant components",
    "Infrastructure project materials",
    "Mining equipment transport",
    "Renewable energy components"
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent font-semibold">Project Cargo Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Specialized <span className="text-accent">Project Cargo</span> Handling
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Expert handling of oversized, heavy, and complex project cargo with specialized equipment, 
                route planning, and dedicated project management for successful delivery.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-dark text-accent-foreground"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/contact';
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Discuss Your Project
              </Button>
            </div>
            <div>
              <img 
                src={projectCargoImg} 
                alt="Project Cargo Services" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Cargo <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Specialized expertise and equipment for handling the most challenging project cargo requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center border-0 bg-card-alt hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <capability.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry <span className="text-accent">Expertise</span>
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Our project cargo specialists have extensive experience across multiple industries, 
                handling complex logistics challenges for major infrastructure and industrial projects worldwide.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <p className="text-primary-foreground/80">Tons Maximum Capacity</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent text-accent-foreground border-0">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <p className="text-accent-foreground/80">Countries Served</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                    <p className="text-muted-foreground">Project Support</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Project Cargo <span className="text-accent">Process</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Systematic approach to ensure successful delivery of your most complex cargo requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Detailed cargo evaluation and feasibility study" },
              { step: "02", title: "Planning", desc: "Route surveys and logistics planning" },
              { step: "03", title: "Execution", desc: "Professional handling and transportation" },
              { step: "04", title: "Delivery", desc: "Safe delivery and project completion" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectCargo;