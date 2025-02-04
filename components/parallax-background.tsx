"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ParallaxBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

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

