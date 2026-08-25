import Link from "next/link";
import { Plus } from "lucide-react";

export default function FormsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          All Forms
        </h1>
        <p className="text-sm text-slate-400">
          Manage, review, and track all your created forms in one place.
        </p>
      </div>

      <Link
        href="/create-form"
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20"
      >
        <Plus className="w-4 h-4" />
        Create New Form
      </Link>
    </div>
  );
}
