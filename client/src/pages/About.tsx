import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24 relative">
      {/* Background gradient effects */}
      <div className="bg-gradient-1 absolute w-[400px] h-[400px] -top-20 -left-20 opacity-20 z-0"></div>
      <div className="bg-gradient-2 absolute w-[400px] h-[400px] -bottom-20 -right-20 opacity-20 z-0"></div>

      {/* About Me Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">ABOUT ME</h1>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <img
            src="/assets/profile/3.jpg"
            alt="Felix Ashong"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-24 h-24 flex items-center justify-center">
              <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </span>
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            A FULL-STACK WEB DEVELOPER
            <br />
            BASED IN GHANA 🇬🇭
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Hi there! 👋 I'm Felix Ashong, a passionate and creative Full-Stack Web
            developer with a love for building cool things. My journey in the tech world
            has been filled with exciting projects and continuous learning.
          </p>

          <p className="text-muted-foreground mb-6">
            I specialize in creating responsive, user-friendly web applications using
            modern technologies. With a strong foundation in both frontend and
            backend development, I can bring your ideas to life from concept to
            deployment.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-foreground font-bold mb-2">Experience</h3>
              <p className="text-muted-foreground">3+ Years</p>
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-2">Location</h3>
              <p className="text-muted-foreground">Accra, Ghana</p>
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">BSc. Computer Science</p>
            </div>
            <div>
              <h3 className="text-foreground font-bold mb-2">Freelance</h3>
              <p className="text-muted-foreground">Available</p>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground hover:text-primary transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground hover:text-primary transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground hover:text-primary transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground hover:text-primary transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">MY JOURNEY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-2">Senior Web Developer</h3>
            <p className="text-primary mb-2">Tech Solutions Ltd • 2022 - Present</p>
            <p className="text-muted-foreground">Leading the development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and performance.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-2">Web Developer</h3>
            <p className="text-primary mb-2">Digital Innovations • 2020 - 2022</p>
            <p className="text-muted-foreground">Developed and maintained client websites, implemented responsive designs, and collaborated with the design team to create seamless user experiences.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-2">Freelance Developer</h3>
            <p className="text-primary mb-2">Self-employed • 2019 - 2020</p>
            <p className="text-muted-foreground">Worked with various clients to build websites and web applications, focusing on delivering high-quality solutions that meet client requirements.</p>
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