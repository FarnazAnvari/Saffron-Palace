import HeroSection from "@/components/HeroSection";
import MenuPreview from "@/components/MenuPreview";
import FeatureHighlight from "@/components/FeatureHighlight";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 ">
      <HeroSection />
      <MenuPreview />
      <FeatureHighlight />
      <AboutSection />
    </main>
  );
}
