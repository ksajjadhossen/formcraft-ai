"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  buttonStyle: string;
  isPopular?: boolean;
  priceId?: string; // Stripe Price ID
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  borderColor,
  badgeBg,
  badgeText,
  buttonStyle,
  isPopular,
  priceId,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleStripeCheckout = async () => {
    if (!priceId) {
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
      className={`relative p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border ${borderColor} shadow-xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
          Most Popular
        </span>
      )}

      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {title}
          </h3>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${badgeBg} ${badgeText}`}
          >
            {price === "$0" ? "Free" : "Pro"}
          </span>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-8">
          {description}
        </p>

        <div className="my-6">
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
            {price}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
            / month
          </span>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            What&apos;s included
          </p>
          <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={handleStripeCheckout}
          disabled={loading}
          className={`w-full py-2.5 px-4 rounded-xl font-medium text-xs shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${buttonStyle}`}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Get Started</span>
          )}
        </button>
      </div>
    </div>
  );
}
