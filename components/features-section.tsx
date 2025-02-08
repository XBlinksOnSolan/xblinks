"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "blinks + x integration",
    description:
      "Run your giveaway campaigns where your audience already is- on X (formerly twitter)",
  },
  {
    title: "real-time tracking",
    description:
      "Monitor participation and progress live without ever leaving the platform",
  },
  {
    title: "no redirects",
    description:
      "Complete reward tasks directly within the unfurling blink link, simple and fast",
  },
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-8 md:px-8 bg-white dark:bg-[#151314]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Features
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:flex md:justify-center md:items-start gap-8 md:gap-0 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative aspect-[449/389] w-full md:w-1/3 ${
                index === 0
                  ? "md:mr-[5px] lg:mr-[10px]"
                  : index === 1
                  ? "md:mt-[15%]"
                  : ""
              }`}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 449 389"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <mask id={`path-1-inside-1_468_119_${index}`} fill="white">
                  <path d="M35 0H449V355H35V0Z" />
                </mask>
                <path d="M35 0H449V355H35V0Z" fill="#B5E5FC" />
                <path
                  d="M35 0V-1H34V0H35ZM449 0H450V-1H449V0ZM449 355V356H450V355H449ZM35 355H34V356H35V355ZM35 1H449V-1H35V1ZM448 0V355H450V0H448ZM449 354H35V356H449V354ZM36 355V0H34V355H36Z"
                  fill="black"
                  mask={`url(#path-1-inside-1_468_119_${index})`}
                />
                <mask id={`path-3-inside-2_468_119_${index}`} fill="white">
                  <path d="M18 20H432V375H18V20Z" />
                </mask>
                <path d="M18 20H432V375H18V20Z" fill="#DAF2FE" />
                <path
                  d="M18 20V19H17V20H18ZM432 20H433V19H432V20ZM432 375V376H433V375H432ZM18 375H17V376H18V375ZM18 21H432V19H18V21ZM431 20V375H433V20H431ZM432 374H18V376H432V374ZM19 375V20H17V375H19Z"
                  fill="black"
                  mask={`url(#path-3-inside-2_468_119_${index})`}
                />
                <mask id={`path-5-inside-3_468_119_${index}`} fill="white">
                  <path d="M0 34H414V389H0V34Z" />
                </mask>
                <path d="M0 34H414V389H0V34Z" fill="#0A0A0B" />
                <path
                  d="M0 34V33H-1V34H0ZM414 34H415V33H414V34ZM414 389V390H415V389H414ZM0 389H-1V390H0V389ZM0 35H414V33H0V35ZM413 34V389H415V34H413ZM414 388H0V390H414V388ZM1 389V34H-1V389H1Z"
                  fill="black"
                  mask={`url(#path-5-inside-3_468_119_${index})`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pl-[2%]">
                <div className="w-full p-4 pr-6 md:p-4 lg:p-6 xl:p-8">
                  <h3 className="text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-3 tracking-wide leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-300 font-light leading-snug sm:leading-normal md:leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
