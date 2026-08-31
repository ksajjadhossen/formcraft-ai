import SpinningWheel from "./SpinningWheel";
import {
  Video,
  Award,
  HelpCircle,
  Lock,
  Sparkles,
  Route,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

export default function EvolutionSection() {
  const coursePlatforms = [
    { icon: Video, title: "Static video playlists" },
    { icon: Award, title: "Binary percentage certificates" },
    { icon: HelpCircle, title: "Zero abandonment support" },
    { icon: Lock, title: "Unchecked job readiness" },
  ];

  const aiPowered = [
    { icon: Sparkles, title: "AI Skill Gap Analysis" },
    { icon: Route, title: "Personalized Learning Roadmap" },
    { icon: TrendingUp, title: "Career Trajectory Insights" },
    { icon: ShieldAlert, title: "Adaptive AI Guidance" },
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          The Evolution of{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
            Career Learning.
          </span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          From static course libraries to an AI companion that maps, verifies
          and adapts your entire career growth.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Side Card: Course Platforms */}
        <div className="lg:col-span-4 relative group rounded-2xl p-0.5 overflow-hidden shadow-xl flex flex-col">
          {/* Conic Gradient Border Light */}
          <div
            className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0_340deg,#a855f7_360deg)] animate-spin-slow opacity-80"
            style={{ animationDuration: "6s" }}
          />

          {/* Top Running Glowing Dot (Purple) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-purple-500 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute -top-1 left-1/4 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-ping" />

          {/* Bottom Running Glowing Dot (Purple) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-purple-500 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute -bottom-1 right-1/4 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7] animate-ping" />

          <div className="relative z-10 p-6 md:p-8 rounded-[14px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl space-y-6 flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-4">
              Course platforms
            </h3>
            <div className="space-y-4 my-auto">
              {coursePlatforms.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center: Continuous Spinning Wheel Component */}
        <div className="lg:col-span-4 flex justify-center items-center py-6 lg:py-0">
          <SpinningWheel />
        </div>

        {/* Right Side Card: AI Powered Features */}
        <div className="lg:col-span-4 relative group rounded-2xl p-0.5 overflow-hidden shadow-xl flex flex-col">
          {/* Conic Gradient Border Light */}
          <div
            className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)] animate-spin-slow opacity-80"
            style={{ animationDuration: "6s" }}
          />

          {/* Top Running Glowing Dot (Blue) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute -top-1 left-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6] animate-ping" />

          {/* Bottom Running Glowing Dot (Blue) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full blur-[2px] animate-pulse" />
          <div className="absolute -bottom-1 right-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6] animate-ping" />

          <div className="relative z-10 p-6 md:p-8 rounded-[14px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl space-y-6 flex-1 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 border-b border-slate-200 dark:border-slate-800 pb-4">
              AI Powered
            </h3>
            <div className="space-y-4 my-auto">
              {aiPowered.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-slate-800 dark:text-slate-200 text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
