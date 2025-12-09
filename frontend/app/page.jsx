import { LandingNavbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { AboutSection } from "@/components/landing/about-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
