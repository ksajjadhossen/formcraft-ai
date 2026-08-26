"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  ArrowUpRight,
  BarChart3,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { deleteFormAction } from "@/actions/formActions";
import { useRouter } from "next/navigation";

interface FormCardProps {
  form: {
    id: string;
    title: string;
    description?: string | null;
    createdAt: Date | string;
    questions?: any[];
  };
}

export default function FormCard({ form }: FormCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const questionCount = form.questions ? form.questions.length : 0;
  const formattedDate = new Date(form.createdAt).toLocaleDateString();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await deleteFormAction(form.id);
      if (res?.success) {
        setIsOpen(false);
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to delete form:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl transition-all hover:border-purple-500/50 flex flex-col justify-between space-y-4 relative">
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
          <Link
            href={`/forms/${form.id}/responses`}
            className="px-3.5 py-2 bg-purple-100 dark:bg-purple-600/10 hover:bg-purple-200 dark:hover:bg-purple-600/20 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            View Responses
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-red-100 dark:hover:bg-red-600/20 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-xl transition-colors"
              title="Delete Form"
            >
              <Trash2 className="w-4 h-4" />
            </button>

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

      {/* Delete Confirmation Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Delete Form?
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Are you sure you want to delete{" "}
                  <span className="text-slate-900 dark:text-white font-medium">
                    &quot;{form.title}&quot;
                  </span>
                  ? This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-medium transition-all shadow-lg shadow-red-600/20"
              >
                {isDeleting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                Delete Permanently
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
