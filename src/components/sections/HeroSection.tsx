import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImage from "@/assets/about-image.jpg";
import projectCargo from "@/assets/project-cargo.jpg";

const HeroSection = () => {
  const backgrounds = [heroBg, aboutImage, projectCargo];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentBg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-4 sm:px-6 sm:py-2">
            <Plane size={14} className="sm:size-16" />
            <span className="text-xs sm:text-sm font-medium">
              We Are Specialists In Freight Transportation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-snug sm:leading-tight">
            WORLD WIDE
            <br />
            <span className="text-accent">TRANSPORTATION</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl mb-6 text-primary-foreground/90 max-w-xl mx-auto px-2">
            Professional freight management solutions with global reach and local expertise
          </p>

          {/* CTA Button */}
          <Button
            variant="default"
            className="bg-accent hover:bg-accent/90 text-white px-6 py-3 text-sm sm:text-base"
            onClick={() => {
              if (location.pathname !== "/") {
                window.location.href = "/#contact";
              } else {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Animated Arrow */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-accent animate-bounce">
        <ArrowRight size={28} className="rotate-90 sm:size-32" />
      </div>
    </section>
  );
};

export default HeroSection;
