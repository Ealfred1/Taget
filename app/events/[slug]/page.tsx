"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Mock event data (replace with API/database in production)
const getEventData = (slug: string) => {
  const events = {
    "biggest-dao-event-uyo": {
      title: "Hosted the Biggest DAO Event in Uyo with Mprofy",
      date: "Nov 10-12, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Uyo Tech Hub, Uyo, Nigeria",
      eventType: "In-Person",
      icon: "📍",
      image: "/event1.png",
      description: `
        <p>Taget proudly hosted what they've dubbed the "biggest DAO event in Uyo" during Q1 2025. This event marks a significant milestone for the project, showcasing its ability to mobilize a community, foster collaboration, and spotlight decentralized autonomous organizations (DAOs) in a region that might not traditionally be seen as a hub for such cutting-edge concepts. The event likely drew a diverse crowd—enthusiasts, developers, educators, and global curious about decentralized systems—making it a landmark moment for both Taget and the broader DAO movement in Nigeria.</p>
        <p>Organizing a large-scale event requires meticulous planning, from securing a venue and speakers to marketing and logistics. Calling it the "biggest" suggests it surpassed expectations in attendance, impact, or scope compared to previous gatherings in Uyo. It's possible this event featured workshops, keynote speeches, or live demonstrations of DAO technologies, aiming to educate and inspire. Given Taget's focus on community and onboarding, this wasn't just a one-off spectacle—it was a launchpad for deeper engagement.</p>
      `,
      sections: [
        {
          title: "Collaboration with @MprofyDao",
          content:
            "The event was a partnership with @MprofyDao, a brand that seems to share Taget's vision for decentralization and community empowerment. While specific details about MprofyDao are scarce from the available data, we can infer it's a DAO-focused entity, likely involved in education, development, or advocacy within the decentralized space. The collaboration suggests a synergy of resources and expertise—MprofyDao might have brought technical know-how, a network of DAO practitioners, or even funding to the table, while Taget contributed its community-building prowess and local influence in Uyo.",
        },
        {
          title: "About MprofyDao",
          content:
            "Though not extensively documented here, MprofyDao's involvement hints at it being a player in the DAO ecosystem, possibly a decentralized organization itself or a group supporting DAO adoption. Its name could imply a focus on &quot;professional&quot; or &quot;proficient&quot; DAO frameworks, perhaps offering tools, governance models, or training. Partnering with Taget indicates MprofyDao values grassroots outreach, aligning with Taget's mission to onboard and enlighten. Together, they likely amplified the event's reach, blending MprofyDao's technical or strategic strengths with Taget's energetic, inclusive approach.",
        },
        {
          title: "Impact",
          content:
            "This event likely put Uyo on the map as an emerging hub for DAO innovation, sparking conversations about decentralization in a region rich with potential. It also solidified Taget's reputation as a leader capable of executing ambitious, community-driven initiatives.",
        },
      ],
    },
    "onboarding-phase-1": {
      title: "Massive Onboarding Phase 1 - Get welcomed into the Taget family",
      date: "October 15, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      eventType: "Webinar",
      icon: "💻",
      image: "/event2.png",
      description:
        "Join us for the first phase of our massive onboarding initiative. This virtual event will introduce you to the Taget ecosystem and help you get started on your journey into the world of decentralized autonomous organizations.",
      sections: [
        {
          title: "What to Expect",
          content:
            "During this virtual event, you'll be introduced to the core concepts of DAOs, the Taget platform, and how you can get involved in our community. Our team of experts will guide you through the onboarding process and answer any questions you may have.",
        },
        {
          title: "Who Should Attend",
          content:
            "This event is perfect for newcomers to the Web3 space, as well as experienced professionals looking to expand their knowledge of DAOs and decentralized systems. No prior experience is required, just a curiosity about the future of decentralized organizations.",
        },
        {
          title: "How to Prepare",
          content:
            "To make the most of this event, we recommend setting up a digital wallet beforehand. Don't worry if you're not sure how to do this - we'll provide resources and guidance during the event.",
        },
      ],
    },
    "q2-2025-prep": {
      title: "Q2 2025 Prep - Get ready for the Learning Phase",
      date: "October 20, 2025",
      time: "2:00 PM - 3:30 PM",
      location: "Taget Learning Center, Lagos",
      eventType: "Online",
      icon: "🌐",
      image: "/event3.png",
      description:
        "Prepare for our Q2 learning phase with this introductory session that will set you up for success in the coming months. This event will outline our curriculum, introduce our instructors, and provide you with all the resources you need to excel in your Web3 journey.",
      sections: [
        {
          title: "Curriculum Overview",
          content:
            "Get a sneak peek at our comprehensive Q2 curriculum, which covers everything from blockchain fundamentals to advanced DAO governance models. Our team will walk you through the learning path and highlight key milestones along the way.",
        },
        {
          title: "Meet the Instructors",
          content:
            "This session will introduce you to our team of expert instructors, each bringing unique expertise and experience in the Web3 space. You'll have the opportunity to ask questions and get to know the people who will be guiding your learning journey.",
        },
        {
          title: "Resource Distribution",
          content:
            "During this event, we'll distribute essential learning resources, including access to our online learning platform, reading materials, and practice exercises. These resources will be crucial for your success in the Q2 learning phase.",
        },
      ],
    },
  };

  return events[slug as keyof typeof events] || null;
};

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventData(params.slug);

  if (!event) {
    return (
      <main className="min-h-screen flex flex-col bg-white text-black">
        <div className="px-3">
          <Navbar />
          <div className="container-custom py-16 text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">Event Not Found</h1>
            <p className="mb-8 text-gray-800">The event you're looking for doesn't exist or has been removed.</p>
            <Link
              href="/events"
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors"
            >
              Back to Events
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

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
            {/* Hero Image */}
            <motion.div
              className="relative w-full h-96 md:h-[32rem] mb-8 rounded-xl overflow-hidden shadow-lg"
              variants={childVariants}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
              <motion.div
                className="absolute top-4 left-4 bg-black text-white text-sm font-bold px-3 py-1 rounded-full flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
              >
                <span>{event.icon}</span>
                <span>{event.eventType}</span>
              </motion.div>
            </motion.div>

            {/* Event Title */}
            <motion.div className="mb-8" variants={childVariants}>
              <h1 className="text-4xl md:text-5xl font-bold text-black">{event.title}</h1>
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
            </motion.div>

            {/* Metadata */}
            <motion.div className="flex flex-col gap-4 mb-12" variants={childVariants}>
              {[
                { label: "Date", value: event.date },
                { label: "Time", value: event.time },
                { label: "Location", value: event.location },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                  variants={childVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-bold text-black">{item.label}</h3>
                  <p className="text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div className="mb-12" variants={childVariants}>
              <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
                About the Event
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
              <div className="prose max-w-none text-gray-800">
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
            </motion.div>

            {/* Sections */}
            {event.sections &&
              event.sections.map((section, index) => (
                <motion.div
                  key={index}
                  className="mb-12"
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
                    {section.title}
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
                  <div className="prose max-w-none text-gray-800">
                    <p>{section.content}</p>
                  </div>
                </motion.div>
              ))}

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
              variants={childVariants}
            >
              <Link
                href="#"
                className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Registration functionality would be implemented here");
                }}
              >
                Register for Event
              </Link>
              <Link
                href="/events"
                className="bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200 transition-colors border border-gray-200 text-center"
              >
                Back to Events
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}