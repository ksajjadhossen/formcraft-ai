import { Sparkles, Cpu, BarChart3, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Write a Prompt",
      desc: "Describe what kind of form you need in plain English to get started instantly.",
      icon: Sparkles,
      badge: "Natural Language",
      accent: "from-purple-500/20 to-blue-500/20",
    },
    {
      num: "02",
      title: "AI Generation",
      desc: "Gemini structures inputs, dropdowns, and text areas automatically within seconds.",
      icon: Cpu,
      badge: "Gemini Neural Core",
      accent: "from-blue-500/20 to-emerald-500/20",
    },
    {
      num: "03",
      title: "Collect & Analyze",
      desc: "Share your live form link and track user responses and analytics in real-time.",
      icon: BarChart3,
      badge: "Real-time Telemetry",
      accent: "from-emerald-500/20 to-purple-500/20",
    },
  ];

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-[11px] font-bold uppercase tracking-wider">
          <Sparkles
            className="w-3 h-3 animate-spin"
            style={{ animationDuration: "8s" }}
          />
          Simple Process
        </div>
        <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          How it works in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
            3 easy steps
          </span>
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          From a simple idea to a fully functioning form effortlessly.
        </p>
      </div>

      {/* Fancy Cards Grid with ScreenShot Style Unique Cutouts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-purple-500/10 via-slate-900/40 to-blue-500/10 p-[1px] rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              {/* Inner Card Content */}
              <div
                className="h-full p-8 bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl flex flex-col justify-between space-y-6"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 23px) 0, 100% 23px, 100% 100%, 0 100%)",
                }}
              >
                {/* Top Row: Icon & Step Number */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
                    {step.num}
                  </span>
                </div>

                {/* Badge & Title */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">
                    {step.badge}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide pt-1">
                    {step.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Interactive Indicator */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                    Explore Phase <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
