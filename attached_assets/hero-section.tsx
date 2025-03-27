"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 font-oswald"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I AM A <span className="text-primary">FULL-STACK</span> WEB DEVELOPER
            </motion.h1>
            <motion.p
              className="text-lg mb-6 text-gray-300 font-work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A passionate developer creating high-quality web applications with modern technologies like React,
              Node.js, MongoDB, Express, Next.js, TypeScript, and more.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mb-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex flex-col items-center" variants={item}>
                <span className="text-3xl font-bold text-primary font-oswald">10+</span>
                <span className="text-sm text-gray-400 font-work">PROJECTS COMPLETED</span>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={item}>
                <span className="text-3xl font-bold text-primary font-oswald">3+</span>
                <span className="text-sm text-gray-400 font-work">YEARS EXPERIENCE</span>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={item}>
                <span className="text-3xl font-bold text-primary font-oswald">⭐</span>
                <span className="text-sm text-gray-400 font-work">QUALITY WORK</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="w-10 h-1 bg-primary"></span>
              <p className="text-gray-400 font-work">Full-Stack Developer</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
              ></motion.div>
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-gray-800 w-64 h-64 md:w-80 md:h-80 mx-auto"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Developer"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

