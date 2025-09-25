import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import saralLogo from "@/assets/saral-logo.png";

const Footer = () => {
  const projectImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop"
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
                  Would you like to get the best Transport services?
                </h3>
                <p className="text-accent-foreground/90">
                  Professional freight management solutions for your business needs
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={saralLogo} 
                  alt="SARAL FREIGHT MANAGEMENT" 
                  className="h-12 w-12 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">SARAL FREIGHT</span>
                  <span className="text-sm text-primary-foreground/80">MANAGEMENT PTE LTD</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Professional freight and logistics solutions with global reach and local expertise. 
                Your trusted partner for all transportation needs.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About Us</Link>
              </Button>
            </div>

            {/* Office Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-accent">Office Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/90">+65 1234 5678</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/90">info@saralfreight.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-primary-foreground/90">
                    Singapore Business District<br />
                    Singapore 123456
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-accent">Newsletter</h3>
              <p className="text-primary-foreground/80 mb-6">
                Subscribe our newsletter to get our latest update & news
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Email Address"
                  className="bg-primary-light border-primary-light text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button 
                  size="icon"
                  className="bg-accent hover:bg-accent-dark text-accent-foreground flex-shrink-0"
                >
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-accent">Social Network</h4>
                <div className="flex space-x-3">
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary-light hover:bg-accent hover:border-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="https://facebook.com/saralfreight" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary-light hover:bg-accent hover:border-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="https://instagram.com/saralfreight" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary-light hover:bg-accent hover:border-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="https://twitter.com/saralfreight" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary-light hover:bg-accent hover:border-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="https://linkedin.com/company/saralfreight" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-light">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/70 text-sm">
                © 2025 SARAL FREIGHT MANAGEMENT PTE LTD. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
              
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;