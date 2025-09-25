import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Factory, Plane, Package } from "lucide-react";
import { Link } from "react-router-dom";

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Vehicle Manufacturing",
      description: "Specialized logistics solutions for automotive industry including parts distribution and vehicle transportation services.",
      icon: Factory,
      gradient: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Transportation Process",
      description: "End-to-end transportation management with real-time tracking and optimized routing for maximum efficiency.",
      icon: Plane,
      gradient: "from-green-600 to-teal-700"
    },
    {
      id: 3,
      title: "Packaging & Distribution",
      description: "Professional packaging services and strategic distribution networks to ensure safe and timely delivery.",
      icon: Package,
      gradient: "from-purple-600 to-indigo-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <Card className={`bg-gradient-to-br ${slide.gradient} text-white border-0 h-96`}>
                      <CardContent className="p-0 h-full relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                          <div>
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6">
                              <slide.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                            <p className="text-white/90 text-lg leading-relaxed">{slide.description}</p>
                          </div>
                          
 
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="bg-primary-light border-primary-light text-white hover:bg-white hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="bg-primary-light border-primary-light text-white hover:bg-white hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? "bg-accent scale-125" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Call to Action */}
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Would you like to get the best{" "}
              <span className="text-accent">Transport services?</span>
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
             Experience professional freight management with our comprehensive logistics solutions. 
             From air charter to project cargo, we deliver excellence in every shipment.
             </p>
             <Button
             size="lg"
             className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-6 text-lg font-semibold"
             onClick={() => {
              window.location.href = '/services';
              window.scrollTo(0, 0); // biar langsung ke atas
              }}
              >
                Our Service
              </Button>



          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;