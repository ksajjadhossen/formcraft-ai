"use client";

import { useState, Suspense } from "react";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import TrustBadge from "@/components/pricing/TrustBadge";
import Loader from "@/components/ui/Loader";

const PRICING_PLANS = [
  {
    title: "Starter",
    price: "$0",
    description: "Perfect for hobbyists and trying out AI form generation.",
    features: [
      "Up to 5 AI Forms per month",
      "Basic Form Analytics",
      "Standard Templates",
      "Community Support",
    ],
    borderColor: "border-slate-200 dark:border-slate-800",
    badgeBg: "bg-slate-100 dark:bg-slate-800",
    badgeText: "text-slate-700 dark:text-slate-300",
    buttonStyle:
      "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950 shadow-slate-900/10",
    isPopular: false,
  },
  {
    title: "Pro Creator",
    price: "$19",
    priceId: "price_1U8fLGAjhqU0SLBvjH2i28QP",
    description:
      "Designed for professionals and growing teams needing more power.",
    features: [
      "Unlimited AI Forms",
      "Advanced Real-time Analytics",
      "Priority Gemini AI Generation",
      "Custom Branding & Logo",
      "24/7 Priority Support",
    ],
    borderColor:
      "border-purple-500/50 dark:border-purple-500/60 ring-2 ring-purple-500/20",
    badgeBg: "bg-purple-100 dark:bg-purple-950/60",
    badgeText: "text-purple-600 dark:text-purple-300",
    buttonStyle:
      "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/25",
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "$49",
    priceId: "price_1U8fM6AjhqU0SLBvXBeYCteO",
    description:
      "Advanced features and security for large scale organizations.",
    features: [
      "Everything in Pro Creator",
      "Custom Webhooks & API Access",
      "Team Collaboration Tools",
      "Dedicated Account Manager",
      "Custom Security Compliance",
    ],
    borderColor: "border-emerald-500/50 dark:border-emerald-500/60",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60",
    badgeText: "text-emerald-600 dark:text-emerald-300",
    buttonStyle:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/25",
    isPopular: false,
  },
];

function PricingContentInner() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center max-w-2xl space-y-3 mb-10 relative z-10">
        <span className="px-3.5 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-[11px] font-bold uppercase tracking-wider shadow-sm">
          Flexible Pricing
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Simple, transparent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
            plans for your forms
          </span>
        </h1>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Choose the perfect plan to generate smart AI forms, track submissions,
          and scale your workflow effortlessly.
        </p>
      </div>

      {/* Monthly / Yearly Toggle Switch */}
      <div className="relative z-10 w-full">
        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10 items-stretch">
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard key={index} {...plan} isYearly={isYearly} />
        ))}
      </div>

      {/* Trust Badge Section */}
      <div className="w-full mt-24 relative z-10">
        <TrustBadge />
      </div>

      {/* Pricing FAQ Section */}
      <div className="w-full mt-24 relative z-10">
        <PricingFAQ />
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense fallback={<Loader text="Loading Pricing Plans..." />}>
      <PricingContentInner />
    </Suspense>
  );
}
