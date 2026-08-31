"use client";

import { useState } from "react";
import PricingCard from "@/components/pricing/PricingCard";

const PRICING_PLANS = [
  {
    title: "Starter",
    price: "$0",
    billingPeriod: "/ year",
    description: "Find your baseline. Start free.",
    features: [
      "Career Readiness Twin Diagnostics",
      "Standard Career Roadmap Generator",
      "Basic Skill-Gap Analysis",
      "Community Forum Support",
    ],
    extraFeatures: [
      "Access to basic public templates",
      "Weekly newsletter insights",
    ],
    isPopular: false,
    buttonText: "Get Started",
  },
  {
    title: "Pro Career OS",
    price: "$199",
    priceId: "price_1U8fLGAjhqU0SLBvjH2i28QP",
    billingPeriod: "/ year",
    description: "Everything you need to become job-ready.",
    features: [
      "Unlimited Skill Proof Graphing",
      "Automated Learning Debt Resolution",
      "Job Reality Check & ID Scanning",
      "AI Copilot Memory & Guidance",
      "Zero-Guilt Adaptive Recovery",
    ],
    extraFeatures: [
      "Priority Gemini AI Generation",
      "1-on-1 AI Mock Interview Sessions",
      "Exclusive Pro Badge on Profile",
    ],
    isPopular: true,
    buttonText: "Get Started",
  },
  {
    title: "Enterprise",
    price: "$699",
    priceId: "price_1U8fM6AjhqU0SLBvXBeYCteO",
    billingPeriod: "/ year",
    description: "For bootcamps and university cohorts.",
    features: [
      "Unlimited Organization Members",
      "All Pro Features Included",
      "Recruiter Candidate Verification Portal",
      "Custom Career Roadmap Templates",
      "Dedicated Account Manager",
    ],
    extraFeatures: [
      "Custom Webhooks & API Integration",
      "Advanced Team Analytics Dashboard",
      "SLA-backed 24/7 Support",
    ],
    isPopular: false,
    buttonText: "Contact Sales",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 transition-colors duration-300">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
          Flexible Pricing
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Simple Plans,{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Maximum Learning
          </span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Start for free with full diagnostics, or upgrade to unlock unlimited
          skill proofing and real-time job readiness analysis.
        </p>
      </div>

      {/* Monthly / Yearly Toggle Switch */}
      <div className="flex justify-center mb-16">
        <div className="p-1 bg-slate-200 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800 flex items-center shadow-inner">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
              !isYearly
                ? "bg-white text-slate-950 dark:bg-white dark:text-slate-950 shadow-md"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              isYearly
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span
              className={`px-2 py-0.5 text-[9px] font-black uppercase rounded-full transition-colors ${
                isYearly
                  ? "bg-white/20 text-white"
                  : "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300"
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard
            key={index}
            {...plan}
            billingPeriod={isYearly ? "/ year" : "/ month"}
            price={
              isYearly
                ? plan.price
                : `$${Math.round(parseInt(plan.price.replace("$", "")) / 10)}`
            }
          />
        ))}
      </div>
    </div>
  );
}
