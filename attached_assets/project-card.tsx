"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaPlay, FaCode } from "react-icons/fa"

interface ProjectCardProps {
  name: string
  image: string
  codeLink: string
  demoLink: string
  delay?: number
}

const ProjectCard = ({ name, image, codeLink, demoLink, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col gap-4 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <div className="bg-black rounded-[20px] aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={600}
          height={400}
          className="transition-transform hover:-translate-y-[25%] hover:duration-2500 ease-linear"
        />
      </div>
      <div className="text-[20px] 2xl:text-[24px] text-[#CCCCCC] text-center">{name}</div>
      <div className="flex justify-center gap-8">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
        >
          <FaCode size={20} />
          <span>Code</span>
        </a>
        <a
          href={demoLink}
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
}

export default ProjectCard

