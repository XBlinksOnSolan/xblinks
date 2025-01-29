"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    title: "For Creators",
    items: [
      "Create customized reward campaigns using XBlinks to engage your community",
      "Offer incentives and reward real engagement, avoiding bots and passive claims",
      "Use detailed analytics to optimize your engagement strategies",
    ],
  },
  {
    title: "For Participants",
    items: [
      "Participate in campaigns seamlessly through X",
      "Earn rewards for genuine engagement and participation",
      "Track your progress and rewards in real-time",
    ],
  },
]

export function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-[#151314]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          How It Works
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="space-y-6"
            >
              <div className="bg-[#08a0e9] text-white px-6 py-3 rounded-md inline-block">
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <ul className="space-y-4">
                {step.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + itemIndex * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="bg-[#08a0e9]/20 text-[#08a0e9] rounded-full p-1 mt-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

