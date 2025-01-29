"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black text-white dark:bg-transparent dark:border-t border-[#089fe9]/20">
      <div ref={ref} className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Transform how you connect with your audience on X.
            </h2>
            <p className="text-gray-400">
              xblinks makes rewarding engagement easy, personalized, and
              seamless. Ready to blink?
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-[#089fe9] text-white px-6 py-3 rounded-md hover:bg-[#089fe9]/90 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-[#089fe9] to-[#b5e5fc] p-1 rounded-lg">
              <div className="bg-black rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Collect Sol Airdrop Giveaway
                </h3>
                <p className="text-gray-400 mb-4">
                  Provide proof of attendance and collect your reward! Valid for
                  the first 100 people.
                </p>
                <p className="text-[#089fe9] mb-6">Reward: 0.050 SOL</p>
                <button className="w-full bg-[#089fe9] text-white px-4 py-2 rounded-md hover:bg-[#089fe9]/90 transition-colors">
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
