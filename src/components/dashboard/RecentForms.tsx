import Link from "next/link";
import { FileText, Plus, ArrowUpRight, FolderKanban } from "lucide-react";

export default function RecentForms() {
  return (
    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FolderKanban className="w-4 h-4 text-purple-500" />
          <h2 className="text-base font-bold text-slate-900 dark:text-white">
            Recent Forms
          </h2>
        </div>
        <Link
          href="/forms"
          className="text-xs font-semibold text-purple-600 hover:text-purple-500 flex items-center gap-0.5"
        >
          View All <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center py-10 px-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50/50 dark:bg-slate-950/30 text-center">
        <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 mb-2">
          <FileText className="w-5 h-5" />
        </div>
        <h3 className="text-xs font-semibold text-slate-900 dark:text-white">
          No forms created yet
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mt-0.5">
          Generate your first AI-driven form in seconds.
        </p>
        <Link
          href="/create-form"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg transition"
        >
          <Plus className="w-3.5 h-3.5" /> Build Form
        </Link>
      </div>
    </div>
  );
}
