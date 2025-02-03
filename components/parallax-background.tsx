"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <motion.div
      className="absolute inset-0 z-[-1]"
      style={{
        backgroundImage: "url('/placeholder.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        y,
      }}
    />
  )
}

