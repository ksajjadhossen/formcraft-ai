"use client";

interface PricingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export default function PricingToggle({
  isYearly,
  setIsYearly,
}: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center mb-16">
      <div className="relative p-1 bg-slate-100 dark:bg-slate-900/90 rounded-full border border-slate-200 dark:border-slate-800 flex items-center shadow-inner">
        <button
          onClick={() => setIsYearly(false)}
          className={`relative z-10 px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
            !isYearly
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`relative z-10 px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
            isYearly
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/30"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          <span>Yearly</span>
          <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/30">
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
}
