"use client"
import { motion } from "framer-motion"

interface AsteroidProps {
  delay: number
}

export const Asteroid: React.FC<AsteroidProps> = ({ delay }) => {
  const size = Math.random() * 30 + 20; // Random size between 20 and 50
  const startX = Math.random() * window.innerWidth; // Random starting X position
  const endY = window.innerHeight + Math.random() * 200; // End position below the screen with random distance

  return (
    <motion.div
      className="absolute"
      style={{
        top: -50,
        left: startX,
        width: size,
        height: size,
        backgroundImage: "url('/asteriod.png')", // Use the asteroid image from the public folder
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        opacity: 1, // Start fully visible
      }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: endY, opacity: 0 }} // Move downwards and fade out
      transition={{ duration: 3, delay, ease: "linear" }}
    />
  )
}
