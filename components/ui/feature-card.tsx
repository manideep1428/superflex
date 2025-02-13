import { motion } from "framer-motion"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
}

export function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 rounded-lg bg-black/5 p-6 backdrop-blur-sm"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={150}
        height={150}
        className="rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  )
}
