"use client"

import { motion } from "framer-motion"
import { NavLink } from "@/components/ui/nav-link"
import { Button } from "@/components/ui/button"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ServiceCard } from "@/components/ui/service-card"
import { MouseLight } from "@/components/ui/mouse-light"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 to-black text-white">
      <MouseLight />
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <div className="text-2xl font-bold">PREMIUM WEBSITE</div>
          <nav className="flex items-center gap-8">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/services">SERVICES</NavLink>
            <NavLink href="/features">FEATURES</NavLink>
            <NavLink href="/contact">CONTACT</NavLink>
          </nav>
          <AnimatedButton 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10"
          >
            LOGIN
          </AnimatedButton>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32">
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative mx-auto max-w-7xl px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-8 text-center"
          >
            <h1 className="text-7xl font-bold tracking-tight">
              PREMIUM WEBSITE
            </h1>
            <h2 className="text-6xl font-bold tracking-wider">
              PREMIUM HEMO
            </h2>
            <p className="max-w-2xl text-lg text-white/80">
              Experience the future of web development with our premium solutions
            </p>
            <AnimatedButton
              size="lg"
              className="mt-8 bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              GET STARTED
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Hero Icons */}
        <div className="relative mx-auto mt-20 flex max-w-md justify-center gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="h-6 w-6 rounded-full bg-white/20" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services & Features Section */}
      <section className="bg-zinc-900/50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Services */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold"
              >
                SERVICES
              </motion.h2>
              <div className="flex flex-wrap gap-6">
                <ServiceCard
                  title="Logo Design"
                  description="Professional logo design services for your brand identity"
                  imageSrc="/placeholder.svg?height=160&width=240"
                />
                <ServiceCard
                  title="Website Monitor"
                  description="24/7 website monitoring and performance tracking"
                  imageSrc="/placeholder.svg?height=160&width=240"
                />
                <ServiceCard
                  title="Advanced Analytics"
                  description="Detailed insights and analytics for your website"
                  imageSrc="/placeholder.svg?height=160&width=240"
                />
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold"
              >
                FEATURES
              </motion.h2>
              <div className="flex flex-wrap gap-6">
                <ServiceCard
                  title="Automation"
                  description="Automated workflows and task management"
                  imageSrc="/placeholder.svg?height=160&width=240"
                />
                <ServiceCard
                  title="Mobile First"
                  description="Responsive design optimized for all devices"
                  imageSrc="/placeholder.svg?height=160&width=240"
                />
                <ServiceCard
                  title="Cloud Storage"
                  description="Secure cloud storage and backup solutions"
                  imageSrc="/placeholder.svg?height=160&width=240"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
