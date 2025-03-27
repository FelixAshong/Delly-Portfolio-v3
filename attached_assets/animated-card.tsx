"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

const AnimatedCard = ({ children, className, delay = 0, hover = true }: AnimatedCardProps) => {
  return (
    <motion.div
      className={cn("bg-card rounded-lg p-6 border border-border", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" } : undefined}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard

