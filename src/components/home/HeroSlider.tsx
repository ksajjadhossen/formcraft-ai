"use client";

import { useState, useEffect } from "react";
import HeroSlider from "./HeroSlider";
import HeroButtons from "./HeroButtons";
import HeroCards from "./HeroCards";

const heroSlides = [
  {
    badge: "Next-Gen AI Form Builder",
    titlePart1: "Build Intelligent Forms in",
    titleHighlight: "Seconds with AI",
    description:
      "Stop building forms manually. Start free with Gemini AI form generation or upgrade to Pro for advanced analytics and higher limits.",
  },
  {
    badge: "Powered by Gemini AI",
    titlePart1: "Generate Smart Surveys in",
    titleHighlight: "A Single Prompt",
    description:
      "Type what kind of form you need, and our advanced AI engine structures fields, validations, and logic instantly.",
  },
  {
    badge: "Seamless Data Export",
    titlePart1: "Collect Responses & Export",
    titleHighlight: "Instantly to Sheets",
    description:
      "Manage form submissions effortlessly, analyze results in real-time, and export data with a single click.",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-16 px-4 space-y-8">
      {/* Background Glowing Effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-125 h-87.5 bg-purple-600/15 dark:bg-purple-600/25 blur-[160px] rounded-full animate-pulse"></div>
      </div>

      {/* Hero Text & Badge Slider */}
      <HeroSlider
        currentSlide={currentSlide}
        slides={heroSlides}
        onDotClick={(index) => setCurrentSlide(index)}
      />

      {/* Call to Action Buttons */}
      <HeroButtons />

      {/* Feature Preview Cards */}
      <HeroCards />
    </div>
  );
}
