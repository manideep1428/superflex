"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MouseLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-soft-light"
      animate={{
        background: `radial-gradient(
          600px circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(255, 255, 255, 0.15),
          rgba(255, 255, 255, 0) 80%
        )`
      }}
    />
  )
}
