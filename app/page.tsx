import { 
  HeroSectionRedesign,
  ProblemSectionRedesign,
  SolutionSectionRedesign,
  DatasetSectionRedesign
} from "@/components/b2c-redesign"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSectionRedesign />
      <ProblemSectionRedesign />
      <SolutionSectionRedesign />
      <DatasetSectionRedesign />
      {/* The Proof section - add later */}
    </main>
  )
}
