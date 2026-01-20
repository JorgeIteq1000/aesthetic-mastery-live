import { Hero } from "@/components/sections/Hero";
import { LiveClass } from "@/components/sections/LiveClass";
import { SupportMaterial } from "@/components/sections/SupportMaterial";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <LiveClass />
      <SupportMaterial />
      <Footer />
    </main>
  );
};

export default Index;
