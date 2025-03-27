"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { projects, filters } from "@/data"
import Div from "./div"
import { FaPlay, FaCode } from "react-icons/fa"
import Image from "next/image"

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("all")
  const [projectData, setProjectData] = useState(projects)

  const filterHandler = (tag: string) => {
    setSelectedTag(tag)
    let filteredProjects = []
    if (tag === "all") {
      filteredProjects = projects
    } else {
      filteredProjects = projects.filter((p) => p.tags.includes(tag))
    }
    setProjectData(filteredProjects)
  }

  return (
    <div id="work" className="mt-10 relative">
      {/* SECTION HEADING START */}
      <Div animate className="mb-10">
        <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase text-gradient mb-2">
          Latest Projects
        </div>
        <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-[#CCCCCC] text-center">
          Latest Projects: Where Creativity Went on a Date with Technology and Hilarity Ensued!
        </div>
      </Div>
      {/* SECTION HEADING END */}

      {/* FILTER TAGS START */}
      <Div className="flex justify-start md:justify-center gap-[10px] mb-[50px] overflow-auto">
        {filters.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-[#252525] rounded-lg py-[10px] px-[17px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] cursor-pointer whitespace-nowrap ${
              selectedTag === item.id ? "bg-primary text-black" : ""
            }`}
            onClick={() => filterHandler(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.div>
        ))}
      </Div>
      {/* FILTER TAGS END */}

      {/* PROJECTS GRID START */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {projectData.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col gap-4 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
                />
              </div>
              <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">{item.name}</div>
              <div className="flex justify-center gap-8">
                <a
                  href={item.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  <FaCode size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={item.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  <FaPlay size={20} />
                  <span>Demo</span>
                </a>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      {/* PROJECTS GRID END */}
    </div>
  )
}

export default Portfolio

