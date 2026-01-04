import type { Metadata } from "next"
import { DatasetHeroSection } from "@/components/b2b-dataset/hero-section"
import { DatasetProblemSection } from "@/components/b2b-dataset/problem-section"
import { DataArchitectureSection } from "@/components/b2b-dataset/architecture-section"
import { ScaleProofSection } from "@/components/b2b-dataset/scale-proof-section"
import { QualityControlSection } from "@/components/b2b-dataset/quality-control-section"
import { IntegrationSection } from "@/components/b2b-dataset/integration-section"

export const metadata: Metadata = {
  title: "ProfitRadar Empirical Dataset - Ground AI Trading Decisions in Reality",
  description: "Gain a 6-month head start. Dataset built on millions of real trades for training hallucination-free AI advisors. 96.9% accuracy. Ready for fine-tuning.",
}

export default function DatasetPage() {
  return (
    <main className="min-h-screen">
      <DatasetHeroSection />
      <DatasetProblemSection />
      <DataArchitectureSection />
      <ScaleProofSection />
      <QualityControlSection />
      <IntegrationSection />
    </main>
  )
}
