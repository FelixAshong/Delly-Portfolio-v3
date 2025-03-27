const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full ghana-gradient flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">Phleodelly</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Phleodelly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
