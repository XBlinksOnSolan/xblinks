"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const features = [
  {
    title: "Blinks + X INTEGRATION",
    description: "Run your giveaway campaigns where your audience already is- on X (formerly twitter)",
    delay: 0,
  },
  {
    title: "REAL-TIME TRACKING",
    description: "Monitor participation and progress live without ever leaving the platform",
    delay: 0.2,
  },
  {
    title: "NO REDIRECTS",
    description: "Complete reward tasks directly within the unfurling blink link, simple and fast",
    delay: 0.4,
  },
]

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Features
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="relative group"
            >
              <div className="bg-white dark:bg-[#252525] p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#08a0e9] dark:hover:border-[#08a0e9] transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-[#08a0e9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

