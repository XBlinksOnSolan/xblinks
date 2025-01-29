import React from "react";
import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { BrandCarousel } from "@/components/brand-carousel";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { GiveawaysSection } from "@/components/giveaways-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0b]">
      <NavBar />
      <HeroSection />
      <BrandCarousel />
      <FeaturesSection />
      <HowItWorksSection />
      <GiveawaysSection />
      <Footer />
    </main>
  );
}
