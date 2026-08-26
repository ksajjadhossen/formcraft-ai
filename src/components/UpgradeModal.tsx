"use client";

import { useRouter } from "next/navigation";
import { Sparkles, X, ArrowRight } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md p-6 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl transition-colors">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 rounded-2xl">
          <Sparkles className="w-6 h-6" />
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Free Limit Reached!
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            You have already created 5 free AI forms. Upgrade to our{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Pro Plan
            </span>{" "}
            to unlock unlimited forms and advanced features.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={() => router.push("/pricing")}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-purple-600/25 transition-all duration-200 text-sm"
          >
            <span>Upgrade to Pro Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-xl transition-all duration-200 text-sm"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}
