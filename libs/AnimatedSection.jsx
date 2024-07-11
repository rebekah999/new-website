import { motion } from 'framer-motion'

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: '10%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        opacity: { duration: 0.8, ease: 'easeInOut' },
        y: { duration: 0.4, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  )
}
