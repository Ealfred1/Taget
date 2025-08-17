import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Partners from "@/components/partners"
import WhoWeAre from "@/components/who-we-are"
import WhyJoin from "@/components/why-join"
import Events from "@/components/events"
import ContactForm from "@/components/contact-form"
import JoinCommunity from "@/components/join-community"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <div className="px-3">
        <Navbar />
        <Hero />
      </div>
      <Partners />

      <div id="about" className="h-full flex flex-row w-full">
        <WhoWeAre />
      </div>

      <WhyJoin />
      <Events />

      <span id="contact">
        <ContactForm />
      </span>
      
      <JoinCommunity />
      <Footer />
    </main>
  )
}
