"use client"

import { useEffect, useState } from "react"
import { debounce } from "@/lib/utils"

export function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const debouncedHandleMouseMove = debounce(handleMouseMove, 5)

    window.addEventListener("mousemove", debouncedHandleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", debouncedHandleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-40 opacity-70 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        width: "350px",
        height: "350px",
        background: "radial-gradient(circle, rgba(0,122,255,0.4) 0%, rgba(255,107,0,0.2) 50%, rgba(0,0,0,0) 70%)",
        borderRadius: "50%",
        filter: "blur(20px)",
      }}
    />
  )
}

