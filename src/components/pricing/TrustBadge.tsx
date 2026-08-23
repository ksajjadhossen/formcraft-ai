import { ShieldCheck, Zap, RefreshCw } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 px-8 border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 backdrop-blur-md rounded-2xl text-center">
      <div className="flex flex-col items-center space-y-2">
        <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
          Secure Payments
        </h4>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Encrypted checkout via Stripe & SSL security.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <RefreshCw className="w-5 h-5 text-emerald-500" />
        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
          14-Day Money-Back
        </h4>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Not happy? Get a full refund within 14 days.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <Zap className="w-5 h-5 text-blue-500" />
        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
          Instant Activation
        </h4>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Get access to Pro features right after checkout.
        </p>
      </div>
    </div>
  );
}
