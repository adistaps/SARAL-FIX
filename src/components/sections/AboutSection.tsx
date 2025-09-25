import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Cost",
      description: "Competitive pricing for all freight services"
    },
    {
      icon: Clock,
      title: "Due Time Delivery",
      description: "On-time delivery guaranteed"
    },
    {
      icon: MapPin,
      title: "Tracking Moving",
      description: "Real-time shipment tracking"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-accent font-medium text-sm tracking-wider uppercase">
                ~ About The Company ~
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                We offer worldwide logistics support{" "}
                <span className="text-accent">Since 1948</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                SARAL FREIGHT MANAGEMENT PTE LTD is a leading provider of comprehensive freight and logistics solutions. With decades of experience in international trade and transportation, we deliver reliable and efficient services to businesses worldwide.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card-alt border-0 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <p className="text-muted-foreground mb-2">Get Free Assessment:</p>
              <p className="text-primary font-medium">info@saralfreight.com</p>
            </div>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-dark text-accent-foreground"
            >
              Read More
            </Button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Warehouse Operations" 
                className="w-full h-[600px] object-cover rounded-lg shadow-xl"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-accent text-6xl font-bold leading-none">„</div>
                  <div>
                    <p className="text-lg italic mb-3">
                      "Professional freight management with guaranteed quality and on-time delivery for all your logistics needs."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-semibold">- Saral Team</p>
                        <p className="text-sm text-primary-foreground/80">CEO & Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;