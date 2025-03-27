import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">FELIX ASHONG</h1>
        <Button className="bg-primary hover:bg-primary/90 text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
          Download CV
        </Button>
      </motion.div>
      
      <div className="bg-card rounded-lg p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Full-Stack Web Developer</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">PROFESSIONAL SUMMARY</h3>
                  <p className="text-muted-foreground">
                    Full-Stack Web Developer with 3+ years of experience in building responsive, user-friendly web
                    applications in modern JavaScript frameworks and libraries, with a strong focus on React,
                    Next.js, and Node.js. Passionate about creating clean, efficient code and delivering high-quality
                    solutions that meet client requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">WORK EXPERIENCE</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="text-lg font-semibold text-white">Senior Web Developer</h4>
                        <span className="text-primary">2022 - Present</span>
                      </div>
                      <p className="text-muted-foreground mb-2">Tech Solutions Ltd, Accra</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Led the development of enterprise web applications using React and Next.js</li>
                        <li>Mentored junior developers and implemented best practices for code quality</li>
                        <li>Optimized application performance and improved user experience</li>
                        <li>Collaborated with cross-functional teams to deliver projects on time</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <h4 className="text-lg font-semibold text-white">Web Developer</h4>
                        <span className="text-primary">2020 - 2022</span>
                      </div>
                      <p className="text-muted-foreground mb-2">Digital Innovations, Accra</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Developed and maintained client websites using modern web technologies</li>
                        <li>Implemented responsive designs and ensured cross-browser compatibility</li>
                        <li>Collaborated with the design team to create seamless user experiences</li>
                        <li>Participated in code reviews and contributed to team knowledge sharing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">EDUCATION</h3>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h4 className="text-lg font-semibold text-white">BSc. Computer Science</h4>
                      <span className="text-primary">2016 - 2020</span>
                    </div>
                    <p className="text-muted-foreground">University of Ghana, Legon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <p className="text-muted-foreground">phleodelly@gmail.com</p>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <p className="text-muted-foreground">+233 123 456 789</p>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <h3 className="text-lg font-semibold text-white">Location</h3>
              </div>
              <p className="text-muted-foreground">Accra, Ghana</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">TECHNICAL SKILLS</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white mb-2">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">HTML/CSS/JS</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">JavaScript</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">TypeScript</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">React</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Next.js</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Node.js</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Express</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">MongoDB</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">MySQL</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">REST APIs</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Git</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">GitHub</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">VS Code</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Figma</span>
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">AWS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">SOFT SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Problem Solving</span>
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Communication</span>
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Teamwork</span>
                <span className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">Time Management</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-primary mb-4">CONNECT WITH ME</h3>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 hover:bg-primary/20 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 hover:bg-primary/20 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 hover:bg-primary/20 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-primary/50 hover:bg-primary/20 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;