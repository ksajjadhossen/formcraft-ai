"use client";

import {
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  FileText,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative w-full py-16 md:py-28 overflow-hidden border-t border-slate-200/60 dark:border-white/10 bg-linear-to-b from-transparent via-purple-500/3 to-transparent">
      {/* Background Subtle Grid Pattern & Dynamic Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[3rem_3rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 md:w-112.5 h-45 md:h-55 bg-purple-600/10 dark:bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Box with Glassmorphism */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 z-10">
        <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white/70 dark:bg-white/2 border border-slate-200/80 dark:border-white/10 backdrop-blur-2xl shadow-xl shadow-purple-900/5 dark:shadow-none text-center space-y-5 relative overflow-hidden">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-600 dark:text-purple-400 text-[11px] font-semibold uppercase tracking-wider shadow-sm mx-auto">
            <Sparkles className="w-3 h-3" /> Gemini AI + Formcraft Engine
          </div>

          {/* Headline - Responsive and Compact */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Build Smart Forms & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-purple-500 to-indigo-600 dark:from-purple-400 dark:via-purple-300 dark:to-indigo-400">
              Export Dashboard Data Instantly
            </span>
          </h2>

          {/* Description - Compact text for phone compatibility */}
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Generate AI forms in seconds, collect submissions in real-time, and
            export seamlessly to Excel, CSV, JSON, or PDF reports.
          </p>

          {/* Action Button - Touch friendly for mobile */}
          <div className="pt-2">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 text-white hover:bg-purple-600 dark:bg-white dark:text-slate-950 dark:hover:bg-purple-600 dark:hover:text-white font-bold text-xs rounded-full shadow-lg shadow-purple-600/15 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer w-full sm:w-auto"
            >
              <span>Launch Dashboard & Forms</span>
              <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-slate-950/10 group-hover:bg-white/20 text-current flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>

          {/* Feature Highlights - Mobile Wrapping Friendly */}
          <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[11px] font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400 shrink-0" />{" "}
              AI Forms
            </span>
            <span className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <FileSpreadsheet className="w-3 h-3 text-emerald-500 shrink-0" />{" "}
              Excel / CSV
            </span>
            <span className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <FileText className="w-3 h-3 text-rose-500 shrink-0" /> PDF Save
            </span>
            <span className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <ShieldCheck className="w-3 h-3 text-blue-500 shrink-0" /> Secure
              Data
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
