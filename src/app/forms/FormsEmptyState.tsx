import Link from "next/link";
import { Plus, FileText } from "lucide-react";

export default function FormsEmptyState() {
  return (
    <div className="text-center py-24 bg-white/2 border border-white/10 rounded-3xl backdrop-blur-xl space-y-4">
      <div className="w-16 h-16 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 flex items-center justify-center mx-auto">
        <FileText className="w-8 h-8" />
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-slate-200">No forms found</h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto">
          You haven&apos;t created any forms yet. Get started by creating your
          first interactive form.
        </p>
      </div>
      <Link
        href="/create-form"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-purple-600/20"
      >
        <Plus className="w-4 h-4" />
        Create Form Now
      </Link>
    </div>
  );
}
