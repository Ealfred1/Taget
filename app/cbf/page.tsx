"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function CBF() {
  // Animation for community count
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 200, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [count]);

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

  // Animation for arrows
  const arrowVariants = {
    hidden: { opacity: 0, scaleX: 0.1 },
    visible: {
      opacity: 1,
      scaleX: 2,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden w-full bg-white text-black">
      <div className="px-3">
        <Navbar />

        {/* Hero Section */}
        <motion.section
          className="py-12 md:py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-8" variants={childVariants}>

                <motion.div className="space-y-4" variants={childVariants}>
                  <h1 className="text-5xl bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent md:text-[70px] font-bold leading-tight">
                    Campus Blockchain Fusion (CBF)
                  </h1>
                  <p className="text-lg text-gray-800">
                    Uniting Web3 communities across campuses to shape the
                    decentralized future.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
                <Link href="/join" className="btn-primary w-[181px] h-[60px] rounded-[12px] bg-[#0D0D0D] text-white flex items-center justify-center">
                    Get Involved Now
                </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                variants={childVariants}
              >
                <div className="aspect-square max-w-md mx-auto">
                  <Image
                    src="/cbf.png" // Replace with your CBF hero image
                    alt="CBF Hero Image"
                    width={525}
                    height={525}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <div className="container-custom">
          {/* What is CBF? */}
          <motion.div className="mb-16" variants={childVariants}>
            <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
              What is CBF?
              <motion.div
                className="ml-4 w-24"
                variants={arrowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={96}
                  height={24}
                  className="w-full h-6 object-contain"
                />
              </motion.div>
            </h2>
            <p className="text-lg font-light mb-6 text-gray-800">
              Campus Blockchain Fusion (CBF) powered by TAGET is a dynamic and
              thoughtfully curated community dedicated to simplifying the
              onboarding and education of Web3 enthusiasts. Designed to make the
              journey into blockchain seamless, CBF guides newcomers through the
              diverse landscape of on-chain projects, groups, and networks. For
              seasoned tech enthusiasts, it deepens and expands expertise in Web3,
              fostering a stronger, more connected community of innovators ready to
              shape the decentralized future. This birthed the campus event
              ‘Uniuyo Blockchain Fusion’.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: "🤝",
                  title: "Collaboration",
                  desc: "Working together to build the future",
                },
                {
                  icon: "💡",
                  title: "Innovation",
                  desc: "Pushing the boundaries of Web3",
                },
                {
                  icon: "📚",
                  title: "Accessibility",
                  desc: "Making blockchain available to all",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  variants={childVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="font-bold mb-2 text-black">{value.title}</h3>
                  <p className="font-light text-gray-800">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* History & Impact */}
          <motion.div className="mb-16" variants={childVariants}>
            <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
              History & Impact
              <motion.div
                className="ml-4 w-24"
                variants={arrowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={96}
                  height={24}
                  className="w-full h-6 object-contain"
                />
              </motion.div>
            </h2>
            <div className="space-y-8">
              {[
                {
                  date: "Q1 2025",
                  title: "Uniuyo Blockchain Fusion",
                  desc: "Hosted the largest DAO event in Uyo with 100+ participants",
                },
                {
                  date: "Q2 2025",
                  title: "Expansion to More Campuses",
                  desc: "Partnered with 5 universities, onboarded 500 students",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  variants={childVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-24 text-right pr-4 font-bold text-gray-800">
                    {event.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black">{event.title}</h3>
                    <p className="font-light text-gray-800">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div className="mb-16" variants={childVariants}>
            <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
              Upcoming Events
              <motion.div
                className="ml-4 w-24"
                variants={arrowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={96}
                  height={24}
                  className="w-full h-6 object-contain"
                />
              </motion.div>
            </h2>
            <div className="p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <p className="text-lg font-light text-gray-800">
                All events are hosted under Taget so head over to{" "}
                <Link
                  href="/events"
                  className="underline hover:text-black transition-colors"
                >
                  Events Page
                </Link>
              </p>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div className="mb-16" variants={childVariants}>
            <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
              FAQ
              <motion.div
                className="ml-4 w-24"
                variants={arrowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={96}
                  height={24}
                  className="w-full h-6 object-contain"
                />
              </motion.div>
            </h2>
            <div className="space-y-4">
              {[
                {
                  question: "Who can attend?",
                  answer: "Students, developers, and Web3 enthusiasts.",
                },
                {
                  question: "Is it free?",
                  answer: "Yes, CBF events are free to attend.",
                },
                {
                  question: "How are speakers selected?",
                  answer: "Based on expertise and community nominations.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  variants={childVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-black">{faq.question}</h3>
                  <p className="font-light text-gray-800">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Get in Touch */}
          <motion.div variants={childVariants}>
            <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
              Get in Touch
              <motion.div
                className="ml-4 w-24"
                variants={arrowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={96}
                  height={24}
                  className="w-full h-6 object-contain"
                />
              </motion.div>
            </h2>
            <p className="text-lg font-light mb-4 text-gray-800">
              Want to bring CBF to your campus?{" "}
              <Link
                href="/#contact"
                className="underline hover:text-black transition-colors"
              >
                Contact us
              </Link>
              .
            </p>
          </motion.div>
        </div>

      </div>
        <Footer />
    </main>
  );
}