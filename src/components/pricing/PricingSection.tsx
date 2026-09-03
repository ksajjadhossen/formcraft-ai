"use client";

import React, { useState } from "react";
import PricingCard from "@/components/pricing/PricingCard";

export default function PricingSection() {
  const [loadingKey, setLoadingKey] = useState<string | null>(null);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$0",
      priceId: "free-tier",
      period: "/ month",
      billed: "billed monthly",
      description: "Find your baseline. Start free.",
      coreFeatures: [
        "Career Readiness Twin Diagnostics",
        "Standard Career Roadmap Generator",
        "Basic Skill-Gap Analysis",
        "Community Forum Support",
      ],
      advancedPerks: [
        "Access to basic public templates",
        "Weekly newsletter insights",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      id: "pro",
      name: "Pro Career OS",
      price: "$19",
      priceId:
        process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID ||
        "price_1U8fLGAjhqU0SLBvjH2i28QP",
      period: "/ month",
      billed: "billed monthly",
      description: "Everything you need to become job-ready.",
      coreFeatures: [
        "Unlimited Skill Proof Graphing",
        "Automated Learning Debt Resolution",
        "Job Reality Check & ID Scanning",
        "AI Copilot Memory & Guidance",
        "Zero-Guilt Adaptive Recovery",
      ],
      advancedPerks: [
        "Priority Gemini AI Generation",
        "1-on-1 AI Mock Interview Sessions",
        "Exclusive Pro Badge on Profile",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$49",
      priceId:
        process.env.NEXT_PUBLIC_ENTERPRISE_MONTHLY_PRICE_ID ||
        "price_1U8fM6AjhqU0SLBvXBeYCteO",
      period: "/ month",
      billed: "billed monthly",
      description: "For bootcamps and university cohorts.",
      coreFeatures: [
        "Unlimited Organization Members",
        "All Pro Features Included",
        "Recruiter Candidate Verification Portal",
        "Custom Career Roadmap Templates",
        "Dedicated Account Manager",
      ],
      advancedPerks: [
        "Custom Webhooks & API Integration",
        "Advanced Team Analytics Dashboard",
        "SLA-backed 24/7 Support",
      ],
      popular: false,
      buttonText: "Contact Sales",
    },
  ];

  const handleSelectPlan = async (plan: (typeof plans)[0]) => {
    if (plan.id === "starter" || !plan.priceId) {
      window.location.href = "/create-form";
      return;
    }

    try {
      setLoadingKey(plan.id);

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: plan.priceId }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(
          data.error ||
            "Failed to create checkout session. Please check Price ID in .env",
        );
        setLoadingKey(null);
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
      setLoadingKey(null);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 transition-colors duration-300">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <span className="inline-block px-3.5 py-1 bg-purple-500/10 border border-purple-500/25 rounded-full text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
          Flexible Pricing
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Simple Plans,{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Maximum Learning
          </span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Start for free with full diagnostics, or upgrade to unlock unlimited
          skill proofing and real-time job readiness analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            {...plan}
            isLoading={loadingKey === plan.id}
            onSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </div>
    </section>
  );
}
