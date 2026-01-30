import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MassageSection from "./sections/MassageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutrutionSection from "./sections/NutrutionSection";
import BenifitsSection from "./sections/BenifitsSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MassageSection />
          <FlavorSection />
          <NutrutionSection />
          <BenifitsSection/>
          <div className=" h-dvh border border-red-500" />
        </div>
      </div>
    </main>
  );
};

export default App;
