import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import NavBar from "@/app/components/NavBar";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mt-24 mx-auto px-12 py-4">
              <NavBar />
              <HeroSection />
              <AchievementsSection />
              <AboutSection />
              <ProjectsSection />
              <EmailSection />
              <Footer />
          </div>

    </main>
  );
}
