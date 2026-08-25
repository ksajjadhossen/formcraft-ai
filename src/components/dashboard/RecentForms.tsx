import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";

export default function RecentForms({ forms }: { forms: any[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Recent Forms
        </h3>
        <Link
          href="/forms"
          className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline"
        >
          View All &rarr;
        </Link>
      </div>

      <div className="space-y-3">
        {forms.length > 0 ? (
          forms.slice(0, 3).map((form) => (
            <div
              key={form.id}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {form.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(form.createdAt).toLocaleDateString()} •{" "}
                    {form.questions?.length || 0} Questions
                  </p>
                </div>
              </div>
              <Link
                href={`/forms/${form.id}`}
                className="p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-purple-600 hover:text-white text-slate-600 dark:text-slate-300 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-xs text-slate-500 text-center py-6">
            No forms found.
          </p>
        )}
      </div>
    </div>
  );
}
