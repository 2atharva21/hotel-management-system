import { motion } from "framer-motion"

export function Testimonial({ quote, author, role }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-200 dark:bg-gray-600 w-10 h-10 mr-4"></div>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

