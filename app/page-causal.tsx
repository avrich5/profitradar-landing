import { HeroSectionCausal } from "@/components/b2c/hero-section-causal"
import { ProblemSectionCausal } from "@/components/b2c/problem-section-causal"
import { SolutionSectionCausal } from "@/components/b2c/solution-section-causal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSectionCausal />
      <ProblemSectionCausal />
      <SolutionSectionCausal />
      {/* More sections will be added here */}
    </main>
  )
}
