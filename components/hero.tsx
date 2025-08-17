"use client"

import Link from "next/link"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

export default function Hero() {
  const count = useMotionValue(0)
  const roundedCount = useTransform(count, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, 200, {
      duration: 2,
      ease: "easeOut"
    })

    return () => controls.stop()
  }, [count])

  return (
    <section className="py-12 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                <Image src="/user1.jpg" alt="Community Member 1" width={37} height={37} className="rounded-full border-2 border-[#000000]" />
                <Image src="/user2.jpg" alt="Community Member 2" width={37} height={37} className="rounded-full border-2 border-[#000000]" />
                <Image src="/user3.jpg" alt="Community Member 3" width={37} height={37} className="rounded-full border-2 border-[#000000]" />
              </div>
              <div className="flex space-x-6">
                <div>
                  <motion.p className="text-xl font-bold">
                    <motion.span>{roundedCount}</motion.span>+
                  </motion.p>
                  <p className="text-xs">Community</p>
                </div>
                <div>
                  <p className="text-xl font-bold">7+</p>
                  <p className="text-xs">Partners</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 className="text-5xl bg-gradient-to-r from-[#11101D] to-[#797886] bg-clip-text text-transparent md:text-[70px] font-bold leading-tight">Set Your Targets with Taget</h1>
              <p className="text-lg text-[#0D0D0D]">
                Empowering communities, igniting innovation, and building a decentralized future—one milestone at a
                time.
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
              <div className="relative w-full h-full">
            <div className="aspect-square max-w-md mx-auto">
              <Image src="/hero.svg" alt="Hero Image" width={525} height={525} />
                </div> 
              </div> 
          </motion.div>
        </div>
      </div>
    </section>
  )
}