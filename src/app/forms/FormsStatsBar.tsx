import { Search } from "lucide-react";

interface FormsStatsBarProps {
  totalForms: number;
}

export default function FormsStatsBar({ totalForms }: FormsStatsBarProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2 relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Search forms by title..."
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.05] transition-all backdrop-blur-xl"
        />
      </div>
      <div className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
        <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
          Total Forms
        </span>
        <span className="text-lg font-bold text-purple-400">{totalForms}</span>
      </div>
    </div>
  );
}
