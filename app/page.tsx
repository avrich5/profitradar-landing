import { 
  HeroSectionRedesign,
  ProblemSectionRedesign,
  SolutionSectionRedesign,
  DatasetSectionRedesign
} from "@/components/b2c-redesign"
import { FooterB2C } from "@/components/shared/footer-b2c"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trade with Pro Confidence - your profit radar calibrated with AI",
  description: "AI trained on its own dataset of causal reasoning with millions of backtests. Shows over 90% accuracy during validation.",
}


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSectionRedesign />
      <ProblemSectionRedesign />
      <SolutionSectionRedesign />
      <DatasetSectionRedesign />
      {/* The Proof section - add later */}
      <FooterB2C />
    </main>
  )
}
