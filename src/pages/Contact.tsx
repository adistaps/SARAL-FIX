import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import ContactFormSection from "@/components/sections/ContactFormSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "Singapore Business District\nSingapore 123456",
      subContent: "Main Office Location"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+65 1234 5678",
      subContent: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Address", 
      content: "info@saralfreight.com",
      subContent: "Send us your queries"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM",
      subContent: "Emergency support available 24/7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Get in touch with our freight management experts. We're here to help with all your logistics needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 bg-card-alt hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
                  <p className="text-muted-foreground mb-2 whitespace-pre-line font-medium">{info.content}</p>
                  <p className="text-sm text-muted-foreground/70">{info.subContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormSection />

      {/* Map Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Find Us Here</h2>
            <p className="text-lg text-muted-foreground">
              Visit our office for face-to-face consultations and personalized service.
            </p>
          </div>
          
          {/* Google Maps Embed */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127628.22238556676!2d103.70415504444444!3d1.3483099019928824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2ssg!4v1704067200000!5m2!1sen!2ssg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SARAL FREIGHT MANAGEMENT Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;