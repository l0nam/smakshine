import { BeautyCard } from "@/components/sections/BeautyCard";
import { FAQ } from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import { ImageSlider } from "@/components/sections/ImageSlider";
import MainSection from "@/components/sections/Main";

export default function HomePage() {
  return (
    <div>
      <MainSection />
      <Features />
      <ImageSlider />
      <FAQ />
      <BeautyCard />
    </div>
  );
}
