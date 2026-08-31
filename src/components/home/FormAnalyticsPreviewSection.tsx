"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  BarChart3,
  ShieldCheck,
  FileText,
  Database,
  Globe,
  Cpu,
  TrendingUp,
  Users,
  Layers,
  ArrowUpRight,
  Activity,
} from "lucide-react";

export default function AdvancedFormIntelligenceHub() {
  const [activeTab, setActiveTab] = useState<
    "analytics" | "schema" | "monetization"
  >("analytics");

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-137.5 h-137.5 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-[11px] font-semibold uppercase tracking-wider shadow-sm">
          <Activity className="w-3 h-3 animate-pulse" />
          Advanced Neural Engine Hub
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          FormCraft{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
            Ecosystem Control
          </span>
        </h2>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300">
          Seamlessly bridging natural language schema generation, real-time
          response analytics, and automated monetization pipelines.
        </p>

        {/* Interactive Hub Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 pt-4">
          {[
            { id: "analytics", label: "Live Analytics", icon: BarChart3 },
            { id: "schema", label: "AI Schema Engine", icon: Cpu },
            { id: "monetization", label: "Auth & Billing", icon: ShieldCheck },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-purple-600 text-white border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-105"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-purple-500/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container Wrapper */}
      <div className="relative max-w-4xl mx-auto px-2 sm:px-12">
        {/* Left Floating Node 1 (Database) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden xl:flex items-center absolute -left-10 top-12 z-20"
        >
          <div className="px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 rounded-xl border border-purple-500/30 shadow-xl backdrop-blur-xl flex items-center gap-2.5">
            <div className="p-1.5 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[8px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-400 block">
                Persistence
              </span>
              <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                Neon PostgreSQL
              </span>
            </div>
          </div>
          <div className="w-6 h-0.5 bg-linear-to-r from-purple-500/60 to-purple-500/10" />
        </motion.div>

        {/* Left Floating Node 2 (Auth) - Positioned below safely */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden xl:flex items-center absolute -left-10 bottom-16 z-20"
        >
          <div className="px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 rounded-xl border border-emerald-500/30 shadow-xl backdrop-blur-xl flex items-center gap-2.5">
            <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[8px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-400 block">
                Security
              </span>
              <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                Clerk Auth
              </span>
            </div>
          </div>
          <div className="w-6 h-0.5 bg-linear-to-r from-emerald-500/60 to-emerald-500/10" />
        </motion.div>

        {/* Right Floating Node 1 (AI Core) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="hidden xl:flex items-center absolute -right-10 top-12 z-20 flex-row-reverse"
        >
          <div className="px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 rounded-xl border border-blue-500/30 shadow-xl backdrop-blur-xl flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[8px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-400 block">
                AI Engine
              </span>
              <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                Google Gemini
              </span>
            </div>
          </div>
          <div className="w-6 h-0.5 bg-linear-to-l from-blue-500/60 to-blue-500/10" />
        </motion.div>

        {/* Right Floating Node 2 (Monetization) - Positioned below safely */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden xl:flex items-center absolute -right-10 bottom-16 z-20 flex-row-reverse"
        >
          <div className="px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 rounded-xl border border-indigo-500/30 shadow-xl backdrop-blur-xl flex items-center gap-2.5">
            <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[8px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-400 block">
                Monetization
              </span>
              <span className="text-[10px] font-bold text-slate-900 dark:text-white">
                Stripe Webhooks
              </span>
            </div>
          </div>
          <div className="w-6 h-0.5 bg-linear-to-l from-indigo-500/60 to-indigo-500/10" />
        </motion.div>

        {/* Central Dashboard Container with Dynamic Running Light Border Effect */}
        <div className="relative p-[1.5px] rounded-2xl overflow-hidden shadow-2xl group">
          {/* Animated Running Light Gradient Border */}
          <div
            className="absolute inset-0 bg-linear-to-r from-purple-600 via-blue-500 to-emerald-500 rounded-2xl animate-spin-slow opacity-80 blur-[1px]"
            style={{ animationDuration: "6s" }}
          />

          {/* Inner Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 bg-white dark:bg-slate-900 rounded-[15px] overflow-hidden"
          >
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-800 shadow-inner">
                <Globe
                  className="w-3 h-3 text-purple-500 animate-spin"
                  style={{ animationDuration: "10s" }}
                />
                formcraft-ai-production.vercel.app/workspace
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                ● Live
              </div>
            </div>

            {/* Dynamic Content Display */}
            <div className="p-5 md:p-7 min-h-85 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeTab === "analytics" && (
                  <motion.div
                    key="analytics"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                  >
                    <div className="p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                          Performance Index
                        </span>
                        <div className="flex items-center gap-2.5 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                          <div className="p-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-bold text-slate-900 dark:text-white">
                              Active Form Route
                            </h4>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                              /f/survey-ai-v2
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="text-center py-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                          Efficiency Score
                        </span>
                        <div className="text-3xl font-black text-slate-900 dark:text-white">
                          98
                          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                            /100
                          </span>
                        </div>
                        <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Optimal State
                        </p>
                      </div>

                      <div className="w-full py-2.5 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-[11px] font-bold tracking-wider uppercase text-center transition-all cursor-pointer shadow-md shadow-purple-500/20 flex items-center justify-center gap-1.5">
                        Deploy New Schema{" "}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-4 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                            Telemetry Metrics
                          </span>
                          <span className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />{" "}
                            Live Sync
                          </span>
                        </div>

                        <div className="space-y-3 pt-1">
                          {[
                            {
                              label: "Gemini Schema Synthesis",
                              value: "99.4%",
                              width: "99%",
                              color: "bg-purple-500",
                            },
                            {
                              label: "Submission Throughput",
                              value: "92%",
                              width: "92%",
                              color: "bg-blue-500",
                            },
                            {
                              label: "AI Sentiment Accuracy",
                              value: "95%",
                              width: "95%",
                              color: "bg-emerald-500",
                            },
                            {
                              label: "Prisma & Neon DB Speed",
                              value: "98%",
                              width: "98%",
                              color: "bg-indigo-500",
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                                <span>{item.label}</span>
                                <span className="text-purple-600 dark:text-purple-400 font-mono">
                                  {item.value}
                                </span>
                              </div>
                              <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: item.width }}
                                  transition={{
                                    duration: 0.7,
                                    delay: idx * 0.1,
                                  }}
                                  className={`h-full ${item.color} rounded-full`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2.5 text-center">
                        <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                          <Users className="w-3.5 h-3.5 mx-auto text-purple-500 mb-1" />
                          <span className="text-[11px] font-bold text-slate-900 dark:text-white block">
                            Clerk Auth
                          </span>
                          <span className="text-[9px] text-slate-500 dark:text-slate-400">
                            Secured
                          </span>
                        </div>
                        <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                          <Zap className="w-3.5 h-3.5 mx-auto text-blue-500 mb-1" />
                          <span className="text-[11px] font-bold text-slate-900 dark:text-white block">
                            Gemini AI
                          </span>
                          <span className="text-[9px] text-slate-500 dark:text-slate-400">
                            Active SDK
                          </span>
                        </div>
                        <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                          <ShieldCheck className="w-3.5 h-3.5 mx-auto text-emerald-500 mb-1" />
                          <span className="text-[11px] font-bold text-slate-900 dark:text-white block">
                            Stripe Hook
                          </span>
                          <span className="text-[9px] text-slate-500 dark:text-slate-400">
                            Verified
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "schema" && (
                  <motion.div
                    key="schema"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-6 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                        ⚡ AI Generated Zod & Prisma Model Preview
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono bg-purple-500/10 px-2 py-0.5 rounded">
                        Next.js 15
                      </span>
                    </div>
                    <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                      {`model FormSubmission {
  id        String   @id @default(cuid())
  formId    String
  userId    String
  data      Json
  sentiment String   @default("POSITIVE")
  createdAt DateTime @default(now())
}`}
                    </pre>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      Natural language prompts are instantly converted into
                      bulletproof relational models via Google Gemini SDK.
                    </p>
                  </motion.div>
                )}

                {activeTab === "monetization" && (
                  <motion.div
                    key="monetization"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  >
                    <div className="p-6 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 dark:text-emerald-400">
                        Subscription Status
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Pro Tier Active ($29/mo)
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Powered by verified Stripe Checkout sessions and
                        automated webhook lifecycle management.
                      </p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2.5">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400">
                        Security Guard
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Clerk Middleware Active
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Fine-grained route protection with JWT validation and
                        seamless OAuth sign-in integration.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
