import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide reliable, efficient, and cost-effective freight management solutions that exceed customer expectations and drive business success."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To be the leading freight management company in Southeast Asia, recognized for innovation, reliability, and exceptional customer service."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Experienced professionals dedicated to delivering excellence in every aspect of freight and logistics management."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, reliability, innovation, and customer-first approach guide everything we do in our freight management services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">SARAL FREIGHT</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Professional freight management company serving businesses worldwide with comprehensive logistics solutions since our establishment.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Company Profile</h2>
            <p className="text-lg text-white leading-relaxed">
              SARAL FREIGHT MANAGEMENT PTE LTD is a trusted name in the freight and logistics industry, 
              offering comprehensive solutions for businesses of all sizes. Our expertise spans across air charter solutions, 
              airfreight services, and specialized project cargo handling. With a commitment to excellence and customer satisfaction, 
              we have built a reputation for reliable, efficient, and cost-effective logistics services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 bg-card-alt hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-primary-foreground/80">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-primary-foreground/80">Global Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-primary-foreground/80">Customer Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-primary-foreground/80">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;