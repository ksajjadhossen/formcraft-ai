"use client";

import { useState, useRef, useEffect } from "react";
import {
  Download,
  FileSpreadsheet,
  FileJson,
  FileText,
  Printer,
  ChevronDown,
} from "lucide-react";
import {
  exportToCSV,
  exportToTSV,
  exportToTXT,
  exportToJSON,
  exportToPDF,
} from "@/lib/exportUtils";

interface ExportDropdownProps {
  formTitle: string;
  responses: any[];
  questions: any[];
}

export default function ExportDropdown({
  formTitle,
  responses,
  questions,
}: ExportDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={responses.length === 0}
        className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-purple-600/20"
      >
        <Download className="w-4 h-4" />
        Export Responses
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl py-1.5 z-50">
          <button
            onClick={() => {
              exportToCSV(formTitle, responses, questions);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
            Export as CSV (Excel)
          </button>

          <button
            onClick={() => {
              exportToTSV(formTitle, responses, questions);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5 transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-teal-500" />
            Export as TSV (Tab Separated)
          </button>

          <button
            onClick={() => {
              exportToTXT(formTitle, responses, questions);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5 transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-500" />
            Export as Text (.txt)
          </button>

          <button
            onClick={() => {
              exportToJSON(formTitle, responses);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5 transition-colors"
          >
            <FileJson className="w-4 h-4 text-amber-500" />
            Export as JSON
          </button>

          <button
            onClick={() => {
              exportToPDF(formTitle, responses, questions);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2.5 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2.5 transition-colors border-t border-slate-100 dark:border-slate-800"
          >
            <Printer className="w-4 h-4 text-rose-500" />
            Print / Save as PDF
          </button>
        </div>
      )}
    </div>
  );
}
