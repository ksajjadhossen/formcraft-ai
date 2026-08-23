"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Can I change or cancel my plan anytime?",
    answer:
      "Yes, absolutely! You can upgrade, downgrade, or cancel your subscription at any time directly from your account dashboard with zero hidden fees.",
  },
  {
    question: "How does the AI form generator work?",
    answer:
      "Our AI powered by advanced Gemini models reads your natural language prompt and instantly generates customized fields, validation rules, and smart layouts for your forms in seconds.",
  },
  {
    question: "Do you offer a free trial for Pro plans?",
    answer:
      "We offer a fully-featured Starter plan for free so you can test out the core features. For Pro Creator, we provide a 14-day money-back guarantee if you are not completely satisfied.",
  },
  {
    question: "Can I use custom branding on my forms?",
    answer:
      "Yes! Pro Creator and Enterprise plans allow you to add custom logos, brand colors, and remove FormCraft AI branding to match your company's identity.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Got questions? We&apos;ve got answers to help you choose the right
          path.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-purple-600 dark:hover:text-purple-400 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isOpen
                      ? "rotate-180 text-purple-600 dark:text-purple-400"
                      : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
