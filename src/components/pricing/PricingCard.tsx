"use client";

import { useState } from "react";
import { Check, Loader2, ArrowRight, Sparkles } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description?: string;
  features: string[];
  extraFeatures?: string[];
  isPopular?: boolean;
  priceId?: string;
  buttonText?: string;
  billingPeriod?: string;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  extraFeatures = [],
  isPopular = false,
  priceId,
  buttonText = "Get Started",
  billingPeriod = "/ month",
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleStripeCheckout = async () => {
    if (!priceId) {
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.href = "/dashboard";
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, productName: title }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred during checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
        isPopular
          ? "bg-white dark:bg-[#14101f] text-slate-900 dark:text-white border-2 border-purple-600 dark:border-purple-500 shadow-2xl shadow-purple-600/15 dark:shadow-purple-500/25 lg:-translate-y-4 z-10"
          : "bg-white dark:bg-[#0c0a14] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm"
      }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="px-4 py-1.5 bg-purple-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5" /> Most Popular
          </span>
        </div>
      )}

      <div>
        {/* Title */}
        <h3 className="text-center text-xl font-bold tracking-wide">{title}</h3>

        {/* Price & Billing */}
        <div className="text-center my-6">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl md:text-5xl font-black tracking-tight">
              {price}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {billingPeriod}
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
            {billingPeriod === "/ year" ? "billed annually" : "billed monthly"}
          </p>
        </div>

        {/* Core Features List */}
        <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-white/10">
          <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
            Core Features
          </p>
          <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Extra Added Features Section */}
        {extraFeatures.length > 0 && (
          <div className="space-y-3 pt-5 mt-5 border-t border-dashed border-slate-200 dark:border-white/10">
            <p className="text-[10px] uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1">
              <span>✨</span> Advanced Perks
            </p>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              {extraFeatures.map((extra, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{extra}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Button & Subtext */}
      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/10 space-y-3">
        <button
          onClick={handleStripeCheckout}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-xl font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] disabled:opacity-70 ${
            isPopular
              ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30"
              : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        {description && (
          <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
