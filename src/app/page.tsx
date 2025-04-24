import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { SkillsSection } from "@/components/sections/skills"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col antialiased">
      <Header />
      <Toaster />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
