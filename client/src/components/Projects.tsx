import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";

const Projects = () => {
  const projectStats = [
    { value: "10+", label: "Websites", color: "ghana-green" },
    { value: "15+", label: "Web Apps", color: "ghana-yellow" },
    { value: "5+", label: "Mobile Apps", color: "ghana-red" },
    { value: "20+", label: "Happy Clients", color: "ghana-green" }
  ];
  
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn()}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">LATEST PROJECTS</h2>
          <div className="w-20 h-1 ghana-gradient mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills, expertise, and passion for web development.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              className={`bg-secondary rounded-xl overflow-hidden transition-all hover:-translate-y-2 duration-300 border border-gray-800 hover:border-[hsl(var(--ghana-${project.categoryColor}))] group`}
              variants={fadeIn(0.1 * index)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3">
                  <span className={`bg-[hsl(var(--ghana-${project.categoryColor}))]/90 text-white text-xs font-medium px-2 py-1 rounded`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-background text-gray-400 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className={`inline-flex items-center text-[hsl(var(--ghana-${project.categoryColor}))] text-sm font-medium hover:underline`}
                >
                  View Project <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projectStats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              variants={fadeIn(0.1 * index)}
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className={`text-[hsl(var(--${stat.color}))]`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
