"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 hidden dark:block text-yellow-400" />
      <Moon className="h-5 w-5 block dark:hidden text-slate-700" />
    </button>
  );
}
