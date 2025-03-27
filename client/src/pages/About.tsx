import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">ABOUT ME</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get to know more about me, my background, and what drives my passion for web development
          and digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Who am I?</h2>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm Felix Ashong, a passionate and dedicated Full-Stack Web Developer based in Accra, Ghana, with 
              over 3 years of professional experience building modern, responsive, and user-friendly 
              web applications.
            </p>
            
            <p>
              My journey into web development began with a deep curiosity about how websites work and a desire to 
              create meaningful digital experiences. This curiosity led me to pursue a degree in Computer Science at 
              the University of Ghana, where I honed my programming skills and developed a strong foundation in 
              software engineering principles.
            </p>
            
            <p>
              I specialize in developing full-stack applications using modern JavaScript frameworks and libraries, 
              with a particular focus on React.js, Next.js, and Node.js. I'm also well-versed in database management, 
              RESTful API development, and implementing responsive designs that work across all devices.
            </p>
            
            <p>
              What drives me is the opportunity to solve real-world problems through innovative digital solutions. 
              I believe in writing clean, efficient code and creating intuitive user experiences that make technology 
              accessible to everyone.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-8">
            <Button asChild>
              <Link href="/contact">
                <a className="bg-primary hover:bg-primary/90 text-black px-6">
                  Contact Me
                </a>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">
                <a className="border-primary text-primary hover:bg-primary hover:text-black">
                  View Projects
                </a>
              </Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-8"
        >
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">My Approach</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <svg className="text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>User-centered design approach prioritizing usability and accessibility</span>
              </li>
              <li className="flex items-start">
                <svg className="text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Clean, efficient code that is maintainable and scalable</span>
              </li>
              <li className="flex items-start">
                <svg className="text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Responsive design ensuring optimal experience across all devices</span>
              </li>
              <li className="flex items-start">
                <svg className="text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Continuous learning and implementation of industry best practices</span>
              </li>
              <li className="flex items-start">
                <svg className="text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Problem-solving mindset to overcome technical challenges</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Education & Experience</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="text-lg font-semibold text-white">BSc. Computer Science</h4>
                  <span className="text-primary">2016 - 2020</span>
                </div>
                <p className="text-muted-foreground">University of Ghana, Legon</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="text-lg font-semibold text-white">Senior Web Developer</h4>
                  <span className="text-primary">2022 - Present</span>
                </div>
                <p className="text-muted-foreground">Tech Solutions Ltd, Accra</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="text-lg font-semibold text-white">Web Developer</h4>
                  <span className="text-primary">2020 - 2022</span>
                </div>
                <p className="text-muted-foreground">Digital Innovations, Accra</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-card rounded-lg p-8 text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">My Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m10 13-2 2 2 2"></path><path d="m14 17 2-2-2-2"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Clean Code</h3>
            <p className="text-muted-foreground">Writing maintainable, readable, and efficient code that follows industry best practices.</p>
          </div>
          
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Innovation</h3>
            <p className="text-muted-foreground">Constantly exploring new technologies and approaches to provide the best solutions.</p>
          </div>
          
          <div className="p-4">
            <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.48-8.48l8.48-8.48a4 4 0 0 1 5.66 5.66l-7.78 7.78a2 2 0 0 1-2.83-2.83l6.37-6.37"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Reliability</h3>
            <p className="text-muted-foreground">Delivering high-quality work consistently and meeting deadlines with professionalism.</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-white">Let's Work Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Let's create something amazing together!
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg">
          <Link href="/contact">
            <a>Get In Touch</a>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default About;