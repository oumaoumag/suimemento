import Header from "@/components/Header"
import Hero from "@/components/Hero"
import FeaturedEvents from "@/components/FeaturedEvents"
import HowItWorks from "@/components/HowItWorks"
import Stats from "@/components/Stats"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <FeaturedEvents />
      <HowItWorks />
      <Footer />
    </div>
  )
}
