"use client"

import { motion } from "framer-motion"

interface PlanetProps {
  size: number
  orbitRadius: number
  speed: number
  color: string
  delay?: number
}

export const Planet: React.FC<PlanetProps> = ({ size, orbitRadius, speed, color, delay = 0 }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        top: `calc(50% - ${size / 2}px)`,
        left: `calc(50% - ${size / 2}px)`,
        animation: `orbit ${speed}s linear infinite`,
        transitionDelay: `${delay}s`,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-transparent"
        style={{
          background: `linear-gradient(45deg, ${color}, rgba(255, 255, 255, 0))`,
          animation: `spin ${speed * 2}s linear infinite`,
        }}
      />
    </motion.div>
  )
}
