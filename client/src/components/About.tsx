import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const About = () => {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "120+", label: "Projects Completed" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "3+", label: "Countries Served" }
  ];

  const features = [
    { 
      icon: "ri-code-s-slash-line", 
      color: "ghana-green", 
      title: "Clean Code", 
      description: "Writing maintainable, efficient code that follows best practices" 
    },
    { 
      icon: "ri-layout-4-line", 
      color: "ghana-yellow", 
      title: "Responsive Design", 
      description: "Creating seamless experiences across all devices and screen sizes" 
    },
    { 
      icon: "ri-rocket-line", 
      color: "ghana-red", 
      title: "Performance", 
      description: "Optimizing for speed, efficiency, and smooth user interactions" 
    },
    { 
      icon: "ri-user-smile-line", 
      color: "ghana-green", 
      title: "User-Centered", 
      description: "Focusing on intuitive, accessible, and engaging experiences" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(0.1)}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              A FULL-STACK WEB DEVELOPER<br />
              BASED IN GHANA
              <div className="flex items-center mt-2">
                <div className="w-6 h-4 bg-[hsl(var(--ghana-red))]"></div>
                <div className="w-6 h-4 bg-[hsl(var(--ghana-yellow))]"></div>
                <div className="w-6 h-4 bg-[hsl(var(--ghana-green))]"></div>
                <div className="w-4 h-4 bg-background flex items-center justify-center ml-2">
                  <i className="ri-star-fill text-[hsl(var(--ghana-yellow))] text-xs"></i>
                </div>
              </div>
            </h2>
            
            <p className="text-gray-400 mb-6">
              With over 10 years of experience in web development, I specialize in creating robust, scalable applications that deliver exceptional user experiences. Based in Ghana, I bring a unique perspective to every project and have collaborated with clients across Africa, Europe, and North America.
            </p>
            
            <p className="text-gray-400 mb-8">
              My approach combines technical expertise with creative problem-solving, ensuring your project not only functions flawlessly but also stands out in today's competitive digital landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (index * 0.1) }}
                >
                  <div className="text-4xl font-bold text-[hsl(var(--ghana-yellow))] mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-background hover:bg-muted border border-gray-700 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together <i className="ri-arrow-right-line ml-2"></i>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <div className="space-y-4">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`bg-background p-6 rounded-lg border border-gray-800 hover:border-[hsl(var(--${feature.color}))] transition-colors`}
                  variants={fadeIn(0.2 + (index * 0.1))}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <i className={`${feature.icon} text-[hsl(var(--${feature.color}))] text-3xl mb-4`}></i>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-4 mt-8">
              {features.slice(2, 4).map((feature, index) => (
                <motion.div 
                  key={index}
                  className={`bg-background p-6 rounded-lg border border-gray-800 hover:border-[hsl(var(--${feature.color}))] transition-colors`}
                  variants={fadeIn(0.3 + (index * 0.1))}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <i className={`${feature.icon} text-[hsl(var(--${feature.color}))] text-3xl mb-4`}></i>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
