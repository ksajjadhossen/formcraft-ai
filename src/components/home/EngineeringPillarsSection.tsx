"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BarChart3, ShieldCheck, Database, Cpu } from "lucide-react";

const pillars = [
  {
    id: "ai-engine",
    badge: "01 / 04 — CORE AI",
    title: "Instant AI Form Generation",
    description:
      "Harnesses Google Gemini to translate abstract natural language descriptions into pristine, fully structured schema models instantly.",
    subText:
      "Natural language processing meets relational database architecture.",
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    stats: ["Google Gemini SDK", "Zod Validation", "Instant Schema"],
  },
  {
    id: "analytics",
    badge: "02 / 04 — INTELLIGENCE",
    title: "AI Sentiment & Analytics",
    description:
      "Aggregates user form submissions in real time to synthesize executive-level sentiment reports and crucial trend insights.",
    subText:
      "Gain deep, actionable insights from engagement metrics effortlessly.",
    icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
    stats: ["Real-time Tracking", "Sentiment Reports", "Engagement Metrics"],
  },
  {
    id: "security",
    badge: "03 / 04 — SECURITY",
    title: "Secure Auth & Monetization",
    description:
      "Integrates Clerk Auth for fine-grained user management alongside a fully verified Stripe Checkout and webhook subscription lifecycle.",
    subText: "Enterprise-grade security and automated billing pipelines.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    stats: ["Clerk Authentication", "Stripe Billing", "Encrypted Storage"],
  },
  {
    id: "architecture",
    badge: "04 / 04 — STACK",
    title: "Modern Type-Safe Architecture",
    description:
      "Built from the ground up leveraging Next.js 15 App Router, PostgreSQL (Neon Cloud), and Prisma ORM for optimized performance.",
    subText: "Designed for speed, scalability, and unmatched user experience.",
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    stats: ["Next.js 15", "PostgreSQL & Prisma", "Tailwind CSS"],
  },
];

export default function EngineeringPillarsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);
  const current = pillars[activeTab];

  const handleTabChange = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" />
          The 4 Engineering Pillars
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Intelligence is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
            not just a feature
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
          FormCraft AI turns how you build forms into a high-performance,
          automated production ecosystem.
        </p>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 pt-6">
          {pillars.map((pillar, idx) => (
            <button
              key={pillar.id}
              onClick={() => handleTabChange(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 border ${
                activeTab === idx
                  ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)] scale-105"
                  : "bg-white/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-500/50"
              }`}
            >
              {pillar.icon}
              {pillar.title.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Display */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Summary Card */}
        <div className="p-8 bg-white/70 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-xl dark:shadow-none">
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
              Legacy vs FormCraft
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Manual forms are holding you back
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Copying boilerplate layouts and managing legacy database rows
              lacks modern scalability and automated response intelligence.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
              Architecture Impact
            </span>
            <ul className="mt-2 space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                ✓ Zero manual schema setup
              </li>
              <li className="flex items-center gap-2">
                ✓ Instant public routing (/f/[id])
              </li>
              <li className="flex items-center gap-2">
                ✓ Type-safe Neon & Prisma stack
              </li>
            </ul>
          </div>
        </div>

        {/* Center & Right: Active Pillar Showcase with Framer Motion Slide Effect */}
        <div className="lg:col-span-2 relative p-8 md:p-10 bg-white/80 dark:bg-slate-900/70 rounded-2xl border border-purple-500/40 dark:border-purple-500/50 backdrop-blur-2xl shadow-[0_0_35px_rgba(168,85,247,0.15)] dark:shadow-[0_0_40px_rgba(168,85,247,0.25)] flex flex-col justify-between space-y-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/15 rounded-bl-full blur-3xl pointer-events-none" />

          {/* Framer Motion AnimatePresence for Smooth Left/Right Slide Transition */}
          <div className="relative min-h-[220px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-4 relative z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 tracking-wider">
                    {current.badge}
                  </span>
                  <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 shadow-inner">
                    {current.icon}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {current.title}
                </h3>

                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">
                Why this matters:
              </span>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                {current.subText}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {current.stats.map((stat, i) => (
                <span
                  key={i}
                  className="text-[11px] px-3 py-1 bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full font-medium border border-purple-500/20"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
