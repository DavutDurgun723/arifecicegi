import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HakkimizdaSection from "@/components/HakkimizdaSection";
import BirimlerSection from "@/components/BirimlerSection";
import FaaliyetlerSection from "@/components/FaaliyetlerSection";
import GununAyetiSection from "@/components/GununAyetiSection";
import EgitimlerSection from "@/components/EgitimlerSection";
import IletisimSection from "@/components/IletisimSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HakkimizdaSection />
        <BirimlerSection />
        <FaaliyetlerSection />
        <GununAyetiSection />
        <EgitimlerSection />
        <IletisimSection />
      </main>
      <Footer />
    </>
  );
}
