import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/cv", label: "CV" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-primary"
            >
              <img 
                src="/assets/profile/2.jpg" 
                alt="PhleoDelly Logo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="font-heading font-bold text-xl md:text-2xl text-foreground">PhleoDelly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.a
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                    location === item.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {location === item.path && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/contact"
                className="crystal-btn text-white px-4 py-2 rounded text-sm font-medium whitespace-nowrap"
                style={{ background: "#2563eb" }}
              >
                Hire Me
              </Link>
              <a 
                href="https://delly-cv.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="crystal-btn text-white px-4 py-2 rounded text-sm font-medium whitespace-nowrap"
                style={{ background: "#f97316" }}
              >
                Online CV
              </a>
            </div>
            <ThemeToggle />
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <motion.a
                      className={`block px-4 py-2 text-base font-medium transition-colors ${
                        location === item.path
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  </Link>
                ))}
                <div className="px-4 space-y-2">
                  <Link 
                    href="/contact"
                    className="block crystal-btn text-white px-4 py-2 rounded text-sm font-medium text-center"
                    style={{ background: "#2563eb" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire Me
                  </Link>
                  <a 
                    href="https://delly-cv.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block crystal-btn text-white px-4 py-2 rounded text-sm font-medium text-center"
                    style={{ background: "#f97316" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Online CV
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
