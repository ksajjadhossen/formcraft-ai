"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface FormFieldListProps {
  questions: any[];
}

export default function FormFieldList({ questions }: FormFieldListProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-xl transition-all text-center space-y-4 py-16">
        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Response Recorded
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
          Your response has been successfully submitted. Thank you for filling
          out the form!
        </p>
      </div>
    );
  }

  const questionList = Array.isArray(questions) ? questions : [];

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl shadow-xl transition-all">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {questionList.length > 0 ? (
          questionList.map((q: any, index: number) => {
            const rawOptions = q.options || q.choices;
            let optionList: string[] = [];

            if (Array.isArray(rawOptions)) {
              optionList = rawOptions;
            } else if (typeof rawOptions === "string") {
              try {
                optionList = JSON.parse(rawOptions);
              } catch {
                optionList = [];
              }
            }

            return (
              <div key={q.id || index} className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {q.label || q.text || `Question ${index + 1}`}
                </label>

                {q.type === "RADIO" ||
                q.type === "radio" ||
                q.type === "SELECT" ||
                optionList.length > 0 ? (
                  <div className="space-y-2 pt-1">
                    {optionList.length > 0 ? (
                      optionList.map((option: string, optIdx: number) => (
                        <label
                          key={optIdx}
                          className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg cursor-pointer hover:border-purple-500 transition-all text-sm text-slate-800 dark:text-slate-200"
                        >
                          <input
                            type="radio"
                            name={`question-${index}`}
                            value={option}
                            required={q.required}
                            className="text-purple-600 focus:ring-purple-500"
                          />
                          <span>{option}</span>
                        </label>
                      ))
                    ) : (
                      <input
                        type="text"
                        placeholder="No options available"
                        required={q.required}
                        className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100"
                      />
                    )}
                  </div>
                ) : (
                  <input
                    type={q.type ? q.type.toLowerCase() : "text"}
                    placeholder={q.placeholder || "Type your answer here..."}
                    required={q.required}
                    className="w-full px-4 py-3 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 transition-all"
                  />
                )}
              </div>
            );
          })
        ) : (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            No fields found in this form.
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-4 py-3.5 px-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-600/25 active:scale-[0.99] text-sm"
        >
          Submit Response
        </button>
      </form>
    </div>
  );
}
