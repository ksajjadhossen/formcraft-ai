"use client";

import React from "react";

interface PricingCardProps {
  name: string;
  price: string;
  priceId: string;
  period: string;
  billed: string;
  description: string;
  coreFeatures: string[];
  advancedPerks: string[];
  popular: boolean;
  buttonText: string;
  onSelect: () => void;
  isLoading: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  billed,
  description,
  coreFeatures,
  advancedPerks,
  popular,
  buttonText,
  onSelect,
  isLoading,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border transition-all duration-300 ${
        popular
          ? "border-purple-500 shadow-2xl shadow-purple-500/15 dark:shadow-purple-500/20 lg:-translate-y-2"
          : "border-slate-200 dark:border-slate-800/80 shadow-sm"
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
          <span>✨</span> Most Popular
        </div>
      )}

      <div>
        {/* Card Header */}
        <div className="text-center pb-6 border-b border-slate-100 dark:border-slate-800/80">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {name}
          </h3>
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white">
              {price}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {period}
            </span>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
            {billed}
          </p>
        </div>

        {/* Core Features */}
        <div className="py-6 space-y-4 border-b border-dashed border-slate-100 dark:border-slate-800/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Core Features
          </p>
          <ul className="space-y-3">
            {coreFeatures.map((feat, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="text-purple-600 dark:text-purple-400 font-bold mt-0.5">
                  ✓
                </span>
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Advanced Perks */}
        <div className="py-6 space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
            <span>⚡</span> Advanced Perks
          </p>
          <ul className="space-y-3">
            {advancedPerks.map((perk, pIdx) => (
              <li
                key={pIdx}
                className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
              >
                <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">
                  ✓
                </span>
                <span className="leading-snug">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer / Button & Subtext */}
      <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
        <button
          onClick={onSelect}
          disabled={isLoading}
          className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
            popular
              ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/25"
              : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700"
          }`}
        >
          <span>{isLoading ? "Redirecting..." : buttonText}</span>
          <span>→</span>
        </button>
        <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
}
