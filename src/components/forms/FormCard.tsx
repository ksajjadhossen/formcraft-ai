import Link from "next/link";
import { Trash2, ArrowUpRight, BarChart3 } from "lucide-react";

interface FormCardProps {
  form: {
    id: string;
    title: string;
    description?: string | null;
    createdAt: Date | string;
    questions?: any[];
  };
  onDelete?: (id: string) => void;
}

export default function FormCard({ form, onDelete }: FormCardProps) {
  const questionCount = form.questions ? form.questions.length : 0;
  const formattedDate = new Date(form.createdAt).toLocaleDateString();

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl transition-all hover:border-purple-500/50 flex flex-col justify-between space-y-4">
      {/* Top Section: Title & Description */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold px-2.5 py-1 bg-purple-100 dark:bg-purple-600/10 text-purple-600 dark:text-purple-400 rounded-full">
            {questionCount} Questions
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {formattedDate}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight line-clamp-1">
          {form.title}
        </h3>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
          {form.description || "No description provided for this form."}
        </p>
      </div>

      {/* Bottom Section: Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/80">
        {/* View Responses Button */}
        <Link
          href={`/forms/${form.id}/responses`}
          className="px-3.5 py-2 bg-purple-100 dark:bg-purple-600/10 hover:bg-purple-200 dark:hover:bg-purple-600/20 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          View Responses
        </Link>

        {/* Right Action Icons (Delete & Open Public Form) */}
        <div className="flex items-center gap-2">
          {onDelete && (
            <button
              onClick={() => onDelete(form.id)}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-600/20 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-xl transition-colors"
              title="Delete Form"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}

          <Link
            href={`/forms/${form.id}`}
            target="_blank"
            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl transition-colors"
            title="Open Public Form"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
