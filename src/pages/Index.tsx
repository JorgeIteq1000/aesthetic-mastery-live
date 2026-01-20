import { Hero } from "@/components/sections/Hero";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { LiveClass } from "@/components/sections/LiveClass";
import { SupportMaterial } from "@/components/sections/SupportMaterial";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Benefits } from "@/components/sections/Benefits";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <WhatYouLearn />
      <LiveClass />
      <SupportMaterial />
      <TargetAudience />
      <Benefits />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
