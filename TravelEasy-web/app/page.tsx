import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { SmartPackingWidget } from '@/components/smart-packing-widget'
import { KnowledgeFeed } from '@/components/knowledge-feed'
import { FinalCTASection } from '@/components/final-cta-section'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background-secondary">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SmartPackingWidget />
      <KnowledgeFeed />
      <FinalCTASection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
