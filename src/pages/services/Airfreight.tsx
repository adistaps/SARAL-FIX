import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Clock, MapPin, Shield, Truck, CheckCircle } from "lucide-react";
import airfreightImg from "@/assets/airfreight.jpg";

const Airfreight = () => {
  const features = [
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Fast transit times for time-sensitive shipments worldwide"
    },
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Complete visibility of your shipment from origin to destination"
    },
    {
      icon: Shield,
      title: "Customs Clearance",
      description: "Expert handling of all customs and documentation requirements"
    },
    {
      icon: Truck,
      title: "Door-to-Door Service",
      description: "Complete logistics solution including pickup and delivery"
    }
  ];

  const services = [
    "Standard airfreight services",
    "Express and priority delivery",
    "Temperature-controlled transport",
    "Dangerous goods handling",
    "Consolidation services",
    "Insurance and risk management",
    "Documentation and compliance",
    "Customs brokerage services"
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
                  <Package className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent font-semibold">Airfreight Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Fast & Reliable <span className="text-accent">Airfreight</span> Solutions
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Professional airfreight services for time-sensitive shipments with comprehensive tracking, 
                customs handling, and global reach. Your trusted partner for air cargo logistics.
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
                Get Shipping Quote
              </Button>
            </div>
            <div>
              <img 
                src={airfreightImg} 
                alt="Airfreight Services" 
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
              Our Airfreight <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Comprehensive airfreight solutions with advanced tracking, expert handling, and global network coverage.
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

      {/* Services Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Complete Airfreight <span className="text-accent">Services</span>
              </h2>
              <p className="text-lg text-white mb-8 leading-relaxed">
                From standard airfreight to specialized cargo handling, we provide comprehensive air cargo solutions 
                that meet the highest industry standards. Our experienced team ensures your shipments are handled 
                with care and delivered on time.
              </p>
              
              <div className="grid md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Express Service</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Next-day and express delivery options for urgent shipments.
                  </p>
                  <div className="text-accent font-semibold">24-48 Hours Transit</div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent text-accent-foreground border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Standard Service</h3>
                  <p className="text-accent-foreground/90 mb-4">
                    Cost-effective airfreight for regular shipments.
                  </p>
                  <div className="font-semibold">3-5 Days Transit</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Economy Service</h3>
                  <p className="text-muted-foreground mb-4">
                    Budget-friendly option for non-urgent shipments.
                  </p>
                  <div className="text-accent font-semibold">5-7 Days Transit</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Airfreight;