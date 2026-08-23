"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    question: "Can I track user responses and analytics?",
    answer:
      "Absolutely. Every form you create comes with a real-time analytics dashboard to monitor submission rates, user feedback, and response insights effortlessly.",
  },
  {
    question: "Do I need coding skills to use this platform?",
    answer:
      "No coding skills are required at all. The entire process from form creation to publishing is completely automated by AI and managed through a sleek UI.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="text-center mb-16 space-y-3">
        <h2 className="text-xs uppercase tracking-widest text-purple-600 dark:text-purple-400 font-bold">
          Got Questions?
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Everything you need to know about FormCraft AI.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl backdrop-blur-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span className="text-base">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
