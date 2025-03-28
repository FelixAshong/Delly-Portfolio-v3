import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
}

const SkillBar = ({ name, percentage, color, delay }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className={`text-[hsl(var(--${color}))]`}>{percentage}%</span>
      </div>
      <div className="h-2 bg-background rounded-full overflow-hidden skill-bar">
        <motion.div 
          className={`progress h-full bg-[hsl(var(--${color}))] rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn()}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">FULL-STACK WEB DEVELOPMENT SKILLS</h2>
          <div className="w-20 h-1 ghana-gradient mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My comprehensive skill set enables me to handle all aspects of web development, from front-end interfaces to back-end systems and everything in between.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn(0.2)}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <i className="ri-layout-line mr-2 text-[hsl(var(--ghana-yellow))]"></i> FRONT-END DEVELOPMENT
            </h3>
            
            <div className="space-y-6">
              {FRONTEND_SKILLS.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="ghana-yellow"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn(0.4)}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <i className="ri-server-line mr-2 text-[hsl(var(--ghana-red))]"></i> BACK-END DEVELOPMENT
            </h3>
            
            <div className="space-y-6">
              {BACKEND_SKILLS.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="ghana-red"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Tools & Other Skills */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn(0.6)}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center flex items-center justify-center">
            <i className="ri-tools-line mr-2 text-[hsl(var(--ghana-green))]"></i> TOOLS & OTHER SKILLS
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {TOOLS.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-secondary border border-gray-700 rounded-lg p-4 text-center hover:border-[hsl(var(--ghana-green))] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1) }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-sm font-medium mb-1">{tool.name}</span>
                <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[hsl(var(--ghana-green))]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
