"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string
}

interface ExperienceTimelineProps {
  items: TimelineItem[]
}

const ExperienceTimeline = ({ items }: ExperienceTimelineProps) => {
  return (
    <div className="relative border-l-2 border-gray-800 pl-8 ml-4 space-y-12">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-primary"></div>
          <div>
            <h3 className="text-xl font-bold font-oswald">{item.title}</h3>
            <p className="text-gray-400 mb-2 font-work">
              {item.company} • {item.period}
            </p>
            <p className="text-gray-300 font-work">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ExperienceTimeline

