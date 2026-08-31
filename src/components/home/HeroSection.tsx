"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Crown,
  Wand2,
  Lightbulb,
  Headphones,
  Zap,
  Rocket,
} from "lucide-react";

const heroContent = [
  {
    id: 0,
    badge: "Smart AI Generation",
    title: "Build Intelligent Forms in Seconds with AI",
    subtitle:
      "Stop building forms manually. Let Gemini AI generate advanced forms, logic, and fields instantly using conversational prompts.",
    cardTitle: "Smart Flow",
    cardDesc: "AI driven logic",
    icon: Lightbulb,
    bgImage: "/image1.jpg",
  },
  {
    id: 1,
    badge: "Real-time Experience",
    title: "Live Preview & Instant Customization",
    subtitle:
      "Watch your forms take shape in real-time. Customize fields, themes, and layouts seamlessly with our live interactive builder.",
    cardTitle: "Live Preview",
    cardDesc: "Real-time sync",
    icon: Headphones,
    bgImage: "/image2.jpg",
  },
  {
    id: 2,
    badge: "Gemini Powered Engine",
    title: "Advanced Data Collection Powered by AI",
    subtitle:
      "Leverage state-of-the-art AI intelligence to handle complex user submissions, automated tagging, and smart categorization.",
    cardTitle: "Instant AI",
    cardDesc: "Gemini intelligence",
    icon: Zap,
    bgImage: "/image3.jpg",
  },
  {
    id: 3,
    badge: "High-Performance SaaS",
    title: "Fast Deploy & Enterprise Analytics",
    subtitle:
      "Launch your forms with a single click. Monitor user responses, view conversion analytics, and scale your business effortlessly.",
    cardTitle: "Fast Deploy",
    cardDesc: "One-click scaling",
    icon: Rocket,
    bgImage: "/image4.jpg",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleCardHover = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  const activeData = heroContent[currentIndex];

  return (
    <div className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center pt-32 pb-12 px-4 bg-slate-100 dark:bg-[#09090f] transition-colors duration-700">
      {/* ================================
          Dynamic Glassy Background Image
      ================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden w-full h-full">
        {heroContent.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 h-full w-full bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentIndex === index
                ? "opacity-85 dark:opacity-75 scale-100 filter brightness-100"
                : "opacity-0 scale-105 filter brightness-95"
            }`}
            style={{
              backgroundImage: `url(${item.bgImage})`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-white/45 backdrop-blur-[3px] dark:bg-[#09090f]/65 transition-colors duration-700" />
      </div>

      {/* ================================
          Purple Glow Effect
      ================================= */}
      <div className="pointer-events-none absolute inset-0 z-1 flex items-center justify-center">
        <div className="h-87.5 w-150 animate-pulse rounded-full bg-purple-600/15 dark:bg-purple-600/25 blur-[150px] transition-all duration-1000" />
      </div>

      {/* ================================
          Main Hero Content
      ================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center space-y-4 text-center">
        {/* Badge */}
        <div className="flex h-9 items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/60 dark:bg-purple-500/20 px-4 py-1.5 text-sm font-medium text-purple-900 dark:text-purple-200 shadow-sm backdrop-blur-md transition-all duration-500">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="transition-opacity duration-300">
              {activeData.badge}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="flex h-25 w-full max-w-4xl items-center justify-center px-2 md:h-30">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 transition-all duration-700 ease-in-out md:text-5xl dark:text-white drop-shadow-sm">
            {activeData.title.split("with AI")[0]}

            {activeData.title.includes("with AI") && (
              <span className="text-purple-700 dark:text-purple-400">
                with AI
              </span>
            )}
          </h1>
        </div>

        {/* Subtitle */}
        <div className="flex h-12.5 w-full max-w-2xl items-center justify-center px-2 md:h-15">
          <p className="text-sm font-normal leading-relaxed text-slate-700 dark:text-slate-300 transition-all duration-700 ease-in-out md:text-base drop-shadow-sm">
            {activeData.subtitle}
          </p>
        </div>

        {/* ================================
            Feature Cards
        ================================= */}
        <div className="w-full max-w-5xl pb-1 pt-2">
          <div className="flex items-center justify-center gap-3 overflow-x-auto px-2 md:overflow-visible">
            {heroContent.map((card, index) => {
              const isActive = currentIndex === index;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => handleCardHover(index)}
                  onClick={() => handleCardHover(index)}
                  className={`relative h-36 w-28 shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-500 md:h-48 md:w-36 ${
                    isActive
                      ? "z-25 scale-105 border-purple-600 dark:border-purple-500 opacity-100 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                      : "border-slate-300 dark:border-slate-800 opacity-70 hover:scale-105 hover:opacity-100"
                  }`}
                >
                  {/* Card Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage: `url(${card.bgImage})`,
                    }}
                  />

                  {/* Card Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent transition-opacity duration-500" />

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-2 text-left">
                    <span className="block truncate text-[11px] font-bold text-white md:text-xs">
                      {card.cardTitle}
                    </span>

                    <span className="block truncate text-[9px] text-purple-300 md:text-[10px]">
                      {card.cardDesc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================
            Buttons
        ================================= */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/create-form"
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 px-7 py-3 text-sm font-bold text-white shadow-xl shadow-purple-600/20 transition-all duration-300 active:scale-95"
          >
            <Wand2 className="h-4 w-4" />
            Start Free
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 dark:border-slate-700 bg-white/70 dark:bg-[#1a1a24]/90 backdrop-blur-md px-7 py-3 text-sm font-bold text-slate-900 dark:text-white shadow-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-[#232332]"
          >
            <Crown className="h-4 w-4 text-amber-500" />
            View Pro Plans
          </Link>
        </div>

        {/* Footer Text */}
        <p className="pt-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
          No credit card required for free tier • Powered by Formcraft AI
        </p>
      </div>
    </div>
  );
}
