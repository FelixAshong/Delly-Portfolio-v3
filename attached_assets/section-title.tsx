"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  className?: string
  centered?: boolean
}

const SectionTitle = ({ title, className, centered = true }: SectionTitleProps) => {
  return (
    <motion.h2
      className={cn("text-3xl md:text-5xl font-bold mb-8 font-oswald", centered && "text-center", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  )
}

export default SectionTitle

