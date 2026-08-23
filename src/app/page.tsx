"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Wand2 } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Coffee shop feedback form with ratings & review",
  "Event registration with dietary preferences & email",
  "Job application form with portfolio link & resume upload",
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setLoading(true);
    try {
      const res = await fetch("/api/ai/generate-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (res.ok && data.formId) {
        router.push(`/dashboard`);
      } else {
        alert(data.error || "Failed to generate form");
      }
    } catch {
      alert("An error occurred during generation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl py-4 space-y-4 my-auto">
      {/* Title Header */}
      <div className="text-center space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-medium backdrop-blur-md">
          <Sparkles className="w-3 h-3" />
          <span>AI Powered Generation</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Create Form with AI
        </h1>
        <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          Describe the structure and purpose of your form, and let Gemini
          construct it instantly.
        </p>
      </div>

      {/* Main Card */}
      <div className="p-5 md:p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-purple-500/20 rounded-xl shadow-xl backdrop-blur-2xl transition-colors duration-200">
        <form onSubmit={handleGenerate} className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Form Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g., Event registration form with name, email, dietary preferences..."
              className="w-full h-24 p-3 text-xs bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 resize-none shadow-inner"
              required
            />
          </div>

          {/* Suggestions */}
          <div className="space-y-1.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
              Suggestions:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_PROMPTS.map((suggestion, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPrompt(suggestion)}
                  className="text-[11px] text-left px-2.5 py-1 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-150"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium py-2 px-4 rounded-md shadow-md shadow-purple-600/20 active:scale-[0.99] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs"
          >
            {loading ? (
              <>
                <Wand2 className="w-3.5 h-3.5 animate-spin" />
                <span>Generating Form...</span>
              </>
            ) : (
              <>
                <span>Generate Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
