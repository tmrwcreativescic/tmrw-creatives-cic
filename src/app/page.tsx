import { Hero } from "@/components/home/Hero"
import { AboutSection } from "@/components/home/AboutSection"
import { ProgrammesSection } from "@/components/home/ProgrammesSection"
import { ManifestoBlock } from "@/components/home/ManifestoBlock"
import { NewsGrid } from "@/components/home/NewsGrid"
import { TestimonialSection } from "@/components/home/TestimonialSection"
import { CTASection } from "@/components/home/CTASection"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgrammesSection />
      <ManifestoBlock />
      <NewsGrid />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
