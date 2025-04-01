import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PROJECTS } from "@/lib/constants";

// Project Types
type ProjectCategory = "All" | "Web Development" | "UI/UX Design" | "Mobile Apps";

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  link: string;
  categoryColor: string;
  github: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  // Filter projects based on selected category
  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(PROJECTS.map((project, index) => ({ 
        ...project, 
        id: index + 1,
        category: project.category as ProjectCategory 
      })));
    } else {
      setFilteredProjects(PROJECTS
        .filter(project => project.category === filter)
        .map((project, index) => ({ 
          ...project, 
          id: index + 1,
          category: project.category as ProjectCategory 
        })));
    }
  }, [filter]);
  
  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects(PROJECTS.map((project, index) => ({ 
      ...project, 
      id: index + 1,
      category: project.category as ProjectCategory 
    })));
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 relative">
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
        <div className="flex overflow-x-auto space-x-4 py-4 mb-12">
          {(["All", "Web Development", "Mobile Apps", "UI/UX Design"] as ProjectCategory[]).map((category) => (
            <button 
              key={category}
              onClick={() => setFilter(category)}
              className="crystal-btn px-6 py-2 text-foreground font-medium cursor-pointer rounded-md transition-all duration-300"
              style={filter === category ? { background: "#FFA500" } : {}}
            >
              {category}
            </button>
          ))}
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
              <div className="relative w-full h-48 overflow-hidden group">
                <div className="h-full w-full overflow-y-auto scrollbar-hide"> 
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`bg-[hsl(var(--ghana-${project.categoryColor}))]/90 text-white text-xs font-medium px-2 py-1 rounded`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-background text-gray-400 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium crystal-btn text-foreground h-9 px-3 py-2"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium crystal-btn text-foreground h-9 px-3 py-2"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
