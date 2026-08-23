import PricingCard from "@/components/pricing/PricingCard";

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
      "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-950",
    isPopular: false,
  },
  {
    title: "Pro Creator",
    price: "$19",
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

export default function PricingPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      {/* Header Section */}
      <div className="text-center max-w-2xl space-y-3 mb-12">
        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
          Flexible Pricing
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Simple, transparent plans for your forms
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          Choose the perfect plan to generate smart AI forms, track submissions,
          and scale your workflow effortlessly.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {PRICING_PLANS.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
