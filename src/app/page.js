import Image from "next/image";
import HeroSection from "@/app/components/HeroSection";
import NavBar from "@/app/components/NavBar";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
          <div className="container mt-24 mx-auto px-12 py-4">
              <NavBar />
              <HeroSection />

          </div>

    </main>
  );
}
