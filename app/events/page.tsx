"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function EventsPage() {
  const featuredEvents = [
    {
      title: "Hosted the Biggest DAO Event in Uyo with Mprofy",
      date: "Nov 10-12, 2025",
      time: "3:00 PM - 5:00 PM",
      eventType: "In-Person",
      icon: "📍",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "biggest-dao-event-uyo",
      description:
        "Join us for the largest DAO event in Uyo, featuring workshops, keynote speeches, and networking opportunities.",
    },
    {
      title: "Massive Onboarding Phase 1",
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM",
      eventType: "Webinar",
      icon: "💻",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "onboarding-phase-1",
      description:
        "Get welcomed into the Taget family with our comprehensive onboarding program designed to introduce you to the world of DAOs.",
    },
    {
      title: "Q2 2025 Prep",
      date: "October 20, 2025",
      time: "2:00 PM - 3:30 PM",
      eventType: "Online",
      icon: "🌐",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "q2-2025-prep",
      description:
        "Prepare for our Q2 learning phase with this introductory session that will set you up for success in the coming months.",
    },
  ];

  const pastEvents = [
    {
      title: "Web3 Workshop Series",
      date: "December 5-7, 2025",
      time: "10:00 AM - 4:00 PM",
      eventType: "Hackathon",
      icon: "⚒️",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "web3-workshop-series",
      description: "A three-day intensive workshop series covering the fundamentals of Web3 technologies.",
    },
    {
      title: "DAO Governance Forum",
      date: "January 15, 2026",
      time: "1:00 PM - 6:00 PM",
      eventType: "In-Person",
      icon: "📍",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "dao-governance-forum",
      description: "Explore the intricacies of DAO governance models and best practices with industry experts.",
    },
    {
      title: "Blockchain Developer Bootcamp",
      date: "February 10-28, 2026",
      time: "9:00 AM - 5:00 PM",
      eventType: "Hackathon",
      icon: "⚒️",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GljBxADpIqB11BABvKAC4bg58t5iv2.png",
      slug: "blockchain-developer-bootcamp",
      description:
        "An intensive bootcamp for aspiring blockchain developers, covering smart contracts, dApps, and more.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden w-full bg-white text-black">
      <div className="px-3">
        <Navbar />
        <motion.section
          className="py-12 md:py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container-custom">
            {/* Header */}
            <motion.div className="mb-12" variants={childVariants}>
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                Taget Web3 Events
              </h1>
              <motion.div
                className="mt-4 w-32"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src="/arrow.png"
                  alt="Arrow"
                  width={128}
                  height={24}
                  className="w-full h-6 object-contain"
                />
              </motion.div>
              <p className="text-lg text-gray-800 max-w-3xl mt-4">
                Dive into the future of blockchain with Taget’s events—hackathons, webinars, and in-person summits designed to empower Web3 innovators.
              </p>
            </motion.div>

            {/* Featured Events */}
            <motion.div className="mb-16" variants={childVariants}>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
                Featured Events
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
              <div className="flex flex-col gap-8">
                {featuredEvents.map((event, index) => (
                  <motion.div
                    key={event.slug}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-1/3 aspect-[4/3]">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <motion.div
                          className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span>{event.icon}</span>
                          <span>{event.eventType}</span>
                        </motion.div>
                      </div>
                      <div className="p-6 flex-1 space-y-4">
                        <h3 className="text-xl font-bold text-black">{event.title}</h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                        </div>
                        <p className="text-gray-800">{event.description}</p>
                        <Link
                          href={`/events/${event.slug}`}
                          className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors w-full md:w-48"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Past Events */}
            <motion.div className="mb-16" variants={childVariants}>
              <h2 className="text-3xl font-bold mb-6 flex items-center text-black">
                Past Events
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
              <div className="flex flex-col gap-8">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={event.slug}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-1/3 aspect-[4/3]">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <motion.div
                          className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-2"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span>{event.icon}</span>
                          <span>{event.eventType}</span>
                        </motion.div>
                      </div>
                      <div className="p-6 flex-1 space-y-4">
                        <h3 className="text-xl font-bold text-black">{event.title}</h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{event.date}</span>
                          <span>{event.time}</span>
                        </div>
                        <p className="text-gray-800">{event.description}</p>
                        <Link
                          href={`/events/${event.slug}`}
                          className="block text-center bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors w-full md:w-48"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}