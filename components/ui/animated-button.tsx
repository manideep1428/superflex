"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./button"
import type { ButtonProps } from "./button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="relative">
      {/* Ripple effect */}
      {isPressed && (
        <motion.div
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        />
      )}
      
      {/* Hover rings */}
      <motion.div
        initial={false}
        animate={isPressed ? { scale: 1.1, opacity: 0 } : { scale: 1, opacity: 1 }}
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          className="absolute inset-0 rounded-full opacity-25 blur-sm"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)"
          }}
        />
      </motion.div>

      <Button
        {...props}
        className={className}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      >
        <motion.span
          animate={isPressed ? { scale: 0.95 } : { scale: 1 }}
          className="relative z-10"
        >
          {children}
        </motion.span>
      </Button>
    </div>
  )
}
