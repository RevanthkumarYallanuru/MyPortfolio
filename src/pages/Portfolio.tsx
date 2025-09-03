import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PostsSection } from "@/components/sections/PostsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Portfolio = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PostsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};