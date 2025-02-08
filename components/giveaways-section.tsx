"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useEffect } from "react";
import { GiveawayGraphic } from "./giveaway-graphic";
import GetStartedButton from "./get-started-button";
import { BackgroundGrid } from "./BackgroundGrid";

export function GiveawaysSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    console.log("GiveawaysSection rendered");
  }, []);

  return (
    <section
      id="giveaways"
      className="py-24 px-4 sm:px-8 md:px-8 bg-[#fafafa] dark:bg-[#0a0a0b]  relative overflow-hidden"
    >
      <BackgroundGrid />
      <div className="container mx-auto px-4 relative z-10 ">
        {/* <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-[#151314] dark:text-[#fafafa]"
        >
          Giveaways
        </motion.h2> */}

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#151314] dark:text-[#fafafa]">
              Transform how you connect with your audience on X
            </h3>
            <p className="text-[#433e3f] dark:text-[#90d8fb]">
              xblinks makes rewarding engagement easy, personalized, and
              seamless. Ready to blink?
            </p>
            {/* <Link
              href="/get-started"
              className="inline-block bg-[#90d8fb] text-[#151314] px-6 py-3 rounded-md hover:bg-[#90d8fb]/90 transition-colors"
            >
              Get Started
            </Link> */}
            <GetStartedButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <GiveawayGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
