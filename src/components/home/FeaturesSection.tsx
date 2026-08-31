import { Zap, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    title: "Instant AI Generation",
    description:
      "Convert text prompts into fully structured, ready-to-use form fields instantly using Gemini AI.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    title: "Real-time Analytics",
    description:
      "Monitor submission rates, track user engagement, and gain deep insights effortlessly.",
  },
  {
    icon: (
      <ShieldCheck className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
    ),
    title: "Secure & Reliable",
    description:
      "Built on an enterprise-grade stack with encrypted storage and seamless authentication.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden">
      {/* Background Soft Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* section header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">
          Core Capabilities
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Everything you need to build forms smarter
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Designed for speed, scalability, and unmatched user experience.
        </p>
      </div>

      {/* features cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group relative p-8 bg-white/80 dark:bg-slate-900/60 rounded-xl backdrop-blur-2xl space-y-4 border border-purple-500/40 dark:border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.15)] dark:shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] dark:hover:shadow-[0_0_45px_rgba(168,85,247,0.5)] transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Icon Wrapper */}
            <div className="p-3.5 bg-slate-100 dark:bg-slate-800/90 rounded-lg w-fit border border-slate-200 dark:border-slate-700/60 group-hover:scale-110 group-hover:bg-purple-500/10 dark:group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
              {feature.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
