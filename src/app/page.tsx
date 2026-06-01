import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/Experience";
import { SkillsSection } from "@/components/sections/Skills";
import { OrkaFeaturedSection } from "@/components/sections/OrkaFeatured";
import { ProjectsSection } from "@/components/sections/Projects";
import { AchievementsSection } from "@/components/sections/Achievements";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex flex-col items-center w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <OrkaFeaturedSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
