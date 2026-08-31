"use client";

import { LogIn, MessageSquareText, DownloadCloud } from "lucide-react";

export default function FeatureFlow() {
  const steps = [
    {
      icon: LogIn,
      title: "Sign In",
      desc: "Quick access",
    },
    {
      icon: MessageSquareText,
      title: "AI Typing",
      desc: "Prompt to form",
    },
    {
      icon: DownloadCloud,
      title: "Export & Share",
      desc: "Instant publish",
    },
  ];

  return (
    <section className="w-full py-16 px-4 overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="hidden md:block absolute top-1/2 left-16 right-16 -translate-y-1/2 h-0.5 bg-linear-to-r from-purple-500/10 via-purple-500 to-purple-500/10 z-0 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex items-center gap-2.5 bg-white/80 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 px-4 py-2 rounded-full shadow-lg dark:shadow-purple-950/30 transition-transform hover:scale-105 duration-300"
              >
                <div className="text-purple-600 dark:text-purple-400">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs">
                  <span className="font-medium text-slate-900 dark:text-slate-100">
                    {step.title}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">·</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {step.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
