"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Wand2, Sparkles, Layers, ShieldCheck } from "lucide-react";
import CreateFormHeader from "@/components/create-form/CreateFormHeader";
import PromptSuggestions from "@/components/create-form/PromptSuggestions";
import FormSuccessModal from "@/components/create-form/FormSuccessModal";
import UpgradeModal from "@/components/UpgradeModal";

const SUGGESTED_PROMPTS = [
  "Coffee shop feedback form with ratings & review",
  "Event registration with dietary preferences & email",
  "Job application form with portfolio link & resume upload",
];

export default function CreateFormPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedFormId, setGeneratedFormId] = useState<string | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const router = useRouter();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/ai/generate-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const responseText = await res.text();
      const data = responseText ? JSON.parse(responseText) : {};

      if (res.status === 403) {
        setShowUpgradeModal(true);
        return;
      }

      if (res.ok && data.formId) {
        setGeneratedFormId(data.formId);
      } else {
        alert(data.error || "Failed to generate form");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during generation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 w-full max-w-3xl py-16 mx-auto px-4 flex flex-col items-center justify-center mb-16 relative text-slate-900 dark:text-slate-100">
      {/* Dynamic Ambient Background Glow (Optimized for both Light & Dark modes) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 sm:w-125 h-50 sm:h-62.5 bg-purple-500/10 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <CreateFormHeader />

      {/* Production-Grade Glassmorphism Card */}
      <div className="w-full relative p-6 sm:p-10 bg-white/80 dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/10 rounded-3xl shadow-xl shadow-purple-900/5 dark:shadow-none backdrop-blur-2xl transition-all duration-300 mt-8 group/main">
        {/* Subtle Top Inner Border Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent pointer-events-none" />

        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Label & Header Area */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Wand2 className="w-3.5 h-3.5" />
                </span>
                Form Prompt & Requirements
              </label>
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 hidden sm:inline-block">
                Powered by Gemini AI
              </span>
            </div>

            {/* Premium Theme-Aware Textarea */}
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Event registration form with name, email, dietary preferences, and custom feedback..."
                rows={5}
                className="w-full p-4.5 text-sm bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 rounded-2xl text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500/70 focus:ring-4 focus:ring-purple-500/15 transition-all duration-300 resize-none shadow-inner"
                required
              />
              <div className="absolute bottom-3 right-3 text-[10px] font-bold tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full pointer-events-none border border-purple-500/20">
                AI Ready
              </div>
            </div>
          </div>

          {/* Prompt Suggestions Component */}
          <div className="pt-1">
            <PromptSuggestions
              suggestions={SUGGESTED_PROMPTS}
              onSelect={(selected) => setPrompt(selected)}
            />
          </div>

          {/* Premium Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-purple-600/20 active:scale-[0.99] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-sm tracking-wide relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            {loading ? (
              <>
                <Wand2 className="w-4 h-4 animate-spin text-purple-200" />
                <span>Generating Form with AI...</span>
              </>
            ) : (
              <>
                <span>Generate Smart Form</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </>
            )}
          </button>
        </form>

        {/* Footer Trust Badges inside Card */}
        <div className="pt-6 mt-8 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center justify-center sm:justify-start gap-1.5 py-1 px-2.5 rounded-xl bg-slate-100/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />{" "}
            Instant Structure
          </span>
          <span className="flex items-center justify-center sm:justify-start gap-1.5 py-1 px-2.5 rounded-xl bg-slate-100/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
            <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" /> Auto
            Dashboard
          </span>
          <span className="flex items-center justify-center sm:justify-start gap-1.5 py-1 px-2.5 rounded-xl bg-slate-100/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{" "}
            Secure Data
          </span>
        </div>
      </div>

      {/* Success Modal */}
      {generatedFormId && (
        <FormSuccessModal
          formId={generatedFormId}
          onClose={() => {
            setGeneratedFormId(null);
            router.push("/dashboard");
          }}
          onGoToDashboard={() => router.push("/dashboard")}
        />
      )}

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
      />
    </div>
  );
}
