"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Animation for the arrow
  const arrowVariants = {
    hidden: { opacity: 0, scaleX: 0.1 }, // Start highly compressed horizontally
    visible: {
      opacity: 1,
      scaleX: 3, // Stretch significantly to fill space
      transition: {
        duration: 1.2, // Single, smooth animation
        ease: "easeOut",
        delay: 0.6, // Stagger after text
      },
    },
  };

  return (
    <motion.section
      className="pt-0 pb-16 bg-black text-white relative px-4 sm:px-0 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/WHO WE ARE.svg"
          alt="WHO WE ARE"
          width={1440}
          height={170}
          className="w-full"
          priority
        />
      </div>

      <div className="container-custom mt-[100px] sm:mt-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 text-center md:text-left w-full">
            <motion.h3
              className="text-[32px] sm:text-[48px] font-bold"
              variants={childVariants}
            >
              Welcome to Taget
            </motion.h3>
            <motion.div
              className="flex justify-center md:justify-start w-full max-w-[300px]" // Wider container for stretch
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/arrow.png" // Adjust path to your custom arrow PNG
                alt="Arrow"
                width={128} // Base width (will stretch via scaleX)
                height={24} // Matches h-6
                className="w-full h-6 object-contain"
                priority
              />
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.p
              className="text-lg font-[300]"
              variants={childVariants}
            >
              Taget is more than a project—it's a movement. We're a community-driven initiative focused on onboarding,
              educating, and empowering individuals in the world of decentralised organisations (DAOs) and beyond.
              Partnering with innovators like @MprofyDao, we're breaking barriers and setting new targets for what's
              possible.
            </motion.p>
            <motion.p
              className="text-lg font-[300]"
              variants={childVariants}
            >
              In Q1 2025 alone, we hosted the largest DAO event in Uyo, kicked off a massive onboarding phase, and laid
              the groundwork for a learning revolution. Ready to join us?
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}