"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Planet } from "./components/planet"
import { Asteroid } from "./components/asteroid"
import { SpaceBackground } from "./components/space-background"
import { FallingAsteroid } from "./components/falling-asteroid"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const navItems = ["Home", "Portfolio", "Projects", "About", "Contact"]

  const parallaxY = useTransform(scrollY, [0, 1000], [0, -400])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      <FallingAsteroid />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-green-500/20">
        {/* Navigation content from previous version */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white relative group"
            >
              <span className="relative z-10">PLANEST</span>
              <div className="absolute inset-0 bg-green-500/20 blur-lg group-hover:bg-green-500/30 transition-colors duration-300" />
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-green-400 relative group px-3 py-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.a>
              ))}
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-500">
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Planets */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: parallaxY }}
      >
        {/* Planets */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Planet size={200} orbitRadius={300} speed={0.5} color="#10B981" />
          <Planet size={100} orbitRadius={200} speed={-0.8} delay={0.2} color="#059669" />
          <Planet size={50} orbitRadius={400} speed={1.2} delay={0.4} color="#34D399" />
          <Planet size={75} orbitRadius={500} speed={-0.3} delay={0.6} color="#6EE7B7" />
        </div>

        {/* Asteroids */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Asteroid key={i} delay={i * 2000} />
        ))}

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600"
          >
            PLANEST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg mb-8"
          >
            Explore the extraordinary universe of digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button className="bg-green-500 hover:bg-green-600 text-black">Portfolio</Button>
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/20">
              Discover
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="relative bg-black/50 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/50 p-6 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors duration-300"
            >
              <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                <motion.div
                  className="absolute inset-0 bg-green-500/10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 border-2 border-green-500/50 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </motion.div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-500 mb-2">{item}</h3>
              <p className="text-gray-400 text-sm">
                Experience the future of digital innovation through our carefully crafted solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

