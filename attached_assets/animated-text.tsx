"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

const AnimatedText = ({ children, className, delay = 0 }: AnimatedTextProps) => {
  return (
    <motion.span
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.span>
  )
}

export default AnimatedText

