import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  badge: string;
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  badge,
}: StatsCardProps) {
  return (
    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs transition-all hover:border-purple-500/30">
      <div className="flex justify-between items-start">
        <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-lg">
          {icon}
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md border border-slate-200/50 dark:border-slate-700/50">
          {badge}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
          {value}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
