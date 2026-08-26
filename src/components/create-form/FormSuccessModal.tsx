"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, X } from "lucide-react";

interface FormSuccessModalProps {
  formId: string;
  onClose: () => void;
  onGoToDashboard: () => void;
}

export default function FormSuccessModal({
  formId,
  onClose,
  onGoToDashboard,
}: FormSuccessModalProps) {
  const [copied, setCopied] = useState(false);
  const formUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/forms/${formId}`
      : "";

  const handleCopy = () => {
    if (formUrl) {
      navigator.clipboard.writeText(formUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 dark:bg-slate-950/70 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-purple-500/30 rounded-xl shadow-2xl backdrop-blur-2xl text-slate-900 dark:text-white relative space-y-5 transition-colors">
        {/* Close / Dismiss */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-100 dark:bg-purple-500/20 border border-purple-200 dark:border-purple-400/30 rounded-md text-purple-700 dark:text-purple-300 text-xs font-semibold">
            ✨ Success! Form Created
          </div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            Your AI Form is Ready
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Share this link with others to collect responses, or jump right into
            your dashboard.
          </p>
        </div>

        {/* Link Box with Copy Button */}
        <div className="space-y-2">
          <label className="text-[11px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Public Form Link
          </label>
          <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-lg">
            <input
              type="text"
              readOnly
              value={formUrl}
              className="w-full bg-transparent text-xs text-purple-600 dark:text-purple-300 focus:outline-none px-1 truncate"
            />
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-xs font-medium transition-all shrink-0 shadow-md shadow-purple-600/30 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={`/forms/${formId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition-all border border-slate-300 dark:border-slate-700 text-center"
          >
            <span>Preview</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onGoToDashboard}
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-lg transition-all shadow-md shadow-purple-600/20 text-center"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
