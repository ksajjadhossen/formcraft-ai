"use client";

import { Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aiko",
    role: "Design Engineer",
    company: "Vercel",
    content:
      "Skill Proof Graph completely changed how I present myself to recruiters. No more just saying I know React, I can actually prove it with verified evidence.",
  },
  {
    name: "Kinpe Zhukova",
    role: "Software Engineer",
    company: "Vercel",
    content:
      "Learning debt was holding me back without me even realizing it. AI Pather diagnosed my gaps and helped me unblock myself. Best career investment ever.",
  },
  {
    name: "Lisa Kemp",
    role: "Frontend Developer",
    company: "Vercel",
    content:
      "The Job Reality Check feature saved me so much time. I knew exactly what skills I was missing for the roles I wanted, and I didn't get rejected for being unprepared.",
  },
  {
    name: "Saud",
    role: "Game Developer",
    company: "Vercel",
    content:
      "Adaptive recovery is a game-changer! Whenever I fall behind because of a busy week, I do the smart 4-day catch-up plan and get me right back on track.",
  },
];

export default function TestimonialsSection() {
  const duplicatedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  return (
    <section className="w-full py-24 md:py-32 overflow-hidden relative">
      {/* Background Glow Effect matching your theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Verified Success Stories
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          What Our Learners Say About{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Their Journey
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Join thousands of professionals who have eliminated their learning
          debt and built a verifiable career profile.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden group py-4">
        {/* Smooth Gradient Edges (Adapts to Light/Dark mode seamlessly) */}
        <div className="absolute left-0 top-0 bottom-0 w-28 md:w-52 bg-linear-to-r from-(--bg-main) to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-28 md:w-52 bg-linear-to-l from-(--bg-main) to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex gap-6 animate-marquee shrink-0 items-stretch">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-85 sm:w-100 p-7 rounded-3xl bg-white/70 dark:bg-white/3 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-xl shadow-slate-900/5 dark:shadow-none shrink-0 transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 group/card"
            >
              {/* Quote Content */}
              <div className="space-y-3">
                <div className="text-purple-600 dark:text-purple-400 font-serif text-3xl leading-none select-none">
                  &ldquo;
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {item.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200/60 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs shadow-md shadow-purple-500/20">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Company Tag */}
                <span className="text-[11px] font-extrabold text-slate-400 dark:text-slate-300 tracking-wider flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  ▲ {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
