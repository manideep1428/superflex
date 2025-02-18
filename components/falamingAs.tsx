"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FlameParticle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  velocity: {
    x: number
    y: number
  }
}

export function FlameParticleSystem({ x, y }: { x: number; y: number }) {
  const [particles, setParticles] = useState<FlameParticle[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Create new particles
      const newParticle: FlameParticle = {
        id: Date.now(),
        x,
        y,
        size: Math.random() * 6 + 2,
        opacity: 1,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: -Math.random() * 2 - 1,
        },
      }

      setParticles((prev) => [...prev, newParticle])

      // Update existing particles
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            size: particle.size * 0.95,
            opacity: particle.opacity - 0.02,
          }))
          .filter((particle) => particle.opacity > 0),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [x, y])

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size * 1.5,
            opacity: particle.opacity,
          }}
        >
          <div
            className="w-full h-full rounded-full bg-gradient-to-t from-green-500 via-green-400 to-green-300"
            style={{
              boxShadow: "0 0 15px #10B981, 0 0 25px #059669",
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

