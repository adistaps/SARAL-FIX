import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import saralLogo from "@/assets/saral-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-[9999] ${
        isScrolled ? "backdrop-blur-md shadow-lg bg-[#0A1E3F]/90" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={saralLogo} alt="Saral Freight Management Logo" className="h-12 md:h-14" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenu}
              className={`text-white hover:text-[#FBBF24] transition-colors ${
                location.pathname === item.path ? "font-bold underline underline-offset-4" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Info (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+6567499808" className="flex items-center text-white hover:text-[#FBBF24]">
            <Phone className="h-5 w-5 mr-1" /> +65 6749 9808
          </a>
          <a
            href="mailto:ops@saralasia.com"
            className="flex items-center text-white hover:text-[#FBBF24]"
          >
            <Mail className="h-5 w-5 mr-1" /> ops@saralasia.com
          </a>
          <Button
          variant="default"
          className="bg-[#FBBF24] hover:bg-[#D97706] text-black px-4 py-2 rounded-lg shadow-lg"
          onClick={() => {
            if (location.pathname !== "/") {
               window.location.href = "/#contact";
              } else {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              }}
              >
                Get a Quote
                </Button>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A1E3F]/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`text-white hover:text-[#FBBF24] transition-colors ${
                  location.pathname === item.path ? "font-bold underline underline-offset-4" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <a href="tel:+6567499808" className="flex items-center text-white hover:text-[#FBBF24]">
                <Phone className="h-5 w-5 mr-1" /> +65 6749 9808
              </a>
              <a
                href="mailto:ops@saralasia.com"
                className="flex items-center text-white hover:text-[#FBBF24]"
              >
                <Mail className="h-5 w-5 mr-1" /> ops@saralasia.com
              </a>
              <Button className="bg-[#FBBF24] hover:bg-[#D97706] text-black px-4 py-2 rounded-lg shadow-lg w-full">
                Track Shipment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
