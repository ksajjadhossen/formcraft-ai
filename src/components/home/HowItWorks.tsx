export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Write a Prompt",
      desc: "Describe what kind of form you need in plain English to get started instantly.",
    },
    {
      num: "02",
      title: "AI Generation",
      desc: "Gemini structures inputs, dropdowns, and text areas automatically within seconds.",
    },
    {
      num: "03",
      title: "Collect & Analyze",
      desc: "Share your live form link and track user responses and analytics in real-time.",
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-slate-200/80 dark:border-slate-800/80">
      {/* section header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">
          Simple Process
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          How it works in 3 easy steps
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          From a simple idea to a fully functioning form effortlessly.
        </p>
      </div>

      {/* steps cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group relative p-8 bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl backdrop-blur-xl space-y-4 hover:border-purple-500/50 hover:bg-white dark:hover:bg-slate-900/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black text-purple-600 dark:text-purple-400 tracking-wider">
                {step.num}
              </span>
              <div className="w-8 h-px bg-purple-500/30 group-hover:w-16 transition-all duration-300"></div>
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">
              {step.title}
            </h4>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
