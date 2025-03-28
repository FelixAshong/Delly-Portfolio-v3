import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative">
      {/* Background gradient effects */}
      <div className="bg-gradient-1 absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] -top-10 sm:-top-20 -left-10 sm:-left-20 opacity-20 z-0"></div>
      <div className="bg-gradient-2 absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 opacity-20 z-0"></div>

      {/* About Me Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">ABOUT ME</h1>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square rounded-lg overflow-hidden border-4 border-primary mb-4 md:mb-0"
        >
          <img
            src="/assets/profile/3.jpg"
            alt="Felix Ashong"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            A FULL-STACK WEB DEVELOPER
            <br />
            BASED IN GHANA 🇬🇭
          </h2>
          
          <p className="text-muted-foreground text-sm sm:text-base">
            Hi there! 👋 I'm Felix Ashong, a passionate and creative Full-Stack Web
            developer with a love for building cool things. My journey in the tech world
            has been filled with exciting projects and continuous learning.
          </p>

          <p className="text-muted-foreground text-sm sm:text-base">
            I specialize in creating responsive, user-friendly web applications using
            modern technologies. With a strong foundation in both frontend and
            backend development, I can bring your ideas to life from concept to
            deployment.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 className="text-foreground font-bold text-sm sm:text-base">Experience</h3>
              </div>
              <p className="text-muted-foreground text-sm">3+ Years</p>
            </div>
            <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <h3 className="text-foreground font-bold text-sm sm:text-base">Location</h3>
              </div>
              <p className="text-muted-foreground text-sm">Accra, Ghana</p>
            </div>
            <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <h3 className="text-foreground font-bold text-sm sm:text-base">Education</h3>
              </div>
              <p className="text-muted-foreground text-sm">BSc. Computer Science</p>
            </div>
            <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-primary/10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </div>
                <h3 className="text-foreground font-bold text-sm sm:text-base">Freelance</h3>
              </div>
              <p className="text-muted-foreground text-sm">Available</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">MY JOURNEY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Senior Web Developer</h3>
            <p className="text-primary mb-2 text-sm sm:text-base">Tech Solutions Ltd • 2022 - Present</p>
            <p className="text-muted-foreground text-sm">Leading the development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and performance.</p>
          </div>
          
          <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Web Developer</h3>
            <p className="text-primary mb-2 text-sm sm:text-base">Digital Innovations • 2020 - 2022</p>
            <p className="text-muted-foreground text-sm">Developed and maintained client websites, implemented responsive designs, and collaborated with the design team to create seamless user experiences.</p>
          </div>
          
          <div className="bg-card/50 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Freelance Developer</h3>
            <p className="text-primary mb-2 text-sm sm:text-base">Self-employed • 2019 - 2020</p>
            <p className="text-muted-foreground text-sm">Worked with various clients to build websites and web applications, focusing on delivering high-quality solutions that meet client requirements.</p>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <TestimonialsSlider />
      </motion.div>
    </div>
  );
};

export default About;