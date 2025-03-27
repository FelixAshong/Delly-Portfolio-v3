import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "CV", href: "/cv" }
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-background'} border-b border-border transition-all duration-300`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <span className="font-heading font-bold text-xl text-white">PhleoDelly</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`${isActive(link.href) ? 'text-primary font-medium' : 'text-muted-foreground'} hover:text-white transition-colors text-sm`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors ml-2"
            >
              Hire Me
            </Link>
            <Link 
              href="/cv"
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Online CV
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-muted-foreground hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-card absolute top-full left-0 w-full border-b border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-4 ${isActive(link.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground'} hover:bg-muted rounded-md transition-colors`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="block py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium mt-2"
                onClick={closeMenu}
              >
                Hire Me
              </Link>
              <Link 
                href="/cv"
                className="block py-2 px-4 bg-primary hover:bg-primary/90 text-black rounded-md font-medium mt-2"
                onClick={closeMenu}
              >
                Online CV
              </Link>
              <div className="py-2 px-4 mt-2 flex justify-start">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
