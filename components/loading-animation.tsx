"use client"

import { motion } from "framer-motion"

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

