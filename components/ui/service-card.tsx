import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./button"

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-[240px] flex-col gap-2 rounded-lg bg-black/20 p-4 backdrop-blur-sm"
    >
      <div className="relative h-[160px] w-full overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
      <Button 
        variant="outline" 
        className="mt-2 w-fit border-white/20 text-white hover:bg-white/10"
      >
        Learn More
      </Button>
    </motion.div>
  )
}
