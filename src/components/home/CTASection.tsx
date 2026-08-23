import Link from "next/link";
import { Wand2, Crown } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="relative overflow-hidden p-10 md:p-16 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-50 to-slate-100 dark:from-purple-900/40 dark:via-indigo-900/30 dark:to-slate-900/60 border border-purple-200 dark:border-purple-500/30 text-center space-y-6 backdrop-blur-2xl shadow-xl">
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-125 h-75 bg-purple-400/20 dark:bg-purple-600/30 blur-[140px] rounded-full"></div>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-2xl mx-auto leading-tight">
          Ready to scale your workflow with{" "}
          <span className="text-purple-600 dark:text-purple-400">AI</span>?
        </h2>

        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
          Start for free and seamlessly upgrade to our Pro plans as your form
          creation, team collaboration, and data analytics needs grow.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/create-form"
            className="inline-flex items-center gap-2.5 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-purple-600/30 transition-all active:scale-95"
          >
            <Wand2 className="w-5 h-5" /> Start Free Today
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-xl text-base font-bold border border-slate-300 dark:border-slate-800 shadow-md transition-all"
          >
            <Crown className="w-5 h-5 text-amber-500" /> Explore Pro Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
