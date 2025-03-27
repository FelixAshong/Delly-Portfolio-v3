"use client"

import Image from "next/image"
import Link from "next/link"
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { motion } from "framer-motion"
import { Button3D } from "@/components/ui/button-3d"
import TypingAnimation from "@/components/typing-animation"

export default function Home() {
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

  const typingTexts = ["React Developer", "Next.js Expert", "UI/UX Enthusiast", "Full-Stack Developer"]

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="absolute inset-0 animated-gradient-bg opacity-10"></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 font-oswald"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                I AM A <span className="text-gradient">FULL-STACK</span> WEB DEVELOPER
              </motion.h1>
              <motion.div
                className="text-lg mb-6 text-gray-300 font-work"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="mb-2">
                  A passionate developer creating high-quality web applications with modern technologies.
                </p>
                <div className="flex items-center">
                  <span className="mr-2">I am a</span>
                  <TypingAnimation texts={typingTexts} className="text-gradient-blue font-semibold" />
                </div>
              </motion.div>

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
                <span className="w-10 h-1 bg-gradient-to-r from-primary to-secondary"></span>
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

      {/* About Section Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              A FULL-STACK WEB DEVELOPER <br />
              BASED IN GHANA<span className="inline-block ml-2">🇬🇭</span>
            </h2>
            <p className="text-center text-gray-400 max-w-3xl mx-auto mb-8 font-work">
              I build modern, responsive, and user-friendly web applications using the latest technologies and best
              practices.
            </p>
            <div className="flex justify-center mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="animated-link flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-work"
                >
                  Learn more about me <span className="material-icons">arrow_forward</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">FULL-STACK WEB DEVELOPMENT SERVICES</h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="skill-card hover:transform hover:scale-105 transition-all duration-300"
                variants={item}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="tech-icon">
                    <FaReact />
                  </div>
                  <h3 className="text-xl font-bold font-oswald">Frontend Development</h3>
                </div>
                <p className="text-gray-400 font-work">
                  Building responsive and interactive user interfaces with modern frontend frameworks and libraries.
                </p>
              </motion.div>
              <motion.div
                className="skill-card hover:transform hover:scale-105 transition-all duration-300"
                variants={item}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="tech-icon">
                    <FaNodeJs />
                  </div>
                  <h3 className="text-xl font-bold font-oswald">Backend Development</h3>
                </div>
                <p className="text-gray-400 font-work">
                  Creating robust server-side applications with Node.js, Express, and other backend technologies.
                </p>
              </motion.div>
              <motion.div
                className="skill-card hover:transform hover:scale-105 transition-all duration-300"
                variants={item}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="tech-icon">
                    <FaDatabase />
                  </div>
                  <h3 className="text-xl font-bold font-oswald">Database Management</h3>
                </div>
                <p className="text-gray-400 font-work">
                  Designing and implementing efficient database solutions for web applications.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/skills"
                  className="animated-link flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-work"
                >
                  View all my services <span className="material-icons">arrow_forward</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">LATEST PROJECTS</h2>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="project-card group" variants={item} whileHover={{ y: -10 }}>
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=192&width=384" alt="Project 1" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 font-oswald">UG TUBE</h3>
                  <p className="text-gray-400 mb-4 font-work">
                    A video site for UG with modern features and user-friendly interface.
                  </p>
                  <div className="flex gap-2">
                    <span className="badge badge-primary">React</span>
                    <span className="badge badge-secondary">Node.js</span>
                    <span className="badge badge-accent">MongoDB</span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="project-card group" variants={item} whileHover={{ y: -10 }}>
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=192&width=384" alt="Project 2" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 font-oswald">Small Apps</h3>
                  <p className="text-gray-400 mb-4 font-work">
                    Landing page for launching apps with modern design and features.
                  </p>
                  <div className="flex gap-2">
                    <span className="badge badge-primary">Next.js</span>
                    <span className="badge badge-secondary">Tailwind CSS</span>
                    <span className="badge badge-accent">Framer Motion</span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="project-card group" variants={item} whileHover={{ y: -10 }}>
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=192&width=384" alt="Project 3" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 font-oswald">Hospital Management</h3>
                  <p className="text-gray-400 mb-4 font-work">
                    System to help hospital staff manage activities and patient records.
                  </p>
                  <div className="flex gap-2">
                    <span className="badge badge-primary">React</span>
                    <span className="badge badge-secondary">Express</span>
                    <span className="badge badge-accent">MySQL</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="animated-link flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-work"
                >
                  View all projects <span className="material-icons">arrow_forward</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">LET'S TALK</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-work">
              If you have a project in mind, I'd love to hear from you. Let's collaborate and create something amazing
              together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button3D variant="primary" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button3D>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

