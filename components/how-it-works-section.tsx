"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

const creatorSteps = [
  "Create customized reward campaigns using XBlinks to engage your community",
  "Offer incentives and reward real engagement, avoiding bots and passive claims",
  "Use detailed analytics to optimize your engagement strategies",
];

const participantSteps = [
  "Click a blink, follow the instructions, connect your wallet, and claim rewards in one go",
  "Check in regularly to find posted rewards and participate easily",
  "Track your rewards participation, and never miss an alpha",
];

function BoxButton({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="relative w-full aspect-[501/170] group"
      whileHover={{ rotate: [-1, 1, -1, 1, 0] }}
      whileTap={{ rotate: [-2, 2, -2, 2, 0] }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="501"
        height="170"
        viewBox="0 0 501 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M499.337 126.253L455.843 168.603L1.66279 167.445V38.7989L33.5965 1.16279H499.337V126.253Z"
          fill={isActive ? "#90D8FB" : "white"}
          stroke="#151314"
          strokeWidth="2.32558"
        />
        <rect
          x="1.66279"
          y="39.5349"
          width="455.814"
          height="127.907"
          fill={isActive ? "#90D8FB" : "white"}
          stroke="#151314"
          strokeWidth="2.32558"
        />
        <path
          d="M499.337 1.16284L456.314 40.6977"
          stroke="#151314"
          strokeWidth="2.32558"
        />
      </svg>
      <motion.span
        className={`absolute text-2xl md:text-3xl lg:text-4xl font-bold text-[#151314] leading-[120%] ${inter.className}`}
        style={{
          left: "10%",
          top: "60%",
          transform: "translateY(-50%)",
          width: "80%",
          textAlign: "left",
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}

function Separator() {
  return (
    <div className="hidden md:block md:h-full">
      <svg
        width="3"
        height="100%"
        viewBox="0 0 3 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full"
      >
        <rect
          x="-0.75"
          y="0.75"
          width="1.5"
          height="398.5"
          transform="matrix(-1 0 0 1 1.5 0)"
          className="fill-[#0A0A0B] dark:fill-white stroke-[#0A0A0B] dark:stroke-white"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"creator" | "participant">(
    "creator"
  );
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="how-it-works"
      className={`py-24 px-4 sm:px-8 md:px-8 bg-[#fafafa] dark:bg-[#0a0a0b] ${inter.className}`}
    >
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-[#151314] dark:text-white"
        >
          How It Works
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8 max-w-7xl mx-auto min-h-[600px]">
          <div className="w-full md:w-[35%] flex flex-col gap-8 md:mt-[10%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full"
            >
              <BoxButton
                isActive={activeTab === "creator"}
                onClick={() => setActiveTab("creator")}
              >
                For Creators
              </BoxButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full"
            >
              <BoxButton
                isActive={activeTab === "participant"}
                onClick={() => setActiveTab("participant")}
              >
                For Participants
              </BoxButton>
            </motion.div>
          </div>

          <div className="hidden md:block md:h-full md:mt-[10%]">
            <Separator />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[55%] md:mt-[10%]"
            >
              <ul className="space-y-6">
                {(activeTab === "creator"
                  ? creatorSteps
                  : participantSteps
                ).map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-lg sm:text-xl text-[#151314] dark:text-white border border-[#151314] dark:border-white p-4 rounded-md"
                  >
                    {step}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
