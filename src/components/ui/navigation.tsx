import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import saralLogo from "@/assets/saral-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-primary/40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Contact Bar */}
      <div className="py-2 px-4 hidden md:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center text-sm text-white">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+65 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@saralfreight.com</span>
            </div>
          </div>
          <div className="text-sm">Social Network</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={saralLogo}
                alt="SARAL FREIGHT MANAGEMENT"
                className="h-10 md:h-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-white hover:text-accent transition-colors font-medium relative"
                >
                  {item.name}
                  {isActivePath(item.path) && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></div>
                  )}
                </Link>
              ))}
              <Button
                className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-lg"
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/10 bg-primary/90 backdrop-blur-md">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-colors ${
                      isActivePath(item.path) ? "text-accent bg-white/10" : ""
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-lg"
                    onClick={() => {
                      setIsMenuOpen(false);
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
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
