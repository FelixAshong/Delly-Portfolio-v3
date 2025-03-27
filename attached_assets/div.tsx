"use client"

import { type HTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean
}

const Div = forwardRef<HTMLDivElement, DivProps>(({ className, animate = false, children, ...props }, ref) => {
  if (animate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  )
})

Div.displayName = "Div"

export default Div

