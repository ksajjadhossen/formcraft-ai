import { Bot, Layers, Zap } from "lucide-react";

export default function HeroCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full pt-8">
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Bot className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Gemini AI Engine
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Instant smart form generation
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Layers className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Smart Export
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Export responses seamlessly
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
          <Zap className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
            Lightning Fast
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Ready in less than 5 seconds
          </p>
        </div>
      </div>
    </div>
  );
}
