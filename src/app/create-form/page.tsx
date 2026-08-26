"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Wand2 } from "lucide-react";
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
    <div className="flex-1 w-full max-w-3xl py-12 mx-auto px-4 flex flex-col items-center justify-center mb-12 relative text-slate-900 dark:text-slate-100">
      <CreateFormHeader />

      <div className="w-full p-6 md:p-8 bg-white/80 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl shadow-2xl backdrop-blur-xl transition-all duration-300 mt-6">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Wand2 className="w-3.5 h-3.5 text-purple-500" /> Form Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., Event registration form with name, email, dietary preferences..."
              rows={5}
              className="w-full p-4 text-sm bg-slate-50/50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 rounded-xl text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/25 transition-all duration-200 resize-none shadow-inner"
              required
            />
          </div>

          <PromptSuggestions
            suggestions={SUGGESTED_PROMPTS}
            onSelect={(selected) => setPrompt(selected)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-xl shadow-lg shadow-purple-600/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm relative overflow-hidden"
          >
            {loading ? (
              <>
                <Wand2 className="w-4 h-4 animate-spin text-purple-200" />
                <span>Generating Form with AI...</span>
              </>
            ) : (
              <>
                <span>Generate Form</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

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

      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
      />
    </div>
  );
}
