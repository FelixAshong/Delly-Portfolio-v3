import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import CountUp from "@/components/CountUp";
import LoadingSpinner from "@/components/LoadingSpinner";
import GlowingProfileImage from "@/components/GlowingProfileImage";

const Home = () => {
  return (
    <div className="container mx-auto px-4 relative">
      {/* Background gradient effects */}
      <div className="bg-gradient-1 absolute w-[400px] h-[400px] -top-20 -left-20 opacity-20 z-0"></div>
      <div className="bg-gradient-2 absolute w-[400px] h-[400px] -bottom-20 -right-20 opacity-20 z-0"></div>
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-styled">Felix Ashong</span>
          </h1>
          
          <div className="mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Full-Stack Web Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg"
            >
              I specialize in creating modern, responsive web applications that deliver exceptional user experiences. With expertise in both frontend and backend technologies, I build complete solutions from concept to deployment.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/projects" className="crystal-btn text-foreground px-6 py-4 text-base font-medium block">
              View My Work
            </Link>
            <Link href="/contact" className="crystal-btn text-foreground px-6 py-4 text-base font-medium block">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96">
            <GlowingProfileImage 
              imageUrl="/public/assets/1.png"
              altText="Felix Ashong"
              glowColor="#ff6b00"
              glowIntensity={0.8}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">What I Do</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          I build beautiful, functional, and user-friendly websites and web applications using modern technologies.
          My goal is to create digital solutions that help businesses grow and provide users with exceptional experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 hover-float hover-glow">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"></path><path d="M7 22h1a4 4 0 0 0 4-4v-1"></path><path d="M7 2h1a4 4 0 0 1 4 4v1"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Web Development</h3>
            <p className="text-muted-foreground">
              Creating responsive websites that work seamlessly across all devices using modern frameworks and best practices.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 hover-float hover-glow">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Application Development</h3>
            <p className="text-muted-foreground">
              Building feature-rich web applications with clean architecture, efficient data management, and intuitive user interfaces.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-8 hover-float hover-glow">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">API Development</h3>
            <p className="text-muted-foreground">
              Designing and implementing robust APIs that enable seamless integration between systems and services.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-16 bg-card rounded-lg p-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Technologies I Work With</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="bg-card/50 dark:bg-black/30 rounded-lg p-6 text-center hover-scale hover-glow">
            <h3 className="text-foreground font-medium">React</h3>
          </div>
          <div className="bg-card/50 dark:bg-black/30 rounded-lg p-6 text-center hover-scale hover-glow">
            <h3 className="text-foreground font-medium">Node.js</h3>
          </div>
          <div className="bg-card/50 dark:bg-black/30 rounded-lg p-6 text-center hover-scale hover-glow">
            <h3 className="text-foreground font-medium">TypeScript</h3>
          </div>
          <div className="bg-card/50 dark:bg-black/30 rounded-lg p-6 text-center hover-scale hover-glow">
            <h3 className="text-foreground font-medium">Next.js</h3>
          </div>
          <div className="bg-card/50 dark:bg-black/30 rounded-lg p-6 text-center hover-scale hover-glow">
            <h3 className="text-foreground font-medium">MongoDB</h3>
          </div>
          <div className="bg-card/50 dark:bg-black/30 rounded-lg p-6 text-center hover-scale hover-glow">
            <h3 className="text-foreground font-medium">Tailwind CSS</h3>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/skills" className="crystal-btn text-foreground px-6 py-3 font-medium inline-block">
            View All Skills
          </Link>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="py-16 grid grid-cols-2 md:grid-cols-4 gap-6 relative"
      >
        {/* Background gradient for stats section */}
        <div className="bg-gradient-3 absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 z-0"></div>
        
        <div className="bg-card p-6 rounded-lg text-center relative z-10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={3} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg text-center relative z-10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={20} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Projects Completed</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg text-center relative z-10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={15} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Happy Clients</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg text-center relative z-10 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={5} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Tech Stack</p>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-16 text-center mb-8 relative"
      >
        <div className="bg-gradient-2 absolute w-[400px] h-[400px] -bottom-60 left-[30%] opacity-20 z-0"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Ready to start your project?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Let's work together to bring your ideas to life. I'm available for freelance projects and full-time opportunities.
          </p>
          <Link href="/contact" className="crystal-btn text-foreground px-8 py-6 text-lg font-medium">
            Get In Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;