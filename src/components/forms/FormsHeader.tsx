import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export default function FormsHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-purple-900/10 p-5 rounded-xl border border-slate-200 dark:border-purple-500/10 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          All Forms <FileText className="w-5 h-5 text-purple-500" />
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1 text-xs">
          Manage, review, and track all your created forms in one place.
        </p>
      </div>
      <Link
        href="/create-form"
        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-sm"
      >
        <Plus className="w-4 h-4" /> Create New Form
      </Link>
    </div>
  );
}
