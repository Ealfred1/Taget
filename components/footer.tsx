"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    // Here you would typically send the email to your backend
    setEmail("")
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold inline-block">
            <Image src="/logo.svg" alt="Taget Logo" className="invert mx-auto md:mx-0" width={80} height={24} />
          </Link>
            <p className="text-sm">Building the future, one target at a time.</p>
          </div>

          <div className="">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 hover:text-white">
                Twitter
                <br />
                @yourtaget
              </li>
              <li className="text-sm text-gray-400 hover:text-white">
                Email
                <br />
                info@tagetproject.com
              </li>
            </ul>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="font-bold mb-4">Join our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex max-w-[300px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-white text-black px-3 py-2 rounded-l-md w-full"
                required
              />
              <button type="submit" className="bg-black border rounded-r-[6px] px-4 py-2 hover:bg-gray-700 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>
            © 2025 Taget. All rights reserved |{" "}
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
