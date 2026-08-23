"use client";

import Link from "next/link";
import { Sparkles, Crown, Wand2 } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-16 px-4 space-y-6">
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-200 h-125 bg-purple-600/10 dark:bg-purple-600/20 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium backdrop-blur-md shadow-inner">
        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
        <span>Next-Gen AI Form Builder</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight drop-shadow-sm">
        Build Intelligent Forms in{" "}
        <span className="relative inline-block text-purple-600 dark:text-purple-400 px-2">
          <span className="relative z-10">Seconds with AI</span>
          <svg
            className="absolute left-0 w-full -bottom-2.5 h-5 text-purple-500 pointer-events-none overflow-visible"
            viewBox="0 0 200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16C50 6 140 4 195 12"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              className="[stroke-dasharray:200] [stroke-dashoffset:200] animate-draw"
            />
            <path
              d="M20 9C70 4 130 5 180 8"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="[stroke-dasharray:200] [stroke-dashoffset:200] animate-draw-delayed"
            />
          </svg>
        </span>
      </h1>

      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
        Stop building forms manually. Start free with Gemini AI form generation
        or upgrade to Pro for advanced analytics and higher limits.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
        <Link
          href="/create-form"
          className="inline-flex items-center gap-2.5 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-purple-600/30 transition-all active:scale-95"
        >
          <Wand2 className="w-5 h-5" /> Start Free
        </Link>

        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-xl text-base font-bold border border-slate-300 dark:border-purple-500/40 hover:border-purple-500 backdrop-blur-sm transition-all shadow-lg"
        >
          <Crown className="w-5 h-5 text-amber-500" /> View Pro Plans
        </Link>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
        No credit card required for free tier • Cancel anytime
      </p>

      <style jsx>{`
        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: drawLine 1.2s ease-in-out infinite alternate;
        }
        .animate-draw-delayed {
          animation: drawLine 1.2s ease-in-out 0.3s infinite alternate;
        }
      `}</style>
    </div>
  );
}
