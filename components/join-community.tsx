import Link from "next/link"

export default function JoinCommunity() {
  return (
    <section className="py-16 w-full flex items-center justify-center text-white px-4 sm:px-0">
      <div className="bg-black w-full max-w-[1220px] h-[234px] flex items-center justify-center flex-col rounded-[32px] text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 px-4">Join Our Community</h2>
        <Link
          href="#"
          className="inline-block bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          Join Us
        </Link>
      </div>
    </section>
  )
}