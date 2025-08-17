"use client"

import Image from "next/image"

export default function Partners() {
  const partners = [
    { name: "VIVE", logo: "/Vive.svg" },
    { name: "Oculus", logo: "/Oculus.svg" },
    { name: "Mprofy", logo: "/Mprofy.svg" },
    { name: "Unity", logo: "/Unity.svg" },
  ]

  // Create two identical sets for seamless looping
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-8 sm:py-12 border-b overflow-hidden">
      <div className="relative">
        <div
          className="flex animate-marquee"
          style={{
            width: `${partners.length * 400}px`, // Total width for both sets
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-8 sm:px-12 flex items-center justify-center hover:scale-105 transition-transform duration-200"
              style={{ width: "400px" }}
            >
              <div className="relative w-full h-16">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain object-center"
                  sizes="400px"
                  priority={index < partners.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
