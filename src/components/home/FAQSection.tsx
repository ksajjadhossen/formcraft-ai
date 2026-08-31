"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "How does FormCraft AI generate forms?",
    answer:
      "You simply type a description or requirement in plain English. Gemini AI analyzes your prompt and automatically builds tailored form fields, inputs, and structures instantly.",
  },
  {
    question: "Is it really free to use?",
    answer:
      "Yes! You can start generating and managing your custom AI forms for free. We offer flexible plans as your form submission needs scale up.",
  },
  {
    question: "Can I track user responses and export data?",
    answer:
      "Absolutely. Every form you create comes with a real-time dashboard to monitor responses, and you can easily export your collected data as Excel, CSV, JSON, or PDF reports.",
  },
  {
    question: "Do I need coding skills to use this platform?",
    answer:
      "No coding skills are required at all. The entire process from AI form creation to data management is completely automated and managed through a sleek UI.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="relative w-full py-24 md:py-32 px-4 max-w-4xl mx-auto border-t border-slate-200/60 dark:border-white/10">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-600/10 dark:bg-purple-600/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5" /> Got Questions?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 dark:from-purple-400 dark:via-purple-300 dark:to-indigo-400">
            Questions
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          Everything you need to know about FormCraft AI and data management.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
              openIdx === idx
                ? "bg-white/90 dark:bg-slate-900/60 border-purple-500/50 shadow-lg shadow-purple-500/5"
                : "bg-white/70 dark:bg-white/[0.03] border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
            } overflow-hidden`}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white cursor-pointer group"
            >
              <span className="text-sm sm:text-base tracking-wide group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openIdx === idx
                    ? "rotate-180 bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    : "text-slate-400"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {openIdx === idx && (
              <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
