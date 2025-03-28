import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CountUp from "@/components/CountUp";

// Project Types
type ProjectCategory = "All" | "Web Development" | "Mobile Apps" | "UI/UX Design";

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image?: string;
  codeLink: string;
  demoLink: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  // Project data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "UG TUBE",
      description: "A video site for UG with modern features and user-friendly interface.",
      category: "Web Development",
      codeLink: "https://github.com",
      demoLink: "https://demo-site.com"
    },
    {
      id: 2,
      title: "Small Apps",
      description: "Landing page for launching apps with modern design and features.",
      category: "UI/UX Design",
      codeLink: "https://github.com",
      demoLink: "https://demo-site.com"
    },
    {
      id: 3,
      title: "Hospital Management",
      description: "System to help hospital staff manage schedules and patient records.",
      category: "Web Development",
      codeLink: "https://github.com",
      demoLink: "https://demo-site.com"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "A complete e-commerce solution with product management and payment integration.",
      category: "Web Development",
      codeLink: "https://github.com",
      demoLink: "https://demo-site.com"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern portfolio website for showcasing professional work and services.",
      category: "UI/UX Design",
      codeLink: "https://github.com",
      demoLink: "https://demo-site.com"
    },
    {
      id: 6,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts and alerts.",
      category: "Mobile Apps",
      codeLink: "https://github.com",
      demoLink: "https://demo-site.com"
    }
  ];
  
  // Filter projects based on selected category
  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);
  
  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects(projectsData);
  }, []);
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">MY PROJECTS</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents a unique challenge and solution. Feel free to explore them and check out the live demos or source code.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          LATEST PROJECTS
        </h2>
        <div className="text-center mb-8">
          <p className="text-muted-foreground">Latest Projects: Where Creativity Went on a Date with Technology and Hilarity Ensued!</p>
        </div>

        <div className="flex overflow-x-auto space-x-4 py-4 mb-12">
          <button 
            onClick={() => setFilter("All")}
            className={`crystal-btn px-6 py-2 text-foreground font-medium cursor-pointer rounded-md transition-all duration-300`}
            style={filter === "All" ? { background: "#FFA500" } : {}}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("Web Development")}
            className={`crystal-btn px-6 py-2 text-foreground font-medium cursor-pointer rounded-md transition-all duration-300`}
            style={filter === "Web Development" ? { background: "#FFA500" } : {}}
          >
            Web Development
          </button>
          <button 
            onClick={() => setFilter("Mobile Apps")}
            className={`crystal-btn px-6 py-2 text-foreground font-medium cursor-pointer rounded-md transition-all duration-300`}
            style={filter === "Mobile Apps" ? { background: "#FFA500" } : {}}
          >
            Mobile Apps
          </button>
          <button 
            onClick={() => setFilter("UI/UX Design")}
            className={`crystal-btn px-6 py-2 text-foreground font-medium cursor-pointer rounded-md transition-all duration-300`}
            style={filter === "UI/UX Design" ? { background: "#FFA500" } : {}}
          >
            UI/UX Design
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="bg-card rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="h-48 bg-card/50 dark:bg-muted flex items-center justify-center overflow-hidden group-hover:opacity-80 transition-opacity">
                <span className="text-muted-foreground">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-styled text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-5">{project.description}</p>
                <div className="flex space-x-4">
                  <a 
                    href={project.codeLink}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium crystal-btn text-foreground h-9 px-3 py-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                    Code
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium crystal-btn text-foreground h-9 px-3 py-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Project Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-card rounded-lg overflow-hidden"
          >
            <div className="h-48 bg-card/50 dark:bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-styled text-xl font-bold mb-3">Weather App</h3>
              <p className="text-muted-foreground mb-5">Real-time weather application with location-based forecasts and alerts.</p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium crystal-btn text-foreground h-9 px-3 py-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                  Code
                </a>
                <a 
                  href="https://demo-site.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium crystal-btn text-foreground h-9 px-3 py-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
      >
        <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={10} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Projects Completed</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={15} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Happy Clients</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={3} suffix="+" />
          </h3>
          <p className="text-muted-foreground">Years Experience</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
          <h3 className="text-4xl font-bold text-primary mb-2">
            <CountUp end={100} suffix="%" />
          </h3>
          <p className="text-muted-foreground">Client Satisfaction</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;