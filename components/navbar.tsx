"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Animation variants for mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.3 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-0 md:py-4">
      <div className="md:container-custom">
        <div
          className={`
            flex items-center justify-between border-b border-black bg-white/80 backdrop-blur-md
            px-4 sm:px-6 md:px-14 md:rounded-full md:border
            py-3
          `}
        >
          {/* Logo */}
          <Link href="/" className="text-2xl font-medium">
            <Image
              src="/logo.svg"
              alt="Taget Logo"
              width={80}
              height={24}
              className="w-14 sm:w-16 md:w-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {[
              { href: "/", label: "Home", active: pathname === "/" },
              { href: "/#about", label: "About Us", active: pathname === "/about" },
              {
                href: "/events",
                label: "Events",
                active: pathname === "/events" || pathname.startsWith("/events/"),
              },
              { href: "/cbf", label: "CBF", active: pathname === "/cbf" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-light text-black hover:text-gray-600 transition-colors ${
                  item.active ? "font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/#contact"
              className="bg-black text-white px-4 py-2 rounded-[12px] text-base font-light hover:bg-gray-800 transition-colors w-[107px] h-[51px] flex items-center justify-center"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-black rounded transition-all duration-300 ${
                  isMenuOpen ? "top-2.5 rotate-45" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-black rounded transition-all duration-300 top-2.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 w-6 h-0.5 bg-black rounded transition-all duration-300 ${
                  isMenuOpen ? "top-2.5 -rotate-45" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-[60px] left-0 right-0 h-screen bg-white/90 backdrop-blur-md border-t border-black"
            // For half-page menu, replace h-screen with h-1/2
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {[
                { href: "/", label: "Home", active: pathname === "/" },
                { href: "/#about", label: "About Us", active: pathname === "/about" },
                {
                  href: "/events",
                  label: "Events",
                  active: pathname === "/events" || pathname.startsWith("/events/"),
                },
                { href: "/cbf", label: "CBF", active: pathname === "/cbf" },
              ].map((item) => (
                <motion.div key={item.href} variants={menuItemVariants}>
                  <Link
                    href={item.href}
                    className={`text-xl font-medium text-black hover:text-gray-600 transition-colors ${
                      item.active ? "font-bold" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/#contact"
                  className="bg-black text-white px-6 py-3 rounded-[12px] text-base font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}