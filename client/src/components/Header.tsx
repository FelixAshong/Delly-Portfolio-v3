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
    <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-background'} border-b border-border transition-all duration-300 w-full`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-primary">
              <img 
                src="/assets/profile/2.jpg" 
                alt="PhleoDelly Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl text-foreground dark:text-white hidden md:inline">PhleoDelly</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`${isActive(link.href) ? 'text-primary font-medium' : 'text-muted-foreground'} hover:text-white transition-colors text-sm whitespace-nowrap`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="crystal-btn text-white px-4 py-2 rounded text-sm font-medium ml-2 whitespace-nowrap"
              style={{ background: "#2563eb" }}
            >
              Hire Me
            </Link>
            <a 
              href="https://felixashong.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="crystal-btn text-white px-4 py-2 rounded text-sm font-medium whitespace-nowrap"
            >
              Online CV
            </a>
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
          <>
            <motion.div 
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />
            <motion.div 
              className="md:hidden fixed top-[72px] left-0 right-0 w-full bg-card border-b border-border z-50 overflow-y-auto max-h-[calc(100vh-72px)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`block py-3 px-4 ${isActive(link.href) ? 'bg-primary/10 text-primary' : 'text-muted-foreground'} hover:bg-muted rounded-md transition-colors text-base`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-3">
                  <Link 
                    href="/contact"
                    className="block crystal-btn w-full py-3 px-4 text-white rounded-md font-medium text-center"
                    style={{ background: "#2563eb" }}
                    onClick={closeMenu}
                  >
                    Hire Me
                  </Link>
                  <a 
                    href="https://felixashong.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block crystal-btn w-full py-3 px-4 text-black rounded-md font-medium text-center"
                    onClick={closeMenu}
                  >
                    Online CV
                  </a>
                </div>
                <div className="py-4 px-4 flex justify-start border-t border-border mt-4">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
