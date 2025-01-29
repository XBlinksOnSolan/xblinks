"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function GiveawaysSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="giveaways" className="py-24 bg-gray-50 dark:bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Giveaways
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Transform how you connect with your audience on X.
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              xblinks makes rewarding engagement easy, personalized, and
              seamless. Ready to blink?
            </p>
            <button className="bg-[#08a0e9] text-white px-6 py-3 rounded-md hover:bg-[#08a0e9]/90 transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-[#08a0e9] to-[#6acbfa] p-1 rounded-lg">
              <div className="bg-white dark:bg-[#252525] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Collect Sol Airdrop Giveaway
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Provide proof of attendance and collect your reward! Valid for
                  the first 100 people.
                </p>
                <p className="text-[#08a0e9] mb-6">Reward: 0.050 SOL</p>
                <button className="w-full bg-[#08a0e9] text-white px-4 py-2 rounded-md hover:bg-[#08a0e9]/90 transition-colors">
                  Collect reward
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
