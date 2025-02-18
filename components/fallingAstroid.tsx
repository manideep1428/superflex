"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export function FallingAsteroid() {
  const [asteroids, setAsteroids] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [particles, setParticles] = useState<Particle[]>([])

  // Generate new asteroid at random intervals
  useEffect(() => {
    const createNewAsteroid = () => {
      const newAsteroid = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: -100,
      }
      setAsteroids((prev) => [...prev, newAsteroid])

      // Schedule next asteroid
      const nextDelay = 2000 + Math.random() * 3000 // Random delay between 2-5 seconds
      setTimeout(createNewAsteroid, nextDelay)
    }

    createNewAsteroid()
  }, [])

  // Update asteroid positions and create particles
  useEffect(() => {
    const interval = setInterval(() => {
      setAsteroids((prevAsteroids) => {
        return prevAsteroids
          .map((asteroid) => ({
            ...asteroid,
            y: asteroid.y + 5, // Fall speed
          }))
          .filter((asteroid) => asteroid.y < window.innerHeight + 100)
      })

      // Generate particles for each asteroid
      asteroids.forEach((asteroid) => {
        const newParticles: Particle[] = Array.from({ length: 3 }, (_, i) => ({
          id: Date.now() + i,
          x: asteroid.x,
          y: asteroid.y,
          size: Math.random() * 4 + 2,
          opacity: 1,
        }))

        setParticles((prev) => [...prev, ...newParticles])
      })

      // Update particles
      setParticles((prevParticles) =>
        prevParticles
          .map((particle) => ({
            ...particle,
            y: particle.y + 2,
            opacity: particle.opacity - 0.05,
            size: particle.size * 0.95,
          }))
          .filter((particle) => particle.opacity > 0),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [asteroids])

  return (
    <>
      {/* Render asteroids */}
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          className="absolute z-10"
          style={{
            x: asteroid.x,
            y: asteroid.y,
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {/* Asteroid rock shape */}
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 40 40" className="transform -rotate-45">
              <path d="M20 0L30 10L40 20L30 30L20 40L10 30L0 20L10 10Z" className="fill-gray-700" />
            </svg>

            {/* Green glow effect */}
            <div className="absolute inset-0 bg-green-500/30 blur-md rounded-full" />
          </div>
        </motion.div>
      ))}

      {/* Render particles for flame trail */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            x: particle.x + Math.random() * 20 - 10,
            y: particle.y,
            width: particle.size,
            height: particle.size * 2,
            opacity: particle.opacity,
          }}
        >
          {/* Flame particle */}
          <div
            className="w-full h-full rounded-full bg-gradient-to-b from-green-300 via-green-500 to-transparent"
            style={{
              boxShadow: "0 0 10px #10B981, 0 0 20px #10B981, 0 0 30px #10B981",
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

