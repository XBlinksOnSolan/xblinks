"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircularText } from "./circular-text";
import { CurvedArrow } from "./curved-arrow";
import GetStartedButton from "./get-started-button";
import { GridLines } from "./grid-lines";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen px-4 sm:px-8 md:px-8 bg-white dark:bg-[#151314] relative overflow-hidden mb-0"
    >
      <GridLines position="top" />
      <motion.div
        className="relative pt-40 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1300px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-medium tracking-tight text-[#433e3f] dark:text-[#ffffff] leading-none mb-16">
              Customizable rewards
              <br />
              on X using <span className="text-[#08a0e9]">Blinks</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 md:gap-20 max-w-5xl mx-auto items-center">
              <div className="relative flex flex-col items-center md:items-start text-center md:text-left h-full justify-center">
                <p className="text-[#433e3f] dark:text-[#ffffff] text-lg font-light italic">
                  Customizable rewards made easy,
                  <br />
                  using Solana&apos;s innovative blinks
                  <br />
                  solution
                </p>
                <div className="mt-8 flex items-center">
                  <GetStartedButton />
                  <div className="w-48 h-48 md:w-56 md:h-56 ml-3 -mt-[160px] relative z-0">
                    <CurvedArrow className="w-full h-full" />
                  </div>
                </div>
              </div>

              <div className="relative mt-12 md:mt-0 flex items-center justify-center h-full">
                <CircularText />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
