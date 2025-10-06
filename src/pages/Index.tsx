import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CarouselSection from "@/components/sections/CarouselSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navigation />
      <div className="pt-0">
        <HeroSection />
        <ContactFormSection />  {/* Dipindah ke sini */}
        <AboutSection />
        <ServicesSection />
        <HowItWorksSection />
        <CarouselSection />
        <PartnersSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
