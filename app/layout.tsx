import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Taget - Set Goals, Learn, Grow",
  description:
    "Empowering communities, igniting innovation, and building a decentralized future—one milestone at a time.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} pt-20`}>{children}</body>
    </html>
  )
}
