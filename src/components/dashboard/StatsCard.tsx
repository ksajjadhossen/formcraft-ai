export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  badge,
}: any) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm transition-all flex flex-col justify-between space-y-4">
      <div className="flex items-center justify-between">
        <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
          {icon}
        </div>
        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 uppercase tracking-wider">
          {badge}
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {title}
        </p>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
          {value}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
