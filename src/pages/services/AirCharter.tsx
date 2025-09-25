import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Clock, Globe, Shield, Users, CheckCircle } from "lucide-react";
import airCharterImg from "@/assets/air-charter.jpg";

const AirCharter = () => {
  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "On-demand flights tailored to your timeline and requirements"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide coverage with access to major airports and destinations"
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Professional cargo handling with comprehensive insurance coverage"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Experienced aviation professionals managing your charter operations"
    }
  ];

  const benefits = [
    "Direct point-to-point delivery",
    "No cargo size restrictions",
    "Time-sensitive delivery capability",
    "Specialized equipment transport",
    "Emergency and urgent shipments",
    "Full cargo tracking and monitoring"
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
                  <Plane className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent font-semibold">Air Charter Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional <span className="text-accent">Air Charter</span> Services
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Dedicated air charter solutions for urgent and specialized cargo requirements. 
                Flexible scheduling, global reach, and professional handling for all your aviation logistics needs.
              </p>
              <Button
                size="lg"
                variant="default"
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/contact';
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Quote
              </Button>
            </div>
            <div>
              <img 
                src={airCharterImg} 
                alt="Air Charter Services" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Air Charter Services?
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Experience the advantage of dedicated air charter solutions with professional service and global capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-card-alt hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Air Charter <span className="text-accent">Benefits</span>
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
                Our air charter services provide unmatched flexibility and efficiency for your most critical shipments. 
                From emergency deliveries to specialized cargo transport, we ensure your goods reach their destination safely and on time.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary text-primary-foreground p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get Your Air Charter Quote</h3>
              <p className="text-primary-foreground/90 mb-6">
                Contact our aviation experts for a customized air charter solution tailored to your specific requirements.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-accent font-semibold">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Coverage:</span>
                  <span className="text-accent font-semibold">Worldwide</span>
                </div>
                <div className="flex justify-between">
                  <span>Availability:</span>
                  <span className="text-accent font-semibold">24/7</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-accent hover:bg-accent-dark text-accent-foreground"
                size="lg"
                  onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = '/contact';
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AirCharter;