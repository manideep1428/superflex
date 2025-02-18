"use client"

import { FlameParticleSystem } from "@/components/falamingAs"

export const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black to-green-900 opacity-80 overflow-hidden">
      {/* Render flame particles */}
      <FlameParticleSystem x={window.innerWidth / 2} y={window.innerHeight} />
      
      {/* Render stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white opacity-50"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </div>
  )
}