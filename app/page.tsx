import { HeroSection } from "@/components/b2c/hero-section"
import { OpportunitySection } from "@/components/b2c/opportunity-section"
import { SolutionSection } from "@/components/b2c/solution-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OpportunitySection />
      <SolutionSection />
      {/* More sections will be added here */}
    </main>
  )
}
