import Link from "next/link";
import { Wand2, Crown } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col items-center space-y-3 pt-4">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Link
          href="/create-form"
          className="inline-flex items-center gap-2.5 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-purple-600/30 transition-all active:scale-95 group"
        >
          <Wand2 className="w-5 h-5 transition-transform group-hover:rotate-12" />{" "}
          Start Free with AI
        </Link>

        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 px-8 py-4 rounded-xl text-base font-bold border border-slate-300 dark:border-purple-500/40 hover:border-purple-500 backdrop-blur-sm transition-all shadow-lg"
        >
          <Crown className="w-5 h-5 text-amber-500" /> View Pro Plans
        </Link>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        No credit card required for free tier • Powered by Google Gemini API
      </p>
    </div>
  );
}
