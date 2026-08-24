import { Sparkles } from "lucide-react";

interface FormHeaderProps {
  title: string;
  description?: string | null;
}

export default function FormHeader({ title, description }: FormHeaderProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-xl transition-all space-y-3">
      <a
        href="https://formcraft-ai-k.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50 rounded-md text-purple-600 dark:text-purple-400 text-xs font-semibold hover:opacity-80 transition-opacity"
      >
        <Sparkles className="w-3.5 h-3.5" /> FormCraft AI
      </a>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h1>
      {description && (
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
