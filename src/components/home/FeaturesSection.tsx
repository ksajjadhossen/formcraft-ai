import { Zap, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    title: "Instant AI Generation",
    description:
      "Convert text prompts into fully structured, ready-to-use form fields instantly using Gemini AI.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
    title: "Real-time Analytics",
    description:
      "Monitor submission rates, track user engagement, and gain deep insights effortlessly.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Secure & Reliable",
    description:
      "Built on an enterprise-grade stack with encrypted storage and seamless authentication.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* section header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group p-8 bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl backdrop-blur-xl space-y-4 hover:border-purple-500/50 hover:bg-white dark:hover:bg-slate-900/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
          >
            <div className="p-3.5 bg-slate-100 dark:bg-slate-800/80 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
              {feature.title}
            </h4>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
