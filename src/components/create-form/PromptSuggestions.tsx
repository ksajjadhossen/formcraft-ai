import { Sparkles } from "lucide-react";

interface PromptSuggestionsProps {
  suggestions: string[];
  onSelect: (prompt: string) => void;
}

export default function PromptSuggestions({
  suggestions,
  onSelect,
}: PromptSuggestionsProps) {
  return (
    <div className="space-y-2">
      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-purple-500" /> Suggestions:
      </span>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSelect(suggestion)}
            className="text-xs text-left px-3 py-1.5 bg-slate-100 dark:bg-slate-800/40 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/50 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-150 active:scale-95"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
