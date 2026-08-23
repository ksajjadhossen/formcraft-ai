import { Sparkles } from "lucide-react";

export default function CreateFormHeader() {
  return (
    <div className="text-center space-y-2 mb-6">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-medium backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5" />
        <span>AI Powered Generation</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Create Form with AI
      </h1>
      <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
        Describe the structure and purpose of your form, and let Gemini
        construct it instantly.
      </p>
    </div>
  );
}
