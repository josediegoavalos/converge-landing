import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <SocialProof />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
